typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const bs = 1, ys = 2, ws = 16, xs = 1, ks = 4, $s = 8, Es = 16, Ss = 2, pn = "[", Or = "[!", Xr = "[?", Cr = "]", Ye = {}, U = /* @__PURE__ */ Symbol("uninitialized"), As = "http://www.w3.org/1999/xhtml", _n = !1;
var gn = Array.isArray, Ms = Array.prototype.indexOf, Ct = Array.prototype.includes, nr = Array.from, Kt = Object.keys, Rt = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, Ts = Object.getOwnPropertyDescriptors, Os = Object.prototype, Cs = Array.prototype, mn = Object.getPrototypeOf, Zr = Object.isExtensible;
const Rs = () => {
};
function Ns(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function bn() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const Z = 2, dt = 4, sr = 8, yn = 1 << 24, me = 16, xe = 32, ze = 64, yr = 128, Rr = 256, we = 512, V = 1024, j = 2048, pe = 4096, te = 8192, G = 16384, at = 32768, Nt = 1 << 25, ht = 65536, Wt = 1 << 17, Ls = 1 << 18, lt = 1 << 19, Ps = 1 << 20, Le = 1 << 25, Xt = 1 << 21, ut = 1 << 22, Ve = 1 << 23, At = /* @__PURE__ */ Symbol("$state"), wn = /* @__PURE__ */ Symbol("component"), xn = /* @__PURE__ */ Symbol("legacy props"), zs = /* @__PURE__ */ Symbol(""), kn = /* @__PURE__ */ Symbol("attributes"), wr = /* @__PURE__ */ Symbol("class"), Ds = /* @__PURE__ */ Symbol("style"), xr = /* @__PURE__ */ Symbol("text"), Yt = /* @__PURE__ */ Symbol("form reset"), Pt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), $n = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Nr = 3, zt = 8;
function Fs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ir(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Is() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let T = !1;
function Pe(e) {
  T = e;
}
let L;
function _e(e) {
  if (e === null)
    throw ir(), Ye;
  return L = e;
}
function ar() {
  return _e(/* @__PURE__ */ je(L));
}
function Q(e) {
  if (T) {
    if (/* @__PURE__ */ je(L) !== null)
      throw ir(), Ye;
    L = e;
  }
}
function En(e = 1) {
  if (T) {
    for (var t = e, r = L; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ je(r);
    L = r;
  }
}
function Zt(e = !0) {
  for (var t = 0, r = L; ; ) {
    if (r.nodeType === zt) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Cr) {
        if (t === 0) return r;
        t -= 1;
      } else (n === pn || n === Or || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ je(r)
    );
    e && r.remove(), r = s;
  }
}
function Lr(e) {
  if (!e || e.nodeType !== zt)
    throw ir(), Ye;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Sn(e) {
  return e === this.v;
}
function js(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function An(e) {
  return !js(e, this.v);
}
function Hs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Bs(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Js(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Us() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Vs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ys() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function qs() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Gs(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ks() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ws() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Xs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Zs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let Qs = !1, re = null;
function vt(e) {
  re = e;
}
function Mn(e, t = !1, r) {
  re = {
    p: re,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      k
    ),
    l: null
  };
}
function Tn(e) {
  var t = (
    /** @type {ComponentContext} */
    re
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Gn(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, re = t.p, Pr(e);
}
function Pr(e = {}) {
  return Rt(e, wn, { value: !0 }), e;
}
function On() {
  return !0;
}
let Qe = [];
function Cn() {
  var e = Qe;
  Qe = [], Ns(e);
}
function et(e) {
  if (Qe.length === 0 && !Mt) {
    var t = Qe;
    queueMicrotask(() => {
      t === Qe && Cn();
    });
  }
  Qe.push(e);
}
function ei() {
  for (; Qe.length > 0; )
    Cn();
}
const ti = -7169;
function z(e, t) {
  e.f = e.f & ti | t;
}
function zr(e) {
  (e.f & we) !== 0 || e.deps === null ? z(e, V) : z(e, pe);
}
function Rn(e, t, r) {
  (e.f & j) !== 0 ? t.add(e) : (e.f & pe) !== 0 && r.add(e), z(e, V);
}
function Qr(e) {
  T && /* @__PURE__ */ _t(e) !== null && jr(e);
}
let en = !1;
function ri() {
  en || (en = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t[Yt]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Dt(e) {
  var t = $, r = k;
  ge(null), Te(null);
  try {
    return e();
  } finally {
    ge(t), Te(r);
  }
}
function ni(e, t, r, n = r) {
  e.addEventListener(t, () => Dt(r));
  const s = (
    /** @type {any} */
    e[Yt]
  );
  s ? e[Yt] = () => {
    s(), n(!0);
  } : e[Yt] = () => n(!0), ri();
}
function si(e, t, r, n) {
  const s = er;
  var i = e.filter((h) => !h.settled), l = t.map(s);
  if (r.length === 0 && i.length === 0) {
    n(l);
    return;
  }
  var a = (
    /** @type {Effect} */
    k
  ), o = ii(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((h) => h.promise)) : null;
  function d(h) {
    if ((a.f & G) === 0) {
      o();
      try {
        n([...l, ...h]);
      } catch (c) {
        Ee(c, a);
      }
      Qt();
    }
  }
  var u = Nn();
  if (r.length === 0) {
    f.then(() => d([])).finally(u);
    return;
  }
  function v() {
    Promise.all(r.map((h) => /* @__PURE__ */ ai(h))).then(d).catch((h) => Ee(h, a)).finally(u);
  }
  f ? f.then(() => {
    if ((a.f & G) !== 0) {
      u();
      return;
    }
    o(), v(), Qt();
  }) : v();
}
function ii() {
  var e = (
    /** @type {Effect} */
    k
  ), t = $, r = re, n = (
    /** @type {Batch} */
    w
  );
  return function(i = !0) {
    Te(e), ge(t), vt(r), i && (e.f & G) === 0 && (n?.activate(), n?.apply());
  };
}
function Qt(e = !0) {
  Te(null), ge(null), vt(null), e && w?.deactivate();
}
function Nn() {
  var e = (
    /** @type {Effect} */
    k
  ), t = e.b, r = (
    /** @type {Batch} */
    w
  ), n = !!t?.is_rendered();
  return t?.update_pending_count(1, r), r.increment(n, e), () => {
    t?.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  var t = Z | j;
  return k !== null && (k.f |= lt), {
    ctx: re,
    deps: null,
    effects: null,
    equals: Sn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      U
    ),
    wv: 0,
    parent: k,
    ac: null
  };
}
const $t = /* @__PURE__ */ Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function ai(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    k
  );
  n === null && Hs();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = it(
    /** @type {V} */
    U
  ), l = !$, a = /* @__PURE__ */ new Set();
  return bi(() => {
    var o = (
      /** @type {Effect} */
      k
    ), f = bn();
    s = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, (h) => {
        h !== Pt && f.reject(h);
      }).finally(Qt);
    } catch (h) {
      f.reject(h), Qt();
    }
    var d = (
      /** @type {Batch} */
      w
    );
    if (l) {
      if ((o.f & at) !== 0)
        var u = Nn();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        n.b?.is_rendered()
      )
        d.async_deriveds.get(o)?.reject($t);
      else
        for (const h of a.values())
          h.reject($t);
      a.add(f), d.async_deriveds.set(o, f);
    }
    const v = (h, c = void 0) => {
      u?.(), a.delete(f), c !== $t && (d.activate(), c ? (i.f |= Ve, pt(i, c)) : ((i.f & Ve) !== 0 && (i.f ^= Ve), pt(i, h)), d.deactivate());
    };
    f.promise.then(v, (h) => v(null, h || "unknown"));
  }), pi(() => {
    for (const o of a)
      o.reject($t);
  }), new Promise((o) => {
    function f(d) {
      function u() {
        d === s ? o(i) : f(s);
      }
      d.then(u, u);
    }
    f(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Ln(e) {
  const t = /* @__PURE__ */ er(e);
  return t.equals = An, t;
}
function li(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ne(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Dr(e) {
  var t, r = k, n = e.parent;
  if (!Ie && n !== null && e.v !== U && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (G | te)) !== 0)
    return Fs(), e.v;
  Te(n);
  try {
    li(e), t = ns(e);
  } finally {
    Te(r);
  }
  return t;
}
function Pn(e) {
  var t = Dr(e);
  if (!e.equals(t) && (e.wv = ts(), (!w?.is_fork || e.deps === null) && (w !== null ? (w.capture(e, t, !0), ct?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    z(e, V);
    return;
  }
  Ie || (be !== null ? (Br() || w?.is_fork) && be.set(e, t) : zr(e));
}
function oi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Dt(() => {
        t.ac.abort(Pt), t.ac = null;
      }), t.fn !== null && (t.teardown = Rs), Lt(t, 0), Ur(t));
}
function zn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && gt(t);
}
let dr = null, ot = null, w = null, ct = null, be = null, kr = null, Mt = !1, hr = !1, Tt = null, qt = null;
var tn = 0;
let fi = 1;
class De {
  id = fi++;
  /** True as soon as `#process` was called */
  #e = !1;
  linked = !0;
  /** @type {Batch | null} */
  #t = null;
  /** @type {Batch | null} */
  #r = null;
  /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
  async_deriveds = /* @__PURE__ */ new Map();
  /**
   * The current values of any signals that are updated in this batch.
   * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Value, [any, boolean]>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Value, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<(batch: Batch) => void>}
   */
  #o = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #s = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #a = 0;
  /**
   * Async effects that are currently in flight, _not_ inside a pending boundary
   * @type {Map<Effect, number>}
   */
  #n = /* @__PURE__ */ new Map();
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #l = null;
  /**
   * Effects that were scheduled in this batch but not yet 'resolved' into the
   * root effects that need to be flushed. Resolving — the upwards traversal that
   * marks the path to each effect on the shared effect tree (see #resolve) — is
   * deferred until the batch is processed, so that the markers are created and
   * consumed within a single traversal. Scheduling into other batches (which can
   * happen concurrently, e.g. while a batch is committed) can therefore never
   * observe (and be confused by) this batch's markers.
   * May contain duplicates — deduplication happens during resolving
   * @type {Effect[]}
   */
  #i = [];
  /**
   * Effects created while this batch was active.
   * @type {Effect[]}
   */
  #_ = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #f = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #u = /* @__PURE__ */ new Set();
  /**
   * A map of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`.
   * The value contains child effects that were dirty/maybe_dirty before being reset,
   * so they can be rescheduled if the branch survives.
   * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
   */
  #d = /* @__PURE__ */ new Map();
  /**
   * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
   * @type {Set<Effect>}
   */
  #g = /* @__PURE__ */ new Set();
  is_fork = !1;
  #c = !1;
  constructor() {
    ot === null ? dr = ot = this : (ot.#r = this, this.#t = ot), ot = this;
  }
  #w() {
    if (this.is_fork) return !0;
    for (const n of this.#n.keys()) {
      for (var t = n, r = !1; t.parent !== null; ) {
        if (this.#d.has(t)) {
          r = !0;
          break;
        }
        t = t.parent;
      }
      if (!r)
        return !0;
    }
    return !1;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    this.#d.has(t) || this.#d.set(t, { d: [], m: [] }), this.#g.delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = this.#d.get(t);
    if (n) {
      this.#d.delete(t);
      for (var s of n.d)
        z(s, j), r(s);
      for (s of n.m)
        z(s, pe), r(s);
    }
    this.#g.add(t);
  }
  /**
   * Convert the effects that were scheduled in this batch into the root effects
   * that need to be traversed, marking the path to each effect (by clearing the
   * `CLEAN` flag on ancestor branches) so that the traversal can find them.
   * This happens right before traversal rather than at scheduling time, so that
   * the markers left on the (shared) effect tree are created and consumed within
   * a single traversal — scheduling into other batches can never observe them
   * @returns {Effect[]}
   */
  #x() {
    var t = [];
    for (const i of this.#i)
      if (!((i.f & G) !== 0 || (i.f & (j | pe)) === 0)) {
        for (var r = i, n = !1; r.parent !== null; ) {
          r = r.parent;
          var s = r.f;
          if ((s & (ze | xe)) !== 0) {
            if ((s & V) === 0) {
              n = !0;
              break;
            }
            r.f ^= V;
          }
        }
        n || t.push(r);
      }
    return this.#i = [], t;
  }
  #m() {
    this.#e = !0;
    for (const a of this.#f)
      this.#u.delete(a), z(a, j), this.schedule(a);
    for (const a of this.#u)
      z(a, pe), this.schedule(a);
    this.apply();
    for (var t = Tt = [], r = [], n = qt = []; this.#i.length > 0; ) {
      tn++ > 1e3 && (this.#p(), ui());
      for (const a of this.#x())
        try {
          this.#b(a, t, r);
        } catch (o) {
          throw In(a), this.#w() || this.discard(), o;
        }
    }
    if (w = null, n.length > 0) {
      var s = De.ensure();
      for (const a of n)
        s.schedule(a);
    }
    if (Tt = null, qt = null, this.#w()) {
      this.#v(r), this.#v(t);
      for (const [a, o] of this.#d)
        Fn(a, o);
      n.length > 0 && /** @type {unknown} */
      w.#m();
      return;
    }
    const i = this.#h();
    if (i) {
      this.#v(r), this.#v(t), i.#k(this);
      return;
    }
    this.#f.clear(), this.#u.clear();
    for (const a of this.#o) a(this);
    this.#o.clear(), ct = this, rn(r), rn(t), ct = null, this.#l?.resolve();
    var l = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      w
    );
    if (this.#a === 0 && (this.#i.length === 0 || l !== null) && this.#p(), this.#i.length > 0)
      if (l !== null) {
        for (const a of this.#i)
          l.#i.push(a);
        this.#i = [];
      } else
        l = this;
    l !== null && (Ae.clear(), l.#m());
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #b(t, r, n) {
    t.f ^= V;
    for (var s = t.first; s !== null; ) {
      var i = s.f, l = (i & (xe | ze)) !== 0, a = l && (i & V) !== 0, o = a || (i & te) !== 0 || this.#d.has(s);
      if (!o && s.fn !== null) {
        l ? s.f ^= V : (i & dt) !== 0 ? r.push(s) : Ft(s) && ((i & me) !== 0 && this.#u.add(s), gt(s));
        var f = s.first;
        if (f !== null) {
          s = f;
          continue;
        }
      }
      for (; s !== null; ) {
        var d = s.next;
        if (d !== null) {
          s = d;
          break;
        }
        s = s.parent;
      }
    }
  }
  #h() {
    for (var t = this.#t; t !== null; ) {
      if (!t.is_fork) {
        for (const [r, [, n]] of this.current)
          if (t.current.has(r) && !n)
            return t;
      }
      t = t.#t;
    }
    return null;
  }
  /**
   * @param {Batch} batch
   */
  #k(t) {
    for (const [n, s] of t.current)
      !this.previous.has(n) && t.previous.has(n) && this.previous.set(n, t.previous.get(n)), this.current.set(n, s);
    for (const [n, s] of t.async_deriveds) {
      const i = this.async_deriveds.get(n);
      i && s.promise.then(i.resolve).catch(i.reject);
    }
    t.async_deriveds.clear(), this.transfer_effects(t.#f, t.#u);
    const r = (n) => {
      var s = n.reactions;
      if (s !== null && !((n.f & Z) !== 0 && (n.f & (j | pe)) === 0))
        for (const a of s) {
          var i = a.f;
          if ((i & Z) !== 0)
            r(
              /** @type {Derived} */
              a
            );
          else {
            var l = (
              /** @type {Effect} */
              a
            );
            i & (ut | me) && !this.async_deriveds.has(l) && (this.#u.delete(l), z(l, j), this.schedule(l));
          }
        }
    };
    for (const n of this.current.keys())
      r(n);
    this.oncommit(() => t.discard()), t.#p(), w = this, this.#m();
  }
  /**
   * @param {Effect[]} effects
   */
  #v(t) {
    for (var r = 0; r < t.length; r += 1)
      Rn(t[r], this.#f, this.#u);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== U && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ve) === 0 && (this.current.set(t, [r, n]), be?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    w = this;
  }
  deactivate() {
    w = null, be = null;
  }
  flush() {
    try {
      hr = !0, w = this, this.#m();
    } finally {
      tn = 0, kr = null, Tt = null, qt = null, hr = !1, w = null, be = null, Ae.clear();
    }
  }
  discard() {
    for (const t of this.#s) t(this);
    this.#s.clear();
    for (const t of this.async_deriveds.values())
      t.reject($t);
    this.#p(), this.#l?.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    this.#_.push(t);
  }
  #y() {
    for (let u = dr; u !== null; u = u.#r) {
      var t = u.id < this.id, r = [];
      for (const [v, [h, c]] of this.current) {
        if (u.current.has(v)) {
          var n = (
            /** @type {[any, boolean]} */
            u.current.get(v)[0]
          );
          if (t && h !== n)
            u.current.set(v, [h, c]);
          else
            continue;
        }
        r.push(v);
      }
      if (t)
        for (const [v, h] of this.async_deriveds) {
          const c = u.async_deriveds.get(v);
          c && h.promise.then(c.resolve).catch(c.reject);
        }
      var s = [...u.current.keys()].filter(
        (v) => !/** @type {[any, boolean]} */
        u.current.get(v)[1]
      );
      if (!(!u.#e || s.length === 0)) {
        var i = s.filter((v) => !this.current.has(v));
        if (i.length === 0)
          t && u.discard();
        else if (r.length > 0) {
          if (t)
            for (const v of this.#g)
              u.unskip_effect(v, (h) => {
                (h.f & (me | ut)) !== 0 ? u.schedule(h) : u.#v([h]);
              });
          u.activate();
          var l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
          for (var o of r)
            Dn(o, i, l, a);
          a = /* @__PURE__ */ new Map();
          var f = [...u.current].filter(([v, h]) => {
            const c = this.current.get(v);
            return c ? c[0] !== h[0] || c[1] !== h[1] : !0;
          }).map(([v]) => v);
          if (f.length > 0)
            for (const v of this.#_)
              (v.f & (G | te | Wt)) === 0 && Fr(v, f, a) && ((v.f & (ut | me)) !== 0 ? (z(v, j), u.schedule(v)) : u.#f.add(v));
          if (u.#i.length > 0 && !u.#c) {
            u.apply();
            for (var d of u.#x())
              u.#b(d, [], []);
          }
          u.deactivate();
        }
      }
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (this.#a += 1, t) {
      let n = this.#n.get(r) ?? 0;
      this.#n.set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (this.#a -= 1, t) {
      let n = this.#n.get(r) ?? 0;
      n === 1 ? this.#n.delete(r) : this.#n.set(r, n - 1);
    }
    this.#c || (this.#c = !0, et(() => {
      this.#c = !1, this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      this.#f.add(n);
    for (const n of r)
      this.#u.add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    this.#o.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#s.add(t);
  }
  settled() {
    return (this.#l ??= bn()).promise;
  }
  static ensure() {
    if (w === null) {
      const t = w = new De();
      !hr && !Mt && et(() => {
        t.#e || t.flush();
      });
    }
    return w;
  }
  apply() {
    {
      be = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (kr = t, t.b?.is_pending && (t.f & (dt | sr | yn)) !== 0 && (t.f & at) === 0) {
      t.b.defer_effect(t);
      return;
    }
    this.#i.push(t);
  }
  #p() {
    if (this.linked) {
      var t = this.#t, r = this.#r;
      t === null ? dr = r : t.#r = r, r === null ? ot = t : r.#t = t, this.linked = !1;
    }
  }
}
function ft(e) {
  var t = Mt, r = ct;
  ct = null, Mt = !0;
  try {
    for (var n; ; ) {
      if (ei(), w === null)
        return (
          /** @type {T} */
          n
        );
      w.flush();
    }
  } finally {
    Mt = t, ct = r;
  }
}
function ui() {
  try {
    Ys();
  } catch (e) {
    Ee(e, kr);
  }
}
let Ne = null;
function rn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (G | te)) === 0 && Ft(n) && (Ne = /* @__PURE__ */ new Set(), gt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Xn(n), Ne?.size > 0)) {
        Ae.clear();
        for (const s of Ne) {
          if ((s.f & (G | te)) !== 0) continue;
          const i = [s];
          let l = s.parent;
          for (; l !== null; )
            Ne.has(l) && (Ne.delete(l), i.push(l)), l = l.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const o = i[a];
            (o.f & (G | te)) === 0 && gt(o);
          }
        }
        Ne.clear();
      }
    }
    Ne = null;
  }
}
function Dn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & Z) !== 0 ? Dn(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (ut | me)) !== 0 && (i & j) === 0 && Fr(s, t, n) && (z(s, j), Ir(
        /** @type {Effect} */
        s
      ));
    }
}
function Fr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Ct.call(t, s))
        return !0;
      if ((s.f & Z) !== 0 && Fr(
        /** @type {Derived} */
        s,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function Ir(e) {
  w.schedule(e);
}
function Fn(e, t) {
  if (!((e.f & xe) !== 0 && (e.f & V) !== 0)) {
    (e.f & j) !== 0 ? t.d.push(e) : (e.f & pe) !== 0 && t.m.push(e), z(e, V);
    for (var r = e.first; r !== null; )
      Fn(r, t), r = r.next;
  }
}
function In(e) {
  z(e, V);
  for (var t = e.first; t !== null; )
    In(t), t = t.next;
}
let tr = /* @__PURE__ */ new Set();
const Ae = /* @__PURE__ */ new Map();
let jn = !1;
function it(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Sn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function ie(e, t) {
  const r = it(e);
  return xi(r), r;
}
// @__NO_SIDE_EFFECTS__
function Hn(e, t = !1, r = !0) {
  const n = it(e);
  return t || (n.equals = An), n;
}
function O(e, t, r = !1) {
  $ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ye || ($.f & Wt) !== 0) && On() && ($.f & (Z | me | ut | Wt)) !== 0 && (Me === null || !Me.has(e)) && Xs();
  let n = r ? Se(t) : t;
  return pt(e, n, qt);
}
var Ze = null, $r = 0;
function pt(e, t, r = null) {
  if (!e.equals(t)) {
    Ie ? Ae.set(e, t) : Ae.has(e) || Ae.set(e, e.v);
    var n = De.ensure();
    if (n.capture(e, t), (e.f & Z) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & j) !== 0 && Dr(s), be === null && zr(s);
    }
    e.wv = ts(), Ze = null, $r = 0, Bn(e, j, r), Ze = null, k !== null && (k.f & V) !== 0 && (k.f & (xe | ze)) === 0 && (he === null ? ki([e]) : he.push(e)), !n.is_fork && tr.size > 0 && !jn && ci();
  }
  return t;
}
function ci() {
  jn = !1;
  for (const e of tr) {
    (e.f & V) !== 0 && z(e, pe);
    let t;
    try {
      t = Ft(e);
    } catch {
      t = !0;
    }
    t && gt(e);
  }
  tr.clear();
}
function Ot(e) {
  O(e, e.v + 1);
}
function Bn(e, t, r) {
  var n = e.reactions;
  if (n !== null) {
    var s = n.length;
    if ($r += s, $r > 1e5 && Ze === null && (Ze = /* @__PURE__ */ new Set()), Ze !== null) {
      if (Ze.has(e)) return;
      Ze.add(e);
    }
    for (var i = 0; i < s; i++) {
      var l = n[i], a = l.f, o = (a & j) === 0;
      if (o && z(l, t), (a & Wt) !== 0)
        tr.add(
          /** @type {Effect} */
          l
        );
      else if ((a & Z) !== 0) {
        var f = (
          /** @type {Derived} */
          l
        );
        be?.delete(f), Bn(f, pe, r);
      } else if (o) {
        var d = (
          /** @type {Effect} */
          l
        );
        (a & me) !== 0 && Ne !== null && Ne.add(d), r !== null ? r.push(d) : Ir(d);
      }
    }
  }
}
function Se(e) {
  if (typeof e != "object" || e === null || At in e || wn in e)
    return e;
  const t = mn(e);
  if (t !== Os && t !== Cs)
    return e;
  var r = /* @__PURE__ */ new Map(), n = gn(e), s = /* @__PURE__ */ ie(0), i = st, l = (a) => {
    if (st === i)
      return a();
    var o = $, f = st;
    ge(null), an(i);
    var d = a();
    return ge(o), an(f), d;
  };
  return n && r.set("length", /* @__PURE__ */ ie(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, o, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Ks();
        var d = r.get(o);
        return d === void 0 ? l(() => {
          var u = /* @__PURE__ */ ie(f.value);
          return r.set(o, u), u;
        }) : O(d, f.value, !0), !0;
      },
      deleteProperty(a, o) {
        var f = r.get(o);
        if (f === void 0) {
          if (o in a) {
            const d = l(() => /* @__PURE__ */ ie(U));
            r.set(o, d), Ot(s);
          }
        } else
          O(f, U), Ot(s);
        return !0;
      },
      get(a, o, f) {
        if (o === At)
          return e;
        var d = r.get(o), u = o in a;
        if (d === void 0 && (!u || rt(a, o)?.writable) && (d = l(() => {
          var h = Se(u ? a[o] : U), c = /* @__PURE__ */ ie(h);
          return c;
        }), r.set(o, d)), d !== void 0) {
          var v = p(d);
          return v === U ? void 0 : v;
        }
        return Reflect.get(a, o, f);
      },
      getOwnPropertyDescriptor(a, o) {
        this.has?.(a, o);
        var f = Reflect.getOwnPropertyDescriptor(a, o), d = r.get(o);
        if (d !== void 0) {
          var u = p(d);
          if (u === U)
            return;
          if (f && "value" in f)
            f.value = u;
          else
            return {
              enumerable: !0,
              configurable: !0,
              value: u,
              writable: !0
            };
        }
        return f;
      },
      has(a, o) {
        if (o === At)
          return !0;
        var f = r.get(o), d = f !== void 0 && f.v !== U || Reflect.has(a, o);
        if (f !== void 0 || k !== null && (!d || rt(a, o)?.writable)) {
          f === void 0 && (f = l(() => {
            var v = d ? Se(a[o]) : U, h = /* @__PURE__ */ ie(v);
            return h;
          }), r.set(o, f));
          var u = p(f);
          if (u === U)
            return !1;
        }
        return d;
      },
      set(a, o, f, d) {
        var u = r.get(o), v = o in a;
        if (n && o === "length")
          for (var h = f; h < /** @type {Source<number>} */
          u.v; h += 1) {
            var c = r.get(h + "");
            c !== void 0 ? O(c, U) : h in a && (c = l(() => /* @__PURE__ */ ie(U)), r.set(h + "", c));
          }
        if (u === void 0)
          (!v || rt(a, o)?.writable) && (u = l(() => /* @__PURE__ */ ie(void 0)), O(u, Se(f)), r.set(o, u));
        else {
          v = u.v !== U;
          var g = l(() => Se(f));
          O(u, g);
        }
        var _ = Reflect.getOwnPropertyDescriptor(a, o);
        if (_?.set && _.set.call(d, f), !v) {
          if (n && typeof o == "string") {
            var b = (
              /** @type {Source<number>} */
              r.get("length")
            ), E = Number(o);
            Number.isInteger(E) && E >= b.v && O(b, E + 1);
          }
          Ot(s);
        }
        return !0;
      },
      ownKeys(a) {
        p(s);
        var o = Reflect.ownKeys(a).filter((u) => {
          var v = r.get(u);
          return v === void 0 || v.v !== U;
        });
        for (var [f, d] of r)
          d.v !== U && !(f in a) && o.push(f);
        return o;
      },
      setPrototypeOf() {
        Ws();
      }
    }
  );
}
var nn, Jn, Un, Vn;
function Er() {
  if (nn === void 0) {
    nn = window, Jn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Un = rt(t, "firstChild").get, Vn = rt(t, "nextSibling").get, Zr(e) && (e[wr] = void 0, e[kn] = null, e[Ds] = void 0, e.__e = void 0), Zr(r) && (r[xr] = void 0);
  }
}
function Fe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function _t(e) {
  return (
    /** @type {TemplateNode | null} */
    Un.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function je(e) {
  return (
    /** @type {TemplateNode | null} */
    Vn.call(e)
  );
}
function ee(e, t) {
  if (!T)
    return /* @__PURE__ */ _t(e);
  var r = /* @__PURE__ */ _t(L);
  if (r === null)
    r = L.appendChild(Fe());
  else if (t && r.nodeType !== Nr) {
    var n = Fe();
    return r?.before(n), _e(n), n;
  }
  return t && qn(
    /** @type {Text} */
    r
  ), _e(r), r;
}
function Be(e, t = !1) {
  if (!T)
    return /* @__PURE__ */ _t(e);
  var r = ee(e, t);
  return Q(e), r;
}
function I(e, t = 1, r = !1) {
  let n = T ? L : e;
  for (var s; t--; )
    s = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ je(n);
  if (!T)
    return n;
  if (r) {
    if (n?.nodeType !== Nr) {
      var i = Fe();
      return n === null ? s?.after(i) : n.before(i), _e(i), i;
    }
    qn(
      /** @type {Text} */
      n
    );
  }
  return _e(n), n;
}
function jr(e) {
  e.textContent = "";
}
function Yn() {
  return !1;
}
function Hr(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElement(e)
  );
}
function qn(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Nr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function di(e) {
  var t = k;
  if (t === null)
    return $.f |= Ve, e;
  if ((t.f & at) === 0 && (t.f & dt) === 0)
    throw e;
  Ee(e, t);
}
function Ee(e, t) {
  if (e === Ye)
    throw e;
  if (!(t !== null && (t.f & G) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & yr) !== 0 && (t.f & (G | Nt)) === 0) {
        if ((t.f & at) === 0)
          throw e;
        try {
          t.b.error(e);
          return;
        } catch (r) {
          e = r;
        }
      }
      t = t.parent;
    }
    throw e;
  }
}
function hi(e) {
  k === null && ($ === null && Vs(), Us()), Ie && Js();
}
function vi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Oe(e, t) {
  var r = k;
  r !== null && (r.f & te) !== 0 && (e |= te);
  var n = {
    ctx: re,
    deps: null,
    nodes: null,
    f: e | j | we,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  w?.register_created_effect(n);
  var s = n;
  if ((e & dt) !== 0)
    Tt !== null ? Tt.push(n) : De.ensure().schedule(n);
  else if (t !== null) {
    try {
      gt(n);
    } catch (l) {
      throw ne(n), l;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & lt) === 0 && (s = s.first, (e & me) !== 0 && (e & ht) !== 0 && s !== null && (s.f |= ht));
  }
  if (s !== null && (s.parent = r, r !== null && vi(s, r), $ !== null && ($.f & Z) !== 0 && (e & ze) === 0)) {
    var i = (
      /** @type {Derived} */
      $
    );
    (i.effects ??= []).push(s);
  }
  return n;
}
function Br() {
  return $ !== null && !ye;
}
function pi(e) {
  const t = Oe(sr, null);
  return z(t, V), t.teardown = e, t;
}
function _i(e) {
  hi();
  var t = (
    /** @type {Effect} */
    k.f
  ), r = !$ && (t & xe) !== 0 && re !== null && !re.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      re
    );
    (n.e ??= []).push(e);
  } else
    return Gn(e);
}
function Gn(e) {
  return Oe(dt | Ps, e);
}
function gi(e) {
  De.ensure();
  const t = Oe(ze | lt, e);
  return () => {
    ne(t);
  };
}
function mi(e) {
  De.ensure();
  const t = Oe(ze | lt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? nt(t, () => {
      ne(t), n(void 0);
    }) : (ne(t), n(void 0));
  });
}
function Kn(e) {
  return Oe(dt, e);
}
function bi(e) {
  return Oe(ut | lt, e);
}
function lr(e, t = 0) {
  return Oe(sr | t, e);
}
function wt(e, t = [], r = [], n = []) {
  si(n, t, r, (s) => {
    Oe(sr, () => {
      e(...s.map(p));
    });
  });
}
function Jr(e, t = 0) {
  var r = Oe(me | t, e);
  return r;
}
function ve(e) {
  return Oe(xe | lt, e);
}
function Wn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Ie, n = $;
    sn(!0), ge(null);
    try {
      t.call(null);
    } catch (s) {
      Ee(s, e.parent);
    } finally {
      sn(r), ge(n);
    }
  }
}
function Ur(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && Dt(() => {
      s.abort(Pt);
    });
    var n = r.next;
    (r.f & ze) !== 0 ? r.parent = null : ne(r, t), r = n;
  }
}
function yi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & xe) === 0 && ne(t), t = r;
  }
}
function ne(e, t = !0) {
  var r = !1;
  (t || (e.f & Ls) !== 0) && e.nodes !== null && e.nodes.end !== null && (wi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), e.f |= Nt, Ur(e, t && !r), Lt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  Wn(e), e.f ^= Nt, e.f |= G;
  var s = e.parent;
  s !== null && s.first !== null && Xn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function wi(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ je(e);
    e.remove(), e = r;
  }
}
function Xn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function nt(e, t, r = !0) {
  var n = [];
  e.f |= Rr, Zn(e, n, !0);
  var s = () => {
    r && ne(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var l = () => --i || s();
    for (var a of n)
      a.out(l);
  } else
    s();
}
function Zn(e, t, r) {
  if ((e.f & te) === 0) {
    e.f ^= te;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || r) && t.push(a);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if ((s.f & ze) === 0) {
        var l = (s.f & ht) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & xe) !== 0 && (e.f & me) !== 0;
        Zn(s, t, l ? r : !1);
      }
      s = i;
    }
  }
}
function rr(e) {
  e.f &= ~Rr, Qn(e, !0);
}
function Qn(e, t) {
  if ((e.f & Rr) === 0 && (e.f & te) !== 0) {
    e.f ^= te, (e.f & V) === 0 && (z(e, j), De.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & ht) !== 0 || (r.f & xe) !== 0;
      Qn(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const l of i)
        (l.is_global || t) && l.in();
  }
}
function Vr(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ je(r);
      t.append(r), r = s;
    }
}
let Ie = !1;
function sn(e) {
  Ie = e;
}
let $ = null, ye = !1;
function ge(e) {
  $ = e;
}
let k = null;
function Te(e) {
  k = e;
}
let Me = null;
function xi(e) {
  $ !== null && (($.f & Xt) !== 0 || ($.f & Z) !== 0) && (Me ??= /* @__PURE__ */ new Set()).add(e);
}
let ae = null, ue = 0, he = null;
function ki(e) {
  he = e;
}
let es = 1, tt = 0, st = tt;
function an(e) {
  st = e;
}
function ts() {
  return ++es;
}
function Ft(e) {
  var t = e.f;
  if ((t & j) !== 0)
    return !0;
  if ((t & pe) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (Ft(
        /** @type {Derived} */
        i
      ) && Pn(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & we) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    be === null && z(e, V);
  }
  return !1;
}
function rs(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Me !== null && Me.has(e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & Z) !== 0 ? rs(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? z(i, j) : (i.f & V) !== 0 && z(i, pe), Ir(
        /** @type {Effect} */
        i
      ));
    }
}
function ns(e) {
  var t = ae, r = ue, n = he, s = $, i = Me, l = re, a = ye, o = st, f = e.f;
  ae = /** @type {null | Value[]} */
  null, ue = 0, he = null, $ = (f & (xe | ze)) === 0 ? e : null, Me = null, vt(e.ctx), ye = !1, st = ++tt, e.ac !== null && (Dt(() => {
    e.ac.abort(Pt);
  }), e.ac = null);
  try {
    e.f |= Xt;
    var d = (
      /** @type {Function} */
      e.fn
    ), u = d();
    e.f |= at;
    var v = ln(e);
    if (On() && he !== null && !ye && v !== null && (e.f & (Z | pe | j)) === 0)
      for (var h = 0; h < /** @type {Source[]} */
      he.length; h++)
        rs(
          he[h],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (tt++, s.deps !== null)
        for (let c = 0; c < r; c += 1)
          s.deps[c].rv = tt;
      if (t !== null)
        for (const c of t)
          c.rv = tt;
      he !== null && (n === null ? n = he : n.push(.../** @type {Source[]} */
      he));
    }
    return (e.f & Ve) !== 0 && (e.f ^= Ve), u;
  } catch (c) {
    return ln(e), di(c);
  } finally {
    e.f ^= Xt, ae = t, ue = r, he = n, $ = s, Me = i, vt(l), ye = a, st = o;
  }
}
function ln(e) {
  var t = e.deps, r = w?.is_fork;
  if (ae !== null) {
    var n;
    if (r || Lt(e, ue), t !== null && ue > 0)
      for (t.length = ue + ae.length, n = 0; n < ae.length; n++)
        t[ue + n] = ae[n];
    else
      e.deps = t = ae;
    if (Br() && (e.f & we) !== 0)
      for (n = ue; n < t.length; n++)
        (t[n].reactions ??= []).push(e);
  } else !r && t !== null && ue < t.length && (Lt(e, ue), t.length = ue);
  return t;
}
function $i(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Ms.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & Z) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ae === null || !Ct.call(ae, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & we) !== 0 && (i.f ^= we), i.v !== U && zr(i), i.ac !== null && Dt(() => {
      i.ac.abort(Pt), i.ac = null, z(i, j);
    }), oi(i), Lt(i, 0);
  }
}
function Lt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      $i(e, r[n]);
}
function gt(e) {
  var t = e.f;
  if ((t & G) === 0) {
    z(e, V);
    var r = k;
    k = e;
    try {
      (t & (me | yn)) !== 0 ? yi(e) : Ur(e), Wn(e);
      var n = ns(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = es;
      var s;
      _n && Qs && (e.f & j) !== 0 && e.deps;
    } finally {
      k = r;
    }
  }
}
async function Ei() {
  await Promise.resolve(), ft();
}
function p(e) {
  var t = e.f, r = (t & Z) !== 0;
  if ($ !== null && !ye) {
    var n = k !== null && (k.f & G) !== 0;
    if (!n && (Me === null || !Me.has(e))) {
      var s = $.deps;
      if (($.f & Xt) !== 0)
        e.rv < tt && (e.rv = tt, ae === null && s !== null && s[ue] === e ? ue++ : ae === null ? ae = [e] : ae.push(e));
      else {
        $.deps ??= [], Ct.call($.deps, e) || $.deps.push(e);
        var i = e.reactions;
        i === null ? e.reactions = [$] : Ct.call(i, $) || i.push($);
      }
    }
  }
  if (Ie && Ae.has(e))
    return Ae.get(e);
  if (r) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (Ie) {
      var a = l.v;
      return ((l.f & V) === 0 && l.reactions !== null || is(l)) && (a = Dr(l)), Ae.set(l, a), a;
    }
    var o = (l.f & we) === 0 && !ye && $ !== null && ($.f & we) !== 0, f = (l.f & at) === 0;
    Ft(l) && (o && (l.f |= we), Pn(l)), o && !f && (zn(l), ss(l));
  }
  if (be?.has(e))
    return be.get(e);
  if ((e.f & Ve) !== 0)
    throw e.v;
  return e.v;
}
function ss(e) {
  if (e.f |= we, e.deps !== null)
    for (const r of e.deps) {
      var t = r.reactions;
      t === null ? r.reactions = [e] : Ct.call(t, e) || t.push(e), (r.f & Z) !== 0 && (r.f & we) === 0 && (zn(
        /** @type {Derived} */
        r
      ), ss(
        /** @type {Derived} */
        r
      ));
    }
}
function is(e) {
  if (e.v === U) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ae.has(t) || (t.f & Z) !== 0 && is(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function It(e) {
  var t = ye;
  try {
    return ye = !0, e();
  } finally {
    ye = t;
  }
}
const Et = /* @__PURE__ */ Symbol("events"), as = /* @__PURE__ */ new Set(), Sr = /* @__PURE__ */ new Set();
function We(e, t, r) {
  (t[Et] ??= {})[e] = r;
}
function Si(e) {
  for (var t = 0; t < e.length; t++)
    as.add(e[t]);
  for (var r of Sr)
    r(e);
}
let vr = null, pr = !1;
function on(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  vr = e, pr || (pr = !0, setTimeout(() => {
    pr = !1, vr = null;
  }));
  var l = 0, a = vr === e && e[Et];
  if (a) {
    var o = s.indexOf(a);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Et] = t;
      return;
    }
    var f = s.indexOf(t);
    if (f === -1)
      return;
    o <= f && (l = o);
  }
  if (i = /** @type {Element} */
  s[l] || e.target, i !== t) {
    Rt(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var d = $, u = k;
    ge(null), Te(null);
    try {
      for (var v, h = []; i !== null && i !== t; ) {
        try {
          var c = i[Et]?.[n];
          c != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && c.call(i, e);
        } catch (g) {
          v ? h.push(g) : v = g;
        }
        if (e.cancelBubble) break;
        l++, i = l < s.length ? (
          /** @type {Element} */
          s[l]
        ) : null;
      }
      if (v) {
        for (let g of h)
          queueMicrotask(() => {
            throw g;
          });
        throw v;
      }
    } finally {
      e[Et] = t, delete e.currentTarget, ge(d), Te(u);
    }
  }
}
const Ai = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Mi(e) {
  return (
    /** @type {string} */
    Ai?.createHTML(e) ?? e
  );
}
function Ti(e) {
  var t = Hr("template");
  return t.innerHTML = Mi(e.replaceAll("<!>", "<!---->")), t.content;
}
function Ar(e, t) {
  var r = (
    /** @type {Effect} */
    k
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function mt(e, t) {
  var r = (t & Ss) !== 0, n, s = !e.startsWith("<!>");
  return () => {
    if (T)
      return Ar(L, null), L;
    n === void 0 && (n = Ti(s ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ _t(n));
    var i = (
      /** @type {TemplateNode} */
      r || Jn ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Ar(i, i), i;
  };
}
function Xe(e, t) {
  if (T) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      k
    );
    ((r.f & at) === 0 || r.nodes.end === null) && (r.nodes.end = L), ar();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Oi = ["touchstart", "touchmove"];
function Ci(e) {
  return Oi.includes(e);
}
function Ri(e) {
  let t = 0, r = it(0), n;
  return () => {
    Br() && (p(r), lr(() => (t === 0 && (n = It(() => e(() => Ot(r)))), t += 1, () => {
      et(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Ot(r));
      });
    })));
  };
}
var Ni = ht | lt;
function Li(e, t, r, n) {
  new Pi(e, t, r, n);
}
class Pi {
  /** @type {Boundary | null} */
  parent;
  is_pending = !1;
  /**
   * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
   * Inherited from parent boundary, or defaults to identity.
   * @type {(error: unknown) => unknown}
   */
  transform_error;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #t = T ? L : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #o;
  /** @type {Effect} */
  #s;
  /** @type {Effect | null} */
  #a = null;
  /** @type {Effect | null} */
  #n = null;
  /** @type {Effect | null} */
  #l = null;
  /** @type {DocumentFragment | null} */
  #i = null;
  #_ = 0;
  #f = 0;
  #u = !1;
  /** @type {Set<Effect>} */
  #d = /* @__PURE__ */ new Set();
  /** @type {Set<Effect>} */
  #g = /* @__PURE__ */ new Set();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #c = null;
  #w = Ri(() => (this.#c = it(this.#_), () => {
    this.#c = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    this.#e = t, this.#r = r, this.#o = (i) => {
      var l = (
        /** @type {Effect} */
        k
      );
      l.b = this, l.f |= yr, n(i);
    }, this.parent = /** @type {Effect} */
    k.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), this.#s = Jr(() => {
      if (T) {
        const i = Lr(
          /** @type {TemplateNode} */
          this.#t
        );
        ar();
        const l = i === Or;
        if (i.startsWith(Xr)) {
          const o = JSON.parse(i.slice(Xr.length));
          this.#m(o);
        } else l ? this.#k() : this.#x();
      } else
        this.#v();
    }, Ni), T && (this.#e = L);
  }
  #x() {
    try {
      this.#a = ve(() => this.#o(this.#e));
    } catch (t) {
      this.error(t);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #m(t) {
    const r = this.#r.failed, { reset: n, invoke_onerror: s } = this.#b(t);
    et(s), r && (this.#l = ve(() => {
      r(
        this.#e,
        () => t,
        () => n
      );
    }));
  }
  /**
   * Creates the `reset` function for a failed boundary, along with a function
   * that invokes `onerror` with it (if provided)
   * @param {unknown} error
   * @returns {{ reset: () => void, invoke_onerror: () => void }}
   */
  #b(t) {
    var r = !1, n = !1;
    const s = () => {
      if (!this.#h()) {
        if (r) {
          Is();
          return;
        }
        r = !0, n && Zs(), this.#l !== null && nt(this.#l, () => {
          this.#l = null;
        }), this.#p(() => {
          this.#v();
        });
      }
    };
    return { reset: s, invoke_onerror: () => {
      if (!this.#h())
        try {
          n = !0, this.#r.onerror?.(t, s), n = !1;
        } catch (l) {
          Ee(l, this.#s && this.#s.parent);
        }
    } };
  }
  #h() {
    return (this.#s.f & (G | Nt)) !== 0;
  }
  #k() {
    const t = this.#r.pending;
    t && (this.is_pending = !0, this.#n = ve(() => t(this.#e)), et(() => {
      if (!this.#h()) {
        var r = this.#i = document.createDocumentFragment(), n = Fe(), s = !1;
        if (r.append(n), this.#a = this.#p(() => {
          try {
            return ve(() => this.#o(n));
          } catch (i) {
            try {
              this.error(i), s = !0;
            } catch (l) {
              Ee(l, this.#s.parent);
            }
            return null;
          }
        }), this.#a === null) {
          this.#i = null, s && this.#y(
            /** @type {Batch} */
            w
          );
          return;
        }
        this.#f === 0 && (this.#e.before(r), this.#i = null, nt(
          /** @type {Effect} */
          this.#n,
          () => {
            this.#n = null;
          }
        ), this.#y(
          /** @type {Batch} */
          w
        ));
      }
    }));
  }
  #v() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#f = 0, this.#_ = 0, this.#a = ve(() => {
        this.#o(this.#e);
      }), this.#f > 0) {
        var t = this.#i = document.createDocumentFragment();
        Vr(this.#a, t);
        const r = (
          /** @type {(anchor: Node) => void} */
          this.#r.pending
        );
        this.#n = ve(() => r(this.#e));
      } else
        this.#y(
          /** @type {Batch} */
          w
        );
    } catch (r) {
      this.error(r);
    }
  }
  /**
   * @param {Batch} batch
   */
  #y(t) {
    this.is_pending = !1, t.transfer_effects(this.#d, this.#g);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Rn(t, this.#d, this.#g);
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#r.pending;
  }
  /**
   * @template T
   * @param {() => T} fn
   */
  #p(t) {
    var r = k, n = $, s = re;
    Te(this.#s), ge(this.#s), vt(this.#s.ctx);
    try {
      return De.ensure(), t();
    } finally {
      Te(r), ge(n), vt(s);
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  #$(t, r) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#$(t, r);
      return;
    }
    this.#f += t, this.#f === 0 && (this.#y(r), this.#n && nt(this.#n, () => {
      this.#n = null;
    }), this.#i && (this.#e.before(this.#i), this.#i = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    this.#$(t, r), this.#_ += t, !(!this.#c || this.#u) && (this.#u = !0, et(() => {
      this.#u = !1, this.#c && pt(this.#c, this.#_);
    }));
  }
  get_effect_pending() {
    return this.#w(), p(
      /** @type {Source<number>} */
      this.#c
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (t === Ye || !this.#r.onerror && !this.#r.failed)
      throw t;
    w?.is_fork ? (this.#a && w.skip_effect(this.#a), this.#n && w.skip_effect(this.#n), this.#l && w.skip_effect(this.#l), w.oncommit(() => {
      this.#h() || this.#E(t);
    })) : this.#E(t);
  }
  /**
   * @param {unknown} error
   */
  #E(t) {
    this.#a && (ne(this.#a), this.#a = null), this.#n && (ne(this.#n), this.#n = null), this.#l && (ne(this.#l), this.#l = null), T && (_e(
      /** @type {TemplateNode} */
      this.#t
    ), En(), _e(Zt()));
    let r = this.#r.failed;
    const n = (s) => {
      if (this.#h()) return;
      const { reset: i, invoke_onerror: l } = this.#b(s);
      l(), r && !this.#h() && (this.#l = this.#p(() => {
        try {
          return ve(() => {
            var a = (
              /** @type {Effect} */
              k
            );
            a.b = this, a.f |= yr, r(
              this.#e,
              () => s,
              () => i
            );
          });
        } catch (a) {
          return Ee(
            a,
            /** @type {Effect} */
            this.#s.parent
          ), null;
        }
      }));
    };
    et(() => {
      if (!this.#h()) {
        var s;
        try {
          s = this.transform_error(t);
        } catch (i) {
          Ee(i, this.#s && this.#s.parent);
          return;
        }
        s !== null && typeof s == "object" && typeof /** @type {any} */
        s.then == "function" ? s.then(
          n,
          /** @param {unknown} e */
          (i) => Ee(i, this.#s && this.#s.parent)
        ) : n(s);
      }
    });
  }
}
function Je(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[xr] ??= e.nodeValue) && (e[xr] = r, e.nodeValue = `${r}`);
}
function ls(e, t) {
  return os(e, t);
}
function zi(e, t) {
  Er(), t.intro = t.intro ?? !1;
  const r = t.target, n = T, s = L;
  try {
    for (var i = /* @__PURE__ */ _t(r); i && (i.nodeType !== zt || /** @type {Comment} */
    i.data !== pn); )
      i = /* @__PURE__ */ je(i);
    if (!i)
      throw Ye;
    Pe(!0), _e(
      /** @type {Comment} */
      i
    );
    const l = os(e, { ...t, anchor: i });
    return Pe(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== Ye && console.warn("Failed to hydrate: ", l), t.recover === !1 && qs(), Er(), jr(r), Pe(!1), ls(e, t);
  } finally {
    Pe(n), _e(s);
  }
}
const Bt = /* @__PURE__ */ new Map();
function os(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: l = !0, transformError: a }) {
  Er();
  var o = void 0, f = mi(() => {
    var d = r ?? t.appendChild(Fe());
    Li(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (h) => {
        Mn({});
        var c = (
          /** @type {ComponentContext} */
          re
        );
        if (i && (c.c = i), s && (n.$$events = s), T && Ar(
          /** @type {TemplateNode} */
          h,
          null
        ), o = e(h, n) || Pr(), T && (k.nodes.end = L, L === null || L.nodeType !== zt || /** @type {Comment} */
        L.data !== Cr))
          throw ir(), Ye;
        Tn();
      },
      a
    );
    var u = /* @__PURE__ */ new Set(), v = (h) => {
      for (var c = 0; c < h.length; c++) {
        var g = h[c];
        if (!u.has(g)) {
          u.add(g);
          var _ = Ci(g);
          for (const C of [t, document]) {
            var b = Bt.get(C);
            b === void 0 && (b = /* @__PURE__ */ new Map(), Bt.set(C, b));
            var E = b.get(g);
            E === void 0 ? (C.addEventListener(g, on, { passive: _ }), b.set(g, 1)) : b.set(g, E + 1);
          }
        }
      }
    };
    return v(nr(as)), Sr.add(v), () => {
      for (var h of u)
        for (const _ of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Bt.get(_)
          ), g = (
            /** @type {number} */
            c.get(h)
          );
          --g == 0 ? (_.removeEventListener(h, on), c.delete(h), c.size === 0 && Bt.delete(_)) : c.set(h, g);
        }
      Sr.delete(v), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return Mr.set(o, f), o;
}
let Mr = /* @__PURE__ */ new WeakMap();
function Di(e, t) {
  const r = Mr.get(e);
  return r ? (Mr.delete(e), r(t)) : Promise.resolve();
}
class Fi {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #e = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #t = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #r = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #o = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #s = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    this.anchor = t, this.#s = r;
  }
  /**
   * @param {Batch} batch
   */
  #a = (t) => {
    if (this.#e.has(t)) {
      var r = (
        /** @type {Key} */
        this.#e.get(t)
      ), n = this.#t.get(r);
      if (n)
        rr(n), this.#o.delete(r);
      else {
        var s = this.#r.get(r);
        s && (rr(s.effect), this.#t.set(r, s.effect), this.#r.delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
      }
      for (const [i, l] of this.#e) {
        if (this.#e.delete(i), i === t)
          break;
        const a = this.#r.get(l);
        a && (ne(a.effect), this.#r.delete(l));
      }
      for (const [i, l] of this.#t) {
        if (i === r || this.#o.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var f = document.createDocumentFragment();
            Vr(l, f), f.append(Fe()), this.#r.set(i, { effect: l, fragment: f });
          } else
            ne(l);
          this.#o.delete(i), this.#t.delete(i);
        };
        this.#s || !n ? (this.#o.add(i), nt(l, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #n = (t) => {
    this.#e.delete(t);
    const r = Array.from(this.#e.values());
    for (const [n, s] of this.#r)
      r.includes(n) || (ne(s.effect), this.#r.delete(n));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      w
    ), s = Yn();
    if (r && !this.#t.has(t) && !this.#r.has(t))
      if (s) {
        var i = document.createDocumentFragment(), l = Fe();
        i.append(l), this.#r.set(t, {
          effect: ve(() => r(l)),
          fragment: i
        });
      } else
        this.#t.set(
          t,
          ve(() => r(this.anchor))
        );
    if (this.#e.set(n, t), s) {
      for (const [a, o] of this.#t)
        a === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [a, o] of this.#r)
        a === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(this.#a), n.ondiscard(this.#n);
    } else
      T && (this.anchor = L), this.#a(n);
  }
}
function Jt(e, t, r = !1) {
  var n;
  T && (n = L, ar());
  var s = new Fi(e), i = r ? ht : 0;
  function l(a, o) {
    if (T) {
      var f = Lr(
        /** @type {TemplateNode} */
        n
      );
      if (a !== parseInt(f.substring(1))) {
        var d = Zt();
        _e(d), s.anchor = d, Pe(!1), s.ensure(a, o), Pe(!0);
        return;
      }
    }
    s.ensure(a, o);
  }
  Jr(() => {
    var a = !1;
    t((o, f = 0) => {
      a = !0, l(f, o);
    }), a || l(-1, null);
  }, i);
}
function Ii(e, t) {
  return t;
}
function ji(e, t, r) {
  for (var n = [], s = t.length, i, l = t.length, a = 0; a < s; a++) {
    let u = t[a];
    nt(
      u,
      () => {
        if (i) {
          if (i.pending.delete(u), i.done.add(u), i.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Tr(e, nr(i.done)), v.delete(i), v.size === 0 && (e.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var o = n.length === 0 && r !== null && e.pending.size === 0;
    if (o) {
      var f = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        f.parentNode
      );
      jr(d), d.append(f), e.items.clear();
    }
    Tr(e, t, !o);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function Tr(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const l of e.pending.values())
      for (const a of l)
        n.add(
          /** @type {EachItem} */
          e.items.get(a).e
        );
  }
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (n?.has(i)) {
      i.f |= Le;
      const l = document.createDocumentFragment();
      Vr(i, l);
    } else
      ne(t[s], r);
  }
}
var fn;
function Hi(e, t, r, n, s, i = null) {
  var l = e, a = /* @__PURE__ */ new Map();
  T && ar();
  var o = null, f = /* @__PURE__ */ Ln(() => {
    var _ = r();
    return (
      /** @type {V[]} */
      gn(_) ? _ : _ == null ? [] : nr(_)
    );
  }), d = /* @__PURE__ */ new Map(), u = !0;
  function v(_) {
    if ((g.effect.f & G) === 0) {
      g.pending.delete(_);
      var b = p(f);
      g.fallback = o, Bi(g, b, l, t, n), o !== null && (b.length === 0 ? (o.f & Le) === 0 ? rr(o) : (o.f ^= Le, St(o, null, l)) : nt(o, () => {
        o = null;
      }));
    }
  }
  function h(_) {
    g.pending.delete(_);
  }
  var c = Jr(() => {
    var _ = (
      /** @type {V[]} */
      p(f)
    ), b = _.length;
    let E = !1;
    if (T) {
      var C = Lr(l) === Or;
      C !== (b === 0) && (l = Zt(), _e(l), Pe(!1), E = !0);
    }
    for (var x = /* @__PURE__ */ new Set(), N = (
      /** @type {Batch} */
      w
    ), se = Yn(), D = 0; D < b; D += 1) {
      T && L.nodeType === zt && /** @type {Comment} */
      L.data === Cr && (l = /** @type {Comment} */
      L, E = !0, Pe(!1));
      var F = _[D], ke = n(F, D), le = u ? null : a.get(ke);
      le ? (le.v && pt(le.v, F), le.i && pt(le.i, D), se && N.unskip_effect(le.e)) : (le = Ji(
        a,
        u ? l : fn ??= Fe(),
        F,
        ke,
        D,
        s,
        t,
        r
      ), u || (le.e.f |= Le), a.set(ke, le)), x.add(ke);
    }
    if (b === 0 && i && !o && (u ? o = ve(() => i(l)) : (o = ve(() => i(fn ??= Fe())), o.f |= Le)), b > x.size && Bs(), T && b > 0 && _e(Zt()), !u)
      if (d.set(N, x), se) {
        for (const [bt, $e] of a)
          x.has(bt) || N.skip_effect($e.e);
        N.oncommit(v), N.ondiscard(h);
      } else
        v(N);
    E && Pe(!0), p(f);
  }), g = { effect: c, items: a, pending: d, outrogroups: null, fallback: o };
  u = !1, T && (l = L);
}
function xt(e) {
  for (; e !== null && (e.f & xe) === 0; )
    e = e.next;
  return e;
}
function Bi(e, t, r, n, s) {
  var i = t.length, l = e.items, a = xt(e.effect.first), o, f = null, d = [], u = [], v, h, c, g;
  for (g = 0; g < i; g += 1) {
    if (v = t[g], h = s(v, g), c = /** @type {EachItem} */
    l.get(h).e, e.outrogroups !== null)
      for (const F of e.outrogroups)
        F.pending.delete(c), F.done.delete(c);
    if ((c.f & te) !== 0 && rr(c), (c.f & Le) !== 0)
      if (c.f ^= Le, c === a)
        St(c, null, r);
      else {
        var _ = f ? f.next : a;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Ue(e, f, c), Ue(e, c, _), St(c, _, r), f = c, d = [], u = [], a = xt(f.next);
        continue;
      }
    if (c !== a) {
      if (o !== void 0 && o.has(c)) {
        if (d.length < u.length) {
          var b = u[0], E;
          f = b.prev;
          var C = d[0], x = d[d.length - 1];
          for (E = 0; E < d.length; E += 1)
            St(d[E], b, r);
          for (E = 0; E < u.length; E += 1)
            o.delete(u[E]);
          Ue(e, C.prev, x.next), Ue(e, f, C), Ue(e, x, b), a = b, f = x, g -= 1, d = [], u = [];
        } else
          o.delete(c), St(c, a, r), Ue(e, c.prev, c.next), Ue(e, c, f === null ? e.effect.first : f.next), Ue(e, f, c), f = c;
        continue;
      }
      for (d = [], u = []; a !== null && a !== c; )
        (o ??= /* @__PURE__ */ new Set()).add(a), u.push(a), a = xt(a.next);
      if (a === null)
        continue;
    }
    (c.f & Le) === 0 && d.push(c), f = c, a = xt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const F of e.outrogroups)
      F.pending.size === 0 && (Tr(e, nr(F.done)), e.outrogroups?.delete(F));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || o !== void 0) {
    var N = [];
    if (o !== void 0)
      for (c of o)
        (c.f & te) === 0 && N.push(c);
    for (; a !== null; )
      (a.f & te) === 0 && a !== e.fallback && N.push(a), a = xt(a.next);
    var se = N.length;
    if (se > 0) {
      var D = null;
      ji(e, N, D);
    }
  }
}
function Ji(e, t, r, n, s, i, l, a) {
  var o = (l & bs) !== 0 ? (l & ws) === 0 ? /* @__PURE__ */ Hn(r, !1, !1) : it(r) : null, f = (l & ys) !== 0 ? it(s) : null;
  return {
    v: o,
    i: f,
    e: ve(() => (i(t, o ?? r, f ?? s, a), () => {
      e.delete(n);
    }))
  };
}
function St(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & Le) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ je(n)
      );
      if (i.before(n), n === s)
        return;
      n = l;
    }
}
function Ue(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ui(e, t) {
  Kn(() => {
    e = k?.parent?.nodes?.start ?? e;
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const s = Hr("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
const un = [...` 	
\r\f \v\uFEFF`];
function Vi(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var s of Object.keys(r))
      if (r[s])
        n = n ? n + " " + s : s;
      else if (n.length)
        for (var i = s.length, l = 0; (l = n.indexOf(s, l)) >= 0; ) {
          var a = l + i;
          (l === 0 || un.includes(n[l - 1])) && (a === n.length || un.includes(n[a])) ? n = (l === 0 ? "" : n.substring(0, l)) + n.substring(a + 1) : l = a;
        }
  }
  return n === "" ? null : n;
}
function _r(e, t, r, n, s, i) {
  var l = (
    /** @type {any} */
    e[wr]
  );
  if (T || l !== r || l === void 0) {
    var a = Vi(r, n, i);
    (!T || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : e.className = a), e[wr] = r;
  } else if (i && s !== i)
    for (var o in i) {
      var f = !!i[o];
      (s == null || f !== !!s[o]) && e.classList.toggle(o, f);
    }
  return i;
}
const Yi = /* @__PURE__ */ Symbol("is custom element"), qi = /* @__PURE__ */ Symbol("is html"), Gi = $n ? "link" : "LINK", Ki = $n ? "progress" : "PROGRESS";
function Wi(e, t) {
  var r = fs(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Ki) || (e.value = t ?? "");
}
function kt(e, t, r, n) {
  var s = fs(e);
  T && (s[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Gi) || s[t] !== (s[t] = r) && (t === "loading" && (e[zs] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Xi(e).has(t) ? e[t] = r : e.setAttribute(t, r));
}
function fs(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[kn] ??= {
      [Yi]: e.nodeName.includes("-"),
      [qi]: e.namespaceURI === As
    }
  );
}
var cn = /* @__PURE__ */ new Map();
function Xi(e) {
  var t = e.getAttribute("is") || e.nodeName, r = cn.get(t);
  if (r) return r;
  cn.set(t, r = /* @__PURE__ */ new Set());
  for (var n, s = e, i = Element.prototype; i !== s; ) {
    n = Ts(s);
    for (var l in n)
      n[l].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      l !== "innerHTML" && l !== "textContent" && l !== "innerText" && r.add(l);
    s = mn(s);
  }
  return r;
}
function Zi(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  ni(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = gr(e) ? mr(i) : i, r(i), w !== null && n.add(w), await Ei(), i !== (i = t())) {
      var l = e.selectionStart, a = e.selectionEnd, o = e.value.length;
      if (e.value = i ?? "", a !== null) {
        var f = e.value.length;
        l === a && a === o && f > o ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = l, e.selectionEnd = Math.min(a, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (T && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  It(t) == null && e.value) && (r(gr(e) ? mr(e.value) : e.value), w !== null && n.add(w)), lr(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        w
      );
      if (n.has(i))
        return;
    }
    gr(e) && s === mr(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function gr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function mr(e) {
  return e === "" ? null : +e;
}
function br(e, t) {
  return e === t || e?.[At] === t;
}
function Qi(e = Pr(), t, r, n) {
  var s = (
    /** @type {ComponentContext} */
    re.r
  ), i = (
    /** @type {Effect} */
    k
  );
  return Kn(() => {
    var l, a;
    return lr(() => {
      l = a, a = [], It(() => {
        br(r(...a), e) || (t(e, ...a), l && br(r(...l), e) && t(null, ...l));
      });
    }), () => {
      let o = i;
      for (; o !== s && o.parent !== null && o.parent.f & Nt; )
        o = o.parent;
      const f = () => {
        a && br(r(...a), e) && t(null, ...a);
      }, d = o.teardown;
      o.teardown = () => {
        f(), d?.();
      };
    };
  }), e;
}
let Ut = !1;
function ea(e) {
  var t = Ut;
  try {
    return Ut = !1, [e(), Ut];
  } finally {
    Ut = t;
  }
}
function Vt(e, t, r, n) {
  var s = !0, i = (r & $s) !== 0, l = (r & Es) !== 0, a = (
    /** @type {V} */
    n
  ), o = !0, f = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), d = () => l && s ? (f ??= /* @__PURE__ */ er(
    /** @type {() => V} */
    n
  ), p(f)) : (o && (o = !1, a = l ? It(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), a);
  let u;
  if (i) {
    var v = At in e || xn in e;
    u = rt(e, t)?.set ?? (v && t in e ? (x) => e[t] = x : void 0);
  }
  var h, c = !1;
  i ? [h, c] = ea(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && n !== void 0 && (h = d(), u && (Gs(), u(h)));
  var g;
  if (g = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x === void 0 ? d() : (o = !0, x);
  }, (r & ks) === 0)
    return g;
  if (u) {
    var _ = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(x, N) {
        return arguments.length > 0 ? ((!N || _ || c) && u(N ? g() : x), x) : g();
      })
    );
  }
  var b = !1, E = ((r & xs) !== 0 ? er : Ln)(() => (b = !1, g()));
  i && p(E);
  var C = (
    /** @type {Effect} */
    k
  );
  return (
    /** @type {() => V} */
    (function(x, N) {
      if (arguments.length > 0) {
        const se = N ? p(E) : i ? Se(x) : x;
        return O(E, se), b = !0, a !== void 0 && (a = se), x;
      }
      return Ie && b || (C.f & G) !== 0 ? E.v : p(E);
    })
  );
}
function ta(e) {
  return new ra(e);
}
class ra {
  /** @type {any} */
  #e;
  /** @type {Record<string, any>} */
  #t;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var r = /* @__PURE__ */ new Map(), n = (i, l) => {
      var a = /* @__PURE__ */ Hn(l, !1, !1);
      return r.set(i, a), a;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, l) {
          return p(r.get(l) ?? n(l, Reflect.get(i, l)));
        },
        has(i, l) {
          return l === xn ? !0 : (p(r.get(l) ?? n(l, Reflect.get(i, l))), Reflect.has(i, l));
        },
        set(i, l, a) {
          return O(r.get(l) ?? n(l, a), a), Reflect.set(i, l, a);
        }
      }
    );
    this.#t = (t.hydrate ? zi : ls)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    }), (!t?.props?.$$host || t.sync === !1) && ft(), this.#e = s.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || Rt(this, i, {
        get() {
          return this.#t[i];
        },
        /** @param {any} value */
        set(l) {
          this.#t[i] = l;
        },
        enumerable: !0
      });
    this.#t.$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(s, i);
    }, this.#t.$destroy = () => {
      Di(this.#t);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#t.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    this.#e[t] = this.#e[t] || [];
    const n = (...s) => r.call(this, ...s);
    return this.#e[t].push(n), () => {
      this.#e[t] = this.#e[t].filter(
        /** @param {any} fn */
        (s) => s !== n
      );
    };
  }
  $destroy() {
    this.#t.$destroy();
  }
}
let us;
typeof HTMLElement == "function" && (us = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
  $$shadowRoot = null;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(e, t, r) {
    super(), this.$$ctor = e, this.$$s = t, r && (this.$$shadowRoot = this.attachShadow(r));
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const n = this.$$c.$on(e, t);
      this.$$l_u.set(t, n);
    }
    super.addEventListener(e, t, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, r) {
    if (super.removeEventListener(e, t, r), this.$$c) {
      const n = this.$$l_u.get(t);
      n && (n(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return (i) => {
          const l = Hr("slot");
          s !== "default" && (l.name = s), Xe(i, l);
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = na(this);
      for (const s of this.$$s)
        s in n && (s === "default" && !this.$$d.children ? (this.$$d.children = t(s), r.default = !0) : r[s] = t(s));
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = Gt(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = ta({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = gi(() => {
        lr(() => {
          this.$$r = !0;
          for (const s of Kt(this.$$c)) {
            if (!this.$$p_d[s]?.reflect) continue;
            this.$$d[s] = this.$$c[s];
            const i = Gt(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, i);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const i of this.$$l[s]) {
          const l = this.$$c.$on(s, i);
          this.$$l_u.set(i, l);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, t, r) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Gt(e, r, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return Kt(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Gt(e, t, r, n) {
  const s = r[e]?.type;
  if (t = s === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function na(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function sa(e, t, r, n, s, i) {
  let l = class extends us {
    constructor() {
      super(e, r, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Kt(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Kt(t).forEach((a) => {
    Rt(l.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(o) {
        o = Gt(a, o, t), this.$$d[a] = o;
        var f = this.$$c;
        if (f) {
          var d = rt(f, a)?.get;
          d ? f[a] = o : f.$set({ [a]: o });
        }
      }
    });
  }), n.forEach((a) => {
    Rt(l.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
function dn(e) {
  const t = e >> 1, r = new Float64Array(e);
  for (let f = 0; f < e; f++) r[f] = 0.5 - 0.5 * Math.cos(2 * Math.PI * f / (e - 1));
  const n = new Uint32Array(e), s = Math.round(Math.log2(e));
  for (let f = 0; f < e; f++) {
    let d = f, u = 0;
    for (let v = 0; v < s; v++)
      u = u << 1 | d & 1, d >>= 1;
    n[f] = u;
  }
  const i = new Float64Array(t), l = new Float64Array(t);
  for (let f = 0; f < t; f++) {
    const d = -2 * Math.PI * f / e;
    i[f] = Math.cos(d), l[f] = Math.sin(d);
  }
  const a = new Float64Array(e), o = new Float64Array(e);
  return {
    N: e,
    half: t,
    transform(f, d, u, v, h) {
      const c = d - t;
      let g = 0;
      for (let _ = 0; _ < e; _++) {
        const b = Math.max(0, Math.min(u - 1, c + _));
        g += f[b];
      }
      g /= e;
      for (let _ = 0; _ < e; _++) {
        const b = Math.max(0, Math.min(u - 1, c + _));
        a[n[_]] = (f[b] - g) * r[_], o[n[_]] = 0;
      }
      for (let _ = 2; _ <= e; _ <<= 1) {
        const b = _ >> 1, E = e / _;
        for (let C = 0; C < e; C += _)
          for (let x = 0, N = 0; x < b; x++, N += E) {
            const se = a[C + x + b] * i[N] - o[C + x + b] * l[N], D = a[C + x + b] * l[N] + o[C + x + b] * i[N];
            a[C + x + b] = a[C + x] - se, o[C + x + b] = o[C + x] - D, a[C + x] += se, o[C + x] += D;
          }
      }
      for (let _ = 1; _ < t; _++)
        v[_] += (a[_] * a[_] + o[_] * o[_]) * h;
    }
  };
}
function ia(e, t) {
  const s = e[0]?.length ?? 0, i = e.length;
  if (!s || !i)
    return { version: 1, interval: 0.05, bands: 36, frames: [] };
  const l = new Array(i), a = Math.max(0.92, 1 - 2 * Math.PI * 18 / t);
  let o = 0, f = 0;
  for (let K = 0; K < i; K++) {
    const B = e[K], J = new Float32Array(s);
    let H = 0;
    const S = Math.min(256, Math.floor(s * 0.05));
    for (let P = S; P < s; P++) H += B[P];
    H = s > S ? H / (s - S) : 0;
    let W = 0, ce = 0, X = 0;
    for (let P = 0; P < s; P++) {
      const oe = P < S && Math.abs(B[P]) < Math.abs(H) * 0.25 ? 0 : B[P] - H, Y = oe - W + a * ce, de = Y - ce + a * X;
      W = oe, ce = Y, X = de, J[P] = de;
      const fe = Math.abs(de);
      fe > f && (f = fe), o += fe * fe;
    }
    l[K] = J;
  }
  const d = Math.sqrt(o / Math.max(1, s * i)), u = Math.max(1, Math.round(t * (0.05 * 0.5)));
  let v = 512;
  for (; v < u * 2 || v < Math.round(t * 0.042); ) v <<= 1;
  v > 2048 && (v = 2048);
  const h = v << 1, c = dn(v), g = dn(h), _ = new Float64Array(c.half), b = new Float64Array(g.half), E = 32, C = Math.max(E * 4, Math.min(14500, t * 0.46)), x = Math.pow(C / E, 1 / 36), N = Array.from({ length: 36 }, (K, B) => {
    const J = E * Math.pow(x, B), H = E * Math.pow(x, B + 1), S = Math.sqrt(J * H), W = S < 300, ce = W ? h : v, X = ce >> 1, P = t / ce, oe = Math.max((H - J) * 0.58, P * 0.78), Y = Math.max(1, Math.floor((S - oe * 1.3) / P)), de = Math.min(X - 1, Math.ceil((S + oe * 1.3) / P)), fe = [];
    let He = 0;
    for (let y = Y; y <= de; y++) {
      const M = Math.abs(y * P - S) / oe, A = Math.exp(-1.65 * M * M);
      A > 0.05 && (fe.push([y, A]), He += A);
    }
    if (!fe.length) {
      const y = Math.max(1, Math.min(X - 1, Math.round(S / P)));
      fe.push([y, 1]), He = 1;
    }
    const yt = 1 / Math.pow(Math.max(1, He), 0.22), m = Math.pow(Math.max(S, 180) / 180, 0.14) * yt;
    return {
      useLong: W,
      tilt: m,
      weights: fe
    };
  }), se = Math.max(1, Math.ceil(s / (t * 0.05))), D = [], F = [], ke = 1 / (i * v * v), le = 1 / (i * h * h);
  for (let K = 0; K < se; K++) {
    const B = new Array(36).fill(0);
    for (const J of [0.25, 0.75]) {
      const H = Math.min(s - 1, Math.round((K + J) * 0.05 * t));
      _.fill(0), b.fill(0);
      for (let S = 0; S < i; S++)
        c.transform(l[S], H, s, _, ke), g.transform(l[S], H, s, b, le);
      for (let S = 0; S < 36; S++) {
        const W = N[S], ce = W.useLong ? b : _;
        let X = 0;
        for (const [oe, Y] of W.weights) X += ce[oe] * Y;
        const P = Math.sqrt(X) * W.tilt;
        P > B[S] && (B[S] = P);
      }
    }
    for (let J = 0; J < 36; J++)
      B[J] > 1e-6 && F.push(B[J]);
    D.push(B);
  }
  if (f < 1e-4 || d < 2e-5 || !F.length)
    return { version: 1, interval: 0.05, bands: 36, frames: D.map(() => new Array(36).fill(0)) };
  F.sort((K, B) => K - B);
  const bt = Math.max(
    F[Math.floor(F.length * 0.99)],
    F[F.length - 1] * 0.5,
    1e-5
  ), $e = 44, qe = 28;
  return { version: 1, interval: 0.05, bands: 36, frames: D.map((K) => {
    const B = K.map((Y) => Y <= 1e-6 ? -120 : 20 * Math.log10(Y / bt)), J = [...B].sort((Y, de) => Y - de), H = J[18], S = J[35];
    if (S <= -$e) return new Array(36).fill(0);
    const W = Math.min(1, Math.max(0, (S + $e) / $e)), ce = 255 * Math.pow(W, 0.92), X = S - H, P = H > S - 24 && X > 3.5 ? Math.min(12, (24 - X) * 0.55 * Math.min(1, (X - 3.5) / 5.5)) : 0, oe = Math.min(0, S);
    return B.map((Y) => {
      if (Y <= -$e) return 0;
      const de = Math.max(0, Y - H), fe = P * Math.max(0, 1 - de / 7.5), He = Y - fe - oe;
      if (He <= -qe) return 0;
      const yt = Math.min(1, (He + qe) / qe);
      return Math.round(ce * Math.pow(yt, 1.35));
    });
  }) };
}
function hn(e) {
  const t = e.map((r) => typeof r?.duration == "number" && Number.isFinite(r.duration) ? { ...r, duration: Math.round(r.duration * 100) / 100 } : r);
  return JSON.stringify(t);
}
function cs(e) {
  const t = e.replace(/[?#].*$/, ""), r = t.split("/"), n = r[r.length - 1] || t;
  try {
    return decodeURIComponent(n).toLowerCase();
  } catch {
    return n.toLowerCase();
  }
}
async function aa(e, t) {
  const r = e.trim(), n = cs(r), s = t?.get(n) || t?.get(r.toLowerCase());
  if (s)
    try {
      return { bytes: await s.arrayBuffer(), state: "ok", message: "Loaded from attached file" };
    } catch (a) {
      return { state: "error", message: `Cannot read local file: ${a instanceof Error ? a.message : a}` };
    }
  const i = typeof window < "u" && window.location ? new URL(r, window.location.href).href : r;
  let l = 0;
  try {
    const a = await fetch(i, { credentials: "include" });
    if (a.ok)
      return { bytes: await a.arrayBuffer(), state: "ok", message: "Fetched" };
    if (l = a.status, a.status === 404 || a.status >= 500)
      return { state: "error", message: `HTTP ${a.status}` };
  } catch {
  }
  try {
    const a = await fetch(i, { credentials: "omit" });
    if (a.ok)
      return { bytes: await a.arrayBuffer(), state: "ok", message: "Fetched" };
    if (l = a.status, a.status === 404 || a.status >= 500)
      return { state: "error", message: `HTTP ${a.status}` };
  } catch {
  }
  return l > 0 ? { state: "error", message: `HTTP ${l}` } : {
    state: "blocked",
    message: "Cross-origin read blocked by CORS. Audio plays in browser; attach file to analyze."
  };
}
async function la(e) {
  const t = globalThis.OfflineAudioContext || globalThis.webkitOfflineAudioContext;
  if (!t)
    throw new Error("Web Audio OfflineAudioContext is not available in this environment.");
  const n = await new t(1, 1, 44100).decodeAudioData(e.slice(0)), s = [];
  for (let i = 0; i < n.numberOfChannels; i++)
    s.push(n.getChannelData(i));
  return { channelData: s, sampleRate: n.sampleRate };
}
async function vn(e, t) {
  const r = { ...e };
  if (!r || typeof r.title != "string" || typeof r.url != "string")
    return { track: r, state: "error", message: "Missing title or url" };
  const n = await aa(r.url, t);
  if (n.state !== "ok" || !n.bytes)
    return { track: r, state: n.state, message: n.message };
  try {
    const s = await la(n.bytes);
    return s.channelData[0]?.length ? (r.duration = Math.round(s.channelData[0].length / s.sampleRate * 100) / 100, r.visualization = ia(s.channelData, s.sampleRate), { track: r, state: "ok", message: `Analyzed (${r.duration}s)` }) : { track: r, state: "error", message: "No audio samples decoded" };
  } catch (s) {
    return {
      track: r,
      state: "error",
      message: `Decode failed: ${s instanceof Error ? s.message : s}`
    };
  }
}
var oa = /* @__PURE__ */ mt("<span> </span>"), fa = /* @__PURE__ */ mt('<label class="row-attach-btn svelte-1lrxtrk" title="Attach file to analyze">Attach file <input type="file" accept="audio/*,.wav,.mp3,.ogg,.flac,.m4a" class="svelte-1lrxtrk"/></label>'), ua = /* @__PURE__ */ mt('<div class="track-row svelte-1lrxtrk"><div class="track-meta svelte-1lrxtrk"><span class="track-title svelte-1lrxtrk"> </span> <span class="track-url svelte-1lrxtrk"> </span> <!></div> <div class="track-controls svelte-1lrxtrk"><audio controls="" preload="none" class="svelte-1lrxtrk"></audio> <!> <span> </span></div></div>'), ca = /* @__PURE__ */ mt('<div class="track-list svelte-1lrxtrk" aria-label="Track analysis list"><div class="list-heading svelte-1lrxtrk"><span> </span> <span>STATUS / PREVIEW</span></div> <!></div>'), da = /* @__PURE__ */ mt('<label class="box-label svelte-1lrxtrk" style="margin-top: 14px;">Enriched catalog JSON <textarea aria-label="Enriched catalog JSON" rows="3" readonly="" class="svelte-1lrxtrk"></textarea></label>'), ha = /* @__PURE__ */ mt('<div><div class="heading svelte-1lrxtrk"><div><div class="eyebrow svelte-1lrxtrk">ZERO-FUSS PREPROCESSOR</div> <h2 class="svelte-1lrxtrk">Browser catalog analyzer</h2></div> <span class="badge svelte-1lrxtrk"> </span></div> <p class="help svelte-1lrxtrk">Analyzes audio directly in your browser using your active session (cookies, mTLS, local files) and outputs compact 36-band visualization JSON.</p> <div class="file-row svelte-1lrxtrk"><label class="file-btn svelte-1lrxtrk">Load tracks.json <input type="file" accept=".json,application/json" class="svelte-1lrxtrk"/></label> <label class="file-btn svelte-1lrxtrk">Attach local audio (optional) <input type="file" multiple="" accept="audio/*,.wav,.mp3,.ogg,.flac,.m4a" class="svelte-1lrxtrk"/></label></div> <label class="box-label svelte-1lrxtrk">Input catalog JSON <textarea aria-label="Input catalog JSON" rows="3" class="svelte-1lrxtrk"></textarea></label> <div class="actions svelte-1lrxtrk"><button class="primary svelte-1lrxtrk" aria-label="Analyze catalog"> </button> <button class="secondary svelte-1lrxtrk">Download tracks-enriched.json</button> <button class="secondary svelte-1lrxtrk">Copy JSON</button></div> <!> <!> <div class="status svelte-1lrxtrk" role="status" aria-live="polite"> </div></div>');
const va = {
  hash: "svelte-1lrxtrk",
  code: ":host {display:block;width:640px;max-width:100%;font-family:Arial, Helvetica, sans-serif;}.preprocessor.svelte-1lrxtrk {--ink: #f6f8fa;--muted: #99a7b3;--accent: #00c5df;--line: #3b454e;--field: #1d252a;--hover: #2e3b42;box-sizing:border-box;color:var(--ink);background:radial-gradient(ellipse at 50% 42%, #273238, #20282c 65%, #1e2529);border:1px solid #ffffff15;border-radius:12px;padding:20px 24px;box-shadow:0 12px 24px #0003;}.light.svelte-1lrxtrk {--ink: #27323b;--muted: #667684;--accent: #008fa5;--line: #d4dbe2;--field: #f2f5f7;--hover: #e9f4f6;background:linear-gradient(130deg, #fff, #fafcfd);border-color:#e3e7eb;}.heading.svelte-1lrxtrk {display:flex;align-items:center;justify-content:space-between;gap:12px;}.eyebrow.svelte-1lrxtrk {font-size:10px;letter-spacing:1px;color:var(--muted);}h2.svelte-1lrxtrk {font-size:18px;margin:5px 0 0;}.badge.svelte-1lrxtrk {font-size:11px;color:var(--accent);border:1px solid var(--line);border-radius:12px;padding:3px 9px;}.help.svelte-1lrxtrk {font-size:12px;line-height:1.5;color:var(--muted);margin:10px 0 14px;}.file-row.svelte-1lrxtrk {display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;}.file-btn.svelte-1lrxtrk {font-size:11px;color:var(--ink);background:var(--field);border:1px solid var(--line);border-radius:6px;padding:6px 10px;cursor:pointer;}.file-btn.svelte-1lrxtrk:hover {background:var(--hover);border-color:var(--accent);}.file-btn.svelte-1lrxtrk input:where(.svelte-1lrxtrk) {display:none;}.box-label.svelte-1lrxtrk {display:flex;flex-direction:column;gap:6px;font-size:11px;color:var(--muted);margin-bottom:12px;}textarea.svelte-1lrxtrk {box-sizing:border-box;width:100%;background:var(--field);color:var(--ink);border:1px solid var(--line);border-radius:7px;padding:8px 10px;font:12px/1.4 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;resize:vertical;}.actions.svelte-1lrxtrk {display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;}button.svelte-1lrxtrk {font:inherit;font-size:12px;border-radius:7px;padding:8px 12px;cursor:pointer;border:1px solid var(--line);}button.svelte-1lrxtrk:disabled {opacity:0.35;cursor:default;}.primary.svelte-1lrxtrk {background:linear-gradient(130deg, #00c9e4, #00a6c1);color:#fff;border-color:#66e5f3;font-weight:600;}.secondary.svelte-1lrxtrk {background:var(--field);color:var(--ink);}.secondary.svelte-1lrxtrk:hover:not(:disabled) {background:var(--hover);border-color:var(--accent);}.track-list.svelte-1lrxtrk {margin:14px 0;border:1px solid var(--line);border-radius:8px;background:var(--field);max-height:280px;overflow-y:auto;}.list-heading.svelte-1lrxtrk {display:flex;justify-content:space-between;padding:6px 12px;font-size:10px;letter-spacing:0.5px;color:var(--muted);border-bottom:1px solid var(--line);}.track-row.svelte-1lrxtrk {display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 12px;border-bottom:1px solid var(--line);}.track-row.svelte-1lrxtrk:last-child {border-bottom:none;}.track-row[data-state='blocked'].svelte-1lrxtrk {background:#ffaa000c;}.track-row[data-state='error'].svelte-1lrxtrk {background:#ff44440c;}.track-meta.svelte-1lrxtrk {display:flex;flex-direction:column;gap:2px;min-width:0;flex:1;}.track-title.svelte-1lrxtrk {font-size:12px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.track-url.svelte-1lrxtrk {font-size:10px;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.track-msg.svelte-1lrxtrk {font-size:10px;}.msg-ok.svelte-1lrxtrk {color:#44dd88;}.msg-blocked.svelte-1lrxtrk {color:#ffbb33;}.msg-err.svelte-1lrxtrk {color:#ff6666;}.track-controls.svelte-1lrxtrk {display:flex;align-items:center;gap:8px;flex-shrink:0;}audio.svelte-1lrxtrk {height:28px;max-width:170px;}.row-attach-btn.svelte-1lrxtrk {font-size:10px;padding:4px 8px;background:var(--field);border:1px solid var(--line);border-radius:4px;cursor:pointer;color:var(--ink);}.row-attach-btn.svelte-1lrxtrk:hover {border-color:var(--accent);}.row-attach-btn.svelte-1lrxtrk input:where(.svelte-1lrxtrk) {display:none;}.status-pill.svelte-1lrxtrk {font-size:10px;padding:2px 7px;border-radius:10px;border:1px solid var(--line);white-space:nowrap;}.pill-ok.svelte-1lrxtrk {color:#44dd88;border-color:#44dd8844;}.pill-blocked.svelte-1lrxtrk {color:#ffbb33;border-color:#ffbb3344;}.pill-error.svelte-1lrxtrk {color:#ff6666;border-color:#ff666644;}.pill-pending.svelte-1lrxtrk {color:var(--muted);}.status.svelte-1lrxtrk {min-height:14px;font-size:11px;color:var(--muted);}"
};
function pa(e, t) {
  Mn(t, !0), Ui(e, va);
  let r = Vt(t, "catalog", 31, () => Se([])), n = Vt(t, "enrichedCatalog", 31, () => Se([])), s = Vt(t, "theme", 15, "dark"), i = Vt(t, "autoAnalyze", 15, !1), l, a = /* @__PURE__ */ ie("[]"), o = /* @__PURE__ */ ie(""), f = /* @__PURE__ */ ie("Paste or load a catalog JSON, then choose Analyze catalog."), d = /* @__PURE__ */ ie(!1), u = /* @__PURE__ */ ie(Se(/* @__PURE__ */ new Map())), v = null, h = /* @__PURE__ */ ie(Se([]));
  function c(m, y) {
    l?.dispatchEvent(new CustomEvent(m, { detail: y, bubbles: !0, composed: !0 }));
  }
  function g(m) {
    O(
      h,
      m.map((y) => {
        const M = p(h).find((A) => A.track.url === y.url);
        return {
          track: y,
          state: M?.state || "pending",
          message: M?.message || ""
        };
      }),
      !0
    );
  }
  async function _(m) {
    let y;
    if (m)
      y = m;
    else
      try {
        const R = JSON.parse(p(a));
        if (!Array.isArray(R)) throw new Error("Expected a JSON array of tracks.");
        y = R;
      } catch (R) {
        return O(f, `Invalid JSON: ${R instanceof Error ? R.message : R}`), [];
      }
    g(y), O(d, !0);
    let M = 0;
    const A = [];
    try {
      for (let R = 0; R < y.length; R++) {
        const Ce = y[R];
        O(f, `Analyzing (${R + 1}/${y.length}): ${Ce?.title ?? "track"}…`);
        const Re = await vn(Ce, p(u));
        p(h)[R] = { track: Re.track, state: Re.state, message: Re.message }, Re.state !== "ok" && M++, A.push(Re.track);
      }
      return n(A), O(o, hn(A), !0), O(f, `Analyzed ${A.length - M} of ${A.length} tracks (${M} failed or blocked). Ready to download or copy.`), c("catalogenriched", { catalog: A, json: p(o), failures: M }), A;
    } finally {
      O(d, !1);
    }
  }
  async function b(m) {
    const M = m.currentTarget.files?.[0];
    if (M)
      try {
        const A = await M.text(), R = JSON.parse(A);
        if (!Array.isArray(R)) throw new Error("Expected a JSON array of tracks.");
        r(R), O(a, JSON.stringify(R, null, 2), !0), g(R), O(f, `Loaded ${R.length} tracks from ${M.name}.`);
      } catch (A) {
        O(f, `Could not read JSON file: ${A instanceof Error ? A.message : A}`);
      }
  }
  function E(m) {
    const y = m.currentTarget, M = Array.from(y.files || []);
    if (!M.length) return;
    const A = new Map(p(u));
    for (const R of M)
      A.set(R.name.toLowerCase(), R);
    O(u, A, !0), O(f, `Attached ${A.size} local audio file(s) for zero-network matching.`);
  }
  async function C(m, y) {
    const A = m.currentTarget.files?.[0];
    if (!A || !p(h)[y]) return;
    const R = new Map(p(u));
    R.set(A.name.toLowerCase(), A), R.set(cs(p(h)[y].track.url), A), O(u, R, !0), p(h)[y].message = `Attached ${A.name}; analyzing…`;
    const Ce = await vn(p(h)[y].track, p(u));
    p(h)[y] = { track: Ce.track, state: Ce.state, message: Ce.message }, n().length === p(h).length && (n(n()[y] = Ce.track, !0), O(o, hn(n()), !0), c("catalogenriched", {
      catalog: n(),
      json: p(o),
      failures: p(h).filter((Re) => Re.state !== "ok").length
    }));
  }
  function x() {
    if (!p(o)) return;
    const m = new Blob([p(o)], { type: "application/json" }), y = URL.createObjectURL(m), M = document.createElement("a");
    M.href = y, M.download = "tracks-enriched.json", M.click(), setTimeout(() => URL.revokeObjectURL(y), 1e3), O(f, "Downloaded tracks-enriched.json.");
  }
  async function N() {
    if (p(o))
      try {
        await navigator.clipboard.writeText(p(o)), O(f, "Copied enriched JSON to clipboard.");
      } catch {
        O(f, "Select the Enriched catalog JSON box to copy.");
      }
  }
  _i(() => {
    const m = r();
    It(() => {
      m !== v && (v = m, Array.isArray(m) && (O(a, JSON.stringify(m, null, 2), !0), g(m), i() && m.length > 0 && _(m)));
    });
  });
  var se = {
    analyzeCatalog: _,
    get catalog() {
      return r();
    },
    set catalog(m = []) {
      r(m), ft();
    },
    get enrichedCatalog() {
      return n();
    },
    set enrichedCatalog(m = []) {
      n(m), ft();
    },
    get theme() {
      return s();
    },
    set theme(m = "dark") {
      s(m), ft();
    },
    get autoAnalyze() {
      return i();
    },
    set autoAnalyze(m = !1) {
      i(m), ft();
    }
  }, D = ha();
  let F;
  var ke = ee(D), le = I(ee(ke), 2), bt = Be(le, !0);
  Q(ke);
  var $e = I(ke, 4), qe = ee($e), Yr = I(ee(qe));
  Q(qe);
  var K = I(qe, 2), B = I(ee(K));
  Q(K), Q($e);
  var J = I($e, 2), H = I(ee(J));
  Qr(H), kt(H, "placeholder", '[{"title":"Song","url":"./audio/song.mp3"}]'), Q(J);
  var S = I(J, 2), W = ee(S), ce = Be(W, !0), X = I(W, 2), P = I(X, 2);
  Q(S);
  var oe = I(S, 2);
  {
    var Y = (m) => {
      var y = ca(), M = ee(y), A = ee(M), R = Be(A);
      En(2), Q(M);
      var Ce = I(M, 2);
      Hi(Ce, 17, () => p(h), Ii, (Re, q, ds) => {
        var jt = ua(), or = ee(jt), fr = ee(or), hs = Be(fr, !0), ur = I(fr, 2), vs = Be(ur, !0), ps = I(ur, 2);
        {
          var _s = (Ge) => {
            var Ke = oa();
            let Ht;
            var cr = Be(Ke, !0);
            wt(() => {
              Ht = _r(Ke, 1, "track-msg svelte-1lrxtrk", null, Ht, {
                "msg-ok": p(q).state === "ok",
                "msg-blocked": p(q).state === "blocked",
                "msg-err": p(q).state === "error"
              }), Je(cr, p(q).message);
            }), Xe(Ge, Ke);
          };
          Jt(ps, (Ge) => {
            p(q).message && Ge(_s);
          });
        }
        Q(or);
        var qr = I(or, 2), Gr = ee(qr), Kr = I(Gr, 2);
        {
          var gs = (Ge) => {
            var Ke = fa(), Ht = I(ee(Ke));
            Q(Ke), We("change", Ht, (cr) => C(cr, ds)), Xe(Ge, Ke);
          };
          Jt(Kr, (Ge) => {
            (p(q).state === "blocked" || p(q).state === "error") && Ge(gs);
          });
        }
        var Wr = I(Kr, 2), ms = Be(Wr, !0);
        Q(qr), Q(jt), wt(() => {
          kt(jt, "data-state", p(q).state), kt(fr, "title", p(q).track.title), Je(hs, p(q).track.title), kt(ur, "title", p(q).track.url), Je(vs, p(q).track.url), kt(Gr, "src", p(q).track.url), _r(Wr, 1, `status-pill pill-${p(q).state}`, "svelte-1lrxtrk"), Je(ms, p(q).state === "ok" ? "✓ Analyzed" : p(q).state === "blocked" ? "Blocked (CORS)" : p(q).state === "error" ? "Error" : "Pending");
        }), Xe(Re, jt);
      }), Q(y), wt(() => Je(R, `TRACKS (${p(h).length ?? ""})`)), Xe(m, y);
    };
    Jt(oe, (m) => {
      p(h).length > 0 && m(Y);
    });
  }
  var de = I(oe, 2);
  {
    var fe = (m) => {
      var y = da(), M = I(ee(y));
      Qr(M), Q(y), wt(() => Wi(M, p(o))), Xe(m, y);
    };
    Jt(de, (m) => {
      p(o) && m(fe);
    });
  }
  var He = I(de, 2), yt = Be(He, !0);
  return Q(D), Qi(D, (m) => l = m, () => l), wt(() => {
    F = _r(D, 1, "preprocessor svelte-1lrxtrk", null, F, { light: s() === "light" }), Je(bt, p(u).size ? `${p(u).size} local files` : "Browser session"), W.disabled = p(d), Je(ce, p(d) ? "Analyzing…" : "Analyze catalog"), X.disabled = !p(o), P.disabled = !p(o), Je(yt, p(f));
  }), We("change", Yr, b), We("change", B, E), We("input", H, (m) => {
    try {
      const y = JSON.parse(m.currentTarget.value);
      Array.isArray(y) && g(y);
    } catch {
    }
  }), Zi(H, () => p(a), (m) => O(a, m)), We("click", W, () => _()), We("click", X, x), We("click", P, N), Xe(e, D), Tn(se);
}
Si(["change", "input", "click"]);
customElements.define("compact-audio-preprocessor", sa(
  pa,
  {
    catalog: { type: "Array" },
    enrichedCatalog: { type: "Array" },
    theme: { type: "String" },
    autoAnalyze: { type: "Boolean" }
  },
  [],
  ["analyzeCatalog"],
  { mode: "open" }
));
