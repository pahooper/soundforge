import assert from 'node:assert/strict';
import {spawn,spawnSync} from 'node:child_process';
import {mkdtemp,readFile,writeFile,rm} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {tmpdir} from 'node:os';

const root=process.cwd(),temp=await mkdtemp(join(tmpdir(),'soundforge-docs-'));
let server;
function run(command,args,cwd=temp){
  const r=spawnSync(command,args,{cwd,encoding:'utf8',timeout:120000});
  assert.equal(r.status,0,r.stdout+'\n'+r.stderr);return r.stdout;
}
try {
  const [packed]=JSON.parse(run('npm',['pack','--ignore-scripts','--json','--pack-destination',temp],root));
  const paths=packed.files.map(f=>f.path);
  for(const required of ['examples/index.html','examples/setup.mjs','examples/serve.mjs','examples/audio/opening.wav','examples/tracks.json','examples/tracks-enriched.json','docs/preprocessing.md','docs/reference.md','docs/troubleshooting.md'])assert.ok(paths.includes(required),required);
  assert.ok(!paths.some(p=>p.startsWith('public/')||p.startsWith('test/')||p.includes('.openai')||p.includes('superpowers')));
  await writeFile(join(temp,'package.json'),JSON.stringify({name:'soundforge-docs-consumer',private:true,type:'module'}));
  run('npm',['install','--ignore-scripts','--no-audit','--no-fund',join(temp,packed.filename)]);
  const installed=join(temp,'node_modules/@pahooper/soundforge');
  const demo=join(temp,'soundforge-demo');
  run(process.execPath,[join(installed,'examples/setup.mjs'),'soundforge-demo']);
  const again=spawnSync(process.execPath,[join(installed,'examples/setup.mjs'),'soundforge-demo'],{cwd:temp,encoding:'utf8'});
  assert.notEqual(again.status,0);assert.match(again.stderr,/will not be overwritten/);
  const before=await readFile(join(demo,'tracks-enriched.json'),'utf8');
  const output=run(process.execPath,[join(installed,'dist/analyze.js'),'tracks.json','tracks-enriched.json'],demo);
  assert.match(output,/0 unsupported or failed/);
  assert.equal(await readFile(join(demo,'tracks-enriched.json'),'utf8'),before);
  const tracks=JSON.parse(before);assert.equal(tracks.length,2);
  for(const track of tracks){assert.equal(track.duration,8);assert.equal(track.visualization.frames.length,80);assert.ok(track.visualization.frames.every(f=>f.length===8&&f.every(v=>Number.isInteger(v)&&v>=0&&v<=255)));assert.ok(track.visualization.frames.some(f=>f.some(v=>v>0)));}
  const p=JSON.parse(await readFile(join(installed,'package.json'),'utf8'));
  assert.equal(run(process.execPath,[join(installed,'dist/analyze.js'),'--version']).trim(),p.version);
  server=spawn(process.execPath,[join(demo,'serve.mjs'),demo],{cwd:temp,env:{...process.env,PORT:'0'},stdio:['ignore','pipe','pipe']});
  const url=await new Promise((resolveReady,reject)=>{
    const timer=setTimeout(()=>reject(Error('Example server did not become ready')),10000);
    server.once('error',e=>{clearTimeout(timer);reject(e)});
    server.stdout.on('data',chunk=>{const match=chunk.toString().match(/http:\/\/127\.0\.0\.1:\d+/);if(match){clearTimeout(timer);resolveReady(match[0]);}});
    server.once('exit',code=>{clearTimeout(timer);reject(Error('Server exited '+code))});
  });
  const page=await fetch(url);assert.equal(page.status,200);
  const html=await page.text();assert.match(html,/compact-audio-browser/);assert.match(html,/compact-audio-player/);
  for(const asset of ['lib/audio-player.js','lib/audio-browser.js','lib/connect.js','tracks.json','tracks-enriched.json','audio/opening.wav','audio/second-passage.wav']){
    const response=await fetch(url+'/'+asset);assert.equal(response.status,200,asset);
    if(asset.endsWith('.js'))assert.match(response.headers.get('content-type'),/javascript/);
  }
  const range=await fetch(url+'/audio/opening.wav',{headers:{Range:'bytes=0-43'}});
  assert.equal(range.status,206);assert.equal((await range.arrayBuffer()).byteLength,44);assert.match(range.headers.get('content-range'),/^bytes 0-43\//);
  assert.equal((await fetch(url+'/does-not-exist')).status,404);
  for(const file of ['README.md','docs/preprocessing.md','docs/recipes.md','docs/reference.md','docs/troubleshooting.md']){
    const text=await readFile(resolve(root,file),'utf8');
    assert.ok(!text.includes('your-host.example'),'No placeholder audio host in '+file);
    for(const match of text.matchAll(/\]\(([^)]+\.md)(?:#[^)]*)?\)/g)){
      if(!/^https?:/.test(match[1]))await readFile(resolve(root,file,'..',match[1]));
    }
  }
  console.log('Documentation consumer checks passed: installed setup, no overwrite, reproducible preprocessing, CLI version, complete assets, HTTP and audio ranges, documentation links.');
} finally {
  server?.kill();
  await rm(temp,{recursive:true,force:true});
}
