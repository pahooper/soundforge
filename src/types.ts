export interface Visualization { version:1; interval:number; bands:number; frames:number[][] }
export interface Track { title:string; url:string; duration?:number; visualization?:Visualization }
