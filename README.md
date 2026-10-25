# SoundForge

SoundForge provides an embeddable audio player and catalog browser with playlists, layered mixes, and audio visualizations. Its preprocessing CLI analyzes local or remote audio files ahead of time, adding track durations and compact visualization data to your catalog.

- Play individual tracks or build and reorder a playlist.
- Browse a catalog by category and title.
- Blend a base track with up to three layers, with separate volume and mute controls.
- Generate visualization data ahead of playback using the command-line tool.
- Embed the player and catalog together or use either independently.
- Choose light or dark themes, bars or wave visualization, and responsive widths.

[HTML quick start](#html-quick-start) · [Preprocess audio](#preprocess-audio) · [API reference](https://github.com/pahooper/soundforge/blob/main/docs/reference.md) · [Examples](https://github.com/pahooper/soundforge/tree/main/examples) · [Report an issue](https://github.com/pahooper/soundforge/issues)

## Supported audio formats

| Preprocessing format | Tested container / extension |
| --- | --- |
| MP3 | MPEG audio, `.mp3` |
| WAV | PCM WAV, `.wav` |
| FLAC | `.flac` |
| Ogg Vorbis | Ogg, `.ogg` |
| Ogg Opus | Ogg, `.ogg` |
| AAC | M4A / MP4, `.m4a` |

These are the six fixture-tested format groups, not a guarantee for every codec variant, bit depth, or container. Renaming a file does not convert its audio. Browser playback depends on the browser's own media support, separately from CLI decoding. Chromium is tested; Firefox and Safari have not been certified.

## Install and requirements

```sh
npm install @pahooper/soundforge
```

Use Node.js **22.18 or newer** for the CLI and example scripts. Browser components run in modern browsers supporting JavaScript modules and custom elements. Serve examples over HTTP; opening HTML directly with `file://` can block modules and catalog loading.

The package includes compiled browser modules, TypeScript declarations, the `soundforge-analyze` CLI, and a complete HTML example with real local music and precomputed visualizations. There are no consumer install scripts. Decoder dependencies are installed by npm for CLI use.

## HTML quick start

Start in a new folder. Run each command from that folder:

```sh
npm init -y
npm install @pahooper/soundforge
node node_modules/@pahooper/soundforge/examples/setup.mjs soundforge-demo
node soundforge-demo/serve.mjs soundforge-demo
```

Open **http://127.0.0.1:8080**. You should see the catalog and player with two eight-second tracks, **Maple Leaf Rag — Opening** and **Maple Leaf Rag — Second passage**. Select Play beside a track; if autoplay is blocked, press Play in the player. Bars/wave visualization uses the included enriched catalog. Choose **Original audio only**, then select a track, to compare the static fallback.

The setup command creates a new folder and refuses to overwrite existing files:

```text
soundforge-demo/
  index.html
  lib/                   compiled player, catalog, and connection modules
  audio/opening.wav
  audio/second-passage.wav
  tracks.json            preprocessing input
  tracks-enriched.json   precomputed duration and visualization data
  serve.mjs
  README.md
```

Everything needed for playback is local. No CDN or external audio service is required after installation. The music recording is marked public domain; source and excerpt credits are included in audio/NOTICE.md. Stop the server with **Ctrl+C**.

The included `index.html` contains the full page, styling, catalog loading, and controls. This smaller complete page also works when saved in that generated folder:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>SoundForge example</title>
</head>
<body>
  <compact-audio-browser id="library"></compact-audio-browser>
  <compact-audio-player id="player"></compact-audio-player>
  <script type="module">
    import './lib/audio-player.js';
    import './lib/audio-browser.js';
    import {connectAudioBrowser} from './lib/connect.js';

    await Promise.all([
      customElements.whenDefined('compact-audio-browser'),
      customElements.whenDefined('compact-audio-player')
    ]);
    const library = document.querySelector('#library');
    const player = document.querySelector('#player');
    const disconnect = connectAudioBrowser(library, player);
    window.addEventListener('pagehide', disconnect, {once: true});

    const response = await fetch('./tracks-enriched.json');
    if (!response.ok) throw new Error('Catalog HTTP ' + response.status);
    library.catalog = await response.json();
  </script>
</body>
</html>
```

The custom-element tags are `<compact-audio-player>` and `<compact-audio-browser>`. Connect them before assigning a catalog so early selections are handled.

## Preprocess audio

Preprocessing is optional: audio plays without it, with a static visualization fallback. Run preprocessing when preparing or updating a catalog, rather than analyzing audio in the browser during playback. Audio files are not transcoded or changed.

Using the generated demo, stop its server and run:

```sh
cd soundforge-demo
node ../node_modules/@pahooper/soundforge/dist/analyze.js tracks.json tracks-enriched.json
node serve.mjs .
```

Expected CLI output:

```text
Analyzed: Maple Leaf Rag — Opening
Analyzed: Maple Leaf Rag — Second passage
Wrote tracks-enriched.json; 0 unsupported or failed tracks retained.
```

Input `tracks.json`:

```json
[
  {"title": "Maple Leaf Rag — Opening", "url": "./audio/opening.wav", "category": "Ragtime"},
  {"title": "Maple Leaf Rag — Second passage", "url": "./audio/second-passage.wav", "category": "Ragtime"}
]
```

Each output track retains these fields and gains `duration` in seconds and a `visualization` object containing a version, frame interval, band count, and frame values. Both sample durations are 8 seconds; each has 160 frames with 36 values per frame (legacy 8-band `version: 1` catalogs also remain supported). See the [preprocessing guide](https://github.com/pahooper/soundforge/blob/main/docs/preprocessing.md) for a representative output object, HTTP inputs, error handling, and path mapping.

Reload **http://127.0.0.1:8080**, leave **With preprocessed visualization** selected, and play a track. The example fetches `tracks-enriched.json` and passes its tracks to the catalog; the connection forwards the selected track and its visualization to the player.

**Paths matter:** the CLI resolves local audio paths from the terminal's working directory. The browser resolves relative audio URLs from the HTML page URL. The demo deliberately uses the same folder layout for both. Input and output catalog paths must differ.

For your own project, from the folder containing the catalog and its relative audio paths:

```sh
npx --no-install soundforge-analyze tracks.json tracks-enriched.json
```

[Full preprocessing guide](https://github.com/pahooper/soundforge/blob/main/docs/preprocessing.md)

## Use in a bundled application

Import the components in browser code and connect elements after they are mounted:

```js
import '@pahooper/soundforge/player';
import '@pahooper/soundforge/browser';
import {connectAudioBrowser} from '@pahooper/soundforge/connect';

await Promise.all([
  customElements.whenDefined('compact-audio-browser'),
  customElements.whenDefined('compact-audio-player')
]);
const library = document.querySelector('compact-audio-browser');
const player = document.querySelector('compact-audio-player');
const disconnect = connectAudioBrowser(library, player);
const response = await fetch('/tracks-enriched.json');
if (!response.ok) throw new Error('Catalog HTTP ' + response.status);
library.catalog = await response.json();
// Call disconnect() when the host view is removed.
```

Place both tags in your HTML and serve the enriched JSON and audio from your application's public assets. Configure those asset paths for your host. `@pahooper/soundforge` registers both elements; `/player` and `/browser` register one each. `/helpers` and `/connect` do not register elements and can be imported without a DOM.

For server-rendered applications, import registration modules only on the client after mounting. Do not load multiple copies or versions of the same custom-element tags.

## Common tasks and reference

- [Play one track, build a playlist, make a mix, change themes, and handle events](https://github.com/pahooper/soundforge/blob/main/docs/recipes.md)
- [Imports, properties, defaults, types, helpers, events, and CLI reference](https://github.com/pahooper/soundforge/blob/main/docs/reference.md)
- [Audio preprocessing, input/output schema, paths, and failures](https://github.com/pahooper/soundforge/blob/main/docs/preprocessing.md)
- [Troubleshooting playback, URLs, codecs, and visualizations](https://github.com/pahooper/soundforge/blob/main/docs/troubleshooting.md)
- [Complete packaged HTML example](https://github.com/pahooper/soundforge/tree/main/examples)

## Limits to understand

Layered playback uses native media elements and is not sample-accurate; loops may have gaps and sources may drift. The base track defines mix duration and visualization. There are at most three layers. Queue occurrences are identified by URL, so repeated copies of the same URL are not independently addressable.

Preprocessing downloads and decodes whole files sequentially in memory. Size inputs for available RAM. HTTP downloads time out after 120 seconds. The CLI does not provide real-time analysis, transcoding, or a streaming server.

The local example server is for development. Use your normal static host for production, with correct MIME types and byte-range support for audio seeking.

## Releases

Stable GitHub releases publish to npm through a verified GitHub Actions workflow once the one-time npm trusted publisher connection is configured. Ordinary commits do not publish. See [release setup and workflow](https://github.com/pahooper/soundforge/blob/main/docs/releases.md).

## Demo and support

The original [Audio Player Demo](https://phil-audio-player-demo.pnod.chatgpt.site) is currently owner-only and requires authorized access. Anyone can run the packaged HTML example locally using the quick-start commands above.

[Source repository](https://github.com/pahooper/soundforge) · [Report bugs or request features](https://github.com/pahooper/soundforge/issues) · [Release notes](https://github.com/pahooper/soundforge/blob/main/CHANGELOG.md)

Maintained by [pahooper](https://github.com/pahooper). **Issues are welcome; pull requests are not accepted.** Include your version, browser or Node version, minimal reproduction, expected/actual behavior, and relevant errors. See [issue-reporting guidance](https://github.com/pahooper/soundforge/blob/main/CONTRIBUTING.md).

## License

MIT. See [LICENSE](https://github.com/pahooper/soundforge/blob/main/LICENSE) and [third-party notices](https://github.com/pahooper/soundforge/blob/main/THIRD_PARTY_NOTICES.md). The example piano excerpts are public domain, with recording and source credits in examples/audio/NOTICE.md. Code is MIT-licensed.
