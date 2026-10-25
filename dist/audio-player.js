typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const qs = 1, Ys = 2, Gs = 16, Ks = 1, Xs = 4, Js = 8, Zs = 16, Qs = 2, ii = "[", un = "[!", Fn = "[?", fn = "]", Ke = {}, W = /* @__PURE__ */ Symbol("uninitialized"), si = "http://www.w3.org/1999/xhtml", el = "http://www.w3.org/2000/svg", tl = "@attach", li = !1;
var mr = Array.isArray, rl = Array.prototype.indexOf, qt = Array.prototype.includes, wr = Array.from, dr = Object.keys, Yt = Object.defineProperty, Ie = Object.getOwnPropertyDescriptor, nl = Object.getOwnPropertyDescriptors, il = Object.prototype, sl = Array.prototype, ai = Object.getPrototypeOf, jn = Object.isExtensible;
function Ct(e) {
  return typeof e == "function";
}
const oi = () => {
};
function ll(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ui() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function al(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function Vn(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const re = 2, yt = 4, yr = 8, cn = 1 << 24, we = 16, ke = 32, De = 64, Ur = 128, dn = 256, $e = 512, U = 1024, V = 2048, pe = 4096, ae = 8192, X = 16384, ot = 32768, Gt = 1 << 25, Xe = 65536, hr = 1 << 17, ol = 1 << 18, ut = 1 << 19, ul = 1 << 20, Le = 1 << 25, vr = 1 << 21, mt = 1 << 22, Ye = 1 << 23, Ge = /* @__PURE__ */ Symbol("$state"), fi = /* @__PURE__ */ Symbol("component"), hn = /* @__PURE__ */ Symbol("legacy props"), fl = /* @__PURE__ */ Symbol(""), ci = /* @__PURE__ */ Symbol("attributes"), qr = /* @__PURE__ */ Symbol("class"), Yr = /* @__PURE__ */ Symbol("style"), Gr = /* @__PURE__ */ Symbol("text"), Wt = /* @__PURE__ */ Symbol("form reset"), Jt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Zt = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), cl = 1, xr = 3, Qt = 8;
function dl() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function $r(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function hl() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function vl() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let $ = !1;
function ce(e) {
  $ = e;
}
let M;
function te(e) {
  if (e === null)
    throw $r(), Ke;
  return M = e;
}
function xt() {
  return te(/* @__PURE__ */ Oe(M));
}
function se(e) {
  if ($) {
    if (/* @__PURE__ */ Oe(M) !== null)
      throw $r(), Ke;
    M = e;
  }
}
function di(e = 1) {
  if ($) {
    for (var t = e, r = M; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Oe(r);
    M = r;
  }
}
function pr(e = !0) {
  for (var t = 0, r = M; ; ) {
    if (r.nodeType === Qt) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === fn) {
        if (t === 0) return r;
        t -= 1;
      } else (n === ii || n === un || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Oe(r)
    );
    e && r.remove(), r = i;
  }
}
function vn(e) {
  if (!e || e.nodeType !== Qt)
    throw $r(), Ke;
  return (
    /** @type {Comment} */
    e.data
  );
}
function hi(e) {
  return e === this.v;
}
function pl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function vi(e) {
  return !pl(e, this.v);
}
function pi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function _l() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function gl(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function bl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ml() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function wl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function yl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function xl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function $l(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function kl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function El() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Sl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Tl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let Al = !1;
function Nl(e) {
  let t = e.p;
  for (; t !== null && t.c === null; )
    t = t.p;
  return t?.c ?? null;
}
function Ml(e, t) {
  return e === null && pi(), e.c ??= new Map(Nl(e) || void 0);
}
let J = null;
function $t(e) {
  J = e;
}
function Cl(e) {
  return (
    /** @type {T} */
    Ml(J).get(e)
  );
}
function pn(e, t = !1, r) {
  J = {
    p: J,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      C
    ),
    l: null
  };
}
function _n(e) {
  var t = (
    /** @type {ComponentContext} */
    J
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      ji(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, J = t.p, gn(e);
}
function gn(e = {}) {
  return Yt(e, fi, { value: !0 }), e;
}
function _i() {
  return !0;
}
let nt = [];
function gi() {
  var e = nt;
  nt = [], ll(e);
}
function Ae(e) {
  if (nt.length === 0 && !Bt) {
    var t = nt;
    queueMicrotask(() => {
      t === nt && gi();
    });
  }
  nt.push(e);
}
function Ol() {
  for (; nt.length > 0; )
    gi();
}
const Pl = -7169;
function F(e, t) {
  e.f = e.f & Pl | t;
}
function bn(e) {
  (e.f & $e) !== 0 || e.deps === null ? F(e, U) : F(e, pe);
}
function bi(e, t, r) {
  (e.f & V) !== 0 ? t.add(e) : (e.f & pe) !== 0 && r.add(e), F(e, U);
}
function Ll(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Ae(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Wn = !1;
function mi() {
  Wn || (Wn = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t[Wt]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function wi(e, t, r, n = !0) {
  n && r();
  for (var i of t)
    e.addEventListener(i, r);
  er(() => {
    for (var s of t)
      e.removeEventListener(s, r);
  });
}
function St(e) {
  var t = O, r = C;
  ge(null), Ce(null);
  try {
    return e();
  } finally {
    ge(t), Ce(r);
  }
}
function yi(e, t, r, n = r) {
  e.addEventListener(t, () => St(r));
  const i = (
    /** @type {any} */
    e[Wt]
  );
  i ? e[Wt] = () => {
    i(), n(!0);
  } : e[Wt] = () => n(!0), mi();
}
function xi(e, t, r, n) {
  const i = Kt;
  var s = e.filter((p) => !p.settled), a = t.map(i);
  if (r.length === 0 && s.length === 0) {
    n(a);
    return;
  }
  var l = (
    /** @type {Effect} */
    C
  ), o = Rl(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((p) => p.promise)) : null;
  function c(p) {
    if ((l.f & X) === 0) {
      o();
      try {
        n([...a, ...p]);
      } catch (d) {
        Te(d, l);
      }
      _r();
    }
  }
  var h = $i();
  if (r.length === 0) {
    u.then(() => c([])).finally(h);
    return;
  }
  function v() {
    Promise.all(r.map((p) => /* @__PURE__ */ Il(p))).then(c).catch((p) => Te(p, l)).finally(h);
  }
  u ? u.then(() => {
    if ((l.f & X) !== 0) {
      h();
      return;
    }
    o(), v(), _r();
  }) : v();
}
function Rl() {
  var e = (
    /** @type {Effect} */
    C
  ), t = O, r = J, n = (
    /** @type {Batch} */
    A
  );
  return function(s = !0) {
    Ce(e), ge(t), $t(r), s && (e.f & X) === 0 && (n?.activate(), n?.apply());
  };
}
function _r(e = !0) {
  Ce(null), ge(null), $t(null), e && A?.deactivate();
}
function $i() {
  var e = (
    /** @type {Effect} */
    C
  ), t = e.b, r = (
    /** @type {Batch} */
    A
  ), n = !!t?.is_rendered();
  return t?.update_pending_count(1, r), r.increment(n, e), () => {
    t?.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
  var t = re | V;
  return C !== null && (C.f |= ut), {
    ctx: J,
    deps: null,
    effects: null,
    equals: hi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      W
    ),
    wv: 0,
    parent: C,
    ac: null
  };
}
const Dt = /* @__PURE__ */ Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function Il(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    C
  );
  n === null && _l();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = at(
    /** @type {V} */
    W
  ), a = !O, l = /* @__PURE__ */ new Set();
  return Yl(() => {
    var o = (
      /** @type {Effect} */
      C
    ), u = ui();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, (p) => {
        p !== Jt && u.reject(p);
      }).finally(_r);
    } catch (p) {
      u.reject(p), _r();
    }
    var c = (
      /** @type {Batch} */
      A
    );
    if (a) {
      if ((o.f & ot) !== 0)
        var h = $i();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        n.b?.is_rendered()
      )
        c.async_deriveds.get(o)?.reject(Dt);
      else
        for (const p of l.values())
          p.reject(Dt);
      l.add(u), c.async_deriveds.set(o, u);
    }
    const v = (p, d = void 0) => {
      h?.(), l.delete(u), d !== Dt && (c.activate(), d ? (s.f |= Ye, kt(s, d)) : ((s.f & Ye) !== 0 && (s.f ^= Ye), kt(s, p)), c.deactivate());
    };
    u.promise.then(v, (p) => v(null, p || "unknown"));
  }), er(() => {
    for (const o of l)
      o.reject(Dt);
  }), new Promise((o) => {
    function u(c) {
      function h() {
        c === i ? o(s) : u(i);
      }
      c.then(h, h);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  const t = /* @__PURE__ */ Kt(e);
  return qi(t), t;
}
// @__NO_SIDE_EFFECTS__
function ki(e) {
  const t = /* @__PURE__ */ Kt(e);
  return t.equals = vi, t;
}
function zl(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Y(
        /** @type {Effect} */
        t[r]
      );
  }
}
function mn(e) {
  var t, r = C, n = e.parent;
  if (!Ve && n !== null && e.v !== W && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (X | ae)) !== 0)
    return dl(), e.v;
  Ce(n);
  try {
    zl(e), t = Xi(e);
  } finally {
    Ce(r);
  }
  return t;
}
function Ei(e) {
  var t = mn(e);
  if (!e.equals(t) && (e.wv = Gi(), (!A?.is_fork || e.deps === null) && (A !== null ? (A.capture(e, t, !0), wt?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    F(e, U);
    return;
  }
  Ve || (ye !== null ? ($n() || A?.is_fork) && ye.set(e, t) : bn(e));
}
function Dl(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && St(() => {
        t.ac.abort(Jt), t.ac = null;
      }), t.fn !== null && (t.teardown = oi), Xt(t, 0), kn(t));
}
function Si(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && Et(t);
}
let Lr = null, bt = null, A = null, wt = null, ye = null, Kr = null, Bt = !1, Rr = !1, Ht = null, or = null;
var Bn = 0;
let Fl = 1;
class Fe {
  id = Fl++;
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
    bt === null ? Lr = bt = this : (bt.#r = this, this.#t = bt), bt = this;
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
        F(i, V), r(i);
      for (i of n.m)
        F(i, pe), r(i);
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
    for (const s of this.#s)
      if (!((s.f & X) !== 0 || (s.f & (V | pe)) === 0)) {
        for (var r = s, n = !1; r.parent !== null; ) {
          r = r.parent;
          var i = r.f;
          if ((i & (De | ke)) !== 0) {
            if ((i & U) === 0) {
              n = !0;
              break;
            }
            r.f ^= U;
          }
        }
        n || t.push(r);
      }
    return this.#s = [], t;
  }
  #b() {
    this.#e = !0;
    for (const l of this.#u)
      this.#f.delete(l), F(l, V), this.schedule(l);
    for (const l of this.#f)
      F(l, pe), this.schedule(l);
    this.apply();
    for (var t = Ht = [], r = [], n = or = []; this.#s.length > 0; ) {
      Bn++ > 1e3 && (this.#p(), jl());
      for (const l of this.#x())
        try {
          this.#m(l, t, r);
        } catch (o) {
          throw Ni(l), this.#y() || this.discard(), o;
        }
    }
    if (A = null, n.length > 0) {
      var i = Fe.ensure();
      for (const l of n)
        i.schedule(l);
    }
    if (Ht = null, or = null, this.#y()) {
      this.#v(r), this.#v(t);
      for (const [l, o] of this.#d)
        Ai(l, o);
      n.length > 0 && /** @type {unknown} */
      A.#b();
      return;
    }
    const s = this.#h();
    if (s) {
      this.#v(r), this.#v(t), s.#$(this);
      return;
    }
    this.#u.clear(), this.#f.clear();
    for (const l of this.#o) l(this);
    this.#o.clear(), wt = this, Hn(r), Hn(t), wt = null, this.#a?.resolve();
    var a = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      A
    );
    if (this.#l === 0 && (this.#s.length === 0 || a !== null) && this.#p(), this.#s.length > 0)
      if (a !== null) {
        for (const l of this.#s)
          a.#s.push(l);
        this.#s = [];
      } else
        a = this;
    a !== null && (Ne.clear(), a.#b());
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #m(t, r, n) {
    t.f ^= U;
    for (var i = t.first; i !== null; ) {
      var s = i.f, a = (s & (ke | De)) !== 0, l = a && (s & U) !== 0, o = l || (s & ae) !== 0 || this.#d.has(i);
      if (!o && i.fn !== null) {
        a ? i.f ^= U : (s & yt) !== 0 ? r.push(i) : rr(i) && ((s & we) !== 0 && this.#f.add(i), Et(i));
        var u = i.first;
        if (u !== null) {
          i = u;
          continue;
        }
      }
      for (; i !== null; ) {
        var c = i.next;
        if (c !== null) {
          i = c;
          break;
        }
        i = i.parent;
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
  #$(t) {
    for (const [n, i] of t.current)
      !this.previous.has(n) && t.previous.has(n) && this.previous.set(n, t.previous.get(n)), this.current.set(n, i);
    for (const [n, i] of t.async_deriveds) {
      const s = this.async_deriveds.get(n);
      s && i.promise.then(s.resolve).catch(s.reject);
    }
    t.async_deriveds.clear(), this.transfer_effects(t.#u, t.#f);
    const r = (n) => {
      var i = n.reactions;
      if (i !== null && !((n.f & re) !== 0 && (n.f & (V | pe)) === 0))
        for (const l of i) {
          var s = l.f;
          if ((s & re) !== 0)
            r(
              /** @type {Derived} */
              l
            );
          else {
            var a = (
              /** @type {Effect} */
              l
            );
            s & (mt | we) && !this.async_deriveds.has(a) && (this.#f.delete(a), F(a, V), this.schedule(a));
          }
        }
    };
    for (const n of this.current.keys())
      r(n);
    this.oncommit(() => t.discard()), t.#p(), A = this, this.#b();
  }
  /**
   * @param {Effect[]} effects
   */
  #v(t) {
    for (var r = 0; r < t.length; r += 1)
      bi(t[r], this.#u, this.#f);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== W && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ye) === 0 && (this.current.set(t, [r, n]), ye?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    A = this;
  }
  deactivate() {
    A = null, ye = null;
  }
  flush() {
    try {
      Rr = !0, A = this, this.#b();
    } finally {
      Bn = 0, Kr = null, Ht = null, or = null, Rr = !1, A = null, ye = null, Ne.clear();
    }
  }
  discard() {
    for (const t of this.#i) t(this);
    this.#i.clear();
    for (const t of this.async_deriveds.values())
      t.reject(Dt);
    this.#p(), this.#a?.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    this.#_.push(t);
  }
  #w() {
    for (let h = Lr; h !== null; h = h.#r) {
      var t = h.id < this.id, r = [];
      for (const [v, [p, d]] of this.current) {
        if (h.current.has(v)) {
          var n = (
            /** @type {[any, boolean]} */
            h.current.get(v)[0]
          );
          if (t && p !== n)
            h.current.set(v, [p, d]);
          else
            continue;
        }
        r.push(v);
      }
      if (t)
        for (const [v, p] of this.async_deriveds) {
          const d = h.async_deriveds.get(v);
          d && p.promise.then(d.resolve).catch(d.reject);
        }
      var i = [...h.current.keys()].filter(
        (v) => !/** @type {[any, boolean]} */
        h.current.get(v)[1]
      );
      if (!(!h.#e || i.length === 0)) {
        var s = i.filter((v) => !this.current.has(v));
        if (s.length === 0)
          t && h.discard();
        else if (r.length > 0) {
          if (t)
            for (const v of this.#g)
              h.unskip_effect(v, (p) => {
                (p.f & (we | mt)) !== 0 ? h.schedule(p) : h.#v([p]);
              });
          h.activate();
          var a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
          for (var o of r)
            Ti(o, s, a, l);
          l = /* @__PURE__ */ new Map();
          var u = [...h.current].filter(([v, p]) => {
            const d = this.current.get(v);
            return d ? d[0] !== p[0] || d[1] !== p[1] : !0;
          }).map(([v]) => v);
          if (u.length > 0)
            for (const v of this.#_)
              (v.f & (X | ae | hr)) === 0 && wn(v, u, l) && ((v.f & (mt | we)) !== 0 ? (F(v, V), h.schedule(v)) : h.#u.add(v));
          if (h.#s.length > 0 && !h.#c) {
            h.apply();
            for (var c of h.#x())
              h.#m(c, [], []);
          }
          h.deactivate();
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
    this.#c || (this.#c = !0, Ae(() => {
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
    return (this.#a ??= ui()).promise;
  }
  static ensure() {
    if (A === null) {
      const t = A = new Fe();
      !Rr && !Bt && Ae(() => {
        t.#e || t.flush();
      });
    }
    return A;
  }
  apply() {
    {
      ye = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Kr = t, t.b?.is_pending && (t.f & (yt | yr | cn)) !== 0 && (t.f & ot) === 0) {
      t.b.defer_effect(t);
      return;
    }
    this.#s.push(t);
  }
  #p() {
    if (this.linked) {
      var t = this.#t, r = this.#r;
      t === null ? Lr = r : t.#r = r, r === null ? bt = t : r.#t = t, this.linked = !1;
    }
  }
}
function q(e) {
  var t = Bt, r = wt;
  wt = null, Bt = !0;
  try {
    for (var n; ; ) {
      if (Ol(), A === null)
        return (
          /** @type {T} */
          n
        );
      A.flush();
    }
  } finally {
    Bt = t, wt = r;
  }
}
function jl() {
  try {
    yl();
  } catch (e) {
    Te(e, Kr);
  }
}
let Pe = null;
function Hn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (X | ae)) === 0 && rr(n) && (Pe = /* @__PURE__ */ new Set(), Et(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Bi(n), Pe?.size > 0)) {
        Ne.clear();
        for (const i of Pe) {
          if ((i.f & (X | ae)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            Pe.has(a) && (Pe.delete(a), s.push(a)), a = a.parent;
          for (let l = s.length - 1; l >= 0; l--) {
            const o = s[l];
            (o.f & (X | ae)) === 0 && Et(o);
          }
        }
        Pe.clear();
      }
    }
    Pe = null;
  }
}
function Ti(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & re) !== 0 ? Ti(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (mt | we)) !== 0 && (s & V) === 0 && wn(i, t, n) && (F(i, V), yn(
        /** @type {Effect} */
        i
      ));
    }
}
function wn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (qt.call(t, i))
        return !0;
      if ((i.f & re) !== 0 && wn(
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
function yn(e) {
  A.schedule(e);
}
function Ai(e, t) {
  if (!((e.f & ke) !== 0 && (e.f & U) !== 0)) {
    (e.f & V) !== 0 ? t.d.push(e) : (e.f & pe) !== 0 && t.m.push(e), F(e, U);
    for (var r = e.first; r !== null; )
      Ai(r, t), r = r.next;
  }
}
function Ni(e) {
  F(e, U);
  for (var t = e.first; t !== null; )
    Ni(t), t = t.next;
}
let gr = /* @__PURE__ */ new Set();
const Ne = /* @__PURE__ */ new Map();
let Mi = !1;
function at(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: hi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function z(e, t) {
  const r = at(e);
  return qi(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ci(e, t = !1, r = !0) {
  const n = at(e);
  return t || (n.equals = vi), n;
}
function y(e, t, r = !1) {
  O !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!xe || (O.f & hr) !== 0) && _i() && (O.f & (re | we | mt | hr)) !== 0 && (Me === null || !Me.has(e)) && Sl();
  let n = r ? Re(t) : t;
  return kt(e, n, or);
}
var rt = null, Xr = 0;
function kt(e, t, r = null) {
  if (!e.equals(t)) {
    Ve ? Ne.set(e, t) : Ne.has(e) || Ne.set(e, e.v);
    var n = Fe.ensure();
    if (n.capture(e, t), (e.f & re) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & V) !== 0 && mn(i), ye === null && bn(i);
    }
    e.wv = Gi(), rt = null, Xr = 0, Oi(e, V, r), rt = null, C !== null && (C.f & U) !== 0 && (C.f & (ke | De)) === 0 && (he === null ? Xl([e]) : he.push(e)), !n.is_fork && gr.size > 0 && !Mi && Vl();
  }
  return t;
}
function Vl() {
  Mi = !1;
  for (const e of gr) {
    (e.f & U) !== 0 && F(e, pe);
    let t;
    try {
      t = rr(e);
    } catch {
      t = !0;
    }
    t && Et(e);
  }
  gr.clear();
}
function Ut(e) {
  y(e, e.v + 1);
}
function Oi(e, t, r) {
  var n = e.reactions;
  if (n !== null) {
    var i = n.length;
    if (Xr += i, Xr > 1e5 && rt === null && (rt = /* @__PURE__ */ new Set()), rt !== null) {
      if (rt.has(e)) return;
      rt.add(e);
    }
    for (var s = 0; s < i; s++) {
      var a = n[s], l = a.f, o = (l & V) === 0;
      if (o && F(a, t), (l & hr) !== 0)
        gr.add(
          /** @type {Effect} */
          a
        );
      else if ((l & re) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        ye?.delete(u), Oi(u, pe, r);
      } else if (o) {
        var c = (
          /** @type {Effect} */
          a
        );
        (l & we) !== 0 && Pe !== null && Pe.add(c), r !== null ? r.push(c) : yn(c);
      }
    }
  }
}
function Re(e) {
  if (typeof e != "object" || e === null || Ge in e || fi in e)
    return e;
  const t = ai(e);
  if (t !== il && t !== sl)
    return e;
  var r = /* @__PURE__ */ new Map(), n = mr(e), i = /* @__PURE__ */ z(0), s = lt, a = (l) => {
    if (lt === s)
      return l();
    var o = O, u = lt;
    ge(null), Gn(s);
    var c = l();
    return ge(o), Gn(u), c;
  };
  return n && r.set("length", /* @__PURE__ */ z(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && kl();
        var c = r.get(o);
        return c === void 0 ? a(() => {
          var h = /* @__PURE__ */ z(u.value);
          return r.set(o, h), h;
        }) : y(c, u.value, !0), !0;
      },
      deleteProperty(l, o) {
        var u = r.get(o);
        if (u === void 0) {
          if (o in l) {
            const c = a(() => /* @__PURE__ */ z(W));
            r.set(o, c), Ut(i);
          }
        } else
          y(u, W), Ut(i);
        return !0;
      },
      get(l, o, u) {
        if (o === Ge)
          return e;
        var c = r.get(o), h = o in l;
        if (c === void 0 && (!h || Ie(l, o)?.writable) && (c = a(() => {
          var p = Re(h ? l[o] : W), d = /* @__PURE__ */ z(p);
          return d;
        }), r.set(o, c)), c !== void 0) {
          var v = f(c);
          return v === W ? void 0 : v;
        }
        return Reflect.get(l, o, u);
      },
      getOwnPropertyDescriptor(l, o) {
        this.has?.(l, o);
        var u = Reflect.getOwnPropertyDescriptor(l, o), c = r.get(o);
        if (c !== void 0) {
          var h = f(c);
          if (h === W)
            return;
          if (u && "value" in u)
            u.value = h;
          else
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(l, o) {
        if (o === Ge)
          return !0;
        var u = r.get(o), c = u !== void 0 && u.v !== W || Reflect.has(l, o);
        if (u !== void 0 || C !== null && (!c || Ie(l, o)?.writable)) {
          u === void 0 && (u = a(() => {
            var v = c ? Re(l[o]) : W, p = /* @__PURE__ */ z(v);
            return p;
          }), r.set(o, u));
          var h = f(u);
          if (h === W)
            return !1;
        }
        return c;
      },
      set(l, o, u, c) {
        var h = r.get(o), v = o in l;
        if (n && o === "length")
          for (var p = u; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var d = r.get(p + "");
            d !== void 0 ? y(d, W) : p in l && (d = a(() => /* @__PURE__ */ z(W)), r.set(p + "", d));
          }
        if (h === void 0)
          (!v || Ie(l, o)?.writable) && (h = a(() => /* @__PURE__ */ z(void 0)), y(h, Re(u)), r.set(o, h));
        else {
          v = h.v !== W;
          var g = a(() => Re(u));
          y(h, g);
        }
        var T = Reflect.getOwnPropertyDescriptor(l, o);
        if (T?.set && T.set.call(c, u), !v) {
          if (n && typeof o == "string") {
            var w = (
              /** @type {Source<number>} */
              r.get("length")
            ), b = Number(o);
            Number.isInteger(b) && b >= w.v && y(w, b + 1);
          }
          Ut(i);
        }
        return !0;
      },
      ownKeys(l) {
        f(i);
        var o = Reflect.ownKeys(l).filter((h) => {
          var v = r.get(h);
          return v === void 0 || v.v !== W;
        });
        for (var [u, c] of r)
          c.v !== W && !(u in l) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        El();
      }
    }
  );
}
function Un(e) {
  try {
    if (e !== null && typeof e == "object" && Ge in e)
      return e[Ge];
  } catch {
  }
  return e;
}
function Pi(e, t) {
  return Object.is(Un(e), Un(t));
}
var qn, Li, Ri, Ii;
function Jr() {
  if (qn === void 0) {
    qn = window, Li = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Ri = Ie(t, "firstChild").get, Ii = Ie(t, "nextSibling").get, jn(e) && (e[qr] = void 0, e[ci] = null, e[Yr] = void 0, e.__e = void 0), jn(r) && (r[Gr] = void 0);
  }
}
function _e(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function je(e) {
  return (
    /** @type {TemplateNode | null} */
    Ri.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  return (
    /** @type {TemplateNode | null} */
    Ii.call(e)
  );
}
function le(e, t) {
  if (!$)
    return /* @__PURE__ */ je(e);
  var r = /* @__PURE__ */ je(M);
  if (r === null)
    r = M.appendChild(_e());
  else if (t && r.nodeType !== xr) {
    var n = _e();
    return r?.before(n), te(n), n;
  }
  return t && xn(
    /** @type {Text} */
    r
  ), te(r), r;
}
function zi(e, t = !1) {
  if (!$) {
    var r = /* @__PURE__ */ je(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Oe(r) : r;
  }
  if (t) {
    if (M?.nodeType !== xr) {
      var n = _e();
      return M?.before(n), te(n), n;
    }
    xn(
      /** @type {Text} */
      M
    );
  }
  return M;
}
function Ot(e, t = !1) {
  if (!$)
    return /* @__PURE__ */ je(e);
  var r = le(e, t);
  return se(e), r;
}
function H(e, t = 1, r = !1) {
  let n = $ ? M : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Oe(n);
  if (!$)
    return n;
  if (r) {
    if (n?.nodeType !== xr) {
      var s = _e();
      return n === null ? i?.after(s) : n.before(s), te(s), s;
    }
    xn(
      /** @type {Text} */
      n
    );
  }
  return te(n), n;
}
function Di(e) {
  e.textContent = "";
}
function Fi() {
  return !1;
}
function kr(e, t, r) {
  return t == null || t === si ? (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElement(e)
  ) : (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t, e)
  );
}
function xn(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === xr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function Wl(e) {
  var t = C;
  if (t === null)
    return O.f |= Ye, e;
  if ((t.f & ot) === 0 && (t.f & yt) === 0)
    throw e;
  Te(e, t);
}
function Te(e, t) {
  if (e === Ke)
    throw e;
  if (!(t !== null && (t.f & X) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & Ur) !== 0 && (t.f & (X | Gt)) === 0) {
        if ((t.f & ot) === 0)
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
function Bl(e) {
  C === null && (O === null && wl(), ml()), Ve && bl();
}
function Hl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ee(e, t) {
  var r = C;
  r !== null && (r.f & ae) !== 0 && (e |= ae);
  var n = {
    ctx: J,
    deps: null,
    nodes: null,
    f: e | V | $e,
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
  A?.register_created_effect(n);
  var i = n;
  if ((e & yt) !== 0)
    Ht !== null ? Ht.push(n) : Fe.ensure().schedule(n);
  else if (t !== null) {
    try {
      Et(n);
    } catch (a) {
      throw Y(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & ut) === 0 && (i = i.first, (e & we) !== 0 && (e & Xe) !== 0 && i !== null && (i.f |= Xe));
  }
  if (i !== null && (i.parent = r, r !== null && Hl(i, r), O !== null && (O.f & re) !== 0 && (e & De) === 0)) {
    var s = (
      /** @type {Derived} */
      O
    );
    (s.effects ??= []).push(i);
  }
  return n;
}
function $n() {
  return O !== null && !xe;
}
function er(e) {
  const t = Ee(yr, null);
  return F(t, U), t.teardown = e, t;
}
function ur(e) {
  Bl();
  var t = (
    /** @type {Effect} */
    C.f
  ), r = !O && (t & ke) !== 0 && J !== null && !J.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      J
    );
    (n.e ??= []).push(e);
  } else
    return ji(e);
}
function ji(e) {
  return Ee(yt | ul, e);
}
function Ul(e) {
  Fe.ensure();
  const t = Ee(De | ut, e);
  return () => {
    Y(t);
  };
}
function ql(e) {
  Fe.ensure();
  const t = Ee(De | ut, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? st(t, () => {
      Y(t), n(void 0);
    }) : (Y(t), n(void 0));
  });
}
function Er(e) {
  return Ee(yt, e);
}
function Yl(e) {
  return Ee(mt | ut, e);
}
function ft(e, t = 0) {
  return Ee(yr | t, e);
}
function Pt(e, t = [], r = [], n = []) {
  xi(n, t, r, (i) => {
    Ee(yr, () => {
      e(...i.map(f));
    });
  });
}
function tr(e, t = 0) {
  var r = Ee(we | t, e);
  return r;
}
function Vi(e, t = 0) {
  var r = Ee(cn | t, e);
  return r;
}
function oe(e) {
  return Ee(ke | ut, e);
}
function Wi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Ve, n = O;
    Yn(!0), ge(null);
    try {
      t.call(null);
    } catch (i) {
      Te(i, e.parent);
    } finally {
      Yn(r), ge(n);
    }
  }
}
function kn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && St(() => {
      i.abort(Jt);
    });
    var n = r.next;
    (r.f & De) !== 0 ? r.parent = null : Y(r, t), r = n;
  }
}
function Gl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ke) === 0 && Y(t), t = r;
  }
}
function Y(e, t = !0) {
  var r = !1;
  (t || (e.f & ol) !== 0) && e.nodes !== null && e.nodes.end !== null && (Kl(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), e.f |= Gt, kn(e, t && !r), Xt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Wi(e), e.f ^= Gt, e.f |= X;
  var i = e.parent;
  i !== null && i.first !== null && Bi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Kl(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Oe(e);
    e.remove(), e = r;
  }
}
function Bi(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function st(e, t, r = !0) {
  var n = [];
  e.f |= dn, Hi(e, n, !0);
  var i = () => {
    r && Y(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var l of n)
      l.out(a);
  } else
    i();
}
function Hi(e, t, r) {
  if ((e.f & ae) === 0) {
    e.f ^= ae;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & De) === 0) {
        var a = (i.f & Xe) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & ke) !== 0 && (e.f & we) !== 0;
        Hi(i, t, a ? r : !1);
      }
      i = s;
    }
  }
}
function br(e) {
  e.f &= ~dn, Ui(e, !0);
}
function Ui(e, t) {
  if ((e.f & dn) === 0 && (e.f & ae) !== 0) {
    e.f ^= ae, (e.f & U) === 0 && (F(e, V), Fe.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Xe) !== 0 || (r.f & ke) !== 0;
      Ui(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function En(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Oe(r);
      t.append(r), r = i;
    }
}
let Ve = !1;
function Yn(e) {
  Ve = e;
}
let O = null, xe = !1;
function ge(e) {
  O = e;
}
let C = null;
function Ce(e) {
  C = e;
}
let Me = null;
function qi(e) {
  O !== null && ((O.f & vr) !== 0 || (O.f & re) !== 0) && (Me ??= /* @__PURE__ */ new Set()).add(e);
}
let ue = null, fe = 0, he = null;
function Xl(e) {
  he = e;
}
let Yi = 1, it = 0, lt = it;
function Gn(e) {
  lt = e;
}
function Gi() {
  return ++Yi;
}
function rr(e) {
  var t = e.f;
  if ((t & V) !== 0)
    return !0;
  if ((t & pe) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (rr(
        /** @type {Derived} */
        s
      ) && Ei(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & $e) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ye === null && F(e, U);
  }
  return !1;
}
function Ki(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Me !== null && Me.has(e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & re) !== 0 ? Ki(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? F(s, V) : (s.f & U) !== 0 && F(s, pe), yn(
        /** @type {Effect} */
        s
      ));
    }
}
function Xi(e) {
  var t = ue, r = fe, n = he, i = O, s = Me, a = J, l = xe, o = lt, u = e.f;
  ue = /** @type {null | Value[]} */
  null, fe = 0, he = null, O = (u & (ke | De)) === 0 ? e : null, Me = null, $t(e.ctx), xe = !1, lt = ++it, e.ac !== null && (St(() => {
    e.ac.abort(Jt);
  }), e.ac = null);
  try {
    e.f |= vr;
    var c = (
      /** @type {Function} */
      e.fn
    ), h = c();
    e.f |= ot;
    var v = Kn(e);
    if (_i() && he !== null && !xe && v !== null && (e.f & (re | pe | V)) === 0)
      for (var p = 0; p < /** @type {Source[]} */
      he.length; p++)
        Ki(
          he[p],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (it++, i.deps !== null)
        for (let d = 0; d < r; d += 1)
          i.deps[d].rv = it;
      if (t !== null)
        for (const d of t)
          d.rv = it;
      he !== null && (n === null ? n = he : n.push(.../** @type {Source[]} */
      he));
    }
    return (e.f & Ye) !== 0 && (e.f ^= Ye), h;
  } catch (d) {
    return Kn(e), Wl(d);
  } finally {
    e.f ^= vr, ue = t, fe = r, he = n, O = i, Me = s, $t(a), xe = l, lt = o;
  }
}
function Kn(e) {
  var t = e.deps, r = A?.is_fork;
  if (ue !== null) {
    var n;
    if (r || Xt(e, fe), t !== null && fe > 0)
      for (t.length = fe + ue.length, n = 0; n < ue.length; n++)
        t[fe + n] = ue[n];
    else
      e.deps = t = ue;
    if ($n() && (e.f & $e) !== 0)
      for (n = fe; n < t.length; n++)
        (t[n].reactions ??= []).push(e);
  } else !r && t !== null && fe < t.length && (Xt(e, fe), t.length = fe);
  return t;
}
function Jl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = rl.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & re) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ue === null || !qt.call(ue, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & $e) !== 0 && (s.f ^= $e), s.v !== W && bn(s), s.ac !== null && St(() => {
      s.ac.abort(Jt), s.ac = null, F(s, V);
    }), Dl(s), Xt(s, 0);
  }
}
function Xt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Jl(e, r[n]);
}
function Et(e) {
  var t = e.f;
  if ((t & X) === 0) {
    F(e, U);
    var r = C;
    C = e;
    try {
      (t & (we | cn)) !== 0 ? Gl(e) : kn(e), Wi(e);
      var n = Xi(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = Yi;
      var i;
      li && Al && (e.f & V) !== 0 && e.deps;
    } finally {
      C = r;
    }
  }
}
async function Zl() {
  await Promise.resolve(), q();
}
function f(e) {
  var t = e.f, r = (t & re) !== 0;
  if (O !== null && !xe) {
    var n = C !== null && (C.f & X) !== 0;
    if (!n && (Me === null || !Me.has(e))) {
      var i = O.deps;
      if ((O.f & vr) !== 0)
        e.rv < it && (e.rv = it, ue === null && i !== null && i[fe] === e ? fe++ : ue === null ? ue = [e] : ue.push(e));
      else {
        O.deps ??= [], qt.call(O.deps, e) || O.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [O] : qt.call(s, O) || s.push(O);
      }
    }
  }
  if (Ve && Ne.has(e))
    return Ne.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (Ve) {
      var l = a.v;
      return ((a.f & U) === 0 && a.reactions !== null || Zi(a)) && (l = mn(a)), Ne.set(a, l), l;
    }
    var o = (a.f & $e) === 0 && !xe && O !== null && (O.f & $e) !== 0, u = (a.f & ot) === 0;
    rr(a) && (o && (a.f |= $e), Ei(a)), o && !u && (Si(a), Ji(a));
  }
  if (ye?.has(e))
    return ye.get(e);
  if ((e.f & Ye) !== 0)
    throw e.v;
  return e.v;
}
function Ji(e) {
  if (e.f |= $e, e.deps !== null)
    for (const r of e.deps) {
      var t = r.reactions;
      t === null ? r.reactions = [e] : qt.call(t, e) || t.push(e), (r.f & re) !== 0 && (r.f & $e) === 0 && (Si(
        /** @type {Derived} */
        r
      ), Ji(
        /** @type {Derived} */
        r
      ));
    }
}
function Zi(e) {
  if (e.v === W) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ne.has(t) || (t.f & re) !== 0 && Zi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ze(e) {
  var t = xe;
  try {
    return xe = !0, e();
  } finally {
    xe = t;
  }
}
const Ft = /* @__PURE__ */ Symbol("events"), Qi = /* @__PURE__ */ new Set(), Zr = /* @__PURE__ */ new Set();
function es(e, t, r, n = {}) {
  function i(s) {
    if (n.capture || Qr.call(t, s), !s.cancelBubble)
      return St(() => r?.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? (i.__removed = !1, Ae(() => {
    i.__removed || t.addEventListener(e, i, n);
  })) : t.addEventListener(e, i, n), i;
}
function de(e, t, r, n, i) {
  var s = { capture: n, passive: i }, a = es(e, t, r, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && er(() => {
    a.__removed = !0, t.removeEventListener(e, a, s);
  });
}
function me(e, t, r) {
  (t[Ft] ??= {})[e] = r;
}
function ts(e) {
  for (var t = 0; t < e.length; t++)
    Qi.add(e[t]);
  for (var r of Zr)
    r(e);
}
let Ir = null, zr = !1;
function Qr(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Ir = e, zr || (zr = !0, setTimeout(() => {
    zr = !1, Ir = null;
  }));
  var a = 0, l = Ir === e && e[Ft];
  if (l) {
    var o = i.indexOf(l);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Ft] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    o <= u && (a = o);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    Yt(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var c = O, h = C;
    ge(null), Ce(null);
    try {
      for (var v, p = []; s !== null && s !== t; ) {
        try {
          var d = s[Ft]?.[n];
          d != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && d.call(s, e);
        } catch (g) {
          v ? p.push(g) : v = g;
        }
        if (e.cancelBubble) break;
        a++, s = a < i.length ? (
          /** @type {Element} */
          i[a]
        ) : null;
      }
      if (v) {
        for (let g of p)
          queueMicrotask(() => {
            throw g;
          });
        throw v;
      }
    } finally {
      e[Ft] = t, delete e.currentTarget, ge(c), Ce(h);
    }
  }
}
const Ql = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ea(e) {
  return (
    /** @type {string} */
    Ql?.createHTML(e) ?? e
  );
}
function rs(e) {
  var t = kr("template");
  return t.innerHTML = ea(e.replaceAll("<!>", "<!---->")), t.content;
}
function Je(e, t) {
  var r = (
    /** @type {Effect} */
    C
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Tt(e, t) {
  var r = (t & Qs) !== 0, n, i = !e.startsWith("<!>");
  return () => {
    if ($)
      return Je(M, null), M;
    n === void 0 && (n = rs(i ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ je(n));
    var s = (
      /** @type {TemplateNode} */
      r || Li ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Je(s, s), s;
  };
}
// @__NO_SIDE_EFFECTS__
function ta(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, s;
  return () => {
    if ($)
      return Je(M, null), M;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        rs(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ je(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ je(l);
    }
    var o = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return Je(o, o), o;
  };
}
// @__NO_SIDE_EFFECTS__
function ra(e, t) {
  return /* @__PURE__ */ ta(e, t, "svg");
}
function ns() {
  if ($)
    return Je(M, null), M;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = _e();
  return e.append(t, r), Je(t, r), e;
}
function Se(e, t) {
  if ($) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      C
    );
    ((r.f & ot) === 0 || r.nodes.end === null) && (r.nodes.end = M), xt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function na(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const ia = [
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
function sa(e) {
  return ia.includes(e);
}
const la = {
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
function aa(e) {
  return e = e.toLowerCase(), la[e] ?? e;
}
const oa = ["touchstart", "touchmove"];
function ua(e) {
  return oa.includes(e);
}
const fa = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function ca(e) {
  return fa.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function da(e) {
  let t = 0, r = at(0), n;
  return () => {
    $n() && (f(r), ft(() => (t === 0 && (n = ze(() => e(() => Ut(r)))), t += 1, () => {
      Ae(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Ut(r));
      });
    })));
  };
}
var ha = Xe | ut;
function va(e, t, r, n) {
  new pa(e, t, r, n);
}
class pa {
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
  #t = $ ? M : null;
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
  #y = da(() => (this.#c = at(this.#_), () => {
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
      var a = (
        /** @type {Effect} */
        C
      );
      a.b = this, a.f |= Ur, n(s);
    }, this.parent = /** @type {Effect} */
    C.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), this.#i = tr(() => {
      if ($) {
        const s = vn(
          /** @type {TemplateNode} */
          this.#t
        );
        xt();
        const a = s === un;
        if (s.startsWith(Fn)) {
          const o = JSON.parse(s.slice(Fn.length));
          this.#b(o);
        } else a ? this.#$() : this.#x();
      } else
        this.#v();
    }, ha), $ && (this.#e = M);
  }
  #x() {
    try {
      this.#l = oe(() => this.#o(this.#e));
    } catch (t) {
      this.error(t);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #b(t) {
    const r = this.#r.failed, { reset: n, invoke_onerror: i } = this.#m(t);
    Ae(i), r && (this.#a = oe(() => {
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
  #m(t) {
    var r = !1, n = !1;
    const i = () => {
      if (!this.#h()) {
        if (r) {
          vl();
          return;
        }
        r = !0, n && Tl(), this.#a !== null && st(this.#a, () => {
          this.#a = null;
        }), this.#p(() => {
          this.#v();
        });
      }
    };
    return { reset: i, invoke_onerror: () => {
      if (!this.#h())
        try {
          n = !0, this.#r.onerror?.(t, i), n = !1;
        } catch (a) {
          Te(a, this.#i && this.#i.parent);
        }
    } };
  }
  #h() {
    return (this.#i.f & (X | Gt)) !== 0;
  }
  #$() {
    const t = this.#r.pending;
    t && (this.is_pending = !0, this.#n = oe(() => t(this.#e)), Ae(() => {
      if (!this.#h()) {
        var r = this.#s = document.createDocumentFragment(), n = _e(), i = !1;
        if (r.append(n), this.#l = this.#p(() => {
          try {
            return oe(() => this.#o(n));
          } catch (s) {
            try {
              this.error(s), i = !0;
            } catch (a) {
              Te(a, this.#i.parent);
            }
            return null;
          }
        }), this.#l === null) {
          this.#s = null, i && this.#w(
            /** @type {Batch} */
            A
          );
          return;
        }
        this.#u === 0 && (this.#e.before(r), this.#s = null, st(
          /** @type {Effect} */
          this.#n,
          () => {
            this.#n = null;
          }
        ), this.#w(
          /** @type {Batch} */
          A
        ));
      }
    }));
  }
  #v() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#_ = 0, this.#l = oe(() => {
        this.#o(this.#e);
      }), this.#u > 0) {
        var t = this.#s = document.createDocumentFragment();
        En(this.#l, t);
        const r = (
          /** @type {(anchor: Node) => void} */
          this.#r.pending
        );
        this.#n = oe(() => r(this.#e));
      } else
        this.#w(
          /** @type {Batch} */
          A
        );
    } catch (r) {
      this.error(r);
    }
  }
  /**
   * @param {Batch} batch
   */
  #w(t) {
    this.is_pending = !1, t.transfer_effects(this.#d, this.#g);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    bi(t, this.#d, this.#g);
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
    var r = C, n = O, i = J;
    Ce(this.#i), ge(this.#i), $t(this.#i.ctx);
    try {
      return Fe.ensure(), t();
    } finally {
      Ce(r), ge(n), $t(i);
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  #k(t, r) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#k(t, r);
      return;
    }
    this.#u += t, this.#u === 0 && (this.#w(r), this.#n && st(this.#n, () => {
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
    this.#k(t, r), this.#_ += t, !(!this.#c || this.#f) && (this.#f = !0, Ae(() => {
      this.#f = !1, this.#c && kt(this.#c, this.#_);
    }));
  }
  get_effect_pending() {
    return this.#y(), f(
      /** @type {Source<number>} */
      this.#c
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (t === Ke || !this.#r.onerror && !this.#r.failed)
      throw t;
    A?.is_fork ? (this.#l && A.skip_effect(this.#l), this.#n && A.skip_effect(this.#n), this.#a && A.skip_effect(this.#a), A.oncommit(() => {
      this.#h() || this.#E(t);
    })) : this.#E(t);
  }
  /**
   * @param {unknown} error
   */
  #E(t) {
    this.#l && (Y(this.#l), this.#l = null), this.#n && (Y(this.#n), this.#n = null), this.#a && (Y(this.#a), this.#a = null), $ && (te(
      /** @type {TemplateNode} */
      this.#t
    ), di(), te(pr()));
    let r = this.#r.failed;
    const n = (i) => {
      if (this.#h()) return;
      const { reset: s, invoke_onerror: a } = this.#m(i);
      a(), r && !this.#h() && (this.#a = this.#p(() => {
        try {
          return oe(() => {
            var l = (
              /** @type {Effect} */
              C
            );
            l.b = this, l.f |= Ur, r(
              this.#e,
              () => i,
              () => s
            );
          });
        } catch (l) {
          return Te(
            l,
            /** @type {Effect} */
            this.#i.parent
          ), null;
        }
      }));
    };
    Ae(() => {
      if (!this.#h()) {
        var i;
        try {
          i = this.transform_error(t);
        } catch (s) {
          Te(s, this.#i && this.#i.parent);
          return;
        }
        i !== null && typeof i == "object" && typeof /** @type {any} */
        i.then == "function" ? i.then(
          n,
          /** @param {unknown} e */
          (s) => Te(s, this.#i && this.#i.parent)
        ) : n(i);
      }
    });
  }
}
function Lt(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[Gr] ??= e.nodeValue) && (e[Gr] = r, e.nodeValue = `${r}`);
}
function is(e, t) {
  return ss(e, t);
}
function _a(e, t) {
  Jr(), t.intro = t.intro ?? !1;
  const r = t.target, n = $, i = M;
  try {
    for (var s = /* @__PURE__ */ je(r); s && (s.nodeType !== Qt || /** @type {Comment} */
    s.data !== ii); )
      s = /* @__PURE__ */ Oe(s);
    if (!s)
      throw Ke;
    ce(!0), te(
      /** @type {Comment} */
      s
    );
    const a = ss(e, { ...t, anchor: s });
    return ce(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== Ke && console.warn("Failed to hydrate: ", a), t.recover === !1 && xl(), Jr(), Di(r), ce(!1), is(e, t);
  } finally {
    ce(n), te(i);
  }
}
const lr = /* @__PURE__ */ new Map();
function ss(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: a = !0, transformError: l }) {
  Jr();
  var o = void 0, u = ql(() => {
    var c = r ?? t.appendChild(_e());
    va(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (p) => {
        pn({});
        var d = (
          /** @type {ComponentContext} */
          J
        );
        if (s && (d.c = s), i && (n.$$events = i), $ && Je(
          /** @type {TemplateNode} */
          p,
          null
        ), o = e(p, n) || gn(), $ && (C.nodes.end = M, M === null || M.nodeType !== Qt || /** @type {Comment} */
        M.data !== fn))
          throw $r(), Ke;
        _n();
      },
      l
    );
    var h = /* @__PURE__ */ new Set(), v = (p) => {
      for (var d = 0; d < p.length; d++) {
        var g = p[d];
        if (!h.has(g)) {
          h.add(g);
          var T = ua(g);
          for (const B of [t, document]) {
            var w = lr.get(B);
            w === void 0 && (w = /* @__PURE__ */ new Map(), lr.set(B, w));
            var b = w.get(g);
            b === void 0 ? (B.addEventListener(g, Qr, { passive: T }), w.set(g, 1)) : w.set(g, b + 1);
          }
        }
      }
    };
    return v(wr(Qi)), Zr.add(v), () => {
      for (var p of h)
        for (const T of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            lr.get(T)
          ), g = (
            /** @type {number} */
            d.get(p)
          );
          --g == 0 ? (T.removeEventListener(p, Qr), d.delete(p), d.size === 0 && lr.delete(T)) : d.set(p, g);
        }
      Zr.delete(v), c !== r && c.parentNode?.removeChild(c);
    };
  });
  return en.set(o, u), o;
}
let en = /* @__PURE__ */ new WeakMap();
function ga(e, t) {
  const r = en.get(e);
  return r ? (en.delete(e), r(t)) : Promise.resolve();
}
class Sn {
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
        br(n), this.#o.delete(r);
      else {
        var i = this.#r.get(r);
        i && (br(i.effect), this.#t.set(r, i.effect), this.#r.delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
      }
      for (const [s, a] of this.#e) {
        if (this.#e.delete(s), s === t)
          break;
        const l = this.#r.get(a);
        l && (Y(l.effect), this.#r.delete(a));
      }
      for (const [s, a] of this.#t) {
        if (s === r || this.#o.has(s)) continue;
        const l = () => {
          if (Array.from(this.#e.values()).includes(s)) {
            var u = document.createDocumentFragment();
            En(a, u), u.append(_e()), this.#r.set(s, { effect: a, fragment: u });
          } else
            Y(a);
          this.#o.delete(s), this.#t.delete(s);
        };
        this.#i || !n ? (this.#o.add(s), st(a, l, !1)) : l();
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
      r.includes(n) || (Y(i.effect), this.#r.delete(n));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      A
    ), i = Fi();
    if (r && !this.#t.has(t) && !this.#r.has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = _e();
        s.append(a), this.#r.set(t, {
          effect: oe(() => r(a)),
          fragment: s
        });
      } else
        this.#t.set(
          t,
          oe(() => r(this.anchor))
        );
    if (this.#e.set(n, t), i) {
      for (const [l, o] of this.#t)
        l === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [l, o] of this.#r)
        l === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(this.#l), n.ondiscard(this.#n);
    } else
      $ && (this.anchor = M), this.#l(n);
  }
}
function ba(e, t, ...r) {
  var n = new Sn(e);
  tr(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((s) => i(s, ...r)));
  }, Xe);
}
function ma(e) {
  J === null && pi(), ur(() => {
    const t = ze(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function et(e, t, r = !1) {
  var n;
  $ && (n = M, xt());
  var i = new Sn(e), s = r ? Xe : 0;
  function a(l, o) {
    if ($) {
      var u = vn(
        /** @type {TemplateNode} */
        n
      );
      if (l !== parseInt(u.substring(1))) {
        var c = pr();
        te(c), i.anchor = c, ce(!1), i.ensure(l, o), ce(!0);
        return;
      }
    }
    i.ensure(l, o);
  }
  tr(() => {
    var l = !1;
    t((o, u = 0) => {
      l = !0, a(u, o);
    }), l || a(-1, null);
  }, s);
}
function ls(e, t) {
  return t;
}
function wa(e, t, r) {
  for (var n = [], i = t.length, s, a = t.length, l = 0; l < i; l++) {
    let h = t[l];
    st(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            tn(e, wr(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var o = n.length === 0 && r !== null && e.pending.size === 0;
    if (o) {
      var u = (
        /** @type {Element} */
        r
      ), c = (
        /** @type {Element} */
        u.parentNode
      );
      Di(c), c.append(u), e.items.clear();
    }
    tn(e, t, !o);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(s);
}
function tn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const a of e.pending.values())
      for (const l of a)
        n.add(
          /** @type {EachItem} */
          e.items.get(l).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= Le;
      const a = document.createDocumentFragment();
      En(s, a);
    } else
      Y(t[i], r);
  }
}
var Xn;
function as(e, t, r, n, i, s = null) {
  var a = e, l = /* @__PURE__ */ new Map();
  $ && xt();
  var o = null, u = /* @__PURE__ */ ki(() => {
    var T = r();
    return (
      /** @type {V[]} */
      mr(T) ? T : T == null ? [] : wr(T)
    );
  }), c = /* @__PURE__ */ new Map(), h = !0;
  function v(T) {
    if ((g.effect.f & X) === 0) {
      g.pending.delete(T);
      var w = f(u);
      g.fallback = o, ya(g, w, a, t, n), o !== null && (w.length === 0 ? (o.f & Le) === 0 ? br(o) : (o.f ^= Le, jt(o, null, a)) : st(o, () => {
        o = null;
      }));
    }
  }
  function p(T) {
    g.pending.delete(T);
  }
  var d = tr(() => {
    var T = (
      /** @type {V[]} */
      f(u)
    ), w = T.length;
    let b = !1;
    if ($) {
      var B = vn(a) === un;
      B !== (w === 0) && (a = pr(), te(a), ce(!1), b = !0);
    }
    for (var k = /* @__PURE__ */ new Set(), L = (
      /** @type {Batch} */
      A
    ), P = Fi(), S = 0; S < w; S += 1) {
      $ && M.nodeType === Qt && /** @type {Comment} */
      M.data === fn && (a = /** @type {Comment} */
      M, b = !0, ce(!1));
      var E = T[S], x = n(E, S), j = h ? null : l.get(x);
      j ? (j.v && kt(j.v, E), j.i && kt(j.i, S), P && L.unskip_effect(j.e)) : (j = xa(
        l,
        h ? a : Xn ??= _e(),
        E,
        x,
        S,
        i,
        t,
        r
      ), h || (j.e.f |= Le), l.set(x, j)), k.add(x);
    }
    if (w === 0 && s && !o && (h ? o = oe(() => s(a)) : (o = oe(() => s(Xn ??= _e())), o.f |= Le)), w > k.size && gl(), $ && w > 0 && te(pr()), !h)
      if (c.set(L, k), P) {
        for (const [D, ne] of l)
          k.has(D) || L.skip_effect(ne.e);
        L.oncommit(v), L.ondiscard(p);
      } else
        v(L);
    b && ce(!0), f(u);
  }), g = { effect: d, items: l, pending: c, outrogroups: null, fallback: o };
  h = !1, $ && (a = M);
}
function Rt(e) {
  for (; e !== null && (e.f & ke) === 0; )
    e = e.next;
  return e;
}
function ya(e, t, r, n, i) {
  var s = t.length, a = e.items, l = Rt(e.effect.first), o, u = null, c = [], h = [], v, p, d, g;
  for (g = 0; g < s; g += 1) {
    if (v = t[g], p = i(v, g), d = /** @type {EachItem} */
    a.get(p).e, e.outrogroups !== null)
      for (const E of e.outrogroups)
        E.pending.delete(d), E.done.delete(d);
    if ((d.f & ae) !== 0 && br(d), (d.f & Le) !== 0)
      if (d.f ^= Le, d === l)
        jt(d, null, r);
      else {
        var T = u ? u.next : l;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), qe(e, u, d), qe(e, d, T), jt(d, T, r), u = d, c = [], h = [], l = Rt(u.next);
        continue;
      }
    if (d !== l) {
      if (o !== void 0 && o.has(d)) {
        if (c.length < h.length) {
          var w = h[0], b;
          u = w.prev;
          var B = c[0], k = c[c.length - 1];
          for (b = 0; b < c.length; b += 1)
            jt(c[b], w, r);
          for (b = 0; b < h.length; b += 1)
            o.delete(h[b]);
          qe(e, B.prev, k.next), qe(e, u, B), qe(e, k, w), l = w, u = k, g -= 1, c = [], h = [];
        } else
          o.delete(d), jt(d, l, r), qe(e, d.prev, d.next), qe(e, d, u === null ? e.effect.first : u.next), qe(e, u, d), u = d;
        continue;
      }
      for (c = [], h = []; l !== null && l !== d; )
        (o ??= /* @__PURE__ */ new Set()).add(l), h.push(l), l = Rt(l.next);
      if (l === null)
        continue;
    }
    (d.f & Le) === 0 && c.push(d), u = d, l = Rt(d.next);
  }
  if (e.outrogroups !== null) {
    for (const E of e.outrogroups)
      E.pending.size === 0 && (tn(e, wr(E.done)), e.outrogroups?.delete(E));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || o !== void 0) {
    var L = [];
    if (o !== void 0)
      for (d of o)
        (d.f & ae) === 0 && L.push(d);
    for (; l !== null; )
      (l.f & ae) === 0 && l !== e.fallback && L.push(l), l = Rt(l.next);
    var P = L.length;
    if (P > 0) {
      var S = null;
      wa(e, L, S);
    }
  }
}
function xa(e, t, r, n, i, s, a, l) {
  var o = (a & qs) !== 0 ? (a & Gs) === 0 ? /* @__PURE__ */ Ci(r, !1, !1) : at(r) : null, u = (a & Ys) !== 0 ? at(i) : null;
  return {
    v: o,
    i: u,
    e: oe(() => (s(t, o ?? r, u ?? i, l), () => {
      e.delete(n);
    }))
  };
}
function jt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & Le) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Oe(n)
      );
      if (s.before(n), n === i)
        return;
      n = a;
    }
}
function qe(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function $a(e, t, r, n, i, s) {
  let a = $;
  $ && xt();
  var l = null;
  $ && M.nodeType === cl && (l = /** @type {Element} */
  M, xt());
  var o = (
    /** @type {TemplateNode} */
    $ ? M : e
  ), u = new Sn(o, !1);
  tr(() => {
    const c = t() || null;
    var h = el;
    if (c === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(c, (v) => {
      if (c) {
        var p = $;
        if (l = $ ? (
          /** @type {Element} */
          l
        ) : kr(c, h), Je(l, l), n) {
          var d = null;
          $ && ca(c) && l.append(d = document.createComment(""));
          var g = $ ? /* @__PURE__ */ je(l) : l.appendChild(_e());
          $ && (g === null ? ce(!1) : te(g)), n(l, g), d?.remove();
        }
        C.nodes.end = l, p || v.before(l);
      }
      $ && te(v);
    }), () => {
    };
  }, Xe), er(() => {
  }), a && (ce(!0), te(o));
}
function ka(e, t) {
  Er(() => {
    e = C?.parent?.nodes?.start ?? e;
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
      const i = kr("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
function Ea(e, t) {
  var r = void 0, n;
  Vi(() => {
    r !== (r = t()) && (n && (Y(n), n = null), r && (n = oe(() => {
      Er(() => (
        /** @type {(node: Element) => void} */
        r(e)
      ));
    })));
  });
}
function os(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = os(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Sa() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = os(e)) && (n && (n += " "), n += t);
  return n;
}
function Ta(e) {
  return typeof e == "object" ? Sa(e) : e ?? "";
}
const Jn = [...` 	
\r\f \v\uFEFF`];
function Aa(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, a = 0; (a = n.indexOf(i, a)) >= 0; ) {
          var l = a + s;
          (a === 0 || Jn.includes(n[a - 1])) && (l === n.length || Jn.includes(n[l])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(l + 1) : a = l;
        }
  }
  return n === "" ? null : n;
}
function Zn(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i of Object.keys(e)) {
    var s = e[i];
    s != null && s !== "" && (n += " " + i + ": " + s + r);
  }
  return n;
}
function Dr(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Na(e, t) {
  if (t) {
    var r = "", n, i;
    if (Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\/\*.*?\*\//g, "").trim();
      var s = !1, a = 0, l = !1, o = [];
      n && o.push(...Object.keys(n).map(Dr)), i && o.push(...Object.keys(i).map(Dr));
      var u = 0, c = -1;
      const g = e.length;
      for (var h = 0; h < g; h++) {
        var v = e[h];
        if (l ? v === "/" && e[h - 1] === "*" && (l = !1) : s ? s === v && (s = !1) : v === "/" && e[h + 1] === "*" ? l = !0 : v === '"' || v === "'" ? s = v : v === "(" ? a++ : v === ")" && a--, !l && s === !1 && a === 0) {
          if (v === ":" && c === -1)
            c = h;
          else if (v === ";" || h === g - 1) {
            if (c !== -1) {
              var p = Dr(e.substring(u, c).trim());
              if (!o.includes(p)) {
                v !== ";" && h++;
                var d = e.substring(u, h).trim();
                r += " " + d + ";";
              }
            }
            u = h + 1, c = -1;
          }
        }
      }
    }
    return n && (r += Zn(n)), i && (r += Zn(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return e == null ? null : String(e);
}
function fr(e, t, r, n, i, s) {
  var a = (
    /** @type {any} */
    e[qr]
  );
  if ($ || a !== r || a === void 0) {
    var l = Aa(r, n, s);
    (!$ || l !== e.getAttribute("class")) && (l == null ? e.removeAttribute("class") : t ? e.className = l : e.setAttribute("class", l)), e[qr] = r;
  } else if (s && i !== s)
    for (var o in s) {
      var u = !!s[o];
      (i == null || u !== !!i[o]) && e.classList.toggle(o, u);
    }
  return s;
}
function Fr(e, t = {}, r, n) {
  for (var i in r) {
    var s = r[i];
    t[i] !== s && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, n));
  }
}
function rn(e, t, r, n) {
  var i = (
    /** @type {any} */
    e[Yr]
  );
  if ($ || i !== t) {
    var s = Na(t, n);
    (!$ || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e[Yr] = t;
  } else n && (Array.isArray(n) ? (Fr(e, r?.[0], n[0]), Fr(e, r?.[1], n[1], "important")) : Fr(e, r, n));
  return n;
}
function us(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Qn(e, t) {
  var r = !("__defaultValue" in e);
  !r && e.__defaultValue === t || (e.__defaultValue = t, fs(e, !r || "__value" in e));
}
function fs(e, t) {
  var r = e.__defaultValue, n = e.multiple, i = n ? r ?? [] : null;
  if (!(n && !mr(i))) {
    var s = e.selectedIndex, a = t && n ? new Set(e.selectedOptions) : null;
    for (var l of e.options) {
      var o = sn(l);
      us(
        l,
        n ? (
          /** @type {any[]} */
          i.includes(o)
        ) : Pi(o, r)
      );
    }
    if (t)
      if (a !== null)
        for (l of e.options) {
          var u = a.has(l);
          l.selected !== u && (l.selected = u);
        }
      else e.selectedIndex !== s && (e.selectedIndex = s);
  }
}
function nn(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!mr(t))
      return hl();
    for (var n of e.options)
      n.selected = t.includes(sn(n));
    return;
  }
  for (n of e.options) {
    var i = sn(n);
    if (Pi(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Ma(e) {
  var t = new MutationObserver((r) => {
    r.every(Ca) || ("__defaultValue" in e && fs(e, !1), "__value" in e && nn(e, e.__value));
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
  }), er(() => {
    t.disconnect();
  });
}
function sn(e) {
  return "__value" in e ? e.__value : e.value;
}
function Ca(e) {
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
const It = /* @__PURE__ */ Symbol("class"), zt = /* @__PURE__ */ Symbol("style"), cs = /* @__PURE__ */ Symbol("is custom element"), ds = /* @__PURE__ */ Symbol("is html"), Oa = Zt ? "link" : "LINK", ei = Zt ? "input" : "INPUT", Pa = Zt ? "option" : "OPTION", hs = Zt ? "select" : "SELECT", vs = Zt ? "progress" : "PROGRESS";
function Vt(e) {
  if ($) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          K(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          K(e, "checked", null), e.checked = i;
        }
      }
    };
    e[Wt] = r, Ae(r), mi();
  }
}
function ti(e, t) {
  var r = Tn(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== vs) || (e.value = t ?? "");
}
function K(e, t, r, n) {
  var i = Tn(e);
  $ && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Oa) || i[t] !== (i[t] = r) && (t === "loading" && (e[fl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && ps(e).has(t) ? e[t] = r : e.setAttribute(t, r));
}
function La(e, t, r, n, i = !1, s = !1) {
  $ && i && e.nodeName === ei && ("defaultValue" in r || "defaultChecked" in r || Vt(
    /** @type {HTMLInputElement} */
    e
  ));
  var a = Tn(e), l = a[cs], o = !a[ds];
  let u = $ && l;
  u && ce(!1);
  var c = t || {}, h = e.nodeName === Pa, v = e.nodeName === hs;
  try {
    for (var p in t)
      !(p in r) && p[0] + p[1] !== "$$" && (r[p] = null);
    r.class ? r.class = Ta(r.class) : (n || r[It]) && (r.class = null), r[zt] && (r.style ??= null);
    var d = ps(e);
    if (e.nodeName === ei && "type" in r && ("value" in r || "__value" in r)) {
      var g = r.type;
      (g !== c.type || g === void 0 && e.hasAttribute("type")) && (c.type = g, K(e, "type", g, s));
    }
    for (const S in r) {
      let E = r[S];
      if (h && S === "value" && E == null) {
        e.value = e.__value = "", c[S] = E;
        continue;
      }
      if (S === "class") {
        var T = e.namespaceURI === "http://www.w3.org/1999/xhtml";
        fr(e, T, E, n, t?.[It], r[It]), c[S] = E, c[It] = r[It];
        continue;
      }
      if (S === "style") {
        rn(e, E, t?.[zt], r[zt]), c[S] = E, c[zt] = r[zt];
        continue;
      }
      var w = c[S];
      if (!(E === w && !(E === void 0 && e.hasAttribute(S)))) {
        c[S] = E;
        var b = S[0] + S[1];
        if (b !== "$$")
          if (b === "on") {
            const x = {}, j = "$$" + S;
            let D = S.slice(2);
            var B = sa(D);
            if (na(D) && (D = D.slice(0, -7), x.capture = !0), !B && w) {
              if (E != null) continue;
              e.removeEventListener(D, c[j], x), c[j] = null;
            }
            if (B)
              me(D, e, E), ts([D]);
            else if (E != null) {
              let ne = function(Qe) {
                c[S].call(this, Qe);
              };
              var P = ne;
              c[j] = es(D, e, ne, x);
            }
          } else if (S === "style")
            K(e, S, E);
          else if (S === "autofocus")
            Ll(
              /** @type {HTMLElement} */
              e,
              !!E
            );
          else if (!l && (S === "__value" || S === "value" && E != null))
            e.__value = E, (w == null || // @ts-ignore
            e.value !== E || E === 0 && e.nodeName === vs) && (e.value = E);
          else if (S === "selected" && h)
            us(
              /** @type {HTMLOptionElement} */
              e,
              E
            );
          else {
            var k = S;
            o || (k = aa(k));
            var L = k === "defaultValue" || k === "defaultChecked";
            if (v && k === "defaultValue") continue;
            if (E == null && !l && !L)
              if (a[S] = null, k === "value" || k === "checked") {
                let x = (
                  /** @type {HTMLInputElement} */
                  e
                );
                const j = t === void 0;
                if (k === "value") {
                  let D = x.defaultValue;
                  x.removeAttribute(k), x.defaultValue = D, x.value = x.__value = j ? D : null;
                } else {
                  let D = x.defaultChecked;
                  x.removeAttribute(k), x.defaultChecked = D, x.checked = j ? D : !1;
                }
              } else
                e.removeAttribute(S);
            else L || (l || typeof E != "string") && d.has(k) ? (e[k] = E, k in a && (a[k] = W)) : typeof E != "function" && K(e, k, E, s);
          }
      }
    }
  } finally {
    u && ce(!0);
  }
  return c;
}
function ri(e, t, r = [], n = [], i = [], s, a = !1, l = !1) {
  xi(i, r, n, (o) => {
    var u = void 0, c = {}, h = e.nodeName === hs, v = !1;
    if (Vi(() => {
      var d = t(...o.map(f)), g = La(
        e,
        u,
        d,
        s,
        a,
        l
      );
      if (v && h) {
        var T = (
          /** @type {HTMLSelectElement} */
          e
        );
        "defaultValue" in d && Qn(T, d.defaultValue), "value" in d && nn(T, d.value);
      }
      for (let b of Object.getOwnPropertySymbols(c))
        d[b] || Y(c[b]);
      for (let b of Object.getOwnPropertySymbols(d)) {
        var w = d[b];
        b.description === tl && (!u || w !== u[b]) && (c[b] && Y(c[b]), c[b] = oe(() => Ea(e, () => w))), g[b] = w;
      }
      u = g;
    }), h) {
      var p = (
        /** @type {HTMLSelectElement} */
        e
      );
      Er(() => {
        var d = (
          /** @type {Record<string | symbol, any>} */
          u
        );
        "defaultValue" in d && Qn(p, d.defaultValue), nn(p, d.value, !0), Ma(p);
      });
    }
    v = !0;
  });
}
function Tn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[ci] ??= {
      [cs]: e.nodeName.includes("-"),
      [ds]: e.namespaceURI === si
    }
  );
}
var ni = /* @__PURE__ */ new Map();
function ps(e) {
  var t = e.getAttribute("is") || e.nodeName, r = ni.get(t);
  if (r) return r;
  ni.set(t, r = /* @__PURE__ */ new Set());
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = nl(i);
    for (var a in n)
      n[a].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      a !== "innerHTML" && a !== "textContent" && a !== "innerText" && r.add(a);
    i = ai(i);
  }
  return r;
}
function Ra(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  yi(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = jr(e) ? Vr(s) : s, r(s), A !== null && n.add(A), await Zl(), s !== (s = t())) {
      var a = e.selectionStart, l = e.selectionEnd, o = e.value.length;
      if (e.value = s ?? "", l !== null) {
        var u = e.value.length;
        a === l && l === o && u > o ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = a, e.selectionEnd = Math.min(l, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  ($ && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ze(t) == null && e.value) && (r(jr(e) ? Vr(e.value) : e.value), A !== null && n.add(A)), ft(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        A
      );
      if (n.has(s))
        return;
    }
    jr(e) && i === Vr(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Ia(e, t, r = t) {
  yi(e, "change", (n) => {
    var i = n ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  ($ && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  ze(t) == null) && r(e.checked), ft(() => {
    var n = t();
    e.checked = !!n;
  });
}
function jr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Vr(e) {
  return e === "" ? null : +e;
}
function za(e, t, r = t) {
  var n = () => {
    r(e.volume);
  };
  t() == null && n(), wi(e, ["volumechange"], n, !1), ft(() => {
    var i = Number(t());
    i !== e.volume && !isNaN(i) && (e.volume = i);
  });
}
function Da(e, t, r = t) {
  var n = () => {
    r(e.muted);
  };
  t() == null && n(), wi(e, ["volumechange"], n, !1), ft(() => {
    var i = !!t();
    e.muted !== i && (e.muted = i);
  });
}
function Wr(e, t) {
  return e === t || e?.[Ge] === t;
}
function Br(e = gn(), t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    J.r
  ), s = (
    /** @type {Effect} */
    C
  );
  return Er(() => {
    var a, l;
    return ft(() => {
      a = l, l = [], ze(() => {
        Wr(r(...l), e) || (t(e, ...l), a && Wr(r(...a), e) && t(null, ...a));
      });
    }), () => {
      let o = s;
      for (; o !== i && o.parent !== null && o.parent.f & Gt; )
        o = o.parent;
      const u = () => {
        l && Wr(r(...l), e) && t(null, ...l);
      }, c = o.teardown;
      o.teardown = () => {
        u(), c?.();
      };
    };
  }), e;
}
let ar = !1;
function Fa(e) {
  var t = ar;
  try {
    return ar = !1, [e(), ar];
  } finally {
    ar = t;
  }
}
const ja = {
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
function ct(e, t, r) {
  return new Proxy({ props: e, exclude: t }, ja);
}
const Va = {
  get(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (Ct(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, r) {
    let n = e.props.length;
    for (; n--; ) {
      let i = e.props[n];
      Ct(i) && (i = i());
      const s = Ie(i, t);
      if (s && s.set)
        return s.set(r), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (Ct(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const i = Ie(n, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === Ge || t === hn) return !1;
    for (let r of e.props)
      if (Ct(r) && (r = r()), r != null && t in r) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let r of e.props)
      if (Ct(r) && (r = r()), !!r) {
        for (const n in r)
          t.includes(n) || t.push(n);
        for (const n of Object.getOwnPropertySymbols(r))
          t.includes(n) || t.push(n);
      }
    return t;
  }
};
function At(...e) {
  return new Proxy({ props: e }, Va);
}
function ee(e, t, r, n) {
  var i = !0, s = (r & Js) !== 0, a = (r & Zs) !== 0, l = (
    /** @type {V} */
    n
  ), o = !0, u = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), c = () => a && i ? (u ??= /* @__PURE__ */ Kt(
    /** @type {() => V} */
    n
  ), f(u)) : (o && (o = !1, l = a ? ze(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), l);
  let h;
  if (s) {
    var v = Ge in e || hn in e;
    h = Ie(e, t)?.set ?? (v && t in e ? (k) => e[t] = k : void 0);
  }
  var p, d = !1;
  s ? [p, d] = Fa(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && n !== void 0 && (p = c(), h && ($l(), h(p)));
  var g;
  if (g = () => {
    var k = (
      /** @type {V} */
      e[t]
    );
    return k === void 0 ? c() : (o = !0, k);
  }, (r & Xs) === 0)
    return g;
  if (h) {
    var T = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(k, L) {
        return arguments.length > 0 ? ((!L || T || d) && h(L ? g() : k), k) : g();
      })
    );
  }
  var w = !1, b = ((r & Ks) !== 0 ? Kt : ki)(() => (w = !1, g()));
  s && f(b);
  var B = (
    /** @type {Effect} */
    C
  );
  return (
    /** @type {() => V} */
    (function(k, L) {
      if (arguments.length > 0) {
        const P = L ? f(b) : s ? Re(k) : k;
        return y(b, P), w = !0, l !== void 0 && (l = P), k;
      }
      return Ve && w || (B.f & X) !== 0 ? b.v : f(b);
    })
  );
}
function Wa(e) {
  return new Ba(e);
}
class Ba {
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
    var r = /* @__PURE__ */ new Map(), n = (s, a) => {
      var l = /* @__PURE__ */ Ci(a, !1, !1);
      return r.set(s, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, a) {
          return f(r.get(a) ?? n(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === hn ? !0 : (f(r.get(a) ?? n(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, l) {
          return y(r.get(a) ?? n(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    this.#t = (t.hydrate ? _a : is)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    }), (!t?.props?.$$host || t.sync === !1) && q(), this.#e = i.$$events;
    for (const s of Object.keys(this.#t))
      s === "$set" || s === "$destroy" || s === "$on" || Yt(this, s, {
        get() {
          return this.#t[s];
        },
        /** @param {any} value */
        set(a) {
          this.#t[s] = a;
        },
        enumerable: !0
      });
    this.#t.$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, this.#t.$destroy = () => {
      ga(this.#t);
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
          const a = kr("slot");
          i !== "default" && (a.name = i), Se(s, a);
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Ha(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = cr(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Wa({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Ul(() => {
        ft(() => {
          this.$$r = !0;
          for (const i of dr(this.$$c)) {
            if (!this.$$p_d[i]?.reflect) continue;
            this.$$d[i] = this.$$c[i];
            const s = cr(
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
          const a = this.$$c.$on(i, s);
          this.$$l_u.set(s, a);
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = cr(e, r, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return dr(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function cr(e, t, r, n) {
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
function Ha(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Ze(e, t, r, n, i, s) {
  let a = class extends _s {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return dr(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return dr(t).forEach((l) => {
    Yt(a.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(o) {
        o = cr(l, o, t), this.$$d[l] = o;
        var u = this.$$c;
        if (u) {
          var c = Ie(u, l)?.get;
          c ? u[l] = o : u.$set({ [l]: o });
        }
      }
    });
  }), n.forEach((l) => {
    Yt(a.prototype, l, {
      get() {
        return this.$$c?.[l];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const tt = {
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
const ln = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
function Hr(e) {
  return e != null;
}
function Ua(e, t = {}) {
  const r = t.attributeNames ?? {}, n = (v) => r[v] ?? v, i = e.size ?? e.width ?? tt.width, s = e.size ?? e.height ?? tt.height, a = e.aliases?.filter((v) => typeof v == "string" && v.trim() !== "").map((v) => `lucide-${v}`) ?? [], l = [...e.name ? [`lucide-${e.name}`] : [], ...a], o = t.className?.split(" ").filter(Boolean) ?? [], u = t.includeDefaultClasses === !1 ? ln(...o) : ln("lucide", ...l, ...o), c = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? tt["stroke-width"]) * Number(e.size ?? e.width ?? tt.width) / Number(t.size ?? t.width ?? tt.width) : t.strokeWidth ?? tt["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(tt).reduce((v, [p, d]) => (v[n(p)] = d, v), {}),
      ..."color" in t && t.color && {
        [n("stroke")]: t.color
      },
      ..."size" in t && Hr(t.size) && {
        [n("width")]: t.size,
        [n("height")]: t.size
      },
      ..."width" in t && Hr(t.width) && {
        [n("width")]: t.width
      },
      ..."height" in t && Hr(t.height) && {
        [n("height")]: t.height
      },
      [n("stroke-width")]: c,
      ...u && {
        [n("class")]: u
      },
      [n("viewBox")]: `0 0 ${i} ${s}`,
      ...t.hasA11yProp === !1 ? {
        [n("aria-hidden")]: "true"
      } : {},
      ..."attributes" in t && t.attributes
    },
    e.node.map((v) => {
      const [p, d, g] = v, T = t.nonScalingStroke ? { [n("vector-effect")]: "non-scaling-stroke", ...d } : d;
      return g ? [p, T, g] : [p, T];
    })
  ];
}
const qa = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const Ya = /* @__PURE__ */ Symbol("lucide-context"), Ga = () => Cl(Ya);
var Ka = /* @__PURE__ */ new Set([
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
]), Xa = /* @__PURE__ */ ra("<svg><!><!></svg>");
function dt(e, t) {
  pn(t, !0);
  const r = Ga() ?? {}, n = ee(t, "color", 23, () => r.color ?? "currentColor"), i = ee(t, "size", 23, () => r.size ?? 24), s = ee(t, "width", 23, i), a = ee(t, "height", 23, i), l = ee(t, "strokeWidth", 23, () => r.strokeWidth ?? 2), o = ee(t, "absoluteStrokeWidth", 23, () => r.absoluteStrokeWidth ?? !1), u = ee(t, "nonScalingStroke", 23, () => r.nonScalingStroke ?? !1), c = ee(t, "iconNode", 23, () => []), h = ee(t, "icon", 23, () => ({ node: c(), aliases: [], size: 24 })), v = ee(t, "class", 7), p = ee(t, "children", 7), d = /* @__PURE__ */ ct(t, Ka), g = /* @__PURE__ */ ve(() => !!p() || qa(d)), T = /* @__PURE__ */ ve(() => Ua(h(), {
    color: n(),
    width: s(),
    height: a(),
    strokeWidth: l(),
    absoluteStrokeWidth: o(),
    nonScalingStroke: u(),
    // @TODO: maybe drop the extra `lucide-icon` class altogether.
    className: ln("lucide-icon", r.class),
    hasA11yProp: f(g),
    attributes: d
  })), w = /* @__PURE__ */ ve(() => Vn(f(T), 3)), b = /* @__PURE__ */ ve(() => f(w)[1]), B = /* @__PURE__ */ ve(() => al(f(w)[2], () => [], !0)), k = /* @__PURE__ */ ve(() => ({
    ...f(b),
    class: [...f(b).class.split(" "), v()]
  }));
  var L = {
    get color() {
      return n();
    },
    set color(x = r.color ?? "currentColor") {
      n(x), q();
    },
    get size() {
      return i();
    },
    set size(x = r.size ?? 24) {
      i(x), q();
    },
    get width() {
      return s();
    },
    set width(x = i) {
      s(x), q();
    },
    get height() {
      return a();
    },
    set height(x = i) {
      a(x), q();
    },
    get strokeWidth() {
      return l();
    },
    set strokeWidth(x = r.strokeWidth ?? 2) {
      l(x), q();
    },
    get absoluteStrokeWidth() {
      return o();
    },
    set absoluteStrokeWidth(x = r.absoluteStrokeWidth ?? !1) {
      o(x), q();
    },
    get nonScalingStroke() {
      return u();
    },
    set nonScalingStroke(x = r.nonScalingStroke ?? !1) {
      u(x), q();
    },
    get iconNode() {
      return c();
    },
    set iconNode(x = []) {
      c(x), q();
    },
    get icon() {
      return h();
    },
    set icon(x = { node: c, aliases: [], size: 24 }) {
      h(x), q();
    },
    get class() {
      return v();
    },
    set class(x) {
      v(x), q();
    },
    get children() {
      return p();
    },
    set children(x) {
      p(x), q();
    }
  }, P = Xa();
  ri(P, () => ({ ...f(k) }));
  var S = le(P);
  as(S, 17, () => f(B), ls, (x, j) => {
    var D = /* @__PURE__ */ ve(() => Vn(f(j), 2));
    let ne = () => f(D)[0], Qe = () => f(D)[1];
    var Nt = ns(), We = zi(Nt);
    $a(We, ne, !0, (Sr, An) => {
      ri(Sr, () => ({ ...Qe() }));
    }), Se(x, Nt);
  });
  var E = H(S);
  return ba(E, () => p() ?? oi), se(P), Se(e, P), _n(L);
}
Ze(
  dt,
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
  name: "pause",
  size: 24,
  node: [
    [
      "rect",
      { x: "14", y: "3", width: "5", height: "18", rx: "1" }
    ],
    [
      "rect",
      { x: "5", y: "3", width: "5", height: "18", rx: "1" }
    ]
  ]
};
gs.node;
var Ja = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function bs(e, t) {
  let r = /* @__PURE__ */ ct(t, Ja);
  dt(e, At(() => r, {
    get icon() {
      return gs;
    }
  }));
}
Ze(bs, {}, [], [], { mode: "open" });
const ms = {
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
ms.node;
var Za = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function ws(e, t) {
  let r = /* @__PURE__ */ ct(t, Za);
  dt(e, At(() => r, {
    get icon() {
      return ms;
    }
  }));
}
Ze(ws, {}, [], [], { mode: "open" });
const ys = {
  name: "skip-back",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"
      }
    ],
    ["path", { d: "M3 20V4" }]
  ]
};
ys.node;
var Qa = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function xs(e, t) {
  let r = /* @__PURE__ */ ct(t, Qa);
  dt(e, At(() => r, {
    get icon() {
      return ys;
    }
  }));
}
Ze(xs, {}, [], [], { mode: "open" });
const $s = {
  name: "skip-forward",
  size: 24,
  node: [
    ["path", { d: "M21 4v16" }],
    [
      "path",
      {
        d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"
      }
    ]
  ]
};
$s.node;
var eo = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function ks(e, t) {
  let r = /* @__PURE__ */ ct(t, eo);
  dt(e, At(() => r, {
    get icon() {
      return $s;
    }
  }));
}
Ze(ks, {}, [], [], { mode: "open" });
const Es = {
  name: "volume-2",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
      }
    ],
    ["path", { d: "M16 9a5 5 0 0 1 0 6" }],
    ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728" }]
  ]
};
Es.node;
var to = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function an(e, t) {
  let r = /* @__PURE__ */ ct(t, to);
  dt(e, At(() => r, {
    get icon() {
      return Es;
    }
  }));
}
Ze(an, {}, [], [], { mode: "open" });
const Ss = {
  name: "volume-x",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z"
      }
    ],
    ["path", { d: "m16.5 14.5 5-5" }],
    ["path", { d: "m16.5 9.5 5 5" }]
  ]
};
Ss.node;
var ro = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function on(e, t) {
  let r = /* @__PURE__ */ ct(t, ro);
  dt(e, At(() => r, {
    get icon() {
      return Ss;
    }
  }));
}
Ze(on, {}, [], [], { mode: "open" });
const Ts = (e) => [e.base, ...e.layers.slice(0, 3), null, null, null].slice(0, 4);
class no {
  constructor(t, r) {
    this.nodes = /* @__PURE__ */ new Map(), this.mix = { base: null, layers: [] }, this.repeat = !1, this.playing = !1, this.error = "", this.generation = 0, this.requests = /* @__PURE__ */ new WeakMap(), this.create = t, this.notify = r;
  }
  get base() {
    return this.mix.base ? this.nodes.get(this.mix.base.id) : void 0;
  }
  snapshot() {
    this.notify({ playing: this.playing, time: this.base?.currentTime || 0, duration: Number.isFinite(this.base?.duration) ? this.base.duration : 0, error: this.error, loading: [...this.nodes.values()].some((t) => !t.paused && t.readyState < 3) });
  }
  position(t, r, n) {
    try {
      t.currentTime = n ? r : Number.isFinite(t.duration) && t.duration > 0 ? r % t.duration : r;
    } catch {
    }
  }
  update(t) {
    const r = this.base?.currentTime || 0;
    this.mix = { base: t?.base || null, layers: (t?.layers || []).slice(0, 3) };
    const n = Ts(this.mix).filter(Boolean), i = new Set(n.map((s) => s.id));
    for (const [s, a] of this.nodes) i.has(s) || (a.pause(), a.removeAttribute("src"), a.load(), a.remove?.(), this.nodes.delete(s));
    for (const s of n) {
      let a = this.nodes.get(s.id);
      if (!a) {
        a = this.create(), this.nodes.set(s.id, a), a.preload = "metadata", a.src = s.track.url;
        const l = a;
        l.addEventListener("loadedmetadata", () => {
          this.position(l, this.base?.currentTime || r, s.id === this.mix.base?.id), this.snapshot();
        });
        for (const o of ["timeupdate", "waiting", "playing", "canplay", "stalled"]) l.addEventListener(o, () => this.snapshot());
        l.addEventListener("error", () => {
          this.nodes.get(s.id) === l && (this.error = `Unable to load ${s.track.title}.`, this.pause());
        }), l.addEventListener("ended", () => {
          s.id === this.mix.base?.id && (this.repeat ? (this.seek(0), this.play()) : this.pause());
        }), l.load(), this.position(l, r, s.id === this.mix.base?.id), this.playing && this.start(l, this.generation);
      }
      a.loop = s.id !== this.mix.base?.id, a.volume = Math.max(0, Math.min(1, s.volume ?? 0.75)), a.muted = !!s.muted;
    }
    this.mix.base || this.pause(), this.snapshot();
  }
  async start(t, r) {
    const n = {};
    this.requests.set(t, n);
    try {
      if (await t.play(), this.requests.get(t) !== n) return;
      (r !== this.generation || !this.playing || ![...this.nodes.values()].includes(t)) && t.pause();
    } catch {
      this.requests.get(t) === n && [...this.nodes.values()].includes(t) && r === this.generation && (this.error = "Playback failed. Press Play to retry or check the audio URL.", this.pause());
    }
  }
  async play() {
    if (!this.base) return;
    this.error = "", this.playing = !0;
    const t = ++this.generation;
    this.base.ended && this.seek(0), await Promise.all([...this.nodes.values()].map((r) => this.start(r, t))), this.snapshot();
  }
  pause() {
    this.playing = !1, this.generation++;
    for (const t of this.nodes.values()) t.pause();
    this.snapshot();
  }
  seek(t) {
    for (const [r, n] of this.nodes) this.position(n, t, r === this.mix.base?.id);
    this.snapshot();
  }
  destroy() {
    this.pause();
    for (const t of this.nodes.values())
      t.removeAttribute("src"), t.load(), t.remove?.();
    this.nodes.clear();
  }
}
function io(e, t) {
  if (!e || e.version !== 1 || !(e.interval > 0) || !e.frames.length) return [];
  const r = Math.max(0, t) / e.interval, n = Math.min(Math.floor(r), e.frames.length - 1), i = e.frames[n], s = e.frames[Math.min(n + 1, e.frames.length - 1)], a = Math.min(1, r - n);
  return i.map((l, o) => Math.max(0, Math.min(1, (l + ((s[o] ?? l) - l) * a) / 255)));
}
function so(e, t, r) {
  return Math.max(0, Math.min(t - 1, e + r));
}
function lo(e, t, r) {
  if (!e.length) return 0;
  const n = e.map((l) => Math.max(0, Math.min(1, l))), i = n.reduce((l, o) => l + o, 0) / n.length;
  if (i === 0 || t <= 0 || t >= 1) return 0;
  const s = Math.sin(Math.PI * t) ** 0.7;
  let a = 0;
  for (let l = 0; l < n.length; l++) {
    const o = Math.sqrt(n[l]);
    a += Math.sin(t * Math.PI * (2 + l * 0.65) + (r - 13.5) * 0.045 * (1 + o)) * o / (1 + l * 0.5);
  }
  return s * (a * 65 + (r - 13.5) * Math.sqrt(i) * 1.4);
}
var ao = /* @__PURE__ */ Tt('<button aria-label="Previous track" class="svelte-bhx1m2"><!></button>'), oo = /* @__PURE__ */ Tt('<button aria-label="Next track" class="svelte-bhx1m2"><!></button>'), uo = /* @__PURE__ */ Tt('<div class="channel svelte-bhx1m2"><span class="svelte-bhx1m2"> </span><button class="svelte-bhx1m2"><!></button><input type="range" min="0" max="1" step="0.01" class="svelte-bhx1m2"/></div>'), fo = /* @__PURE__ */ Tt('<div class="mixer svelte-bhx1m2"><label class="repeat svelte-bhx1m2"><input type="checkbox" class="svelte-bhx1m2"/>Loop mix</label><!></div>'), co = /* @__PURE__ */ Tt('<div class="volume svelte-bhx1m2"><button class="svelte-bhx1m2"><!></button><input type="range" min="0" max="1" step="0.01" aria-label="Volume" class="svelte-bhx1m2"/></div>'), ho = /* @__PURE__ */ Tt('<div><div class="eyebrow svelte-bhx1m2">NOW PLAYING</div> <h2 class="svelte-bhx1m2"> </h2> <canvas width="640" height="220" aria-hidden="true" class="svelte-bhx1m2"></canvas> <div class="switch svelte-bhx1m2" aria-label="Visualization style"><button>Bars</button><button>Wave</button></div> <input class="seek svelte-bhx1m2" type="range" min="0" step="0.01" aria-label="Seek"/> <div class="times svelte-bhx1m2"><span> </span><span> </span></div> <div class="transport svelte-bhx1m2"><!> <button class="play svelte-bhx1m2"><!></button> <!></div> <!><div class="media-root svelte-bhx1m2"></div> <div class="status svelte-bhx1m2" role="status"> </div> <audio preload="metadata" class="svelte-bhx1m2"></audio></div>');
const vo = {
  hash: "svelte-bhx1m2",
  code: ".media-root.svelte-bhx1m2{display:none}.mix-player.svelte-bhx1m2{height:auto!important;min-height:480px}.mixer.svelte-bhx1m2{margin-bottom:12px}.repeat.svelte-bhx1m2{display:flex;align-items:center;justify-content:center;gap:8px;font-size:12px;margin:0 0 14px}.channel.svelte-bhx1m2{display:flex;align-items:center;gap:8px;margin:12px 0}.channel.svelte-bhx1m2 span:where(.svelte-bhx1m2){width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px}.channel.svelte-bhx1m2 input:where(.svelte-bhx1m2){flex:1;min-width:0}:host{display:block;width:360px;max-width:100%;font-family:Arial,Helvetica,sans-serif}.player.svelte-bhx1m2{--ink:#f6f8fa;--muted:#8e9da9;--accent:#00c5df;--line:#3b454e;box-sizing:border-box;height:480px;background:radial-gradient(ellipse at 50% 42%,#273238 0%,#20282c 65%,#1e2529 100%);color:var(--ink);border:1px solid #ffffff15;border-radius:12px;padding:23px 24px 18px;box-shadow:0 12px 24px #0003;position:relative}.light.svelte-bhx1m2{--ink:#27323b;--muted:#8793a0;--accent:#00bcd6;--line:#d4dbe2;background:linear-gradient(130deg,#fff,#fafcfd);border-color:#e3e7eb}.eyebrow.svelte-bhx1m2{text-align:center;font-size:10px;letter-spacing:1px;color:var(--muted)}h2.svelte-bhx1m2{text-align:center;font-size:20px;font-weight:700;margin:7px 0 0;line-height:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}canvas.svelte-bhx1m2{display:block;width:calc(100% + 24px);height:155px;margin:13px -12px 12px}.switch.svelte-bhx1m2{display:flex;box-sizing:border-box;width:188px;height:32px;margin:0 auto 27px;padding:2px;border:1px solid var(--line);border-radius:18px;background:#ffffff04}.light.svelte-bhx1m2 .switch:where(.svelte-bhx1m2){background:#f0f3f7}.switch.svelte-bhx1m2 button:where(.svelte-bhx1m2){width:50%;font-size:12px;padding:3px;border-radius:15px}.chosen.svelte-bhx1m2{background:linear-gradient(130deg,#00cbe5,#00a6c1);color:#fff!important;box-shadow:0 0 0 1px #42e3f1}.light.svelte-bhx1m2 .chosen:where(.svelte-bhx1m2){box-shadow:none}button.svelte-bhx1m2{border:0;background:transparent;color:var(--ink);cursor:pointer;font:inherit;display:inline-flex;justify-content:center;align-items:center}button.svelte-bhx1m2:disabled{opacity:.3;cursor:default}button.svelte-bhx1m2:focus-visible,input.svelte-bhx1m2:focus-visible{outline:2px solid var(--accent);outline-offset:4px}input[type=range].svelte-bhx1m2{appearance:none;-webkit-appearance:none;display:block;height:4px;border-radius:4px;background:linear-gradient(to right,var(--accent) 0%,var(--accent) var(--progress,0%),var(--line) var(--progress,0%),var(--line) 100%);cursor:pointer}input[type=range].svelte-bhx1m2::-webkit-slider-thumb{appearance:none;width:14px;height:14px;border-radius:50%;background:#fff;border:1px solid #d5eef2;box-shadow:0 2px 4px #0002}input[type=range].svelte-bhx1m2::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:1px solid #d5eef2}.seek.svelte-bhx1m2{width:100%;margin:0}.times.svelte-bhx1m2{display:flex;justify-content:space-between;font-size:12px;color:var(--ink);margin-top:9px;line-height:14px}.transport.svelte-bhx1m2{display:flex;justify-content:center;align-items:center;gap:42px;margin:16px 0 21px;height:64px}.transport.svelte-bhx1m2>button:where(.svelte-bhx1m2):not(.play){padding:4px}.play.svelte-bhx1m2{width:64px;height:64px;border-radius:50%;background:linear-gradient(130deg,#00c9e4,#00a6c1);border:1px solid #66e5f3;color:white;box-shadow:0 0 20px #00c7e322}.volume.svelte-bhx1m2{display:flex;align-items:center;gap:15px;height:24px}.volume.svelte-bhx1m2 input:where(.svelte-bhx1m2){flex:1;min-width:0}.volume.svelte-bhx1m2 button:where(.svelte-bhx1m2){padding:0}.status.svelte-bhx1m2{position:absolute;bottom:3px;left:10px;right:10px;min-height:12px;text-align:center;font-size:10px;color:var(--muted)}audio.svelte-bhx1m2{display:none}"
};
function po(e, t) {
  pn(t, !0), ka(e, vo);
  let r = ee(t, "track", 15, null), n = ee(t, "playlist", 31, () => Re([])), i = ee(t, "theme", 15, "dark"), s = ee(t, "playbackMode", 15, "single"), a = ee(t, "mix", 31, () => Re({ base: null, layers: [] })), l = /* @__PURE__ */ z(void 0), o = /* @__PURE__ */ z(void 0), u = /* @__PURE__ */ z(0), c = /* @__PURE__ */ z(!1), h = /* @__PURE__ */ z(0), v = /* @__PURE__ */ z(0), p = /* @__PURE__ */ z(0.75), d = /* @__PURE__ */ z(!1), g = /* @__PURE__ */ z("bars"), T = /* @__PURE__ */ z(""), w = /* @__PURE__ */ z(!1), b, B, k = /* @__PURE__ */ z(Re({
    playing: !1,
    time: 0,
    duration: 0,
    error: "",
    loading: !1
  })), L = /* @__PURE__ */ z(!1), P = /* @__PURE__ */ ve(() => s() === "layers"), S = /* @__PURE__ */ ve(() => f(P) ? a().base?.track : f(ne)), E = /* @__PURE__ */ ve(() => f(P) ? f(k).time : f(h)), x = /* @__PURE__ */ ve(() => f(P) ? f(k).duration : f(v)), j = /* @__PURE__ */ ve(() => f(P) ? f(k).playing : f(c));
  function D(_, N, m) {
    const G = (Z) => Z?.id === _ ? { ...Z, volume: N ?? Z.volume, muted: m ?? Z.muted } : Z;
    a({ base: G(a().base), layers: a().layers.map(G) }), We("mixchange", { mix: a() });
  }
  let ne = /* @__PURE__ */ z(null), Qe = /* @__PURE__ */ z(null), Nt = /* @__PURE__ */ z(null);
  function We(_, N) {
    f(l)?.parentElement?.dispatchEvent(new CustomEvent(_, { detail: N, bubbles: !0, composed: !0 }));
  }
  function Sr(_) {
    y(T, ""), y(h, 0), y(v, 0), y(w, !0), f(l).src = _.url, f(l).load(), f(l).play().catch(() => {
      y(c, !1), y(w, !1);
    }), We("trackchange", { track: _, index: f(u) });
  }
  function An() {
    if (f(P)) {
      b.playing ? b.pause() : b.play();
      return;
    }
    f(ne) && (f(l).paused ? f(l).play().catch(() => y(T, "Press Play to start, or check the audio URL.")) : f(l).pause());
  }
  function Tr(_) {
    const N = so(f(u), n().length, _);
    N !== f(u) && (y(u, N, !0), y(ne, n()[f(u)], !0));
  }
  function As() {
    y(c, !1), f(u) < n().length - 1 ? Tr(1) : We("queueended", {});
  }
  function Ar(_) {
    return Number.isFinite(_) ? `${Math.floor(_ / 60)}:${String(Math.floor(_ % 60)).padStart(2, "0")}` : "0:00";
  }
  ma(() => {
    b = new no(
      () => {
        const m = document.createElement("audio");
        return B.append(m), m;
      },
      (m) => {
        y(k, m, !0);
      }
    ), b.update(a());
    let _;
    function N() {
      const m = f(o).getContext("2d");
      if (m) {
        const G = f(o).width, Z = f(o).height;
        m.clearRect(0, 0, G, Z);
        const Q = io(f(S)?.visualization, f(P) ? f(k).time : f(l)?.currentTime ?? 0);
        if (m.strokeStyle = i() === "light" ? "#00bdd5" : "#10cfe4", m.fillStyle = m.strokeStyle, m.lineWidth = 1.1, f(l)?.currentTime, f(g) === "bars")
          for (let R = 0; R < 36; R++) {
            const I = R / 35 * (Q.length - 1), be = Math.max(0, Math.floor(I)), vt = 5 + (Q.length ? Q[be] + ((Q[Math.min(be + 1, Q.length - 1)] ?? Q[be]) - Q[be]) * (I - be) : 0.025) * 140, pt = R * G / 36 + 3, _t = G / 36 - 6, He = 169, Mt = m.createLinearGradient(0, He - vt, 0, He);
            Mt.addColorStop(0, "#16dded"), Mt.addColorStop(1, "#009daf"), m.fillStyle = Mt, m.beginPath(), m.roundRect(pt, He - vt, _t, vt, 5), m.fill(), m.globalAlpha = 0.14, m.beginPath(), m.roundRect(pt, He + 5, _t, vt * 0.26, 4), m.fill(), m.globalAlpha = 1;
          }
        else {
          for (let R = 0; R < 28; R++) {
            m.globalAlpha = 0.18 + R / 100, m.beginPath();
            for (let I = 0; I <= G; I += 2) {
              const be = Z / 2 + lo(Q, I / G, R);
              I ? m.lineTo(I, be) : m.moveTo(I, be);
            }
            m.stroke();
          }
          m.globalAlpha = 1;
        }
      }
      _ = requestAnimationFrame(N);
    }
    return N(), () => {
      cancelAnimationFrame(_), b.destroy(), f(l).pause(), f(l).removeAttribute("src"), f(l).load();
    };
  }), ur(() => {
    const _ = r(), N = n();
    ze(() => {
      if (_ === f(Qe) && N === f(Nt)) return;
      const m = _ !== f(Qe);
      y(Qe, _, !0), y(Nt, N, !0);
      const G = m && _ ? _ : f(ne), Z = G ? N.findIndex((Q) => Q.url === G.url) : -1;
      y(u, Z >= 0 ? Z : 0, !0), y(
        ne,
        m && _ ? _ : Z >= 0 ? G : N[0] ?? _,
        !0
      );
    });
  }), ur(() => {
    if (f(l) && f(ne) && !f(P)) {
      const _ = f(ne);
      ze(() => Sr(_));
    }
  }), ur(() => {
    const _ = a(), N = f(P), m = f(L);
    ze(() => {
      b && (b.repeat = m, N ? (f(l).pause(), b.update(_)) : b.pause());
    });
  });
  var Ns = {
    get track() {
      return r();
    },
    set track(_ = null) {
      r(_), q();
    },
    get playlist() {
      return n();
    },
    set playlist(_ = []) {
      n(_), q();
    },
    get theme() {
      return i();
    },
    set theme(_ = "dark") {
      i(_), q();
    },
    get playbackMode() {
      return s();
    },
    set playbackMode(_ = "single") {
      s(_), q();
    },
    get mix() {
      return a();
    },
    set mix(_ = { base: null, layers: [] }) {
      a(_), q();
    }
  }, nr = ho();
  let Nn;
  var Nr = H(le(nr), 2), Ms = Ot(Nr, !0), Mn = H(Nr, 2);
  Br(Mn, (_) => y(o, _), () => f(o));
  var Mr = H(Mn, 2), ir = le(Mr);
  let Cn;
  var Cr = H(ir);
  let On;
  se(Mr);
  var Be = H(Mr, 2);
  Vt(Be);
  var Or = H(Be, 2), Pn = le(Or), Cs = Ot(Pn, !0), Os = H(Pn), Ps = Ot(Os, !0);
  se(Or);
  var Pr = H(Or, 2), Ln = le(Pr);
  {
    var Ls = (_) => {
      var N = ao(), m = le(N);
      xs(m, { size: 25, fill: "currentColor" }), se(N), Pt(() => N.disabled = f(u) === 0), me("click", N, () => Tr(-1)), Se(_, N);
    };
    et(Ln, (_) => {
      !f(P) && n().length > 1 && _(Ls);
    });
  }
  var ht = H(Ln, 2), Rs = le(ht);
  {
    var Is = (_) => {
      bs(_, { size: 32, fill: "currentColor" });
    }, zs = (_) => {
      ws(_, { size: 32, fill: "currentColor" });
    };
    et(Rs, (_) => {
      f(j) ? _(Is) : _(zs, -1);
    });
  }
  se(ht);
  var Ds = H(ht, 2);
  {
    var Fs = (_) => {
      var N = oo(), m = le(N);
      ks(m, { size: 25, fill: "currentColor" }), se(N), Pt(() => N.disabled = f(u) >= n().length - 1), me("click", N, () => Tr(1)), Se(_, N);
    };
    et(Ds, (_) => {
      !f(P) && n().length > 1 && _(Fs);
    });
  }
  se(Pr);
  var Rn = H(Pr, 2);
  {
    var js = (_) => {
      var N = fo(), m = le(N), G = le(m);
      Vt(G), di(), se(m);
      var Z = H(m);
      as(Z, 17, () => Ts(a()), ls, (Q, R, I) => {
        var be = ns(), Dn = zi(be);
        {
          var vt = (pt) => {
            var _t = uo(), He = le(_t), Mt = Ot(He), gt = H(He), Bs = le(gt);
            {
              var Hs = (Ue) => {
                on(Ue, { size: 18 });
              }, Us = (Ue) => {
                an(Ue, { size: 18 });
              };
              et(Bs, (Ue) => {
                f(R).muted ? Ue(Hs) : Ue(Us, -1);
              });
            }
            se(gt);
            var sr = H(gt);
            Vt(sr), K(sr, "aria-label", `${I === 0 ? "Base" : `Layer ${I}`} volume`), se(_t), Pt(() => {
              K(He, "title", f(R).track.title), Lt(Mt, `${I === 0 ? "Base" : `Layer ${I}`}: ${f(R).track.title ?? ""}`), K(gt, "aria-label", `${f(R).muted ? "Unmute" : "Mute"} ${I === 0 ? "base" : `layer ${I}`}`), K(gt, "aria-pressed", f(R).muted), ti(sr, f(R).volume);
            }), me("click", gt, () => D(f(R).id, void 0, !f(R).muted)), me("input", sr, (Ue) => D(f(R).id, Number(Ue.currentTarget.value))), Se(pt, _t);
          };
          et(Dn, (pt) => {
            f(R) && pt(vt);
          });
        }
        Se(Q, be);
      }), se(N), Ia(G, () => f(L), (Q) => y(L, Q)), Se(_, N);
    }, Vs = (_) => {
      var N = co(), m = le(N), G = le(m);
      {
        var Z = (I) => {
          on(I, { size: 25 });
        }, Q = (I) => {
          an(I, { size: 25 });
        };
        et(G, (I) => {
          f(d) ? I(Z) : I(Q, -1);
        });
      }
      se(m);
      var R = H(m);
      Vt(R), se(N), Pt(() => {
        K(m, "aria-label", f(d) ? "Unmute" : "Mute"), K(m, "aria-pressed", f(d)), rn(R, `--progress:${f(p) * 100}%`);
      }), me("click", m, () => y(d, !f(d))), me("input", R, () => {
        f(p) > 0 && y(d, !1);
      }), Ra(R, () => f(p), (I) => y(p, I)), Se(_, N);
    };
    et(Rn, (_) => {
      f(P) ? _(js) : _(Vs, -1);
    });
  }
  var In = H(Rn);
  Br(In, (_) => B = _, () => B);
  var zn = H(In, 2), Ws = Ot(zn, !0), ie = H(zn, 2);
  return Br(ie, (_) => y(l, _), () => f(l)), se(nr), Pt(
    (_, N, m) => {
      Nn = fr(nr, 1, "player svelte-bhx1m2", null, Nn, { light: i() === "light", "mix-player": f(P) }), K(Nr, "title", f(S)?.title), Lt(Ms, f(S)?.title ?? "Choose a track"), K(ir, "aria-pressed", f(g) === "bars"), Cn = fr(ir, 1, "svelte-bhx1m2", null, Cn, { chosen: f(g) === "bars" }), K(Cr, "aria-pressed", f(g) === "wave"), On = fr(Cr, 1, "svelte-bhx1m2", null, On, { chosen: f(g) === "wave" }), rn(Be, `--progress:${f(x) ? f(E) / f(x) * 100 : 0}%`), K(Be, "max", f(x) || 0), ti(Be, f(E)), Be.disabled = !f(x), K(Be, "aria-valuetext", _), Lt(Cs, N), Lt(Ps, m), ht.disabled = !f(S), K(ht, "aria-label", f(j) ? "Pause" : "Play"), Lt(Ws, (f(P) ? f(k).error : f(T)) || ((f(P) ? f(k).loading : f(w)) ? "Loading…" : ""));
    },
    [
      () => Ar(f(E)),
      () => Ar(f(E)),
      () => Ar(f(x))
    ]
  ), me("click", ir, () => y(g, "bars")), me("click", Cr, () => y(g, "wave")), me("input", Be, (_) => {
    f(P) ? b.seek(Number(_.currentTarget.value)) : (f(l).currentTime = Number(_.currentTarget.value), y(h, f(l).currentTime, !0));
  }), me("click", ht, An), de("play", ie, () => {
    y(c, !0), y(w, !1), We("play", {});
  }), de("pause", ie, () => {
    y(c, !1), We("pause", {});
  }), de("timeupdate", ie, () => y(h, f(l).currentTime, !0)), de("loadedmetadata", ie, () => {
    y(v, Number.isFinite(f(l).duration) ? f(l).duration : 0, !0);
  }), de("canplay", ie, () => y(w, !1)), de("seeking", ie, () => y(w, !0)), de("seeked", ie, () => {
    f(l).readyState >= 3 && y(w, !1);
  }), de("waiting", ie, () => y(w, !0)), de("stalled", ie, () => {
    f(l).paused || y(w, !0);
  }), de("playing", ie, () => y(w, !1)), de("ended", ie, As), de("error", ie, () => {
    y(w, !1), y(c, !1), y(T, "Unable to load this audio track."), We("playbackerror", { track: f(ne) });
  }), za(ie, () => f(p), (_) => y(p, _)), Da(ie, () => f(d), (_) => y(d, _)), Se(e, nr), _n(Ns);
}
ts(["click", "input"]);
customElements.define("compact-audio-player", Ze(
  po,
  {
    track: { type: "Object" },
    playlist: { type: "Array" },
    theme: { type: "String" },
    playbackMode: { type: "String" },
    mix: { type: "Object" }
  },
  [],
  [],
  { mode: "open" }
));
