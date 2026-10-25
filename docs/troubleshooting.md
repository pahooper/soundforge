# Troubleshooting

## The components do not appear

Run the complete example over HTTP, not by double-clicking HTML. Check the browser Console and Network panels for missing JavaScript modules or wrong MIME types. Import player/browser registration before using them, and wait for `customElements.whenDefined` before assigning properties.

The tag names are `compact-audio-player`, `compact-audio-browser`, and `compact-audio-preprocessor`. Do not load duplicate versions on a page.

## The example server cannot start

Use Node 22.18 or newer. Run `node --version` to check. The server uses port 8080 and binds to 127.0.0.1. If that port is occupied, stop the other process or use a different port:

- Linux/macOS: `PORT=8081 node soundforge-demo/serve.mjs soundforge-demo`
- PowerShell: `$env:PORT=8081; node soundforge-demo/serve.mjs soundforge-demo`

Open the exact URL printed by the server. Ctrl+C stops it.

## The catalog is empty or fails to load

Check the JSON request in the Network panel. It must return a JSON array of tracks. Each track needs a string `title` and `url`. Assign the parsed array to the element's `catalog` property, not an HTML attribute.

If loading JSON from another origin, that JSON response needs suitable CORS headers. The local example serves everything from the same origin.

## Selecting a track does not start audio

Press Play in the player. Browsers can block automatic playback. Check that the requested audio URL exists, returns audio rather than an HTML error page, and uses a browser-supported codec.

The components do not bypass server authentication or mixed-content restrictions. Use HTTPS audio on HTTPS pages. Cross-origin native audio playback may work without CORS, but fetching catalogs in JavaScript is a separate operation subject to CORS.

## Seeking or buffering does not work correctly

Use a host that serves correct audio MIME types and supports byte-range requests. Look for HTTP 206 and Content-Range responses when seeking. The supplied local server supports simple byte ranges for the example.

## Audio plays but visualization is static

Without `track.visualization`, the player intentionally shows a static fallback. Check that the page loaded the enriched catalog and that the selected track has `visualization.frames`. Preprocessing does not change the audio file.

Select the enriched catalog, then select the track again. In layered mode, visualization follows the base track; it is not the sum of all layers.

## Preprocessing cannot find an audio file

The CLI checks relative and root-relative paths against both the working directory and the input catalog's directory. Check spelling and case, or use `<compact-audio-preprocessor>` in the browser (which uses your active browser session or attached local files). Use distinct input/output files.

A filesystem path that works on your machine is not automatically a browser-accessible URL; map it before deploying the catalog.

## Unsupported format or invalid audio

A file extension alone does not identify its codec. Compare against the six fixture-tested groups in the README. Try a known-good included WAV sample. Record the actual codec/container and error text when reporting an issue.

Remote analysis also needs a successful HTTP response and must finish the download within 120 seconds. The CLI does not accept custom authorization headers.

## The CLI writes output but exits with code 2

Some tracks failed. Inspect the terminal's per-track errors. Failed tracks remain in output; they may retain old metadata. Exit 0 means all tracks were analyzed; exit 1 indicates invalid usage/catalog or fatal I/O.

## Large files use substantial memory

The analyzer decodes whole files in memory and processes tracks sequentially. Use smaller files or a machine with more RAM. It is not a streaming analyzer.

## Mixes drift, loop with gaps, or do not start

Native media playback is not sample-accurate. The base is required, controls duration, and anchors visualization. Up to three layers loop with it. Press Play after configuring a mix. Mixer playback errors appear in the player status.

## Report a problem

Open an [issue](https://github.com/pahooper/soundforge/issues) with the smallest reproduction, package/browser/Node versions, expected and actual behavior, and relevant logs. Do not include secrets or private recordings. Pull requests are not accepted.

[Back to README](../README.md)
