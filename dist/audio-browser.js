typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const Ds = 1, Fs = 2, ui = 4, qs = 8, js = 16, Vs = 1, Bs = 4, Ws = 8, Hs = 16, Us = 1, Ys = 2, fi = "[", _n = "[!", Vn = "[?", gn = "]", ct = {}, X = /* @__PURE__ */ Symbol("uninitialized"), ci = "http://www.w3.org/1999/xhtml", Gs = "http://www.w3.org/2000/svg", Ks = "@attach", di = !1;
var Or = Array.isArray, Xs = Array.prototype.indexOf, ir = Array.prototype.includes, Mr = Array.from, Er = Object.keys, sr = Object.defineProperty, Ze = Object.getOwnPropertyDescriptor, Js = Object.getOwnPropertyDescriptors, Zs = Object.prototype, Qs = Array.prototype, vi = Object.getPrototypeOf, Bn = Object.isExtensible;
function Bt(e) {
  return typeof e == "function";
}
const hi = () => {
};
function el(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function pi() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function tl(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function Wn(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const fe = 2, Lt = 4, Pr = 8, bn = 1 << 24, Me = 16, ze = 32, et = 64, rn = 128, wn = 256, Ie = 512, ee = 1024, U = 2048, Ae = 4096, de = 8192, le = 16384, xt = 32768, lr = 1 << 25, dt = 65536, Sr = 1 << 17, rl = 1 << 18, Et = 1 << 19, nl = 1 << 20, We = 1 << 25, kr = 1 << 21, Ot = 1 << 22, ut = 1 << 23, ft = /* @__PURE__ */ Symbol("$state"), _i = /* @__PURE__ */ Symbol("component"), mn = /* @__PURE__ */ Symbol("legacy props"), il = /* @__PURE__ */ Symbol(""), gi = /* @__PURE__ */ Symbol("attributes"), nn = /* @__PURE__ */ Symbol("class"), sn = /* @__PURE__ */ Symbol("style"), ln = /* @__PURE__ */ Symbol("text"), Qt = /* @__PURE__ */ Symbol("form reset"), fr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), cr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), sl = 1, Lr = 3, dr = 8;
function ll() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Rr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function al() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function ol() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let x = !1;
function ye(e) {
  x = e;
}
let T;
function ae(e) {
  if (e === null)
    throw Rr(), ct;
  return T = e;
}
function Rt() {
  return ae(/* @__PURE__ */ Ge(T));
}
function M(e) {
  if (x) {
    if (/* @__PURE__ */ Ge(T) !== null)
      throw Rr(), ct;
    T = e;
  }
}
function ul(e = 1) {
  if (x) {
    for (var t = e, r = T; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Ge(r);
    T = r;
  }
}
function Ar(e = !0) {
  for (var t = 0, r = T; ; ) {
    if (r.nodeType === dr) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === gn) {
        if (t === 0) return r;
        t -= 1;
      } else (n === fi || n === _n || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ge(r)
    );
    e && r.remove(), r = i;
  }
}
function yn(e) {
  if (!e || e.nodeType !== dr)
    throw Rr(), ct;
  return (
    /** @type {Comment} */
    e.data
  );
}
function bi(e) {
  return e === this.v;
}
function fl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function wi(e) {
  return !fl(e, this.v);
}
function cl(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function dl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function vl(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function hl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function pl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function _l(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function gl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function bl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function wl(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ml() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function yl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function $l() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function xl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let El = !1;
function Sl(e) {
  let t = e.p;
  for (; t !== null && t.c === null; )
    t = t.p;
  return t?.c ?? null;
}
function kl(e, t) {
  return e === null && cl(), e.c ??= new Map(Sl(e) || void 0);
}
let ue = null;
function It(e) {
  ue = e;
}
function Al(e) {
  return (
    /** @type {T} */
    kl(ue).get(e)
  );
}
function $n(e, t = !1, r) {
  ue = {
    p: ue,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      N
    ),
    l: null
  };
}
function xn(e) {
  var t = (
    /** @type {ComponentContext} */
    ue
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Vi(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ue = t.p, En(e);
}
function En(e = {}) {
  return sr(e, _i, { value: !0 }), e;
}
function mi() {
  return !0;
}
let bt = [];
function yi() {
  var e = bt;
  bt = [], el(e);
}
function Pe(e) {
  if (bt.length === 0 && !er) {
    var t = bt;
    queueMicrotask(() => {
      t === bt && yi();
    });
  }
  bt.push(e);
}
function Tl() {
  for (; bt.length > 0; )
    yi();
}
const Nl = -7169;
function B(e, t) {
  e.f = e.f & Nl | t;
}
function Sn(e) {
  (e.f & Ie) !== 0 || e.deps === null ? B(e, ee) : B(e, Ae);
}
function $i(e, t, r) {
  (e.f & U) !== 0 ? t.add(e) : (e.f & Ae) !== 0 && r.add(e), B(e, ee);
}
function Cl(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Pe(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Hn = !1;
function xi() {
  Hn || (Hn = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t[Qt]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Ft(e) {
  var t = O, r = N;
  Te(null), Ye(null);
  try {
    return e();
  } finally {
    Te(t), Ye(r);
  }
}
function Ei(e, t, r, n = r) {
  e.addEventListener(t, () => Ft(r));
  const i = (
    /** @type {any} */
    e[Qt]
  );
  i ? e[Qt] = () => {
    i(), n(!0);
  } : e[Qt] = () => n(!0), xi();
}
function Si(e, t, r, n) {
  const i = ar;
  var s = e.filter((d) => !d.settled), l = t.map(i);
  if (r.length === 0 && s.length === 0) {
    n(l);
    return;
  }
  var a = (
    /** @type {Effect} */
    N
  ), o = Ol(), f = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((d) => d.promise)) : null;
  function u(d) {
    if ((a.f & le) === 0) {
      o();
      try {
        n([...l, ...d]);
      } catch (p) {
        Be(p, a);
      }
      Tr();
    }
  }
  var v = ki();
  if (r.length === 0) {
    f.then(() => u([])).finally(v);
    return;
  }
  function c() {
    Promise.all(r.map((d) => /* @__PURE__ */ Ml(d))).then(u).catch((d) => Be(d, a)).finally(v);
  }
  f ? f.then(() => {
    if ((a.f & le) !== 0) {
      v();
      return;
    }
    o(), c(), Tr();
  }) : c();
}
function Ol() {
  var e = (
    /** @type {Effect} */
    N
  ), t = O, r = ue, n = (
    /** @type {Batch} */
    k
  );
  return function(s = !0) {
    Ye(e), Te(t), It(r), s && (e.f & le) === 0 && (n?.activate(), n?.apply());
  };
}
function Tr(e = !0) {
  Ye(null), Te(null), It(null), e && k?.deactivate();
}
function ki() {
  var e = (
    /** @type {Effect} */
    N
  ), t = e.b, r = (
    /** @type {Batch} */
    k
  ), n = !!t?.is_rendered();
  return t?.update_pending_count(1, r), r.increment(n, e), () => {
    t?.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function ar(e) {
  var t = fe | U;
  return N !== null && (N.f |= Et), {
    ctx: ue,
    deps: null,
    effects: null,
    equals: bi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      X
    ),
    wv: 0,
    parent: N,
    ac: null
  };
}
const Yt = /* @__PURE__ */ Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function Ml(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    N
  );
  n === null && dl();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = $t(
    /** @type {V} */
    X
  ), l = !O, a = /* @__PURE__ */ new Set();
  return Bl(() => {
    var o = (
      /** @type {Effect} */
      N
    ), f = pi();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, (d) => {
        d !== fr && f.reject(d);
      }).finally(Tr);
    } catch (d) {
      f.reject(d), Tr();
    }
    var u = (
      /** @type {Batch} */
      k
    );
    if (l) {
      if ((o.f & xt) !== 0)
        var v = ki();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        n.b?.is_rendered()
      )
        u.async_deriveds.get(o)?.reject(Yt);
      else
        for (const d of a.values())
          d.reject(Yt);
      a.add(f), u.async_deriveds.set(o, f);
    }
    const c = (d, p = void 0) => {
      v?.(), a.delete(f), p !== Yt && (u.activate(), p ? (s.f |= ut, zt(s, p)) : ((s.f & ut) !== 0 && (s.f ^= ut), zt(s, d)), u.deactivate());
    };
    f.promise.then(c, (d) => c(null, d || "unknown"));
  }), zr(() => {
    for (const o of a)
      o.reject(Yt);
  }), new Promise((o) => {
    function f(u) {
      function v() {
        u === i ? o(s) : f(i);
      }
      u.then(v, v);
    }
    f(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Ve(e) {
  const t = /* @__PURE__ */ ar(e);
  return Gi(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ai(e) {
  const t = /* @__PURE__ */ ar(e);
  return t.equals = wi, t;
}
function Pl(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ie(
        /** @type {Effect} */
        t[r]
      );
  }
}
function kn(e) {
  var t, r = N, n = e.parent;
  if (!rt && n !== null && e.v !== X && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (le | de)) !== 0)
    return ll(), e.v;
  Ye(n);
  try {
    Pl(e), t = Zi(e);
  } finally {
    Ye(r);
  }
  return t;
}
function Ti(e) {
  var t = kn(e);
  if (!e.equals(t) && (e.wv = Xi(), (!k?.is_fork || e.deps === null) && (k !== null ? (k.capture(e, t, !0), Mt?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    B(e, ee);
    return;
  }
  rt || (Le !== null ? (Cn() || k?.is_fork) && Le.set(e, t) : Sn(e));
}
function Ll(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Ft(() => {
        t.ac.abort(fr), t.ac = null;
      }), t.fn !== null && (t.teardown = hi), or(t, 0), On(t));
}
function Ni(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && Dt(t);
}
let Ur = null, At = null, k = null, Mt = null, Le = null, an = null, er = !1, Yr = !1, tr = null, yr = null;
var Un = 0;
let Rl = 1;
class tt {
  id = Rl++;
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
  #i = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #l = 0;
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
  #a = null;
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
  #s = [];
  /**
   * Effects created while this batch was active.
   * @type {Effect[]}
   */
  #_ = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #u = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #f = /* @__PURE__ */ new Set();
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
    At === null ? Ur = At = this : (At.#r = this, this.#t = At), At = this;
  }
  #y() {
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
      for (var i of n.d)
        B(i, U), r(i);
      for (i of n.m)
        B(i, Ae), r(i);
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
  #$() {
    var t = [];
    for (const s of this.#s)
      if (!((s.f & le) !== 0 || (s.f & (U | Ae)) === 0)) {
        for (var r = s, n = !1; r.parent !== null; ) {
          r = r.parent;
          var i = r.f;
          if ((i & (et | ze)) !== 0) {
            if ((i & ee) === 0) {
              n = !0;
              break;
            }
            r.f ^= ee;
          }
        }
        n || t.push(r);
      }
    return this.#s = [], t;
  }
  #b() {
    this.#e = !0;
    for (const a of this.#u)
      this.#f.delete(a), B(a, U), this.schedule(a);
    for (const a of this.#f)
      B(a, Ae), this.schedule(a);
    this.apply();
    for (var t = tr = [], r = [], n = yr = []; this.#s.length > 0; ) {
      Un++ > 1e3 && (this.#p(), Il());
      for (const a of this.#$())
        try {
          this.#w(a, t, r);
        } catch (o) {
          throw Mi(a), this.#y() || this.discard(), o;
        }
    }
    if (k = null, n.length > 0) {
      var i = tt.ensure();
      for (const a of n)
        i.schedule(a);
    }
    if (tr = null, yr = null, this.#y()) {
      this.#h(r), this.#h(t);
      for (const [a, o] of this.#d)
        Oi(a, o);
      n.length > 0 && /** @type {unknown} */
      k.#b();
      return;
    }
    const s = this.#v();
    if (s) {
      this.#h(r), this.#h(t), s.#x(this);
      return;
    }
    this.#u.clear(), this.#f.clear();
    for (const a of this.#o) a(this);
    this.#o.clear(), Mt = this, Yn(r), Yn(t), Mt = null, this.#a?.resolve();
    var l = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      k
    );
    if (this.#l === 0 && (this.#s.length === 0 || l !== null) && this.#p(), this.#s.length > 0)
      if (l !== null) {
        for (const a of this.#s)
          l.#s.push(a);
        this.#s = [];
      } else
        l = this;
    l !== null && (He.clear(), l.#b());
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #w(t, r, n) {
    t.f ^= ee;
    for (var i = t.first; i !== null; ) {
      var s = i.f, l = (s & (ze | et)) !== 0, a = l && (s & ee) !== 0, o = a || (s & de) !== 0 || this.#d.has(i);
      if (!o && i.fn !== null) {
        l ? i.f ^= ee : (s & Lt) !== 0 ? r.push(i) : pr(i) && ((s & Me) !== 0 && this.#f.add(i), Dt(i));
        var f = i.first;
        if (f !== null) {
          i = f;
          continue;
        }
      }
      for (; i !== null; ) {
        var u = i.next;
        if (u !== null) {
          i = u;
          break;
        }
        i = i.parent;
      }
    }
  }
  #v() {
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
  #x(t) {
    for (const [n, i] of t.current)
      !this.previous.has(n) && t.previous.has(n) && this.previous.set(n, t.previous.get(n)), this.current.set(n, i);
    for (const [n, i] of t.async_deriveds) {
      const s = this.async_deriveds.get(n);
      s && i.promise.then(s.resolve).catch(s.reject);
    }
    t.async_deriveds.clear(), this.transfer_effects(t.#u, t.#f);
    const r = (n) => {
      var i = n.reactions;
      if (i !== null && !((n.f & fe) !== 0 && (n.f & (U | Ae)) === 0))
        for (const a of i) {
          var s = a.f;
          if ((s & fe) !== 0)
            r(
              /** @type {Derived} */
              a
            );
          else {
            var l = (
              /** @type {Effect} */
              a
            );
            s & (Ot | Me) && !this.async_deriveds.has(l) && (this.#f.delete(l), B(l, U), this.schedule(l));
          }
        }
    };
    for (const n of this.current.keys())
      r(n);
    this.oncommit(() => t.discard()), t.#p(), k = this, this.#b();
  }
  /**
   * @param {Effect[]} effects
   */
  #h(t) {
    for (var r = 0; r < t.length; r += 1)
      $i(t[r], this.#u, this.#f);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== X && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ut) === 0 && (this.current.set(t, [r, n]), Le?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    k = this;
  }
  deactivate() {
    k = null, Le = null;
  }
  flush() {
    try {
      Yr = !0, k = this, this.#b();
    } finally {
      Un = 0, an = null, tr = null, yr = null, Yr = !1, k = null, Le = null, He.clear();
    }
  }
  discard() {
    for (const t of this.#i) t(this);
    this.#i.clear();
    for (const t of this.async_deriveds.values())
      t.reject(Yt);
    this.#p(), this.#a?.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    this.#_.push(t);
  }
  #m() {
    for (let v = Ur; v !== null; v = v.#r) {
      var t = v.id < this.id, r = [];
      for (const [c, [d, p]] of this.current) {
        if (v.current.has(c)) {
          var n = (
            /** @type {[any, boolean]} */
            v.current.get(c)[0]
          );
          if (t && d !== n)
            v.current.set(c, [d, p]);
          else
            continue;
        }
        r.push(c);
      }
      if (t)
        for (const [c, d] of this.async_deriveds) {
          const p = v.async_deriveds.get(c);
          p && d.promise.then(p.resolve).catch(p.reject);
        }
      var i = [...v.current.keys()].filter(
        (c) => !/** @type {[any, boolean]} */
        v.current.get(c)[1]
      );
      if (!(!v.#e || i.length === 0)) {
        var s = i.filter((c) => !this.current.has(c));
        if (s.length === 0)
          t && v.discard();
        else if (r.length > 0) {
          if (t)
            for (const c of this.#g)
              v.unskip_effect(c, (d) => {
                (d.f & (Me | Ot)) !== 0 ? v.schedule(d) : v.#h([d]);
              });
          v.activate();
          var l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
          for (var o of r)
            Ci(o, s, l, a);
          a = /* @__PURE__ */ new Map();
          var f = [...v.current].filter(([c, d]) => {
            const p = this.current.get(c);
            return p ? p[0] !== d[0] || p[1] !== d[1] : !0;
          }).map(([c]) => c);
          if (f.length > 0)
            for (const c of this.#_)
              (c.f & (le | de | Sr)) === 0 && An(c, f, a) && ((c.f & (Ot | Me)) !== 0 ? (B(c, U), v.schedule(c)) : v.#u.add(c));
          if (v.#s.length > 0 && !v.#c) {
            v.apply();
            for (var u of v.#$())
              v.#w(u, [], []);
          }
          v.deactivate();
        }
      }
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (this.#l += 1, t) {
      let n = this.#n.get(r) ?? 0;
      this.#n.set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (this.#l -= 1, t) {
      let n = this.#n.get(r) ?? 0;
      n === 1 ? this.#n.delete(r) : this.#n.set(r, n - 1);
    }
    this.#c || (this.#c = !0, Pe(() => {
      this.#c = !1, this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      this.#u.add(n);
    for (const n of r)
      this.#f.add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    this.#o.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#i.add(t);
  }
  settled() {
    return (this.#a ??= pi()).promise;
  }
  static ensure() {
    if (k === null) {
      const t = k = new tt();
      !Yr && !er && Pe(() => {
        t.#e || t.flush();
      });
    }
    return k;
  }
  apply() {
    {
      Le = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (an = t, t.b?.is_pending && (t.f & (Lt | Pr | bn)) !== 0 && (t.f & xt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    this.#s.push(t);
  }
  #p() {
    if (this.linked) {
      var t = this.#t, r = this.#r;
      t === null ? Ur = r : t.#r = r, r === null ? At = t : r.#t = t, this.linked = !1;
    }
  }
}
function Q(e) {
  var t = er, r = Mt;
  Mt = null, er = !0;
  try {
    for (var n; ; ) {
      if (Tl(), k === null)
        return (
          /** @type {T} */
          n
        );
      k.flush();
    }
  } finally {
    er = t, Mt = r;
  }
}
function Il() {
  try {
    gl();
  } catch (e) {
    Be(e, an);
  }
}
let Xe = null;
function Yn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (le | de)) === 0 && pr(n) && (Xe = /* @__PURE__ */ new Set(), Dt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Hi(n), Xe?.size > 0)) {
        He.clear();
        for (const i of Xe) {
          if ((i.f & (le | de)) !== 0) continue;
          const s = [i];
          let l = i.parent;
          for (; l !== null; )
            Xe.has(l) && (Xe.delete(l), s.push(l)), l = l.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const o = s[a];
            (o.f & (le | de)) === 0 && Dt(o);
          }
        }
        Xe.clear();
      }
    }
    Xe = null;
  }
}
function Ci(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & fe) !== 0 ? Ci(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Ot | Me)) !== 0 && (s & U) === 0 && An(i, t, n) && (B(i, U), Tn(
        /** @type {Effect} */
        i
      ));
    }
}
function An(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (ir.call(t, i))
        return !0;
      if ((i.f & fe) !== 0 && An(
        /** @type {Derived} */
        i,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function Tn(e) {
  k.schedule(e);
}
function Oi(e, t) {
  if (!((e.f & ze) !== 0 && (e.f & ee) !== 0)) {
    (e.f & U) !== 0 ? t.d.push(e) : (e.f & Ae) !== 0 && t.m.push(e), B(e, ee);
    for (var r = e.first; r !== null; )
      Oi(r, t), r = r.next;
  }
}
function Mi(e) {
  B(e, ee);
  for (var t = e.first; t !== null; )
    Mi(t), t = t.next;
}
let Nr = /* @__PURE__ */ new Set();
const He = /* @__PURE__ */ new Map();
let Pi = !1;
function $t(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: bi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  const r = $t(e);
  return Gi(r), r;
}
// @__NO_SIDE_EFFECTS__
function Li(e, t = !1, r = !0) {
  const n = $t(e);
  return t || (n.equals = wi), n;
}
function V(e, t, r = !1) {
  O !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Re || (O.f & Sr) !== 0) && mi() && (O.f & (fe | Me | Ot | Sr)) !== 0 && (Ue === null || !Ue.has(e)) && $l();
  let n = r ? Je(t) : t;
  return zt(e, n, yr);
}
var gt = null, on = 0;
function zt(e, t, r = null) {
  if (!e.equals(t)) {
    rt ? He.set(e, t) : He.has(e) || He.set(e, e.v);
    var n = tt.ensure();
    if (n.capture(e, t), (e.f & fe) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & U) !== 0 && kn(i), Le === null && Sn(i);
    }
    e.wv = Xi(), gt = null, on = 0, Ri(e, U, r), gt = null, N !== null && (N.f & ee) !== 0 && (N.f & (ze | et)) === 0 && (ke === null ? Ul([e]) : ke.push(e)), !n.is_fork && Nr.size > 0 && !Pi && zl();
  }
  return t;
}
function zl() {
  Pi = !1;
  for (const e of Nr) {
    (e.f & ee) !== 0 && B(e, Ae);
    let t;
    try {
      t = pr(e);
    } catch {
      t = !0;
    }
    t && Dt(e);
  }
  Nr.clear();
}
function rr(e) {
  V(e, e.v + 1);
}
function Ri(e, t, r) {
  var n = e.reactions;
  if (n !== null) {
    var i = n.length;
    if (on += i, on > 1e5 && gt === null && (gt = /* @__PURE__ */ new Set()), gt !== null) {
      if (gt.has(e)) return;
      gt.add(e);
    }
    for (var s = 0; s < i; s++) {
      var l = n[s], a = l.f, o = (a & U) === 0;
      if (o && B(l, t), (a & Sr) !== 0)
        Nr.add(
          /** @type {Effect} */
          l
        );
      else if ((a & fe) !== 0) {
        var f = (
          /** @type {Derived} */
          l
        );
        Le?.delete(f), Ri(f, Ae, r);
      } else if (o) {
        var u = (
          /** @type {Effect} */
          l
        );
        (a & Me) !== 0 && Xe !== null && Xe.add(u), r !== null ? r.push(u) : Tn(u);
      }
    }
  }
}
function Je(e) {
  if (typeof e != "object" || e === null || ft in e || _i in e)
    return e;
  const t = vi(e);
  if (t !== Zs && t !== Qs)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Or(e), i = /* @__PURE__ */ we(0), s = yt, l = (a) => {
    if (yt === s)
      return a();
    var o = O, f = yt;
    Te(null), Zn(s);
    var u = a();
    return Te(o), Zn(f), u;
  };
  return n && r.set("length", /* @__PURE__ */ we(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, o, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && ml();
        var u = r.get(o);
        return u === void 0 ? l(() => {
          var v = /* @__PURE__ */ we(f.value);
          return r.set(o, v), v;
        }) : V(u, f.value, !0), !0;
      },
      deleteProperty(a, o) {
        var f = r.get(o);
        if (f === void 0) {
          if (o in a) {
            const u = l(() => /* @__PURE__ */ we(X));
            r.set(o, u), rr(i);
          }
        } else
          V(f, X), rr(i);
        return !0;
      },
      get(a, o, f) {
        if (o === ft)
          return e;
        var u = r.get(o), v = o in a;
        if (u === void 0 && (!v || Ze(a, o)?.writable) && (u = l(() => {
          var d = Je(v ? a[o] : X), p = /* @__PURE__ */ we(d);
          return p;
        }), r.set(o, u)), u !== void 0) {
          var c = h(u);
          return c === X ? void 0 : c;
        }
        return Reflect.get(a, o, f);
      },
      getOwnPropertyDescriptor(a, o) {
        this.has?.(a, o);
        var f = Reflect.getOwnPropertyDescriptor(a, o), u = r.get(o);
        if (u !== void 0) {
          var v = h(u);
          if (v === X)
            return;
          if (f && "value" in f)
            f.value = v;
          else
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return f;
      },
      has(a, o) {
        if (o === ft)
          return !0;
        var f = r.get(o), u = f !== void 0 && f.v !== X || Reflect.has(a, o);
        if (f !== void 0 || N !== null && (!u || Ze(a, o)?.writable)) {
          f === void 0 && (f = l(() => {
            var c = u ? Je(a[o]) : X, d = /* @__PURE__ */ we(c);
            return d;
          }), r.set(o, f));
          var v = h(f);
          if (v === X)
            return !1;
        }
        return u;
      },
      set(a, o, f, u) {
        var v = r.get(o), c = o in a;
        if (n && o === "length")
          for (var d = f; d < /** @type {Source<number>} */
          v.v; d += 1) {
            var p = r.get(d + "");
            p !== void 0 ? V(p, X) : d in a && (p = l(() => /* @__PURE__ */ we(X)), r.set(d + "", p));
          }
        if (v === void 0)
          (!c || Ze(a, o)?.writable) && (v = l(() => /* @__PURE__ */ we(void 0)), V(v, Je(f)), r.set(o, v));
        else {
          c = v.v !== X;
          var w = l(() => Je(f));
          V(v, w);
        }
        var _ = Reflect.getOwnPropertyDescriptor(a, o);
        if (_?.set && _.set.call(u, f), !c) {
          if (n && typeof o == "string") {
            var m = (
              /** @type {Source<number>} */
              r.get("length")
            ), $ = Number(o);
            Number.isInteger($) && $ >= m.v && V(m, $ + 1);
          }
          rr(i);
        }
        return !0;
      },
      ownKeys(a) {
        h(i);
        var o = Reflect.ownKeys(a).filter((v) => {
          var c = r.get(v);
          return c === void 0 || c.v !== X;
        });
        for (var [f, u] of r)
          u.v !== X && !(f in a) && o.push(f);
        return o;
      },
      setPrototypeOf() {
        yl();
      }
    }
  );
}
function Gn(e) {
  try {
    if (e !== null && typeof e == "object" && ft in e)
      return e[ft];
  } catch {
  }
  return e;
}
function Ii(e, t) {
  return Object.is(Gn(e), Gn(t));
}
var Kn, zi, Di, Fi;
function un() {
  if (Kn === void 0) {
    Kn = window, zi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Di = Ze(t, "firstChild").get, Fi = Ze(t, "nextSibling").get, Bn(e) && (e[nn] = void 0, e[gi] = null, e[sn] = void 0, e.__e = void 0), Bn(r) && (r[ln] = void 0);
  }
}
function $e(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return (
    /** @type {TemplateNode | null} */
    Di.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return (
    /** @type {TemplateNode | null} */
    Fi.call(e)
  );
}
function R(e, t) {
  if (!x)
    return /* @__PURE__ */ De(e);
  var r = /* @__PURE__ */ De(T);
  if (r === null)
    r = T.appendChild($e());
  else if (t && r.nodeType !== Lr) {
    var n = $e();
    return r?.before(n), ae(n), n;
  }
  return t && Nn(
    /** @type {Text} */
    r
  ), ae(r), r;
}
function Gt(e, t = !1) {
  if (!x) {
    var r = /* @__PURE__ */ De(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ge(r) : r;
  }
  if (t) {
    if (T?.nodeType !== Lr) {
      var n = $e();
      return T?.before(n), ae(n), n;
    }
    Nn(
      /** @type {Text} */
      T
    );
  }
  return T;
}
function he(e, t = !1) {
  if (!x)
    return /* @__PURE__ */ De(e);
  var r = R(e, t);
  return M(e), r;
}
function C(e, t = 1, r = !1) {
  let n = x ? T : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ge(n);
  if (!x)
    return n;
  if (r) {
    if (n?.nodeType !== Lr) {
      var s = $e();
      return n === null ? i?.after(s) : n.before(s), ae(s), s;
    }
    Nn(
      /** @type {Text} */
      n
    );
  }
  return ae(n), n;
}
function qi(e) {
  e.textContent = "";
}
function ji() {
  return !1;
}
function Ir(e, t, r) {
  return t == null || t === ci ? (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElement(e)
  ) : (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t, e)
  );
}
function Nn(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Lr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function Dl(e) {
  var t = N;
  if (t === null)
    return O.f |= ut, e;
  if ((t.f & xt) === 0 && (t.f & Lt) === 0)
    throw e;
  Be(e, t);
}
function Be(e, t) {
  if (e === ct)
    throw e;
  if (!(t !== null && (t.f & le) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & rn) !== 0 && (t.f & (le | lr)) === 0) {
        if ((t.f & xt) === 0)
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
function Fl(e) {
  N === null && (O === null && _l(), pl()), rt && hl();
}
function ql(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Fe(e, t) {
  var r = N;
  r !== null && (r.f & de) !== 0 && (e |= de);
  var n = {
    ctx: ue,
    deps: null,
    nodes: null,
    f: e | U | Ie,
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
  k?.register_created_effect(n);
  var i = n;
  if ((e & Lt) !== 0)
    tr !== null ? tr.push(n) : tt.ensure().schedule(n);
  else if (t !== null) {
    try {
      Dt(n);
    } catch (l) {
      throw ie(n), l;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Et) === 0 && (i = i.first, (e & Me) !== 0 && (e & dt) !== 0 && i !== null && (i.f |= dt));
  }
  if (i !== null && (i.parent = r, r !== null && ql(i, r), O !== null && (O.f & fe) !== 0 && (e & et) === 0)) {
    var s = (
      /** @type {Derived} */
      O
    );
    (s.effects ??= []).push(i);
  }
  return n;
}
function Cn() {
  return O !== null && !Re;
}
function zr(e) {
  const t = Fe(Pr, null);
  return B(t, ee), t.teardown = e, t;
}
function Xn(e) {
  Fl();
  var t = (
    /** @type {Effect} */
    N.f
  ), r = !O && (t & ze) !== 0 && ue !== null && !ue.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ue
    );
    (n.e ??= []).push(e);
  } else
    return Vi(e);
}
function Vi(e) {
  return Fe(Lt | nl, e);
}
function jl(e) {
  tt.ensure();
  const t = Fe(et | Et, e);
  return () => {
    ie(t);
  };
}
function Vl(e) {
  tt.ensure();
  const t = Fe(et | Et, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? mt(t, () => {
      ie(t), n(void 0);
    }) : (ie(t), n(void 0));
  });
}
function vr(e) {
  return Fe(Lt, e);
}
function Bl(e) {
  return Fe(Ot | Et, e);
}
function Dr(e, t = 0) {
  return Fe(Pr | t, e);
}
function be(e, t = [], r = [], n = []) {
  Si(n, t, r, (i) => {
    Fe(Pr, () => {
      e(...i.map(h));
    });
  });
}
function hr(e, t = 0) {
  var r = Fe(Me | t, e);
  return r;
}
function Bi(e, t = 0) {
  var r = Fe(bn | t, e);
  return r;
}
function _e(e) {
  return Fe(ze | Et, e);
}
function Wi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = rt, n = O;
    Jn(!0), Te(null);
    try {
      t.call(null);
    } catch (i) {
      Be(i, e.parent);
    } finally {
      Jn(r), Te(n);
    }
  }
}
function On(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Ft(() => {
      i.abort(fr);
    });
    var n = r.next;
    (r.f & et) !== 0 ? r.parent = null : ie(r, t), r = n;
  }
}
function Wl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ze) === 0 && ie(t), t = r;
  }
}
function ie(e, t = !0) {
  var r = !1;
  (t || (e.f & rl) !== 0) && e.nodes !== null && e.nodes.end !== null && (Hl(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), e.f |= lr, On(e, t && !r), or(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Wi(e), e.f ^= lr, e.f |= le;
  var i = e.parent;
  i !== null && i.first !== null && Hi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Hl(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Ge(e);
    e.remove(), e = r;
  }
}
function Hi(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function mt(e, t, r = !0) {
  var n = [];
  e.f |= wn, Ui(e, n, !0);
  var i = () => {
    r && ie(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var l = () => --s || i();
    for (var a of n)
      a.out(l);
  } else
    i();
}
function Ui(e, t, r) {
  if ((e.f & de) === 0) {
    e.f ^= de;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || r) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & et) === 0) {
        var l = (i.f & dt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & ze) !== 0 && (e.f & Me) !== 0;
        Ui(i, t, l ? r : !1);
      }
      i = s;
    }
  }
}
function Cr(e) {
  e.f &= ~wn, Yi(e, !0);
}
function Yi(e, t) {
  if ((e.f & wn) === 0 && (e.f & de) !== 0) {
    e.f ^= de, (e.f & ee) === 0 && (B(e, U), tt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & dt) !== 0 || (r.f & ze) !== 0;
      Yi(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const l of s)
        (l.is_global || t) && l.in();
  }
}
function Mn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Ge(r);
      t.append(r), r = i;
    }
}
let rt = !1;
function Jn(e) {
  rt = e;
}
let O = null, Re = !1;
function Te(e) {
  O = e;
}
let N = null;
function Ye(e) {
  N = e;
}
let Ue = null;
function Gi(e) {
  O !== null && ((O.f & kr) !== 0 || (O.f & fe) !== 0) && (Ue ??= /* @__PURE__ */ new Set()).add(e);
}
let ge = null, me = 0, ke = null;
function Ul(e) {
  ke = e;
}
let Ki = 1, wt = 0, yt = wt;
function Zn(e) {
  yt = e;
}
function Xi() {
  return ++Ki;
}
function pr(e) {
  var t = e.f;
  if ((t & U) !== 0)
    return !0;
  if ((t & Ae) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (pr(
        /** @type {Derived} */
        s
      ) && Ti(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Ie) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Le === null && B(e, ee);
  }
  return !1;
}
function Ji(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Ue !== null && Ue.has(e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & fe) !== 0 ? Ji(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? B(s, U) : (s.f & ee) !== 0 && B(s, Ae), Tn(
        /** @type {Effect} */
        s
      ));
    }
}
function Zi(e) {
  var t = ge, r = me, n = ke, i = O, s = Ue, l = ue, a = Re, o = yt, f = e.f;
  ge = /** @type {null | Value[]} */
  null, me = 0, ke = null, O = (f & (ze | et)) === 0 ? e : null, Ue = null, It(e.ctx), Re = !1, yt = ++wt, e.ac !== null && (Ft(() => {
    e.ac.abort(fr);
  }), e.ac = null);
  try {
    e.f |= kr;
    var u = (
      /** @type {Function} */
      e.fn
    ), v = u();
    e.f |= xt;
    var c = Qn(e);
    if (mi() && ke !== null && !Re && c !== null && (e.f & (fe | Ae | U)) === 0)
      for (var d = 0; d < /** @type {Source[]} */
      ke.length; d++)
        Ji(
          ke[d],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (wt++, i.deps !== null)
        for (let p = 0; p < r; p += 1)
          i.deps[p].rv = wt;
      if (t !== null)
        for (const p of t)
          p.rv = wt;
      ke !== null && (n === null ? n = ke : n.push(.../** @type {Source[]} */
      ke));
    }
    return (e.f & ut) !== 0 && (e.f ^= ut), v;
  } catch (p) {
    return Qn(e), Dl(p);
  } finally {
    e.f ^= kr, ge = t, me = r, ke = n, O = i, Ue = s, It(l), Re = a, yt = o;
  }
}
function Qn(e) {
  var t = e.deps, r = k?.is_fork;
  if (ge !== null) {
    var n;
    if (r || or(e, me), t !== null && me > 0)
      for (t.length = me + ge.length, n = 0; n < ge.length; n++)
        t[me + n] = ge[n];
    else
      e.deps = t = ge;
    if (Cn() && (e.f & Ie) !== 0)
      for (n = me; n < t.length; n++)
        (t[n].reactions ??= []).push(e);
  } else !r && t !== null && me < t.length && (or(e, me), t.length = me);
  return t;
}
function Yl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Xs.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & fe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ge === null || !ir.call(ge, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Ie) !== 0 && (s.f ^= Ie), s.v !== X && Sn(s), s.ac !== null && Ft(() => {
      s.ac.abort(fr), s.ac = null, B(s, U);
    }), Ll(s), or(s, 0);
  }
}
function or(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Yl(e, r[n]);
}
function Dt(e) {
  var t = e.f;
  if ((t & le) === 0) {
    B(e, ee);
    var r = N;
    N = e;
    try {
      (t & (Me | bn)) !== 0 ? Wl(e) : On(e), Wi(e);
      var n = Zi(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = Ki;
      var i;
      di && El && (e.f & U) !== 0 && e.deps;
    } finally {
      N = r;
    }
  }
}
async function Gl() {
  await Promise.resolve(), Q();
}
function h(e) {
  var t = e.f, r = (t & fe) !== 0;
  if (O !== null && !Re) {
    var n = N !== null && (N.f & le) !== 0;
    if (!n && (Ue === null || !Ue.has(e))) {
      var i = O.deps;
      if ((O.f & kr) !== 0)
        e.rv < wt && (e.rv = wt, ge === null && i !== null && i[me] === e ? me++ : ge === null ? ge = [e] : ge.push(e));
      else {
        O.deps ??= [], ir.call(O.deps, e) || O.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [O] : ir.call(s, O) || s.push(O);
      }
    }
  }
  if (rt && He.has(e))
    return He.get(e);
  if (r) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (rt) {
      var a = l.v;
      return ((l.f & ee) === 0 && l.reactions !== null || es(l)) && (a = kn(l)), He.set(l, a), a;
    }
    var o = (l.f & Ie) === 0 && !Re && O !== null && (O.f & Ie) !== 0, f = (l.f & xt) === 0;
    pr(l) && (o && (l.f |= Ie), Ti(l)), o && !f && (Ni(l), Qi(l));
  }
  if (Le?.has(e))
    return Le.get(e);
  if ((e.f & ut) !== 0)
    throw e.v;
  return e.v;
}
function Qi(e) {
  if (e.f |= Ie, e.deps !== null)
    for (const r of e.deps) {
      var t = r.reactions;
      t === null ? r.reactions = [e] : ir.call(t, e) || t.push(e), (r.f & fe) !== 0 && (r.f & Ie) === 0 && (Ni(
        /** @type {Derived} */
        r
      ), Qi(
        /** @type {Derived} */
        r
      ));
    }
}
function es(e) {
  if (e.v === X) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (He.has(t) || (t.f & fe) !== 0 && es(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Fr(e) {
  var t = Re;
  try {
    return Re = !0, e();
  } finally {
    Re = t;
  }
}
const Kt = /* @__PURE__ */ Symbol("events"), ts = /* @__PURE__ */ new Set(), fn = /* @__PURE__ */ new Set();
function rs(e, t, r, n = {}) {
  function i(s) {
    if (n.capture || cn.call(t, s), !s.cancelBubble)
      return Ft(() => r?.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? (i.__removed = !1, Pe(() => {
    i.__removed || t.addEventListener(e, i, n);
  })) : t.addEventListener(e, i, n), i;
}
function Tt(e, t, r, n, i) {
  var s = { capture: n, passive: i }, l = rs(e, t, r, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && zr(() => {
    l.__removed = !0, t.removeEventListener(e, l, s);
  });
}
function oe(e, t, r) {
  (t[Kt] ??= {})[e] = r;
}
function ns(e) {
  for (var t = 0; t < e.length; t++)
    ts.add(e[t]);
  for (var r of fn)
    r(e);
}
let Gr = null, Kr = !1;
function cn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Gr = e, Kr || (Kr = !0, setTimeout(() => {
    Kr = !1, Gr = null;
  }));
  var l = 0, a = Gr === e && e[Kt];
  if (a) {
    var o = i.indexOf(a);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Kt] = t;
      return;
    }
    var f = i.indexOf(t);
    if (f === -1)
      return;
    o <= f && (l = o);
  }
  if (s = /** @type {Element} */
  i[l] || e.target, s !== t) {
    sr(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var u = O, v = N;
    Te(null), Ye(null);
    try {
      for (var c, d = []; s !== null && s !== t; ) {
        try {
          var p = s[Kt]?.[n];
          p != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && p.call(s, e);
        } catch (w) {
          c ? d.push(w) : c = w;
        }
        if (e.cancelBubble) break;
        l++, s = l < i.length ? (
          /** @type {Element} */
          i[l]
        ) : null;
      }
      if (c) {
        for (let w of d)
          queueMicrotask(() => {
            throw w;
          });
        throw c;
      }
    } finally {
      e[Kt] = t, delete e.currentTarget, Te(u), Ye(v);
    }
  }
}
const Kl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Xl(e) {
  return (
    /** @type {string} */
    Kl?.createHTML(e) ?? e
  );
}
function is(e) {
  var t = Ir("template");
  return t.innerHTML = Xl(e.replaceAll("<!>", "<!---->")), t.content;
}
function Qe(e, t) {
  var r = (
    /** @type {Effect} */
    N
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ce(e, t) {
  var r = (t & Us) !== 0, n = (t & Ys) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (x)
      return Qe(T, null), T;
    i === void 0 && (i = is(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ De(i)));
    var l = (
      /** @type {TemplateNode} */
      n || zi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ De(l)
      ), o = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Qe(a, o);
    } else
      Qe(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function Jl(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, s;
  return () => {
    if (x)
      return Qe(T, null), T;
    if (!s) {
      var l = (
        /** @type {DocumentFragment} */
        is(i)
      ), a = (
        /** @type {Element} */
        /* @__PURE__ */ De(l)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ De(a);
    }
    var o = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return Qe(o, o), o;
  };
}
// @__NO_SIDE_EFFECTS__
function Zl(e, t) {
  return /* @__PURE__ */ Jl(e, t, "svg");
}
function Ql() {
  if (x)
    return Qe(T, null), T;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = $e();
  return e.append(t, r), Qe(t, r), e;
}
function K(e, t) {
  if (x) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      N
    );
    ((r.f & xt) === 0 || r.nodes.end === null) && (r.nodes.end = T), Rt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ea(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const ta = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function ra(e) {
  return ta.includes(e);
}
const na = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function ia(e) {
  return e = e.toLowerCase(), na[e] ?? e;
}
const sa = ["touchstart", "touchmove"];
function la(e) {
  return sa.includes(e);
}
const aa = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function oa(e) {
  return aa.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function ua(e) {
  let t = 0, r = $t(0), n;
  return () => {
    Cn() && (h(r), Dr(() => (t === 0 && (n = Fr(() => e(() => rr(r)))), t += 1, () => {
      Pe(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, rr(r));
      });
    })));
  };
}
var fa = dt | Et;
function ca(e, t, r, n) {
  new da(e, t, r, n);
}
class da {
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
  #t = x ? T : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #o;
  /** @type {Effect} */
  #i;
  /** @type {Effect | null} */
  #l = null;
  /** @type {Effect | null} */
  #n = null;
  /** @type {Effect | null} */
  #a = null;
  /** @type {DocumentFragment | null} */
  #s = null;
  #_ = 0;
  #u = 0;
  #f = !1;
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
  #y = ua(() => (this.#c = $t(this.#_), () => {
    this.#c = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    this.#e = t, this.#r = r, this.#o = (s) => {
      var l = (
        /** @type {Effect} */
        N
      );
      l.b = this, l.f |= rn, n(s);
    }, this.parent = /** @type {Effect} */
    N.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), this.#i = hr(() => {
      if (x) {
        const s = yn(
          /** @type {TemplateNode} */
          this.#t
        );
        Rt();
        const l = s === _n;
        if (s.startsWith(Vn)) {
          const o = JSON.parse(s.slice(Vn.length));
          this.#b(o);
        } else l ? this.#x() : this.#$();
      } else
        this.#h();
    }, fa), x && (this.#e = T);
  }
  #$() {
    try {
      this.#l = _e(() => this.#o(this.#e));
    } catch (t) {
      this.error(t);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #b(t) {
    const r = this.#r.failed, { reset: n, invoke_onerror: i } = this.#w(t);
    Pe(i), r && (this.#a = _e(() => {
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
  #w(t) {
    var r = !1, n = !1;
    const i = () => {
      if (!this.#v()) {
        if (r) {
          ol();
          return;
        }
        r = !0, n && xl(), this.#a !== null && mt(this.#a, () => {
          this.#a = null;
        }), this.#p(() => {
          this.#h();
        });
      }
    };
    return { reset: i, invoke_onerror: () => {
      if (!this.#v())
        try {
          n = !0, this.#r.onerror?.(t, i), n = !1;
        } catch (l) {
          Be(l, this.#i && this.#i.parent);
        }
    } };
  }
  #v() {
    return (this.#i.f & (le | lr)) !== 0;
  }
  #x() {
    const t = this.#r.pending;
    t && (this.is_pending = !0, this.#n = _e(() => t(this.#e)), Pe(() => {
      if (!this.#v()) {
        var r = this.#s = document.createDocumentFragment(), n = $e(), i = !1;
        if (r.append(n), this.#l = this.#p(() => {
          try {
            return _e(() => this.#o(n));
          } catch (s) {
            try {
              this.error(s), i = !0;
            } catch (l) {
              Be(l, this.#i.parent);
            }
            return null;
          }
        }), this.#l === null) {
          this.#s = null, i && this.#m(
            /** @type {Batch} */
            k
          );
          return;
        }
        this.#u === 0 && (this.#e.before(r), this.#s = null, mt(
          /** @type {Effect} */
          this.#n,
          () => {
            this.#n = null;
          }
        ), this.#m(
          /** @type {Batch} */
          k
        ));
      }
    }));
  }
  #h() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#_ = 0, this.#l = _e(() => {
        this.#o(this.#e);
      }), this.#u > 0) {
        var t = this.#s = document.createDocumentFragment();
        Mn(this.#l, t);
        const r = (
          /** @type {(anchor: Node) => void} */
          this.#r.pending
        );
        this.#n = _e(() => r(this.#e));
      } else
        this.#m(
          /** @type {Batch} */
          k
        );
    } catch (r) {
      this.error(r);
    }
  }
  /**
   * @param {Batch} batch
   */
  #m(t) {
    this.is_pending = !1, t.transfer_effects(this.#d, this.#g);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    $i(t, this.#d, this.#g);
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
    var r = N, n = O, i = ue;
    Ye(this.#i), Te(this.#i), It(this.#i.ctx);
    try {
      return tt.ensure(), t();
    } finally {
      Ye(r), Te(n), It(i);
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  #E(t, r) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#E(t, r);
      return;
    }
    this.#u += t, this.#u === 0 && (this.#m(r), this.#n && mt(this.#n, () => {
      this.#n = null;
    }), this.#s && (this.#e.before(this.#s), this.#s = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    this.#E(t, r), this.#_ += t, !(!this.#c || this.#f) && (this.#f = !0, Pe(() => {
      this.#f = !1, this.#c && zt(this.#c, this.#_);
    }));
  }
  get_effect_pending() {
    return this.#y(), h(
      /** @type {Source<number>} */
      this.#c
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (t === ct || !this.#r.onerror && !this.#r.failed)
      throw t;
    k?.is_fork ? (this.#l && k.skip_effect(this.#l), this.#n && k.skip_effect(this.#n), this.#a && k.skip_effect(this.#a), k.oncommit(() => {
      this.#v() || this.#S(t);
    })) : this.#S(t);
  }
  /**
   * @param {unknown} error
   */
  #S(t) {
    this.#l && (ie(this.#l), this.#l = null), this.#n && (ie(this.#n), this.#n = null), this.#a && (ie(this.#a), this.#a = null), x && (ae(
      /** @type {TemplateNode} */
      this.#t
    ), ul(), ae(Ar()));
    let r = this.#r.failed;
    const n = (i) => {
      if (this.#v()) return;
      const { reset: s, invoke_onerror: l } = this.#w(i);
      l(), r && !this.#v() && (this.#a = this.#p(() => {
        try {
          return _e(() => {
            var a = (
              /** @type {Effect} */
              N
            );
            a.b = this, a.f |= rn, r(
              this.#e,
              () => i,
              () => s
            );
          });
        } catch (a) {
          return Be(
            a,
            /** @type {Effect} */
            this.#i.parent
          ), null;
        }
      }));
    };
    Pe(() => {
      if (!this.#v()) {
        var i;
        try {
          i = this.transform_error(t);
        } catch (s) {
          Be(s, this.#i && this.#i.parent);
          return;
        }
        i !== null && typeof i == "object" && typeof /** @type {any} */
        i.then == "function" ? i.then(
          n,
          /** @param {unknown} e */
          (s) => Be(s, this.#i && this.#i.parent)
        ) : n(i);
      }
    });
  }
}
function pe(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[ln] ??= e.nodeValue) && (e[ln] = r, e.nodeValue = `${r}`);
}
function ss(e, t) {
  return ls(e, t);
}
function va(e, t) {
  un(), t.intro = t.intro ?? !1;
  const r = t.target, n = x, i = T;
  try {
    for (var s = /* @__PURE__ */ De(r); s && (s.nodeType !== dr || /** @type {Comment} */
    s.data !== fi); )
      s = /* @__PURE__ */ Ge(s);
    if (!s)
      throw ct;
    ye(!0), ae(
      /** @type {Comment} */
      s
    );
    const l = ls(e, { ...t, anchor: s });
    return ye(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== ct && console.warn("Failed to hydrate: ", l), t.recover === !1 && bl(), un(), qi(r), ye(!1), ss(e, t);
  } finally {
    ye(n), ae(i);
  }
}
const wr = /* @__PURE__ */ new Map();
function ls(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: l = !0, transformError: a }) {
  un();
  var o = void 0, f = Vl(() => {
    var u = r ?? t.appendChild($e());
    ca(
      /** @type {TemplateNode} */
      u,
      {
        pending: () => {
        }
      },
      (d) => {
        $n({});
        var p = (
          /** @type {ComponentContext} */
          ue
        );
        if (s && (p.c = s), i && (n.$$events = i), x && Qe(
          /** @type {TemplateNode} */
          d,
          null
        ), o = e(d, n) || En(), x && (N.nodes.end = T, T === null || T.nodeType !== dr || /** @type {Comment} */
        T.data !== gn))
          throw Rr(), ct;
        xn();
      },
      a
    );
    var v = /* @__PURE__ */ new Set(), c = (d) => {
      for (var p = 0; p < d.length; p++) {
        var w = d[p];
        if (!v.has(w)) {
          v.add(w);
          var _ = la(w);
          for (const L of [t, document]) {
            var m = wr.get(L);
            m === void 0 && (m = /* @__PURE__ */ new Map(), wr.set(L, m));
            var $ = m.get(w);
            $ === void 0 ? (L.addEventListener(w, cn, { passive: _ }), m.set(w, 1)) : m.set(w, $ + 1);
          }
        }
      }
    };
    return c(Mr(ts)), fn.add(c), () => {
      for (var d of v)
        for (const _ of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            wr.get(_)
          ), w = (
            /** @type {number} */
            p.get(d)
          );
          --w == 0 ? (_.removeEventListener(d, cn), p.delete(d), p.size === 0 && wr.delete(_)) : p.set(d, w);
        }
      fn.delete(c), u !== r && u.parentNode?.removeChild(u);
    };
  });
  return dn.set(o, f), o;
}
let dn = /* @__PURE__ */ new WeakMap();
function ha(e, t) {
  const r = dn.get(e);
  return r ? (dn.delete(e), r(t)) : Promise.resolve();
}
class Pn {
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
  #i = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    this.anchor = t, this.#i = r;
  }
  /**
   * @param {Batch} batch
   */
  #l = (t) => {
    if (this.#e.has(t)) {
      var r = (
        /** @type {Key} */
        this.#e.get(t)
      ), n = this.#t.get(r);
      if (n)
        Cr(n), this.#o.delete(r);
      else {
        var i = this.#r.get(r);
        i && (Cr(i.effect), this.#t.set(r, i.effect), this.#r.delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
      }
      for (const [s, l] of this.#e) {
        if (this.#e.delete(s), s === t)
          break;
        const a = this.#r.get(l);
        a && (ie(a.effect), this.#r.delete(l));
      }
      for (const [s, l] of this.#t) {
        if (s === r || this.#o.has(s)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(s)) {
            var f = document.createDocumentFragment();
            Mn(l, f), f.append($e()), this.#r.set(s, { effect: l, fragment: f });
          } else
            ie(l);
          this.#o.delete(s), this.#t.delete(s);
        };
        this.#i || !n ? (this.#o.add(s), mt(l, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #n = (t) => {
    this.#e.delete(t);
    const r = Array.from(this.#e.values());
    for (const [n, i] of this.#r)
      r.includes(n) || (ie(i.effect), this.#r.delete(n));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      k
    ), i = ji();
    if (r && !this.#t.has(t) && !this.#r.has(t))
      if (i) {
        var s = document.createDocumentFragment(), l = $e();
        s.append(l), this.#r.set(t, {
          effect: _e(() => r(l)),
          fragment: s
        });
      } else
        this.#t.set(
          t,
          _e(() => r(this.anchor))
        );
    if (this.#e.set(n, t), i) {
      for (const [a, o] of this.#t)
        a === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [a, o] of this.#r)
        a === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(this.#l), n.ondiscard(this.#n);
    } else
      x && (this.anchor = T), this.#l(n);
  }
}
function pa(e, t, ...r) {
  var n = new Pn(e);
  hr(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((s) => i(s, ...r)));
  }, dt);
}
function Nt(e, t, r = !1) {
  var n;
  x && (n = T, Rt());
  var i = new Pn(e), s = r ? dt : 0;
  function l(a, o) {
    if (x) {
      var f = yn(
        /** @type {TemplateNode} */
        n
      );
      if (a !== parseInt(f.substring(1))) {
        var u = Ar();
        ae(u), i.anchor = u, ye(!1), i.ensure(a, o), ye(!0);
        return;
      }
    }
    i.ensure(a, o);
  }
  hr(() => {
    var a = !1;
    t((o, f = 0) => {
      a = !0, l(f, o);
    }), a || l(-1, null);
  }, s);
}
function Xt(e, t) {
  return t;
}
function _a(e, t, r) {
  for (var n = [], i = t.length, s, l = t.length, a = 0; a < i; a++) {
    let v = t[a];
    mt(
      v,
      () => {
        if (s) {
          if (s.pending.delete(v), s.done.add(v), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            vn(e, Mr(s.done)), c.delete(s), c.size === 0 && (e.outrogroups = null);
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
      ), u = (
        /** @type {Element} */
        f.parentNode
      );
      qi(u), u.append(f), e.items.clear();
    }
    vn(e, t, !o);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(s);
}
function vn(e, t, r = !0) {
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
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= We;
      const l = document.createDocumentFragment();
      Mn(s, l);
    } else
      ie(t[i], r);
  }
}
var ei;
function Ct(e, t, r, n, i, s = null) {
  var l = e, a = /* @__PURE__ */ new Map(), o = (t & ui) !== 0;
  if (o) {
    var f = (
      /** @type {Element} */
      e
    );
    l = x ? ae(/* @__PURE__ */ De(f)) : f.appendChild($e());
  }
  x && Rt();
  var u = null, v = /* @__PURE__ */ Ai(() => {
    var $ = r();
    return (
      /** @type {V[]} */
      Or($) ? $ : $ == null ? [] : Mr($)
    );
  }), c = /* @__PURE__ */ new Map(), d = !0;
  function p($) {
    if ((m.effect.f & le) === 0) {
      m.pending.delete($);
      var L = h(v);
      m.fallback = u, ga(m, L, l, t, n), u !== null && (L.length === 0 ? (u.f & We) === 0 ? Cr(u) : (u.f ^= We, Jt(u, null, l)) : mt(u, () => {
        u = null;
      }));
    }
  }
  function w($) {
    m.pending.delete($);
  }
  var _ = hr(() => {
    var $ = (
      /** @type {V[]} */
      h(v)
    ), L = $.length;
    let E = !1;
    if (x) {
      var Y = yn(l) === _n;
      Y !== (L === 0) && (l = Ar(), ae(l), ye(!1), E = !0);
    }
    for (var G = /* @__PURE__ */ new Set(), S = (
      /** @type {Batch} */
      k
    ), A = ji(), y = 0; y < L; y += 1) {
      x && T.nodeType === dr && /** @type {Comment} */
      T.data === gn && (l = /** @type {Comment} */
      T, E = !0, ye(!1));
      var z = $[y], D = n(z, y), te = d ? null : a.get(D);
      te ? (te.v && zt(te.v, z), te.i && zt(te.i, y), A && S.unskip_effect(te.e)) : (te = ba(
        a,
        d ? l : ei ??= $e(),
        z,
        D,
        y,
        i,
        t,
        r
      ), d || (te.e.f |= We), a.set(D, te)), G.add(D);
    }
    if (L === 0 && s && !u && (d ? u = _e(() => s(l)) : (u = _e(() => s(ei ??= $e())), u.f |= We)), L > G.size && vl(), x && L > 0 && ae(Ar()), !d)
      if (c.set(S, G), A) {
        for (const [pt, qe] of a)
          G.has(pt) || S.skip_effect(qe.e);
        S.oncommit(p), S.ondiscard(w);
      } else
        p(S);
    E && ye(!0), h(v);
  }), m = { effect: _, items: a, pending: c, outrogroups: null, fallback: u };
  d = !1, x && (l = T);
}
function Wt(e) {
  for (; e !== null && (e.f & ze) === 0; )
    e = e.next;
  return e;
}
function ga(e, t, r, n, i) {
  var s = (n & qs) !== 0, l = t.length, a = e.items, o = Wt(e.effect.first), f, u = null, v, c = [], d = [], p, w, _, m;
  if (s)
    for (m = 0; m < l; m += 1)
      p = t[m], w = i(p, m), _ = /** @type {EachItem} */
      a.get(w).e, (_.f & We) === 0 && (_.nodes?.a?.measure(), (v ??= /* @__PURE__ */ new Set()).add(_));
  for (m = 0; m < l; m += 1) {
    if (p = t[m], w = i(p, m), _ = /** @type {EachItem} */
    a.get(w).e, e.outrogroups !== null)
      for (const z of e.outrogroups)
        z.pending.delete(_), z.done.delete(_);
    if ((_.f & de) !== 0 && (Cr(_), s && (_.nodes?.a?.unfix(), (v ??= /* @__PURE__ */ new Set()).delete(_))), (_.f & We) !== 0)
      if (_.f ^= We, _ === o)
        Jt(_, null, r);
      else {
        var $ = u ? u.next : o;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), ot(e, u, _), ot(e, _, $), Jt(_, $, r), u = _, c = [], d = [], o = Wt(u.next);
        continue;
      }
    if (_ !== o) {
      if (f !== void 0 && f.has(_)) {
        if (c.length < d.length) {
          var L = d[0], E;
          u = L.prev;
          var Y = c[0], G = c[c.length - 1];
          for (E = 0; E < c.length; E += 1)
            Jt(c[E], L, r);
          for (E = 0; E < d.length; E += 1)
            f.delete(d[E]);
          ot(e, Y.prev, G.next), ot(e, u, Y), ot(e, G, L), o = L, u = G, m -= 1, c = [], d = [];
        } else
          f.delete(_), Jt(_, o, r), ot(e, _.prev, _.next), ot(e, _, u === null ? e.effect.first : u.next), ot(e, u, _), u = _;
        continue;
      }
      for (c = [], d = []; o !== null && o !== _; )
        (f ??= /* @__PURE__ */ new Set()).add(o), d.push(o), o = Wt(o.next);
      if (o === null)
        continue;
    }
    (_.f & We) === 0 && c.push(_), u = _, o = Wt(_.next);
  }
  if (e.outrogroups !== null) {
    for (const z of e.outrogroups)
      z.pending.size === 0 && (vn(e, Mr(z.done)), e.outrogroups?.delete(z));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || f !== void 0) {
    var S = [];
    if (f !== void 0)
      for (_ of f)
        (_.f & de) === 0 && S.push(_);
    for (; o !== null; )
      (o.f & de) === 0 && o !== e.fallback && S.push(o), o = Wt(o.next);
    var A = S.length;
    if (A > 0) {
      var y = (n & ui) !== 0 && l === 0 ? r : null;
      if (s) {
        for (m = 0; m < A; m += 1)
          S[m].nodes?.a?.measure();
        for (m = 0; m < A; m += 1)
          S[m].nodes?.a?.fix();
      }
      _a(e, S, y);
    }
  }
  s && Pe(() => {
    if (v !== void 0)
      for (_ of v)
        _.nodes?.a?.apply();
  });
}
function ba(e, t, r, n, i, s, l, a) {
  var o = (l & Ds) !== 0 ? (l & js) === 0 ? /* @__PURE__ */ Li(r, !1, !1) : $t(r) : null, f = (l & Fs) !== 0 ? $t(i) : null;
  return {
    v: o,
    i: f,
    e: _e(() => (s(t, o ?? r, f ?? i, a), () => {
      e.delete(n);
    }))
  };
}
function Jt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & We) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ge(n)
      );
      if (s.before(n), n === i)
        return;
      n = l;
    }
}
function ot(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function wa(e, t, r, n, i, s) {
  let l = x;
  x && Rt();
  var a = null;
  x && T.nodeType === sl && (a = /** @type {Element} */
  T, Rt());
  var o = (
    /** @type {TemplateNode} */
    x ? T : e
  ), f = new Pn(o, !1);
  hr(() => {
    const u = t() || null;
    var v = Gs;
    if (u === null) {
      f.ensure(null, null);
      return;
    }
    return f.ensure(u, (c) => {
      if (u) {
        var d = x;
        if (a = x ? (
          /** @type {Element} */
          a
        ) : Ir(u, v), Qe(a, a), n) {
          var p = null;
          x && oa(u) && a.append(p = document.createComment(""));
          var w = x ? /* @__PURE__ */ De(a) : a.appendChild($e());
          x && (w === null ? ye(!1) : ae(w)), n(a, w), p?.remove();
        }
        N.nodes.end = a, d || c.before(a);
      }
      x && ae(c);
    }), () => {
    };
  }, dt), zr(() => {
  }), l && (ye(!0), ae(o));
}
function ma(e, t) {
  vr(() => {
    e = N?.parent?.nodes?.start ?? e;
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
      const i = Ir("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
function ya(e, t) {
  var r = void 0, n;
  Bi(() => {
    r !== (r = t()) && (n && (ie(n), n = null), r && (n = _e(() => {
      vr(() => (
        /** @type {(node: Element) => void} */
        r(e)
      ));
    })));
  });
}
function as(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = as(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function $a() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = as(e)) && (n && (n += " "), n += t);
  return n;
}
function xa(e) {
  return typeof e == "object" ? $a(e) : e ?? "";
}
const ti = [...` 	
\r\f \v\uFEFF`];
function Ea(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, l = 0; (l = n.indexOf(i, l)) >= 0; ) {
          var a = l + s;
          (l === 0 || ti.includes(n[l - 1])) && (a === n.length || ti.includes(n[a])) ? n = (l === 0 ? "" : n.substring(0, l)) + n.substring(a + 1) : l = a;
        }
  }
  return n === "" ? null : n;
}
function ri(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i of Object.keys(e)) {
    var s = e[i];
    s != null && s !== "" && (n += " " + i + ": " + s + r);
  }
  return n;
}
function Xr(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Sa(e, t) {
  if (t) {
    var r = "", n, i;
    if (Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\/\*.*?\*\//g, "").trim();
      var s = !1, l = 0, a = !1, o = [];
      n && o.push(...Object.keys(n).map(Xr)), i && o.push(...Object.keys(i).map(Xr));
      var f = 0, u = -1;
      const w = e.length;
      for (var v = 0; v < w; v++) {
        var c = e[v];
        if (a ? c === "/" && e[v - 1] === "*" && (a = !1) : s ? s === c && (s = !1) : c === "/" && e[v + 1] === "*" ? a = !0 : c === '"' || c === "'" ? s = c : c === "(" ? l++ : c === ")" && l--, !a && s === !1 && l === 0) {
          if (c === ":" && u === -1)
            u = v;
          else if (c === ";" || v === w - 1) {
            if (u !== -1) {
              var d = Xr(e.substring(f, u).trim());
              if (!o.includes(d)) {
                c !== ";" && v++;
                var p = e.substring(f, v).trim();
                r += " " + p + ";";
              }
            }
            f = v + 1, u = -1;
          }
        }
      }
    }
    return n && (r += ri(n)), i && (r += ri(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return e == null ? null : String(e);
}
function Zt(e, t, r, n, i, s) {
  var l = (
    /** @type {any} */
    e[nn]
  );
  if (x || l !== r || l === void 0) {
    var a = Ea(r, n, s);
    (!x || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e[nn] = r;
  } else if (s && i !== s)
    for (var o in s) {
      var f = !!s[o];
      (i == null || f !== !!i[o]) && e.classList.toggle(o, f);
    }
  return s;
}
function Jr(e, t = {}, r, n) {
  for (var i in r) {
    var s = r[i];
    t[i] !== s && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, n));
  }
}
function ka(e, t, r, n) {
  var i = (
    /** @type {any} */
    e[sn]
  );
  if (x || i !== t) {
    var s = Sa(t, n);
    (!x || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e[sn] = t;
  } else n && (Array.isArray(n) ? (Jr(e, r?.[0], n[0]), Jr(e, r?.[1], n[1], "important")) : Jr(e, r, n));
  return n;
}
function os(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ni(e, t) {
  var r = !("__defaultValue" in e);
  !r && e.__defaultValue === t || (e.__defaultValue = t, us(e, !r || "__value" in e));
}
function us(e, t) {
  var r = e.__defaultValue, n = e.multiple, i = n ? r ?? [] : null;
  if (!(n && !Or(i))) {
    var s = e.selectedIndex, l = t && n ? new Set(e.selectedOptions) : null;
    for (var a of e.options) {
      var o = Pt(a);
      os(
        a,
        n ? (
          /** @type {any[]} */
          i.includes(o)
        ) : Ii(o, r)
      );
    }
    if (t)
      if (l !== null)
        for (a of e.options) {
          var f = l.has(a);
          a.selected !== f && (a.selected = f);
        }
      else e.selectedIndex !== s && (e.selectedIndex = s);
  }
}
function ur(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Or(t))
      return al();
    for (var n of e.options)
      n.selected = t.includes(Pt(n));
    return;
  }
  for (n of e.options) {
    var i = Pt(n);
    if (Ii(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function $r(e) {
  var t = new MutationObserver((r) => {
    r.every(Aa) || ("__defaultValue" in e && us(e, !1), "__value" in e && ur(e, e.__value));
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), zr(() => {
    t.disconnect();
  });
}
function ii(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), i = !0;
  Ei(e, "change", (s) => {
    var l = s ? "[selected]" : ":checked", a;
    if (e.multiple)
      a = [].map.call(e.querySelectorAll(l), Pt);
    else {
      var o = e.querySelector(l) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      a = o && Pt(o);
    }
    r(a), e.__value = a, k !== null && n.add(k);
  }), vr(() => {
    var s = t();
    if (e === document.activeElement) {
      var l = (
        /** @type {Batch} */
        k
      );
      if (n.has(l))
        return;
    }
    if (ur(e, s, i), i && s === void 0) {
      var a = e.querySelector(":checked");
      a !== null && (s = Pt(a), r(s));
    }
    e.__value = s, i = !1;
  });
}
function Pt(e) {
  return "__value" in e ? e.__value : e.value;
}
function Aa(e) {
  if (
    /** @type {Element} */
    e.target.closest("selectedcontent") !== null
  )
    return !0;
  if (e.type === "childList") {
    var t = [...e.addedNodes, ...e.removedNodes];
    return t.length > 0 && t.every((r) => r.nodeName === "SELECTEDCONTENT");
  }
  return !1;
}
const Ht = /* @__PURE__ */ Symbol("class"), Ut = /* @__PURE__ */ Symbol("style"), fs = /* @__PURE__ */ Symbol("is custom element"), cs = /* @__PURE__ */ Symbol("is html"), Ta = cr ? "link" : "LINK", si = cr ? "input" : "INPUT", Na = cr ? "option" : "OPTION", ds = cr ? "select" : "SELECT", Ca = cr ? "progress" : "PROGRESS";
function vs(e) {
  if (x) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          j(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          j(e, "checked", null), e.checked = i;
        }
      }
    };
    e[Qt] = r, Pe(r), xi();
  }
}
function j(e, t, r, n) {
  var i = hs(e);
  x && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Ta) || i[t] !== (i[t] = r) && (t === "loading" && (e[il] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && ps(e).has(t) ? e[t] = r : e.setAttribute(t, r));
}
function Oa(e, t, r, n, i = !1, s = !1) {
  x && i && e.nodeName === si && ("defaultValue" in r || "defaultChecked" in r || vs(
    /** @type {HTMLInputElement} */
    e
  ));
  var l = hs(e), a = l[fs], o = !l[cs];
  let f = x && a;
  f && ye(!1);
  var u = t || {}, v = e.nodeName === Na, c = e.nodeName === ds;
  try {
    for (var d in t)
      !(d in r) && d[0] + d[1] !== "$$" && (r[d] = null);
    r.class ? r.class = xa(r.class) : (n || r[Ht]) && (r.class = null), r[Ut] && (r.style ??= null);
    var p = ps(e);
    if (e.nodeName === si && "type" in r && ("value" in r || "__value" in r)) {
      var w = r.type;
      (w !== u.type || w === void 0 && e.hasAttribute("type")) && (u.type = w, j(e, "type", w, s));
    }
    for (const S in r) {
      let A = r[S];
      if (v && S === "value" && A == null) {
        e.value = e.__value = "", u[S] = A;
        continue;
      }
      if (S === "class") {
        var _ = e.namespaceURI === "http://www.w3.org/1999/xhtml";
        Zt(e, _, A, n, t?.[Ht], r[Ht]), u[S] = A, u[Ht] = r[Ht];
        continue;
      }
      if (S === "style") {
        ka(e, A, t?.[Ut], r[Ut]), u[S] = A, u[Ut] = r[Ut];
        continue;
      }
      var m = u[S];
      if (!(A === m && !(A === void 0 && e.hasAttribute(S)))) {
        u[S] = A;
        var $ = S[0] + S[1];
        if ($ !== "$$")
          if ($ === "on") {
            const y = {}, z = "$$" + S;
            let D = S.slice(2);
            var L = ra(D);
            if (ea(D) && (D = D.slice(0, -7), y.capture = !0), !L && m) {
              if (A != null) continue;
              e.removeEventListener(D, u[z], y), u[z] = null;
            }
            if (L)
              oe(D, e, A), ns([D]);
            else if (A != null) {
              let te = function(pt) {
                u[S].call(this, pt);
              };
              var G = te;
              u[z] = rs(D, e, te, y);
            }
          } else if (S === "style")
            j(e, S, A);
          else if (S === "autofocus")
            Cl(
              /** @type {HTMLElement} */
              e,
              !!A
            );
          else if (!a && (S === "__value" || S === "value" && A != null))
            e.__value = A, (m == null || // @ts-ignore
            e.value !== A || A === 0 && e.nodeName === Ca) && (e.value = A);
          else if (S === "selected" && v)
            os(
              /** @type {HTMLOptionElement} */
              e,
              A
            );
          else {
            var E = S;
            o || (E = ia(E));
            var Y = E === "defaultValue" || E === "defaultChecked";
            if (c && E === "defaultValue") continue;
            if (A == null && !a && !Y)
              if (l[S] = null, E === "value" || E === "checked") {
                let y = (
                  /** @type {HTMLInputElement} */
                  e
                );
                const z = t === void 0;
                if (E === "value") {
                  let D = y.defaultValue;
                  y.removeAttribute(E), y.defaultValue = D, y.value = y.__value = z ? D : null;
                } else {
                  let D = y.defaultChecked;
                  y.removeAttribute(E), y.defaultChecked = D, y.checked = z ? D : !1;
                }
              } else
                e.removeAttribute(S);
            else Y || (a || typeof A != "string") && p.has(E) ? (e[E] = A, E in l && (l[E] = X)) : typeof A != "function" && j(e, E, A, s);
          }
      }
    }
  } finally {
    f && ye(!0);
  }
  return u;
}
function li(e, t, r = [], n = [], i = [], s, l = !1, a = !1) {
  Si(i, r, n, (o) => {
    var f = void 0, u = {}, v = e.nodeName === ds, c = !1;
    if (Bi(() => {
      var p = t(...o.map(h)), w = Oa(
        e,
        f,
        p,
        s,
        l,
        a
      );
      if (c && v) {
        var _ = (
          /** @type {HTMLSelectElement} */
          e
        );
        "defaultValue" in p && ni(_, p.defaultValue), "value" in p && ur(_, p.value);
      }
      for (let $ of Object.getOwnPropertySymbols(u))
        p[$] || ie(u[$]);
      for (let $ of Object.getOwnPropertySymbols(p)) {
        var m = p[$];
        $.description === Ks && (!f || m !== f[$]) && (u[$] && ie(u[$]), u[$] = _e(() => ya(e, () => m))), w[$] = m;
      }
      f = w;
    }), v) {
      var d = (
        /** @type {HTMLSelectElement} */
        e
      );
      vr(() => {
        var p = (
          /** @type {Record<string | symbol, any>} */
          f
        );
        "defaultValue" in p && ni(d, p.defaultValue), ur(d, p.value, !0), $r(d);
      });
    }
    c = !0;
  });
}
function hs(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[gi] ??= {
      [fs]: e.nodeName.includes("-"),
      [cs]: e.namespaceURI === ci
    }
  );
}
var ai = /* @__PURE__ */ new Map();
function ps(e) {
  var t = e.getAttribute("is") || e.nodeName, r = ai.get(t);
  if (r) return r;
  ai.set(t, r = /* @__PURE__ */ new Set());
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = Js(i);
    for (var l in n)
      n[l].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      l !== "innerHTML" && l !== "textContent" && l !== "innerText" && r.add(l);
    i = vi(i);
  }
  return r;
}
function Ma(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Ei(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = Zr(e) ? Qr(s) : s, r(s), k !== null && n.add(k), await Gl(), s !== (s = t())) {
      var l = e.selectionStart, a = e.selectionEnd, o = e.value.length;
      if (e.value = s ?? "", a !== null) {
        var f = e.value.length;
        l === a && a === o && f > o ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = l, e.selectionEnd = Math.min(a, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (x && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Fr(t) == null && e.value) && (r(Zr(e) ? Qr(e.value) : e.value), k !== null && n.add(k)), Dr(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        k
      );
      if (n.has(s))
        return;
    }
    Zr(e) && i === Qr(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Zr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Qr(e) {
  return e === "" ? null : +e;
}
function en(e, t) {
  return e === t || e?.[ft] === t;
}
function Pa(e = En(), t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    ue.r
  ), s = (
    /** @type {Effect} */
    N
  );
  return vr(() => {
    var l, a;
    return Dr(() => {
      l = a, a = [], Fr(() => {
        en(r(...a), e) || (t(e, ...a), l && en(r(...l), e) && t(null, ...l));
      });
    }), () => {
      let o = s;
      for (; o !== i && o.parent !== null && o.parent.f & lr; )
        o = o.parent;
      const f = () => {
        a && en(r(...a), e) && t(null, ...a);
      }, u = o.teardown;
      o.teardown = () => {
        f(), u?.();
      };
    };
  }), e;
}
let mr = !1;
function La(e) {
  var t = mr;
  try {
    return mr = !1, [e(), mr];
  } finally {
    mr = t;
  }
}
const Ra = {
  get(e, t) {
    if (!e.exclude.has(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.has(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.has(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.has(t));
  }
};
// @__NO_SIDE_EFFECTS__
function vt(e, t, r) {
  return new Proxy({ props: e, exclude: t }, Ra);
}
const Ia = {
  get(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (Bt(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, r) {
    let n = e.props.length;
    for (; n--; ) {
      let i = e.props[n];
      Bt(i) && (i = i());
      const s = Ze(i, t);
      if (s && s.set)
        return s.set(r), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (Bt(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const i = Ze(n, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === ft || t === mn) return !1;
    for (let r of e.props)
      if (Bt(r) && (r = r()), r != null && t in r) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let r of e.props)
      if (Bt(r) && (r = r()), !!r) {
        for (const n in r)
          t.includes(n) || t.push(n);
        for (const n of Object.getOwnPropertySymbols(r))
          t.includes(n) || t.push(n);
      }
    return t;
  }
};
function St(...e) {
  return new Proxy({ props: e }, Ia);
}
function se(e, t, r, n) {
  var i = !0, s = (r & Ws) !== 0, l = (r & Hs) !== 0, a = (
    /** @type {V} */
    n
  ), o = !0, f = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), u = () => l && i ? (f ??= /* @__PURE__ */ ar(
    /** @type {() => V} */
    n
  ), h(f)) : (o && (o = !1, a = l ? Fr(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), a);
  let v;
  if (s) {
    var c = ft in e || mn in e;
    v = Ze(e, t)?.set ?? (c && t in e ? (E) => e[t] = E : void 0);
  }
  var d, p = !1;
  s ? [d, p] = La(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t], d === void 0 && n !== void 0 && (d = u(), v && (wl(), v(d)));
  var w;
  if (w = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E === void 0 ? u() : (o = !0, E);
  }, (r & Bs) === 0)
    return w;
  if (v) {
    var _ = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(E, Y) {
        return arguments.length > 0 ? ((!Y || _ || p) && v(Y ? w() : E), E) : w();
      })
    );
  }
  var m = !1, $ = ((r & Vs) !== 0 ? ar : Ai)(() => (m = !1, w()));
  s && h($);
  var L = (
    /** @type {Effect} */
    N
  );
  return (
    /** @type {() => V} */
    (function(E, Y) {
      if (arguments.length > 0) {
        const G = Y ? h($) : s ? Je(E) : E;
        return V($, G), m = !0, a !== void 0 && (a = G), E;
      }
      return rt && m || (L.f & le) !== 0 ? $.v : h($);
    })
  );
}
function za(e) {
  return new Da(e);
}
class Da {
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
    var r = /* @__PURE__ */ new Map(), n = (s, l) => {
      var a = /* @__PURE__ */ Li(l, !1, !1);
      return r.set(s, a), a;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, l) {
          return h(r.get(l) ?? n(l, Reflect.get(s, l)));
        },
        has(s, l) {
          return l === mn ? !0 : (h(r.get(l) ?? n(l, Reflect.get(s, l))), Reflect.has(s, l));
        },
        set(s, l, a) {
          return V(r.get(l) ?? n(l, a), a), Reflect.set(s, l, a);
        }
      }
    );
    this.#t = (t.hydrate ? va : ss)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    }), (!t?.props?.$$host || t.sync === !1) && Q(), this.#e = i.$$events;
    for (const s of Object.keys(this.#t))
      s === "$set" || s === "$destroy" || s === "$on" || sr(this, s, {
        get() {
          return this.#t[s];
        },
        /** @param {any} value */
        set(l) {
          this.#t[s] = l;
        },
        enumerable: !0
      });
    this.#t.$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, this.#t.$destroy = () => {
      ha(this.#t);
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
    const n = (...i) => r.call(this, ...i);
    return this.#e[t].push(n), () => {
      this.#e[t] = this.#e[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    this.#t.$destroy();
  }
}
let _s;
typeof HTMLElement == "function" && (_s = class extends HTMLElement {
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
      let t = function(i) {
        return (s) => {
          const l = Ir("slot");
          i !== "default" && (l.name = i), K(s, l);
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Fa(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = xr(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = za({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = jl(() => {
        Dr(() => {
          this.$$r = !0;
          for (const i of Er(this.$$c)) {
            if (!this.$$p_d[i]?.reflect) continue;
            this.$$d[i] = this.$$c[i];
            const s = xr(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, s);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const s of this.$$l[i]) {
          const l = this.$$c.$on(i, s);
          this.$$l_u.set(s, l);
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = xr(e, r, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Er(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function xr(e, t, r, n) {
  const i = r[e]?.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (i) {
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
    switch (i) {
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
function Fa(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function nt(e, t, r, n, i, s) {
  let l = class extends _s {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Er(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Er(t).forEach((a) => {
    sr(l.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(o) {
        o = xr(a, o, t), this.$$d[a] = o;
        var f = this.$$c;
        if (f) {
          var u = Ze(f, a)?.get;
          u ? f[a] = o : f.$set({ [a]: o });
        }
      }
    });
  }), n.forEach((a) => {
    sr(l.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
const _t = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const hn = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
function tn(e) {
  return e != null;
}
function qa(e, t = {}) {
  const r = t.attributeNames ?? {}, n = (c) => r[c] ?? c, i = e.size ?? e.width ?? _t.width, s = e.size ?? e.height ?? _t.height, l = e.aliases?.filter((c) => typeof c == "string" && c.trim() !== "").map((c) => `lucide-${c}`) ?? [], a = [...e.name ? [`lucide-${e.name}`] : [], ...l], o = t.className?.split(" ").filter(Boolean) ?? [], f = t.includeDefaultClasses === !1 ? hn(...o) : hn("lucide", ...a, ...o), u = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? _t["stroke-width"]) * Number(e.size ?? e.width ?? _t.width) / Number(t.size ?? t.width ?? _t.width) : t.strokeWidth ?? _t["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(_t).reduce((c, [d, p]) => (c[n(d)] = p, c), {}),
      ..."color" in t && t.color && {
        [n("stroke")]: t.color
      },
      ..."size" in t && tn(t.size) && {
        [n("width")]: t.size,
        [n("height")]: t.size
      },
      ..."width" in t && tn(t.width) && {
        [n("width")]: t.width
      },
      ..."height" in t && tn(t.height) && {
        [n("height")]: t.height
      },
      [n("stroke-width")]: u,
      ...f && {
        [n("class")]: f
      },
      [n("viewBox")]: `0 0 ${i} ${s}`,
      ...t.hasA11yProp === !1 ? {
        [n("aria-hidden")]: "true"
      } : {},
      ..."attributes" in t && t.attributes
    },
    e.node.map((c) => {
      const [d, p, w] = c, _ = t.nonScalingStroke ? { [n("vector-effect")]: "non-scaling-stroke", ...p } : p;
      return w ? [d, _, w] : [d, _];
    })
  ];
}
const ja = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const Va = /* @__PURE__ */ Symbol("lucide-context"), Ba = () => Al(Va);
var Wa = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "$$host",
  "color",
  "size",
  "width",
  "height",
  "strokeWidth",
  "absoluteStrokeWidth",
  "nonScalingStroke",
  "iconNode",
  "icon",
  "class",
  "children"
]), Ha = /* @__PURE__ */ Zl("<svg><!><!></svg>");
function ht(e, t) {
  $n(t, !0);
  const r = Ba() ?? {}, n = se(t, "color", 23, () => r.color ?? "currentColor"), i = se(t, "size", 23, () => r.size ?? 24), s = se(t, "width", 23, i), l = se(t, "height", 23, i), a = se(t, "strokeWidth", 23, () => r.strokeWidth ?? 2), o = se(t, "absoluteStrokeWidth", 23, () => r.absoluteStrokeWidth ?? !1), f = se(t, "nonScalingStroke", 23, () => r.nonScalingStroke ?? !1), u = se(t, "iconNode", 23, () => []), v = se(t, "icon", 23, () => ({ node: u(), aliases: [], size: 24 })), c = se(t, "class", 7), d = se(t, "children", 7), p = /* @__PURE__ */ vt(t, Wa), w = /* @__PURE__ */ Ve(() => !!d() || ja(p)), _ = /* @__PURE__ */ Ve(() => qa(v(), {
    color: n(),
    width: s(),
    height: l(),
    strokeWidth: a(),
    absoluteStrokeWidth: o(),
    nonScalingStroke: f(),
    // @TODO: maybe drop the extra `lucide-icon` class altogether.
    className: hn("lucide-icon", r.class),
    hasA11yProp: h(w),
    attributes: p
  })), m = /* @__PURE__ */ Ve(() => Wn(h(_), 3)), $ = /* @__PURE__ */ Ve(() => h(m)[1]), L = /* @__PURE__ */ Ve(() => tl(h(m)[2], () => [], !0)), E = /* @__PURE__ */ Ve(() => ({
    ...h($),
    class: [...h($).class.split(" "), c()]
  }));
  var Y = {
    get color() {
      return n();
    },
    set color(y = r.color ?? "currentColor") {
      n(y), Q();
    },
    get size() {
      return i();
    },
    set size(y = r.size ?? 24) {
      i(y), Q();
    },
    get width() {
      return s();
    },
    set width(y = i) {
      s(y), Q();
    },
    get height() {
      return l();
    },
    set height(y = i) {
      l(y), Q();
    },
    get strokeWidth() {
      return a();
    },
    set strokeWidth(y = r.strokeWidth ?? 2) {
      a(y), Q();
    },
    get absoluteStrokeWidth() {
      return o();
    },
    set absoluteStrokeWidth(y = r.absoluteStrokeWidth ?? !1) {
      o(y), Q();
    },
    get nonScalingStroke() {
      return f();
    },
    set nonScalingStroke(y = r.nonScalingStroke ?? !1) {
      f(y), Q();
    },
    get iconNode() {
      return u();
    },
    set iconNode(y = []) {
      u(y), Q();
    },
    get icon() {
      return v();
    },
    set icon(y = { node: u, aliases: [], size: 24 }) {
      v(y), Q();
    },
    get class() {
      return c();
    },
    set class(y) {
      c(y), Q();
    },
    get children() {
      return d();
    },
    set children(y) {
      d(y), Q();
    }
  }, G = Ha();
  li(G, () => ({ ...h(E) }));
  var S = R(G);
  Ct(S, 17, () => h(L), Xt, (y, z) => {
    var D = /* @__PURE__ */ Ve(() => Wn(h(z), 2));
    let te = () => h(D)[0], pt = () => h(D)[1];
    var qe = Ql(), _r = Gt(qe);
    wa(_r, te, !0, (qt, gr) => {
      li(qt, () => ({ ...pt() }));
    }), K(y, qe);
  });
  var A = C(S);
  return pa(A, () => d() ?? hi), M(G), K(e, G), xn(Y);
}
nt(
  ht,
  {
    color: {},
    size: {},
    width: {},
    height: {},
    strokeWidth: {},
    absoluteStrokeWidth: {},
    nonScalingStroke: {},
    iconNode: {},
    icon: {},
    class: {},
    children: {}
  },
  [],
  [],
  { mode: "open" }
);
const gs = {
  name: "arrow-down",
  size: 24,
  node: [
    ["path", { d: "M12 5v14" }],
    ["path", { d: "m19 12-7 7-7-7" }]
  ]
};
gs.node;
var Ua = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function bs(e, t) {
  let r = /* @__PURE__ */ vt(t, Ua);
  ht(e, St(() => r, {
    get icon() {
      return gs;
    }
  }));
}
nt(bs, {}, [], [], { mode: "open" });
const ws = {
  name: "arrow-up",
  size: 24,
  node: [
    ["path", { d: "m5 12 7-7 7 7" }],
    ["path", { d: "M12 19V5" }]
  ]
};
ws.node;
var Ya = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function ms(e, t) {
  let r = /* @__PURE__ */ vt(t, Ya);
  ht(e, St(() => r, {
    get icon() {
      return ws;
    }
  }));
}
nt(ms, {}, [], [], { mode: "open" });
const ys = {
  name: "list-music",
  size: 24,
  node: [
    ["path", { d: "M16 5H3" }],
    ["path", { d: "M11 12H3" }],
    ["path", { d: "M11 19H3" }],
    ["path", { d: "M21 16V5" }],
    ["circle", { cx: "18", cy: "16", r: "3" }]
  ]
};
ys.node;
var Ga = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function $s(e, t) {
  let r = /* @__PURE__ */ vt(t, Ga);
  ht(e, St(() => r, {
    get icon() {
      return ys;
    }
  }));
}
nt($s, {}, [], [], { mode: "open" });
const xs = {
  name: "play",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
      }
    ]
  ]
};
xs.node;
var Ka = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function Es(e, t) {
  let r = /* @__PURE__ */ vt(t, Ka);
  ht(e, St(() => r, {
    get icon() {
      return xs;
    }
  }));
}
nt(Es, {}, [], [], { mode: "open" });
const Ss = {
  name: "plus",
  size: 24,
  node: [["path", { d: "M5 12h14" }], ["path", { d: "M12 5v14" }]]
};
Ss.node;
var Xa = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function ks(e, t) {
  let r = /* @__PURE__ */ vt(t, Xa);
  ht(e, St(() => r, {
    get icon() {
      return Ss;
    }
  }));
}
nt(ks, {}, [], [], { mode: "open" });
const As = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34" }],
    ["circle", { cx: "11", cy: "11", r: "8" }]
  ]
};
As.node;
var Ja = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function Ts(e, t) {
  let r = /* @__PURE__ */ vt(t, Ja);
  ht(e, St(() => r, {
    get icon() {
      return As;
    }
  }));
}
nt(Ts, {}, [], [], { mode: "open" });
const Ns = {
  name: "trash",
  size: 24,
  node: [
    ["path", { d: "M10 11v6" }],
    ["path", { d: "M14 11v6" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }],
    ["path", { d: "M3 6h18" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]
  ],
  aliases: ["trash-2"]
};
Ns.node;
var Za = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function pn(e, t) {
  let r = /* @__PURE__ */ vt(t, Za);
  ht(e, St(() => r, {
    get icon() {
      return Ns;
    }
  }));
}
nt(pn, {}, [], [], { mode: "open" });
let Qa = 0;
const eo = (e) => ({ id: `mix-${Date.now()}-${++Qa}`, track: e, volume: 0.75, muted: !1 }), nr = (e) => [e.base, ...e.layers.slice(0, 3), null, null, null].slice(0, 4);
function to(e, t, r) {
  if (!Number.isInteger(t) || !Number.isInteger(r) || t < 0 || r < 0 || t > 3 || r > 3) return e;
  const n = nr(e);
  return [n[t], n[r]] = [n[r], n[t]], { base: n[0], layers: n.slice(1) };
}
function ro(e, t, r) {
  const n = nr(e), i = r === "layer" ? n.findIndex((l, a) => a > 0 && !l) : r;
  if (!Number.isInteger(i) || i < 0 || i > 3) return e;
  const s = n[i];
  return n[i] = { ...eo(t), volume: s?.volume ?? 0.75, muted: s?.muted ?? !1 }, { base: n[0], layers: n.slice(1) };
}
function no(e) {
  return [...new Set(e.map((t) => t.category?.trim() || "Uncategorized"))].sort((t, r) => t.localeCompare(r));
}
function io(e, t, r) {
  const n = r.trim().toLocaleLowerCase();
  return e.filter((i) => (!t || (i.category?.trim() || "Uncategorized") === t) && i.title.toLocaleLowerCase().includes(n));
}
function so(e, t, r) {
  if (!Number.isInteger(t) || !Number.isInteger(r) || t < 0 || r < 0 || t >= e.length || r >= e.length) return e;
  const n = [...e], [i] = n.splice(t, 1);
  return n.splice(r, 0, i), n;
}
var lo = /* @__PURE__ */ ce('<div class="choose-banner svelte-igra65" role="status"><span>Choose a track for <strong> </strong></span><button class="svelte-igra65">Cancel</button></div>'), ao = /* @__PURE__ */ ce('<p class="mix-help svelte-igra65">Set a base track, then add up to three layers. Use Play on the player to start the mix.</p><!>', 1), oi = /* @__PURE__ */ ce("<option> </option>"), oo = /* @__PURE__ */ ce('<button class="assign svelte-igra65"> </button>'), uo = /* @__PURE__ */ ce('<button class="assign svelte-igra65">Set base</button><button class="assign accent svelte-igra65">+ Layer</button>', 1), fo = /* @__PURE__ */ ce('<div class="track-actions svelte-igra65"><!></div>'), co = /* @__PURE__ */ ce('<button class="icon svelte-igra65"><!></button><button class="icon add svelte-igra65"><!></button>', 1), vo = /* @__PURE__ */ ce('<div><div class="metadata svelte-igra65"><span class="title svelte-igra65"> </span><span class="category svelte-igra65"> </span></div><!></div>'), ho = /* @__PURE__ */ ce('<p class="empty svelte-igra65"> </p>'), po = /* @__PURE__ */ ce('<select class="svelte-igra65"></select><button class="icon svelte-igra65"><!></button>', 1), _o = /* @__PURE__ */ ce('<div role="group"><span class="slot-name svelte-igra65"> </span><span class="slot-title svelte-igra65"> </span><button class="assign svelte-igra65"> </button><!></div>'), go = /* @__PURE__ */ ce('<section class="queue svelte-igra65" aria-label="Layer mix"><div class="heading svelte-igra65"><h2 class="svelte-igra65">Base + layers</h2><span class="count svelte-igra65">Drag to move or swap</span></div> <!></section>'), bo = /* @__PURE__ */ ce('<li draggable="true"><span class="position svelte-igra65"></span><button class="queue-title svelte-igra65"> </button><div class="actions svelte-igra65"><button class="icon svelte-igra65"><!></button><button class="icon svelte-igra65"><!></button><button class="icon svelte-igra65"><!></button></div></li>'), wo = /* @__PURE__ */ ce('<li class="empty svelte-igra65">Add tracks with + to build your playlist.</li>'), mo = /* @__PURE__ */ ce('<section class="queue svelte-igra65" aria-label="Playlist queue"><div class="heading svelte-igra65"><div><div class="eyebrow svelte-igra65">UP NEXT</div><h2 class="svelte-igra65"><!> Playlist queue <span class="count svelte-igra65"> </span></h2></div><button class="clear svelte-igra65">Clear</button></div> <ol class="svelte-igra65"></ol></section>'), yo = /* @__PURE__ */ ce('<div><section aria-label="Audio library"><div class="heading svelte-igra65"><div><div class="eyebrow svelte-igra65">YOUR COLLECTION</div><h2 class="svelte-igra65">Audio library</h2></div><span class="count svelte-igra65"> </span></div> <label class="mode-label svelte-igra65">Playback mode<select aria-label="Playback mode" class="svelte-igra65"><option>Single track</option><option>Playlist</option><option>Layers</option></select></label> <!> <div class="filters svelte-igra65"><label class="svelte-igra65">Category<select aria-label="Category" class="svelte-igra65"><option>All categories</option><!></select></label><label class="svelte-igra65">Search titles<div class="search svelte-igra65"><!><input aria-label="Search titles" type="search" placeholder="Find a track…" class="svelte-igra65"/></div></label></div> <div class="results svelte-igra65" aria-label="Tracks"></div></section> <!><div class="status svelte-igra65" role="status" aria-live="polite"> </div></div>');
const $o = {
  hash: "svelte-igra65",
  code: ".mix-help.svelte-igra65{font-size:12px;line-height:1.6;color:var(--muted);margin:14px 0 0}.choose-banner.svelte-igra65{display:flex;align-items:center;justify-content:space-between;padding:12px;background:var(--hover);border:1px solid var(--accent);border-radius:7px;font-size:12px;margin-top:12px}.choose-banner.svelte-igra65 button:where(.svelte-igra65){color:var(--accent);text-decoration:underline}.track-actions.svelte-igra65{display:flex;gap:5px}.assign.svelte-igra65{font-size:11px;padding:7px 9px;border:1px solid var(--line);border-radius:6px;white-space:nowrap}.assign.svelte-igra65:hover,.assign[aria-pressed=true].svelte-igra65{background:var(--hover);border-color:var(--accent)}.accent.svelte-igra65{color:var(--accent)}.choosing.svelte-igra65{box-shadow:inset 2px 0 var(--accent);background:var(--hover)}.mode-label.svelte-igra65{margin-top:16px}.mix-slot.svelte-igra65{flex-wrap:wrap;user-select:none;cursor:grab;display:flex;align-items:center;gap:10px;padding:12px 0;border-bottom:1px solid var(--line)}.slot-name.svelte-igra65{font-size:9px;color:var(--accent);width:45px}.slot-title.svelte-igra65{flex-basis:150px!important;font-size:12px;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mix-slot.svelte-igra65 select:where(.svelte-igra65){width:82px;font-size:11px}:host{display:block;width:540px;max-width:100%;font-family:Arial,Helvetica,sans-serif}.browser.svelte-igra65{--ink:#f6f8fa;--muted:#99a7b3;--accent:#00c5df;--line:#3b454e;--field:#1d252a;--hover:#2e3b42;box-sizing:border-box;min-height:480px;color:var(--ink);background:radial-gradient(ellipse at 50% 42%,#273238,#20282c 65%,#1e2529);border:1px solid #ffffff15;border-radius:12px;padding:24px;box-shadow:0 12px 24px #0003}.light.svelte-igra65{--ink:#27323b;--muted:#667684;--accent:#008fa5;--line:#d4dbe2;--field:#f2f5f7;--hover:#e9f4f6;background:linear-gradient(130deg,#fff,#fafcfd);border-color:#e3e7eb}.heading.svelte-igra65{display:flex;align-items:center;justify-content:space-between;gap:12px}.eyebrow.svelte-igra65{font-size:10px;letter-spacing:1px;color:var(--muted)}h2.svelte-igra65{display:flex;align-items:center;gap:8px;font-size:20px;margin:7px 0 0}.count.svelte-igra65{font-size:11px;color:var(--muted);font-weight:normal}.filters.svelte-igra65{display:grid;grid-template-columns:1fr 1.5fr;gap:12px;margin:22px 0 14px}label.svelte-igra65{font-size:11px;color:var(--muted);display:flex;flex-direction:column;gap:7px}select.svelte-igra65,input.svelte-igra65{box-sizing:border-box;background:var(--field);border:1px solid var(--line);color:var(--ink);border-radius:7px;height:36px;font:inherit;font-size:13px;width:100%;min-width:0}select.svelte-igra65{padding:0 10px}input.svelte-igra65{border:0;background:transparent;padding:0 8px}.search.svelte-igra65{display:flex;align-items:center;gap:4px;padding-left:10px;border:1px solid var(--line);border-radius:7px;background:var(--field)}.results.svelte-igra65{max-height:225px;overflow:auto}.row.svelte-igra65{display:flex;gap:9px;align-items:center;padding:11px 8px;border-bottom:1px solid var(--line);border-radius:5px}.row.svelte-igra65:hover,li.svelte-igra65:hover{background:var(--hover)}.active.svelte-igra65{background:var(--hover);box-shadow:inset 2px 0 var(--accent)}.metadata.svelte-igra65{display:flex;flex-direction:column;gap:5px;flex:1;min-width:0}.title.svelte-igra65{font-size:13px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.category.svelte-igra65{font-size:10px;color:var(--muted)}button.svelte-igra65{font:inherit;color:var(--ink);border:0;background:transparent;cursor:pointer}.icon.svelte-igra65{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;flex-shrink:0}.icon.svelte-igra65:hover{background:var(--line)}.add.svelte-igra65{color:var(--accent)}button.svelte-igra65:disabled{opacity:.3;cursor:default}button.svelte-igra65:focus-visible,input.svelte-igra65:focus-visible,select.svelte-igra65:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.queue.svelte-igra65{border-top:1px solid var(--line);margin-top:23px;padding-top:20px}.queue.svelte-igra65 h2:where(.svelte-igra65){font-size:16px}.clear.svelte-igra65{font-size:11px;color:var(--muted)}ol.svelte-igra65{list-style:none;padding:0;margin:14px 0 0;max-height:210px;overflow:auto}li.svelte-igra65{display:flex;align-items:center;gap:8px;padding:7px 5px;border-radius:5px}.position.svelte-igra65{color:var(--muted);font-size:11px;width:16px;text-align:center;flex-shrink:0}.queue-title.svelte-igra65{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:left;font-size:12px;padding:5px 0}.actions.svelte-igra65{display:flex;gap:1px}.empty.svelte-igra65{font-size:12px;color:var(--muted);padding:18px 5px;line-height:1.5}.status.svelte-igra65{min-height:14px;margin-top:12px;font-size:10px;color:var(--muted)}"
};
function xo(e, t) {
  $n(t, !0), ma(e, $o);
  let r = se(t, "catalog", 31, () => Je([])), n = se(t, "queue", 31, () => Je([])), i = se(t, "theme", 15, "dark"), s = se(t, "selectedUrl", 15, ""), l = se(t, "playbackMode", 15, "single"), a = se(t, "mix", 31, () => Je({ base: null, layers: [] }));
  function o(g) {
    const b = g.duration;
    return typeof b == "number" && Number.isFinite(b) && b >= 0 ? `${Math.floor(b / 60)}:${String(Math.floor(b % 60)).padStart(2, "0")}` : "—";
  }
  let f, u = /* @__PURE__ */ we(null), v = /* @__PURE__ */ we(-1);
  function c(g) {
    a(g), A("mixchange", { mix: a() }), V(Y, "Mix updated");
  }
  function d(g) {
    return g === 0 ? "base" : `layer ${g}`;
  }
  let p = /* @__PURE__ */ Ve(() => nr(a()).slice(1).every(Boolean));
  function w(g, b) {
    const I = ro(a(), g, b);
    I !== a() && (c(I), V(Y, `${g.title} assigned to ${b === "layer" ? "next empty layer" : d(b)}`), V(u, null));
  }
  Xn(() => {
    l() !== "layers" && V(u, null);
  });
  function _(g, b) {
    c(to(a(), g, b));
  }
  function m(g, b, I) {
    V(v, b, !0), g.dataTransfer?.setData("text/plain", `${I}:${b}`);
  }
  function $(g, b, I) {
    g.preventDefault();
    const [re, F] = (g.dataTransfer?.getData("text/plain") || "").split(":"), P = Number(F);
    re !== I || !Number.isInteger(P) || (I === "queue" ? te(P, b) : _(P, b), V(v, -1));
  }
  let L = /* @__PURE__ */ we(""), E = /* @__PURE__ */ we(""), Y = /* @__PURE__ */ we(""), G = /* @__PURE__ */ Ve(() => no(r())), S = /* @__PURE__ */ Ve(() => io(r(), h(L), h(E)));
  Xn(() => {
    h(L) && !h(G).includes(h(L)) && V(L, "");
  });
  function A(g, b) {
    f.dispatchEvent(new CustomEvent(g, { detail: b, bubbles: !0, composed: !0 }));
  }
  function y(g, b, I) {
    l() !== "layers" && A("trackselect", { track: g, source: b, index: I });
  }
  function z(g, b) {
    n(g), V(Y, b, !0), A("queuechange", { queue: g });
  }
  function D(g) {
    z([...n(), g], `Added ${g.title} to queue`);
  }
  function te(g, b) {
    z(so(n(), g, b), `Moved ${n()[g].title} to position ${b + 1}`);
  }
  var pt = {
    get catalog() {
      return r();
    },
    set catalog(g = []) {
      r(g), Q();
    },
    get queue() {
      return n();
    },
    set queue(g = []) {
      n(g), Q();
    },
    get theme() {
      return i();
    },
    set theme(g = "dark") {
      i(g), Q();
    },
    get selectedUrl() {
      return s();
    },
    set selectedUrl(g = "") {
      s(g), Q();
    },
    get playbackMode() {
      return l();
    },
    set playbackMode(g = "single") {
      l(g), Q();
    },
    get mix() {
      return a();
    },
    set mix(g = { base: null, layers: [] }) {
      a(g), Q();
    }
  }, qe = yo();
  let _r;
  var qt = R(qe), gr = R(qt), Cs = C(R(gr)), Os = he(Cs);
  M(gr);
  var qr = C(gr, 2), jt = C(R(qr)), jr = R(jt);
  jr.value = jr.__value = "single";
  var Vr = C(jr);
  Vr.value = Vr.__value = "playlist";
  var Ln = C(Vr);
  Ln.value = Ln.__value = "layers", M(jt), $r(jt), M(qr);
  var Rn = C(qr, 2);
  {
    var Ms = (g) => {
      var b = ao(), I = C(Gt(b));
      {
        var re = (F) => {
          var P = lo(), J = R(P), it = C(R(J)), Ke = he(it, !0);
          M(J);
          var st = C(J);
          M(P), be((je) => pe(Ke, je), [() => d(h(u))]), oe("click", st, () => V(u, null)), K(F, P);
        };
        Nt(I, (F) => {
          h(u) !== null && F(re);
        });
      }
      K(g, b);
    };
    Nt(Rn, (g) => {
      l() === "layers" && g(Ms);
    });
  }
  var Br = C(Rn, 2), Wr = R(Br), br = C(R(Wr)), Hr = R(br);
  Hr.value = Hr.__value = "";
  var Ps = C(Hr);
  Ct(Ps, 17, () => h(G), Xt, (g, b) => {
    var I = oi(), re = he(I, !0), F = {};
    be(() => {
      pe(re, h(b)), F !== (F = h(b)) && (I.value = (I.__value = F) ?? "");
    }), K(g, I);
  }), M(br), $r(br), M(Wr);
  var In = C(Wr), zn = C(R(In)), Dn = R(zn);
  Ts(Dn, { size: 16 });
  var Fn = C(Dn);
  vs(Fn), M(zn), M(In), M(Br);
  var qn = C(Br, 2);
  Ct(
    qn,
    21,
    () => h(S),
    Xt,
    (g, b, I) => {
      var re = vo();
      let F;
      var P = R(re), J = R(P), it = he(J, !0), Ke = C(J), st = he(Ke);
      M(P);
      var je = C(P);
      {
        var xe = (ne) => {
          var Ne = fo(), Ee = R(Ne);
          {
            var W = (H) => {
              var Z = oo(), Se = he(Z);
              be(
                (ve, Oe) => {
                  j(Z, "aria-label", ve), pe(Se, `Use as ${Oe ?? ""}`);
                },
                [
                  () => `Use ${h(b).title} as ${d(h(u))}`,
                  () => d(h(u))
                ]
              ), oe("click", Z, () => w(h(b), h(u))), K(H, Z);
            }, Ce = (H) => {
              var Z = uo(), Se = Gt(Z), ve = C(Se);
              be(() => {
                j(Se, "aria-label", `Set ${h(b).title} as base`), ve.disabled = h(p), j(ve, "aria-label", `Add ${h(b).title} as layer`);
              }), oe("click", Se, () => w(h(b), 0)), oe("click", ve, () => w(h(b), "layer")), K(H, Z);
            };
            Nt(Ee, (H) => {
              h(u) !== null ? H(W) : H(Ce, -1);
            });
          }
          M(Ne), K(ne, Ne);
        }, q = (ne) => {
          var Ne = co(), Ee = Gt(Ne), W = R(Ee);
          Es(W, { size: 17, fill: "currentColor" }), M(Ee);
          var Ce = C(Ee), H = R(Ce);
          ks(H, { size: 19 }), M(Ce), be(() => {
            j(Ee, "aria-label", `Play ${h(b).title}`), j(Ce, "aria-label", `Add ${h(b).title} to queue`);
          }), oe("click", Ee, () => y(h(b), "catalog", I)), oe("click", Ce, () => D(h(b))), K(ne, Ne);
        };
        Nt(je, (ne) => {
          l() === "layers" ? ne(xe) : ne(q, -1);
        });
      }
      M(re), be(
        (ne) => {
          F = Zt(re, 1, "row svelte-igra65", null, F, { active: s() === h(b).url }), j(J, "title", h(b).title), pe(it, h(b).title), pe(st, `${(h(b).category || "Uncategorized") ?? ""} · ${ne ?? ""}`);
        },
        [() => o(h(b))]
      ), K(g, re);
    },
    (g) => {
      var b = ho(), I = he(b, !0);
      be(() => pe(I, r().length ? "No tracks match your search." : "No audio tracks supplied yet.")), K(g, b);
    }
  ), M(qn), M(qt);
  var jn = C(qt, 2);
  {
    var Ls = (g) => {
      var b = go(), I = C(R(b), 2);
      Ct(I, 19, () => nr(a()), (re, F) => re?.id ?? `empty-${F}`, (re, F, P) => {
        var J = _o();
        let it;
        var Ke = R(J), st = he(Ke, !0), je = C(Ke), xe = he(je, !0), q = C(je), ne = he(q, !0), Ne = C(q);
        {
          var Ee = (W) => {
            var Ce = po(), H = Gt(Ce);
            Ct(H, 20, () => [0, 1, 2, 3], Xt, (Oe, lt) => {
              var kt = oi(), at = he(kt, !0), Vt = {};
              be(() => {
                pe(at, lt === 0 ? "Base" : `Layer ${lt}`), Vt !== (Vt = lt) && (kt.value = (kt.__value = Vt) ?? "");
              }), K(Oe, kt);
            }), M(H);
            var Z;
            $r(H);
            var Se = C(H), ve = R(Se);
            pn(ve, { size: 15 }), M(Se), be(() => {
              j(H, "aria-label", `Move ${h(P) === 0 ? "base" : `layer ${h(P)}`} to slot`), Z !== (Z = h(P)) && (H.value = (H.__value = Z) ?? "", ur(H, Z)), j(Se, "aria-label", `Remove ${h(P) === 0 ? "base" : `layer ${h(P)}`}`);
            }), oe("change", H, (Oe) => _(h(P), Number(Oe.currentTarget.value))), oe("click", Se, () => {
              const Oe = nr(a());
              Oe[h(P)] = null, c({ base: Oe[0], layers: Oe.slice(1) });
            }), K(W, Ce);
          };
          Nt(Ne, (W) => {
            h(F) && W(Ee);
          });
        }
        M(J), be(
          (W) => {
            it = Zt(J, 1, "mix-slot svelte-igra65", null, it, { choosing: h(u) === h(P) }), j(J, "aria-label", h(P) === 0 ? "Base slot" : `Layer ${h(P)} slot`), j(J, "draggable", !!h(F)), pe(st, h(P) === 0 ? "BASE" : `LAYER ${h(P)}`), pe(xe, h(F)?.track.title ?? "Empty slot"), j(q, "aria-label", W), j(q, "aria-pressed", h(u) === h(P)), pe(ne, h(F) ? "Replace" : "Choose");
          },
          [
            () => `${h(F) ? "Replace" : "Choose"} ${d(h(P))}`
          ]
        ), Tt("dragstart", J, (W) => m(W, h(P), "mix")), Tt("dragover", J, (W) => W.preventDefault()), Tt("drop", J, (W) => $(W, h(P), "mix")), oe("click", q, () => {
          V(u, h(P), !0), V(Y, `Choose a track for ${d(h(P))} from the list above`);
        }), K(re, J);
      }), M(b), K(g, b);
    }, Rs = (g) => {
      var b = mo(), I = R(b), re = R(I), F = C(R(re)), P = R(F);
      $s(P, { size: 19 });
      var J = C(P, 2), it = he(J, !0);
      M(F), M(re);
      var Ke = C(re);
      M(I);
      var st = C(I, 2);
      Ct(
        st,
        21,
        n,
        Xt,
        (je, xe, q) => {
          var ne = bo();
          let Ne;
          var Ee = R(ne);
          Ee.textContent = q + 1;
          var W = C(Ee), Ce = he(W, !0), H = C(W), Z = R(H);
          Z.disabled = q === 0, j(Z, "aria-label", `Move queue item ${q + 1} up`);
          var Se = R(Z);
          ms(Se, { size: 15 }), M(Z);
          var ve = C(Z);
          j(ve, "aria-label", `Move queue item ${q + 1} down`);
          var Oe = R(ve);
          bs(Oe, { size: 15 }), M(ve);
          var lt = C(ve);
          j(lt, "aria-label", `Remove queue item ${q + 1}`);
          var kt = R(lt);
          pn(kt, { size: 15 }), M(lt), M(H), M(ne), be(() => {
            Ne = Zt(ne, 1, "svelte-igra65", null, Ne, { active: s() === h(xe).url }), j(W, "title", h(xe).title), j(W, "aria-label", `Play queue item ${q + 1}: ${h(xe).title}`), pe(Ce, h(xe).title), ve.disabled = q === n().length - 1;
          }), Tt("dragstart", ne, (at) => m(at, q, "queue")), Tt("dragover", ne, (at) => at.preventDefault()), Tt("drop", ne, (at) => $(at, q, "queue")), oe("click", W, () => y(h(xe), "queue", q)), oe("click", Z, () => te(q, q - 1)), oe("click", ve, () => te(q, q + 1)), oe("click", lt, () => z(n().filter((at, Vt) => Vt !== q), `Removed ${h(xe).title}`)), K(je, ne);
        },
        (je) => {
          var xe = wo();
          K(je, xe);
        }
      ), M(st), M(b), be(() => {
        pe(it, n().length), Ke.disabled = !n().length;
      }), oe("click", Ke, () => z([], "Queue cleared")), K(g, b);
    };
    Nt(jn, (g) => {
      l() === "layers" ? g(Ls) : g(Rs, -1);
    });
  }
  var Is = C(jn), zs = he(Is, !0);
  return M(qe), Pa(qe, (g) => f = g, () => f), be(() => {
    _r = Zt(qe, 1, "browser svelte-igra65", null, _r, { light: i() === "light" }), pe(Os, `${r().length ?? ""} tracks`), pe(zs, h(Y));
  }), oe("change", jt, () => A("modechange", { mode: l() })), ii(jt, l), ii(br, () => h(L), (g) => V(L, g)), Ma(Fn, () => h(E), (g) => V(E, g)), K(e, qe), xn(pt);
}
ns(["change", "click"]);
customElements.define("compact-audio-browser", nt(
  xo,
  {
    catalog: { type: "Array" },
    queue: { type: "Array" },
    theme: { type: "String" },
    selectedUrl: { type: "String" },
    playbackMode: { type: "String" },
    mix: { type: "Object" }
  },
  [],
  [],
  { mode: "open" }
));
