import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
const target = process.env.BUILD_TARGET || (process.env.BUILD_BROWSER ? 'browser' : 'player');
const entryMap = {
  player: ['src/register.ts', 'audio-player.js'],
  browser: ['src/browser-register.ts', 'audio-browser.js'],
  preprocessor: ['src/preprocessor-register.ts', 'audio-preprocessor.js']
};
const [entry, outName] = entryMap[target] || entryMap.player;
export default defineConfig({
  plugins: [svelte({compilerOptions: {customElement: true}})],
  build: {
    copyPublicDir: false,
    emptyOutDir: target === 'player',
    lib: {entry, formats: ['es'], fileName: () => outName}
  }
});
