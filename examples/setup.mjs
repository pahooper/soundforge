#!/usr/bin/env node
import {cp, mkdir, readdir} from 'node:fs/promises';
import {resolve, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const destination = resolve(process.argv[2] || 'soundforge-demo');
const here = fileURLToPath(new URL('.', import.meta.url));
let existing;
try { existing = await readdir(destination); } catch (error) { if (error.code !== 'ENOENT') throw error; }
if (existing?.length) throw new Error('Choose a new or empty destination folder. Existing files will not be overwritten.');
await mkdir(destination, {recursive:true});
for (const name of ['index.html','tracks.json','tracks-enriched.json','audio','serve.mjs','README.md']) {
  await cp(join(here,name), join(destination,name), {recursive:true});
}
await cp(new URL('../dist/',import.meta.url), join(destination,'lib'), {recursive:true});
console.log('Created '+destination);
console.log('Start the demo: node '+JSON.stringify(join(destination,'serve.mjs'))+' '+JSON.stringify(destination));
