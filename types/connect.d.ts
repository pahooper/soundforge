import type {CompactAudioBrowserElement,CompactAudioPlayerElement} from './index.js';
/** Connect independent components; returns an event-listener cleanup function. */
export function connectAudioBrowser(browser:CompactAudioBrowserElement,player:CompactAudioPlayerElement,onQueueModeChange?:(queueMode:boolean)=>void):()=>void;
