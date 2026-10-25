<svelte:options customElement={{tag:'compact-audio-player',props:{track:{type:'Object'},playlist:{type:'Array'},theme:{type:'String'},playbackMode:{type:'String'},mix:{type:'Object'}}}} />
<script lang="ts">
  import { untrack } from 'svelte';

 import {onMount} from 'svelte';
 import {Play,Pause,SkipBack,SkipForward,Volume2,VolumeX} from '@lucide/svelte';
 import {MixEngine} from './mix-engine';
 import {slotEntries} from './mix';
 import type {Mix} from './mix';
 import type {Track} from './types';
 import {barsAt,frameAt,nextIndex,stepBars,waveOffset} from './visualization';
  interface Props {
    track?: Track|null;
    playlist?: Track[];
    theme?: string; playbackMode?:string; mix?:Mix;
  }

  let { track = $bindable(null), playlist = $bindable([]), theme = $bindable('dark'), playbackMode=$bindable('single'),mix=$bindable({base:null,layers:[]}) }: Props = $props();
 let audio:HTMLAudioElement = $state(),canvas:HTMLCanvasElement = $state();
 let index=$state(0),playing=$state(false),time=$state(0),duration=$state(0),volume=$state(0.75),muted=$state(false);
 let mode=$state('bars'),error=$state(''),loading=$state(false);
 let engine:MixEngine;let mediaRoot:HTMLDivElement;let mixState=$state({playing:false,time:0,duration:0,error:'',loading:false});let repeat=$state(false);
 let isMix=$derived(playbackMode==='layers');
 let shown=$derived(isMix?mix.base?.track:current);
 let shownTime=$derived(isMix?mixState.time:time),shownDuration=$derived(isMix?mixState.duration:duration),shownPlaying=$derived(isMix?mixState.playing:playing);
 function mixGain(id:string,volume?:number,muted?:boolean){const change=(e:any)=>e?.id===id?{...e,volume:volume??e.volume,muted:muted??e.muted}:e;mix={base:change(mix.base),layers:mix.layers.map(change)};emit('mixchange',{mix})}
 let current:Track|null=$state(null);
 let priorTrack:Track|null=$state(null),priorList:Track[]|null=$state(null);
 function emit(name:string,detail:unknown){audio?.parentElement?.dispatchEvent(new CustomEvent(name,{detail,bubbles:true,composed:true}))}
 function load(value:Track){
   error='';time=0;duration=0;loading=true;
   audio.src=value.url; audio.load();
   // Playback can be blocked before a user gesture. Keep Play available.
   audio.play().catch(()=>{playing=false;loading=false});
   emit('trackchange',{track:value,index});
 }
 function toggle(){if(isMix){if(engine.playing)engine.pause();else void engine.play();return}if(!current)return;if(audio.paused)audio.play().catch(()=>error='Press Play to start, or check the audio URL.');else audio.pause()}
 function move(direction:number){const n=nextIndex(index,playlist.length,direction);if(n!==index){index=n;current=playlist[index]}}
 function ended(){playing=false;if(index<playlist.length-1)move(1);else emit('queueended',{})}
 function clock(n:number){return Number.isFinite(n)?`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,'0')}`:'0:00'}
 onMount(()=>{
  engine=new MixEngine(()=>{const n=document.createElement('audio');mediaRoot.append(n);return n},s=>{mixState=s});
  engine.update(mix);
  let id:number;
  const barCurrent=new Array<number>(36).fill(0.025);
  const barPeaks=new Array<number>(36).fill(0.025);
  const barHolds=new Array<number>(36).fill(0);
  const waveSmoothed=new Array<number>(36).fill(0);
  let lastWall=performance.now();
  let lastMediaTime=-1;
  let lastTrackUrl='';
  const reducedMotionQuery=typeof window.matchMedia==='function'?window.matchMedia('(prefers-reduced-motion: reduce)'):null;
  function draw(nowWall=performance.now()){
   const ctx=canvas.getContext('2d');if(ctx){
    const dpr=Math.min(window.devicePixelRatio||1,2);
    const w=640,h=220;
    const pw=Math.round(w*dpr),ph=Math.round(h*dpr);
    if(canvas.width!==pw||canvas.height!==ph){canvas.width=pw;canvas.height=ph}
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,w,h);
    const mediaTime=isMix?mixState.time:(audio?.currentTime??0);
    const rawFrame=frameAt(shown?.visualization,mediaTime);
    const dt=Math.max(0,Math.min(0.1,(nowWall-lastWall)/1000));
    lastWall=nowWall;
    const trackUrl=shown?.url??'';
    const jumped=trackUrl!==lastTrackUrl||lastMediaTime<0||Math.abs(mediaTime-lastMediaTime)>0.18;
    const reduced=Boolean(reducedMotionQuery?.matches);
    const snap=jumped||reduced||!shownPlaying;
    lastTrackUrl=trackUrl;
    lastMediaTime=mediaTime;
    ctx.strokeStyle=theme==='light'?'#00bdd5':'#10cfe4';ctx.fillStyle=ctx.strokeStyle;ctx.lineWidth=1.15;
    if(mode==='bars'){
     const targets=barsAt(rawFrame,36);
     stepBars(barCurrent,barPeaks,barHolds,targets,dt,snap);
     const base=169,bw=w/36-6;
     for(let i=0;i<36;i++){
      const v=barCurrent[i];
      const height=5+v*140,x=i*w/36+3;
      const g=ctx.createLinearGradient(0,base-height,0,base);
      g.addColorStop(0,theme==='light'?'#12d6e8':'#1ef0ff');
      g.addColorStop(0.55,theme==='light'?'#00bdd5':'#10cfe4');
      g.addColorStop(1,theme==='light'?'#008fa3':'#008da0');
      ctx.fillStyle=g;
      ctx.beginPath();ctx.roundRect(x,base-height,bw,height,4);ctx.fill();
      if(!reduced&&barPeaks[i]>v+0.025&&barPeaks[i]>0.06){
       const peakY=Math.max(8,base-(5+barPeaks[i]*140)-4);
       ctx.fillStyle=theme==='light'?'#00a8be':'#7cf7ff';
       ctx.globalAlpha=0.78;
       ctx.beginPath();ctx.roundRect(x,peakY,bw,2.5,1.25);ctx.fill();
       ctx.globalAlpha=1;
      }
      ctx.fillStyle=g;
      ctx.globalAlpha=.14;ctx.beginPath();ctx.roundRect(x,base+5,bw,height*.26,4);ctx.fill();ctx.globalAlpha=1;
     }
    }else{
     const targets=rawFrame.length?barsAt(rawFrame,36):[];
     if(!targets.length){
      waveSmoothed.fill(0);
     }else{
      const alpha=snap?1:1-Math.exp(-dt/0.045);
      for(let i=0;i<36;i++){
       const prev=waveSmoothed[i]??targets[i];
       waveSmoothed[i]=prev+(targets[i]-prev)*alpha;
      }
     }
     const activeFrame=targets.length?waveSmoothed:[];
     for(let layer=0;layer<28;layer++){
      ctx.globalAlpha=.16+layer/95;ctx.beginPath();
      for(let x=0;x<=w;x+=2){const y=h/2+waveOffset(activeFrame,x/w,layer);x?ctx.lineTo(x,y):ctx.moveTo(x,y)}
      ctx.stroke();
     }ctx.globalAlpha=1;
    }
   }id=requestAnimationFrame(draw);
  }draw();return()=>{cancelAnimationFrame(id);engine.destroy();audio.pause();audio.removeAttribute('src');audio.load()};
 });
 $effect(() => {
   const incomingTrack=track,incomingList=playlist;
   untrack(()=>{
    if(incomingTrack===priorTrack&&incomingList===priorList)return;
    const trackChanged=incomingTrack!==priorTrack;
    priorTrack=incomingTrack;priorList=incomingList;
    const desired=trackChanged&&incomingTrack?incomingTrack:current;
    const found=desired?incomingList.findIndex(t=>t.url===desired.url):-1;
    index=found>=0?found:0;
    current=trackChanged&&incomingTrack?incomingTrack:(found>=0?desired:(incomingList[0]??incomingTrack));
   });
  });
 $effect(() => {
    if(audio&&current&&!isMix){const selected=current;untrack(()=>load(selected))}
  });


 $effect(()=>{const m=mix,active=isMix,r=repeat;untrack(()=>{if(!engine)return;engine.repeat=r;if(active){audio.pause();engine.update(m)}else engine.pause()})});
