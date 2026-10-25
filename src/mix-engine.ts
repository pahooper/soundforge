import {slotEntries} from './mix.ts';
import type {Mix,MixEntry} from './mix.ts';
export class MixEngine {
 nodes=new Map<string,HTMLAudioElement>();mix:Mix={base:null,layers:[]};repeat=false;playing=false;error='';generation=0;requests=new WeakMap<HTMLAudioElement,object>();
 create:()=>HTMLAudioElement;notify:(s:any)=>void;
 constructor(create:()=>HTMLAudioElement,notify:(s:any)=>void){this.create=create;this.notify=notify}
 get base(){return this.mix.base?this.nodes.get(this.mix.base.id):undefined}
 snapshot(){this.notify({playing:this.playing,time:this.base?.currentTime||0,duration:Number.isFinite(this.base?.duration)?this.base!.duration:0,error:this.error,loading:[...this.nodes.values()].some(n=>!n.paused&&n.readyState<3)})}
 position(n:HTMLAudioElement,t:number,isBase:boolean){try{n.currentTime=isBase?t:(Number.isFinite(n.duration)&&n.duration>0?t%n.duration:t)}catch{}}
 update(mix:Mix){const time=this.base?.currentTime||0;this.mix={base:mix?.base||null,layers:(mix?.layers||[]).slice(0,3)};const entries=slotEntries(this.mix).filter(Boolean) as MixEntry[];const ids=new Set(entries.map(e=>e.id));for(const [id,n] of this.nodes)if(!ids.has(id)){n.pause();n.removeAttribute('src');n.load();n.remove?.();this.nodes.delete(id)}
 for(const e of entries){let n=this.nodes.get(e.id);if(!n){n=this.create();this.nodes.set(e.id,n);n.preload='metadata';n.src=e.track.url;const node=n;node.addEventListener('loadedmetadata',()=>{this.position(node,this.base?.currentTime||time,e.id===this.mix.base?.id);this.snapshot()});for(const ev of ['timeupdate','waiting','playing','canplay','stalled'])node.addEventListener(ev,()=>this.snapshot());node.addEventListener('error',()=>{if(this.nodes.get(e.id)!==node)return;this.error=`Unable to load ${e.track.title}.`;this.pause()});node.addEventListener('ended',()=>{if(e.id!==this.mix.base?.id)return;if(this.repeat){this.seek(0);void this.play()}else this.pause()});node.load();this.position(node,time,e.id===this.mix.base?.id);if(this.playing)void this.start(node,this.generation)}n.loop=e.id!==this.mix.base?.id;n.volume=Math.max(0,Math.min(1,e.volume??.75));n.muted=!!e.muted;}
 if(!this.mix.base)this.pause();this.snapshot();}
 async start(n:HTMLAudioElement,g:number){const request={};this.requests.set(n,request);try{await n.play();if(this.requests.get(n)!==request)return;if(g!==this.generation||!this.playing||![...this.nodes.values()].includes(n))n.pause()}catch{if(this.requests.get(n)===request&&[...this.nodes.values()].includes(n)&&g===this.generation){this.error='Playback failed. Press Play to retry or check the audio URL.';this.pause()}}}
 async play(){if(!this.base)return;this.error='';this.playing=true;const g=++this.generation;if(this.base.ended)this.seek(0);await Promise.all([...this.nodes.values()].map(n=>this.start(n,g)));this.snapshot()}
 pause(){this.playing=false;this.generation++;for(const n of this.nodes.values())n.pause();this.snapshot()}
 seek(t:number){for(const [id,n] of this.nodes)this.position(n,t,id===this.mix.base?.id);this.snapshot()}
 destroy(){this.pause();for(const n of this.nodes.values()){n.removeAttribute('src');n.load();n.remove?.()}this.nodes.clear()}
}
