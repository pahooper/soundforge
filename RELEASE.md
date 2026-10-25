# Releasing SoundForge

From the source repository:

```sh
npm ci
npm test
npm run build
npm run test:package
npm run test:docs
npm pack
```

Test the packed package in a new consumer folder, run its HTML demo over HTTP, and verify playback and preprocessing. Publish the reviewed tarball with public access from the pahooper npm account. README updates on npm require a new package version.

The Site repository stores this public package source under source/. Its static hosting identity is separate from the public GitHub project. Do not publish Site credentials or hosting metadata in the npm package or public source repository.

See CHANGELOG.md for release changes, docs/verification-v0.3.4.md for the latest recorded checks, and docs/troubleshooting.md for user-facing limits. Historical browser verification remains recorded in docs/verification-v0.3.md.
