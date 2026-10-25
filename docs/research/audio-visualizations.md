# SoundForge: audio visualization research and implementation findings

Research checked 25 October 2026. This report distinguishes established signal-display behavior, observed SoundForge behavior, and proposed engineering choices. Recommendations are not all implemented.

## Findings that affect the product

1. Spectrum bars, an oscilloscope waveform, a whole-track waveform, and an artistic audio-reactive wave are different visualizations. They require different data. Calling all of them a waveform hides important differences.
2. Spectrum bars normally move vertically. The problem is not vertical movement itself: it is when the entire shape only scales up and down instead of different frequency regions changing independently with the music.
3. SoundForge's current Bars interpolate eight frequency measurements into 36 columns. These are not 36 independent measurements. More columns cannot restore detail absent from the preprocessing data.
4. SoundForge's Wave is a stylized sum of curves driven by frequency-band amplitudes. It is not the audio's time-domain waveform. Better test music makes it look more varied but does not change this fact.
5. The demo's fixed-pitch tones were a poor basis for judging natural music animation. Real music must be part of visual acceptance testing; tones remain useful for diagnostic tests.
6. Preprocessing is a valid architecture. WaveSurfer and the BBC's waveform tools demonstrate precomputed visualization data combined with ordinary media playback. Improving SoundForge does not require fetching and analyzing entire audio files in the browser.

## What the different visualizations should show

| Visualization | Horizontal axis | Vertical axis | Expected behavior | Required data |
| --- | --- | --- | --- | --- |
| Spectrum bars | Frequency, commonly logarithmic or octave-based | Magnitude/energy, often converted to a decibel display range | Bass, midrange, and treble respond separately; transients rise and then decay | A sequence of frequency spectra/band energies |
| Oscilloscope waveform | A short interval of audio time | Signed audio sample amplitude around zero | The trace changes with the audio signal; it is not a fixed sine outline multiplied by loudness | Time-domain samples or suitable precomputed waveform windows |
| Whole-track waveform | Position through the recording | Amplitude envelope/peaks | The recording's shape stays fixed while a playhead or progress color moves; a zoomed view may scroll | Min/max peak pairs or equivalent envelope data plus duration |
| Artistic audio-reactive wave | Designer-defined | Designer-defined | Curves deform in response to real audio features; phases, layering, and styling are aesthetic choices | Documented audio features plus a rendering model |
| Spectrogram | Time | Frequency, with energy encoded by color | Musical events leave a time/frequency history | A time sequence of spectra |

MDN explicitly uses frequency-domain data for bars and time-domain data for its oscilloscope example. WaveSurfer's waveform and predecoded-peak workflows serve a different purpose: showing the recording's amplitude history and playback position. [1][2][5][6]

There is no universal requirement that an audio visualizer travel sideways. Adding horizontal drift can look appealing, but it does not by itself make a display more accurate or more responsive to music. The reference clip supplied in this chat is useful as an aesthetic reference for separately varying spectrum columns; it is not a DSP specification.

## Spectrum bars: what makes them convincing

### Measure frequency ranges rather than a few isolated points

FFT outputs have linearly spaced frequency bins; MDN describes frequency data from zero to half the sample rate. A music display can aggregate those bins into logarithmic or perceptually spaced bands. audioMotion provides logarithmic, linear, Bark, and Mel scales and defaults to logarithmic frequency spacing. [2][3]

For SoundForge, a practical next prototype is 24–36 genuinely measured bands, not eight measurements stretched into 36 columns. This count is a proposed starting point for the existing compact player, not an industry requirement. Each displayed band should aggregate the FFT energy in a defined frequency interval. Document the aggregation and normalization method so the data remains interpretable.

The analysis should cover a deliberate musical range up to the available Nyquist limit. Avoid treating frequencies above the source sample rate's usable range as valid measurements. A logarithmic frequency scale and logarithmic amplitude scale are separate decisions.

### Balance frequency detail and timing

An FFT window contains N samples. Its frequency spacing is approximately sampleRate / N; its duration is N / sampleRate. A longer window resolves nearby frequencies more clearly but blends a longer slice of time. Increasing FFT size is therefore a tradeoff, not an automatic quality improvement. MDN and audioMotion describe this relationship. [3][4]

At 44.1 kHz, a 2048-sample window spans approximately 46 ms. That is an engineering example, not a prescribed setting. Test several window sizes and overlapping analysis hops against transient-rich music and sustained notes.

For an offline pipeline, the hop between stored frames is independent of the FFT window length. Overlapping windows can avoid leaving large portions of the signal unexamined. Store timestamp/window semantics so playback does not introduce an unexplained visual offset.

### Use controlled smoothing

Raw spectra can flicker; excessive smoothing makes them sluggish. MDN documents averaging with the previous analysis frame; audioMotion separately exposes smoothing and peak behavior. [3][7]

Keep these distinct:

