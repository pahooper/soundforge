# API reference

## Imports

| Import | Purpose | Needs a browser DOM at import time? |
| --- | --- | --- |
| `@pahooper/soundforge` | Registers both components and exports helpers/connection. | Yes |
| `@pahooper/soundforge/player` | Registers `compact-audio-player`. | Yes |
| `@pahooper/soundforge/browser` | Registers `compact-audio-browser`. | Yes |
| `@pahooper/soundforge/helpers` | Pure mix helpers. | No |
| `@pahooper/soundforge/connect` | Optional event wiring between existing elements. | No |
| `@pahooper/soundforge/package.json` | Package metadata. | No |

Exports are JavaScript ES modules with TypeScript declarations. Use browser-only registration after mounting in server-rendered applications.

## Property defaults

| Property | Default |
| --- | --- |
| Player `track` | `null` |
| Player `playlist` | `[]` |
| Browser `catalog`, `queue` | `[]` |
| Browser `selectedUrl` | Empty string |
| Both `theme` | `dark` |
| Both `playbackMode` | `single` |
| Both `mix` | `{base:null, layers:[]}` |

Set arrays/objects through JavaScript properties and use new references for updates. `theme` also works as an attribute. Missing track duration displays an em dash. Catalog metadata is supplied by the host, not discovered automatically by the components.

## Data and properties

Assign arrays/objects through JavaScript properties, using new objects/arrays for updates. `theme="dark"` or `theme="light"` works as an HTML attribute. The default theme is dark. The player defaults to 360px wide and 480px tall; layer controls increase its height. The browser defaults to 540px wide. Set element width through CSS to override it. Styles are isolated in Shadow DOM.

```ts
import type {Track, CatalogTrack, Mix} from '@pahooper/soundforge';
```

| Property | Component | Meaning |
| --- | --- | --- |
| `track` | player | `{title, url, duration?, visualization?}` or null |
| `playlist` | player | Ordered `Track[]`; hides previous/next with fewer than two entries |
| `catalog` | browser | `CatalogTrack[]`; extends Track with optional `category`, `id` |
| `queue` | browser | Ordered, writable queue; in-memory only |
| `selectedUrl` | browser | URL highlighted in results/queue |
| `theme` | both | `dark` or `light` |
| `playbackMode` | both | `single`, `playlist`, or `layers` |
| `mix` | both | `{base: MixEntry \| null, layers: (MixEntry \| null)[]}`; at most three layers |

Titles, URLs and optional durations in seconds come from the host catalog. Missing durations display an em dash. The component does not discover metadata from remote files. The CLI enriches an array of tracks while preserving additional fields; adapt other catalog schemas outside the components.

### Single track and playlist

```js
player.track = {title:'Rain', url:'/audio/rain.mp3'};
// Or:
player.playbackMode = 'playlist';
player.playlist = tracks;
player.track = tracks[0];
```

Selections attempt to play immediately; browser autoplay policy may require pressing Play. Play/pause, seeking, mute/volume and bars/wave selection are built in. The playlist advances in order and stops after the last item. Queue navigation identifies tracks by URL; repeated copies of the same URL are not independently addressable playlist occurrences. Queue edits preserve playback when the current URL remains present.

### Layered mix

```js
import {makeEntry} from '@pahooper/soundforge/helpers';
player.playbackMode = 'layers';
player.mix = {
  base: makeEntry({title:'Rain',url:'/rain.mp3'}),
  layers: [makeEntry({title:'Piano',url:'/piano.mp3'})]
};
```

A MixEntry is `{id, track, volume, muted}`. Keep IDs stable when moving tracks; create a new ID when replacing audio. Volume is 0–1. Null preserves an empty slot. Helpers `slotEntries`, `swapSlots` and `assignTrack` are also exported from `/helpers`.

The browser provides explicit Set base and + Layer actions. + Layer fills the first empty layer and disables when all three are occupied. Choose/Replace targets a specific slot and offers Cancel. Drag occupied slots to move or swap; slot selectors provide keyboard alternatives. Playlist rows support drag/drop and move buttons.

Press Play to start a mix. Transport and seeking control the group; each source has independent volume/mute. Layers loop while the base plays. Base duration defines mix duration. Loop mix restarts all sources at zero; otherwise all pause when the base ends. Missing base disables playback. Live layer additions, replacements and removal preserve other sources. Native HTML media is not sample-accurate and does not guarantee gapless loops or eliminate clock drift. Visualization follows the base track, not a sum of sources.

### Events

All custom events bubble and cross the Shadow DOM boundary; read `event.detail`.

| Component | Event | Detail |
| --- | --- | --- |
| player | `trackchange` | `{track, index}` for single/playlist selection |
| player | `play`, `pause`, `queueended` | `{}` for single/playlist transport |
| player | `playbackerror` | `{track}` for single/playlist media errors |
| player | `mixchange` | `{mix}` for volume/mute edits |
| browser | `trackselect` | `{track, source: 'catalog' \| 'queue', index}` |
| browser | `queuechange` | `{queue}` |
| browser | `modechange` | `{mode}` |
| browser | `mixchange` | `{mix}` for assignments/moves/removal |

Mix playback failures appear in the player status; transport/error events listed above currently apply to single/playlist playback. The components remain independent; `connectAudioBrowser` forwards selection, queue, mode and mix updates and returns a cleanup function.


## Mix helpers

| Function | Result |
| --- | --- |
| `makeEntry(track)` | New stable-ID entry with volume 0.75 and muted false. |
| `slotEntries(mix)` | Exactly four slots: base, then three layers; missing slots are null. |
| `swapSlots(mix, from, to)` | New mix with slots swapped; indices 0–3. Invalid indices return the original mix. |
| `assignTrack(mix, track, destination)` | Assign to index 0–3, or use `'layer'` for the first empty layer. Full/invalid destination returns the original mix. Replacing a slot preserves its volume/mute but creates a new ID. |

Volume is 0–1. Preserve IDs when moving existing entries. Null represents an empty slot.

## Connection helper

`connectAudioBrowser(browser, player, onModeChange?)` wires catalog selection, queue changes, mode changes, mix assignments, gain changes, and current-track highlighting. Its optional callback receives a boolean indicating queue playback during selection/queue handling. The return value is a function that removes the installed listeners.

The helper responds to UI events; it does not automatically copy arbitrary programmatic property assignments. For host-driven changes set the related properties on both components. It does not persist queues or discover audio metadata.

## CLI

```sh
npx --no-install soundforge-analyze input.json output.json
npx --no-install soundforge-analyze --help
npx --no-install soundforge-analyze --version
```

The CLI takes two positional paths, or `--help`/`-h`, or `--version`. There are no supported authentication, output-format, or concurrency options. Input is a JSON array of tracks with string title/url fields. Input and output must be distinct files. Output is overwritten if it exists.

Exit codes: 0 all tracks analyzed, 1 invalid usage/catalog or fatal I/O, 2 output written with failed tracks retained. [Preprocessing details and output schema](preprocessing.md).

[Back to README](../README.md) · [Common tasks](recipes.md) · [Troubleshooting](troubleshooting.md)
