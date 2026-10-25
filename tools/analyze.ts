import {resolve} from 'node:path';
import {realpathSync} from 'node:fs';
import {readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import decode from '@audio/decode';
import type {Visualization} from '../src/types.ts';

interface FFTEngine {
  readonly N: number;
  readonly half: number;
  transform(src: Float32Array, center: number, len: number, powerOut: Float64Array, scale: number): void;
}

function createFFT(N: number): FFTEngine {
  const half = N >> 1;
  const win = new Float64Array(N);
  for (let n = 0; n < N; n++) win[n] = 0.5 - 0.5 * Math.cos((2 * Math.PI * n) / (N - 1));
  const rev = new Uint32Array(N);
  const bits = Math.round(Math.log2(N));
  for (let i = 0; i < N; i++) {
    let x = i, r = 0;
    for (let b = 0; b < bits; b++) { r = (r << 1) | (x & 1); x >>= 1; }
    rev[i] = r;
  }
  const cos = new Float64Array(half);
  const sin = new Float64Array(half);
  for (let i = 0; i < half; i++) {
    const a = (-2 * Math.PI * i) / N;
    cos[i] = Math.cos(a);
    sin[i] = Math.sin(a);
  }
  const re = new Float64Array(N);
  const im = new Float64Array(N);
  return {
    N,
    half,
    transform(src, center, len, powerOut, scale) {
      const start = center - half;
      let mean = 0;
      for (let n = 0; n < N; n++) {
        const idx = Math.max(0, Math.min(len - 1, start + n));
        mean += src[idx];
      }
      mean /= N;
      for (let n = 0; n < N; n++) {
        const idx = Math.max(0, Math.min(len - 1, start + n));
        re[rev[n]] = (src[idx] - mean) * win[n];
        im[rev[n]] = 0;
      }
      for (let size = 2; size <= N; size <<= 1) {
        const hs = size >> 1, step = N / size;
        for (let i = 0; i < N; i += size) {
          for (let j = 0, k = 0; j < hs; j++, k += step) {
            const tRe = re[i + j + hs] * cos[k] - im[i + j + hs] * sin[k];
            const tIm = re[i + j + hs] * sin[k] + im[i + j + hs] * cos[k];
            re[i + j + hs] = re[i + j] - tRe;
            im[i + j + hs] = im[i + j] - tIm;
            re[i + j] += tRe;
            im[i + j] += tIm;
          }
        }
      }
      for (let k = 1; k < half; k++) {
        powerOut[k] += (re[k] * re[k] + im[k] * im[k]) * scale;
      }
    }
  };
}

export function analyzeAudio(channelData: Float32Array[], sr: number): Visualization {
  const interval = 0.05;
  const bands = 36;
  const len = channelData[0].length;
  const channels = channelData.length;

  // Two-stage DC & sub-bass rumble blocker (~35 Hz cutoff) with codec priming step suppression
  const rHp = Math.max(0.88, 1 - (2 * Math.PI * 35) / sr);
  const filtered = channelData.map(ch => {
    let mean = 0;
    const skip = Math.min(256, Math.floor(len * 0.05));
    for (let i = skip; i < len; i++) mean += ch[i];
    mean = len > skip ? mean / (len - skip) : 0;

    const out = new Float32Array(len);
    let prevX = 0, prevY = 0, prevY2 = 0;
    for (let i = 0; i < len; i++) {
      const x = i < skip && Math.abs(ch[i]) < Math.abs(mean) * 0.25 ? 0 : ch[i] - mean;
      const y1 = x - prevX + rHp * prevY;
      const y2 = y1 - prevY + rHp * prevY2;
      prevX = x;
      prevY = y1;
      prevY2 = y2;
      out[i] = y2;
    }
    return out;
  });

  let totalEnergy = 0, peakSample = 0;
  for (let c = 0; c < channels; c++) {
    const ch = filtered[c];
    for (let i = 0; i < len; i++) {
      const v = Math.abs(ch[i]);
      if (v > peakSample) peakSample = v;
      totalEnergy += v * v;
    }
  }
  const trackRms = Math.sqrt(totalEnergy / Math.max(1, len * channels));

  // Multi-resolution Hann FFT: short window (~46ms) for >=320 Hz, long window (~93ms) for <320 Hz bass
  const hop = Math.max(1, Math.round(sr * interval));
  let shortN = 512;
  while (shortN < hop * 2 || shortN < Math.round(sr * 0.042)) shortN <<= 1;
  if (shortN > 2048) shortN = 2048;
  const longN = shortN << 1;

  const fftShort = createFFT(shortN);
  const fftLong = createFFT(longN);
  const powerShort = new Float64Array(fftShort.half);
  const powerLong = new Float64Array(fftLong.half);

  const fMin = 65;
  const fMax = Math.max(fMin * 4, Math.min(9200, sr * 0.45));
  const ratio = Math.pow(fMax / fMin, 1 / bands);

  const bandSpecs = Array.from({ length: bands }, (_, b) => {
    const fLo = fMin * Math.pow(ratio, b);
    const fHi = fMin * Math.pow(ratio, b + 1);
    const fCenter = Math.sqrt(fLo * fHi);
    const useLong = fCenter < 320;
    const N = useLong ? longN : shortN;
    const half = N >> 1;
    const binHz = sr / N;
    const halfBw = Math.max((fHi - fLo) * 0.78, binHz * 0.9);
    const kStart = Math.max(1, Math.floor((fCenter - halfBw * 1.4) / binHz));
    const kEnd = Math.min(half - 1, Math.ceil((fCenter + halfBw * 1.4) / binHz));
    const weights: Array<[number, number]> = [];
    let wSum = 0;
    for (let k = kStart; k <= kEnd; k++) {
      const dist = Math.abs(k * binHz - fCenter) / halfBw;
      const w = Math.exp(-1.5 * dist * dist);
      if (w > 0.04) { weights.push([k, w]); wSum += w; }
    }
    if (!weights.length) {
      const k = Math.max(1, Math.min(half - 1, Math.round(fCenter / binHz)));
      weights.push([k, 1]);
      wSum = 1;
    }
    const bwNorm = 1 / Math.pow(Math.max(1, wSum), 0.22);
    const tilt = Math.pow(Math.max(fCenter, 200) / 200, 0.14) * bwNorm;
    return {
      useLong,
      tilt,
      weights
    };
  });

  const frameCount = Math.max(1, Math.ceil(len / (sr * interval)));
  const raw: number[][] = [];
  const nonZeroVals: number[] = [];
  const scaleShort = 1 / (channels * shortN * shortN);
  const scaleLong = 1 / (channels * longN * longN);

  for (let fi = 0; fi < frameCount; fi++) {
    const center = Math.min(len - 1, Math.round((fi + 0.5) * interval * sr));
    powerShort.fill(0);
    powerLong.fill(0);
    for (let c = 0; c < channels; c++) {
      fftShort.transform(filtered[c], center, len, powerShort, scaleShort);
      fftLong.transform(filtered[c], center, len, powerLong, scaleLong);
    }
    const row = new Array<number>(bands);
    for (let b = 0; b < bands; b++) {
      const spec = bandSpecs[b];
      const pArr = spec.useLong ? powerLong : powerShort;
      let pSum = 0;
      for (const [k, w] of spec.weights) pSum += pArr[k] * w;
      const mag = Math.sqrt(pSum) * spec.tilt;
      row[b] = mag;
      if (mag > 1e-6) nonZeroVals.push(mag);
    }
    raw.push(row);
  }

  if (peakSample < 1e-4 || trackRms < 2e-5 || !nonZeroVals.length) {
    return { version: 1, interval, bands, frames: raw.map(() => new Array<number>(bands).fill(0)) };
  }

  nonZeroVals.sort((a, b) => a - b);
  const refPeak = Math.max(
    nonZeroVals[Math.floor(nonZeroVals.length * 0.99)],
    nonZeroVals[nonZeroVals.length - 1] * 0.5,
    1e-5
  );
  const dbRange = 33;
  const frames = raw.map(row =>
    row.map(v => {
      if (v <= 1e-6) return 0;
      const db = 20 * Math.log10(v / refPeak);
      if (db <= -dbRange) return 0;
      const norm = Math.min(1, (db + dbRange) / dbRange);
      return Math.round(255 * Math.pow(norm, 1.28));
    })
  );

  return { version: 1, interval, bands, frames };
}

const isMain = Boolean(process.argv[1]) && (() => {
  try {
    return realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url));
  } catch {
    return false;
  }
})();

