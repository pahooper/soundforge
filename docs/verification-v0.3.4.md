# SoundForge 0.3.4 verification — 2026-10-25

## Passed locally

- All 40 existing automated tests: catalog, connection, playback/mix engine, visualization, package policy, malformed inputs, HTTP analysis, and decoder fixtures.
- Production builds of both browser components and the CLI.
- Packed-package clean consumer installation, all exported entry points, strict TypeScript consumer, SSR-safe helpers/connection, consumer browser build, CLI help/version and overwrite protection.
- Decoding MP3, PCM WAV, FLAC, Ogg Vorbis, Ogg Opus, and AAC in M4A fixtures.
- Documentation consumer checks: install a fresh tarball, run the actual setup script in a new folder, refuse overwrite, regenerate both sample catalogs deterministically, verify frame counts and values, serve all required assets, JavaScript MIME types, missing-file 404, and byte-range 206 responses.
- Chromium browser: complete HTML example renders catalog and player with two 8-second tracks; selecting Pulse starts playback and advances the seek position; preprocessed bars render; light theme control works; Layers → Set Pulse as base → Add Chime as layer → Play starts the mix and exposes independent gain/mute controls.

## Limits

Firefox/Safari remain unverified. Native media mixing is not sample-accurate. The example server is local development tooling. Decoder fixture coverage does not imply every codec/container variant is supported. Historical source verification is retained in verification-v0.3.md.

GitHub Verify passed on Node 22.18.0 and Node 24. The npm trusted publisher relationship was confirmed for pahooper/soundforge, workflow publish.yml. The release publishing run is verified separately.
