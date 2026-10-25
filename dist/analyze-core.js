function createFFT(N) {
    const half = N >> 1;
    const win = new Float64Array(N);
    for (let n = 0; n < N; n++)
        win[n] = 0.5 - 0.5 * Math.cos((2 * Math.PI * n) / (N - 1));
    const rev = new Uint32Array(N);
    const bits = Math.round(Math.log2(N));
    for (let i = 0; i < N; i++) {
        let x = i, r = 0;
        for (let b = 0; b < bits; b++) {
            r = (r << 1) | (x & 1);
            x >>= 1;
        }
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
/**
 * Pure multi-genre 36-band spectral analyzer shared by Node CLI and Browser Preprocessor.
 * Covers 32 Hz (Lo-Fi 808 sub-bass, gaming synth bass, orchestral timpani) to 14.5 kHz
 * (Holiday sleigh bells, chimes, hi-hats, SFX transients) with decoupled macro-dynamics
 * (44 dB window for quiet intros vs climaxes) and sharp within-frame spectral contrast.
 */
export function analyzeAudio(channelData, sr) {
    const interval = 0.05;
    const bands = 36;
    const len = channelData[0]?.length ?? 0;
    const channels = channelData.length;
    if (!len || !channels) {
        return { version: 1, interval, bands, frames: [] };
    }
    const filtered = new Array(channels);
    const rHp = Math.max(0.92, 1 - (2 * Math.PI * 18) / sr);
    let totalEnergy = 0, peakSample = 0;
    for (let c = 0; c < channels; c++) {
        const src = channelData[c];
        const ch = new Float32Array(len);
        let mean = 0;
        const skip = Math.min(256, Math.floor(len * 0.05));
        for (let i = skip; i < len; i++)
            mean += src[i];
        mean = len > skip ? mean / (len - skip) : 0;
        let prevX = 0, prevY = 0, prevY2 = 0;
        for (let i = 0; i < len; i++) {
            const x = i < skip && Math.abs(src[i]) < Math.abs(mean) * 0.25 ? 0 : src[i] - mean;
            const y1 = x - prevX + rHp * prevY;
            const y2 = y1 - prevY + rHp * prevY2;
            prevX = x;
            prevY = y1;
            prevY2 = y2;
            ch[i] = y2;
            const v = Math.abs(y2);
            if (v > peakSample)
                peakSample = v;
            totalEnergy += v * v;
        }
        filtered[c] = ch;
    }
    const trackRms = Math.sqrt(totalEnergy / Math.max(1, len * channels));
    const subHop = Math.max(1, Math.round(sr * (interval * 0.5)));
    let shortN = 512;
    while (shortN < subHop * 2 || shortN < Math.round(sr * 0.042))
        shortN <<= 1;
    if (shortN > 2048)
        shortN = 2048;
    const longN = shortN << 1;
    const fftShort = createFFT(shortN);
    const fftLong = createFFT(longN);
    const powerShort = new Float64Array(fftShort.half);
    const powerLong = new Float64Array(fftLong.half);
    const fMin = 32;
    const fMax = Math.max(fMin * 4, Math.min(14500, sr * 0.46));
    const ratio = Math.pow(fMax / fMin, 1 / bands);
    const bandSpecs = Array.from({ length: bands }, (_, b) => {
        const fLo = fMin * Math.pow(ratio, b);
        const fHi = fMin * Math.pow(ratio, b + 1);
        const fCenter = Math.sqrt(fLo * fHi);
        const useLong = fCenter < 300;
        const N = useLong ? longN : shortN;
        const half = N >> 1;
        const binHz = sr / N;
        const halfBw = Math.max((fHi - fLo) * 0.58, binHz * 0.78);
        const kStart = Math.max(1, Math.floor((fCenter - halfBw * 1.3) / binHz));
        const kEnd = Math.min(half - 1, Math.ceil((fCenter + halfBw * 1.3) / binHz));
        const weights = [];
        let wSum = 0;
        for (let k = kStart; k <= kEnd; k++) {
            const dist = Math.abs(k * binHz - fCenter) / halfBw;
            const w = Math.exp(-1.65 * dist * dist);
            if (w > 0.05) {
                weights.push([k, w]);
                wSum += w;
            }
        }
        if (!weights.length) {
            const k = Math.max(1, Math.min(half - 1, Math.round(fCenter / binHz)));
            weights.push([k, 1]);
            wSum = 1;
        }
        const bwNorm = 1 / Math.pow(Math.max(1, wSum), 0.22);
        const tilt = Math.pow(Math.max(fCenter, 180) / 180, 0.14) * bwNorm;
        return {
            useLong,
            tilt,
            weights
        };
    });
    const frameCount = Math.max(1, Math.ceil(len / (sr * interval)));
    const raw = [];
    const nonZeroVals = [];
    const scaleShort = 1 / (channels * shortN * shortN);
    const scaleLong = 1 / (channels * longN * longN);
    for (let fi = 0; fi < frameCount; fi++) {
        const row = new Array(bands).fill(0);
        for (const subOffset of [0.25, 0.75]) {
            const center = Math.min(len - 1, Math.round((fi + subOffset) * interval * sr));
            powerShort.fill(0);
            powerLong.fill(0);
            for (let c = 0; c < channels; c++) {
                fftShort.transform(filtered[c], center, len, powerShort, scaleShort);
                fftLong.transform(filtered[c], center, len, powerLong, scaleLong);
            }
            for (let b = 0; b < bands; b++) {
                const spec = bandSpecs[b];
                const pArr = spec.useLong ? powerLong : powerShort;
                let pSum = 0;
                for (const [k, w] of spec.weights)
                    pSum += pArr[k] * w;
                const mag = Math.sqrt(pSum) * spec.tilt;
                if (mag > row[b])
                    row[b] = mag;
            }
        }
        for (let b = 0; b < bands; b++) {
            if (row[b] > 1e-6)
                nonZeroVals.push(row[b]);
        }
        raw.push(row);
    }
    if (peakSample < 1e-4 || trackRms < 2e-5 || !nonZeroVals.length) {
        return { version: 1, interval, bands, frames: raw.map(() => new Array(bands).fill(0)) };
    }
    nonZeroVals.sort((a, b) => a - b);
    const refPeak = Math.max(nonZeroVals[Math.floor(nonZeroVals.length * 0.99)], nonZeroVals[nonZeroVals.length - 1] * 0.5, 1e-5);
    // Decoupled Macro-Dynamics (44 dB across-time ceiling so quiet orchestral/chant intros remain visible)
    // and Micro-Spectral Contrast (28 dB within-frame window + dense-bed carving so harmonic peaks stay sharp).
    const macroDbRange = 44;
    const microDbRange = 28;
    const frames = raw.map(row => {
        const dbs = row.map(v => (v <= 1e-6 ? -120 : 20 * Math.log10(v / refPeak)));
        const sortedDbs = [...dbs].sort((a, b) => a - b);
        const medDb = sortedDbs[bands >> 1];
        const maxDb = sortedDbs[bands - 1];
        if (maxDb <= -macroDbRange)
            return new Array(bands).fill(0);
        const macroNorm = Math.min(1, Math.max(0, (maxDb + macroDbRange) / macroDbRange));
        const frameCeiling = 255 * Math.pow(macroNorm, 0.92);
        const crestDb = maxDb - medDb;
        const bedCut = medDb > maxDb - 24 && crestDb > 3.5
            ? Math.min(12, (24 - crestDb) * 0.55 * Math.min(1, (crestDb - 3.5) / 5.5))
            : 0;
        const frameRefDb = Math.min(0, maxDb);
        return dbs.map(db => {
            if (db <= -macroDbRange)
                return 0;
            const prominence = Math.max(0, db - medDb);
            const cut = bedCut * Math.max(0, 1 - prominence / 7.5);
            const relDb = (db - cut) - frameRefDb;
            if (relDb <= -microDbRange)
                return 0;
            const microNorm = Math.min(1, (relDb + microDbRange) / microDbRange);
            return Math.round(frameCeiling * Math.pow(microNorm, 1.35));
        });
    });
    return { version: 1, interval, bands, frames };
}
/**
 * Serialize an enriched catalog to compact JSON with rounded durations.
 */
export function compactCatalogJson(tracks) {
    const normalized = tracks.map(t => {
        if (typeof t?.duration === 'number' && Number.isFinite(t.duration)) {
            return { ...t, duration: Math.round(t.duration * 100) / 100 };
        }
        return t;
    });
    return JSON.stringify(normalized);
}
