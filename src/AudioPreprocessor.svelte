<svelte:options customElement={{tag:'compact-audio-preprocessor',props:{catalog:{type:'Array'},enrichedCatalog:{type:'Array'},theme:{type:'String'},autoAnalyze:{type:'Boolean'}}}} />
<script lang="ts">
  import { untrack } from 'svelte';
  import { compactCatalogJson } from './analyze-core';
  import { analyzeTrack, basenameKey } from './preprocess-core';
  import type { TrackResult, TrackState } from './preprocess-core';
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
  let status = $state('Paste or load a catalog JSON, then choose Analyze catalog.');
  let busy = $state(false);
  let localFiles = $state<Map<string, File>>(new Map());
  let priorCatalog: CatalogTrack[] | null = null;

  interface RowItem {
    track: CatalogTrack;
    state: TrackState;
    message: string;
  }

  let rows = $state<RowItem[]>([]);

  function emit(name: string, detail: unknown) {
    root?.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
  }

  function syncRowsFromTracks(tracks: CatalogTrack[]) {
    rows = tracks.map(track => {
      const existing = rows.find(r => r.track.url === track.url);
      return {
        track,
        state: existing?.state || 'pending',
        message: existing?.message || ''
      };
    });
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

    syncRowsFromTracks(sourceTracks);
    busy = true;
    let failures = 0;
    const out: CatalogTrack[] = [];
    try {
      for (let i = 0; i < sourceTracks.length; i++) {
        const item = sourceTracks[i];
        status = `Analyzing (${i + 1}/${sourceTracks.length}): ${item?.title ?? 'track'}…`;
        const res: TrackResult = await analyzeTrack(item, localFiles);
        rows[i] = {
          track: res.track,
          state: res.state,
          message: res.message
        };
        if (res.state !== 'ok') {
          failures++;
        }
        out.push(res.track);
      }
      enrichedCatalog = out;
      outputJson = compactCatalogJson(out);
      status = `Analyzed ${out.length - failures} of ${out.length} tracks (${failures} failed or blocked). Ready to download or copy.`;
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
      syncRowsFromTracks(parsed);
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

  async function onRowFile(e: Event, rowIndex: number) {
    const input = e.currentTarget as HTMLInputElement;
    const file = input.files?.[0];
    if (!file || !rows[rowIndex]) return;
    const next = new Map(localFiles);
    next.set(file.name.toLowerCase(), file);
    next.set(basenameKey(rows[rowIndex].track.url), file);
    localFiles = next;
    rows[rowIndex].message = `Attached ${file.name}; analyzing…`;
    const res = await analyzeTrack(rows[rowIndex].track, localFiles);
    rows[rowIndex] = {
      track: res.track,
      state: res.state,
      message: res.message
    };
    // Update enrichedCatalog and outputJson if already enriched
    if (enrichedCatalog.length === rows.length) {
      enrichedCatalog[rowIndex] = res.track;
      outputJson = compactCatalogJson(enrichedCatalog);
      emit('catalogenriched', {
        catalog: enrichedCatalog,
        json: outputJson,
        failures: rows.filter(r => r.state !== 'ok').length
      });
    }
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
        syncRowsFromTracks(incoming);
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
      rows="3"
      bind:value={inputJson}
      oninput={e => {
        try {
          const parsed = JSON.parse((e.currentTarget as HTMLTextAreaElement).value);
          if (Array.isArray(parsed)) syncRowsFromTracks(parsed);
        } catch {
          // Keep current rows while editing invalid JSON
        }
      }}
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

  {#if rows.length > 0}
    <div class="track-list" aria-label="Track analysis list">
      <div class="list-heading">
        <span>TRACKS ({rows.length})</span>
        <span>STATUS / PREVIEW</span>
      </div>
      {#each rows as row, i}
        <div class="track-row" data-state={row.state}>
          <div class="track-meta">
            <span class="track-title" title={row.track.title}>{row.track.title}</span>
            <span class="track-url" title={row.track.url}>{row.track.url}</span>
            {#if row.message}
              <span class="track-msg" class:msg-ok={row.state === 'ok'} class:msg-blocked={row.state === 'blocked'} class:msg-err={row.state === 'error'}>
                {row.message}
              </span>
            {/if}
          </div>
          <div class="track-controls">
            <audio controls preload="none" src={row.track.url}></audio>
            {#if row.state === 'blocked' || row.state === 'error'}
              <label class="row-attach-btn" title="Attach file to analyze">
                Attach file
                <input type="file" accept="audio/*,.wav,.mp3,.ogg,.flac,.m4a" onchange={e => onRowFile(e, i)} />
              </label>
            {/if}
            <span class={`status-pill pill-${row.state}`}>
              {row.state === 'ok' ? '✓ Analyzed' : row.state === 'blocked' ? 'Blocked (CORS)' : row.state === 'error' ? 'Error' : 'Pending'}
            </span>
          </div>
        </div>
      {/each}
    </div>
  {/if}

  {#if outputJson}
    <label class="box-label" style="margin-top: 14px;">
      Enriched catalog JSON
      <textarea aria-label="Enriched catalog JSON" rows="3" readonly value={outputJson}></textarea>
    </label>
  {/if}

  <div class="status" role="status" aria-live="polite">{status}</div>
</div>

<style>
  :host {
    display: block;
    width: 640px;
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
    margin-bottom: 14px;
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

  .track-list {
    margin: 14px 0;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--field);
    max-height: 280px;
    overflow-y: auto;
  }
  .list-heading {
    display: flex;
    justify-content: space-between;
    padding: 6px 12px;
    font-size: 10px;
    letter-spacing: 0.5px;
    color: var(--muted);
    border-bottom: 1px solid var(--line);
  }
  .track-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 12px;
    border-bottom: 1px solid var(--line);
  }
  .track-row:last-child {
    border-bottom: none;
  }
  .track-row[data-state='blocked'] {
    background: #ffaa000c;
  }
  .track-row[data-state='error'] {
    background: #ff44440c;
  }
  .track-meta {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    flex: 1;
  }
  .track-title {
    font-size: 12px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .track-url {
    font-size: 10px;
    color: var(--muted);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .track-msg {
    font-size: 10px;
  }
  .msg-ok {
    color: #44dd88;
  }
  .msg-blocked {
    color: #ffbb33;
  }
  .msg-err {
    color: #ff6666;
  }
  .track-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }
  audio {
    height: 28px;
    max-width: 170px;
  }
  .row-attach-btn {
    font-size: 10px;
    padding: 4px 8px;
    background: var(--field);
    border: 1px solid var(--line);
    border-radius: 4px;
    cursor: pointer;
    color: var(--ink);
  }
  .row-attach-btn:hover {
    border-color: var(--accent);
  }
  .row-attach-btn input {
    display: none;
  }
  .status-pill {
    font-size: 10px;
    padding: 2px 7px;
    border-radius: 10px;
    border: 1px solid var(--line);
    white-space: nowrap;
  }
  .pill-ok {
    color: #44dd88;
    border-color: #44dd8844;
  }
  .pill-blocked {
    color: #ffbb33;
    border-color: #ffbb3344;
  }
  .pill-error {
    color: #ff6666;
    border-color: #ff666644;
  }
  .pill-pending {
    color: var(--muted);
  }

  .status {
    min-height: 14px;
    font-size: 11px;
    color: var(--muted);
  }
</style>
