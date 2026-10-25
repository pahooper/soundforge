// npm i -D playwright; npx playwright install chromium; npm run test:browser
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {spawn}=require('node:child_process');
(async()=>{
 const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','--host','127.0.0.1','--port','5173'],{stdio:'ignore'});
 let browser;const errors=[];let count=0;
 const pass=name=>{count++;console.log('PASS '+name)};
 try{
 await new Promise(r=>setTimeout(r,1800));
 browser=await chromium.launch({headless:true,...(process.env.PLAYER_TEST_BROWSER?{executablePath:process.env.PLAYER_TEST_BROWSER,args:['--no-sandbox','--disable-gpu','--disable-software-rasterizer','--no-zygote']}:{})});
 const page=await browser.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto('http://127.0.0.1:5173');
 await page.evaluate(async()=>{await customElements.whenDefined('compact-audio-player');const t=await(await fetch('/tracks.json')).json();t.forEach(x=>x.url='/fixture.mp3');document.querySelector('#player').playlist=t;document.querySelector('#light').playlist=[]});
 const player=page.locator('#player'),audio=player.locator('audio');
 await page.waitForFunction(()=>document.querySelector('#player').shadowRoot.querySelector('audio').duration>0);
 assert.equal((await player.boundingBox()).height,480);pass('card dimensions');
 await audio.evaluate(a=>a.pause());await player.getByRole('button',{name:'Play',exact:true}).click();await page.waitForTimeout(200);assert.equal(await audio.evaluate(a=>a.paused),false);pass('play');
 await player.getByRole('button',{name:'Pause',exact:true}).click();assert.equal(await audio.evaluate(a=>a.paused),true);pass('pause');
 await player.getByRole('slider',{name:'Seek',exact:true}).fill('4');assert.ok(Math.abs(await audio.evaluate(a=>a.currentTime)-4)<.2);pass('seek');
 await player.getByRole('slider',{name:'Volume',exact:true}).fill('0.3');assert.ok(Math.abs(await audio.evaluate(a=>a.volume)-.3)<.01);await player.getByRole('button',{name:'Mute',exact:true}).click();assert.equal(await audio.evaluate(a=>a.muted),true);await player.getByRole('button',{name:'Unmute',exact:true}).click();assert.ok(Math.abs(await audio.evaluate(a=>a.volume)-.3)<.01);pass('volume and mute restoration');
 const before=await audio.evaluate(a=>a.src);await player.getByRole('button',{name:'Wave',exact:true}).click();assert.equal(await audio.evaluate(a=>a.src),before);pass('visualization switch preserves source');
 await player.getByRole('button',{name:'Next track'}).click();await page.waitForTimeout(100);assert.equal(await player.locator('h2').textContent(),'Second Track');assert.equal(await player.getByRole('button',{name:'Next track'}).isDisabled(),true);await player.getByRole('button',{name:'Previous track'}).click();pass('next and previous');
 await audio.evaluate(a=>a.dispatchEvent(new Event('ended')));await page.waitForTimeout(100);assert.equal(await player.locator('h2').textContent(),'Second Track');pass('automatic advance');
 await audio.evaluate(a=>{a.pause();a.dispatchEvent(new Event('ended'))});assert.equal(await audio.evaluate(a=>a.paused),true);pass('queue ends without wrapping');
 await page.evaluate(()=>{const p=document.querySelector('#player');p.playlist=[];p.track={title:'No visualization',url:'/fixture.mp3'}});await page.waitForTimeout(150);assert.equal(await player.getByRole('button',{name:'Next track'}).count(),0);assert.equal(await player.locator('h2').textContent(),'No visualization');pass('single track without visualization');
 await audio.evaluate(a=>a.dispatchEvent(new Event('waiting')));await page.waitForTimeout(50);assert.match(await player.getByRole('status').textContent(),/Loading/);await audio.evaluate(a=>a.dispatchEvent(new Event('playing')));await page.waitForTimeout(50);assert.equal(await player.getByRole('status').textContent(),'');pass('buffering status and recovery events');
 await page.route('https://audio.test/track.mp3',r=>r.fulfill({status:200,contentType:'audio/mpeg',body:fs.readFileSync('public/fixture.mp3')}));await page.evaluate(()=>document.querySelector('#player').track={title:'No CORS',url:'https://audio.test/track.mp3'});await page.waitForTimeout(400);assert.equal(await audio.evaluate(a=>a.crossOrigin),null);assert.equal(await audio.evaluate(a=>a.paused),false);assert.ok(await audio.evaluate(a=>a.currentTime)>0);pass('cross-origin playback without CORS headers');
 await page.route('**/failed.mp3',r=>r.fulfill({status:404,body:'missing'}));await page.evaluate(()=>document.querySelector('#player').track={title:'Failure',url:'/failed.mp3'});await page.waitForTimeout(300);assert.match(await player.getByRole('status').textContent(),/Unable to load/);pass('failed audio URL displays an error');
 assert.deepEqual(errors,[]);pass('no uncaught browser errors');console.log(`${count} browser checks passed`);
 }finally{await browser?.close();server.kill()}
 process.exit(0);
})().catch(e=>{console.error(e);process.exit(1)});
