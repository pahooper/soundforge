import { analyzeAudio } from './analyze-core';
import type { CatalogTrack } from './catalog';

export type TrackState = 'pending' | 'ok' | 'blocked' | 'error';

export interface TrackResult {
  track: CatalogTrack;
  state: TrackState;
  message: string;
}

export function basenameKey(rawUrl: string): string {
  const clean = rawUrl.replace(/[?#].*$/, '');
  const parts = clean.split('/');
  const base = parts[parts.length - 1] || clean;
  try {
    return decodeURIComponent(base).toLowerCase();
  } catch {
    return base.toLowerCase();
  }
}

export async function fetchAudioBytes(
  rawUrl: string,
  localFiles?: Map<string, File>
): Promise<{ bytes?: ArrayBuffer; state: 'ok' | 'blocked' | 'error'; message: string }> {
  const trimmed = rawUrl.trim();
  const key = basenameKey(trimmed);
  const localMatch = localFiles?.get(key) || localFiles?.get(trimmed.toLowerCase());
  if (localMatch) {
    try {
      const bytes = await localMatch.arrayBuffer();
      return { bytes, state: 'ok', message: 'Loaded from attached file' };
    } catch (e) {
      return { state: 'error', message: `Cannot read local file: ${e instanceof Error ? e.message : e}` };
    }
  }

  const resolved =
    typeof window !== 'undefined' && window.location
      ? new URL(trimmed, window.location.href).href
      : trimmed;

  // 1. Authenticated browser fetch (sends browser mTLS client certs, SSO cookies, and session auth)
  let lastStatus = 0;
  try {
    const r = await fetch(resolved, { credentials: 'include' });
    if (r.ok) {
      return { bytes: await r.arrayBuffer(), state: 'ok', message: 'Fetched' };
    }
    lastStatus = r.status;
    if (r.status === 404 || r.status >= 500) {
      return { state: 'error', message: `HTTP ${r.status}` };
    }
  } catch {
    // CORS or credential restriction; try without credentials
  }

  // 2. Credential-less browser fetch (for public CDNs with Access-Control-Allow-Origin: *)
  try {
    const r = await fetch(resolved, { credentials: 'omit' });
    if (r.ok) {
      return { bytes: await r.arrayBuffer(), state: 'ok', message: 'Fetched' };
    }
    lastStatus = r.status;
    if (r.status === 404 || r.status >= 500) {
      return { state: 'error', message: `HTTP ${r.status}` };
    }
  } catch {
    // Cross-origin read blocked by CORS
  }

  if (lastStatus > 0) {
    return { state: 'error', message: `HTTP ${lastStatus}` };
  }

  return {
    state: 'blocked',
    message: 'Cross-origin read blocked by CORS. Audio plays in browser; attach file to analyze.'
  };
}

export async function decodeInBrowser(
  buffer: ArrayBuffer
): Promise<{ channelData: Float32Array[]; sampleRate: number }> {
  const OfflineCtx =
    (globalThis as unknown as { OfflineAudioContext?: typeof OfflineAudioContext; webkitOfflineAudioContext?: typeof OfflineAudioContext })
      .OfflineAudioContext ||
    (globalThis as unknown as { webkitOfflineAudioContext?: typeof OfflineAudioContext }).webkitOfflineAudioContext;
  if (!OfflineCtx) {
    throw new Error('Web Audio OfflineAudioContext is not available in this environment.');
  }
  const ctx = new OfflineCtx(1, 1, 44100);
  const decoded = await ctx.decodeAudioData(buffer.slice(0));
  const channelData: Float32Array[] = [];
  for (let c = 0; c < decoded.numberOfChannels; c++) {
    channelData.push(decoded.getChannelData(c));
  }
  return { channelData, sampleRate: decoded.sampleRate };
}

export async function analyzeTrack(
  track: CatalogTrack,
  localFiles?: Map<string, File>
): Promise<TrackResult> {
  const copy: CatalogTrack = { ...track };
  if (!copy || typeof copy.title !== 'string' || typeof copy.url !== 'string') {
    return { track: copy, state: 'error', message: 'Missing title or url' };
  }

  const fetched = await fetchAudioBytes(copy.url, localFiles);
  if (fetched.state !== 'ok' || !fetched.bytes) {
    return { track: copy, state: fetched.state, message: fetched.message };
  }

  try {
    const decoded = await decodeInBrowser(fetched.bytes);
    if (!decoded.channelData[0]?.length) {
      return { track: copy, state: 'error', message: 'No audio samples decoded' };
    }
    copy.duration = Math.round((decoded.channelData[0].length / decoded.sampleRate) * 100) / 100;
    copy.visualization = analyzeAudio(decoded.channelData, decoded.sampleRate);
    return { track: copy, state: 'ok', message: `Analyzed (${copy.duration}s)` };
  } catch (err) {
    return {
      track: copy,
      state: 'error',
      message: `Decode failed: ${err instanceof Error ? err.message : err}`
    };
  }
}
