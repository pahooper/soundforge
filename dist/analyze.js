#!/usr/bin/env node
import { dirname, join, resolve } from 'node:path';
import { existsSync, realpathSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import decode from '@audio/decode';
import { analyzeAudio, compactCatalogJson } from './analyze-core.js';
export { analyzeAudio, compactCatalogJson };
export async function loadAudioBytes(rawUrl, catalogPath) {
    const trimmed = rawUrl.trim();
    const normalizedUrl = trimmed.startsWith('//') ? `https:${trimmed}` : trimmed;
    if (/^(https?:|data:)/i.test(normalizedUrl)) {
        const r = await fetch(normalizedUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; SoundForge/0.3; +https://github.com/pahooper/soundforge)',
                'Accept': 'audio/*,*/*;q=0.8'
            },
            redirect: 'follow',
            signal: AbortSignal.timeout(120000)
        });
        if (!r.ok)
            throw new Error(`HTTP ${r.status}`);
        return new Uint8Array(await r.arrayBuffer());
    }
    let fileCand = normalizedUrl;
    if (/^file:\/\//i.test(fileCand)) {
        fileCand = fileURLToPath(fileCand);
    }
    const noQuery = fileCand.replace(/[?#].*$/, '');
    let decodedPath = noQuery;
    try {
        decodedPath = decodeURIComponent(noQuery);
    }
    catch {
        // Keep raw path if percent-decoding fails
    }
    const candidates = [fileCand, noQuery, decodedPath];
    const baseDirs = [process.cwd()];
    if (catalogPath) {
        const catDir = dirname(resolve(catalogPath));
        if (!baseDirs.includes(catDir))
            baseDirs.push(catDir);
    }
    for (const dir of baseDirs) {
        for (const rel of [decodedPath, noQuery]) {
            candidates.push(resolve(dir, rel));
            if (rel.startsWith('/')) {
                candidates.push(join(dir, rel.slice(1)));
                candidates.push(join(dir, 'public', rel.slice(1)));
            }
        }
    }
    for (const c of candidates) {
        if (existsSync(c)) {
            return new Uint8Array(await readFile(c));
        }
    }
    return new Uint8Array(await readFile(decodedPath));
}
export function defaultOutputPath(inputPath) {
    if (/\.json$/i.test(inputPath)) {
        return inputPath.replace(/\.json$/i, '-enriched.json');
    }
    return `${inputPath}-enriched.json`;
}
const isMain = Boolean(process.argv[1]) && (() => {
    try {
        return realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url));
    }
    catch {
        return false;
    }
})();
if (isMain) {
    const [input, rawOutput] = process.argv.slice(2);
    if (input === '--help' || input === '-h') {
        console.log('Usage: soundforge-analyze input.json [output.json]\nAnalyze a catalog using bundled decoders. Existing fields are preserved.');
        process.exit(0);
    }
    if (input === '--version') {
        console.log(JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8')).version);
        process.exit(0);
    }
    if (!input) {
        console.error('Usage: soundforge-analyze input.json [output.json]');
        process.exit(1);
    }
    const output = rawOutput || defaultOutputPath(input);
    if (resolve(input) === resolve(output)) {
        console.error('Input and output paths must differ.');
        process.exit(1);
    }
    const tracks = JSON.parse(await readFile(input, 'utf8'));
    if (!Array.isArray(tracks))
        throw new Error('Expected an array of tracks with title and url fields.');
    let failures = 0;
    for (const track of tracks) {
        try {
            if (!track || typeof track.url !== 'string' || typeof track.title !== 'string')
                throw new Error('Missing title or url');
            const bytes = await loadAudioBytes(track.url, input);
            let decoded;
            try {
                decoded = await decode(bytes);
            }
            catch (e) {
                throw new Error(`Unsupported format or invalid audio: ${e instanceof Error ? e.message : e}`);
            }
            if (!decoded.channelData?.[0]?.length)
                throw new Error('No audio samples decoded');
            track.duration = Math.round((decoded.channelData[0].length / decoded.sampleRate) * 100) / 100;
            track.visualization = analyzeAudio(decoded.channelData, decoded.sampleRate);
            console.log(`Analyzed: ${track.title}`);
        }
        catch (e) {
            failures++;
            console.error(`${track?.title ?? 'Unknown track'}: ${e instanceof Error ? e.message : e}`);
        }
    }
    await writeFile(output, compactCatalogJson(tracks));
    console.log(`Wrote ${output}; ${failures} unsupported or failed tracks retained.`);
    if (failures)
        process.exitCode = 2;
}
