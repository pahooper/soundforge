import type { Visualization } from './types.ts';

export function frameAt(data: Visualization | undefined, time: number): number[] {
  if (!data || data.version !== 1 || !(data.interval > 0) || !data.frames.length) return [];
  const position = Math.max(0, time) / data.interval;
  const index = Math.min(Math.floor(position), data.frames.length - 1);
  const a = data.frames[index], b = data.frames[Math.min(index + 1, data.frames.length - 1)];
  const blend = Math.min(1, position - index);
  return a.map((v, i) => Math.max(0, Math.min(1, (v + ((b[i] ?? v) - v) * blend) / 255)));
}

export function nextIndex(index: number, length: number, direction: number): number {
  return Math.max(0, Math.min(length - 1, index + direction));
}

/** Map a spectral frame (36-band native or legacy 8-band) to column heights in [0, 1]. */
export function barsAt(frame: number[], count = 36): number[] {
  if (!frame.length) return new Array<number>(count).fill(0.025);
  const clamped = frame.map(v => Math.max(0, Math.min(1, v)));
  const raw = new Array<number>(count);
  if (clamped.length === count) {
    for (let i = 0; i < count; i++) raw[i] = clamped[i];
  } else {
    const maxIdx = clamped.length - 1;
    for (let i = 0; i < count; i++) {
      const f = count > 1 ? (i / (count - 1)) * maxIdx : 0;
      const lo = Math.max(0, Math.floor(f));
      const hi = Math.min(maxIdx, lo + 1);
      const mu = 0.5 - 0.5 * Math.cos(Math.PI * (f - lo));
      raw[i] = clamped[lo] + (clamped[hi] - clamped[lo]) * mu;
    }
  }
  return raw.map((v, i) => {
    const prev = i > 0 ? raw[i - 1] : 0;
    const next = i < count - 1 ? raw[i + 1] : 0;
    const shoulder = Math.max(prev, next) * 0.34 + (prev + next) * 0.12;
    const val = Math.max(v, shoulder > 0.04 ? shoulder : 0);
    return Math.max(0, Math.min(1, val));
  });
}

/** Frame-rate-independent asymmetric attack/release ballistics and peak-hold caps. */
export function stepBars(
  current: number[],
  peaks: number[],
  holds: number[],
  target: number[],
  dt: number,
  snap = false
): void {
  const immediate = snap || !(dt > 0) || dt > 0.25;
  const attackAlpha = immediate ? 1 : 1 - Math.exp(-dt / 0.026);
  const releaseAlpha = immediate ? 1 : 1 - Math.exp(-dt / 0.14);
  for (let i = 0; i < target.length; i++) {
    const t = Math.max(0, Math.min(1, target[i] ?? 0));
    const prev = current[i] ?? t;
    const next = immediate ? t : prev + (t - prev) * (t >= prev ? attackAlpha : releaseAlpha);
    current[i] = Math.abs(next - t) < 1e-4 ? t : next;
    if (immediate || current[i] >= (peaks[i] ?? 0)) {
      peaks[i] = current[i];
      holds[i] = 0.18;
    } else if ((holds[i] ?? 0) > 0) {
      holds[i] = Math.max(0, holds[i] - dt);
    } else {
      peaks[i] = Math.max(current[i], (peaks[i] ?? 0) - dt * 0.65);
    }
  }
}

/** Spatially localized multi-band ribbon wave driven by the current frequency frame, not a scrolling clock. */
export function waveOffset(frame: number[], position: number, layer: number): number {
  if (!frame.length) return 0;
  const bands = frame.map(v => Math.max(0, Math.min(1, v)));
  const n = bands.length;
  let energySum = 0;
  let maxBand = 0;
  let weightedSum = 0;
  for (let i = 0; i < n; i++) {
    const v = bands[i];
    energySum += v;
    if (v > maxBand) maxBand = v;
    const u = n > 1 ? i / (n - 1) : 0.5;
    weightedSum += u * v;
  }
  if (energySum === 0 || position <= 0 || position >= 1) return 0;

  const envelope = Math.pow(Math.sin(Math.PI * position), 0.8);
  const centroid = weightedSum / energySum;
  const layerNorm = (layer - 13.5) / 13.5;
  const sigma = n <= 8 ? 0.26 : 0.16;

  let displacement = 0;
  let packetSupport = 0;
  for (let i = 0; i < n; i++) {
    const v = bands[i];
    if (v <= 0) continue;
    const u = n > 1 ? i / (n - 1) : 0.5;
    const center = 0.1 + 0.8 * u;
    const dx = (position - center) / sigma;
    const packet = Math.exp(-0.5 * dx * dx);
    if (packet < 1e-3) continue;

    const amp = Math.pow(v, 0.72);
    packetSupport += packet * (0.35 + 0.65 * amp);
    const freq = 2.0 + u * 6.5;
    const braidPhase = layerNorm * (1.05 + 0.6 * amp) * Math.sin(Math.PI * (position * (2.2 + centroid * 2.4) + u * 1.9));
    const carrier = Math.sin(position * Math.PI * freq + u * 4.1 + braidPhase);
    const overtone = 0.38 * Math.cos(position * Math.PI * (freq * 1.45 + 1) - u * 3.1 - layerNorm * 1.1);
    displacement += packet * amp * (carrier + overtone);
  }

  const norm = 1 / Math.max(1.15, packetSupport * 0.72);
  const peakDrive = 0.45 + 0.55 * Math.pow(maxBand, 0.65);
  const normalizedDisp = displacement * norm * peakDrive;
  const localStrength = Math.min(1, packetSupport * 0.45) * peakDrive;
  const ribbonTwist =
    layerNorm *
    localStrength *
    Math.sin(position * Math.PI * (2.5 + centroid * 3.5) + centroid * Math.PI * 1.5) *
    28;
  return envelope * (normalizedDisp * 74 + ribbonTwist);
}
