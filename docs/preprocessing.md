# Audio preprocessing

The CLI reads a JSON catalog, analyzes each audio file, and writes a new catalog with duration and visualization data. It preserves additional fields. It does not convert audio formats, alter audio files, or upload local files to a service.

## Working example

Follow the README HTML quick start to create `soundforge-demo`. From that folder:

```sh
node ../node_modules/@pahooper/soundforge/dist/analyze.js tracks.json tracks-enriched.json
node serve.mjs .
```

Open http://127.0.0.1:8080 and select either Maple Leaf Rag excerpt. The page loads the enriched catalog by default.

Input:

```json
[
  {"title":"Maple Leaf Rag — Opening","url":"./audio/opening.wav","category":"Ragtime"},
  {"title":"Maple Leaf Rag — Second passage","url":"./audio/second-passage.wav","category":"Ragtime"}
]
```

Expected terminal output:

```text
Analyzed: Maple Leaf Rag — Opening
Analyzed: Maple Leaf Rag — Second passage
Wrote tracks-enriched.json; 0 unsupported or failed tracks retained.
```

The output is a JSON array. A representative first track, with the frame array abbreviated for readability:

```js
{
  title: "Maple Leaf Rag — Opening",
  url: "./audio/opening.wav",
  category: "Ragtime",
  duration: 8,
  visualization: {
    version: 1,
    interval: 0.1,
    bands: 8,
    frames: [
      [255, 52, 51, 20, 7, 6, 3, 1],
      // 79 more frames follow in the supplied tracks-enriched.json.
    ]
  }
}
```

This illustrative object is not a replacement catalog. The packaged `examples/tracks-enriched.json` contains complete, generated data and is usable as written.

## Data contract

| Field | Meaning |
| --- | --- |
| `title` | Required string, displayed to the listener. |
| `url` | Required string; local file path or HTTP(S) URL for analysis. Must also resolve to playable audio when used by the browser. |
| `duration` | Written by analysis, in seconds. |
| `visualization.version` | Currently 1. |
| `visualization.interval` | Seconds between frames; CLI emits 0.1. |
| `visualization.bands` | Number of values per frame; CLI emits 8. |
| `visualization.frames` | Arrays of band values, integer 0–255. |
| Other fields | Preserved, for example `category`, `id`, and application metadata. |

The current analyzer measures the first decoded audio channel using eight frequency bands and normalizes the values across that track. It is a compact visualization representation, not loudness measurement or lossless audio data.

## Local paths and browser URLs

Local paths are relative to the terminal working directory, not the catalog file's directory. In the generated example, run analysis from `soundforge-demo`; then `./audio/opening.wav` is correct for both analysis and browser playback.

If analysis uses a machine-only path such as `/home/me/audio/song.mp3`, the CLI preserves it. Before serving the catalog, map it to a public browser URL such as `/audio/song.mp3` and host that file at that location. Do not publish private filesystem paths unintentionally.

The browser page fetches the catalog; relative audio URLs resolve against the page URL, not automatically against the JSON URL. Keep a shared layout or use absolute HTTP(S) audio URLs.

## Remote files

Input tracks can use HTTP(S) URLs. The CLI requires a successful response and downloads the complete file. Each request has a 120-second timeout. There is no CLI option for authentication headers.

Node analysis is not subject to browser CORS rules. A URL that works for analysis may still fail browser playback because of authentication, codecs, hosting policy, or mixed HTTP/HTTPS content. Serve browser audio over an appropriate public or authorized URL.

## Failures and exit codes

| Exit code | Meaning |
| --- | --- |
| 0 | Catalog written; all tracks analyzed. |
| 1 | Invalid invocation/catalog or fatal I/O error. Input and output must differ. |
| 2 | Output written, but at least one track failed. Failed tracks are retained. |

For per-track failures the CLI logs a title and error, continues to the next track, and leaves that track in the output. Existing duration/visualization fields on a failed track may remain, so inspect the error log before treating output as freshly analyzed.

Back up important output before rerunning: the output file is overwritten. The CLI refuses identical input/output paths; use distinct files, not aliases or symlinks to the same file.

## Format support and resource limits

Fixture-tested groups: MP3, PCM WAV, FLAC, Ogg Vorbis, Ogg Opus, and AAC in M4A. Support depends on the actual codec/container variant. Browser decoding is a separate capability.

Files are downloaded/decoded completely and processed sequentially. Memory use can be much larger than the compressed file. Test with modest files before processing long recordings. No FFmpeg executable is required or downloaded by SoundForge.

## Use the output

```js
const response = await fetch('./tracks-enriched.json');
if (!response.ok) throw new Error('Catalog HTTP ' + response.status);
library.catalog = await response.json();
```

Connect the catalog to the player before assigning these tracks, as shown in the complete HTML example. The selected Track includes its visualization automatically.

[Back to README](../README.md) · [CLI reference](reference.md#cli) · [Troubleshooting](troubleshooting.md)
