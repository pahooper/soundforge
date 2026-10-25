typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const sl = 1, ll = 2, al = 16, ol = 1, ul = 4, fl = 8, cl = 16, hl = 2, bi = "[", yn = "[!", Zn = "[?", xn = "]", rt = {}, W = /* @__PURE__ */ Symbol("uninitialized"), mi = "http://www.w3.org/1999/xhtml", dl = "http://www.w3.org/2000/svg", vl = "@attach", wi = !1;
var Nr = Array.isArray, pl = Array.prototype.indexOf, er = Array.prototype.includes, Cr = Array.from, $r = Object.keys, tr = Object.defineProperty, We = Object.getOwnPropertyDescriptor, _l = Object.getOwnPropertyDescriptors, gl = Object.prototype, bl = Array.prototype, yi = Object.getPrototypeOf, Qn = Object.isExtensible;
function Ft(e) {
  return typeof e == "function";
}
const xi = () => {
};
function ml(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function $i() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function wl(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function ei(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const ne = 2, St = 4, Pr = 8, $n = 1 << 24, ye = 16, Ee = 32, Ue = 64, nn = 128, kn = 256, ke = 512, q = 1024, B = 2048, _e = 4096, ae = 8192, Q = 16384, _t = 32768, rr = 1 << 25, nt = 65536, kr = 1 << 17, yl = 1 << 18, gt = 1 << 19, xl = 1 << 20, Ve = 1 << 25, Er = 1 << 21, kt = 1 << 22, et = 1 << 23, tt = /* @__PURE__ */ Symbol("$state"), ki = /* @__PURE__ */ Symbol("component"), En = /* @__PURE__ */ Symbol("legacy props"), $l = /* @__PURE__ */ Symbol(""), Ei = /* @__PURE__ */ Symbol("attributes"), sn = /* @__PURE__ */ Symbol("class"), ln = /* @__PURE__ */ Symbol("style"), an = /* @__PURE__ */ Symbol("text"), Xt = /* @__PURE__ */ Symbol("form reset"), sr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), lr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), kl = 1, Or = 3, ar = 8;
function El() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Lr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Sl() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Al() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let k = !1;
function he(e) {
  k = e;
}
let M;
function re(e) {
  if (e === null)
    throw Lr(), rt;
  return M = e;
}
function At() {
  return re(/* @__PURE__ */ Ie(M));
}
function se(e) {
  if (k) {
    if (/* @__PURE__ */ Ie(M) !== null)
      throw Lr(), rt;
    M = e;
  }
}
function Si(e = 1) {
  if (k) {
    for (var t = e, r = M; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Ie(r);
    M = r;
  }
}
function Sr(e = !0) {
  for (var t = 0, r = M; ; ) {
    if (r.nodeType === ar) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === xn) {
        if (t === 0) return r;
        t -= 1;
      } else (n === bi || n === yn || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ie(r)
    );
    e && r.remove(), r = i;
  }
}
function Sn(e) {
  if (!e || e.nodeType !== ar)
    throw Lr(), rt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Ai(e) {
  return e === this.v;
}
function Tl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ti(e) {
  return !Tl(e, this.v);
}
function Mi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ml() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Nl(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Cl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Pl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ol(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ll() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Rl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Il(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function zl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Dl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function jl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let Vl = !1;
function Bl(e) {
  let t = e.p;
  for (; t !== null && t.c === null; )
    t = t.p;
  return t?.c ?? null;
}
function Wl(e, t) {
  return e === null && Mi(), e.c ??= new Map(Bl(e) || void 0);
}
let ee = null;
function Tt(e) {
  ee = e;
}
function Hl(e) {
  return (
    /** @type {T} */
    Wl(ee).get(e)
  );
}
function An(e, t = !1, r) {
  ee = {
    p: ee,
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
function Tn(e) {
  var t = (
    /** @type {ComponentContext} */
    ee
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      es(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ee = t.p, Mn(e);
}
function Mn(e = {}) {
  return tr(e, ki, { value: !0 }), e;
}
function Ni() {
  return !0;
}
let ct = [];
function Ci() {
  var e = ct;
  ct = [], ml(e);
}
function Pe(e) {
  if (ct.length === 0 && !Jt) {
    var t = ct;
    queueMicrotask(() => {
      t === ct && Ci();
    });
  }
  ct.push(e);
}
function Ul() {
  for (; ct.length > 0; )
    Ci();
}
const ql = -7169;
function j(e, t) {
  e.f = e.f & ql | t;
}
function Nn(e) {
  (e.f & ke) !== 0 || e.deps === null ? j(e, q) : j(e, _e);
}
function Pi(e, t, r) {
  (e.f & B) !== 0 ? t.add(e) : (e.f & _e) !== 0 && r.add(e), j(e, q);
}
function Yl(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Pe(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let ti = !1;
function Oi() {
  ti || (ti = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t[Xt]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Li(e, t, r, n = !0) {
  n && r();
  for (var i of t)
    e.addEventListener(i, r);
  or(() => {
    for (var s of t)
      e.removeEventListener(s, r);
  });
}
function Ct(e) {
  var t = C, r = N;
  be(null), Re(null);
  try {
    return e();
  } finally {
    be(t), Re(r);
  }
}
function Ri(e, t, r, n = r) {
  e.addEventListener(t, () => Ct(r));
  const i = (
    /** @type {any} */
    e[Xt]
  );
  i ? e[Xt] = () => {
    i(), n(!0);
  } : e[Xt] = () => n(!0), Oi();
}
function Ii(e, t, r, n) {
  const i = nr;
  var s = e.filter((p) => !p.settled), a = t.map(i);
  if (r.length === 0 && s.length === 0) {
    n(a);
    return;
  }
  var l = (
    /** @type {Effect} */
    N
  ), o = Gl(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((p) => p.promise)) : null;
  function c(p) {
    if ((l.f & Q) === 0) {
      o();
      try {
        n([...a, ...p]);
      } catch (h) {
        Ce(h, l);
      }
      Ar();
    }
  }
  var d = zi();
  if (r.length === 0) {
    u.then(() => c([])).finally(d);
    return;
  }
  function v() {
    Promise.all(r.map((p) => /* @__PURE__ */ Kl(p))).then(c).catch((p) => Ce(p, l)).finally(d);
  }
  u ? u.then(() => {
    if ((l.f & Q) !== 0) {
      d();
      return;
    }
    o(), v(), Ar();
  }) : v();
}
function Gl() {
  var e = (
    /** @type {Effect} */
    N
  ), t = C, r = ee, n = (
    /** @type {Batch} */
    A
  );
  return function(s = !0) {
    Re(e), be(t), Tt(r), s && (e.f & Q) === 0 && (n?.activate(), n?.apply());
  };
}
function Ar(e = !0) {
  Re(null), be(null), Tt(null), e && A?.deactivate();
}
function zi() {
  var e = (
    /** @type {Effect} */
    N
  ), t = e.b, r = (
    /** @type {Batch} */
    A
  ), n = !!t?.is_rendered();
  return t?.update_pending_count(1, r), r.increment(n, e), () => {
    t?.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function nr(e) {
  var t = ne | B;
  return N !== null && (N.f |= gt), {
    ctx: ee,
    deps: null,
    effects: null,
    equals: Ai,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      W
    ),
    wv: 0,
    parent: N,
    ac: null
  };
}
const qt = /* @__PURE__ */ Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function Kl(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    N
  );
  n === null && Ml();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = pt(
    /** @type {V} */
    W
  ), a = !C, l = /* @__PURE__ */ new Set();
  return la(() => {
    var o = (
      /** @type {Effect} */
      N
    ), u = $i();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, (p) => {
        p !== sr && u.reject(p);
      }).finally(Ar);
    } catch (p) {
      u.reject(p), Ar();
    }
    var c = (
      /** @type {Batch} */
      A
    );
    if (a) {
      if ((o.f & _t) !== 0)
        var d = zi();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        n.b?.is_rendered()
      )
        c.async_deriveds.get(o)?.reject(qt);
      else
        for (const p of l.values())
          p.reject(qt);
      l.add(u), c.async_deriveds.set(o, u);
    }
    const v = (p, h = void 0) => {
      d?.(), l.delete(u), h !== qt && (c.activate(), h ? (s.f |= et, Mt(s, h)) : ((s.f & et) !== 0 && (s.f ^= et), Mt(s, p)), c.deactivate());
    };
    u.promise.then(v, (p) => v(null, p || "unknown"));
  }), or(() => {
    for (const o of l)
      o.reject(qt);
  }), new Promise((o) => {
    function u(c) {
      function d() {
        c === i ? o(s) : u(i);
      }
      c.then(d, d);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = /* @__PURE__ */ nr(e);
  return ls(t), t;
}
// @__NO_SIDE_EFFECTS__
function Di(e) {
  const t = /* @__PURE__ */ nr(e);
  return t.equals = Ti, t;
}
function Xl(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      X(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Cn(e) {
  var t, r = N, n = e.parent;
  if (!Ge && n !== null && e.v !== W && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (Q | ae)) !== 0)
    return El(), e.v;
  Re(n);
  try {
    Xl(e), t = fs(e);
  } finally {
    Re(r);
  }
  return t;
}
function Fi(e) {
  var t = Cn(e);
  if (!e.equals(t) && (e.wv = os(), (!A?.is_fork || e.deps === null) && (A !== null ? (A.capture(e, t, !0), Et?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    j(e, q);
    return;
  }
  Ge || (xe !== null ? (Rn() || A?.is_fork) && xe.set(e, t) : Nn(e));
}
function Jl(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Ct(() => {
        t.ac.abort(sr), t.ac = null;
      }), t.fn !== null && (t.teardown = xi), ir(t, 0), In(t));
}
function ji(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && Nt(t);
}
let qr = null, $t = null, A = null, Et = null, xe = null, on = null, Jt = !1, Yr = !1, Zt = null, mr = null;
var ri = 0;
let Zl = 1;
class qe {
  id = Zl++;
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
  #h = /* @__PURE__ */ new Map();
  /**
   * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
   * @type {Set<Effect>}
   */
  #g = /* @__PURE__ */ new Set();
  is_fork = !1;
  #c = !1;
  constructor() {
    $t === null ? qr = $t = this : ($t.#r = this, this.#t = $t), $t = this;
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
      for (var i of n.d)
        j(i, B), r(i);
      for (i of n.m)
        j(i, _e), r(i);
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
      if (!((s.f & Q) !== 0 || (s.f & (B | _e)) === 0)) {
        for (var r = s, n = !1; r.parent !== null; ) {
          r = r.parent;
          var i = r.f;
          if ((i & (Ue | Ee)) !== 0) {
            if ((i & q) === 0) {
              n = !0;
              break;
            }
            r.f ^= q;
          }
        }
        n || t.push(r);
      }
    return this.#s = [], t;
  }
  #b() {
    this.#e = !0;
    for (const l of this.#u)
      this.#f.delete(l), j(l, B), this.schedule(l);
    for (const l of this.#f)
      j(l, _e), this.schedule(l);
    this.apply();
    for (var t = Zt = [], r = [], n = mr = []; this.#s.length > 0; ) {
      ri++ > 1e3 && (this.#p(), Ql());
      for (const l of this.#x())
        try {
          this.#m(l, t, r);
        } catch (o) {
          throw Wi(l), this.#y() || this.discard(), o;
        }
    }
    if (A = null, n.length > 0) {
      var i = qe.ensure();
      for (const l of n)
        i.schedule(l);
    }
    if (Zt = null, mr = null, this.#y()) {
      this.#v(r), this.#v(t);
      for (const [l, o] of this.#h)
        Bi(l, o);
      n.length > 0 && /** @type {unknown} */
      A.#b();
      return;
    }
    const s = this.#d();
    if (s) {
      this.#v(r), this.#v(t), s.#$(this);
      return;
    }
    this.#u.clear(), this.#f.clear();
    for (const l of this.#o) l(this);
    this.#o.clear(), Et = this, ni(r), ni(t), Et = null, this.#a?.resolve();
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
    a !== null && (Oe.clear(), a.#b());
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #m(t, r, n) {
    t.f ^= q;
    for (var i = t.first; i !== null; ) {
      var s = i.f, a = (s & (Ee | Ue)) !== 0, l = a && (s & q) !== 0, o = l || (s & ae) !== 0 || this.#h.has(i);
      if (!o && i.fn !== null) {
        a ? i.f ^= q : (s & St) !== 0 ? r.push(i) : fr(i) && ((s & ye) !== 0 && this.#f.add(i), Nt(i));
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
    for (const [n, i] of t.current)
      !this.previous.has(n) && t.previous.has(n) && this.previous.set(n, t.previous.get(n)), this.current.set(n, i);
    for (const [n, i] of t.async_deriveds) {
      const s = this.async_deriveds.get(n);
      s && i.promise.then(s.resolve).catch(s.reject);
    }
    t.async_deriveds.clear(), this.transfer_effects(t.#u, t.#f);
    const r = (n) => {
      var i = n.reactions;
      if (i !== null && !((n.f & ne) !== 0 && (n.f & (B | _e)) === 0))
        for (const l of i) {
          var s = l.f;
          if ((s & ne) !== 0)
            r(
              /** @type {Derived} */
              l
            );
          else {
            var a = (
              /** @type {Effect} */
              l
            );
            s & (kt | ye) && !this.async_deriveds.has(a) && (this.#f.delete(a), j(a, B), this.schedule(a));
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
      Pi(t[r], this.#u, this.#f);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== W && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & et) === 0 && (this.current.set(t, [r, n]), xe?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    A = this;
  }
  deactivate() {
    A = null, xe = null;
  }
  flush() {
    try {
      Yr = !0, A = this, this.#b();
    } finally {
      ri = 0, on = null, Zt = null, mr = null, Yr = !1, A = null, xe = null, Oe.clear();
    }
  }
  discard() {
    for (const t of this.#i) t(this);
    this.#i.clear();
    for (const t of this.async_deriveds.values())
      t.reject(qt);
    this.#p(), this.#a?.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    this.#_.push(t);
  }
  #w() {
    for (let d = qr; d !== null; d = d.#r) {
      var t = d.id < this.id, r = [];
      for (const [v, [p, h]] of this.current) {
        if (d.current.has(v)) {
          var n = (
            /** @type {[any, boolean]} */
            d.current.get(v)[0]
          );
          if (t && p !== n)
            d.current.set(v, [p, h]);
          else
            continue;
        }
        r.push(v);
      }
      if (t)
        for (const [v, p] of this.async_deriveds) {
          const h = d.async_deriveds.get(v);
          h && p.promise.then(h.resolve).catch(h.reject);
        }
      var i = [...d.current.keys()].filter(
        (v) => !/** @type {[any, boolean]} */
        d.current.get(v)[1]
      );
      if (!(!d.#e || i.length === 0)) {
        var s = i.filter((v) => !this.current.has(v));
        if (s.length === 0)
          t && d.discard();
        else if (r.length > 0) {
          if (t)
            for (const v of this.#g)
              d.unskip_effect(v, (p) => {
                (p.f & (ye | kt)) !== 0 ? d.schedule(p) : d.#v([p]);
              });
          d.activate();
          var a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
          for (var o of r)
            Vi(o, s, a, l);
          l = /* @__PURE__ */ new Map();
          var u = [...d.current].filter(([v, p]) => {
            const h = this.current.get(v);
            return h ? h[0] !== p[0] || h[1] !== p[1] : !0;
          }).map(([v]) => v);
          if (u.length > 0)
            for (const v of this.#_)
              (v.f & (Q | ae | kr)) === 0 && Pn(v, u, l) && ((v.f & (kt | ye)) !== 0 ? (j(v, B), d.schedule(v)) : d.#u.add(v));
          if (d.#s.length > 0 && !d.#c) {
            d.apply();
            for (var c of d.#x())
              d.#m(c, [], []);
          }
          d.deactivate();
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
    return (this.#a ??= $i()).promise;
  }
  static ensure() {
    if (A === null) {
      const t = A = new qe();
      !Yr && !Jt && Pe(() => {
        t.#e || t.flush();
      });
    }
    return A;
  }
  apply() {
    {
      xe = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (on = t, t.b?.is_pending && (t.f & (St | Pr | $n)) !== 0 && (t.f & _t) === 0) {
      t.b.defer_effect(t);
      return;
    }
    this.#s.push(t);
  }
  #p() {
    if (this.linked) {
      var t = this.#t, r = this.#r;
      t === null ? qr = r : t.#r = r, r === null ? $t = t : r.#t = t, this.linked = !1;
    }
  }
}
function K(e) {
  var t = Jt, r = Et;
  Et = null, Jt = !0;
  try {
    for (var n; ; ) {
      if (Ul(), A === null)
        return (
          /** @type {T} */
          n
        );
      A.flush();
    }
  } finally {
    Jt = t, Et = r;
  }
}
function Ql() {
  try {
    Ll();
  } catch (e) {
    Ce(e, on);
  }
}
let je = null;
function ni(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Q | ae)) === 0 && fr(n) && (je = /* @__PURE__ */ new Set(), Nt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ns(n), je?.size > 0)) {
        Oe.clear();
        for (const i of je) {
          if ((i.f & (Q | ae)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            je.has(a) && (je.delete(a), s.push(a)), a = a.parent;
          for (let l = s.length - 1; l >= 0; l--) {
            const o = s[l];
            (o.f & (Q | ae)) === 0 && Nt(o);
          }
        }
        je.clear();
      }
    }
    je = null;
  }
}
function Vi(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & ne) !== 0 ? Vi(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (kt | ye)) !== 0 && (s & B) === 0 && Pn(i, t, n) && (j(i, B), On(
        /** @type {Effect} */
        i
      ));
    }
}
function Pn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (er.call(t, i))
        return !0;
      if ((i.f & ne) !== 0 && Pn(
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
function On(e) {
  A.schedule(e);
}
function Bi(e, t) {
  if (!((e.f & Ee) !== 0 && (e.f & q) !== 0)) {
    (e.f & B) !== 0 ? t.d.push(e) : (e.f & _e) !== 0 && t.m.push(e), j(e, q);
    for (var r = e.first; r !== null; )
      Bi(r, t), r = r.next;
  }
}
function Wi(e) {
  j(e, q);
  for (var t = e.first; t !== null; )
    Wi(t), t = t.next;
}
let Tr = /* @__PURE__ */ new Set();
const Oe = /* @__PURE__ */ new Map();
let Hi = !1;
function pt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ai,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function F(e, t) {
  const r = pt(e);
  return ls(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ui(e, t = !1, r = !0) {
  const n = pt(e);
  return t || (n.equals = Ti), n;
}
function x(e, t, r = !1) {
  C !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!$e || (C.f & kr) !== 0) && Ni() && (C.f & (ne | ye | kt | kr)) !== 0 && (Le === null || !Le.has(e)) && Fl();
  let n = r ? Be(t) : t;
  return Mt(e, n, mr);
}
var ft = null, un = 0;
function Mt(e, t, r = null) {
  if (!e.equals(t)) {
    Ge ? Oe.set(e, t) : Oe.has(e) || Oe.set(e, e.v);
    var n = qe.ensure();
    if (n.capture(e, t), (e.f & ne) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & B) !== 0 && Cn(i), xe === null && Nn(i);
    }
    e.wv = os(), ft = null, un = 0, qi(e, B, r), ft = null, N !== null && (N.f & q) !== 0 && (N.f & (Ee | Ue)) === 0 && (ve === null ? ua([e]) : ve.push(e)), !n.is_fork && Tr.size > 0 && !Hi && ea();
  }
  return t;
}
function ea() {
  Hi = !1;
  for (const e of Tr) {
    (e.f & q) !== 0 && j(e, _e);
    let t;
    try {
      t = fr(e);
    } catch {
      t = !0;
    }
    t && Nt(e);
  }
  Tr.clear();
}
function Qt(e) {
  x(e, e.v + 1);
}
function qi(e, t, r) {
  var n = e.reactions;
  if (n !== null) {
    var i = n.length;
    if (un += i, un > 1e5 && ft === null && (ft = /* @__PURE__ */ new Set()), ft !== null) {
      if (ft.has(e)) return;
      ft.add(e);
    }
    for (var s = 0; s < i; s++) {
      var a = n[s], l = a.f, o = (l & B) === 0;
      if (o && j(a, t), (l & kr) !== 0)
        Tr.add(
          /** @type {Effect} */
          a
        );
      else if ((l & ne) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        xe?.delete(u), qi(u, _e, r);
      } else if (o) {
        var c = (
          /** @type {Effect} */
          a
        );
        (l & ye) !== 0 && je !== null && je.add(c), r !== null ? r.push(c) : On(c);
      }
    }
  }
}
function Be(e) {
  if (typeof e != "object" || e === null || tt in e || ki in e)
    return e;
  const t = yi(e);
  if (t !== gl && t !== bl)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Nr(e), i = /* @__PURE__ */ F(0), s = vt, a = (l) => {
    if (vt === s)
      return l();
    var o = C, u = vt;
    be(null), ai(s);
    var c = l();
    return be(o), ai(u), c;
  };
  return n && r.set("length", /* @__PURE__ */ F(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && zl();
        var c = r.get(o);
        return c === void 0 ? a(() => {
          var d = /* @__PURE__ */ F(u.value);
          return r.set(o, d), d;
        }) : x(c, u.value, !0), !0;
      },
      deleteProperty(l, o) {
        var u = r.get(o);
        if (u === void 0) {
          if (o in l) {
            const c = a(() => /* @__PURE__ */ F(W));
            r.set(o, c), Qt(i);
          }
        } else
          x(u, W), Qt(i);
        return !0;
      },
      get(l, o, u) {
        if (o === tt)
          return e;
        var c = r.get(o), d = o in l;
        if (c === void 0 && (!d || We(l, o)?.writable) && (c = a(() => {
          var p = Be(d ? l[o] : W), h = /* @__PURE__ */ F(p);
          return h;
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
          var d = f(c);
          if (d === W)
            return;
          if (u && "value" in u)
            u.value = d;
          else
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return u;
      },
      has(l, o) {
        if (o === tt)
          return !0;
        var u = r.get(o), c = u !== void 0 && u.v !== W || Reflect.has(l, o);
        if (u !== void 0 || N !== null && (!c || We(l, o)?.writable)) {
          u === void 0 && (u = a(() => {
            var v = c ? Be(l[o]) : W, p = /* @__PURE__ */ F(v);
            return p;
          }), r.set(o, u));
          var d = f(u);
          if (d === W)
            return !1;
        }
        return c;
      },
      set(l, o, u, c) {
        var d = r.get(o), v = o in l;
        if (n && o === "length")
          for (var p = u; p < /** @type {Source<number>} */
          d.v; p += 1) {
            var h = r.get(p + "");
            h !== void 0 ? x(h, W) : p in l && (h = a(() => /* @__PURE__ */ F(W)), r.set(p + "", h));
          }
        if (d === void 0)
          (!v || We(l, o)?.writable) && (d = a(() => /* @__PURE__ */ F(void 0)), x(d, Be(u)), r.set(o, d));
        else {
          v = d.v !== W;
          var g = a(() => Be(u));
          x(d, g);
        }
        var S = Reflect.getOwnPropertyDescriptor(l, o);
        if (S?.set && S.set.call(c, u), !v) {
          if (n && typeof o == "string") {
            var w = (
              /** @type {Source<number>} */
              r.get("length")
            ), b = Number(o);
            Number.isInteger(b) && b >= w.v && x(w, b + 1);
          }
          Qt(i);
        }
        return !0;
      },
      ownKeys(l) {
        f(i);
        var o = Reflect.ownKeys(l).filter((d) => {
          var v = r.get(d);
          return v === void 0 || v.v !== W;
        });
        for (var [u, c] of r)
          c.v !== W && !(u in l) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        Dl();
      }
    }
  );
}
function ii(e) {
  try {
    if (e !== null && typeof e == "object" && tt in e)
      return e[tt];
  } catch {
  }
  return e;
}
function Yi(e, t) {
  return Object.is(ii(e), ii(t));
}
var si, Gi, Ki, Xi;
function fn() {
  if (si === void 0) {
    si = window, Gi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Ki = We(t, "firstChild").get, Xi = We(t, "nextSibling").get, Qn(e) && (e[sn] = void 0, e[Ei] = null, e[ln] = void 0, e.__e = void 0), Qn(r) && (r[an] = void 0);
  }
}
function ge(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  return (
    /** @type {TemplateNode | null} */
    Ki.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  return (
    /** @type {TemplateNode | null} */
    Xi.call(e)
  );
}
function le(e, t) {
  if (!k)
    return /* @__PURE__ */ Ye(e);
  var r = /* @__PURE__ */ Ye(M);
  if (r === null)
    r = M.appendChild(ge());
  else if (t && r.nodeType !== Or) {
    var n = ge();
    return r?.before(n), re(n), n;
  }
  return t && Ln(
    /** @type {Text} */
    r
  ), re(r), r;
}
function Ji(e, t = !1) {
  if (!k) {
    var r = /* @__PURE__ */ Ye(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ie(r) : r;
  }
  if (t) {
    if (M?.nodeType !== Or) {
      var n = ge();
      return M?.before(n), re(n), n;
    }
    Ln(
      /** @type {Text} */
      M
    );
  }
  return M;
}
function jt(e, t = !1) {
  if (!k)
    return /* @__PURE__ */ Ye(e);
  var r = le(e, t);
  return se(e), r;
}
function U(e, t = 1, r = !1) {
  let n = k ? M : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ie(n);
  if (!k)
    return n;
  if (r) {
    if (n?.nodeType !== Or) {
      var s = ge();
      return n === null ? i?.after(s) : n.before(s), re(s), s;
    }
    Ln(
      /** @type {Text} */
      n
    );
  }
  return re(n), n;
}
function Zi(e) {
  e.textContent = "";
}
function Qi() {
  return !1;
}
function Rr(e, t, r) {
  return t == null || t === mi ? (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElement(e)
  ) : (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t, e)
  );
}
function Ln(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Or; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function ta(e) {
  var t = N;
  if (t === null)
    return C.f |= et, e;
  if ((t.f & _t) === 0 && (t.f & St) === 0)
    throw e;
  Ce(e, t);
}
function Ce(e, t) {
  if (e === rt)
    throw e;
  if (!(t !== null && (t.f & Q) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & nn) !== 0 && (t.f & (Q | rr)) === 0) {
        if ((t.f & _t) === 0)
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
function ra(e) {
  N === null && (C === null && Ol(), Pl()), Ge && Cl();
}
function na(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Se(e, t) {
  var r = N;
  r !== null && (r.f & ae) !== 0 && (e |= ae);
  var n = {
    ctx: ee,
    deps: null,
    nodes: null,
    f: e | B | ke,
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
  if ((e & St) !== 0)
    Zt !== null ? Zt.push(n) : qe.ensure().schedule(n);
  else if (t !== null) {
    try {
      Nt(n);
    } catch (a) {
      throw X(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & gt) === 0 && (i = i.first, (e & ye) !== 0 && (e & nt) !== 0 && i !== null && (i.f |= nt));
  }
  if (i !== null && (i.parent = r, r !== null && na(i, r), C !== null && (C.f & ne) !== 0 && (e & Ue) === 0)) {
    var s = (
      /** @type {Derived} */
      C
    );
    (s.effects ??= []).push(i);
  }
  return n;
}
function Rn() {
  return C !== null && !$e;
}
function or(e) {
  const t = Se(Pr, null);
  return j(t, q), t.teardown = e, t;
}
function wr(e) {
  ra();
  var t = (
    /** @type {Effect} */
    N.f
  ), r = !C && (t & Ee) !== 0 && ee !== null && !ee.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ee
    );
    (n.e ??= []).push(e);
  } else
    return es(e);
}
function es(e) {
  return Se(St | xl, e);
}
function ia(e) {
  qe.ensure();
  const t = Se(Ue | gt, e);
  return () => {
    X(t);
  };
}
function sa(e) {
  qe.ensure();
  const t = Se(Ue | gt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? dt(t, () => {
      X(t), n(void 0);
    }) : (X(t), n(void 0));
  });
}
function Ir(e) {
  return Se(St, e);
}
function la(e) {
  return Se(kt | gt, e);
}
function bt(e, t = 0) {
  return Se(Pr | t, e);
}
function Vt(e, t = [], r = [], n = []) {
  Ii(n, t, r, (i) => {
    Se(Pr, () => {
      e(...i.map(f));
    });
  });
}
function ur(e, t = 0) {
  var r = Se(ye | t, e);
  return r;
}
function ts(e, t = 0) {
  var r = Se($n | t, e);
  return r;
}
function oe(e) {
  return Se(Ee | gt, e);
}
function rs(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Ge, n = C;
    li(!0), be(null);
    try {
      t.call(null);
    } catch (i) {
      Ce(i, e.parent);
    } finally {
      li(r), be(n);
    }
  }
}
function In(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Ct(() => {
      i.abort(sr);
    });
    var n = r.next;
    (r.f & Ue) !== 0 ? r.parent = null : X(r, t), r = n;
  }
}
function aa(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Ee) === 0 && X(t), t = r;
  }
}
function X(e, t = !0) {
  var r = !1;
  (t || (e.f & yl) !== 0) && e.nodes !== null && e.nodes.end !== null && (oa(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), e.f |= rr, In(e, t && !r), ir(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  rs(e), e.f ^= rr, e.f |= Q;
  var i = e.parent;
  i !== null && i.first !== null && ns(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function oa(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Ie(e);
    e.remove(), e = r;
  }
}
function ns(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function dt(e, t, r = !0) {
  var n = [];
  e.f |= kn, is(e, n, !0);
  var i = () => {
    r && X(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var l of n)
      l.out(a);
  } else
    i();
}
function is(e, t, r) {
  if ((e.f & ae) === 0) {
    e.f ^= ae;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Ue) === 0) {
        var a = (i.f & nt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Ee) !== 0 && (e.f & ye) !== 0;
        is(i, t, a ? r : !1);
      }
      i = s;
    }
  }
}
function Mr(e) {
  e.f &= ~kn, ss(e, !0);
}
function ss(e, t) {
  if ((e.f & kn) === 0 && (e.f & ae) !== 0) {
    e.f ^= ae, (e.f & q) === 0 && (j(e, B), qe.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & nt) !== 0 || (r.f & Ee) !== 0;
      ss(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function zn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Ie(r);
      t.append(r), r = i;
    }
}
let Ge = !1;
function li(e) {
  Ge = e;
}
let C = null, $e = !1;
function be(e) {
  C = e;
}
let N = null;
function Re(e) {
  N = e;
}
let Le = null;
function ls(e) {
  C !== null && ((C.f & Er) !== 0 || (C.f & ne) !== 0) && (Le ??= /* @__PURE__ */ new Set()).add(e);
}
let ue = null, ce = 0, ve = null;
function ua(e) {
  ve = e;
}
let as = 1, ht = 0, vt = ht;
function ai(e) {
  vt = e;
}
function os() {
  return ++as;
}
function fr(e) {
  var t = e.f;
  if ((t & B) !== 0)
    return !0;
  if ((t & _e) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (fr(
        /** @type {Derived} */
        s
      ) && Fi(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & ke) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    xe === null && j(e, q);
  }
  return !1;
}
function us(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Le !== null && Le.has(e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & ne) !== 0 ? us(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? j(s, B) : (s.f & q) !== 0 && j(s, _e), On(
        /** @type {Effect} */
        s
      ));
    }
}
function fs(e) {
  var t = ue, r = ce, n = ve, i = C, s = Le, a = ee, l = $e, o = vt, u = e.f;
  ue = /** @type {null | Value[]} */
  null, ce = 0, ve = null, C = (u & (Ee | Ue)) === 0 ? e : null, Le = null, Tt(e.ctx), $e = !1, vt = ++ht, e.ac !== null && (Ct(() => {
    e.ac.abort(sr);
  }), e.ac = null);
  try {
    e.f |= Er;
    var c = (
      /** @type {Function} */
      e.fn
    ), d = c();
    e.f |= _t;
    var v = oi(e);
    if (Ni() && ve !== null && !$e && v !== null && (e.f & (ne | _e | B)) === 0)
      for (var p = 0; p < /** @type {Source[]} */
      ve.length; p++)
        us(
          ve[p],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (ht++, i.deps !== null)
        for (let h = 0; h < r; h += 1)
          i.deps[h].rv = ht;
      if (t !== null)
        for (const h of t)
          h.rv = ht;
      ve !== null && (n === null ? n = ve : n.push(.../** @type {Source[]} */
      ve));
    }
    return (e.f & et) !== 0 && (e.f ^= et), d;
  } catch (h) {
    return oi(e), ta(h);
  } finally {
    e.f ^= Er, ue = t, ce = r, ve = n, C = i, Le = s, Tt(a), $e = l, vt = o;
  }
}
function oi(e) {
  var t = e.deps, r = A?.is_fork;
  if (ue !== null) {
    var n;
    if (r || ir(e, ce), t !== null && ce > 0)
      for (t.length = ce + ue.length, n = 0; n < ue.length; n++)
        t[ce + n] = ue[n];
    else
      e.deps = t = ue;
    if (Rn() && (e.f & ke) !== 0)
      for (n = ce; n < t.length; n++)
        (t[n].reactions ??= []).push(e);
  } else !r && t !== null && ce < t.length && (ir(e, ce), t.length = ce);
  return t;
}
function fa(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = pl.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & ne) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ue === null || !er.call(ue, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ke) !== 0 && (s.f ^= ke), s.v !== W && Nn(s), s.ac !== null && Ct(() => {
      s.ac.abort(sr), s.ac = null, j(s, B);
    }), Jl(s), ir(s, 0);
  }
}
function ir(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      fa(e, r[n]);
}
function Nt(e) {
  var t = e.f;
  if ((t & Q) === 0) {
    j(e, q);
    var r = N;
    N = e;
    try {
      (t & (ye | $n)) !== 0 ? aa(e) : In(e), rs(e);
      var n = fs(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = as;
      var i;
      wi && Vl && (e.f & B) !== 0 && e.deps;
    } finally {
      N = r;
    }
  }
}
async function ca() {
  await Promise.resolve(), K();
}
function f(e) {
  var t = e.f, r = (t & ne) !== 0;
  if (C !== null && !$e) {
    var n = N !== null && (N.f & Q) !== 0;
    if (!n && (Le === null || !Le.has(e))) {
      var i = C.deps;
      if ((C.f & Er) !== 0)
        e.rv < ht && (e.rv = ht, ue === null && i !== null && i[ce] === e ? ce++ : ue === null ? ue = [e] : ue.push(e));
      else {
        C.deps ??= [], er.call(C.deps, e) || C.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [C] : er.call(s, C) || s.push(C);
      }
    }
  }
  if (Ge && Oe.has(e))
    return Oe.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (Ge) {
      var l = a.v;
      return ((a.f & q) === 0 && a.reactions !== null || hs(a)) && (l = Cn(a)), Oe.set(a, l), l;
    }
    var o = (a.f & ke) === 0 && !$e && C !== null && (C.f & ke) !== 0, u = (a.f & _t) === 0;
    fr(a) && (o && (a.f |= ke), Fi(a)), o && !u && (ji(a), cs(a));
  }
  if (xe?.has(e))
    return xe.get(e);
  if ((e.f & et) !== 0)
    throw e.v;
  return e.v;
}
function cs(e) {
  if (e.f |= ke, e.deps !== null)
    for (const r of e.deps) {
      var t = r.reactions;
      t === null ? r.reactions = [e] : er.call(t, e) || t.push(e), (r.f & ne) !== 0 && (r.f & ke) === 0 && (ji(
        /** @type {Derived} */
        r
      ), cs(
        /** @type {Derived} */
        r
      ));
    }
}
function hs(e) {
  if (e.v === W) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Oe.has(t) || (t.f & ne) !== 0 && hs(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function He(e) {
  var t = $e;
  try {
    return $e = !0, e();
  } finally {
    $e = t;
  }
}
const Yt = /* @__PURE__ */ Symbol("events"), ds = /* @__PURE__ */ new Set(), cn = /* @__PURE__ */ new Set();
function vs(e, t, r, n = {}) {
  function i(s) {
    if (n.capture || hn.call(t, s), !s.cancelBubble)
      return Ct(() => r?.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? (i.__removed = !1, Pe(() => {
    i.__removed || t.addEventListener(e, i, n);
  })) : t.addEventListener(e, i, n), i;
}
function de(e, t, r, n, i) {
  var s = { capture: n, passive: i }, a = vs(e, t, r, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && or(() => {
    a.__removed = !0, t.removeEventListener(e, a, s);
  });
}
function we(e, t, r) {
  (t[Yt] ??= {})[e] = r;
}
function ps(e) {
  for (var t = 0; t < e.length; t++)
    ds.add(e[t]);
  for (var r of cn)
    r(e);
}
let Gr = null, Kr = !1;
function hn(e) {
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
  var a = 0, l = Gr === e && e[Yt];
  if (l) {
    var o = i.indexOf(l);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Yt] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    o <= u && (a = o);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    tr(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var c = C, d = N;
    be(null), Re(null);
    try {
      for (var v, p = []; s !== null && s !== t; ) {
        try {
          var h = s[Yt]?.[n];
          h != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && h.call(s, e);
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
      e[Yt] = t, delete e.currentTarget, be(c), Re(d);
    }
  }
}
const ha = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function da(e) {
  return (
    /** @type {string} */
    ha?.createHTML(e) ?? e
  );
}
function _s(e) {
  var t = Rr("template");
  return t.innerHTML = da(e.replaceAll("<!>", "<!---->")), t.content;
}
function it(e, t) {
  var r = (
    /** @type {Effect} */
    N
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Pt(e, t) {
  var r = (t & hl) !== 0, n, i = !e.startsWith("<!>");
  return () => {
    if (k)
      return it(M, null), M;
    n === void 0 && (n = _s(i ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ye(n));
    var s = (
      /** @type {TemplateNode} */
      r || Gi ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return it(s, s), s;
  };
}
// @__NO_SIDE_EFFECTS__
function va(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, s;
  return () => {
    if (k)
      return it(M, null), M;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        _s(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Ye(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ Ye(l);
    }
    var o = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return it(o, o), o;
  };
}
// @__NO_SIDE_EFFECTS__
function pa(e, t) {
  return /* @__PURE__ */ va(e, t, "svg");
}
function gs() {
  if (k)
    return it(M, null), M;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = ge();
  return e.append(t, r), it(t, r), e;
}
function Ne(e, t) {
  if (k) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      N
    );
    ((r.f & _t) === 0 || r.nodes.end === null) && (r.nodes.end = M), At();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function _a(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const ga = [
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
function ba(e) {
  return ga.includes(e);
}
const ma = {
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
function wa(e) {
  return e = e.toLowerCase(), ma[e] ?? e;
}
const ya = ["touchstart", "touchmove"];
function xa(e) {
  return ya.includes(e);
}
const $a = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function ka(e) {
  return $a.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Ea(e) {
  let t = 0, r = pt(0), n;
  return () => {
    Rn() && (f(r), bt(() => (t === 0 && (n = He(() => e(() => Qt(r)))), t += 1, () => {
      Pe(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Qt(r));
      });
    })));
  };
}
var Sa = nt | gt;
function Aa(e, t, r, n) {
  new Ta(e, t, r, n);
}
class Ta {
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
  #t = k ? M : null;
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
  #y = Ea(() => (this.#c = pt(this.#_), () => {
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
        N
      );
      a.b = this, a.f |= nn, n(s);
    }, this.parent = /** @type {Effect} */
    N.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), this.#i = ur(() => {
      if (k) {
        const s = Sn(
          /** @type {TemplateNode} */
          this.#t
        );
        At();
        const a = s === yn;
        if (s.startsWith(Zn)) {
          const o = JSON.parse(s.slice(Zn.length));
          this.#b(o);
        } else a ? this.#$() : this.#x();
      } else
        this.#v();
    }, Sa), k && (this.#e = M);
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
    Pe(i), r && (this.#a = oe(() => {
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
      if (!this.#d()) {
        if (r) {
          Al();
          return;
        }
        r = !0, n && jl(), this.#a !== null && dt(this.#a, () => {
          this.#a = null;
        }), this.#p(() => {
          this.#v();
        });
      }
    };
    return { reset: i, invoke_onerror: () => {
      if (!this.#d())
        try {
          n = !0, this.#r.onerror?.(t, i), n = !1;
        } catch (a) {
          Ce(a, this.#i && this.#i.parent);
        }
    } };
  }
  #d() {
    return (this.#i.f & (Q | rr)) !== 0;
  }
  #$() {
    const t = this.#r.pending;
    t && (this.is_pending = !0, this.#n = oe(() => t(this.#e)), Pe(() => {
      if (!this.#d()) {
        var r = this.#s = document.createDocumentFragment(), n = ge(), i = !1;
        if (r.append(n), this.#l = this.#p(() => {
          try {
            return oe(() => this.#o(n));
          } catch (s) {
            try {
              this.error(s), i = !0;
            } catch (a) {
              Ce(a, this.#i.parent);
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
        this.#u === 0 && (this.#e.before(r), this.#s = null, dt(
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
        zn(this.#l, t);
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
    this.is_pending = !1, t.transfer_effects(this.#h, this.#g);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Pi(t, this.#h, this.#g);
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
    var r = N, n = C, i = ee;
    Re(this.#i), be(this.#i), Tt(this.#i.ctx);
    try {
      return qe.ensure(), t();
    } finally {
      Re(r), be(n), Tt(i);
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
    this.#u += t, this.#u === 0 && (this.#w(r), this.#n && dt(this.#n, () => {
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
    this.#k(t, r), this.#_ += t, !(!this.#c || this.#f) && (this.#f = !0, Pe(() => {
      this.#f = !1, this.#c && Mt(this.#c, this.#_);
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
    if (t === rt || !this.#r.onerror && !this.#r.failed)
      throw t;
    A?.is_fork ? (this.#l && A.skip_effect(this.#l), this.#n && A.skip_effect(this.#n), this.#a && A.skip_effect(this.#a), A.oncommit(() => {
      this.#d() || this.#E(t);
    })) : this.#E(t);
  }
  /**
   * @param {unknown} error
   */
  #E(t) {
    this.#l && (X(this.#l), this.#l = null), this.#n && (X(this.#n), this.#n = null), this.#a && (X(this.#a), this.#a = null), k && (re(
      /** @type {TemplateNode} */
      this.#t
    ), Si(), re(Sr()));
    let r = this.#r.failed;
    const n = (i) => {
      if (this.#d()) return;
      const { reset: s, invoke_onerror: a } = this.#m(i);
      a(), r && !this.#d() && (this.#a = this.#p(() => {
        try {
          return oe(() => {
            var l = (
              /** @type {Effect} */
              N
            );
            l.b = this, l.f |= nn, r(
              this.#e,
              () => i,
              () => s
            );
          });
        } catch (l) {
          return Ce(
            l,
            /** @type {Effect} */
            this.#i.parent
          ), null;
        }
      }));
    };
    Pe(() => {
      if (!this.#d()) {
        var i;
        try {
          i = this.transform_error(t);
        } catch (s) {
          Ce(s, this.#i && this.#i.parent);
          return;
        }
        i !== null && typeof i == "object" && typeof /** @type {any} */
        i.then == "function" ? i.then(
          n,
          /** @param {unknown} e */
          (s) => Ce(s, this.#i && this.#i.parent)
        ) : n(i);
      }
    });
  }
}
function Bt(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[an] ??= e.nodeValue) && (e[an] = r, e.nodeValue = `${r}`);
}
function bs(e, t) {
  return ms(e, t);
}
function Ma(e, t) {
  fn(), t.intro = t.intro ?? !1;
  const r = t.target, n = k, i = M;
  try {
    for (var s = /* @__PURE__ */ Ye(r); s && (s.nodeType !== ar || /** @type {Comment} */
    s.data !== bi); )
      s = /* @__PURE__ */ Ie(s);
    if (!s)
      throw rt;
    he(!0), re(
      /** @type {Comment} */
      s
    );
    const a = ms(e, { ...t, anchor: s });
    return he(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== rt && console.warn("Failed to hydrate: ", a), t.recover === !1 && Rl(), fn(), Zi(r), he(!1), bs(e, t);
  } finally {
    he(n), re(i);
  }
}
const gr = /* @__PURE__ */ new Map();
function ms(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: a = !0, transformError: l }) {
  fn();
  var o = void 0, u = sa(() => {
    var c = r ?? t.appendChild(ge());
    Aa(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (p) => {
        An({});
        var h = (
          /** @type {ComponentContext} */
          ee
        );
        if (s && (h.c = s), i && (n.$$events = i), k && it(
          /** @type {TemplateNode} */
          p,
          null
        ), o = e(p, n) || Mn(), k && (N.nodes.end = M, M === null || M.nodeType !== ar || /** @type {Comment} */
        M.data !== xn))
          throw Lr(), rt;
        Tn();
      },
      l
    );
    var d = /* @__PURE__ */ new Set(), v = (p) => {
      for (var h = 0; h < p.length; h++) {
        var g = p[h];
        if (!d.has(g)) {
          d.add(g);
          var S = xa(g);
          for (const L of [t, document]) {
            var w = gr.get(L);
            w === void 0 && (w = /* @__PURE__ */ new Map(), gr.set(L, w));
            var b = w.get(g);
            b === void 0 ? (L.addEventListener(g, hn, { passive: S }), w.set(g, 1)) : w.set(g, b + 1);
          }
        }
      }
    };
    return v(Cr(ds)), cn.add(v), () => {
      for (var p of d)
        for (const S of [t, document]) {
          var h = (
            /** @type {Map<string, number>} */
            gr.get(S)
          ), g = (
            /** @type {number} */
            h.get(p)
          );
          --g == 0 ? (S.removeEventListener(p, hn), h.delete(p), h.size === 0 && gr.delete(S)) : h.set(p, g);
        }
      cn.delete(v), c !== r && c.parentNode?.removeChild(c);
    };
  });
  return dn.set(o, u), o;
}
let dn = /* @__PURE__ */ new WeakMap();
function Na(e, t) {
  const r = dn.get(e);
  return r ? (dn.delete(e), r(t)) : Promise.resolve();
}
class Dn {
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
        Mr(n), this.#o.delete(r);
      else {
        var i = this.#r.get(r);
        i && (Mr(i.effect), this.#t.set(r, i.effect), this.#r.delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
      }
      for (const [s, a] of this.#e) {
        if (this.#e.delete(s), s === t)
          break;
        const l = this.#r.get(a);
        l && (X(l.effect), this.#r.delete(a));
      }
      for (const [s, a] of this.#t) {
        if (s === r || this.#o.has(s)) continue;
        const l = () => {
          if (Array.from(this.#e.values()).includes(s)) {
            var u = document.createDocumentFragment();
            zn(a, u), u.append(ge()), this.#r.set(s, { effect: a, fragment: u });
          } else
            X(a);
          this.#o.delete(s), this.#t.delete(s);
        };
        this.#i || !n ? (this.#o.add(s), dt(a, l, !1)) : l();
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
      r.includes(n) || (X(i.effect), this.#r.delete(n));
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
    ), i = Qi();
    if (r && !this.#t.has(t) && !this.#r.has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = ge();
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
      k && (this.anchor = M), this.#l(n);
  }
}
function Ca(e, t, ...r) {
  var n = new Dn(e);
  ur(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((s) => i(s, ...r)));
  }, nt);
}
function Pa(e) {
  ee === null && Mi(), wr(() => {
    const t = He(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ot(e, t, r = !1) {
  var n;
  k && (n = M, At());
  var i = new Dn(e), s = r ? nt : 0;
  function a(l, o) {
    if (k) {
      var u = Sn(
        /** @type {TemplateNode} */
        n
      );
      if (l !== parseInt(u.substring(1))) {
        var c = Sr();
        re(c), i.anchor = c, he(!1), i.ensure(l, o), he(!0);
        return;
      }
    }
    i.ensure(l, o);
  }
  ur(() => {
    var l = !1;
    t((o, u = 0) => {
      l = !0, a(u, o);
    }), l || a(-1, null);
  }, s);
}
function ws(e, t) {
  return t;
}
function Oa(e, t, r) {
  for (var n = [], i = t.length, s, a = t.length, l = 0; l < i; l++) {
    let d = t[l];
    dt(
      d,
      () => {
        if (s) {
          if (s.pending.delete(d), s.done.add(d), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            vn(e, Cr(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
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
      Zi(c), c.append(u), e.items.clear();
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
      s.f |= Ve;
      const a = document.createDocumentFragment();
      zn(s, a);
    } else
      X(t[i], r);
  }
}
var ui;
function ys(e, t, r, n, i, s = null) {
  var a = e, l = /* @__PURE__ */ new Map();
  k && At();
  var o = null, u = /* @__PURE__ */ Di(() => {
    var S = r();
    return (
      /** @type {V[]} */
      Nr(S) ? S : S == null ? [] : Cr(S)
    );
  }), c = /* @__PURE__ */ new Map(), d = !0;
  function v(S) {
    if ((g.effect.f & Q) === 0) {
      g.pending.delete(S);
      var w = f(u);
      g.fallback = o, La(g, w, a, t, n), o !== null && (w.length === 0 ? (o.f & Ve) === 0 ? Mr(o) : (o.f ^= Ve, Gt(o, null, a)) : dt(o, () => {
        o = null;
      }));
    }
  }
  function p(S) {
    g.pending.delete(S);
  }
  var h = ur(() => {
    var S = (
      /** @type {V[]} */
      f(u)
    ), w = S.length;
    let b = !1;
    if (k) {
      var L = Sn(a) === yn;
      L !== (w === 0) && (a = Sr(), re(a), he(!1), b = !0);
    }
    for (var m = /* @__PURE__ */ new Set(), O = (
      /** @type {Batch} */
      A
    ), R = Qi(), E = 0; E < w; E += 1) {
      k && M.nodeType === ar && /** @type {Comment} */
      M.data === xn && (a = /** @type {Comment} */
      M, b = !0, he(!1));
      var $ = S[E], y = n($, E), z = d ? null : l.get(y);
      z ? (z.v && Mt(z.v, $), z.i && Mt(z.i, E), R && O.unskip_effect(z.e)) : (z = Ra(
        l,
        d ? a : ui ??= ge(),
        $,
        y,
        E,
        i,
        t,
        r
      ), d || (z.e.f |= Ve), l.set(y, z)), m.add(y);
    }
    if (w === 0 && s && !o && (d ? o = oe(() => s(a)) : (o = oe(() => s(ui ??= ge())), o.f |= Ve)), w > m.size && Nl(), k && w > 0 && re(Sr()), !d)
      if (c.set(O, m), R) {
        for (const [D, J] of l)
          m.has(D) || O.skip_effect(J.e);
        O.oncommit(v), O.ondiscard(p);
      } else
        v(O);
    b && he(!0), f(u);
  }), g = { effect: h, items: l, pending: c, outrogroups: null, fallback: o };
  d = !1, k && (a = M);
}
function Wt(e) {
  for (; e !== null && (e.f & Ee) === 0; )
    e = e.next;
  return e;
}
function La(e, t, r, n, i) {
  var s = t.length, a = e.items, l = Wt(e.effect.first), o, u = null, c = [], d = [], v, p, h, g;
  for (g = 0; g < s; g += 1) {
    if (v = t[g], p = i(v, g), h = /** @type {EachItem} */
    a.get(p).e, e.outrogroups !== null)
      for (const $ of e.outrogroups)
        $.pending.delete(h), $.done.delete(h);
    if ((h.f & ae) !== 0 && Mr(h), (h.f & Ve) !== 0)
      if (h.f ^= Ve, h === l)
        Gt(h, null, r);
      else {
        var S = u ? u.next : l;
        h === e.effect.last && (e.effect.last = h.prev), h.prev && (h.prev.next = h.next), h.next && (h.next.prev = h.prev), Qe(e, u, h), Qe(e, h, S), Gt(h, S, r), u = h, c = [], d = [], l = Wt(u.next);
        continue;
      }
    if (h !== l) {
      if (o !== void 0 && o.has(h)) {
        if (c.length < d.length) {
          var w = d[0], b;
          u = w.prev;
          var L = c[0], m = c[c.length - 1];
          for (b = 0; b < c.length; b += 1)
            Gt(c[b], w, r);
          for (b = 0; b < d.length; b += 1)
            o.delete(d[b]);
          Qe(e, L.prev, m.next), Qe(e, u, L), Qe(e, m, w), l = w, u = m, g -= 1, c = [], d = [];
        } else
          o.delete(h), Gt(h, l, r), Qe(e, h.prev, h.next), Qe(e, h, u === null ? e.effect.first : u.next), Qe(e, u, h), u = h;
        continue;
      }
      for (c = [], d = []; l !== null && l !== h; )
        (o ??= /* @__PURE__ */ new Set()).add(l), d.push(l), l = Wt(l.next);
      if (l === null)
        continue;
    }
    (h.f & Ve) === 0 && c.push(h), u = h, l = Wt(h.next);
  }
  if (e.outrogroups !== null) {
    for (const $ of e.outrogroups)
      $.pending.size === 0 && (vn(e, Cr($.done)), e.outrogroups?.delete($));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || o !== void 0) {
    var O = [];
    if (o !== void 0)
      for (h of o)
        (h.f & ae) === 0 && O.push(h);
    for (; l !== null; )
      (l.f & ae) === 0 && l !== e.fallback && O.push(l), l = Wt(l.next);
    var R = O.length;
    if (R > 0) {
      var E = null;
      Oa(e, O, E);
    }
  }
}
function Ra(e, t, r, n, i, s, a, l) {
  var o = (a & sl) !== 0 ? (a & al) === 0 ? /* @__PURE__ */ Ui(r, !1, !1) : pt(r) : null, u = (a & ll) !== 0 ? pt(i) : null;
  return {
    v: o,
    i: u,
    e: oe(() => (s(t, o ?? r, u ?? i, l), () => {
      e.delete(n);
    }))
  };
}
function Gt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & Ve) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ie(n)
      );
      if (s.before(n), n === i)
        return;
      n = a;
    }
}
function Qe(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ia(e, t, r, n, i, s) {
  let a = k;
  k && At();
  var l = null;
  k && M.nodeType === kl && (l = /** @type {Element} */
  M, At());
  var o = (
    /** @type {TemplateNode} */
    k ? M : e
  ), u = new Dn(o, !1);
  ur(() => {
    const c = t() || null;
    var d = dl;
    if (c === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(c, (v) => {
      if (c) {
        var p = k;
        if (l = k ? (
          /** @type {Element} */
          l
        ) : Rr(c, d), it(l, l), n) {
          var h = null;
          k && ka(c) && l.append(h = document.createComment(""));
          var g = k ? /* @__PURE__ */ Ye(l) : l.appendChild(ge());
          k && (g === null ? he(!1) : re(g)), n(l, g), h?.remove();
        }
        N.nodes.end = l, p || v.before(l);
      }
      k && re(v);
    }), () => {
    };
  }, nt), or(() => {
  }), a && (he(!0), re(o));
}
function za(e, t) {
  Ir(() => {
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
      const i = Rr("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
function Da(e, t) {
  var r = void 0, n;
  ts(() => {
    r !== (r = t()) && (n && (X(n), n = null), r && (n = oe(() => {
      Ir(() => (
        /** @type {(node: Element) => void} */
        r(e)
      ));
    })));
  });
}
function xs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = xs(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Fa() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = xs(e)) && (n && (n += " "), n += t);
  return n;
}
function ja(e) {
  return typeof e == "object" ? Fa(e) : e ?? "";
}
const fi = [...` 	
\r\f \v\uFEFF`];
function Va(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, a = 0; (a = n.indexOf(i, a)) >= 0; ) {
          var l = a + s;
          (a === 0 || fi.includes(n[a - 1])) && (l === n.length || fi.includes(n[l])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(l + 1) : a = l;
        }
  }
  return n === "" ? null : n;
}
function ci(e, t = !1) {
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
function Ba(e, t) {
  if (t) {
    var r = "", n, i;
    if (Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\/\*.*?\*\//g, "").trim();
      var s = !1, a = 0, l = !1, o = [];
      n && o.push(...Object.keys(n).map(Xr)), i && o.push(...Object.keys(i).map(Xr));
      var u = 0, c = -1;
      const g = e.length;
      for (var d = 0; d < g; d++) {
        var v = e[d];
        if (l ? v === "/" && e[d - 1] === "*" && (l = !1) : s ? s === v && (s = !1) : v === "/" && e[d + 1] === "*" ? l = !0 : v === '"' || v === "'" ? s = v : v === "(" ? a++ : v === ")" && a--, !l && s === !1 && a === 0) {
          if (v === ":" && c === -1)
            c = d;
          else if (v === ";" || d === g - 1) {
            if (c !== -1) {
              var p = Xr(e.substring(u, c).trim());
              if (!o.includes(p)) {
                v !== ";" && d++;
                var h = e.substring(u, d).trim();
                r += " " + h + ";";
              }
            }
            u = d + 1, c = -1;
          }
        }
      }
    }
    return n && (r += ci(n)), i && (r += ci(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return e == null ? null : String(e);
}
function yr(e, t, r, n, i, s) {
  var a = (
    /** @type {any} */
    e[sn]
  );
  if (k || a !== r || a === void 0) {
    var l = Va(r, n, s);
    (!k || l !== e.getAttribute("class")) && (l == null ? e.removeAttribute("class") : t ? e.className = l : e.setAttribute("class", l)), e[sn] = r;
  } else if (s && i !== s)
    for (var o in s) {
      var u = !!s[o];
      (i == null || u !== !!i[o]) && e.classList.toggle(o, u);
    }
  return s;
}
function Jr(e, t = {}, r, n) {
  for (var i in r) {
    var s = r[i];
    t[i] !== s && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, n));
  }
}
function pn(e, t, r, n) {
  var i = (
    /** @type {any} */
    e[ln]
  );
  if (k || i !== t) {
    var s = Ba(t, n);
    (!k || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e[ln] = t;
  } else n && (Array.isArray(n) ? (Jr(e, r?.[0], n[0]), Jr(e, r?.[1], n[1], "important")) : Jr(e, r, n));
  return n;
}
function $s(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function hi(e, t) {
  var r = !("__defaultValue" in e);
  !r && e.__defaultValue === t || (e.__defaultValue = t, ks(e, !r || "__value" in e));
}
function ks(e, t) {
  var r = e.__defaultValue, n = e.multiple, i = n ? r ?? [] : null;
  if (!(n && !Nr(i))) {
    var s = e.selectedIndex, a = t && n ? new Set(e.selectedOptions) : null;
    for (var l of e.options) {
      var o = gn(l);
      $s(
        l,
        n ? (
          /** @type {any[]} */
          i.includes(o)
        ) : Yi(o, r)
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
function _n(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Nr(t))
      return Sl();
    for (var n of e.options)
      n.selected = t.includes(gn(n));
    return;
  }
  for (n of e.options) {
    var i = gn(n);
    if (Yi(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Wa(e) {
  var t = new MutationObserver((r) => {
    r.every(Ha) || ("__defaultValue" in e && ks(e, !1), "__value" in e && _n(e, e.__value));
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
  }), or(() => {
    t.disconnect();
  });
}
function gn(e) {
  return "__value" in e ? e.__value : e.value;
}
function Ha(e) {
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
const Ht = /* @__PURE__ */ Symbol("class"), Ut = /* @__PURE__ */ Symbol("style"), Es = /* @__PURE__ */ Symbol("is custom element"), Ss = /* @__PURE__ */ Symbol("is html"), Ua = lr ? "link" : "LINK", di = lr ? "input" : "INPUT", qa = lr ? "option" : "OPTION", As = lr ? "select" : "SELECT", Ts = lr ? "progress" : "PROGRESS";
function Kt(e) {
  if (k) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          Z(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          Z(e, "checked", null), e.checked = i;
        }
      }
    };
    e[Xt] = r, Pe(r), Oi();
  }
}
function vi(e, t) {
  var r = Fn(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Ts) || (e.value = t ?? "");
}
function Z(e, t, r, n) {
  var i = Fn(e);
  k && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Ua) || i[t] !== (i[t] = r) && (t === "loading" && (e[$l] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ms(e).has(t) ? e[t] = r : e.setAttribute(t, r));
}
function Ya(e, t, r, n, i = !1, s = !1) {
  k && i && e.nodeName === di && ("defaultValue" in r || "defaultChecked" in r || Kt(
    /** @type {HTMLInputElement} */
    e
  ));
  var a = Fn(e), l = a[Es], o = !a[Ss];
  let u = k && l;
  u && he(!1);
  var c = t || {}, d = e.nodeName === qa, v = e.nodeName === As;
  try {
    for (var p in t)
      !(p in r) && p[0] + p[1] !== "$$" && (r[p] = null);
    r.class ? r.class = ja(r.class) : (n || r[Ht]) && (r.class = null), r[Ut] && (r.style ??= null);
    var h = Ms(e);
    if (e.nodeName === di && "type" in r && ("value" in r || "__value" in r)) {
      var g = r.type;
      (g !== c.type || g === void 0 && e.hasAttribute("type")) && (c.type = g, Z(e, "type", g, s));
    }
    for (const E in r) {
      let $ = r[E];
      if (d && E === "value" && $ == null) {
        e.value = e.__value = "", c[E] = $;
        continue;
      }
      if (E === "class") {
        var S = e.namespaceURI === "http://www.w3.org/1999/xhtml";
        yr(e, S, $, n, t?.[Ht], r[Ht]), c[E] = $, c[Ht] = r[Ht];
        continue;
      }
      if (E === "style") {
        pn(e, $, t?.[Ut], r[Ut]), c[E] = $, c[Ut] = r[Ut];
        continue;
      }
      var w = c[E];
      if (!($ === w && !($ === void 0 && e.hasAttribute(E)))) {
        c[E] = $;
        var b = E[0] + E[1];
        if (b !== "$$")
          if (b === "on") {
            const y = {}, z = "$$" + E;
            let D = E.slice(2);
            var L = ba(D);
            if (_a(D) && (D = D.slice(0, -7), y.capture = !0), !L && w) {
              if ($ != null) continue;
              e.removeEventListener(D, c[z], y), c[z] = null;
            }
            if (L)
              we(D, e, $), ps([D]);
            else if ($ != null) {
              let J = function(ze) {
                c[E].call(this, ze);
              };
              var R = J;
              c[z] = vs(D, e, J, y);
            }
          } else if (E === "style")
            Z(e, E, $);
          else if (E === "autofocus")
            Yl(
              /** @type {HTMLElement} */
              e,
              !!$
            );
          else if (!l && (E === "__value" || E === "value" && $ != null))
            e.__value = $, (w == null || // @ts-ignore
            e.value !== $ || $ === 0 && e.nodeName === Ts) && (e.value = $);
          else if (E === "selected" && d)
            $s(
              /** @type {HTMLOptionElement} */
              e,
              $
            );
          else {
            var m = E;
            o || (m = wa(m));
            var O = m === "defaultValue" || m === "defaultChecked";
            if (v && m === "defaultValue") continue;
            if ($ == null && !l && !O)
              if (a[E] = null, m === "value" || m === "checked") {
                let y = (
                  /** @type {HTMLInputElement} */
                  e
                );
                const z = t === void 0;
                if (m === "value") {
                  let D = y.defaultValue;
                  y.removeAttribute(m), y.defaultValue = D, y.value = y.__value = z ? D : null;
                } else {
                  let D = y.defaultChecked;
                  y.removeAttribute(m), y.defaultChecked = D, y.checked = z ? D : !1;
                }
              } else
                e.removeAttribute(E);
            else O || (l || typeof $ != "string") && h.has(m) ? (e[m] = $, m in a && (a[m] = W)) : typeof $ != "function" && Z(e, m, $, s);
          }
      }
    }
  } finally {
    u && he(!0);
  }
  return c;
}
function pi(e, t, r = [], n = [], i = [], s, a = !1, l = !1) {
  Ii(i, r, n, (o) => {
    var u = void 0, c = {}, d = e.nodeName === As, v = !1;
    if (ts(() => {
      var h = t(...o.map(f)), g = Ya(
        e,
        u,
        h,
        s,
        a,
        l
      );
      if (v && d) {
        var S = (
          /** @type {HTMLSelectElement} */
          e
        );
        "defaultValue" in h && hi(S, h.defaultValue), "value" in h && _n(S, h.value);
      }
      for (let b of Object.getOwnPropertySymbols(c))
        h[b] || X(c[b]);
      for (let b of Object.getOwnPropertySymbols(h)) {
        var w = h[b];
        b.description === vl && (!u || w !== u[b]) && (c[b] && X(c[b]), c[b] = oe(() => Da(e, () => w))), g[b] = w;
      }
      u = g;
    }), d) {
      var p = (
        /** @type {HTMLSelectElement} */
        e
      );
      Ir(() => {
        var h = (
          /** @type {Record<string | symbol, any>} */
          u
        );
        "defaultValue" in h && hi(p, h.defaultValue), _n(p, h.value, !0), Wa(p);
      });
    }
    v = !0;
  });
}
function Fn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Ei] ??= {
      [Es]: e.nodeName.includes("-"),
      [Ss]: e.namespaceURI === mi
    }
  );
}
var _i = /* @__PURE__ */ new Map();
function Ms(e) {
  var t = e.getAttribute("is") || e.nodeName, r = _i.get(t);
  if (r) return r;
  _i.set(t, r = /* @__PURE__ */ new Set());
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = _l(i);
    for (var a in n)
      n[a].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      a !== "innerHTML" && a !== "textContent" && a !== "innerText" && r.add(a);
    i = yi(i);
  }
  return r;
}
function Ga(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Ri(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = Zr(e) ? Qr(s) : s, r(s), A !== null && n.add(A), await ca(), s !== (s = t())) {
      var a = e.selectionStart, l = e.selectionEnd, o = e.value.length;
      if (e.value = s ?? "", l !== null) {
        var u = e.value.length;
        a === l && l === o && u > o ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = a, e.selectionEnd = Math.min(l, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (k && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  He(t) == null && e.value) && (r(Zr(e) ? Qr(e.value) : e.value), A !== null && n.add(A)), bt(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        A
      );
      if (n.has(s))
        return;
    }
    Zr(e) && i === Qr(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Ka(e, t, r = t) {
  Ri(e, "change", (n) => {
    var i = n ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (k && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  He(t) == null) && r(e.checked), bt(() => {
    var n = t();
    e.checked = !!n;
  });
}
function Zr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Qr(e) {
  return e === "" ? null : +e;
}
function Xa(e, t, r = t) {
  var n = () => {
    r(e.volume);
  };
  t() == null && n(), Li(e, ["volumechange"], n, !1), bt(() => {
    var i = Number(t());
    i !== e.volume && !isNaN(i) && (e.volume = i);
  });
}
function Ja(e, t, r = t) {
  var n = () => {
    r(e.muted);
  };
  t() == null && n(), Li(e, ["volumechange"], n, !1), bt(() => {
    var i = !!t();
    e.muted !== i && (e.muted = i);
  });
}
function en(e, t) {
  return e === t || e?.[tt] === t;
}
function tn(e = Mn(), t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    ee.r
  ), s = (
    /** @type {Effect} */
    N
  );
  return Ir(() => {
    var a, l;
    return bt(() => {
      a = l, l = [], He(() => {
        en(r(...l), e) || (t(e, ...l), a && en(r(...a), e) && t(null, ...a));
      });
    }), () => {
      let o = s;
      for (; o !== i && o.parent !== null && o.parent.f & rr; )
        o = o.parent;
      const u = () => {
        l && en(r(...l), e) && t(null, ...l);
      }, c = o.teardown;
      o.teardown = () => {
        u(), c?.();
      };
    };
  }), e;
}
let br = !1;
function Za(e) {
  var t = br;
  try {
    return br = !1, [e(), br];
  } finally {
    br = t;
  }
}
const Qa = {
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
function mt(e, t, r) {
  return new Proxy({ props: e, exclude: t }, Qa);
}
const eo = {
  get(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (Ft(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, r) {
    let n = e.props.length;
    for (; n--; ) {
      let i = e.props[n];
      Ft(i) && (i = i());
      const s = We(i, t);
      if (s && s.set)
        return s.set(r), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (Ft(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const i = We(n, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === tt || t === En) return !1;
    for (let r of e.props)
      if (Ft(r) && (r = r()), r != null && t in r) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let r of e.props)
      if (Ft(r) && (r = r()), !!r) {
        for (const n in r)
          t.includes(n) || t.push(n);
        for (const n of Object.getOwnPropertySymbols(r))
          t.includes(n) || t.push(n);
      }
    return t;
  }
};
function Ot(...e) {
  return new Proxy({ props: e }, eo);
}
function te(e, t, r, n) {
  var i = !0, s = (r & fl) !== 0, a = (r & cl) !== 0, l = (
    /** @type {V} */
    n
  ), o = !0, u = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), c = () => a && i ? (u ??= /* @__PURE__ */ nr(
    /** @type {() => V} */
    n
  ), f(u)) : (o && (o = !1, l = a ? He(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), l);
  let d;
  if (s) {
    var v = tt in e || En in e;
    d = We(e, t)?.set ?? (v && t in e ? (m) => e[t] = m : void 0);
  }
  var p, h = !1;
  s ? [p, h] = Za(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && n !== void 0 && (p = c(), d && (Il(), d(p)));
  var g;
  if (g = () => {
    var m = (
      /** @type {V} */
      e[t]
    );
    return m === void 0 ? c() : (o = !0, m);
  }, (r & ul) === 0)
    return g;
  if (d) {
    var S = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(m, O) {
        return arguments.length > 0 ? ((!O || S || h) && d(O ? g() : m), m) : g();
      })
    );
  }
  var w = !1, b = ((r & ol) !== 0 ? nr : Di)(() => (w = !1, g()));
  s && f(b);
  var L = (
    /** @type {Effect} */
    N
  );
  return (
    /** @type {() => V} */
    (function(m, O) {
      if (arguments.length > 0) {
        const R = O ? f(b) : s ? Be(m) : m;
        return x(b, R), w = !0, l !== void 0 && (l = R), m;
      }
      return Ge && w || (L.f & Q) !== 0 ? b.v : f(b);
    })
  );
}
function to(e) {
  return new ro(e);
}
class ro {
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
      var l = /* @__PURE__ */ Ui(a, !1, !1);
      return r.set(s, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, a) {
          return f(r.get(a) ?? n(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === En ? !0 : (f(r.get(a) ?? n(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, l) {
          return x(r.get(a) ?? n(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    this.#t = (t.hydrate ? Ma : bs)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    }), (!t?.props?.$$host || t.sync === !1) && K(), this.#e = i.$$events;
    for (const s of Object.keys(this.#t))
      s === "$set" || s === "$destroy" || s === "$on" || tr(this, s, {
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
      Na(this.#t);
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
let Ns;
typeof HTMLElement == "function" && (Ns = class extends HTMLElement {
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
          const a = Rr("slot");
          i !== "default" && (a.name = i), Ne(s, a);
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = no(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = xr(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = to({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ia(() => {
        bt(() => {
          this.$$r = !0;
          for (const i of $r(this.$$c)) {
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
    return $r(this.$$p_d).find(
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
function no(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function st(e, t, r, n, i, s) {
  let a = class extends Ns {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return $r(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return $r(t).forEach((l) => {
    tr(a.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(o) {
        o = xr(l, o, t), this.$$d[l] = o;
        var u = this.$$c;
        if (u) {
          var c = We(u, l)?.get;
          c ? u[l] = o : u.$set({ [l]: o });
        }
      }
    });
  }), n.forEach((l) => {
    tr(a.prototype, l, {
      get() {
        return this.$$c?.[l];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const ut = {
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
const bn = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
function rn(e) {
  return e != null;
}
function io(e, t = {}) {
  const r = t.attributeNames ?? {}, n = (v) => r[v] ?? v, i = e.size ?? e.width ?? ut.width, s = e.size ?? e.height ?? ut.height, a = e.aliases?.filter((v) => typeof v == "string" && v.trim() !== "").map((v) => `lucide-${v}`) ?? [], l = [...e.name ? [`lucide-${e.name}`] : [], ...a], o = t.className?.split(" ").filter(Boolean) ?? [], u = t.includeDefaultClasses === !1 ? bn(...o) : bn("lucide", ...l, ...o), c = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? ut["stroke-width"]) * Number(e.size ?? e.width ?? ut.width) / Number(t.size ?? t.width ?? ut.width) : t.strokeWidth ?? ut["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(ut).reduce((v, [p, h]) => (v[n(p)] = h, v), {}),
      ..."color" in t && t.color && {
        [n("stroke")]: t.color
      },
      ..."size" in t && rn(t.size) && {
        [n("width")]: t.size,
        [n("height")]: t.size
      },
      ..."width" in t && rn(t.width) && {
        [n("width")]: t.width
      },
      ..."height" in t && rn(t.height) && {
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
      const [p, h, g] = v, S = t.nonScalingStroke ? { [n("vector-effect")]: "non-scaling-stroke", ...h } : h;
      return g ? [p, S, g] : [p, S];
    })
  ];
}
const so = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const lo = /* @__PURE__ */ Symbol("lucide-context"), ao = () => Hl(lo);
var oo = /* @__PURE__ */ new Set([
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
]), uo = /* @__PURE__ */ pa("<svg><!><!></svg>");
function wt(e, t) {
  An(t, !0);
  const r = ao() ?? {}, n = te(t, "color", 23, () => r.color ?? "currentColor"), i = te(t, "size", 23, () => r.size ?? 24), s = te(t, "width", 23, i), a = te(t, "height", 23, i), l = te(t, "strokeWidth", 23, () => r.strokeWidth ?? 2), o = te(t, "absoluteStrokeWidth", 23, () => r.absoluteStrokeWidth ?? !1), u = te(t, "nonScalingStroke", 23, () => r.nonScalingStroke ?? !1), c = te(t, "iconNode", 23, () => []), d = te(t, "icon", 23, () => ({ node: c(), aliases: [], size: 24 })), v = te(t, "class", 7), p = te(t, "children", 7), h = /* @__PURE__ */ mt(t, oo), g = /* @__PURE__ */ pe(() => !!p() || so(h)), S = /* @__PURE__ */ pe(() => io(d(), {
    color: n(),
    width: s(),
    height: a(),
    strokeWidth: l(),
    absoluteStrokeWidth: o(),
    nonScalingStroke: u(),
    // @TODO: maybe drop the extra `lucide-icon` class altogether.
    className: bn("lucide-icon", r.class),
    hasA11yProp: f(g),
    attributes: h
  })), w = /* @__PURE__ */ pe(() => ei(f(S), 3)), b = /* @__PURE__ */ pe(() => f(w)[1]), L = /* @__PURE__ */ pe(() => wl(f(w)[2], () => [], !0)), m = /* @__PURE__ */ pe(() => ({
    ...f(b),
    class: [...f(b).class.split(" "), v()]
  }));
  var O = {
    get color() {
      return n();
    },
    set color(y = r.color ?? "currentColor") {
      n(y), K();
    },
    get size() {
      return i();
    },
    set size(y = r.size ?? 24) {
      i(y), K();
    },
    get width() {
      return s();
    },
    set width(y = i) {
      s(y), K();
    },
    get height() {
      return a();
    },
    set height(y = i) {
      a(y), K();
    },
    get strokeWidth() {
      return l();
    },
    set strokeWidth(y = r.strokeWidth ?? 2) {
      l(y), K();
    },
    get absoluteStrokeWidth() {
      return o();
    },
    set absoluteStrokeWidth(y = r.absoluteStrokeWidth ?? !1) {
      o(y), K();
    },
    get nonScalingStroke() {
      return u();
    },
    set nonScalingStroke(y = r.nonScalingStroke ?? !1) {
      u(y), K();
    },
    get iconNode() {
      return c();
    },
    set iconNode(y = []) {
      c(y), K();
    },
    get icon() {
      return d();
    },
    set icon(y = { node: c, aliases: [], size: 24 }) {
      d(y), K();
    },
    get class() {
      return v();
    },
    set class(y) {
      v(y), K();
    },
    get children() {
      return p();
    },
    set children(y) {
      p(y), K();
    }
  }, R = uo();
  pi(R, () => ({ ...f(m) }));
  var E = le(R);
  ys(E, 17, () => f(L), ws, (y, z) => {
    var D = /* @__PURE__ */ pe(() => ei(f(z), 2));
    let J = () => f(D)[0], ze = () => f(D)[1];
    var Lt = gs(), Ke = Ji(Lt);
    Ia(Ke, J, !0, (zr, jn) => {
      pi(zr, () => ({ ...ze() }));
    }), Ne(y, Lt);
  });
  var $ = U(E);
  return Ca($, () => p() ?? xi), se(R), Ne(e, R), Tn(O);
}
st(
  wt,
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
const Cs = {
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
Cs.node;
var fo = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function Ps(e, t) {
  let r = /* @__PURE__ */ mt(t, fo);
  wt(e, Ot(() => r, {
    get icon() {
      return Cs;
    }
  }));
}
st(Ps, {}, [], [], { mode: "open" });
const Os = {
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
Os.node;
var co = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function Ls(e, t) {
  let r = /* @__PURE__ */ mt(t, co);
  wt(e, Ot(() => r, {
    get icon() {
      return Os;
    }
  }));
}
st(Ls, {}, [], [], { mode: "open" });
const Rs = {
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
Rs.node;
var ho = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function Is(e, t) {
  let r = /* @__PURE__ */ mt(t, ho);
  wt(e, Ot(() => r, {
    get icon() {
      return Rs;
    }
  }));
}
st(Is, {}, [], [], { mode: "open" });
const zs = {
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
zs.node;
var vo = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function Ds(e, t) {
  let r = /* @__PURE__ */ mt(t, vo);
  wt(e, Ot(() => r, {
    get icon() {
      return zs;
    }
  }));
}
st(Ds, {}, [], [], { mode: "open" });
const Fs = {
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
Fs.node;
var po = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function mn(e, t) {
  let r = /* @__PURE__ */ mt(t, po);
  wt(e, Ot(() => r, {
    get icon() {
      return Fs;
    }
  }));
}
st(mn, {}, [], [], { mode: "open" });
const js = {
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
js.node;
var _o = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "$$host"]);
function wn(e, t) {
  let r = /* @__PURE__ */ mt(t, _o);
  wt(e, Ot(() => r, {
    get icon() {
      return js;
    }
  }));
}
st(wn, {}, [], [], { mode: "open" });
const Vs = (e) => [e.base, ...e.layers.slice(0, 3), null, null, null].slice(0, 4);
class go {
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
    const n = Vs(this.mix).filter(Boolean), i = new Set(n.map((s) => s.id));
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
function bo(e, t) {
  if (!e || e.version !== 1 || !(e.interval > 0) || !e.frames.length) return [];
  const r = Math.max(0, t) / e.interval, n = Math.min(Math.floor(r), e.frames.length - 1), i = e.frames[n], s = e.frames[Math.min(n + 1, e.frames.length - 1)], a = Math.min(1, r - n);
  return i.map((l, o) => Math.max(0, Math.min(1, (l + ((s[o] ?? l) - l) * a) / 255)));
}
function mo(e, t, r) {
  return Math.max(0, Math.min(t - 1, e + r));
}
function gi(e, t = 36) {
  if (!e.length) return new Array(t).fill(0.025);
  const r = e.map((i) => Math.max(0, Math.min(1, i))), n = new Array(t);
  if (r.length === t)
    for (let i = 0; i < t; i++) n[i] = r[i];
  else {
    const i = r.length - 1;
    for (let s = 0; s < t; s++) {
      const a = t > 1 ? s / (t - 1) * i : 0, l = Math.max(0, Math.floor(a)), o = Math.min(i, l + 1), u = 0.5 - 0.5 * Math.cos(Math.PI * (a - l));
      n[s] = r[l] + (r[o] - r[l]) * u;
    }
  }
  return n.map((i, s) => {
    const a = s > 0 ? n[s - 1] : 0, l = s < t - 1 ? n[s + 1] : 0, o = Math.max(a, l) * 0.34 + (a + l) * 0.12, u = Math.max(i, o > 0.04 ? o : 0);
    return Math.max(0, Math.min(1, u));
  });
}
function wo(e, t, r, n, i, s = !1) {
  const a = s || !(i > 0) || i > 0.25, l = a ? 1 : 1 - Math.exp(-i / 0.026), o = a ? 1 : 1 - Math.exp(-i / 0.14);
  for (let u = 0; u < n.length; u++) {
    const c = Math.max(0, Math.min(1, n[u] ?? 0)), d = e[u] ?? c, v = a ? c : d + (c - d) * (c >= d ? l : o);
    e[u] = Math.abs(v - c) < 1e-4 ? c : v, a || e[u] >= (t[u] ?? 0) ? (t[u] = e[u], r[u] = 0.18) : (r[u] ?? 0) > 0 ? r[u] = Math.max(0, r[u] - i) : t[u] = Math.max(e[u], (t[u] ?? 0) - i * 0.65);
  }
}
function yo(e, t, r) {
  if (!e.length) return 0;
  const n = e.map((L) => Math.max(0, Math.min(1, L))), i = n.length;
  let s = 0, a = 0, l = 0;
  for (let L = 0; L < i; L++) {
    const m = n[L];
    s += m, m > a && (a = m);
    const O = i > 1 ? L / (i - 1) : 0.5;
    l += O * m;
  }
  if (s === 0 || t <= 0 || t >= 1) return 0;
  const o = Math.pow(Math.sin(Math.PI * t), 0.8), u = l / s, c = (r - 13.5) / 13.5, d = i <= 8 ? 0.26 : 0.16;
  let v = 0, p = 0;
  for (let L = 0; L < i; L++) {
    const m = n[L];
    if (m <= 0) continue;
    const O = i > 1 ? L / (i - 1) : 0.5, R = 0.1 + 0.8 * O, E = (t - R) / d, $ = Math.exp(-0.5 * E * E);
    if ($ < 1e-3) continue;
    const y = Math.pow(m, 0.72);
    p += $ * (0.35 + 0.65 * y);
    const z = 2 + O * 6.5, D = c * (1.05 + 0.6 * y) * Math.sin(Math.PI * (t * (2.2 + u * 2.4) + O * 1.9)), J = Math.sin(t * Math.PI * z + O * 4.1 + D), ze = 0.38 * Math.cos(t * Math.PI * (z * 1.45 + 1) - O * 3.1 - c * 1.1);
    v += $ * y * (J + ze);
  }
  const h = 1 / Math.max(1.15, p * 0.72), g = 0.45 + 0.55 * Math.pow(a, 0.65), S = v * h * g, w = Math.min(1, p * 0.45) * g, b = c * w * Math.sin(t * Math.PI * (2.5 + u * 3.5) + u * Math.PI * 1.5) * 28;
  return o * (S * 74 + b);
}
var xo = /* @__PURE__ */ Pt('<button aria-label="Previous track" class="svelte-bhx1m2"><!></button>'), $o = /* @__PURE__ */ Pt('<button aria-label="Next track" class="svelte-bhx1m2"><!></button>'), ko = /* @__PURE__ */ Pt('<div class="channel svelte-bhx1m2"><span class="svelte-bhx1m2"> </span><button class="svelte-bhx1m2"><!></button><input type="range" min="0" max="1" step="0.01" class="svelte-bhx1m2"/></div>'), Eo = /* @__PURE__ */ Pt('<div class="mixer svelte-bhx1m2"><label class="repeat svelte-bhx1m2"><input type="checkbox" class="svelte-bhx1m2"/>Loop mix</label><!></div>'), So = /* @__PURE__ */ Pt('<div class="volume svelte-bhx1m2"><button class="svelte-bhx1m2"><!></button><input type="range" min="0" max="1" step="0.01" aria-label="Volume" class="svelte-bhx1m2"/></div>'), Ao = /* @__PURE__ */ Pt('<div><div class="eyebrow svelte-bhx1m2">NOW PLAYING</div> <h2 class="svelte-bhx1m2"> </h2> <canvas width="640" height="220" aria-hidden="true" class="svelte-bhx1m2"></canvas> <div class="switch svelte-bhx1m2" aria-label="Visualization style"><button>Bars</button><button>Wave</button></div> <input class="seek svelte-bhx1m2" type="range" min="0" step="0.01" aria-label="Seek"/> <div class="times svelte-bhx1m2"><span> </span><span> </span></div> <div class="transport svelte-bhx1m2"><!> <button class="play svelte-bhx1m2"><!></button> <!></div> <!><div class="media-root svelte-bhx1m2"></div> <div class="status svelte-bhx1m2" role="status"> </div> <audio preload="metadata" class="svelte-bhx1m2"></audio></div>');
const To = {
  hash: "svelte-bhx1m2",
  code: ".media-root.svelte-bhx1m2{display:none}.mix-player.svelte-bhx1m2{height:auto!important;min-height:480px}.mixer.svelte-bhx1m2{margin-bottom:12px}.repeat.svelte-bhx1m2{display:flex;align-items:center;justify-content:center;gap:8px;font-size:12px;margin:0 0 14px}.channel.svelte-bhx1m2{display:flex;align-items:center;gap:8px;margin:12px 0}.channel.svelte-bhx1m2 span:where(.svelte-bhx1m2){width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px}.channel.svelte-bhx1m2 input:where(.svelte-bhx1m2){flex:1;min-width:0}:host{display:block;width:360px;max-width:100%;font-family:Arial,Helvetica,sans-serif}.player.svelte-bhx1m2{--ink:#f6f8fa;--muted:#8e9da9;--accent:#00c5df;--line:#3b454e;box-sizing:border-box;height:480px;background:radial-gradient(ellipse at 50% 42%,#273238 0%,#20282c 65%,#1e2529 100%);color:var(--ink);border:1px solid #ffffff15;border-radius:12px;padding:23px 24px 18px;box-shadow:0 12px 24px #0003;position:relative}.light.svelte-bhx1m2{--ink:#27323b;--muted:#8793a0;--accent:#00bcd6;--line:#d4dbe2;background:linear-gradient(130deg,#fff,#fafcfd);border-color:#e3e7eb}.eyebrow.svelte-bhx1m2{text-align:center;font-size:10px;letter-spacing:1px;color:var(--muted)}h2.svelte-bhx1m2{text-align:center;font-size:20px;font-weight:700;margin:7px 0 0;line-height:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}canvas.svelte-bhx1m2{display:block;width:calc(100% + 24px);height:155px;margin:13px -12px 12px}.switch.svelte-bhx1m2{display:flex;box-sizing:border-box;width:188px;height:32px;margin:0 auto 27px;padding:2px;border:1px solid var(--line);border-radius:18px;background:#ffffff04}.light.svelte-bhx1m2 .switch:where(.svelte-bhx1m2){background:#f0f3f7}.switch.svelte-bhx1m2 button:where(.svelte-bhx1m2){width:50%;font-size:12px;padding:3px;border-radius:15px}.chosen.svelte-bhx1m2{background:linear-gradient(130deg,#00cbe5,#00a6c1);color:#fff!important;box-shadow:0 0 0 1px #42e3f1}.light.svelte-bhx1m2 .chosen:where(.svelte-bhx1m2){box-shadow:none}button.svelte-bhx1m2{border:0;background:transparent;color:var(--ink);cursor:pointer;font:inherit;display:inline-flex;justify-content:center;align-items:center}button.svelte-bhx1m2:disabled{opacity:.3;cursor:default}button.svelte-bhx1m2:focus-visible,input.svelte-bhx1m2:focus-visible{outline:2px solid var(--accent);outline-offset:4px}input[type=range].svelte-bhx1m2{appearance:none;-webkit-appearance:none;display:block;height:4px;border-radius:4px;background:linear-gradient(to right,var(--accent) 0%,var(--accent) var(--progress,0%),var(--line) var(--progress,0%),var(--line) 100%);cursor:pointer}input[type=range].svelte-bhx1m2::-webkit-slider-thumb{appearance:none;width:14px;height:14px;border-radius:50%;background:#fff;border:1px solid #d5eef2;box-shadow:0 2px 4px #0002}input[type=range].svelte-bhx1m2::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:1px solid #d5eef2}.seek.svelte-bhx1m2{width:100%;margin:0}.times.svelte-bhx1m2{display:flex;justify-content:space-between;font-size:12px;color:var(--ink);margin-top:9px;line-height:14px}.transport.svelte-bhx1m2{display:flex;justify-content:center;align-items:center;gap:42px;margin:16px 0 21px;height:64px}.transport.svelte-bhx1m2>button:where(.svelte-bhx1m2):not(.play){padding:4px}.play.svelte-bhx1m2{width:64px;height:64px;border-radius:50%;background:linear-gradient(130deg,#00c9e4,#00a6c1);border:1px solid #66e5f3;color:white;box-shadow:0 0 20px #00c7e322}.volume.svelte-bhx1m2{display:flex;align-items:center;gap:15px;height:24px}.volume.svelte-bhx1m2 input:where(.svelte-bhx1m2){flex:1;min-width:0}.volume.svelte-bhx1m2 button:where(.svelte-bhx1m2){padding:0}.status.svelte-bhx1m2{position:absolute;bottom:3px;left:10px;right:10px;min-height:12px;text-align:center;font-size:10px;color:var(--muted)}audio.svelte-bhx1m2{display:none}"
};
function Mo(e, t) {
  An(t, !0), za(e, To);
  let r = te(t, "track", 15, null), n = te(t, "playlist", 31, () => Be([])), i = te(t, "theme", 15, "dark"), s = te(t, "playbackMode", 15, "single"), a = te(t, "mix", 31, () => Be({ base: null, layers: [] })), l = /* @__PURE__ */ F(void 0), o = /* @__PURE__ */ F(void 0), u = /* @__PURE__ */ F(0), c = /* @__PURE__ */ F(!1), d = /* @__PURE__ */ F(0), v = /* @__PURE__ */ F(0), p = /* @__PURE__ */ F(0.75), h = /* @__PURE__ */ F(!1), g = /* @__PURE__ */ F("bars"), S = /* @__PURE__ */ F(""), w = /* @__PURE__ */ F(!1), b, L, m = /* @__PURE__ */ F(Be({
    playing: !1,
    time: 0,
    duration: 0,
    error: "",
    loading: !1
  })), O = /* @__PURE__ */ F(!1), R = /* @__PURE__ */ pe(() => s() === "layers"), E = /* @__PURE__ */ pe(() => f(R) ? a().base?.track : f(J)), $ = /* @__PURE__ */ pe(() => f(R) ? f(m).time : f(d)), y = /* @__PURE__ */ pe(() => f(R) ? f(m).duration : f(v)), z = /* @__PURE__ */ pe(() => f(R) ? f(m).playing : f(c));
  function D(_, T, I) {
    const fe = (Y) => Y?.id === _ ? { ...Y, volume: T ?? Y.volume, muted: I ?? Y.muted } : Y;
    a({ base: fe(a().base), layers: a().layers.map(fe) }), Ke("mixchange", { mix: a() });
  }
  let J = /* @__PURE__ */ F(null), ze = /* @__PURE__ */ F(null), Lt = /* @__PURE__ */ F(null);
  function Ke(_, T) {
    f(l)?.parentElement?.dispatchEvent(new CustomEvent(_, { detail: T, bubbles: !0, composed: !0 }));
  }
  function zr(_) {
    x(S, ""), x(d, 0), x(v, 0), x(w, !0), f(l).src = _.url, f(l).load(), f(l).play().catch(() => {
      x(c, !1), x(w, !1);
    }), Ke("trackchange", { track: _, index: f(u) });
  }
  function jn() {
    if (f(R)) {
      b.playing ? b.pause() : b.play();
      return;
    }
    f(J) && (f(l).paused ? f(l).play().catch(() => x(S, "Press Play to start, or check the audio URL.")) : f(l).pause());
  }
  function Dr(_) {
    const T = mo(f(u), n().length, _);
    T !== f(u) && (x(u, T, !0), x(J, n()[f(u)], !0));
  }
  function Bs() {
    x(c, !1), f(u) < n().length - 1 ? Dr(1) : Ke("queueended", {});
  }
  function Fr(_) {
    return Number.isFinite(_) ? `${Math.floor(_ / 60)}:${String(Math.floor(_ % 60)).padStart(2, "0")}` : "0:00";
  }
  Pa(() => {
    b = new go(
      () => {
        const De = document.createElement("audio");
        return L.append(De), De;
      },
      (De) => {
        x(m, De, !0);
      }
    ), b.update(a());
    let _;
    const T = new Array(36).fill(0.025), I = new Array(36).fill(0.025), fe = new Array(36).fill(0), Y = new Array(36).fill(0);
    let Ae = performance.now(), H = -1, G = "";
    const dr = typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
    function vr(De = performance.now()) {
      const P = f(o).getContext("2d");
      if (P) {
        const Je = Math.min(window.devicePixelRatio || 1, 2), Te = 640, Rt = 220, Fe = Math.round(Te * Je), pr = Math.round(Rt * Je);
        (f(o).width !== Fe || f(o).height !== pr) && (f(o).width = Fe, f(o).height = pr), P.setTransform(Je, 0, 0, Je, 0, 0), P.clearRect(0, 0, Te, Rt);
        const It = f(R) ? f(m).time : f(l)?.currentTime ?? 0, zt = bo(f(E)?.visualization, It), lt = Math.max(0, Math.min(0.1, (De - Ae) / 1e3));
        Ae = De;
        const me = f(E)?.url ?? "", nl = me !== G || H < 0 || Math.abs(It - H) > 0.18, Xn = !!dr?.matches, Jn = nl || Xn || !f(z);
        if (G = me, H = It, P.strokeStyle = i() === "light" ? "#00bdd5" : "#10cfe4", P.fillStyle = P.strokeStyle, P.lineWidth = 1.15, f(g) === "bars") {
          const xt = gi(zt, 36);
          wo(T, I, fe, xt, lt, Jn);
          const at = 169, Me = Te / 36 - 6;
          for (let V = 0; V < 36; V++) {
            const Ze = T[V], _r = 5 + Ze * 140, Ur = V * Te / 36 + 3, Dt = P.createLinearGradient(0, at - _r, 0, at);
            if (Dt.addColorStop(0, i() === "light" ? "#12d6e8" : "#1ef0ff"), Dt.addColorStop(0.55, i() === "light" ? "#00bdd5" : "#10cfe4"), Dt.addColorStop(1, i() === "light" ? "#008fa3" : "#008da0"), P.fillStyle = Dt, P.beginPath(), P.roundRect(Ur, at - _r, Me, _r, 4), P.fill(), !Xn && I[V] > Ze + 0.025 && I[V] > 0.06) {
              const il = Math.max(8, at - (5 + I[V] * 140) - 4);
              P.fillStyle = i() === "light" ? "#00a8be" : "#7cf7ff", P.globalAlpha = 0.78, P.beginPath(), P.roundRect(Ur, il, Me, 2.5, 1.25), P.fill(), P.globalAlpha = 1;
            }
            P.fillStyle = Dt, P.globalAlpha = 0.14, P.beginPath(), P.roundRect(Ur, at + 5, Me, _r * 0.26, 4), P.fill(), P.globalAlpha = 1;
          }
        } else {
          const xt = zt.length ? gi(zt, 36) : [];
          if (!xt.length)
            Y.fill(0);
          else {
            const Me = Jn ? 1 : 1 - Math.exp(-lt / 0.045);
            for (let V = 0; V < 36; V++) {
              const Ze = Y[V] ?? xt[V];
              Y[V] = Ze + (xt[V] - Ze) * Me;
            }
          }
          const at = xt.length ? Y : [];
          for (let Me = 0; Me < 28; Me++) {
            P.globalAlpha = 0.16 + Me / 95, P.beginPath();
            for (let V = 0; V <= Te; V += 2) {
              const Ze = Rt / 2 + yo(at, V / Te, Me);
              V ? P.lineTo(V, Ze) : P.moveTo(V, Ze);
            }
            P.stroke();
          }
          P.globalAlpha = 1;
        }
      }
      _ = requestAnimationFrame(vr);
    }
    return vr(), () => {
      cancelAnimationFrame(_), b.destroy(), f(l).pause(), f(l).removeAttribute("src"), f(l).load();
    };
  }), wr(() => {
    const _ = r(), T = n();
    He(() => {
      if (_ === f(ze) && T === f(Lt)) return;
      const I = _ !== f(ze);
      x(ze, _, !0), x(Lt, T, !0);
      const fe = I && _ ? _ : f(J), Y = fe ? T.findIndex((Ae) => Ae.url === fe.url) : -1;
      x(u, Y >= 0 ? Y : 0, !0), x(
        J,
        I && _ ? _ : Y >= 0 ? fe : T[0] ?? _,
        !0
      );
    });
  }), wr(() => {
    if (f(l) && f(J) && !f(R)) {
      const _ = f(J);
      He(() => zr(_));
    }
  }), wr(() => {
    const _ = a(), T = f(R), I = f(O);
    He(() => {
      b && (b.repeat = I, T ? (f(l).pause(), b.update(_)) : b.pause());
    });
  });
  var Ws = {
    get track() {
      return r();
    },
    set track(_ = null) {
      r(_), K();
    },
    get playlist() {
      return n();
    },
    set playlist(_ = []) {
      n(_), K();
    },
    get theme() {
      return i();
    },
    set theme(_ = "dark") {
      i(_), K();
    },
    get playbackMode() {
      return s();
    },
    set playbackMode(_ = "single") {
      s(_), K();
    },
    get mix() {
      return a();
    },
    set mix(_ = { base: null, layers: [] }) {
      a(_), K();
    }
  }, cr = Ao();
  let Vn;
  var jr = U(le(cr), 2), Hs = jt(jr, !0), Bn = U(jr, 2);
  tn(Bn, (_) => x(o, _), () => f(o));
  var Vr = U(Bn, 2), hr = le(Vr);
  let Wn;
  var Br = U(hr);
  let Hn;
  se(Vr);
  var Xe = U(Vr, 2);
  Kt(Xe);
  var Wr = U(Xe, 2), Un = le(Wr), Us = jt(Un, !0), qs = U(Un), Ys = jt(qs, !0);
  se(Wr);
  var Hr = U(Wr, 2), qn = le(Hr);
  {
    var Gs = (_) => {
      var T = xo(), I = le(T);
      Is(I, { size: 25, fill: "currentColor" }), se(T), Vt(() => T.disabled = f(u) === 0), we("click", T, () => Dr(-1)), Ne(_, T);
    };
    ot(qn, (_) => {
      !f(R) && n().length > 1 && _(Gs);
    });
  }
  var yt = U(qn, 2), Ks = le(yt);
  {
    var Xs = (_) => {
      Ps(_, { size: 32, fill: "currentColor" });
    }, Js = (_) => {
      Ls(_, { size: 32, fill: "currentColor" });
    };
    ot(Ks, (_) => {
      f(z) ? _(Xs) : _(Js, -1);
    });
  }
  se(yt);
  var Zs = U(yt, 2);
  {
    var Qs = (_) => {
      var T = $o(), I = le(T);
      Ds(I, { size: 25, fill: "currentColor" }), se(T), Vt(() => T.disabled = f(u) >= n().length - 1), we("click", T, () => Dr(1)), Ne(_, T);
    };
    ot(Zs, (_) => {
      !f(R) && n().length > 1 && _(Qs);
    });
  }
  se(Hr);
  var Yn = U(Hr, 2);
  {
    var el = (_) => {
      var T = Eo(), I = le(T), fe = le(I);
      Kt(fe), Si(), se(I);
      var Y = U(I);
      ys(Y, 17, () => Vs(a()), ws, (Ae, H, G) => {
        var dr = gs(), vr = Ji(dr);
        {
          var De = (P) => {
            var Je = ko(), Te = le(Je), Rt = jt(Te), Fe = U(Te), pr = le(Fe);
            {
              var It = (me) => {
                wn(me, { size: 18 });
              }, zt = (me) => {
                mn(me, { size: 18 });
              };
              ot(pr, (me) => {
                f(H).muted ? me(It) : me(zt, -1);
              });
            }
            se(Fe);
            var lt = U(Fe);
            Kt(lt), Z(lt, "aria-label", `${G === 0 ? "Base" : `Layer ${G}`} volume`), se(Je), Vt(() => {
              Z(Te, "title", f(H).track.title), Bt(Rt, `${G === 0 ? "Base" : `Layer ${G}`}: ${f(H).track.title ?? ""}`), Z(Fe, "aria-label", `${f(H).muted ? "Unmute" : "Mute"} ${G === 0 ? "base" : `layer ${G}`}`), Z(Fe, "aria-pressed", f(H).muted), vi(lt, f(H).volume);
            }), we("click", Fe, () => D(f(H).id, void 0, !f(H).muted)), we("input", lt, (me) => D(f(H).id, Number(me.currentTarget.value))), Ne(P, Je);
          };
          ot(vr, (P) => {
            f(H) && P(De);
          });
        }
        Ne(Ae, dr);
      }), se(T), Ka(fe, () => f(O), (Ae) => x(O, Ae)), Ne(_, T);
    }, tl = (_) => {
      var T = So(), I = le(T), fe = le(I);
      {
        var Y = (G) => {
          wn(G, { size: 25 });
        }, Ae = (G) => {
          mn(G, { size: 25 });
        };
        ot(fe, (G) => {
          f(h) ? G(Y) : G(Ae, -1);
        });
      }
      se(I);
      var H = U(I);
      Kt(H), se(T), Vt(() => {
        Z(I, "aria-label", f(h) ? "Unmute" : "Mute"), Z(I, "aria-pressed", f(h)), pn(H, `--progress:${f(p) * 100}%`);
      }), we("click", I, () => x(h, !f(h))), we("input", H, () => {
        f(p) > 0 && x(h, !1);
      }), Ga(H, () => f(p), (G) => x(p, G)), Ne(_, T);
    };
    ot(Yn, (_) => {
      f(R) ? _(el) : _(tl, -1);
    });
  }
  var Gn = U(Yn);
  tn(Gn, (_) => L = _, () => L);
  var Kn = U(Gn, 2), rl = jt(Kn, !0), ie = U(Kn, 2);
  return tn(ie, (_) => x(l, _), () => f(l)), se(cr), Vt(
    (_, T, I) => {
      Vn = yr(cr, 1, "player svelte-bhx1m2", null, Vn, { light: i() === "light", "mix-player": f(R) }), Z(jr, "title", f(E)?.title), Bt(Hs, f(E)?.title ?? "Choose a track"), Z(hr, "aria-pressed", f(g) === "bars"), Wn = yr(hr, 1, "svelte-bhx1m2", null, Wn, { chosen: f(g) === "bars" }), Z(Br, "aria-pressed", f(g) === "wave"), Hn = yr(Br, 1, "svelte-bhx1m2", null, Hn, { chosen: f(g) === "wave" }), pn(Xe, `--progress:${f(y) ? f($) / f(y) * 100 : 0}%`), Z(Xe, "max", f(y) || 0), vi(Xe, f($)), Xe.disabled = !f(y), Z(Xe, "aria-valuetext", _), Bt(Us, T), Bt(Ys, I), yt.disabled = !f(E), Z(yt, "aria-label", f(z) ? "Pause" : "Play"), Bt(rl, (f(R) ? f(m).error : f(S)) || ((f(R) ? f(m).loading : f(w)) ? "Loading…" : ""));
    },
    [
      () => Fr(f($)),
      () => Fr(f($)),
      () => Fr(f(y))
    ]
  ), we("click", hr, () => x(g, "bars")), we("click", Br, () => x(g, "wave")), we("input", Xe, (_) => {
    f(R) ? b.seek(Number(_.currentTarget.value)) : (f(l).currentTime = Number(_.currentTarget.value), x(d, f(l).currentTime, !0));
  }), we("click", yt, jn), de("play", ie, () => {
    x(c, !0), x(w, !1), Ke("play", {});
  }), de("pause", ie, () => {
    x(c, !1), Ke("pause", {});
  }), de("timeupdate", ie, () => x(d, f(l).currentTime, !0)), de("loadedmetadata", ie, () => {
    x(v, Number.isFinite(f(l).duration) ? f(l).duration : 0, !0);
  }), de("canplay", ie, () => x(w, !1)), de("seeking", ie, () => x(w, !0)), de("seeked", ie, () => {
    f(l).readyState >= 3 && x(w, !1);
  }), de("waiting", ie, () => x(w, !0)), de("stalled", ie, () => {
    f(l).paused || x(w, !0);
  }), de("playing", ie, () => x(w, !1)), de("ended", ie, Bs), de("error", ie, () => {
    x(w, !1), x(c, !1), x(S, "Unable to load this audio track."), Ke("playbackerror", { track: f(J) });
  }), Xa(ie, () => f(p), (_) => x(p, _)), Ja(ie, () => f(h), (_) => x(h, _)), Ne(e, cr), Tn(Ws);
}
ps(["click", "input"]);
customElements.define("compact-audio-player", st(
  Mo,
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
