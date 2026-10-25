# SoundForge continuation

## Current state

- Public source repository: https://github.com/pahooper/soundforge
- Public npm package: @pahooper/soundforge. Version 0.3.4 was published by the successful GitHub Actions trusted publishing workflow.
- Main now contains package version 0.3.5 with real-music example changes. It has NOT been released to npm. Ordinary pushes do not publish; publishing a stable GitHub release triggers .github/workflows/publish.yml.
- npm trusted publishing is configured for pahooper/soundforge, workflow filename publish.yml. No npm token is stored in GitHub.
- GitHub includes the original Svelte components, CLI, declarations, tests, build tools, complete HTML example, guides, and Issues-only contribution policy. Pull requests are not accepted.
- The existing Audio Player Demo Site was updated with documentation and complete example pages and remains owner-only. Current deployed URL: https://phil-audio-player-demo.pnod.chatgpt.site. Its earlier address used the fabledcreek32 route. Source identity is separate from this public GitHub repository.

## Read first

1. README.md
2. docs/research/audio-visualizations.md — full sourced research, code audit, data limitations, recommendations, and acceptance tests.
3. docs/preprocessing.md, docs/reference.md, docs/recipes.md, docs/troubleshooting.md
4. docs/releases.md and .github/workflows/publish.yml
5. assets/music-options/README.md and manifest.json — three full recordings with source license information and checksums.

## Immediate work to resume

The user reported unnatural visualizations: mostly vertical breathing rather than convincing independent frequency/shape changes. They supplied this aesthetic reference: https://preview.wbm.im/pw/medium/cd7b8429d4c350feaa7b45957fc1ce33.mp4 . Do not interpret the complaint as requiring arbitrary horizontal drift.

The browser bundles used by 0.3.4 were byte-for-byte identical to the original 0.3.1 bundles, so documentation work did not roll back the renderer. However, the current eight-frequency, ten-frames-per-second preprocessing and the Wave rendering still have substantive limitations. Read the research rather than assuming a demo-only correction fully fixes them.

Real music replaced the two new fixed-pitch synthetic tones in the packaged example. tools/prepare-examples.mjs derives two eight-second mono PCM WAV excerpts from the original public-domain Maple Leaf Rag recording and regenerates their catalogs. Source/recording attribution is in examples/audio/NOTICE.md. A new regression test rejects nearly invariant spectral shapes in these particular demonstration tracks.

Local verification before handoff: all 41 automated tests passed, including the new example-music test; clean documentation consumer checks passed, including setup, preprocessing determinism, catalog structure, installed CLI version, local HTTP assets, and byte-range responses. The original synthetic example was browser-tested; the new real-music example still needs browser/visual evaluation. Do not claim that the animation problem is resolved solely because the test passes.

Next:

- Run the actual music example in a fresh consumer folder and evaluate Bars and Wave in motion.
- Use the saved research to improve measured spectral detail, time coverage, smoothing, and synchronization as justified by tests and observed behavior.
- Clarify whether Wave remains an artistic audio-reactive spectral wave or becomes a true time-domain waveform; these require different data. Preserve the preprocessing-first/browser-light architecture and existing-catalog compatibility unless deliberately versioned.
- Keep playback, playlists, layered mixing, theme support, and cleanup intact. Visualization in a mix currently follows the base, not the summed output.
- Test with the saved real recordings as well as silence, tones, sweeps, impulses, and noise. The extra music options are full originals under assets/music-options and are excluded from the npm package by the explicit files allowlist.
- Update all docs/examples to match actual behavior. Preserve the Issues-only policy and avoid implementation-framework promotion in the user-facing overview.
- Re-run npm test, npm run build, npm run test:package, and npm run test:docs. GitHub Verify tests Node 22.18 and 24.
- Once the visual result and package checks pass, publish an appropriate new GitHub release to exercise automatic npm publication; verify workflow success, npm version/provenance, and rendered README. Do not republish 0.3.4 or assume 0.3.5 is already published.
- Finish updating the existing owner-only Site with the final example and documentation through the Sites workflow. Its latest deployed pages may still describe the synthetic 0.3.4 example. Retrieve the Site by its actual tool-returned identity, preserve audience, use fresh short-lived credentials, and package the exact pushed source state. Never expose Site credentials or copy its hosting identity into this public repository.

## Local setup

Use Node >=22.18. Clone this repository into a stable local checkout. The previous suggested location is ~/dev/soundforge/repo because ~/dev/soundforge already contains the original publish ZIP; preserve that ZIP.

```sh
npm ci
npm test
npm run build
npm run test:package
npm run test:docs
node examples/setup.mjs demo-output
node demo-output/serve.mjs demo-output
```

Open the printed local URL. setup.mjs deliberately refuses to overwrite a nonempty folder.

The Sites-specific build:site helper expects the separate recovered Site checkout layout, with its deployment output above the package source. Do not run it blindly at the root of this standalone GitHub clone. Build the package and examples normally here; use the Sites workflow for the hosted demo.