if (isMain) {
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
  if (!Array.isArray(tracks)) throw new Error('Expected an array of tracks with title and url fields.');
  let failures = 0;
  for (const track of tracks) {
    try {
      if (!track || typeof track.url !== 'string' || typeof track.title !== 'string') throw new Error('Missing title or url');
      const bytes = /^https?:/.test(track.url)
        ? await (async () => {
            const r = await fetch(track.url, { signal: AbortSignal.timeout(120000) });
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            return new Uint8Array(await r.arrayBuffer());
          })()
        : new Uint8Array(await readFile(track.url));
      let decoded;
      try {
        decoded = await decode(bytes);
      } catch (e) {
        throw new Error(`Unsupported format or invalid audio: ${e instanceof Error ? e.message : e}`);
      }
      if (!decoded.channelData?.[0]?.length) throw new Error('No audio samples decoded');
      track.duration = decoded.channelData[0].length / decoded.sampleRate;
      track.visualization = analyzeAudio(decoded.channelData, decoded.sampleRate);
      console.log(`Analyzed: ${track.title}`);
    } catch (e) {
      failures++;
      console.error(`${track?.title ?? 'Unknown track'}: ${e instanceof Error ? e.message : e}`);
    }
  }
  await writeFile(output, JSON.stringify(tracks));
  console.log(`Wrote ${output}; ${failures} unsupported or failed tracks retained.`);
  if (failures) process.exitCode = 2;
}
