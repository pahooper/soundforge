typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const Cn = 1, Nn = 4, Pn = 8, Ln = 16, Dn = 2, Pr = "[", Lr = "[!", br = "[?", Dr = "]", De = {}, B = /* @__PURE__ */ Symbol("uninitialized"), In = "http://www.w3.org/1999/xhtml", Ir = !1;
var Fn = Array.isArray, zn = Array.prototype.indexOf, vt = Array.prototype.includes, jn = Array.from, Tt = Object.keys, _t = Object.defineProperty, Je = Object.getOwnPropertyDescriptor, Bn = Object.prototype, Hn = Array.prototype, Jn = Object.getPrototypeOf, wr = Object.isExtensible;
const Un = () => {
};
function Yn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Fr() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const G = 2, Qe = 4, Dt = 8, zr = 1 << 24, he = 16, ye = 32, Re = 64, Xt = 128, lr = 256, _e = 512, H = 1024, I = 2048, oe = 4096, fe = 8192, V = 16384, qe = 32768, pt = 1 << 25, et = 65536, Ot = 1 << 17, qn = 1 << 18, Ve = 1 << 19, Vn = 1 << 20, Rt = 1 << 21, Xe = 1 << 22, Le = 1 << 23, ft = /* @__PURE__ */ Symbol("$state"), jr = /* @__PURE__ */ Symbol("component"), Br = /* @__PURE__ */ Symbol("legacy props"), Hr = /* @__PURE__ */ Symbol("attributes"), Zt = /* @__PURE__ */ Symbol("class"), Gn = /* @__PURE__ */ Symbol("style"), Qt = /* @__PURE__ */ Symbol("text"), St = /* @__PURE__ */ Symbol("form reset"), mt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Wn = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), or = 3, It = 8;
function Kn() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ft(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Xn() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let R = !1;
function We(e) {
  R = e;
}
let L;
function xe(e) {
  if (e === null)
    throw Ft(), De;
  return L = e;
}
function fr() {
  return xe(/* @__PURE__ */ Ie(L));
}
function Se(e) {
  if (R) {
    if (/* @__PURE__ */ Ie(L) !== null)
      throw Ft(), De;
    L = e;
  }
}
function Zn(e = 1) {
  if (R) {
    for (var t = e, r = L; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Ie(r);
    L = r;
  }
}
function Jr(e = !0) {
  for (var t = 0, r = L; ; ) {
    if (r.nodeType === It) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Dr) {
        if (t === 0) return r;
        t -= 1;
      } else (n === Pr || n === Lr || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ie(r)
    );
    e && r.remove(), r = s;
  }
}
function Ur(e) {
  if (!e || e.nodeType !== It)
    throw Ft(), De;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Yr(e) {
  return e === this.v;
}
function Qn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function qr(e) {
  return !Qn(e, this.v);
}
function es() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ts(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function rs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ns(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ss() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function is() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function as(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ls() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function os() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function fs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function us() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let cs = !1, W = null;
function tt(e) {
  W = e;
}
function Vr(e, t = !1, r) {
  W = {
    p: W,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      m
    ),
    l: null
  };
}
function Gr(e) {
  var t = (
    /** @type {ComponentContext} */
    W
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      hn(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, W = t.p, ur(e);
}
function ur(e = {}) {
  return _t(e, jr, { value: !0 }), e;
}
function Wr() {
  return !0;
}
let je = [];
function Kr() {
  var e = je;
  je = [], Yn(e);
}
function Be(e) {
  if (je.length === 0 && !ut) {
    var t = je;
    queueMicrotask(() => {
      t === je && Kr();
    });
  }
  je.push(e);
}
function hs() {
  for (; je.length > 0; )
    Kr();
}
const ds = -7169;
function P(e, t) {
  e.f = e.f & ds | t;
}
function cr(e) {
  (e.f & _e) !== 0 || e.deps === null ? P(e, H) : P(e, oe);
}
function Xr(e, t, r) {
  (e.f & I) !== 0 ? t.add(e) : (e.f & oe) !== 0 && r.add(e), P(e, H);
}
function yr(e) {
  R && /* @__PURE__ */ rt(e) !== null && un(e);
}
let xr = !1;
function vs() {
  xr || (xr = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t[St]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function bt(e) {
  var t = b, r = m;
  ue(null), $e(null);
  try {
    return e();
  } finally {
    ue(t), $e(r);
  }
}
function _s(e, t, r, n = r) {
  e.addEventListener(t, () => bt(r));
  const s = (
    /** @type {any} */
    e[St]
  );
  s ? e[St] = () => {
    s(), n(!0);
  } : e[St] = () => n(!0), vs();
}
function ps(e, t, r, n) {
  const s = Nt;
  var i = e.filter((h) => !h.settled), l = t.map(s);
  if (r.length === 0 && i.length === 0) {
    n(l);
    return;
  }
  var a = (
    /** @type {Effect} */
    m
  ), o = gs(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((h) => h.promise)) : null;
  function c(h) {
    if ((a.f & V) === 0) {
      o();
      try {
        n([...l, ...h]);
      } catch (v) {
        me(v, a);
      }
      Ct();
    }
  }
  var u = Zr();
  if (r.length === 0) {
    f.then(() => c([])).finally(u);
    return;
  }
  function d() {
    Promise.all(r.map((h) => /* @__PURE__ */ ms(h))).then(c).catch((h) => me(h, a)).finally(u);
  }
  f ? f.then(() => {
    if ((a.f & V) !== 0) {
      u();
      return;
    }
    o(), d(), Ct();
  }) : d();
}
function gs() {
  var e = (
    /** @type {Effect} */
    m
  ), t = b, r = W, n = (
    /** @type {Batch} */
    g
  );
  return function(i = !0) {
    $e(e), ue(t), tt(r), i && (e.f & V) === 0 && (n?.activate(), n?.apply());
  };
}
function Ct(e = !0) {
  $e(null), ue(null), tt(null), e && g?.deactivate();
}
function Zr() {
  var e = (
    /** @type {Effect} */
    m
  ), t = e.b, r = (
    /** @type {Batch} */
    g
  ), n = !!t?.is_rendered();
  return t?.update_pending_count(1, r), r.increment(n, e), () => {
    t?.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  var t = G | I;
  return m !== null && (m.f |= Ve), {
    ctx: W,
    deps: null,
    effects: null,
    equals: Yr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      B
    ),
    wv: 0,
    parent: m,
    ac: null
  };
}
const lt = /* @__PURE__ */ Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function ms(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    m
  );
  n === null && es();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = wt(
    /** @type {V} */
    B
  ), l = !b, a = /* @__PURE__ */ new Set();
  return Ps(() => {
    var o = (
      /** @type {Effect} */
      m
    ), f = Fr();
    s = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, (h) => {
        h !== mt && f.reject(h);
      }).finally(Ct);
    } catch (h) {
      f.reject(h), Ct();
    }
    var c = (
      /** @type {Batch} */
      g
    );
    if (l) {
      if ((o.f & qe) !== 0)
        var u = Zr();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        n.b?.is_rendered()
      )
        c.async_deriveds.get(o)?.reject(lt);
      else
        for (const h of a.values())
          h.reject(lt);
      a.add(f), c.async_deriveds.set(o, f);
    }
    const d = (h, v = void 0) => {
      u?.(), a.delete(f), v !== lt && (c.activate(), v ? (i.f |= Le, Lt(i, v)) : ((i.f & Le) !== 0 && (i.f ^= Le), Lt(i, h)), c.deactivate());
    };
    f.promise.then(d, (h) => d(null, h || "unknown"));
  }), Os(() => {
    for (const o of a)
      o.reject(lt);
  }), new Promise((o) => {
    function f(c) {
      function u() {
        c === s ? o(i) : f(s);
      }
      c.then(u, u);
    }
    f(s);
  });
}
// @__NO_SIDE_EFFECTS__
function bs(e) {
  const t = /* @__PURE__ */ Nt(e);
  return t.equals = qr, t;
}
function ws(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Z(
        /** @type {Effect} */
        t[r]
      );
  }
}
function hr(e) {
  var t, r = m, n = e.parent;
  if (!Ne && n !== null && e.v !== B && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (V | fe)) !== 0)
    return Kn(), e.v;
  $e(n);
  try {
    ws(e), t = $n(e);
  } finally {
    $e(r);
  }
  return t;
}
function Qr(e) {
  var t = hr(e);
  if (!e.equals(t) && (e.wv = yn(), (!g?.is_fork || e.deps === null) && (g !== null ? (g.capture(e, t, !0), Ze?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    P(e, H);
    return;
  }
  Ne || (de !== null ? (pr() || g?.is_fork) && de.set(e, t) : cr(e));
}
function ys(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && bt(() => {
        t.ac.abort(mt), t.ac = null;
      }), t.fn !== null && (t.teardown = Un), gt(t, 0), gr(t));
}
function en(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && nt(t);
}
let Ht = null, Ge = null, g = null, Ze = null, de = null, er = null, ut = !1, Jt = !1, ct = null, At = null;
var $r = 0;
let xs = 1;
class Ce {
  id = xs++;
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
  #p = [];
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
  #h = /* @__PURE__ */ new Map();
  /**
   * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
   * @type {Set<Effect>}
   */
  #g = /* @__PURE__ */ new Set();
  is_fork = !1;
  #c = !1;
  constructor() {
    Ge === null ? Ht = Ge = this : (Ge.#r = this, this.#t = Ge), Ge = this;
  }
  #y() {
    if (this.is_fork) return !0;
    for (const n of this.#n.keys()) {
      for (var t = n, r = !1; t.parent !== null; ) {
        if (this.#h.has(t)) {
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
    this.#h.has(t) || this.#h.set(t, { d: [], m: [] }), this.#g.delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = this.#h.get(t);
    if (n) {
      this.#h.delete(t);
      for (var s of n.d)
        P(s, I), r(s);
      for (s of n.m)
        P(s, oe), r(s);
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
      if (!((i.f & V) !== 0 || (i.f & (I | oe)) === 0)) {
        for (var r = i, n = !1; r.parent !== null; ) {
          r = r.parent;
          var s = r.f;
          if ((s & (Re | ye)) !== 0) {
            if ((s & H) === 0) {
              n = !0;
              break;
            }
            r.f ^= H;
          }
        }
        n || t.push(r);
      }
    return this.#i = [], t;
  }
  #m() {
    this.#e = !0;
    for (const a of this.#f)
      this.#u.delete(a), P(a, I), this.schedule(a);
    for (const a of this.#u)
      P(a, oe), this.schedule(a);
    this.apply();
    for (var t = ct = [], r = [], n = At = []; this.#i.length > 0; ) {
      $r++ > 1e3 && (this.#_(), $s());
      for (const a of this.#x())
        try {
          this.#b(a, t, r);
        } catch (o) {
          throw nn(a), this.#y() || this.discard(), o;
        }
    }
    if (g = null, n.length > 0) {
      var s = Ce.ensure();
      for (const a of n)
        s.schedule(a);
    }
    if (ct = null, At = null, this.#y()) {
      this.#v(r), this.#v(t);
      for (const [a, o] of this.#h)
        rn(a, o);
      n.length > 0 && /** @type {unknown} */
      g.#m();
      return;
    }
    const i = this.#d();
    if (i) {
      this.#v(r), this.#v(t), i.#$(this);
      return;
    }
    this.#f.clear(), this.#u.clear();
    for (const a of this.#o) a(this);
    this.#o.clear(), Ze = this, kr(r), kr(t), Ze = null, this.#l?.resolve();
    var l = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      g
    );
    if (this.#a === 0 && (this.#i.length === 0 || l !== null) && this.#_(), this.#i.length > 0)
      if (l !== null) {
        for (const a of this.#i)
          l.#i.push(a);
        this.#i = [];
      } else
        l = this;
    l !== null && (be.clear(), l.#m());
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #b(t, r, n) {
    t.f ^= H;
    for (var s = t.first; s !== null; ) {
      var i = s.f, l = (i & (ye | Re)) !== 0, a = l && (i & H) !== 0, o = a || (i & fe) !== 0 || this.#h.has(s);
      if (!o && s.fn !== null) {
        l ? s.f ^= H : (i & Qe) !== 0 ? r.push(s) : yt(s) && ((i & he) !== 0 && this.#u.add(s), nt(s));
        var f = s.first;
        if (f !== null) {
          s = f;
          continue;
        }
      }
      for (; s !== null; ) {
        var c = s.next;
        if (c !== null) {
          s = c;
          break;
        }
        s = s.parent;
      }
    }
  }
  #d() {
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
    for (const [n, s] of t.current)
      !this.previous.has(n) && t.previous.has(n) && this.previous.set(n, t.previous.get(n)), this.current.set(n, s);
    for (const [n, s] of t.async_deriveds) {
      const i = this.async_deriveds.get(n);
      i && s.promise.then(i.resolve).catch(i.reject);
    }
    t.async_deriveds.clear(), this.transfer_effects(t.#f, t.#u);
    const r = (n) => {
      var s = n.reactions;
      if (s !== null && !((n.f & G) !== 0 && (n.f & (I | oe)) === 0))
        for (const a of s) {
          var i = a.f;
          if ((i & G) !== 0)
            r(
              /** @type {Derived} */
              a
            );
          else {
            var l = (
              /** @type {Effect} */
              a
            );
            i & (Xe | he) && !this.async_deriveds.has(l) && (this.#u.delete(l), P(l, I), this.schedule(l));
          }
        }
    };
    for (const n of this.current.keys())
      r(n);
    this.oncommit(() => t.discard()), t.#_(), g = this, this.#m();
  }
  /**
   * @param {Effect[]} effects
   */
  #v(t) {
    for (var r = 0; r < t.length; r += 1)
      Xr(t[r], this.#f, this.#u);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== B && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Le) === 0 && (this.current.set(t, [r, n]), de?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    g = this;
  }
  deactivate() {
    g = null, de = null;
  }
  flush() {
    try {
      Jt = !0, g = this, this.#m();
    } finally {
      $r = 0, er = null, ct = null, At = null, Jt = !1, g = null, de = null, be.clear();
    }
  }
  discard() {
    for (const t of this.#s) t(this);
    this.#s.clear();
    for (const t of this.async_deriveds.values())
      t.reject(lt);
    this.#_(), this.#l?.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    this.#p.push(t);
  }
  #w() {
    for (let u = Ht; u !== null; u = u.#r) {
      var t = u.id < this.id, r = [];
      for (const [d, [h, v]] of this.current) {
        if (u.current.has(d)) {
          var n = (
            /** @type {[any, boolean]} */
            u.current.get(d)[0]
          );
          if (t && h !== n)
            u.current.set(d, [h, v]);
          else
            continue;
        }
        r.push(d);
      }
      if (t)
        for (const [d, h] of this.async_deriveds) {
          const v = u.async_deriveds.get(d);
          v && h.promise.then(v.resolve).catch(v.reject);
        }
      var s = [...u.current.keys()].filter(
        (d) => !/** @type {[any, boolean]} */
        u.current.get(d)[1]
      );
      if (!(!u.#e || s.length === 0)) {
        var i = s.filter((d) => !this.current.has(d));
        if (i.length === 0)
          t && u.discard();
        else if (r.length > 0) {
          if (t)
            for (const d of this.#g)
              u.unskip_effect(d, (h) => {
                (h.f & (he | Xe)) !== 0 ? u.schedule(h) : u.#v([h]);
              });
          u.activate();
          var l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
          for (var o of r)
            tn(o, i, l, a);
          a = /* @__PURE__ */ new Map();
          var f = [...u.current].filter(([d, h]) => {
            const v = this.current.get(d);
            return v ? v[0] !== h[0] || v[1] !== h[1] : !0;
          }).map(([d]) => d);
          if (f.length > 0)
            for (const d of this.#p)
              (d.f & (V | fe | Ot)) === 0 && dr(d, f, a) && ((d.f & (Xe | he)) !== 0 ? (P(d, I), u.schedule(d)) : u.#f.add(d));
          if (u.#i.length > 0 && !u.#c) {
            u.apply();
            for (var c of u.#x())
              u.#b(c, [], []);
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
    this.#c || (this.#c = !0, Be(() => {
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
    return (this.#l ??= Fr()).promise;
  }
  static ensure() {
    if (g === null) {
      const t = g = new Ce();
      !Jt && !ut && Be(() => {
        t.#e || t.flush();
      });
    }
    return g;
  }
  apply() {
    {
      de = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (er = t, t.b?.is_pending && (t.f & (Qe | Dt | zr)) !== 0 && (t.f & qe) === 0) {
      t.b.defer_effect(t);
      return;
    }
    this.#i.push(t);
  }
  #_() {
    if (this.linked) {
      var t = this.#t, r = this.#r;
      t === null ? Ht = r : t.#r = r, r === null ? Ge = t : r.#t = t, this.linked = !1;
    }
  }
}
function Ke(e) {
  var t = ut, r = Ze;
  Ze = null, ut = !0;
  try {
    for (var n; ; ) {
      if (hs(), g === null)
        return (
          /** @type {T} */
          n
        );
      g.flush();
    }
  } finally {
    ut = t, Ze = r;
  }
}
function $s() {
  try {
    ss();
  } catch (e) {
    me(e, er);
  }
}
let Me = null;
function kr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (V | fe)) === 0 && yt(n) && (Me = /* @__PURE__ */ new Set(), nt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && pn(n), Me?.size > 0)) {
        be.clear();
        for (const s of Me) {
          if ((s.f & (V | fe)) !== 0) continue;
          const i = [s];
          let l = s.parent;
          for (; l !== null; )
            Me.has(l) && (Me.delete(l), i.push(l)), l = l.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const o = i[a];
            (o.f & (V | fe)) === 0 && nt(o);
          }
        }
        Me.clear();
      }
    }
    Me = null;
  }
}
function tn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & G) !== 0 ? tn(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (Xe | he)) !== 0 && (i & I) === 0 && dr(s, t, n) && (P(s, I), vr(
        /** @type {Effect} */
        s
      ));
    }
}
function dr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (vt.call(t, s))
        return !0;
      if ((s.f & G) !== 0 && dr(
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
function vr(e) {
  g.schedule(e);
}
function rn(e, t) {
  if (!((e.f & ye) !== 0 && (e.f & H) !== 0)) {
    (e.f & I) !== 0 ? t.d.push(e) : (e.f & oe) !== 0 && t.m.push(e), P(e, H);
    for (var r = e.first; r !== null; )
      rn(r, t), r = r.next;
  }
}
function nn(e) {
  P(e, H);
  for (var t = e.first; t !== null; )
    nn(t), t = t.next;
}
let Pt = /* @__PURE__ */ new Set();
const be = /* @__PURE__ */ new Map();
let sn = !1;
function wt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Yr,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function ne(e, t) {
  const r = wt(e);
  return Is(r), r;
}
// @__NO_SIDE_EFFECTS__
function ks(e, t = !1, r = !0) {
  const n = wt(e);
  return t || (n.equals = qr), n;
}
function T(e, t, r = !1) {
  b !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ve || (b.f & Ot) !== 0) && Wr() && (b.f & (G | he | Xe | Ot)) !== 0 && (we === null || !we.has(e)) && fs();
  let n = r ? Oe(t) : t;
  return Lt(e, n, At);
}
var ze = null, tr = 0;
function Lt(e, t, r = null) {
  if (!e.equals(t)) {
    Ne ? be.set(e, t) : be.has(e) || be.set(e, e.v);
    var n = Ce.ensure();
    if (n.capture(e, t), (e.f & G) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & I) !== 0 && hr(s), de === null && cr(s);
    }
    e.wv = yn(), ze = null, tr = 0, an(e, I, r), ze = null, m !== null && (m.f & H) !== 0 && (m.f & (ye | Re)) === 0 && (le === null ? Fs([e]) : le.push(e)), !n.is_fork && Pt.size > 0 && !sn && Es();
  }
  return t;
}
function Es() {
  sn = !1;
  for (const e of Pt) {
    (e.f & H) !== 0 && P(e, oe);
    let t;
    try {
      t = yt(e);
    } catch {
      t = !0;
    }
    t && nt(e);
  }
  Pt.clear();
}
function ht(e) {
  T(e, e.v + 1);
}
function an(e, t, r) {
  var n = e.reactions;
  if (n !== null) {
    var s = n.length;
    if (tr += s, tr > 1e5 && ze === null && (ze = /* @__PURE__ */ new Set()), ze !== null) {
      if (ze.has(e)) return;
      ze.add(e);
    }
    for (var i = 0; i < s; i++) {
      var l = n[i], a = l.f, o = (a & I) === 0;
      if (o && P(l, t), (a & Ot) !== 0)
        Pt.add(
          /** @type {Effect} */
          l
        );
      else if ((a & G) !== 0) {
        var f = (
          /** @type {Derived} */
          l
        );
        de?.delete(f), an(f, oe, r);
      } else if (o) {
        var c = (
          /** @type {Effect} */
          l
        );
        (a & he) !== 0 && Me !== null && Me.add(c), r !== null ? r.push(c) : vr(c);
      }
    }
  }
}
function Oe(e) {
  if (typeof e != "object" || e === null || ft in e || jr in e)
    return e;
  const t = Jn(e);
  if (t !== Bn && t !== Hn)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Fn(e), s = /* @__PURE__ */ ne(0), i = Ue, l = (a) => {
    if (Ue === i)
      return a();
    var o = b, f = Ue;
    ue(null), Tr(i);
    var c = a();
    return ue(o), Tr(f), c;
  };
  return n && r.set("length", /* @__PURE__ */ ne(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, o, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && ls();
        var c = r.get(o);
        return c === void 0 ? l(() => {
          var u = /* @__PURE__ */ ne(f.value);
          return r.set(o, u), u;
        }) : T(c, f.value, !0), !0;
      },
      deleteProperty(a, o) {
        var f = r.get(o);
        if (f === void 0) {
          if (o in a) {
            const c = l(() => /* @__PURE__ */ ne(B));
            r.set(o, c), ht(s);
          }
        } else
          T(f, B), ht(s);
        return !0;
      },
      get(a, o, f) {
        if (o === ft)
          return e;
        var c = r.get(o), u = o in a;
        if (c === void 0 && (!u || Je(a, o)?.writable) && (c = l(() => {
          var h = Oe(u ? a[o] : B), v = /* @__PURE__ */ ne(h);
          return v;
        }), r.set(o, c)), c !== void 0) {
          var d = E(c);
          return d === B ? void 0 : d;
        }
        return Reflect.get(a, o, f);
      },
      getOwnPropertyDescriptor(a, o) {
        this.has?.(a, o);
        var f = Reflect.getOwnPropertyDescriptor(a, o), c = r.get(o);
        if (c !== void 0) {
          var u = E(c);
          if (u === B)
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
        if (o === ft)
          return !0;
        var f = r.get(o), c = f !== void 0 && f.v !== B || Reflect.has(a, o);
        if (f !== void 0 || m !== null && (!c || Je(a, o)?.writable)) {
          f === void 0 && (f = l(() => {
            var d = c ? Oe(a[o]) : B, h = /* @__PURE__ */ ne(d);
            return h;
          }), r.set(o, f));
          var u = E(f);
          if (u === B)
            return !1;
        }
        return c;
      },
      set(a, o, f, c) {
        var u = r.get(o), d = o in a;
        if (n && o === "length")
          for (var h = f; h < /** @type {Source<number>} */
          u.v; h += 1) {
            var v = r.get(h + "");
            v !== void 0 ? T(v, B) : h in a && (v = l(() => /* @__PURE__ */ ne(B)), r.set(h + "", v));
          }
        if (u === void 0)
          (!d || Je(a, o)?.writable) && (u = l(() => /* @__PURE__ */ ne(void 0)), T(u, Oe(f)), r.set(o, u));
        else {
          d = u.v !== B;
          var x = l(() => Oe(f));
          T(u, x);
        }
        var p = Reflect.getOwnPropertyDescriptor(a, o);
        if (p?.set && p.set.call(c, f), !d) {
          if (n && typeof o == "string") {
            var y = (
              /** @type {Source<number>} */
              r.get("length")
            ), D = Number(o);
            Number.isInteger(D) && D >= y.v && T(y, D + 1);
          }
          ht(s);
        }
        return !0;
      },
      ownKeys(a) {
        E(s);
        var o = Reflect.ownKeys(a).filter((u) => {
          var d = r.get(u);
          return d === void 0 || d.v !== B;
        });
        for (var [f, c] of r)
          c.v !== B && !(f in a) && o.push(f);
        return o;
      },
      setPrototypeOf() {
        os();
      }
    }
  );
}
var Er, ln, on, fn;
function rr() {
  if (Er === void 0) {
    Er = window, ln = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    on = Je(t, "firstChild").get, fn = Je(t, "nextSibling").get, wr(e) && (e[Zt] = void 0, e[Hr] = null, e[Gn] = void 0, e.__e = void 0), wr(r) && (r[Qt] = void 0);
  }
}
function Ye(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function rt(e) {
  return (
    /** @type {TemplateNode | null} */
    on.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  return (
    /** @type {TemplateNode | null} */
    fn.call(e)
  );
}
function Ae(e, t) {
  if (!R)
    return /* @__PURE__ */ rt(e);
  var r = /* @__PURE__ */ rt(L);
  if (r === null)
    r = L.appendChild(Ye());
  else if (t && r.nodeType !== or) {
    var n = Ye();
    return r?.before(n), xe(n), n;
  }
  return t && cn(
    /** @type {Text} */
    r
  ), xe(r), r;
}
function Ut(e, t = !1) {
  if (!R)
    return /* @__PURE__ */ rt(e);
  var r = Ae(e, t);
  return Se(e), r;
}
function re(e, t = 1, r = !1) {
  let n = R ? L : e;
  for (var s; t--; )
    s = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ie(n);
  if (!R)
    return n;
  if (r) {
    if (n?.nodeType !== or) {
      var i = Ye();
      return n === null ? s?.after(i) : n.before(i), xe(i), i;
    }
    cn(
      /** @type {Text} */
      n
    );
  }
  return xe(n), n;
}
function un(e) {
  e.textContent = "";
}
function Ss() {
  return !1;
}
function _r(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElement(e)
  );
}
function cn(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === or; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function As(e) {
  var t = m;
  if (t === null)
    return b.f |= Le, e;
  if ((t.f & qe) === 0 && (t.f & Qe) === 0)
    throw e;
  me(e, t);
}
function me(e, t) {
  if (e === De)
    throw e;
  if (!(t !== null && (t.f & V) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & Xt) !== 0 && (t.f & (V | pt)) === 0) {
        if ((t.f & qe) === 0)
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
function Ms(e) {
  m === null && (b === null && ns(), rs()), Ne && ts();
}
function Ts(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ke(e, t) {
  var r = m;
  r !== null && (r.f & fe) !== 0 && (e |= fe);
  var n = {
    ctx: W,
    deps: null,
    nodes: null,
    f: e | I | _e,
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
  g?.register_created_effect(n);
  var s = n;
  if ((e & Qe) !== 0)
    ct !== null ? ct.push(n) : Ce.ensure().schedule(n);
  else if (t !== null) {
    try {
      nt(n);
    } catch (l) {
      throw Z(n), l;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Ve) === 0 && (s = s.first, (e & he) !== 0 && (e & et) !== 0 && s !== null && (s.f |= et));
  }
  if (s !== null && (s.parent = r, r !== null && Ts(s, r), b !== null && (b.f & G) !== 0 && (e & Re) === 0)) {
    var i = (
      /** @type {Derived} */
      b
    );
    (i.effects ??= []).push(s);
  }
  return n;
}
function pr() {
  return b !== null && !ve;
}
function Os(e) {
  const t = ke(Dt, null);
  return P(t, H), t.teardown = e, t;
}
function Rs(e) {
  Ms();
  var t = (
    /** @type {Effect} */
    m.f
  ), r = !b && (t & ye) !== 0 && W !== null && !W.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      W
    );
    (n.e ??= []).push(e);
  } else
    return hn(e);
}
function hn(e) {
  return ke(Qe | Vn, e);
}
function Cs(e) {
  Ce.ensure();
  const t = ke(Re | Ve, e);
  return () => {
    Z(t);
  };
}
function Ns(e) {
  Ce.ensure();
  const t = ke(Re | Ve, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? dt(t, () => {
      Z(t), n(void 0);
    }) : (Z(t), n(void 0));
  });
}
function dn(e) {
  return ke(Qe, e);
}
function Ps(e) {
  return ke(Xe | Ve, e);
}
function zt(e, t = 0) {
  return ke(Dt | t, e);
}
function Sr(e, t = [], r = [], n = []) {
  ps(n, t, r, (s) => {
    ke(Dt, () => {
      e(...s.map(E));
    });
  });
}
function vn(e, t = 0) {
  var r = ke(he | t, e);
  return r;
}
function Te(e) {
  return ke(ye | Ve, e);
}
function _n(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Ne, n = b;
    Mr(!0), ue(null);
    try {
      t.call(null);
    } catch (s) {
      me(s, e.parent);
    } finally {
      Mr(r), ue(n);
    }
  }
}
function gr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && bt(() => {
      s.abort(mt);
    });
    var n = r.next;
    (r.f & Re) !== 0 ? r.parent = null : Z(r, t), r = n;
  }
}
function Ls(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ye) === 0 && Z(t), t = r;
  }
}
function Z(e, t = !0) {
  var r = !1;
  (t || (e.f & qn) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ds(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), e.f |= pt, gr(e, t && !r), gt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  _n(e), e.f ^= pt, e.f |= V;
  var s = e.parent;
  s !== null && s.first !== null && pn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ds(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Ie(e);
    e.remove(), e = r;
  }
}
function pn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function dt(e, t, r = !0) {
  var n = [];
  e.f |= lr, gn(e, n, !0);
  var s = () => {
    r && Z(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var l = () => --i || s();
    for (var a of n)
      a.out(l);
  } else
    s();
}
function gn(e, t, r) {
  if ((e.f & fe) === 0) {
    e.f ^= fe;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || r) && t.push(a);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if ((s.f & Re) === 0) {
        var l = (s.f & et) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & ye) !== 0 && (e.f & he) !== 0;
        gn(s, t, l ? r : !1);
      }
      s = i;
    }
  }
}
function Ar(e) {
  e.f &= ~lr, mn(e, !0);
}
function mn(e, t) {
  if ((e.f & lr) === 0 && (e.f & fe) !== 0) {
    e.f ^= fe, (e.f & H) === 0 && (P(e, I), Ce.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & et) !== 0 || (r.f & ye) !== 0;
      mn(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const l of i)
        (l.is_global || t) && l.in();
  }
}
function bn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ Ie(r);
      t.append(r), r = s;
    }
}
let Ne = !1;
function Mr(e) {
  Ne = e;
}
let b = null, ve = !1;
function ue(e) {
  b = e;
}
let m = null;
function $e(e) {
  m = e;
}
let we = null;
function Is(e) {
  b !== null && ((b.f & Rt) !== 0 || (b.f & G) !== 0) && (we ??= /* @__PURE__ */ new Set()).add(e);
}
let X = null, se = 0, le = null;
function Fs(e) {
  le = e;
}
let wn = 1, He = 0, Ue = He;
function Tr(e) {
  Ue = e;
}
function yn() {
  return ++wn;
}
function yt(e) {
  var t = e.f;
  if ((t & I) !== 0)
    return !0;
  if ((t & oe) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (yt(
        /** @type {Derived} */
        i
      ) && Qr(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & _e) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    de === null && P(e, H);
  }
  return !1;
}
function xn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(we !== null && we.has(e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & G) !== 0 ? xn(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? P(i, I) : (i.f & H) !== 0 && P(i, oe), vr(
        /** @type {Effect} */
        i
      ));
    }
}
function $n(e) {
  var t = X, r = se, n = le, s = b, i = we, l = W, a = ve, o = Ue, f = e.f;
  X = /** @type {null | Value[]} */
  null, se = 0, le = null, b = (f & (ye | Re)) === 0 ? e : null, we = null, tt(e.ctx), ve = !1, Ue = ++He, e.ac !== null && (bt(() => {
    e.ac.abort(mt);
  }), e.ac = null);
  try {
    e.f |= Rt;
    var c = (
      /** @type {Function} */
      e.fn
    ), u = c();
    e.f |= qe;
    var d = Or(e);
    if (Wr() && le !== null && !ve && d !== null && (e.f & (G | oe | I)) === 0)
      for (var h = 0; h < /** @type {Source[]} */
      le.length; h++)
        xn(
          le[h],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (He++, s.deps !== null)
        for (let v = 0; v < r; v += 1)
          s.deps[v].rv = He;
      if (t !== null)
        for (const v of t)
          v.rv = He;
      le !== null && (n === null ? n = le : n.push(.../** @type {Source[]} */
      le));
    }
    return (e.f & Le) !== 0 && (e.f ^= Le), u;
  } catch (v) {
    return Or(e), As(v);
  } finally {
    e.f ^= Rt, X = t, se = r, le = n, b = s, we = i, tt(l), ve = a, Ue = o;
  }
}
function Or(e) {
  var t = e.deps, r = g?.is_fork;
  if (X !== null) {
    var n;
    if (r || gt(e, se), t !== null && se > 0)
      for (t.length = se + X.length, n = 0; n < X.length; n++)
        t[se + n] = X[n];
    else
      e.deps = t = X;
    if (pr() && (e.f & _e) !== 0)
      for (n = se; n < t.length; n++)
        (t[n].reactions ??= []).push(e);
  } else !r && t !== null && se < t.length && (gt(e, se), t.length = se);
  return t;
}
function zs(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = zn.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & G) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (X === null || !vt.call(X, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & _e) !== 0 && (i.f ^= _e), i.v !== B && cr(i), i.ac !== null && bt(() => {
      i.ac.abort(mt), i.ac = null, P(i, I);
    }), ys(i), gt(i, 0);
  }
}
function gt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      zs(e, r[n]);
}
function nt(e) {
  var t = e.f;
  if ((t & V) === 0) {
    P(e, H);
    var r = m;
    m = e;
    try {
      (t & (he | zr)) !== 0 ? Ls(e) : gr(e), _n(e);
      var n = $n(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = wn;
      var s;
      Ir && cs && (e.f & I) !== 0 && e.deps;
    } finally {
      m = r;
    }
  }
}
async function js() {
  await Promise.resolve(), Ke();
}
function E(e) {
  var t = e.f, r = (t & G) !== 0;
  if (b !== null && !ve) {
    var n = m !== null && (m.f & V) !== 0;
    if (!n && (we === null || !we.has(e))) {
      var s = b.deps;
      if ((b.f & Rt) !== 0)
        e.rv < He && (e.rv = He, X === null && s !== null && s[se] === e ? se++ : X === null ? X = [e] : X.push(e));
      else {
        b.deps ??= [], vt.call(b.deps, e) || b.deps.push(e);
        var i = e.reactions;
        i === null ? e.reactions = [b] : vt.call(i, b) || i.push(b);
      }
    }
  }
  if (Ne && be.has(e))
    return be.get(e);
  if (r) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (Ne) {
      var a = l.v;
      return ((l.f & H) === 0 && l.reactions !== null || En(l)) && (a = hr(l)), be.set(l, a), a;
    }
    var o = (l.f & _e) === 0 && !ve && b !== null && (b.f & _e) !== 0, f = (l.f & qe) === 0;
    yt(l) && (o && (l.f |= _e), Qr(l)), o && !f && (en(l), kn(l));
  }
  if (de?.has(e))
    return de.get(e);
  if ((e.f & Le) !== 0)
    throw e.v;
  return e.v;
}
function kn(e) {
  if (e.f |= _e, e.deps !== null)
    for (const r of e.deps) {
      var t = r.reactions;
      t === null ? r.reactions = [e] : vt.call(t, e) || t.push(e), (r.f & G) !== 0 && (r.f & _e) === 0 && (en(
        /** @type {Derived} */
        r
      ), kn(
        /** @type {Derived} */
        r
      ));
    }
}
function En(e) {
  if (e.v === B) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (be.has(t) || (t.f & G) !== 0 && En(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function xt(e) {
  var t = ve;
  try {
    return ve = !0, e();
  } finally {
    ve = t;
  }
}
const ot = /* @__PURE__ */ Symbol("events"), Sn = /* @__PURE__ */ new Set(), nr = /* @__PURE__ */ new Set();
function at(e, t, r) {
  (t[ot] ??= {})[e] = r;
}
function Bs(e) {
  for (var t = 0; t < e.length; t++)
    Sn.add(e[t]);
  for (var r of nr)
    r(e);
}
let Yt = null, qt = !1;
function Rr(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Yt = e, qt || (qt = !0, setTimeout(() => {
    qt = !1, Yt = null;
  }));
  var l = 0, a = Yt === e && e[ot];
  if (a) {
    var o = s.indexOf(a);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[ot] = t;
      return;
    }
    var f = s.indexOf(t);
    if (f === -1)
      return;
    o <= f && (l = o);
  }
  if (i = /** @type {Element} */
  s[l] || e.target, i !== t) {
    _t(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var c = b, u = m;
    ue(null), $e(null);
    try {
      for (var d, h = []; i !== null && i !== t; ) {
        try {
          var v = i[ot]?.[n];
          v != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && v.call(i, e);
        } catch (x) {
          d ? h.push(x) : d = x;
        }
        if (e.cancelBubble) break;
        l++, i = l < s.length ? (
          /** @type {Element} */
          s[l]
        ) : null;
      }
      if (d) {
        for (let x of h)
          queueMicrotask(() => {
            throw x;
          });
        throw d;
      }
    } finally {
      e[ot] = t, delete e.currentTarget, ue(c), $e(u);
    }
  }
}
const Hs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Js(e) {
  return (
    /** @type {string} */
    Hs?.createHTML(e) ?? e
  );
}
function Us(e) {
  var t = _r("template");
  return t.innerHTML = Js(e.replaceAll("<!>", "<!---->")), t.content;
}
function sr(e, t) {
  var r = (
    /** @type {Effect} */
    m
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function An(e, t) {
  var r = (t & Dn) !== 0, n, s = !e.startsWith("<!>");
  return () => {
    if (R)
      return sr(L, null), L;
    n === void 0 && (n = Us(s ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ rt(n));
    var i = (
      /** @type {TemplateNode} */
      r || ln ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return sr(i, i), i;
  };
}
function ir(e, t) {
  if (R) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      m
    );
    ((r.f & qe) === 0 || r.nodes.end === null) && (r.nodes.end = L), fr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Ys = ["touchstart", "touchmove"];
function qs(e) {
  return Ys.includes(e);
}
function Vs(e) {
  let t = 0, r = wt(0), n;
  return () => {
    pr() && (E(r), zt(() => (t === 0 && (n = xt(() => e(() => ht(r)))), t += 1, () => {
      Be(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, ht(r));
      });
    })));
  };
}
var Gs = et | Ve;
function Ws(e, t, r, n) {
  new Ks(e, t, r, n);
}
class Ks {
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
  #t = R ? L : null;
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
  #p = 0;
  #f = 0;
  #u = !1;
  /** @type {Set<Effect>} */
  #h = /* @__PURE__ */ new Set();
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
  #y = Vs(() => (this.#c = wt(this.#p), () => {
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
        m
      );
      l.b = this, l.f |= Xt, n(i);
    }, this.parent = /** @type {Effect} */
    m.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), this.#s = vn(() => {
      if (R) {
        const i = Ur(
          /** @type {TemplateNode} */
          this.#t
        );
        fr();
        const l = i === Lr;
        if (i.startsWith(br)) {
          const o = JSON.parse(i.slice(br.length));
          this.#m(o);
        } else l ? this.#$() : this.#x();
      } else
        this.#v();
    }, Gs), R && (this.#e = L);
  }
  #x() {
    try {
      this.#a = Te(() => this.#o(this.#e));
    } catch (t) {
      this.error(t);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #m(t) {
    const r = this.#r.failed, { reset: n, invoke_onerror: s } = this.#b(t);
    Be(s), r && (this.#l = Te(() => {
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
      if (!this.#d()) {
        if (r) {
          Xn();
          return;
        }
        r = !0, n && us(), this.#l !== null && dt(this.#l, () => {
          this.#l = null;
        }), this.#_(() => {
          this.#v();
        });
      }
    };
    return { reset: s, invoke_onerror: () => {
      if (!this.#d())
        try {
          n = !0, this.#r.onerror?.(t, s), n = !1;
        } catch (l) {
          me(l, this.#s && this.#s.parent);
        }
    } };
  }
  #d() {
    return (this.#s.f & (V | pt)) !== 0;
  }
  #$() {
    const t = this.#r.pending;
    t && (this.is_pending = !0, this.#n = Te(() => t(this.#e)), Be(() => {
      if (!this.#d()) {
        var r = this.#i = document.createDocumentFragment(), n = Ye(), s = !1;
        if (r.append(n), this.#a = this.#_(() => {
          try {
            return Te(() => this.#o(n));
          } catch (i) {
            try {
              this.error(i), s = !0;
            } catch (l) {
              me(l, this.#s.parent);
            }
            return null;
          }
        }), this.#a === null) {
          this.#i = null, s && this.#w(
            /** @type {Batch} */
            g
          );
          return;
        }
        this.#f === 0 && (this.#e.before(r), this.#i = null, dt(
          /** @type {Effect} */
          this.#n,
          () => {
            this.#n = null;
          }
        ), this.#w(
          /** @type {Batch} */
          g
        ));
      }
    }));
  }
  #v() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#f = 0, this.#p = 0, this.#a = Te(() => {
        this.#o(this.#e);
      }), this.#f > 0) {
        var t = this.#i = document.createDocumentFragment();
        bn(this.#a, t);
        const r = (
          /** @type {(anchor: Node) => void} */
          this.#r.pending
        );
        this.#n = Te(() => r(this.#e));
      } else
        this.#w(
          /** @type {Batch} */
          g
        );
    } catch (r) {
      this.error(r);
    }
  }
  /**
   * @param {Batch} batch
   */
  #w(t) {
    this.is_pending = !1, t.transfer_effects(this.#h, this.#g);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Xr(t, this.#h, this.#g);
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
  #_(t) {
    var r = m, n = b, s = W;
    $e(this.#s), ue(this.#s), tt(this.#s.ctx);
    try {
      return Ce.ensure(), t();
    } finally {
      $e(r), ue(n), tt(s);
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
    this.#f += t, this.#f === 0 && (this.#w(r), this.#n && dt(this.#n, () => {
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
    this.#k(t, r), this.#p += t, !(!this.#c || this.#u) && (this.#u = !0, Be(() => {
      this.#u = !1, this.#c && Lt(this.#c, this.#p);
    }));
  }
  get_effect_pending() {
    return this.#y(), E(
      /** @type {Source<number>} */
      this.#c
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (t === De || !this.#r.onerror && !this.#r.failed)
      throw t;
    g?.is_fork ? (this.#a && g.skip_effect(this.#a), this.#n && g.skip_effect(this.#n), this.#l && g.skip_effect(this.#l), g.oncommit(() => {
      this.#d() || this.#E(t);
    })) : this.#E(t);
  }
  /**
   * @param {unknown} error
   */
  #E(t) {
    this.#a && (Z(this.#a), this.#a = null), this.#n && (Z(this.#n), this.#n = null), this.#l && (Z(this.#l), this.#l = null), R && (xe(
      /** @type {TemplateNode} */
      this.#t
    ), Zn(), xe(Jr()));
    let r = this.#r.failed;
    const n = (s) => {
      if (this.#d()) return;
      const { reset: i, invoke_onerror: l } = this.#b(s);
      l(), r && !this.#d() && (this.#l = this.#_(() => {
        try {
          return Te(() => {
            var a = (
              /** @type {Effect} */
              m
            );
            a.b = this, a.f |= Xt, r(
              this.#e,
              () => s,
              () => i
            );
          });
        } catch (a) {
          return me(
            a,
            /** @type {Effect} */
            this.#s.parent
          ), null;
        }
      }));
    };
    Be(() => {
      if (!this.#d()) {
        var s;
        try {
          s = this.transform_error(t);
        } catch (i) {
          me(i, this.#s && this.#s.parent);
          return;
        }
        s !== null && typeof s == "object" && typeof /** @type {any} */
        s.then == "function" ? s.then(
          n,
          /** @param {unknown} e */
          (i) => me(i, this.#s && this.#s.parent)
        ) : n(s);
      }
    });
  }
}
function Vt(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[Qt] ??= e.nodeValue) && (e[Qt] = r, e.nodeValue = `${r}`);
}
function Mn(e, t) {
  return Tn(e, t);
}
function Xs(e, t) {
  rr(), t.intro = t.intro ?? !1;
  const r = t.target, n = R, s = L;
  try {
    for (var i = /* @__PURE__ */ rt(r); i && (i.nodeType !== It || /** @type {Comment} */
    i.data !== Pr); )
      i = /* @__PURE__ */ Ie(i);
    if (!i)
      throw De;
    We(!0), xe(
      /** @type {Comment} */
      i
    );
    const l = Tn(e, { ...t, anchor: i });
    return We(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== De && console.warn("Failed to hydrate: ", l), t.recover === !1 && is(), rr(), un(r), We(!1), Mn(e, t);
  } finally {
    We(n), xe(s);
  }
}
const $t = /* @__PURE__ */ new Map();
function Tn(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: l = !0, transformError: a }) {
  rr();
  var o = void 0, f = Ns(() => {
    var c = r ?? t.appendChild(Ye());
    Ws(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (h) => {
        Vr({});
        var v = (
          /** @type {ComponentContext} */
          W
        );
        if (i && (v.c = i), s && (n.$$events = s), R && sr(
          /** @type {TemplateNode} */
          h,
          null
        ), o = e(h, n) || ur(), R && (m.nodes.end = L, L === null || L.nodeType !== It || /** @type {Comment} */
        L.data !== Dr))
          throw Ft(), De;
        Gr();
      },
      a
    );
    var u = /* @__PURE__ */ new Set(), d = (h) => {
      for (var v = 0; v < h.length; v++) {
        var x = h[v];
        if (!u.has(x)) {
          u.add(x);
          var p = qs(x);
          for (const N of [t, document]) {
            var y = $t.get(N);
            y === void 0 && (y = /* @__PURE__ */ new Map(), $t.set(N, y));
            var D = y.get(x);
            D === void 0 ? (N.addEventListener(x, Rr, { passive: p }), y.set(x, 1)) : y.set(x, D + 1);
          }
        }
      }
    };
    return d(jn(Sn)), nr.add(d), () => {
      for (var h of u)
        for (const p of [t, document]) {
          var v = (
            /** @type {Map<string, number>} */
            $t.get(p)
          ), x = (
            /** @type {number} */
            v.get(h)
          );
          --x == 0 ? (p.removeEventListener(h, Rr), v.delete(h), v.size === 0 && $t.delete(p)) : v.set(h, x);
        }
      nr.delete(d), c !== r && c.parentNode?.removeChild(c);
    };
  });
  return ar.set(o, f), o;
}
let ar = /* @__PURE__ */ new WeakMap();
function Zs(e, t) {
  const r = ar.get(e);
  return r ? (ar.delete(e), r(t)) : Promise.resolve();
}
class Qs {
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
        Ar(n), this.#o.delete(r);
      else {
        var s = this.#r.get(r);
        s && (Ar(s.effect), this.#t.set(r, s.effect), this.#r.delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
      }
      for (const [i, l] of this.#e) {
        if (this.#e.delete(i), i === t)
          break;
        const a = this.#r.get(l);
        a && (Z(a.effect), this.#r.delete(l));
      }
      for (const [i, l] of this.#t) {
        if (i === r || this.#o.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var f = document.createDocumentFragment();
            bn(l, f), f.append(Ye()), this.#r.set(i, { effect: l, fragment: f });
          } else
            Z(l);
          this.#o.delete(i), this.#t.delete(i);
        };
        this.#s || !n ? (this.#o.add(i), dt(l, a, !1)) : a();
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
      r.includes(n) || (Z(s.effect), this.#r.delete(n));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      g
    ), s = Ss();
    if (r && !this.#t.has(t) && !this.#r.has(t))
      if (s) {
        var i = document.createDocumentFragment(), l = Ye();
        i.append(l), this.#r.set(t, {
          effect: Te(() => r(l)),
          fragment: i
        });
      } else
        this.#t.set(
          t,
          Te(() => r(this.anchor))
        );
    if (this.#e.set(n, t), s) {
      for (const [a, o] of this.#t)
        a === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [a, o] of this.#r)
        a === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(this.#a), n.ondiscard(this.#n);
    } else
      R && (this.anchor = L), this.#a(n);
  }
}
function ei(e, t, r = !1) {
  var n;
  R && (n = L, fr());
  var s = new Qs(e), i = r ? et : 0;
  function l(a, o) {
    if (R) {
      var f = Ur(
        /** @type {TemplateNode} */
        n
      );
      if (a !== parseInt(f.substring(1))) {
        var c = Jr();
        xe(c), s.anchor = c, We(!1), s.ensure(a, o), We(!0);
        return;
      }
    }
    s.ensure(a, o);
  }
  vn(() => {
    var a = !1;
    t((o, f = 0) => {
      a = !0, l(f, o);
    }), a || l(-1, null);
  }, i);
}
function ti(e, t) {
  dn(() => {
    e = m?.parent?.nodes?.start ?? e;
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
      const s = _r("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
const Cr = [...` 	
\r\f \v\uFEFF`];
function ri(e, t, r) {
  var n = "" + e;
  if (r) {
    for (var s of Object.keys(r))
      if (r[s])
        n = n ? n + " " + s : s;
      else if (n.length)
        for (var i = s.length, l = 0; (l = n.indexOf(s, l)) >= 0; ) {
          var a = l + i;
          (l === 0 || Cr.includes(n[l - 1])) && (a === n.length || Cr.includes(n[a])) ? n = (l === 0 ? "" : n.substring(0, l)) + n.substring(a + 1) : l = a;
        }
  }
  return n === "" ? null : n;
}
function ni(e, t, r, n, s, i) {
  var l = (
    /** @type {any} */
    e[Zt]
  );
  if (R || l !== r || l === void 0) {
    var a = ri(r, n, i);
    (!R || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : e.className = a), e[Zt] = r;
  } else if (i && s !== i)
    for (var o in i) {
      var f = !!i[o];
      (s == null || f !== !!s[o]) && e.classList.toggle(o, f);
    }
  return i;
}
const si = /* @__PURE__ */ Symbol("is custom element"), ii = /* @__PURE__ */ Symbol("is html"), ai = Wn ? "progress" : "PROGRESS";
function li(e, t) {
  var r = On(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== ai) || (e.value = t ?? "");
}
function oi(e, t, r, n) {
  var s = On(e);
  R && (s[t] = e.getAttribute(t)), s[t] !== (s[t] = r) && e.setAttribute(t, r);
}
function On(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Hr] ??= {
      [si]: e.nodeName.includes("-"),
      [ii]: e.namespaceURI === In
    }
  );
}
function fi(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  _s(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = Gt(e) ? Wt(i) : i, r(i), g !== null && n.add(g), await js(), i !== (i = t())) {
      var l = e.selectionStart, a = e.selectionEnd, o = e.value.length;
      if (e.value = i ?? "", a !== null) {
        var f = e.value.length;
        l === a && a === o && f > o ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = l, e.selectionEnd = Math.min(a, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (R && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  xt(t) == null && e.value) && (r(Gt(e) ? Wt(e.value) : e.value), g !== null && n.add(g)), zt(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        g
      );
      if (n.has(i))
        return;
    }
    Gt(e) && s === Wt(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Gt(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Wt(e) {
  return e === "" ? null : +e;
}
function Kt(e, t) {
  return e === t || e?.[ft] === t;
}
function ui(e = ur(), t, r, n) {
  var s = (
    /** @type {ComponentContext} */
    W.r
  ), i = (
    /** @type {Effect} */
    m
  );
  return dn(() => {
    var l, a;
    return zt(() => {
      l = a, a = [], xt(() => {
        Kt(r(...a), e) || (t(e, ...a), l && Kt(r(...l), e) && t(null, ...l));
      });
    }), () => {
      let o = i;
      for (; o !== s && o.parent !== null && o.parent.f & pt; )
        o = o.parent;
      const f = () => {
        a && Kt(r(...a), e) && t(null, ...a);
      }, c = o.teardown;
      o.teardown = () => {
        f(), c?.();
      };
    };
  }), e;
}
let kt = !1;
function ci(e) {
  var t = kt;
  try {
    return kt = !1, [e(), kt];
  } finally {
    kt = t;
  }
}
function Et(e, t, r, n) {
  var s = !0, i = (r & Pn) !== 0, l = (r & Ln) !== 0, a = (
    /** @type {V} */
    n
  ), o = !0, f = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), c = () => l && s ? (f ??= /* @__PURE__ */ Nt(
    /** @type {() => V} */
    n
  ), E(f)) : (o && (o = !1, a = l ? xt(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), a);
  let u;
  if (i) {
    var d = ft in e || Br in e;
    u = Je(e, t)?.set ?? (d && t in e ? (S) => e[t] = S : void 0);
  }
  var h, v = !1;
  i ? [h, v] = ci(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && n !== void 0 && (h = c(), u && (as(), u(h)));
  var x;
  if (x = () => {
    var S = (
      /** @type {V} */
      e[t]
    );
    return S === void 0 ? c() : (o = !0, S);
  }, (r & Nn) === 0)
    return x;
  if (u) {
    var p = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(S, K) {
        return arguments.length > 0 ? ((!K || p || v) && u(K ? x() : S), S) : x();
      })
    );
  }
  var y = !1, D = ((r & Cn) !== 0 ? Nt : bs)(() => (y = !1, x()));
  i && E(D);
  var N = (
    /** @type {Effect} */
    m
  );
  return (
    /** @type {() => V} */
    (function(S, K) {
      if (arguments.length > 0) {
        const Ee = K ? E(D) : i ? Oe(S) : S;
        return T(D, Ee), y = !0, a !== void 0 && (a = Ee), S;
      }
      return Ne && y || (N.f & V) !== 0 ? D.v : E(D);
    })
  );
}
function hi(e) {
  return new di(e);
}
class di {
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
      var a = /* @__PURE__ */ ks(l, !1, !1);
      return r.set(i, a), a;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, l) {
          return E(r.get(l) ?? n(l, Reflect.get(i, l)));
        },
        has(i, l) {
          return l === Br ? !0 : (E(r.get(l) ?? n(l, Reflect.get(i, l))), Reflect.has(i, l));
        },
        set(i, l, a) {
          return T(r.get(l) ?? n(l, a), a), Reflect.set(i, l, a);
        }
      }
    );
    this.#t = (t.hydrate ? Xs : Mn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    }), (!t?.props?.$$host || t.sync === !1) && Ke(), this.#e = s.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || _t(this, i, {
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
      Zs(this.#t);
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
let Rn;
typeof HTMLElement == "function" && (Rn = class extends HTMLElement {
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
          const l = _r("slot");
          s !== "default" && (l.name = s), ir(i, l);
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = vi(this);
      for (const s of this.$$s)
        s in n && (s === "default" && !this.$$d.children ? (this.$$d.children = t(s), r.default = !0) : r[s] = t(s));
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = Mt(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = hi({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Cs(() => {
        zt(() => {
          this.$$r = !0;
          for (const s of Tt(this.$$c)) {
            if (!this.$$p_d[s]?.reflect) continue;
            this.$$d[s] = this.$$c[s];
            const i = Mt(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Mt(e, r, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Tt(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Mt(e, t, r, n) {
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
function vi(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function _i(e, t, r, n, s, i) {
  let l = class extends Rn {
    constructor() {
      super(e, r, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Tt(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Tt(t).forEach((a) => {
    _t(l.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(o) {
        o = Mt(a, o, t), this.$$d[a] = o;
        var f = this.$$c;
        if (f) {
          var c = Je(f, a)?.get;
          c ? f[a] = o : f.$set({ [a]: o });
        }
      }
    });
  }), n.forEach((a) => {
    _t(l.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
function Nr(e) {
  const t = e >> 1, r = new Float64Array(e);
  for (let f = 0; f < e; f++) r[f] = 0.5 - 0.5 * Math.cos(2 * Math.PI * f / (e - 1));
  const n = new Uint32Array(e), s = Math.round(Math.log2(e));
  for (let f = 0; f < e; f++) {
    let c = f, u = 0;
    for (let d = 0; d < s; d++)
      u = u << 1 | c & 1, c >>= 1;
    n[f] = u;
  }
  const i = new Float64Array(t), l = new Float64Array(t);
  for (let f = 0; f < t; f++) {
    const c = -2 * Math.PI * f / e;
    i[f] = Math.cos(c), l[f] = Math.sin(c);
  }
  const a = new Float64Array(e), o = new Float64Array(e);
  return {
    N: e,
    half: t,
    transform(f, c, u, d, h) {
      const v = c - t;
      let x = 0;
      for (let p = 0; p < e; p++) {
        const y = Math.max(0, Math.min(u - 1, v + p));
        x += f[y];
      }
      x /= e;
      for (let p = 0; p < e; p++) {
        const y = Math.max(0, Math.min(u - 1, v + p));
        a[n[p]] = (f[y] - x) * r[p], o[n[p]] = 0;
      }
      for (let p = 2; p <= e; p <<= 1) {
        const y = p >> 1, D = e / p;
        for (let N = 0; N < e; N += p)
          for (let S = 0, K = 0; S < y; S++, K += D) {
            const Ee = a[N + S + y] * i[K] - o[N + S + y] * l[K], ie = a[N + S + y] * l[K] + o[N + S + y] * i[K];
            a[N + S + y] = a[N + S] - Ee, o[N + S + y] = o[N + S] - ie, a[N + S] += Ee, o[N + S] += ie;
          }
      }
      for (let p = 1; p < t; p++)
        d[p] += (a[p] * a[p] + o[p] * o[p]) * h;
    }
  };
}
function pi(e, t) {
  const s = e[0]?.length ?? 0, i = e.length;
  if (!s || !i)
    return { version: 1, interval: 0.05, bands: 36, frames: [] };
  const l = new Array(i), a = Math.max(0.92, 1 - 2 * Math.PI * 18 / t);
  let o = 0, f = 0;
  for (let U = 0; U < i; U++) {
    const F = e[U], z = new Float32Array(s);
    let j = 0;
    const $ = Math.min(256, Math.floor(s * 0.05));
    for (let O = $; O < s; O++) j += F[O];
    j = s > $ ? j / (s - $) : 0;
    let Y = 0, ae = 0, q = 0;
    for (let O = 0; O < s; O++) {
      const Q = O < $ && Math.abs(F[O]) < Math.abs(j) * 0.25 ? 0 : F[O] - j, J = Q - Y + a * ae, ce = J - ae + a * q;
      Y = Q, ae = J, q = ce, z[O] = ce;
      const ee = Math.abs(ce);
      ee > f && (f = ee), o += ee * ee;
    }
    l[U] = z;
  }
  const c = Math.sqrt(o / Math.max(1, s * i)), u = Math.max(1, Math.round(t * (0.05 * 0.5)));
  let d = 512;
  for (; d < u * 2 || d < Math.round(t * 0.042); ) d <<= 1;
  d > 2048 && (d = 2048);
  const h = d << 1, v = Nr(d), x = Nr(h), p = new Float64Array(v.half), y = new Float64Array(x.half), D = 32, N = Math.max(D * 4, Math.min(14500, t * 0.46)), S = Math.pow(N / D, 1 / 36), K = Array.from({ length: 36 }, (U, F) => {
    const z = D * Math.pow(S, F), j = D * Math.pow(S, F + 1), $ = Math.sqrt(z * j), Y = $ < 300, ae = Y ? h : d, q = ae >> 1, O = t / ae, Q = Math.max((j - z) * 0.58, O * 0.78), J = Math.max(1, Math.floor(($ - Q * 1.3) / O)), ce = Math.min(q - 1, Math.ceil(($ + Q * 1.3) / O)), ee = [];
    let _ = 0;
    for (let w = J; w <= ce; w++) {
      const A = Math.abs(w * O - $) / Q, ge = Math.exp(-1.65 * A * A);
      ge > 0.05 && (ee.push([w, ge]), _ += ge);
    }
    if (!ee.length) {
      const w = Math.max(1, Math.min(q - 1, Math.round($ / O)));
      ee.push([w, 1]), _ = 1;
    }
    const k = 1 / Math.pow(Math.max(1, _), 0.22), M = Math.pow(Math.max($, 180) / 180, 0.14) * k;
    return {
      useLong: Y,
      tilt: M,
      weights: ee
    };
  }), Ee = Math.max(1, Math.ceil(s / (t * 0.05))), ie = [], pe = [], st = 1 / (i * d * d), jt = 1 / (i * h * h);
  for (let U = 0; U < Ee; U++) {
    const F = new Array(36).fill(0);
    for (const z of [0.25, 0.75]) {
      const j = Math.min(s - 1, Math.round((U + z) * 0.05 * t));
      p.fill(0), y.fill(0);
      for (let $ = 0; $ < i; $++)
        v.transform(l[$], j, s, p, st), x.transform(l[$], j, s, y, jt);
      for (let $ = 0; $ < 36; $++) {
        const Y = K[$], ae = Y.useLong ? y : p;
        let q = 0;
        for (const [Q, J] of Y.weights) q += ae[Q] * J;
        const O = Math.sqrt(q) * Y.tilt;
        O > F[$] && (F[$] = O);
      }
    }
    for (let z = 0; z < 36; z++)
      F[z] > 1e-6 && pe.push(F[z]);
    ie.push(F);
  }
  if (f < 1e-4 || c < 2e-5 || !pe.length)
    return { version: 1, interval: 0.05, bands: 36, frames: ie.map(() => new Array(36).fill(0)) };
  pe.sort((U, F) => U - F);
  const Bt = Math.max(
    pe[Math.floor(pe.length * 0.99)],
    pe[pe.length - 1] * 0.5,
    1e-5
  ), Pe = 44, Fe = 28;
  return { version: 1, interval: 0.05, bands: 36, frames: ie.map((U) => {
    const F = U.map((J) => J <= 1e-6 ? -120 : 20 * Math.log10(J / Bt)), z = [...F].sort((J, ce) => J - ce), j = z[18], $ = z[35];
    if ($ <= -Pe) return new Array(36).fill(0);
    const Y = Math.min(1, Math.max(0, ($ + Pe) / Pe)), ae = 255 * Math.pow(Y, 0.92), q = $ - j, O = j > $ - 24 && q > 3.5 ? Math.min(12, (24 - q) * 0.55 * Math.min(1, (q - 3.5) / 5.5)) : 0, Q = Math.min(0, $);
    return F.map((J) => {
      if (J <= -Pe) return 0;
      const ce = Math.max(0, J - j), ee = O * Math.max(0, 1 - ce / 7.5), _ = J - ee - Q;
      if (_ <= -Fe) return 0;
      const k = Math.min(1, (_ + Fe) / Fe);
      return Math.round(ae * Math.pow(k, 1.35));
    });
  }) };
}
function gi(e) {
  const t = e.map((r) => typeof r?.duration == "number" && Number.isFinite(r.duration) ? { ...r, duration: Math.round(r.duration * 100) / 100 } : r);
  return JSON.stringify(t);
}
var mi = /* @__PURE__ */ An('<label class="box-label svelte-1lrxtrk">Enriched catalog JSON <textarea aria-label="Enriched catalog JSON" rows="3" readonly="" class="svelte-1lrxtrk"></textarea></label>'), bi = /* @__PURE__ */ An('<div><div class="heading svelte-1lrxtrk"><div><div class="eyebrow svelte-1lrxtrk">ZERO-FUSS PREPROCESSOR</div> <h2 class="svelte-1lrxtrk">Browser catalog analyzer</h2></div> <span class="badge svelte-1lrxtrk"> </span></div> <p class="help svelte-1lrxtrk">Analyzes audio directly in your browser using your active session (cookies, mTLS, local files) and outputs compact 36-band visualization JSON.</p> <div class="file-row svelte-1lrxtrk"><label class="file-btn svelte-1lrxtrk">Load tracks.json <input type="file" accept=".json,application/json" class="svelte-1lrxtrk"/></label> <label class="file-btn svelte-1lrxtrk">Attach local audio (optional) <input type="file" multiple="" accept="audio/*,.wav,.mp3,.ogg,.flac,.m4a" class="svelte-1lrxtrk"/></label></div> <label class="box-label svelte-1lrxtrk">Input catalog JSON <textarea aria-label="Input catalog JSON" rows="4" class="svelte-1lrxtrk"></textarea></label> <div class="actions svelte-1lrxtrk"><button class="primary svelte-1lrxtrk" aria-label="Analyze catalog"> </button> <button class="secondary svelte-1lrxtrk">Download tracks-enriched.json</button> <button class="secondary svelte-1lrxtrk">Copy JSON</button></div> <!> <div class="status svelte-1lrxtrk" role="status" aria-live="polite"> </div></div>');
const wi = {
  hash: "svelte-1lrxtrk",
  code: ":host {display:block;width:540px;max-width:100%;font-family:Arial, Helvetica, sans-serif;}.preprocessor.svelte-1lrxtrk {--ink: #f6f8fa;--muted: #99a7b3;--accent: #00c5df;--line: #3b454e;--field: #1d252a;--hover: #2e3b42;box-sizing:border-box;color:var(--ink);background:radial-gradient(ellipse at 50% 42%, #273238, #20282c 65%, #1e2529);border:1px solid #ffffff15;border-radius:12px;padding:20px 24px;box-shadow:0 12px 24px #0003;}.light.svelte-1lrxtrk {--ink: #27323b;--muted: #667684;--accent: #008fa5;--line: #d4dbe2;--field: #f2f5f7;--hover: #e9f4f6;background:linear-gradient(130deg, #fff, #fafcfd);border-color:#e3e7eb;}.heading.svelte-1lrxtrk {display:flex;align-items:center;justify-content:space-between;gap:12px;}.eyebrow.svelte-1lrxtrk {font-size:10px;letter-spacing:1px;color:var(--muted);}h2.svelte-1lrxtrk {font-size:18px;margin:5px 0 0;}.badge.svelte-1lrxtrk {font-size:11px;color:var(--accent);border:1px solid var(--line);border-radius:12px;padding:3px 9px;}.help.svelte-1lrxtrk {font-size:12px;line-height:1.5;color:var(--muted);margin:10px 0 14px;}.file-row.svelte-1lrxtrk {display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;}.file-btn.svelte-1lrxtrk {font-size:11px;color:var(--ink);background:var(--field);border:1px solid var(--line);border-radius:6px;padding:6px 10px;cursor:pointer;}.file-btn.svelte-1lrxtrk:hover {background:var(--hover);border-color:var(--accent);}.file-btn.svelte-1lrxtrk input:where(.svelte-1lrxtrk) {display:none;}.box-label.svelte-1lrxtrk {display:flex;flex-direction:column;gap:6px;font-size:11px;color:var(--muted);margin-bottom:12px;}textarea.svelte-1lrxtrk {box-sizing:border-box;width:100%;background:var(--field);color:var(--ink);border:1px solid var(--line);border-radius:7px;padding:8px 10px;font:12px/1.4 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;resize:vertical;}.actions.svelte-1lrxtrk {display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;}button.svelte-1lrxtrk {font:inherit;font-size:12px;border-radius:7px;padding:8px 12px;cursor:pointer;border:1px solid var(--line);}button.svelte-1lrxtrk:disabled {opacity:0.35;cursor:default;}.primary.svelte-1lrxtrk {background:linear-gradient(130deg, #00c9e4, #00a6c1);color:#fff;border-color:#66e5f3;font-weight:600;}.secondary.svelte-1lrxtrk {background:var(--field);color:var(--ink);}.secondary.svelte-1lrxtrk:hover:not(:disabled) {background:var(--hover);border-color:var(--accent);}.status.svelte-1lrxtrk {min-height:14px;font-size:11px;color:var(--muted);}"
};
function yi(e, t) {
  Vr(t, !0), ti(e, wi);
  let r = Et(t, "catalog", 31, () => Oe([])), n = Et(t, "enrichedCatalog", 31, () => Oe([])), s = Et(t, "theme", 15, "dark"), i = Et(t, "autoAnalyze", 15, !1), l, a = /* @__PURE__ */ ne("[]"), o = /* @__PURE__ */ ne(""), f = /* @__PURE__ */ ne("Paste or load a catalog JSON (with title and url), then choose Analyze catalog."), c = /* @__PURE__ */ ne(!1), u = /* @__PURE__ */ ne(Oe(/* @__PURE__ */ new Map())), d = null;
  function h(_, k) {
    l?.dispatchEvent(new CustomEvent(_, { detail: k, bubbles: !0, composed: !0 }));
  }
  function v(_) {
    const k = _.replace(/[?#].*$/, ""), M = k.split("/"), w = M[M.length - 1] || k;
    try {
      return decodeURIComponent(w).toLowerCase();
    } catch {
      return w.toLowerCase();
    }
  }
  async function x(_) {
    const k = _.trim(), M = v(k), w = E(u).get(M) || E(u).get(k.toLowerCase());
    if (w)
      return await w.arrayBuffer();
    const A = typeof window < "u" && window.location ? new URL(k, window.location.href).href : k;
    try {
      const C = await fetch(A, { credentials: "include" });
      if (C.ok) return await C.arrayBuffer();
      if (C.status === 404 || C.status >= 500) throw new Error(`HTTP ${C.status}`);
    } catch (C) {
      if (C instanceof Error && /^HTTP \d+$/.test(C.message)) throw C;
    }
    try {
      const C = await fetch(A, { credentials: "omit" });
      if (C.ok) return await C.arrayBuffer();
      throw new Error(`HTTP ${C.status}`);
    } catch (C) {
      if (C instanceof Error && /^HTTP \d+$/.test(C.message)) throw C;
    }
    const ge = `/__soundforge_fetch?url=${encodeURIComponent(A)}`, te = await fetch(ge);
    if (!te.ok)
      throw new Error(`Unable to fetch (${te.status}). Attach the local audio file or check the URL.`);
    return await te.arrayBuffer();
  }
  async function p(_) {
    const k = globalThis.OfflineAudioContext || globalThis.webkitOfflineAudioContext;
    if (!k)
      throw new Error("Web Audio OfflineAudioContext is not available in this environment.");
    const w = await new k(1, 1, 44100).decodeAudioData(_.slice(0)), A = [];
    for (let ge = 0; ge < w.numberOfChannels; ge++)
      A.push(w.getChannelData(ge));
    return { channelData: A, sampleRate: w.sampleRate };
  }
  async function y(_) {
    let k;
    if (_)
      k = _;
    else
      try {
        const A = JSON.parse(E(a));
        if (!Array.isArray(A)) throw new Error("Expected a JSON array of tracks.");
        k = A;
      } catch (A) {
        return T(f, `Invalid JSON: ${A instanceof Error ? A.message : A}`), [];
      }
    T(c, !0);
    let M = 0;
    const w = [];
    try {
      for (let A = 0; A < k.length; A++) {
        const te = { ...k[A] };
        T(f, `Analyzing (${A + 1}/${k.length}): ${te?.title ?? "track"}…`);
        try {
          if (!te || typeof te.title != "string" || typeof te.url != "string")
            throw new Error("Missing title or url");
          const C = await x(te.url), it = await p(C);
          if (!it.channelData[0]?.length) throw new Error("No audio samples decoded");
          te.duration = Math.round(it.channelData[0].length / it.sampleRate * 100) / 100, te.visualization = pi(it.channelData, it.sampleRate);
        } catch (C) {
          M++, T(f, `${te?.title ?? "Track"}: ${C instanceof Error ? C.message : C}`);
        }
        w.push(te);
      }
      return n(w), T(o, gi(w), !0), T(f, `Analyzed ${w.length - M} of ${w.length} tracks (${M} failed). Ready to download or apply.`), h("catalogenriched", { catalog: w, json: E(o), failures: M }), w;
    } finally {
      T(c, !1);
    }
  }
  async function D(_) {
    const M = _.currentTarget.files?.[0];
    if (M)
      try {
        const w = await M.text(), A = JSON.parse(w);
        if (!Array.isArray(A)) throw new Error("Expected a JSON array of tracks.");
        r(A), T(a, JSON.stringify(A, null, 2), !0), T(f, `Loaded ${A.length} tracks from ${M.name}.`);
      } catch (w) {
        T(f, `Could not read JSON file: ${w instanceof Error ? w.message : w}`);
      }
  }
  function N(_) {
    const k = _.currentTarget, M = Array.from(k.files || []);
    if (!M.length) return;
    const w = new Map(E(u));
    for (const A of M)
      w.set(A.name.toLowerCase(), A);
    T(u, w, !0), T(f, `Attached ${w.size} local audio file(s) for zero-network matching.`);
  }
  function S() {
    if (!E(o)) return;
    const _ = new Blob([E(o)], { type: "application/json" }), k = URL.createObjectURL(_), M = document.createElement("a");
    M.href = k, M.download = "tracks-enriched.json", M.click(), setTimeout(() => URL.revokeObjectURL(k), 1e3), T(f, "Downloaded tracks-enriched.json.");
  }
  async function K() {
    if (E(o))
      try {
        await navigator.clipboard.writeText(E(o)), T(f, "Copied enriched JSON to clipboard.");
      } catch {
        T(f, "Select the Enriched catalog JSON box to copy.");
      }
  }
  Rs(() => {
    const _ = r();
    xt(() => {
      _ !== d && (d = _, Array.isArray(_) && (T(a, JSON.stringify(_, null, 2), !0), i() && _.length > 0 && y(_)));
    });
  });
  var Ee = {
    analyzeCatalog: y,
    get catalog() {
      return r();
    },
    set catalog(_ = []) {
      r(_), Ke();
    },
    get enrichedCatalog() {
      return n();
    },
    set enrichedCatalog(_ = []) {
      n(_), Ke();
    },
    get theme() {
      return s();
    },
    set theme(_ = "dark") {
      s(_), Ke();
    },
    get autoAnalyze() {
      return i();
    },
    set autoAnalyze(_ = !1) {
      i(_), Ke();
    }
  }, ie = bi();
  let pe;
  var st = Ae(ie), jt = re(Ae(st), 2), Bt = Ut(jt, !0);
  Se(st);
  var Pe = re(st, 4), Fe = Ae(Pe), mr = re(Ae(Fe));
  Se(Fe);
  var U = re(Fe, 2), F = re(Ae(U));
  Se(U), Se(Pe);
  var z = re(Pe, 2), j = re(Ae(z));
  yr(j), oi(j, "placeholder", '[{"title":"Song","url":"./audio/song.mp3"}]'), Se(z);
  var $ = re(z, 2), Y = Ae($), ae = Ut(Y, !0), q = re(Y, 2), O = re(q, 2);
  Se($);
  var Q = re($, 2);
  {
    var J = (_) => {
      var k = mi(), M = re(Ae(k));
      yr(M), Se(k), Sr(() => li(M, E(o))), ir(_, k);
    };
    ei(Q, (_) => {
      E(o) && _(J);
    });
  }
  var ce = re(Q, 2), ee = Ut(ce, !0);
  return Se(ie), ui(ie, (_) => l = _, () => l), Sr(() => {
    pe = ni(ie, 1, "preprocessor svelte-1lrxtrk", null, pe, { light: s() === "light" }), Vt(Bt, E(u).size ? `${E(u).size} local files` : "Browser session"), Y.disabled = E(c), Vt(ae, E(c) ? "Analyzing…" : "Analyze catalog"), q.disabled = !E(o), O.disabled = !E(o), Vt(ee, E(f));
  }), at("change", mr, D), at("change", F, N), fi(j, () => E(a), (_) => T(a, _)), at("click", Y, () => y()), at("click", q, S), at("click", O, K), ir(e, ie), Gr(Ee);
}
Bs(["change", "click"]);
customElements.define("compact-audio-preprocessor", _i(
  yi,
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
