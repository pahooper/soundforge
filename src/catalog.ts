import type {Track} from './types.ts';
export interface CatalogTrack extends Track { category?:string; id?:string }
export function categories(catalog:CatalogTrack[]):string[]{return [...new Set(catalog.map(t=>t.category?.trim()||'Uncategorized'))].sort((a,b)=>a.localeCompare(b))}
export function filterTracks(catalog:CatalogTrack[],category:string,search:string):CatalogTrack[]{const term=search.trim().toLocaleLowerCase();return catalog.filter(t=>(!category||(t.category?.trim()||'Uncategorized')===category)&&t.title.toLocaleLowerCase().includes(term))}
export function reorder<T>(items:T[],from:number,to:number):T[]{if(!Number.isInteger(from)||!Number.isInteger(to)||from<0||to<0||from>=items.length||to>=items.length)return items;const copy=[...items];const [item]=copy.splice(from,1);copy.splice(to,0,item);return copy}
