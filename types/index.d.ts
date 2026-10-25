export interface Visualization {version:1;interval:number;bands:number;frames:number[][]}
export interface Track {title:string;url:string;duration?:number;visualization?:Visualization}
export interface CatalogTrack extends Track {category?:string;id?:string}
export type PlaybackMode='single'|'playlist'|'layers';
export type Theme='light'|'dark';
export interface MixEntry {id:string;track:Track;volume:number;muted:boolean}
export interface Mix {base:MixEntry|null;layers:(MixEntry|null)[]}
export interface PlayerEventMap {
 trackchange:CustomEvent<{track:Track;index:number}>;
 play:CustomEvent<Record<string,never>>;
 pause:CustomEvent<Record<string,never>>;
 queueended:CustomEvent<Record<string,never>>;
 playbackerror:CustomEvent<{track:Track|null}>;
 mixchange:CustomEvent<{mix:Mix}>;
}
export interface BrowserEventMap {
 trackselect:CustomEvent<{track:CatalogTrack;source:'catalog'|'queue';index:number}>;
 queuechange:CustomEvent<{queue:CatalogTrack[]}>;
 modechange:CustomEvent<{mode:PlaybackMode}>;
 mixchange:CustomEvent<{mix:Mix}>;
}
export interface PreprocessorEventMap {
 catalogenriched:CustomEvent<{catalog:CatalogTrack[];json:string;failures:number}>;
}
export interface CompactAudioPlayerElement extends HTMLElement {
 track:Track|null;playlist:Track[];theme:Theme;playbackMode:PlaybackMode;mix:Mix;
 addEventListener<K extends keyof PlayerEventMap>(type:K,listener:(this:CompactAudioPlayerElement,event:PlayerEventMap[K])=>unknown,options?:boolean|AddEventListenerOptions):void;
 addEventListener(type:string,listener:EventListenerOrEventListenerObject|null,options?:boolean|AddEventListenerOptions):void;
}
export interface CompactAudioBrowserElement extends HTMLElement {
 catalog:CatalogTrack[];queue:CatalogTrack[];selectedUrl:string;theme:Theme;playbackMode:PlaybackMode;mix:Mix;
 addEventListener<K extends keyof BrowserEventMap>(type:K,listener:(this:CompactAudioBrowserElement,event:BrowserEventMap[K])=>unknown,options?:boolean|AddEventListenerOptions):void;
 addEventListener(type:string,listener:EventListenerOrEventListenerObject|null,options?:boolean|AddEventListenerOptions):void;
}
export interface CompactAudioPreprocessorElement extends HTMLElement {
 catalog:CatalogTrack[];enrichedCatalog:CatalogTrack[];theme:Theme;autoAnalyze:boolean;
 analyzeCatalog(overrideTracks?:CatalogTrack[]):Promise<CatalogTrack[]>;
 addEventListener<K extends keyof PreprocessorEventMap>(type:K,listener:(this:CompactAudioPreprocessorElement,event:PreprocessorEventMap[K])=>unknown,options?:boolean|AddEventListenerOptions):void;
 addEventListener(type:string,listener:EventListenerOrEventListenerObject|null,options?:boolean|AddEventListenerOptions):void;
}
declare global {interface HTMLElementTagNameMap {
 'compact-audio-player':CompactAudioPlayerElement;
 'compact-audio-browser':CompactAudioBrowserElement;
 'compact-audio-preprocessor':CompactAudioPreprocessorElement;
}}
export {makeEntry,slotEntries,swapSlots,assignTrack} from './helpers.js';
export {connectAudioBrowser} from './connect.js';
