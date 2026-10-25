import type {Track,Mix,MixEntry} from './index.js';
export function makeEntry(track:Track):MixEntry;
export function slotEntries(mix:Mix):(MixEntry|null)[];
export function swapSlots(mix:Mix,from:number,to:number):Mix;
export function assignTrack(mix:Mix,track:Track,destination:number|'layer'):Mix;
