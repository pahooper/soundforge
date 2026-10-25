#!/usr/bin/env node
import { resolve } from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import decode from '@audio/decode';
const [input, output] = process.argv.slice(2);
if (input === '--help' || input === '-h') {
    console.log('Usage: soundforge-analyze input.json output.json\nAnalyze a catalog using bundled decoders. Existing fields are preserved.');
    process.exit(0);
}
if (input === '--version') {
    console.log(JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8')).version);
    process.exit(0);
}
if (!input || !output) {
    console.error('Usage: soundforge-analyze input.json output.json');
    process.exit(1);
}
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
        const bytes = /^https?:/.test(track.url) ? await (async () => { const r = await fetch(track.url, { signal: AbortSignal.timeout(120000) }); if (!r.ok)
            throw new Error(`HTTP ${r.status}`); return new Uint8Array(await r.arrayBuffer()); })() : new Uint8Array(await readFile(track.url));
        let decoded;
        try {
            decoded = await decode(bytes);
        }
        catch (e) {
            throw new Error(`Unsupported format or invalid audio: ${e instanceof Error ? e.message : e}`);
        }
        if (!decoded.channelData?.[0]?.length)
            throw new Error('No audio samples decoded');
        const samples = decoded.channelData[0];
        const sr = decoded.sampleRate;
        const interval = 0.1, hop = Math.max(1, Math.round(sr * interval)), bands = 8, size = 512;
        const raw = [];
        let peak = 0;
        for (let start = 0; start < samples.length; start += hop) {
            const row = [];
            // Sparse Goertzel measurements at logarithmically spaced frequencies.
            for (let b = 0; b < bands; b++) {
                const frequency = 80 * Math.pow(1.8, b), coeff = 2 * Math.cos(2 * Math.PI * frequency / sr);
                let q1 = 0, q2 = 0;
                for (let n = 0; n < size; n++) {
                    const window = 0.5 - 0.5 * Math.cos(2 * Math.PI * n / (size - 1));
                    const q = (samples[start + n] ?? 0) * window + coeff * q1 - q2;
                    q2 = q1;
                    q1 = q;
                }
                const energy = Math.log1p(Math.sqrt(Math.max(0, q1 * q1 + q2 * q2 - coeff * q1 * q2)));
                row.push(energy);
                peak = Math.max(peak, energy);
            }
            raw.push(row);
        }
        track.duration = samples.length / sr;
        track.visualization = { version: 1, interval, bands, frames: raw.map(row => row.map(v => peak ? Math.round(255 * v / peak) : 0)) };
        console.log(`Analyzed: ${track.title}`);
    }
    catch (e) {
        failures++;
        console.error(`${track?.title ?? 'Unknown track'}: ${e instanceof Error ? e.message : e}`);
    }
}
await writeFile(output, JSON.stringify(tracks));
console.log(`Wrote ${output}; ${failures} unsupported or failed tracks retained.`);
if (failures)
    process.exitCode = 2;
