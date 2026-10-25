# Changelog

## 0.3.5 — 2026-10-25

- Upgraded `soundforge-analyze` to 36 logarithmically spaced frequency bands at 20 frames per second (`interval: 0.05`) using multi-resolution Hann-windowed FFTs across all decoded channels, DC/rumble blocking, and dynamic-range floor normalization.
- Upgraded `compact-audio-player` `Bars` and `Wave` visualizations: direct 36-band column mapping with frame-rate-independent attack/release ballistics and peak-hold caps, spatially localized multi-strand wave packets that eliminate uniform vertical breathing, HiDPI canvas scaling, and `prefers-reduced-motion` support (while preserving compatibility with 8-band `version: 1` catalogs).
- Replaced fixed-pitch synthetic demo tones with two DC-cleaned public-domain piano excerpts from Scott Joplin's *Maple Leaf Rag* and added diagnostic and real-music spectral/wave verification tests.

## 0.3.4 — 2026-10-25

- Added a complete packaged HTML player/catalog example, original synthetic audio, and precomputed visualization data.
- Added setup and local HTTP server scripts with no additional dependencies.
- Added tested format information, preprocessing workflow, task recipes, API reference, troubleshooting, and Issues-only support guidance.
- Added public source and issue links.
- Fixed CLI --version to read the installed package version.
- Added clean-consumer documentation checks and Site documentation pages.

## 0.3.3 — 2026-10-25

Reordered README: summary first, preprocessing before API details, licensing at the end.

## 0.3.2 — 2026-10-25

Clarified the README summary and switched installation instructions to npm.

## 0.3.1 — 2026-10-25

Initial public npm release: player, catalog, layered mixing, preprocessing CLI, declarations, and MIT license.
