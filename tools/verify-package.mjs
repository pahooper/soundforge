import {spawnSync} from 'node:child_process';
import {mkdtempSync,writeFileSync,readFileSync,existsSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';import {join,resolve} from 'node:path';import assert from 'node:assert/strict';
const root=process.cwd();const temp=mkdtempSync(join(tmpdir(),'audio-package-'));
function run(cmd,args,options={}){const r=spawnSync(cmd,args,{cwd:temp,encoding:'utf8',timeout:120000,...options});assert.equal(r.status,0,`${cmd} ${args.join(' ')}\n${r.stderr}\n${r.stdout}`);return r.stdout}
try {
 const packed=JSON.parse(run('npm',['pack','--ignore-scripts','--json','--pack-destination',temp],{cwd:root}))[0];
 const files=packed.files.map(f=>f.path);
 assert.ok(!files.some(p=>p.startsWith('public/')||p.startsWith('test/')),'historical recordings and test fixtures must not ship');
 for(const path of ['dist/index.js','dist/audio-player.js','dist/audio-browser.js','dist/audio-preprocessor.js','dist/analyze.js','types/index.d.ts','LICENSE','THIRD_PARTY_NOTICES.md'])assert.ok(files.includes(path),path);
 assert.ok(files.every(p=>p==='package.json'||p==='README.md'||p==='RELEASE.md'||p==='LICENSE'||p==='THIRD_PARTY_NOTICES.md'||p.startsWith('dist/')||p.startsWith('types/')||p.startsWith('examples/')||p.startsWith('docs/')||p==='CHANGELOG.md'||p==='CONTRIBUTING.md'));
 writeFileSync(join(temp,'package.json'),JSON.stringify({name:'audio-package-consumer',private:true,type:'module'}));
 const tarball=join(temp,packed.filename);
 run('npm',['install','--ignore-scripts','--no-audit','--no-fund',tarball]);
 const installed=join(temp,'node_modules/@pahooper/soundforge');
 assert.ok(!existsSync(join(temp,'node_modules/svelte')),'consumer must not need Svelte');
 assert.ok(!existsSync(join(temp,'node_modules/playwright')),'consumer must not receive Playwright');
 run(process.execPath,['--input-type=module','-e',`const tags=[];globalThis.HTMLElement=class{};globalThis.customElements={define(name){tags.push(name)},get(){return undefined}};await import('@pahooper/soundforge');if(!tags.includes('compact-audio-player')||!tags.includes('compact-audio-browser')||!tags.includes('compact-audio-preprocessor'))throw Error('components did not register: '+tags);`]);
 const p=JSON.parse(readFileSync(join(installed,'package.json'),'utf8'));
 for(const spec of Object.keys(p.exports).filter(s=>s!=='./package.json')){const name=spec==='.'?p.name:p.name+spec.slice(1);run(process.execPath,['--input-type=module','-e',`console.log(import.meta.resolve(${JSON.stringify(name)}))`]);}
 run(process.execPath,['--input-type=module','-e',`import {makeEntry,assignTrack} from '@pahooper/soundforge/helpers'; import {connectAudioBrowser} from '@pahooper/soundforge/connect';const a=makeEntry({title:'a',url:'a.mp3'});if(assignTrack({base:a,layers:[]},{title:'b',url:'b.mp3'},'layer').base.id!==a.id)throw Error('base changed');if(typeof connectAudioBrowser!=='function')throw Error('missing connect');`]);
 writeFileSync(join(temp,'consumer.ts'),`import '@pahooper/soundforge/player';import '@pahooper/soundforge/browser';import '@pahooper/soundforge/preprocessor';import {makeEntry} from '@pahooper/soundforge/helpers';import {connectAudioBrowser} from '@pahooper/soundforge/connect';import type {Track} from '@pahooper/soundforge';const t:Track={title:'Test',url:'test.mp3'};const p=document.createElement('compact-audio-player');const b=document.createElement('compact-audio-browser');const pre=document.createElement('compact-audio-preprocessor');p.track=t;pre.catalog=[t];p.mix={base:makeEntry(t),layers:[]};p.addEventListener('trackchange',e=>console.log(e.detail.track.title));b.addEventListener('modechange',e=>{p.playbackMode=e.detail.mode});pre.addEventListener('catalogenriched',e=>console.log(e.detail.catalog.length));connectAudioBrowser(b,p);`);
 run(process.execPath,[join(root,'node_modules/typescript/bin/tsc'),'--strict','--noEmit','--module','NodeNext','--moduleResolution','NodeNext','--target','ES2022','--lib','ES2022,DOM',join(temp,'consumer.ts')]);
 const cli=join(temp,'node_modules/.bin/soundforge-analyze');
 assert.match(run(cli,['--help']),/Usage:/);assert.equal(run(cli,['--version']).trim(),p.version);
 const fixtures=['public/fixture.mp3','test/fixtures/audio.wav','test/fixtures/audio.flac','test/fixtures/vorbis.ogg','test/fixtures/opus.ogg','test/fixtures/audio.m4a'];
 writeFileSync(join(temp,'input.json'),JSON.stringify(fixtures.map((f,i)=>({title:`fixture-${i}`,url:resolve(root,f),category:'keep-me'}))));
 run(cli,['input.json','output.json']);
 const tracks=JSON.parse(readFileSync(join(temp,'output.json'),'utf8'));assert.equal(tracks.length,6);for(const t of tracks){assert.equal(t.category,'keep-me');assert.ok(t.duration>0);assert.ok(t.visualization.frames.length>0)}
 const before=readFileSync(join(temp,'input.json'),'utf8');const overwrite=spawnSync(cli,['input.json','input.json'],{cwd:temp,encoding:'utf8'});assert.equal(overwrite.status,1);assert.equal(readFileSync(join(temp,'input.json'),'utf8'),before);
 // A real consumer bundler resolves just the installed browser entry points.
 writeFileSync(join(temp,'index.html'),'<script type="module" src="/consumer.js"></script><compact-audio-player></compact-audio-player>');
 writeFileSync(join(temp,'consumer.js'),"import '@pahooper/soundforge/player';import '@pahooper/soundforge/browser';import {connectAudioBrowser} from '@pahooper/soundforge/connect';console.log(connectAudioBrowser);");
 run(process.execPath,[join(root,'node_modules/vite/bin/vite.js'),'build',temp,'--outDir',join(temp,'web-dist')],{cwd:temp});
 assert.ok(existsSync(join(temp,'web-dist/index.html')));
 console.log(JSON.stringify({status:'passed',package:packed.filename,packedBytes:packed.size,unpackedBytes:packed.unpackedSize,files:files.length,checks:['clean tarball installation','entry point resolution','SSR-safe helpers/connect','strict TypeScript consumer','installed CLI help/version','six decoder fixtures','input overwrite protection','consumer browser bundle']},null,2));
}finally {rmSync(temp,{recursive:true,force:true})}
