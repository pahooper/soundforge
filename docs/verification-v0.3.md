# v0.3 verification — 2026-10-23

Fresh checks: npm test (35 pass) and production build of both standalone bundles with Svelte 5.57.2 (see installed package lock for exact version).

Unit/integration scope: category/search/reorder; preprocessing fixtures for six format groups, malformed catalog/missing/unsupported input, HTTP download without CORS headers; visualization interpolation; slot swaps and empty slots; four-source cap; live additions/removals and source preservation; group seek wrapping; stop/repeat; missing base; rejected playback; stale play/pause/play promise; removed-layer promise rejection; DOM release; independent component event wiring and mode alignment.

Chrome browser checks through the supported cloud browser on the built plain-HTML combined demo:
- Four simultaneous sources, three looping layers; independent gain and mute; duplicate tracks.
- Group pause and seek; base duration updates after swaps.
- Base-end restart with Loop mix and stopping all media with loop disabled.
- Adding/removing layers live; empty base disables Play and pauses all sources; removing all entries leaves zero mixer media elements.
- Playlist native drag/drop preserves the current source/time; next/previous appear for two tracks and hide for one.
- Mix native drag/drop swaps base/layer roles; accessible slot selectors move to empty slots and restore base.
- Mode switching isolates single playback and mixer; category/search/no-result behavior; light/dark and bars/wave.
- Console inspection showed browser extension metadata errors, no observed application error.

Limitations: not a Firefox/Safari certification. Legacy Playwright scripts are included but were not rerun in this managed environment; browser checks used the supported browser tool. No fresh throttled large-file test in this turn (the prior report and test script are retained). Native media mixing is not sample-accurate and may drift. Actual user catalog and hosting remain to be validated.

Review identified two promise races, stale mode state, and media-node retention. Promise regressions were observed failing before fixes and passing afterward. Additional lifecycle and host-wiring tests pass.

## Selection UX correction
37 automated tests pass. Browser reproduced silent base replacement from the persistent target dropdown. Replaced it with explicit Set base/+ Layer actions and slot Choose/Replace with named banner and Cancel. Verified base preservation, full capacity disabling, targeted live replacement, cancel without changes, and refill after removal.