</script>
<div class:light={theme==='light'} class="player" class:mix-player={isMix}>
 <div class="eyebrow">NOW PLAYING</div>
 <h2 title={shown?.title}>{shown?.title??'Choose a track'}</h2>
 <canvas bind:this={canvas} width="640" height="220" aria-hidden="true"></canvas>
 <div class="switch" aria-label="Visualization style"><button class:chosen={mode==='bars'} aria-pressed={mode==='bars'} onclick={()=>mode='bars'}>Bars</button><button class:chosen={mode==='wave'} aria-pressed={mode==='wave'} onclick={()=>mode='wave'}>Wave</button></div>
 <input class="seek" style={`--progress:${shownDuration?shownTime/shownDuration*100:0}%`} type="range" min="0" max={shownDuration||0} step="0.01" value={shownTime} disabled={!shownDuration} aria-label="Seek" aria-valuetext={clock(shownTime)} oninput={e=>{if(isMix)engine.seek(Number(e.currentTarget.value));else {audio.currentTime=Number(e.currentTarget.value);time=audio.currentTime}}} />
 <div class="times"><span>{clock(shownTime)}</span><span>{clock(shownDuration)}</span></div>
 <div class="transport">
 {#if !isMix&&playlist.length>1}<button aria-label="Previous track" disabled={index===0} onclick={()=>move(-1)}><SkipBack size={25} fill="currentColor" /></button>{/if}
 <button class="play" disabled={!shown} aria-label={shownPlaying?'Pause':'Play'} onclick={toggle}>{#if shownPlaying}<Pause size={32} fill="currentColor" />{:else}<Play size={32} fill="currentColor" />{/if}</button>
 {#if !isMix&&playlist.length>1}<button aria-label="Next track" disabled={index>=playlist.length-1} onclick={()=>move(1)}><SkipForward size={25} fill="currentColor" /></button>{/if}
 </div>
 {#if isMix}
 <div class="mixer"><label class="repeat"><input type="checkbox" bind:checked={repeat}/>Loop mix</label>{#each slotEntries(mix) as entry,i}{#if entry}<div class="channel"><span title={entry.track.title}>{i===0?'Base':`Layer ${i}`}: {entry.track.title}</span><button aria-label={`${entry.muted?'Unmute':'Mute'} ${i===0?'base':`layer ${i}`}`} aria-pressed={entry.muted} onclick={()=>mixGain(entry.id,undefined,!entry.muted)}>{#if entry.muted}<VolumeX size={18}/>{:else}<Volume2 size={18}/>{/if}</button><input type="range" min="0" max="1" step="0.01" value={entry.volume} aria-label={`${i===0?'Base':`Layer ${i}`} volume`} oninput={e=>mixGain(entry.id,Number(e.currentTarget.value))}/></div>{/if}{/each}</div>
 {:else}<div class="volume"><button aria-label={muted?'Unmute':'Mute'} aria-pressed={muted} onclick={()=>muted=!muted}>{#if muted}<VolumeX size={25} />{:else}<Volume2 size={25} />{/if}</button><input style={`--progress:${volume*100}%`} type="range" min="0" max="1" step="0.01" bind:value={volume} aria-label="Volume" oninput={()=>{if(volume>0)muted=false}} /></div>
 {/if}<div bind:this={mediaRoot} class="media-root"></div>
 <div class="status" role="status">{(isMix?mixState.error:error)||((isMix?mixState.loading:loading)?'Loading…':'')}</div>
 <audio preload="metadata" bind:this={audio} bind:volume bind:muted onplay={()=>{playing=true;loading=false;emit('play',{})}} onpause={()=>{playing=false;emit('pause',{})}} ontimeupdate={()=>time=audio.currentTime} onloadedmetadata={()=>{duration=Number.isFinite(audio.duration)?audio.duration:0}} oncanplay={()=>loading=false} onseeking={()=>loading=true} onseeked={()=>{if(audio.readyState>=3)loading=false}} onwaiting={()=>loading=true} onstalled={()=>{if(!audio.paused)loading=true}} onplaying={()=>loading=false} onended={ended} onerror={()=>{loading=false;playing=false;error='Unable to load this audio track.';emit('playbackerror',{track:current})}}></audio>
</div>
<style>
.media-root{display:none}.mix-player{height:auto!important;min-height:480px}.mixer{margin-bottom:12px}.repeat{display:flex;align-items:center;justify-content:center;gap:8px;font-size:12px;margin:0 0 14px}.channel{display:flex;align-items:center;gap:8px;margin:12px 0}.channel span{width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px}.channel input{flex:1;min-width:0}:host{display:block;width:360px;max-width:100%;font-family:Arial,Helvetica,sans-serif}.player{--ink:#f6f8fa;--muted:#8e9da9;--accent:#00c5df;--line:#3b454e;box-sizing:border-box;height:480px;background:radial-gradient(ellipse at 50% 42%,#273238 0%,#20282c 65%,#1e2529 100%);color:var(--ink);border:1px solid #ffffff15;border-radius:12px;padding:23px 24px 18px;box-shadow:0 12px 24px #0003;position:relative}.light{--ink:#27323b;--muted:#8793a0;--accent:#00bcd6;--line:#d4dbe2;background:linear-gradient(130deg,#fff,#fafcfd);border-color:#e3e7eb}.eyebrow{text-align:center;font-size:10px;letter-spacing:1px;color:var(--muted)}h2{text-align:center;font-size:20px;font-weight:700;margin:7px 0 0;line-height:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}canvas{display:block;width:calc(100% + 24px);height:155px;margin:13px -12px 12px}.switch{display:flex;box-sizing:border-box;width:188px;height:32px;margin:0 auto 27px;padding:2px;border:1px solid var(--line);border-radius:18px;background:#ffffff04}.light .switch{background:#f0f3f7}.switch button{width:50%;font-size:12px;padding:3px;border-radius:15px}.chosen{background:linear-gradient(130deg,#00cbe5,#00a6c1);color:#fff!important;box-shadow:0 0 0 1px #42e3f1}.light .chosen{box-shadow:none}button{border:0;background:transparent;color:var(--ink);cursor:pointer;font:inherit;display:inline-flex;justify-content:center;align-items:center}button:disabled{opacity:.3;cursor:default}button:focus-visible,input:focus-visible{outline:2px solid var(--accent);outline-offset:4px}input[type=range]{appearance:none;-webkit-appearance:none;display:block;height:4px;border-radius:4px;background:linear-gradient(to right,var(--accent) 0%,var(--accent) var(--progress,0%),var(--line) var(--progress,0%),var(--line) 100%);cursor:pointer}input[type=range]::-webkit-slider-thumb{appearance:none;width:14px;height:14px;border-radius:50%;background:#fff;border:1px solid #d5eef2;box-shadow:0 2px 4px #0002}input[type=range]::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:1px solid #d5eef2}.seek{width:100%;margin:0}.times{display:flex;justify-content:space-between;font-size:12px;color:var(--ink);margin-top:9px;line-height:14px}.transport{display:flex;justify-content:center;align-items:center;gap:42px;margin:16px 0 21px;height:64px}.transport>button:not(.play){padding:4px}.play{width:64px;height:64px;border-radius:50%;background:linear-gradient(130deg,#00c9e4,#00a6c1);border:1px solid #66e5f3;color:white;box-shadow:0 0 20px #00c7e322}.volume{display:flex;align-items:center;gap:15px;height:24px}.volume input{flex:1;min-width:0}.volume button{padding:0}.status{position:absolute;bottom:3px;left:10px;right:10px;min-height:12px;text-align:center;font-size:10px;color:var(--muted)}audio{display:none}
</style>
