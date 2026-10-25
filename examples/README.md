# SoundForge HTML example

This folder contains a complete HTML page with both SoundForge components connected, two eight-second synthetic audio files, and original and enriched catalogs. Sample audio is original and covered by the package MIT license.

## From a new consumer project

Run these commands in the folder where you want your demo:

```sh
npm init -y
npm install @pahooper/soundforge
node node_modules/@pahooper/soundforge/examples/setup.mjs soundforge-demo
node soundforge-demo/serve.mjs soundforge-demo
```

Open http://127.0.0.1:8080. Select Play beside Pulse or Chime. If autoplay is blocked, press Play in the player. Select Wave or Bars in the player to change the visualization.

The page starts with the enriched catalog. Choose **Original audio only** to compare the static fallback. Select another track after changing catalogs so the player uses that catalog's track data.

## Regenerate the visualization data

Stop the server with Ctrl+C, then:

```sh
cd soundforge-demo
node ../node_modules/@pahooper/soundforge/dist/analyze.js tracks.json tracks-enriched.json
node serve.mjs .
```

Expected output:

```text
Analyzed: Pulse
Analyzed: Chime
Wrote tracks-enriched.json; 0 unsupported or failed tracks retained.
```

Reload the browser and choose a track. Both tracks are eight seconds long. Each enriched track has duration and visualization data; each frame contains eight values from 0 to 255.

## Files

- `index.html`: complete HTML, styling, imports, connection, theme control, and catalog loading.
- `lib/`: browser modules copied by setup from the installed package.
- `audio/pulse.wav`, `audio/chime.wav`: original synthetic PCM WAV samples.
- `tracks.json`: preprocessing input.
- `tracks-enriched.json`: working preprocessed output.
- `serve.mjs`: Node-only local server with byte-range support, bound to 127.0.0.1. Use a production server for deployment.

Run setup into a new or empty destination; it refuses to overwrite an existing project. This example uses HTTP rather than opening `index.html` as a file. After setup, all runtime assets are local; no CDN, framework setup, or external audio hosting is required.

## In the source repository

Run `npm ci` and `npm run build` first. Then run `node examples/setup.mjs demo-output` and `node demo-output/serve.mjs demo-output`.
