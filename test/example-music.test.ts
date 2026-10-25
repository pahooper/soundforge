import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

test('demo audio changes spectral shape rather than only pulsing a fixed-pitch profile',()=>{
  const tracks=JSON.parse(readFileSync('examples/tracks-enriched.json','utf8'));
  for(const track of tracks){
    const frames:number[][]=track.visualization.frames.filter((f:number[])=>f.reduce((a,b)=>a+b,0)>100);
    const normalized=frames.map(f=>{const total=f.reduce((a,b)=>a+b,0);return f.map(v=>v/total)});
    const mean=normalized[0].map((_:number,i:number)=>normalized.reduce((a:number,f:number[])=>a+f[i],0)/normalized.length);
    const variation=normalized.reduce((a:number,f:number[])=>a+f.reduce((s,v,i)=>s+Math.abs(v-mean[i]),0),0)/normalized.length;
    assert.ok(variation>.15,track.title+' has a nearly fixed spectral profile: '+variation);
  }
});
