import type { Visualization } from './types.ts';
export function frameAt(data:Visualization|undefined,time:number):number[]{
 if(!data || data.version!==1 || !(data.interval>0) || !data.frames.length)return [];
 const position=Math.max(0,time)/data.interval;
 const index=Math.min(Math.floor(position),data.frames.length-1);
 const a=data.frames[index], b=data.frames[Math.min(index+1,data.frames.length-1)];
 const blend=Math.min(1,position-index);
 return a.map((v,i)=>Math.max(0,Math.min(1,(v+( (b[i]??v)-v)*blend)/255)));
}
export function nextIndex(index:number,length:number,direction:number):number {
 return Math.max(0,Math.min(length-1,index+direction));
}
/** Shape driven by the current frequency frame, not a scrolling clock. */
export function waveOffset(frame:number[],position:number,layer:number):number {
 if(!frame.length)return 0;
 const bands=frame.map(v=>Math.max(0,Math.min(1,v)));
 const energy=bands.reduce((a,b)=>a+b,0)/bands.length;
 if(energy===0||position<=0||position>=1)return 0;
 const envelope=Math.sin(Math.PI*position)**0.7;
 let shape=0;
 for(let i=0;i<bands.length;i++){
  const amplitude=Math.sqrt(bands[i]);
  shape+=Math.sin(position*Math.PI*(2+i*.65)+(layer-13.5)*.045*(1+amplitude))*amplitude/(1+i*.5);
 }
 return envelope*(shape*65+(layer-13.5)*Math.sqrt(energy)*1.4);
}
