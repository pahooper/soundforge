import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import decode from '@audio/decode';
import {analyzeAudio} from '../tools/analyze.ts';
import {frameAt,waveOffset} from '../src/visualization.ts';

function assertDynamicSpectrum(title:string,frames:number[][]){
  const active=frames.filter(f=>f.reduce((a,b)=>a+b,0)>150);
  assert.ok(active.length>=20,`${title}: expected at least 20 active frames, got ${active.length}`);
  const normalized=active.map(f=>{const total=f.reduce((a,b)=>a+b,0);return f.map(v=>v/total)});
  const mean=normalized[0].map((_,i)=>normalized.reduce((a,f)=>a+f[i],0)/normalized.length);
  const variation=normalized.reduce((a,f)=>a+f.reduce((s,v,i)=>s+Math.abs(v-mean[i]),0),0)/normalized.length;
  assert.ok(variation>0.35,`${title} has insufficient spectral shape variation: ${variation}`);

  const peakBands=new Set(active.map(f=>f.indexOf(Math.max(...f))));
  assert.ok(peakBands.size>=5,`${title} peak band is pinned to too few bands (${[...peakBands].join(',')})`);
}

test('demo audio changes spectral shape and wave geometry rather than only pulsing a fixed profile',()=>{
  const tracks=JSON.parse(readFileSync('examples/tracks-enriched.json','utf8'));
  for(const track of tracks){
    assert.equal(track.visualization.bands,36);
    assert.equal(track.visualization.interval,0.05);
    assertDynamicSpectrum(track.title,track.visualization.frames);

    // Verify Wave geometry changes normalized horizontal shape across playback time (not just vertical amplitude scaling)
    const sampleTimes=[0.85,1.35,1.95,2.65,3.45,4.25];
    const waveShapes=sampleTimes.map(t=>{
      const f=frameAt(track.visualization,t);
      const pts=Array.from({length:19},(_,k)=>waveOffset(f,(k+1)/20,18));
      const norm=Math.sqrt(pts.reduce((s,v)=>s+v*v,0))||1;
      return pts.map(v=>v/norm);
    });
    let shapeDiff=0;
    for(let i=1;i<waveShapes.length;i++){
      shapeDiff+=waveShapes[i].reduce((s,v,idx)=>s+Math.abs(v-waveShapes[i-1][idx]),0);
    }
    assert.ok(shapeDiff>1.5,`${track.title} wave geometry does not reshape across time: ${shapeDiff}`);
  }
});

test('all real music options in assets/music-options produce varied 36-band spectra without DC pinning',async()=>{
  const manifest=JSON.parse(readFileSync('assets/music-options/manifest.json','utf8'));
  for(const option of manifest){
    const decoded=await decode(new Uint8Array(readFileSync(`assets/music-options/${option.file}`)));
    // Analyze a 12-second musical window starting at 5s
    const sr=decoded.sampleRate;
    const start=Math.round(sr*5);
    const count=Math.min(Math.round(sr*12),decoded.channelData[0].length-start);
    const slice=decoded.channelData.map((ch:Float32Array)=>ch.subarray(start,start+count));
    const vis=analyzeAudio(slice,sr);
    assert.equal(vis.bands,36);
    assert.equal(vis.interval,0.05);
    assertDynamicSpectrum(option.title,vis.frames);
  }
});
