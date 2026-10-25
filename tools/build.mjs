import {spawnSync} from 'node:child_process';
for(const BUILD_BROWSER of ['', '1']){
 const result=spawnSync(process.execPath,['node_modules/vite/bin/vite.js','build'],{stdio:'inherit',env:{...process.env,BUILD_BROWSER}});
 if(result.status!==0)process.exit(result.status??1);
}

// Emit Node-only tooling and framework-independent helpers without TypeScript at runtime.
const {readFile,writeFile,mkdir,chmod}=await import('node:fs/promises');
const ts=await import('typescript');
await mkdir('dist',{recursive:true});
for(const [input,output] of [['tools/analyze.ts','dist/analyze.js'],['src/mix.ts','dist/helpers.js']]){
 const source=await readFile(input,'utf8');
 const js=ts.default.transpileModule(source,{compilerOptions:{target:ts.default.ScriptTarget.ES2022,module:ts.default.ModuleKind.ESNext}}).outputText;
 await writeFile(output,(output.endsWith('analyze.js')?'#!/usr/bin/env node\n':'')+js);
}
await chmod('dist/analyze.js',0o755);
await writeFile('dist/connect.js',await readFile('examples/connect.js','utf8'));
await writeFile('dist/index.js',"import './audio-player.js';\nimport './audio-browser.js';\nexport * from './helpers.js';\nexport {connectAudioBrowser} from './connect.js';\n");
