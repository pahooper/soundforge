# Publishing releases automatically

The public GitHub repository includes `.github/workflows/publish.yml`. It runs when a **stable GitHub release is published**, not on ordinary commits, draft releases, or releases marked as prereleases.

## One-time npm trusted publisher setup

An npm package owner must connect the existing package to GitHub Actions in the package's npm Settings → Trusted publishing:

- Provider: GitHub Actions
- Organization or user: `pahooper`
- Repository: `soundforge`
- Workflow filename: `publish.yml`
- Environment name: leave empty (the workflow does not use a GitHub environment)
- Allowed action: enable direct `npm publish`

Do not add an npm token to GitHub. The workflow requests a short-lived OIDC identity and publishes with provenance. Its public repository URL matches package.json.

Creating the workflow alone does not enable npm access; the npm owner must finish the trusted publisher connection. See [npm trusted publishing](https://docs.npmjs.com/trusted-publishers).

## Each release

1. Update package.json and package-lock.json to a new version and update CHANGELOG.md.
2. Commit and push the changes to main. Wait for Verify to pass.
3. Create a GitHub release with a matching tag, such as `v0.3.4` for version `0.3.4`.
4. Publish the release. This is the action that starts npm publication.
5. Check the Publish to npm workflow. npm may take a few minutes to expose the release.

The workflow checks the tag against the package version, installs from the lockfile, runs all 40 existing tests, builds the package, verifies clean consumer installation and documentation examples, then packs and publishes. An already-used npm version cannot be overwritten; fix a failed release with a new version where necessary.

No publishing occurs on issue creation or normal pushes. Pull requests are not accepted.

## Verify without publishing

```sh
RELEASE_TAG=v0.3.4 node tools/publish-release.mjs --check
```

Use the current package version in the tag. The publishing script refuses to publish outside GitHub's trusted publishing environment.

[Back to README](../README.md) · [Maintainer build instructions](development.md)