- Measurement smoothing: stabilizes the estimated spectrum.
- Display attack/release: controls how quickly a column rises and falls.
- Peak hold/decay: an optional marker retaining a recent maximum.

If using custom attack/release, calculate it from elapsed time so the response does not change with a 60 Hz versus 144 Hz display. Audition numerical values against music before treating them as defaults. For illustration, audioMotion documents smoothing 0.5, peak hold 500 ms, and peak fade 750 ms; these are that product's defaults, not mandatory SoundForge settings. [3]

### Scale deliberately

MDN's byte frequency values are already a mapped decibel representation. SoundForge's current values are generated differently, so their 0–255 representation must not be assumed to have the same meaning. Specify whether stored values represent amplitude, power, logarithmic energy, or normalized visual intensity. [2]

Track-wide normalization can improve readability but makes quiet and loud recordings less comparable. Frame-by-frame normalization can conceal real quiet passages. Provide a silence floor and choose the intended behavior explicitly rather than normalizing every frame to full height.

## Wave: choose the intended meaning

### If it is an oscilloscope

Use signed sample amplitudes from a short time window. Account for aliasing when reducing samples for display. Triggering or alignment can improve stability for periodic signals; a sustained sine should naturally look stable. An oscilloscope need not churn constantly to be correct. Frequency-band magnitudes alone cannot reconstruct the original waveform because phase/time-domain information is missing. [1]

### If it is a track overview

Compute minimum and maximum amplitudes over groups of samples. BBC audiowaveform documents precisely this approach; it preserves short peaks better than taking one arbitrary sample from each group. WaveSurfer accepts precomputed peaks and duration, allowing visual rendering without decoding the entire recording in the browser. [5][6]

Keep its geometry tied to the audio file and advance the playhead/progress overlay. It should not bounce with playback as though it were a live spectrum.

### If it is an artistic spectral wave

Retain the flowing visual style, but describe it accurately. Different parts of the curve should respond to different measured features; relying mostly on one energy value produces the breathing effect reported here. Layer offsets, reflections, and color gradients are presentation. They should not create movement on silent input that is described as audio analysis.

A plausible SoundForge direction is measured Bars plus an explicitly described audio-reactive Wave. A literal waveform would need separate preprocessing data. Do not silently claim that a decorative wave is the physical signal.

## Playback synchronization and rendering

- Select precomputed data using the media playback position, not elapsed wall-clock time since Play was clicked.
- Seek immediately to the appropriate visualization data; do not continue an independent animation timeline.
- On pause, either freeze the current representation or perform a brief, documented decay. Do not keep generating unrelated motion.
- On buffering, the visualization should not run ahead of the media clock.
- On track changes, clear old spectrum/peak state and load the new track's data.
- On loops, reset or reconstruct state consistently at the loop point.
- Interpolate precomputed values for smooth display, but recognize that interpolation cannot recover transients or frequency detail not captured offline.

Use requestAnimationFrame for painting. MDN notes that refresh rates vary and callbacks commonly pause in hidden tabs. The timeupdate event can arrive at approximately 4–66 Hz depending on load, so it should not be assumed to be a stable 60 fps animation clock. [8][9]

Handle resizing and devicePixelRatio to avoid blurry canvas output. Avoid allocating new arrays, gradients, and paths unnecessarily in every frame. Stop unnecessary drawing when hidden or paused and redraw when seeking or resizing. These are performance recommendations, not evidence that each issue has already been measured in SoundForge. [10]

Offer reduced-motion/static behavior and respect prefers-reduced-motion. Keep transport controls operable without the visualization. Decorative frame changes should not become screen-reader announcements. [11]

## Precomputed data: recommended design direction

Preserve the browser-light architecture. Consider separate data streams rather than forcing one array to serve every display:

1. Spectrum frames: measured bands with frequency bounds, frame interval, window/timestamp semantics, and amplitude mapping.
2. Waveform peaks: min/max pairs at a documented time resolution, if a track overview is wanted.
3. Optional time-domain windows: only if a live-looking oscilloscope is actually a requirement.

Keep schema/version compatibility for existing catalogs. Missing or unsupported data should produce an explicit static fallback, not fabricated activity. If visualization data becomes large, a separately fetched sidecar file can be preferable to embedding everything in a catalog.

For scale: 32 bands × 30 frames/s × one byte is 960 bytes/s before container overhead, or 57.6 kB/minute. Decimal JSON is larger; compression changes transfer size. This is an illustrative budget, not a benchmark of a proposed implementation. Measure catalog parse time, memory use, and compressed transfer size on long tracks before choosing defaults.

For stereo, select an intentional analysis policy. Analyzing only the first channel ignores the other; averaging signed channels can cancel opposite-phase content. Combining per-channel power for a combined spectrum avoids that cancellation. Stereo waveform display may instead preserve channels separately. The base-only mixer visualization is also not a measurement of the summed audible mix: label that scope clearly.

## Audit of the current SoundForge implementation

