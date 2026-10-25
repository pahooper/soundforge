let serial = 0;
export const makeEntry = (track) => ({ id: `mix-${Date.now()}-${++serial}`, track, volume: .75, muted: false });
export const slotEntries = (mix) => ([mix.base, ...mix.layers.slice(0, 3), null, null, null].slice(0, 4));
export function swapSlots(mix, from, to) { if (!Number.isInteger(from) || !Number.isInteger(to) || from < 0 || to < 0 || from > 3 || to > 3)
    return mix; const a = slotEntries(mix); [a[from], a[to]] = [a[to], a[from]]; return { base: a[0], layers: a.slice(1) }; }
/** Explicit assignment; adding a layer never silently replaces an occupied slot. */
export function assignTrack(mix, track, destination) {
    const slots = slotEntries(mix);
    const index = destination === 'layer' ? slots.findIndex((entry, i) => i > 0 && !entry) : destination;
    if (!Number.isInteger(index) || index < 0 || index > 3)
        return mix;
    const previous = slots[index];
    slots[index] = { ...makeEntry(track), volume: previous?.volume ?? .75, muted: previous?.muted ?? false };
    return { base: slots[0], layers: slots.slice(1) };
}
