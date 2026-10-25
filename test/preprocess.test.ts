import {test} from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {mkdtempSync,writeFileSync,readFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
function run(tracks:unknown){const dir=mkdtempSync(join(tmpdir(),'player-test-'));const input=join(dir,'in.json'),out=join(dir,'out.json');writeFileSync(input,JSON.stringify(tracks));const result=spawnSync(process.execPath,['--experimental-strip-types','tools/analyze.ts',input,out],{encoding:'utf8'});return {result,out,cleanup:()=>rmSync(dir,{recursive:true,force:true})}}
test('preprocessing preserves metadata and produces nonzero bounded frames',()=>{const {result,out,cleanup}=run([{title:'Fixture',url:'public/fixture.mp3',category:'test',custom:{id:7}}]);try{assert.equal(result.status,0,result.stderr);const [t]=JSON.parse(readFileSync(out,'utf8'));assert.equal(t.category,'test');assert.deepEqual(t.custom,{id:7});assert.equal(t.visualization.bands,8);assert.ok(t.visualization.frames.length>70);assert.ok(t.visualization.frames.every((f:number[])=>f.length===8&&f.every(v=>Number.isInteger(v)&&v>=0&&v<=255)));assert.ok(t.visualization.frames.some((f:number[])=>f.some(v=>v>0)))}finally{cleanup()}});
for(const [name,tracks,message] of [['missing file',[{title:'Missing',url:'/does-not-exist.mp3'}],/Missing/],['unsupported file',[{title:'Unsupported',url:'package.json'}],/Unsupported format/]] as const){test(name+' is reported and retained',()=>{const {result,out,cleanup}=run(tracks);try{assert.equal(result.status,2);assert.match(result.stderr,message);assert.equal(JSON.parse(readFileSync(out,'utf8')).length,1)}finally{cleanup()}})}
test('invalid catalog shape fails clearly',()=>{const {result,cleanup}=run({tracks:[]});try{assert.notEqual(result.status,0);assert.match(result.stderr,/Expected an array/)}finally{cleanup()}});
test('empty catalog is valid',()=>{const {result,out,cleanup}=run([]);try{assert.equal(result.status,0);assert.deepEqual(JSON.parse(readFileSync(out,'utf8')),[])}finally{cleanup()}});
for(const file of ['audio.wav','audio.flac','vorbis.ogg','opus.ogg','audio.m4a'])test('preprocesses '+file,()=>{const {result,out,cleanup}=run([{title:file,url:'test/fixtures/'+file}]);try{assert.equal(result.status,0,result.stderr);const v=JSON.parse(readFileSync(out,'utf8'))[0].visualization;assert.equal(v.bands,8);assert.ok(v.frames.length>=19);assert.ok(v.frames.some((f:number[])=>f.some(x=>x>0)))}finally{cleanup()}});
test('downloads and preprocesses HTTP audio without any CORS headers',async()=>{
 const {createServer}=await import('node:http');const {spawn}=await import('node:child_process');
 const audio=readFileSync('public/fixture.mp3');
 const server=createServer((_req,res)=>{res.writeHead(200,{'Content-Type':'audio/mpeg'});res.end(audio)});
 await new Promise<void>(r=>server.listen(0,'127.0.0.1',r));const address=server.address() as {port:number};
 const dir=mkdtempSync(join(tmpdir(),'player-http-'));const input=join(dir,'in.json'),output=join(dir,'out.json');
 try{writeFileSync(input,JSON.stringify([{title:'HTTP no CORS',url:`http://127.0.0.1:${address.port}/audio.mp3`}])) ;
 const child=spawn(process.execPath,['--experimental-strip-types','tools/analyze.ts',input,output]);let stderr='';child.stderr.on('data',c=>stderr+=c);child.stdout.resume();const code=await new Promise<number|null>((resolve,reject)=>{child.on('error',reject);child.on('close',resolve)});assert.equal(code,0,stderr);assert.ok(JSON.parse(readFileSync(output,'utf8'))[0].visualization.frames.length>0);
 }finally{server.closeAllConnections();await new Promise<void>(r=>server.close(()=>r()));rmSync(dir,{recursive:true,force:true})}
});
