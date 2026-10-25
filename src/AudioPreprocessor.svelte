<svelte:options customElement={{tag:'compact-audio-preprocessor',props:{catalog:{type:'Array'},enrichedCatalog:{type:'Array'},theme:{type:'String'},autoAnalyze:{type:'Boolean'}}}} />
<script lang="ts">
  import { untrack } from 'svelte';
  import { analyzeAudio, compactCatalogJson } from './analyze-core';
  import type { CatalogTrack } from './catalog';

  interface Props {
    catalog?: CatalogTrack[];
    enrichedCatalog?: CatalogTrack[];
    theme?: string;
    autoAnalyze?: boolean;
  }

  let {
    catalog = $bindable([]),
    enrichedCatalog = $bindable([]),
    theme = $bindable('dark'),
    autoAnalyze = $bindable(false)
  }: Props = $props();

  let root: HTMLDivElement;
  let inputJson = $state('[]');
  let outputJson = $state('');
  let status = $state('Paste or load a catalog JSON (with title and url), then choose Analyze catalog.');
  let busy = $state(false);
  let localFiles = $state<Map<string, File>>(new Map());
  let priorCatalog: CatalogTrack[] | null = null;

  function emit(name: string, detail: unknown) {
    root?.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
  }

  function basenameKey(rawUrl: string): string {
    const clean = rawUrl.replace(/[?#].*$/, '');
    const parts = clean.split('/');
    const base = parts[parts.length - 1] || clean;
    try {
      return decodeURIComponent(base).toLowerCase();
    } catch {
      return base.toLowerCase();
    }
  }

  async function fetchAudioBytes(rawUrl: string): Promise<ArrayBuffer> {
    const trimmed = rawUrl.trim();
    const key = basenameKey(trimmed);
    const localMatch = localFiles.get(key) || localFiles.get(trimmed.toLowerCase());
    if (localMatch) {
      return await localMatch.arrayBuffer();
    }

    const resolved = typeof window !== 'undefined' && window.location
      ? new URL(trimmed, window.location.href).href
      : trimmed;

    // 1. Authenticated browser fetch (sends browser mTLS client certs, SSO cookies, and session auth)
    try {
      const r = await fetch(resolved, { credentials: 'include' });
      if (r.ok) return await r.arrayBuffer();
      if (r.status === 404 || r.status >= 500) throw new Error(`HTTP ${r.status}`);
    } catch (err) {
      if (err instanceof Error && /^HTTP \d+$/.test(err.message)) throw err;
    }

    // 2. Credential-less browser fetch (for public CDNs with Access-Control-Allow-Origin: *)
    try {
      const r = await fetch(resolved, { credentials: 'omit' });
      if (r.ok) return await r.arrayBuffer();
      throw new Error(`HTTP ${r.status}`);
    } catch (err) {
      if (err instanceof Error && /^HTTP \d+$/.test(err.message)) throw err;
    }

    // 3. Local dev server CORS-free proxy fallback (when cross-origin host omits CORS headers)
    const proxyUrl = `/__soundforge_fetch?url=${encodeURIComponent(resolved)}`;
    const pr = await fetch(proxyUrl);
    if (!pr.ok) {
      throw new Error(`Unable to fetch (${pr.status}). Attach the local audio file or check the URL.`);
    }
    return await pr.arrayBuffer();
  }

  async function decodeInBrowser(buffer: ArrayBuffer): Promise<{ channelData: Float32Array[]; sampleRate: number }> {
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

  export async function analyzeCatalog(overrideTracks?: CatalogTrack[]): Promise<CatalogTrack[]> {
    let sourceTracks: CatalogTrack[];
    if (overrideTracks) {
      sourceTracks = overrideTracks;
    } else {
      try {
        const parsed = JSON.parse(inputJson);
        if (!Array.isArray(parsed)) throw new Error('Expected a JSON array of tracks.');
        sourceTracks = parsed;
      } catch (e) {
        status = `Invalid JSON: ${e instanceof Error ? e.message : e}`;
        return [];
      }
    }

    busy = true;
    let failures = 0;
    const out: CatalogTrack[] = [];
    try {
      for (let i = 0; i < sourceTracks.length; i++) {
        const item = sourceTracks[i];
        const copy: CatalogTrack = { ...item };
        status = `Analyzing (${i + 1}/${sourceTracks.length}): ${copy?.title ?? 'track'}…`;
        try {
          if (!copy || typeof copy.title !== 'string' || typeof copy.url !== 'string') {
            throw new Error('Missing title or url');
          }
          const buf = await fetchAudioBytes(copy.url);
          const decoded = await decodeInBrowser(buf);
          if (!decoded.channelData[0]?.length) throw new Error('No audio samples decoded');
          copy.duration = Math.round((decoded.channelData[0].length / decoded.sampleRate) * 100) / 100;
          copy.visualization = analyzeAudio(decoded.channelData, decoded.sampleRate);
        } catch (err) {
          failures++;
          status = `${copy?.title ?? 'Track'}: ${err instanceof Error ? err.message : err}`;
        }
        out.push(copy);
      }
      enrichedCatalog = out;
      outputJson = compactCatalogJson(out);
      status = `Analyzed ${out.length - failures} of ${out.length} tracks (${failures} failed). Ready to download or apply.`;
      emit('catalogenriched', { catalog: out, json: outputJson, failures });
      return out;
    } finally {
      busy = false;
    }
  }

  async function onJsonFile(e: Event) {
    const input = e.currentTarget as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      if (!Array.isArray(parsed)) throw new Error('Expected a JSON array of tracks.');
      catalog = parsed;
      inputJson = JSON.stringify(parsed, null, 2);
      status = `Loaded ${parsed.length} tracks from ${file.name}.`;
    } catch (err) {
      status = `Could not read JSON file: ${err instanceof Error ? err.message : err}`;
    }
  }

  function onAudioFiles(e: Event) {
    const input = e.currentTarget as HTMLInputElement;
    const files = Array.from(input.files || []);
    if (!files.length) return;
    const next = new Map(localFiles);
    for (const f of files) {
      next.set(f.name.toLowerCase(), f);
    }
    localFiles = next;
    status = `Attached ${next.size} local audio file(s) for zero-network matching.`;
  }

  function downloadJson() {
    if (!outputJson) return;
    const blob = new Blob([outputJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tracks-enriched.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    status = 'Downloaded tracks-enriched.json.';
  }

  async function copyJson() {
    if (!outputJson) return;
    try {
      await navigator.clipboard.writeText(outputJson);
      status = 'Copied enriched JSON to clipboard.';
    } catch {
      status = 'Select the Enriched catalog JSON box to copy.';
    }
  }

  $effect(() => {
    const incoming = catalog;
    untrack(() => {
      if (incoming === priorCatalog) return;
      priorCatalog = incoming;
      if (Array.isArray(incoming)) {
        inputJson = JSON.stringify(incoming, null, 2);
        if (autoAnalyze && incoming.length > 0) {
          void analyzeCatalog(incoming);
        }
      }
    });
  });
</script>

<div bind:this={root} class="preprocessor" class:light={theme === 'light'}>
  <div class="heading">
    <div>
      <div class="eyebrow">ZERO-FUSS PREPROCESSOR</div>
      <h2>Browser catalog analyzer</h2>
    </div>
    <span class="badge">{localFiles.size ? `${localFiles.size} local files` : 'Browser session'}</span>
  </div>
  <p class="help">
    Analyzes audio directly in your browser using your active session (cookies, mTLS, local files) and outputs compact 36-band visualization JSON.
  </p>

  <div class="file-row">
    <label class="file-btn">
      Load tracks.json
      <input type="file" accept=".json,application/json" onchange={onJsonFile} />
    </label>
    <label class="file-btn">
      Attach local audio (optional)
      <input type="file" multiple accept="audio/*,.wav,.mp3,.ogg,.flac,.m4a" onchange={onAudioFiles} />
    </label>
  </div>

  <label class="box-label">
    Input catalog JSON
    <textarea
      aria-label="Input catalog JSON"
      rows="4"
      bind:value={inputJson}
      placeholder={'[{"title":"Song","url":"./audio/song.mp3"}]'}
    ></textarea>
  </label>

  <div class="actions">
    <button class="primary" disabled={busy} aria-label="Analyze catalog" onclick={() => analyzeCatalog()}>
      {busy ? 'Analyzing…' : 'Analyze catalog'}
    </button>
    <button class="secondary" disabled={!outputJson} onclick={downloadJson}>
      Download tracks-enriched.json
    </button>
    <button class="secondary" disabled={!outputJson} onclick={copyJson}>
      Copy JSON
    </button>
  </div>

  {#if outputJson}
    <label class="box-label">
      Enriched catalog JSON
      <textarea aria-label="Enriched catalog JSON" rows="3" readonly value={outputJson}></textarea>
    </label>
  {/if}

  <div class="status" role="status" aria-live="polite">{status}</div>
</div>

<style>
  :host {
    display: block;
    width: 540px;
    max-width: 100%;
    font-family: Arial, Helvetica, sans-serif;
  }
  .preprocessor {
    --ink: #f6f8fa;
    --muted: #99a7b3;
    --accent: #00c5df;
    --line: #3b454e;
    --field: #1d252a;
    --hover: #2e3b42;
    box-sizing: border-box;
    color: var(--ink);
    background: radial-gradient(ellipse at 50% 42%, #273238, #20282c 65%, #1e2529);
    border: 1px solid #ffffff15;
    border-radius: 12px;
    padding: 20px 24px;
    box-shadow: 0 12px 24px #0003;
  }
  .light {
    --ink: #27323b;
    --muted: #667684;
    --accent: #008fa5;
    --line: #d4dbe2;
    --field: #f2f5f7;
    --hover: #e9f4f6;
    background: linear-gradient(130deg, #fff, #fafcfd);
    border-color: #e3e7eb;
  }
  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .eyebrow {
    font-size: 10px;
    letter-spacing: 1px;
    color: var(--muted);
  }
  h2 {
    font-size: 18px;
    margin: 5px 0 0;
  }
  .badge {
    font-size: 11px;
    color: var(--accent);
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 3px 9px;
  }
  .help {
    font-size: 12px;
    line-height: 1.5;
    color: var(--muted);
    margin: 10px 0 14px;
  }
  .file-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;
  }
  .file-btn {
    font-size: 11px;
    color: var(--ink);
    background: var(--field);
    border: 1px solid var(--line);
    border-radius: 6px;
    padding: 6px 10px;
    cursor: pointer;
  }
  .file-btn:hover {
    background: var(--hover);
    border-color: var(--accent);
  }
  .file-btn input {
    display: none;
  }
  .box-label {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 12px;
  }
  textarea {
    box-sizing: border-box;
    width: 100%;
    background: var(--field);
    color: var(--ink);
    border: 1px solid var(--line);
    border-radius: 7px;
    padding: 8px 10px;
    font: 12px/1.4 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    resize: vertical;
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;
  }
  button {
    font: inherit;
    font-size: 12px;
    border-radius: 7px;
    padding: 8px 12px;
    cursor: pointer;
    border: 1px solid var(--line);
  }
  button:disabled {
    opacity: 0.35;
    cursor: default;
  }
  .primary {
    background: linear-gradient(130deg, #00c9e4, #00a6c1);
    color: #fff;
    border-color: #66e5f3;
    font-weight: 600;
  }
  .secondary {
    background: var(--field);
    color: var(--ink);
  }
  .secondary:hover:not(:disabled) {
    background: var(--hover);
    border-color: var(--accent);
  }
  .status {
    min-height: 14px;
    font-size: 11px;
    color: var(--muted);
  }
</style>
