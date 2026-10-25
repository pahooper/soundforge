import {test} from 'node:test';
import assert from 'node:assert/strict';
import {frameAt,nextIndex} from '../src/visualization.ts';
test('interpolates visualization by actual playback position',()=>{
 const data={version:1 as const,interval:0.1,bands:2,frames:[[0,255],[255,0]]};
 assert.deepEqual(frameAt(data,0.05),[0.5,0.5]);
 assert.deepEqual(frameAt(data,50),[1,0]);
 assert.deepEqual(frameAt(data,-1),[0,1]);
 assert.deepEqual(frameAt(undefined,0),[]);
});
test('playlist stops at both ends',()=>{assert.equal(nextIndex(2,3,1),2);assert.equal(nextIndex(0,3,-1),0);assert.equal(nextIndex(0,3,1),1)});
test('empty or invalid timing data falls back to a static graphic',()=>{assert.deepEqual(frameAt({version:1,interval:0,bands:1,frames:[[100]]},3),[]);assert.deepEqual(frameAt({version:1,interval:.1,bands:1,frames:[]},3),[])});
test('renderer amplitudes are bounded',()=>assert.deepEqual(frameAt({version:1,interval:1,bands:2,frames:[[-100,500]]},0),[0,1]));
test('single-frame data stays stable after a long seek',()=>assert.deepEqual(frameAt({version:1,interval:.1,bands:1,frames:[[255]]},100),[1]));
test('wave reshapes for different bands with the same overall energy',async()=>{
 const {waveOffset}=await import('../src/visualization.ts');
 assert.notEqual(waveOffset([1,0,0,0],.35,10),waveOffset([0,0,0,1],.35,10));
 assert.equal(waveOffset([],.5,10),0);
 assert.equal(waveOffset([0,0,0,0],.5,10),0);
 assert.equal(waveOffset([.4,.6],0,10),0);
 assert.ok(Math.abs(waveOffset([.4,.6],1,10))<1e-8);
 assert.equal(waveOffset([.4,.6],.5,10),waveOffset([.4,.6],.5,10));
});
