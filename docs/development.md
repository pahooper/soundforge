# Maintaining SoundForge

Source: https://github.com/pahooper/soundforge

Issues are welcome; pull requests are not accepted. These commands document maintainer verification and are not needed by package consumers.

## Build and test

Use Node 22.18 or newer.

```sh
npm ci
npm test
npm run build
npm run test:package
npm run test:docs
```

The build produces browser modules, a compiled CLI, and reproducible example audio/catalog files. The package check installs a tarball in a clean consumer, resolves entry points, checks strict TypeScript declarations, analyzes six audio format fixtures, and builds a consumer page.

Documentation checks install a fresh packed package, run its actual setup command, regenerate example visualizations, verify the CLI version, check local serving and byte ranges, and reject an attempt to overwrite the demo directory. Browser QA of the HTML example is recorded separately in verification notes.

## Source layout

- `src/`: component and playback logic.
- `tools/`: build, preprocessing, and release verification.
- `types/`: consumer declarations.
- `examples/`: complete HTML example and original synthetic audio.
- `docs/`: consumer guides and verification.
- `test/`: automated tests and decoding fixtures.

The public source does not include Site hosting identity or credentials. Historical Site music is separate from the packaged synthetic example.

## Release checks

Update package and lockfile versions together, update CHANGELOG.md, run the checks, and test the actual packed artifact. Publish only from the pahooper npm account with public access.

Check README rendering on npm after registry processing completes. GitHub source links and Issues must work. Preserve notices when distributing bundles.
