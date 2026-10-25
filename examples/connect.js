/** Optional host-page wiring; both custom elements remain independent. */
export function connectAudioBrowser(browser,player,onModeChange=()=>{}){
 let queueMode=false,currentTrack=null;
 const selection=({detail})=>{
  if(browser.playbackMode==='layers')return;
  queueMode=detail.source==='queue'||browser.playbackMode==='playlist';browser.playbackMode=queueMode?'playlist':'single';player.playbackMode=queueMode?'playlist':'single';
  player.playlist=queueMode?[...browser.queue]:[];
  // Each selection is an explicit request, even after auto-advance.
  player.track={...detail.track};
  onModeChange(queueMode);
 };
 const changed=({detail})=>{
  if(browser.playbackMode==='layers')return;
  let queue=detail.queue;
  if(!queue.length){
   // Keep an auto-advanced track, rather than returning to the old track input.
   if(currentTrack)player.track=currentTrack;
   player.playlist=[];queueMode=false;player.playbackMode='single';browser.playbackMode='single';onModeChange(false);return;
  }
  if(!queueMode&&currentTrack){
   if(!queue.some(t=>t.url===currentTrack.url)){
    queue=[currentTrack,...queue];browser.queue=queue;
   }
   queueMode=true;
  }
  if(queueMode){player.playlist=queue;player.playbackMode='playlist';browser.playbackMode='playlist'}
  onModeChange(queueMode);
 };
 const modeChanged=({detail})=>{queueMode=detail.mode==='playlist';player.playbackMode=detail.mode;if(detail.mode==='layers')player.mix=browser.mix;else {player.playlist=detail.mode==='playlist'?[...browser.queue]:[];if(currentTrack)player.track={...currentTrack}}};
 const mixChanged=({detail})=>{player.mix=detail.mix};
 const gainsChanged=({detail})=>{browser.mix=detail.mix};
 browser.addEventListener('modechange',modeChanged);browser.addEventListener('mixchange',mixChanged);player.addEventListener('mixchange',gainsChanged);
 const playingTrack=({detail})=>{currentTrack=detail.track;browser.selectedUrl=detail.track.url};
 browser.addEventListener('trackselect',selection);
 browser.addEventListener('queuechange',changed);
 player.addEventListener('trackchange',playingTrack);
 return ()=>{browser.removeEventListener('modechange',modeChanged);browser.removeEventListener('mixchange',mixChanged);player.removeEventListener('mixchange',gainsChanged);browser.removeEventListener('trackselect',selection);browser.removeEventListener('queuechange',changed);player.removeEventListener('trackchange',playingTrack)};
}
