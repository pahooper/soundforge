import {mkdir,writeFile,readFile,rm} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {resolve} from 'node:path';
import decode from '@audio/decode';

// Actual piano performance, not synthetic oscillator audio.
// Recording: Foil Fencer2 (2007), public-domain mark on Wikimedia Commons.
const decoded=await decode(new Uint8Array(await readFile('public/maple-leaf-rag.ogg')));
const rate=decoded.sampleRate,duration=8,count=Math.round(rate*duration);
await mkdir('examples/audio',{recursive:true});
for(const [name,start] of [['opening',0],['second-passage',20]]){
  const offset=Math.round(start*rate);
  if(decoded.channelData[0].length<offset+count)throw Error('Music excerpt exceeds source recording');
  const wav=Buffer.alloc(44+count*2);
  wav.write('RIFF');wav.writeUInt32LE(wav.length-8,4);wav.write('WAVEfmt ',8);
  wav.writeUInt32LE(16,16);wav.writeUInt16LE(1,20);wav.writeUInt16LE(1,22);
  wav.writeUInt32LE(rate,24);wav.writeUInt32LE(rate*2,28);wav.writeUInt16LE(2,32);wav.writeUInt16LE(16,34);
  wav.write('data',36);wav.writeUInt32LE(count*2,40);
  for(let i=0;i<count;i++){
    const sample=decoded.channelData.reduce((sum,channel)=>sum+channel[offset+i],0)/decoded.channelData.length;
    const fade=Math.min(1,i/(rate*.015),(count-1-i)/(rate*.03));
    wav.writeInt16LE(Math.round(Math.max(-1,Math.min(1,sample*fade))*32767),44+i*2);
  }
  await writeFile('examples/audio/'+name+'.wav',wav);
}
for(const name of ['pulse.wav','chime.wav'])await rm('examples/audio/'+name,{force:true});
await writeFile('examples/audio/NOTICE.md','# Example music\n\nScott Joplin — Maple Leaf Rag. Piano performance by Foil Fencer2, recorded 2007. Wikimedia Commons identifies the recording as free of known copyright restrictions, including related and neighboring rights (Public Domain Mark 1.0).\n\nSource: https://commons.wikimedia.org/wiki/File:Maple_Leaf_Rag.ogg\n\nThese mono PCM WAV excerpts cover 0–8 seconds and 20–28 seconds of the source recording, with brief edge fades. Audio is public domain; it is not claimed as original SoundForge music. Code remains MIT-licensed.\n');
await writeFile('examples/tracks.json',JSON.stringify([
 {title:'Maple Leaf Rag — Opening',url:'./audio/opening.wav',category:'Ragtime'},
 {title:'Maple Leaf Rag — Second passage',url:'./audio/second-passage.wav',category:'Ragtime'}
],null,2)+'\n');
const result=spawnSync(process.execPath,[resolve('dist/analyze.js'),'tracks.json','tracks-enriched.json'],{cwd:'examples',stdio:'inherit'});
if(result.status!==0)process.exit(result.status??1);
