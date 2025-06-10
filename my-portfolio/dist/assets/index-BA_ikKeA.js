(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Xp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Vc = { exports: {} },
  Qo = {},
  Wc = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sl = Symbol.for("react.element"),
  Gp = Symbol.for("react.portal"),
  Jp = Symbol.for("react.fragment"),
  Zp = Symbol.for("react.strict_mode"),
  qp = Symbol.for("react.profiler"),
  bp = Symbol.for("react.provider"),
  eh = Symbol.for("react.context"),
  th = Symbol.for("react.forward_ref"),
  nh = Symbol.for("react.suspense"),
  rh = Symbol.for("react.memo"),
  lh = Symbol.for("react.lazy"),
  is = Symbol.iterator;
function oh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (is && e[is]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Qc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Kc = Object.assign,
  Yc = {};
function wr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yc),
    (this.updater = n || Qc);
}
wr.prototype.isReactComponent = {};
wr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xc() {}
Xc.prototype = wr.prototype;
function Ha(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yc),
    (this.updater = n || Qc);
}
var Va = (Ha.prototype = new Xc());
Va.constructor = Ha;
Kc(Va, wr.prototype);
Va.isPureReactComponent = !0;
var as = Array.isArray,
  Gc = Object.prototype.hasOwnProperty,
  Wa = { current: null },
  Jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Gc.call(t, r) && !Jc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: Sl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Wa.current,
  };
}
function ih(e, t) {
  return {
    $$typeof: Sl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Qa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Sl;
}
function ah(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var us = /\/+/g;
function hi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ah("" + e.key)
    : t.toString(36);
}
function ql(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Sl:
          case Gp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + hi(i, 0) : r),
      as(l)
        ? ((n = ""),
          e != null && (n = e.replace(us, "$&/") + "/"),
          ql(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (Qa(l) &&
            (l = ih(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(us, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), as(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + hi(o, a);
      i += ql(o, t, n, u, l);
    }
  else if (((u = oh(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + hi(o, a++)), (i += ql(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function jl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    ql(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function uh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Be = { current: null },
  bl = { transition: null },
  sh = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: bl,
    ReactCurrentOwner: Wa,
  };
function qc() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = {
  map: jl,
  forEach: function (e, t, n) {
    jl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      jl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      jl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Qa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
G.Component = wr;
G.Fragment = Jp;
G.Profiler = qp;
G.PureComponent = Ha;
G.StrictMode = Zp;
G.Suspense = nh;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sh;
G.act = qc;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Kc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Wa.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Gc.call(t, u) &&
        !Jc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: Sl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: eh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: bp, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = Zc;
G.createFactory = function (e) {
  var t = Zc.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: th, render: e };
};
G.isValidElement = Qa;
G.lazy = function (e) {
  return { $$typeof: lh, _payload: { _status: -1, _result: e }, _init: uh };
};
G.memo = function (e, t) {
  return { $$typeof: rh, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = bl.transition;
  bl.transition = {};
  try {
    e();
  } finally {
    bl.transition = t;
  }
};
G.unstable_act = qc;
G.useCallback = function (e, t) {
  return Be.current.useCallback(e, t);
};
G.useContext = function (e) {
  return Be.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return Be.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return Be.current.useEffect(e, t);
};
G.useId = function () {
  return Be.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return Be.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return Be.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return Be.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return Be.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return Be.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return Be.current.useRef(e);
};
G.useState = function (e) {
  return Be.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return Be.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return Be.current.useTransition();
};
G.version = "18.3.1";
Wc.exports = G;
var x = Wc.exports;
const nn = Xp(x);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ch = x,
  fh = Symbol.for("react.element"),
  dh = Symbol.for("react.fragment"),
  ph = Object.prototype.hasOwnProperty,
  hh = ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  mh = { key: !0, ref: !0, __self: !0, __source: !0 };
function bc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) ph.call(t, r) && !mh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: fh,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: hh.current,
  };
}
Qo.Fragment = dh;
Qo.jsx = bc;
Qo.jsxs = bc;
Vc.exports = Qo;
var P = Vc.exports,
  Qi = {},
  ef = { exports: {} },
  tt = {},
  tf = { exports: {} },
  nf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, I) {
    var U = M.length;
    M.push(I);
    e: for (; 0 < U; ) {
      var W = (U - 1) >>> 1,
        Z = M[W];
      if (0 < l(Z, I)) (M[W] = I), (M[U] = Z), (U = W);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var I = M[0],
      U = M.pop();
    if (U !== I) {
      M[0] = U;
      e: for (var W = 0, Z = M.length, re = Z >>> 1; W < re; ) {
        var de = 2 * (W + 1) - 1,
          Ht = M[de],
          Ie = de + 1,
          Bn = M[Ie];
        if (0 > l(Ht, U))
          Ie < Z && 0 > l(Bn, Ht)
            ? ((M[W] = Bn), (M[Ie] = U), (W = Ie))
            : ((M[W] = Ht), (M[de] = U), (W = de));
        else if (Ie < Z && 0 > l(Bn, U)) (M[W] = Bn), (M[Ie] = U), (W = Ie);
        else break e;
      }
    }
    return I;
  }
  function l(M, I) {
    var U = M.sortIndex - I.sortIndex;
    return U !== 0 ? U : M.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    s = [],
    c = 1,
    h = null,
    d = 3,
    g = !1,
    S = !1,
    k = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(M) {
    for (var I = n(s); I !== null; ) {
      if (I.callback === null) r(s);
      else if (I.startTime <= M)
        r(s), (I.sortIndex = I.expirationTime), t(u, I);
      else break;
      I = n(s);
    }
  }
  function C(M) {
    if (((k = !1), m(M), !S))
      if (n(u) !== null) (S = !0), b(R);
      else {
        var I = n(s);
        I !== null && ge(C, I.startTime - M);
      }
  }
  function R(M, I) {
    (S = !1), k && ((k = !1), f(D), (D = -1)), (g = !0);
    var U = d;
    try {
      for (
        m(I), h = n(u);
        h !== null && (!(h.expirationTime > I) || (M && !te()));

      ) {
        var W = h.callback;
        if (typeof W == "function") {
          (h.callback = null), (d = h.priorityLevel);
          var Z = W(h.expirationTime <= I);
          (I = e.unstable_now()),
            typeof Z == "function" ? (h.callback = Z) : h === n(u) && r(u),
            m(I);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var re = !0;
      else {
        var de = n(s);
        de !== null && ge(C, de.startTime - I), (re = !1);
      }
      return re;
    } finally {
      (h = null), (d = U), (g = !1);
    }
  }
  var y = !1,
    _ = null,
    D = -1,
    O = 5,
    $ = -1;
  function te() {
    return !(e.unstable_now() - $ < O);
  }
  function ae() {
    if (_ !== null) {
      var M = e.unstable_now();
      $ = M;
      var I = !0;
      try {
        I = _(!0, M);
      } finally {
        I ? ke() : ((y = !1), (_ = null));
      }
    } else y = !1;
  }
  var ke;
  if (typeof p == "function")
    ke = function () {
      p(ae);
    };
  else if (typeof MessageChannel < "u") {
    var J = new MessageChannel(),
      ue = J.port2;
    (J.port1.onmessage = ae),
      (ke = function () {
        ue.postMessage(null);
      });
  } else
    ke = function () {
      T(ae, 0);
    };
  function b(M) {
    (_ = M), y || ((y = !0), ke());
  }
  function ge(M, I) {
    D = T(function () {
      M(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || g || ((S = !0), b(R));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = d;
      }
      var U = d;
      d = I;
      try {
        return M();
      } finally {
        d = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, I) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var U = d;
      d = M;
      try {
        return I();
      } finally {
        d = U;
      }
    }),
    (e.unstable_scheduleCallback = function (M, I, U) {
      var W = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? W + U : W))
          : (U = W),
        M)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = U + Z),
        (M = {
          id: c++,
          callback: I,
          priorityLevel: M,
          startTime: U,
          expirationTime: Z,
          sortIndex: -1,
        }),
        U > W
          ? ((M.sortIndex = U),
            t(s, M),
            n(u) === null &&
              M === n(s) &&
              (k ? (f(D), (D = -1)) : (k = !0), ge(C, U - W)))
          : ((M.sortIndex = Z), t(u, M), S || g || ((S = !0), b(R))),
        M
      );
    }),
    (e.unstable_shouldYield = te),
    (e.unstable_wrapCallback = function (M) {
      var I = d;
      return function () {
        var U = d;
        d = I;
        try {
          return M.apply(this, arguments);
        } finally {
          d = U;
        }
      };
    });
})(nf);
tf.exports = nf;
var vh = tf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yh = x,
  et = vh;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var rf = new Set(),
  tl = {};
function $n(e, t) {
  dr(e, t), dr(e + "Capture", t);
}
function dr(e, t) {
  for (tl[e] = t, e = 0; e < t.length; e++) rf.add(t[e]);
}
var Ft = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ki = Object.prototype.hasOwnProperty,
  gh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ss = {},
  cs = {};
function wh(e) {
  return Ki.call(cs, e)
    ? !0
    : Ki.call(ss, e)
    ? !1
    : gh.test(e)
    ? (cs[e] = !0)
    : ((ss[e] = !0), !1);
}
function Sh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function xh(e, t, n, r) {
  if (t === null || typeof t > "u" || Sh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function He(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    De[e] = new He(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  De[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  De[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  De[e] = new He(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    De[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  De[e] = new He(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  De[e] = new He(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  De[e] = new He(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  De[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ka = /[\-:]([a-z])/g;
function Ya(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ka, Ya);
    De[t] = new He(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ka, Ya);
    De[t] = new He(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ka, Ya);
  De[t] = new He(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  De[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
De.xlinkHref = new He(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  De[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xa(e, t, n, r) {
  var l = De.hasOwnProperty(t) ? De[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (xh(t, n, l, r) && (n = null),
    r || l === null
      ? wh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var At = yh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  zl = Symbol.for("react.element"),
  Yn = Symbol.for("react.portal"),
  Xn = Symbol.for("react.fragment"),
  Ga = Symbol.for("react.strict_mode"),
  Yi = Symbol.for("react.profiler"),
  lf = Symbol.for("react.provider"),
  of = Symbol.for("react.context"),
  Ja = Symbol.for("react.forward_ref"),
  Xi = Symbol.for("react.suspense"),
  Gi = Symbol.for("react.suspense_list"),
  Za = Symbol.for("react.memo"),
  Gt = Symbol.for("react.lazy"),
  af = Symbol.for("react.offscreen"),
  fs = Symbol.iterator;
function Lr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fs && e[fs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  mi;
function Ur(e) {
  if (mi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      mi = (t && t[1]) || "";
    }
  return (
    `
` +
    mi +
    e
  );
}
var vi = !1;
function yi(e, t) {
  if (!e || vi) return "";
  vi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (vi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ur(e) : "";
}
function Eh(e) {
  switch (e.tag) {
    case 5:
      return Ur(e.type);
    case 16:
      return Ur("Lazy");
    case 13:
      return Ur("Suspense");
    case 19:
      return Ur("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = yi(e.type, !1)), e;
    case 11:
      return (e = yi(e.type.render, !1)), e;
    case 1:
      return (e = yi(e.type, !0)), e;
    default:
      return "";
  }
}
function Ji(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xn:
      return "Fragment";
    case Yn:
      return "Portal";
    case Yi:
      return "Profiler";
    case Ga:
      return "StrictMode";
    case Xi:
      return "Suspense";
    case Gi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case of:
        return (e.displayName || "Context") + ".Consumer";
      case lf:
        return (e._context.displayName || "Context") + ".Provider";
      case Ja:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Za:
        return (
          (t = e.displayName || null), t !== null ? t : Ji(e.type) || "Memo"
        );
      case Gt:
        (t = e._payload), (e = e._init);
        try {
          return Ji(e(t));
        } catch {}
    }
  return null;
}
function kh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ji(t);
    case 8:
      return t === Ga ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function dn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function uf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ch(e) {
  var t = uf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ol(e) {
  e._valueTracker || (e._valueTracker = Ch(e));
}
function sf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = uf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function mo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Zi(e, t) {
  var n = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ds(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function cf(e, t) {
  (t = t.checked), t != null && Xa(e, "checked", t, !1);
}
function qi(e, t) {
  cf(e, t);
  var n = dn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? bi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bi(e, t.type, dn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ps(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function bi(e, t, n) {
  (t !== "number" || mo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ar = Array.isArray;
function or(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ea(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function hs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Ar(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: dn(n) };
}
function ff(e, t) {
  var n = dn(t.value),
    r = dn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ms(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function df(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ta(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? df(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Fl,
  pf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Fl = Fl || document.createElement("div"),
          Fl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Fl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function nl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Kr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ph = ["Webkit", "ms", "Moz", "O"];
Object.keys(Kr).forEach(function (e) {
  Ph.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kr[t] = Kr[e]);
  });
});
function hf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Kr.hasOwnProperty(e) && Kr[e])
    ? ("" + t).trim()
    : t + "px";
}
function mf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = hf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Rh = me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function na(e, t) {
  if (t) {
    if (Rh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function ra(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var la = null;
function qa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var oa = null,
  ir = null,
  ar = null;
function vs(e) {
  if ((e = kl(e))) {
    if (typeof oa != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Jo(t)), oa(e.stateNode, e.type, t));
  }
}
function vf(e) {
  ir ? (ar ? ar.push(e) : (ar = [e])) : (ir = e);
}
function yf() {
  if (ir) {
    var e = ir,
      t = ar;
    if (((ar = ir = null), vs(e), t)) for (e = 0; e < t.length; e++) vs(t[e]);
  }
}
function gf(e, t) {
  return e(t);
}
function wf() {}
var gi = !1;
function Sf(e, t, n) {
  if (gi) return e(t, n);
  gi = !0;
  try {
    return gf(e, t, n);
  } finally {
    (gi = !1), (ir !== null || ar !== null) && (wf(), yf());
  }
}
function rl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Jo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var ia = !1;
if (Ft)
  try {
    var Nr = {};
    Object.defineProperty(Nr, "passive", {
      get: function () {
        ia = !0;
      },
    }),
      window.addEventListener("test", Nr, Nr),
      window.removeEventListener("test", Nr, Nr);
  } catch {
    ia = !1;
  }
function _h(e, t, n, r, l, o, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var Yr = !1,
  vo = null,
  yo = !1,
  aa = null,
  Lh = {
    onError: function (e) {
      (Yr = !0), (vo = e);
    },
  };
function Nh(e, t, n, r, l, o, i, a, u) {
  (Yr = !1), (vo = null), _h.apply(Lh, arguments);
}
function Th(e, t, n, r, l, o, i, a, u) {
  if ((Nh.apply(this, arguments), Yr)) {
    if (Yr) {
      var s = vo;
      (Yr = !1), (vo = null);
    } else throw Error(N(198));
    yo || ((yo = !0), (aa = s));
  }
}
function Un(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ys(e) {
  if (Un(e) !== e) throw Error(N(188));
}
function Dh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Un(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return ys(l), e;
        if (o === r) return ys(l), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Ef(e) {
  return (e = Dh(e)), e !== null ? kf(e) : null;
}
function kf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = kf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cf = et.unstable_scheduleCallback,
  gs = et.unstable_cancelCallback,
  Mh = et.unstable_shouldYield,
  jh = et.unstable_requestPaint,
  we = et.unstable_now,
  zh = et.unstable_getCurrentPriorityLevel,
  ba = et.unstable_ImmediatePriority,
  Pf = et.unstable_UserBlockingPriority,
  go = et.unstable_NormalPriority,
  Oh = et.unstable_LowPriority,
  Rf = et.unstable_IdlePriority,
  Ko = null,
  Pt = null;
function Fh(e) {
  if (Pt && typeof Pt.onCommitFiberRoot == "function")
    try {
      Pt.onCommitFiberRoot(Ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var gt = Math.clz32 ? Math.clz32 : Uh,
  Ih = Math.log,
  $h = Math.LN2;
function Uh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ih(e) / $h) | 0)) | 0;
}
var Il = 64,
  $l = 4194304;
function Br(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function wo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Br(a)) : ((o &= i), o !== 0 && (r = Br(o)));
  } else (i = n & ~l), i !== 0 ? (r = Br(i)) : o !== 0 && (r = Br(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - gt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Ah(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Bh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - gt(o),
      a = 1 << i,
      u = l[i];
    u === -1
      ? (!(a & n) || a & r) && (l[i] = Ah(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function ua(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function _f() {
  var e = Il;
  return (Il <<= 1), !(Il & 4194240) && (Il = 64), e;
}
function wi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function xl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - gt(t)),
    (e[t] = n);
}
function Hh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - gt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function eu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - gt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var ne = 0;
function Lf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Nf,
  tu,
  Tf,
  Df,
  Mf,
  sa = !1,
  Ul = [],
  rn = null,
  ln = null,
  on = null,
  ll = new Map(),
  ol = new Map(),
  Zt = [],
  Vh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ws(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      ll.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ol.delete(t.pointerId);
  }
}
function Tr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = kl(t)), t !== null && tu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Wh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (rn = Tr(rn, e, t, n, r, l)), !0;
    case "dragenter":
      return (ln = Tr(ln, e, t, n, r, l)), !0;
    case "mouseover":
      return (on = Tr(on, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return ll.set(o, Tr(ll.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), ol.set(o, Tr(ol.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function jf(e) {
  var t = _n(e.target);
  if (t !== null) {
    var n = Un(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xf(n)), t !== null)) {
          (e.blockedOn = t),
            Mf(e.priority, function () {
              Tf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function eo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (la = r), n.target.dispatchEvent(r), (la = null);
    } else return (t = kl(n)), t !== null && tu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ss(e, t, n) {
  eo(e) && n.delete(t);
}
function Qh() {
  (sa = !1),
    rn !== null && eo(rn) && (rn = null),
    ln !== null && eo(ln) && (ln = null),
    on !== null && eo(on) && (on = null),
    ll.forEach(Ss),
    ol.forEach(Ss);
}
function Dr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    sa ||
      ((sa = !0),
      et.unstable_scheduleCallback(et.unstable_NormalPriority, Qh)));
}
function il(e) {
  function t(l) {
    return Dr(l, e);
  }
  if (0 < Ul.length) {
    Dr(Ul[0], e);
    for (var n = 1; n < Ul.length; n++) {
      var r = Ul[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rn !== null && Dr(rn, e),
      ln !== null && Dr(ln, e),
      on !== null && Dr(on, e),
      ll.forEach(t),
      ol.forEach(t),
      n = 0;
    n < Zt.length;
    n++
  )
    (r = Zt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Zt.length && ((n = Zt[0]), n.blockedOn === null); )
    jf(n), n.blockedOn === null && Zt.shift();
}
var ur = At.ReactCurrentBatchConfig,
  So = !0;
function Kh(e, t, n, r) {
  var l = ne,
    o = ur.transition;
  ur.transition = null;
  try {
    (ne = 1), nu(e, t, n, r);
  } finally {
    (ne = l), (ur.transition = o);
  }
}
function Yh(e, t, n, r) {
  var l = ne,
    o = ur.transition;
  ur.transition = null;
  try {
    (ne = 4), nu(e, t, n, r);
  } finally {
    (ne = l), (ur.transition = o);
  }
}
function nu(e, t, n, r) {
  if (So) {
    var l = ca(e, t, n, r);
    if (l === null) Ni(e, t, r, xo, n), ws(e, r);
    else if (Wh(l, e, t, n, r)) r.stopPropagation();
    else if ((ws(e, r), t & 4 && -1 < Vh.indexOf(e))) {
      for (; l !== null; ) {
        var o = kl(l);
        if (
          (o !== null && Nf(o),
          (o = ca(e, t, n, r)),
          o === null && Ni(e, t, r, xo, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Ni(e, t, r, null, n);
  }
}
var xo = null;
function ca(e, t, n, r) {
  if (((xo = null), (e = qa(r)), (e = _n(e)), e !== null))
    if (((t = Un(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (xo = e), null;
}
function zf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (zh()) {
        case ba:
          return 1;
        case Pf:
          return 4;
        case go:
        case Oh:
          return 16;
        case Rf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null,
  ru = null,
  to = null;
function Of() {
  if (to) return to;
  var e,
    t = ru,
    n = t.length,
    r,
    l = "value" in en ? en.value : en.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (to = l.slice(e, 1 < r ? 1 - r : void 0));
}
function no(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Al() {
  return !0;
}
function xs() {
  return !1;
}
function nt(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Al
        : xs),
      (this.isPropagationStopped = xs),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Al));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Al));
      },
      persist: function () {},
      isPersistent: Al,
    }),
    t
  );
}
var Sr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  lu = nt(Sr),
  El = me({}, Sr, { view: 0, detail: 0 }),
  Xh = nt(El),
  Si,
  xi,
  Mr,
  Yo = me({}, El, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ou,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Mr &&
            (Mr && e.type === "mousemove"
              ? ((Si = e.screenX - Mr.screenX), (xi = e.screenY - Mr.screenY))
              : (xi = Si = 0),
            (Mr = e)),
          Si);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : xi;
    },
  }),
  Es = nt(Yo),
  Gh = me({}, Yo, { dataTransfer: 0 }),
  Jh = nt(Gh),
  Zh = me({}, El, { relatedTarget: 0 }),
  Ei = nt(Zh),
  qh = me({}, Sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bh = nt(qh),
  em = me({}, Sr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  tm = nt(em),
  nm = me({}, Sr, { data: 0 }),
  ks = nt(nm),
  rm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  lm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  om = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function im(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = om[e]) ? !!t[e] : !1;
}
function ou() {
  return im;
}
var am = me({}, El, {
    key: function (e) {
      if (e.key) {
        var t = rm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = no(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? lm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ou,
    charCode: function (e) {
      return e.type === "keypress" ? no(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? no(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  um = nt(am),
  sm = me({}, Yo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Cs = nt(sm),
  cm = me({}, El, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ou,
  }),
  fm = nt(cm),
  dm = me({}, Sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pm = nt(dm),
  hm = me({}, Yo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  mm = nt(hm),
  vm = [9, 13, 27, 32],
  iu = Ft && "CompositionEvent" in window,
  Xr = null;
Ft && "documentMode" in document && (Xr = document.documentMode);
var ym = Ft && "TextEvent" in window && !Xr,
  Ff = Ft && (!iu || (Xr && 8 < Xr && 11 >= Xr)),
  Ps = " ",
  Rs = !1;
function If(e, t) {
  switch (e) {
    case "keyup":
      return vm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function $f(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Gn = !1;
function gm(e, t) {
  switch (e) {
    case "compositionend":
      return $f(t);
    case "keypress":
      return t.which !== 32 ? null : ((Rs = !0), Ps);
    case "textInput":
      return (e = t.data), e === Ps && Rs ? null : e;
    default:
      return null;
  }
}
function wm(e, t) {
  if (Gn)
    return e === "compositionend" || (!iu && If(e, t))
      ? ((e = Of()), (to = ru = en = null), (Gn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ff && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Sm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function _s(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Sm[e.type] : t === "textarea";
}
function Uf(e, t, n, r) {
  vf(r),
    (t = Eo(t, "onChange")),
    0 < t.length &&
      ((n = new lu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Gr = null,
  al = null;
function xm(e) {
  Jf(e, 0);
}
function Xo(e) {
  var t = qn(e);
  if (sf(t)) return e;
}
function Em(e, t) {
  if (e === "change") return t;
}
var Af = !1;
if (Ft) {
  var ki;
  if (Ft) {
    var Ci = "oninput" in document;
    if (!Ci) {
      var Ls = document.createElement("div");
      Ls.setAttribute("oninput", "return;"),
        (Ci = typeof Ls.oninput == "function");
    }
    ki = Ci;
  } else ki = !1;
  Af = ki && (!document.documentMode || 9 < document.documentMode);
}
function Ns() {
  Gr && (Gr.detachEvent("onpropertychange", Bf), (al = Gr = null));
}
function Bf(e) {
  if (e.propertyName === "value" && Xo(al)) {
    var t = [];
    Uf(t, al, e, qa(e)), Sf(xm, t);
  }
}
function km(e, t, n) {
  e === "focusin"
    ? (Ns(), (Gr = t), (al = n), Gr.attachEvent("onpropertychange", Bf))
    : e === "focusout" && Ns();
}
function Cm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xo(al);
}
function Pm(e, t) {
  if (e === "click") return Xo(t);
}
function Rm(e, t) {
  if (e === "input" || e === "change") return Xo(t);
}
function _m(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var St = typeof Object.is == "function" ? Object.is : _m;
function ul(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ki.call(t, l) || !St(e[l], t[l])) return !1;
  }
  return !0;
}
function Ts(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ds(e, t) {
  var n = Ts(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ts(n);
  }
}
function Hf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Hf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Vf() {
  for (var e = window, t = mo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = mo(e.document);
  }
  return t;
}
function au(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Lm(e) {
  var t = Vf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Hf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && au(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Ds(n, o));
        var i = Ds(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Nm = Ft && "documentMode" in document && 11 >= document.documentMode,
  Jn = null,
  fa = null,
  Jr = null,
  da = !1;
function Ms(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  da ||
    Jn == null ||
    Jn !== mo(r) ||
    ((r = Jn),
    "selectionStart" in r && au(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Jr && ul(Jr, r)) ||
      ((Jr = r),
      (r = Eo(fa, "onSelect")),
      0 < r.length &&
        ((t = new lu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Jn))));
}
function Bl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Zn = {
    animationend: Bl("Animation", "AnimationEnd"),
    animationiteration: Bl("Animation", "AnimationIteration"),
    animationstart: Bl("Animation", "AnimationStart"),
    transitionend: Bl("Transition", "TransitionEnd"),
  },
  Pi = {},
  Wf = {};
Ft &&
  ((Wf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zn.animationend.animation,
    delete Zn.animationiteration.animation,
    delete Zn.animationstart.animation),
  "TransitionEvent" in window || delete Zn.transitionend.transition);
function Go(e) {
  if (Pi[e]) return Pi[e];
  if (!Zn[e]) return e;
  var t = Zn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wf) return (Pi[e] = t[n]);
  return e;
}
var Qf = Go("animationend"),
  Kf = Go("animationiteration"),
  Yf = Go("animationstart"),
  Xf = Go("transitionend"),
  Gf = new Map(),
  js =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mn(e, t) {
  Gf.set(e, t), $n(t, [e]);
}
for (var Ri = 0; Ri < js.length; Ri++) {
  var _i = js[Ri],
    Tm = _i.toLowerCase(),
    Dm = _i[0].toUpperCase() + _i.slice(1);
  mn(Tm, "on" + Dm);
}
mn(Qf, "onAnimationEnd");
mn(Kf, "onAnimationIteration");
mn(Yf, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(Xf, "onTransitionEnd");
dr("onMouseEnter", ["mouseout", "mouseover"]);
dr("onMouseLeave", ["mouseout", "mouseover"]);
dr("onPointerEnter", ["pointerout", "pointerover"]);
dr("onPointerLeave", ["pointerout", "pointerover"]);
$n(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
$n(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
$n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$n(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
$n(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
$n(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Hr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Mm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));
function zs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Th(r, t, void 0, e), (e.currentTarget = null);
}
function Jf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          zs(l, a, s), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          zs(l, a, s), (o = u);
        }
    }
  }
  if (yo) throw ((e = aa), (yo = !1), (aa = null), e);
}
function se(e, t) {
  var n = t[ya];
  n === void 0 && (n = t[ya] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Zf(t, e, 2, !1), n.add(r));
}
function Li(e, t, n) {
  var r = 0;
  t && (r |= 4), Zf(n, e, r, t);
}
var Hl = "_reactListening" + Math.random().toString(36).slice(2);
function sl(e) {
  if (!e[Hl]) {
    (e[Hl] = !0),
      rf.forEach(function (n) {
        n !== "selectionchange" && (Mm.has(n) || Li(n, !1, e), Li(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hl] || ((t[Hl] = !0), Li("selectionchange", !1, t));
  }
}
function Zf(e, t, n, r) {
  switch (zf(t)) {
    case 1:
      var l = Kh;
      break;
    case 4:
      l = Yh;
      break;
    default:
      l = nu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ia ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ni(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = _n(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Sf(function () {
    var s = o,
      c = qa(n),
      h = [];
    e: {
      var d = Gf.get(e);
      if (d !== void 0) {
        var g = lu,
          S = e;
        switch (e) {
          case "keypress":
            if (no(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = um;
            break;
          case "focusin":
            (S = "focus"), (g = Ei);
            break;
          case "focusout":
            (S = "blur"), (g = Ei);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ei;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Es;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Jh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = fm;
            break;
          case Qf:
          case Kf:
          case Yf:
            g = bh;
            break;
          case Xf:
            g = pm;
            break;
          case "scroll":
            g = Xh;
            break;
          case "wheel":
            g = mm;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = tm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Cs;
        }
        var k = (t & 4) !== 0,
          T = !k && e === "scroll",
          f = k ? (d !== null ? d + "Capture" : null) : d;
        k = [];
        for (var p = s, m; p !== null; ) {
          m = p;
          var C = m.stateNode;
          if (
            (m.tag === 5 &&
              C !== null &&
              ((m = C),
              f !== null && ((C = rl(p, f)), C != null && k.push(cl(p, C, m)))),
            T)
          )
            break;
          p = p.return;
        }
        0 < k.length &&
          ((d = new g(d, S, null, n, c)), h.push({ event: d, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== la &&
            (S = n.relatedTarget || n.fromElement) &&
            (_n(S) || S[It]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((S = n.relatedTarget || n.toElement),
              (g = s),
              (S = S ? _n(S) : null),
              S !== null &&
                ((T = Un(S)), S !== T || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((g = null), (S = s)),
          g !== S)
        ) {
          if (
            ((k = Es),
            (C = "onMouseLeave"),
            (f = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = Cs),
              (C = "onPointerLeave"),
              (f = "onPointerEnter"),
              (p = "pointer")),
            (T = g == null ? d : qn(g)),
            (m = S == null ? d : qn(S)),
            (d = new k(C, p + "leave", g, n, c)),
            (d.target = T),
            (d.relatedTarget = m),
            (C = null),
            _n(c) === s &&
              ((k = new k(f, p + "enter", S, n, c)),
              (k.target = m),
              (k.relatedTarget = T),
              (C = k)),
            (T = C),
            g && S)
          )
            t: {
              for (k = g, f = S, p = 0, m = k; m; m = Wn(m)) p++;
              for (m = 0, C = f; C; C = Wn(C)) m++;
              for (; 0 < p - m; ) (k = Wn(k)), p--;
              for (; 0 < m - p; ) (f = Wn(f)), m--;
              for (; p--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Wn(k)), (f = Wn(f));
              }
              k = null;
            }
          else k = null;
          g !== null && Os(h, d, g, k, !1),
            S !== null && T !== null && Os(h, T, S, k, !0);
        }
      }
      e: {
        if (
          ((d = s ? qn(s) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var R = Em;
        else if (_s(d))
          if (Af) R = Rm;
          else {
            R = Cm;
            var y = km;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (R = Pm);
        if (R && (R = R(e, s))) {
          Uf(h, R, n, c);
          break e;
        }
        y && y(e, d, s),
          e === "focusout" &&
            (y = d._wrapperState) &&
            y.controlled &&
            d.type === "number" &&
            bi(d, "number", d.value);
      }
      switch (((y = s ? qn(s) : window), e)) {
        case "focusin":
          (_s(y) || y.contentEditable === "true") &&
            ((Jn = y), (fa = s), (Jr = null));
          break;
        case "focusout":
          Jr = fa = Jn = null;
          break;
        case "mousedown":
          da = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (da = !1), Ms(h, n, c);
          break;
        case "selectionchange":
          if (Nm) break;
        case "keydown":
        case "keyup":
          Ms(h, n, c);
      }
      var _;
      if (iu)
        e: {
          switch (e) {
            case "compositionstart":
              var D = "onCompositionStart";
              break e;
            case "compositionend":
              D = "onCompositionEnd";
              break e;
            case "compositionupdate":
              D = "onCompositionUpdate";
              break e;
          }
          D = void 0;
        }
      else
        Gn
          ? If(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      D &&
        (Ff &&
          n.locale !== "ko" &&
          (Gn || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && Gn && (_ = Of())
            : ((en = c),
              (ru = "value" in en ? en.value : en.textContent),
              (Gn = !0))),
        (y = Eo(s, D)),
        0 < y.length &&
          ((D = new ks(D, e, null, n, c)),
          h.push({ event: D, listeners: y }),
          _ ? (D.data = _) : ((_ = $f(n)), _ !== null && (D.data = _)))),
        (_ = ym ? gm(e, n) : wm(e, n)) &&
          ((s = Eo(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new ks("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: s }),
            (c.data = _)));
    }
    Jf(h, t);
  });
}
function cl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Eo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = rl(e, n)),
      o != null && r.unshift(cl(e, o, l)),
      (o = rl(e, t)),
      o != null && r.push(cl(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Os(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = rl(n, o)), u != null && i.unshift(cl(n, u, a)))
        : l || ((u = rl(n, o)), u != null && i.push(cl(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var jm = /\r\n?/g,
  zm = /\u0000|\uFFFD/g;
function Fs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      jm,
      `
`
    )
    .replace(zm, "");
}
function Vl(e, t, n) {
  if (((t = Fs(t)), Fs(e) !== t && n)) throw Error(N(425));
}
function ko() {}
var pa = null,
  ha = null;
function ma(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var va = typeof setTimeout == "function" ? setTimeout : void 0,
  Om = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Is = typeof Promise == "function" ? Promise : void 0,
  Fm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Is < "u"
      ? function (e) {
          return Is.resolve(null).then(e).catch(Im);
        }
      : va;
function Im(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ti(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), il(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  il(t);
}
function an(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function $s(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var xr = Math.random().toString(36).slice(2),
  Ct = "__reactFiber$" + xr,
  fl = "__reactProps$" + xr,
  It = "__reactContainer$" + xr,
  ya = "__reactEvents$" + xr,
  $m = "__reactListeners$" + xr,
  Um = "__reactHandles$" + xr;
function _n(e) {
  var t = e[Ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[It] || n[Ct])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = $s(e); e !== null; ) {
          if ((n = e[Ct])) return n;
          e = $s(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function kl(e) {
  return (
    (e = e[Ct] || e[It]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Jo(e) {
  return e[fl] || null;
}
var ga = [],
  bn = -1;
function vn(e) {
  return { current: e };
}
function ce(e) {
  0 > bn || ((e.current = ga[bn]), (ga[bn] = null), bn--);
}
function ie(e, t) {
  bn++, (ga[bn] = e.current), (e.current = t);
}
var pn = {},
  Fe = vn(pn),
  Qe = vn(!1),
  jn = pn;
function pr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ke(e) {
  return (e = e.childContextTypes), e != null;
}
function Co() {
  ce(Qe), ce(Fe);
}
function Us(e, t, n) {
  if (Fe.current !== pn) throw Error(N(168));
  ie(Fe, t), ie(Qe, n);
}
function qf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, kh(e) || "Unknown", l));
  return me({}, n, r);
}
function Po(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pn),
    (jn = Fe.current),
    ie(Fe, e),
    ie(Qe, Qe.current),
    !0
  );
}
function As(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = qf(e, t, jn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ce(Qe),
      ce(Fe),
      ie(Fe, e))
    : ce(Qe),
    ie(Qe, n);
}
var Mt = null,
  Zo = !1,
  Di = !1;
function bf(e) {
  Mt === null ? (Mt = [e]) : Mt.push(e);
}
function Am(e) {
  (Zo = !0), bf(e);
}
function yn() {
  if (!Di && Mt !== null) {
    Di = !0;
    var e = 0,
      t = ne;
    try {
      var n = Mt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Mt = null), (Zo = !1);
    } catch (l) {
      throw (Mt !== null && (Mt = Mt.slice(e + 1)), Cf(ba, yn), l);
    } finally {
      (ne = t), (Di = !1);
    }
  }
  return null;
}
var er = [],
  tr = 0,
  Ro = null,
  _o = 0,
  it = [],
  at = 0,
  zn = null,
  jt = 1,
  zt = "";
function Cn(e, t) {
  (er[tr++] = _o), (er[tr++] = Ro), (Ro = e), (_o = t);
}
function ed(e, t, n) {
  (it[at++] = jt), (it[at++] = zt), (it[at++] = zn), (zn = e);
  var r = jt;
  e = zt;
  var l = 32 - gt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - gt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (jt = (1 << (32 - gt(t) + l)) | (n << l) | r),
      (zt = o + e);
  } else (jt = (1 << o) | (n << l) | r), (zt = e);
}
function uu(e) {
  e.return !== null && (Cn(e, 1), ed(e, 1, 0));
}
function su(e) {
  for (; e === Ro; )
    (Ro = er[--tr]), (er[tr] = null), (_o = er[--tr]), (er[tr] = null);
  for (; e === zn; )
    (zn = it[--at]),
      (it[at] = null),
      (zt = it[--at]),
      (it[at] = null),
      (jt = it[--at]),
      (it[at] = null);
}
var be = null,
  qe = null,
  fe = !1,
  yt = null;
function td(e, t) {
  var n = ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Bs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (be = e), (qe = an(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (be = e), (qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zn !== null ? { id: jt, overflow: zt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (be = e),
            (qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Sa(e) {
  if (fe) {
    var t = qe;
    if (t) {
      var n = t;
      if (!Bs(e, t)) {
        if (wa(e)) throw Error(N(418));
        t = an(n.nextSibling);
        var r = be;
        t && Bs(e, t)
          ? td(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (be = e));
      }
    } else {
      if (wa(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (fe = !1), (be = e);
    }
  }
}
function Hs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  be = e;
}
function Wl(e) {
  if (e !== be) return !1;
  if (!fe) return Hs(e), (fe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ma(e.type, e.memoizedProps))),
    t && (t = qe))
  ) {
    if (wa(e)) throw (nd(), Error(N(418)));
    for (; t; ) td(e, t), (t = an(t.nextSibling));
  }
  if ((Hs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qe = an(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = be ? an(e.stateNode.nextSibling) : null;
  return !0;
}
function nd() {
  for (var e = qe; e; ) e = an(e.nextSibling);
}
function hr() {
  (qe = be = null), (fe = !1);
}
function cu(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
var Bm = At.ReactCurrentBatchConfig;
function jr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Ql(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Vs(e) {
  var t = e._init;
  return t(e._payload);
}
function rd(e) {
  function t(f, p) {
    if (e) {
      var m = f.deletions;
      m === null ? ((f.deletions = [p]), (f.flags |= 16)) : m.push(p);
    }
  }
  function n(f, p) {
    if (!e) return null;
    for (; p !== null; ) t(f, p), (p = p.sibling);
    return null;
  }
  function r(f, p) {
    for (f = new Map(); p !== null; )
      p.key !== null ? f.set(p.key, p) : f.set(p.index, p), (p = p.sibling);
    return f;
  }
  function l(f, p) {
    return (f = fn(f, p)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, p, m) {
    return (
      (f.index = m),
      e
        ? ((m = f.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((f.flags |= 2), p) : m)
            : ((f.flags |= 2), p))
        : ((f.flags |= 1048576), p)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, p, m, C) {
    return p === null || p.tag !== 6
      ? ((p = $i(m, f.mode, C)), (p.return = f), p)
      : ((p = l(p, m)), (p.return = f), p);
  }
  function u(f, p, m, C) {
    var R = m.type;
    return R === Xn
      ? c(f, p, m.props.children, C, m.key)
      : p !== null &&
        (p.elementType === R ||
          (typeof R == "object" &&
            R !== null &&
            R.$$typeof === Gt &&
            Vs(R) === p.type))
      ? ((C = l(p, m.props)), (C.ref = jr(f, p, m)), (C.return = f), C)
      : ((C = so(m.type, m.key, m.props, null, f.mode, C)),
        (C.ref = jr(f, p, m)),
        (C.return = f),
        C);
  }
  function s(f, p, m, C) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = Ui(m, f.mode, C)), (p.return = f), p)
      : ((p = l(p, m.children || [])), (p.return = f), p);
  }
  function c(f, p, m, C, R) {
    return p === null || p.tag !== 7
      ? ((p = Mn(m, f.mode, C, R)), (p.return = f), p)
      : ((p = l(p, m)), (p.return = f), p);
  }
  function h(f, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = $i("" + p, f.mode, m)), (p.return = f), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case zl:
          return (
            (m = so(p.type, p.key, p.props, null, f.mode, m)),
            (m.ref = jr(f, null, p)),
            (m.return = f),
            m
          );
        case Yn:
          return (p = Ui(p, f.mode, m)), (p.return = f), p;
        case Gt:
          var C = p._init;
          return h(f, C(p._payload), m);
      }
      if (Ar(p) || Lr(p))
        return (p = Mn(p, f.mode, m, null)), (p.return = f), p;
      Ql(f, p);
    }
    return null;
  }
  function d(f, p, m, C) {
    var R = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return R !== null ? null : a(f, p, "" + m, C);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case zl:
          return m.key === R ? u(f, p, m, C) : null;
        case Yn:
          return m.key === R ? s(f, p, m, C) : null;
        case Gt:
          return (R = m._init), d(f, p, R(m._payload), C);
      }
      if (Ar(m) || Lr(m)) return R !== null ? null : c(f, p, m, C, null);
      Ql(f, m);
    }
    return null;
  }
  function g(f, p, m, C, R) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (f = f.get(m) || null), a(p, f, "" + C, R);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case zl:
          return (f = f.get(C.key === null ? m : C.key) || null), u(p, f, C, R);
        case Yn:
          return (f = f.get(C.key === null ? m : C.key) || null), s(p, f, C, R);
        case Gt:
          var y = C._init;
          return g(f, p, m, y(C._payload), R);
      }
      if (Ar(C) || Lr(C)) return (f = f.get(m) || null), c(p, f, C, R, null);
      Ql(p, C);
    }
    return null;
  }
  function S(f, p, m, C) {
    for (
      var R = null, y = null, _ = p, D = (p = 0), O = null;
      _ !== null && D < m.length;
      D++
    ) {
      _.index > D ? ((O = _), (_ = null)) : (O = _.sibling);
      var $ = d(f, _, m[D], C);
      if ($ === null) {
        _ === null && (_ = O);
        break;
      }
      e && _ && $.alternate === null && t(f, _),
        (p = o($, p, D)),
        y === null ? (R = $) : (y.sibling = $),
        (y = $),
        (_ = O);
    }
    if (D === m.length) return n(f, _), fe && Cn(f, D), R;
    if (_ === null) {
      for (; D < m.length; D++)
        (_ = h(f, m[D], C)),
          _ !== null &&
            ((p = o(_, p, D)), y === null ? (R = _) : (y.sibling = _), (y = _));
      return fe && Cn(f, D), R;
    }
    for (_ = r(f, _); D < m.length; D++)
      (O = g(_, f, D, m[D], C)),
        O !== null &&
          (e && O.alternate !== null && _.delete(O.key === null ? D : O.key),
          (p = o(O, p, D)),
          y === null ? (R = O) : (y.sibling = O),
          (y = O));
    return (
      e &&
        _.forEach(function (te) {
          return t(f, te);
        }),
      fe && Cn(f, D),
      R
    );
  }
  function k(f, p, m, C) {
    var R = Lr(m);
    if (typeof R != "function") throw Error(N(150));
    if (((m = R.call(m)), m == null)) throw Error(N(151));
    for (
      var y = (R = null), _ = p, D = (p = 0), O = null, $ = m.next();
      _ !== null && !$.done;
      D++, $ = m.next()
    ) {
      _.index > D ? ((O = _), (_ = null)) : (O = _.sibling);
      var te = d(f, _, $.value, C);
      if (te === null) {
        _ === null && (_ = O);
        break;
      }
      e && _ && te.alternate === null && t(f, _),
        (p = o(te, p, D)),
        y === null ? (R = te) : (y.sibling = te),
        (y = te),
        (_ = O);
    }
    if ($.done) return n(f, _), fe && Cn(f, D), R;
    if (_ === null) {
      for (; !$.done; D++, $ = m.next())
        ($ = h(f, $.value, C)),
          $ !== null &&
            ((p = o($, p, D)), y === null ? (R = $) : (y.sibling = $), (y = $));
      return fe && Cn(f, D), R;
    }
    for (_ = r(f, _); !$.done; D++, $ = m.next())
      ($ = g(_, f, D, $.value, C)),
        $ !== null &&
          (e && $.alternate !== null && _.delete($.key === null ? D : $.key),
          (p = o($, p, D)),
          y === null ? (R = $) : (y.sibling = $),
          (y = $));
    return (
      e &&
        _.forEach(function (ae) {
          return t(f, ae);
        }),
      fe && Cn(f, D),
      R
    );
  }
  function T(f, p, m, C) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Xn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case zl:
          e: {
            for (var R = m.key, y = p; y !== null; ) {
              if (y.key === R) {
                if (((R = m.type), R === Xn)) {
                  if (y.tag === 7) {
                    n(f, y.sibling),
                      (p = l(y, m.props.children)),
                      (p.return = f),
                      (f = p);
                    break e;
                  }
                } else if (
                  y.elementType === R ||
                  (typeof R == "object" &&
                    R !== null &&
                    R.$$typeof === Gt &&
                    Vs(R) === y.type)
                ) {
                  n(f, y.sibling),
                    (p = l(y, m.props)),
                    (p.ref = jr(f, y, m)),
                    (p.return = f),
                    (f = p);
                  break e;
                }
                n(f, y);
                break;
              } else t(f, y);
              y = y.sibling;
            }
            m.type === Xn
              ? ((p = Mn(m.props.children, f.mode, C, m.key)),
                (p.return = f),
                (f = p))
              : ((C = so(m.type, m.key, m.props, null, f.mode, C)),
                (C.ref = jr(f, p, m)),
                (C.return = f),
                (f = C));
          }
          return i(f);
        case Yn:
          e: {
            for (y = m.key; p !== null; ) {
              if (p.key === y)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(f, p.sibling),
                    (p = l(p, m.children || [])),
                    (p.return = f),
                    (f = p);
                  break e;
                } else {
                  n(f, p);
                  break;
                }
              else t(f, p);
              p = p.sibling;
            }
            (p = Ui(m, f.mode, C)), (p.return = f), (f = p);
          }
          return i(f);
        case Gt:
          return (y = m._init), T(f, p, y(m._payload), C);
      }
      if (Ar(m)) return S(f, p, m, C);
      if (Lr(m)) return k(f, p, m, C);
      Ql(f, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(f, p.sibling), (p = l(p, m)), (p.return = f), (f = p))
          : (n(f, p), (p = $i(m, f.mode, C)), (p.return = f), (f = p)),
        i(f))
      : n(f, p);
  }
  return T;
}
var mr = rd(!0),
  ld = rd(!1),
  Lo = vn(null),
  No = null,
  nr = null,
  fu = null;
function du() {
  fu = nr = No = null;
}
function pu(e) {
  var t = Lo.current;
  ce(Lo), (e._currentValue = t);
}
function xa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function sr(e, t) {
  (No = e),
    (fu = nr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (We = !0), (e.firstContext = null));
}
function ct(e) {
  var t = e._currentValue;
  if (fu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), nr === null)) {
      if (No === null) throw Error(N(308));
      (nr = e), (No.dependencies = { lanes: 0, firstContext: e });
    } else nr = nr.next = e;
  return t;
}
var Ln = null;
function hu(e) {
  Ln === null ? (Ln = [e]) : Ln.push(e);
}
function od(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), hu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    $t(e, r)
  );
}
function $t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Jt = !1;
function mu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function id(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ot(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), q & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      $t(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), hu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    $t(e, n)
  );
}
function ro(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), eu(e, n);
  }
}
function Ws(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function To(e, t, n, r) {
  var l = e.updateQueue;
  Jt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== i &&
        (a === null ? (c.firstBaseUpdate = s) : (a.next = s),
        (c.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (c = s = u = null), (a = o);
    do {
      var d = a.lane,
        g = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var S = e,
            k = a;
          switch (((d = t), (g = n), k.tag)) {
            case 1:
              if (((S = k.payload), typeof S == "function")) {
                h = S.call(g, h, d);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = k.payload),
                (d = typeof S == "function" ? S.call(g, h, d) : S),
                d == null)
              )
                break e;
              h = me({}, h, d);
              break e;
            case 2:
              Jt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = l.effects),
          d === null ? (l.effects = [a]) : d.push(a));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((s = c = g), (u = h)) : (c = c.next = g),
          (i |= d);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (l.lastBaseUpdate = d),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = h),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = c),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Fn |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function Qs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var Cl = {},
  Rt = vn(Cl),
  dl = vn(Cl),
  pl = vn(Cl);
function Nn(e) {
  if (e === Cl) throw Error(N(174));
  return e;
}
function vu(e, t) {
  switch ((ie(pl, t), ie(dl, e), ie(Rt, Cl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ta(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ta(t, e));
  }
  ce(Rt), ie(Rt, t);
}
function vr() {
  ce(Rt), ce(dl), ce(pl);
}
function ad(e) {
  Nn(pl.current);
  var t = Nn(Rt.current),
    n = ta(t, e.type);
  t !== n && (ie(dl, e), ie(Rt, n));
}
function yu(e) {
  dl.current === e && (ce(Rt), ce(dl));
}
var pe = vn(0);
function Do(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Mi = [];
function gu() {
  for (var e = 0; e < Mi.length; e++)
    Mi[e]._workInProgressVersionPrimary = null;
  Mi.length = 0;
}
var lo = At.ReactCurrentDispatcher,
  ji = At.ReactCurrentBatchConfig,
  On = 0,
  he = null,
  Pe = null,
  _e = null,
  Mo = !1,
  Zr = !1,
  hl = 0,
  Hm = 0;
function je() {
  throw Error(N(321));
}
function wu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!St(e[n], t[n])) return !1;
  return !0;
}
function Su(e, t, n, r, l, o) {
  if (
    ((On = o),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (lo.current = e === null || e.memoizedState === null ? Km : Ym),
    (e = n(r, l)),
    Zr)
  ) {
    o = 0;
    do {
      if (((Zr = !1), (hl = 0), 25 <= o)) throw Error(N(301));
      (o += 1),
        (_e = Pe = null),
        (t.updateQueue = null),
        (lo.current = Xm),
        (e = n(r, l));
    } while (Zr);
  }
  if (
    ((lo.current = jo),
    (t = Pe !== null && Pe.next !== null),
    (On = 0),
    (_e = Pe = he = null),
    (Mo = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function xu() {
  var e = hl !== 0;
  return (hl = 0), e;
}
function kt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return _e === null ? (he.memoizedState = _e = e) : (_e = _e.next = e), _e;
}
function ft() {
  if (Pe === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Pe.next;
  var t = _e === null ? he.memoizedState : _e.next;
  if (t !== null) (_e = t), (Pe = e);
  else {
    if (e === null) throw Error(N(310));
    (Pe = e),
      (e = {
        memoizedState: Pe.memoizedState,
        baseState: Pe.baseState,
        baseQueue: Pe.baseQueue,
        queue: Pe.queue,
        next: null,
      }),
      _e === null ? (he.memoizedState = _e = e) : (_e = _e.next = e);
  }
  return _e;
}
function ml(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zi(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = Pe,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      s = o;
    do {
      var c = s.lane;
      if ((On & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var h = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = h), (i = r)) : (u = u.next = h),
          (he.lanes |= c),
          (Fn |= c);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (i = r) : (u.next = a),
      St(r, t.memoizedState) || (We = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (he.lanes |= o), (Fn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Oi(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    St(o, t.memoizedState) || (We = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function ud() {}
function sd(e, t) {
  var n = he,
    r = ft(),
    l = t(),
    o = !St(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (We = !0)),
    (r = r.queue),
    Eu(dd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (_e !== null && _e.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      vl(9, fd.bind(null, n, r, l, t), void 0, null),
      Le === null)
    )
      throw Error(N(349));
    On & 30 || cd(n, t, l);
  }
  return l;
}
function cd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function fd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), pd(t) && hd(e);
}
function dd(e, t, n) {
  return n(function () {
    pd(t) && hd(e);
  });
}
function pd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function hd(e) {
  var t = $t(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function Ks(e) {
  var t = kt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ml,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Qm.bind(null, he, e)),
    [t.memoizedState, e]
  );
}
function vl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function md() {
  return ft().memoizedState;
}
function oo(e, t, n, r) {
  var l = kt();
  (he.flags |= e),
    (l.memoizedState = vl(1 | t, n, void 0, r === void 0 ? null : r));
}
function qo(e, t, n, r) {
  var l = ft();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Pe !== null) {
    var i = Pe.memoizedState;
    if (((o = i.destroy), r !== null && wu(r, i.deps))) {
      l.memoizedState = vl(t, n, o, r);
      return;
    }
  }
  (he.flags |= e), (l.memoizedState = vl(1 | t, n, o, r));
}
function Ys(e, t) {
  return oo(8390656, 8, e, t);
}
function Eu(e, t) {
  return qo(2048, 8, e, t);
}
function vd(e, t) {
  return qo(4, 2, e, t);
}
function yd(e, t) {
  return qo(4, 4, e, t);
}
function gd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function wd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), qo(4, 4, gd.bind(null, t, e), n)
  );
}
function ku() {}
function Sd(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function xd(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ed(e, t, n) {
  return On & 21
    ? (St(n, t) || ((n = _f()), (he.lanes |= n), (Fn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (We = !0)), (e.memoizedState = n));
}
function Vm(e, t) {
  var n = ne;
  (ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ji.transition;
  ji.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = n), (ji.transition = r);
  }
}
function kd() {
  return ft().memoizedState;
}
function Wm(e, t, n) {
  var r = cn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Cd(e))
  )
    Pd(t, n);
  else if (((n = od(e, t, n, r)), n !== null)) {
    var l = Ae();
    wt(n, e, r, l), Rd(n, t, r);
  }
}
function Qm(e, t, n) {
  var r = cn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cd(e)) Pd(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), St(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), hu(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = od(e, t, l, r)),
      n !== null && ((l = Ae()), wt(n, e, r, l), Rd(n, t, r));
  }
}
function Cd(e) {
  var t = e.alternate;
  return e === he || (t !== null && t === he);
}
function Pd(e, t) {
  Zr = Mo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Rd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), eu(e, n);
  }
}
var jo = {
    readContext: ct,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useInsertionEffect: je,
    useLayoutEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useMutableSource: je,
    useSyncExternalStore: je,
    useId: je,
    unstable_isNewReconciler: !1,
  },
  Km = {
    readContext: ct,
    useCallback: function (e, t) {
      return (kt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ct,
    useEffect: Ys,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        oo(4194308, 4, gd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return oo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return oo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = kt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = kt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Wm.bind(null, he, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = kt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ks,
    useDebugValue: ku,
    useDeferredValue: function (e) {
      return (kt().memoizedState = e);
    },
    useTransition: function () {
      var e = Ks(!1),
        t = e[0];
      return (e = Vm.bind(null, e[1])), (kt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = he,
        l = kt();
      if (fe) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), Le === null)) throw Error(N(349));
        On & 30 || cd(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Ys(dd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        vl(9, fd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = kt(),
        t = Le.identifierPrefix;
      if (fe) {
        var n = zt,
          r = jt;
        (n = (r & ~(1 << (32 - gt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = hl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Hm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ym = {
    readContext: ct,
    useCallback: Sd,
    useContext: ct,
    useEffect: Eu,
    useImperativeHandle: wd,
    useInsertionEffect: vd,
    useLayoutEffect: yd,
    useMemo: xd,
    useReducer: zi,
    useRef: md,
    useState: function () {
      return zi(ml);
    },
    useDebugValue: ku,
    useDeferredValue: function (e) {
      var t = ft();
      return Ed(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = zi(ml)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: ud,
    useSyncExternalStore: sd,
    useId: kd,
    unstable_isNewReconciler: !1,
  },
  Xm = {
    readContext: ct,
    useCallback: Sd,
    useContext: ct,
    useEffect: Eu,
    useImperativeHandle: wd,
    useInsertionEffect: vd,
    useLayoutEffect: yd,
    useMemo: xd,
    useReducer: Oi,
    useRef: md,
    useState: function () {
      return Oi(ml);
    },
    useDebugValue: ku,
    useDeferredValue: function (e) {
      var t = ft();
      return Pe === null ? (t.memoizedState = e) : Ed(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Oi(ml)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: ud,
    useSyncExternalStore: sd,
    useId: kd,
    unstable_isNewReconciler: !1,
  };
function ht(e, t) {
  if (e && e.defaultProps) {
    (t = me({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ea(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Un(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      l = cn(e),
      o = Ot(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = un(e, o, l)),
      t !== null && (wt(t, e, l, r), ro(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      l = cn(e),
      o = Ot(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = un(e, o, l)),
      t !== null && (wt(t, e, l, r), ro(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ae(),
      r = cn(e),
      l = Ot(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = un(e, l, r)),
      t !== null && (wt(t, e, r, n), ro(t, e, r));
  },
};
function Xs(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ul(n, r) || !ul(l, o)
      : !0
  );
}
function _d(e, t, n) {
  var r = !1,
    l = pn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ct(o))
      : ((l = Ke(t) ? jn : Fe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? pr(e, l) : pn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = bo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Gs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && bo.enqueueReplaceState(t, t.state, null);
}
function ka(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), mu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = ct(o))
    : ((o = Ke(t) ? jn : Fe.current), (l.context = pr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ea(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && bo.enqueueReplaceState(l, l.state, null),
      To(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function yr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Eh(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Fi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ca(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Gm = typeof WeakMap == "function" ? WeakMap : Map;
function Ld(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Oo || ((Oo = !0), (za = r)), Ca(e, t);
    }),
    n
  );
}
function Nd(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ca(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ca(e, t),
          typeof r != "function" &&
            (sn === null ? (sn = new Set([this])) : sn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Js(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = sv.bind(null, e, t, n)), t.then(e, e));
}
function Zs(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function qs(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ot(-1, 1)), (t.tag = 2), un(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Jm = At.ReactCurrentOwner,
  We = !1;
function Ue(e, t, n, r) {
  t.child = e === null ? ld(t, null, n, r) : mr(t, e.child, n, r);
}
function bs(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    sr(t, l),
    (r = Su(e, t, n, r, o, l)),
    (n = xu()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ut(e, t, l))
      : (fe && n && uu(t), (t.flags |= 1), Ue(e, t, r, l), t.child)
  );
}
function ec(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Du(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Td(e, t, o, r, l))
      : ((e = so(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ul), n(i, r) && e.ref === t.ref)
    )
      return Ut(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = fn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Td(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ul(o, r) && e.ref === t.ref)
      if (((We = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (We = !0);
      else return (t.lanes = e.lanes), Ut(e, t, l);
  }
  return Pa(e, t, n, r, l);
}
function Dd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ie(lr, Ge),
        (Ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ie(lr, Ge),
          (Ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ie(lr, Ge),
        (Ge |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ie(lr, Ge),
      (Ge |= r);
  return Ue(e, t, l, n), t.child;
}
function Md(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Pa(e, t, n, r, l) {
  var o = Ke(n) ? jn : Fe.current;
  return (
    (o = pr(t, o)),
    sr(t, l),
    (n = Su(e, t, n, r, o, l)),
    (r = xu()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ut(e, t, l))
      : (fe && r && uu(t), (t.flags |= 1), Ue(e, t, n, l), t.child)
  );
}
function tc(e, t, n, r, l) {
  if (Ke(n)) {
    var o = !0;
    Po(t);
  } else o = !1;
  if ((sr(t, l), t.stateNode === null))
    io(e, t), _d(t, n, r), ka(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = ct(s))
      : ((s = Ke(n) ? jn : Fe.current), (s = pr(t, s)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && Gs(t, i, r, s)),
      (Jt = !1);
    var d = t.memoizedState;
    (i.state = d),
      To(t, r, i, l),
      (u = t.memoizedState),
      a !== r || d !== u || Qe.current || Jt
        ? (typeof c == "function" && (Ea(t, n, c, r), (u = t.memoizedState)),
          (a = Jt || Xs(t, n, a, r, d, u, s))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      id(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : ht(t.type, a)),
      (i.props = s),
      (h = t.pendingProps),
      (d = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = ct(u))
        : ((u = Ke(n) ? jn : Fe.current), (u = pr(t, u)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== h || d !== u) && Gs(t, i, r, u)),
      (Jt = !1),
      (d = t.memoizedState),
      (i.state = d),
      To(t, r, i, l);
    var S = t.memoizedState;
    a !== h || d !== S || Qe.current || Jt
      ? (typeof g == "function" && (Ea(t, n, g, r), (S = t.memoizedState)),
        (s = Jt || Xs(t, n, s, r, d, S, u) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, S, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, S, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = u),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ra(e, t, n, r, o, l);
}
function Ra(e, t, n, r, l, o) {
  Md(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && As(t, n, !1), Ut(e, t, o);
  (r = t.stateNode), (Jm.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = mr(t, e.child, null, o)), (t.child = mr(t, null, a, o)))
      : Ue(e, t, a, o),
    (t.memoizedState = r.state),
    l && As(t, n, !0),
    t.child
  );
}
function jd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Us(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Us(e, t.context, !1),
    vu(e, t.containerInfo);
}
function nc(e, t, n, r, l) {
  return hr(), cu(l), (t.flags |= 256), Ue(e, t, n, r), t.child;
}
var _a = { dehydrated: null, treeContext: null, retryLane: 0 };
function La(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function zd(e, t, n) {
  var r = t.pendingProps,
    l = pe.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    ie(pe, l & 1),
    e === null)
  )
    return (
      Sa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = ni(i, r, 0, null)),
              (e = Mn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = La(n)),
              (t.memoizedState = _a),
              e)
            : Cu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Zm(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = fn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = fn(a, o)) : ((o = Mn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? La(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = _a),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = fn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Cu(e, t) {
  return (
    (t = ni({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Kl(e, t, n, r) {
  return (
    r !== null && cu(r),
    mr(t, e.child, null, n),
    (e = Cu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Zm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Fi(Error(N(422)))), Kl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = ni({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Mn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && mr(t, e.child, null, i),
        (t.child.memoizedState = La(i)),
        (t.memoizedState = _a),
        o);
  if (!(t.mode & 1)) return Kl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(N(419))), (r = Fi(o, r, void 0)), Kl(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), We || a)) {
    if (((r = Le), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), $t(e, l), wt(r, e, l, -1));
    }
    return Tu(), (r = Fi(Error(N(421)))), Kl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = cv.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (qe = an(l.nextSibling)),
      (be = t),
      (fe = !0),
      (yt = null),
      e !== null &&
        ((it[at++] = jt),
        (it[at++] = zt),
        (it[at++] = zn),
        (jt = e.id),
        (zt = e.overflow),
        (zn = t)),
      (t = Cu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function rc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), xa(e.return, t, n);
}
function Ii(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Od(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Ue(e, t, r.children, n), (r = pe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && rc(e, n, t);
        else if (e.tag === 19) rc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ie(pe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Do(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Ii(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Do(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Ii(t, !0, n, null, o);
        break;
      case "together":
        Ii(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function io(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ut(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Fn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = fn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function qm(e, t, n) {
  switch (t.tag) {
    case 3:
      jd(t), hr();
      break;
    case 5:
      ad(t);
      break;
    case 1:
      Ke(t.type) && Po(t);
      break;
    case 4:
      vu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      ie(Lo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ie(pe, pe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? zd(e, t, n)
          : (ie(pe, pe.current & 1),
            (e = Ut(e, t, n)),
            e !== null ? e.sibling : null);
      ie(pe, pe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Od(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ie(pe, pe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Dd(e, t, n);
  }
  return Ut(e, t, n);
}
var Fd, Na, Id, $d;
Fd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Na = function () {};
Id = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Nn(Rt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Zi(e, l)), (r = Zi(e, r)), (o = []);
        break;
      case "select":
        (l = me({}, l, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = ea(e, l)), (r = ea(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ko);
    }
    na(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (tl.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (tl.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && se("scroll", e),
                  o || a === u || (o = []))
                : (o = o || []).push(s, u));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
$d = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function zr(e, t) {
  if (!fe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ze(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bm(e, t, n) {
  var r = t.pendingProps;
  switch ((su(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ze(t), null;
    case 1:
      return Ke(t.type) && Co(), ze(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vr(),
        ce(Qe),
        ce(Fe),
        gu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Wl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), yt !== null && (Ia(yt), (yt = null)))),
        Na(e, t),
        ze(t),
        null
      );
    case 5:
      yu(t);
      var l = Nn(pl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Id(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return ze(t), null;
        }
        if (((e = Nn(Rt.current)), Wl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ct] = t), (r[fl] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Hr.length; l++) se(Hr[l], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se("error", r), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              ds(r, o), se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                se("invalid", r);
              break;
            case "textarea":
              hs(r, o), se("invalid", r);
          }
          na(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Vl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Vl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : tl.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              Ol(r), ps(r, o, !0);
              break;
            case "textarea":
              Ol(r), ms(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ko);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = df(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ct] = t),
            (e[fl] = r),
            Fd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ra(n, r)), n)) {
              case "dialog":
                se("cancel", e), se("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Hr.length; l++) se(Hr[l], e);
                l = r;
                break;
              case "source":
                se("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                se("error", e), se("load", e), (l = r);
                break;
              case "details":
                se("toggle", e), (l = r);
                break;
              case "input":
                ds(e, r), (l = Zi(e, r)), se("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = me({}, r, { value: void 0 })),
                  se("invalid", e);
                break;
              case "textarea":
                hs(e, r), (l = ea(e, r)), se("invalid", e);
                break;
              default:
                l = r;
            }
            na(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? mf(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && pf(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && nl(e, u)
                    : typeof u == "number" && nl(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (tl.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && se("scroll", e)
                      : u != null && Xa(e, o, u, i));
              }
            switch (n) {
              case "input":
                Ol(e), ps(e, r, !1);
                break;
              case "textarea":
                Ol(e), ms(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? or(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      or(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ko);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ze(t), null;
    case 6:
      if (e && t.stateNode != null) $d(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = Nn(pl.current)), Nn(Rt.current), Wl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ct] = t),
            (o = r.nodeValue !== n) && ((e = be), e !== null))
          )
            switch (e.tag) {
              case 3:
                Vl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Vl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ct] = t),
            (t.stateNode = r);
      }
      return ze(t), null;
    case 13:
      if (
        (ce(pe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (fe && qe !== null && t.mode & 1 && !(t.flags & 128))
          nd(), hr(), (t.flags |= 98560), (o = !1);
        else if (((o = Wl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[Ct] = t;
          } else
            hr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ze(t), (o = !1);
        } else yt !== null && (Ia(yt), (yt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || pe.current & 1 ? Re === 0 && (Re = 3) : Tu())),
          t.updateQueue !== null && (t.flags |= 4),
          ze(t),
          null);
    case 4:
      return (
        vr(), Na(e, t), e === null && sl(t.stateNode.containerInfo), ze(t), null
      );
    case 10:
      return pu(t.type._context), ze(t), null;
    case 17:
      return Ke(t.type) && Co(), ze(t), null;
    case 19:
      if ((ce(pe), (o = t.memoizedState), o === null)) return ze(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) zr(o, !1);
        else {
          if (Re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Do(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    zr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ie(pe, (pe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            we() > gr &&
            ((t.flags |= 128), (r = !0), zr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Do(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              zr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !fe)
            )
              return ze(t), null;
          } else
            2 * we() - o.renderingStartTime > gr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), zr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = we()),
          (t.sibling = null),
          (n = pe.current),
          ie(pe, r ? (n & 1) | 2 : n & 1),
          t)
        : (ze(t), null);
    case 22:
    case 23:
      return (
        Nu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ge & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ze(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function ev(e, t) {
  switch ((su(t), t.tag)) {
    case 1:
      return (
        Ke(t.type) && Co(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vr(),
        ce(Qe),
        ce(Fe),
        gu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return yu(t), null;
    case 13:
      if (
        (ce(pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        hr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ce(pe), null;
    case 4:
      return vr(), null;
    case 10:
      return pu(t.type._context), null;
    case 22:
    case 23:
      return Nu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yl = !1,
  Oe = !1,
  tv = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function rr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ye(e, t, r);
      }
    else n.current = null;
}
function Ta(e, t, n) {
  try {
    n();
  } catch (r) {
    ye(e, t, r);
  }
}
var lc = !1;
function nv(e, t) {
  if (((pa = So), (e = Vf()), au(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            s = 0,
            c = 0,
            h = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (l !== 0 && h.nodeType !== 3) || (a = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (u = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (d = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (d === n && ++s === l && (a = i),
                d === o && ++c === r && (u = i),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = g;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ha = { focusedElem: e, selectionRange: n }, So = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var k = S.memoizedProps,
                    T = S.memoizedState,
                    f = t.stateNode,
                    p = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : ht(t.type, k),
                      T
                    );
                  f.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (C) {
          ye(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (S = lc), (lc = !1), S;
}
function qr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ta(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ei(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Da(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ud(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ud(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ct], delete t[fl], delete t[ya], delete t[$m], delete t[Um])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ad(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function oc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ad(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ma(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ko));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ma(e, t, n), e = e.sibling; e !== null; ) Ma(e, t, n), (e = e.sibling);
}
function ja(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ja(e, t, n), e = e.sibling; e !== null; ) ja(e, t, n), (e = e.sibling);
}
var Ne = null,
  vt = !1;
function Kt(e, t, n) {
  for (n = n.child; n !== null; ) Bd(e, t, n), (n = n.sibling);
}
function Bd(e, t, n) {
  if (Pt && typeof Pt.onCommitFiberUnmount == "function")
    try {
      Pt.onCommitFiberUnmount(Ko, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Oe || rr(n, t);
    case 6:
      var r = Ne,
        l = vt;
      (Ne = null),
        Kt(e, t, n),
        (Ne = r),
        (vt = l),
        Ne !== null &&
          (vt
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (vt
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ti(e.parentNode, n)
              : e.nodeType === 1 && Ti(e, n),
            il(e))
          : Ti(Ne, n.stateNode));
      break;
    case 4:
      (r = Ne),
        (l = vt),
        (Ne = n.stateNode.containerInfo),
        (vt = !0),
        Kt(e, t, n),
        (Ne = r),
        (vt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Ta(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Kt(e, t, n);
      break;
    case 1:
      if (
        !Oe &&
        (rr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ye(n, t, a);
        }
      Kt(e, t, n);
      break;
    case 21:
      Kt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Oe = (r = Oe) || n.memoizedState !== null), Kt(e, t, n), (Oe = r))
        : Kt(e, t, n);
      break;
    default:
      Kt(e, t, n);
  }
}
function ic(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new tv()),
      t.forEach(function (r) {
        var l = fv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function pt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ne = a.stateNode), (vt = !1);
              break e;
            case 3:
              (Ne = a.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              (Ne = a.stateNode.containerInfo), (vt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ne === null) throw Error(N(160));
        Bd(o, i, l), (Ne = null), (vt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        ye(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Hd(t, e), (t = t.sibling);
}
function Hd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pt(t, e), xt(e), r & 4)) {
        try {
          qr(3, e, e.return), ei(3, e);
        } catch (k) {
          ye(e, e.return, k);
        }
        try {
          qr(5, e, e.return);
        } catch (k) {
          ye(e, e.return, k);
        }
      }
      break;
    case 1:
      pt(t, e), xt(e), r & 512 && n !== null && rr(n, n.return);
      break;
    case 5:
      if (
        (pt(t, e),
        xt(e),
        r & 512 && n !== null && rr(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          nl(l, "");
        } catch (k) {
          ye(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && cf(l, o),
              ra(a, i);
            var s = ra(a, o);
            for (i = 0; i < u.length; i += 2) {
              var c = u[i],
                h = u[i + 1];
              c === "style"
                ? mf(l, h)
                : c === "dangerouslySetInnerHTML"
                ? pf(l, h)
                : c === "children"
                ? nl(l, h)
                : Xa(l, c, h, s);
            }
            switch (a) {
              case "input":
                qi(l, o);
                break;
              case "textarea":
                ff(l, o);
                break;
              case "select":
                var d = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? or(l, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? or(l, !!o.multiple, o.defaultValue, !0)
                      : or(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[fl] = o;
          } catch (k) {
            ye(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((pt(t, e), xt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (k) {
          ye(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (pt(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          il(t.containerInfo);
        } catch (k) {
          ye(e, e.return, k);
        }
      break;
    case 4:
      pt(t, e), xt(e);
      break;
    case 13:
      pt(t, e),
        xt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (_u = we())),
        r & 4 && ic(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Oe = (s = Oe) || c), pt(t, e), (Oe = s)) : pt(t, e),
        xt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (z = e, c = e.child; c !== null; ) {
            for (h = z = c; z !== null; ) {
              switch (((d = z), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qr(4, d, d.return);
                  break;
                case 1:
                  rr(d, d.return);
                  var S = d.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (k) {
                      ye(r, n, k);
                    }
                  }
                  break;
                case 5:
                  rr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    uc(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (z = g)) : uc(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (l = h.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = h.stateNode),
                      (u = h.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = hf("display", i)));
              } catch (k) {
                ye(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = s ? "" : h.memoizedProps;
              } catch (k) {
                ye(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      pt(t, e), xt(e), r & 4 && ic(e);
      break;
    case 21:
      break;
    default:
      pt(t, e), xt(e);
  }
}
function xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ad(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (nl(l, ""), (r.flags &= -33));
          var o = oc(e);
          ja(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = oc(e);
          Ma(e, a, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      ye(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rv(e, t, n) {
  (z = e), Vd(e);
}
function Vd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Yl;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Oe;
        a = Yl;
        var s = Oe;
        if (((Yl = i), (Oe = u) && !s))
          for (z = l; z !== null; )
            (i = z),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? sc(l)
                : u !== null
                ? ((u.return = i), (z = u))
                : sc(l);
        for (; o !== null; ) (z = o), Vd(o), (o = o.sibling);
        (z = l), (Yl = a), (Oe = s);
      }
      ac(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (z = o)) : ac(e);
  }
}
function ac(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Oe || ei(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Oe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ht(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Qs(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Qs(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && il(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        Oe || (t.flags & 512 && Da(t));
      } catch (d) {
        ye(t, t.return, d);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function uc(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function sc(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ei(4, t);
          } catch (u) {
            ye(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ye(t, l, u);
            }
          }
          var o = t.return;
          try {
            Da(t);
          } catch (u) {
            ye(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Da(t);
          } catch (u) {
            ye(t, i, u);
          }
      }
    } catch (u) {
      ye(t, t.return, u);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (z = a);
      break;
    }
    z = t.return;
  }
}
var lv = Math.ceil,
  zo = At.ReactCurrentDispatcher,
  Pu = At.ReactCurrentOwner,
  st = At.ReactCurrentBatchConfig,
  q = 0,
  Le = null,
  xe = null,
  Te = 0,
  Ge = 0,
  lr = vn(0),
  Re = 0,
  yl = null,
  Fn = 0,
  ti = 0,
  Ru = 0,
  br = null,
  Ve = null,
  _u = 0,
  gr = 1 / 0,
  Dt = null,
  Oo = !1,
  za = null,
  sn = null,
  Xl = !1,
  tn = null,
  Fo = 0,
  el = 0,
  Oa = null,
  ao = -1,
  uo = 0;
function Ae() {
  return q & 6 ? we() : ao !== -1 ? ao : (ao = we());
}
function cn(e) {
  return e.mode & 1
    ? q & 2 && Te !== 0
      ? Te & -Te
      : Bm.transition !== null
      ? (uo === 0 && (uo = _f()), uo)
      : ((e = ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : zf(e.type))),
        e)
    : 1;
}
function wt(e, t, n, r) {
  if (50 < el) throw ((el = 0), (Oa = null), Error(N(185)));
  xl(e, n, r),
    (!(q & 2) || e !== Le) &&
      (e === Le && (!(q & 2) && (ti |= n), Re === 4 && qt(e, Te)),
      Ye(e, r),
      n === 1 && q === 0 && !(t.mode & 1) && ((gr = we() + 500), Zo && yn()));
}
function Ye(e, t) {
  var n = e.callbackNode;
  Bh(e, t);
  var r = wo(e, e === Le ? Te : 0);
  if (r === 0)
    n !== null && gs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && gs(n), t === 1))
      e.tag === 0 ? Am(cc.bind(null, e)) : bf(cc.bind(null, e)),
        Fm(function () {
          !(q & 6) && yn();
        }),
        (n = null);
    else {
      switch (Lf(r)) {
        case 1:
          n = ba;
          break;
        case 4:
          n = Pf;
          break;
        case 16:
          n = go;
          break;
        case 536870912:
          n = Rf;
          break;
        default:
          n = go;
      }
      n = Zd(n, Wd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Wd(e, t) {
  if (((ao = -1), (uo = 0), q & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (cr() && e.callbackNode !== n) return null;
  var r = wo(e, e === Le ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Io(e, r);
  else {
    t = r;
    var l = q;
    q |= 2;
    var o = Kd();
    (Le !== e || Te !== t) && ((Dt = null), (gr = we() + 500), Dn(e, t));
    do
      try {
        av();
        break;
      } catch (a) {
        Qd(e, a);
      }
    while (!0);
    du(),
      (zo.current = o),
      (q = l),
      xe !== null ? (t = 0) : ((Le = null), (Te = 0), (t = Re));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ua(e)), l !== 0 && ((r = l), (t = Fa(e, l)))), t === 1)
    )
      throw ((n = yl), Dn(e, 0), qt(e, r), Ye(e, we()), n);
    if (t === 6) qt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !ov(l) &&
          ((t = Io(e, r)),
          t === 2 && ((o = ua(e)), o !== 0 && ((r = o), (t = Fa(e, o)))),
          t === 1))
      )
        throw ((n = yl), Dn(e, 0), qt(e, r), Ye(e, we()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Pn(e, Ve, Dt);
          break;
        case 3:
          if (
            (qt(e, r), (r & 130023424) === r && ((t = _u + 500 - we()), 10 < t))
          ) {
            if (wo(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = va(Pn.bind(null, e, Ve, Dt), t);
            break;
          }
          Pn(e, Ve, Dt);
          break;
        case 4:
          if ((qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - gt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = we() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * lv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = va(Pn.bind(null, e, Ve, Dt), r);
            break;
          }
          Pn(e, Ve, Dt);
          break;
        case 5:
          Pn(e, Ve, Dt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Ye(e, we()), e.callbackNode === n ? Wd.bind(null, e) : null;
}
function Fa(e, t) {
  var n = br;
  return (
    e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256),
    (e = Io(e, t)),
    e !== 2 && ((t = Ve), (Ve = n), t !== null && Ia(t)),
    e
  );
}
function Ia(e) {
  Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
}
function ov(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!St(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function qt(e, t) {
  for (
    t &= ~Ru,
      t &= ~ti,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - gt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function cc(e) {
  if (q & 6) throw Error(N(327));
  cr();
  var t = wo(e, 0);
  if (!(t & 1)) return Ye(e, we()), null;
  var n = Io(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ua(e);
    r !== 0 && ((t = r), (n = Fa(e, r)));
  }
  if (n === 1) throw ((n = yl), Dn(e, 0), qt(e, t), Ye(e, we()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Pn(e, Ve, Dt),
    Ye(e, we()),
    null
  );
}
function Lu(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    (q = n), q === 0 && ((gr = we() + 500), Zo && yn());
  }
}
function In(e) {
  tn !== null && tn.tag === 0 && !(q & 6) && cr();
  var t = q;
  q |= 1;
  var n = st.transition,
    r = ne;
  try {
    if (((st.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = r), (st.transition = n), (q = t), !(q & 6) && yn();
  }
}
function Nu() {
  (Ge = lr.current), ce(lr);
}
function Dn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Om(n)), xe !== null))
    for (n = xe.return; n !== null; ) {
      var r = n;
      switch ((su(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Co();
          break;
        case 3:
          vr(), ce(Qe), ce(Fe), gu();
          break;
        case 5:
          yu(r);
          break;
        case 4:
          vr();
          break;
        case 13:
          ce(pe);
          break;
        case 19:
          ce(pe);
          break;
        case 10:
          pu(r.type._context);
          break;
        case 22:
        case 23:
          Nu();
      }
      n = n.return;
    }
  if (
    ((Le = e),
    (xe = e = fn(e.current, null)),
    (Te = Ge = t),
    (Re = 0),
    (yl = null),
    (Ru = ti = Fn = 0),
    (Ve = br = null),
    Ln !== null)
  ) {
    for (t = 0; t < Ln.length; t++)
      if (((n = Ln[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Ln = null;
  }
  return e;
}
function Qd(e, t) {
  do {
    var n = xe;
    try {
      if ((du(), (lo.current = jo), Mo)) {
        for (var r = he.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Mo = !1;
      }
      if (
        ((On = 0),
        (_e = Pe = he = null),
        (Zr = !1),
        (hl = 0),
        (Pu.current = null),
        n === null || n.return === null)
      ) {
        (Re = 1), (yl = t), (xe = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = Te),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            c = a,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Zs(i);
          if (g !== null) {
            (g.flags &= -257),
              qs(g, i, a, o, t),
              g.mode & 1 && Js(o, s, t),
              (t = g),
              (u = s);
            var S = t.updateQueue;
            if (S === null) {
              var k = new Set();
              k.add(u), (t.updateQueue = k);
            } else S.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Js(o, s, t), Tu();
              break e;
            }
            u = Error(N(426));
          }
        } else if (fe && a.mode & 1) {
          var T = Zs(i);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              qs(T, i, a, o, t),
              cu(yr(u, a));
            break e;
          }
        }
        (o = u = yr(u, a)),
          Re !== 4 && (Re = 2),
          br === null ? (br = [o]) : br.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Ld(o, u, t);
              Ws(o, f);
              break e;
            case 1:
              a = u;
              var p = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (sn === null || !sn.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var C = Nd(o, a, t);
                Ws(o, C);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Xd(n);
    } catch (R) {
      (t = R), xe === n && n !== null && (xe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Kd() {
  var e = zo.current;
  return (zo.current = jo), e === null ? jo : e;
}
function Tu() {
  (Re === 0 || Re === 3 || Re === 2) && (Re = 4),
    Le === null || (!(Fn & 268435455) && !(ti & 268435455)) || qt(Le, Te);
}
function Io(e, t) {
  var n = q;
  q |= 2;
  var r = Kd();
  (Le !== e || Te !== t) && ((Dt = null), Dn(e, t));
  do
    try {
      iv();
      break;
    } catch (l) {
      Qd(e, l);
    }
  while (!0);
  if ((du(), (q = n), (zo.current = r), xe !== null)) throw Error(N(261));
  return (Le = null), (Te = 0), Re;
}
function iv() {
  for (; xe !== null; ) Yd(xe);
}
function av() {
  for (; xe !== null && !Mh(); ) Yd(xe);
}
function Yd(e) {
  var t = Jd(e.alternate, e, Ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? Xd(e) : (xe = t),
    (Pu.current = null);
}
function Xd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ev(n, t)), n !== null)) {
        (n.flags &= 32767), (xe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Re = 6), (xe = null);
        return;
      }
    } else if (((n = bm(n, t, Ge)), n !== null)) {
      xe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      xe = t;
      return;
    }
    xe = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function Pn(e, t, n) {
  var r = ne,
    l = st.transition;
  try {
    (st.transition = null), (ne = 1), uv(e, t, n, r);
  } finally {
    (st.transition = l), (ne = r);
  }
  return null;
}
function uv(e, t, n, r) {
  do cr();
  while (tn !== null);
  if (q & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Hh(e, o),
    e === Le && ((xe = Le = null), (Te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Xl ||
      ((Xl = !0),
      Zd(go, function () {
        return cr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = st.transition), (st.transition = null);
    var i = ne;
    ne = 1;
    var a = q;
    (q |= 4),
      (Pu.current = null),
      nv(e, n),
      Hd(n, e),
      Lm(ha),
      (So = !!pa),
      (ha = pa = null),
      (e.current = n),
      rv(n),
      jh(),
      (q = a),
      (ne = i),
      (st.transition = o);
  } else e.current = n;
  if (
    (Xl && ((Xl = !1), (tn = e), (Fo = l)),
    (o = e.pendingLanes),
    o === 0 && (sn = null),
    Fh(n.stateNode),
    Ye(e, we()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Oo) throw ((Oo = !1), (e = za), (za = null), e);
  return (
    Fo & 1 && e.tag !== 0 && cr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Oa ? el++ : ((el = 0), (Oa = e))) : (el = 0),
    yn(),
    null
  );
}
function cr() {
  if (tn !== null) {
    var e = Lf(Fo),
      t = st.transition,
      n = ne;
    try {
      if (((st.transition = null), (ne = 16 > e ? 16 : e), tn === null))
        var r = !1;
      else {
        if (((e = tn), (tn = null), (Fo = 0), q & 6)) throw Error(N(331));
        var l = q;
        for (q |= 4, z = e.current; z !== null; ) {
          var o = z,
            i = o.child;
          if (z.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (z = s; z !== null; ) {
                  var c = z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qr(8, c, o);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (z = h);
                  else
                    for (; z !== null; ) {
                      c = z;
                      var d = c.sibling,
                        g = c.return;
                      if ((Ud(c), c === s)) {
                        z = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (z = d);
                        break;
                      }
                      z = g;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var k = S.child;
                if (k !== null) {
                  S.child = null;
                  do {
                    var T = k.sibling;
                    (k.sibling = null), (k = T);
                  } while (k !== null);
                }
              }
              z = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (z = i);
          else
            e: for (; z !== null; ) {
              if (((o = z), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qr(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (z = f);
                break e;
              }
              z = o.return;
            }
        }
        var p = e.current;
        for (z = p; z !== null; ) {
          i = z;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (z = m);
          else
            e: for (i = p; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ei(9, a);
                  }
                } catch (R) {
                  ye(a, a.return, R);
                }
              if (a === i) {
                z = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (z = C);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((q = l), yn(), Pt && typeof Pt.onPostCommitFiberRoot == "function")
        )
          try {
            Pt.onPostCommitFiberRoot(Ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ne = n), (st.transition = t);
    }
  }
  return !1;
}
function fc(e, t, n) {
  (t = yr(n, t)),
    (t = Ld(e, t, 1)),
    (e = un(e, t, 1)),
    (t = Ae()),
    e !== null && (xl(e, 1, t), Ye(e, t));
}
function ye(e, t, n) {
  if (e.tag === 3) fc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        fc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (sn === null || !sn.has(r)))
        ) {
          (e = yr(n, e)),
            (e = Nd(t, e, 1)),
            (t = un(t, e, 1)),
            (e = Ae()),
            t !== null && (xl(t, 1, e), Ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function sv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Le === e &&
      (Te & n) === n &&
      (Re === 4 || (Re === 3 && (Te & 130023424) === Te && 500 > we() - _u)
        ? Dn(e, 0)
        : (Ru |= n)),
    Ye(e, t);
}
function Gd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = $l), ($l <<= 1), !($l & 130023424) && ($l = 4194304))
      : (t = 1));
  var n = Ae();
  (e = $t(e, t)), e !== null && (xl(e, t, n), Ye(e, n));
}
function cv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Gd(e, n);
}
function fv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), Gd(e, n);
}
var Jd;
Jd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qe.current) We = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (We = !1), qm(e, t, n);
      We = !!(e.flags & 131072);
    }
  else (We = !1), fe && t.flags & 1048576 && ed(t, _o, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      io(e, t), (e = t.pendingProps);
      var l = pr(t, Fe.current);
      sr(t, n), (l = Su(null, t, r, e, l, n));
      var o = xu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ke(r) ? ((o = !0), Po(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            mu(t),
            (l.updater = bo),
            (t.stateNode = l),
            (l._reactInternals = t),
            ka(t, r, e, n),
            (t = Ra(null, t, r, !0, o, n)))
          : ((t.tag = 0), fe && o && uu(t), Ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (io(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = pv(r)),
          (e = ht(r, e)),
          l)
        ) {
          case 0:
            t = Pa(null, t, r, e, n);
            break e;
          case 1:
            t = tc(null, t, r, e, n);
            break e;
          case 11:
            t = bs(null, t, r, e, n);
            break e;
          case 14:
            t = ec(null, t, r, ht(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ht(r, l)),
        Pa(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ht(r, l)),
        tc(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((jd(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          id(e, t),
          To(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = yr(Error(N(423)), t)), (t = nc(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = yr(Error(N(424)), t)), (t = nc(e, t, r, n, l));
            break e;
          } else
            for (
              qe = an(t.stateNode.containerInfo.firstChild),
                be = t,
                fe = !0,
                yt = null,
                n = ld(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((hr(), r === l)) {
            t = Ut(e, t, n);
            break e;
          }
          Ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ad(t),
        e === null && Sa(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        ma(r, l) ? (i = null) : o !== null && ma(r, o) && (t.flags |= 32),
        Md(e, t),
        Ue(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Sa(t), null;
    case 13:
      return zd(e, t, n);
    case 4:
      return (
        vu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mr(t, null, r, n)) : Ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ht(r, l)),
        bs(e, t, r, l, n)
      );
    case 7:
      return Ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          ie(Lo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (St(o.value, i)) {
            if (o.children === l.children && !Qe.current) {
              t = Ut(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Ot(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (s.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      xa(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(N(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  xa(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        sr(t, n),
        (l = ct(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ht(r, t.pendingProps)),
        (l = ht(r.type, l)),
        ec(e, t, r, l, n)
      );
    case 15:
      return Td(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ht(r, l)),
        io(e, t),
        (t.tag = 1),
        Ke(r) ? ((e = !0), Po(t)) : (e = !1),
        sr(t, n),
        _d(t, r, l),
        ka(t, r, l, n),
        Ra(null, t, r, !0, e, n)
      );
    case 19:
      return Od(e, t, n);
    case 22:
      return Dd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function Zd(e, t) {
  return Cf(e, t);
}
function dv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ut(e, t, n, r) {
  return new dv(e, t, n, r);
}
function Du(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function pv(e) {
  if (typeof e == "function") return Du(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ja)) return 11;
    if (e === Za) return 14;
  }
  return 2;
}
function fn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function so(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Du(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Xn:
        return Mn(n.children, l, o, t);
      case Ga:
        (i = 8), (l |= 8);
        break;
      case Yi:
        return (
          (e = ut(12, n, t, l | 2)), (e.elementType = Yi), (e.lanes = o), e
        );
      case Xi:
        return (e = ut(13, n, t, l)), (e.elementType = Xi), (e.lanes = o), e;
      case Gi:
        return (e = ut(19, n, t, l)), (e.elementType = Gi), (e.lanes = o), e;
      case af:
        return ni(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case lf:
              i = 10;
              break e;
            case of:
              i = 9;
              break e;
            case Ja:
              i = 11;
              break e;
            case Za:
              i = 14;
              break e;
            case Gt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ut(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Mn(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e;
}
function ni(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = af),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $i(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e;
}
function Ui(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function hv(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = wi(0)),
    (this.expirationTimes = wi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Mu(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new hv(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ut(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    mu(o),
    e
  );
}
function mv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Yn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qd(e) {
  if (!e) return pn;
  e = e._reactInternals;
  e: {
    if (Un(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ke(n)) return qf(e, n, t);
  }
  return t;
}
function bd(e, t, n, r, l, o, i, a, u) {
  return (
    (e = Mu(n, r, !0, e, l, o, i, a, u)),
    (e.context = qd(null)),
    (n = e.current),
    (r = Ae()),
    (l = cn(n)),
    (o = Ot(r, l)),
    (o.callback = t ?? null),
    un(n, o, l),
    (e.current.lanes = l),
    xl(e, l, r),
    Ye(e, r),
    e
  );
}
function ri(e, t, n, r) {
  var l = t.current,
    o = Ae(),
    i = cn(l);
  return (
    (n = qd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ot(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = un(l, t, i)),
    e !== null && (wt(e, l, i, o), ro(e, l, i)),
    i
  );
}
function $o(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function dc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ju(e, t) {
  dc(e, t), (e = e.alternate) && dc(e, t);
}
function vv() {
  return null;
}
var ep =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function zu(e) {
  this._internalRoot = e;
}
li.prototype.render = zu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  ri(e, t, null, null);
};
li.prototype.unmount = zu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    In(function () {
      ri(null, e, null, null);
    }),
      (t[It] = null);
  }
};
function li(e) {
  this._internalRoot = e;
}
li.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Df();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Zt.length && t !== 0 && t < Zt[n].priority; n++);
    Zt.splice(n, 0, e), n === 0 && jf(e);
  }
};
function Ou(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function oi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function pc() {}
function yv(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = $o(i);
        o.call(s);
      };
    }
    var i = bd(t, r, e, 0, null, !1, !1, "", pc);
    return (
      (e._reactRootContainer = i),
      (e[It] = i.current),
      sl(e.nodeType === 8 ? e.parentNode : e),
      In(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = $o(u);
      a.call(s);
    };
  }
  var u = Mu(e, 0, !1, null, null, !1, !1, "", pc);
  return (
    (e._reactRootContainer = u),
    (e[It] = u.current),
    sl(e.nodeType === 8 ? e.parentNode : e),
    In(function () {
      ri(t, u, n, r);
    }),
    u
  );
}
function ii(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = $o(i);
        a.call(u);
      };
    }
    ri(t, i, e, l);
  } else i = yv(n, t, e, l, r);
  return $o(i);
}
Nf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Br(t.pendingLanes);
        n !== 0 &&
          (eu(t, n | 1), Ye(t, we()), !(q & 6) && ((gr = we() + 500), yn()));
      }
      break;
    case 13:
      In(function () {
        var r = $t(e, 1);
        if (r !== null) {
          var l = Ae();
          wt(r, e, 1, l);
        }
      }),
        ju(e, 1);
  }
};
tu = function (e) {
  if (e.tag === 13) {
    var t = $t(e, 134217728);
    if (t !== null) {
      var n = Ae();
      wt(t, e, 134217728, n);
    }
    ju(e, 134217728);
  }
};
Tf = function (e) {
  if (e.tag === 13) {
    var t = cn(e),
      n = $t(e, t);
    if (n !== null) {
      var r = Ae();
      wt(n, e, t, r);
    }
    ju(e, t);
  }
};
Df = function () {
  return ne;
};
Mf = function (e, t) {
  var n = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = n;
  }
};
oa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((qi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Jo(r);
            if (!l) throw Error(N(90));
            sf(r), qi(r, l);
          }
        }
      }
      break;
    case "textarea":
      ff(e, n);
      break;
    case "select":
      (t = n.value), t != null && or(e, !!n.multiple, t, !1);
  }
};
gf = Lu;
wf = In;
var gv = { usingClientEntryPoint: !1, Events: [kl, qn, Jo, vf, yf, Lu] },
  Or = {
    findFiberByHostInstance: _n,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  wv = {
    bundleType: Or.bundleType,
    version: Or.version,
    rendererPackageName: Or.rendererPackageName,
    rendererConfig: Or.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: At.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ef(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Or.findFiberByHostInstance || vv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Gl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Gl.isDisabled && Gl.supportsFiber)
    try {
      (Ko = Gl.inject(wv)), (Pt = Gl);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gv;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ou(t)) throw Error(N(200));
  return mv(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!Ou(e)) throw Error(N(299));
  var n = !1,
    r = "",
    l = ep;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Mu(e, 1, !1, null, null, n, !1, r, l)),
    (e[It] = t.current),
    sl(e.nodeType === 8 ? e.parentNode : e),
    new zu(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Ef(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return In(e);
};
tt.hydrate = function (e, t, n) {
  if (!oi(t)) throw Error(N(200));
  return ii(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!Ou(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = ep;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = bd(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[It] = t.current),
    sl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new li(t);
};
tt.render = function (e, t, n) {
  if (!oi(t)) throw Error(N(200));
  return ii(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!oi(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (In(function () {
        ii(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[It] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = Lu;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!oi(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return ii(e, t, n, !1, r);
};
tt.version = "18.3.1-next-f1338f8080-20240426";
function tp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tp);
    } catch (e) {
      console.error(e);
    }
}
tp(), (ef.exports = tt);
var np = ef.exports,
  hc = np;
(Qi.createRoot = hc.createRoot), (Qi.hydrateRoot = hc.hydrateRoot);
var rp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  mc = nn.createContext && nn.createContext(rp),
  Sv = ["attr", "size", "title"];
function xv(e, t) {
  if (e == null) return {};
  var n = Ev(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (l = 0; l < o.length; l++)
      (r = o[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Ev(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Uo() {
  return (
    (Uo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Uo.apply(this, arguments)
  );
}
function vc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ao(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vc(Object(n), !0).forEach(function (r) {
          kv(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : vc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function kv(e, t, n) {
  return (
    (t = Cv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Cv(e) {
  var t = Pv(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Pv(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lp(e) {
  return (
    e &&
    e.map((t, n) =>
      nn.createElement(t.tag, Ao({ key: n }, t.attr), lp(t.child))
    )
  );
}
function Er(e) {
  return (t) =>
    nn.createElement(Rv, Uo({ attr: Ao({}, e.attr) }, t), lp(e.child));
}
function Rv(e) {
  var t = (n) => {
    var { attr: r, size: l, title: o } = e,
      i = xv(e, Sv),
      a = l || n.size || "1em",
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + " " : "") + e.className),
      nn.createElement(
        "svg",
        Uo(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          i,
          {
            className: u,
            style: Ao(Ao({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && nn.createElement("title", null, o),
        e.children
      )
    );
  };
  return mc !== void 0
    ? nn.createElement(mc.Consumer, null, (n) => t(n))
    : t(rp);
}
function _v(e) {
  return Er({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
        child: [],
      },
    ],
  })(e);
}
function Lv(e) {
  return Er({
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
        child: [],
      },
    ],
  })(e);
}
function Nv(e) {
  return Er({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function Tv(e) {
  return Er({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(e);
}
function Dv(e) {
  return Er({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
        child: [],
      },
    ],
  })(e);
}
const Mv = () => {
  const e = new Date().getFullYear();
  return P.jsxs("footer", {
    className: "footer",
    children: [
      P.jsx("div", {
        className: "footer-content",
        children: P.jsxs("p", {
          children: ["© ", e, " Sinan Kodur. All rights reserved."],
        }),
      }),
      P.jsxs("div", {
        className: "social-links",
        children: [
          P.jsx("a", {
            href: "https://github.com/Sinankodur",
            target: "_blank",
            children: P.jsx(Lv, {}),
          }),
          P.jsx("a", {
            href: "https://www.linkedin.com/in/sinankodur/",
            target: "_blank",
            children: P.jsx(Tv, {}),
          }),
          P.jsx("a", {
            href: "https://twitter.com/Sinankodur",
            target: "_blank",
            children: P.jsx(Dv, {}),
          }),
          P.jsx("a", {
            href: "https://www.facebook.com/sinan.kodur/",
            target: "_blank",
            children: P.jsx(_v, {}),
          }),
          P.jsx("a", {
            href: "https://www.instagram.com/sinan.k0dur/",
            target: "_blank",
            children: P.jsx(Nv, {}),
          }),
        ],
      }),
    ],
  });
};
var Fu = {};
Object.defineProperty(Fu, "__esModule", { value: !0 });
Fu.parse = Uv;
Fu.serialize = Av;
const jv = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
  zv = /^[\u0021-\u003A\u003C-\u007E]*$/,
  Ov =
    /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  Fv = /^[\u0020-\u003A\u003D-\u007E]*$/,
  Iv = Object.prototype.toString,
  $v = (() => {
    const e = function () {};
    return (e.prototype = Object.create(null)), e;
  })();
function Uv(e, t) {
  const n = new $v(),
    r = e.length;
  if (r < 2) return n;
  const l = (t == null ? void 0 : t.decode) || Bv;
  let o = 0;
  do {
    const i = e.indexOf("=", o);
    if (i === -1) break;
    const a = e.indexOf(";", o),
      u = a === -1 ? r : a;
    if (i > u) {
      o = e.lastIndexOf(";", i - 1) + 1;
      continue;
    }
    const s = yc(e, o, i),
      c = gc(e, i, s),
      h = e.slice(s, c);
    if (n[h] === void 0) {
      let d = yc(e, i + 1, u),
        g = gc(e, u, d);
      const S = l(e.slice(d, g));
      n[h] = S;
    }
    o = u + 1;
  } while (o < r);
  return n;
}
function yc(e, t, n) {
  do {
    const r = e.charCodeAt(t);
    if (r !== 32 && r !== 9) return t;
  } while (++t < n);
  return n;
}
function gc(e, t, n) {
  for (; t > n; ) {
    const r = e.charCodeAt(--t);
    if (r !== 32 && r !== 9) return t + 1;
  }
  return n;
}
function Av(e, t, n) {
  const r = (n == null ? void 0 : n.encode) || encodeURIComponent;
  if (!jv.test(e)) throw new TypeError(`argument name is invalid: ${e}`);
  const l = r(t);
  if (!zv.test(l)) throw new TypeError(`argument val is invalid: ${t}`);
  let o = e + "=" + l;
  if (!n) return o;
  if (n.maxAge !== void 0) {
    if (!Number.isInteger(n.maxAge))
      throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
    o += "; Max-Age=" + n.maxAge;
  }
  if (n.domain) {
    if (!Ov.test(n.domain))
      throw new TypeError(`option domain is invalid: ${n.domain}`);
    o += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!Fv.test(n.path))
      throw new TypeError(`option path is invalid: ${n.path}`);
    o += "; Path=" + n.path;
  }
  if (n.expires) {
    if (!Hv(n.expires) || !Number.isFinite(n.expires.valueOf()))
      throw new TypeError(`option expires is invalid: ${n.expires}`);
    o += "; Expires=" + n.expires.toUTCString();
  }
  if (
    (n.httpOnly && (o += "; HttpOnly"),
    n.secure && (o += "; Secure"),
    n.partitioned && (o += "; Partitioned"),
    n.priority)
  )
    switch (typeof n.priority == "string" ? n.priority.toLowerCase() : void 0) {
      case "low":
        o += "; Priority=Low";
        break;
      case "medium":
        o += "; Priority=Medium";
        break;
      case "high":
        o += "; Priority=High";
        break;
      default:
        throw new TypeError(`option priority is invalid: ${n.priority}`);
    }
  if (n.sameSite)
    switch (
      typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite
    ) {
      case !0:
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${n.sameSite}`);
    }
  return o;
}
function Bv(e) {
  if (e.indexOf("%") === -1) return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function Hv(e) {
  return Iv.call(e) === "[object Date]";
}
/**
 * react-router v7.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var op = (e) => {
    throw TypeError(e);
  },
  Vv = (e, t, n) => t.has(e) || op("Cannot " + n),
  Ai = (e, t, n) => (
    Vv(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  Wv = (e, t, n) =>
    t.has(e)
      ? op("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  wc = "popstate";
function Qv(e = {}) {
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location;
    return gl(
      "",
      { pathname: o, search: i, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : hn(l);
  }
  return Yv(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ee(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Kv() {
  return Math.random().toString(36).substring(2, 10);
}
function Sc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function gl(e, t, n = null, r) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? gn(t) : t),
    state: n,
    key: (t && t.key) || r || Kv(),
  };
}
function hn({ pathname: e = "/", search: t = "", hash: n = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
  );
}
function gn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Yv(e, t, n, r = {}) {
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = "POP",
    u = null,
    s = c();
  s == null && ((s = 0), i.replaceState({ ...i.state, idx: s }, ""));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function h() {
    a = "POP";
    let T = c(),
      f = T == null ? null : T - s;
    (s = T), u && u({ action: a, location: k.location, delta: f });
  }
  function d(T, f) {
    a = "PUSH";
    let p = gl(k.location, T, f);
    s = c() + 1;
    let m = Sc(p, s),
      C = k.createHref(p);
    try {
      i.pushState(m, "", C);
    } catch (R) {
      if (R instanceof DOMException && R.name === "DataCloneError") throw R;
      l.location.assign(C);
    }
    o && u && u({ action: a, location: k.location, delta: 1 });
  }
  function g(T, f) {
    a = "REPLACE";
    let p = gl(k.location, T, f);
    s = c();
    let m = Sc(p, s),
      C = k.createHref(p);
    i.replaceState(m, "", C),
      o && u && u({ action: a, location: k.location, delta: 0 });
  }
  function S(T) {
    return ip(T);
  }
  let k = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(T) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(wc, h),
        (u = T),
        () => {
          l.removeEventListener(wc, h), (u = null);
        }
      );
    },
    createHref(T) {
      return t(l, T);
    },
    createURL: S,
    encodeLocation(T) {
      let f = S(T);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: d,
    replace: g,
    go(T) {
      return i.go(T);
    },
  };
  return k;
}
function ip(e, t = !1) {
  let n = "http://localhost";
  typeof window < "u" &&
    (n =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    X(n, "No window.location.(origin|href) available to create URL");
  let r = typeof e == "string" ? e : hn(e);
  return (
    (r = r.replace(/ $/, "%20")),
    !t && r.startsWith("//") && (r = n + r),
    new URL(r, n)
  );
}
var Vr,
  xc = class {
    constructor(e) {
      if ((Wv(this, Vr, new Map()), e)) for (let [t, n] of e) this.set(t, n);
    }
    get(e) {
      if (Ai(this, Vr).has(e)) return Ai(this, Vr).get(e);
      if (e.defaultValue !== void 0) return e.defaultValue;
      throw new Error("No value found for context");
    }
    set(e, t) {
      Ai(this, Vr).set(e, t);
    }
  };
Vr = new WeakMap();
var Xv = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function Gv(e) {
  return Xv.has(e);
}
var Jv = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "unstable_middleware",
  "children",
]);
function Zv(e) {
  return Jv.has(e);
}
function qv(e) {
  return e.index === !0;
}
function Bo(e, t, n = [], r = {}) {
  return e.map((l, o) => {
    let i = [...n, String(o)],
      a = typeof l.id == "string" ? l.id : i.join("-");
    if (
      (X(
        l.index !== !0 || !l.children,
        "Cannot specify children on an index route"
      ),
      X(
        !r[a],
        `Found a route id collision on id "${a}".  Route id's must be globally unique within Data Router usages`
      ),
      qv(l))
    ) {
      let u = { ...l, ...t(l), id: a };
      return (r[a] = u), u;
    } else {
      let u = { ...l, ...t(l), id: a, children: void 0 };
      return (
        (r[a] = u), l.children && (u.children = Bo(l.children, t, i, r)), u
      );
    }
  });
}
function bt(e, t, n = "/") {
  return co(e, t, n, !1);
}
function co(e, t, n, r) {
  let l = typeof t == "string" ? gn(t) : t,
    o = dt(l.pathname || "/", n);
  if (o == null) return null;
  let i = ap(e);
  ey(i);
  let a = null;
  for (let u = 0; a == null && u < i.length; ++u) {
    let s = fy(o);
    a = sy(i[u], s, r);
  }
  return a;
}
function bv(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function ap(e, t = [], n = [], r = "") {
  let l = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (X(
        u.relativePath.startsWith(r),
        `Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = _t([r, u.relativePath]),
      c = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (X(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${s}".`
      ),
      ap(o.children, t, c, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: ay(s, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i);
      else for (let u of up(o.path)) l(o, i, u);
    }),
    t
  );
}
function up(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = up(r.join("/")),
    a = [];
  return (
    a.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
    l && a.push(...i),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function ey(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : uy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var ty = /^:[\w-]+$/,
  ny = 3,
  ry = 2,
  ly = 1,
  oy = 10,
  iy = -2,
  Ec = (e) => e === "*";
function ay(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ec) && (r += iy),
    t && (r += ry),
    n
      .filter((l) => !Ec(l))
      .reduce((l, o) => l + (ty.test(o) ? ny : o === "" ? ly : oy), r)
  );
}
function uy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function sy(e, t, n = !1) {
  let { routesMeta: r } = e,
    l = {},
    o = "/",
    i = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      s = a === r.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      h = Ho(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        c
      ),
      d = u.route;
    if (
      (!h &&
        s &&
        n &&
        !r[r.length - 1].route.index &&
        (h = Ho(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          c
        )),
      !h)
    )
      return null;
    Object.assign(l, h.params),
      i.push({
        params: l,
        pathname: _t([o, h.pathname]),
        pathnameBase: hy(_t([o, h.pathnameBase])),
        route: d,
      }),
      h.pathnameBase !== "/" && (o = _t([o, h.pathnameBase]));
  }
  return i;
}
function Ho(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = cy(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, { paramName: c, isOptional: h }, d) => {
      if (c === "*") {
        let S = a[d] || "";
        i = o.slice(0, o.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const g = a[d];
      return (
        h && !g ? (s[c] = void 0) : (s[c] = (g || "").replace(/%2F/g, "/")), s
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function cy(e, t = !1, n = !0) {
  Ee(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function fy(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Ee(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function dt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function dy(e, t = "/") {
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? gn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : py(n, t)) : t,
    search: my(r),
    hash: vy(l),
  };
}
function py(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Bi(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function sp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Iu(e) {
  let t = sp(e);
  return t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase));
}
function $u(e, t, n, r = !1) {
  let l;
  typeof e == "string"
    ? (l = gn(e))
    : ((l = { ...e }),
      X(
        !l.pathname || !l.pathname.includes("?"),
        Bi("?", "pathname", "search", l)
      ),
      X(
        !l.pathname || !l.pathname.includes("#"),
        Bi("#", "pathname", "hash", l)
      ),
      X(!l.search || !l.search.includes("#"), Bi("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    a;
  if (i == null) a = n;
  else {
    let h = t.length - 1;
    if (!r && i.startsWith("..")) {
      let d = i.split("/");
      for (; d[0] === ".."; ) d.shift(), (h -= 1);
      l.pathname = d.join("/");
    }
    a = h >= 0 ? t[h] : "/";
  }
  let u = dy(l, a),
    s = i && i !== "/" && i.endsWith("/"),
    c = (o || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"), u;
}
var _t = (e) => e.join("/").replace(/\/\/+/g, "/"),
  hy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  my = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  vy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  Vo = class {
    constructor(e, t, n, r = !1) {
      (this.status = e),
        (this.statusText = t || ""),
        (this.internal = r),
        n instanceof Error
          ? ((this.data = n.toString()), (this.error = n))
          : (this.data = n);
    }
  };
function wl(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var cp = ["POST", "PUT", "PATCH", "DELETE"],
  yy = new Set(cp),
  gy = ["GET", ...cp],
  wy = new Set(gy),
  Sy = new Set([301, 302, 303, 307, 308]),
  xy = new Set([307, 308]),
  Hi = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ey = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Fr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Uu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ky = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  fp = "remix-router-transitions",
  dp = Symbol("ResetLoaderData");
function Cy(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u";
  X(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let r = e.hydrationRouteProperties || [],
    l = e.mapRouteProperties || ky,
    o = {},
    i = Bo(e.routes, l, void 0, o),
    a,
    u = e.basename || "/",
    s = e.dataStrategy || Ny,
    c = { unstable_middleware: !1, ...e.future },
    h = null,
    d = new Set(),
    g = null,
    S = null,
    k = null,
    T = e.hydrationData != null,
    f = bt(i, e.history.location, u),
    p = !1,
    m = null,
    C;
  if (f == null && !e.patchRoutesOnNavigation) {
    let v = ot(404, { pathname: e.history.location.pathname }),
      { matches: w, route: E } = zc(i);
    (C = !0), (f = w), (m = { [E.id]: v });
  } else if (
    (f &&
      !e.hydrationData &&
      Nl(f, i, e.history.location.pathname).active &&
      (f = null),
    f)
  )
    if (f.some((v) => v.route.lazy)) C = !1;
    else if (!f.some((v) => v.route.loader)) C = !0;
    else {
      let v = e.hydrationData ? e.hydrationData.loaderData : null,
        w = e.hydrationData ? e.hydrationData.errors : null;
      if (w) {
        let E = f.findIndex((L) => w[L.route.id] !== void 0);
        C = f.slice(0, E + 1).every((L) => !Ua(L.route, v, w));
      } else C = f.every((E) => !Ua(E.route, v, w));
    }
  else {
    (C = !1), (f = []);
    let v = Nl(null, i, e.history.location.pathname);
    v.active && v.matches && ((p = !0), (f = v.matches));
  }
  let R,
    y = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: f,
      initialized: C,
      navigation: Hi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || m,
      fetchers: new Map(),
      blockers: new Map(),
    },
    _ = "POP",
    D = !1,
    O,
    $ = !1,
    te = new Map(),
    ae = null,
    ke = !1,
    J = !1,
    ue = new Set(),
    b = new Map(),
    ge = 0,
    M = -1,
    I = new Map(),
    U = new Set(),
    W = new Map(),
    Z = new Map(),
    re = new Set(),
    de = new Map(),
    Ht,
    Ie = null;
  function Bn() {
    if (
      ((h = e.history.listen(({ action: v, location: w, delta: E }) => {
        if (Ht) {
          Ht(), (Ht = void 0);
          return;
        }
        Ee(
          de.size === 0 || E != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let L = ns({
          currentLocation: y.location,
          nextLocation: w,
          historyAction: v,
        });
        if (L && E != null) {
          let j = new Promise((A) => {
            Ht = A;
          });
          e.history.go(E * -1),
            Ll(L, {
              state: "blocked",
              location: w,
              proceed() {
                Ll(L, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: w,
                }),
                  j.then(() => e.history.go(E));
              },
              reset() {
                let A = new Map(y.blockers);
                A.set(L, Fr), $e({ blockers: A });
              },
            });
          return;
        }
        return Sn(v, w);
      })),
      n)
    ) {
      Ay(t, te);
      let v = () => By(t, te);
      t.addEventListener("pagehide", v),
        (ae = () => t.removeEventListener("pagehide", v));
    }
    return y.initialized || Sn("POP", y.location, { initialHydration: !0 }), R;
  }
  function Mp() {
    h && h(),
      ae && ae(),
      d.clear(),
      O && O.abort(),
      y.fetchers.forEach((v, w) => ci(w)),
      y.blockers.forEach((v, w) => ts(w));
  }
  function jp(v) {
    return d.add(v), () => d.delete(v);
  }
  function $e(v, w = {}) {
    y = { ...y, ...v };
    let E = [],
      L = [];
    y.fetchers.forEach((j, A) => {
      j.state === "idle" && (re.has(A) ? E.push(A) : L.push(A));
    }),
      re.forEach((j) => {
        !y.fetchers.has(j) && !b.has(j) && E.push(j);
      }),
      [...d].forEach((j) =>
        j(y, {
          deletedFetchers: E,
          viewTransitionOpts: w.viewTransitionOpts,
          flushSync: w.flushSync === !0,
        })
      ),
      E.forEach((j) => ci(j)),
      L.forEach((j) => y.fetchers.delete(j));
  }
  function Hn(v, w, { flushSync: E } = {}) {
    var V, K;
    let L =
        y.actionData != null &&
        y.navigation.formMethod != null &&
        Ze(y.navigation.formMethod) &&
        y.navigation.state === "loading" &&
        ((V = v.state) == null ? void 0 : V._isRedirect) !== !0,
      j;
    w.actionData
      ? Object.keys(w.actionData).length > 0
        ? (j = w.actionData)
        : (j = null)
      : L
      ? (j = y.actionData)
      : (j = null);
    let A = w.loaderData
        ? Mc(y.loaderData, w.loaderData, w.matches || [], w.errors)
        : y.loaderData,
      Q = y.blockers;
    Q.size > 0 && ((Q = new Map(Q)), Q.forEach((H, Y) => Q.set(Y, Fr)));
    let F =
      D === !0 ||
      (y.navigation.formMethod != null &&
        Ze(y.navigation.formMethod) &&
        ((K = v.state) == null ? void 0 : K._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      ke ||
        _ === "POP" ||
        (_ === "PUSH"
          ? e.history.push(v, v.state)
          : _ === "REPLACE" && e.history.replace(v, v.state));
    let B;
    if (_ === "POP") {
      let H = te.get(y.location.pathname);
      H && H.has(v.pathname)
        ? (B = { currentLocation: y.location, nextLocation: v })
        : te.has(v.pathname) &&
          (B = { currentLocation: v, nextLocation: y.location });
    } else if ($) {
      let H = te.get(y.location.pathname);
      H
        ? H.add(v.pathname)
        : ((H = new Set([v.pathname])), te.set(y.location.pathname, H)),
        (B = { currentLocation: y.location, nextLocation: v });
    }
    $e(
      {
        ...w,
        actionData: j,
        loaderData: A,
        historyAction: _,
        location: v,
        initialized: !0,
        navigation: Hi,
        revalidation: "idle",
        restoreScrollPosition: ls(v, w.matches || y.matches),
        preventScrollReset: F,
        blockers: Q,
      },
      { viewTransitionOpts: B, flushSync: E === !0 }
    ),
      (_ = "POP"),
      (D = !1),
      ($ = !1),
      (ke = !1),
      (J = !1),
      Ie == null || Ie.resolve(),
      (Ie = null);
  }
  async function Xu(v, w) {
    if (typeof v == "number") {
      e.history.go(v);
      return;
    }
    let E = $a(
        y.location,
        y.matches,
        u,
        v,
        w == null ? void 0 : w.fromRouteId,
        w == null ? void 0 : w.relative
      ),
      { path: L, submission: j, error: A } = kc(!1, E, w),
      Q = y.location,
      F = gl(y.location, L, w && w.state);
    F = { ...F, ...e.history.encodeLocation(F) };
    let B = w && w.replace != null ? w.replace : void 0,
      V = "PUSH";
    B === !0
      ? (V = "REPLACE")
      : B === !1 ||
        (j != null &&
          Ze(j.formMethod) &&
          j.formAction === y.location.pathname + y.location.search &&
          (V = "REPLACE"));
    let K =
        w && "preventScrollReset" in w ? w.preventScrollReset === !0 : void 0,
      H = (w && w.flushSync) === !0,
      Y = ns({ currentLocation: Q, nextLocation: F, historyAction: V });
    if (Y) {
      Ll(Y, {
        state: "blocked",
        location: F,
        proceed() {
          Ll(Y, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F,
          }),
            Xu(v, w);
        },
        reset() {
          let oe = new Map(y.blockers);
          oe.set(Y, Fr), $e({ blockers: oe });
        },
      });
      return;
    }
    await Sn(V, F, {
      submission: j,
      pendingError: A,
      preventScrollReset: K,
      replace: w && w.replace,
      enableViewTransition: w && w.viewTransition,
      flushSync: H,
    });
  }
  function zp() {
    Ie || (Ie = Hy()), si(), $e({ revalidation: "loading" });
    let v = Ie.promise;
    return y.navigation.state === "submitting"
      ? v
      : y.navigation.state === "idle"
      ? (Sn(y.historyAction, y.location, {
          startUninterruptedRevalidation: !0,
        }),
        v)
      : (Sn(_ || y.historyAction, y.navigation.location, {
          overrideNavigation: y.navigation,
          enableViewTransition: $ === !0,
        }),
        v);
  }
  async function Sn(v, w, E) {
    O && O.abort(),
      (O = null),
      (_ = v),
      (ke = (E && E.startUninterruptedRevalidation) === !0),
      Wp(y.location, y.matches),
      (D = (E && E.preventScrollReset) === !0),
      ($ = (E && E.enableViewTransition) === !0);
    let L = a || i,
      j = E && E.overrideNavigation,
      A =
        E != null &&
        E.initialHydration &&
        y.matches &&
        y.matches.length > 0 &&
        !p
          ? y.matches
          : bt(L, w, u),
      Q = (E && E.flushSync) === !0;
    if (
      A &&
      y.initialized &&
      !J &&
      Oy(y.location, w) &&
      !(E && E.submission && Ze(E.submission.formMethod))
    ) {
      Hn(w, { matches: A }, { flushSync: Q });
      return;
    }
    let F = Nl(A, L, w.pathname);
    if ((F.active && F.matches && (A = F.matches), !A)) {
      let { error: Me, notFoundMatches: Xe, route: ee } = fi(w.pathname);
      Hn(
        w,
        { matches: Xe, loaderData: {}, errors: { [ee.id]: Me } },
        { flushSync: Q }
      );
      return;
    }
    O = new AbortController();
    let B = Kn(e.history, w, O.signal, E && E.submission),
      V = new xc(
        e.unstable_getContext ? await e.unstable_getContext() : void 0
      ),
      K;
    if (E && E.pendingError)
      K = [Rn(A).route.id, { type: "error", error: E.pendingError }];
    else if (E && E.submission && Ze(E.submission.formMethod)) {
      let Me = await Op(
        B,
        w,
        E.submission,
        A,
        V,
        F.active,
        E && E.initialHydration === !0,
        { replace: E.replace, flushSync: Q }
      );
      if (Me.shortCircuited) return;
      if (Me.pendingActionResult) {
        let [Xe, ee] = Me.pendingActionResult;
        if (Je(ee) && wl(ee.error) && ee.error.status === 404) {
          (O = null),
            Hn(w, {
              matches: Me.matches,
              loaderData: {},
              errors: { [Xe]: ee.error },
            });
          return;
        }
      }
      (A = Me.matches || A),
        (K = Me.pendingActionResult),
        (j = Vi(w, E.submission)),
        (Q = !1),
        (F.active = !1),
        (B = Kn(e.history, B.url, B.signal));
    }
    let {
      shortCircuited: H,
      matches: Y,
      loaderData: oe,
      errors: Ce,
    } = await Fp(
      B,
      w,
      A,
      V,
      F.active,
      j,
      E && E.submission,
      E && E.fetcherSubmission,
      E && E.replace,
      E && E.initialHydration === !0,
      Q,
      K
    );
    H ||
      ((O = null),
      Hn(w, { matches: Y || A, ...jc(K), loaderData: oe, errors: Ce }));
  }
  async function Op(v, w, E, L, j, A, Q, F = {}) {
    si();
    let B = $y(w, E);
    if (($e({ navigation: B }, { flushSync: F.flushSync === !0 }), A)) {
      let H = await Tl(L, w.pathname, v.signal);
      if (H.type === "aborted") return { shortCircuited: !0 };
      if (H.type === "error") {
        let Y = Rn(H.partialMatches).route.id;
        return {
          matches: H.partialMatches,
          pendingActionResult: [Y, { type: "error", error: H.error }],
        };
      } else if (H.matches) L = H.matches;
      else {
        let { notFoundMatches: Y, error: oe, route: Ce } = fi(w.pathname);
        return {
          matches: Y,
          pendingActionResult: [Ce.id, { type: "error", error: oe }],
        };
      }
    }
    let V,
      K = Wr(L, w);
    if (!K.route.action && !K.route.lazy)
      V = {
        type: "error",
        error: ot(405, {
          method: v.method,
          pathname: w.pathname,
          routeId: K.route.id,
        }),
      };
    else {
      let H = fr(l, o, v, L, K, Q ? [] : r, j),
        Y = await kr(v, H, j, null);
      if (((V = Y[K.route.id]), !V)) {
        for (let oe of L)
          if (Y[oe.route.id]) {
            V = Y[oe.route.id];
            break;
          }
      }
      if (v.signal.aborted) return { shortCircuited: !0 };
    }
    if (Tn(V)) {
      let H;
      return (
        F && F.replace != null
          ? (H = F.replace)
          : (H =
              Nc(V.response.headers.get("Location"), new URL(v.url), u) ===
              y.location.pathname + y.location.search),
        await xn(v, V, !0, { submission: E, replace: H }),
        { shortCircuited: !0 }
      );
    }
    if (Je(V)) {
      let H = Rn(L, K.route.id);
      return (
        (F && F.replace) !== !0 && (_ = "PUSH"),
        { matches: L, pendingActionResult: [H.route.id, V, K.route.id] }
      );
    }
    return { matches: L, pendingActionResult: [K.route.id, V] };
  }
  async function Fp(v, w, E, L, j, A, Q, F, B, V, K, H) {
    let Y = A || Vi(w, Q),
      oe = Q || F || Fc(Y),
      Ce = !ke && !V;
    if (j) {
      if (Ce) {
        let lt = Gu(H);
        $e(
          { navigation: Y, ...(lt !== void 0 ? { actionData: lt } : {}) },
          { flushSync: K }
        );
      }
      let le = await Tl(E, w.pathname, v.signal);
      if (le.type === "aborted") return { shortCircuited: !0 };
      if (le.type === "error") {
        let lt = Rn(le.partialMatches).route.id;
        return {
          matches: le.partialMatches,
          loaderData: {},
          errors: { [lt]: le.error },
        };
      } else if (le.matches) E = le.matches;
      else {
        let { error: lt, notFoundMatches: Qt, route: Ml } = fi(w.pathname);
        return { matches: Qt, loaderData: {}, errors: { [Ml.id]: lt } };
      }
    }
    let Me = a || i,
      { dsMatches: Xe, revalidatingFetchers: ee } = Cc(
        v,
        L,
        l,
        o,
        e.history,
        y,
        E,
        oe,
        w,
        V ? [] : r,
        V === !0,
        J,
        ue,
        re,
        W,
        U,
        Me,
        u,
        e.patchRoutesOnNavigation != null,
        H
      );
    if (
      ((M = ++ge),
      !e.dataStrategy && !Xe.some((le) => le.shouldLoad) && ee.length === 0)
    ) {
      let le = bu();
      return (
        Hn(
          w,
          {
            matches: E,
            loaderData: {},
            errors: H && Je(H[1]) ? { [H[0]]: H[1].error } : null,
            ...jc(H),
            ...(le ? { fetchers: new Map(y.fetchers) } : {}),
          },
          { flushSync: K }
        ),
        { shortCircuited: !0 }
      );
    }
    if (Ce) {
      let le = {};
      if (!j) {
        le.navigation = Y;
        let lt = Gu(H);
        lt !== void 0 && (le.actionData = lt);
      }
      ee.length > 0 && (le.fetchers = Ip(ee)), $e(le, { flushSync: K });
    }
    ee.forEach((le) => {
      Wt(le.key), le.controller && b.set(le.key, le.controller);
    });
    let Cr = () => ee.forEach((le) => Wt(le.key));
    O && O.signal.addEventListener("abort", Cr);
    let { loaderResults: En, fetcherResults: Pr } = await Ju(Xe, ee, v, L);
    if (v.signal.aborted) return { shortCircuited: !0 };
    O && O.signal.removeEventListener("abort", Cr),
      ee.forEach((le) => b.delete(le.key));
    let rt = Jl(En);
    if (rt)
      return await xn(v, rt.result, !0, { replace: B }), { shortCircuited: !0 };
    if (((rt = Jl(Pr)), rt))
      return (
        U.add(rt.key),
        await xn(v, rt.result, !0, { replace: B }),
        { shortCircuited: !0 }
      );
    let { loaderData: Rr, errors: _r } = Dc(y, E, En, H, ee, Pr);
    V && y.errors && (_r = { ...y.errors, ..._r });
    let di = bu(),
      kn = es(M),
      Dl = di || kn || ee.length > 0;
    return {
      matches: E,
      loaderData: Rr,
      errors: _r,
      ...(Dl ? { fetchers: new Map(y.fetchers) } : {}),
    };
  }
  function Gu(v) {
    if (v && !Je(v[1])) return { [v[0]]: v[1].data };
    if (y.actionData)
      return Object.keys(y.actionData).length === 0 ? null : y.actionData;
  }
  function Ip(v) {
    return (
      v.forEach((w) => {
        let E = y.fetchers.get(w.key),
          L = Ir(void 0, E ? E.data : void 0);
        y.fetchers.set(w.key, L);
      }),
      new Map(y.fetchers)
    );
  }
  async function $p(v, w, E, L) {
    Wt(v);
    let j = (L && L.flushSync) === !0,
      A = a || i,
      Q = $a(y.location, y.matches, u, E, w, L == null ? void 0 : L.relative),
      F = bt(A, Q, u),
      B = Nl(F, A, Q);
    if ((B.active && B.matches && (F = B.matches), !F)) {
      Nt(v, w, ot(404, { pathname: Q }), { flushSync: j });
      return;
    }
    let { path: V, submission: K, error: H } = kc(!0, Q, L);
    if (H) {
      Nt(v, w, H, { flushSync: j });
      return;
    }
    let Y = Wr(F, V),
      oe = new xc(
        e.unstable_getContext ? await e.unstable_getContext() : void 0
      ),
      Ce = (L && L.preventScrollReset) === !0;
    if (K && Ze(K.formMethod)) {
      await Up(v, w, V, Y, F, oe, B.active, j, Ce, K);
      return;
    }
    W.set(v, { routeId: w, path: V }),
      await Ap(v, w, V, Y, F, oe, B.active, j, Ce, K);
  }
  async function Up(v, w, E, L, j, A, Q, F, B, V) {
    si(), W.delete(v);
    function K(Se) {
      if (!Se.route.action && !Se.route.lazy) {
        let Vn = ot(405, { method: V.formMethod, pathname: E, routeId: w });
        return Nt(v, w, Vn, { flushSync: F }), !0;
      }
      return !1;
    }
    if (!Q && K(L)) return;
    let H = y.fetchers.get(v);
    Vt(v, Uy(V, H), { flushSync: F });
    let Y = new AbortController(),
      oe = Kn(e.history, E, Y.signal, V);
    if (Q) {
      let Se = await Tl(j, E, oe.signal, v);
      if (Se.type === "aborted") return;
      if (Se.type === "error") {
        Nt(v, w, Se.error, { flushSync: F });
        return;
      } else if (Se.matches) {
        if (((j = Se.matches), (L = Wr(j, E)), K(L))) return;
      } else {
        Nt(v, w, ot(404, { pathname: E }), { flushSync: F });
        return;
      }
    }
    b.set(v, Y);
    let Ce = ge,
      Me = fr(l, o, oe, j, L, r, A),
      ee = (await kr(oe, Me, A, v))[L.route.id];
    if (oe.signal.aborted) {
      b.get(v) === Y && b.delete(v);
      return;
    }
    if (re.has(v)) {
      if (Tn(ee) || Je(ee)) {
        Vt(v, Xt(void 0));
        return;
      }
    } else {
      if (Tn(ee))
        if ((b.delete(v), M > Ce)) {
          Vt(v, Xt(void 0));
          return;
        } else
          return (
            U.add(v),
            Vt(v, Ir(V)),
            xn(oe, ee, !1, { fetcherSubmission: V, preventScrollReset: B })
          );
      if (Je(ee)) {
        Nt(v, w, ee.error);
        return;
      }
    }
    let Cr = y.navigation.location || y.location,
      En = Kn(e.history, Cr, Y.signal),
      Pr = a || i,
      rt =
        y.navigation.state !== "idle"
          ? bt(Pr, y.navigation.location, u)
          : y.matches;
    X(rt, "Didn't find any matches after fetcher action");
    let Rr = ++ge;
    I.set(v, Rr);
    let _r = Ir(V, ee.data);
    y.fetchers.set(v, _r);
    let { dsMatches: di, revalidatingFetchers: kn } = Cc(
      En,
      A,
      l,
      o,
      e.history,
      y,
      rt,
      V,
      Cr,
      r,
      !1,
      J,
      ue,
      re,
      W,
      U,
      Pr,
      u,
      e.patchRoutesOnNavigation != null,
      [L.route.id, ee]
    );
    kn
      .filter((Se) => Se.key !== v)
      .forEach((Se) => {
        let Vn = Se.key,
          os = y.fetchers.get(Vn),
          Yp = Ir(void 0, os ? os.data : void 0);
        y.fetchers.set(Vn, Yp),
          Wt(Vn),
          Se.controller && b.set(Vn, Se.controller);
      }),
      $e({ fetchers: new Map(y.fetchers) });
    let Dl = () => kn.forEach((Se) => Wt(Se.key));
    Y.signal.addEventListener("abort", Dl);
    let { loaderResults: le, fetcherResults: lt } = await Ju(di, kn, En, A);
    if (Y.signal.aborted) return;
    if (
      (Y.signal.removeEventListener("abort", Dl),
      I.delete(v),
      b.delete(v),
      kn.forEach((Se) => b.delete(Se.key)),
      y.fetchers.has(v))
    ) {
      let Se = Xt(ee.data);
      y.fetchers.set(v, Se);
    }
    let Qt = Jl(le);
    if (Qt) return xn(En, Qt.result, !1, { preventScrollReset: B });
    if (((Qt = Jl(lt)), Qt))
      return U.add(Qt.key), xn(En, Qt.result, !1, { preventScrollReset: B });
    let { loaderData: Ml, errors: pi } = Dc(y, rt, le, void 0, kn, lt);
    es(Rr),
      y.navigation.state === "loading" && Rr > M
        ? (X(_, "Expected pending action"),
          O && O.abort(),
          Hn(y.navigation.location, {
            matches: rt,
            loaderData: Ml,
            errors: pi,
            fetchers: new Map(y.fetchers),
          }))
        : ($e({
            errors: pi,
            loaderData: Mc(y.loaderData, Ml, rt, pi),
            fetchers: new Map(y.fetchers),
          }),
          (J = !1));
  }
  async function Ap(v, w, E, L, j, A, Q, F, B, V) {
    let K = y.fetchers.get(v);
    Vt(v, Ir(V, K ? K.data : void 0), { flushSync: F });
    let H = new AbortController(),
      Y = Kn(e.history, E, H.signal);
    if (Q) {
      let ee = await Tl(j, E, Y.signal, v);
      if (ee.type === "aborted") return;
      if (ee.type === "error") {
        Nt(v, w, ee.error, { flushSync: F });
        return;
      } else if (ee.matches) (j = ee.matches), (L = Wr(j, E));
      else {
        Nt(v, w, ot(404, { pathname: E }), { flushSync: F });
        return;
      }
    }
    b.set(v, H);
    let oe = ge,
      Ce = fr(l, o, Y, j, L, r, A),
      Xe = (await kr(Y, Ce, A, v))[L.route.id];
    if ((b.get(v) === H && b.delete(v), !Y.signal.aborted)) {
      if (re.has(v)) {
        Vt(v, Xt(void 0));
        return;
      }
      if (Tn(Xe))
        if (M > oe) {
          Vt(v, Xt(void 0));
          return;
        } else {
          U.add(v), await xn(Y, Xe, !1, { preventScrollReset: B });
          return;
        }
      if (Je(Xe)) {
        Nt(v, w, Xe.error);
        return;
      }
      Vt(v, Xt(Xe.data));
    }
  }
  async function xn(
    v,
    w,
    E,
    {
      submission: L,
      fetcherSubmission: j,
      preventScrollReset: A,
      replace: Q,
    } = {}
  ) {
    w.response.headers.has("X-Remix-Revalidate") && (J = !0);
    let F = w.response.headers.get("Location");
    X(F, "Expected a Location header on the redirect Response"),
      (F = Nc(F, new URL(v.url), u));
    let B = gl(y.location, F, { _isRedirect: !0 });
    if (n) {
      let Ce = !1;
      if (w.response.headers.has("X-Remix-Reload-Document")) Ce = !0;
      else if (Uu.test(F)) {
        const Me = ip(F, !0);
        Ce = Me.origin !== t.location.origin || dt(Me.pathname, u) == null;
      }
      if (Ce) {
        Q ? t.location.replace(F) : t.location.assign(F);
        return;
      }
    }
    O = null;
    let V =
        Q === !0 || w.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: K, formAction: H, formEncType: Y } = y.navigation;
    !L && !j && K && H && Y && (L = Fc(y.navigation));
    let oe = L || j;
    if (xy.has(w.response.status) && oe && Ze(oe.formMethod))
      await Sn(V, B, {
        submission: { ...oe, formAction: F },
        preventScrollReset: A || D,
        enableViewTransition: E ? $ : void 0,
      });
    else {
      let Ce = Vi(B, L);
      await Sn(V, B, {
        overrideNavigation: Ce,
        fetcherSubmission: j,
        preventScrollReset: A || D,
        enableViewTransition: E ? $ : void 0,
      });
    }
  }
  async function kr(v, w, E, L) {
    let j,
      A = {};
    try {
      j = await Ty(s, v, w, L, E, !1);
    } catch (Q) {
      return (
        w
          .filter((F) => F.shouldLoad)
          .forEach((F) => {
            A[F.route.id] = { type: "error", error: Q };
          }),
        A
      );
    }
    if (v.signal.aborted) return A;
    for (let [Q, F] of Object.entries(j))
      if (Fy(F)) {
        let B = F.result;
        A[Q] = { type: "redirect", response: jy(B, v, Q, w, u) };
      } else A[Q] = await My(F);
    return A;
  }
  async function Ju(v, w, E, L) {
    let j = kr(E, v, L, null),
      A = Promise.all(
        w.map(async (B) => {
          if (B.matches && B.match && B.request && B.controller) {
            let K = (await kr(B.request, B.matches, L, B.key))[
              B.match.route.id
            ];
            return { [B.key]: K };
          } else
            return Promise.resolve({
              [B.key]: { type: "error", error: ot(404, { pathname: B.path }) },
            });
        })
      ),
      Q = await j,
      F = (await A).reduce((B, V) => Object.assign(B, V), {});
    return { loaderResults: Q, fetcherResults: F };
  }
  function si() {
    (J = !0),
      W.forEach((v, w) => {
        b.has(w) && ue.add(w), Wt(w);
      });
  }
  function Vt(v, w, E = {}) {
    y.fetchers.set(v, w),
      $e(
        { fetchers: new Map(y.fetchers) },
        { flushSync: (E && E.flushSync) === !0 }
      );
  }
  function Nt(v, w, E, L = {}) {
    let j = Rn(y.matches, w);
    ci(v),
      $e(
        { errors: { [j.route.id]: E }, fetchers: new Map(y.fetchers) },
        { flushSync: (L && L.flushSync) === !0 }
      );
  }
  function Zu(v) {
    return (
      Z.set(v, (Z.get(v) || 0) + 1),
      re.has(v) && re.delete(v),
      y.fetchers.get(v) || Ey
    );
  }
  function ci(v) {
    let w = y.fetchers.get(v);
    b.has(v) && !(w && w.state === "loading" && I.has(v)) && Wt(v),
      W.delete(v),
      I.delete(v),
      U.delete(v),
      re.delete(v),
      ue.delete(v),
      y.fetchers.delete(v);
  }
  function Bp(v) {
    let w = (Z.get(v) || 0) - 1;
    w <= 0 ? (Z.delete(v), re.add(v)) : Z.set(v, w),
      $e({ fetchers: new Map(y.fetchers) });
  }
  function Wt(v) {
    let w = b.get(v);
    w && (w.abort(), b.delete(v));
  }
  function qu(v) {
    for (let w of v) {
      let E = Zu(w),
        L = Xt(E.data);
      y.fetchers.set(w, L);
    }
  }
  function bu() {
    let v = [],
      w = !1;
    for (let E of U) {
      let L = y.fetchers.get(E);
      X(L, `Expected fetcher: ${E}`),
        L.state === "loading" && (U.delete(E), v.push(E), (w = !0));
    }
    return qu(v), w;
  }
  function es(v) {
    let w = [];
    for (let [E, L] of I)
      if (L < v) {
        let j = y.fetchers.get(E);
        X(j, `Expected fetcher: ${E}`),
          j.state === "loading" && (Wt(E), I.delete(E), w.push(E));
      }
    return qu(w), w.length > 0;
  }
  function Hp(v, w) {
    let E = y.blockers.get(v) || Fr;
    return de.get(v) !== w && de.set(v, w), E;
  }
  function ts(v) {
    y.blockers.delete(v), de.delete(v);
  }
  function Ll(v, w) {
    let E = y.blockers.get(v) || Fr;
    X(
      (E.state === "unblocked" && w.state === "blocked") ||
        (E.state === "blocked" && w.state === "blocked") ||
        (E.state === "blocked" && w.state === "proceeding") ||
        (E.state === "blocked" && w.state === "unblocked") ||
        (E.state === "proceeding" && w.state === "unblocked"),
      `Invalid blocker state transition: ${E.state} -> ${w.state}`
    );
    let L = new Map(y.blockers);
    L.set(v, w), $e({ blockers: L });
  }
  function ns({ currentLocation: v, nextLocation: w, historyAction: E }) {
    if (de.size === 0) return;
    de.size > 1 && Ee(!1, "A router only supports one blocker at a time");
    let L = Array.from(de.entries()),
      [j, A] = L[L.length - 1],
      Q = y.blockers.get(j);
    if (
      !(Q && Q.state === "proceeding") &&
      A({ currentLocation: v, nextLocation: w, historyAction: E })
    )
      return j;
  }
  function fi(v) {
    let w = ot(404, { pathname: v }),
      E = a || i,
      { matches: L, route: j } = zc(E);
    return { notFoundMatches: L, route: j, error: w };
  }
  function Vp(v, w, E) {
    if (((g = v), (k = w), (S = E || null), !T && y.navigation === Hi)) {
      T = !0;
      let L = ls(y.location, y.matches);
      L != null && $e({ restoreScrollPosition: L });
    }
    return () => {
      (g = null), (k = null), (S = null);
    };
  }
  function rs(v, w) {
    return (
      (S &&
        S(
          v,
          w.map((L) => bv(L, y.loaderData))
        )) ||
      v.key
    );
  }
  function Wp(v, w) {
    if (g && k) {
      let E = rs(v, w);
      g[E] = k();
    }
  }
  function ls(v, w) {
    if (g) {
      let E = rs(v, w),
        L = g[E];
      if (typeof L == "number") return L;
    }
    return null;
  }
  function Nl(v, w, E) {
    if (e.patchRoutesOnNavigation)
      if (v) {
        if (Object.keys(v[0].params).length > 0)
          return { active: !0, matches: co(w, E, u, !0) };
      } else return { active: !0, matches: co(w, E, u, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Tl(v, w, E, L) {
    if (!e.patchRoutesOnNavigation) return { type: "success", matches: v };
    let j = v;
    for (;;) {
      let A = a == null,
        Q = a || i,
        F = o;
      try {
        await e.patchRoutesOnNavigation({
          signal: E,
          path: w,
          matches: j,
          fetcherKey: L,
          patch: (K, H) => {
            E.aborted || Pc(K, H, Q, F, l);
          },
        });
      } catch (K) {
        return { type: "error", error: K, partialMatches: j };
      } finally {
        A && !E.aborted && (i = [...i]);
      }
      if (E.aborted) return { type: "aborted" };
      let B = bt(Q, w, u);
      if (B) return { type: "success", matches: B };
      let V = co(Q, w, u, !0);
      if (
        !V ||
        (j.length === V.length &&
          j.every((K, H) => K.route.id === V[H].route.id))
      )
        return { type: "success", matches: null };
      j = V;
    }
  }
  function Qp(v) {
    (o = {}), (a = Bo(v, l, void 0, o));
  }
  function Kp(v, w) {
    let E = a == null;
    Pc(v, w, a || i, o, l), E && ((i = [...i]), $e({}));
  }
  return (
    (R = {
      get basename() {
        return u;
      },
      get future() {
        return c;
      },
      get state() {
        return y;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: Bn,
      subscribe: jp,
      enableScrollRestoration: Vp,
      navigate: Xu,
      fetch: $p,
      revalidate: zp,
      createHref: (v) => e.history.createHref(v),
      encodeLocation: (v) => e.history.encodeLocation(v),
      getFetcher: Zu,
      deleteFetcher: Bp,
      dispose: Mp,
      getBlocker: Hp,
      deleteBlocker: ts,
      patchRoutes: Kp,
      _internalFetchControllers: b,
      _internalSetRoutes: Qp,
    }),
    R
  );
}
function Py(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function $a(e, t, n, r, l, o) {
  let i, a;
  if (l) {
    i = [];
    for (let s of t)
      if ((i.push(s), s.route.id === l)) {
        a = s;
        break;
      }
  } else (i = t), (a = t[t.length - 1]);
  let u = $u(r || ".", Iu(i), dt(e.pathname, n) || e.pathname, o === "path");
  if (
    (r == null && ((u.search = e.search), (u.hash = e.hash)),
    (r == null || r === "" || r === ".") && a)
  ) {
    let s = Au(u.search);
    if (a.route.index && !s)
      u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index";
    else if (!a.route.index && s) {
      let c = new URLSearchParams(u.search),
        h = c.getAll("index");
      c.delete("index"),
        h.filter((g) => g).forEach((g) => c.append("index", g));
      let d = c.toString();
      u.search = d ? `?${d}` : "";
    }
  }
  return (
    n !== "/" && (u.pathname = u.pathname === "/" ? n : _t([n, u.pathname])),
    hn(u)
  );
}
function kc(e, t, n) {
  if (!n || !Py(n)) return { path: t };
  if (n.formMethod && !Iy(n.formMethod))
    return { path: t, error: ot(405, { method: n.formMethod }) };
  let r = () => ({ path: t, error: ot(400, { type: "invalid-body" }) }),
    o = (n.formMethod || "get").toUpperCase(),
    i = gp(t);
  if (n.body !== void 0) {
    if (n.formEncType === "text/plain") {
      if (!Ze(o)) return r();
      let h =
        typeof n.body == "string"
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
          ? Array.from(n.body.entries()).reduce(
              (d, [g, S]) => `${d}${g}=${S}
`,
              ""
            )
          : String(n.body);
      return {
        path: t,
        submission: {
          formMethod: o,
          formAction: i,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (n.formEncType === "application/json") {
      if (!Ze(o)) return r();
      try {
        let h = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
        return {
          path: t,
          submission: {
            formMethod: o,
            formAction: i,
            formEncType: n.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch {
        return r();
      }
    }
  }
  X(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let a, u;
  if (n.formData) (a = Ba(n.formData)), (u = n.formData);
  else if (n.body instanceof FormData) (a = Ba(n.body)), (u = n.body);
  else if (n.body instanceof URLSearchParams) (a = n.body), (u = Tc(a));
  else if (n.body == null) (a = new URLSearchParams()), (u = new FormData());
  else
    try {
      (a = new URLSearchParams(n.body)), (u = Tc(a));
    } catch {
      return r();
    }
  let s = {
    formMethod: o,
    formAction: i,
    formEncType: (n && n.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (Ze(s.formMethod)) return { path: t, submission: s };
  let c = gn(t);
  return (
    e && c.search && Au(c.search) && a.append("index", ""),
    (c.search = `?${a}`),
    { path: hn(c), submission: s }
  );
}
function Cc(e, t, n, r, l, o, i, a, u, s, c, h, d, g, S, k, T, f, p, m) {
  var ke;
  let C = m ? (Je(m[1]) ? m[1].error : m[1].data) : void 0,
    R = l.createURL(o.location),
    y = l.createURL(u),
    _;
  if (c && o.errors) {
    let J = Object.keys(o.errors)[0];
    _ = i.findIndex((ue) => ue.route.id === J);
  } else if (m && Je(m[1])) {
    let J = m[0];
    _ = i.findIndex((ue) => ue.route.id === J) - 1;
  }
  let D = m ? m[1].statusCode : void 0,
    O = D && D >= 400,
    $ = {
      currentUrl: R,
      currentParams: ((ke = o.matches[0]) == null ? void 0 : ke.params) || {},
      nextUrl: y,
      nextParams: i[0].params,
      ...a,
      actionResult: C,
      actionStatus: D,
    },
    te = i.map((J, ue) => {
      let { route: b } = J,
        ge = null;
      if (
        (_ != null && ue > _
          ? (ge = !1)
          : b.lazy
          ? (ge = !0)
          : b.loader == null
          ? (ge = !1)
          : c
          ? (ge = Ua(b, o.loaderData, o.errors))
          : Ry(o.loaderData, o.matches[ue], J) && (ge = !0),
        ge !== null)
      )
        return Aa(n, r, e, J, s, t, ge);
      let M = O
          ? !1
          : h ||
            R.pathname + R.search === y.pathname + y.search ||
            R.search !== y.search ||
            _y(o.matches[ue], J),
        I = { ...$, defaultShouldRevalidate: M },
        U = Wo(J, I);
      return Aa(n, r, e, J, s, t, U, I);
    }),
    ae = [];
  return (
    S.forEach((J, ue) => {
      if (c || !i.some((re) => re.route.id === J.routeId) || g.has(ue)) return;
      let b = o.fetchers.get(ue),
        ge = b && b.state !== "idle" && b.data === void 0,
        M = bt(T, J.path, f);
      if (!M) {
        if (p && ge) return;
        ae.push({
          key: ue,
          routeId: J.routeId,
          path: J.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (k.has(ue)) return;
      let I = Wr(M, J.path),
        U = new AbortController(),
        W = Kn(l, J.path, U.signal),
        Z = null;
      if (d.has(ue)) d.delete(ue), (Z = fr(n, r, W, M, I, s, t));
      else if (ge) h && (Z = fr(n, r, W, M, I, s, t));
      else {
        let re = { ...$, defaultShouldRevalidate: O ? !1 : h };
        Wo(I, re) && (Z = fr(n, r, W, M, I, s, t, re));
      }
      Z &&
        ae.push({
          key: ue,
          routeId: J.routeId,
          path: J.path,
          matches: Z,
          match: I,
          request: W,
          controller: U,
        });
    }),
    { dsMatches: te, revalidatingFetchers: ae }
  );
}
function Ua(e, t, n) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let r = t != null && e.id in t,
    l = n != null && n[e.id] !== void 0;
  return !r && l
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
    ? !0
    : !r && !l;
}
function Ry(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = !e.hasOwnProperty(n.route.id);
  return r || l;
}
function _y(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Wo(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
function Pc(e, t, n, r, l) {
  let o;
  if (e) {
    let u = r[e];
    X(u, `No route found to patch children into: routeId = ${e}`),
      u.children || (u.children = []),
      (o = u.children);
  } else o = n;
  let i = t.filter((u) => !o.some((s) => pp(u, s))),
    a = Bo(
      i,
      l,
      [e || "_", "patch", String((o == null ? void 0 : o.length) || "0")],
      r
    );
  o.push(...a);
}
function pp(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
      e.path === t.path &&
      e.caseSensitive === t.caseSensitive
    ? (!e.children || e.children.length === 0) &&
      (!t.children || t.children.length === 0)
      ? !0
      : e.children.every((n, r) => {
          var l;
          return (l = t.children) == null ? void 0 : l.some((o) => pp(n, o));
        })
    : !1;
}
var Rc = new WeakMap(),
  hp = ({ key: e, route: t, manifest: n, mapRouteProperties: r }) => {
    let l = n[t.id];
    if (
      (X(l, "No route found in manifest"), !l.lazy || typeof l.lazy != "object")
    )
      return;
    let o = l.lazy[e];
    if (!o) return;
    let i = Rc.get(l);
    i || ((i = {}), Rc.set(l, i));
    let a = i[e];
    if (a) return a;
    let u = (async () => {
      let s = Gv(e),
        h = l[e] !== void 0 && e !== "hasErrorBoundary";
      if (s)
        Ee(
          !s,
          "Route property " +
            e +
            " is not a supported lazy route property. This property will be ignored."
        ),
          (i[e] = Promise.resolve());
      else if (h)
        Ee(
          !1,
          `Route "${l.id}" has a static property "${e}" defined. The lazy property will be ignored.`
        );
      else {
        let d = await o();
        d != null && (Object.assign(l, { [e]: d }), Object.assign(l, r(l)));
      }
      typeof l.lazy == "object" &&
        ((l.lazy[e] = void 0),
        Object.values(l.lazy).every((d) => d === void 0) && (l.lazy = void 0));
    })();
    return (i[e] = u), u;
  },
  _c = new WeakMap();
function Ly(e, t, n, r, l) {
  let o = n[e.id];
  if ((X(o, "No route found in manifest"), !e.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof e.lazy == "function") {
    let c = _c.get(o);
    if (c) return { lazyRoutePromise: c, lazyHandlerPromise: c };
    let h = (async () => {
      X(typeof e.lazy == "function", "No lazy route function found");
      let d = await e.lazy(),
        g = {};
      for (let S in d) {
        let k = d[S];
        if (k === void 0) continue;
        let T = Zv(S),
          p = o[S] !== void 0 && S !== "hasErrorBoundary";
        T
          ? Ee(
              !T,
              "Route property " +
                S +
                " is not a supported property to be returned from a lazy route function. This property will be ignored."
            )
          : p
          ? Ee(
              !p,
              `Route "${o.id}" has a static property "${S}" defined but its lazy function is also returning a value for this property. The lazy route property "${S}" will be ignored.`
            )
          : (g[S] = k);
      }
      Object.assign(o, g), Object.assign(o, { ...r(o), lazy: void 0 });
    })();
    return (
      _c.set(o, h),
      h.catch(() => {}),
      { lazyRoutePromise: h, lazyHandlerPromise: h }
    );
  }
  let i = Object.keys(e.lazy),
    a = [],
    u;
  for (let c of i) {
    if (l && l.includes(c)) continue;
    let h = hp({ key: c, route: e, manifest: n, mapRouteProperties: r });
    h && (a.push(h), c === t && (u = h));
  }
  let s = a.length > 0 ? Promise.all(a).then(() => {}) : void 0;
  return (
    s == null || s.catch(() => {}),
    u == null || u.catch(() => {}),
    { lazyRoutePromise: s, lazyHandlerPromise: u }
  );
}
async function Lc(e) {
  let t = e.matches.filter((l) => l.shouldLoad),
    n = {};
  return (
    (await Promise.all(t.map((l) => l.resolve()))).forEach((l, o) => {
      n[t[o].route.id] = l;
    }),
    n
  );
}
async function Ny(e) {
  return e.matches.some((t) => t.route.unstable_middleware)
    ? mp(
        e,
        !1,
        () => Lc(e),
        (t, n) => ({ [n]: { type: "error", result: t } })
      )
    : Lc(e);
}
async function mp(e, t, n, r) {
  let { matches: l, request: o, params: i, context: a } = e,
    u = { handlerResult: void 0 };
  try {
    let s = l.flatMap((h) =>
        h.route.unstable_middleware
          ? h.route.unstable_middleware.map((d) => [h.route.id, d])
          : []
      ),
      c = await vp({ request: o, params: i, context: a }, s, t, u, n);
    return t ? c : u.handlerResult;
  } catch (s) {
    if (!u.middlewareError) throw s;
    let c = await r(u.middlewareError.error, u.middlewareError.routeId);
    return u.handlerResult ? Object.assign(u.handlerResult, c) : c;
  }
}
async function vp(e, t, n, r, l, o = 0) {
  let { request: i } = e;
  if (i.signal.aborted)
    throw i.signal.reason
      ? i.signal.reason
      : new Error(
          `Request aborted without an \`AbortSignal.reason\`: ${i.method} ${i.url}`
        );
  let a = t[o];
  if (!a) return (r.handlerResult = await l()), r.handlerResult;
  let [u, s] = a,
    c = !1,
    h,
    d = async () => {
      if (c) throw new Error("You may only call `next()` once per middleware");
      (c = !0), await vp(e, t, n, r, l, o + 1);
    };
  try {
    let g = await s(
      { request: e.request, params: e.params, context: e.context },
      d
    );
    return c ? (g === void 0 ? h : g) : d();
  } catch (g) {
    throw (
      (r.middlewareError
        ? r.middlewareError.error !== g &&
          (r.middlewareError = { routeId: u, error: g })
        : (r.middlewareError = { routeId: u, error: g }),
      g)
    );
  }
}
function yp(e, t, n, r, l) {
  let o = hp({
      key: "unstable_middleware",
      route: r.route,
      manifest: t,
      mapRouteProperties: e,
    }),
    i = Ly(r.route, Ze(n.method) ? "action" : "loader", t, e, l);
  return {
    middleware: o,
    route: i.lazyRoutePromise,
    handler: i.lazyHandlerPromise,
  };
}
function Aa(e, t, n, r, l, o, i, a = null) {
  let u = !1,
    s = yp(e, t, n, r, l);
  return {
    ...r,
    _lazyPromises: s,
    shouldLoad: i,
    unstable_shouldRevalidateArgs: a,
    unstable_shouldCallHandler(c) {
      return (
        (u = !0),
        a
          ? typeof c == "boolean"
            ? Wo(r, { ...a, defaultShouldRevalidate: c })
            : Wo(r, a)
          : i
      );
    },
    resolve(c) {
      return u ||
        i ||
        (c && n.method === "GET" && (r.route.lazy || r.route.loader))
        ? Dy({
            request: n,
            match: r,
            lazyHandlerPromise: s == null ? void 0 : s.handler,
            lazyRoutePromise: s == null ? void 0 : s.route,
            handlerOverride: c,
            scopedContext: o,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function fr(e, t, n, r, l, o, i, a = null) {
  return r.map((u) =>
    u.route.id !== l.route.id
      ? {
          ...u,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: a,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: yp(e, t, n, u, o),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : Aa(e, t, n, u, o, i, !0, a)
  );
}
async function Ty(e, t, n, r, l, o) {
  n.some((s) => {
    var c;
    return (c = s._lazyPromises) == null ? void 0 : c.middleware;
  }) &&
    (await Promise.all(
      n.map((s) => {
        var c;
        return (c = s._lazyPromises) == null ? void 0 : c.middleware;
      })
    ));
  let i = { request: t, params: n[0].params, context: l, matches: n },
    u = await e({
      ...i,
      fetcherKey: r,
      unstable_runClientMiddleware: (s) => {
        let c = i;
        return mp(
          c,
          !1,
          () =>
            s({
              ...c,
              fetcherKey: r,
              unstable_runClientMiddleware: () => {
                throw new Error(
                  "Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler"
                );
              },
            }),
          (h, d) => ({ [d]: { type: "error", result: h } })
        );
      },
    });
  try {
    await Promise.all(
      n.flatMap((s) => {
        var c, h;
        return [
          (c = s._lazyPromises) == null ? void 0 : c.handler,
          (h = s._lazyPromises) == null ? void 0 : h.route,
        ];
      })
    );
  } catch {}
  return u;
}
async function Dy({
  request: e,
  match: t,
  lazyHandlerPromise: n,
  lazyRoutePromise: r,
  handlerOverride: l,
  scopedContext: o,
}) {
  let i,
    a,
    u = Ze(e.method),
    s = u ? "action" : "loader",
    c = (h) => {
      let d,
        g = new Promise((T, f) => (d = f));
      (a = () => d()), e.signal.addEventListener("abort", a);
      let S = (T) =>
          typeof h != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${s}" [routeId: ${t.route.id}]`
                )
              )
            : h(
                { request: e, params: t.params, context: o },
                ...(T !== void 0 ? [T] : [])
              ),
        k = (async () => {
          try {
            return { type: "data", result: await (l ? l((f) => S(f)) : S()) };
          } catch (T) {
            return { type: "error", result: T };
          }
        })();
      return Promise.race([k, g]);
    };
  try {
    let h = u ? t.route.action : t.route.loader;
    if (n || r)
      if (h) {
        let d,
          [g] = await Promise.all([
            c(h).catch((S) => {
              d = S;
            }),
            n,
            r,
          ]);
        if (d !== void 0) throw d;
        i = g;
      } else {
        await n;
        let d = u ? t.route.action : t.route.loader;
        if (d) [i] = await Promise.all([c(d), r]);
        else if (s === "action") {
          let g = new URL(e.url),
            S = g.pathname + g.search;
          throw ot(405, { method: e.method, pathname: S, routeId: t.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (h) i = await c(h);
    else {
      let d = new URL(e.url),
        g = d.pathname + d.search;
      throw ot(404, { pathname: g });
    }
  } catch (h) {
    return { type: "error", result: h };
  } finally {
    a && e.signal.removeEventListener("abort", a);
  }
  return i;
}
async function My(e) {
  var r, l, o, i, a, u;
  let { result: t, type: n } = e;
  if (wp(t)) {
    let s;
    try {
      let c = t.headers.get("Content-Type");
      c && /\bapplication\/json\b/.test(c)
        ? t.body == null
          ? (s = null)
          : (s = await t.json())
        : (s = await t.text());
    } catch (c) {
      return { type: "error", error: c };
    }
    return n === "error"
      ? {
          type: "error",
          error: new Vo(t.status, t.statusText, s),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: "data", data: s, statusCode: t.status, headers: t.headers };
  }
  return n === "error"
    ? Oc(t)
      ? t.data instanceof Error
        ? {
            type: "error",
            error: t.data,
            statusCode: (r = t.init) == null ? void 0 : r.status,
            headers:
              (l = t.init) != null && l.headers
                ? new Headers(t.init.headers)
                : void 0,
          }
        : {
            type: "error",
            error: new Vo(
              ((o = t.init) == null ? void 0 : o.status) || 500,
              void 0,
              t.data
            ),
            statusCode: wl(t) ? t.status : void 0,
            headers:
              (i = t.init) != null && i.headers
                ? new Headers(t.init.headers)
                : void 0,
          }
      : { type: "error", error: t, statusCode: wl(t) ? t.status : void 0 }
    : Oc(t)
    ? {
        type: "data",
        data: t.data,
        statusCode: (a = t.init) == null ? void 0 : a.status,
        headers:
          (u = t.init) != null && u.headers
            ? new Headers(t.init.headers)
            : void 0,
      }
    : { type: "data", data: t };
}
function jy(e, t, n, r, l) {
  let o = e.headers.get("Location");
  if (
    (X(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Uu.test(o))
  ) {
    let i = r.slice(0, r.findIndex((a) => a.route.id === n) + 1);
    (o = $a(new URL(t.url), i, l, o)), e.headers.set("Location", o);
  }
  return e;
}
function Nc(e, t, n) {
  if (Uu.test(e)) {
    let r = e,
      l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      o = dt(l.pathname, n) != null;
    if (l.origin === t.origin && o) return l.pathname + l.search + l.hash;
  }
  return e;
}
function Kn(e, t, n, r) {
  let l = e.createURL(gp(t)).toString(),
    o = { signal: n };
  if (r && Ze(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (o.method = i.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (o.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = Ba(r.formData))
        : (o.body = r.formData);
  }
  return new Request(l, o);
}
function Ba(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Tc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function zy(e, t, n, r = !1, l = !1) {
  let o = {},
    i = null,
    a,
    u = !1,
    s = {},
    c = n && Je(n[1]) ? n[1].error : void 0;
  return (
    e.forEach((h) => {
      if (!(h.route.id in t)) return;
      let d = h.route.id,
        g = t[d];
      if (
        (X(!Tn(g), "Cannot handle redirect results in processLoaderData"),
        Je(g))
      ) {
        let S = g.error;
        if ((c !== void 0 && ((S = c), (c = void 0)), (i = i || {}), l))
          i[d] = S;
        else {
          let k = Rn(e, d);
          i[k.route.id] == null && (i[k.route.id] = S);
        }
        r || (o[d] = dp),
          u || ((u = !0), (a = wl(g.error) ? g.error.status : 500)),
          g.headers && (s[d] = g.headers);
      } else
        (o[d] = g.data),
          g.statusCode && g.statusCode !== 200 && !u && (a = g.statusCode),
          g.headers && (s[d] = g.headers);
    }),
    c !== void 0 && n && ((i = { [n[0]]: c }), n[2] && (o[n[2]] = void 0)),
    { loaderData: o, errors: i, statusCode: a || 200, loaderHeaders: s }
  );
}
function Dc(e, t, n, r, l, o) {
  let { loaderData: i, errors: a } = zy(t, n, r);
  return (
    l
      .filter((u) => !u.matches || u.matches.some((s) => s.shouldLoad))
      .forEach((u) => {
        let { key: s, match: c, controller: h } = u,
          d = o[s];
        if (
          (X(d, "Did not find corresponding fetcher result"),
          !(h && h.signal.aborted))
        )
          if (Je(d)) {
            let g = Rn(e.matches, c == null ? void 0 : c.route.id);
            (a && a[g.route.id]) || (a = { ...a, [g.route.id]: d.error }),
              e.fetchers.delete(s);
          } else if (Tn(d)) X(!1, "Unhandled fetcher revalidation redirect");
          else {
            let g = Xt(d.data);
            e.fetchers.set(s, g);
          }
      }),
    { loaderData: i, errors: a }
  );
}
function Mc(e, t, n, r) {
  let l = Object.entries(t)
    .filter(([, o]) => o !== dp)
    .reduce((o, [i, a]) => ((o[i] = a), o), {});
  for (let o of n) {
    let i = o.route.id;
    if (
      (!t.hasOwnProperty(i) &&
        e.hasOwnProperty(i) &&
        o.route.loader &&
        (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function jc(e) {
  return e
    ? Je(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Rn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function zc(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function ot(
  e,
  { pathname: t, routeId: n, method: r, type: l, message: o } = {}
) {
  let i = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        r && t && n
          ? (a = `You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`)
          : l === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((i = "Forbidden"), (a = `Route "${n}" does not match URL "${t}"`))
      : e === 404
      ? ((i = "Not Found"), (a = `No route matches URL "${t}"`))
      : e === 405 &&
        ((i = "Method Not Allowed"),
        r && t && n
          ? (a = `You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`)
          : r && (a = `Invalid request method "${r.toUpperCase()}"`)),
    new Vo(e || 500, i, new Error(a), !0)
  );
}
function Jl(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, l] = t[n];
    if (Tn(l)) return { key: r, result: l };
  }
}
function gp(e) {
  let t = typeof e == "string" ? gn(e) : e;
  return hn({ ...t, hash: "" });
}
function Oy(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Fy(e) {
  return wp(e.result) && Sy.has(e.result.status);
}
function Je(e) {
  return e.type === "error";
}
function Tn(e) {
  return (e && e.type) === "redirect";
}
function Oc(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function wp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Iy(e) {
  return wy.has(e.toUpperCase());
}
function Ze(e) {
  return yy.has(e.toUpperCase());
}
function Au(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Wr(e, t) {
  let n = typeof t == "string" ? gn(t).search : t.search;
  if (e[e.length - 1].route.index && Au(n || "")) return e[e.length - 1];
  let r = sp(e);
  return r[r.length - 1];
}
function Fc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function Vi(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function $y(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ir(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Uy(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Xt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Ay(e, t) {
  try {
    let n = e.sessionStorage.getItem(fp);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function By(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(fp, JSON.stringify(n));
    } catch (r) {
      Ee(
        !1,
        `Failed to save applied view transitions in sessionStorage (${r}).`
      );
    }
  }
}
function Hy() {
  let e,
    t,
    n = new Promise((r, l) => {
      (e = async (o) => {
        r(o);
        try {
          await n;
        } catch {}
      }),
        (t = async (o) => {
          l(o);
          try {
            await n;
          } catch {}
        });
    });
  return { promise: n, resolve: e, reject: t };
}
var An = x.createContext(null);
An.displayName = "DataRouter";
var Pl = x.createContext(null);
Pl.displayName = "DataRouterState";
var Bu = x.createContext({ isTransitioning: !1 });
Bu.displayName = "ViewTransition";
var Sp = x.createContext(new Map());
Sp.displayName = "Fetchers";
var Vy = x.createContext(null);
Vy.displayName = "Await";
var Lt = x.createContext(null);
Lt.displayName = "Navigation";
var ai = x.createContext(null);
ai.displayName = "Location";
var Bt = x.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Bt.displayName = "Route";
var Hu = x.createContext(null);
Hu.displayName = "RouteError";
function Wy(e, { relative: t } = {}) {
  X(Rl(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: n, navigator: r } = x.useContext(Lt),
    { hash: l, pathname: o, search: i } = _l(e, { relative: t }),
    a = o;
  return (
    n !== "/" && (a = o === "/" ? n : _t([n, o])),
    r.createHref({ pathname: a, search: i, hash: l })
  );
}
function Rl() {
  return x.useContext(ai) != null;
}
function wn() {
  return (
    X(
      Rl(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    x.useContext(ai).location
  );
}
var xp =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Ep(e) {
  x.useContext(Lt).static || x.useLayoutEffect(e);
}
function Qy() {
  let { isDataRoute: e } = x.useContext(Bt);
  return e ? lg() : Ky();
}
function Ky() {
  X(
    Rl(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = x.useContext(An),
    { basename: t, navigator: n } = x.useContext(Lt),
    { matches: r } = x.useContext(Bt),
    { pathname: l } = wn(),
    o = JSON.stringify(Iu(r)),
    i = x.useRef(!1);
  return (
    Ep(() => {
      i.current = !0;
    }),
    x.useCallback(
      (u, s = {}) => {
        if ((Ee(i.current, xp), !i.current)) return;
        if (typeof u == "number") {
          n.go(u);
          return;
        }
        let c = $u(u, JSON.parse(o), l, s.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : _t([t, c.pathname])),
          (s.replace ? n.replace : n.push)(c, s.state, s);
      },
      [t, n, o, l, e]
    )
  );
}
x.createContext(null);
function _l(e, { relative: t } = {}) {
  let { matches: n } = x.useContext(Bt),
    { pathname: r } = wn(),
    l = JSON.stringify(Iu(n));
  return x.useMemo(() => $u(e, JSON.parse(l), r, t === "path"), [e, l, r, t]);
}
function Yy(e, t, n, r) {
  X(
    Rl(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: l } = x.useContext(Lt),
    { matches: o } = x.useContext(Bt),
    i = o[o.length - 1],
    a = i ? i.params : {},
    u = i ? i.pathname : "/",
    s = i ? i.pathnameBase : "/",
    c = i && i.route;
  {
    let f = (c && c.path) || "";
    kp(
      u,
      !c || f.endsWith("*") || f.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${f}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${f}"> to <Route path="${
        f === "/" ? "*" : `${f}/*`
      }">.`
    );
  }
  let h = wn(),
    d;
  d = h;
  let g = d.pathname || "/",
    S = g;
  if (s !== "/") {
    let f = s.replace(/^\//, "").split("/");
    S = "/" + g.replace(/^\//, "").split("/").slice(f.length).join("/");
  }
  let k = bt(e, { pathname: S });
  return (
    Ee(
      c || k != null,
      `No routes matched location "${d.pathname}${d.search}${d.hash}" `
    ),
    Ee(
      k == null ||
        k[k.length - 1].route.element !== void 0 ||
        k[k.length - 1].route.Component !== void 0 ||
        k[k.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    qy(
      k &&
        k.map((f) =>
          Object.assign({}, f, {
            params: Object.assign({}, a, f.params),
            pathname: _t([
              s,
              l.encodeLocation
                ? l.encodeLocation(f.pathname).pathname
                : f.pathname,
            ]),
            pathnameBase:
              f.pathnameBase === "/"
                ? s
                : _t([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(f.pathnameBase).pathname
                      : f.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    )
  );
}
function Xy() {
  let e = rg(),
    t = wl(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = "rgba(200,200,200, 0.5)",
    l = { padding: "0.5rem", backgroundColor: r },
    o = { padding: "2px 4px", backgroundColor: r },
    i = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (i = x.createElement(
      x.Fragment,
      null,
      x.createElement("p", null, "💿 Hey developer 👋"),
      x.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        x.createElement("code", { style: o }, "ErrorBoundary"),
        " or",
        " ",
        x.createElement("code", { style: o }, "errorElement"),
        " prop on your route."
      )
    )),
    x.createElement(
      x.Fragment,
      null,
      x.createElement("h2", null, "Unexpected Application Error!"),
      x.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? x.createElement("pre", { style: l }, n) : null,
      i
    )
  );
}
var Gy = x.createElement(Xy, null),
  Jy = class extends x.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return this.state.error !== void 0
        ? x.createElement(
            Bt.Provider,
            { value: this.props.routeContext },
            x.createElement(Hu.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Zy({ routeContext: e, match: t, children: n }) {
  let r = x.useContext(An);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    x.createElement(Bt.Provider, { value: e }, n)
  );
}
function qy(e, t = [], n = null, r = null) {
  if (e == null) {
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else return null;
  }
  let l = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let u = l.findIndex(
      (s) => s.route.id && (o == null ? void 0 : o[s.route.id]) !== void 0
    );
    X(
      u >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        o
      ).join(",")}`
    ),
      (l = l.slice(0, Math.min(l.length, u + 1)));
  }
  let i = !1,
    a = -1;
  if (n)
    for (let u = 0; u < l.length; u++) {
      let s = l[u];
      if (
        ((s.route.HydrateFallback || s.route.hydrateFallbackElement) && (a = u),
        s.route.id)
      ) {
        let { loaderData: c, errors: h } = n,
          d =
            s.route.loader &&
            !c.hasOwnProperty(s.route.id) &&
            (!h || h[s.route.id] === void 0);
        if (s.route.lazy || d) {
          (i = !0), a >= 0 ? (l = l.slice(0, a + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((u, s, c) => {
    let h,
      d = !1,
      g = null,
      S = null;
    n &&
      ((h = o && s.route.id ? o[s.route.id] : void 0),
      (g = s.route.errorElement || Gy),
      i &&
        (a < 0 && c === 0
          ? (kp(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (d = !0),
            (S = null))
          : a === c &&
            ((d = !0), (S = s.route.hydrateFallbackElement || null))));
    let k = t.concat(l.slice(0, c + 1)),
      T = () => {
        let f;
        return (
          h
            ? (f = g)
            : d
            ? (f = S)
            : s.route.Component
            ? (f = x.createElement(s.route.Component, null))
            : s.route.element
            ? (f = s.route.element)
            : (f = u),
          x.createElement(Zy, {
            match: s,
            routeContext: { outlet: u, matches: k, isDataRoute: n != null },
            children: f,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || c === 0)
      ? x.createElement(Jy, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: h,
          children: T(),
          routeContext: { outlet: null, matches: k, isDataRoute: !0 },
        })
      : T();
  }, null);
}
function Vu(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function by(e) {
  let t = x.useContext(An);
  return X(t, Vu(e)), t;
}
function eg(e) {
  let t = x.useContext(Pl);
  return X(t, Vu(e)), t;
}
function tg(e) {
  let t = x.useContext(Bt);
  return X(t, Vu(e)), t;
}
function Wu(e) {
  let t = tg(e),
    n = t.matches[t.matches.length - 1];
  return (
    X(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function ng() {
  return Wu("useRouteId");
}
function rg() {
  var r;
  let e = x.useContext(Hu),
    t = eg("useRouteError"),
    n = Wu("useRouteError");
  return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n];
}
function lg() {
  let { router: e } = by("useNavigate"),
    t = Wu("useNavigate"),
    n = x.useRef(!1);
  return (
    Ep(() => {
      n.current = !0;
    }),
    x.useCallback(
      async (l, o = {}) => {
        Ee(n.current, xp),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : await e.navigate(l, { fromRouteId: t, ...o }));
      },
      [e, t]
    )
  );
}
var Ic = {};
function kp(e, t, n) {
  !t && !Ic[e] && ((Ic[e] = !0), Ee(!1, n));
}
var $c = {};
function Uc(e, t) {
  !e && !$c[t] && (($c[t] = !0), console.warn(t));
}
function og(e) {
  let t = {
    hasErrorBoundary:
      e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      (e.element &&
        Ee(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        ),
      Object.assign(t, {
        element: x.createElement(e.Component),
        Component: void 0,
      })),
    e.HydrateFallback &&
      (e.hydrateFallbackElement &&
        Ee(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(t, {
        hydrateFallbackElement: x.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      })),
    e.ErrorBoundary &&
      (e.errorElement &&
        Ee(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        ),
      Object.assign(t, {
        errorElement: x.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    t
  );
}
var ig = ["HydrateFallback", "hydrateFallbackElement"],
  ag = class {
    constructor() {
      (this.status = "pending"),
        (this.promise = new Promise((e, t) => {
          (this.resolve = (n) => {
            this.status === "pending" && ((this.status = "resolved"), e(n));
          }),
            (this.reject = (n) => {
              this.status === "pending" && ((this.status = "rejected"), t(n));
            });
        }));
    }
  };
function ug({ router: e, flushSync: t }) {
  let [n, r] = x.useState(e.state),
    [l, o] = x.useState(),
    [i, a] = x.useState({ isTransitioning: !1 }),
    [u, s] = x.useState(),
    [c, h] = x.useState(),
    [d, g] = x.useState(),
    S = x.useRef(new Map()),
    k = x.useCallback(
      (m, { deletedFetchers: C, flushSync: R, viewTransitionOpts: y }) => {
        m.fetchers.forEach((D, O) => {
          D.data !== void 0 && S.current.set(O, D.data);
        }),
          C.forEach((D) => S.current.delete(D)),
          Uc(
            R === !1 || t != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
        let _ =
          e.window != null &&
          e.window.document != null &&
          typeof e.window.document.startViewTransition == "function";
        if (
          (Uc(
            y == null || _,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          ),
          !y || !_)
        ) {
          t && R ? t(() => r(m)) : x.startTransition(() => r(m));
          return;
        }
        if (t && R) {
          t(() => {
            c && (u && u.resolve(), c.skipTransition()),
              a({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: y.currentLocation,
                nextLocation: y.nextLocation,
              });
          });
          let D = e.window.document.startViewTransition(() => {
            t(() => r(m));
          });
          D.finished.finally(() => {
            t(() => {
              s(void 0), h(void 0), o(void 0), a({ isTransitioning: !1 });
            });
          }),
            t(() => h(D));
          return;
        }
        c
          ? (u && u.resolve(),
            c.skipTransition(),
            g({
              state: m,
              currentLocation: y.currentLocation,
              nextLocation: y.nextLocation,
            }))
          : (o(m),
            a({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: y.currentLocation,
              nextLocation: y.nextLocation,
            }));
      },
      [e.window, t, c, u]
    );
  x.useLayoutEffect(() => e.subscribe(k), [e, k]),
    x.useEffect(() => {
      i.isTransitioning && !i.flushSync && s(new ag());
    }, [i]),
    x.useEffect(() => {
      if (u && l && e.window) {
        let m = l,
          C = u.promise,
          R = e.window.document.startViewTransition(async () => {
            x.startTransition(() => r(m)), await C;
          });
        R.finished.finally(() => {
          s(void 0), h(void 0), o(void 0), a({ isTransitioning: !1 });
        }),
          h(R);
      }
    }, [l, u, e.window]),
    x.useEffect(() => {
      u && l && n.location.key === l.location.key && u.resolve();
    }, [u, c, n.location, l]),
    x.useEffect(() => {
      !i.isTransitioning &&
        d &&
        (o(d.state),
        a({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: d.currentLocation,
          nextLocation: d.nextLocation,
        }),
        g(void 0));
    }, [i.isTransitioning, d]);
  let T = x.useMemo(
      () => ({
        createHref: e.createHref,
        encodeLocation: e.encodeLocation,
        go: (m) => e.navigate(m),
        push: (m, C, R) =>
          e.navigate(m, {
            state: C,
            preventScrollReset: R == null ? void 0 : R.preventScrollReset,
          }),
        replace: (m, C, R) =>
          e.navigate(m, {
            replace: !0,
            state: C,
            preventScrollReset: R == null ? void 0 : R.preventScrollReset,
          }),
      }),
      [e]
    ),
    f = e.basename || "/",
    p = x.useMemo(
      () => ({ router: e, navigator: T, static: !1, basename: f }),
      [e, T, f]
    );
  return x.createElement(
    x.Fragment,
    null,
    x.createElement(
      An.Provider,
      { value: p },
      x.createElement(
        Pl.Provider,
        { value: n },
        x.createElement(
          Sp.Provider,
          { value: S.current },
          x.createElement(
            Bu.Provider,
            { value: i },
            x.createElement(
              fg,
              {
                basename: f,
                location: n.location,
                navigationType: n.historyAction,
                navigator: T,
              },
              x.createElement(sg, {
                routes: e.routes,
                future: e.future,
                state: n,
              })
            )
          )
        )
      )
    ),
    null
  );
}
var sg = x.memo(cg);
function cg({ routes: e, future: t, state: n }) {
  return Yy(e, void 0, n, t);
}
function fg({
  basename: e = "/",
  children: t = null,
  location: n,
  navigationType: r = "POP",
  navigator: l,
  static: o = !1,
}) {
  X(
    !Rl(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let i = e.replace(/^\/*/, "/"),
    a = x.useMemo(
      () => ({ basename: i, navigator: l, static: o, future: {} }),
      [i, l, o]
    );
  typeof n == "string" && (n = gn(n));
  let {
      pathname: u = "/",
      search: s = "",
      hash: c = "",
      state: h = null,
      key: d = "default",
    } = n,
    g = x.useMemo(() => {
      let S = dt(u, i);
      return S == null
        ? null
        : {
            location: { pathname: S, search: s, hash: c, state: h, key: d },
            navigationType: r,
          };
    }, [i, u, s, c, h, d, r]);
  return (
    Ee(
      g != null,
      `<Router basename="${i}"> is not able to match the URL "${u}${s}${c}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    g == null
      ? null
      : x.createElement(
          Lt.Provider,
          { value: a },
          x.createElement(ai.Provider, { children: t, value: g })
        )
  );
}
var fo = "get",
  po = "application/x-www-form-urlencoded";
function ui(e) {
  return e != null && typeof e.tagName == "string";
}
function dg(e) {
  return ui(e) && e.tagName.toLowerCase() === "button";
}
function pg(e) {
  return ui(e) && e.tagName.toLowerCase() === "form";
}
function hg(e) {
  return ui(e) && e.tagName.toLowerCase() === "input";
}
function mg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function vg(e, t) {
  return e.button === 0 && (!t || t === "_self") && !mg(e);
}
var Zl = null;
function yg() {
  if (Zl === null)
    try {
      new FormData(document.createElement("form"), 0), (Zl = !1);
    } catch {
      Zl = !0;
    }
  return Zl;
}
var gg = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Wi(e) {
  return e != null && !gg.has(e)
    ? (Ee(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${po}"`
      ),
      null)
    : e;
}
function wg(e, t) {
  let n, r, l, o, i;
  if (pg(e)) {
    let a = e.getAttribute("action");
    (r = a ? dt(a, t) : null),
      (n = e.getAttribute("method") || fo),
      (l = Wi(e.getAttribute("enctype")) || po),
      (o = new FormData(e));
  } else if (dg(e) || (hg(e) && (e.type === "submit" || e.type === "image"))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let u = e.getAttribute("formaction") || a.getAttribute("action");
    if (
      ((r = u ? dt(u, t) : null),
      (n = e.getAttribute("formmethod") || a.getAttribute("method") || fo),
      (l =
        Wi(e.getAttribute("formenctype")) ||
        Wi(a.getAttribute("enctype")) ||
        po),
      (o = new FormData(a, e)),
      !yg())
    ) {
      let { name: s, type: c, value: h } = e;
      if (c === "image") {
        let d = s ? `${s}.` : "";
        o.append(`${d}x`, "0"), o.append(`${d}y`, "0");
      } else s && o.append(s, h);
    }
  } else {
    if (ui(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = fo), (r = null), (l = po), (i = e);
  }
  return (
    o && l === "text/plain" && ((i = o), (o = void 0)),
    { action: r, method: n.toLowerCase(), encType: l, formData: o, body: i }
  );
}
function Qu(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
async function Sg(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return (t[e.id] = n), n;
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(n),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function xg(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === "preload" &&
      typeof e.imageSrcSet == "string" &&
      typeof e.imageSizes == "string"
    : typeof e.rel == "string" && typeof e.href == "string";
}
async function Eg(e, t, n) {
  let r = await Promise.all(
    e.map(async (l) => {
      let o = t.routes[l.route.id];
      if (o) {
        let i = await Sg(o, n);
        return i.links ? i.links() : [];
      }
      return [];
    })
  );
  return Rg(
    r
      .flat(1)
      .filter(xg)
      .filter((l) => l.rel === "stylesheet" || l.rel === "preload")
      .map((l) =>
        l.rel === "stylesheet"
          ? { ...l, rel: "prefetch", as: "style" }
          : { ...l, rel: "prefetch" }
      )
  );
}
function Ac(e, t, n, r, l, o) {
  let i = (u, s) => (n[s] ? u.route.id !== n[s].route.id : !0),
    a = (u, s) => {
      var c;
      return (
        n[s].pathname !== u.pathname ||
        (((c = n[s].route.path) == null ? void 0 : c.endsWith("*")) &&
          n[s].params["*"] !== u.params["*"])
      );
    };
  return o === "assets"
    ? t.filter((u, s) => i(u, s) || a(u, s))
    : o === "data"
    ? t.filter((u, s) => {
        var h;
        let c = r.routes[u.route.id];
        if (!c || !c.hasLoader) return !1;
        if (i(u, s) || a(u, s)) return !0;
        if (u.route.shouldRevalidate) {
          let d = u.route.shouldRevalidate({
            currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
            currentParams: ((h = n[0]) == null ? void 0 : h.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: u.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof d == "boolean") return d;
        }
        return !0;
      })
    : [];
}
function kg(e, t, { includeHydrateFallback: n } = {}) {
  return Cg(
    e
      .map((r) => {
        let l = t.routes[r.route.id];
        if (!l) return [];
        let o = [l.module];
        return (
          l.clientActionModule && (o = o.concat(l.clientActionModule)),
          l.clientLoaderModule && (o = o.concat(l.clientLoaderModule)),
          n &&
            l.hydrateFallbackModule &&
            (o = o.concat(l.hydrateFallbackModule)),
          l.imports && (o = o.concat(l.imports)),
          o
        );
      })
      .flat(1)
  );
}
function Cg(e) {
  return [...new Set(e)];
}
function Pg(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function Rg(e, t) {
  let n = new Set();
  return (
    new Set(t),
    e.reduce((r, l) => {
      let o = JSON.stringify(Pg(l));
      return n.has(o) || (n.add(o), r.push({ key: o, link: l })), r;
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var _g = new Set([100, 101, 204, 205]);
function Lg(e, t) {
  let n =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : e;
  return (
    n.pathname === "/"
      ? (n.pathname = "_root.data")
      : t && dt(n.pathname, t) === "/"
      ? (n.pathname = `${t.replace(/\/$/, "")}/_root.data`)
      : (n.pathname = `${n.pathname.replace(/\/$/, "")}.data`),
    n
  );
}
function Cp() {
  let e = x.useContext(An);
  return (
    Qu(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    e
  );
}
function Ng() {
  let e = x.useContext(Pl);
  return (
    Qu(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    e
  );
}
var Ku = x.createContext(void 0);
Ku.displayName = "FrameworkContext";
function Pp() {
  let e = x.useContext(Ku);
  return (
    Qu(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function Tg(e, t) {
  let n = x.useContext(Ku),
    [r, l] = x.useState(!1),
    [o, i] = x.useState(!1),
    {
      onFocus: a,
      onBlur: u,
      onMouseEnter: s,
      onMouseLeave: c,
      onTouchStart: h,
    } = t,
    d = x.useRef(null);
  x.useEffect(() => {
    if ((e === "render" && i(!0), e === "viewport")) {
      let k = (f) => {
          f.forEach((p) => {
            i(p.isIntersecting);
          });
        },
        T = new IntersectionObserver(k, { threshold: 0.5 });
      return (
        d.current && T.observe(d.current),
        () => {
          T.disconnect();
        }
      );
    }
  }, [e]),
    x.useEffect(() => {
      if (r) {
        let k = setTimeout(() => {
          i(!0);
        }, 100);
        return () => {
          clearTimeout(k);
        };
      }
    }, [r]);
  let g = () => {
      l(!0);
    },
    S = () => {
      l(!1), i(!1);
    };
  return n
    ? e !== "intent"
      ? [o, d, {}]
      : [
          o,
          d,
          {
            onFocus: $r(a, g),
            onBlur: $r(u, S),
            onMouseEnter: $r(s, g),
            onMouseLeave: $r(c, S),
            onTouchStart: $r(h, g),
          },
        ]
    : [!1, d, {}];
}
function $r(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function Dg({ page: e, ...t }) {
  let { router: n } = Cp(),
    r = x.useMemo(() => bt(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r ? x.createElement(jg, { page: e, matches: r, ...t }) : null;
}
function Mg(e) {
  let { manifest: t, routeModules: n } = Pp(),
    [r, l] = x.useState([]);
  return (
    x.useEffect(() => {
      let o = !1;
      return (
        Eg(e, t, n).then((i) => {
          o || l(i);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function jg({ page: e, matches: t, ...n }) {
  let r = wn(),
    { manifest: l, routeModules: o } = Pp(),
    { basename: i } = Cp(),
    { loaderData: a, matches: u } = Ng(),
    s = x.useMemo(() => Ac(e, t, u, l, r, "data"), [e, t, u, l, r]),
    c = x.useMemo(() => Ac(e, t, u, l, r, "assets"), [e, t, u, l, r]),
    h = x.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let S = new Set(),
        k = !1;
      if (
        (t.forEach((f) => {
          var m;
          let p = l.routes[f.route.id];
          !p ||
            !p.hasLoader ||
            ((!s.some((C) => C.route.id === f.route.id) &&
              f.route.id in a &&
              (m = o[f.route.id]) != null &&
              m.shouldRevalidate) ||
            p.hasClientLoader
              ? (k = !0)
              : S.add(f.route.id));
        }),
        S.size === 0)
      )
        return [];
      let T = Lg(e, i);
      return (
        k &&
          S.size > 0 &&
          T.searchParams.set(
            "_routes",
            t
              .filter((f) => S.has(f.route.id))
              .map((f) => f.route.id)
              .join(",")
          ),
        [T.pathname + T.search]
      );
    }, [i, a, r, l, s, t, e, o]),
    d = x.useMemo(() => kg(c, l), [c, l]),
    g = Mg(c);
  return x.createElement(
    x.Fragment,
    null,
    h.map((S) =>
      x.createElement("link", {
        key: S,
        rel: "prefetch",
        as: "fetch",
        href: S,
        ...n,
      })
    ),
    d.map((S) =>
      x.createElement("link", { key: S, rel: "modulepreload", href: S, ...n })
    ),
    g.map(({ key: S, link: k }) => x.createElement("link", { key: S, ...k }))
  );
}
function zg(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
var Rp =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Rp && (window.__reactRouterVersion = "7.6.2");
} catch {}
function Og(e, t) {
  return Cy({
    basename: t == null ? void 0 : t.basename,
    unstable_getContext: t == null ? void 0 : t.unstable_getContext,
    future: t == null ? void 0 : t.future,
    history: Qv({ window: t == null ? void 0 : t.window }),
    hydrationData: Fg(),
    routes: e,
    mapRouteProperties: og,
    hydrationRouteProperties: ig,
    dataStrategy: t == null ? void 0 : t.dataStrategy,
    patchRoutesOnNavigation: t == null ? void 0 : t.patchRoutesOnNavigation,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function Fg() {
  let e = window == null ? void 0 : window.__staticRouterHydrationData;
  return e && e.errors && (e = { ...e, errors: Ig(e.errors) }), e;
}
function Ig(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new Vo(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
var _p = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Yu = x.forwardRef(function (
    {
      onClick: t,
      discover: n = "render",
      prefetch: r = "none",
      relative: l,
      reloadDocument: o,
      replace: i,
      state: a,
      target: u,
      to: s,
      preventScrollReset: c,
      viewTransition: h,
      ...d
    },
    g
  ) {
    let { basename: S } = x.useContext(Lt),
      k = typeof s == "string" && _p.test(s),
      T,
      f = !1;
    if (typeof s == "string" && k && ((T = s), Rp))
      try {
        let O = new URL(window.location.href),
          $ = s.startsWith("//") ? new URL(O.protocol + s) : new URL(s),
          te = dt($.pathname, S);
        $.origin === O.origin && te != null
          ? (s = te + $.search + $.hash)
          : (f = !0);
      } catch {
        Ee(
          !1,
          `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let p = Wy(s, { relative: l }),
      [m, C, R] = Tg(r, d),
      y = Ag(s, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: c,
        relative: l,
        viewTransition: h,
      });
    function _(O) {
      t && t(O), O.defaultPrevented || y(O);
    }
    let D = x.createElement("a", {
      ...d,
      ...R,
      href: T || p,
      onClick: f || o ? t : _,
      ref: zg(g, C),
      target: u,
      "data-discover": !k && n === "render" ? "true" : void 0,
    });
    return m && !k
      ? x.createElement(x.Fragment, null, D, x.createElement(Dg, { page: p }))
      : D;
  });
Yu.displayName = "Link";
var Tt = x.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: l = !1,
    style: o,
    to: i,
    viewTransition: a,
    children: u,
    ...s
  },
  c
) {
  let h = _l(i, { relative: s.relative }),
    d = wn(),
    g = x.useContext(Pl),
    { navigator: S, basename: k } = x.useContext(Lt),
    T = g != null && Qg(h) && a === !0,
    f = S.encodeLocation ? S.encodeLocation(h).pathname : h.pathname,
    p = d.pathname,
    m =
      g && g.navigation && g.navigation.location
        ? g.navigation.location.pathname
        : null;
  n ||
    ((p = p.toLowerCase()),
    (m = m ? m.toLowerCase() : null),
    (f = f.toLowerCase())),
    m && k && (m = dt(m, k) || m);
  const C = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
  let R = p === f || (!l && p.startsWith(f) && p.charAt(C) === "/"),
    y =
      m != null &&
      (m === f || (!l && m.startsWith(f) && m.charAt(f.length) === "/")),
    _ = { isActive: R, isPending: y, isTransitioning: T },
    D = R ? t : void 0,
    O;
  typeof r == "function"
    ? (O = r(_))
    : (O = [
        r,
        R ? "active" : null,
        y ? "pending" : null,
        T ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let $ = typeof o == "function" ? o(_) : o;
  return x.createElement(
    Yu,
    {
      ...s,
      "aria-current": D,
      className: O,
      ref: c,
      style: $,
      to: i,
      viewTransition: a,
    },
    typeof u == "function" ? u(_) : u
  );
});
Tt.displayName = "NavLink";
var $g = x.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: l,
      state: o,
      method: i = fo,
      action: a,
      onSubmit: u,
      relative: s,
      preventScrollReset: c,
      viewTransition: h,
      ...d
    },
    g
  ) => {
    let S = Vg(),
      k = Wg(a, { relative: s }),
      T = i.toLowerCase() === "get" ? "get" : "post",
      f = typeof a == "string" && _p.test(a),
      p = (m) => {
        if ((u && u(m), m.defaultPrevented)) return;
        m.preventDefault();
        let C = m.nativeEvent.submitter,
          R = (C == null ? void 0 : C.getAttribute("formmethod")) || i;
        S(C || m.currentTarget, {
          fetcherKey: t,
          method: R,
          navigate: n,
          replace: l,
          state: o,
          relative: s,
          preventScrollReset: c,
          viewTransition: h,
        });
      };
    return x.createElement("form", {
      ref: g,
      method: T,
      action: k,
      onSubmit: r ? u : p,
      ...d,
      "data-discover": !f && e === "render" ? "true" : void 0,
    });
  }
);
$g.displayName = "Form";
function Ug(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Lp(e) {
  let t = x.useContext(An);
  return X(t, Ug(e)), t;
}
function Ag(
  e,
  {
    target: t,
    replace: n,
    state: r,
    preventScrollReset: l,
    relative: o,
    viewTransition: i,
  } = {}
) {
  let a = Qy(),
    u = wn(),
    s = _l(e, { relative: o });
  return x.useCallback(
    (c) => {
      if (vg(c, t)) {
        c.preventDefault();
        let h = n !== void 0 ? n : hn(u) === hn(s);
        a(e, {
          replace: h,
          state: r,
          preventScrollReset: l,
          relative: o,
          viewTransition: i,
        });
      }
    },
    [u, a, s, n, r, t, e, l, o, i]
  );
}
var Bg = 0,
  Hg = () => `__${String(++Bg)}__`;
function Vg() {
  let { router: e } = Lp("useSubmit"),
    { basename: t } = x.useContext(Lt),
    n = ng();
  return x.useCallback(
    async (r, l = {}) => {
      let { action: o, method: i, encType: a, formData: u, body: s } = wg(r, t);
      if (l.navigate === !1) {
        let c = l.fetcherKey || Hg();
        await e.fetch(c, n, l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: s,
          formMethod: l.method || i,
          formEncType: l.encType || a,
          flushSync: l.flushSync,
        });
      } else
        await e.navigate(l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: s,
          formMethod: l.method || i,
          formEncType: l.encType || a,
          replace: l.replace,
          state: l.state,
          fromRouteId: n,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition,
        });
    },
    [e, t, n]
  );
}
function Wg(e, { relative: t } = {}) {
  let { basename: n } = x.useContext(Lt),
    r = x.useContext(Bt);
  X(r, "useFormAction must be used inside a RouteContext");
  let [l] = r.matches.slice(-1),
    o = { ..._l(e || ".", { relative: t }) },
    i = wn();
  if (e == null) {
    o.search = i.search;
    let a = new URLSearchParams(o.search),
      u = a.getAll("index");
    if (u.some((c) => c === "")) {
      a.delete("index"),
        u.filter((h) => h).forEach((h) => a.append("index", h));
      let c = a.toString();
      o.search = c ? `?${c}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      l.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (o.pathname = o.pathname === "/" ? n : _t([n, o.pathname])),
    hn(o)
  );
}
function Qg(e, t = {}) {
  let n = x.useContext(Bu);
  X(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = Lp("useViewTransitionState"),
    l = _l(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = dt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = dt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Ho(l.pathname, i) != null || Ho(l.pathname, o) != null;
}
[..._g];
/**
 * react-router v7.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Kg(e) {
  return x.createElement(ug, { flushSync: np.flushSync, ...e });
}
const Qn = () => {
    const e = wn(),
      [t, n] = x.useState({}),
      r = x.useRef([]),
      l = x.useRef(null),
      [o, i] = x.useState(!1),
      a = x.useMemo(
        () => ({
          "/": 0,
          "/about": 1,
          "/services": 2,
          "/resume": 3,
          "/projects": 4,
          "/contact": 5,
        }),
        []
      ),
      u = x.useCallback(() => {
        const s = e.pathname,
          c = a[s] ?? 0,
          h = r.current[c];
        h &&
          l.current &&
          n({
            width: `${h.offsetWidth}px`,
            left: `${h.offsetLeft}px`,
            opacity: 1,
          });
      }, [e.pathname, a]);
    return (
      x.useEffect(() => {
        u();
        const s = () => u();
        return (
          window.addEventListener("resize", s),
          () => window.removeEventListener("resize", s)
        );
      }, [u]),
      x.useEffect(() => {
        i(!1);
      }, [e.pathname]),
      P.jsxs(P.Fragment, {
        children: [
          P.jsxs("div", {
            className: "container",
            children: [
              P.jsxs(Tt, {
                to: "/",
                className: "logo lg-logo",
                children: [P.jsx("span", { children: "SK" }), " SINAN"],
              }),
              P.jsxs("div", {
                className: `hamburger ${o ? "open" : ""}`,
                onClick: () => i((s) => !s),
                "aria-label": "Toggle menu",
                role: "button",
                tabIndex: 0,
                onKeyDown: (s) => {
                  (s.key === "Enter" || s.key === " ") && i((c) => !c);
                },
                children: [
                  P.jsx("span", {}),
                  P.jsx("span", {}),
                  P.jsx("span", {}),
                ],
              }),
              P.jsx("nav", {
                className: o ? "open" : "",
                children: P.jsxs("ul", {
                  children: [
                    P.jsx("div", {
                      ref: l,
                      className: "active-indicator",
                      style: t,
                    }),
                    P.jsx(Tt, {
                      to: "/",
                      end: !0,
                      children: ({ isActive: s }) =>
                        P.jsx("li", {
                          ref: (c) => (r.current[0] = c),
                          className: `nav-link ${s ? "nav-link-active" : ""}`,
                          children: P.jsx("span", { children: "Home" }),
                        }),
                    }),
                    P.jsx(Tt, {
                      to: "/about",
                      children: ({ isActive: s }) =>
                        P.jsx("li", {
                          ref: (c) => (r.current[1] = c),
                          className: `nav-link ${s ? "nav-link-active" : ""}`,
                          children: P.jsx("span", { children: "About" }),
                        }),
                    }),
                    P.jsx(Tt, {
                      to: "/services",
                      children: ({ isActive: s }) =>
                        P.jsx("li", {
                          ref: (c) => (r.current[2] = c),
                          className: `nav-link ${s ? "nav-link-active" : ""}`,
                          children: "Services",
                        }),
                    }),
                    P.jsxs(Tt, {
                      to: "/",
                      className: "logo sm-logo",
                      children: [P.jsx("span", { children: "SK" }), " SINAN"],
                    }),
                    P.jsx(Tt, {
                      to: "/resume",
                      children: ({ isActive: s }) =>
                        P.jsx("li", {
                          ref: (c) => (r.current[3] = c),
                          className: `nav-link ${s ? "nav-link-active" : ""}`,
                          children: "Resume",
                        }),
                    }),
                    P.jsx(Tt, {
                      to: "/projects",
                      children: ({ isActive: s }) =>
                        P.jsx("li", {
                          ref: (c) => (r.current[4] = c),
                          className: `nav-link ${s ? "nav-link-active" : ""}`,
                          children: "Project",
                        }),
                    }),
                    P.jsx(Tt, {
                      to: "/contact",
                      children: ({ isActive: s }) =>
                        P.jsx("li", {
                          ref: (c) => (r.current[5] = c),
                          className: `nav-link ${s ? "nav-link-active" : ""}`,
                          children: "Contact",
                        }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          o &&
            P.jsx("div", { className: "menu-overlay", onClick: () => i(!1) }),
        ],
      })
    );
  },
  Yg = "/assets/sinan-C45H0yUU.png";
function Xg(e) {
  return Er({
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z",
        },
        child: [],
      },
    ],
  })(e);
}
var ho = {},
  Np,
  Tp;
Object.defineProperty(ho, "__esModule", { value: !0 });
var Qr = P,
  Et = x,
  mt = function () {
    return (
      (mt =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var l in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
          return e;
        }),
      mt.apply(this, arguments)
    );
  };
function Gg(e, t) {
  var n, r;
  switch (t.type) {
    case "TYPE":
      return mt(mt({}, e), {
        speed: t.speed,
        text:
          (n = t.payload) === null || n === void 0
            ? void 0
            : n.substring(0, e.text.length + 1),
      });
    case "DELAY":
      return mt(mt({}, e), { speed: t.payload });
    case "DELETE":
      return mt(mt({}, e), {
        speed: t.speed,
        text:
          (r = t.payload) === null || r === void 0
            ? void 0
            : r.substring(0, e.text.length - 1),
      });
    case "COUNT":
      return mt(mt({}, e), { count: e.count + 1 });
    default:
      return e;
  }
}
var Bc = function (e) {
    var t = e.words,
      n = t === void 0 ? ["Hello World!", "This is", "a simple Typewriter"] : t,
      r = e.loop,
      l = r === void 0 ? 1 : r,
      o = e.typeSpeed,
      i = o === void 0 ? 80 : o,
      a = e.deleteSpeed,
      u = a === void 0 ? 50 : a,
      s = e.delaySpeed,
      c = s === void 0 ? 1500 : s,
      h = e.onLoopDone,
      d = e.onType,
      g = e.onDelete,
      S = e.onDelay,
      k = Et.useReducer(Gg, { speed: i, text: "", count: 0 }),
      T = k[0],
      f = T.speed,
      p = T.text,
      m = T.count,
      C = k[1],
      R = Et.useRef(0),
      y = Et.useRef(!1),
      _ = Et.useRef(!1),
      D = Et.useRef(!1),
      O = Et.useRef(!1),
      $ = Et.useCallback(
        function () {
          var te = m % n.length,
            ae = n[te];
          _.current
            ? (C({ type: "DELETE", payload: ae, speed: u }),
              p === "" && ((_.current = !1), C({ type: "COUNT" })))
            : (C({ type: "TYPE", payload: ae, speed: i }),
              (D.current = !0),
              p === ae &&
                (C({ type: "DELAY", payload: c }),
                (D.current = !1),
                (O.current = !0),
                setTimeout(function () {
                  (O.current = !1), (_.current = !0);
                }, c),
                l > 0 &&
                  ((R.current += 1),
                  R.current / n.length === l &&
                    ((O.current = !1), (y.current = !0))))),
            D.current && d && d(R.current),
            _.current && g && g(),
            O.current && S && S();
        },
        [m, c, u, l, i, n, p, d, g, S]
      );
    return (
      Et.useEffect(
        function () {
          var te = setTimeout($, f);
          return (
            y.current && clearTimeout(te),
            function () {
              return clearTimeout(te);
            }
          );
        },
        [$, f]
      ),
      Et.useEffect(
        function () {
          h && y.current && h();
        },
        [h]
      ),
      [
        p,
        {
          isType: D.current,
          isDelay: O.current,
          isDelete: _.current,
          isDone: y.current,
        },
      ]
    );
  },
  Jg = "styles-module_blinkingCursor__yugAC",
  Zg = "styles-module_blinking__9VXRT";
(function (e, t) {
  t === void 0 && (t = {});
  var n = t.insertAt;
  if (typeof document < "u") {
    var r = document.head || document.getElementsByTagName("head")[0],
      l = document.createElement("style");
    (l.type = "text/css"),
      n === "top" && r.firstChild
        ? r.insertBefore(l, r.firstChild)
        : r.appendChild(l),
      l.styleSheet
        ? (l.styleSheet.cssText = e)
        : l.appendChild(document.createTextNode(e));
  }
})(
  ".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}"
);
var Hc = Et.memo(function (e) {
  var t = e.cursorBlinking,
    n = t === void 0 || t,
    r = e.cursorStyle,
    l = r === void 0 ? "|" : r,
    o = e.cursorColor,
    i = o === void 0 ? "inherit" : o;
  return Qr.jsx(
    "span",
    mt(
      {
        style: { color: i },
        className: "".concat(Jg, " ").concat(n ? Zg : ""),
      },
      { children: l }
    )
  );
});
(Tp = ho.Cursor = Hc),
  (ho.Typewriter = function (e) {
    var t = e.words,
      n = t === void 0 ? ["Hello World!", "This is", "a simple Typewriter"] : t,
      r = e.loop,
      l = r === void 0 ? 1 : r,
      o = e.typeSpeed,
      i = o === void 0 ? 80 : o,
      a = e.deleteSpeed,
      u = a === void 0 ? 50 : a,
      s = e.delaySpeed,
      c = s === void 0 ? 1500 : s,
      h = e.cursor,
      d = h !== void 0 && h,
      g = e.cursorStyle,
      S = g === void 0 ? "|" : g,
      k = e.cursorColor,
      T = k === void 0 ? "inherit" : k,
      f = e.cursorBlinking,
      p = f === void 0 || f,
      m = e.onLoopDone,
      C = e.onType,
      R = e.onDelay,
      y = e.onDelete,
      _ = Bc({
        words: n,
        loop: l,
        typeSpeed: i,
        deleteSpeed: u,
        delaySpeed: c,
        onLoopDone: m,
        onType: C,
        onDelay: R,
        onDelete: y,
      })[0];
    return Qr.jsxs(Qr.Fragment, {
      children: [
        Qr.jsx("span", { children: _ }),
        d && Qr.jsx(Hc, { cursorStyle: S, cursorColor: T, cursorBlinking: p }),
      ],
    });
  }),
  (Np = ho.useTypewriter = Bc);
const qg = () => {
    const [e] = Np({
      words: [
        "a Fullstack Developer.",
        "a Python Developer.",
        "a React Developer.",
        "a Django Developer.",
        "a Web Developer.",
      ],
      loop: {},
      typeSpeed: 70,
      deleteSpeed: 40,
    });
    return P.jsxs("div", {
      style: { flex: 1 },
      children: [
        P.jsxs("div", {
          className: "home",
          children: [
            P.jsx("p", {
              className: "hello",
              children: P.jsx("span", { children: "Hello!" }),
            }),
            P.jsxs("p", {
              className: "subtitle",
              children: [
                "I am a ",
                P.jsx("span", { children: "Software Developer" }),
                " based in Kerala, India.",
              ],
            }),
            P.jsxs("p", {
              className: "title",
              children: ["I'm", P.jsx("span", { children: "Sinan" }), ","],
            }),
            P.jsxs("p", {
              className: "title-2",
              children: [e, P.jsx(Tp, { cursorStyle: "|" })],
            }),
            P.jsx("div", {
              className: "banner-container",
              children: P.jsx("img", {
                src: Yg,
                alt: "sinan",
                className: "banner",
              }),
            }),
          ],
        }),
        P.jsx("div", {
          className: "card",
          children: P.jsx("p", {
            className: "resume-arrow-text",
            children: P.jsxs(Yu, {
              to: "/resume",
              children: [
                "Resume  ",
                P.jsx(Xg, { style: { marginBottom: "-0.2rem" } }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  bg = "/assets/about-page-main-D6UjQxDa.jpg";
var Dp = {};
function e0(e) {
  if (typeof window > "u") return;
  const t = document.createElement("style");
  return (
    t.setAttribute("type", "text/css"),
    (t.innerHTML = e),
    document.head.appendChild(t),
    e
  );
}
Object.defineProperty(Dp, "__esModule", { value: !0 });
var ve = x;
function t0(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var Yt = t0(ve);
e0(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);
const n0 = ve.forwardRef(function (
  {
    style: t = {},
    className: n = "",
    autoFill: r = !1,
    play: l = !0,
    pauseOnHover: o = !1,
    pauseOnClick: i = !1,
    direction: a = "left",
    speed: u = 50,
    delay: s = 0,
    loop: c = 0,
    gradient: h = !1,
    gradientColor: d = "white",
    gradientWidth: g = 200,
    onFinish: S,
    onCycleComplete: k,
    onMount: T,
    children: f,
  },
  p
) {
  const [m, C] = ve.useState(0),
    [R, y] = ve.useState(0),
    [_, D] = ve.useState(1),
    [O, $] = ve.useState(!1),
    te = ve.useRef(null),
    ae = p || te,
    ke = ve.useRef(null),
    J = ve.useCallback(() => {
      if (ke.current && ae.current) {
        const W = ae.current.getBoundingClientRect(),
          Z = ke.current.getBoundingClientRect();
        let re = W.width,
          de = Z.width;
        (a === "up" || a === "down") && ((re = W.height), (de = Z.height)),
          D(r && re && de && de < re ? Math.ceil(re / de) : 1),
          C(re),
          y(de);
      }
    }, [r, ae, a]);
  ve.useEffect(() => {
    if (O && (J(), ke.current && ae.current)) {
      const W = new ResizeObserver(() => J());
      return (
        W.observe(ae.current),
        W.observe(ke.current),
        () => {
          W && W.disconnect();
        }
      );
    }
  }, [J, ae, O]),
    ve.useEffect(() => {
      J();
    }, [J, f]),
    ve.useEffect(() => {
      $(!0);
    }, []),
    ve.useEffect(() => {
      typeof T == "function" && T();
    }, []);
  const ue = ve.useMemo(
      () => (r ? (R * _) / u : R < m ? m / u : R / u),
      [r, m, R, _, u]
    ),
    b = ve.useMemo(
      () =>
        Object.assign(Object.assign({}, t), {
          "--pause-on-hover": !l || o ? "paused" : "running",
          "--pause-on-click": !l || (o && !i) || i ? "paused" : "running",
          "--width": a === "up" || a === "down" ? "100vh" : "100%",
          "--transform":
            a === "up"
              ? "rotate(-90deg)"
              : a === "down"
              ? "rotate(90deg)"
              : "none",
        }),
      [t, l, o, i, a]
    ),
    ge = ve.useMemo(
      () => ({
        "--gradient-color": d,
        "--gradient-width": typeof g == "number" ? `${g}px` : g,
      }),
      [d, g]
    ),
    M = ve.useMemo(
      () => ({
        "--play": l ? "running" : "paused",
        "--direction": a === "left" ? "normal" : "reverse",
        "--duration": `${ue}s`,
        "--delay": `${s}s`,
        "--iteration-count": c ? `${c}` : "infinite",
        "--min-width": r ? "auto" : "100%",
      }),
      [l, a, ue, s, c, r]
    ),
    I = ve.useMemo(
      () => ({
        "--transform":
          a === "up"
            ? "rotate(90deg)"
            : a === "down"
            ? "rotate(-90deg)"
            : "none",
      }),
      [a]
    ),
    U = ve.useCallback(
      (W) =>
        [...Array(Number.isFinite(W) && W >= 0 ? W : 0)].map((Z, re) =>
          Yt.default.createElement(
            ve.Fragment,
            { key: re },
            ve.Children.map(f, (de) =>
              Yt.default.createElement(
                "div",
                { style: I, className: "rfm-child" },
                de
              )
            )
          )
        ),
      [I, f]
    );
  return O
    ? Yt.default.createElement(
        "div",
        { ref: ae, style: b, className: "rfm-marquee-container " + n },
        h &&
          Yt.default.createElement("div", {
            style: ge,
            className: "rfm-overlay",
          }),
        Yt.default.createElement(
          "div",
          {
            className: "rfm-marquee",
            style: M,
            onAnimationIteration: k,
            onAnimationEnd: S,
          },
          Yt.default.createElement(
            "div",
            { className: "rfm-initial-child-container", ref: ke },
            ve.Children.map(f, (W) =>
              Yt.default.createElement(
                "div",
                { style: I, className: "rfm-child" },
                W
              )
            )
          ),
          U(_ - 1)
        ),
        Yt.default.createElement(
          "div",
          { className: "rfm-marquee", style: M },
          U(_)
        )
      )
    : null;
});
var r0 = (Dp.default = n0);
const l0 = () =>
    P.jsxs(P.Fragment, {
      children: [
        P.jsxs("div", {
          className: "about-header",
          children: [
            P.jsx("h1", { children: "About Me" }),
            P.jsx(r0, {
              speed: 50,
              pauseOnClick: !0,
              gradientColor: "#f9832275",
              gradient: !0,
              className: "marquee",
              children: P.jsxs("p", {
                className: "marquee-text",
                children: [
                  P.jsx("span", { children: "•" }),
                  " HTML ",
                  P.jsx("span", { children: "•" }),
                  " CSS ",
                  P.jsx("span", { children: "•" }),
                  " JavaScript",
                  " ",
                  P.jsx("span", { children: "•" }),
                  " React.js ",
                  P.jsx("span", { children: "•" }),
                  " Python ",
                  P.jsx("span", { children: "•" }),
                  " Django",
                  " ",
                  P.jsx("span", { children: "•" }),
                  " MySQL ",
                  P.jsx("span", { children: "•" }),
                  " Git ",
                  P.jsx("span", { children: "•" }),
                  " Bootstrap",
                  " ",
                  P.jsx("span", { children: "•" }),
                  " Responsive Design ",
                  P.jsx("span", { children: "•" }),
                  " API Integration",
                  " ",
                  P.jsx("span", { children: "•" }),
                  " Frontend Development ",
                  P.jsx("span", { children: "•" }),
                  " Backend Development ",
                  P.jsx("span", { children: "•" }),
                  " Full Stack Development ",
                ],
              }),
            }),
          ],
        }),
        P.jsxs("div", {
          className: "about-page",
          children: [
            P.jsx("div", {
              className: "about-image-container",
              children: P.jsx("img", { src: bg, alt: "About Me" }),
            }),
            P.jsx("div", {
              className: "about-par-container",
              children: P.jsx("p", {
                children:
                  "I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. I love building dynamic, responsive web applications and constantly learning new tools to enhance my craft. I have hands-on experience with Python, Django, and React.js, and I've developed scalable projects like a fully functional e-commerce platform. Currently, I work as a Junior Frontend Developer at Hyovis Technologies and Water Systems, where I focus on writing clean, user-focused code. I'm also skilled in version control, responsive design, and integrating APIs to create efficient, maintainable, and engaging digital solutions.",
              }),
            }),
          ],
        }),
      ],
    }),
  o0 = () => P.jsx("div", { children: "ServicePage" }),
  i0 = () => P.jsx("div", { children: "ResumePage" }),
  a0 = () => P.jsx("div", { children: "ProjectsPage" }),
  u0 = () => P.jsx("div", { children: "ContactPage" }),
  s0 = Og([
    {
      path: "/",
      element: P.jsxs(P.Fragment, { children: [P.jsx(Qn, {}), P.jsx(qg, {})] }),
    },
    {
      path: "/about",
      element: P.jsxs(P.Fragment, { children: [P.jsx(Qn, {}), P.jsx(l0, {})] }),
    },
    {
      path: "/services",
      element: P.jsxs(P.Fragment, { children: [P.jsx(Qn, {}), P.jsx(o0, {})] }),
    },
    {
      path: "/resume",
      element: P.jsxs(P.Fragment, { children: [P.jsx(Qn, {}), P.jsx(i0, {})] }),
    },
    {
      path: "/projects",
      element: P.jsxs(P.Fragment, { children: [P.jsx(Qn, {}), P.jsx(a0, {})] }),
    },
    {
      path: "/contact",
      element: P.jsxs(P.Fragment, { children: [P.jsx(Qn, {}), P.jsx(u0, {})] }),
    },
  ]);
Qi.createRoot(document.getElementById("root")).render(
  P.jsxs(nn.StrictMode, {
    children: [P.jsx(Kg, { router: s0 }), P.jsx(Mv, {})],
  })
);
