import {test} from 'node:test';
import assert from 'node:assert/strict';
import {barsAt,frameAt,nextIndex,stepBars,waveOffset} from '../src/visualization.ts';
import {analyzeAudio} from '../tools/analyze.ts';

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

test('wave reshapes for different bands with the same overall energy',()=>{
 assert.notEqual(waveOffset([1,0,0,0],.35,10),waveOffset([0,0,0,1],.35,10));
 assert.equal(waveOffset([],.5,10),0);
 assert.equal(waveOffset([0,0,0,0],.5,10),0);
 assert.equal(waveOffset([.4,.6],0,10),0);
 assert.ok(Math.abs(waveOffset([.4,.6],1,10))<1e-8);
 assert.equal(waveOffset([.4,.6],.5,10),waveOffset([.4,.6],.5,10));
});

test('barsAt supports empty, legacy 8-band, and native 36-band frames',()=>{
 const empty=barsAt([],36);
 assert.equal(empty.length,36);
 assert.ok(empty.every(v=>v===0.025));

 const legacy=barsAt([0,0,1,0,0,0,0,0],36);
 assert.equal(legacy.length,36);
 const legacyPeak=legacy.indexOf(Math.max(...legacy));
 assert.ok(legacyPeak>=8&&legacyPeak<=12,`expected legacy band 2 peak near index 10, got ${legacyPeak}`);

 const nativeFrame=new Array<number>(36).fill(0);
 nativeFrame[24]=1;
 const nativeBars=barsAt(nativeFrame,36);
 assert.equal(nativeBars[24],1);
 assert.ok(nativeBars[23]>0.2&&nativeBars[25]>0.2,'harmonic shoulders should support adjacent columns');
 assert.equal(nativeBars[5],0,'distant bands remain zero');
});

test('stepBars applies asymmetric attack/release smoothing and snaps on seek',()=>{
 const cur=[0,1],peaks=[0,1],holds=[0,0.18];
 stepBars(cur,peaks,holds,[1,0],0.03,false);
 assert.ok(cur[0]>0.6,'attack should respond quickly');
 assert.ok(cur[1]>0.75,'release should decay more gradually than attack');
 assert.equal(peaks[1],1,'peak hold retains cap briefly');

 stepBars(cur,peaks,holds,[0.2,0.8],0.016,true);
 assert.deepEqual(cur,[0.2,0.8],'snap immediately sets current values');
 assert.deepEqual(peaks,[0.2,0.8],'snap immediately resets peak caps');
});

test('diagnostic signals: silence, DC offset, sine octaves, sweep, two-tone, noise, and inter-frame impulse',()=>{
 const sr=44100;
 const makeSignal=(durationSec:number,fn:(t:number,i:number)=>number):Float32Array[]=>{
  const len=Math.round(sr*durationSec);
  const out=new Float32Array(len);
  for(let i=0;i<len;i++)out[i]=fn(i/sr,i);
  return [out];
 };

 // 1. Digital silence -> all zeros
 const silence=analyzeAudio(makeSignal(0.6,()=>0),sr);
 assert.equal(silence.bands,36);
 assert.equal(silence.interval,0.05);
 assert.equal(Math.max(...silence.frames.flat()),0);

 // 2. Constant DC offset + initial priming step -> all zeros
 const dc=analyzeAudio(makeSignal(0.6,(_t,i)=>i<120?0:-0.04),sr);
 assert.equal(Math.max(...dc.frames.flat()),0);

 // 3. Single sine tones across octaves -> localized peaks moving monotonically higher
 const peakBands:number[]=[];
 for(const freq of [90,220,550,1400,3500]){
  const v=analyzeAudio(makeSignal(0.5,t=>0.5*Math.sin(2*Math.PI*freq*t)),sr);
  const midFrame=v.frames[5];
  const peakIdx=midFrame.indexOf(Math.max(...midFrame));
  assert.ok(midFrame[peakIdx]>=250,`expected peak near 255, got ${midFrame[peakIdx]}`);
  const activeCount=midFrame.filter(x=>x>175).length;
  assert.ok(activeCount<=5,`sine ${freq}Hz should be localized (got ${activeCount} bands > 175)`);
  peakBands.push(peakIdx);
 }
 for(let i=1;i<peakBands.length;i++){
  assert.ok(peakBands[i]>peakBands[i-1],`expected monotonic band indices: ${peakBands.join(',')}`);
 }

 // 4. Swept sine (100Hz -> 5000Hz) -> dominant band progresses across time
 const sweep=analyzeAudio(makeSignal(1.0,t=>{
  const f=100*Math.pow(50,t/2);
  return 0.5*Math.sin(2*Math.PI*f*t);
 }),sr);
 const earlyPeak=sweep.frames[2].indexOf(Math.max(...sweep.frames[2]));
 const midSweepPeak=sweep.frames[9].indexOf(Math.max(...sweep.frames[9]));
 const latePeak=sweep.frames[16].indexOf(Math.max(...sweep.frames[16]));
 assert.ok(earlyPeak<midSweepPeak&&midSweepPeak<latePeak,`sweep peaks should advance: ${earlyPeak} -> ${midSweepPeak} -> ${latePeak}`);

 // 5. Two simultaneous tones (140Hz and 2400Hz) -> two distinct peaks separated by a zero valley
 const twoTone=analyzeAudio(makeSignal(0.5,t=>0.4*Math.sin(2*Math.PI*140*t)+0.4*Math.sin(2*Math.PI*2400*t)),sr).frames[5];
 const lowPeak=Math.max(...twoTone.slice(0,10));
 const valley=Math.max(...twoTone.slice(11,20));
 const highPeak=Math.max(...twoTone.slice(21,32));
 assert.ok(lowPeak>200&&highPeak>200,`both tones should register strongly: low=${lowPeak}, high=${highPeak}`);
 assert.equal(valley,0,`valley between separated tones should be 0, got ${valley}`);

 // 6. Broadband deterministic pseudo-random noise -> broad multi-band excitation
 let seed=123456789;
 const noise=analyzeAudio(makeSignal(0.5,()=>{
  seed=(1103515245*seed+12345)&0x7fffffff;
  return (seed/0x3fffffff)-1;
 }),sr).frames[5];
 assert.ok(noise.filter(x=>x>40).length>=20,'broadband noise should excite at least 20 bands');

 // 7. Short impulse at t=0.235s (between 100ms boundaries) -> captured by overlapping 20fps windows
 const impulse=analyzeAudio(makeSignal(0.5,t=>Math.abs(t-0.235)<0.004?0.8*Math.sin(2*Math.PI*1000*t):0),sr);
 assert.equal(Math.max(...impulse.frames[0]),0);
 assert.ok(Math.max(...impulse.frames[4])>200,'impulse at 0.235s should be captured near frame 4 (t=0.20..0.25s)');
 assert.equal(Math.max(...impulse.frames[8]),0);
});
