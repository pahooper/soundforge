// Static preprocessor page: loads a catalog, renders <audio> rows, analyzes in-browser, exports enriched JSON.
const {chromium}=require('playwright');
const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');

const root=path.resolve(__dirname,'..');
const wav=fs.readFileSync(path.join(root,'test/fixtures/audio.wav'));
function listen(handler){return new Promise(r=>{const s=http.createServer(handler);s.listen(0,'127.0.0.1',()=>r(s))})}

(async()=>{
 let count=0;const pass=n=>{count++;console.log('PASS '+n)};
 // Server B: a different origin (different port) with and without CORS headers.
 const other=await listen((req,res)=>{
  if(req.url==='/cors.wav'){res.writeHead(200,{'Content-Type':'audio/wav','Access-Control-Allow-Origin':'*'});res.end(wav)}
  else if(req.url==='/nocors.wav'){res.writeHead(200,{'Content-Type':'audio/wav'});res.end(wav)}
  else{res.writeHead(404);res.end()}
 });
 const otherBase=`http://127.0.0.1:${other.address().port}`;
 const catalog=[
  {title:'Same origin',url:'./audio/a.wav',category:'Local',custom:{id:1}},
  {title:'Cross origin with CORS',url:`${otherBase}/cors.wav`,custom:{id:2}},
  {title:'Cross origin without CORS',url:`${otherBase}/nocors.wav`,custom:{id:3}}
 ];
 // Server A: the static page host (pure static files, no proxy).
 const site=await listen((req,res)=>{
  const pathname=req.url.split('?')[0];
  if(pathname==='/preprocess.html'){res.writeHead(200,{'Content-Type':'text/html'});res.end(fs.readFileSync(path.join(root,'examples/preprocess.html')))}
  else if(pathname==='/lib/audio-preprocessor.js'){res.writeHead(200,{'Content-Type':'text/javascript'});res.end(fs.readFileSync(path.join(root,'dist/audio-preprocessor.js')))}
  else if(pathname==='/audio/a.wav'){res.writeHead(200,{'Content-Type':'audio/wav'});res.end(wav)}
  else if(pathname==='/catalog.json'){res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify(catalog))}
  else{res.writeHead(404);res.end()}
 });
 const base=`http://127.0.0.1:${site.address().port}`;
 let browser;
 try{
  browser=await chromium.launch({headless:true,...(process.env.PLAYER_TEST_BROWSER?{executablePath:process.env.PLAYER_TEST_BROWSER,args:['--no-sandbox','--disable-gpu','--disable-software-rasterizer','--no-zygote']}:{})});
  const page=await browser.newPage({acceptDownloads:true});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(`${base}/preprocess.html?catalog=/catalog.json`);
  const pre=page.locator('compact-audio-preprocessor');
  const rows=pre.locator('.track-row');
  await page.waitForFunction(()=>document.querySelector('compact-audio-preprocessor')?.shadowRoot?.querySelectorAll('.track-row').length===3,null,{timeout:10000});
  assert.equal(await rows.count(),3);
  pass('?catalog= loads the catalog into one row per track');
  for(let i=0;i<3;i++)assert.equal(await rows.nth(i).locator('audio').count(),1,`row ${i} has an audio preview`);
  pass('each row has an <audio> preview element');
  await pre.getByRole('button',{name:'Analyze catalog',exact:true}).click();
  await page.waitForFunction(()=>[...document.querySelector('compact-audio-preprocessor').shadowRoot.querySelectorAll('.track-row')].every(r=>['ok','blocked','error'].includes(r.dataset.state)),null,{timeout:20000});
  const states=await rows.evaluateAll(rs=>rs.map(r=>r.dataset.state));
  assert.deepEqual(states,['ok','ok','blocked']);
  pass('same-origin and CORS tracks analyze; no-CORS track is classified blocked');
  assert.match((await rows.nth(2).textContent()).toLowerCase(),/attach/);
  pass('blocked row tells the user to attach the file');
  const [download]=await Promise.all([page.waitForEvent('download'),pre.getByRole('button',{name:'Download tracks-enriched.json',exact:true}).click()]);
  assert.equal(download.suggestedFilename(),'tracks-enriched.json');
  const out=JSON.parse(fs.readFileSync(await download.path(),'utf8'));
  assert.equal(out.length,3);
  assert.deepEqual(out.map(t=>t.custom.id),[1,2,3]);
  assert.equal(out[0].category,'Local');
  assert.equal(out[0].visualization.bands,36);assert.equal(out[1].visualization.bands,36);
  assert.ok(out[0].duration>0);
  assert.equal(out[2].visualization,undefined,'blocked track retained unchanged');
  pass('downloaded JSON preserves fields, enriches analyzed tracks, retains failed track');
  assert.deepEqual(errors,[]);pass('no uncaught page errors');
  console.log(`${count} preprocess-page checks passed`);
 }finally{
  await browser?.close();
  for(const s of [site,other]){s.closeAllConnections();await new Promise(r=>s.close(r))}
 }
 process.exit(0);
})().catch(e=>{console.error(e);process.exit(1)});
