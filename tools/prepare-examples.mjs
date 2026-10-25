import {mkdir, writeFile} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {resolve} from 'node:path';
await mkdir('examples/audio',{recursive:true});
const rate=22050, duration=8, count=rate*duration;
for (const [name,frequency] of [['pulse',220],['chime',330]]) {
  const wav=Buffer.alloc(44+count*2);
  wav.write('RIFF');wav.writeUInt32LE(wav.length-8,4);wav.write('WAVEfmt ',8);
  wav.writeUInt32LE(16,16);wav.writeUInt16LE(1,20);wav.writeUInt16LE(1,22);
  wav.writeUInt32LE(rate,24);wav.writeUInt32LE(rate*2,28);wav.writeUInt16LE(2,32);wav.writeUInt16LE(16,34);
  wav.write('data',36);wav.writeUInt32LE(count*2,40);
  for(let i=0;i<count;i++) {
    const t=i/rate, fade=Math.min(1,t/.04,(duration-t)/.1);
    const envelope=name==='pulse'?.3+.7*Math.sin(Math.PI*t*2)**2:Math.exp(-3*(t%1));
    const sample=.13*fade*envelope*(Math.sin(2*Math.PI*frequency*t)+.3*Math.sin(2*Math.PI*frequency*2*t));
    wav.writeInt16LE(Math.round(32767*sample),44+2*i);
  }
  await writeFile('examples/audio/'+name+'.wav',wav);
}
await writeFile('examples/tracks.json',JSON.stringify([
 {title:'Pulse',url:'./audio/pulse.wav',category:'Synthetic'},
 {title:'Chime',url:'./audio/chime.wav',category:'Synthetic'}
],null,2)+'\n');
const result=spawnSync(process.execPath,[resolve('dist/analyze.js'),'tracks.json','tracks-enriched.json'],{cwd:'examples',stdio:'inherit'});
if(result.status!==0)process.exit(result.status??1);
