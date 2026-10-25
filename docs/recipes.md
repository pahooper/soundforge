# Common tasks

These examples assume the components have been registered and upgraded. In the packaged HTML example, the elements are named `library` and `player`. Relative audio paths below use that example's files.

## Play one track

```js
const tracks = await (await fetch('./tracks-enriched.json')).json();
player.playbackMode = 'single';
player.playlist = [];
player.track = tracks[0];
```

Assigning a track attempts playback. If the browser blocks autoplay, the listener must press Play. There is no public imperative `player.play()` method.

## Build a playlist

```js
const response = await fetch('./tracks-enriched.json');
if (!response.ok) throw new Error('Could not load tracks');
const tracks = await response.json();
player.playbackMode = 'playlist';
player.playlist = [...tracks];
player.track = tracks[0];
```

The playlist advances in order and stops at the end. Previous/next controls appear for two or more tracks. With `connectAudioBrowser`, listeners can use + beside tracks to build a queue and choose a queue track to play it. Queue rows support drag/drop and move buttons. Queue state is in memory; store it in your host app if persistence is needed.

## Make a layered mix

For a bundled application:

```js
import {makeEntry} from '@pahooper/soundforge/helpers';
const response = await fetch('./tracks-enriched.json');
if (!response.ok) throw new Error('Could not load tracks');
const tracks = await response.json();
const mix = {
  base: makeEntry(tracks[0]),
  layers: [makeEntry(tracks[1])]
};
player.mix = mix;
library.mix = mix;
library.playbackMode = 'layers';
player.playbackMode = 'layers';
```

In the plain HTML example, change the helper import to `./lib/helpers.js`.

Press Play in the player to start the mix. In the catalog UI choose Layers, use Set base and + Layer, or use Choose/Replace for a named slot. There is one base and at most three layers. Per-track volume/mute is independent; group playback and seeking follow the base.

Keep MixEntry IDs stable while moving tracks. Use new IDs for replacement audio. The base defines the duration and visualization. Layers loop while the base plays. Loop mix restarts the group; otherwise playback stops when the base ends.

## Change theme and width

```js
library.theme = 'light';
player.theme = 'light';
```

```css
compact-audio-browser { width: min(540px, 100%); }
compact-audio-player { width: min(360px, 100%); }
```

Both components default to dark. Internal styling uses Shadow DOM; regular host CSS does not style internal buttons. Bars/Wave selection is a player UI control, not a documented public property.

## Handle events

```js
player.addEventListener('trackchange', event => {
  console.log('Now selected:', event.detail.track.title);
});
player.addEventListener('playbackerror', event => {
  console.error('Unable to play:', event.detail.track?.url);
});
library.addEventListener('queuechange', event => {
  console.log('Queue:', event.detail.queue);
});
```

Custom events bubble across the Shadow DOM boundary. Transport/error events above apply to single-track and playlist playback; mixer errors appear in the player status. See the event reference for the complete list.

## Remove a connected view

Keep the function returned by `connectAudioBrowser` and call it when your host view is removed. It removes the listeners it installed. Then remove the custom elements using your application's normal lifecycle.

Programmatic changes to `library.catalog` do not themselves select a track. Programmatic mode/queue changes do not synthesize the UI events; set corresponding player properties when controlling state from your host application.

## Client-side registration

Register custom elements in browser code. In an application that renders on a server, dynamically import the registration modules after the view mounts. Helpers and the connection module can be imported without a DOM. Do not register multiple versions of the fixed tag names on one page.

[Back to README](../README.md) · [Reference](reference.md)