Source reviewed: tools/analyze.ts, src/visualization.ts, and src/AudioPlayer.svelte in the recovered original project and public repository.

| Area | Observed implementation | Implication |
| --- | --- | --- |
| Analysis | Eight sparse Goertzel frequency measurements, starting at 80 Hz and multiplying by 1.8 | These are isolated measurements, not a complete high-resolution spectrum |
| Frequencies | Approximately 80, 144, 259, 467, 840, 1512, 2721, 4898 Hz | Higher musical frequencies are not represented by additional measured bands |
| Timing | One 512-sample window every 100 ms | At 44.1 kHz that window covers about 11.6 ms of each 100 ms hop; activity between windows can be missed |
| Stored frames | Eight values, ten times per second, track-normalized | Intentionally compact, but limited in detail |
| Bars | 36 columns interpolated from the eight values | Adjacent columns are correlated; visual column count exceeds independent measurement count |
| Wave | A sum of mathematical curves modulated by band amplitudes | It is an artistic spectral shape, not sampled audio amplitude |
| Playback | Interpolation driven by playback position | A sound design choice to retain; interpolation does not repair sparse analysis |

The rebuilt browser bundles were byte-for-byte identical to the earlier npm 0.3.1 bundles. There was no renderer rollback in the documentation release. That does not mean the existing renderer is sufficient: the signal representation and the labeling still have the limitations above.

### Demonstration-audio finding

For each nontrivial spectrum frame, normalize its band values by their sum. Calculate the average absolute difference from the track's mean normalized shape. This diagnostic distinguishes changing spectral shape from mostly scalar loudness changes.

| Example | Diagnostic shape variation |
| --- | ---: |
| Synthetic Pulse | 0.0372 |
| Synthetic Chime | 0.0227 |
| Maple Leaf Rag, opening excerpt | 0.4076 |
| Maple Leaf Rag, second passage | 0.4219 |

These are measurements from the current eight-band pipeline, not a perceptual quality score. A pure tone or drone can legitimately have a stable spectrum. The measurement is useful for selecting varied demonstration music and catching the particular fixed-tone demo mistake, not for declaring all low-variation audio defective.

## Acceptance tests before calling a visualization fixed

Use actual redistributable recordings for visual judgment, plus synthetic signals for correctness:

- Silence: no invented energy or perpetual dancing.
- Single sine: concentrated spectral region; predictable periodic oscilloscope if provided.
- Swept sine: energy moves through frequency regions.
- Two tones: distinguish simultaneous frequency regions.
- Broadband noise: broad energy rather than one fixed hill.
- Isolated impulses/percussion: visible attack with controlled release; no missed transients from sparse windows.
- Real piano, sustained acoustic/orchestral material, rhythm-heavy music, and speech: meaningful differences without changing the renderer for each clip.
- Playback lifecycle: pause, resume, seek forward/back, loop, buffer, change track, and mix-mode transitions.
- Presentation: mobile and desktop widths, HiDPI, reduced motion, dark/light, hidden-tab return, cleanup after removal.

Test schema validity and deterministic playback position separately from aesthetic judgment. A test that merely proves two function inputs produce unequal output is not sufficient evidence of natural movement in music. Record and compare clips with the same audio and playback positions.

## Recommended work order

1. Use attributed real music in the demo and preserve source/license records.
2. Evaluate both current views against that music; do not hide a data problem with arbitrary movement.
3. Choose and document whether Wave is artistic, an oscilloscope, or a track overview.
4. Prototype denser measured spectrum data and improved time coverage, with explicit scaling and compatibility.
5. Tune independent band response, smoothing, and optional peak behavior while retaining playback synchronization.
6. Add any genuinely required waveform data rather than reconstructing it from magnitude bands.
7. Verify with signal tests, real recordings, browser recordings, performance checks, and lifecycle tests before releasing.

## Sources

1. MDN, Visualizations with Web Audio API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
2. MDN, getByteFrequencyData: https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData
3. audioMotion analyzer documentation (frequency scales, FFT, smoothing, peak behavior): https://github.com/hvianna/audioMotion-analyzer/blob/master/README.md
4. MDN, fftSize: https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize
5. BBC audiowaveform (min/max generation): https://github.com/bbc/audiowaveform
6. WaveSurfer predecoded peaks: https://wavesurfer.xyz/docs/peaks/
7. MDN, smoothingTimeConstant: https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/smoothingTimeConstant
8. MDN, requestAnimationFrame: https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
9. MDN, timeupdate event: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event
10. MDN, devicePixelRatio: https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
11. MDN, prefers-reduced-motion: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
12. Maple Leaf Rag recording and public-domain notice: https://commons.wikimedia.org/wiki/File:Maple_Leaf_Rag.ogg
13. Library of Congress Citizen DJ reuse statement: https://citizen-dj.labs.loc.gov/loc-jukebox-popular/use/

The rendering recommendations and proposed parameter ranges in this report are engineering synthesis. The source-backed distinctions and observed current-code behavior are identified separately above.
