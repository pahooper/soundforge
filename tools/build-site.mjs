import {cp,mkdir,readFile,writeFile} from 'node:fs/promises';
import {marked} from 'marked';
import {resolve} from 'node:path';

const target=resolve('../dist');
await mkdir(target+'/docs',{recursive:true});
const pages=[['README.md','index'],['docs/reference.md','reference'],['docs/preprocessing.md','preprocessing'],['docs/recipes.md','recipes'],['docs/troubleshooting.md','troubleshooting'],['docs/development.md','development'],['CHANGELOG.md','changelog'],['CONTRIBUTING.md','contributing']];
for(const [input,name] of pages){
  let text=await readFile(input,'utf8');
  text=text.replaceAll('../README.md','index.html').replace(/\]\((reference|preprocessing|recipes|troubleshooting)\.md/g,']($1.html');
  const body=await marked.parse(text);
  await writeFile(target+'/docs/'+name+'.html',`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>SoundForge documentation</title><style>body{max-width:980px;margin:auto;padding:32px 24px;font:16px/1.7 system-ui,sans-serif;color:#24323e;background:#f7f9fb}a{color:#076b83}nav{display:flex;flex-wrap:wrap;gap:18px;padding:14px 0;border-bottom:1px solid #ccd6df}pre{background:#e9eef3;padding:18px;overflow:auto;border-radius:8px}code{font-size:14px}table{border-collapse:collapse;display:block;overflow:auto}td,th{border:1px solid #ccd6df;padding:8px 12px;text-align:left}h1,h2,h3{line-height:1.3;margin-top:32px}img{max-width:100%}</style></head><body><nav><a href="../">Original demo</a><a href="../examples/">Complete HTML example</a><a href="./">Documentation</a><a href="https://github.com/pahooper/soundforge">Source</a><a href="https://github.com/pahooper/soundforge/issues">Issues</a></nav><main>${body}</main></body></html>`);
}
await cp('examples',target+'/examples',{recursive:true});
await cp('dist',target+'/examples/lib',{recursive:true});
for(const name of ['audio-player.js','audio-browser.js','audio-preprocessor.js','connect.js'])await cp('dist/'+name,target+'/'+name);
const siteCatalog=(await readFile('public/catalog.json','utf8')).replaceAll('"./public/','"./');
await writeFile(target+'/catalog.json',siteCatalog);
let demo=await readFile(target+'/index.html','utf8');
if(!demo.includes('SoundForge documentation'))demo=demo.replace('<header>','<nav style="max-width:940px;margin:0 auto 20px;display:flex;gap:24px;flex-wrap:wrap"><a href="./docs/">SoundForge documentation</a><a href="./examples/">Complete HTML example</a><a href="https://github.com/pahooper/soundforge/issues">Report an issue</a></nav><header>');
await writeFile(target+'/index.html',demo);
console.log('Built Site documentation and complete example, preserving the original demo.');
