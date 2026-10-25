import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
export default defineConfig({plugins:[svelte({compilerOptions:{customElement:true}})],build:{copyPublicDir:false,emptyOutDir:!process.env.BUILD_BROWSER,lib:{entry:process.env.BUILD_BROWSER?'src/browser-register.ts':'src/register.ts',formats:['es'],fileName:()=>process.env.BUILD_BROWSER?'audio-browser.js':'audio-player.js'}}});
