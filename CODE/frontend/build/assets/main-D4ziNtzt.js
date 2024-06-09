function G5(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const s in r) if (s !== "default" && !(s in e)) {
                const o = Object.getOwnPropertyDescriptor(r, s);
                o && Object.defineProperty(e, s, o.get ? o : {enumerable: !0, get: () => r[s]})
            }
        }
    }
    return Object.defineProperty(e, Symbol.toStringTag, {value: "Module"})
}

(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
    new MutationObserver(s => {
        for (const o of s) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }).observe(document, {childList: !0, subtree: !0});

    function n(s) {
        const o = {};
        return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(s) {
        if (s.ep) return;
        s.ep = !0;
        const o = n(s);
        fetch(s.href, o)
    }
})();

function K5(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

var gf = {exports: {}}, hi = {}, yf = {exports: {}}, I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xs = Symbol.for("react.element"), Q5 = Symbol.for("react.portal"), Y5 = Symbol.for("react.fragment"),
    Z5 = Symbol.for("react.strict_mode"), J5 = Symbol.for("react.profiler"), q5 = Symbol.for("react.provider"),
    X5 = Symbol.for("react.context"), e4 = Symbol.for("react.forward_ref"), t4 = Symbol.for("react.suspense"),
    n4 = Symbol.for("react.memo"), r4 = Symbol.for("react.lazy"), iu = Symbol.iterator;

function s4(e) {
    return e === null || typeof e != "object" ? null : (e = iu && e[iu] || e["@@iterator"], typeof e == "function" ? e : null)
}

var _f = {
    isMounted: function () {
        return !1
    }, enqueueForceUpdate: function () {
    }, enqueueReplaceState: function () {
    }, enqueueSetState: function () {
    }
}, vf = Object.assign, Cf = {};

function _r(e, t, n) {
    this.props = e, this.context = t, this.refs = Cf, this.updater = n || _f
}

_r.prototype.isReactComponent = {};
_r.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
_r.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function wf() {
}

wf.prototype = _r.prototype;

function Wa(e, t, n) {
    this.props = e, this.context = t, this.refs = Cf, this.updater = n || _f
}

var Va = Wa.prototype = new wf;
Va.constructor = Wa;
vf(Va, _r.prototype);
Va.isPureReactComponent = !0;
var lu = Array.isArray, xf = Object.prototype.hasOwnProperty, $a = {current: null},
    Sf = {key: !0, ref: !0, __self: !0, __source: !0};

function kf(e, t, n) {
    var r, s = {}, o = null, i = null;
    if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) xf.call(t, r) && !Sf.hasOwnProperty(r) && (s[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) s.children = n; else if (1 < a) {
        for (var c = Array(a), u = 0; u < a; u++) c[u] = arguments[u + 2];
        s.children = c
    }
    if (e && e.defaultProps) for (r in a = e.defaultProps, a) s[r] === void 0 && (s[r] = a[r]);
    return {$$typeof: xs, type: e, key: o, ref: i, props: s, _owner: $a.current}
}

function o4(e, t) {
    return {$$typeof: xs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
}

function Ga(e) {
    return typeof e == "object" && e !== null && e.$$typeof === xs
}

function i4(e) {
    var t = {"=": "=0", ":": "=2"};
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}

var au = /\/+/g;

function $i(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? i4("" + e.key) : t.toString(36)
}

function ho(e, t, n, r, s) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0; else switch (o) {
        case"string":
        case"number":
            i = !0;
            break;
        case"object":
            switch (e.$$typeof) {
                case xs:
                case Q5:
                    i = !0
            }
    }
    if (i) return i = e, s = s(i), e = r === "" ? "." + $i(i, 0) : r, lu(s) ? (n = "", e != null && (n = e.replace(au, "$&/") + "/"), ho(s, t, n, "", function (u) {
        return u
    })) : s != null && (Ga(s) && (s = o4(s, n + (!s.key || i && i.key === s.key ? "" : ("" + s.key).replace(au, "$&/") + "/") + e)), t.push(s)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", lu(e)) for (var a = 0; a < e.length; a++) {
        o = e[a];
        var c = r + $i(o, a);
        i += ho(o, t, n, c, s)
    } else if (c = s4(e), typeof c == "function") for (e = c.call(e), a = 0; !(o = e.next()).done;) o = o.value, c = r + $i(o, a++), i += ho(o, t, n, c, s); else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function Rs(e, t, n) {
    if (e == null) return e;
    var r = [], s = 0;
    return ho(e, r, "", "", function (o) {
        return t.call(n, o, s++)
    }), r
}

function l4(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}

var Oe = {current: null}, po = {transition: null},
    a4 = {ReactCurrentDispatcher: Oe, ReactCurrentBatchConfig: po, ReactCurrentOwner: $a};
I.Children = {
    map: Rs, forEach: function (e, t, n) {
        Rs(e, function () {
            t.apply(this, arguments)
        }, n)
    }, count: function (e) {
        var t = 0;
        return Rs(e, function () {
            t++
        }), t
    }, toArray: function (e) {
        return Rs(e, function (t) {
            return t
        }) || []
    }, only: function (e) {
        if (!Ga(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
I.Component = _r;
I.Fragment = Y5;
I.Profiler = J5;
I.PureComponent = Wa;
I.StrictMode = Z5;
I.Suspense = t4;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = a4;
I.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = vf({}, e.props), s = e.key, o = e.ref, i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, i = $a.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (c in t) xf.call(t, c) && !Sf.hasOwnProperty(c) && (r[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c])
    }
    var c = arguments.length - 2;
    if (c === 1) r.children = n; else if (1 < c) {
        a = Array(c);
        for (var u = 0; u < c; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {$$typeof: xs, type: e.type, key: s, ref: o, props: r, _owner: i}
};
I.createContext = function (e) {
    return e = {
        $$typeof: X5,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {$$typeof: q5, _context: e}, e.Consumer = e
};
I.createElement = kf;
I.createFactory = function (e) {
    var t = kf.bind(null, e);
    return t.type = e, t
};
I.createRef = function () {
    return {current: null}
};
I.forwardRef = function (e) {
    return {$$typeof: e4, render: e}
};
I.isValidElement = Ga;
I.lazy = function (e) {
    return {$$typeof: r4, _payload: {_status: -1, _result: e}, _init: l4}
};
I.memo = function (e, t) {
    return {$$typeof: n4, type: e, compare: t === void 0 ? null : t}
};
I.startTransition = function (e) {
    var t = po.transition;
    po.transition = {};
    try {
        e()
    } finally {
        po.transition = t
    }
};
I.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.")
};
I.useCallback = function (e, t) {
    return Oe.current.useCallback(e, t)
};
I.useContext = function (e) {
    return Oe.current.useContext(e)
};
I.useDebugValue = function () {
};
I.useDeferredValue = function (e) {
    return Oe.current.useDeferredValue(e)
};
I.useEffect = function (e, t) {
    return Oe.current.useEffect(e, t)
};
I.useId = function () {
    return Oe.current.useId()
};
I.useImperativeHandle = function (e, t, n) {
    return Oe.current.useImperativeHandle(e, t, n)
};
I.useInsertionEffect = function (e, t) {
    return Oe.current.useInsertionEffect(e, t)
};
I.useLayoutEffect = function (e, t) {
    return Oe.current.useLayoutEffect(e, t)
};
I.useMemo = function (e, t) {
    return Oe.current.useMemo(e, t)
};
I.useReducer = function (e, t, n) {
    return Oe.current.useReducer(e, t, n)
};
I.useRef = function (e) {
    return Oe.current.useRef(e)
};
I.useState = function (e) {
    return Oe.current.useState(e)
};
I.useSyncExternalStore = function (e, t, n) {
    return Oe.current.useSyncExternalStore(e, t, n)
};
I.useTransition = function () {
    return Oe.current.useTransition()
};
I.version = "18.2.0";
yf.exports = I;
var v = yf.exports;
const Ka = K5(v), Pl = G5({__proto__: null, default: Ka}, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c4 = v, u4 = Symbol.for("react.element"), d4 = Symbol.for("react.fragment"),
    f4 = Object.prototype.hasOwnProperty, h4 = c4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    p4 = {key: !0, ref: !0, __self: !0, __source: !0};

function Ef(e, t, n) {
    var r, s = {}, o = null, i = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) f4.call(t, r) && !p4.hasOwnProperty(r) && (s[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
    return {$$typeof: u4, type: e, key: o, ref: i, props: s, _owner: h4.current}
}

hi.Fragment = d4;
hi.jsx = Ef;
hi.jsxs = Ef;
gf.exports = hi;
var l = gf.exports, Il = {}, jf = {exports: {}}, Ke = {}, Nf = {exports: {}}, Tf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function (e) {
    function t(D, R) {
        var P = D.length;
        D.push(R);
        e:for (; 0 < P;) {
            var X = P - 1 >>> 1, ae = D[X];
            if (0 < s(ae, R)) D[X] = R, D[P] = ae, P = X; else break e
        }
    }

    function n(D) {
        return D.length === 0 ? null : D[0]
    }

    function r(D) {
        if (D.length === 0) return null;
        var R = D[0], P = D.pop();
        if (P !== R) {
            D[0] = P;
            e:for (var X = 0, ae = D.length, fn = ae >>> 1; X < fn;) {
                var xt = 2 * (X + 1) - 1, kr = D[xt], ht = xt + 1, Ln = D[ht];
                if (0 > s(kr, P)) ht < ae && 0 > s(Ln, kr) ? (D[X] = Ln, D[ht] = P, X = ht) : (D[X] = kr, D[xt] = P, X = xt); else if (ht < ae && 0 > s(Ln, P)) D[X] = Ln, D[ht] = P, X = ht; else break e
            }
        }
        return R
    }

    function s(D, R) {
        var P = D.sortIndex - R.sortIndex;
        return P !== 0 ? P : D.id - R.id
    }

    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function () {
            return o.now()
        }
    } else {
        var i = Date, a = i.now();
        e.unstable_now = function () {
            return i.now() - a
        }
    }
    var c = [], u = [], f = 1, d = null, g = 3, C = !1, y = !1, _ = !1,
        x = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function m(D) {
        for (var R = n(u); R !== null;) {
            if (R.callback === null) r(u); else if (R.startTime <= D) r(u), R.sortIndex = R.expirationTime, t(c, R); else break;
            R = n(u)
        }
    }

    function w(D) {
        if (_ = !1, m(D), !y) if (n(c) !== null) y = !0, we(E); else {
            var R = n(u);
            R !== null && Sr(w, R.startTime - D)
        }
    }

    function E(D, R) {
        y = !1, _ && (_ = !1, p(A), A = -1), C = !0;
        var P = g;
        try {
            for (m(R), d = n(c); d !== null && (!(d.expirationTime > R) || D && !b());) {
                var X = d.callback;
                if (typeof X == "function") {
                    d.callback = null, g = d.priorityLevel;
                    var ae = X(d.expirationTime <= R);
                    R = e.unstable_now(), typeof ae == "function" ? d.callback = ae : d === n(c) && r(c), m(R)
                } else r(c);
                d = n(c)
            }
            if (d !== null) var fn = !0; else {
                var xt = n(u);
                xt !== null && Sr(w, xt.startTime - R), fn = !1
            }
            return fn
        } finally {
            d = null, g = P, C = !1
        }
    }

    var j = !1, N = null, A = -1, W = 5, L = -1;

    function b() {
        return !(e.unstable_now() - L < W)
    }

    function $() {
        if (N !== null) {
            var D = e.unstable_now();
            L = D;
            var R = !0;
            try {
                R = N(!0, D)
            } finally {
                R ? B() : (j = !1, N = null)
            }
        } else j = !1
    }

    var B;
    if (typeof h == "function") B = function () {
        h($)
    }; else if (typeof MessageChannel < "u") {
        var Ce = new MessageChannel, Rn = Ce.port2;
        Ce.port1.onmessage = $, B = function () {
            Rn.postMessage(null)
        }
    } else B = function () {
        x($, 0)
    };

    function we(D) {
        N = D, j || (j = !0, B())
    }

    function Sr(D, R) {
        A = x(function () {
            D(e.unstable_now())
        }, R)
    }

    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (D) {
        D.callback = null
    }, e.unstable_continueExecution = function () {
        y || C || (y = !0, we(E))
    }, e.unstable_forceFrameRate = function (D) {
        0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < D ? Math.floor(1e3 / D) : 5
    }, e.unstable_getCurrentPriorityLevel = function () {
        return g
    }, e.unstable_getFirstCallbackNode = function () {
        return n(c)
    }, e.unstable_next = function (D) {
        switch (g) {
            case 1:
            case 2:
            case 3:
                var R = 3;
                break;
            default:
                R = g
        }
        var P = g;
        g = R;
        try {
            return D()
        } finally {
            g = P
        }
    }, e.unstable_pauseExecution = function () {
    }, e.unstable_requestPaint = function () {
    }, e.unstable_runWithPriority = function (D, R) {
        switch (D) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                D = 3
        }
        var P = g;
        g = D;
        try {
            return R()
        } finally {
            g = P
        }
    }, e.unstable_scheduleCallback = function (D, R, P) {
        var X = e.unstable_now();
        switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? X + P : X) : P = X, D) {
            case 1:
                var ae = -1;
                break;
            case 2:
                ae = 250;
                break;
            case 5:
                ae = 1073741823;
                break;
            case 4:
                ae = 1e4;
                break;
            default:
                ae = 5e3
        }
        return ae = P + ae, D = {
            id: f++,
            callback: R,
            priorityLevel: D,
            startTime: P,
            expirationTime: ae,
            sortIndex: -1
        }, P > X ? (D.sortIndex = P, t(u, D), n(c) === null && D === n(u) && (_ ? (p(A), A = -1) : _ = !0, Sr(w, P - X))) : (D.sortIndex = ae, t(c, D), y || C || (y = !0, we(E))), D
    }, e.unstable_shouldYield = b, e.unstable_wrapCallback = function (D) {
        var R = g;
        return function () {
            var P = g;
            g = R;
            try {
                return D.apply(this, arguments)
            } finally {
                g = P
            }
        }
    }
})(Tf);
Nf.exports = Tf;
var m4 = Nf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df = v, Ve = m4;

function T(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

var Of = new Set, Xr = {};

function Tn(e, t) {
    lr(e, t), lr(e + "Capture", t)
}

function lr(e, t) {
    for (Xr[e] = t, e = 0; e < t.length; e++) Of.add(t[e])
}

var At = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Fl = Object.prototype.hasOwnProperty,
    g4 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    cu = {}, uu = {};

function y4(e) {
    return Fl.call(uu, e) ? !0 : Fl.call(cu, e) ? !1 : g4.test(e) ? uu[e] = !0 : (cu[e] = !0, !1)
}

function _4(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case"function":
        case"symbol":
            return !0;
        case"boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function v4(e, t, n, r) {
    if (t === null || typeof t > "u" || _4(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Ae(e, t, n, r, s, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}

var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    ve[e] = new Ae(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    ve[t] = new Ae(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ve[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    ve[e] = new Ae(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    ve[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ve[e] = new Ae(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    ve[e] = new Ae(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    ve[e] = new Ae(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    ve[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Qa = /[\-:]([a-z])/g;

function Ya(e) {
    return e[1].toUpperCase()
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(Qa, Ya);
    ve[t] = new Ae(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Qa, Ya);
    ve[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Qa, Ya);
    ve[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    ve[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ve.xlinkHref = new Ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    ve[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Za(e, t, n, r) {
    var s = ve.hasOwnProperty(t) ? ve[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (v4(t, n, s, r) && (n = null), r || s === null ? y4(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}

var It = Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ls = Symbol.for("react.element"),
    Un = Symbol.for("react.portal"), Bn = Symbol.for("react.fragment"), Ja = Symbol.for("react.strict_mode"),
    Ml = Symbol.for("react.profiler"), Af = Symbol.for("react.provider"), bf = Symbol.for("react.context"),
    qa = Symbol.for("react.forward_ref"), zl = Symbol.for("react.suspense"), Ul = Symbol.for("react.suspense_list"),
    Xa = Symbol.for("react.memo"), Ut = Symbol.for("react.lazy"), Rf = Symbol.for("react.offscreen"),
    du = Symbol.iterator;

function Er(e) {
    return e === null || typeof e != "object" ? null : (e = du && e[du] || e["@@iterator"], typeof e == "function" ? e : null)
}

var re = Object.assign, Gi;

function Fr(e) {
    if (Gi === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Gi = t && t[1] || ""
    }
    return `
` + Gi + e
}

var Ki = !1;

function Qi(e, t) {
    if (!e || Ki) return "";
    Ki = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t) if (t = function () {
            throw Error()
        }, Object.defineProperty(t.prototype, "props", {
            set: function () {
                throw Error()
            }
        }), typeof Reflect == "object" && Reflect.construct) {
            try {
                Reflect.construct(t, [])
            } catch (u) {
                var r = u
            }
            Reflect.construct(e, [], t)
        } else {
            try {
                t.call()
            } catch (u) {
                r = u
            }
            e.call(t.prototype)
        } else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var s = u.stack.split(`
`), o = r.stack.split(`
`), i = s.length - 1, a = o.length - 1; 1 <= i && 0 <= a && s[i] !== o[a];) a--;
            for (; 1 <= i && 0 <= a; i--, a--) if (s[i] !== o[a]) {
                if (i !== 1 || a !== 1) do if (i--, a--, 0 > a || s[i] !== o[a]) {
                    var c = `
` + s[i].replace(" at new ", " at ");
                    return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                } while (1 <= i && 0 <= a);
                break
            }
        }
    } finally {
        Ki = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Fr(e) : ""
}

function C4(e) {
    switch (e.tag) {
        case 5:
            return Fr(e.type);
        case 16:
            return Fr("Lazy");
        case 13:
            return Fr("Suspense");
        case 19:
            return Fr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Qi(e.type, !1), e;
        case 11:
            return e = Qi(e.type.render, !1), e;
        case 1:
            return e = Qi(e.type, !0), e;
        default:
            return ""
    }
}

function Bl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Bn:
            return "Fragment";
        case Un:
            return "Portal";
        case Ml:
            return "Profiler";
        case Ja:
            return "StrictMode";
        case zl:
            return "Suspense";
        case Ul:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case bf:
            return (e.displayName || "Context") + ".Consumer";
        case Af:
            return (e._context.displayName || "Context") + ".Provider";
        case qa:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Xa:
            return t = e.displayName || null, t !== null ? t : Bl(e.type) || "Memo";
        case Ut:
            t = e._payload, e = e._init;
            try {
                return Bl(e(t))
            } catch {
            }
    }
    return null
}

function w4(e) {
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
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
            return Bl(t);
        case 8:
            return t === Ja ? "StrictMode" : "Mode";
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
            if (typeof t == "string") return t
    }
    return null
}

function rn(e) {
    switch (typeof e) {
        case"boolean":
        case"number":
        case"string":
        case"undefined":
            return e;
        case"object":
            return e;
        default:
            return ""
    }
}

function Lf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function x4(e) {
    var t = Lf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var s = n.get, o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0, get: function () {
                return s.call(this)
            }, set: function (i) {
                r = "" + i, o.call(this, i)
            }
        }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
            getValue: function () {
                return r
            }, setValue: function (i) {
                r = "" + i
            }, stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Ps(e) {
    e._valueTracker || (e._valueTracker = x4(e))
}

function Pf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Lf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function bo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Hl(e, t) {
    var n = t.checked;
    return re({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function fu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = rn(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function If(e, t) {
    t = t.checked, t != null && Za(e, "checked", t, !1)
}

function Wl(e, t) {
    If(e, t);
    var n = rn(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Vl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Vl(e, t.type, rn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function hu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Vl(e, t, n) {
    (t !== "number" || bo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}

var Mr = Array.isArray;

function Xn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
        for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + rn(n), t = null, s = 0; s < e.length; s++) {
            if (e[s].value === n) {
                e[s].selected = !0, r && (e[s].defaultSelected = !0);
                return
            }
            t !== null || e[s].disabled || (t = e[s])
        }
        t !== null && (t.selected = !0)
    }
}

function $l(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
    return re({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
}

function pu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(T(92));
            if (Mr(n)) {
                if (1 < n.length) throw Error(T(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {initialValue: rn(n)}
}

function Ff(e, t) {
    var n = rn(t.value), r = rn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function mu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Mf(e) {
    switch (e) {
        case"svg":
            return "http://www.w3.org/2000/svg";
        case"math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Gl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Mf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}

var Is, zf = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, s) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t; else {
        for (Is = Is || document.createElement("div"), Is.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Is.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function es(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}

var Vr = {
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
    strokeWidth: !0
}, S4 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vr).forEach(function (e) {
    S4.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Vr[t] = Vr[e]
    })
});

function Uf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Vr.hasOwnProperty(e) && Vr[e] ? ("" + t).trim() : t + "px"
}

function Bf(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, s = Uf(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s
    }
}

var k4 = re({menuitem: !0}, {
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
    wbr: !0
});

function Kl(e, t) {
    if (t) {
        if (k4[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(T(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(T(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(T(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(T(62))
    }
}

function Ql(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case"annotation-xml":
        case"color-profile":
        case"font-face":
        case"font-face-src":
        case"font-face-uri":
        case"font-face-format":
        case"font-face-name":
        case"missing-glyph":
            return !1;
        default:
            return !0
    }
}

var Yl = null;

function ec(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}

var Zl = null, er = null, tr = null;

function gu(e) {
    if (e = Es(e)) {
        if (typeof Zl != "function") throw Error(T(280));
        var t = e.stateNode;
        t && (t = _i(t), Zl(e.stateNode, e.type, t))
    }
}

function Hf(e) {
    er ? tr ? tr.push(e) : tr = [e] : er = e
}

function Wf() {
    if (er) {
        var e = er, t = tr;
        if (tr = er = null, gu(e), t) for (e = 0; e < t.length; e++) gu(t[e])
    }
}

function Vf(e, t) {
    return e(t)
}

function $f() {
}

var Yi = !1;

function Gf(e, t, n) {
    if (Yi) return e(t, n);
    Yi = !0;
    try {
        return Vf(e, t, n)
    } finally {
        Yi = !1, (er !== null || tr !== null) && ($f(), Wf())
    }
}

function ts(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = _i(n);
    if (r === null) return null;
    n = r[t];
    e:switch (t) {
        case"onClick":
        case"onClickCapture":
        case"onDoubleClick":
        case"onDoubleClickCapture":
        case"onMouseDown":
        case"onMouseDownCapture":
        case"onMouseMove":
        case"onMouseMoveCapture":
        case"onMouseUp":
        case"onMouseUpCapture":
        case"onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(T(231, t, typeof n));
    return n
}

var Jl = !1;
if (At) try {
    var jr = {};
    Object.defineProperty(jr, "passive", {
        get: function () {
            Jl = !0
        }
    }), window.addEventListener("test", jr, jr), window.removeEventListener("test", jr, jr)
} catch {
    Jl = !1
}

function E4(e, t, n, r, s, o, i, a, c) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (f) {
        this.onError(f)
    }
}

var $r = !1, Ro = null, Lo = !1, ql = null, j4 = {
    onError: function (e) {
        $r = !0, Ro = e
    }
};

function N4(e, t, n, r, s, o, i, a, c) {
    $r = !1, Ro = null, E4.apply(j4, arguments)
}

function T4(e, t, n, r, s, o, i, a, c) {
    if (N4.apply(this, arguments), $r) {
        if ($r) {
            var u = Ro;
            $r = !1, Ro = null
        } else throw Error(T(198));
        Lo || (Lo = !0, ql = u)
    }
}

function Dn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return;) t = t.return; else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Kf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function yu(e) {
    if (Dn(e) !== e) throw Error(T(188))
}

function D4(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Dn(e), t === null) throw Error(T(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var s = n.return;
        if (s === null) break;
        var o = s.alternate;
        if (o === null) {
            if (r = s.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (s.child === o.child) {
            for (o = s.child; o;) {
                if (o === n) return yu(s), e;
                if (o === r) return yu(s), t;
                o = o.sibling
            }
            throw Error(T(188))
        }
        if (n.return !== r.return) n = s, r = o; else {
            for (var i = !1, a = s.child; a;) {
                if (a === n) {
                    i = !0, n = s, r = o;
                    break
                }
                if (a === r) {
                    i = !0, r = s, n = o;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = o.child; a;) {
                    if (a === n) {
                        i = !0, n = o, r = s;
                        break
                    }
                    if (a === r) {
                        i = !0, r = o, n = s;
                        break
                    }
                    a = a.sibling
                }
                if (!i) throw Error(T(189))
            }
        }
        if (n.alternate !== r) throw Error(T(190))
    }
    if (n.tag !== 3) throw Error(T(188));
    return n.stateNode.current === n ? e : t
}

function Qf(e) {
    return e = D4(e), e !== null ? Yf(e) : null
}

function Yf(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Yf(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}

var Zf = Ve.unstable_scheduleCallback, _u = Ve.unstable_cancelCallback, O4 = Ve.unstable_shouldYield,
    A4 = Ve.unstable_requestPaint, le = Ve.unstable_now, b4 = Ve.unstable_getCurrentPriorityLevel,
    tc = Ve.unstable_ImmediatePriority, Jf = Ve.unstable_UserBlockingPriority, Po = Ve.unstable_NormalPriority,
    R4 = Ve.unstable_LowPriority, qf = Ve.unstable_IdlePriority, pi = null, vt = null;

function L4(e) {
    if (vt && typeof vt.onCommitFiberRoot == "function") try {
        vt.onCommitFiberRoot(pi, e, void 0, (e.current.flags & 128) === 128)
    } catch {
    }
}

var ut = Math.clz32 ? Math.clz32 : F4, P4 = Math.log, I4 = Math.LN2;

function F4(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (P4(e) / I4 | 0) | 0
}

var Fs = 64, Ms = 4194304;

function zr(e) {
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
            return e
    }
}

function Io(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, s = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
        var a = i & ~s;
        a !== 0 ? r = zr(a) : (o &= i, o !== 0 && (r = zr(o)))
    } else i = n & ~s, i !== 0 ? r = zr(i) : o !== 0 && (r = zr(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & s) && (s = r & -r, o = t & -t, s >= o || s === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - ut(t), s = 1 << n, r |= e[n], t &= ~s;
    return r
}

function M4(e, t) {
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
            return -1
    }
}

function z4(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var i = 31 - ut(o), a = 1 << i, c = s[i];
        c === -1 ? (!(a & n) || a & r) && (s[i] = M4(a, t)) : c <= t && (e.expiredLanes |= a), o &= ~a
    }
}

function Xl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Xf() {
    var e = Fs;
    return Fs <<= 1, !(Fs & 4194240) && (Fs = 64), e
}

function Zi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Ss(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ut(t), e[t] = n
}

function U4(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var s = 31 - ut(n), o = 1 << s;
        t[s] = 0, r[s] = -1, e[s] = -1, n &= ~o
    }
}

function nc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - ut(n), s = 1 << r;
        s & t | e[r] & t && (e[r] |= t), n &= ~s
    }
}

var H = 0;

function eh(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}

var th, rc, nh, rh, sh, ea = !1, zs = [], Qt = null, Yt = null, Zt = null, ns = new Map, rs = new Map, Ht = [],
    B4 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function vu(e, t) {
    switch (e) {
        case"focusin":
        case"focusout":
            Qt = null;
            break;
        case"dragenter":
        case"dragleave":
            Yt = null;
            break;
        case"mouseover":
        case"mouseout":
            Zt = null;
            break;
        case"pointerover":
        case"pointerout":
            ns.delete(t.pointerId);
            break;
        case"gotpointercapture":
        case"lostpointercapture":
            rs.delete(t.pointerId)
    }
}

function Nr(e, t, n, r, s, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [s]
    }, t !== null && (t = Es(t), t !== null && rc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e)
}

function H4(e, t, n, r, s) {
    switch (t) {
        case"focusin":
            return Qt = Nr(Qt, e, t, n, r, s), !0;
        case"dragenter":
            return Yt = Nr(Yt, e, t, n, r, s), !0;
        case"mouseover":
            return Zt = Nr(Zt, e, t, n, r, s), !0;
        case"pointerover":
            var o = s.pointerId;
            return ns.set(o, Nr(ns.get(o) || null, e, t, n, r, s)), !0;
        case"gotpointercapture":
            return o = s.pointerId, rs.set(o, Nr(rs.get(o) || null, e, t, n, r, s)), !0
    }
    return !1
}

function oh(e) {
    var t = gn(e.target);
    if (t !== null) {
        var n = Dn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Kf(n), t !== null) {
                    e.blockedOn = t, sh(e.priority, function () {
                        nh(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function mo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = ta(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Yl = r, n.target.dispatchEvent(r), Yl = null
        } else return t = Es(n), t !== null && rc(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Cu(e, t, n) {
    mo(e) && n.delete(t)
}

function W4() {
    ea = !1, Qt !== null && mo(Qt) && (Qt = null), Yt !== null && mo(Yt) && (Yt = null), Zt !== null && mo(Zt) && (Zt = null), ns.forEach(Cu), rs.forEach(Cu)
}

function Tr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ea || (ea = !0, Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, W4)))
}

function ss(e) {
    function t(s) {
        return Tr(s, e)
    }

    if (0 < zs.length) {
        Tr(zs[0], e);
        for (var n = 1; n < zs.length; n++) {
            var r = zs[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Qt !== null && Tr(Qt, e), Yt !== null && Tr(Yt, e), Zt !== null && Tr(Zt, e), ns.forEach(t), rs.forEach(t), n = 0; n < Ht.length; n++) r = Ht[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ht.length && (n = Ht[0], n.blockedOn === null);) oh(n), n.blockedOn === null && Ht.shift()
}

var nr = It.ReactCurrentBatchConfig, Fo = !0;

function V4(e, t, n, r) {
    var s = H, o = nr.transition;
    nr.transition = null;
    try {
        H = 1, sc(e, t, n, r)
    } finally {
        H = s, nr.transition = o
    }
}

function $4(e, t, n, r) {
    var s = H, o = nr.transition;
    nr.transition = null;
    try {
        H = 4, sc(e, t, n, r)
    } finally {
        H = s, nr.transition = o
    }
}

function sc(e, t, n, r) {
    if (Fo) {
        var s = ta(e, t, n, r);
        if (s === null) il(e, t, r, Mo, n), vu(e, r); else if (H4(s, e, t, n, r)) r.stopPropagation(); else if (vu(e, r), t & 4 && -1 < B4.indexOf(e)) {
            for (; s !== null;) {
                var o = Es(s);
                if (o !== null && th(o), o = ta(e, t, n, r), o === null && il(e, t, r, Mo, n), o === s) break;
                s = o
            }
            s !== null && r.stopPropagation()
        } else il(e, t, r, null, n)
    }
}

var Mo = null;

function ta(e, t, n, r) {
    if (Mo = null, e = ec(r), e = gn(e), e !== null) if (t = Dn(e), t === null) e = null; else if (n = t.tag, n === 13) {
        if (e = Kf(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Mo = e, null
}

function ih(e) {
    switch (e) {
        case"cancel":
        case"click":
        case"close":
        case"contextmenu":
        case"copy":
        case"cut":
        case"auxclick":
        case"dblclick":
        case"dragend":
        case"dragstart":
        case"drop":
        case"focusin":
        case"focusout":
        case"input":
        case"invalid":
        case"keydown":
        case"keypress":
        case"keyup":
        case"mousedown":
        case"mouseup":
        case"paste":
        case"pause":
        case"play":
        case"pointercancel":
        case"pointerdown":
        case"pointerup":
        case"ratechange":
        case"reset":
        case"resize":
        case"seeked":
        case"submit":
        case"touchcancel":
        case"touchend":
        case"touchstart":
        case"volumechange":
        case"change":
        case"selectionchange":
        case"textInput":
        case"compositionstart":
        case"compositionend":
        case"compositionupdate":
        case"beforeblur":
        case"afterblur":
        case"beforeinput":
        case"blur":
        case"fullscreenchange":
        case"focus":
        case"hashchange":
        case"popstate":
        case"select":
        case"selectstart":
            return 1;
        case"drag":
        case"dragenter":
        case"dragexit":
        case"dragleave":
        case"dragover":
        case"mousemove":
        case"mouseout":
        case"mouseover":
        case"pointermove":
        case"pointerout":
        case"pointerover":
        case"scroll":
        case"toggle":
        case"touchmove":
        case"wheel":
        case"mouseenter":
        case"mouseleave":
        case"pointerenter":
        case"pointerleave":
            return 4;
        case"message":
            switch (b4()) {
                case tc:
                    return 1;
                case Jf:
                    return 4;
                case Po:
                case R4:
                    return 16;
                case qf:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}

var $t = null, oc = null, go = null;

function lh() {
    if (go) return go;
    var e, t = oc, n = t.length, r, s = "value" in $t ? $t.value : $t.textContent, o = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === s[o - r]; r++) ;
    return go = s.slice(e, 1 < r ? 1 - r : void 0)
}

function yo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Us() {
    return !0
}

function wu() {
    return !1
}

function Qe(e) {
    function t(n, r, s, o, i) {
        this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Us : wu, this.isPropagationStopped = wu, this
    }

    return re(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Us)
        }, stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Us)
        }, persist: function () {
        }, isPersistent: Us
    }), t
}

var vr = {
        eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
            return e.timeStamp || Date.now()
        }, defaultPrevented: 0, isTrusted: 0
    }, ic = Qe(vr), ks = re({}, vr, {view: 0, detail: 0}), G4 = Qe(ks), Ji, qi, Dr, mi = re({}, ks, {
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
        getModifierState: lc,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== Dr && (Dr && e.type === "mousemove" ? (Ji = e.screenX - Dr.screenX, qi = e.screenY - Dr.screenY) : qi = Ji = 0, Dr = e), Ji)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : qi
        }
    }), xu = Qe(mi), K4 = re({}, mi, {dataTransfer: 0}), Q4 = Qe(K4), Y4 = re({}, ks, {relatedTarget: 0}), Xi = Qe(Y4),
    Z4 = re({}, vr, {animationName: 0, elapsedTime: 0, pseudoElement: 0}), J4 = Qe(Z4), q4 = re({}, vr, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), X4 = Qe(q4), e1 = re({}, vr, {data: 0}), Su = Qe(e1), t1 = {
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
        MozPrintableKey: "Unidentified"
    }, n1 = {
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
        224: "Meta"
    }, r1 = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

function s1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = r1[e]) ? !!t[e] : !1
}

function lc() {
    return s1
}

var o1 = re({}, ks, {
    key: function (e) {
        if (e.key) {
            var t = t1[e.key] || e.key;
            if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = yo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? n1[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lc,
    charCode: function (e) {
        return e.type === "keypress" ? yo(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? yo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
}), i1 = Qe(o1), l1 = re({}, mi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
}), ku = Qe(l1), a1 = re({}, ks, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lc
}), c1 = Qe(a1), u1 = re({}, vr, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}), d1 = Qe(u1), f1 = re({}, mi, {
    deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    }, deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    }, deltaZ: 0, deltaMode: 0
}), h1 = Qe(f1), p1 = [9, 13, 27, 32], ac = At && "CompositionEvent" in window, Gr = null;
At && "documentMode" in document && (Gr = document.documentMode);
var m1 = At && "TextEvent" in window && !Gr, ah = At && (!ac || Gr && 8 < Gr && 11 >= Gr), Eu = " ", ju = !1;

function ch(e, t) {
    switch (e) {
        case"keyup":
            return p1.indexOf(t.keyCode) !== -1;
        case"keydown":
            return t.keyCode !== 229;
        case"keypress":
        case"mousedown":
        case"focusout":
            return !0;
        default:
            return !1
    }
}

function uh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}

var Hn = !1;

function g1(e, t) {
    switch (e) {
        case"compositionend":
            return uh(t);
        case"keypress":
            return t.which !== 32 ? null : (ju = !0, Eu);
        case"textInput":
            return e = t.data, e === Eu && ju ? null : e;
        default:
            return null
    }
}

function y1(e, t) {
    if (Hn) return e === "compositionend" || !ac && ch(e, t) ? (e = lh(), go = oc = $t = null, Hn = !1, e) : null;
    switch (e) {
        case"paste":
            return null;
        case"keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case"compositionend":
            return ah && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}

var _1 = {
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
    week: !0
};

function Nu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!_1[e.type] : t === "textarea"
}

function dh(e, t, n, r) {
    Hf(r), t = zo(t, "onChange"), 0 < t.length && (n = new ic("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}

var Kr = null, os = null;

function v1(e) {
    xh(e, 0)
}

function gi(e) {
    var t = $n(e);
    if (Pf(t)) return e
}

function C1(e, t) {
    if (e === "change") return t
}

var fh = !1;
if (At) {
    var el;
    if (At) {
        var tl = "oninput" in document;
        if (!tl) {
            var Tu = document.createElement("div");
            Tu.setAttribute("oninput", "return;"), tl = typeof Tu.oninput == "function"
        }
        el = tl
    } else el = !1;
    fh = el && (!document.documentMode || 9 < document.documentMode)
}

function Du() {
    Kr && (Kr.detachEvent("onpropertychange", hh), os = Kr = null)
}

function hh(e) {
    if (e.propertyName === "value" && gi(os)) {
        var t = [];
        dh(t, os, e, ec(e)), Gf(v1, t)
    }
}

function w1(e, t, n) {
    e === "focusin" ? (Du(), Kr = t, os = n, Kr.attachEvent("onpropertychange", hh)) : e === "focusout" && Du()
}

function x1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return gi(os)
}

function S1(e, t) {
    if (e === "click") return gi(t)
}

function k1(e, t) {
    if (e === "input" || e === "change") return gi(t)
}

function E1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}

var ft = typeof Object.is == "function" ? Object.is : E1;

function is(e, t) {
    if (ft(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!Fl.call(t, s) || !ft(e[s], t[s])) return !1
    }
    return !0
}

function Ou(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Au(e, t) {
    var n = Ou(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {node: n, offset: t - e};
            e = r
        }
        e:{
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ou(n)
    }
}

function ph(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ph(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function mh() {
    for (var e = window, t = bo(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow; else break;
        t = bo(e.document)
    }
    return t
}

function cc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function j1(e) {
    var t = mh(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ph(n.ownerDocument.documentElement, n)) {
        if (r !== null && cc(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var s = n.textContent.length, o = Math.min(r.start, s);
                r = r.end === void 0 ? o : Math.min(r.end, s), !e.extend && o > r && (s = r, r = o, o = s), s = Au(n, o);
                var i = Au(n, r);
                s && i && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}

var N1 = At && "documentMode" in document && 11 >= document.documentMode, Wn = null, na = null, Qr = null, ra = !1;

function bu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ra || Wn == null || Wn !== bo(r) || (r = Wn, "selectionStart" in r && cc(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Qr && is(Qr, r) || (Qr = r, r = zo(na, "onSelect"), 0 < r.length && (t = new ic("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Wn)))
}

function Bs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}

var Vn = {
    animationend: Bs("Animation", "AnimationEnd"),
    animationiteration: Bs("Animation", "AnimationIteration"),
    animationstart: Bs("Animation", "AnimationStart"),
    transitionend: Bs("Transition", "TransitionEnd")
}, nl = {}, gh = {};
At && (gh = document.createElement("div").style, "AnimationEvent" in window || (delete Vn.animationend.animation, delete Vn.animationiteration.animation, delete Vn.animationstart.animation), "TransitionEvent" in window || delete Vn.transitionend.transition);

function yi(e) {
    if (nl[e]) return nl[e];
    if (!Vn[e]) return e;
    var t = Vn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in gh) return nl[e] = t[n];
    return e
}

var yh = yi("animationend"), _h = yi("animationiteration"), vh = yi("animationstart"), Ch = yi("transitionend"),
    wh = new Map,
    Ru = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function an(e, t) {
    wh.set(e, t), Tn(t, [e])
}

for (var rl = 0; rl < Ru.length; rl++) {
    var sl = Ru[rl], T1 = sl.toLowerCase(), D1 = sl[0].toUpperCase() + sl.slice(1);
    an(T1, "on" + D1)
}
an(yh, "onAnimationEnd");
an(_h, "onAnimationIteration");
an(vh, "onAnimationStart");
an("dblclick", "onDoubleClick");
an("focusin", "onFocus");
an("focusout", "onBlur");
an(Ch, "onTransitionEnd");
lr("onMouseEnter", ["mouseout", "mouseover"]);
lr("onMouseLeave", ["mouseout", "mouseover"]);
lr("onPointerEnter", ["pointerout", "pointerover"]);
lr("onPointerLeave", ["pointerout", "pointerover"]);
Tn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    O1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));

function Lu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, T4(r, t, void 0, e), e.currentTarget = null
}

function xh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n], s = r.event;
        r = r.listeners;
        e:{
            var o = void 0;
            if (t) for (var i = r.length - 1; 0 <= i; i--) {
                var a = r[i], c = a.instance, u = a.currentTarget;
                if (a = a.listener, c !== o && s.isPropagationStopped()) break e;
                Lu(s, a, u), o = c
            } else for (i = 0; i < r.length; i++) {
                if (a = r[i], c = a.instance, u = a.currentTarget, a = a.listener, c !== o && s.isPropagationStopped()) break e;
                Lu(s, a, u), o = c
            }
        }
    }
    if (Lo) throw e = ql, Lo = !1, ql = null, e
}

function Z(e, t) {
    var n = t[aa];
    n === void 0 && (n = t[aa] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Sh(t, e, 2, !1), n.add(r))
}

function ol(e, t, n) {
    var r = 0;
    t && (r |= 4), Sh(n, e, r, t)
}

var Hs = "_reactListening" + Math.random().toString(36).slice(2);

function ls(e) {
    if (!e[Hs]) {
        e[Hs] = !0, Of.forEach(function (n) {
            n !== "selectionchange" && (O1.has(n) || ol(n, !1, e), ol(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Hs] || (t[Hs] = !0, ol("selectionchange", !1, t))
    }
}

function Sh(e, t, n, r) {
    switch (ih(t)) {
        case 1:
            var s = V4;
            break;
        case 4:
            s = $4;
            break;
        default:
            s = sc
    }
    n = s.bind(null, t, n, e), s = void 0, !Jl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: s
    }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {passive: s}) : e.addEventListener(t, n, !1)
}

function il(e, t, n, r, s) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e:for (; ;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var a = r.stateNode.containerInfo;
            if (a === s || a.nodeType === 8 && a.parentNode === s) break;
            if (i === 4) for (i = r.return; i !== null;) {
                var c = i.tag;
                if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo, c === s || c.nodeType === 8 && c.parentNode === s)) return;
                i = i.return
            }
            for (; a !== null;) {
                if (i = gn(a), i === null) return;
                if (c = i.tag, c === 5 || c === 6) {
                    r = o = i;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    Gf(function () {
        var u = o, f = ec(n), d = [];
        e:{
            var g = wh.get(e);
            if (g !== void 0) {
                var C = ic, y = e;
                switch (e) {
                    case"keypress":
                        if (yo(n) === 0) break e;
                    case"keydown":
                    case"keyup":
                        C = i1;
                        break;
                    case"focusin":
                        y = "focus", C = Xi;
                        break;
                    case"focusout":
                        y = "blur", C = Xi;
                        break;
                    case"beforeblur":
                    case"afterblur":
                        C = Xi;
                        break;
                    case"click":
                        if (n.button === 2) break e;
                    case"auxclick":
                    case"dblclick":
                    case"mousedown":
                    case"mousemove":
                    case"mouseup":
                    case"mouseout":
                    case"mouseover":
                    case"contextmenu":
                        C = xu;
                        break;
                    case"drag":
                    case"dragend":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"dragstart":
                    case"drop":
                        C = Q4;
                        break;
                    case"touchcancel":
                    case"touchend":
                    case"touchmove":
                    case"touchstart":
                        C = c1;
                        break;
                    case yh:
                    case _h:
                    case vh:
                        C = J4;
                        break;
                    case Ch:
                        C = d1;
                        break;
                    case"scroll":
                        C = G4;
                        break;
                    case"wheel":
                        C = h1;
                        break;
                    case"copy":
                    case"cut":
                    case"paste":
                        C = X4;
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"pointerup":
                        C = ku
                }
                var _ = (t & 4) !== 0, x = !_ && e === "scroll", p = _ ? g !== null ? g + "Capture" : null : g;
                _ = [];
                for (var h = u, m; h !== null;) {
                    m = h;
                    var w = m.stateNode;
                    if (m.tag === 5 && w !== null && (m = w, p !== null && (w = ts(h, p), w != null && _.push(as(h, w, m)))), x) break;
                    h = h.return
                }
                0 < _.length && (g = new C(g, y, null, n, f), d.push({event: g, listeners: _}))
            }
        }
        if (!(t & 7)) {
            e:{
                if (g = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", g && n !== Yl && (y = n.relatedTarget || n.fromElement) && (gn(y) || y[bt])) break e;
                if ((C || g) && (g = f.window === f ? f : (g = f.ownerDocument) ? g.defaultView || g.parentWindow : window, C ? (y = n.relatedTarget || n.toElement, C = u, y = y ? gn(y) : null, y !== null && (x = Dn(y), y !== x || y.tag !== 5 && y.tag !== 6) && (y = null)) : (C = null, y = u), C !== y)) {
                    if (_ = xu, w = "onMouseLeave", p = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (_ = ku, w = "onPointerLeave", p = "onPointerEnter", h = "pointer"), x = C == null ? g : $n(C), m = y == null ? g : $n(y), g = new _(w, h + "leave", C, n, f), g.target = x, g.relatedTarget = m, w = null, gn(f) === u && (_ = new _(p, h + "enter", y, n, f), _.target = m, _.relatedTarget = x, w = _), x = w, C && y) t:{
                        for (_ = C, p = y, h = 0, m = _; m; m = Pn(m)) h++;
                        for (m = 0, w = p; w; w = Pn(w)) m++;
                        for (; 0 < h - m;) _ = Pn(_), h--;
                        for (; 0 < m - h;) p = Pn(p), m--;
                        for (; h--;) {
                            if (_ === p || p !== null && _ === p.alternate) break t;
                            _ = Pn(_), p = Pn(p)
                        }
                        _ = null
                    } else _ = null;
                    C !== null && Pu(d, g, C, _, !1), y !== null && x !== null && Pu(d, x, y, _, !0)
                }
            }
            e:{
                if (g = u ? $n(u) : window, C = g.nodeName && g.nodeName.toLowerCase(), C === "select" || C === "input" && g.type === "file") var E = C1; else if (Nu(g)) if (fh) E = k1; else {
                    E = x1;
                    var j = w1
                } else (C = g.nodeName) && C.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (E = S1);
                if (E && (E = E(e, u))) {
                    dh(d, E, n, f);
                    break e
                }
                j && j(e, g, u), e === "focusout" && (j = g._wrapperState) && j.controlled && g.type === "number" && Vl(g, "number", g.value)
            }
            switch (j = u ? $n(u) : window, e) {
                case"focusin":
                    (Nu(j) || j.contentEditable === "true") && (Wn = j, na = u, Qr = null);
                    break;
                case"focusout":
                    Qr = na = Wn = null;
                    break;
                case"mousedown":
                    ra = !0;
                    break;
                case"contextmenu":
                case"mouseup":
                case"dragend":
                    ra = !1, bu(d, n, f);
                    break;
                case"selectionchange":
                    if (N1) break;
                case"keydown":
                case"keyup":
                    bu(d, n, f)
            }
            var N;
            if (ac) e:{
                switch (e) {
                    case"compositionstart":
                        var A = "onCompositionStart";
                        break e;
                    case"compositionend":
                        A = "onCompositionEnd";
                        break e;
                    case"compositionupdate":
                        A = "onCompositionUpdate";
                        break e
                }
                A = void 0
            } else Hn ? ch(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
            A && (ah && n.locale !== "ko" && (Hn || A !== "onCompositionStart" ? A === "onCompositionEnd" && Hn && (N = lh()) : ($t = f, oc = "value" in $t ? $t.value : $t.textContent, Hn = !0)), j = zo(u, A), 0 < j.length && (A = new Su(A, e, null, n, f), d.push({
                event: A,
                listeners: j
            }), N ? A.data = N : (N = uh(n), N !== null && (A.data = N)))), (N = m1 ? g1(e, n) : y1(e, n)) && (u = zo(u, "onBeforeInput"), 0 < u.length && (f = new Su("onBeforeInput", "beforeinput", null, n, f), d.push({
                event: f,
                listeners: u
            }), f.data = N))
        }
        xh(d, t)
    })
}

function as(e, t, n) {
    return {instance: e, listener: t, currentTarget: n}
}

function zo(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var s = e, o = s.stateNode;
        s.tag === 5 && o !== null && (s = o, o = ts(e, n), o != null && r.unshift(as(e, o, s)), o = ts(e, t), o != null && r.push(as(e, o, s))), e = e.return
    }
    return r
}

function Pn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Pu(e, t, n, r, s) {
    for (var o = t._reactName, i = []; n !== null && n !== r;) {
        var a = n, c = a.alternate, u = a.stateNode;
        if (c !== null && c === r) break;
        a.tag === 5 && u !== null && (a = u, s ? (c = ts(n, o), c != null && i.unshift(as(n, c, a))) : s || (c = ts(n, o), c != null && i.push(as(n, c, a)))), n = n.return
    }
    i.length !== 0 && e.push({event: t, listeners: i})
}

var A1 = /\r\n?/g, b1 = /\u0000|\uFFFD/g;

function Iu(e) {
    return (typeof e == "string" ? e : "" + e).replace(A1, `
`).replace(b1, "")
}

function Ws(e, t, n) {
    if (t = Iu(t), Iu(e) !== t && n) throw Error(T(425))
}

function Uo() {
}

var sa = null, oa = null;

function ia(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}

var la = typeof setTimeout == "function" ? setTimeout : void 0,
    R1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Fu = typeof Promise == "function" ? Promise : void 0,
    L1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fu < "u" ? function (e) {
        return Fu.resolve(null).then(e).catch(P1)
    } : la;

function P1(e) {
    setTimeout(function () {
        throw e
    })
}

function ll(e, t) {
    var n = t, r = 0;
    do {
        var s = n.nextSibling;
        if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
            if (r === 0) {
                e.removeChild(s), ss(t);
                return
            }
            r--
        } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = s
    } while (n);
    ss(t)
}

function Jt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Mu(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}

var Cr = Math.random().toString(36).slice(2), yt = "__reactFiber$" + Cr, cs = "__reactProps$" + Cr,
    bt = "__reactContainer$" + Cr, aa = "__reactEvents$" + Cr, I1 = "__reactListeners$" + Cr,
    F1 = "__reactHandles$" + Cr;

function gn(e) {
    var t = e[yt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[bt] || n[yt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Mu(e); e !== null;) {
                if (n = e[yt]) return n;
                e = Mu(e)
            }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Es(e) {
    return e = e[yt] || e[bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function $n(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(T(33))
}

function _i(e) {
    return e[cs] || null
}

var ca = [], Gn = -1;

function cn(e) {
    return {current: e}
}

function J(e) {
    0 > Gn || (e.current = ca[Gn], ca[Gn] = null, Gn--)
}

function Q(e, t) {
    Gn++, ca[Gn] = e.current, e.current = t
}

var sn = {}, je = cn(sn), Pe = cn(!1), xn = sn;

function ar(e, t) {
    var n = e.type.contextTypes;
    if (!n) return sn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, o;
    for (o in n) s[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s
}

function Ie(e) {
    return e = e.childContextTypes, e != null
}

function Bo() {
    J(Pe), J(je)
}

function zu(e, t, n) {
    if (je.current !== sn) throw Error(T(168));
    Q(je, t), Q(Pe, n)
}

function kh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in t)) throw Error(T(108, w4(e) || "Unknown", s));
    return re({}, n, r)
}

function Ho(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sn, xn = je.current, Q(je, e), Q(Pe, Pe.current), !0
}

function Uu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(T(169));
    n ? (e = kh(e, t, xn), r.__reactInternalMemoizedMergedChildContext = e, J(Pe), J(je), Q(je, e)) : J(Pe), Q(Pe, n)
}

var Et = null, vi = !1, al = !1;

function Eh(e) {
    Et === null ? Et = [e] : Et.push(e)
}

function M1(e) {
    vi = !0, Eh(e)
}

function un() {
    if (!al && Et !== null) {
        al = !0;
        var e = 0, t = H;
        try {
            var n = Et;
            for (H = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Et = null, vi = !1
        } catch (s) {
            throw Et !== null && (Et = Et.slice(e + 1)), Zf(tc, un), s
        } finally {
            H = t, al = !1
        }
    }
    return null
}

var Kn = [], Qn = 0, Wo = null, Vo = 0, Ze = [], Je = 0, Sn = null, Nt = 1, Tt = "";

function hn(e, t) {
    Kn[Qn++] = Vo, Kn[Qn++] = Wo, Wo = e, Vo = t
}

function jh(e, t, n) {
    Ze[Je++] = Nt, Ze[Je++] = Tt, Ze[Je++] = Sn, Sn = e;
    var r = Nt;
    e = Tt;
    var s = 32 - ut(r) - 1;
    r &= ~(1 << s), n += 1;
    var o = 32 - ut(t) + s;
    if (30 < o) {
        var i = s - s % 5;
        o = (r & (1 << i) - 1).toString(32), r >>= i, s -= i, Nt = 1 << 32 - ut(t) + s | n << s | r, Tt = o + e
    } else Nt = 1 << o | n << s | r, Tt = e
}

function uc(e) {
    e.return !== null && (hn(e, 1), jh(e, 1, 0))
}

function dc(e) {
    for (; e === Wo;) Wo = Kn[--Qn], Kn[Qn] = null, Vo = Kn[--Qn], Kn[Qn] = null;
    for (; e === Sn;) Sn = Ze[--Je], Ze[Je] = null, Tt = Ze[--Je], Ze[Je] = null, Nt = Ze[--Je], Ze[Je] = null
}

var We = null, Be = null, q = !1, at = null;

function Nh(e, t) {
    var n = Xe(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Bu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, We = e, Be = Jt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, We = e, Be = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Sn !== null ? {
                id: Nt,
                overflow: Tt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Xe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, We = e, Be = null, !0) : !1;
        default:
            return !1
    }
}

function ua(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function da(e) {
    if (q) {
        var t = Be;
        if (t) {
            var n = t;
            if (!Bu(e, t)) {
                if (ua(e)) throw Error(T(418));
                t = Jt(n.nextSibling);
                var r = We;
                t && Bu(e, t) ? Nh(r, n) : (e.flags = e.flags & -4097 | 2, q = !1, We = e)
            }
        } else {
            if (ua(e)) throw Error(T(418));
            e.flags = e.flags & -4097 | 2, q = !1, We = e
        }
    }
}

function Hu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    We = e
}

function Vs(e) {
    if (e !== We) return !1;
    if (!q) return Hu(e), q = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ia(e.type, e.memoizedProps)), t && (t = Be)) {
        if (ua(e)) throw Th(), Error(T(418));
        for (; t;) Nh(e, t), t = Jt(t.nextSibling)
    }
    if (Hu(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(T(317));
        e:{
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Be = Jt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Be = null
        }
    } else Be = We ? Jt(e.stateNode.nextSibling) : null;
    return !0
}

function Th() {
    for (var e = Be; e;) e = Jt(e.nextSibling)
}

function cr() {
    Be = We = null, q = !1
}

function fc(e) {
    at === null ? at = [e] : at.push(e)
}

var z1 = It.ReactCurrentBatchConfig;

function it(e, t) {
    if (e && e.defaultProps) {
        t = re({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

var $o = cn(null), Go = null, Yn = null, hc = null;

function pc() {
    hc = Yn = Go = null
}

function mc(e) {
    var t = $o.current;
    J($o), e._currentValue = t
}

function fa(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function rr(e, t) {
    Go = e, hc = Yn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Le = !0), e.firstContext = null)
}

function nt(e) {
    var t = e._currentValue;
    if (hc !== e) if (e = {context: e, memoizedValue: t, next: null}, Yn === null) {
        if (Go === null) throw Error(T(308));
        Yn = e, Go.dependencies = {lanes: 0, firstContext: e}
    } else Yn = Yn.next = e;
    return t
}

var yn = null;

function gc(e) {
    yn === null ? yn = [e] : yn.push(e)
}

function Dh(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n, gc(t)) : (n.next = s.next, s.next = n), t.interleaved = n, Rt(e, r)
}

function Rt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}

var Bt = !1;

function yc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {pending: null, interleaved: null, lanes: 0},
        effects: null
    }
}

function Oh(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Dt(e, t) {
    return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
}

function qt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, U & 2) {
        var s = r.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, Rt(e, n)
    }
    return s = r.interleaved, s === null ? (t.next = t, gc(r)) : (t.next = s.next, s.next = t), r.interleaved = t, Rt(e, n)
}

function _o(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, nc(e, n)
    }
}

function Wu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var s = null, o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? s = o = i : o = o.next = i, n = n.next
            } while (n !== null);
            o === null ? s = o = t : o = o.next = t
        } else s = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Ko(e, t, n, r) {
    var s = e.updateQueue;
    Bt = !1;
    var o = s.firstBaseUpdate, i = s.lastBaseUpdate, a = s.shared.pending;
    if (a !== null) {
        s.shared.pending = null;
        var c = a, u = c.next;
        c.next = null, i === null ? o = u : i.next = u, i = c;
        var f = e.alternate;
        f !== null && (f = f.updateQueue, a = f.lastBaseUpdate, a !== i && (a === null ? f.firstBaseUpdate = u : a.next = u, f.lastBaseUpdate = c))
    }
    if (o !== null) {
        var d = s.baseState;
        i = 0, f = u = c = null, a = o;
        do {
            var g = a.lane, C = a.eventTime;
            if ((r & g) === g) {
                f !== null && (f = f.next = {
                    eventTime: C,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e:{
                    var y = e, _ = a;
                    switch (g = t, C = n, _.tag) {
                        case 1:
                            if (y = _.payload, typeof y == "function") {
                                d = y.call(C, d, g);
                                break e
                            }
                            d = y;
                            break e;
                        case 3:
                            y.flags = y.flags & -65537 | 128;
                        case 0:
                            if (y = _.payload, g = typeof y == "function" ? y.call(C, d, g) : y, g == null) break e;
                            d = re({}, d, g);
                            break e;
                        case 2:
                            Bt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, g = s.effects, g === null ? s.effects = [a] : g.push(a))
            } else C = {
                eventTime: C,
                lane: g,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, f === null ? (u = f = C, c = d) : f = f.next = C, i |= g;
            if (a = a.next, a === null) {
                if (a = s.shared.pending, a === null) break;
                g = a, a = g.next, g.next = null, s.lastBaseUpdate = g, s.shared.pending = null
            }
        } while (!0);
        if (f === null && (c = d), s.baseState = c, s.firstBaseUpdate = u, s.lastBaseUpdate = f, t = s.shared.interleaved, t !== null) {
            s = t;
            do i |= s.lane, s = s.next; while (s !== t)
        } else o === null && (s.shared.lanes = 0);
        En |= i, e.lanes = i, e.memoizedState = d
    }
}

function Vu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var r = e[t], s = r.callback;
        if (s !== null) {
            if (r.callback = null, r = n, typeof s != "function") throw Error(T(191, s));
            s.call(r)
        }
    }
}

var Ah = new Df.Component().refs;

function ha(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : re({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}

var Ci = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Dn(e) === e : !1
    }, enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = De(), s = en(e), o = Dt(r, s);
        o.payload = t, n != null && (o.callback = n), t = qt(e, o, s), t !== null && (dt(t, e, s, r), _o(t, e, s))
    }, enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = De(), s = en(e), o = Dt(r, s);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = qt(e, o, s), t !== null && (dt(t, e, s, r), _o(t, e, s))
    }, enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = De(), r = en(e), s = Dt(n, r);
        s.tag = 2, t != null && (s.callback = t), t = qt(e, s, r), t !== null && (dt(t, e, r, n), _o(t, e, r))
    }
};

function $u(e, t, n, r, s, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !is(n, r) || !is(s, o) : !0
}

function bh(e, t, n) {
    var r = !1, s = sn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = nt(o) : (s = Ie(t) ? xn : je.current, r = t.contextTypes, o = (r = r != null) ? ar(e, s) : sn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ci, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Gu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ci.enqueueReplaceState(t, t.state, null)
}

function pa(e, t, n, r) {
    var s = e.stateNode;
    s.props = n, s.state = e.memoizedState, s.refs = Ah, yc(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? s.context = nt(o) : (o = Ie(t) ? xn : je.current, s.context = ar(e, o)), s.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ha(e, t, o, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && Ci.enqueueReplaceState(s, s.state, null), Ko(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}

function Or(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(T(309));
                var r = n.stateNode
            }
            if (!r) throw Error(T(147, e));
            var s = r, o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (i) {
                var a = s.refs;
                a === Ah && (a = s.refs = {}), i === null ? delete a[o] : a[o] = i
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(T(284));
        if (!n._owner) throw Error(T(290, e))
    }
    return e
}

function $s(e, t) {
    throw e = Object.prototype.toString.call(t), Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Ku(e) {
    var t = e._init;
    return t(e._payload)
}

function Rh(e) {
    function t(p, h) {
        if (e) {
            var m = p.deletions;
            m === null ? (p.deletions = [h], p.flags |= 16) : m.push(h)
        }
    }

    function n(p, h) {
        if (!e) return null;
        for (; h !== null;) t(p, h), h = h.sibling;
        return null
    }

    function r(p, h) {
        for (p = new Map; h !== null;) h.key !== null ? p.set(h.key, h) : p.set(h.index, h), h = h.sibling;
        return p
    }

    function s(p, h) {
        return p = tn(p, h), p.index = 0, p.sibling = null, p
    }

    function o(p, h, m) {
        return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < h ? (p.flags |= 2, h) : m) : (p.flags |= 2, h)) : (p.flags |= 1048576, h)
    }

    function i(p) {
        return e && p.alternate === null && (p.flags |= 2), p
    }

    function a(p, h, m, w) {
        return h === null || h.tag !== 6 ? (h = ml(m, p.mode, w), h.return = p, h) : (h = s(h, m), h.return = p, h)
    }

    function c(p, h, m, w) {
        var E = m.type;
        return E === Bn ? f(p, h, m.props.children, w, m.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ut && Ku(E) === h.type) ? (w = s(h, m.props), w.ref = Or(p, h, m), w.return = p, w) : (w = ko(m.type, m.key, m.props, null, p.mode, w), w.ref = Or(p, h, m), w.return = p, w)
    }

    function u(p, h, m, w) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = gl(m, p.mode, w), h.return = p, h) : (h = s(h, m.children || []), h.return = p, h)
    }

    function f(p, h, m, w, E) {
        return h === null || h.tag !== 7 ? (h = wn(m, p.mode, w, E), h.return = p, h) : (h = s(h, m), h.return = p, h)
    }

    function d(p, h, m) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = ml("" + h, p.mode, m), h.return = p, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Ls:
                    return m = ko(h.type, h.key, h.props, null, p.mode, m), m.ref = Or(p, null, h), m.return = p, m;
                case Un:
                    return h = gl(h, p.mode, m), h.return = p, h;
                case Ut:
                    var w = h._init;
                    return d(p, w(h._payload), m)
            }
            if (Mr(h) || Er(h)) return h = wn(h, p.mode, m, null), h.return = p, h;
            $s(p, h)
        }
        return null
    }

    function g(p, h, m, w) {
        var E = h !== null ? h.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number") return E !== null ? null : a(p, h, "" + m, w);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ls:
                    return m.key === E ? c(p, h, m, w) : null;
                case Un:
                    return m.key === E ? u(p, h, m, w) : null;
                case Ut:
                    return E = m._init, g(p, h, E(m._payload), w)
            }
            if (Mr(m) || Er(m)) return E !== null ? null : f(p, h, m, w, null);
            $s(p, m)
        }
        return null
    }

    function C(p, h, m, w, E) {
        if (typeof w == "string" && w !== "" || typeof w == "number") return p = p.get(m) || null, a(h, p, "" + w, E);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case Ls:
                    return p = p.get(w.key === null ? m : w.key) || null, c(h, p, w, E);
                case Un:
                    return p = p.get(w.key === null ? m : w.key) || null, u(h, p, w, E);
                case Ut:
                    var j = w._init;
                    return C(p, h, m, j(w._payload), E)
            }
            if (Mr(w) || Er(w)) return p = p.get(m) || null, f(h, p, w, E, null);
            $s(h, w)
        }
        return null
    }

    function y(p, h, m, w) {
        for (var E = null, j = null, N = h, A = h = 0, W = null; N !== null && A < m.length; A++) {
            N.index > A ? (W = N, N = null) : W = N.sibling;
            var L = g(p, N, m[A], w);
            if (L === null) {
                N === null && (N = W);
                break
            }
            e && N && L.alternate === null && t(p, N), h = o(L, h, A), j === null ? E = L : j.sibling = L, j = L, N = W
        }
        if (A === m.length) return n(p, N), q && hn(p, A), E;
        if (N === null) {
            for (; A < m.length; A++) N = d(p, m[A], w), N !== null && (h = o(N, h, A), j === null ? E = N : j.sibling = N, j = N);
            return q && hn(p, A), E
        }
        for (N = r(p, N); A < m.length; A++) W = C(N, p, A, m[A], w), W !== null && (e && W.alternate !== null && N.delete(W.key === null ? A : W.key), h = o(W, h, A), j === null ? E = W : j.sibling = W, j = W);
        return e && N.forEach(function (b) {
            return t(p, b)
        }), q && hn(p, A), E
    }

    function _(p, h, m, w) {
        var E = Er(m);
        if (typeof E != "function") throw Error(T(150));
        if (m = E.call(m), m == null) throw Error(T(151));
        for (var j = E = null, N = h, A = h = 0, W = null, L = m.next(); N !== null && !L.done; A++, L = m.next()) {
            N.index > A ? (W = N, N = null) : W = N.sibling;
            var b = g(p, N, L.value, w);
            if (b === null) {
                N === null && (N = W);
                break
            }
            e && N && b.alternate === null && t(p, N), h = o(b, h, A), j === null ? E = b : j.sibling = b, j = b, N = W
        }
        if (L.done) return n(p, N), q && hn(p, A), E;
        if (N === null) {
            for (; !L.done; A++, L = m.next()) L = d(p, L.value, w), L !== null && (h = o(L, h, A), j === null ? E = L : j.sibling = L, j = L);
            return q && hn(p, A), E
        }
        for (N = r(p, N); !L.done; A++, L = m.next()) L = C(N, p, A, L.value, w), L !== null && (e && L.alternate !== null && N.delete(L.key === null ? A : L.key), h = o(L, h, A), j === null ? E = L : j.sibling = L, j = L);
        return e && N.forEach(function ($) {
            return t(p, $)
        }), q && hn(p, A), E
    }

    function x(p, h, m, w) {
        if (typeof m == "object" && m !== null && m.type === Bn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ls:
                    e:{
                        for (var E = m.key, j = h; j !== null;) {
                            if (j.key === E) {
                                if (E = m.type, E === Bn) {
                                    if (j.tag === 7) {
                                        n(p, j.sibling), h = s(j, m.props.children), h.return = p, p = h;
                                        break e
                                    }
                                } else if (j.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ut && Ku(E) === j.type) {
                                    n(p, j.sibling), h = s(j, m.props), h.ref = Or(p, j, m), h.return = p, p = h;
                                    break e
                                }
                                n(p, j);
                                break
                            } else t(p, j);
                            j = j.sibling
                        }
                        m.type === Bn ? (h = wn(m.props.children, p.mode, w, m.key), h.return = p, p = h) : (w = ko(m.type, m.key, m.props, null, p.mode, w), w.ref = Or(p, h, m), w.return = p, p = w)
                    }
                    return i(p);
                case Un:
                    e:{
                        for (j = m.key; h !== null;) {
                            if (h.key === j) if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                                n(p, h.sibling), h = s(h, m.children || []), h.return = p, p = h;
                                break e
                            } else {
                                n(p, h);
                                break
                            } else t(p, h);
                            h = h.sibling
                        }
                        h = gl(m, p.mode, w), h.return = p, p = h
                    }
                    return i(p);
                case Ut:
                    return j = m._init, x(p, h, j(m._payload), w)
            }
            if (Mr(m)) return y(p, h, m, w);
            if (Er(m)) return _(p, h, m, w);
            $s(p, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (n(p, h.sibling), h = s(h, m), h.return = p, p = h) : (n(p, h), h = ml(m, p.mode, w), h.return = p, p = h), i(p)) : n(p, h)
    }

    return x
}

var ur = Rh(!0), Lh = Rh(!1), js = {}, Ct = cn(js), us = cn(js), ds = cn(js);

function _n(e) {
    if (e === js) throw Error(T(174));
    return e
}

function _c(e, t) {
    switch (Q(ds, t), Q(us, e), Q(Ct, js), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Gl(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Gl(t, e)
    }
    J(Ct), Q(Ct, t)
}

function dr() {
    J(Ct), J(us), J(ds)
}

function Ph(e) {
    _n(ds.current);
    var t = _n(Ct.current), n = Gl(t, e.type);
    t !== n && (Q(us, e), Q(Ct, n))
}

function vc(e) {
    us.current === e && (J(Ct), J(us))
}

var ee = cn(0);

function Qo(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}

var cl = [];

function Cc() {
    for (var e = 0; e < cl.length; e++) cl[e]._workInProgressVersionPrimary = null;
    cl.length = 0
}

var vo = It.ReactCurrentDispatcher, ul = It.ReactCurrentBatchConfig, kn = 0, te = null, de = null, he = null, Yo = !1,
    Yr = !1, fs = 0, U1 = 0;

function xe() {
    throw Error(T(321))
}

function wc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ft(e[n], t[n])) return !1;
    return !0
}

function xc(e, t, n, r, s, o) {
    if (kn = o, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, vo.current = e === null || e.memoizedState === null ? V1 : $1, e = n(r, s), Yr) {
        o = 0;
        do {
            if (Yr = !1, fs = 0, 25 <= o) throw Error(T(301));
            o += 1, he = de = null, t.updateQueue = null, vo.current = G1, e = n(r, s)
        } while (Yr)
    }
    if (vo.current = Zo, t = de !== null && de.next !== null, kn = 0, he = de = te = null, Yo = !1, t) throw Error(T(300));
    return e
}

function Sc() {
    var e = fs !== 0;
    return fs = 0, e
}

function gt() {
    var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
    return he === null ? te.memoizedState = he = e : he = he.next = e, he
}

function rt() {
    if (de === null) {
        var e = te.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = de.next;
    var t = he === null ? te.memoizedState : he.next;
    if (t !== null) he = t, de = e; else {
        if (e === null) throw Error(T(310));
        de = e, e = {
            memoizedState: de.memoizedState,
            baseState: de.baseState,
            baseQueue: de.baseQueue,
            queue: de.queue,
            next: null
        }, he === null ? te.memoizedState = he = e : he = he.next = e
    }
    return he
}

function hs(e, t) {
    return typeof t == "function" ? t(e) : t
}

function dl(e) {
    var t = rt(), n = t.queue;
    if (n === null) throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = de, s = r.baseQueue, o = n.pending;
    if (o !== null) {
        if (s !== null) {
            var i = s.next;
            s.next = o.next, o.next = i
        }
        r.baseQueue = s = o, n.pending = null
    }
    if (s !== null) {
        o = s.next, r = r.baseState;
        var a = i = null, c = null, u = o;
        do {
            var f = u.lane;
            if ((kn & f) === f) c !== null && (c = c.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action); else {
                var d = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                c === null ? (a = c = d, i = r) : c = c.next = d, te.lanes |= f, En |= f
            }
            u = u.next
        } while (u !== null && u !== o);
        c === null ? i = r : c.next = a, ft(r, t.memoizedState) || (Le = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        s = e;
        do o = s.lane, te.lanes |= o, En |= o, s = s.next; while (s !== e)
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function fl(e) {
    var t = rt(), n = t.queue;
    if (n === null) throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, s = n.pending, o = t.memoizedState;
    if (s !== null) {
        n.pending = null;
        var i = s = s.next;
        do o = e(o, i.action), i = i.next; while (i !== s);
        ft(o, t.memoizedState) || (Le = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function Ih() {
}

function Fh(e, t) {
    var n = te, r = rt(), s = t(), o = !ft(r.memoizedState, s);
    if (o && (r.memoizedState = s, Le = !0), r = r.queue, kc(Uh.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || he !== null && he.memoizedState.tag & 1) {
        if (n.flags |= 2048, ps(9, zh.bind(null, n, r, s, t), void 0, null), pe === null) throw Error(T(349));
        kn & 30 || Mh(n, t, s)
    }
    return s
}

function Mh(e, t, n) {
    e.flags |= 16384, e = {getSnapshot: t, value: n}, t = te.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function zh(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Bh(t) && Hh(e)
}

function Uh(e, t, n) {
    return n(function () {
        Bh(t) && Hh(e)
    })
}

function Bh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !ft(e, n)
    } catch {
        return !0
    }
}

function Hh(e) {
    var t = Rt(e, 1);
    t !== null && dt(t, e, 1, -1)
}

function Qu(e) {
    var t = gt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hs,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = W1.bind(null, te, e), [t.memoizedState, e]
}

function ps(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = te.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Wh() {
    return rt().memoizedState
}

function Co(e, t, n, r) {
    var s = gt();
    te.flags |= e, s.memoizedState = ps(1 | t, n, void 0, r === void 0 ? null : r)
}

function wi(e, t, n, r) {
    var s = rt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (de !== null) {
        var i = de.memoizedState;
        if (o = i.destroy, r !== null && wc(r, i.deps)) {
            s.memoizedState = ps(t, n, o, r);
            return
        }
    }
    te.flags |= e, s.memoizedState = ps(1 | t, n, o, r)
}

function Yu(e, t) {
    return Co(8390656, 8, e, t)
}

function kc(e, t) {
    return wi(2048, 8, e, t)
}

function Vh(e, t) {
    return wi(4, 2, e, t)
}

function $h(e, t) {
    return wi(4, 4, e, t)
}

function Gh(e, t) {
    if (typeof t == "function") return e = e(), t(e), function () {
        t(null)
    };
    if (t != null) return e = e(), t.current = e, function () {
        t.current = null
    }
}

function Kh(e, t, n) {
    return n = n != null ? n.concat([e]) : null, wi(4, 4, Gh.bind(null, t, e), n)
}

function Ec() {
}

function Qh(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Yh(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Zh(e, t, n) {
    return kn & 21 ? (ft(n, t) || (n = Xf(), te.lanes |= n, En |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Le = !0), e.memoizedState = n)
}

function B1(e, t) {
    var n = H;
    H = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = ul.transition;
    ul.transition = {};
    try {
        e(!1), t()
    } finally {
        H = n, ul.transition = r
    }
}

function Jh() {
    return rt().memoizedState
}

function H1(e, t, n) {
    var r = en(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, qh(e)) Xh(t, n); else if (n = Dh(e, t, n, r), n !== null) {
        var s = De();
        dt(n, e, r, s), ep(n, t, r)
    }
}

function W1(e, t, n) {
    var r = en(e), s = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
    if (qh(e)) Xh(t, s); else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var i = t.lastRenderedState, a = o(i, n);
            if (s.hasEagerState = !0, s.eagerState = a, ft(a, i)) {
                var c = t.interleaved;
                c === null ? (s.next = s, gc(t)) : (s.next = c.next, c.next = s), t.interleaved = s;
                return
            }
        } catch {
        } finally {
        }
        n = Dh(e, t, s, r), n !== null && (s = De(), dt(n, e, r, s), ep(n, t, r))
    }
}

function qh(e) {
    var t = e.alternate;
    return e === te || t !== null && t === te
}

function Xh(e, t) {
    Yr = Yo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function ep(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, nc(e, n)
    }
}

var Zo = {
    readContext: nt,
    useCallback: xe,
    useContext: xe,
    useEffect: xe,
    useImperativeHandle: xe,
    useInsertionEffect: xe,
    useLayoutEffect: xe,
    useMemo: xe,
    useReducer: xe,
    useRef: xe,
    useState: xe,
    useDebugValue: xe,
    useDeferredValue: xe,
    useTransition: xe,
    useMutableSource: xe,
    useSyncExternalStore: xe,
    useId: xe,
    unstable_isNewReconciler: !1
}, V1 = {
    readContext: nt, useCallback: function (e, t) {
        return gt().memoizedState = [e, t === void 0 ? null : t], e
    }, useContext: nt, useEffect: Yu, useImperativeHandle: function (e, t, n) {
        return n = n != null ? n.concat([e]) : null, Co(4194308, 4, Gh.bind(null, t, e), n)
    }, useLayoutEffect: function (e, t) {
        return Co(4194308, 4, e, t)
    }, useInsertionEffect: function (e, t) {
        return Co(4, 2, e, t)
    }, useMemo: function (e, t) {
        var n = gt();
        return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    }, useReducer: function (e, t, n) {
        var r = gt();
        return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        }, r.queue = e, e = e.dispatch = H1.bind(null, te, e), [r.memoizedState, e]
    }, useRef: function (e) {
        var t = gt();
        return e = {current: e}, t.memoizedState = e
    }, useState: Qu, useDebugValue: Ec, useDeferredValue: function (e) {
        return gt().memoizedState = e
    }, useTransition: function () {
        var e = Qu(!1), t = e[0];
        return e = B1.bind(null, e[1]), gt().memoizedState = e, [t, e]
    }, useMutableSource: function () {
    }, useSyncExternalStore: function (e, t, n) {
        var r = te, s = gt();
        if (q) {
            if (n === void 0) throw Error(T(407));
            n = n()
        } else {
            if (n = t(), pe === null) throw Error(T(349));
            kn & 30 || Mh(r, t, n)
        }
        s.memoizedState = n;
        var o = {value: n, getSnapshot: t};
        return s.queue = o, Yu(Uh.bind(null, r, o, e), [e]), r.flags |= 2048, ps(9, zh.bind(null, r, o, n, t), void 0, null), n
    }, useId: function () {
        var e = gt(), t = pe.identifierPrefix;
        if (q) {
            var n = Tt, r = Nt;
            n = (r & ~(1 << 32 - ut(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = fs++, 0 < n && (t += "H" + n.toString(32)), t += ":"
        } else n = U1++, t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    }, unstable_isNewReconciler: !1
}, $1 = {
    readContext: nt,
    useCallback: Qh,
    useContext: nt,
    useEffect: kc,
    useImperativeHandle: Kh,
    useInsertionEffect: Vh,
    useLayoutEffect: $h,
    useMemo: Yh,
    useReducer: dl,
    useRef: Wh,
    useState: function () {
        return dl(hs)
    },
    useDebugValue: Ec,
    useDeferredValue: function (e) {
        var t = rt();
        return Zh(t, de.memoizedState, e)
    },
    useTransition: function () {
        var e = dl(hs)[0], t = rt().memoizedState;
        return [e, t]
    },
    useMutableSource: Ih,
    useSyncExternalStore: Fh,
    useId: Jh,
    unstable_isNewReconciler: !1
}, G1 = {
    readContext: nt,
    useCallback: Qh,
    useContext: nt,
    useEffect: kc,
    useImperativeHandle: Kh,
    useInsertionEffect: Vh,
    useLayoutEffect: $h,
    useMemo: Yh,
    useReducer: fl,
    useRef: Wh,
    useState: function () {
        return fl(hs)
    },
    useDebugValue: Ec,
    useDeferredValue: function (e) {
        var t = rt();
        return de === null ? t.memoizedState = e : Zh(t, de.memoizedState, e)
    },
    useTransition: function () {
        var e = fl(hs)[0], t = rt().memoizedState;
        return [e, t]
    },
    useMutableSource: Ih,
    useSyncExternalStore: Fh,
    useId: Jh,
    unstable_isNewReconciler: !1
};

function fr(e, t) {
    try {
        var n = "", r = t;
        do n += C4(r), r = r.return; while (r);
        var s = n
    } catch (o) {
        s = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {value: e, source: t, stack: s, digest: null}
}

function hl(e, t, n) {
    return {value: e, source: null, stack: n ?? null, digest: t ?? null}
}

function ma(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}

var K1 = typeof WeakMap == "function" ? WeakMap : Map;

function tp(e, t, n) {
    n = Dt(-1, n), n.tag = 3, n.payload = {element: null};
    var r = t.value;
    return n.callback = function () {
        qo || (qo = !0, Ea = r), ma(e, t)
    }, n
}

function np(e, t, n) {
    n = Dt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var s = t.value;
        n.payload = function () {
            return r(s)
        }, n.callback = function () {
            ma(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
        ma(e, t), typeof r != "function" && (Xt === null ? Xt = new Set([this]) : Xt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {componentStack: i !== null ? i : ""})
    }), n
}

function Zu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new K1;
        var s = new Set;
        r.set(t, s)
    } else s = r.get(t), s === void 0 && (s = new Set, r.set(t, s));
    s.has(n) || (s.add(n), e = lm.bind(null, e, t, n), t.then(e, e))
}

function Ju(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function qu(e, t, n, r, s) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dt(-1, 1), t.tag = 2, qt(n, t, 1))), n.lanes |= 1), e)
}

var Q1 = It.ReactCurrentOwner, Le = !1;

function Ne(e, t, n, r) {
    t.child = e === null ? Lh(t, null, n, r) : ur(t, e.child, n, r)
}

function Xu(e, t, n, r, s) {
    n = n.render;
    var o = t.ref;
    return rr(t, s), r = xc(e, t, n, r, o, s), n = Sc(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Lt(e, t, s)) : (q && n && uc(t), t.flags |= 1, Ne(e, t, r, s), t.child)
}

function ed(e, t, n, r, s) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Rc(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, rp(e, t, o, r, s)) : (e = ko(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & s)) {
        var i = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : is, n(i, r) && e.ref === t.ref) return Lt(e, t, s)
    }
    return t.flags |= 1, e = tn(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function rp(e, t, n, r, s) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (is(o, r) && e.ref === t.ref) if (Le = !1, t.pendingProps = r = o, (e.lanes & s) !== 0) e.flags & 131072 && (Le = !0); else return t.lanes = e.lanes, Lt(e, t, s)
    }
    return ga(e, t, n, r, s)
}

function sp(e, t, n) {
    var r = t.pendingProps, s = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
    }, Q(Jn, Ue), Ue |= n; else {
        if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }, t.updateQueue = null, Q(Jn, Ue), Ue |= e, null;
        t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, r = o !== null ? o.baseLanes : n, Q(Jn, Ue), Ue |= r
    } else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Q(Jn, Ue), Ue |= r;
    return Ne(e, t, s, n), t.child
}

function op(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function ga(e, t, n, r, s) {
    var o = Ie(n) ? xn : je.current;
    return o = ar(t, o), rr(t, s), n = xc(e, t, n, r, o, s), r = Sc(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Lt(e, t, s)) : (q && r && uc(t), t.flags |= 1, Ne(e, t, n, s), t.child)
}

function td(e, t, n, r, s) {
    if (Ie(n)) {
        var o = !0;
        Ho(t)
    } else o = !1;
    if (rr(t, s), t.stateNode === null) wo(e, t), bh(t, n, r), pa(t, n, r, s), r = !0; else if (e === null) {
        var i = t.stateNode, a = t.memoizedProps;
        i.props = a;
        var c = i.context, u = n.contextType;
        typeof u == "object" && u !== null ? u = nt(u) : (u = Ie(n) ? xn : je.current, u = ar(t, u));
        var f = n.getDerivedStateFromProps,
            d = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || c !== u) && Gu(t, i, r, u), Bt = !1;
        var g = t.memoizedState;
        i.state = g, Ko(t, r, i, s), c = t.memoizedState, a !== r || g !== c || Pe.current || Bt ? (typeof f == "function" && (ha(t, n, f, r), c = t.memoizedState), (a = Bt || $u(t, n, a, r, g, c, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = u, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, Oh(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : it(t.type, a), i.props = u, d = t.pendingProps, g = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = nt(c) : (c = Ie(n) ? xn : je.current, c = ar(t, c));
        var C = n.getDerivedStateFromProps;
        (f = typeof C == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== d || g !== c) && Gu(t, i, r, c), Bt = !1, g = t.memoizedState, i.state = g, Ko(t, r, i, s);
        var y = t.memoizedState;
        a !== d || g !== y || Pe.current || Bt ? (typeof C == "function" && (ha(t, n, C, r), y = t.memoizedState), (u = Bt || $u(t, n, u, r, g, y, c) || !1) ? (f || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = c, r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return ya(e, t, n, r, o, s)
}

function ya(e, t, n, r, s, o) {
    op(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return s && Uu(t, n, !1), Lt(e, t, o);
    r = t.stateNode, Q1.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = ur(t, e.child, null, o), t.child = ur(t, null, a, o)) : Ne(e, t, a, o), t.memoizedState = r.state, s && Uu(t, n, !0), t.child
}

function ip(e) {
    var t = e.stateNode;
    t.pendingContext ? zu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && zu(e, t.context, !1), _c(e, t.containerInfo)
}

function nd(e, t, n, r, s) {
    return cr(), fc(s), t.flags |= 256, Ne(e, t, n, r), t.child
}

var _a = {dehydrated: null, treeContext: null, retryLane: 0};

function va(e) {
    return {baseLanes: e, cachePool: null, transitions: null}
}

function lp(e, t, n) {
    var r = t.pendingProps, s = ee.current, o = !1, i = (t.flags & 128) !== 0, a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Q(ee, s & 1), e === null) return da(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = ki(i, r, 0, null), e = wn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = va(n), t.memoizedState = _a, e) : jc(t, i));
    if (s = e.memoizedState, s !== null && (a = s.dehydrated, a !== null)) return Y1(e, t, i, r, a, s, n);
    if (o) {
        o = r.fallback, i = t.mode, s = e.child, a = s.sibling;
        var c = {mode: "hidden", children: r.children};
        return !(i & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = tn(s, c), r.subtreeFlags = s.subtreeFlags & 14680064), a !== null ? o = tn(a, o) : (o = wn(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? va(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = _a, r
    }
    return o = e.child, e = o.sibling, r = tn(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function jc(e, t) {
    return t = ki({mode: "visible", children: t}, e.mode, 0, null), t.return = e, e.child = t
}

function Gs(e, t, n, r) {
    return r !== null && fc(r), ur(t, e.child, null, n), e = jc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Y1(e, t, n, r, s, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = hl(Error(T(422))), Gs(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, s = t.mode, r = ki({
        mode: "visible",
        children: r.children
    }, s, 0, null), o = wn(o, s, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && ur(t, e.child, null, i), t.child.memoizedState = va(i), t.memoizedState = _a, o);
    if (!(t.mode & 1)) return Gs(e, t, i, null);
    if (s.data === "$!") {
        if (r = s.nextSibling && s.nextSibling.dataset, r) var a = r.dgst;
        return r = a, o = Error(T(419)), r = hl(o, r, void 0), Gs(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0, Le || a) {
        if (r = pe, r !== null) {
            switch (i & -i) {
                case 4:
                    s = 2;
                    break;
                case 16:
                    s = 8;
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
                    s = 32;
                    break;
                case 536870912:
                    s = 268435456;
                    break;
                default:
                    s = 0
            }
            s = s & (r.suspendedLanes | i) ? 0 : s, s !== 0 && s !== o.retryLane && (o.retryLane = s, Rt(e, s), dt(r, e, s, -1))
        }
        return bc(), r = hl(Error(T(421))), Gs(e, t, i, r)
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = am.bind(null, e), s._reactRetry = t, null) : (e = o.treeContext, Be = Jt(s.nextSibling), We = t, q = !0, at = null, e !== null && (Ze[Je++] = Nt, Ze[Je++] = Tt, Ze[Je++] = Sn, Nt = e.id, Tt = e.overflow, Sn = t), t = jc(t, r.children), t.flags |= 4096, t)
}

function rd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), fa(e.return, t, n)
}

function pl(e, t, n, r, s) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = s)
}

function ap(e, t, n) {
    var r = t.pendingProps, s = r.revealOrder, o = r.tail;
    if (Ne(e, t, r.children, n), r = ee.current, r & 2) r = r & 1 | 2, t.flags |= 128; else {
        if (e !== null && e.flags & 128) e:for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && rd(e, n, t); else if (e.tag === 19) rd(e, n, t); else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (Q(ee, r), !(t.mode & 1)) t.memoizedState = null; else switch (s) {
        case"forwards":
            for (n = t.child, s = null; n !== null;) e = n.alternate, e !== null && Qo(e) === null && (s = n), n = n.sibling;
            n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), pl(t, !1, s, n, o);
            break;
        case"backwards":
            for (n = null, s = t.child, t.child = null; s !== null;) {
                if (e = s.alternate, e !== null && Qo(e) === null) {
                    t.child = s;
                    break
                }
                e = s.sibling, s.sibling = n, n = s, s = e
            }
            pl(t, !0, n, null, o);
            break;
        case"together":
            pl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function wo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Lt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), En |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(T(153));
    if (t.child !== null) {
        for (e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = tn(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Z1(e, t, n) {
    switch (t.tag) {
        case 3:
            ip(t), cr();
            break;
        case 5:
            Ph(t);
            break;
        case 1:
            Ie(t.type) && Ho(t);
            break;
        case 4:
            _c(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context, s = t.memoizedProps.value;
            Q($o, r._currentValue), r._currentValue = s;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Q(ee, ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? lp(e, t, n) : (Q(ee, ee.current & 1), e = Lt(e, t, n), e !== null ? e.sibling : null);
            Q(ee, ee.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return ap(e, t, n);
                t.flags |= 128
            }
            if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Q(ee, ee.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, sp(e, t, n)
    }
    return Lt(e, t, n)
}

var cp, Ca, up, dp;
cp = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode); else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Ca = function () {
};
up = function (e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
        e = t.stateNode, _n(Ct.current);
        var o = null;
        switch (n) {
            case"input":
                s = Hl(e, s), r = Hl(e, r), o = [];
                break;
            case"select":
                s = re({}, s, {value: void 0}), r = re({}, r, {value: void 0}), o = [];
                break;
            case"textarea":
                s = $l(e, s), r = $l(e, r), o = [];
                break;
            default:
                typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Uo)
        }
        Kl(n, r);
        var i;
        n = null;
        for (u in s) if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null) if (u === "style") {
            var a = s[u];
            for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Xr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var c = r[u];
            if (a = s?.[u], r.hasOwnProperty(u) && c !== a && (c != null || a != null)) if (u === "style") if (a) {
                for (i in a) !a.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                for (i in c) c.hasOwnProperty(i) && a[i] !== c[i] && (n || (n = {}), n[i] = c[i])
            } else n || (o || (o = []), o.push(u, n)), n = c; else u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, a = a ? a.__html : void 0, c != null && a !== c && (o = o || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Xr.hasOwnProperty(u) ? (c != null && u === "onScroll" && Z("scroll", e), o || a === c || (o = [])) : (o = o || []).push(u, c))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
dp = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Ar(e, t) {
    if (!q) switch (e.tailMode) {
        case"hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case"collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Se(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var s = e.child; s !== null;) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling; else for (s = e.child; s !== null;) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function J1(e, t, n) {
    var r = t.pendingProps;
    switch (dc(t), t.tag) {
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
            return Se(t), null;
        case 1:
            return Ie(t.type) && Bo(), Se(t), null;
        case 3:
            return r = t.stateNode, dr(), J(Pe), J(je), Cc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Vs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, at !== null && (Ta(at), at = null))), Ca(e, t), Se(t), null;
        case 5:
            vc(t);
            var s = _n(ds.current);
            if (n = t.type, e !== null && t.stateNode != null) up(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                if (!r) {
                    if (t.stateNode === null) throw Error(T(166));
                    return Se(t), null
                }
                if (e = _n(Ct.current), Vs(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[yt] = t, r[cs] = o, e = (t.mode & 1) !== 0, n) {
                        case"dialog":
                            Z("cancel", r), Z("close", r);
                            break;
                        case"iframe":
                        case"object":
                        case"embed":
                            Z("load", r);
                            break;
                        case"video":
                        case"audio":
                            for (s = 0; s < Ur.length; s++) Z(Ur[s], r);
                            break;
                        case"source":
                            Z("error", r);
                            break;
                        case"img":
                        case"image":
                        case"link":
                            Z("error", r), Z("load", r);
                            break;
                        case"details":
                            Z("toggle", r);
                            break;
                        case"input":
                            fu(r, o), Z("invalid", r);
                            break;
                        case"select":
                            r._wrapperState = {wasMultiple: !!o.multiple}, Z("invalid", r);
                            break;
                        case"textarea":
                            pu(r, o), Z("invalid", r)
                    }
                    Kl(n, o), s = null;
                    for (var i in o) if (o.hasOwnProperty(i)) {
                        var a = o[i];
                        i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Ws(r.textContent, a, e), s = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Ws(r.textContent, a, e), s = ["children", "" + a]) : Xr.hasOwnProperty(i) && a != null && i === "onScroll" && Z("scroll", r)
                    }
                    switch (n) {
                        case"input":
                            Ps(r), hu(r, o, !0);
                            break;
                        case"textarea":
                            Ps(r), mu(r);
                            break;
                        case"select":
                        case"option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Uo)
                    }
                    r = s, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {is: r.is}) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[yt] = t, e[cs] = r, cp(e, t, !1, !1), t.stateNode = e;
                    e:{
                        switch (i = Ql(n, r), n) {
                            case"dialog":
                                Z("cancel", e), Z("close", e), s = r;
                                break;
                            case"iframe":
                            case"object":
                            case"embed":
                                Z("load", e), s = r;
                                break;
                            case"video":
                            case"audio":
                                for (s = 0; s < Ur.length; s++) Z(Ur[s], e);
                                s = r;
                                break;
                            case"source":
                                Z("error", e), s = r;
                                break;
                            case"img":
                            case"image":
                            case"link":
                                Z("error", e), Z("load", e), s = r;
                                break;
                            case"details":
                                Z("toggle", e), s = r;
                                break;
                            case"input":
                                fu(e, r), s = Hl(e, r), Z("invalid", e);
                                break;
                            case"option":
                                s = r;
                                break;
                            case"select":
                                e._wrapperState = {wasMultiple: !!r.multiple}, s = re({}, r, {value: void 0}), Z("invalid", e);
                                break;
                            case"textarea":
                                pu(e, r), s = $l(e, r), Z("invalid", e);
                                break;
                            default:
                                s = r
                        }
                        Kl(n, s), a = s;
                        for (o in a) if (a.hasOwnProperty(o)) {
                            var c = a[o];
                            o === "style" ? Bf(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && zf(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && es(e, c) : typeof c == "number" && es(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Xr.hasOwnProperty(o) ? c != null && o === "onScroll" && Z("scroll", e) : c != null && Za(e, o, c, i))
                        }
                        switch (n) {
                            case"input":
                                Ps(e), hu(e, r, !1);
                                break;
                            case"textarea":
                                Ps(e), mu(e);
                                break;
                            case"option":
                                r.value != null && e.setAttribute("value", "" + rn(r.value));
                                break;
                            case"select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Xn(e, !!r.multiple, o, !1) : r.defaultValue != null && Xn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof s.onClick == "function" && (e.onclick = Uo)
                        }
                        switch (n) {
                            case"button":
                            case"input":
                            case"select":
                            case"textarea":
                                r = !!r.autoFocus;
                                break e;
                            case"img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Se(t), null;
        case 6:
            if (e && t.stateNode != null) dp(e, t, e.memoizedProps, r); else {
                if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
                if (n = _n(ds.current), _n(Ct.current), Vs(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[yt] = t, (o = r.nodeValue !== n) && (e = We, e !== null)) switch (e.tag) {
                        case 3:
                            Ws(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Ws(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[yt] = t, t.stateNode = r
            }
            return Se(t), null;
        case 13:
            if (J(ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (q && Be !== null && t.mode & 1 && !(t.flags & 128)) Th(), cr(), t.flags |= 98560, o = !1; else if (o = Vs(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(T(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(T(317));
                        o[yt] = t
                    } else cr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Se(t), o = !1
                } else at !== null && (Ta(at), at = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ee.current & 1 ? fe === 0 && (fe = 3) : bc())), t.updateQueue !== null && (t.flags |= 4), Se(t), null);
        case 4:
            return dr(), Ca(e, t), e === null && ls(t.stateNode.containerInfo), Se(t), null;
        case 10:
            return mc(t.type._context), Se(t), null;
        case 17:
            return Ie(t.type) && Bo(), Se(t), null;
        case 19:
            if (J(ee), o = t.memoizedState, o === null) return Se(t), null;
            if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Ar(o, !1); else {
                if (fe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
                    if (i = Qo(e), i !== null) {
                        for (t.flags |= 128, Ar(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                            lanes: e.lanes,
                            firstContext: e.firstContext
                        }), n = n.sibling;
                        return Q(ee, ee.current & 1 | 2), t.child
                    }
                    e = e.sibling
                }
                o.tail !== null && le() > hr && (t.flags |= 128, r = !0, Ar(o, !1), t.lanes = 4194304)
            } else {
                if (!r) if (e = Qo(i), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ar(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !q) return Se(t), null
                } else 2 * le() - o.renderingStartTime > hr && n !== 1073741824 && (t.flags |= 128, r = !0, Ar(o, !1), t.lanes = 4194304);
                o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = le(), t.sibling = null, n = ee.current, Q(ee, r ? n & 1 | 2 : n & 1), t) : (Se(t), null);
        case 22:
        case 23:
            return Ac(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ue & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Se(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(T(156, t.tag))
}

function q1(e, t) {
    switch (dc(t), t.tag) {
        case 1:
            return Ie(t.type) && Bo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return dr(), J(Pe), J(je), Cc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return vc(t), null;
        case 13:
            if (J(ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(T(340));
                cr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return J(ee), null;
        case 4:
            return dr(), null;
        case 10:
            return mc(t.type._context), null;
        case 22:
        case 23:
            return Ac(), null;
        case 24:
            return null;
        default:
            return null
    }
}

var Ks = !1, Ee = !1, X1 = typeof WeakSet == "function" ? WeakSet : Set, O = null;

function Zn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
        n(null)
    } catch (r) {
        se(e, t, r)
    } else n.current = null
}

function wa(e, t, n) {
    try {
        n()
    } catch (r) {
        se(e, t, r)
    }
}

var sd = !1;

function em(e, t) {
    if (sa = Fo, e = mh(), cc(e)) {
        if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd}; else e:{
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var s = r.anchorOffset, o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0, a = -1, c = -1, u = 0, f = 0, d = e, g = null;
                t:for (; ;) {
                    for (var C; d !== n || s !== 0 && d.nodeType !== 3 || (a = i + s), d !== o || r !== 0 && d.nodeType !== 3 || (c = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (C = d.firstChild) !== null;) g = d, d = C;
                    for (; ;) {
                        if (d === e) break t;
                        if (g === n && ++u === s && (a = i), g === o && ++f === r && (c = i), (C = d.nextSibling) !== null) break;
                        d = g, g = d.parentNode
                    }
                    d = C
                }
                n = a === -1 || c === -1 ? null : {start: a, end: c}
            } else n = null
        }
        n = n || {start: 0, end: 0}
    } else n = null;
    for (oa = {
        focusedElem: e,
        selectionRange: n
    }, Fo = !1, O = t; O !== null;) if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, O = e; else for (; O !== null;) {
        t = O;
        try {
            var y = t.alternate;
            if (t.flags & 1024) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (y !== null) {
                        var _ = y.memoizedProps, x = y.memoizedState, p = t.stateNode,
                            h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : it(t.type, _), x);
                        p.__reactInternalSnapshotBeforeUpdate = h
                    }
                    break;
                case 3:
                    var m = t.stateNode.containerInfo;
                    m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                    break;
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    throw Error(T(163))
            }
        } catch (w) {
            se(t, t.return, w)
        }
        if (e = t.sibling, e !== null) {
            e.return = t.return, O = e;
            break
        }
        O = t.return
    }
    return y = sd, sd = !1, y
}

function Zr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var s = r = r.next;
        do {
            if ((s.tag & e) === e) {
                var o = s.destroy;
                s.destroy = void 0, o !== void 0 && wa(t, n, o)
            }
            s = s.next
        } while (s !== r)
    }
}

function xi(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function xa(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function fp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, fp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yt], delete t[cs], delete t[aa], delete t[I1], delete t[F1])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function hp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function od(e) {
    e:for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || hp(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Sa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Uo)); else if (r !== 4 && (e = e.child, e !== null)) for (Sa(e, t, n), e = e.sibling; e !== null;) Sa(e, t, n), e = e.sibling
}

function ka(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (r !== 4 && (e = e.child, e !== null)) for (ka(e, t, n), e = e.sibling; e !== null;) ka(e, t, n), e = e.sibling
}

var ye = null, lt = !1;

function Ft(e, t, n) {
    for (n = n.child; n !== null;) pp(e, t, n), n = n.sibling
}

function pp(e, t, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function") try {
        vt.onCommitFiberUnmount(pi, n)
    } catch {
    }
    switch (n.tag) {
        case 5:
            Ee || Zn(n, t);
        case 6:
            var r = ye, s = lt;
            ye = null, Ft(e, t, n), ye = r, lt = s, ye !== null && (lt ? (e = ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ye.removeChild(n.stateNode));
            break;
        case 18:
            ye !== null && (lt ? (e = ye, n = n.stateNode, e.nodeType === 8 ? ll(e.parentNode, n) : e.nodeType === 1 && ll(e, n), ss(e)) : ll(ye, n.stateNode));
            break;
        case 4:
            r = ye, s = lt, ye = n.stateNode.containerInfo, lt = !0, Ft(e, t, n), ye = r, lt = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ee && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                s = r = r.next;
                do {
                    var o = s, i = o.destroy;
                    o = o.tag, i !== void 0 && (o & 2 || o & 4) && wa(n, t, i), s = s.next
                } while (s !== r)
            }
            Ft(e, t, n);
            break;
        case 1:
            if (!Ee && (Zn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                se(n, t, a)
            }
            Ft(e, t, n);
            break;
        case 21:
            Ft(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Ee = (r = Ee) || n.memoizedState !== null, Ft(e, t, n), Ee = r) : Ft(e, t, n);
            break;
        default:
            Ft(e, t, n)
    }
}

function id(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new X1), t.forEach(function (r) {
            var s = cm.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(s, s))
        })
    }
}

function st(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
        var s = n[r];
        try {
            var o = e, i = t, a = i;
            e:for (; a !== null;) {
                switch (a.tag) {
                    case 5:
                        ye = a.stateNode, lt = !1;
                        break e;
                    case 3:
                        ye = a.stateNode.containerInfo, lt = !0;
                        break e;
                    case 4:
                        ye = a.stateNode.containerInfo, lt = !0;
                        break e
                }
                a = a.return
            }
            if (ye === null) throw Error(T(160));
            pp(o, i, s), ye = null, lt = !1;
            var c = s.alternate;
            c !== null && (c.return = null), s.return = null
        } catch (u) {
            se(s, t, u)
        }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) mp(t, e), t = t.sibling
}

function mp(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (st(t, e), pt(e), r & 4) {
                try {
                    Zr(3, e, e.return), xi(3, e)
                } catch (_) {
                    se(e, e.return, _)
                }
                try {
                    Zr(5, e, e.return)
                } catch (_) {
                    se(e, e.return, _)
                }
            }
            break;
        case 1:
            st(t, e), pt(e), r & 512 && n !== null && Zn(n, n.return);
            break;
        case 5:
            if (st(t, e), pt(e), r & 512 && n !== null && Zn(n, n.return), e.flags & 32) {
                var s = e.stateNode;
                try {
                    es(s, "")
                } catch (_) {
                    se(e, e.return, _)
                }
            }
            if (r & 4 && (s = e.stateNode, s != null)) {
                var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, a = e.type, c = e.updateQueue;
                if (e.updateQueue = null, c !== null) try {
                    a === "input" && o.type === "radio" && o.name != null && If(s, o), Ql(a, i);
                    var u = Ql(a, o);
                    for (i = 0; i < c.length; i += 2) {
                        var f = c[i], d = c[i + 1];
                        f === "style" ? Bf(s, d) : f === "dangerouslySetInnerHTML" ? zf(s, d) : f === "children" ? es(s, d) : Za(s, f, d, u)
                    }
                    switch (a) {
                        case"input":
                            Wl(s, o);
                            break;
                        case"textarea":
                            Ff(s, o);
                            break;
                        case"select":
                            var g = s._wrapperState.wasMultiple;
                            s._wrapperState.wasMultiple = !!o.multiple;
                            var C = o.value;
                            C != null ? Xn(s, !!o.multiple, C, !1) : g !== !!o.multiple && (o.defaultValue != null ? Xn(s, !!o.multiple, o.defaultValue, !0) : Xn(s, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    s[cs] = o
                } catch (_) {
                    se(e, e.return, _)
                }
            }
            break;
        case 6:
            if (st(t, e), pt(e), r & 4) {
                if (e.stateNode === null) throw Error(T(162));
                s = e.stateNode, o = e.memoizedProps;
                try {
                    s.nodeValue = o
                } catch (_) {
                    se(e, e.return, _)
                }
            }
            break;
        case 3:
            if (st(t, e), pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                ss(t.containerInfo)
            } catch (_) {
                se(e, e.return, _)
            }
            break;
        case 4:
            st(t, e), pt(e);
            break;
        case 13:
            st(t, e), pt(e), s = e.child, s.flags & 8192 && (o = s.memoizedState !== null, s.stateNode.isHidden = o, !o || s.alternate !== null && s.alternate.memoizedState !== null || (Dc = le())), r & 4 && id(e);
            break;
        case 22:
            if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ee = (u = Ee) || f, st(t, e), Ee = u) : st(t, e), pt(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e.mode & 1) for (O = e, f = e.child; f !== null;) {
                    for (d = O = f; O !== null;) {
                        switch (g = O, C = g.child, g.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Zr(4, g, g.return);
                                break;
                            case 1:
                                Zn(g, g.return);
                                var y = g.stateNode;
                                if (typeof y.componentWillUnmount == "function") {
                                    r = g, n = g.return;
                                    try {
                                        t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount()
                                    } catch (_) {
                                        se(r, n, _)
                                    }
                                }
                                break;
                            case 5:
                                Zn(g, g.return);
                                break;
                            case 22:
                                if (g.memoizedState !== null) {
                                    ad(d);
                                    continue
                                }
                        }
                        C !== null ? (C.return = g, O = C) : ad(d)
                    }
                    f = f.sibling
                }
                e:for (f = null, d = e; ;) {
                    if (d.tag === 5) {
                        if (f === null) {
                            f = d;
                            try {
                                s = d.stateNode, u ? (o = s.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = d.stateNode, c = d.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, a.style.display = Uf("display", i))
                            } catch (_) {
                                se(e, e.return, _)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (f === null) try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (_) {
                            se(e, e.return, _)
                        }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        f === d && (f = null), d = d.return
                    }
                    f === d && (f = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            st(t, e), pt(e), r & 4 && id(e);
            break;
        case 21:
            break;
        default:
            st(t, e), pt(e)
    }
}

function pt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e:{
                for (var n = e.return; n !== null;) {
                    if (hp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(T(160))
            }
            switch (r.tag) {
                case 5:
                    var s = r.stateNode;
                    r.flags & 32 && (es(s, ""), r.flags &= -33);
                    var o = od(e);
                    ka(e, o, s);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo, a = od(e);
                    Sa(e, a, i);
                    break;
                default:
                    throw Error(T(161))
            }
        } catch (c) {
            se(e, e.return, c)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function tm(e, t, n) {
    O = e, gp(e)
}

function gp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; O !== null;) {
        var s = O, o = s.child;
        if (s.tag === 22 && r) {
            var i = s.memoizedState !== null || Ks;
            if (!i) {
                var a = s.alternate, c = a !== null && a.memoizedState !== null || Ee;
                a = Ks;
                var u = Ee;
                if (Ks = i, (Ee = c) && !u) for (O = s; O !== null;) i = O, c = i.child, i.tag === 22 && i.memoizedState !== null ? cd(s) : c !== null ? (c.return = i, O = c) : cd(s);
                for (; o !== null;) O = o, gp(o), o = o.sibling;
                O = s, Ks = a, Ee = u
            }
            ld(e)
        } else s.subtreeFlags & 8772 && o !== null ? (o.return = s, O = o) : ld(e)
    }
}

function ld(e) {
    for (; O !== null;) {
        var t = O;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ee || xi(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ee) if (n === null) r.componentDidMount(); else {
                            var s = t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
                            r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                        }
                        var o = t.updateQueue;
                        o !== null && Vu(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Vu(t, i, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var c = t.memoizedProps;
                            switch (t.type) {
                                case"button":
                                case"input":
                                case"select":
                                case"textarea":
                                    c.autoFocus && n.focus();
                                    break;
                                case"img":
                                    c.src && (n.src = c.src)
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
                            var u = t.alternate;
                            if (u !== null) {
                                var f = u.memoizedState;
                                if (f !== null) {
                                    var d = f.dehydrated;
                                    d !== null && ss(d)
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
                        throw Error(T(163))
                }
                Ee || t.flags & 512 && xa(t)
            } catch (g) {
                se(t, t.return, g)
            }
        }
        if (t === e) {
            O = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, O = n;
            break
        }
        O = t.return
    }
}

function ad(e) {
    for (; O !== null;) {
        var t = O;
        if (t === e) {
            O = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, O = n;
            break
        }
        O = t.return
    }
}

function cd(e) {
    for (; O !== null;) {
        var t = O;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        xi(4, t)
                    } catch (c) {
                        se(t, n, c)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var s = t.return;
                        try {
                            r.componentDidMount()
                        } catch (c) {
                            se(t, s, c)
                        }
                    }
                    var o = t.return;
                    try {
                        xa(t)
                    } catch (c) {
                        se(t, o, c)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        xa(t)
                    } catch (c) {
                        se(t, i, c)
                    }
            }
        } catch (c) {
            se(t, t.return, c)
        }
        if (t === e) {
            O = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, O = a;
            break
        }
        O = t.return
    }
}

var nm = Math.ceil, Jo = It.ReactCurrentDispatcher, Nc = It.ReactCurrentOwner, et = It.ReactCurrentBatchConfig, U = 0,
    pe = null, ce = null, _e = 0, Ue = 0, Jn = cn(0), fe = 0, ms = null, En = 0, Si = 0, Tc = 0, Jr = null, Re = null,
    Dc = 0, hr = 1 / 0, kt = null, qo = !1, Ea = null, Xt = null, Qs = !1, Gt = null, Xo = 0, qr = 0, ja = null,
    xo = -1, So = 0;

function De() {
    return U & 6 ? le() : xo !== -1 ? xo : xo = le()
}

function en(e) {
    return e.mode & 1 ? U & 2 && _e !== 0 ? _e & -_e : z1.transition !== null ? (So === 0 && (So = Xf()), So) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ih(e.type)), e) : 1
}

function dt(e, t, n, r) {
    if (50 < qr) throw qr = 0, ja = null, Error(T(185));
    Ss(e, n, r), (!(U & 2) || e !== pe) && (e === pe && (!(U & 2) && (Si |= n), fe === 4 && Wt(e, _e)), Fe(e, r), n === 1 && U === 0 && !(t.mode & 1) && (hr = le() + 500, vi && un()))
}

function Fe(e, t) {
    var n = e.callbackNode;
    z4(e, t);
    var r = Io(e, e === pe ? _e : 0);
    if (r === 0) n !== null && _u(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && _u(n), t === 1) e.tag === 0 ? M1(ud.bind(null, e)) : Eh(ud.bind(null, e)), L1(function () {
            !(U & 6) && un()
        }), n = null; else {
            switch (eh(r)) {
                case 1:
                    n = tc;
                    break;
                case 4:
                    n = Jf;
                    break;
                case 16:
                    n = Po;
                    break;
                case 536870912:
                    n = qf;
                    break;
                default:
                    n = Po
            }
            n = kp(n, yp.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function yp(e, t) {
    if (xo = -1, So = 0, U & 6) throw Error(T(327));
    var n = e.callbackNode;
    if (sr() && e.callbackNode !== n) return null;
    var r = Io(e, e === pe ? _e : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ei(e, r); else {
        t = r;
        var s = U;
        U |= 2;
        var o = vp();
        (pe !== e || _e !== t) && (kt = null, hr = le() + 500, Cn(e, t));
        do try {
            om();
            break
        } catch (a) {
            _p(e, a)
        } while (!0);
        pc(), Jo.current = o, U = s, ce !== null ? t = 0 : (pe = null, _e = 0, t = fe)
    }
    if (t !== 0) {
        if (t === 2 && (s = Xl(e), s !== 0 && (r = s, t = Na(e, s))), t === 1) throw n = ms, Cn(e, 0), Wt(e, r), Fe(e, le()), n;
        if (t === 6) Wt(e, r); else {
            if (s = e.current.alternate, !(r & 30) && !rm(s) && (t = ei(e, r), t === 2 && (o = Xl(e), o !== 0 && (r = o, t = Na(e, o))), t === 1)) throw n = ms, Cn(e, 0), Wt(e, r), Fe(e, le()), n;
            switch (e.finishedWork = s, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(T(345));
                case 2:
                    pn(e, Re, kt);
                    break;
                case 3:
                    if (Wt(e, r), (r & 130023424) === r && (t = Dc + 500 - le(), 10 < t)) {
                        if (Io(e, 0) !== 0) break;
                        if (s = e.suspendedLanes, (s & r) !== r) {
                            De(), e.pingedLanes |= e.suspendedLanes & s;
                            break
                        }
                        e.timeoutHandle = la(pn.bind(null, e, Re, kt), t);
                        break
                    }
                    pn(e, Re, kt);
                    break;
                case 4:
                    if (Wt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, s = -1; 0 < r;) {
                        var i = 31 - ut(r);
                        o = 1 << i, i = t[i], i > s && (s = i), r &= ~o
                    }
                    if (r = s, r = le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * nm(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = la(pn.bind(null, e, Re, kt), r);
                        break
                    }
                    pn(e, Re, kt);
                    break;
                case 5:
                    pn(e, Re, kt);
                    break;
                default:
                    throw Error(T(329))
            }
        }
    }
    return Fe(e, le()), e.callbackNode === n ? yp.bind(null, e) : null
}

function Na(e, t) {
    var n = Jr;
    return e.current.memoizedState.isDehydrated && (Cn(e, t).flags |= 256), e = ei(e, t), e !== 2 && (t = Re, Re = n, t !== null && Ta(t)), e
}

function Ta(e) {
    Re === null ? Re = e : Re.push.apply(Re, e)
}

function rm(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
                var s = n[r], o = s.getSnapshot;
                s = s.value;
                try {
                    if (!ft(o(), s)) return !1
                } catch {
                    return !1
                }
            }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n; else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Wt(e, t) {
    for (t &= ~Tc, t &= ~Si, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - ut(t), r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function ud(e) {
    if (U & 6) throw Error(T(327));
    sr();
    var t = Io(e, 0);
    if (!(t & 1)) return Fe(e, le()), null;
    var n = ei(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Xl(e);
        r !== 0 && (t = r, n = Na(e, r))
    }
    if (n === 1) throw n = ms, Cn(e, 0), Wt(e, t), Fe(e, le()), n;
    if (n === 6) throw Error(T(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, pn(e, Re, kt), Fe(e, le()), null
}

function Oc(e, t) {
    var n = U;
    U |= 1;
    try {
        return e(t)
    } finally {
        U = n, U === 0 && (hr = le() + 500, vi && un())
    }
}

function jn(e) {
    Gt !== null && Gt.tag === 0 && !(U & 6) && sr();
    var t = U;
    U |= 1;
    var n = et.transition, r = H;
    try {
        if (et.transition = null, H = 1, e) return e()
    } finally {
        H = r, et.transition = n, U = t, !(U & 6) && un()
    }
}

function Ac() {
    Ue = Jn.current, J(Jn)
}

function Cn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, R1(n)), ce !== null) for (n = ce.return; n !== null;) {
        var r = n;
        switch (dc(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && Bo();
                break;
            case 3:
                dr(), J(Pe), J(je), Cc();
                break;
            case 5:
                vc(r);
                break;
            case 4:
                dr();
                break;
            case 13:
                J(ee);
                break;
            case 19:
                J(ee);
                break;
            case 10:
                mc(r.type._context);
                break;
            case 22:
            case 23:
                Ac()
        }
        n = n.return
    }
    if (pe = e, ce = e = tn(e.current, null), _e = Ue = t, fe = 0, ms = null, Tc = Si = En = 0, Re = Jr = null, yn !== null) {
        for (t = 0; t < yn.length; t++) if (n = yn[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var s = r.next, o = n.pending;
            if (o !== null) {
                var i = o.next;
                o.next = s, r.next = i
            }
            n.pending = r
        }
        yn = null
    }
    return e
}

function _p(e, t) {
    do {
        var n = ce;
        try {
            if (pc(), vo.current = Zo, Yo) {
                for (var r = te.memoizedState; r !== null;) {
                    var s = r.queue;
                    s !== null && (s.pending = null), r = r.next
                }
                Yo = !1
            }
            if (kn = 0, he = de = te = null, Yr = !1, fs = 0, Nc.current = null, n === null || n.return === null) {
                fe = 1, ms = t, ce = null;
                break
            }
            e:{
                var o = e, i = n.return, a = n, c = t;
                if (t = _e, a.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
                    var u = c, f = a, d = f.tag;
                    if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var g = f.alternate;
                        g ? (f.updateQueue = g.updateQueue, f.memoizedState = g.memoizedState, f.lanes = g.lanes) : (f.updateQueue = null, f.memoizedState = null)
                    }
                    var C = Ju(i);
                    if (C !== null) {
                        C.flags &= -257, qu(C, i, a, o, t), C.mode & 1 && Zu(o, u, t), t = C, c = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var _ = new Set;
                            _.add(c), t.updateQueue = _
                        } else y.add(c);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Zu(o, u, t), bc();
                            break e
                        }
                        c = Error(T(426))
                    }
                } else if (q && a.mode & 1) {
                    var x = Ju(i);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256), qu(x, i, a, o, t), fc(fr(c, a));
                        break e
                    }
                }
                o = c = fr(c, a), fe !== 4 && (fe = 2), Jr === null ? Jr = [o] : Jr.push(o), o = i;
                do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var p = tp(o, c, t);
                            Wu(o, p);
                            break e;
                        case 1:
                            a = c;
                            var h = o.type, m = o.stateNode;
                            if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Xt === null || !Xt.has(m)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var w = np(o, a, t);
                                Wu(o, w);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            wp(n)
        } catch (E) {
            t = E, ce === n && n !== null && (ce = n = n.return);
            continue
        }
        break
    } while (!0)
}

function vp() {
    var e = Jo.current;
    return Jo.current = Zo, e === null ? Zo : e
}

function bc() {
    (fe === 0 || fe === 3 || fe === 2) && (fe = 4), pe === null || !(En & 268435455) && !(Si & 268435455) || Wt(pe, _e)
}

function ei(e, t) {
    var n = U;
    U |= 2;
    var r = vp();
    (pe !== e || _e !== t) && (kt = null, Cn(e, t));
    do try {
        sm();
        break
    } catch (s) {
        _p(e, s)
    } while (!0);
    if (pc(), U = n, Jo.current = r, ce !== null) throw Error(T(261));
    return pe = null, _e = 0, fe
}

function sm() {
    for (; ce !== null;) Cp(ce)
}

function om() {
    for (; ce !== null && !O4();) Cp(ce)
}

function Cp(e) {
    var t = Sp(e.alternate, e, Ue);
    e.memoizedProps = e.pendingProps, t === null ? wp(e) : ce = t, Nc.current = null
}

function wp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = q1(n, t), n !== null) {
                n.flags &= 32767, ce = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null; else {
                fe = 6, ce = null;
                return
            }
        } else if (n = J1(n, t, Ue), n !== null) {
            ce = n;
            return
        }
        if (t = t.sibling, t !== null) {
            ce = t;
            return
        }
        ce = t = e
    } while (t !== null);
    fe === 0 && (fe = 5)
}

function pn(e, t, n) {
    var r = H, s = et.transition;
    try {
        et.transition = null, H = 1, im(e, t, n, r)
    } finally {
        et.transition = s, H = r
    }
    return null
}

function im(e, t, n, r) {
    do sr(); while (Gt !== null);
    if (U & 6) throw Error(T(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(T(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (U4(e, o), e === pe && (ce = pe = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Qs || (Qs = !0, kp(Po, function () {
        return sr(), null
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = et.transition, et.transition = null;
        var i = H;
        H = 1;
        var a = U;
        U |= 4, Nc.current = null, em(e, n), mp(n, e), j1(oa), Fo = !!sa, oa = sa = null, e.current = n, tm(n), A4(), U = a, H = i, et.transition = o
    } else e.current = n;
    if (Qs && (Qs = !1, Gt = e, Xo = s), o = e.pendingLanes, o === 0 && (Xt = null), L4(n.stateNode), Fe(e, le()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, {
        componentStack: s.stack,
        digest: s.digest
    });
    if (qo) throw qo = !1, e = Ea, Ea = null, e;
    return Xo & 1 && e.tag !== 0 && sr(), o = e.pendingLanes, o & 1 ? e === ja ? qr++ : (qr = 0, ja = e) : qr = 0, un(), null
}

function sr() {
    if (Gt !== null) {
        var e = eh(Xo), t = et.transition, n = H;
        try {
            if (et.transition = null, H = 16 > e ? 16 : e, Gt === null) var r = !1; else {
                if (e = Gt, Gt = null, Xo = 0, U & 6) throw Error(T(331));
                var s = U;
                for (U |= 4, O = e.current; O !== null;) {
                    var o = O, i = o.child;
                    if (O.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var c = 0; c < a.length; c++) {
                                var u = a[c];
                                for (O = u; O !== null;) {
                                    var f = O;
                                    switch (f.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Zr(8, f, o)
                                    }
                                    var d = f.child;
                                    if (d !== null) d.return = f, O = d; else for (; O !== null;) {
                                        f = O;
                                        var g = f.sibling, C = f.return;
                                        if (fp(f), f === u) {
                                            O = null;
                                            break
                                        }
                                        if (g !== null) {
                                            g.return = C, O = g;
                                            break
                                        }
                                        O = C
                                    }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var _ = y.child;
                                if (_ !== null) {
                                    y.child = null;
                                    do {
                                        var x = _.sibling;
                                        _.sibling = null, _ = x
                                    } while (_ !== null)
                                }
                            }
                            O = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null) i.return = o, O = i; else e:for (; O !== null;) {
                        if (o = O, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Zr(9, o, o.return)
                        }
                        var p = o.sibling;
                        if (p !== null) {
                            p.return = o.return, O = p;
                            break e
                        }
                        O = o.return
                    }
                }
                var h = e.current;
                for (O = h; O !== null;) {
                    i = O;
                    var m = i.child;
                    if (i.subtreeFlags & 2064 && m !== null) m.return = i, O = m; else e:for (i = h; O !== null;) {
                        if (a = O, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    xi(9, a)
                            }
                        } catch (E) {
                            se(a, a.return, E)
                        }
                        if (a === i) {
                            O = null;
                            break e
                        }
                        var w = a.sibling;
                        if (w !== null) {
                            w.return = a.return, O = w;
                            break e
                        }
                        O = a.return
                    }
                }
                if (U = s, un(), vt && typeof vt.onPostCommitFiberRoot == "function") try {
                    vt.onPostCommitFiberRoot(pi, e)
                } catch {
                }
                r = !0
            }
            return r
        } finally {
            H = n, et.transition = t
        }
    }
    return !1
}

function dd(e, t, n) {
    t = fr(n, t), t = tp(e, t, 1), e = qt(e, t, 1), t = De(), e !== null && (Ss(e, 1, t), Fe(e, t))
}

function se(e, t, n) {
    if (e.tag === 3) dd(e, e, n); else for (; t !== null;) {
        if (t.tag === 3) {
            dd(t, e, n);
            break
        } else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Xt === null || !Xt.has(r))) {
                e = fr(n, e), e = np(t, e, 1), t = qt(t, e, 1), e = De(), t !== null && (Ss(t, 1, e), Fe(t, e));
                break
            }
        }
        t = t.return
    }
}

function lm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = De(), e.pingedLanes |= e.suspendedLanes & n, pe === e && (_e & n) === n && (fe === 4 || fe === 3 && (_e & 130023424) === _e && 500 > le() - Dc ? Cn(e, 0) : Tc |= n), Fe(e, t)
}

function xp(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ms, Ms <<= 1, !(Ms & 130023424) && (Ms = 4194304)) : t = 1);
    var n = De();
    e = Rt(e, t), e !== null && (Ss(e, t, n), Fe(e, n))
}

function am(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), xp(e, n)
}

function cm(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode, s = e.memoizedState;
            s !== null && (n = s.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(T(314))
    }
    r !== null && r.delete(t), xp(e, n)
}

var Sp;
Sp = function (e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Pe.current) Le = !0; else {
        if (!(e.lanes & n) && !(t.flags & 128)) return Le = !1, Z1(e, t, n);
        Le = !!(e.flags & 131072)
    } else Le = !1, q && t.flags & 1048576 && jh(t, Vo, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            wo(e, t), e = t.pendingProps;
            var s = ar(t, je.current);
            rr(t, n), s = xc(null, t, r, e, s, n);
            var o = Sc();
            return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ie(r) ? (o = !0, Ho(t)) : o = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, yc(t), s.updater = Ci, t.stateNode = s, s._reactInternals = t, pa(t, r, e, n), t = ya(null, t, r, !0, o, n)) : (t.tag = 0, q && o && uc(t), Ne(null, t, s, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e:{
                switch (wo(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = dm(r), e = it(r, e), s) {
                    case 0:
                        t = ga(null, t, r, e, n);
                        break e;
                    case 1:
                        t = td(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Xu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ed(null, t, r, it(r.type, e), n);
                        break e
                }
                throw Error(T(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : it(r, s), ga(e, t, r, s, n);
        case 1:
            return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : it(r, s), td(e, t, r, s, n);
        case 3:
            e:{
                if (ip(t), e === null) throw Error(T(387));
                r = t.pendingProps, o = t.memoizedState, s = o.element, Oh(e, t), Ko(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, o.isDehydrated) if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                    s = fr(Error(T(423)), t), t = nd(e, t, r, n, s);
                    break e
                } else if (r !== s) {
                    s = fr(Error(T(424)), t), t = nd(e, t, r, n, s);
                    break e
                } else for (Be = Jt(t.stateNode.containerInfo.firstChild), We = t, q = !0, at = null, n = Lh(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling; else {
                    if (cr(), r === s) {
                        t = Lt(e, t, n);
                        break e
                    }
                    Ne(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Ph(t), e === null && da(t), r = t.type, s = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = s.children, ia(r, s) ? i = null : o !== null && ia(r, o) && (t.flags |= 32), op(e, t), Ne(e, t, i, n), t.child;
        case 6:
            return e === null && da(t), null;
        case 13:
            return lp(e, t, n);
        case 4:
            return _c(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ur(t, null, r, n) : Ne(e, t, r, n), t.child;
        case 11:
            return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : it(r, s), Xu(e, t, r, s, n);
        case 7:
            return Ne(e, t, t.pendingProps, n), t.child;
        case 8:
            return Ne(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Ne(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e:{
                if (r = t.type._context, s = t.pendingProps, o = t.memoizedProps, i = s.value, Q($o, r._currentValue), r._currentValue = i, o !== null) if (ft(o.value, i)) {
                    if (o.children === s.children && !Pe.current) {
                        t = Lt(e, t, n);
                        break e
                    }
                } else for (o = t.child, o !== null && (o.return = t); o !== null;) {
                    var a = o.dependencies;
                    if (a !== null) {
                        i = o.child;
                        for (var c = a.firstContext; c !== null;) {
                            if (c.context === r) {
                                if (o.tag === 1) {
                                    c = Dt(-1, n & -n), c.tag = 2;
                                    var u = o.updateQueue;
                                    if (u !== null) {
                                        u = u.shared;
                                        var f = u.pending;
                                        f === null ? c.next = c : (c.next = f.next, f.next = c), u.pending = c
                                    }
                                }
                                o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), fa(o.return, n, t), a.lanes |= n;
                                break
                            }
                            c = c.next
                        }
                    } else if (o.tag === 10) i = o.type === t.type ? null : o.child; else if (o.tag === 18) {
                        if (i = o.return, i === null) throw Error(T(341));
                        i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), fa(i, n, t), i = o.sibling
                    } else i = o.child;
                    if (i !== null) i.return = o; else for (i = o; i !== null;) {
                        if (i === t) {
                            i = null;
                            break
                        }
                        if (o = i.sibling, o !== null) {
                            o.return = i.return, i = o;
                            break
                        }
                        i = i.return
                    }
                    o = i
                }
                Ne(e, t, s.children, n), t = t.child
            }
            return t;
        case 9:
            return s = t.type, r = t.pendingProps.children, rr(t, n), s = nt(s), r = r(s), t.flags |= 1, Ne(e, t, r, n), t.child;
        case 14:
            return r = t.type, s = it(r, t.pendingProps), s = it(r.type, s), ed(e, t, r, s, n);
        case 15:
            return rp(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : it(r, s), wo(e, t), t.tag = 1, Ie(r) ? (e = !0, Ho(t)) : e = !1, rr(t, n), bh(t, r, s), pa(t, r, s, n), ya(null, t, r, !0, e, n);
        case 19:
            return ap(e, t, n);
        case 22:
            return sp(e, t, n)
    }
    throw Error(T(156, t.tag))
};

function kp(e, t) {
    return Zf(e, t)
}

function um(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Xe(e, t, n, r) {
    return new um(e, t, n, r)
}

function Rc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function dm(e) {
    if (typeof e == "function") return Rc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === qa) return 11;
        if (e === Xa) return 14
    }
    return 2
}

function tn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Xe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function ko(e, t, n, r, s, o) {
    var i = 2;
    if (r = e, typeof e == "function") Rc(e) && (i = 1); else if (typeof e == "string") i = 5; else e:switch (e) {
        case Bn:
            return wn(n.children, s, o, t);
        case Ja:
            i = 8, s |= 8;
            break;
        case Ml:
            return e = Xe(12, n, t, s | 2), e.elementType = Ml, e.lanes = o, e;
        case zl:
            return e = Xe(13, n, t, s), e.elementType = zl, e.lanes = o, e;
        case Ul:
            return e = Xe(19, n, t, s), e.elementType = Ul, e.lanes = o, e;
        case Rf:
            return ki(n, s, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Af:
                    i = 10;
                    break e;
                case bf:
                    i = 9;
                    break e;
                case qa:
                    i = 11;
                    break e;
                case Xa:
                    i = 14;
                    break e;
                case Ut:
                    i = 16, r = null;
                    break e
            }
            throw Error(T(130, e == null ? e : typeof e, ""))
    }
    return t = Xe(i, n, t, s), t.elementType = e, t.type = r, t.lanes = o, t
}

function wn(e, t, n, r) {
    return e = Xe(7, e, r, t), e.lanes = n, e
}

function ki(e, t, n, r) {
    return e = Xe(22, e, r, t), e.elementType = Rf, e.lanes = n, e.stateNode = {isHidden: !1}, e
}

function ml(e, t, n) {
    return e = Xe(6, e, null, t), e.lanes = n, e
}

function gl(e, t, n) {
    return t = Xe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function fm(e, t, n, r, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zi(0), this.expirationTimes = Zi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zi(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null
}

function Lc(e, t, n, r, s, o, i, a, c) {
    return e = new fm(e, t, n, a, c), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Xe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, yc(o), e
}

function hm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {$$typeof: Un, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n}
}

function Ep(e) {
    if (!e) return sn;
    e = e._reactInternals;
    e:{
        if (Dn(e) !== e || e.tag !== 1) throw Error(T(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ie(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(T(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ie(n)) return kh(e, n, t)
    }
    return t
}

function jp(e, t, n, r, s, o, i, a, c) {
    return e = Lc(n, r, !0, e, s, o, i, a, c), e.context = Ep(null), n = e.current, r = De(), s = en(n), o = Dt(r, s), o.callback = t ?? null, qt(n, o, s), e.current.lanes = s, Ss(e, s, r), Fe(e, r), e
}

function Ei(e, t, n, r) {
    var s = t.current, o = De(), i = en(s);
    return n = Ep(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dt(o, i), t.payload = {element: e}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = qt(s, t, i), e !== null && (dt(e, s, i, o), _o(e, s, i)), i
}

function ti(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function fd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Pc(e, t) {
    fd(e, t), (e = e.alternate) && fd(e, t)
}

function pm() {
    return null
}

var Np = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
};

function Ic(e) {
    this._internalRoot = e
}

ji.prototype.render = Ic.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(T(409));
    Ei(e, t, null, null)
};
ji.prototype.unmount = Ic.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        jn(function () {
            Ei(null, e, null, null)
        }), t[bt] = null
    }
};

function ji(e) {
    this._internalRoot = e
}

ji.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = rh();
        e = {blockedOn: null, target: e, priority: t};
        for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++) ;
        Ht.splice(n, 0, e), n === 0 && oh(e)
    }
};

function Fc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Ni(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function hd() {
}

function mm(e, t, n, r, s) {
    if (s) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var u = ti(i);
                o.call(u)
            }
        }
        var i = jp(t, r, e, 0, null, !1, !1, "", hd);
        return e._reactRootContainer = i, e[bt] = i.current, ls(e.nodeType === 8 ? e.parentNode : e), jn(), i
    }
    for (; s = e.lastChild;) e.removeChild(s);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = ti(c);
            a.call(u)
        }
    }
    var c = Lc(e, 0, !1, null, null, !1, !1, "", hd);
    return e._reactRootContainer = c, e[bt] = c.current, ls(e.nodeType === 8 ? e.parentNode : e), jn(function () {
        Ei(t, c, n, r)
    }), c
}

function Ti(e, t, n, r, s) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof s == "function") {
            var a = s;
            s = function () {
                var c = ti(i);
                a.call(c)
            }
        }
        Ei(t, i, e, s)
    } else i = mm(n, t, e, s, r);
    return ti(i)
}

th = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = zr(t.pendingLanes);
                n !== 0 && (nc(t, n | 1), Fe(t, le()), !(U & 6) && (hr = le() + 500, un()))
            }
            break;
        case 13:
            jn(function () {
                var r = Rt(e, 1);
                if (r !== null) {
                    var s = De();
                    dt(r, e, 1, s)
                }
            }), Pc(e, 1)
    }
};
rc = function (e) {
    if (e.tag === 13) {
        var t = Rt(e, 134217728);
        if (t !== null) {
            var n = De();
            dt(t, e, 134217728, n)
        }
        Pc(e, 134217728)
    }
};
nh = function (e) {
    if (e.tag === 13) {
        var t = en(e), n = Rt(e, t);
        if (n !== null) {
            var r = De();
            dt(n, e, t, r)
        }
        Pc(e, t)
    }
};
rh = function () {
    return H
};
sh = function (e, t) {
    var n = H;
    try {
        return H = e, t()
    } finally {
        H = n
    }
};
Zl = function (e, t, n) {
    switch (t) {
        case"input":
            if (Wl(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var s = _i(r);
                        if (!s) throw Error(T(90));
                        Pf(r), Wl(r, s)
                    }
                }
            }
            break;
        case"textarea":
            Ff(e, n);
            break;
        case"select":
            t = n.value, t != null && Xn(e, !!n.multiple, t, !1)
    }
};
Vf = Oc;
$f = jn;
var gm = {usingClientEntryPoint: !1, Events: [Es, $n, _i, Hf, Wf, Oc]},
    br = {findFiberByHostInstance: gn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"}, ym = {
        bundleType: br.bundleType,
        version: br.version,
        rendererPackageName: br.rendererPackageName,
        rendererConfig: br.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: It.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = Qf(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: br.findFiberByHostInstance || pm,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ys = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ys.isDisabled && Ys.supportsFiber) try {
        pi = Ys.inject(ym), vt = Ys
    } catch {
    }
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gm;
Ke.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fc(t)) throw Error(T(200));
    return hm(e, t, null, n)
};
Ke.createRoot = function (e, t) {
    if (!Fc(e)) throw Error(T(299));
    var n = !1, r = "", s = Np;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Lc(e, 1, !1, null, null, n, !1, r, s), e[bt] = t.current, ls(e.nodeType === 8 ? e.parentNode : e), new Ic(t)
};
Ke.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","), Error(T(268, e)));
    return e = Qf(t), e = e === null ? null : e.stateNode, e
};
Ke.flushSync = function (e) {
    return jn(e)
};
Ke.hydrate = function (e, t, n) {
    if (!Ni(t)) throw Error(T(200));
    return Ti(null, e, t, !0, n)
};
Ke.hydrateRoot = function (e, t, n) {
    if (!Fc(e)) throw Error(T(405));
    var r = n != null && n.hydratedSources || null, s = !1, o = "", i = Np;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = jp(t, null, e, 1, n ?? null, s, !1, o, i), e[bt] = t.current, ls(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(n, s);
    return new ji(t)
};
Ke.render = function (e, t, n) {
    if (!Ni(t)) throw Error(T(200));
    return Ti(null, e, t, !1, n)
};
Ke.unmountComponentAtNode = function (e) {
    if (!Ni(e)) throw Error(T(40));
    return e._reactRootContainer ? (jn(function () {
        Ti(null, null, e, !1, function () {
            e._reactRootContainer = null, e[bt] = null
        })
    }), !0) : !1
};
Ke.unstable_batchedUpdates = Oc;
Ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Ni(n)) throw Error(T(200));
    if (e == null || e._reactInternals === void 0) throw Error(T(38));
    return Ti(e, t, n, !1, r)
};
Ke.version = "18.2.0-next-9e3b772b8-20220608";

function Tp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tp)
    } catch (e) {
        console.error(e)
    }
}

Tp(), jf.exports = Ke;
var _m = jf.exports, pd = _m;
Il.createRoot = pd.createRoot, Il.hydrateRoot = pd.hydrateRoot;

/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gs() {
    return gs = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, gs.apply(this, arguments)
}

var Kt;
(function (e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Kt || (Kt = {}));
const md = "popstate";

function vm(e) {
    e === void 0 && (e = {});

    function t(s, o) {
        let {pathname: i = "/", search: a = "", hash: c = ""} = On(s.location.hash.substr(1));
        return !i.startsWith("/") && !i.startsWith(".") && (i = "/" + i), Da("", {
            pathname: i,
            search: a,
            hash: c
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function n(s, o) {
        let i = s.document.querySelector("base"), a = "";
        if (i && i.getAttribute("href")) {
            let c = s.location.href, u = c.indexOf("#");
            a = u === -1 ? c : c.slice(0, u)
        }
        return a + "#" + (typeof o == "string" ? o : ni(o))
    }

    function r(s, o) {
        Mc(s.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(o) + ")")
    }

    return wm(t, n, r, e)
}

function ue(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function Mc(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {
        }
    }
}

function Cm() {
    return Math.random().toString(36).substr(2, 8)
}

function gd(e, t) {
    return {usr: e.state, key: e.key, idx: t}
}

function Da(e, t, n, r) {
    return n === void 0 && (n = null), gs({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? On(t) : t, {state: n, key: t && t.key || r || Cm()})
}

function ni(e) {
    let {pathname: t = "/", search: n = "", hash: r = ""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function On(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function wm(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: s = document.defaultView, v5Compat: o = !1} = r, i = s.history, a = Kt.Pop, c = null, u = f();
    u == null && (u = 0, i.replaceState(gs({}, i.state, {idx: u}), ""));

    function f() {
        return (i.state || {idx: null}).idx
    }

    function d() {
        a = Kt.Pop;
        let x = f(), p = x == null ? null : x - u;
        u = x, c && c({action: a, location: _.location, delta: p})
    }

    function g(x, p) {
        a = Kt.Push;
        let h = Da(_.location, x, p);
        n && n(h, x), u = f() + 1;
        let m = gd(h, u), w = _.createHref(h);
        try {
            i.pushState(m, "", w)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError") throw E;
            s.location.assign(w)
        }
        o && c && c({action: a, location: _.location, delta: 1})
    }

    function C(x, p) {
        a = Kt.Replace;
        let h = Da(_.location, x, p);
        n && n(h, x), u = f();
        let m = gd(h, u), w = _.createHref(h);
        i.replaceState(m, "", w), o && c && c({action: a, location: _.location, delta: 0})
    }

    function y(x) {
        let p = s.location.origin !== "null" ? s.location.origin : s.location.href,
            h = typeof x == "string" ? x : ni(x);
        return h = h.replace(/ $/, "%20"), ue(p, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, p)
    }

    let _ = {
        get action() {
            return a
        }, get location() {
            return e(s, i)
        }, listen(x) {
            if (c) throw new Error("A history only accepts one active listener");
            return s.addEventListener(md, d), c = x, () => {
                s.removeEventListener(md, d), c = null
            }
        }, createHref(x) {
            return t(s, x)
        }, createURL: y, encodeLocation(x) {
            let p = y(x);
            return {pathname: p.pathname, search: p.search, hash: p.hash}
        }, push: g, replace: C, go(x) {
            return i.go(x)
        }
    };
    return _
}

var yd;
(function (e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(yd || (yd = {}));

function xm(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? On(t) : t, s = zc(r.pathname || "/", n);
    if (s == null) return null;
    let o = Dp(e);
    Sm(o);
    let i = null;
    for (let a = 0; i == null && a < o.length; ++a) {
        let c = Pm(s);
        i = bm(o[a], c)
    }
    return i
}

function Dp(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let s = (o, i, a) => {
        let c = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o
        };
        c.relativePath.startsWith("/") && (ue(c.relativePath.startsWith(r), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), c.relativePath = c.relativePath.slice(r.length));
        let u = nn([r, c.relativePath]), f = n.concat(c);
        o.children && o.children.length > 0 && (ue(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), Dp(o.children, t, f, u)), !(o.path == null && !o.index) && t.push({
            path: u,
            score: Om(u, o.index),
            routesMeta: f
        })
    };
    return e.forEach((o, i) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?"))) s(o, i); else for (let c of Op(o.path)) s(o, i, c)
    }), t
}

function Op(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, s = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (r.length === 0) return s ? [o, ""] : [o];
    let i = Op(r.join("/")), a = [];
    return a.push(...i.map(c => c === "" ? o : [o, c].join("/"))), s && a.push(...i), a.map(c => e.startsWith("/") && c === "" ? "/" : c)
}

function Sm(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : Am(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}

const km = /^:[\w-]+$/, Em = 3, jm = 2, Nm = 1, Tm = 10, Dm = -2, _d = e => e === "*";

function Om(e, t) {
    let n = e.split("/"), r = n.length;
    return n.some(_d) && (r += Dm), t && (r += jm), n.filter(s => !_d(s)).reduce((s, o) => s + (km.test(o) ? Em : o === "" ? Nm : Tm), r)
}

function Am(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function bm(e, t) {
    let {routesMeta: n} = e, r = {}, s = "/", o = [];
    for (let i = 0; i < n.length; ++i) {
        let a = n[i], c = i === n.length - 1, u = s === "/" ? t : t.slice(s.length) || "/",
            f = Rm({path: a.relativePath, caseSensitive: a.caseSensitive, end: c}, u);
        if (!f) return null;
        Object.assign(r, f.params);
        let d = a.route;
        o.push({
            params: r,
            pathname: nn([s, f.pathname]),
            pathnameBase: zm(nn([s, f.pathnameBase])),
            route: d
        }), f.pathnameBase !== "/" && (s = nn([s, f.pathnameBase]))
    }
    return o
}

function Rm(e, t) {
    typeof e == "string" && (e = {path: e, caseSensitive: !1, end: !0});
    let [n, r] = Lm(e.path, e.caseSensitive, e.end), s = t.match(n);
    if (!s) return null;
    let o = s[0], i = o.replace(/(.)\/+$/, "$1"), a = s.slice(1);
    return {
        params: r.reduce((u, f, d) => {
            let {paramName: g, isOptional: C} = f;
            if (g === "*") {
                let _ = a[d] || "";
                i = o.slice(0, o.length - _.length).replace(/(.)\/+$/, "$1")
            }
            const y = a[d];
            return C && !y ? u[g] = void 0 : u[g] = (y || "").replace(/%2F/g, "/"), u
        }, {}), pathname: o, pathnameBase: i, pattern: e
    }
}

function Lm(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), Mc(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, a, c) => (r.push({
            paramName: a,
            isOptional: c != null
        }), c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({paramName: "*"}), s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, t ? void 0 : "i"), r]
}

function Pm(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Mc(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function zc(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function Im(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r = "", hash: s = ""} = typeof e == "string" ? On(e) : e;
    return {pathname: n ? n.startsWith("/") ? n : Fm(n, t) : t, search: Um(r), hash: Bm(s)}
}

function Fm(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(s => {
        s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s)
    }), n.length > 1 ? n.join("/") : "/"
}

function yl(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function Mm(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function Ap(e, t) {
    let n = Mm(e);
    return t ? n.map((r, s) => s === e.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function bp(e, t, n, r) {
    r === void 0 && (r = !1);
    let s;
    typeof e == "string" ? s = On(e) : (s = gs({}, e), ue(!s.pathname || !s.pathname.includes("?"), yl("?", "pathname", "search", s)), ue(!s.pathname || !s.pathname.includes("#"), yl("#", "pathname", "hash", s)), ue(!s.search || !s.search.includes("#"), yl("#", "search", "hash", s)));
    let o = e === "" || s.pathname === "", i = o ? "/" : s.pathname, a;
    if (i == null) a = n; else {
        let d = t.length - 1;
        if (!r && i.startsWith("..")) {
            let g = i.split("/");
            for (; g[0] === "..";) g.shift(), d -= 1;
            s.pathname = g.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let c = Im(s, a), u = i && i !== "/" && i.endsWith("/"), f = (o || i === ".") && n.endsWith("/");
    return !c.pathname.endsWith("/") && (u || f) && (c.pathname += "/"), c
}

const nn = e => e.join("/").replace(/\/\/+/g, "/"), zm = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Um = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    Bm = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function Hm(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}

const Rp = ["post", "put", "patch", "delete"];
new Set(Rp);
const Wm = ["get", ...Rp];
new Set(Wm);

/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ys() {
    return ys = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ys.apply(this, arguments)
}

const Uc = v.createContext(null), Vm = v.createContext(null), An = v.createContext(null), Di = v.createContext(null),
    dn = v.createContext({outlet: null, matches: [], isDataRoute: !1}), Lp = v.createContext(null);

function $m(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    Ns() || ue(!1);
    let {basename: r, navigator: s} = v.useContext(An), {hash: o, pathname: i, search: a} = Ip(e, {relative: n}), c = i;
    return r !== "/" && (c = i === "/" ? r : nn([r, i])), s.createHref({pathname: c, search: a, hash: o})
}

function Ns() {
    return v.useContext(Di) != null
}

function Ts() {
    return Ns() || ue(!1), v.useContext(Di).location
}

function Pp(e) {
    v.useContext(An).static || v.useLayoutEffect(e)
}

function Bc() {
    let {isDataRoute: e} = v.useContext(dn);
    return e ? i0() : Gm()
}

function Gm() {
    Ns() || ue(!1);
    let e = v.useContext(Uc), {
            basename: t,
            future: n,
            navigator: r
        } = v.useContext(An), {matches: s} = v.useContext(dn), {pathname: o} = Ts(),
        i = JSON.stringify(Ap(s, n.v7_relativeSplatPath)), a = v.useRef(!1);
    return Pp(() => {
        a.current = !0
    }), v.useCallback(function (u, f) {
        if (f === void 0 && (f = {}), !a.current) return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let d = bp(u, JSON.parse(i), o, f.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : nn([t, d.pathname])), (f.replace ? r.replace : r.push)(d, f.state, f)
    }, [t, r, i, o, e])
}

const Km = v.createContext(null);

function Qm(e) {
    let t = v.useContext(dn).outlet;
    return t && v.createElement(Km.Provider, {value: e}, t)
}

function Ip(e, t) {
    let {relative: n} = t === void 0 ? {} : t, {future: r} = v.useContext(An), {matches: s} = v.useContext(dn), {pathname: o} = Ts(),
        i = JSON.stringify(Ap(s, r.v7_relativeSplatPath));
    return v.useMemo(() => bp(e, JSON.parse(i), o, n === "path"), [e, i, o, n])
}

function Ym(e, t) {
    return Zm(e, t)
}

function Zm(e, t, n, r) {
    Ns() || ue(!1);
    let {navigator: s} = v.useContext(An), {matches: o} = v.useContext(dn), i = o[o.length - 1], a = i ? i.params : {};
    i && i.pathname;
    let c = i ? i.pathnameBase : "/";
    i && i.route;
    let u = Ts(), f;
    if (t) {
        var d;
        let x = typeof t == "string" ? On(t) : t;
        c === "/" || (d = x.pathname) != null && d.startsWith(c) || ue(!1), f = x
    } else f = u;
    let g = f.pathname || "/", C = g;
    if (c !== "/") {
        let x = c.replace(/^\//, "").split("/");
        C = "/" + g.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let y = xm(e, {pathname: C}), _ = t0(y && y.map(x => Object.assign({}, x, {
        params: Object.assign({}, a, x.params),
        pathname: nn([c, s.encodeLocation ? s.encodeLocation(x.pathname).pathname : x.pathname]),
        pathnameBase: x.pathnameBase === "/" ? c : nn([c, s.encodeLocation ? s.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
    })), o, n, r);
    return t && _ ? v.createElement(Di.Provider, {
        value: {
            location: ys({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, f), navigationType: Kt.Pop
        }
    }, _) : _
}

function Jm() {
    let e = o0(), t = Hm(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null, s = {padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)"};
    return v.createElement(v.Fragment, null, v.createElement("h2", null, "Unexpected Application Error!"), v.createElement("h3", {style: {fontStyle: "italic"}}, t), n ? v.createElement("pre", {style: s}, n) : null, null)
}

const qm = v.createElement(Jm, null);

class Xm extends v.Component {
    constructor(t) {
        super(t), this.state = {location: t.location, revalidation: t.revalidation, error: t.error}
    }

    static getDerivedStateFromError(t) {
        return {error: t}
    }

    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }

    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }

    render() {
        return this.state.error !== void 0 ? v.createElement(dn.Provider, {value: this.props.routeContext}, v.createElement(Lp.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function e0(e) {
    let {routeContext: t, match: n, children: r} = e, s = v.useContext(Uc);
    return s && s.static && s.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = n.route.id), v.createElement(dn.Provider, {value: t}, r)
}

function t0(e, t, n, r) {
    var s;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var o;
        if ((o = n) != null && o.errors) e = n.matches; else return null
    }
    let i = e, a = (s = n) == null ? void 0 : s.errors;
    if (a != null) {
        let f = i.findIndex(d => d.route.id && a?.[d.route.id]);
        f >= 0 || ue(!1), i = i.slice(0, Math.min(i.length, f + 1))
    }
    let c = !1, u = -1;
    if (n && r && r.v7_partialHydration) for (let f = 0; f < i.length; f++) {
        let d = i[f];
        if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f), d.route.id) {
            let {loaderData: g, errors: C} = n,
                y = d.route.loader && g[d.route.id] === void 0 && (!C || C[d.route.id] === void 0);
            if (d.route.lazy || y) {
                c = !0, u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
                break
            }
        }
    }
    return i.reduceRight((f, d, g) => {
        let C, y = !1, _ = null, x = null;
        n && (C = a && d.route.id ? a[d.route.id] : void 0, _ = d.route.errorElement || qm, c && (u < 0 && g === 0 ? (l0("route-fallback", !1), y = !0, x = null) : u === g && (y = !0, x = d.route.hydrateFallbackElement || null)));
        let p = t.concat(i.slice(0, g + 1)), h = () => {
            let m;
            return C ? m = _ : y ? m = x : d.route.Component ? m = v.createElement(d.route.Component, null) : d.route.element ? m = d.route.element : m = f, v.createElement(e0, {
                match: d,
                routeContext: {outlet: f, matches: p, isDataRoute: n != null},
                children: m
            })
        };
        return n && (d.route.ErrorBoundary || d.route.errorElement || g === 0) ? v.createElement(Xm, {
            location: n.location,
            revalidation: n.revalidation,
            component: _,
            error: C,
            children: h(),
            routeContext: {outlet: null, matches: p, isDataRoute: !0}
        }) : h()
    }, null)
}

var Fp = function (e) {
    return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
}(Fp || {}), ri = function (e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
}(ri || {});

function n0(e) {
    let t = v.useContext(Uc);
    return t || ue(!1), t
}

function r0(e) {
    let t = v.useContext(Vm);
    return t || ue(!1), t
}

function s0(e) {
    let t = v.useContext(dn);
    return t || ue(!1), t
}

function Mp(e) {
    let t = s0(), n = t.matches[t.matches.length - 1];
    return n.route.id || ue(!1), n.route.id
}

function o0() {
    var e;
    let t = v.useContext(Lp), n = r0(ri.UseRouteError), r = Mp(ri.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function i0() {
    let {router: e} = n0(Fp.UseNavigateStable), t = Mp(ri.UseNavigateStable), n = v.useRef(!1);
    return Pp(() => {
        n.current = !0
    }), v.useCallback(function (s, o) {
        o === void 0 && (o = {}), n.current && (typeof s == "number" ? e.navigate(s) : e.navigate(s, ys({fromRouteId: t}, o)))
    }, [e, t])
}

const vd = {};

function l0(e, t, n) {
    !t && !vd[e] && (vd[e] = !0)
}

function Hc(e) {
    return Qm(e.context)
}

function V(e) {
    ue(!1)
}

function a0(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: s = Kt.Pop,
        navigator: o,
        static: i = !1,
        future: a
    } = e;
    Ns() && ue(!1);
    let c = t.replace(/^\/*/, "/"), u = v.useMemo(() => ({
        basename: c,
        navigator: o,
        static: i,
        future: ys({v7_relativeSplatPath: !1}, a)
    }), [c, a, o, i]);
    typeof r == "string" && (r = On(r));
    let {pathname: f = "/", search: d = "", hash: g = "", state: C = null, key: y = "default"} = r,
        _ = v.useMemo(() => {
            let x = zc(f, c);
            return x == null ? null : {location: {pathname: x, search: d, hash: g, state: C, key: y}, navigationType: s}
        }, [c, f, d, g, C, y, s]);
    return _ == null ? null : v.createElement(An.Provider, {value: u}, v.createElement(Di.Provider, {
        children: n,
        value: _
    }))
}

function c0(e) {
    let {children: t, location: n} = e;
    return Ym(Oa(t), n)
}

new Promise(() => {
});

function Oa(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return v.Children.forEach(e, (r, s) => {
        if (!v.isValidElement(r)) return;
        let o = [...t, s];
        if (r.type === v.Fragment) {
            n.push.apply(n, Oa(r.props.children, o));
            return
        }
        r.type !== V && ue(!1), !r.props.index || !r.props.children || ue(!1);
        let i = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = Oa(r.props.children, o)), n.push(i)
    }), n
}

/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa() {
    return Aa = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Aa.apply(this, arguments)
}

function u0(e, t) {
    if (e == null) return {};
    var n = {}, r = Object.keys(e), s, o;
    for (o = 0; o < r.length; o++) s = r[o], !(t.indexOf(s) >= 0) && (n[s] = e[s]);
    return n
}

function d0(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function f0(e, t) {
    return e.button === 0 && (!t || t === "_self") && !d0(e)
}

const h0 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
    p0 = "6";
try {
    window.__reactRouterVersion = p0
} catch {
}
const m0 = "startTransition", Cd = Pl[m0];

function g0(e) {
    let {basename: t, children: n, future: r, window: s} = e, o = v.useRef();
    o.current == null && (o.current = vm({window: s, v5Compat: !0}));
    let i = o.current, [a, c] = v.useState({action: i.action, location: i.location}), {v7_startTransition: u} = r || {},
        f = v.useCallback(d => {
            u && Cd ? Cd(() => c(d)) : c(d)
        }, [c, u]);
    return v.useLayoutEffect(() => i.listen(f), [i, f]), v.createElement(a0, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: i,
        future: r
    })
}

const y0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    _0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Oi = v.forwardRef(function (t, n) {
        let {
            onClick: r,
            relative: s,
            reloadDocument: o,
            replace: i,
            state: a,
            target: c,
            to: u,
            preventScrollReset: f,
            unstable_viewTransition: d
        } = t, g = u0(t, h0), {basename: C} = v.useContext(An), y, _ = !1;
        if (typeof u == "string" && _0.test(u) && (y = u, y0)) try {
            let m = new URL(window.location.href), w = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
                E = zc(w.pathname, C);
            w.origin === m.origin && E != null ? u = E + w.search + w.hash : _ = !0
        } catch {
        }
        let x = $m(u, {relative: s}),
            p = v0(u, {replace: i, state: a, target: c, preventScrollReset: f, relative: s, unstable_viewTransition: d});

        function h(m) {
            r && r(m), m.defaultPrevented || p(m)
        }

        return v.createElement("a", Aa({}, g, {href: y || x, onClick: _ || o ? r : h, ref: n, target: c}))
    });
var wd;
(function (e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(wd || (wd = {}));
var xd;
(function (e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(xd || (xd = {}));

function v0(e, t) {
    let {
        target: n,
        replace: r,
        state: s,
        preventScrollReset: o,
        relative: i,
        unstable_viewTransition: a
    } = t === void 0 ? {} : t, c = Bc(), u = Ts(), f = Ip(e, {relative: i});
    return v.useCallback(d => {
        if (f0(d, n)) {
            d.preventDefault();
            let g = r !== void 0 ? r : ni(u) === ni(f);
            c(e, {replace: g, state: s, preventScrollReset: o, relative: i, unstable_viewTransition: a})
        }
    }, [u, c, f, r, s, n, e, o, i, a])
}

const C0 = "_home_1oujy_1", w0 = "_notifications_1oujy_12", x0 = "_grades_1oujy_16", S0 = "_tasks_1oujy_20",
    Zs = {home: C0, notifications: w0, grades: x0, tasks: S0}, k0 = "_card_ywvep_7", E0 = "_card__header_ywvep_17",
    j0 = "_card__grade_ywvep_22", N0 = "_card__subject_ywvep_28", T0 = "_card__date_ywvep_34", mt = {
        "last-grade": "_last-grade_ywvep_1",
        card: k0,
        card__header: E0,
        card__grade: j0,
        card__subject: N0,
        card__date: T0,
        "lolipop--1": "_lolipop--1_ywvep_47",
        "lolipop--2": "_lolipop--2_ywvep_53"
    };
var zp = {exports: {}}, Up = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ds = v;

function D0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}

var O0 = typeof Object.is == "function" ? Object.is : D0, A0 = Ds.useSyncExternalStore, b0 = Ds.useRef,
    R0 = Ds.useEffect, L0 = Ds.useMemo, P0 = Ds.useDebugValue;
Up.useSyncExternalStoreWithSelector = function (e, t, n, r, s) {
    var o = b0(null);
    if (o.current === null) {
        var i = {hasValue: !1, value: null};
        o.current = i
    } else i = o.current;
    o = L0(function () {
        function c(C) {
            if (!u) {
                if (u = !0, f = C, C = r(C), s !== void 0 && i.hasValue) {
                    var y = i.value;
                    if (s(y, C)) return d = y
                }
                return d = C
            }
            if (y = d, O0(f, C)) return y;
            var _ = r(C);
            return s !== void 0 && s(y, _) ? y : (f = C, d = _)
        }

        var u = !1, f, d, g = n === void 0 ? null : n;
        return [function () {
            return c(t())
        }, g === null ? void 0 : function () {
            return c(g())
        }]
    }, [t, n, r, s]);
    var a = A0(e, o[0], o[1]);
    return R0(function () {
        i.hasValue = !0, i.value = a
    }, [a]), P0(a), a
};
zp.exports = Up;
var I0 = zp.exports, He = "default" in Pl ? Ka : Pl, Sd = Symbol.for("react-redux-context"),
    kd = typeof globalThis < "u" ? globalThis : {};

function F0() {
    if (!He.createContext) return {};
    const e = kd[Sd] ?? (kd[Sd] = new Map);
    let t = e.get(He.createContext);
    return t || (t = He.createContext(null), e.set(He.createContext, t)), t
}

var on = F0(), M0 = () => {
    throw new Error("uSES not initialized!")
};

function Wc(e = on) {
    return function () {
        return He.useContext(e)
    }
}

var Bp = Wc(), Hp = M0, z0 = e => {
    Hp = e
}, U0 = (e, t) => e === t;

function B0(e = on) {
    const t = e === on ? Bp : Wc(e), n = (r, s = {}) => {
        const {equalityFn: o = U0, devModeChecks: i = {}} = typeof s == "function" ? {equalityFn: s} : s, {
            store: a,
            subscription: c,
            getServerState: u,
            stabilityCheck: f,
            identityFunctionCheck: d
        } = t();
        He.useRef(!0);
        const g = He.useCallback({
            [r.name](y) {
                return r(y)
            }
        }[r.name], [r, f, i.stabilityCheck]), C = Hp(c.addNestedSub, a.getState, u || a.getState, g, o);
        return He.useDebugValue(C), C
    };
    return Object.assign(n, {withTypes: () => n}), n
}

var ne = B0();

function H0(e) {
    e()
}

function W0() {
    let e = null, t = null;
    return {
        clear() {
            e = null, t = null
        }, notify() {
            H0(() => {
                let n = e;
                for (; n;) n.callback(), n = n.next
            })
        }, get() {
            const n = [];
            let r = e;
            for (; r;) n.push(r), r = r.next;
            return n
        }, subscribe(n) {
            let r = !0;
            const s = t = {callback: n, next: null, prev: t};
            return s.prev ? s.prev.next = s : e = s, function () {
                !r || e === null || (r = !1, s.next ? s.next.prev = s.prev : t = s.prev, s.prev ? s.prev.next = s.next : e = s.next)
            }
        }
    }
}

var Ed = {
    notify() {
    }, get: () => []
};

function V0(e, t) {
    let n, r = Ed, s = 0, o = !1;

    function i(_) {
        f();
        const x = r.subscribe(_);
        let p = !1;
        return () => {
            p || (p = !0, x(), d())
        }
    }

    function a() {
        r.notify()
    }

    function c() {
        y.onStateChange && y.onStateChange()
    }

    function u() {
        return o
    }

    function f() {
        s++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = W0())
    }

    function d() {
        s--, n && s === 0 && (n(), n = void 0, r.clear(), r = Ed)
    }

    function g() {
        o || (o = !0, f())
    }

    function C() {
        o && (o = !1, d())
    }

    const y = {
        addNestedSub: i,
        notifyNestedSubs: a,
        handleChangeWrapper: c,
        isSubscribed: u,
        trySubscribe: g,
        tryUnsubscribe: C,
        getListeners: () => r
    };
    return y
}

var $0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    G0 = $0 ? He.useLayoutEffect : He.useEffect;

function K0({
                store: e,
                context: t,
                children: n,
                serverState: r,
                stabilityCheck: s = "once",
                identityFunctionCheck: o = "once"
            }) {
    const i = He.useMemo(() => {
        const u = V0(e);
        return {
            store: e,
            subscription: u,
            getServerState: r ? () => r : void 0,
            stabilityCheck: s,
            identityFunctionCheck: o
        }
    }, [e, r, s, o]), a = He.useMemo(() => e.getState(), [e]);
    G0(() => {
        const {subscription: u} = i;
        return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), a !== e.getState() && u.notifyNestedSubs(), () => {
            u.tryUnsubscribe(), u.onStateChange = void 0
        }
    }, [i, a]);
    const c = t || on;
    return He.createElement(c.Provider, {value: i}, n)
}

var Q0 = K0;

function Wp(e = on) {
    const t = e === on ? Bp : Wc(e), n = () => {
        const {store: r} = t();
        return r
    };
    return Object.assign(n, {withTypes: () => n}), n
}

var Y0 = Wp();

function Z0(e = on) {
    const t = e === on ? Y0 : Wp(e), n = () => t().dispatch;
    return Object.assign(n, {withTypes: () => n}), n
}

var bn = Z0();
z0(I0.useSyncExternalStoreWithSelector);
const pr = e => {
        const t = new Date(e), n = t.getFullYear(), r = String(t.getMonth() + 1).padStart(2, "0"),
            s = String(t.getDate()).padStart(2, "0");
        return `${n}-${r}-${s}`
    }, J0 = e => {
        const t = ne(o => o.studentGrades.grades),
            r = t.flatMap(o => o.grades).sort((o, i) => new Date(i.gradedAt).getTime() - new Date(o.gradedAt).getTime())[0],
            s = r ? t.find(o => o.grades.some(i => i.gradedAt === r.gradedAt))?.subjectName : "";
        return l.jsxs(Oi, {
            to: "/grades",
            className: `${mt["last-grade"]} ${e.className}`,
            children: [l.jsxs("div", {
                className: mt.lolipop,
                children: [l.jsx("img", {
                    className: mt["lolipop--2"],
                    src: "src/assets/images/lolipop-icon-stick.png",
                    alt: "Lolipop stick"
                }), l.jsx("img", {
                    className: mt["lolipop--1"],
                    src: "src/assets/images/lolipop-icon-sugar.png",
                    alt: "Lolipop sugar"
                })]
            }), l.jsx("div", {
                className: mt.card,
                children: r ? l.jsxs(l.Fragment, {
                    children: [l.jsx("h3", {
                        className: mt.card__header,
                        children: "Last Grade"
                    }), l.jsx("h1", {
                        className: mt.card__grade,
                        children: r.grade
                    }), l.jsx("h3", {className: mt.card__subject, children: s}), l.jsx("h3", {
                        className: mt.card__date,
                        children: pr(r.gradedAt)
                    })]
                }) : l.jsx("div", {className: mt.card__subject, children: "Brak ocen"})
            })]
        })
    }, q0 = "_card_h4i25_7", X0 = "_card__header_h4i25_21", e2 = "_card__title_h4i25_33", t2 = "_card__subject_h4i25_39",
    n2 = "_card__date_h4i25_63", St = {
        "last-task": "_last-task_h4i25_1",
        card: q0,
        card__header: X0,
        card__title: e2,
        card__subject: t2,
        "card__subject--value": "_card__subject--value_h4i25_45",
        "card__due-date": "_card__due-date_h4i25_51",
        "card__due-date--value": "_card__due-date--value_h4i25_57",
        card__date: n2
    };

function ge(e) {
    return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}

var r2 = typeof Symbol == "function" && Symbol.observable || "@@observable", jd = r2,
    _l = () => Math.random().toString(36).substring(7).split("").join("."), s2 = {
        INIT: `@@redux/INIT${_l()}`,
        REPLACE: `@@redux/REPLACE${_l()}`,
        PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${_l()}`
    }, si = s2;

function Vc(e) {
    if (typeof e != "object" || e === null) return !1;
    let t = e;
    for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null
}

function Vp(e, t, n) {
    if (typeof e != "function") throw new Error(ge(2));
    if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw new Error(ge(0));
    if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
        if (typeof n != "function") throw new Error(ge(1));
        return n(Vp)(e, t)
    }
    let r = e, s = t, o = new Map, i = o, a = 0, c = !1;

    function u() {
        i === o && (i = new Map, o.forEach((x, p) => {
            i.set(p, x)
        }))
    }

    function f() {
        if (c) throw new Error(ge(3));
        return s
    }

    function d(x) {
        if (typeof x != "function") throw new Error(ge(4));
        if (c) throw new Error(ge(5));
        let p = !0;
        u();
        const h = a++;
        return i.set(h, x), function () {
            if (p) {
                if (c) throw new Error(ge(6));
                p = !1, u(), i.delete(h), o = null
            }
        }
    }

    function g(x) {
        if (!Vc(x)) throw new Error(ge(7));
        if (typeof x.type > "u") throw new Error(ge(8));
        if (typeof x.type != "string") throw new Error(ge(17));
        if (c) throw new Error(ge(9));
        try {
            c = !0, s = r(s, x)
        } finally {
            c = !1
        }
        return (o = i).forEach(h => {
            h()
        }), x
    }

    function C(x) {
        if (typeof x != "function") throw new Error(ge(10));
        r = x, g({type: si.REPLACE})
    }

    function y() {
        const x = d;
        return {
            subscribe(p) {
                if (typeof p != "object" || p === null) throw new Error(ge(11));

                function h() {
                    const w = p;
                    w.next && w.next(f())
                }

                return h(), {unsubscribe: x(h)}
            }, [jd]() {
                return this
            }
        }
    }

    return g({type: si.INIT}), {dispatch: g, subscribe: d, getState: f, replaceReducer: C, [jd]: y}
}

function o2(e) {
    Object.keys(e).forEach(t => {
        const n = e[t];
        if (typeof n(void 0, {type: si.INIT}) > "u") throw new Error(ge(12));
        if (typeof n(void 0, {type: si.PROBE_UNKNOWN_ACTION()}) > "u") throw new Error(ge(13))
    })
}

function i2(e) {
    const t = Object.keys(e), n = {};
    for (let o = 0; o < t.length; o++) {
        const i = t[o];
        typeof e[i] == "function" && (n[i] = e[i])
    }
    const r = Object.keys(n);
    let s;
    try {
        o2(n)
    } catch (o) {
        s = o
    }
    return function (i = {}, a) {
        if (s) throw s;
        let c = !1;
        const u = {};
        for (let f = 0; f < r.length; f++) {
            const d = r[f], g = n[d], C = i[d], y = g(C, a);
            if (typeof y > "u") throw a && a.type, new Error(ge(14));
            u[d] = y, c = c || y !== C
        }
        return c = c || r.length !== Object.keys(i).length, c ? u : i
    }
}

function oi(...e) {
    return e.length === 0 ? t => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)))
}

function l2(...e) {
    return t => (n, r) => {
        const s = t(n, r);
        let o = () => {
            throw new Error(ge(15))
        };
        const i = {getState: s.getState, dispatch: (c, ...u) => o(c, ...u)}, a = e.map(c => c(i));
        return o = oi(...a)(s.dispatch), {...s, dispatch: o}
    }
}

function a2(e) {
    return Vc(e) && "type" in e && typeof e.type == "string"
}

var $p = Symbol.for("immer-nothing"), Nd = Symbol.for("immer-draftable"), $e = Symbol.for("immer-state");

function ct(e, ...t) {
    throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
}

var mr = Object.getPrototypeOf;

function ln(e) {
    return !!e && !!e[$e]
}

function Pt(e) {
    return e ? Gp(e) || Array.isArray(e) || !!e[Nd] || !!e.constructor?.[Nd] || bi(e) || Ri(e) : !1
}

var c2 = Object.prototype.constructor.toString();

function Gp(e) {
    if (!e || typeof e != "object") return !1;
    const t = mr(e);
    if (t === null) return !0;
    const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === c2
}

function ii(e, t) {
    Ai(e) === 0 ? Reflect.ownKeys(e).forEach(n => {
        t(n, e[n], e)
    }) : e.forEach((n, r) => t(r, n, e))
}

function Ai(e) {
    const t = e[$e];
    return t ? t.type_ : Array.isArray(e) ? 1 : bi(e) ? 2 : Ri(e) ? 3 : 0
}

function ba(e, t) {
    return Ai(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function Kp(e, t, n) {
    const r = Ai(e);
    r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n
}

function u2(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}

function bi(e) {
    return e instanceof Map
}

function Ri(e) {
    return e instanceof Set
}

function mn(e) {
    return e.copy_ || e.base_
}

function Ra(e, t) {
    if (bi(e)) return new Map(e);
    if (Ri(e)) return new Set(e);
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    if (!t && Gp(e)) return mr(e) ? {...e} : Object.assign(Object.create(null), e);
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[$e];
    let r = Reflect.ownKeys(n);
    for (let s = 0; s < r.length; s++) {
        const o = r[s], i = n[o];
        i.writable === !1 && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (n[o] = {
            configurable: !0,
            writable: !0,
            enumerable: i.enumerable,
            value: e[o]
        })
    }
    return Object.create(mr(e), n)
}

function $c(e, t = !1) {
    return Li(e) || ln(e) || !Pt(e) || (Ai(e) > 1 && (e.set = e.add = e.clear = e.delete = d2), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => $c(r, !0))), e
}

function d2() {
    ct(2)
}

function Li(e) {
    return Object.isFrozen(e)
}

var f2 = {};

function Nn(e) {
    const t = f2[e];
    return t || ct(0, e), t
}

var _s;

function Qp() {
    return _s
}

function h2(e, t) {
    return {drafts_: [], parent_: e, immer_: t, canAutoFreeze_: !0, unfinalizedDrafts_: 0}
}

function Td(e, t) {
    t && (Nn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
}

function La(e) {
    Pa(e), e.drafts_.forEach(p2), e.drafts_ = null
}

function Pa(e) {
    e === _s && (_s = e.parent_)
}

function Dd(e) {
    return _s = h2(_s, e)
}

function p2(e) {
    const t = e[$e];
    t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0
}

function Od(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    const n = t.drafts_[0];
    return e !== void 0 && e !== n ? (n[$e].modified_ && (La(t), ct(4)), Pt(e) && (e = li(t, e), t.parent_ || ai(t, e)), t.patches_ && Nn("Patches").generateReplacementPatches_(n[$e].base_, e, t.patches_, t.inversePatches_)) : e = li(t, n, []), La(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== $p ? e : void 0
}

function li(e, t, n) {
    if (Li(t)) return t;
    const r = t[$e];
    if (!r) return ii(t, (s, o) => Ad(e, r, t, s, o, n)), t;
    if (r.scope_ !== e) return t;
    if (!r.modified_) return ai(e, r.base_, !0), r.base_;
    if (!r.finalized_) {
        r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
        const s = r.copy_;
        let o = s, i = !1;
        r.type_ === 3 && (o = new Set(s), s.clear(), i = !0), ii(o, (a, c) => Ad(e, r, s, a, c, n, i)), ai(e, s, !1), n && e.patches_ && Nn("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_)
    }
    return r.copy_
}

function Ad(e, t, n, r, s, o, i) {
    if (ln(s)) {
        const a = o && t && t.type_ !== 3 && !ba(t.assigned_, r) ? o.concat(r) : void 0, c = li(e, s, a);
        if (Kp(n, r, c), ln(c)) e.canAutoFreeze_ = !1; else return
    } else i && n.add(s);
    if (Pt(s) && !Li(s)) {
        if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
        li(e, s), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && ai(e, s)
    }
}

function ai(e, t, n = !1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && $c(t, n)
}

function m2(e, t) {
    const n = Array.isArray(e), r = {
        type_: n ? 1 : 0,
        scope_: t ? t.scope_ : Qp(),
        modified_: !1,
        finalized_: !1,
        assigned_: {},
        parent_: t,
        base_: e,
        draft_: null,
        copy_: null,
        revoke_: null,
        isManual_: !1
    };
    let s = r, o = Gc;
    n && (s = [r], o = vs);
    const {revoke: i, proxy: a} = Proxy.revocable(s, o);
    return r.draft_ = a, r.revoke_ = i, a
}

var Gc = {
    get(e, t) {
        if (t === $e) return e;
        const n = mn(e);
        if (!ba(n, t)) return g2(e, n, t);
        const r = n[t];
        return e.finalized_ || !Pt(r) ? r : r === vl(e.base_, t) ? (Cl(e), e.copy_[t] = Fa(r, e)) : r
    }, has(e, t) {
        return t in mn(e)
    }, ownKeys(e) {
        return Reflect.ownKeys(mn(e))
    }, set(e, t, n) {
        const r = Yp(mn(e), t);
        if (r?.set) return r.set.call(e.draft_, n), !0;
        if (!e.modified_) {
            const s = vl(mn(e), t), o = s?.[$e];
            if (o && o.base_ === n) return e.copy_[t] = n, e.assigned_[t] = !1, !0;
            if (u2(n, s) && (n !== void 0 || ba(e.base_, t))) return !0;
            Cl(e), Ia(e)
        }
        return e.copy_[t] === n && (n !== void 0 || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0
    }, deleteProperty(e, t) {
        return vl(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Cl(e), Ia(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0
    }, getOwnPropertyDescriptor(e, t) {
        const n = mn(e), r = Reflect.getOwnPropertyDescriptor(n, t);
        return r && {writable: !0, configurable: e.type_ !== 1 || t !== "length", enumerable: r.enumerable, value: n[t]}
    }, defineProperty() {
        ct(11)
    }, getPrototypeOf(e) {
        return mr(e.base_)
    }, setPrototypeOf() {
        ct(12)
    }
}, vs = {};
ii(Gc, (e, t) => {
    vs[e] = function () {
        return arguments[0] = arguments[0][0], t.apply(this, arguments)
    }
});
vs.deleteProperty = function (e, t) {
    return vs.set.call(this, e, t, void 0)
};
vs.set = function (e, t, n) {
    return Gc.set.call(this, e[0], t, n, e[0])
};

function vl(e, t) {
    const n = e[$e];
    return (n ? mn(n) : e)[t]
}

function g2(e, t, n) {
    const r = Yp(t, n);
    return r ? "value" in r ? r.value : r.get?.call(e.draft_) : void 0
}

function Yp(e, t) {
    if (!(t in e)) return;
    let n = mr(e);
    for (; n;) {
        const r = Object.getOwnPropertyDescriptor(n, t);
        if (r) return r;
        n = mr(n)
    }
}

function Ia(e) {
    e.modified_ || (e.modified_ = !0, e.parent_ && Ia(e.parent_))
}

function Cl(e) {
    e.copy_ || (e.copy_ = Ra(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}

var y2 = class {
    constructor(e) {
        this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
            if (typeof t == "function" && typeof n != "function") {
                const o = n;
                n = t;
                const i = this;
                return function (c = o, ...u) {
                    return i.produce(c, f => n.call(this, f, ...u))
                }
            }
            typeof n != "function" && ct(6), r !== void 0 && typeof r != "function" && ct(7);
            let s;
            if (Pt(t)) {
                const o = Dd(this), i = Fa(t, void 0);
                let a = !0;
                try {
                    s = n(i), a = !1
                } finally {
                    a ? La(o) : Pa(o)
                }
                return Td(o, r), Od(s, o)
            } else if (!t || typeof t != "object") {
                if (s = n(t), s === void 0 && (s = t), s === $p && (s = void 0), this.autoFreeze_ && $c(s, !0), r) {
                    const o = [], i = [];
                    Nn("Patches").generateReplacementPatches_(t, s, o, i), r(o, i)
                }
                return s
            } else ct(1, t)
        }, this.produceWithPatches = (t, n) => {
            if (typeof t == "function") return (i, ...a) => this.produceWithPatches(i, c => t(c, ...a));
            let r, s;
            return [this.produce(t, n, (i, a) => {
                r = i, s = a
            }), r, s]
        }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
    }

    createDraft(e) {
        Pt(e) || ct(8), ln(e) && (e = Zp(e));
        const t = Dd(this), n = Fa(e, void 0);
        return n[$e].isManual_ = !0, Pa(t), n
    }

    finishDraft(e, t) {
        const n = e && e[$e];
        (!n || !n.isManual_) && ct(9);
        const {scope_: r} = n;
        return Td(r, t), Od(void 0, r)
    }

    setAutoFreeze(e) {
        this.autoFreeze_ = e
    }

    setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e
    }

    applyPatches(e, t) {
        let n;
        for (n = t.length - 1; n >= 0; n--) {
            const s = t[n];
            if (s.path.length === 0 && s.op === "replace") {
                e = s.value;
                break
            }
        }
        n > -1 && (t = t.slice(n + 1));
        const r = Nn("Patches").applyPatches_;
        return ln(e) ? r(e, t) : this.produce(e, s => r(s, t))
    }
};

function Fa(e, t) {
    const n = bi(e) ? Nn("MapSet").proxyMap_(e, t) : Ri(e) ? Nn("MapSet").proxySet_(e, t) : m2(e, t);
    return (t ? t.scope_ : Qp()).drafts_.push(n), n
}

function Zp(e) {
    return ln(e) || ct(10, e), Jp(e)
}

function Jp(e) {
    if (!Pt(e) || Li(e)) return e;
    const t = e[$e];
    let n;
    if (t) {
        if (!t.modified_) return t.base_;
        t.finalized_ = !0, n = Ra(e, t.scope_.immer_.useStrictShallowCopy_)
    } else n = Ra(e, !0);
    return ii(n, (r, s) => {
        Kp(n, r, Jp(s))
    }), t && (t.finalized_ = !1), n
}

var Ge = new y2, qp = Ge.produce;
Ge.produceWithPatches.bind(Ge);
Ge.setAutoFreeze.bind(Ge);
Ge.setUseStrictShallowCopy.bind(Ge);
Ge.applyPatches.bind(Ge);
Ge.createDraft.bind(Ge);
Ge.finishDraft.bind(Ge);

function _2(e, t = `expected a function, instead received ${typeof e}`) {
    if (typeof e != "function") throw new TypeError(t)
}

function v2(e, t = `expected an object, instead received ${typeof e}`) {
    if (typeof e != "object") throw new TypeError(t)
}

function C2(e, t = "expected all items to be functions, instead received the following types: ") {
    if (!e.every(n => typeof n == "function")) {
        const n = e.map(r => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r).join(", ");
        throw new TypeError(`${t}[${n}]`)
    }
}

var bd = e => Array.isArray(e) ? e : [e];

function w2(e) {
    const t = Array.isArray(e[0]) ? e[0] : e;
    return C2(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t
}

function x2(e, t) {
    const n = [], {length: r} = e;
    for (let s = 0; s < r; s++) n.push(e[s].apply(null, t));
    return n
}

var S2 = class {
    constructor(e) {
        this.value = e
    }

    deref() {
        return this.value
    }
}, k2 = typeof WeakRef < "u" ? WeakRef : S2, E2 = 0, Rd = 1;

function Js() {
    return {s: E2, v: void 0, o: null, p: null}
}

function Kc(e, t = {}) {
    let n = Js();
    const {resultEqualityCheck: r} = t;
    let s, o = 0;

    function i() {
        let a = n;
        const {length: c} = arguments;
        for (let d = 0, g = c; d < g; d++) {
            const C = arguments[d];
            if (typeof C == "function" || typeof C == "object" && C !== null) {
                let y = a.o;
                y === null && (a.o = y = new WeakMap);
                const _ = y.get(C);
                _ === void 0 ? (a = Js(), y.set(C, a)) : a = _
            } else {
                let y = a.p;
                y === null && (a.p = y = new Map);
                const _ = y.get(C);
                _ === void 0 ? (a = Js(), y.set(C, a)) : a = _
            }
        }
        const u = a;
        let f;
        if (a.s === Rd ? f = a.v : (f = e.apply(null, arguments), o++), u.s = Rd, r) {
            const d = s?.deref?.() ?? s;
            d != null && r(d, f) && (f = d, o !== 0 && o--), s = typeof f == "object" && f !== null || typeof f == "function" ? new k2(f) : f
        }
        return u.v = f, f
    }

    return i.clearCache = () => {
        n = Js(), i.resetResultsCount()
    }, i.resultsCount = () => o, i.resetResultsCount = () => {
        o = 0
    }, i
}

function Xp(e, ...t) {
    const n = typeof e == "function" ? {memoize: e, memoizeOptions: t} : e, r = (...s) => {
        let o = 0, i = 0, a, c = {}, u = s.pop();
        typeof u == "object" && (c = u, u = s.pop()), _2(u, `createSelector expects an output function after the inputs, but received: [${typeof u}]`);
        const f = {...n, ...c}, {
            memoize: d,
            memoizeOptions: g = [],
            argsMemoize: C = Kc,
            argsMemoizeOptions: y = [],
            devModeChecks: _ = {}
        } = f, x = bd(g), p = bd(y), h = w2(s), m = d(function () {
            return o++, u.apply(null, arguments)
        }, ...x), w = C(function () {
            i++;
            const j = x2(h, arguments);
            return a = m.apply(null, j), a
        }, ...p);
        return Object.assign(w, {
            resultFunc: u,
            memoizedResultFunc: m,
            dependencies: h,
            dependencyRecomputations: () => i,
            resetDependencyRecomputations: () => {
                i = 0
            },
            lastResult: () => a,
            recomputations: () => o,
            resetRecomputations: () => {
                o = 0
            },
            memoize: d,
            argsMemoize: C
        })
    };
    return Object.assign(r, {withTypes: () => r}), r
}

var j2 = Xp(Kc), N2 = Object.assign((e, t = j2) => {
    v2(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
    const n = Object.keys(e), r = n.map(o => e[o]);
    return t(r, (...o) => o.reduce((i, a, c) => (i[n[c]] = a, i), {}))
}, {withTypes: () => N2});

function e5(e) {
    return ({dispatch: n, getState: r}) => s => o => typeof o == "function" ? o(n, r, e) : s(o)
}

var T2 = e5(), D2 = e5, O2 = (...e) => {
    const t = Xp(...e), n = Object.assign((...r) => {
        const s = t(...r), o = (i, ...a) => s(ln(i) ? Zp(i) : i, ...a);
        return Object.assign(o, s), o
    }, {withTypes: () => n});
    return n
};
O2(Kc);
var A2 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
    if (arguments.length !== 0) return typeof arguments[0] == "object" ? oi : oi.apply(null, arguments)
};

function gr(e, t) {
    function n(...r) {
        if (t) {
            let s = t(...r);
            if (!s) throw new Error(Me(0));
            return {type: e, payload: s.payload, ..."meta" in s && {meta: s.meta}, ..."error" in s && {error: s.error}}
        }
        return {type: e, payload: r[0]}
    }

    return n.toString = () => `${e}`, n.type = e, n.match = r => a2(r) && r.type === e, n
}

var t5 = class Br extends Array {
    constructor(...t) {
        super(...t), Object.setPrototypeOf(this, Br.prototype)
    }

    static get [Symbol.species]() {
        return Br
    }

    concat(...t) {
        return super.concat.apply(this, t)
    }

    prepend(...t) {
        return t.length === 1 && Array.isArray(t[0]) ? new Br(...t[0].concat(this)) : new Br(...t.concat(this))
    }
};

function Ld(e) {
    return Pt(e) ? qp(e, () => {
    }) : e
}

function Pd(e, t, n) {
    if (e.has(t)) {
        let s = e.get(t);
        return n.update && (s = n.update(s, t, e), e.set(t, s)), s
    }
    if (!n.insert) throw new Error(Me(10));
    const r = n.insert(t, e);
    return e.set(t, r), r
}

function b2(e) {
    return typeof e == "boolean"
}

var R2 = () => function (t) {
        const {thunk: n = !0, immutableCheck: r = !0, serializableCheck: s = !0, actionCreatorCheck: o = !0} = t ?? {};
        let i = new t5;
        return n && (b2(n) ? i.push(T2) : i.push(D2(n.extraArgument))), i
    }, L2 = "RTK_autoBatch", n5 = e => t => {
        setTimeout(t, e)
    }, P2 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : n5(10),
    I2 = (e = {type: "raf"}) => t => (...n) => {
        const r = t(...n);
        let s = !0, o = !1, i = !1;
        const a = new Set,
            c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? P2 : e.type === "callback" ? e.queueNotification : n5(e.timeout),
            u = () => {
                i = !1, o && (o = !1, a.forEach(f => f()))
            };
        return Object.assign({}, r, {
            subscribe(f) {
                const d = () => s && f(), g = r.subscribe(d);
                return a.add(f), () => {
                    g(), a.delete(f)
                }
            }, dispatch(f) {
                try {
                    return s = !f?.meta?.[L2], o = !s, o && (i || (i = !0, c(u))), r.dispatch(f)
                } finally {
                    s = !0
                }
            }
        })
    }, F2 = e => function (n) {
        const {autoBatch: r = !0} = n ?? {};
        let s = new t5(e);
        return r && s.push(I2(typeof r == "object" ? r : void 0)), s
    }, M2 = !0;

function z2(e) {
    const t = R2(), {
        reducer: n = void 0,
        middleware: r,
        devTools: s = !0,
        preloadedState: o = void 0,
        enhancers: i = void 0
    } = e || {};
    let a;
    if (typeof n == "function") a = n; else if (Vc(n)) a = i2(n); else throw new Error(Me(1));
    let c;
    typeof r == "function" ? c = r(t) : c = t();
    let u = oi;
    s && (u = A2({trace: !M2, ...typeof s == "object" && s}));
    const f = l2(...c), d = F2(f);
    let g = typeof i == "function" ? i(d) : d();
    const C = u(...g);
    return Vp(a, o, C)
}

function r5(e) {
    const t = {}, n = [];
    let r;
    const s = {
        addCase(o, i) {
            const a = typeof o == "string" ? o : o.type;
            if (!a) throw new Error(Me(28));
            if (a in t) throw new Error(Me(29));
            return t[a] = i, s
        }, addMatcher(o, i) {
            return n.push({matcher: o, reducer: i}), s
        }, addDefaultCase(o) {
            return r = o, s
        }
    };
    return e(s), [t, n, r]
}

function U2(e) {
    return typeof e == "function"
}

function B2(e, t) {
    let [n, r, s] = r5(t), o;
    if (U2(e)) o = () => Ld(e()); else {
        const a = Ld(e);
        o = () => a
    }

    function i(a = o(), c) {
        let u = [n[c.type], ...r.filter(({matcher: f}) => f(c)).map(({reducer: f}) => f)];
        return u.filter(f => !!f).length === 0 && (u = [s]), u.reduce((f, d) => {
            if (d) if (ln(f)) {
                const C = d(f, c);
                return C === void 0 ? f : C
            } else {
                if (Pt(f)) return qp(f, g => d(g, c));
                {
                    const g = d(f, c);
                    if (g === void 0) {
                        if (f === null) return f;
                        throw new Error(Me(9))
                    }
                    return g
                }
            }
            return f
        }, a)
    }

    return i.getInitialState = o, i
}

var H2 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", W2 = (e = 21) => {
    let t = "", n = e;
    for (; n--;) t += H2[Math.random() * 64 | 0];
    return t
}, V2 = Symbol.for("rtk-slice-createasyncthunk");

function $2(e, t) {
    return `${e}/${t}`
}

function G2({creators: e} = {}) {
    const t = e?.asyncThunk?.[V2];
    return function (r) {
        const {name: s, reducerPath: o = s} = r;
        if (!s) throw new Error(Me(11));
        typeof process < "u";
        const i = (typeof r.reducers == "function" ? r.reducers(Q2()) : r.reducers) || {}, a = Object.keys(i),
            c = {sliceCaseReducersByName: {}, sliceCaseReducersByType: {}, actionCreators: {}, sliceMatchers: []}, u = {
                addCase(h, m) {
                    const w = typeof h == "string" ? h : h.type;
                    if (!w) throw new Error(Me(12));
                    if (w in c.sliceCaseReducersByType) throw new Error(Me(13));
                    return c.sliceCaseReducersByType[w] = m, u
                }, addMatcher(h, m) {
                    return c.sliceMatchers.push({matcher: h, reducer: m}), u
                }, exposeAction(h, m) {
                    return c.actionCreators[h] = m, u
                }, exposeCaseReducer(h, m) {
                    return c.sliceCaseReducersByName[h] = m, u
                }
            };
        a.forEach(h => {
            const m = i[h], w = {reducerName: h, type: $2(s, h), createNotation: typeof r.reducers == "function"};
            Z2(m) ? q2(w, m, u, t) : Y2(w, m, u)
        });

        function f() {
            const [h = {}, m = [], w = void 0] = typeof r.extraReducers == "function" ? r5(r.extraReducers) : [r.extraReducers],
                E = {...h, ...c.sliceCaseReducersByType};
            return B2(r.initialState, j => {
                for (let N in E) j.addCase(N, E[N]);
                for (let N of c.sliceMatchers) j.addMatcher(N.matcher, N.reducer);
                for (let N of m) j.addMatcher(N.matcher, N.reducer);
                w && j.addDefaultCase(w)
            })
        }

        const d = h => h, g = new Map;
        let C;

        function y(h, m) {
            return C || (C = f()), C(h, m)
        }

        function _() {
            return C || (C = f()), C.getInitialState()
        }

        function x(h, m = !1) {
            function w(j) {
                let N = j[h];
                return typeof N > "u" && m && (N = _()), N
            }

            function E(j = d) {
                const N = Pd(g, m, {insert: () => new WeakMap});
                return Pd(N, j, {
                    insert: () => {
                        const A = {};
                        for (const [W, L] of Object.entries(r.selectors ?? {})) A[W] = K2(L, j, _, m);
                        return A
                    }
                })
            }

            return {
                reducerPath: h, getSelectors: E, get selectors() {
                    return E(w)
                }, selectSlice: w
            }
        }

        const p = {
            name: s,
            reducer: y,
            actions: c.actionCreators,
            caseReducers: c.sliceCaseReducersByName,
            getInitialState: _, ...x(o),
            injectInto(h, {reducerPath: m, ...w} = {}) {
                const E = m ?? o;
                return h.inject({reducerPath: E, reducer: y}, w), {...p, ...x(E, !0)}
            }
        };
        return p
    }
}

function K2(e, t, n, r) {
    function s(o, ...i) {
        let a = t(o);
        return typeof a > "u" && r && (a = n()), e(a, ...i)
    }

    return s.unwrapped = e, s
}

var Os = G2();

function Q2() {
    function e(t, n) {
        return {_reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n}
    }

    return e.withTypes = () => e, {
        reducer(t) {
            return Object.assign({
                [t.name](...n) {
                    return t(...n)
                }
            }[t.name], {_reducerDefinitionType: "reducer"})
        }, preparedReducer(t, n) {
            return {_reducerDefinitionType: "reducerWithPrepare", prepare: t, reducer: n}
        }, asyncThunk: e
    }
}

function Y2({type: e, reducerName: t, createNotation: n}, r, s) {
    let o, i;
    if ("reducer" in r) {
        if (n && !J2(r)) throw new Error(Me(17));
        o = r.reducer, i = r.prepare
    } else o = r;
    s.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, i ? gr(e, i) : gr(e))
}

function Z2(e) {
    return e._reducerDefinitionType === "asyncThunk"
}

function J2(e) {
    return e._reducerDefinitionType === "reducerWithPrepare"
}

function q2({type: e, reducerName: t}, n, r, s) {
    if (!s) throw new Error(Me(18));
    const {payloadCreator: o, fulfilled: i, pending: a, rejected: c, settled: u, options: f} = n, d = s(e, o, f);
    r.exposeAction(t, d), i && r.addCase(d.fulfilled, i), a && r.addCase(d.pending, a), c && r.addCase(d.rejected, c), u && r.addMatcher(d.settled, u), r.exposeCaseReducer(t, {
        fulfilled: i || qs,
        pending: a || qs,
        rejected: c || qs,
        settled: u || qs
    })
}

function qs() {
}

var X2 = (e, t) => {
    if (typeof e != "function") throw new Error(Me(32))
}, Qc = "listenerMiddleware", eg = e => {
    let {type: t, actionCreator: n, matcher: r, predicate: s, effect: o} = e;
    if (t) s = gr(t).match; else if (n) t = n.type, s = n.match; else if (r) s = r; else if (!s) throw new Error(Me(21));
    return X2(o), {predicate: s, type: t, effect: o}
}, tg = Object.assign(e => {
    const {type: t, predicate: n, effect: r} = eg(e);
    return {
        id: W2(), effect: r, type: t, predicate: n, pending: new Set, unsubscribe: () => {
            throw new Error(Me(22))
        }
    }
}, {withTypes: () => tg}), ng = Object.assign(gr(`${Qc}/add`), {withTypes: () => ng});
gr(`${Qc}/removeAll`);
var rg = Object.assign(gr(`${Qc}/remove`), {withTypes: () => rg});

function Me(e) {
    return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}

const sg = {tasks: [], currentTaskId: null}, s5 = Os({
        name: "studentTasks", initialState: sg, reducers: {
            addTasks: (e, t) => {
                e.tasks = t.payload
            }, checkTaskById: (e, t) => {
                const n = e.tasks.some(r => r.id === t.payload);
                e.currentTaskId = n ? t.payload : null
            }, resetTaskId: e => {
                e.currentTaskId = null
            }
        }
    }), {addTasks: ci, checkTaskById: og, resetTaskId: ig} = s5.actions, lg = s5.reducer, ag = e => {
        const t = ne(a => a.studentTasks.tasks), n = bn(),
            s = t.filter(a => a.status === "TO_DO").slice().sort((a, c) => new Date(a.deadline).getTime() - new Date(c.deadline).getTime()),
            o = s.length > 0 ? s[0] : null, i = () => {
                o && n(og(o.id))
            };
        return l.jsx(Oi, {
            to: "/tasks",
            onClick: i,
            className: `${St["last-task"]} ${e.className}`,
            children: l.jsxs("div", {
                className: St.card,
                children: [l.jsx("h3", {
                    className: St.card__header,
                    children: "Cumming Task"
                }), o ? l.jsxs(l.Fragment, {
                    children: [l.jsx("h1", {
                        className: St.card__title,
                        children: o.title
                    }), l.jsx("h3", {
                        className: St.card__subject,
                        children: "Subject:"
                    }), l.jsx("h3", {
                        className: St["card__subject--value"],
                        children: o.subject
                    }), l.jsx("h3", {
                        className: St["card__due-date"],
                        children: "Due date:"
                    }), l.jsx("h3", {
                        className: St["card__due-date--value"],
                        children: pr(o.date)
                    }), l.jsx("h3", {className: St.card__date, children: pr(o.date)})]
                }) : l.jsx("p", {children: "No tasks available"})]
            })
        })
    }, cg = "_notifications_pbxb4_1", ug = "_notifications__content_pbxb4_5",
    dg = "_notifications__content__messages_pbxb4_21", fg = "_duck_pbxb4_39",
    Xs = {notifications: cg, notifications__content: ug, notifications__content__messages: dg, duck: fg},
    hg = "_message_kk2jl_1", pg = "_message__header_kk2jl_10", mg = "_message__content_kk2jl_24",
    wl = {message: hg, message__header: pg, message__content: mg}, gg = e => l.jsxs("div", {
        className: `${wl.message} ${e.className}`,
        children: [l.jsxs("div", {
            className: wl.message__header,
            children: [l.jsx("h4", {children: e.title}), l.jsx("h4", {children: e.date})]
        }), l.jsx("div", {className: wl.message__content, children: e.content})]
    }), yg = "" + new URL("Rainbow-DMGAJ3u9.png", import.meta.url).href;

function o5(e, t) {
    return function () {
        return e.apply(t, arguments)
    }
}

const {toString: _g} = Object.prototype, {getPrototypeOf: Yc} = Object, Pi = (e => t => {
        const n = _g.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
    })(Object.create(null)), wt = e => (e = e.toLowerCase(), t => Pi(t) === e),
    Ii = e => t => typeof t === e, {isArray: wr} = Array, Cs = Ii("undefined");

function vg(e) {
    return e !== null && !Cs(e) && e.constructor !== null && !Cs(e.constructor) && tt(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}

const i5 = wt("ArrayBuffer");

function Cg(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && i5(e.buffer), t
}

const wg = Ii("string"), tt = Ii("function"), l5 = Ii("number"), Fi = e => e !== null && typeof e == "object",
    xg = e => e === !0 || e === !1, Eo = e => {
        if (Pi(e) !== "object") return !1;
        const t = Yc(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    }, Sg = wt("Date"), kg = wt("File"), Eg = wt("Blob"), jg = wt("FileList"), Ng = e => Fi(e) && tt(e.pipe), Tg = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || tt(e.append) && ((t = Pi(e)) === "formdata" || t === "object" && tt(e.toString) && e.toString() === "[object FormData]"))
    }, Dg = wt("URLSearchParams"), Og = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function As(e, t, {allOwnKeys: n = !1} = {}) {
    if (e === null || typeof e > "u") return;
    let r, s;
    if (typeof e != "object" && (e = [e]), wr(e)) for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e); else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
        let a;
        for (r = 0; r < i; r++) a = o[r], t.call(null, e[a], a, e)
    }
}

function a5(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, s;
    for (; r-- > 0;) if (s = n[r], t === s.toLowerCase()) return s;
    return null
}

const c5 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    u5 = e => !Cs(e) && e !== c5;

function Ma() {
    const {caseless: e} = u5(this) && this || {}, t = {}, n = (r, s) => {
        const o = e && a5(t, s) || s;
        Eo(t[o]) && Eo(r) ? t[o] = Ma(t[o], r) : Eo(r) ? t[o] = Ma({}, r) : wr(r) ? t[o] = r.slice() : t[o] = r
    };
    for (let r = 0, s = arguments.length; r < s; r++) arguments[r] && As(arguments[r], n);
    return t
}

const Ag = (e, t, n, {allOwnKeys: r} = {}) => (As(t, (s, o) => {
        n && tt(s) ? e[o] = o5(s, n) : e[o] = s
    }, {allOwnKeys: r}), e), bg = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Rg = (e, t, n, r) => {
        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {value: t.prototype}), n && Object.assign(e.prototype, n)
    }, Lg = (e, t, n, r) => {
        let s, o, i;
        const a = {};
        if (t = t || {}, e == null) return t;
        do {
            for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0;) i = s[o], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
            e = n !== !1 && Yc(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    }, Pg = (e, t, n) => {
        e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
        const r = e.indexOf(t, n);
        return r !== -1 && r === n
    }, Ig = e => {
        if (!e) return null;
        if (wr(e)) return e;
        let t = e.length;
        if (!l5(t)) return null;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n
    }, Fg = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Yc(Uint8Array)), Mg = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let s;
        for (; (s = r.next()) && !s.done;) {
            const o = s.value;
            t.call(e, o[0], o[1])
        }
    }, zg = (e, t) => {
        let n;
        const r = [];
        for (; (n = e.exec(t)) !== null;) r.push(n);
        return r
    }, Ug = wt("HTMLFormElement"), Bg = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
        return r.toUpperCase() + s
    }), Id = (({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype), Hg = wt("RegExp"), d5 = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e), r = {};
        As(n, (s, o) => {
            let i;
            (i = t(s, o, e)) !== !1 && (r[o] = i || s)
        }), Object.defineProperties(e, r)
    }, Wg = e => {
        d5(e, (t, n) => {
            if (tt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const r = e[n];
            if (tt(r)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    }, Vg = (e, t) => {
        const n = {}, r = s => {
            s.forEach(o => {
                n[o] = !0
            })
        };
        return wr(e) ? r(e) : r(String(e).split(t)), n
    }, $g = () => {
    }, Gg = (e, t) => (e = +e, Number.isFinite(e) ? e : t), xl = "abcdefghijklmnopqrstuvwxyz", Fd = "0123456789",
    f5 = {DIGIT: Fd, ALPHA: xl, ALPHA_DIGIT: xl + xl.toUpperCase() + Fd}, Kg = (e = 16, t = f5.ALPHA_DIGIT) => {
        let n = "";
        const {length: r} = t;
        for (; e--;) n += t[Math.random() * r | 0];
        return n
    };

function Qg(e) {
    return !!(e && tt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}

const Yg = e => {
    const t = new Array(10), n = (r, s) => {
        if (Fi(r)) {
            if (t.indexOf(r) >= 0) return;
            if (!("toJSON" in r)) {
                t[s] = r;
                const o = wr(r) ? [] : {};
                return As(r, (i, a) => {
                    const c = n(i, s + 1);
                    !Cs(c) && (o[a] = c)
                }), t[s] = void 0, o
            }
        }
        return r
    };
    return n(e, 0)
}, Zg = wt("AsyncFunction"), Jg = e => e && (Fi(e) || tt(e)) && tt(e.then) && tt(e.catch), k = {
    isArray: wr,
    isArrayBuffer: i5,
    isBuffer: vg,
    isFormData: Tg,
    isArrayBufferView: Cg,
    isString: wg,
    isNumber: l5,
    isBoolean: xg,
    isObject: Fi,
    isPlainObject: Eo,
    isUndefined: Cs,
    isDate: Sg,
    isFile: kg,
    isBlob: Eg,
    isRegExp: Hg,
    isFunction: tt,
    isStream: Ng,
    isURLSearchParams: Dg,
    isTypedArray: Fg,
    isFileList: jg,
    forEach: As,
    merge: Ma,
    extend: Ag,
    trim: Og,
    stripBOM: bg,
    inherits: Rg,
    toFlatObject: Lg,
    kindOf: Pi,
    kindOfTest: wt,
    endsWith: Pg,
    toArray: Ig,
    forEachEntry: Mg,
    matchAll: zg,
    isHTMLForm: Ug,
    hasOwnProperty: Id,
    hasOwnProp: Id,
    reduceDescriptors: d5,
    freezeMethods: Wg,
    toObjectSet: Vg,
    toCamelCase: Bg,
    noop: $g,
    toFiniteNumber: Gg,
    findKey: a5,
    global: c5,
    isContextDefined: u5,
    ALPHABET: f5,
    generateString: Kg,
    isSpecCompliantForm: Qg,
    toJSONObject: Yg,
    isAsyncFn: Zg,
    isThenable: Jg
};

function M(e, t, n, r, s) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s)
}

k.inherits(M, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: k.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const h5 = M.prototype, p5 = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    p5[e] = {value: e}
});
Object.defineProperties(M, p5);
Object.defineProperty(h5, "isAxiosError", {value: !0});
M.from = (e, t, n, r, s, o) => {
    const i = Object.create(h5);
    return k.toFlatObject(e, i, function (c) {
        return c !== Error.prototype
    }, a => a !== "isAxiosError"), M.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i
};
const qg = null;

function za(e) {
    return k.isPlainObject(e) || k.isArray(e)
}

function m5(e) {
    return k.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function Md(e, t, n) {
    return e ? e.concat(t).map(function (s, o) {
        return s = m5(s), !n && o ? "[" + s + "]" : s
    }).join(n ? "." : "") : t
}

function Xg(e) {
    return k.isArray(e) && !e.some(za)
}

const e3 = k.toFlatObject(k, {}, null, function (t) {
    return /^is[A-Z]/.test(t)
});

function Mi(e, t, n) {
    if (!k.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, n = k.toFlatObject(n, {metaTokens: !0, dots: !1, indexes: !1}, !1, function (_, x) {
        return !k.isUndefined(x[_])
    });
    const r = n.metaTokens, s = n.visitor || f, o = n.dots, i = n.indexes,
        c = (n.Blob || typeof Blob < "u" && Blob) && k.isSpecCompliantForm(t);
    if (!k.isFunction(s)) throw new TypeError("visitor must be a function");

    function u(y) {
        if (y === null) return "";
        if (k.isDate(y)) return y.toISOString();
        if (!c && k.isBlob(y)) throw new M("Blob is not supported. Use a Buffer instead.");
        return k.isArrayBuffer(y) || k.isTypedArray(y) ? c && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y
    }

    function f(y, _, x) {
        let p = y;
        if (y && !x && typeof y == "object") {
            if (k.endsWith(_, "{}")) _ = r ? _ : _.slice(0, -2), y = JSON.stringify(y); else if (k.isArray(y) && Xg(y) || (k.isFileList(y) || k.endsWith(_, "[]")) && (p = k.toArray(y))) return _ = m5(_), p.forEach(function (m, w) {
                !(k.isUndefined(m) || m === null) && t.append(i === !0 ? Md([_], w, o) : i === null ? _ : _ + "[]", u(m))
            }), !1
        }
        return za(y) ? !0 : (t.append(Md(x, _, o), u(y)), !1)
    }

    const d = [], g = Object.assign(e3, {defaultVisitor: f, convertValue: u, isVisitable: za});

    function C(y, _) {
        if (!k.isUndefined(y)) {
            if (d.indexOf(y) !== -1) throw Error("Circular reference detected in " + _.join("."));
            d.push(y), k.forEach(y, function (p, h) {
                (!(k.isUndefined(p) || p === null) && s.call(t, p, k.isString(h) ? h.trim() : h, _, g)) === !0 && C(p, _ ? _.concat(h) : [h])
            }), d.pop()
        }
    }

    if (!k.isObject(e)) throw new TypeError("data must be an object");
    return C(e), t
}

function zd(e) {
    const t = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0"};
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
        return t[r]
    })
}

function Zc(e, t) {
    this._pairs = [], e && Mi(e, this, t)
}

const g5 = Zc.prototype;
g5.append = function (t, n) {
    this._pairs.push([t, n])
};
g5.toString = function (t) {
    const n = t ? function (r) {
        return t.call(this, r, zd)
    } : zd;
    return this._pairs.map(function (s) {
        return n(s[0]) + "=" + n(s[1])
    }, "").join("&")
};

function t3(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function y5(e, t, n) {
    if (!t) return e;
    const r = n && n.encode || t3, s = n && n.serialize;
    let o;
    if (s ? o = s(t, n) : o = k.isURLSearchParams(t) ? t.toString() : new Zc(t, n).toString(r), o) {
        const i = e.indexOf("#");
        i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}

class Ud {
    constructor() {
        this.handlers = []
    }

    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }), this.handlers.length - 1
    }

    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }

    clear() {
        this.handlers && (this.handlers = [])
    }

    forEach(t) {
        k.forEach(this.handlers, function (r) {
            r !== null && t(r)
        })
    }
}

const _5 = {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1},
    n3 = typeof URLSearchParams < "u" ? URLSearchParams : Zc, r3 = typeof FormData < "u" ? FormData : null,
    s3 = typeof Blob < "u" ? Blob : null, o3 = {
        isBrowser: !0,
        classes: {URLSearchParams: n3, FormData: r3, Blob: s3},
        protocols: ["http", "https", "file", "blob", "url", "data"]
    }, v5 = typeof window < "u" && typeof document < "u",
    i3 = (e => v5 && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product),
    l3 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    a3 = Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: v5,
        hasStandardBrowserEnv: i3,
        hasStandardBrowserWebWorkerEnv: l3
    }, Symbol.toStringTag, {value: "Module"}), _t = {...a3, ...o3};

function c3(e, t) {
    return Mi(e, new _t.classes.URLSearchParams, Object.assign({
        visitor: function (n, r, s, o) {
            return _t.isNode && k.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function u3(e) {
    return k.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function d3(e) {
    const t = {}, n = Object.keys(e);
    let r;
    const s = n.length;
    let o;
    for (r = 0; r < s; r++) o = n[r], t[o] = e[o];
    return t
}

function C5(e) {
    function t(n, r, s, o) {
        let i = n[o++];
        if (i === "__proto__") return !0;
        const a = Number.isFinite(+i), c = o >= n.length;
        return i = !i && k.isArray(s) ? s.length : i, c ? (k.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !k.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && k.isArray(s[i]) && (s[i] = d3(s[i])), !a)
    }

    if (k.isFormData(e) && k.isFunction(e.entries)) {
        const n = {};
        return k.forEachEntry(e, (r, s) => {
            t(u3(r), s, n, 0)
        }), n
    }
    return null
}

function f3(e, t, n) {
    if (k.isString(e)) try {
        return (t || JSON.parse)(e), k.trim(e)
    } catch (r) {
        if (r.name !== "SyntaxError") throw r
    }
    return (n || JSON.stringify)(e)
}

const Jc = {
    transitional: _5,
    adapter: ["xhr", "http"],
    transformRequest: [function (t, n) {
        const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = k.isObject(t);
        if (o && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t)) return s ? JSON.stringify(C5(t)) : t;
        if (k.isArrayBuffer(t) || k.isBuffer(t) || k.isStream(t) || k.isFile(t) || k.isBlob(t)) return t;
        if (k.isArrayBufferView(t)) return t.buffer;
        if (k.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let a;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1) return c3(t, this.formSerializer).toString();
            if ((a = k.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const c = this.env && this.env.FormData;
                return Mi(a ? {"files[]": t} : t, c && new c, this.formSerializer)
            }
        }
        return o || s ? (n.setContentType("application/json", !1), f3(t)) : t
    }],
    transformResponse: [function (t) {
        const n = this.transitional || Jc.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
        if (t && k.isString(t) && (r && !this.responseType || s)) {
            const i = !(n && n.silentJSONParsing) && s;
            try {
                return JSON.parse(t)
            } catch (a) {
                if (i) throw a.name === "SyntaxError" ? M.from(a, M.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {FormData: _t.classes.FormData, Blob: _t.classes.Blob},
    validateStatus: function (t) {
        return t >= 200 && t < 300
    },
    headers: {common: {Accept: "application/json, text/plain, */*", "Content-Type": void 0}}
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    Jc.headers[e] = {}
});
const qc = Jc,
    h3 = k.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    p3 = e => {
        const t = {};
        let n, r, s;
        return e && e.split(`
`).forEach(function (i) {
            s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && h3[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
        }), t
    }, Bd = Symbol("internals");

function Rr(e) {
    return e && String(e).trim().toLowerCase()
}

function jo(e) {
    return e === !1 || e == null ? e : k.isArray(e) ? e.map(jo) : String(e)
}

function m3(e) {
    const t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e);) t[r[1]] = r[2];
    return t
}

const g3 = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function Sl(e, t, n, r, s) {
    if (k.isFunction(r)) return r.call(this, t, n);
    if (s && (t = n), !!k.isString(t)) {
        if (k.isString(r)) return t.indexOf(r) !== -1;
        if (k.isRegExp(r)) return r.test(t)
    }
}

function y3(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}

function _3(e, t) {
    const n = k.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function (s, o, i) {
                return this[r].call(this, t, s, o, i)
            }, configurable: !0
        })
    })
}

class zi {
    constructor(t) {
        t && this.set(t)
    }

    set(t, n, r) {
        const s = this;

        function o(a, c, u) {
            const f = Rr(c);
            if (!f) throw new Error("header name must be a non-empty string");
            const d = k.findKey(s, f);
            (!d || s[d] === void 0 || u === !0 || u === void 0 && s[d] !== !1) && (s[d || c] = jo(a))
        }

        const i = (a, c) => k.forEach(a, (u, f) => o(u, f, c));
        return k.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : k.isString(t) && (t = t.trim()) && !g3(t) ? i(p3(t), n) : t != null && o(n, t, r), this
    }

    get(t, n) {
        if (t = Rr(t), t) {
            const r = k.findKey(this, t);
            if (r) {
                const s = this[r];
                if (!n) return s;
                if (n === !0) return m3(s);
                if (k.isFunction(n)) return n.call(this, s, r);
                if (k.isRegExp(n)) return n.exec(s);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }

    has(t, n) {
        if (t = Rr(t), t) {
            const r = k.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Sl(this, this[r], r, n)))
        }
        return !1
    }

    delete(t, n) {
        const r = this;
        let s = !1;

        function o(i) {
            if (i = Rr(i), i) {
                const a = k.findKey(r, i);
                a && (!n || Sl(r, r[a], a, n)) && (delete r[a], s = !0)
            }
        }

        return k.isArray(t) ? t.forEach(o) : o(t), s
    }

    clear(t) {
        const n = Object.keys(this);
        let r = n.length, s = !1;
        for (; r--;) {
            const o = n[r];
            (!t || Sl(this, this[o], o, t, !0)) && (delete this[o], s = !0)
        }
        return s
    }

    normalize(t) {
        const n = this, r = {};
        return k.forEach(this, (s, o) => {
            const i = k.findKey(r, o);
            if (i) {
                n[i] = jo(s), delete n[o];
                return
            }
            const a = t ? y3(o) : String(o).trim();
            a !== o && delete n[o], n[a] = jo(s), r[a] = !0
        }), this
    }

    concat(...t) {
        return this.constructor.concat(this, ...t)
    }

    toJSON(t) {
        const n = Object.create(null);
        return k.forEach(this, (r, s) => {
            r != null && r !== !1 && (n[s] = t && k.isArray(r) ? r.join(", ") : r)
        }), n
    }

    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }

    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }

    get [Symbol.toStringTag]() {
        return "AxiosHeaders"
    }

    static from(t) {
        return t instanceof this ? t : new this(t)
    }

    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(s => r.set(s)), r
    }

    static accessor(t) {
        const r = (this[Bd] = this[Bd] = {accessors: {}}).accessors, s = this.prototype;

        function o(i) {
            const a = Rr(i);
            r[a] || (_3(s, i), r[a] = !0)
        }

        return k.isArray(t) ? t.forEach(o) : o(t), this
    }
}

zi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
k.reduceDescriptors(zi.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e, set(r) {
            this[n] = r
        }
    }
});
k.freezeMethods(zi);
const Ot = zi;

function kl(e, t) {
    const n = this || qc, r = t || n, s = Ot.from(r.headers);
    let o = r.data;
    return k.forEach(e, function (a) {
        o = a.call(n, o, s.normalize(), t ? t.status : void 0)
    }), s.normalize(), o
}

function w5(e) {
    return !!(e && e.__CANCEL__)
}

function bs(e, t, n) {
    M.call(this, e ?? "canceled", M.ERR_CANCELED, t, n), this.name = "CanceledError"
}

k.inherits(bs, M, {__CANCEL__: !0});

function v3(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new M("Request failed with status code " + n.status, [M.ERR_BAD_REQUEST, M.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}

const C3 = _t.hasStandardBrowserEnv ? {
    write(e, t, n, r, s, o) {
        const i = [e + "=" + encodeURIComponent(t)];
        k.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), k.isString(r) && i.push("path=" + r), k.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ")
    }, read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    }, remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {
    }, read() {
        return null
    }, remove() {
    }
};

function w3(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function x3(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function x5(e, t) {
    return e && !w3(t) ? x3(e, t) : t
}

const S3 = _t.hasStandardBrowserEnv ? function () {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;

    function s(o) {
        let i = o;
        return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }

    return r = s(window.location.href), function (i) {
        const a = k.isString(i) ? s(i) : i;
        return a.protocol === r.protocol && a.host === r.host
    }
}() : function () {
    return function () {
        return !0
    }
}();

function k3(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function E3(e, t) {
    e = e || 10;
    const n = new Array(e), r = new Array(e);
    let s = 0, o = 0, i;
    return t = t !== void 0 ? t : 1e3, function (c) {
        const u = Date.now(), f = r[o];
        i || (i = u), n[s] = c, r[s] = u;
        let d = o, g = 0;
        for (; d !== s;) g += n[d++], d = d % e;
        if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t) return;
        const C = f && u - f;
        return C ? Math.round(g * 1e3 / C) : void 0
    }
}

function Hd(e, t) {
    let n = 0;
    const r = E3(50, 250);
    return s => {
        const o = s.loaded, i = s.lengthComputable ? s.total : void 0, a = o - n, c = r(a), u = o <= i;
        n = o;
        const f = {
            loaded: o,
            total: i,
            progress: i ? o / i : void 0,
            bytes: a,
            rate: c || void 0,
            estimated: c && i && u ? (i - o) / c : void 0,
            event: s
        };
        f[t ? "download" : "upload"] = !0, e(f)
    }
}

const j3 = typeof XMLHttpRequest < "u", N3 = j3 && function (e) {
    return new Promise(function (n, r) {
        let s = e.data;
        const o = Ot.from(e.headers).normalize();
        let {responseType: i, withXSRFToken: a} = e, c;

        function u() {
            e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c)
        }

        let f;
        if (k.isFormData(s)) {
            if (_t.hasStandardBrowserEnv || _t.hasStandardBrowserWebWorkerEnv) o.setContentType(!1); else if ((f = o.getContentType()) !== !1) {
                const [_, ...x] = f ? f.split(";").map(p => p.trim()).filter(Boolean) : [];
                o.setContentType([_ || "multipart/form-data", ...x].join("; "))
            }
        }
        let d = new XMLHttpRequest;
        if (e.auth) {
            const _ = e.auth.username || "", x = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            o.set("Authorization", "Basic " + btoa(_ + ":" + x))
        }
        const g = x5(e.baseURL, e.url);
        d.open(e.method.toUpperCase(), y5(g, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;

        function C() {
            if (!d) return;
            const _ = Ot.from("getAllResponseHeaders" in d && d.getAllResponseHeaders()), p = {
                data: !i || i === "text" || i === "json" ? d.responseText : d.response,
                status: d.status,
                statusText: d.statusText,
                headers: _,
                config: e,
                request: d
            };
            v3(function (m) {
                n(m), u()
            }, function (m) {
                r(m), u()
            }, p), d = null
        }

        if ("onloadend" in d ? d.onloadend = C : d.onreadystatechange = function () {
            !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(C)
        }, d.onabort = function () {
            d && (r(new M("Request aborted", M.ECONNABORTED, e, d)), d = null)
        }, d.onerror = function () {
            r(new M("Network Error", M.ERR_NETWORK, e, d)), d = null
        }, d.ontimeout = function () {
            let x = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
            const p = e.transitional || _5;
            e.timeoutErrorMessage && (x = e.timeoutErrorMessage), r(new M(x, p.clarifyTimeoutError ? M.ETIMEDOUT : M.ECONNABORTED, e, d)), d = null
        }, _t.hasStandardBrowserEnv && (a && k.isFunction(a) && (a = a(e)), a || a !== !1 && S3(g))) {
            const _ = e.xsrfHeaderName && e.xsrfCookieName && C3.read(e.xsrfCookieName);
            _ && o.set(e.xsrfHeaderName, _)
        }
        s === void 0 && o.setContentType(null), "setRequestHeader" in d && k.forEach(o.toJSON(), function (x, p) {
            d.setRequestHeader(p, x)
        }), k.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), i && i !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", Hd(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Hd(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = _ => {
            d && (r(!_ || _.type ? new bs(null, e, d) : _), d.abort(), d = null)
        }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
        const y = k3(g);
        if (y && _t.protocols.indexOf(y) === -1) {
            r(new M("Unsupported protocol " + y + ":", M.ERR_BAD_REQUEST, e));
            return
        }
        d.send(s || null)
    })
}, Ua = {http: qg, xhr: N3};
k.forEach(Ua, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {value: t})
        } catch {
        }
        Object.defineProperty(e, "adapterName", {value: t})
    }
});
const Wd = e => `- ${e}`, T3 = e => k.isFunction(e) || e === null || e === !1, S5 = {
    getAdapter: e => {
        e = k.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const s = {};
        for (let o = 0; o < t; o++) {
            n = e[o];
            let i;
            if (r = n, !T3(n) && (r = Ua[(i = String(n)).toLowerCase()], r === void 0)) throw new M(`Unknown adapter '${i}'`);
            if (r) break;
            s[i || "#" + o] = r
        }
        if (!r) {
            const o = Object.entries(s).map(([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build"));
            let i = t ? o.length > 1 ? `since :
` + o.map(Wd).join(`
`) : " " + Wd(o[0]) : "as no adapter specified";
            throw new M("There is no suitable adapter to dispatch the request " + i, "ERR_NOT_SUPPORT")
        }
        return r
    }, adapters: Ua
};

function El(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new bs(null, e)
}

function Vd(e) {
    return El(e), e.headers = Ot.from(e.headers), e.data = kl.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), S5.getAdapter(e.adapter || qc.adapter)(e).then(function (r) {
        return El(e), r.data = kl.call(e, e.transformResponse, r), r.headers = Ot.from(r.headers), r
    }, function (r) {
        return w5(r) || (El(e), r && r.response && (r.response.data = kl.call(e, e.transformResponse, r.response), r.response.headers = Ot.from(r.response.headers))), Promise.reject(r)
    })
}

const $d = e => e instanceof Ot ? {...e} : e;

function yr(e, t) {
    t = t || {};
    const n = {};

    function r(u, f, d) {
        return k.isPlainObject(u) && k.isPlainObject(f) ? k.merge.call({caseless: d}, u, f) : k.isPlainObject(f) ? k.merge({}, f) : k.isArray(f) ? f.slice() : f
    }

    function s(u, f, d) {
        if (k.isUndefined(f)) {
            if (!k.isUndefined(u)) return r(void 0, u, d)
        } else return r(u, f, d)
    }

    function o(u, f) {
        if (!k.isUndefined(f)) return r(void 0, f)
    }

    function i(u, f) {
        if (k.isUndefined(f)) {
            if (!k.isUndefined(u)) return r(void 0, u)
        } else return r(void 0, f)
    }

    function a(u, f, d) {
        if (d in t) return r(u, f);
        if (d in e) return r(void 0, u)
    }

    const c = {
        url: o,
        method: o,
        data: o,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        withXSRFToken: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: a,
        headers: (u, f) => s($d(u), $d(f), !0)
    };
    return k.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
        const d = c[f] || s, g = d(e[f], t[f], f);
        k.isUndefined(g) && d !== a || (n[f] = g)
    }), n
}

const k5 = "1.6.8", Xc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    Xc[e] = function (r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const Gd = {};
Xc.transitional = function (t, n, r) {
    function s(o, i) {
        return "[Axios v" + k5 + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "")
    }

    return (o, i, a) => {
        if (t === !1) throw new M(s(i, " has been removed" + (n ? " in " + n : "")), M.ERR_DEPRECATED);
        return n && !Gd[i] && (Gd[i] = !0, console.warn(s(i, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, i, a) : !0
    }
};

function D3(e, t, n) {
    if (typeof e != "object") throw new M("options must be an object", M.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let s = r.length;
    for (; s-- > 0;) {
        const o = r[s], i = t[o];
        if (i) {
            const a = e[o], c = a === void 0 || i(a, o, e);
            if (c !== !0) throw new M("option " + o + " must be " + c, M.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new M("Unknown option " + o, M.ERR_BAD_OPTION)
    }
}

const Ba = {assertOptions: D3, validators: Xc}, Mt = Ba.validators;

class ui {
    constructor(t) {
        this.defaults = t, this.interceptors = {request: new Ud, response: new Ud}
    }

    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let s;
                Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error;
                const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
                r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
            }
            throw r
        }
    }

    _request(t, n) {
        typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = yr(this.defaults, n);
        const {transitional: r, paramsSerializer: s, headers: o} = n;
        r !== void 0 && Ba.assertOptions(r, {
            silentJSONParsing: Mt.transitional(Mt.boolean),
            forcedJSONParsing: Mt.transitional(Mt.boolean),
            clarifyTimeoutError: Mt.transitional(Mt.boolean)
        }, !1), s != null && (k.isFunction(s) ? n.paramsSerializer = {serialize: s} : Ba.assertOptions(s, {
            encode: Mt.function,
            serialize: Mt.function
        }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let i = o && k.merge(o.common, o[n.method]);
        o && k.forEach(["delete", "get", "head", "post", "put", "patch", "common"], y => {
            delete o[y]
        }), n.headers = Ot.concat(i, o);
        const a = [];
        let c = !0;
        this.interceptors.request.forEach(function (_) {
            typeof _.runWhen == "function" && _.runWhen(n) === !1 || (c = c && _.synchronous, a.unshift(_.fulfilled, _.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function (_) {
            u.push(_.fulfilled, _.rejected)
        });
        let f, d = 0, g;
        if (!c) {
            const y = [Vd.bind(this), void 0];
            for (y.unshift.apply(y, a), y.push.apply(y, u), g = y.length, f = Promise.resolve(n); d < g;) f = f.then(y[d++], y[d++]);
            return f
        }
        g = a.length;
        let C = n;
        for (d = 0; d < g;) {
            const y = a[d++], _ = a[d++];
            try {
                C = y(C)
            } catch (x) {
                _.call(this, x);
                break
            }
        }
        try {
            f = Vd.call(this, C)
        } catch (y) {
            return Promise.reject(y)
        }
        for (d = 0, g = u.length; d < g;) f = f.then(u[d++], u[d++]);
        return f
    }

    getUri(t) {
        t = yr(this.defaults, t);
        const n = x5(t.baseURL, t.url);
        return y5(n, t.params, t.paramsSerializer)
    }
}

k.forEach(["delete", "get", "head", "options"], function (t) {
    ui.prototype[t] = function (n, r) {
        return this.request(yr(r || {}, {method: t, url: n, data: (r || {}).data}))
    }
});
k.forEach(["post", "put", "patch"], function (t) {
    function n(r) {
        return function (o, i, a) {
            return this.request(yr(a || {}, {
                method: t,
                headers: r ? {"Content-Type": "multipart/form-data"} : {},
                url: o,
                data: i
            }))
        }
    }

    ui.prototype[t] = n(), ui.prototype[t + "Form"] = n(!0)
});
const No = ui;

class eu {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (o) {
            n = o
        });
        const r = this;
        this.promise.then(s => {
            if (!r._listeners) return;
            let o = r._listeners.length;
            for (; o-- > 0;) r._listeners[o](s);
            r._listeners = null
        }), this.promise.then = s => {
            let o;
            const i = new Promise(a => {
                r.subscribe(a), o = a
            }).then(s);
            return i.cancel = function () {
                r.unsubscribe(o)
            }, i
        }, t(function (o, i, a) {
            r.reason || (r.reason = new bs(o, i, a), n(r.reason))
        })
    }

    throwIfRequested() {
        if (this.reason) throw this.reason
    }

    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }

    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }

    static source() {
        let t;
        return {
            token: new eu(function (s) {
                t = s
            }), cancel: t
        }
    }
}

const O3 = eu;

function A3(e) {
    return function (n) {
        return e.apply(null, n)
    }
}

function b3(e) {
    return k.isObject(e) && e.isAxiosError === !0
}

const Ha = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Ha).forEach(([e, t]) => {
    Ha[t] = e
});
const R3 = Ha;

function E5(e) {
    const t = new No(e), n = o5(No.prototype.request, t);
    return k.extend(n, No.prototype, t, {allOwnKeys: !0}), k.extend(n, t, null, {allOwnKeys: !0}), n.create = function (s) {
        return E5(yr(e, s))
    }, n
}

const oe = E5(qc);
oe.Axios = No;
oe.CanceledError = bs;
oe.CancelToken = O3;
oe.isCancel = w5;
oe.VERSION = k5;
oe.toFormData = Mi;
oe.AxiosError = M;
oe.Cancel = oe.CanceledError;
oe.all = function (t) {
    return Promise.all(t)
};
oe.spread = A3;
oe.isAxiosError = b3;
oe.mergeConfig = yr;
oe.AxiosHeaders = Ot;
oe.formToJSON = e => C5(k.isHTMLForm(e) ? new FormData(e) : e);
oe.getAdapter = S5.getAdapter;
oe.HttpStatusCode = R3;
oe.default = oe;

class Hr extends Error {
}

Hr.prototype.name = "InvalidTokenError";

function L3(e) {
    return decodeURIComponent(atob(e).replace(/(.)/g, (t, n) => {
        let r = n.charCodeAt(0).toString(16).toUpperCase();
        return r.length < 2 && (r = "0" + r), "%" + r
    }))
}

function P3(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/");
    switch (t.length % 4) {
        case 0:
            break;
        case 2:
            t += "==";
            break;
        case 3:
            t += "=";
            break;
        default:
            throw new Error("base64 string is not of the correct length")
    }
    try {
        return L3(t)
    } catch {
        return atob(t)
    }
}

function I3(e, t) {
    if (typeof e != "string") throw new Hr("Invalid token specified: must be a string");
    t || (t = {});
    const n = t.header === !0 ? 0 : 1, r = e.split(".")[n];
    if (typeof r != "string") throw new Hr(`Invalid token specified: missing part #${n + 1}`);
    let s;
    try {
        s = P3(r)
    } catch (o) {
        throw new Hr(`Invalid token specified: invalid base64 for part #${n + 1} (${o.message})`)
    }
    try {
        return JSON.parse(s)
    } catch (o) {
        throw new Hr(`Invalid token specified: invalid json for part #${n + 1} (${o.message})`)
    }
}

const G = oe.create({baseURL: "http://localhost:8080"});
G.interceptors.request.use(e => (e.headers.Authorization = localStorage.getItem("BEARER_TOKEN"), e.headers.Accept = "application/json", e.headers["Content-Type"] = "application/json", e));
G.interceptors.response.use(e => e, e => {
    const {response: t} = e;
    throw (t.status === 401 || t.status === 403) && j5() && (N5(), window.location.reload()), e
});
const j5 = () => window.localStorage.getItem("BEARER_TOKEN");

function N5() {
    window.localStorage.removeItem("BEARER_TOKEN")
}

function Ui(e) {
    const t = I3(e);
    return {id: t.jti, role: t.Role, email: t.sub}
}

async function F3(e) {
    try {
        const n = (await G.post("/login", e)).headers.authorization;
        return localStorage.setItem("BEARER_TOKEN", n), Ui(n)
    } catch (t) {
        throw console.error("Error logging in", t), t
    }
}

async function M3(e) {
    try {
        const t = await G.get(`/api/v1/notifications/users/${e}`);
        return console.log(t.data), t.data
    } catch (t) {
        throw console.error("Error fetching user tasks:", t), t
    }
}

const z3 = e => {
        const t = ne(s => s.login), [n, r] = v.useState([]);
        return v.useEffect(() => {
            (async () => {
                try {
                    const o = await M3(t.id);
                    r(o)
                } catch (o) {
                    console.error("Failed to fetch notifications:", o)
                }
            })()
        }, [t.id]), l.jsxs("div", {
            className: `${Xs.notifications} ${e.className}`,
            style: e.style,
            children: [l.jsx("img", {
                src: "src/assets/images/duck.png",
                className: Xs.duck
            }), l.jsxs("div", {
                className: Xs.notifications__content,
                children: [l.jsx("h1", {children: "NOTIFICATIONS"}), l.jsx("div", {
                    className: Xs.notifications__content__messages,
                    children: n.slice().reverse().map((s, o) => l.jsx(gg, {
                        title: s.title,
                        date: pr(s.createdAt),
                        content: s.content
                    }, o))
                }), l.jsx("img", {src: yg, alt: "Rainbow", draggable: "false"})]
            })]
        })
    }, eo = () => {
        const e = ne(t => t.login);
        return l.jsxs("main", {
            className: Zs.home,
            children: [l.jsx(z3, {
                className: Zs.notifications,
                style: e.role !== "Student" ? {gridColumn: "1 / 3"} : {}
            }), e.role === "Student" && l.jsxs(l.Fragment, {children: [l.jsx(J0, {className: Zs.grades}), l.jsx(ag, {className: Zs.tasks})]})]
        })
    }, U3 = "_sidebar_2lnjk_20", B3 = "_sidebar__title_2lnjk_28", H3 = "_sidebar__bookmarks_2lnjk_37",
    W3 = "_slideIn_2lnjk_1", V3 = "_sidebar__profile_2lnjk_56", $3 = "_slideInProfile_2lnjk_1", G3 = "_logo_2lnjk_75",
    zt = {
        sidebar: U3,
        sidebar__title: B3,
        sidebar__bookmarks: H3,
        "sidebar__bookmarks--active": "_sidebar__bookmarks--active_2lnjk_44",
        slideIn: W3,
        sidebar__profile: V3,
        "sidebar__profile--active": "_sidebar__profile--active_2lnjk_65",
        slideInProfile: $3,
        logo: G3
    }, K3 = "_bookmark_1endu_1", Q3 = "_bookmark__anime_1endu_20", Y3 = "_bookmark__active_1endu_28",
    Z3 = "_profile_1endu_33", J3 = "_profile__data_1endu_45", q3 = "_profile__svg_1endu_55",
    vn = {bookmark: K3, bookmark__anime: Q3, bookmark__active: Y3, profile: Z3, profile__data: J3, profile__svg: q3},
    xr = () => {
        const [e, t] = v.useState(!1);
        return v.useEffect(() => {
            const n = localStorage.getItem("isAnimated") === "true";
            t(n)
        }, []), e
    }, In = e => {
        const n = Ts().pathname === e.to, r = e.canActive !== !1, s = xr(), o = n && r ? vn.bookmark__active : "",
            i = s ? `${o} ${vn.bookmark__anime}` : o, a = s ? {} : {transform: "translateX(40%)"};
        return l.jsx("div", {
            className: i,
            style: a,
            children: l.jsxs(Oi, {
                to: e.to,
                className: vn.bookmark,
                replace: !0,
                onClick: e.onClick,
                children: [l.jsx("span", {children: e.children}), e.svgIcon]
            })
        })
    }, X3 = e => l.jsx("svg", {
        className: e.className,
        width: "46",
        height: "46",
        viewBox: "0 0 46 46",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: l.jsx("path", {
            d: "M43.19 25.1101V20.03L38.44 18.8801C38.0491 17.116 37.3736 15.4272 36.44 13.8801L38.93 9.81006L35.33 6.22021L31.48 8.57007C29.8579 7.47036 28.0531 6.66799 26.15 6.2002L25.15 2H20.07L19.07 6C16.9906 6.38993 15.0049 7.17408 13.22 8.31006L9.84 6.23999L6.23999 9.83008L8.23999 13.1401C7.03766 14.9612 6.20207 16.9992 5.78 19.1401L2 20.0601V25.1101L5.89001 26.05C6.35669 28.0937 7.20487 30.0309 8.39001 31.76L6.22 35.3101L9.82001 38.9001L13.58 36.6101C15.2339 37.6 17.0477 38.2938 18.94 38.6602L20.02 43.1301H25.1L26.24 38.4302C27.956 37.9909 29.5902 37.2783 31.08 36.3201L35.3 38.9001L38.9 35.3101L36.27 31.01C37.1819 29.5522 37.857 27.9592 38.27 26.29L43.19 25.1101ZM22.63 29.55C21.2455 29.55 19.8922 29.1395 18.741 28.3704C17.5899 27.6012 16.6927 26.5081 16.1628 25.229C15.633 23.9499 15.4944 22.5424 15.7645 21.1846C16.0346 19.8267 16.7013 18.5793 17.6803 17.6003C18.6592 16.6214 19.9065 15.9547 21.2644 15.6846C22.6222 15.4145 24.0297 15.5532 25.3088 16.083C26.5879 16.6128 27.6811 17.51 28.4503 18.6611C29.2195 19.8123 29.63 21.1656 29.63 22.55C29.63 24.4066 28.8925 26.187 27.5797 27.4998C26.267 28.8125 24.4865 29.55 22.63 29.55V29.55Z",
            stroke: "#FFD6FF",
            strokeWidth: "4",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }), ey = () => l.jsx("svg", {
        width: "37",
        height: "34",
        viewBox: "0 0 37 34",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: l.jsx("path", {
            d: "M2 32H35M15 32V16H7V32H15ZM15 32H22M15 32V8H22V32M22 32H30V2H22V32Z",
            stroke: "#FFD6FF",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }), ty = () => l.jsxs("svg", {
        width: "47",
        height: "48",
        viewBox: "0 0 47 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [l.jsx("path", {
            d: "M44.92 19.07L41.39 25.57L43.67 32.62L36.98 35.79L34.69 42.83L27.42 41.47L21.43 45.82L16.34 40.44H8.93999L7.98 33.1L2 28.75L5.53 22.25L3.25 15.21L9.93999 12.03L12.23 4.98999L19.5 6.34998L25.49 2L30.58 7.38H37.98L38.94 14.72L44.92 19.07Z",
            stroke: "#FFD6FF",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), l.jsx("path", {
            d: "M22.7 31.75C22.4347 31.75 22.1804 31.6447 21.9929 31.4571C21.8053 31.2696 21.7 31.0152 21.7 30.75V20.49C21.7347 20.1527 21.6972 19.8118 21.59 19.49C21.2582 19.6438 20.9432 19.8315 20.65 20.05L18.65 21.41C18.2 21.72 17.83 21.52 17.83 20.97V18.9C17.8474 18.5965 17.9296 18.3003 18.071 18.0312C18.2125 17.7621 18.4099 17.5265 18.65 17.34L20.89 15.84C21.4424 15.5007 22.0723 15.308 22.72 15.28H25.42C25.6852 15.28 25.9395 15.3854 26.1271 15.5729C26.3146 15.7604 26.42 16.0148 26.42 16.28V30.74C26.42 31.0052 26.3146 31.2596 26.1271 31.4471C25.9395 31.6346 25.6852 31.74 25.42 31.74L22.7 31.75Z",
            fill: "#FFD6FF"
        })]
    }), ny = () => l.jsxs("svg", {
        width: "34",
        height: "34",
        viewBox: "0 0 34 34",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [l.jsx("path", {
            d: "M31.4466 17.3712V31.627H2V2.18872H17.0666",
            stroke: "#FFD6FF",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), l.jsx("path", {
            d: "M17.7948 21.6405L11.3743 22.1369L12.3671 16.2128L25.4481 3.12361C26.1679 2.40414 27.1441 2 28.1619 2C29.1797 2 30.1558 2.40414 30.8757 3.12361V3.12361C31.5957 3.84492 32 4.82243 32 5.84157C32 6.86071 31.5957 7.83824 30.8757 8.55955L17.7948 21.6405Z",
            stroke: "#FFD6FF",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })]
    }), ry = () => l.jsx("svg", {
        width: "32",
        height: "33",
        viewBox: "0 0 32 33",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: l.jsx("path", {
            d: "M14.6542 20.8108H10.4362C7.81565 20.8108 6.5054 20.8108 5.47186 21.2881C4.09379 21.9246 2.99893 23.1452 2.42811 24.6816C2 25.8339 2 27.2946 2 30.2162M20.9814 2.45579C23.0425 3.38596 24.4964 5.63881 24.4964 8.27027M16.0601 31L18.9075 30.3651C19.1556 30.3098 19.2798 30.2821 19.3955 30.2314C19.4983 30.1866 19.596 30.1283 19.6864 30.0579C19.7885 29.9786 19.8779 29.8789 20.057 29.6792L29.4175 19.2432C30.1942 18.3775 30.1941 16.9739 29.4175 16.1081C28.641 15.2423 27.382 15.2423 26.6055 16.1081L17.2449 26.5442C17.0659 26.7437 16.9764 26.8434 16.9053 26.9572C16.8422 27.058 16.7899 27.167 16.7495 27.2814C16.7042 27.4106 16.6793 27.5488 16.6297 27.8257L16.0601 31ZM18.1693 8.27027C18.1693 11.7332 15.6513 14.5405 12.5452 14.5405C9.43909 14.5405 6.9211 11.7332 6.9211 8.27027C6.9211 4.80729 9.43909 2 12.5452 2C15.6513 2 18.1693 4.80729 18.1693 8.27027Z",
            stroke: "#FFD6FF",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }), sy = () => l.jsxs("svg", {
        width: "33",
        height: "32",
        viewBox: "0 0 33 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [l.jsx("path", {
            d: "M22 26.152V30H2V2H22V6.13604",
            stroke: "#FFD6FF",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), l.jsx("path", {
            d: "M18 11L13 16.0035L18 21",
            stroke: "#FFD6FF",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), l.jsx("path", {
            d: "M31 16H14",
            stroke: "#FFD6FF",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })]
    }), tu = e => l.jsxs("svg", {
        className: e.className,
        width: "70",
        height: "70",
        viewBox: "0 0 70 70",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [l.jsx("circle", {
            cx: "35.0002",
            cy: "26.2499",
            r: "11.6667",
            fill: "#33363F"
        }), l.jsx("circle", {cx: "49.5835", cy: "26.25", r: "8.75", fill: "#33363F"}), l.jsx("circle", {
            cx: "20.4165",
            cy: "26.25",
            r: "8.75",
            fill: "#33363F"
        }), l.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M51.2416 52.5001H60.1453C60.7369 52.5001 61.1932 51.9963 61.0939 51.4131C60.5179 48.0306 58.085 37.9167 49.5837 37.9167C46.9992 37.9167 44.9756 38.8514 43.3945 40.2476C47.7921 43.1007 50.0659 48.0966 51.2416 52.5001Z",
            fill: "#33363F"
        }), l.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M26.6056 40.2475C25.0245 38.8514 23.0009 37.9167 20.4165 37.9167C11.9152 37.9167 9.48219 48.0306 8.90621 51.4131C8.8069 51.9963 9.26314 52.5001 9.85476 52.5001H18.7585C19.9342 48.0966 22.208 43.1006 26.6056 40.2475Z",
            fill: "#33363F"
        }), l.jsx("path", {
            d: "M34.9998 40.8333C47.4764 40.8333 49.2788 53.6421 49.5392 57.3431C49.578 57.894 49.1355 58.3333 48.5832 58.3333H21.4165C20.8642 58.3333 20.4217 57.894 20.4605 57.3431C20.7209 53.6421 22.5233 40.8333 34.9998 40.8333Z",
            fill: "#33363F"
        })]
    }), oy = () => l.jsx("svg", {
        width: "34",
        height: "34",
        viewBox: "0 0 34 34",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: l.jsx("path", {
            d: "M17 2L2 16.9592H5.29603V31.63H13.506V21.9081H20.4854V31.63H28.704V16.9592H32L17 2Z",
            stroke: "#FFD6FF",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }), T5 = e => l.jsxs("svg", {
        className: e.className,
        width: "590",
        height: "105",
        viewBox: "0 0 590 105",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [l.jsx("path", {
            d: "M24.7187 63.0154C23.1587 63.0154 21.6587 62.7654 20.2187 62.2654C18.7987 61.7454 17.6987 61.0854 16.9187 60.2854L17.7887 58.5754C18.5287 59.2954 19.5187 59.9054 20.7587 60.4054C22.0187 60.8854 23.3387 61.1254 24.7187 61.1254C26.0387 61.1254 27.1087 60.9654 27.9287 60.6454C28.7687 60.3054 29.3787 59.8554 29.7587 59.2954C30.1587 58.7354 30.3587 58.1154 30.3587 57.4354C30.3587 56.6154 30.1187 55.9554 29.6387 55.4554C29.1787 54.9554 28.5687 54.5654 27.8087 54.2854C27.0487 53.9854 26.2087 53.7254 25.2887 53.5054C24.3687 53.2854 23.4487 53.0554 22.5287 52.8154C21.6087 52.5554 20.7587 52.2154 19.9787 51.7954C19.2187 51.3754 18.5987 50.8254 18.1187 50.1454C17.6587 49.4454 17.4287 48.5354 17.4287 47.4154C17.4287 46.3754 17.6987 45.4254 18.2387 44.5654C18.7987 43.6854 19.6487 42.9854 20.7887 42.4654C21.9287 41.9254 23.3887 41.6554 25.1687 41.6554C26.3487 41.6554 27.5187 41.8254 28.6787 42.1654C29.8387 42.4854 30.8387 42.9354 31.6787 43.5154L30.9287 45.2854C30.0287 44.6854 29.0687 44.2454 28.0487 43.9654C27.0487 43.6854 26.0787 43.5454 25.1387 43.5454C23.8787 43.5454 22.8387 43.7154 22.0187 44.0554C21.1987 44.3954 20.5887 44.8554 20.1887 45.4354C19.8087 45.9954 19.6187 46.6354 19.6187 47.3554C19.6187 48.1754 19.8487 48.8354 20.3087 49.3354C20.7887 49.8354 21.4087 50.2254 22.1687 50.5054C22.9487 50.7854 23.7987 51.0354 24.7187 51.2554C25.6387 51.4754 26.5487 51.7154 27.4487 51.9754C28.3687 52.2354 29.2087 52.5754 29.9687 52.9954C30.7487 53.3954 31.3687 53.9354 31.8287 54.6154C32.3087 55.2954 32.5487 56.1854 32.5487 57.2854C32.5487 58.3054 32.2687 59.2554 31.7087 60.1354C31.1487 60.9954 30.2887 61.6954 29.1287 62.2354C27.9887 62.7554 26.5187 63.0154 24.7187 63.0154ZM43.4757 62.9854C41.9157 62.9854 40.5157 62.6454 39.2757 61.9654C38.0557 61.2654 37.0957 60.3154 36.3957 59.1154C35.6957 57.8954 35.3457 56.5054 35.3457 54.9454C35.3457 53.3654 35.6957 51.9754 36.3957 50.7754C37.0957 49.5754 38.0557 48.6354 39.2757 47.9554C40.5157 47.2754 41.9157 46.9354 43.4757 46.9354C44.8157 46.9354 46.0257 47.1954 47.1057 47.7154C48.1857 48.2354 49.0357 49.0154 49.6557 50.0554L48.0657 51.1354C47.5257 50.3354 46.8557 49.7454 46.0557 49.3654C45.2557 48.9854 44.3857 48.7954 43.4457 48.7954C42.3257 48.7954 41.3157 49.0554 40.4157 49.5754C39.5157 50.0754 38.8057 50.7854 38.2857 51.7054C37.7657 52.6254 37.5057 53.7054 37.5057 54.9454C37.5057 56.1854 37.7657 57.2654 38.2857 58.1854C38.8057 59.1054 39.5157 59.8254 40.4157 60.3454C41.3157 60.8454 42.3257 61.0954 43.4457 61.0954C44.3857 61.0954 45.2557 60.9054 46.0557 60.5254C46.8557 60.1454 47.5257 59.5654 48.0657 58.7854L49.6557 59.8654C49.0357 60.8854 48.1857 61.6654 47.1057 62.2054C46.0257 62.7254 44.8157 62.9854 43.4757 62.9854ZM61.6456 46.9354C62.9256 46.9354 64.0456 47.1854 65.0056 47.6854C65.9856 48.1654 66.7456 48.9054 67.2856 49.9054C67.8456 50.9054 68.1256 52.1654 68.1256 53.6854V62.8354H65.9956V53.8954C65.9956 52.2354 65.5756 50.9854 64.7356 50.1454C63.9156 49.2854 62.7556 48.8554 61.2556 48.8554C60.1356 48.8554 59.1556 49.0854 58.3156 49.5454C57.4956 49.9854 56.8556 50.6354 56.3956 51.4954C55.9556 52.3354 55.7356 53.3554 55.7356 54.5554V62.8354H53.6056V40.5754H55.7356V51.4054L55.3156 50.5954C55.8156 49.4554 56.6156 48.5654 57.7156 47.9254C58.8156 47.2654 60.1256 46.9354 61.6456 46.9354ZM80.2991 62.9854C78.7791 62.9854 77.4091 62.6454 76.1891 61.9654C74.9891 61.2654 74.0391 60.3154 73.3391 59.1154C72.6391 57.8954 72.2891 56.5054 72.2891 54.9454C72.2891 53.3654 72.6391 51.9754 73.3391 50.7754C74.0391 49.5754 74.9891 48.6354 76.1891 47.9554C77.3891 47.2754 78.7591 46.9354 80.2991 46.9354C81.8591 46.9354 83.2391 47.2754 84.4391 47.9554C85.6591 48.6354 86.6091 49.5754 87.2891 50.7754C87.9891 51.9754 88.3391 53.3654 88.3391 54.9454C88.3391 56.5054 87.9891 57.8954 87.2891 59.1154C86.6091 60.3154 85.6591 61.2654 84.4391 61.9654C83.2191 62.6454 81.8391 62.9854 80.2991 62.9854ZM80.2991 61.0954C81.4391 61.0954 82.4491 60.8454 83.3291 60.3454C84.2091 59.8254 84.8991 59.1054 85.3991 58.1854C85.9191 57.2454 86.1791 56.1654 86.1791 54.9454C86.1791 53.7054 85.9191 52.6254 85.3991 51.7054C84.8991 50.7854 84.2091 50.0754 83.3291 49.5754C82.4491 49.0554 81.4491 48.7954 80.3291 48.7954C79.2091 48.7954 78.2091 49.0554 77.3291 49.5754C76.4491 50.0754 75.7491 50.7854 75.2291 51.7054C74.7091 52.6254 74.4491 53.7054 74.4491 54.9454C74.4491 56.1654 74.7091 57.2454 75.2291 58.1854C75.7491 59.1054 76.4491 59.8254 77.3291 60.3454C78.2091 60.8454 79.1991 61.0954 80.2991 61.0954ZM99.1077 62.9854C97.5877 62.9854 96.2177 62.6454 94.9977 61.9654C93.7977 61.2654 92.8477 60.3154 92.1477 59.1154C91.4477 57.8954 91.0977 56.5054 91.0977 54.9454C91.0977 53.3654 91.4477 51.9754 92.1477 50.7754C92.8477 49.5754 93.7977 48.6354 94.9977 47.9554C96.1977 47.2754 97.5677 46.9354 99.1077 46.9354C100.668 46.9354 102.048 47.2754 103.248 47.9554C104.468 48.6354 105.418 49.5754 106.098 50.7754C106.798 51.9754 107.148 53.3654 107.148 54.9454C107.148 56.5054 106.798 57.8954 106.098 59.1154C105.418 60.3154 104.468 61.2654 103.248 61.9654C102.028 62.6454 100.648 62.9854 99.1077 62.9854ZM99.1077 61.0954C100.248 61.0954 101.258 60.8454 102.138 60.3454C103.018 59.8254 103.708 59.1054 104.208 58.1854C104.728 57.2454 104.988 56.1654 104.988 54.9454C104.988 53.7054 104.728 52.6254 104.208 51.7054C103.708 50.7854 103.018 50.0754 102.138 49.5754C101.258 49.0554 100.258 48.7954 99.1377 48.7954C98.0177 48.7954 97.0177 49.0554 96.1377 49.5754C95.2577 50.0754 94.5577 50.7854 94.0377 51.7054C93.5177 52.6254 93.2577 53.7054 93.2577 54.9454C93.2577 56.1654 93.5177 57.2454 94.0377 58.1854C94.5577 59.1054 95.2577 59.8254 96.1377 60.3454C97.0177 60.8454 98.0077 61.0954 99.1077 61.0954ZM111.496 62.8354V40.5754H113.626V62.8354H111.496Z",
            fill: "black"
        }), l.jsxs("g", {
            clipPath: "url(#clip0_18_55)",
            children: [l.jsx("path", {
                d: "M245.894 104.671C216.909 90.3853 152.516 86.1794 143.509 85.6263C147.65 82.2721 151.086 78.28 155.108 75.4934C157.709 73.938 218.596 86.0577 245.894 104.671Z",
                fill: "#232B48"
            }), l.jsx("path", {
                d: "M245.878 104.531C219.306 83.3328 151.174 68.3541 146.421 68.3112C150.544 64.3242 152.457 62.0878 156.041 58.4082C162.83 59.061 190.537 65.3638 211.396 78.6691C224.546 87.0576 237.045 95.4286 245.878 104.531Z",
                fill: "#007FC5"
            }), l.jsx("path", {
                d: "M245.881 104.319C245.868 103.436 245.807 57.1249 245.807 57.1249C240.22 10.3401 211.007 -2.58919 214.572 0.409545L157.793 46.3331C196.114 55.1699 237.922 92.003 245.881 104.319Z",
                fill: "#B4E4FB"
            }), l.jsx("path", {
                d: "M245.888 104.664C275.037 90.7156 339.478 87.2672 348.491 86.8185C344.39 83.4165 340.999 79.3849 337.01 76.5519C334.428 74.9663 273.4 86.3688 245.888 104.664Z",
                fill: "#232B48"
            }), l.jsx("path", {
                d: "M245.894 104.529C272.71 83.6397 341.027 69.4587 345.78 69.4708C341.704 65.4363 339.816 63.1779 336.275 59.457C329.479 60.0311 301.7 66.0124 280.69 79.0751C267.443 87.3106 254.832 95.5292 245.894 104.529Z",
                fill: "#007FC5"
            }), l.jsx("path", {
                d: "M245.878 104.325C245.901 103.442 245.811 57.1066 245.811 57.1066C251.94 10.3897 282.02 -2.17302 278.42 0.784202L334.663 47.3626C296.243 55.7548 253.98 92.1018 245.878 104.325Z",
                fill: "#7CC6ED"
            })]
        }), l.jsx("path", {
            d: "M364.911 62.8354V41.8354H366.741L376.341 58.2154H375.381L384.891 41.8354H386.721V62.8354H384.591V45.1654H385.101L376.341 60.1654H375.291L366.471 45.1654H367.041V62.8354H364.911ZM402.984 62.8354V59.3554L402.894 58.7854V52.9654C402.894 51.6254 402.514 50.5954 401.754 49.8754C401.014 49.1554 399.904 48.7954 398.424 48.7954C397.404 48.7954 396.434 48.9654 395.514 49.3054C394.594 49.6454 393.814 50.0954 393.174 50.6554L392.214 49.0654C393.014 48.3854 393.974 47.8654 395.094 47.5054C396.214 47.1254 397.394 46.9354 398.634 46.9354C400.674 46.9354 402.244 47.4454 403.344 48.4654C404.464 49.4654 405.024 50.9954 405.024 53.0554V62.8354H402.984ZM397.554 62.9854C396.374 62.9854 395.344 62.7954 394.464 62.4154C393.604 62.0154 392.944 61.4754 392.484 60.7954C392.024 60.0954 391.794 59.2954 391.794 58.3954C391.794 57.5754 391.984 56.8354 392.364 56.1754C392.764 55.4954 393.404 54.9554 394.284 54.5554C395.184 54.1354 396.384 53.9254 397.884 53.9254H403.314V55.5154H397.944C396.424 55.5154 395.364 55.7854 394.764 56.3254C394.184 56.8654 393.894 57.5354 393.894 58.3354C393.894 59.2354 394.244 59.9554 394.944 60.4954C395.644 61.0354 396.624 61.3054 397.884 61.3054C399.084 61.3054 400.114 61.0354 400.974 60.4954C401.854 59.9354 402.494 59.1354 402.894 58.0954L403.374 59.5654C402.974 60.6054 402.274 61.4354 401.274 62.0554C400.294 62.6754 399.054 62.9854 397.554 62.9854ZM418.849 46.9354C420.129 46.9354 421.249 47.1854 422.209 47.6854C423.189 48.1654 423.949 48.9054 424.489 49.9054C425.049 50.9054 425.329 52.1654 425.329 53.6854V62.8354H423.199V53.8954C423.199 52.2354 422.779 50.9854 421.939 50.1454C421.119 49.2854 419.959 48.8554 418.459 48.8554C417.339 48.8554 416.359 49.0854 415.519 49.5454C414.699 49.9854 414.059 50.6354 413.599 51.4954C413.159 52.3354 412.939 53.3554 412.939 54.5554V62.8354H410.809V47.0854H412.849V51.4054L412.519 50.5954C413.019 49.4554 413.819 48.5654 414.919 47.9254C416.019 47.2654 417.329 46.9354 418.849 46.9354ZM440.952 62.8354V59.3554L440.862 58.7854V52.9654C440.862 51.6254 440.482 50.5954 439.722 49.8754C438.982 49.1554 437.872 48.7954 436.392 48.7954C435.372 48.7954 434.402 48.9654 433.482 49.3054C432.562 49.6454 431.782 50.0954 431.142 50.6554L430.182 49.0654C430.982 48.3854 431.942 47.8654 433.062 47.5054C434.182 47.1254 435.362 46.9354 436.602 46.9354C438.642 46.9354 440.212 47.4454 441.312 48.4654C442.432 49.4654 442.992 50.9954 442.992 53.0554V62.8354H440.952ZM435.522 62.9854C434.342 62.9854 433.312 62.7954 432.432 62.4154C431.572 62.0154 430.912 61.4754 430.452 60.7954C429.992 60.0954 429.762 59.2954 429.762 58.3954C429.762 57.5754 429.952 56.8354 430.332 56.1754C430.732 55.4954 431.372 54.9554 432.252 54.5554C433.152 54.1354 434.352 53.9254 435.852 53.9254H441.282V55.5154H435.912C434.392 55.5154 433.332 55.7854 432.732 56.3254C432.152 56.8654 431.862 57.5354 431.862 58.3354C431.862 59.2354 432.212 59.9554 432.912 60.4954C433.612 61.0354 434.592 61.3054 435.852 61.3054C437.052 61.3054 438.082 61.0354 438.942 60.4954C439.822 59.9354 440.462 59.1354 440.862 58.0954L441.342 59.5654C440.942 60.6054 440.242 61.4354 439.242 62.0554C438.262 62.6754 437.022 62.9854 435.522 62.9854ZM455.498 68.8054C454.058 68.8054 452.678 68.5954 451.358 68.1754C450.038 67.7554 448.968 67.1554 448.148 66.3754L449.228 64.7554C449.968 65.4154 450.878 65.9354 451.958 66.3154C453.058 66.7154 454.218 66.9154 455.438 66.9154C457.438 66.9154 458.908 66.4454 459.848 65.5054C460.788 64.5854 461.258 63.1454 461.258 61.1854V57.2554L461.558 54.5554L461.348 51.8554V47.0854H463.388V60.9154C463.388 63.6354 462.718 65.6254 461.378 66.8854C460.058 68.1654 458.098 68.8054 455.498 68.8054ZM455.108 62.2354C453.608 62.2354 452.258 61.9154 451.058 61.2754C449.858 60.6154 448.908 59.7054 448.208 58.5454C447.528 57.3854 447.188 56.0554 447.188 54.5554C447.188 53.0554 447.528 51.7354 448.208 50.5954C448.908 49.4354 449.858 48.5354 451.058 47.8954C452.258 47.2554 453.608 46.9354 455.108 46.9354C456.508 46.9354 457.768 47.2254 458.888 47.8054C460.008 48.3854 460.898 49.2454 461.558 50.3854C462.218 51.5254 462.548 52.9154 462.548 54.5554C462.548 56.1954 462.218 57.5854 461.558 58.7254C460.898 59.8654 460.008 60.7354 458.888 61.3354C457.768 61.9354 456.508 62.2354 455.108 62.2354ZM455.318 60.3454C456.478 60.3454 457.508 60.1054 458.408 59.6254C459.308 59.1254 460.018 58.4454 460.538 57.5854C461.058 56.7054 461.318 55.6954 461.318 54.5554C461.318 53.4154 461.058 52.4154 460.538 51.5554C460.018 50.6954 459.308 50.0254 458.408 49.5454C457.508 49.0454 456.478 48.7954 455.318 48.7954C454.178 48.7954 453.148 49.0454 452.228 49.5454C451.328 50.0254 450.618 50.6954 450.098 51.5554C449.598 52.4154 449.348 53.4154 449.348 54.5554C449.348 55.6954 449.598 56.7054 450.098 57.5854C450.618 58.4454 451.328 59.1254 452.228 59.6254C453.148 60.1054 454.178 60.3454 455.318 60.3454ZM476.005 62.9854C474.365 62.9854 472.925 62.6454 471.685 61.9654C470.445 61.2654 469.475 60.3154 468.775 59.1154C468.075 57.8954 467.725 56.5054 467.725 54.9454C467.725 53.3854 468.055 52.0054 468.715 50.8054C469.395 49.6054 470.315 48.6654 471.475 47.9854C472.655 47.2854 473.975 46.9354 475.435 46.9354C476.915 46.9354 478.225 47.2754 479.365 47.9554C480.525 48.6154 481.435 49.5554 482.095 50.7754C482.755 51.9754 483.085 53.3654 483.085 54.9454C483.085 55.0454 483.075 55.1554 483.055 55.2754C483.055 55.3754 483.055 55.4854 483.055 55.6054H469.345V54.0154H481.915L481.075 54.6454C481.075 53.5054 480.825 52.4954 480.325 51.6154C479.845 50.7154 479.185 50.0154 478.345 49.5154C477.505 49.0154 476.535 48.7654 475.435 48.7654C474.355 48.7654 473.385 49.0154 472.525 49.5154C471.665 50.0154 470.995 50.7154 470.515 51.6154C470.035 52.5154 469.795 53.5454 469.795 54.7054V55.0354C469.795 56.2354 470.055 57.2954 470.575 58.2154C471.115 59.1154 471.855 59.8254 472.795 60.3454C473.755 60.8454 474.845 61.0954 476.065 61.0954C477.025 61.0954 477.915 60.9254 478.735 60.5854C479.575 60.2454 480.295 59.7254 480.895 59.0254L482.095 60.4054C481.395 61.2454 480.515 61.8854 479.455 62.3254C478.415 62.7654 477.265 62.9854 476.005 62.9854ZM507.1 46.9354C508.38 46.9354 509.49 47.1854 510.43 47.6854C511.39 48.1654 512.13 48.9054 512.65 49.9054C513.19 50.9054 513.46 52.1654 513.46 53.6854V62.8354H511.33V53.8954C511.33 52.2354 510.93 50.9854 510.13 50.1454C509.35 49.2854 508.24 48.8554 506.8 48.8554C505.72 48.8554 504.78 49.0854 503.98 49.5454C503.2 49.9854 502.59 50.6354 502.15 51.4954C501.73 52.3354 501.52 53.3554 501.52 54.5554V62.8354H499.39V53.8954C499.39 52.2354 498.99 50.9854 498.19 50.1454C497.39 49.2854 496.27 48.8554 494.83 48.8554C493.77 48.8554 492.84 49.0854 492.04 49.5454C491.24 49.9854 490.62 50.6354 490.18 51.4954C489.76 52.3354 489.55 53.3554 489.55 54.5554V62.8354H487.42V47.0854H489.46V51.3454L489.13 50.5954C489.61 49.4554 490.38 48.5654 491.44 47.9254C492.52 47.2654 493.79 46.9354 495.25 46.9354C496.79 46.9354 498.1 47.3254 499.18 48.1054C500.26 48.8654 500.96 50.0154 501.28 51.5554L500.44 51.2254C500.9 49.9454 501.71 48.9154 502.87 48.1354C504.05 47.3354 505.46 46.9354 507.1 46.9354ZM525.927 62.9854C524.287 62.9854 522.847 62.6454 521.607 61.9654C520.367 61.2654 519.397 60.3154 518.697 59.1154C517.997 57.8954 517.647 56.5054 517.647 54.9454C517.647 53.3854 517.977 52.0054 518.637 50.8054C519.317 49.6054 520.237 48.6654 521.397 47.9854C522.577 47.2854 523.897 46.9354 525.357 46.9354C526.837 46.9354 528.147 47.2754 529.287 47.9554C530.447 48.6154 531.357 49.5554 532.017 50.7754C532.677 51.9754 533.007 53.3654 533.007 54.9454C533.007 55.0454 532.997 55.1554 532.977 55.2754C532.977 55.3754 532.977 55.4854 532.977 55.6054H519.267V54.0154H531.837L530.997 54.6454C530.997 53.5054 530.747 52.4954 530.247 51.6154C529.767 50.7154 529.107 50.0154 528.267 49.5154C527.427 49.0154 526.457 48.7654 525.357 48.7654C524.277 48.7654 523.307 49.0154 522.447 49.5154C521.587 50.0154 520.917 50.7154 520.437 51.6154C519.957 52.5154 519.717 53.5454 519.717 54.7054V55.0354C519.717 56.2354 519.977 57.2954 520.497 58.2154C521.037 59.1154 521.777 59.8254 522.717 60.3454C523.677 60.8454 524.767 61.0954 525.987 61.0954C526.947 61.0954 527.837 60.9254 528.657 60.5854C529.497 60.2454 530.217 59.7254 530.817 59.0254L532.017 60.4054C531.317 61.2454 530.437 61.8854 529.377 62.3254C528.337 62.7654 527.187 62.9854 525.927 62.9854ZM545.382 46.9354C546.662 46.9354 547.782 47.1854 548.742 47.6854C549.722 48.1654 550.482 48.9054 551.022 49.9054C551.582 50.9054 551.862 52.1654 551.862 53.6854V62.8354H549.732V53.8954C549.732 52.2354 549.312 50.9854 548.472 50.1454C547.652 49.2854 546.492 48.8554 544.992 48.8554C543.872 48.8554 542.892 49.0854 542.052 49.5454C541.232 49.9854 540.592 50.6354 540.132 51.4954C539.692 52.3354 539.472 53.3554 539.472 54.5554V62.8354H537.342V47.0854H539.382V51.4054L539.052 50.5954C539.552 49.4554 540.352 48.5654 541.452 47.9254C542.552 47.2654 543.862 46.9354 545.382 46.9354ZM562.596 62.9854C561.116 62.9854 559.976 62.5854 559.176 61.7854C558.376 60.9854 557.976 59.8554 557.976 58.3954V43.6054H560.106V58.2754C560.106 59.1954 560.336 59.9054 560.796 60.4054C561.276 60.9054 561.956 61.1554 562.836 61.1554C563.776 61.1554 564.556 60.8854 565.176 60.3454L565.926 61.8754C565.506 62.2554 564.996 62.5354 564.396 62.7154C563.816 62.8954 563.216 62.9854 562.596 62.9854ZM555.156 48.8554V47.0854H564.906V48.8554H555.156Z",
            fill: "black"
        }), l.jsx("defs", {
            children: l.jsx("clipPath", {
                id: "clip0_18_55",
                children: l.jsx("rect", {
                    width: "204.983",
                    height: "104.671",
                    fill: "white",
                    transform: "translate(143.509)"
                })
            })
        })]
    }), iy = e => l.jsxs("svg", {
        className: e.className,
        width: "54.234997mm",
        height: "27.694176mm",
        viewBox: "0 0 54.234997 27.694176",
        children: [l.jsx("path", {
            fill: "#232b48",
            strokeWidth: "0.2",
            d: "M 27.089326,27.69418 C 19.42042,23.914457 2.3832119,22.80164 -2.3836605e-6,22.655289 1.095613,21.767836 2.0049537,20.71159 3.0689173,19.974301 3.7570702,19.562751 19.866923,22.769443 27.089326,27.69418 Z"
        }), l.jsx("path", {
            fill: "#007fc5",
            strokeWidth: "0.2",
            d: "M 27.085304,27.657226 C 20.054666,22.048455 2.0281001,18.08535 0.77046611,18.073984 1.8613217,17.019092 2.367611,16.427383 3.3159248,15.45382 c 1.7961701,0.172713 9.1271092,1.840347 14.6458112,5.360708 3.479313,2.219445 6.786387,4.434278 9.123568,6.842698 z"
        }), l.jsx("path", {
            fill: "#b4e4fb",
            strokeWidth: "0.2",
            d: "m 27.086064,27.601189 c -0.0035,-0.233835 -0.01951,-12.48688 -0.01951,-12.48688 C 25.588192,2.7358253 17.858888,-0.68505469 18.80216,0.10836044 L 3.779406,12.25896 c 10.138972,2.338085 21.200668,12.083503 23.306658,15.342229 z"
        }), l.jsx("path", {
            fill: "#232b48",
            strokeWidth: "0.2",
            d: "M 27.08796,27.692467 C 34.800154,24.001872 51.850244,23.089463 54.234995,22.970741 53.149737,22.07065 52.252699,21.003937 51.197351,20.254368 50.514014,19.83487 34.366951,22.85176 27.08796,27.692467 Z"
        }), l.jsx("path", {
            fill: "#007fc5",
            strokeWidth: "0.2",
            d: "m 27.089358,27.656581 c 7.095165,-5.526916 25.170631,-9.278976 26.428312,-9.275767 -1.078557,-1.067463 -1.577955,-1.664999 -2.514923,-2.649487 -1.798051,0.151886 -9.147824,1.734451 -14.706952,5.190619 -3.504801,2.178974 -6.841503,4.353462 -9.206437,6.734635 z"
        }), l.jsx("path", {
            fill: "#7cc6ed",
            strokeWidth: "0.2",
            d: "m 27.085159,27.602642 c 0.0062,-0.233779 -0.01764,-12.493236 -0.01764,-12.493236 C 28.689236,2.7488856 36.647793,-0.57500073 35.695389,0.20742962 L 50.576322,12.53131 C 40.410936,14.751739 29.228774,24.368541 27.085159,27.602642 Z"
        })]
    }), ly = () => l.jsxs("svg", {
        width: "53",
        height: "53",
        viewBox: "0 0 53 53",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [l.jsxs("g", {
            filter: "url(#filter0_d_115_1619)",
            children: [l.jsx("path", {
                d: "M11.521 25.6521H39.1563",
                stroke: "#FFD6FF",
                strokeWidth: "4",
                strokeLinecap: "round"
            }), l.jsx("path", {d: "M25.3384 11.8345V39.4698", stroke: "#FFD6FF", strokeWidth: "4", strokeLinecap: "round"})]
        }), l.jsx("defs", {
            children: l.jsxs("filter", {
                id: "filter0_d_115_1619",
                x: "0.520996",
                y: "0.834473",
                width: "51.6353",
                height: "51.6353",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [l.jsx("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix"
                }), l.jsx("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), l.jsx("feOffset", {
                    dx: "1",
                    dy: "1"
                }), l.jsx("feGaussianBlur", {stdDeviation: "5"}), l.jsx("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), l.jsx("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                }), l.jsx("feBlend", {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_115_1619"
                }), l.jsx("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_115_1619",
                    result: "shape"
                })]
            })
        })]
    }), D5 = () => l.jsxs("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 45 45",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [l.jsxs("g", {
            filter: "url(#filter0_d_332_2383)",
            children: [l.jsx("path", {
                d: "M11.3667 12.1562L31.3095 31.2873",
                stroke: "#FFD6FF",
                strokeWidth: "4",
                strokeLinecap: "round"
            }), l.jsx("path", {
                d: "M30.9033 11.75L11.7723 31.6928",
                stroke: "#FFD6FF",
                strokeWidth: "4",
                strokeLinecap: "round"
            })]
        }), l.jsx("defs", {
            children: l.jsxs("filter", {
                id: "filter0_d_332_2383",
                x: "0.366699",
                y: "0.75",
                width: "43.9429",
                height: "43.9429",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [l.jsx("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix"
                }), l.jsx("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), l.jsx("feOffset", {
                    dx: "1",
                    dy: "1"
                }), l.jsx("feGaussianBlur", {stdDeviation: "5"}), l.jsx("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), l.jsx("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                }), l.jsx("feBlend", {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_332_2383"
                }), l.jsx("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_332_2383",
                    result: "shape"
                })]
            })
        })]
    }), ay = () => l.jsx("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: l.jsx("path", {
            d: "M11.7429 25.794C14.7688 26.1407 17.8132 25.3871 20.3232 23.6797L27.4455 30.802C27.4455 30.8021 27.4456 30.8021 27.4456 30.8022C27.8909 31.2477 28.495 31.4981 29.1249 31.4984C29.7549 31.4986 30.3592 31.2485 30.8048 30.8032C31.2504 30.3579 31.5009 29.7538 31.5011 29.1238C31.5014 28.4938 31.2513 27.8896 30.806 27.4439L30.8059 27.4438L23.6816 20.3196C25.3884 17.8079 26.1405 14.762 25.7915 11.7354C25.4251 8.55892 23.8729 5.63792 21.4454 3.55677C19.0179 1.47561 15.8941 0.387767 12.699 0.510881C9.50387 0.633995 6.47305 1.95898 4.21288 4.22077C1.95272 6.48255 0.629897 9.51432 0.509069 12.7095C0.388242 15.9048 1.47832 19.0278 3.56121 21.4538C5.64411 23.8798 8.56621 25.4299 11.7429 25.794ZM23.0017 13.1855C23.0017 14.4741 22.7479 15.7501 22.2548 16.9406C21.7616 18.1311 21.0388 19.2128 20.1277 20.124C19.2165 21.0352 18.1348 21.7579 16.9443 22.2511C15.7538 22.7442 14.4778 22.998 13.1892 22.998C11.9006 22.998 10.6246 22.7442 9.4341 22.2511C8.2436 21.7579 7.16187 21.0352 6.2507 20.124C5.33952 19.2128 4.61674 18.1311 4.12362 16.9406C3.63049 15.7501 3.37668 14.4741 3.37668 13.1855C3.37668 10.5831 4.4105 8.08721 6.2507 6.24701C8.0909 4.40681 10.5867 3.37299 13.1892 3.37299C15.7916 3.37299 18.2875 4.40681 20.1277 6.24701C21.9679 8.08721 23.0017 10.5831 23.0017 13.1855Z",
            fill: "black",
            stroke: "black"
        })
    }), cy = () => l.jsxs("svg", {
        width: "30",
        height: "30",
        viewBox: "0 0 30 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [l.jsx("path", {
            d: "M15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28Z",
            stroke: "#33363F",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), l.jsx("path", {
            d: "M10 15H20",
            stroke: "#33363F",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), l.jsx("path", {
            d: "M15 10V20",
            stroke: "#33363F",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })]
    }), Kd = () => l.jsx("svg", {
        width: "28",
        height: "20",
        viewBox: "0 0 31 23",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: l.jsx("path", {
            d: "M3 9.21452L12.3356 20L28 3",
            stroke: "#33363F",
            strokeWidth: "5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }), Qd = () => l.jsxs("svg", {
        width: "25",
        height: "38",
        viewBox: "0 0 36 43",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [l.jsx("path", {
            d: "M33 39.5601H3V3H24L33 12.4399V39.5601Z",
            stroke: "#33363F",
            strokeWidth: "5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), l.jsx("path", {
            d: "M23 13H33L24 3L23 13Z",
            stroke: "#33363F",
            strokeWidth: "5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), l.jsx("path", {
            d: "M12.5 21.5H19.35",
            stroke: "#33363F",
            strokeWidth: "5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), l.jsx("path", {
            d: "M12.5 30H23.64",
            stroke: "#33363F",
            strokeWidth: "5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })]
    }), uy = () => l.jsxs("svg", {
        width: "63",
        height: "36",
        viewBox: "0 0 63 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [l.jsx("path", {
            d: "M6 4C6 2.34315 4.65685 1 3 1C1.34315 1 0 2.34315 0 4H6ZM0 15V18H6V15H0ZM5.30773 1.08313C4.24907 -0.191391 2.35766 -0.366387 1.08313 0.692269C-0.191391 1.75093 -0.366387 3.64234 0.692269 4.91687L5.30773 1.08313ZM31 3C31 1.34315 29.6569 0 28 0C26.3431 0 25 1.34315 25 3H31ZM0 4V15H6V4H0ZM3 3C0.692269 4.91687 0.692382 4.917 0.692589 4.91725C0.692786 4.91749 0.693088 4.91785 0.69348 4.91832C0.694263 4.91927 0.695425 4.92067 0.696962 4.92252C0.700037 4.92622 0.704614 4.93173 0.710669 4.93901C0.722781 4.95359 0.740806 4.97528 0.764556 5.00386C0.812054 5.06101 0.882447 5.14569 0.97421 5.25602C1.15773 5.47669 1.42674 5.8 1.76902 6.21096C2.45356 7.03288 3.43126 8.20553 4.60444 9.6091C6.9504 12.4158 10.0797 16.1479 13.2102 19.8461C16.3377 23.5406 19.478 27.2152 21.8418 29.9008C23.0182 31.2375 24.0287 32.3594 24.7574 33.1215C25.1067 33.4868 25.4582 33.8404 25.7562 34.0983C25.8507 34.1801 26.1664 34.4567 26.5778 34.6641C26.702 34.7267 26.9163 34.8253 27.1954 34.8988C27.4472 34.9651 27.9741 35.0716 28.6215 34.9303C29.3847 34.7638 30.1121 34.2912 30.5664 33.5359C30.9552 32.8893 31 32.2744 31 31.969H25C25 31.6813 25.0418 31.0802 25.4245 30.4437C25.8727 29.6984 26.5911 29.2322 27.3423 29.0683C27.9777 28.9296 28.4895 29.035 28.7235 29.0966C28.9847 29.1654 29.1782 29.2557 29.2788 29.3064C29.5955 29.4661 29.7708 29.6377 29.6823 29.5611C29.6141 29.5021 29.4285 29.3248 29.0941 28.9751C28.4556 28.3073 27.513 27.263 26.3457 25.9367C24.022 23.2965 20.9123 19.6583 17.7898 15.9695C14.6703 12.2843 11.5496 8.56254 9.20806 5.76116C8.03749 4.3607 7.06207 3.19079 6.37942 2.37115C6.0381 1.96134 5.77 1.63911 5.58731 1.41945C5.49597 1.30962 5.42598 1.22543 5.37888 1.16875C5.35532 1.14041 5.33749 1.11895 5.32557 1.10461C5.31961 1.09743 5.31513 1.09204 5.31215 1.08845C5.31065 1.08665 5.30954 1.08531 5.3088 1.08442C5.30843 1.08398 5.30817 1.08366 5.30798 1.08344C5.30781 1.08323 5.30773 1.08313 3 3ZM31 31.969V3H25V31.969H31Z",
            fill: "black"
        }), l.jsx("path", {
            d: "M49 25.0001L51.9355 33.0001L55.7097 27.2223L59.0645 33.0001L62 25.0001M43.5255 33.5025C41.1922 34.0025 36.4255 33.9025 36.0255 29.5025M36.0255 29.5025C35.5255 24.0025 42.5255 24.5025 43.5255 26.0025C44.3255 27.2025 44.5255 28.8359 44.5255 29.5025H36.0255Z",
            stroke: "black",
            strokeWidth: "2"
        })]
    }), dy = () => l.jsx("svg", {
        width: "27",
        height: "21",
        viewBox: "0 0 27 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: l.jsx("path", {
            opacity: "0.8",
            d: "M11.8285 1.54425C12.6185 0.341807 14.3815 0.34181 15.1715 1.54425L25.754 17.6518C26.6277 18.9818 25.6737 20.75 24.0824 20.75H2.91756C1.32626 20.75 0.372273 18.9818 1.24603 17.6518L11.8285 1.54425Z",
            fill: "#FFD6FF"
        })
    }), fy = e => l.jsx("svg", {
        className: e.className,
        width: "27",
        height: "21",
        viewBox: "0 0 27 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: l.jsx("path", {
            opacity: "0.8",
            d: "M15.1715 19.9558C14.3815 21.1582 12.6185 21.1582 11.8285 19.9558L1.24603 3.84817C0.372272 2.51822 1.32627 0.75 2.91756 0.75L24.0824 0.75C25.6737 0.75 26.6277 2.51822 25.754 3.84817L15.1715 19.9558Z",
            fill: "#FFD6FF"
        })
    }), nu = e => l.jsxs("svg", {
        className: e.className,
        width: "70",
        height: "70",
        viewBox: "0 0 70 70",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [l.jsx("ellipse", {
            cx: "35",
            cy: "23.3332",
            rx: "11.6667",
            ry: "11.6667",
            fill: "#33363F"
        }), l.jsx("path", {
            d: "M18.395 42.0894C19.5296 39.4522 22.1884 37.9165 25.0592 37.9165H44.9407C47.8116 37.9165 50.4703 39.4522 51.605 42.0894C53.199 45.7942 55.1879 51.5094 55.3984 57.3333C55.4183 57.8852 54.9689 58.3332 54.4166 58.3332H15.5833C15.031 58.3332 14.5816 57.8852 14.6016 57.3333C14.8121 51.5094 16.801 45.7942 18.395 42.0894Z",
            fill: "#33363F"
        })]
    }), hy = () => l.jsxs("svg", {
        width: "28",
        height: "23",
        viewBox: "0 0 23 23",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [l.jsx("path", {
            d: "M3 3L20 20",
            stroke: "#3A4651",
            strokeWidth: "5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), l.jsx("path", {
            d: "M20 3L3 20",
            stroke: "#3A4651",
            strokeWidth: "5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })]
    }), py = () => l.jsxs("svg", {
        width: "28",
        height: "30",
        viewBox: "0 0 22 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [l.jsx("path", {
            d: "M18 14L11 20L4 14M11 2V19",
            stroke: "#3A4651",
            strokeWidth: "4",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), l.jsx("path", {
            d: "M2 28H20",
            stroke: "#3A4651",
            strokeWidth: "4",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })]
    }), to = e => {
        const t = ne(s => s.userData), r = xr() ? vn.profile__svg : "";
        return l.jsxs("div", {
            className: vn.profile,
            children: [l.jsxs("div", {
                className: vn.profile__data,
                children: [l.jsx("img", {
                    src: e.src,
                    alt: "User avatar"
                }), l.jsxs("span", {children: [t.personalInfo.firstName, " ", t.personalInfo.lastName]})]
            }), l.jsx(Oi, {to: e.to, className: vn.profile__icon, children: l.jsx(X3, {className: r})})]
        })
    },
    O5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAnmSURBVHgB7ZxnaBRdF8dPgl00sSu2tXfy2PCDbWMXLFFBRcXYFRU7iChGEAso5vlklyhiRUjUD3Y3YkfUREXFtmvvGiuK5bzn3N2JW+7szszOzG58nx/cbHZ36n/vPffcc8+dBIgBiJhML/9QSfG9Ku8ZR9DmBVQ8vtc83//5/H9CQkIB2EwC2ASJ5KSXgeAVxgnmwALmUtlP4uVCUYdEclBZQuU9Wo+bShafE4oaXJuouDB2ZKO3Rsc3cSBUMC6MxxpHF5VM5V+MX7IwXoSjC0lDe2xUtLippEOswPivVWpkotetMYQhtwK91dsFoT5TUcFDJZVcEQ/oJBF0QmKxH1WUxWIcVFy+e9GFrhrmJ5bhKh1n8EiBa1qe1h00C/YXiqWgSzRNgv3FYiloFi2iYHYZ+IsXL8LevXshPz8f3r17BxUrVoRevXrB0KFDweFwgA14wGBHUAh6XQc3WsiLFy9w1KhRyKdTK9OnT8cnT56gDbgxCpeDBbPMz/rx4weuXbsWq1evHlYspdSpUwdzcnLQBjLBCLTjGLSIkydPYkpKilSYYsWKYZUqVVSFa9u2Ld6+fRstJg30gN6wjBtN5urVq9ivXz+pEOXLl8eMjAx8/947ynK73Th27FgkmyLdfvz48WIbi+CL0N400TtYNY23b9/ijBkzMDExUXrzZNjx2bNn0n1ZlLS0NOl+VatWxcWLFxeKbDLamiZ6a5dpHDp0CJOTk6U3XL9+fdy/f7+m42zZsgVr1aolPU69evXwzJkzaAFOLYK50AROnz6NXbp0kd4gC7hy5Ur8/v27rmM+fPgQ582bhyVLlpQed/To0WY3U1cksZwYJewm8IXLbojt0ZQpU/DNmzcYDSxKOFeE3ZCnT5+iSTjDCZaNBmE7wvYkKSlJehN9+vTB69evo5mcOHEC27Vrp+qGbNiwAU3ApSaWYdvFdooNsOzCK1WqhAcOHEArWbVqFdLIQHr+Bg0amOGGOGSCZaFOPB4P9u/fX9VNsLAHC0FxQ9Sa6YQJE8T1GiRDJphb69401ovoJtg0lAnh7t27OHDgQFU3ZMWKFUZ+xPfBYmky9jycWb16NVaoUEF6QZ06dcJTp05hPLBnzx6kQbv0OvnzrKws1InTX7DMSFsfPnwYmzdvruomWG2njPDz509cs2aNqhvSpk0bvH//vtbDZfoLdlVtK3YT0tPTVd2EyZMn4+vXrzGeYfs2cuRI6T0UL15cmBcNro5LEStZbQt2FNWqNbsJFy5cwKLEsWPHsGnTptL74c8/f/4c6RDJYe0XD4aDD9ysWTM8fvw4FmW2bt0qrQibNm2KtKuTZ41SQIWbN28GvO/QoYOIiHbv3h2KMmRixH20b98+4PM7d+5E2jWFBXOofUuD44D3HEZOTU0F6rqhKJObmwtOpxMuXboU8Dk1y0i7/hN2sM2+VI0aNaRtfuLEidE4gjGB43H0g6u6GhoMf3bYHpLhHoYNvOwk3F0vWrQIP378iPEMO9qzZs1SdbQ5qqIWjwvCzYJpcnt37NghxmVqvw7N+GA8smzZMlVHWynLly/XejghmGZ4SDF//nwRd5edePDgwVaGjXVx9uxZMfIIJ5QBwVCXYAosyvDhw1WdWa7+z58/x1jw8uVLHDdunKoJmTlzJu7evdtewRQuX74s/DK1Zsp+DQ9P7IBr/8KFC7F06dLS6+nYsWNhmMflcsVGMIYH4+GqOwvHv6iVbNu2TTUep5R9+/YVbh+NYOyHecBCyPUAar5AY06goRaYybVr14BmlIQj+urVK7CBAt35YZFYt24dkBsS8vnGjRuFY0hBRfjy5QtEAzU/mDt3LlC0AWjWKeR7iocBuTtgAR4WTHNulBZoygsoZA3khgC5IQHfffv2DZYuXQotW7YEakagl69fvwLNNkHDhg2Bwjbw69evgO+7du0qvPicnByoXbs2WICoYZYsPxkxYgTcu3cPaCIC6tatG/AdN9MxY8YATWAATWRoOt7BgweB4nGwYMECkd3jT82aNYFslBCLRbOQPNNrWDCTJk0CmmQVdiwY6mWhZ8+eMGfOHFUbRMMVoGEYDBgwIMQGlihRQthGHkgPGTIEbEA0yXywGJqxhl27dgGFhaB169YB31HHA5mZmSISQrPbQGFw8XlBQYGwQ40aNYLNmzeHHJMjJnl5ebB+/XqgmSmwCetrmD98k1euXAGKp4ckyXEzpZkdIPcAWrVqBTSvCDSsEcL507hxYzh69KgQn3xAsJn8RN8SulywEbZfFDkAClAKgfxhgW7cuAGfPn0K+Lxy5cqip+Xmx804BojlhopbYVstU6CJE1iyZImIsXFqZjjYfrHAbMtKlSoFMSKX/xTzvWFnZhYYgA2vPx8+fAA9cNM8cuSI6AW3b98ONHwBGg+KHNfevXvDoEGDDPV8wTWUxpEQJTn8RwjGizPJ+HLT1J3fGewy0HSbSOTVC82gi2IW2dnZAe/Z9YgCD2l0iv/x9/T/BQPwr5+UlFT4nh1Wtk3spMYCtoHTpk0DCu8UfsbOdHDv7E+wAywhN+QTjCIZhaMEEDTY5WCj3bPg5LqInI7ga+FkPAXOhqRWERL2oc4k3KEdUhnRYDId/arYpEkTaZSAHErLg4rnzp3Dzp07S88/bNiwgG05VifbjjoWtcNngxoYRUIdJ7CFmyGfPXu21ri5ZjjxhIZg0nNyVJjnVYNRi8LS+FTtNOF7HIwyZZMcU2zRooX0oji2zqmanNQSDRwspDElkoshPU+3bt2QQj/SfdWiseTbyTZ3QSTQhLRNhqISWLZsWdWg4q1bt9AInLynlsfPU4KcNBMOzgPhJL/gfWngLtvcAVpADdk8Wnj06BFOnTpVNQqqJ4n3/PnzSD2y9DjlypUTzU/rdB9n7LDN4mbYo0cPJB9QtlkWaAW9CSqmpQ4+ePAA+/btqyoc2yFeFsOZQgq/f//Gx48f486dO5HGoNL9eJ6Rk/d4O5Nxo95F9ehd/G4qLAoNnsPG3nkSg5uc2mSGUngGm+2lRaSDEdCkphlMuCS3SMWG5D1ji7N8glm2/I9tF+dnqK3uCC7VqlUTHYnFScZujLDGKOYLTMlWiTA1h5c5IMhDG47dlylTRgzMOf7FGUPkPwHZLLAQD2hYYPrfEmYv5i1hVviLRTN/kbzCXyia7scw6DIKvgOngsWz5TbhAZ1iMf89SkYnhrod34k4Imco6Bhj+JpbR/W4hWhA72J6N8Y/7MDpW/xuFeiN1mZh/BLVI7AsA73CuTB+cGGkAGA8wBeJUazu/b8RKhj801TdaD1sozLQ4mcd2vngW/7F2eg64c9TgaMlF7yz9jnKvKHV2CaYP+g1wMpjlR3w5/HKDggdRXh8ryyM8nhlLvmxeLTy/wDqzuOzR92ZdQAAAABJRU5ErkJggg==",
    Yd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAsHSURBVHgB7ZxniBRNE8fLe3xyuseECOqKihlzTqtizqJiAHMOmBFUUD+oqKCCoGI6XzMqnjlguBMDJsyCCW8Vc85Z661/7c55uzd7O7M7q3vqD/pmbqYn1VZXV1X3TBb6CjBzvCzKSCntWxr/A1dA9SdSPL7lKd/6aaxnyZLlCX1hstAXQoTklkVL8grGTc4AASZL2SjCS6bMjgjJJWWClMccfVKkJOCalNmANklJ4q9HIns1OraJAUEFksSxqHFyU/FSZnHsksCxIji5kVb8ZWxUpKRI6UpfC459rQrGTPa6NWERllvBXvVOovQ+U2bBI6WOuCIeskkc2USEBT8qMwsLuKQk+Z7FFrY0LI2wwlbpGAORAjTtlNUDLAvsGxSWgS2hWRLYNywsA8tCC2nDfAY+kaIgrLdv39LUqVOpatWqlC1bNvr1119Ny99//01ut5vmzp1Lnz59oiiAZ0tkC75ahhrm635PUhQMvMfjoYYNG9KlS5eoTp06VLx4cfrnn39M67569YrOnz9Pu3fvJpfLRUlJSbqMAh4pZTPKgoQS2CxZDKEwefLkCa1bt06F8uLFC79927dvpzdv3uj+6tWrWzrf8ePHqV27diQPRI0aNfLbFx8fT0WLFqWmTZtS9uzZKQJmyfmHkV1EWN04ApYuXco5cuRgnCp//vxcoUIFrlixopY///xTt587d47tcvjwYY6Li2MRUOr5UHAN41rLli3jCGllR1ZGWiaFw2ThwoV687Vq1eJDhw6l21+wYEEWTdH1CRMmcO3atbVMmjSJ9+3bx3fu3OG7d+/ymTNneNq0adysWTPdP378eD2mdevWLE0y3XmPHTvGlStX1msvWbKEIwChnnWbzd5gNSyuX7/OuXLl4ubNm/PHjx/T7b99+7Y+kBhwXrRoka63aNGC69Wrp+tmRToFrYN1/Bhz5szR9Vu3bpneg9hG/vfff/nx44hC3Jlmsslqpl2y6EZhsnjxYrp//z7Nnj2bpOmk2w+7BWBzRJvUeG/cuFG3vX//Xg06bB7sVJ48eahu3bokD6/7UVe0iETb9H/0smasWLGCcufOTTNnzqSJEydSmAwVWaTL5GY1qZhAESBNUB9IbEnIuoEuws8//0wNGjTQEgx5CBVmRsDolytXjsRGUoSMJ28KPJW4gJtxU4T59qdPn6rv9LWBNt67d48ixM0BmdtADQvbhTBAM4QWhCIlJUV9KzRNq+CHuHz5sja3UKxevVp/PAdIp2UKe3vGiJHmxOKVB90/cuRIP4O+cuVKtsry5cv9jsW5vhAuM4ElsAN06tRJXQAzxHnVBx08eDCLZ89dunRhu/Tq1Ut9sCFDhui5nj17Zlqve/fuPGPGDHaI8Yac0towNzkADDd6STOMJiJ+lcaOqBsOaMZNmjTR9efPn5vWOXv2LIkfRw4x1FhRgbHXsLnIARAoi69luu+3337TJdyJSIFAwF9//WW6/+LFi6nuiAPE+2SUqmEtySEQz4nDSOKpp9sHrYJfNXnyZDpw4EBYmQe5cQ3cxX6RePymATs0HJonEQU5iMrIEJibHKJEiRK6DAy2Dfbs2UObN2+mQoUK0c2bN8kuEknoj7JlyxZav369aR1Dw0uWLEkOounsOP48McQRjLQLMgvBgA1DVuHo0aOWXJC0SPCtjjGODwaECv744w9yEHT98dAwx4QFJEOhvtjVq1czrAejjfQPtM0qkoXQpiZxZYb1Tp48qdFAmTKOPhoog194CDuMxIDcs2fPkPXgr+XLl49FuCHriqOrGYoaNWqErNu7d2/OmzcvR4Eh0DAXOQw8cclUhKyXkJCg2lizZk1au3Zt0Hpbt27VFDWCc2hZKBCUW4llw6AMQiPH9RauhZGVyAjYu8TERCpbtiy1b99ehQLbVL58eXr9+rX6UTt27Eh1Q2AXraSmxZmlrFmzUhSIx1mjMhJkNY4zYsmuXbuq3Rs1alTqPtghGHgIc82aNZZTz8F6aAdQDXORw6CZYeDCDvCpWrZsqR3Bw4cP9RzwsSAk5MsgMKu8e/eOfvrpJ4oGUdEwPCzsjR2MHBc0zk4GwwzYz19++YWigCsqDT0j0FwuXLigWVWkd4wkX7DsKYDGAAm41RmVQQ8VKpYyoGJ6TKgkY7hERWDS/fqlp5OTk2nnzp2afj516pSfcEqXLq2GvE+fPnTjxg0aNsx/hGvevHk0evRoEjeBZHCENm3a9PnmxbBXqVJF/a2OHTtStWrVdDuuHaUBX304x4F/Ja6CjgBhCAyXkeQfy4AtDx06lKVn5FWrVun2Xbt2sYRI3LZtW/1/7Nix/OHDBxat4uHDh+s2DGqIXWMJh/T/+fPn87Zt21iEyzI+yWKvdLsIn/fv36/XlpiVowEElsIOA4EZDwGBweHs1i39MGfhwoX9HgxDbjhG3AwuVaqUjj9OmTIldX+rVq30mECkh9XxSAzf4XjpLDJMYkbAY9vzw6yAHgqGt0ePHnTkyJGgTqQIkQ4ePJgaRg0aNIjq16+voQ3SN5UqVaIOHTroPmQo0Fv27dvX9FwSMdCVK1dozJgx6oeZjVg5gAcalsgOA40S45z6P5qNmYY9evSIJYmozRSDtOLwsuTMeNy4cTxgwAD+/fff+b///tOm2b9/f9UeNN9AoGFohgZYR2gkzjM7TJJjqWkD0ZhU22SAwdtgg6rGAC1sHAaA0azEYOu+AgUK6Dbp8bSOOLCm5wgUmHQuWl9SSewwM9FLWp59ZwURlDaHtBNMMhrlQa+Ing8xomiTNknJ9es5MLKEySoPHjygfv36kWgiWQGhFXpQNHckLB3EA4GdJgfBw+HBpTmlbpPmptvMHhjxIx4Q7gOSi7B/SA4C+FJt2rShxo0bU5EiRXQemRUQyyI97cC4ZCCnYBkd1TD4P4EGF8Hz6dPBfxeERHv37tUJc+gsMNQPjZMmQAsWLFAfbsSIEWQHCJttJictcDrON3ksmb4iMuymnjuWyJKiGaFAUwYOHKjxZEbTB8yIgp+vrxsanj60zG31SHTx06dP11HoQBDqvHz50u8Bse3atWsZPrThiiAGNDKqCOCxDUWSgkGPPXHihNZJe/6Hjx6ROLem14SbIw6y3VmMyfijPwR7h5CSrB5ZuXJljQUxzTIzAr8PNhEhmw3comGfxwfZxvtCqG5MbsuM4N4RRdggxZBTWus8iywCg2olBR3LsL0OIdlYyZLmBC5ZpFg5GllQ2KRixYpRZgRDdRgXxeQ8ixQw3kvy60wYrr8F4w+jD98IsRt8qMwEcnBwpOFgWzT6G0RYrY1/AvNhmN/ophDgQshjAfxamQm0CuTPbPSQfqbKz8P0zedMph8YJPv1jGT+6kzYs2i/QboHbkgnMJ+WWe4xv2GWmL2AGizLBi0L+r7Nd4CHgrQ0U4H54svu9P0yIdjrzUHzuHLABvo+myZezvpfsJ2hhtmglnhRyRW4AwEs0i4ycEGZCcyMzJkzZ7DdHgrR6YXMgnCQLwhg0lrnzp3teMsxAZKQmDVk4od5yMKXBn68wuzF8ivMP16Sj8ZL8gbfoNBsCQvYGu30nbgOedt7ZsdDNoUFfnxKxiZhjaf7LlSWMqefhnsuG46wHIG9L9OncOyDFLy9l9+jBXtfHUzg2CWiT2BFDfYKLoljhyQptSnWwU1yFGYFfXOCCoQ/N9UUjj6wUeM5yt86jM7MWRN8vziMrpuce5kimbyj9hsCU8nR4osJLC3sNcDGZ5Vd9Pnzyi5KH0V4fEsIxvi8Msrpr/Fp5f8DUWpFA+S7nTsAAAAASUVORK5CYII=",
    my = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAsvSURBVHgB7ZxniBNbFMePvsp7D107NowFFcWGigqWteEHURfFhmIXUbBh772hYPki2DuC5flsiKJZsfddK4q6sWLvvZ13/ie5MZvdlEkmu3HxB3en7Mxk5p9zzz333DvJRdkAMyfIorqUap6l2QYOv8NfSHF5lime9VSs58qV6wVlMbkoixCREmXRhtzCJJI9QMBkKf+JeMn0oyMiOaRMlvKcY0+alJX4TPrRgDVJcXL28S+7LTq+iQOh/HFyPFqc3FSClAUcv6zkeBFObiSJs8ZHRUualO6UXXD8W1Ug5rM7rImIiMIKdpu3kzLGTD8KLimNJRRxkUVyk0VELMRRP7JYwCHF6XkWS1iyMB+xIjbpOAM9BVhaSrgnhC1YDhTLYEm0sATLwWIZwhYtpGA5wMGHi4vCaAiCCuZpfs9RzhfL4JJSI1gW5FcKzmSyWaxr167R/fv3A/6/RIkSVK5cOcomHFImSRlKVhHr6sE2M2bMGJZvj3H5YKVu3bp848YNzkaSyArsTsuksY3s2LFDxRg5ciSnpaVlWs6cOcOrV69mh8PBv/32G+/du5ezCXT1wm/g2N1ZtYU7d+5w69atVazChQuHdc6rV6+4SZMmnJCQwI8fP+ZsYn64YjnYRmrWrMn58+fnKVOm8Pnz58M+7+nTpyrYpEmTOBrevHnDEydO5KSkJLViiySGI5iTbcLpdKplrV27liMBllmrVi2OhiFDhvBff/3FpUqV4nr16rFFnP765PYTK5Hsy7fTvXv3dNmlS5d0+48cOUKrVq2ijx8/Bj0/X758JJZG0SBVmurUqUM9e/b03o8FEtnPyvzDisFkI58/f9altIy6dLlctG/fPpLWUoUYOnQotWzZkqTaakFIkTt3bpKqqAXIDVM0vH//nv7880/6+++/dT0CEGYkmw2vYOyO6K01pxZYtmwZ9e3bV9ebNWtG4pto48aNdOLECVq/fn26Y4sUKUIPHjwgO3j37p2KJdVS1yMAVuYwPQBfC5tEMeTu3btqNWfPnqXSpUvrvvr16+vy+fPnGtCi+qCqbtmyheziw4cPVKhQIbUyWBgs1li8BZCpnYIVX8ESKUY0atRI/VbJkiW9YvkCXwU/A06fPq2CFS9eXC3CVM1IgUi//PKLVvVv377pNqzNIkPII5g6fY9jc1CMePHiBUn0bumcpk2bkoQEFC3+fitCP5ZgnL9pJdtQDNmzZ486d9MIhEKifFqzZg117NhR/U80+PutCP0YUI2MYIkUA1AV8fADBgygq1evarN+8+bNoOdIH1KrzIIFC1ToGjVqUDTASn///Xf69Ve39wkVygTBnc5m9+hPzFi6dCkXLFjQ27Hu379/wGMRicvD6XHopDdu3Fi7VtGQJ08eDV7FL+p1U1NTOQoSzGh1TBFny7dv3+Z58+bpTU+bNi3DMWKB2ulGuXLlCktYwXYglsXjxo3j3bt362cfP36coyARdlqNYgyacbSQw4YNIxGDJkyYQNJdog4dOmgLhpBi586duu4bdtjBly9fNKT4559/dDtCp2+oBsEclIUg9lq+fDkVKFCAVqxYQU+ePKHy5cvrNrBTLIOklujw4cNkA9Xh9C2PzdnBhg0btBGAE75w4YI2EHbDnm7VpUuXNAYDu3btoihQH3aOswi5WRYLyuDH4Ozhu7C/T58+LEKyHSA1hGseOHBAtwcPHqyppihIg2Axn0gCJ96iRQu9ebEkHjRokK7jgSAWUi8oaM2QA5NOOC9cuJC/fv3KkYJsLT4jMfF7m9a9e3cWX8pRoILFBInuWTrXesPkCSmkGnr/j6Qe9kEgiCXxmfuOREAkHfE/WF2PHj1YqhRbwVisdOL1Or169WKp9rqOljoaYiLYokWLVAjcIBKARrC2bdtqiIEU9IwZM7z7q1atqg8E0PznzZtX91evXt273qBBA165ciVLIxHy85HehiVBuLlz57L0I71fwNu3bzkabBfM+A0JGbwxD7alc60xEUaEYFEIUDEgsmnTJq9f69atmwqEY7ANgfCAWCKIxT5kT/GFBAK+0d+a58+fn2FfpNgq2PXr1/XGJM5K/yEefyV5LxUN1ofqgmoLlixZosdIv5El7GBJ93gF8wXVFl+EuZ4/586d0+tLYtK77/Xr12pZ7du3ZzuAYGlsEyNGjGBJ1egDp/sQnwfE/44dO6b7jLOHgJ07d9b/mXMzE8wwefJk/T8aCVRxgJ4EhKlYsSJLsOo9duzYsXpsBAMgmfHcVsFQbRo2bJhhv79F4CH/+OMP9VFw6ug3zpw5M8M5gQQDc+bMUd+EVleSk+ofETL4CoN1XAfhhE2cg2D/sk3g5n2bcYO/YPfv39d9krbWbUkWcu/evTOcE0wwsH//fu1cmwYGVduXTp06qdW9fPmSbcKJSD/LXz959uyZLsuWLavLChUq0KdPn8gq0hrS1q1bNUGJARUzZgDQN8WYAcYORFSyiRQIFvbsO7sww11IQwN0zC9fvhzyPOT8p0+fnq4DLT0DEisiieu8+5DHHzhwoH4RUuXJRlwQLJWyGCOO6XAjYYghuFCgT4hMx8OHD737YEEyYJwu97948WK9HizMZlKQrchyC0MVwgOKk9btSpUq6TglRzCi429BEEqCYt0vjQrZTGpuz+SxZMpCMORWuXJl77bJVdkxFjl16lRNi8PybEZfNzQ5fVusLCkpiaSTHfI45O3xUAb4MHDr1i0Kh1mzZmVahSX9TNKy0qhRo9Sv2Uwy/hjB/iMbkECSRo8eHfI4ZEF9HwjOGSCZGA5IPCLRKLEXbd++3bu/a9euel2JuygGbMMfHUrBy5niP1A1LY2a4ltGc46R6wxX37Yt4CAsRpAw7mgoVqyYLmXAg8Lh5MmTlJKSQrNnz6Y2bdqoSMjkXrx4kTZv3hzJyHYoXHLNg1jxnb2zgCyCbxhzI/Btm4KbPXjwoDr2zJC+nYYHvuONZgIK8v3hgJFyzMaB8JL3oipVqtC6dev0ftq1a0cxINms+E4VWE3uScBhg/AAzbyMyny/cnKylkCYkAAP6Qv8GMS0SvPmzbXA2qOdVhCEKWbFa2Ge2SnJZAF8m+PHj9cqYYpp5iVRR9IlyXCOaQlNNTRAwGCzq0OBz46RYNt85+77zw+DkokUJpimJPkqrYK+jvbRo0fqmPEQw4cPT3eOmSAHX4PQAkNrGAQ5evSoNy6LM4K7KrY4ZRN5cnRwfUFGFR1ikyUgv863Sc/Url2bJW7SpGGZMmV0MNdAmXS+zRRQm1I14eCkULCFkfB9+/Zx0aJFM51rj9SLycVTJgk/6RxrGhn/w6AIRPYlTgRz+OuT4U0QT4gBMxxCIejXr5/6IsllefehuZcRH61i6PIEArN5Dh06RJIl1YA3DlmV2XtHgV6dgS/rQSHiMoQOrVq1IkkaamgA4HghGKZdwlBM9I5jM4vO0d8L1PH2PydQqBIDXOTTMoYFu19+DwqypBTg9RdUGwleQ74mE0nJgirZPZAuod5mw9sQQavmqVOntKX0RZy4zutC3gqBrZ2Ya8eQBVIVA76c9fP1v/S4KMTrf0Ffkvec2NhzoZyOi9wvmAZ1lD9fYXZj3yvMhhwsmv0vyRtyoGiWxAKWfujDc+Gc4tNcZFEs8POnZCxi+adkgOeDEAxZTjrGAbjnGpGIZQvsfpk+jeMfzHKJj04ru197XsnxS1Q/gRUz2C2ck+MHp5RGFO/gJtnGWUE5Vih/+HtVTePYAx81iWP8W4e2D+AFwvONw+kmkn0vUySTe9R+mxk3jDVZJpgv7HbA5meVHfT955UdlLEX4fIsIYz5eWWU1Oz4aeX/AVDcvUS6dmv8AAAAAElFTkSuQmCC",
    A5 = "Administrator", ru = "Teacher", su = "Student", Bi = "Parent", b5 = "Guest",
    Zd = localStorage.getItem("BEARER_TOKEN");
let R5 = {id: 0, role: b5, email: ""};
Zd && (R5 = Ui(Zd));
const L5 = Os({
    name: "login", initialState: R5, reducers: {
        setLoggedInUser: (e, t) => {
            e.id = t.payload.id, e.role = t.payload.role, e.email = t.payload.email
        }
    }
}), {setLoggedInUser: P5} = L5.actions, gy = L5.reducer, yy = {selected: -1, children: []}, I5 = Os({
    name: "parentChildren", initialState: yy, reducers: {
        setParentChildrenData: (e, t) => {
            e.children = t.payload
        }, setSelectedChild: (e, t) => {
            e.selected = t.payload
        }
    }
}), {setParentChildrenData: _y, setSelectedChild: Jd} = I5.actions, vy = I5.reducer, Cy = {
    personalInfo: {
        firstName: null,
        lastName: null,
        pesel: null,
        country: null,
        city: null,
        street: null,
        homeNumber: null,
        flatNumber: null
    }, schoolClassDTO: null
}, wy = {
    firstName: null,
    lastName: null,
    pesel: null,
    country: null,
    city: null,
    street: null,
    homeNumber: null,
    flatNumber: null
};

async function ou(e) {
    try {
        const t = await G.get(`/api/v1/users/personalInfo/${e}`);
        return console.log(t.data), t.data
    } catch (t) {
        throw console.error("Error getting user data", t), t
    }
}

async function xy() {
    try {
        return (await G.get("/api/v1/students")).data
    } catch (e) {
        throw console.error("Error getting user data", e), e
    }
}

async function Sy() {
    try {
        return (await G.get("/api/v1/parents")).data
    } catch (e) {
        throw console.error("Error getting user data", e), e
    }
}

async function ky(e) {
    try {
        return (await G.get(`/api/v1/tasks/subjects/grades/${e}`)).data
    } catch (t) {
        throw console.error("Error fetching user grades:", t), t
    }
}

async function Ey(e) {
    try {
        const r = (await G.get(`http://localhost:8080/api/v1/parents/${e}/children`)).data.map(o => ou(o));
        return (await Promise.all(r)).map(o => ({
            id: o.personalInfoDTO.id,
            firstName: o.personalInfoDTO.firstName ? o.personalInfoDTO.firstName : "UNKNOWN",
            schoolClass: o.schoolClassDTO?.name ? o.schoolClassDTO.name : "ERROR"
        }))
    } catch (t) {
        throw console.error("Error fetching parent children:", t), t
    }
}

async function jy(e, t) {
    try {
        const n = new URLSearchParams;
        t.forEach(o => n.append("subjectNames", o));
        const r = `/api/v1/reports/studentReport/${e}?${n.toString()}`;
        return (await G.get(r)).data
    } catch (n) {
        throw console.error("Error requesting student grades report", n), n
    }
}

const Hi = "data:image/svg+xml,%3csvg%20width='27'%20height='21'%20viewBox='0%200%2027%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.8'%20d='M15.1715%2019.9558C14.3815%2021.1582%2012.6185%2021.1582%2011.8285%2019.9558L1.24603%203.84817C0.372272%202.51822%201.32627%200.75%202.91756%200.75L24.0824%200.75C25.6737%200.75%2026.6277%202.51822%2025.754%203.84817L15.1715%2019.9558Z'%20fill='%23FFD6FF'/%3e%3c/svg%3e",
    Wi = "data:image/svg+xml,%3csvg%20width='27'%20height='21'%20viewBox='0%200%2027%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.8'%20d='M11.8285%201.54425C12.6185%200.341807%2014.3815%200.34181%2015.1715%201.54425L25.754%2017.6518C26.6277%2018.9818%2025.6737%2020.75%2024.0824%2020.75H2.91756C1.32626%2020.75%200.372273%2018.9818%201.24603%2017.6518L11.8285%201.54425Z'%20fill='%23FFD6FF'/%3e%3c/svg%3e",
    Ny = "_select_bzv8t_1", Ty = "_select__content_bzv8t_4", Dy = "_expanded_bzv8t_18",
    Oy = "_expanded__content_bzv8t_21", Ay = "_expanded__content__element_bzv8t_29",
    qe = {select: Ny, select__content: Ty, expanded: Dy, expanded__content: Oy, expanded__content__element: Ay},
    by = "_expanded_1lmcq_1", Ry = "_expanded__content_1lmcq_4", qd = {expanded: by, expanded__content: Ry}, Vi = e => {
        const t = v.useRef(null);
        return v.useEffect(() => {
            const n = r => {
                t.current && !t.current.contains(r.target) && e()
            };
            return document.addEventListener("click", n), () => {
                document.removeEventListener("click", n)
            }
        }, [e]), t
    }, or = e => {
        const [t, n] = v.useState(!1), r = Vi(() => n(!1)), s = () => {
            n(i => !i)
        }, o = i => {
            e.onOptionChange(i.target.value)
        };
        return l.jsxs("div", {
            ref: r,
            className: qe.select,
            children: [l.jsxs("div", {
                className: `${qe.select__content} ${qd.select__content} ${e.className}`,
                onClick: s,
                children: [l.jsx("h3", {children: e.name}), l.jsx("img", {
                    src: t ? Wi : Hi,
                    alt: t ? "collapse-icon" : "expand-icon"
                })]
            }), t && l.jsx("div", {
                className: `${qe.expanded__content} ${qd.expanded__content}`,
                children: e.options.map((i, a) => l.jsx("div", {
                    className: qe.expanded__content__element,
                    children: l.jsxs("label", {
                        children: [i, l.jsx("input", {
                            type: "radio",
                            name: e.name,
                            value: i,
                            checked: i === e.selected,
                            onChange: o
                        })]
                    })
                }, a))
            })]
        })
    }, Ly = () => {
        const e = ne(d => d.login), t = e.role == su, n = e.role == A5, r = e.role == ru, s = e.role == Bi,
            o = ne(d => d.parentChildrenData),
            i = o.selected != -1 ? `${o.children[o.selected].firstName} (${o.children[o.selected].schoolClass})` : "",
            a = bn(), c = () => {
                N5(), a(P5({id: 0, role: b5, email: ""}))
            };
        s && o.children.length === 0 && Ey(e.id).then(d => {
            a(_y(d)), d.length > 0 && a(Jd(0))
        }).catch(d => {
            console.log("Couldn't set parentChildrenData", d)
        });
        const u = d => {
            const g = o.children.findIndex(C => `${C.firstName} (${C.schoolClass})` === d);
            a(Jd(g))
        }, f = xr();
        return l.jsxs("aside", {
            className: zt.sidebar,
            children: [l.jsxs("div", {
                className: `${zt.sidebar__title} ${f ? zt["sidebar__title--active"] : ""}`,
                children: [l.jsx(iy, {className: zt.logo}), l.jsx("h1", {children: e.role}), s && l.jsx(or, {
                    options: o.children.map(d => `${d.firstName} (${d.schoolClass})`),
                    name: i,
                    selected: i,
                    onOptionChange: u
                })]
            }), l.jsxs("div", {
                className: `${zt.sidebar__bookmarks} ${f ? zt["sidebar__bookmarks--active"] : ""}`,
                children: [l.jsx(In, {
                    to: "/",
                    svgIcon: l.jsx(oy, {}),
                    children: "Home"
                }), (t || r) && l.jsx(In, {
                    to: "/tasks",
                    svgIcon: l.jsx(ny, {}),
                    children: "Tasks"
                }), (t || s) && l.jsx(In, {
                    to: "/grades",
                    svgIcon: l.jsx(ty, {}),
                    children: "Grades"
                }), n && l.jsx(In, {to: "/manage", svgIcon: l.jsx(ry, {}), children: "Manage"}), l.jsx(In, {
                    to: "/reports",
                    svgIcon: l.jsx(ey, {}),
                    children: "Reports"
                })]
            }), l.jsxs("div", {
                className: `${zt.sidebar__profile} ${f ? zt["sidebar__profile--active"] : ""}`,
                children: [l.jsx(In, {
                    to: "/",
                    canActive: !1,
                    svgIcon: l.jsx(sy, {}),
                    onClick: c,
                    children: "Logout"
                }), t && l.jsx(to, {src: O5, to: "/config", children: "David Jasper"}), n && l.jsx(to, {
                    src: Yd,
                    to: "/config",
                    children: "Cat"
                }), r && l.jsx(to, {src: my, to: "/config", children: "Mr. Smith"}), s && l.jsx(to, {
                    src: Yd,
                    to: "/config",
                    children: "Parentos"
                })]
            })]
        })
    }, Py = "_student_86ad8_1", Iy = {student: Py};

async function F5(e) {
    try {
        const t = await G.get(`/api/v1/tasks/assigned/info/${e}`);
        return console.log(t.data), t.data
    } catch (t) {
        throw console.error("Error fetching user tasks:", t), t
    }
}

async function di(e) {
    try {
        const t = await G.get(`/api/v1/tasks/created/${e}`);
        return console.log("ESSA" + t), t.data
    } catch (t) {
        throw console.error("Error fetching user tasks:", t), t
    }
}

async function Fy(e) {
    try {
        await G.patch(`/api/v1/tasks/status/done/${e}`)
    } catch (t) {
        throw console.error("Error updating task status:", t), t
    }
}

async function My(e) {
    try {
        await G.patch(`/api/v1/tasks/status/todo/${e}`)
    } catch (t) {
        throw console.error("Error updating task status:", t), t
    }
}

async function zy(e, t) {
    try {
        await G.patch(`/api/v1/tasks/${e}`, {grade: t})
    } catch (n) {
        throw console.error("Error updating task status:", n), n
    }
}

async function Uy(e) {
    try {
        await G.patch(`/api/v1/tasks/grades/remove/${e}`)
    } catch (t) {
        throw console.error("Error updating task status:", t), t
    }
}

async function By(e) {
    try {
        return (await G.get(`/api/v1/tsic/${e}`)).data
    } catch (t) {
        throw console.error("Error fetching user tasks:", t), t
    }
}

async function Hy(e) {
    try {
        return (await G.post("/api/v1/tasks", e)).data
    } catch (t) {
        throw console.error("Error creating task:", t), t
    }
}

async function Wy(e) {
    try {
        await G.delete(`/api/v1/attachments/${e}`)
    } catch (t) {
        throw console.error("Error deleting task attachment:", t), t
    }
}

async function Vy(e) {
    try {
        const t = {responseType: "arraybuffer"};
        return (await G.get(`/api/v1/attachments/${e}`, t)).data
    } catch (t) {
        throw console.error("Error fetching user tasks:", t), t
    }
}

const $y = {grades: []}, M5 = Os({
    name: "studentGrades", initialState: $y, reducers: {
        addGrades: (e, t) => {
            e.grades = t.payload
        }
    }
}), {addGrades: Gy} = M5.actions, Ky = M5.reducer, Qy = () => {
    const e = ne(r => r.parentChildrenData), t = ne(r => r.login), n = bn();
    return v.useEffect(() => {
        let r = t.id;
        t.role === Bi && e.selected != -1 && (r = e.children[e.selected].id), t && (ky(r).then(s => {
            console.log("User grades:", s), n(Gy(s))
        }).catch(s => {
            console.error("Error fetching user grades:", s)
        }), t.role === su ? F5(t.id).then(s => {
            console.log("User tasks:", s), n(ci(s))
        }).catch(s => {
            console.error("Error fetching user grades:", s)
        }) : t.role === ru && di(t.id).then(s => {
            console.log("Teacher tasks:", s), n(ci(s))
        }).catch(s => {
            console.error("Error fetching user grades:", s)
        }))
    }, [t, e, n]), null
}, Wr = {
    LF: `
`, NULL: "\0"
};

class Vt {
    constructor(t) {
        const {command: n, headers: r, body: s, binaryBody: o, escapeHeaderValues: i, skipContentLengthHeader: a} = t;
        this.command = n, this.headers = Object.assign({}, r || {}), o ? (this._binaryBody = o, this.isBinaryBody = !0) : (this._body = s || "", this.isBinaryBody = !1), this.escapeHeaderValues = i || !1, this.skipContentLengthHeader = a || !1
    }

    get body() {
        return !this._body && this.isBinaryBody && (this._body = new TextDecoder().decode(this._binaryBody)), this._body || ""
    }

    get binaryBody() {
        return !this._binaryBody && !this.isBinaryBody && (this._binaryBody = new TextEncoder().encode(this._body)), this._binaryBody
    }

    static fromRawFrame(t, n) {
        const r = {}, s = o => o.replace(/^\s+|\s+$/g, "");
        for (const o of t.headers.reverse()) {
            o.indexOf(":");
            const i = s(o[0]);
            let a = s(o[1]);
            n && t.command !== "CONNECT" && t.command !== "CONNECTED" && (a = Vt.hdrValueUnEscape(a)), r[i] = a
        }
        return new Vt({command: t.command, headers: r, binaryBody: t.binaryBody, escapeHeaderValues: n})
    }

    toString() {
        return this.serializeCmdAndHeaders()
    }

    serialize() {
        const t = this.serializeCmdAndHeaders();
        return this.isBinaryBody ? Vt.toUnit8Array(t, this._binaryBody).buffer : t + this._body + Wr.NULL
    }

    serializeCmdAndHeaders() {
        const t = [this.command];
        this.skipContentLengthHeader && delete this.headers["content-length"];
        for (const n of Object.keys(this.headers || {})) {
            const r = this.headers[n];
            this.escapeHeaderValues && this.command !== "CONNECT" && this.command !== "CONNECTED" ? t.push(`${n}:${Vt.hdrValueEscape(`${r}`)}`) : t.push(`${n}:${r}`)
        }
        return (this.isBinaryBody || !this.isBodyEmpty() && !this.skipContentLengthHeader) && t.push(`content-length:${this.bodyLength()}`), t.join(Wr.LF) + Wr.LF + Wr.LF
    }

    isBodyEmpty() {
        return this.bodyLength() === 0
    }

    bodyLength() {
        const t = this.binaryBody;
        return t ? t.length : 0
    }

    static sizeOfUTF8(t) {
        return t ? new TextEncoder().encode(t).length : 0
    }

    static toUnit8Array(t, n) {
        const r = new TextEncoder().encode(t), s = new Uint8Array([0]),
            o = new Uint8Array(r.length + n.length + s.length);
        return o.set(r), o.set(n, r.length), o.set(s, r.length + n.length), o
    }

    static marshall(t) {
        return new Vt(t).serialize()
    }

    static hdrValueEscape(t) {
        return t.replace(/\\/g, "\\\\").replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/:/g, "\\c")
    }

    static hdrValueUnEscape(t) {
        return t.replace(/\\r/g, "\r").replace(/\\n/g, `
`).replace(/\\c/g, ":").replace(/\\\\/g, "\\")
    }
}

const Xd = 0, no = 10, ro = 13, Yy = 58;

class Zy {
    constructor(t, n) {
        this.onFrame = t, this.onIncomingPing = n, this._encoder = new TextEncoder, this._decoder = new TextDecoder, this._token = [], this._initState()
    }

    parseChunk(t, n = !1) {
        let r;
        if (typeof t == "string" ? r = this._encoder.encode(t) : r = new Uint8Array(t), n && r[r.length - 1] !== 0) {
            const s = new Uint8Array(r.length + 1);
            s.set(r, 0), s[r.length] = 0, r = s
        }
        for (let s = 0; s < r.length; s++) {
            const o = r[s];
            this._onByte(o)
        }
    }

    _collectFrame(t) {
        if (t !== Xd && t !== ro) {
            if (t === no) {
                this.onIncomingPing();
                return
            }
            this._onByte = this._collectCommand, this._reinjectByte(t)
        }
    }

    _collectCommand(t) {
        if (t !== ro) {
            if (t === no) {
                this._results.command = this._consumeTokenAsUTF8(), this._onByte = this._collectHeaders;
                return
            }
            this._consumeByte(t)
        }
    }

    _collectHeaders(t) {
        if (t !== ro) {
            if (t === no) {
                this._setupCollectBody();
                return
            }
            this._onByte = this._collectHeaderKey, this._reinjectByte(t)
        }
    }

    _reinjectByte(t) {
        this._onByte(t)
    }

    _collectHeaderKey(t) {
        if (t === Yy) {
            this._headerKey = this._consumeTokenAsUTF8(), this._onByte = this._collectHeaderValue;
            return
        }
        this._consumeByte(t)
    }

    _collectHeaderValue(t) {
        if (t !== ro) {
            if (t === no) {
                this._results.headers.push([this._headerKey, this._consumeTokenAsUTF8()]), this._headerKey = void 0, this._onByte = this._collectHeaders;
                return
            }
            this._consumeByte(t)
        }
    }

    _setupCollectBody() {
        const t = this._results.headers.filter(n => n[0] === "content-length")[0];
        t ? (this._bodyBytesRemaining = parseInt(t[1], 10), this._onByte = this._collectBodyFixedSize) : this._onByte = this._collectBodyNullTerminated
    }

    _collectBodyNullTerminated(t) {
        if (t === Xd) {
            this._retrievedBody();
            return
        }
        this._consumeByte(t)
    }

    _collectBodyFixedSize(t) {
        if (this._bodyBytesRemaining-- === 0) {
            this._retrievedBody();
            return
        }
        this._consumeByte(t)
    }

    _retrievedBody() {
        this._results.binaryBody = this._consumeTokenAsRaw();
        try {
            this.onFrame(this._results)
        } catch (t) {
            console.log("Ignoring an exception thrown by a frame handler. Original exception: ", t)
        }
        this._initState()
    }

    _consumeByte(t) {
        this._token.push(t)
    }

    _consumeTokenAsUTF8() {
        return this._decoder.decode(this._consumeTokenAsRaw())
    }

    _consumeTokenAsRaw() {
        const t = new Uint8Array(this._token);
        return this._token = [], t
    }

    _initState() {
        this._results = {
            command: void 0,
            headers: [],
            binaryBody: void 0
        }, this._token = [], this._headerKey = void 0, this._onByte = this._collectFrame
    }
}

var jt;
(function (e) {
    e[e.CONNECTING = 0] = "CONNECTING", e[e.OPEN = 1] = "OPEN", e[e.CLOSING = 2] = "CLOSING", e[e.CLOSED = 3] = "CLOSED"
})(jt = jt || (jt = {}));
var Ye;
(function (e) {
    e[e.ACTIVE = 0] = "ACTIVE", e[e.DEACTIVATING = 1] = "DEACTIVATING", e[e.INACTIVE = 2] = "INACTIVE"
})(Ye = Ye || (Ye = {}));

class Te {
    constructor(t) {
        this.versions = t
    }

    supportedVersions() {
        return this.versions.join(",")
    }

    protocolVersions() {
        return this.versions.map(t => `v${t.replace(".", "")}.stomp`)
    }
}

Te.V1_0 = "1.0";
Te.V1_1 = "1.1";
Te.V1_2 = "1.2";
Te.default = new Te([Te.V1_2, Te.V1_1, Te.V1_0]);

function Jy(e, t) {
    e.terminate = function () {
        const n = () => {
        };
        this.onerror = n, this.onmessage = n, this.onopen = n;
        const r = new Date, s = Math.random().toString().substring(2, 8), o = this.onclose;
        this.onclose = i => {
            const a = new Date().getTime() - r.getTime();
            t(`Discarded socket (#${s})  closed after ${a}ms, with code/reason: ${i.code}/${i.reason}`)
        }, this.close(), o?.call(e, {
            code: 4001,
            reason: `Quick discarding socket (#${s}) without waiting for the shutdown sequence.`,
            wasClean: !1
        })
    }
}

class qy {
    constructor(t, n, r) {
        this._client = t, this._webSocket = n, this._connected = !1, this._serverFrameHandlers = {
            CONNECTED: s => {
                this.debug(`connected to server ${s.headers.server}`), this._connected = !0, this._connectedVersion = s.headers.version, this._connectedVersion === Te.V1_2 && (this._escapeHeaderValues = !0), this._setupHeartbeat(s.headers), this.onConnect(s)
            }, MESSAGE: s => {
                const o = s.headers.subscription, i = this._subscriptions[o] || this.onUnhandledMessage, a = s,
                    c = this, u = this._connectedVersion === Te.V1_2 ? a.headers.ack : a.headers["message-id"];
                a.ack = (f = {}) => c.ack(u, o, f), a.nack = (f = {}) => c.nack(u, o, f), i(a)
            }, RECEIPT: s => {
                const o = this._receiptWatchers[s.headers["receipt-id"]];
                o ? (o(s), delete this._receiptWatchers[s.headers["receipt-id"]]) : this.onUnhandledReceipt(s)
            }, ERROR: s => {
                this.onStompError(s)
            }
        }, this._counter = 0, this._subscriptions = {}, this._receiptWatchers = {}, this._partialData = "", this._escapeHeaderValues = !1, this._lastServerActivityTS = Date.now(), this.debug = r.debug, this.stompVersions = r.stompVersions, this.connectHeaders = r.connectHeaders, this.disconnectHeaders = r.disconnectHeaders, this.heartbeatIncoming = r.heartbeatIncoming, this.heartbeatOutgoing = r.heartbeatOutgoing, this.splitLargeFrames = r.splitLargeFrames, this.maxWebSocketChunkSize = r.maxWebSocketChunkSize, this.forceBinaryWSFrames = r.forceBinaryWSFrames, this.logRawCommunication = r.logRawCommunication, this.appendMissingNULLonIncoming = r.appendMissingNULLonIncoming, this.discardWebsocketOnCommFailure = r.discardWebsocketOnCommFailure, this.onConnect = r.onConnect, this.onDisconnect = r.onDisconnect, this.onStompError = r.onStompError, this.onWebSocketClose = r.onWebSocketClose, this.onWebSocketError = r.onWebSocketError, this.onUnhandledMessage = r.onUnhandledMessage, this.onUnhandledReceipt = r.onUnhandledReceipt, this.onUnhandledFrame = r.onUnhandledFrame
    }

    get connectedVersion() {
        return this._connectedVersion
    }

    get connected() {
        return this._connected
    }

    start() {
        const t = new Zy(n => {
            const r = Vt.fromRawFrame(n, this._escapeHeaderValues);
            this.logRawCommunication || this.debug(`<<< ${r}`), (this._serverFrameHandlers[r.command] || this.onUnhandledFrame)(r)
        }, () => {
            this.debug("<<< PONG")
        });
        this._webSocket.onmessage = n => {
            if (this.debug("Received data"), this._lastServerActivityTS = Date.now(), this.logRawCommunication) {
                const r = n.data instanceof ArrayBuffer ? new TextDecoder().decode(n.data) : n.data;
                this.debug(`<<< ${r}`)
            }
            t.parseChunk(n.data, this.appendMissingNULLonIncoming)
        }, this._webSocket.onclose = n => {
            this.debug(`Connection closed to ${this._webSocket.url}`), this._cleanUp(), this.onWebSocketClose(n)
        }, this._webSocket.onerror = n => {
            this.onWebSocketError(n)
        }, this._webSocket.onopen = () => {
            const n = Object.assign({}, this.connectHeaders);
            this.debug("Web Socket Opened..."), n["accept-version"] = this.stompVersions.supportedVersions(), n["heart-beat"] = [this.heartbeatOutgoing, this.heartbeatIncoming].join(","), this._transmit({
                command: "CONNECT",
                headers: n
            })
        }
    }

    _setupHeartbeat(t) {
        if (t.version !== Te.V1_1 && t.version !== Te.V1_2 || !t["heart-beat"]) return;
        const [n, r] = t["heart-beat"].split(",").map(s => parseInt(s, 10));
        if (this.heartbeatOutgoing !== 0 && r !== 0) {
            const s = Math.max(this.heartbeatOutgoing, r);
            this.debug(`send PING every ${s}ms`), this._pinger = setInterval(() => {
                this._webSocket.readyState === jt.OPEN && (this._webSocket.send(Wr.LF), this.debug(">>> PING"))
            }, s)
        }
        if (this.heartbeatIncoming !== 0 && n !== 0) {
            const s = Math.max(this.heartbeatIncoming, n);
            this.debug(`check PONG every ${s}ms`), this._ponger = setInterval(() => {
                const o = Date.now() - this._lastServerActivityTS;
                o > s * 2 && (this.debug(`did not receive server activity for the last ${o}ms`), this._closeOrDiscardWebsocket())
            }, s)
        }
    }

    _closeOrDiscardWebsocket() {
        this.discardWebsocketOnCommFailure ? (this.debug("Discarding websocket, the underlying socket may linger for a while"), this.discardWebsocket()) : (this.debug("Issuing close on the websocket"), this._closeWebsocket())
    }

    forceDisconnect() {
        this._webSocket && (this._webSocket.readyState === jt.CONNECTING || this._webSocket.readyState === jt.OPEN) && this._closeOrDiscardWebsocket()
    }

    _closeWebsocket() {
        this._webSocket.onmessage = () => {
        }, this._webSocket.close()
    }

    discardWebsocket() {
        typeof this._webSocket.terminate != "function" && Jy(this._webSocket, t => this.debug(t)), this._webSocket.terminate()
    }

    _transmit(t) {
        const {command: n, headers: r, body: s, binaryBody: o, skipContentLengthHeader: i} = t, a = new Vt({
            command: n,
            headers: r,
            body: s,
            binaryBody: o,
            escapeHeaderValues: this._escapeHeaderValues,
            skipContentLengthHeader: i
        });
        let c = a.serialize();
        if (this.logRawCommunication ? this.debug(`>>> ${c}`) : this.debug(`>>> ${a}`), this.forceBinaryWSFrames && typeof c == "string" && (c = new TextEncoder().encode(c)), typeof c != "string" || !this.splitLargeFrames) this._webSocket.send(c); else {
            let u = c;
            for (; u.length > 0;) {
                const f = u.substring(0, this.maxWebSocketChunkSize);
                u = u.substring(this.maxWebSocketChunkSize), this._webSocket.send(f), this.debug(`chunk sent = ${f.length}, remaining = ${u.length}`)
            }
        }
    }

    dispose() {
        if (this.connected) try {
            const t = Object.assign({}, this.disconnectHeaders);
            t.receipt || (t.receipt = `close-${this._counter++}`), this.watchForReceipt(t.receipt, n => {
                this._closeWebsocket(), this._cleanUp(), this.onDisconnect(n)
            }), this._transmit({command: "DISCONNECT", headers: t})
        } catch (t) {
            this.debug(`Ignoring error during disconnect ${t}`)
        } else (this._webSocket.readyState === jt.CONNECTING || this._webSocket.readyState === jt.OPEN) && this._closeWebsocket()
    }

    _cleanUp() {
        this._connected = !1, this._pinger && (clearInterval(this._pinger), this._pinger = void 0), this._ponger && (clearInterval(this._ponger), this._ponger = void 0)
    }

    publish(t) {
        const {destination: n, headers: r, body: s, binaryBody: o, skipContentLengthHeader: i} = t,
            a = Object.assign({destination: n}, r);
        this._transmit({command: "SEND", headers: a, body: s, binaryBody: o, skipContentLengthHeader: i})
    }

    watchForReceipt(t, n) {
        this._receiptWatchers[t] = n
    }

    subscribe(t, n, r = {}) {
        r = Object.assign({}, r), r.id || (r.id = `sub-${this._counter++}`), r.destination = t, this._subscriptions[r.id] = n, this._transmit({
            command: "SUBSCRIBE",
            headers: r
        });
        const s = this;
        return {
            id: r.id, unsubscribe(o) {
                return s.unsubscribe(r.id, o)
            }
        }
    }

    unsubscribe(t, n = {}) {
        n = Object.assign({}, n), delete this._subscriptions[t], n.id = t, this._transmit({
            command: "UNSUBSCRIBE",
            headers: n
        })
    }

    begin(t) {
        const n = t || `tx-${this._counter++}`;
        this._transmit({command: "BEGIN", headers: {transaction: n}});
        const r = this;
        return {
            id: n, commit() {
                r.commit(n)
            }, abort() {
                r.abort(n)
            }
        }
    }

    commit(t) {
        this._transmit({command: "COMMIT", headers: {transaction: t}})
    }

    abort(t) {
        this._transmit({command: "ABORT", headers: {transaction: t}})
    }

    ack(t, n, r = {}) {
        r = Object.assign({}, r), this._connectedVersion === Te.V1_2 ? r.id = t : r["message-id"] = t, r.subscription = n, this._transmit({
            command: "ACK",
            headers: r
        })
    }

    nack(t, n, r = {}) {
        return r = Object.assign({}, r), this._connectedVersion === Te.V1_2 ? r.id = t : r["message-id"] = t, r.subscription = n, this._transmit({
            command: "NACK",
            headers: r
        })
    }
}

class Xy {
    constructor(t = {}) {
        this.stompVersions = Te.default, this.connectionTimeout = 0, this.reconnectDelay = 5e3, this.heartbeatIncoming = 1e4, this.heartbeatOutgoing = 1e4, this.splitLargeFrames = !1, this.maxWebSocketChunkSize = 8 * 1024, this.forceBinaryWSFrames = !1, this.appendMissingNULLonIncoming = !1, this.discardWebsocketOnCommFailure = !1, this.state = Ye.INACTIVE;
        const n = () => {
        };
        this.debug = n, this.beforeConnect = n, this.onConnect = n, this.onDisconnect = n, this.onUnhandledMessage = n, this.onUnhandledReceipt = n, this.onUnhandledFrame = n, this.onStompError = n, this.onWebSocketClose = n, this.onWebSocketError = n, this.logRawCommunication = !1, this.onChangeState = n, this.connectHeaders = {}, this._disconnectHeaders = {}, this.configure(t)
    }

    get webSocket() {
        return this._stompHandler?._webSocket
    }

    get disconnectHeaders() {
        return this._disconnectHeaders
    }

    set disconnectHeaders(t) {
        this._disconnectHeaders = t, this._stompHandler && (this._stompHandler.disconnectHeaders = this._disconnectHeaders)
    }

    get connected() {
        return !!this._stompHandler && this._stompHandler.connected
    }

    get connectedVersion() {
        return this._stompHandler ? this._stompHandler.connectedVersion : void 0
    }

    get active() {
        return this.state === Ye.ACTIVE
    }

    _changeState(t) {
        this.state = t, this.onChangeState(t)
    }

    configure(t) {
        Object.assign(this, t)
    }

    activate() {
        const t = () => {
            if (this.active) {
                this.debug("Already ACTIVE, ignoring request to activate");
                return
            }
            this._changeState(Ye.ACTIVE), this._connect()
        };
        this.state === Ye.DEACTIVATING ? (this.debug("Waiting for deactivation to finish before activating"), this.deactivate().then(() => {
            t()
        })) : t()
    }

    async _connect() {
        if (await this.beforeConnect(), this._stompHandler) {
            this.debug("There is already a stompHandler, skipping the call to connect");
            return
        }
        if (!this.active) {
            this.debug("Client has been marked inactive, will not attempt to connect");
            return
        }
        this.connectionTimeout > 0 && (this._connectionWatcher && clearTimeout(this._connectionWatcher), this._connectionWatcher = setTimeout(() => {
            this.connected || (this.debug(`Connection not established in ${this.connectionTimeout}ms, closing socket`), this.forceDisconnect())
        }, this.connectionTimeout)), this.debug("Opening Web Socket...");
        const t = this._createWebSocket();
        this._stompHandler = new qy(this, t, {
            debug: this.debug,
            stompVersions: this.stompVersions,
            connectHeaders: this.connectHeaders,
            disconnectHeaders: this._disconnectHeaders,
            heartbeatIncoming: this.heartbeatIncoming,
            heartbeatOutgoing: this.heartbeatOutgoing,
            splitLargeFrames: this.splitLargeFrames,
            maxWebSocketChunkSize: this.maxWebSocketChunkSize,
            forceBinaryWSFrames: this.forceBinaryWSFrames,
            logRawCommunication: this.logRawCommunication,
            appendMissingNULLonIncoming: this.appendMissingNULLonIncoming,
            discardWebsocketOnCommFailure: this.discardWebsocketOnCommFailure,
            onConnect: n => {
                if (this._connectionWatcher && (clearTimeout(this._connectionWatcher), this._connectionWatcher = void 0), !this.active) {
                    this.debug("STOMP got connected while deactivate was issued, will disconnect now"), this._disposeStompHandler();
                    return
                }
                this.onConnect(n)
            },
            onDisconnect: n => {
                this.onDisconnect(n)
            },
            onStompError: n => {
                this.onStompError(n)
            },
            onWebSocketClose: n => {
                this._stompHandler = void 0, this.state === Ye.DEACTIVATING && this._changeState(Ye.INACTIVE), this.onWebSocketClose(n), this.active && this._schedule_reconnect()
            },
            onWebSocketError: n => {
                this.onWebSocketError(n)
            },
            onUnhandledMessage: n => {
                this.onUnhandledMessage(n)
            },
            onUnhandledReceipt: n => {
                this.onUnhandledReceipt(n)
            },
            onUnhandledFrame: n => {
                this.onUnhandledFrame(n)
            }
        }), this._stompHandler.start()
    }

    _createWebSocket() {
        let t;
        if (this.webSocketFactory) t = this.webSocketFactory(); else if (this.brokerURL) t = new WebSocket(this.brokerURL, this.stompVersions.protocolVersions()); else throw new Error("Either brokerURL or webSocketFactory must be provided");
        return t.binaryType = "arraybuffer", t
    }

    _schedule_reconnect() {
        this.reconnectDelay > 0 && (this.debug(`STOMP: scheduling reconnection in ${this.reconnectDelay}ms`), this._reconnector = setTimeout(() => {
            this._connect()
        }, this.reconnectDelay))
    }

    async deactivate(t = {}) {
        const n = t.force || !1, r = this.active;
        let s;
        if (this.state === Ye.INACTIVE) return this.debug("Already INACTIVE, nothing more to do"), Promise.resolve();
        if (this._changeState(Ye.DEACTIVATING), this._reconnector && (clearTimeout(this._reconnector), this._reconnector = void 0), this._stompHandler && this.webSocket.readyState !== jt.CLOSED) {
            const o = this._stompHandler.onWebSocketClose;
            s = new Promise((i, a) => {
                this._stompHandler.onWebSocketClose = c => {
                    o(c), i()
                }
            })
        } else return this._changeState(Ye.INACTIVE), Promise.resolve();
        return n ? this._stompHandler?.discardWebsocket() : r && this._disposeStompHandler(), s
    }

    forceDisconnect() {
        this._stompHandler && this._stompHandler.forceDisconnect()
    }

    _disposeStompHandler() {
        this._stompHandler && this._stompHandler.dispose()
    }

    publish(t) {
        this._checkConnection(), this._stompHandler.publish(t)
    }

    _checkConnection() {
        if (!this.connected) throw new TypeError("There is no underlying STOMP connection")
    }

    watchForReceipt(t, n) {
        this._checkConnection(), this._stompHandler.watchForReceipt(t, n)
    }

    subscribe(t, n, r = {}) {
        return this._checkConnection(), this._stompHandler.subscribe(t, n, r)
    }

    unsubscribe(t, n = {}) {
        this._checkConnection(), this._stompHandler.unsubscribe(t, n)
    }

    begin(t) {
        return this._checkConnection(), this._stompHandler.begin(t)
    }

    commit(t) {
        this._checkConnection(), this._stompHandler.commit(t)
    }

    abort(t) {
        this._checkConnection(), this._stompHandler.abort(t)
    }

    ack(t, n, r = {}) {
        this._checkConnection(), this._stompHandler.ack(t, n, r)
    }

    nack(t, n, r = {}) {
        this._checkConnection(), this._stompHandler.nack(t, n, r)
    }
}

class e_ {
    client;
    subscription = null;

    constructor(t) {
        this.client = new Xy({
            brokerURL: "ws://localhost:8080/websocket",
            debug: n => {
                console.log(n)
            },
            connectHeaders: {login: t, passcode: "essunia"},
            reconnectDelay: 5e3,
            heartbeatIncoming: 4e3,
            heartbeatOutgoing: 4e3
        }), this.client.onConnect = this.onConnected, this.client.onStompError = this.onError
    }

    onConnected = () => {
        console.log("Connected to WebSocket"), this.client && (this.subscription = this.client.subscribe("/user/specific", t => {
            console.log(t.body)
        }))
    };
    onError = t => {
        console.error("WebSocket error", t)
    };
    connect = () => {
        this.client.activate()
    };
    disconnect = () => {
        this.subscription && this.subscription.unsubscribe(), this.client.deactivate()
    };
    subscribeToRecords = t => {
        console.log("SUBSKRYPCJA!"), this.subscription = this.client.subscribe("/user/specific", n => {
            t(n.body), console.log("DUUPA!")
        })
    }
}

let fi = localStorage.getItem("isDark") === "true";
fi == null && (localStorage.setItem("isDark", "false"), fi = !1);
const t_ = () => l.jsx(Hc, {}), so = () => (v.useEffect(() => {
        Notification.permission !== "granted" && Notification.requestPermission();
        const e = localStorage.getItem("BEARER_TOKEN");
        if (console.log("BIORE TOKEN"), e) {
            console.log("DEKODUJE TOKEN");
            const t = Ui(e).email, n = new e_(t);
            return n.connect(), () => {
                n.disconnect()
            }
        }
    }, []), l.jsxs("main", {
        className: Iy.student,
        "data-theme": fi ? "dark" : "",
        children: [l.jsx(Ly, {}), l.jsx(Hc, {}), l.jsx(Qy, {})]
    })), n_ = () => l.jsx("main", {"data-theme": fi ? "dark" : "", children: l.jsx(Hc, {})}), r_ = "_login_hi20j_17",
    s_ = "_login__form_hi20j_26", o_ = "_login__background_hi20j_42", i_ = "_login__aside_hi20j_49",
    l_ = "_form_hi20j_61", a_ = "_form__input_hi20j_65", c_ = "_text_hi20j_69", u_ = "_btn_hi20j_77",
    d_ = "_header_hi20j_81", f_ = "_reset__form_hi20j_108", h_ = "_logo_hi20j_125", p_ = "_error_hi20j_129", K = {
        login: r_,
        login__form: s_,
        "login-anime": "_login-anime_hi20j_1",
        "login__form--anime": "_login__form--anime_hi20j_39",
        "login-back-anime": "_login-back-anime_hi20j_1",
        login__background: o_,
        login__aside: i_,
        form: l_,
        form__input: a_,
        text: c_,
        btn: u_,
        header: d_,
        "footer-text": "_footer-text_hi20j_87",
        reset__form: f_,
        "reset-anime": "_reset-anime_hi20j_1",
        "reset__form--anime": "_reset__form--anime_hi20j_121",
        "reset-back-anime": "_reset-back-anime_hi20j_1",
        logo: h_,
        error: p_
    }, m_ = "_input_1gb4t_1", g_ = "_container_1gb4t_15", y_ = {input: m_, container: g_}, be = e => l.jsxs("div", {
        className: e.className,
        children: [e.label && l.jsx("h2", {children: e.label}), l.jsx("input", {
            type: e.type,
            placeholder: e.placeholder,
            onChange: e.onChange,
            className: y_.input,
            name: e.name
        })]
    }), __ = "_btn_7np5x_1", v_ = {btn: __}, ie = e => l.jsx("button", {
        type: e.type,
        onClick: e.onClick,
        className: `${v_.btn} ${e.className}`,
        children: e.children
    }), ef = localStorage.getItem("BEARER_TOKEN");
let z5 = Cy;
if (ef) {
    const e = Ui(ef).id;
    z5 = await ou(e)
}
const U5 = Os({
        name: "userData",
        initialState: z5,
        reducers: {setUserData: (e, t) => ({...e, ...t.payload})}
    }), {setUserData: C_} = U5.actions, w_ = U5.reducer, x_ = () => {
        const [e, t] = v.useState({name: "", password: ""}), [n, r] = v.useState(!1), [s, o] = v.useState(""), i = Bc(),
            a = bn(), c = d => {
                t({...e, [d.target.name]: d.target.value})
            }, u = async d => {
                d.preventDefault();
                const g = {email: e.name, password: e.password};
                if (e.name === "admin" && e.password === "admin" || e.name === "student" && e.password === "student" || e.name === "teacher" && e.password === "teacher" || e.name === "parent" && e.password === "parent") {
                    switch (e.name) {
                        case"admin":
                            g.email = "admin@example.com";
                            break;
                        case"teacher":
                            g.email = "bob.brown@example.com";
                            break;
                        case"student":
                            g.email = "john.doe@example.com";
                            break;
                        case"parent":
                            g.email = "parent@example.com";
                            break;
                        default:
                            g.email = "admin@example.com"
                    }
                    g.password = "password123"
                }
                try {
                    if (e.name === "" || e.password === "") {
                        o("Please fill in the fields correctly <3");
                        return
                    } else o("");
                    const C = await F3(g);
                    a(P5(C));
                    const y = await ou(C.id);
                    a(C_(y))
                } catch {
                    o("Check if the provided data is correct.")
                }
            }, f = () => {
                r(!0), setTimeout(() => {
                    i("/reset")
                }, 1e3)
            };
        return l.jsxs("div", {
            className: K.login,
            children: [l.jsx("div", {className: K.login__background}), l.jsxs("aside", {
                className: K.login__aside,
                children: [l.jsx(T5, {className: K.logo}), l.jsxs("div", {
                    className: `${K.login__form} ${n && K["login__form--anime"]}`,
                    children: [l.jsx("h1", {className: K.header, children: "Sign in"}), l.jsx("p", {
                        className: K.error,
                        children: s
                    }), l.jsxs("form", {
                        onSubmit: u,
                        className: K.form,
                        children: [l.jsx(be, {
                            type: "text",
                            placeholder: "Login",
                            onChange: c,
                            name: "name",
                            className: K.form__input
                        }), l.jsx(be, {
                            type: "password",
                            placeholder: "Password",
                            onChange: c,
                            name: "password",
                            className: K.form__input
                        }), l.jsx(ie, {className: K.btn, type: "submit", children: "Sign in"})]
                    }), l.jsxs("div", {
                        className: K.text,
                        children: [l.jsx("span", {children: "Don't remember password?"}), l.jsx("br", {}), l.jsx("a", {
                            onClick: f,
                            children: "Reset here"
                        })]
                    })]
                }), l.jsx("span", {className: K["footer-text"], children: "2024 © Green Comp."})]
            })]
        })
    }, S_ = () => {
        const [e, t] = v.useState(""), [n, r] = v.useState(!1), s = Bc(), o = c => {
            t(c.target.value)
        }, i = c => {
            c.preventDefault(), console.log("Welcome!")
        }, a = () => {
            r(!0), setTimeout(() => {
                s("/")
            }, 1e3)
        };
        return l.jsxs("div", {
            className: K.login,
            children: [l.jsx("div", {className: K.login__background}), l.jsxs("aside", {
                className: K.login__aside,
                children: [l.jsx(T5, {className: K.logo}), l.jsxs("div", {
                    className: `${K.reset__form} ${n && K["reset__form--anime"]}`,
                    children: [l.jsx("h1", {className: K.header, children: "Reset Password"}), l.jsxs("form", {
                        onSubmit: i,
                        className: K.form,
                        children: [l.jsx(be, {
                            type: "text",
                            value: e,
                            placeholder: "Login",
                            onChange: o,
                            className: K.form__input
                        }), l.jsx(ie, {className: K.btn, type: "submit", children: "Sign in"})]
                    }), l.jsxs("div", {
                        className: K.text,
                        children: [l.jsx("span", {children: "Remember yet?"}), l.jsx("br", {}), l.jsx("a", {
                            onClick: a,
                            children: "Reset here"
                        })]
                    })]
                }), l.jsx("span", {className: K["footer-text"], children: "2024 © Green Comp."})]
            })]
        })
    }, k_ = "_header__content_n4nti_1", E_ = "_expanded_n4nti_10", j_ = "_button_n4nti_13",
    oo = {header__content: k_, expanded: E_, button: j_}, To = e => {
        const [t, n] = v.useState(!0), r = () => {
            n(s => !s)
        };
        return l.jsxs("div", {
            className: `${oo.header} ${t && oo.expanded}`,
            children: [l.jsxs("div", {
                className: `${oo.header__content} ${e.className}`,
                onClick: r,
                children: [l.jsx("h3", {children: e.value}), t ? l.jsx("img", {
                    src: Wi,
                    alt: "collapse-icon"
                }) : l.jsx("img", {src: Hi, alt: "expand-icon"})]
            }), t && l.jsx("div", {className: oo.expanded__content, children: e.children})]
        })
    }, N_ = "_home_yhdla_1", T_ = "_account_yhdla_11", D_ = "_account__info_yhdla_18",
    jl = {home: N_, account: T_, account__info: D_}, O_ = "_toggle_1fveb_1", A_ = "_toggle__input_1fveb_7",
    tf = {toggle: O_, toggle__input: A_}, Nl = e => l.jsxs("div", {
        className: tf.toggle,
        children: [l.jsx("input", {
            type: "checkbox",
            id: e.id,
            className: tf.toggle__input,
            onChange: e.onChange,
            checked: e.checked
        }), l.jsxs("label", {htmlFor: e.id, children: [" ", e.labelText, " "]})]
    }), io = () => {
        const e = ne(s => s.userData), t = (s, o) => {
            localStorage.setItem(s, JSON.stringify(o))
        }, [n, r] = v.useState({
            isDark: localStorage.getItem("isDark") !== "false",
            isNotified: localStorage.getItem("isNotified") !== "false",
            isAnimated: localStorage.getItem("isAnimated") !== "false"
        });
        return v.useEffect(() => {
            Object.keys(n).forEach(s => {
                const o = s;
                localStorage.getItem(o) !== JSON.stringify(n[o]) && t(o, n[o])
            })
        }, [n]), l.jsxs("main", {
            className: jl.home,
            children: [l.jsx(To, {
                value: "Account",
                children: l.jsx("div", {
                    className: jl.account,
                    children: l.jsxs("div", {
                        className: jl.account__info,
                        children: [l.jsxs("h2", {children: ["First Name: ", e.personalInfo.firstName ?? "N/A"]}), l.jsxs("h2", {children: ["Last Name: ", e.personalInfo.lastName ?? "N/A"]}), l.jsxs("h2", {children: ["City: ", e.personalInfo.city ?? "N/A"]}), l.jsxs("h2", {children: ["Street: ", e.personalInfo.street ?? "N/A"]}), l.jsxs("h2", {children: [l.jsx("strong", {children: "Address:"}), " ", e.personalInfo.homeNumber ?? "N/A", e.personalInfo.flatNumber ? `/${e.personalInfo.flatNumber}` : ""]})]
                    })
                })
            }), l.jsxs(To, {
                value: "Look & Feel", children: [l.jsx(Nl, {
                    id: "dark-mode", onChange: () => {
                        r(s => ({...s, isDark: !s.isDark})), window.location.reload()
                    }, checked: n.isDark, labelText: "Dark Mode"
                }), l.jsx(Nl, {
                    id: "animations", onChange: () => {
                        r(s => ({...s, isAnimated: !s.isAnimated})), window.location.reload()
                    }, checked: n.isAnimated, labelText: "Animations"
                })]
            }), l.jsx(To, {
                value: "Notifications",
                children: l.jsx(Nl, {
                    id: "notifications",
                    onChange: () => r(s => ({...s, isNotified: !s.isNotified})),
                    checked: n.isNotified,
                    labelText: "Notifications"
                })
            })]
        })
    }, b_ = "_grades_1iedj_1", R_ = "_home_1iedj_8", L_ = "_content_1iedj_12", P_ = "_navbar_1iedj_18",
    I_ = "_no_grades_1iedj_24", Lr = {grades: b_, home: R_, content: L_, navbar: P_, no_grades: I_},
    F_ = "_gradeCard_1ae96_1", M_ = "_gradeCard__new_1ae96_16", z_ = "_line_1ae96_22", U_ = "_grade_1ae96_1",
    B_ = "_date_1ae96_35", Pr = {gradeCard: F_, gradeCard__new: M_, line: z_, grade: U_, date: B_}, H_ = e => {
        const t = new Date(e.date).toLocaleDateString(), n = new Date, r = new Date(n);
        r.setDate(n.getDate() - 7);
        const o = new Date(e.date) > r;
        return l.jsxs("div", {
            className: Pr.gradeCard,
            "data-value": e.grade,
            children: [o && l.jsx("div", {
                className: Pr.gradeCard__new,
                children: l.jsx(uy, {})
            }), l.jsx("h1", {
                className: Pr.grade,
                children: e.grade
            }), l.jsx("div", {className: Pr.line}), l.jsx("span", {className: Pr.date, children: t})]
        })
    }, nf = () => {
        const t = ne(n => n.studentGrades).grades;
        return l.jsx("main", {
            className: Lr.home,
            children: l.jsx("div", {
                className: Lr.content,
                children: t.length > 0 ? t.map((n, r) => l.jsx(To, {
                    value: n.subjectName,
                    className: Lr.navbar,
                    children: l.jsx("div", {
                        className: Lr.grades,
                        children: n.grades.map((s, o) => l.jsx(H_, {grade: s.grade, date: s.gradedAt}, o))
                    })
                }, r)) : l.jsx("h1", {className: Lr.no_grades, children: "You haven't got any grades right now."})
            })
        })
    }, W_ = "_main_7tl3c_1", V_ = {main: W_}, $_ = "_card_jor6z_1", G_ = "_card__title_jor6z_13",
    K_ = "_card__info_jor6z_17", Q_ = "_card__icon_jor6z_34", Y_ = "_card__btn_jor6z_39", Z_ = "_background_jor6z_62",
    J_ = "_openBg_jor6z_1", ot = {
        card: $_,
        card__title: G_,
        card__info: K_,
        card__icon: Q_,
        card__btn: Y_,
        background: Z_,
        "background--active-anime": "_background--active-anime_jor6z_72",
        openBg: J_,
        "background--active": "_background--active_jor6z_72"
    }, q_ = "_column__title_17li3_1", X_ = "_column__items_17li3_9", e8 = "_indicator_17li3_15",
    Do = {column__title: q_, column__items: X_, indicator: e8}, B5 = ({beforeId: e, status: t}) => l.jsx("div", {
        className: Do.indicator,
        "data-before": e || "-1",
        "data-column": t
    }), t8 = "_contentOpacity_ywst2_1", Y = {
        "open-card": "_open-card_ywst2_9",
        "open-card--active": "_open-card--active_ywst2_19",
        contentOpacity: t8,
        "open-card__container": "_open-card__container_ywst2_22",
        "open-card__content": "_open-card__content_ywst2_28",
        "open-card__btn": "_open-card__btn_ywst2_38",
        "open-card__upload-area": "_open-card__upload-area_ywst2_50",
        "open-card__grade-task": "_open-card__grade-task_ywst2_56",
        "open-card__title": "_open-card__title_ywst2_78",
        "open-card__info": "_open-card__info_ywst2_83",
        "open-card__description": "_open-card__description_ywst2_110",
        "open-card__members": "_open-card__members_ywst2_127",
        "open-card__members--title": "_open-card__members--title_ywst2_138",
        "open-card__members--profile": "_open-card__members--profile_ywst2_155",
        "open-card__members--lider": "_open-card__members--lider_ywst2_169",
        "send-btn": "_send-btn_ywst2_174"
    }, n8 = "_upload_1436b_1", r8 = "_upload__btn_1436b_4", s8 = "_load__row_1436b_18", o8 = "_load__content_1436b_31",
    i8 = "_load__details_1436b_35", l8 = "_load__loading_1436b_41", a8 = "_uploaded_1436b_55",
    c8 = "_uploaded__row_1436b_59", u8 = "_uploaded__details_1436b_72", d8 = "_uploaded__content_1436b_77",
    f8 = "_uploaded__size_1436b_81", h8 = "_uploaded__name_1436b_86", me = {
        upload: n8,
        upload__btn: r8,
        load__row: s8,
        load__content: o8,
        load__details: i8,
        "load__loading-bar": "_load__loading-bar_1436b_41",
        load__loading: l8,
        uploaded: a8,
        uploaded__row: c8,
        uploaded__details: u8,
        uploaded__content: d8,
        uploaded__size: f8,
        uploaded__name: h8
    }, p8 = ({task: e, status: t}) => {
        const [n, r] = v.useState([]), [s, o] = v.useState([]), [i, a] = v.useState(!1),
            c = v.useRef(null), [u, f] = v.useState(null), d = ne(p => p.login), g = async () => {
                try {
                    const {data: p} = await oe.get(`http://localhost:8080/api/v1/attachments/all/${e}`, {headers: {Authorization: localStorage.getItem("BEARER_TOKEN")}}),
                        h = p.map(m => {
                            const w = m.name.length > 12 ? `${m.name.substring(0, 13)}... .${m.name.split(".")[1]}` : m.name;
                            return {fullName: m.name, name: w, size: `${(m.size / (1024 * 1024)).toFixed(2)} MB`, id: m.id}
                        });
                    o(h)
                } catch (p) {
                    console.error("Error fetching uploaded files:", p)
                }
            };
        v.useEffect(() => {
            g().then(null)
        }, [e]);
        const C = () => c.current?.click(), y = async p => {
            const h = p.target.files?.[0];
            if (!h) return;
            const m = h.name.length > 12 ? `${h.name.substring(0, 13)}... .${h.name.split(".")[1]}` : h.name;
            r([{name: m, loading: 0, error: !1}]), a(!0);
            const w = new FormData;
            w.append("file", h);
            try {
                await oe.post(`http://localhost:8080/api/v1/attachments/upload/${e}`, w, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: localStorage.getItem("BEARER_TOKEN")
                    }, onUploadProgress: ({loaded: E, total: j}) => {
                        if (j) {
                            const N = Math.floor(E / j * 100);
                            r([{name: m, loading: N, error: !1}])
                        }
                    }
                }), await g(), r([]), a(!1)
            } catch (E) {
                console.error("Error uploading file:", E), r([{name: m, loading: 0, error: !0}])
            }
        }, _ = async p => {
            if (d.role === "Student" && t === "TO_DO") try {
                await Wy(p), await g()
            } catch (h) {
                console.error("Error deleting attachment:", h)
            }
        }, x = async (p, h) => {
            if ((d.role === "Teacher" || d.role === "Student") && (t === "DONE" || t === "GRADED")) try {
                Vy(p).then(m => {
                    const w = new Uint8Array(m), E = new Blob([w], {type: "application/pdf"}),
                        j = window.URL.createObjectURL(E), N = document.createElement("a");
                    N.href = j, N.setAttribute("download", `${h}.pdf`), document.body.appendChild(N), N.click()
                })
            } catch (m) {
                console.error("Error downloading attachment:", m)
            }
        };
        return l.jsxs("div", {
            className: me.upload, children: [l.jsxs("div", {
                children: [i && l.jsx("section", {
                    className: me.load,
                    children: n.map((p, h) => l.jsxs("li", {
                        className: me.load__row,
                        children: [l.jsx(Qd, {}), l.jsx("div", {
                            className: me.load__content,
                            children: l.jsxs("div", {
                                className: me.load__details,
                                children: [l.jsx("div", {
                                    className: me.load__name,
                                    children: p.error ? `${p.name} - ERROR` : `${p.name} - uploading`
                                }), !p.error && l.jsxs(l.Fragment, {
                                    children: [l.jsx("div", {
                                        className: me.load__percent,
                                        children: `${p.loading}%`
                                    }), l.jsx("div", {
                                        className: me["load__loading-bar"],
                                        children: l.jsx("div", {
                                            className: me.load__loading,
                                            style: {width: `${p.loading}%`}
                                        })
                                    })]
                                })]
                            })
                        })]
                    }, h))
                }), l.jsx("section", {
                    className: me.uploaded,
                    children: s.map((p, h) => l.jsxs("li", {
                        className: me.uploaded__row,
                        onMouseEnter: () => f(h),
                        onMouseLeave: () => f(null),
                        onClick: () => t !== "TO_DO" ? x(p.id, p.fullName) : _(p.id),
                        children: [l.jsx(Qd, {}), l.jsx("div", {
                            className: me.uploaded__content,
                            children: l.jsxs("div", {
                                className: me.uploaded__details,
                                children: [l.jsx("span", {
                                    className: me.uploaded__name,
                                    children: p.name
                                }), l.jsx("span", {className: me.uploaded__size, children: p.size})]
                            })
                        }), u === h ? t === "TO_DO" && d.role === "Student" && l.jsx(hy, {}) || (t === "DONE" || t === "GRADED") && (d.role === "Teacher" || d.role === "Student") && l.jsx(py, {}) || l.jsx(Kd, {}) : l.jsx(Kd, {})]
                    }, h))
                })]
            }), t === "TO_DO" && d.role === "Student" && l.jsxs("form", {
                children: [l.jsx("input", {
                    className: me["upload__input-file"],
                    type: "file",
                    name: "file",
                    hidden: !0,
                    ref: c,
                    onChange: y
                }), l.jsxs("div", {className: me.upload__btn, onClick: C, children: [l.jsx(cy, {}), "   Add attachment"]})]
            })]
        })
    }, Tl = {
        "dropdown-btn": "_dropdown-btn_lg8y2_1",
        "toggle-icon": "_toggle-icon_lg8y2_14",
        "button-open": "_button-open_lg8y2_21"
    }, m8 = v.forwardRef((e, t) => {
        const {children: n, toggle: r, open: s} = e;
        return l.jsxs("div", {
            onClick: r,
            className: `${Tl["dropdown-btn"]} ${s ? Tl["button-open"] : ""}`,
            ref: t,
            children: [n, l.jsx("span", {className: Tl["toggle-icon"], children: s ? l.jsx(dy, {}) : l.jsx(fy, {})})]
        })
    }), g8 = "_searchInput_o16zj_40",
    Dl = {"dropdown-content": "_dropdown-content_o16zj_1", "content-open": "_content-open_o16zj_34", searchInput: g8},
    y8 = v.forwardRef(({
                           children: e,
                           open: t,
                           searchValue: n,
                           setSearchValue: r,
                           showSearch: s
                       }, o) => l.jsxs("div", {
        className: `${Dl["dropdown-content"]} ${t ? Dl["content-open"] : ""}`,
        ref: o,
        children: [s && l.jsx("input", {
            type: "text",
            className: Dl.searchInput,
            placeholder: "Search...",
            value: n,
            onChange: i => r(i.target.value)
        }), e]
    })),
    rf = {"dropdown-item": "_dropdown-item_u99yi_1", "dropdown-item__checkbox": "_dropdown-item__checkbox_u99yi_11"},
    _8 = ({children: e, onClick: t, isCheckbox: n = !1, checked: r = !1}) => {
        const s = () => {
            n ? t(!r) : t()
        };
        return l.jsxs("div", {
            className: rf["dropdown-item"],
            onClick: s,
            children: [n && l.jsx("input", {
                className: rf["dropdown-item__checkbox"],
                type: "checkbox",
                checked: r,
                readOnly: !0
            }), e]
        })
    }, v8 = "_dropdown_165x1_1", sf = {dropdown: v8},
    Oo = ({buttonText: e, items: t, isCheckbox: n = !1, onSelectionChange: r, label: s, disabled: o, className: i}) => {
        const [a, c] = v.useState(!1), [u, f] = v.useState(t), [d, g] = v.useState(""), [C, y] = v.useState(!1),
            _ = Vi(() => c(!1)), x = v.useRef(null), p = v.useRef(null);
        v.useEffect(() => {
            f(t), y(n)
        }, [t]);
        const h = () => {
            o || c(E => !E)
        }, m = (E, j) => {
            if (n && j !== void 0) {
                const N = [...u];
                N[E].checked = j, f(N), r && r(N)
            } else {
                const N = u[E].label;
                c(!1), r && r(N)
            }
        }, w = u.map((E, j) => ({
            ...E,
            originalIndex: j
        })).filter(E => E.label?.toString().toLowerCase()?.includes(d.toLowerCase()));
        return l.jsxs("div", {
            ref: _,
            className: `${sf.dropdown} ${i} ${o ? sf.disabled : ""}`,
            children: [s && l.jsx("h2", {children: s}), l.jsx(m8, {
                ref: x,
                toggle: h,
                open: a,
                disabled: o,
                children: e
            }), a && !o && l.jsx(y8, {
                ref: p,
                open: a,
                searchValue: d,
                setSearchValue: g,
                showSearch: C,
                children: w.map(E => l.jsx(_8, {
                    checked: E.checked,
                    onClick: j => m(E.originalIndex, j),
                    isCheckbox: n,
                    children: E.label
                }, E.originalIndex))
            })]
        })
    }, C8 = e => {
        const t = ne(f => f.login), n = bn(), r = ["1", "2", "3", "4", "5"], [s, o] = v.useState(),
            a = xr() ? `${Y["open-card"]} ${Y["open-card--active"]}` : Y["open-card"], c = f => {
                o(f), console.log("Selected grade:", f)
            }, u = async f => {
                f.preventDefault(), console.log("Form submitted");
                let d;
                try {
                    if (t.role === "Student") e.status === "TO_DO" ? await Fy(e.id) : e.status === "DONE" && await My(e.id), d = await F5(t.id); else if (t.role === "Teacher") if (s !== void 0) await zy(e.id, s), d = await di(t.id), console.log(d); else if (e.status === "GRADED") await Uy(e.id), d = await di(t.id), console.log(d); else {
                        console.error("Please select a grade for the task.");
                        return
                    }
                    console.log("User tasks:", d), d && n(ci(d))
                } catch (g) {
                    console.error("Error updating task status or fetching user tasks:", g)
                }
            };
        return l.jsxs("div", {
            className: a, children: [l.jsxs("div", {
                className: Y["open-card__container"],
                children: [l.jsx("div", {className: Y["open-card__blank"]}), l.jsxs("div", {
                    className: Y["open-card__content"],
                    children: [l.jsx("h1", {
                        className: Y["open-card__title"],
                        children: e.title
                    }), l.jsxs("div", {
                        className: Y["open-card__info"],
                        children: [l.jsxs("div", {
                            className: Y["open-card__info-text"],
                            children: [l.jsx("h2", {children: "SUBJECT:"}), l.jsx("h2", {children: e.subject})]
                        }), l.jsxs("div", {
                            className: Y["open-card__info-text"],
                            children: [l.jsx("h2", {children: "DUE DATE:"}), l.jsx("h2", {children: e.deadline})]
                        }), l.jsx("div", {
                            className: Y["open-card__info-text"],
                            children: e.className && t.role === "Teacher" && l.jsxs(l.Fragment, {children: [l.jsx("h2", {children: "Class:"}), l.jsx("h2", {children: e.className})]})
                        })]
                    }), l.jsx("textarea", {
                        value: e.description,
                        className: Y["open-card__description"],
                        disabled: !0
                    }), l.jsx("div", {
                        className: Y["open-card__members--title"],
                        children: e.members.length === 1 ? l.jsxs(l.Fragment, {children: [l.jsx(nu, {className: Y["open-card__icon"]}), l.jsx("h2", {children: "Single project:"})]}) : l.jsxs(l.Fragment, {children: [l.jsx(tu, {className: Y["open-card__icon"]}), l.jsx("h2", {children: "Project with:"})]})
                    }), l.jsx("div", {
                        className: Y["open-card__members"],
                        children: e.members.map((f, d) => l.jsxs("div", {
                            className: Y["open-card__members--profile"],
                            children: [l.jsx("img", {
                                src: "src/assets/images/Profile_student.png",
                                alt: "Student Profile"
                            }), l.jsxs("span", {children: [f.firstName, " ", f.lastName]})]
                        }, d))
                    }), l.jsx("div", {
                        className: Y["open-card__upload-area"],
                        children: l.jsx(p8, {task: e.id, status: e.status})
                    }), t.role === "Teacher" && e.status === "DONE" && l.jsx(Oo, {
                        buttonText: s ? s.toString() : "Select grade",
                        items: r.map(f => ({label: f, checked: !1})),
                        isCheckbox: !1,
                        onSelectionChange: c,
                        label: "CHOOSE A GRADE",
                        className: Y["open-card__grade-task"]
                    }), e.grade && l.jsxs("div", {
                        className: Y["open-card__grade-task"],
                        children: [l.jsx("h3", {children: "Task grade:"}), l.jsx("p", {children: e.grade})]
                    })]
                }), l.jsx("button", {
                    className: Y["open-card__btn"],
                    type: "button",
                    onClick: e.onClick,
                    children: l.jsx(D5, {})
                })]
            }), (e.status === "TO_DO" && t.role === "Student" || e.status === "DONE" && t.role === "Student") && l.jsx("form", {
                onSubmit: u,
                className: Y["open-card__form"],
                children: l.jsx(ie, {
                    className: Y["send-btn"],
                    type: "submit",
                    children: e.status === "TO_DO" ? "Send Task" : "Undo Task"
                })
            }), (e.status === "DONE" || e.status === "GRADED" && t.role === "Teacher") && l.jsx("form", {
                onSubmit: u,
                className: Y["open-card__form"],
                children: l.jsx(ie, {
                    className: Y["send-btn"],
                    type: "submit",
                    children: e.status === "DONE" ? "Grade Task" : "Undo Grade"
                })
            })]
        })
    }, w8 = e => {
        const t = bn(), n = ne(f => f.studentTasks.currentTaskId), [r, s] = v.useState(!1), o = xr(), i = pr(e.date),
            a = pr(e.deadline);
        v.useEffect(() => {
            n && e.id === n && (s(!0), t(ig()))
        }, [n, e.id, t]);
        const c = () => {
                s(f => !f)
            },
            u = r ? o ? ot.background + " " + ot["background--active-anime"] : ot.background + " " + ot["background--active"] : "";
        return l.jsxs(l.Fragment, {
            children: [l.jsx(B5, {
                beforeId: e.id.toString(),
                status: e.status
            }), l.jsxs("div", {
                className: ot.card,
                children: [e.members.length === 1 ? l.jsx(nu, {className: ot.card__icon}) : l.jsx(tu, {className: ot.card__icon}), l.jsx("h1", {
                    className: ot.card__title,
                    children: e.title
                }), l.jsxs("div", {
                    className: ot.card__info,
                    children: [l.jsxs("h2", {children: ["Subject ", l.jsx("span", {children: e.subject})]}), l.jsxs("h2", {children: ["Due Date ", l.jsx("span", {children: i})]})]
                }), l.jsx("button", {className: ot.card__btn, type: "button", onClick: c, children: l.jsx(ly, {})})]
            }), r && l.jsx("div", {className: u}), r && l.jsx(C8, {
                title: e.title,
                subject: e.subject,
                date: i,
                members: e.members,
                description: e.description,
                id: e.id,
                status: e.status,
                handleDragStart: e.handleDragStart,
                onClick: c,
                className: e.className,
                grade: e.grade,
                deadline: a
            })]
        })
    }, Ol = ({title: e, status: t, cards: n}) => {
        const r = n.filter(s => s.status === t);
        return l.jsxs("div", {
            className: Do.column,
            children: [l.jsxs("div", {
                className: Do.column__title,
                children: [l.jsx("h3", {children: e}), l.jsx("span", {children: r.length})]
            }), l.jsxs("div", {
                className: Do.column__items,
                children: [r.filter(s => s.isSelected).map(s => l.jsx(w8, {
                    ...s,
                    title: s.title,
                    subject: s.subject,
                    date: s.date,
                    members: s.members,
                    description: s.description
                }, s.id)), l.jsx(B5, {beforeId: "-1", status: t})]
            })]
        })
    }, x8 = "_board_dx34j_2", S8 = "_headers_dx34j_15", k8 = "_headers__select_dx34j_21",
    lo = {board: x8, headers: S8, headers__select: k8}, E8 = "_expanded_192ti_1", j8 = "_expanded__content_192ti_4",
    of = {expanded: E8, expanded__content: j8}, ws = e => {
        const [t, n] = v.useState(!1), r = Vi(() => n(!1)), s = () => {
            n(o => !o)
        };
        return l.jsxs("div", {
            ref: r,
            className: qe.select,
            children: [l.jsxs("div", {
                className: `${qe.select__content} ${of.select__content} ${e.className}`,
                onClick: s,
                children: [l.jsx("h3", {children: e.name}), l.jsx("img", {
                    src: t ? Wi : Hi,
                    alt: t ? "collapse-icon" : "expand-icon"
                })]
            }), t && l.jsx("div", {
                className: `${qe.expanded__content} ${of.expanded__content}`,
                children: e.options.length > 0 ? e.options.map((o, i) => l.jsx("div", {
                    className: qe.expanded__content__element,
                    children: l.jsxs("label", {
                        children: [o, l.jsx("input", {
                            type: "checkbox",
                            checked: e.checkedItems[o] || !1,
                            onChange: () => e.onCheckboxChange(o),
                            name: o
                        })]
                    })
                }, i)) : l.jsx("div", {
                    className: qe.expanded__content__element,
                    children: l.jsx("label", {children: "NO DATA"})
                })
            })]
        })
    }, N8 = "_btn_un4in_1", lf = {btn: N8},
    T8 = e => l.jsx("button", {onClick: e.onClick, className: `${lf.btn} ${lf}`, children: e.children}),
    D8 = "_contentOpacity_18hf0_1", O8 = "_content_18hf0_48", A8 = "_content__textarea_18hf0_96",
    b8 = "_content__input_18hf0_101", R8 = "_content__addBtn_18hf0_107", ke = {
        "open-card": "_open-card_18hf0_9",
        "open-card--active": "_open-card--active_18hf0_19",
        contentOpacity: D8,
        "open-card__container": "_open-card__container_18hf0_22",
        "open-card__btn": "_open-card__btn_18hf0_28",
        "send-btn": "_send-btn_18hf0_41",
        content: O8,
        "content__elem--1": "_content__elem--1_18hf0_57",
        "content__elem--2": "_content__elem--2_18hf0_63",
        "content__elem--3": "_content__elem--3_18hf0_79",
        "content__elem--4": "_content__elem--4_18hf0_91",
        content__textarea: A8,
        content__input: b8,
        "content__input--1": "_content__input--1_18hf0_104",
        content__addBtn: R8
    }, L8 = "_selector_1gyg7_1", P8 = "_selector__cards_1gyg7_5", af = {selector: L8, selector__cards: P8},
    I8 = "_editButton_1gz0x_28",
    Al = {"selector-card": "_selector-card_1gz0x_1", "members-list": "_members-list_1gz0x_14", editButton: I8},
    F8 = ({number: e, members: t, onClick: n}) => {
        const [r, s] = v.useState(!1);
        return l.jsxs("div", {
            className: Al["selector-card"],
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
            children: [l.jsx("img", {
                src: O5,
                alt: "Profile"
            }), l.jsxs("span", {children: ["Group ", e + 1]}), l.jsx(ie, {
                type: "button",
                className: Al.editButton,
                children: "❌",
                onClick: n
            }), r && l.jsx("ul", {
                className: Al["members-list"],
                children: t.map(o => l.jsxs("li", {children: [o.firstName, " ", o.lastName]}, o.id))
            })]
        })
    }, M8 = ({groups: e, onDeleteGroup: t}) => l.jsx("div", {
        className: af.selector,
        children: l.jsx("div", {
            className: af.selector__cards,
            children: e && e.map((n, r) => l.jsx(F8, {number: r, members: n.members, onClick: () => t(r)}, r))
        })
    }), z8 = "_input_1inbj_1", U8 = "_container_1inbj_13", B8 = {input: z8, container: U8}, H8 = e => l.jsxs(l.Fragment, {
        children: [e.label && l.jsx("h2", {children: e.label}), l.jsx("textarea", {
            placeholder: e.placeholder,
            className: `${B8.input} ${e.className}`,
            name: e.name,
            onChange: e.onChange
        })]
    }), W8 = "_btn_9yflh_1", V8 = {btn: W8}, cf = e => l.jsx("button", {
        type: "button",
        className: V8.btn,
        onClick: e.onClick,
        children: e.group ? l.jsxs(l.Fragment, {children: [l.jsx(tu, {}), l.jsx("span", {children: "Group project"})]}) : l.jsxs(l.Fragment, {children: [l.jsx(nu, {}), l.jsx("span", {children: "Single project"})]})
    }), bl = "Select Class", $8 = "Select Subject", G8 = "Select Members", uf = "First Select Class!", K8 = e => {
        const [t, n] = v.useState({
                taskName: "",
                dueDate: "",
                class: "",
                subject: "",
                description: ""
            }), [r, s] = v.useState({class: bl, subject: uf, members: uf}), [o, i] = v.useState({
                subjects: [],
                members: []
            }), [a, c] = v.useState([]), [u, f] = v.useState(!0), [d, g] = v.useState([]), [C, y] = v.useState(""),
            x = xr() ? `${ke["open-card"]} ${ke["open-card--active"]}` : ke["open-card"], p = ne(b => b.login), h = bn();
        v.useEffect(() => {
            By(p.id).then(b => {
                g(b)
            }).catch(b => {
                console.log("Error fetching data", b)
            })
        }, [p.id]);
        const m = (b, $) => {
            n(B => ({...B, [b]: $.toString()}))
        }, w = b => {
            s(B => ({...B, class: b, members: G8, subject: $8})), c([]), m("class", b);
            const $ = d.find(B => B.classInfo.className === b);
            i($ ? {subjects: $.classInfo.subjectNames, members: $.studentList} : {subjects: [], members: []})
        }, E = b => {
            s($ => ({...$, subject: b})), m("subject", b)
        };
        let j = {members: []};
        const N = b => {
            j = {
                members: b.filter($ => $.checked).map($ => {
                    const [B, Ce] = $.label.split(" "), Rn = o.members.find(we => we.firstName === B && we.lastName === Ce);
                    return Rn || {id: 0, firstName: B, lastName: Ce}
                })
            }
        }, A = () => {
            j.members.length > 0 && c(b => [...b, j])
        }, W = async b => {
            if (b.preventDefault(), !t.taskName || !t.dueDate || !t.class || !t.subject || !t.description) {
                y("Fill in all fields!");
                return
            }
            if (u && a.length === 0) {
                y("Fill in all fields!");
                return
            }
            const $ = {
                title: t.taskName,
                deadline: new Date(t.dueDate).toISOString(),
                subjectName: t.subject,
                schoolClassName: t.class,
                description: t.description,
                taskMembersGroups: u ? a.map(B => B.members.map(Ce => ({
                    userId: Ce.id,
                    firstName: Ce.firstName,
                    lastName: Ce.lastName
                }))) : o.members.map(B => [{userId: B.id, firstName: B.firstName, lastName: B.lastName}]),
                taskCreatorId: p.id
            };
            try {
                const B = await Hy($);
                console.log("Task created successfully:", B);
                const Ce = await di(p.id);
                h(ci(Ce)), e.onClick()
            } catch (B) {
                console.error("Error creating task or updating task status or fetching user tasks:", B)
            }
        }, L = () => {
            const b = a.flatMap($ => $.members.map(B => B.id));
            return o.members.filter($ => !b.includes($.id))
        };
        return l.jsx("div", {
            className: x, children: l.jsxs("form", {
                className: ke["open-card__container"],
                onSubmit: W,
                children: [l.jsx("div", {className: ke["open-card__blank"]}), l.jsxs("div", {
                    className: ke.content,
                    children: [l.jsxs("div", {
                        className: ke["content__elem--1"],
                        children: [l.jsx(be, {
                            type: "text",
                            placeholder: "Task Name",
                            label: "TASK NAME",
                            name: "taskName",
                            onChange: b => m(b.target.name, b.target.value),
                            className: ke["content__input--1"]
                        }), l.jsx(be, {
                            type: "date",
                            placeholder: "Due Date",
                            label: "DUE DATE",
                            name: "dueDate",
                            onChange: b => m(b.target.name, b.target.value),
                            className: ke.content__input
                        })]
                    }), l.jsxs("div", {
                        className: ke["content__elem--2"],
                        children: [l.jsx(Oo, {
                            buttonText: r.class,
                            items: d.map(b => ({label: b.classInfo.className, checked: !1})),
                            isCheckbox: !1,
                            onSelectionChange: w,
                            label: "CLASS"
                        }), l.jsx(Oo, {
                            buttonText: r.subject,
                            items: o.subjects.map(b => ({label: b, checked: !1})),
                            isCheckbox: !1,
                            onSelectionChange: E,
                            label: "SUBJECT",
                            disabled: r.class === bl
                        })]
                    }), l.jsx("div", {
                        className: ke["content__elem--3"],
                        children: l.jsx(H8, {
                            placeholder: "Description",
                            label: "DESCRIPTION",
                            className: ke.content__textarea,
                            onChange: b => m("description", b.target.value)
                        })
                    }), l.jsxs("div", {
                        className: ke["content__elem--4"],
                        children: [l.jsxs("div", {
                            children: [l.jsx(cf, {
                                group: !1,
                                onClick: () => f(!1)
                            }), l.jsx(cf, {
                                group: !0, onClick: () => {
                                    f(!0), c([])
                                }
                            })]
                        }), l.jsx("div", {
                            children: u && l.jsxs(l.Fragment, {
                                children: [l.jsx(Oo, {
                                    buttonText: r.members,
                                    items: L().map(b => ({label: `${b.firstName} ${b.lastName}`, checked: !1})),
                                    isCheckbox: !0,
                                    label: "MEMBERS",
                                    disabled: r.class === bl,
                                    onSelectionChange: N
                                }), l.jsx(ie, {
                                    type: "button",
                                    children: "Add Group",
                                    className: ke.content__addBtn,
                                    onClick: A
                                })]
                            })
                        }), u && l.jsx(M8, {groups: a, onDeleteGroup: b => c($ => $.filter((B, Ce) => Ce !== b))})]
                    })]
                }), l.jsx("button", {
                    className: ke["open-card__btn"],
                    type: "button",
                    onClick: e.onClick,
                    children: l.jsx(D5, {})
                }), l.jsxs("div", {
                    className: ke["send-btn"],
                    children: [l.jsx("p", {children: C}), l.jsx(ie, {type: "submit", children: "Send task"})]
                })]
            })
        })
    }, Q8 = () => {
        const [e, t] = v.useState(!1), n = () => {
            t(s => !s)
        }, r = () => {
            t(!1)
        };
        return l.jsx(l.Fragment, {
            children: e ? l.jsxs(l.Fragment, {children: [l.jsx("div", {className: ot.background}), l.jsx(K8, {onClick: r})]}) : l.jsx(T8, {
                type: "button",
                onClick: n,
                children: "ADD TASK"
            })
        })
    };

function Y8(e) {
    const t = new Set, n = new Set;
    return e.forEach(r => {
        t.add(r.subject), r.className && n.add(r.className)
    }), {subjects: Array.from(t), classes: Array.from(n)}
}

const Z8 = () => {
        const e = ne(d => d.studentTasks.tasks), t = ne(d => d.login), {
            subjects: n,
            classes: r
        } = Y8(e), [s, o] = v.useState({}), [i, a] = v.useState({}), c = d => {
            const g = {...s};
            g[d] = !g[d], o(g)
        }, u = d => {
            const g = {...i};
            g[d] = !g[d], a(g)
        }, f = e.map(d => {
            const g = Object.keys(s).length === 0 || Object.values(s).every(y => !y) || s[d.subject],
                C = Object.keys(i).length === 0 || Object.values(i).every(y => !y) || !d.className || i[d.className];
            return {...d, isSelected: g && C}
        });
        return l.jsxs(l.Fragment, {
            children: [l.jsxs("div", {
                className: lo.headers,
                children: [l.jsx(ws, {
                    name: "Subject",
                    options: n,
                    onCheckboxChange: c,
                    checkedItems: s,
                    className: lo.headers__select
                }), t.role === "Teacher" && l.jsxs(l.Fragment, {
                    children: [l.jsx(ws, {
                        name: "Class",
                        options: r,
                        onCheckboxChange: u,
                        checkedItems: i,
                        className: lo.headers__select
                    }), l.jsx(Q8, {})]
                })]
            }), l.jsxs("div", {
                className: lo.board,
                children: [l.jsx(Ol, {
                    title: "TO-DO", status: "TO_DO", cards: f, setCards: () => {
                    }
                }), l.jsx(Ol, {
                    title: "DONE", status: "DONE", cards: f, setCards: () => {
                    }
                }), l.jsx(Ol, {
                    title: "GRADED", status: "GRADED", cards: f, setCards: () => {
                    }
                })]
            })]
        })
    }, ao = () => l.jsx("main", {className: V_.main, children: l.jsx(Z8, {})}), J8 = "_content_1u5qx_1",
    q8 = "_filters_1u5qx_8", X8 = "_charts_1u5qx_16", e9 = "_buttons_1u5qx_23", t9 = "_export_failure_1u5qx_34",
    n9 = "_export_success_1u5qx_38",
    Fn = {content: J8, filters: q8, charts: X8, buttons: e9, export_failure: t9, export_success: n9};

function r9(e, t, n) {
    v.useEffect(() => {
        if (!document) return;
        const r = document.querySelector('script[src="'.concat(e, '"]'));
        if (r?.dataset.loaded) {
            t?.();
            return
        }
        const s = r || document.createElement("script");
        r || (s.src = e);
        const o = () => {
            s.dataset.loaded = "1", t?.()
        };
        return s.addEventListener("load", o), n && s.addEventListener("error", n), r || document.head.append(s), () => {
            s.removeEventListener("load", o), n && s.removeEventListener("error", n)
        }
    }, [])
}

function s9(e) {
    let {
        chartVersion: t = "current",
        chartPackages: n = ["corechart", "controls"],
        chartLanguage: r = "en",
        mapsApiKey: s
    } = e;
    const [o, i] = v.useState(null), [a, c] = v.useState(!1);
    return r9("https://www.gstatic.com/charts/loader.js", () => {
        const u = window?.google;
        u && (u.charts.load(t, {packages: n, language: r, mapsApiKey: s}), u.charts.setOnLoadCallback(() => {
            i(u)
        }))
    }, () => {
        c(!0)
    }), [o, a]
}

function o9(e) {
    let {onLoad: t, onError: n, ...r} = e;
    const [s, o] = s9(r);
    return v.useEffect(() => {
        s && t && t(s)
    }, [s]), v.useEffect(() => {
        o && n && n()
    }, [o]), null
}

const H5 = {
    legend_toggle: !1, options: {}, legendToggle: !1, getChartWrapper: () => {
    }, spreadSheetQueryParameters: {headers: 1, gid: 1}, rootProps: {}, chartWrapperParams: {}
};
let df = 0;
const i9 = () => (df += 1, "reactgooglegraph-".concat(df)),
    l9 = ["#3366CC", "#DC3912", "#FF9900", "#109618", "#990099", "#3B3EAC", "#0099C6", "#DD4477", "#66AA00", "#B82E2E", "#316395", "#994499", "#22AA99", "#AAAA11", "#6633CC", "#E67300", "#8B0707", "#329262", "#5574A6", "#3B3EAC"],
    a9 = async function (e, t) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return new Promise((r, s) => {
            const o = "".concat(n.headers ? "headers=".concat(n.headers) : "headers=0"),
                i = "".concat(n.query ? "&tq=".concat(encodeURIComponent(n.query)) : ""),
                a = "".concat(n.gid ? "&gid=".concat(n.gid) : ""),
                c = "".concat(n.sheet ? "&sheet=".concat(n.sheet) : ""),
                u = "".concat(n.access_token ? "&access_token=".concat(n.access_token) : ""),
                f = "".concat(o).concat(a).concat(c).concat(i).concat(u), d = "".concat(t, "/gviz/tq?").concat(f);
            new e.visualization.Query(d).send(C => {
                C.isError() ? s("Error in query:  ".concat(C.getMessage(), " ").concat(C.getDetailedMessage())) : r(C.getDataTable())
            })
        })
    }, {Provider: c9, Consumer: u9} = v.createContext(H5), d9 = e => {
        let {children: t, value: n} = e;
        return v.createElement(c9, {value: n}, t)
    }, W5 = e => {
        let {render: t} = e;
        return v.createElement(u9, null, n => t(n))
    }, f9 = "#CCCCCC";

class h9 extends v.Component {
    componentDidMount() {
        this.draw(this.props), window.addEventListener("resize", this.onResize), (this.props.legend_toggle || this.props.legendToggle) && this.listenToLegendToggle()
    }

    componentWillUnmount() {
        const {google: t, googleChartWrapper: n} = this.props;
        window.removeEventListener("resize", this.onResize), t.visualization.events.removeAllListeners(n), n.getChartType() === "Timeline" && n.getChart() && n.getChart().clearChart()
    }

    componentDidUpdate() {
        this.draw(this.props)
    }

    render() {
        return null
    }

    constructor(...t) {
        super(...t), this.state = {hiddenColumns: []}, this.listenToLegendToggle = () => {
            const {google: n, googleChartWrapper: r} = this.props;
            n.visualization.events.addListener(r, "select", () => {
                const o = r.getChart().getSelection(), i = r.getDataTable();
                if (o.length === 0 || o[0].row || !i) return;
                const a = o[0].column, c = this.getColumnID(i, a);
                this.state.hiddenColumns.includes(c) ? this.setState(u => ({
                    ...u,
                    hiddenColumns: [...u.hiddenColumns.filter(f => f !== c)]
                })) : this.setState(u => ({...u, hiddenColumns: [...u.hiddenColumns, c]}))
            })
        }, this.applyFormatters = (n, r) => {
            const {google: s} = this.props;
            for (let o of r) switch (o.type) {
                case"ArrowFormat": {
                    new s.visualization.ArrowFormat(o.options).format(n, o.column);
                    break
                }
                case"BarFormat": {
                    new s.visualization.BarFormat(o.options).format(n, o.column);
                    break
                }
                case"ColorFormat": {
                    const i = new s.visualization.ColorFormat(o.options), {ranges: a} = o;
                    for (let c of a) i.addRange(...c);
                    i.format(n, o.column);
                    break
                }
                case"DateFormat": {
                    new s.visualization.DateFormat(o.options).format(n, o.column);
                    break
                }
                case"NumberFormat": {
                    new s.visualization.NumberFormat(o.options).format(n, o.column);
                    break
                }
                case"PatternFormat": {
                    new s.visualization.PatternFormat(o.options).format(n, o.column);
                    break
                }
            }
        }, this.getColumnID = (n, r) => n.getColumnId(r) || n.getColumnLabel(r), this.draw = async n => {
            let {
                data: r,
                diffdata: s,
                rows: o,
                columns: i,
                options: a,
                legend_toggle: c,
                legendToggle: u,
                chartType: f,
                formatters: d,
                spreadSheetUrl: g,
                spreadSheetQueryParameters: C
            } = n;
            const {google: y, googleChartWrapper: _} = this.props;
            let x, p = null;
            if (s) {
                const w = y.visualization.arrayToDataTable(s.old), E = y.visualization.arrayToDataTable(s.new);
                p = y.visualization[f].prototype.computeDiff(w, E)
            }
            r !== null ? Array.isArray(r) ? x = y.visualization.arrayToDataTable(r) : x = new y.visualization.DataTable(r) : o && i ? x = y.visualization.arrayToDataTable([i, ...o]) : g ? x = await a9(y, g, C) : x = y.visualization.arrayToDataTable([]);
            const h = x.getNumberOfColumns();
            for (let w = 0; w < h; w += 1) {
                const E = this.getColumnID(x, w);
                if (this.state.hiddenColumns.includes(E)) {
                    const j = x.getColumnLabel(w), N = x.getColumnId(w), A = x.getColumnType(w);
                    x.removeColumn(w), x.addColumn({label: j, id: N, type: A})
                }
            }
            const m = _.getChart();
            _.getChartType() === "Timeline" && m && m.clearChart(), _.setChartType(f), _.setOptions(a || {}), _.setDataTable(x), _.draw(), this.props.googleChartDashboard !== null && this.props.googleChartDashboard.draw(x), p && (_.setDataTable(p), _.draw()), d && (this.applyFormatters(x, d), _.setDataTable(x), _.draw()), (u === !0 || c === !0) && this.grayOutHiddenColumns({options: a})
        }, this.grayOutHiddenColumns = n => {
            let {options: r} = n;
            const {googleChartWrapper: s} = this.props, o = s.getDataTable();
            if (!o) return;
            const i = o.getNumberOfColumns();
            if (this.state.hiddenColumns.length > 0 === !1) return;
            const c = Array.from({length: i - 1}).map((u, f) => {
                const d = this.getColumnID(o, f + 1);
                return this.state.hiddenColumns.includes(d) ? f9 : r && r.colors ? r.colors[f] : l9[f]
            });
            s.setOptions({...r, colors: c}), s.draw()
        }, this.onResize = () => {
            const {googleChartWrapper: n} = this.props;
            n.draw()
        }
    }
}

class p9 extends v.Component {
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    shouldComponentUpdate() {
        return !1
    }

    render() {
        const {google: t, googleChartWrapper: n, googleChartDashboard: r} = this.props;
        return v.createElement(W5, {
            render: s => v.createElement(h9, Object.assign({}, s, {
                google: t,
                googleChartWrapper: n,
                googleChartDashboard: r
            }))
        })
    }
}

class m9 extends v.Component {
    shouldComponentUpdate() {
        return !1
    }

    listenToEvents(t) {
        let {chartEvents: n, google: r, googleChartWrapper: s} = t;
        if (n) {
            r.visualization.events.removeAllListeners(s);
            for (let i of n) {
                var o = this;
                const {eventName: a, callback: c} = i;
                r.visualization.events.addListener(s, a, function () {
                    for (var u = arguments.length, f = new Array(u), d = 0; d < u; d++) f[d] = arguments[d];
                    c({chartWrapper: s, props: o.props, google: r, eventArgs: f})
                })
            }
        }
    }

    componentDidMount() {
        var t;
        const {google: n, googleChartWrapper: r} = this.props;
        this.listenToEvents({
            chartEvents: ((t = this.propsFromContext) === null || t === void 0 ? void 0 : t.chartEvents) || null,
            google: n,
            googleChartWrapper: r
        })
    }

    render() {
        return this.props, v.createElement(W5, {render: t => (this.propsFromContext = t, null)})
    }

    constructor(t) {
        super(t), this.propsFromContext = null
    }
}

let ff = 0;

class g9 extends v.Component {
    componentDidMount() {
        const {
                options: t,
                google: n,
                chartType: r,
                chartWrapperParams: s,
                toolbarItems: o,
                getChartEditor: i,
                getChartWrapper: a
            } = this.props, c = {chartType: r, options: t, containerId: this.getGraphID(), ...s},
            u = new n.visualization.ChartWrapper(c);
        u.setOptions(t || {}), a && a(u, n);
        const f = new n.visualization.Dashboard(this.dashboard_ref), d = this.addControls(u, f);
        o && n.visualization.drawToolbar(this.toolbar_ref.current, o);
        let g = null;
        i && (g = new n.visualization.ChartEditor, i({
            chartEditor: g,
            chartWrapper: u,
            google: n
        })), this.setState({
            googleChartEditor: g,
            googleChartControls: d,
            googleChartDashboard: f,
            googleChartWrapper: u,
            isReady: !0
        })
    }

    componentDidUpdate() {
        if (!this.state.googleChartWrapper || !this.state.googleChartDashboard || !this.state.googleChartControls) return;
        const {controls: t} = this.props;
        if (t) for (let n = 0; n < t.length; n += 1) {
            const {controlType: r, options: s, controlWrapperParams: o} = t[n];
            o && "state" in o && this.state.googleChartControls[n].control.setState(o.state), this.state.googleChartControls[n].control.setOptions(s), this.state.googleChartControls[n].control.setControlType(r)
        }
    }

    shouldComponentUpdate(t, n) {
        return this.state.isReady !== n.isReady || t.controls !== this.props.controls
    }

    render() {
        const {width: t, height: n, options: r, style: s} = this.props,
            o = {height: n || r && r.height, width: t || r && r.width, ...s};
        return this.props.render ? v.createElement("div", {
            ref: this.dashboard_ref,
            style: o
        }, v.createElement("div", {
            ref: this.toolbar_ref,
            id: "toolbar"
        }), this.props.render({
            renderChart: this.renderChart,
            renderControl: this.renderControl,
            renderToolbar: this.renderToolBar
        })) : v.createElement("div", {ref: this.dashboard_ref, style: o}, this.renderControl(i => {
            let {controlProp: a} = i;
            return a.controlPosition !== "bottom"
        }), this.renderChart(), this.renderControl(i => {
            let {controlProp: a} = i;
            return a.controlPosition === "bottom"
        }), this.renderToolBar())
    }

    constructor(...t) {
        var n;
        super(...t), n = this, this.state = {
            googleChartWrapper: null,
            googleChartDashboard: null,
            googleChartControls: null,
            googleChartEditor: null,
            isReady: !1
        }, this.graphID = null, this.dashboard_ref = v.createRef(), this.toolbar_ref = v.createRef(), this.getGraphID = () => {
            const {graphID: r, graph_id: s} = this.props;
            let o;
            return !r && !s ? this.graphID ? o = this.graphID : o = i9() : r && !s ? o = r : s && !r ? o = s : o = r, this.graphID = o, this.graphID
        }, this.getControlID = (r, s) => {
            ff += 1;
            let o;
            return typeof r > "u" ? o = "googlechart-control-".concat(s, "-").concat(ff) : o = r, o
        }, this.addControls = (r, s) => {
            const {google: o, controls: i} = this.props, a = i ? i.map((u, f) => {
                const {controlID: d, controlType: g, options: C, controlWrapperParams: y} = u,
                    _ = this.getControlID(d, f);
                return {
                    controlProp: u,
                    control: new o.visualization.ControlWrapper({containerId: _, controlType: g, options: C, ...y})
                }
            }) : null;
            if (!a) return null;
            s.bind(a.map(u => {
                let {control: f} = u;
                return f
            }), r);
            for (let u of a) {
                const {control: f, controlProp: d} = u, {controlEvents: g = []} = d;
                for (let C of g) {
                    var c = this;
                    const {callback: y, eventName: _} = C;
                    o.visualization.events.removeListener(f, _, y), o.visualization.events.addListener(f, _, function () {
                        for (var x = arguments.length, p = new Array(x), h = 0; h < x; h++) p[h] = arguments[h];
                        y({chartWrapper: r, controlWrapper: f, props: c.props, google: o, eventArgs: p})
                    })
                }
            }
            return a
        }, this.renderChart = () => {
            const {width: r, height: s, options: o, style: i, className: a, rootProps: c, google: u} = this.props,
                f = {height: s || o && o.height, width: r || o && o.width, ...i};
            return v.createElement("div", Object.assign({
                id: this.getGraphID(),
                style: f,
                className: a
            }, c), this.state.isReady && this.state.googleChartWrapper !== null ? v.createElement(v.Fragment, null, v.createElement(p9, {
                googleChartWrapper: this.state.googleChartWrapper,
                google: u,
                googleChartDashboard: this.state.googleChartDashboard
            }), v.createElement(m9, {googleChartWrapper: this.state.googleChartWrapper, google: u})) : null)
        }, this.renderControl = function () {
            let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s => !0;
            return n.state.isReady && n.state.googleChartControls !== null ? v.createElement(v.Fragment, null, n.state.googleChartControls.filter(s => {
                let {controlProp: o, control: i} = s;
                return r({control: i, controlProp: o})
            }).map(s => {
                let {control: o, controlProp: i} = s;
                return v.createElement("div", {key: o.getContainerId(), id: o.getContainerId()})
            })) : null
        }, this.renderToolBar = () => this.props.toolbarItems ? v.createElement("div", {ref: this.toolbar_ref}) : null
    }
}

class V5 extends v.Component {
    render() {
        const {
            chartLanguage: t,
            chartPackages: n,
            chartVersion: r,
            mapsApiKey: s,
            loader: o,
            errorElement: i
        } = this.props;
        return v.createElement(d9, {value: this.props}, this.state.loadingStatus === "ready" && this.state.google !== null ? v.createElement(g9, Object.assign({}, this.props, {google: this.state.google})) : this.state.loadingStatus === "errored" && i ? i : o, v.createElement(o9, {
            chartLanguage: t,
            chartPackages: n,
            chartVersion: r,
            mapsApiKey: s,
            onLoad: this.onLoad,
            onError: this.onError
        }))
    }

    componentDidMount() {
        this._isMounted = !0
    }

    componentWillUnmount() {
        this._isMounted = !1
    }

    isFullyLoaded(t) {
        const {controls: n, toolbarItems: r, getChartEditor: s} = this.props;
        return t && t.visualization && t.visualization.ChartWrapper && t.visualization.Dashboard && (!n || t.visualization.ChartWrapper) && (!s || t.visualization.ChartEditor) && (!r || t.visualization.drawToolbar)
    }

    constructor(...t) {
        super(...t), this._isMounted = !1, this.state = {loadingStatus: "loading", google: null}, this.onLoad = n => {
            if (this.props.onLoad && this.props.onLoad(n), this.isFullyLoaded(n)) this.onSuccess(n); else {
                const r = setInterval(() => {
                    const s = window.google;
                    this._isMounted ? s && this.isFullyLoaded(s) && (clearInterval(r), this.onSuccess(s)) : clearInterval(r)
                }, 1e3)
            }
        }, this.onSuccess = n => {
            this.setState({loadingStatus: "ready", google: n})
        }, this.onError = () => {
            this.setState({loadingStatus: "errored"})
        }
    }
}

V5.defaultProps = H5;
var hf;
(function (e) {
    e.annotation = "annotation", e.annotationText = "annotationText", e.certainty = "certainty", e.emphasis = "emphasis", e.interval = "interval", e.scope = "scope", e.style = "style", e.tooltip = "tooltip", e.domain = "domain"
})(hf || (hf = {}));
const Ir = {
    grade_5: getComputedStyle(document.documentElement).getPropertyValue("--grade-card-bg-5"),
    grade_4: getComputedStyle(document.documentElement).getPropertyValue("--grade-card-bg-4"),
    grade_3: getComputedStyle(document.documentElement).getPropertyValue("--grade-card-bg-3"),
    grade_2: getComputedStyle(document.documentElement).getPropertyValue("--grade-card-bg-2"),
    grade_1: getComputedStyle(document.documentElement).getPropertyValue("--grade-card-bg-1")
}, Rl = {
    title: "Grades",
    backgroundColor: "transparent",
    chartArea: {top: "15%", left: "15%", width: "100%", height: "100%"},
    titleTextStyle: {color: "white", fontSize: 30, bold: !1},
    legend: {textStyle: {color: "white", fontSize: 20}},
    is3D: !0,
    colors: [Ir.grade_5, Ir.grade_4, Ir.grade_3, Ir.grade_2, Ir.grade_1]
}, y9 = e => {
    const t = ["5", "4", "3", "2", "1"].every(r => e.data[r] === 0),
        n = [["Grade", "Amount"], ["5", e.data[5]], ["4", e.data[4]], ["3", e.data[3]], ["2", e.data[2]], ["1", e.data[1]]];
    return t ? Rl.title = `No grades to display 
for given filters` : Rl.title = "Grades", l.jsx(V5, {
        chartType: "PieChart",
        data: n,
        options: Rl,
        width: "100%",
        height: "100%"
    })
};

function ir(e) {
    const t = {};
    return e.forEach(n => {
        t[n] = !0
    }), t
}

function co(e) {
    const t = [];
    return e.forEach(n => {
        t.push(n.subjectName)
    }), t
}

function Ll(e) {
    const t = {5: 0, 4: 0, 3: 0, 2: 0, 1: 0};
    for (const n of e) for (const r of n.grades) {
        const s = r.grade.toString();
        t[s]++
    }
    return t
}

const pf = () => {
        const e = ne(p => p.parentChildrenData), t = ne(p => p.login),
            n = ne(p => p.studentGrades.grades), [r, s] = v.useState(co(n)), [o, i] = v.useState(ir(co(n))), [a, c] = v.useState(Ll(n)), [u, f] = v.useState("Export");
        v.useEffect(() => {
            s(co(n)), i(ir(co(n))), c(Ll(n))
        }, [n]), v.useEffect(() => {
            if (n.length > 0) {
                const p = g(), h = Ll(p);
                c(h)
            }
        }, [o, n]);
        const d = p => {
            i(h => ({...h, [p]: !h[p]}))
        }, g = () => n.filter(p => o[p.subjectName]).filter(p => p.grades.length > 0), C = () => {
            i(ir(r))
        };

        function y(p) {
            f(p), setTimeout(() => {
                f("Export")
            }, 2e3)
        }

        const _ = () => {
            f("Exporting...");
            const p = Object.keys(o).filter(m => o[m]);
            let h = t.id;
            t.role === Bi && e.selected != -1 && (h = e.children[e.selected].id), jy(h, p).then(m => {
                console.log("Export request response", m), y("Exported!")
            }).catch(m => {
                console.error("Error requesting student grades report", m), y("Export failure!")
            })
        }, x = () => {
            switch (u) {
                case"Exported!":
                    return Fn.export_success;
                case"Export failure!":
                    return Fn.export_failure;
                default:
                    return ""
            }
        };
        return l.jsxs("main", {
            className: Fn.content,
            children: [l.jsx("div", {
                className: Fn.filters,
                children: l.jsx(ws, {name: "Subject", options: r, onCheckboxChange: d, checkedItems: o})
            }), l.jsx("div", {className: Fn.charts, children: l.jsx(y9, {data: a})}), l.jsxs("div", {
                className: Fn.buttons,
                children: [l.jsx(ie, {type: "button", children: u, className: x(), onClick: _}), l.jsx(ie, {
                    type: "button",
                    children: "Clear",
                    onClick: C
                })]
            })]
        })
    }, _9 = "_content_1s4ws_1", v9 = {content: _9}, C9 = "_content_1kxd1_1", w9 = "_buttonOn_1kxd1_11",
    x9 = "_editButton_1kxd1_14", S9 = "_filters_1kxd1_19", k9 = "_tab_1kxd1_29", E9 = "_table_container_1kxd1_36",
    j9 = "_deleted_row_1kxd1_69", N9 = "_updated_row_1kxd1_73", ze = {
        content: C9,
        buttonOn: w9,
        editButton: x9,
        filters: S9,
        tab: k9,
        table_container: E9,
        deleted_row: j9,
        updated_row: N9
    }, T9 = "_content_15m9f_1", D9 = {content: T9}, mf = e => l.jsxs("div", {
        className: D9.content,
        children: [l.jsx(ay, {}), l.jsx("input", {type: "text", name: "search", placeholder: "Search", onInput: e.onInput})]
    });

async function O9(e) {
    try {
        return (await G.get(`/api/v1/teachers/classes/subjects/${e}`)).data
    } catch (t) {
        throw console.error("Error fetching user grades:", t), t
    }
}

async function A9(e, t) {
    try {
        const n = new URLSearchParams;
        t.forEach(o => n.append("subjectNames", o));
        const r = `/api/v1/reports/subjectReport/${e}?${n.toString()}`;
        return (await G.get(r)).data
    } catch (n) {
        throw console.error("Error requesting subject class grades report", n), n
    }
}

async function b9(e, t, n) {
    try {
        return (await G.get(`/api/v1/reports/teacherReport/${e}`, {
            params: {
                startDate: t.toISOString().split("T")[0],
                endDate: n.toISOString().split("T")[0]
            }
        })).data
    } catch (r) {
        throw console.error("Error requesting teacher report", r), r
    }
}

async function R9() {
    try {
        return (await G.get("/api/v1/tsic")).data
    } catch (e) {
        throw console.error("Error requesting teachers info", e), e
    }
}

async function L9() {
    try {
        return (await G.get("/api/v1/teachers")).data
    } catch (e) {
        throw console.error("Error requesting teachers info", e), e
    }
}

const uo = [{
    id: 1,
    email: "john.smith@example.com",
    personalInfoDTO: {
        firstName: "John",
        lastName: "Smith",
        pesel: "12345678901",
        country: "USA",
        city: "New York",
        street: "5th Avenue",
        homeNumber: "123",
        flatNumber: "1A"
    },
    schoolClassWithSubjectsDTOs: [{id: 1, name: "5A", subjectDTOs: [{id: 1, name: "Math"}, {id: 2, name: "Science"}]}]
}, {
    id: 2,
    email: "EJohnson@school.com",
    personalInfoDTO: {
        firstName: "Emily",
        lastName: "Johnson",
        pesel: "23456789012",
        country: "USA",
        city: "Los Angeles",
        street: "Sunset Boulevard",
        homeNumber: "456",
        flatNumber: "2B"
    },
    schoolClassWithSubjectsDTOs: []
}, {
    id: 3,
    email: "MBrown@school.com",
    personalInfoDTO: {
        firstName: "Michael",
        lastName: "Brown",
        pesel: "34567890123",
        country: "USA",
        city: "Chicago",
        street: "Michigan Avenue",
        homeNumber: "789",
        flatNumber: "3C"
    },
    schoolClassWithSubjectsDTOs: []
}, {
    id: 4,
    email: "SDavis@school.com",
    personalInfoDTO: {
        firstName: "Sarah",
        lastName: "Davis",
        pesel: "45678901234",
        country: "USA",
        city: "Houston",
        street: "Main Street",
        homeNumber: "101",
        flatNumber: "4D"
    },
    schoolClassWithSubjectsDTOs: []
}, {
    id: 5,
    email: "DMartinez@school.com",
    personalInfoDTO: {
        firstName: "David",
        lastName: "Martinez",
        pesel: "56789012345",
        country: "USA",
        city: "Phoenix",
        street: "Washington Street",
        homeNumber: "202",
        flatNumber: "5E"
    },
    schoolClassWithSubjectsDTOs: []
}, {
    id: 6,
    email: "JAnderson@school.com",
    personalInfoDTO: {
        firstName: "Jennifer",
        lastName: "Anderson",
        pesel: "67890123456",
        country: "USA",
        city: "Philadelphia",
        street: "Market Street",
        homeNumber: "303",
        flatNumber: "6F"
    },
    schoolClassWithSubjectsDTOs: []
}, {
    id: 7,
    email: "RWilson@school.com",
    personalInfoDTO: {
        firstName: "Robert",
        lastName: "Wilson",
        pesel: "78901234567",
        country: "USA",
        city: "San Antonio",
        street: "Alamo Plaza",
        homeNumber: "404",
        flatNumber: "7G"
    },
    schoolClassWithSubjectsDTOs: []
}, {
    id: 8,
    email: "JTaylor@school.com",
    personalInfoDTO: {
        firstName: "Jessica",
        lastName: "Taylor",
        pesel: "89012345678",
        country: "USA",
        city: "San Diego",
        street: "Broadway",
        homeNumber: "505",
        flatNumber: "8H"
    },
    schoolClassWithSubjectsDTOs: []
}, {
    id: 9,
    email: "KThompson@school.com",
    personalInfoDTO: {
        firstName: "Kevin",
        lastName: "Thompson",
        pesel: "90123456789",
        country: "USA",
        city: "Dallas",
        street: "Elm Street",
        homeNumber: "606",
        flatNumber: "9I"
    },
    schoolClassWithSubjectsDTOs: []
}, {
    id: 10,
    email: "LGarcia@school.com",
    personalInfoDTO: {
        firstName: "Laura",
        lastName: "Garcia",
        pesel: "01234567890",
        country: "USA",
        city: "San Jose",
        street: "Santa Clara Street",
        homeNumber: "707",
        flatNumber: "10J"
    },
    schoolClassWithSubjectsDTOs: []
}, {
    id: 11,
    email: "KThompson2@school.com",
    personalInfoDTO: {
        firstName: "Kevin",
        lastName: "Thompson",
        pesel: "90123456789",
        country: "USA",
        city: "Dallas",
        street: "Elm Street",
        homeNumber: "606",
        flatNumber: "9I"
    },
    schoolClassWithSubjectsDTOs: []
}, {
    id: 12,
    email: "KThompson3@school.com",
    personalInfoDTO: {
        firstName: "Kevin",
        lastName: "Thompson",
        pesel: "90123456789",
        country: "USA",
        city: "Dallas",
        street: "Elm Street",
        homeNumber: "606",
        flatNumber: "9I"
    },
    schoolClassWithSubjectsDTOs: []
}, {
    id: 13,
    email: "KThompson4@school.com",
    personalInfoDTO: {
        firstName: "Kevin",
        lastName: "Thompson",
        pesel: "90123456789",
        country: "USA",
        city: "Dallas",
        street: "Elm Street",
        homeNumber: "606",
        flatNumber: "9I"
    },
    schoolClassWithSubjectsDTOs: []
}, {
    id: 14,
    email: "KThompson5@school.com",
    personalInfoDTO: {
        firstName: "Kevin",
        lastName: "Thompson",
        pesel: "90123456789",
        country: "USA",
        city: "Dallas",
        street: "Elm Street",
        homeNumber: "606",
        flatNumber: "9I"
    },
    schoolClassWithSubjectsDTOs: []
}];

async function P9() {
    try {
        return (await G.get("/api/v1/classes")).data
    } catch (e) {
        throw console.error("Error getting user data", e), e
    }
}

async function I9() {
    try {
        return (await G.get("/api/v1/classes/subjects")).data
    } catch (e) {
        throw console.error("Error getting user data", e), e
    }
}

var $5 = (e => (e.TEACHERS = "TEACHERS", e.STUDENTS = "STUDENTS", e.CLASSES = "CLASSES", e.PARENTS = "PARENTS", e))($5 || {});

function fo(e) {
    return e.map(t => t.name)
}

const F9 = () => {
        const [e, t] = v.useState([]), [n, r] = v.useState([]);
        console.log(n);
        const [s, o] = v.useState(""), [i, a] = v.useState("TEACHERS"), [c, u] = v.useState([]), [f, d] = v.useState([]), [g, C] = v.useState([]), [y, _] = v.useState(!1), [x, p] = v.useState(-1), [h, m] = v.useState(uo[9]), [w, E] = v.useState([]), [j, N] = v.useState([]), [A, W] = v.useState(""), [L, b] = v.useState({}), [$, B] = v.useState(!0),
            Ce = () => {
                B(!0), i === "STUDENTS" && (xy().then(S => {
                    console.log("Students", S);
                    const z = S.map(F => ({...F, personalInfoDTO: F.personalInfo}));
                    d(z), B(!1)
                }).catch(S => {
                    console.error("Error fetching students", S)
                }), P9().then(S => {
                    console.log("Classes", S), t(S), W(S[0].name), b(ir(fo(S))), B(!1)
                }).catch(S => {
                    console.error("Error fetching classes", S)
                })), i === "TEACHERS" && R9().then(S => {
                    console.log("Teachers", S), u(S), B(!1)
                }).catch(S => {
                    console.log("Couldn't fetch teachers data", S)
                }), i === "CLASSES" && I9().then(S => {
                    r(S)
                }).catch(S => {
                    console.log("Error fetching schoolClassesWithSubjects", S)
                }), i === "PARENTS" && Sy().then(S => {
                    const z = S.map(F => ({...F, personalInfoDTO: wy}));
                    C(z)
                }).catch(S => {
                    console.log("Couldn't fetch parents data", S)
                })
            };
        v.useEffect(() => {
            Ce()
        }, [i]), v.useEffect(() => {
        }, [$]);
        const Rn = S => {
                b(z => ({...z, [S]: !z[S]}))
            }, we = (S, z) => {
                S === "email" && m(F => ({...F, email: z})), "personalInfoDTO" in h ? m(F => ({
                    ...F,
                    personalInfoDTO: {...F.personalInfoDTO, [S]: z}
                })) : "subject" in h ? m(F => ({...F, [S]: z})) : "schoolClassDTO" in h && m(F => ({
                    ...F,
                    personalInfoDTO: {...F.personalInfoDTO, [S]: z}
                }))
            }, Sr = S => {
                let z = uo[9];
                switch (i) {
                    case"TEACHERS":
                        z = c[S];
                        break;
                    case"STUDENTS":
                        z = f[S];
                        break
                }
                if (z !== h && z.id == h.id) {
                    switch (w.includes(S) || w.push(S), i) {
                        case"TEACHERS":
                            c[S] = h;
                            break;
                        case"STUDENTS":
                            f[S] = h;
                            break
                    }
                    p(-1), m(uo[9])
                }
                console.log("rows to update = ", w)
            }, D = S => {
                x == -1 ? (p(S.id), m(S)) : (p(-1), m(uo[9]))
            }, R = S => {
                N(z => z.includes(S) ? z.filter(F => F !== S) : [...z, S]), console.log("rows to delete = ", j)
            }, P = () => {
                Ce(), N([]), E([])
            }, X = S => {
                _(!1), p(-1), N([]), a(S)
            }, ae = S => {
                p(-1), _(S)
            }, fn = S => {
                o(S.target.value)
            }, xt = S => {
                W(S)
            }, kr = S => {
                m(z => ({...z, schoolClassDTO: {...z.schoolClassDTO, name: S}})), console.log(h)
            }, ht = {
                TEACHERS: {
                    headers: ["Name", "Surname", "E-Mail", "Subject", "PESEL", "Country", "City", "Street", "Home number", "Flat number", "IsFromCity"],
                    data: c
                },
                STUDENTS: {
                    headers: ["Name", "Surname", "E-Mail", "Class", "PESEL", "Country", "City", "Street", "Home number", "Flat number"],
                    data: f
                },
                CLASSES: {headers: ["Subject", "Teacher"], data: []},
                PARENTS: {headers: ["Name", "Surname", "E-Mail", "Phone Number", "Children"], data: g}
            },
            Ln = ht[i].data.filter(S => (S.personalInfoDTO.firstName || (S.personalInfoDTO.firstName = "-"), S.personalInfoDTO.lastName || (S.personalInfoDTO.lastName = "-"), i === "STUDENTS" ? (S.personalInfoDTO.firstName.toLowerCase().includes(s.toLowerCase()) || S.personalInfoDTO.lastName.toLowerCase().includes(s.toLowerCase()) || S.email.toLowerCase().includes(s.toLowerCase())) && L[S.schoolClassDTO.name] : S.personalInfoDTO.firstName.toLowerCase().includes(s.toLowerCase()) || S.personalInfoDTO.lastName.toLowerCase().includes(s.toLowerCase()) || S.email.toLowerCase().includes(s.toLowerCase())));
        return l.jsxs("div", {
            className: ze.content,
            children: [l.jsx("div", {
                className: ze.filters,
                children: Object.values($5).map(S => l.jsx(ie, {
                    className: `${ze.tab} ${i === S ? ze.buttonOn : ""}`,
                    type: "button",
                    onClick: () => X(S),
                    children: S
                }, S))
            }), l.jsxs("div", {
                className: ze.filters,
                children: [i === "CLASSES" && l.jsx(l.Fragment, {
                    children: l.jsx(or, {
                        name: "Class",
                        options: fo(e),
                        selected: A,
                        onOptionChange: xt
                    })
                }), i === "TEACHERS" && l.jsxs(l.Fragment, {
                    children: [l.jsx(or, {
                        name: "Subject",
                        options: [],
                        selected: "",
                        onOptionChange: () => {
                        }
                    }), l.jsx(mf, {onInput: fn})]
                }), i === "STUDENTS" && l.jsxs(l.Fragment, {
                    children: [l.jsx(ws, {
                        name: "Classes",
                        options: fo(e),
                        checkedItems: L,
                        onCheckboxChange: Rn
                    }), l.jsx(mf, {onInput: fn})]
                })]
            }), l.jsx("div", {
                className: ze.table_container, children: l.jsxs("table", {
                    children: [l.jsx("thead", {
                        children: i && l.jsxs("tr", {
                            children: [y && l.jsx("th", {
                                colSpan: 3,
                                children: "DELETE"
                            }), ht[i].headers.map((S, z) => l.jsx("th", {colSpan: 4, children: S}, z))]
                        })
                    }), l.jsxs("tbody", {
                        children: [(i === "TEACHERS" || i === "STUDENTS") && Ln.map((S, z) => l.jsxs("tr", {
                            id: S.id.toString(),
                            className: `
                                            ${j.includes(z) ? ze.deleted_row : ""}
                                            ${w.includes(z) ? ze.updated_row : ""}
                                        `,
                            children: [y && l.jsxs("td", {
                                colSpan: 3,
                                children: [l.jsx(ie, {
                                    type: "button",
                                    className: ze.editButton,
                                    onClick: () => D(S),
                                    children: "✏️"
                                }), l.jsx(ie, {
                                    type: "button",
                                    className: ze.editButton,
                                    children: "❌",
                                    onClick: () => R(z)
                                }), l.jsx(ie, {
                                    type: "button",
                                    className: ze.editButton,
                                    children: "✔️",
                                    onClick: () => Sr(z)
                                })]
                            }), l.jsx("td", {
                                colSpan: 4,
                                children: y && x == S.id ? l.jsx(be, {
                                    type: "text",
                                    placeholder: S.personalInfoDTO.firstName ? S.personalInfoDTO.firstName : "-",
                                    onChange: F => we("firstName", F.target.value)
                                }) : S.personalInfoDTO.firstName
                            }), l.jsx("td", {
                                colSpan: 4,
                                children: y && x == S.id ? l.jsx(be, {
                                    type: "text",
                                    placeholder: S.personalInfoDTO.lastName ? S.personalInfoDTO.lastName : "-",
                                    onChange: F => we("lastName", F.target.value)
                                }) : S.personalInfoDTO.lastName
                            }), l.jsx("td", {
                                colSpan: 4,
                                children: y && x == S.id ? l.jsx(be, {
                                    type: "text",
                                    placeholder: S.email,
                                    onChange: F => we("email", F.target.value)
                                }) : S.email
                            }), i === "TEACHERS" && l.jsx("td", {
                                colSpan: 4,
                                children: "bye bye"
                            }), i === "STUDENTS" && l.jsx("td", {
                                colSpan: 4,
                                children: y && x == S.id ? l.jsx(or, {
                                    name: "Class",
                                    options: fo(e),
                                    selected: h.schoolClassDTO.name,
                                    onOptionChange: kr
                                }) : S.schoolClassDTO?.name
                            }), (i === "STUDENTS" || i === "TEACHERS") && l.jsxs(l.Fragment, {
                                children: [l.jsx("td", {
                                    colSpan: 4,
                                    children: y && x === S.id ? l.jsx(be, {
                                        type: "text",
                                        placeholder: S.personalInfoDTO.pesel ? S.personalInfoDTO.pesel : "-",
                                        onChange: F => we("pesel", F.target.value)
                                    }) : S.personalInfoDTO.pesel
                                }), l.jsx("td", {
                                    colSpan: 4,
                                    children: y && x === S.id ? l.jsx(be, {
                                        type: "text",
                                        placeholder: S.personalInfoDTO.country ? S.personalInfoDTO.country : "-",
                                        onChange: F => we("country", F.target.value)
                                    }) : S.personalInfoDTO.country
                                }), l.jsx("td", {
                                    colSpan: 4,
                                    children: y && x === S.id ? l.jsx(be, {
                                        type: "text",
                                        placeholder: S.personalInfoDTO.city ? S.personalInfoDTO.city : "-",
                                        onChange: F => we("city", F.target.value)
                                    }) : S.personalInfoDTO.city
                                }), l.jsx("td", {
                                    colSpan: 4,
                                    children: y && x === S.id ? l.jsx(be, {
                                        type: "text",
                                        placeholder: S.personalInfoDTO.street ? S.personalInfoDTO.street : "-",
                                        onChange: F => we("street", F.target.value)
                                    }) : S.personalInfoDTO.street
                                }), l.jsx("td", {
                                    colSpan: 4,
                                    children: y && x === S.id ? l.jsx(be, {
                                        type: "text",
                                        placeholder: S.personalInfoDTO.homeNumber ? S.personalInfoDTO.homeNumber : "-",
                                        onChange: F => we("homeNumber", F.target.value)
                                    }) : S.personalInfoDTO.homeNumber
                                }), l.jsx("td", {
                                    colSpan: 4,
                                    children: y && x === S.id ? l.jsx(be, {
                                        type: "text",
                                        placeholder: S.personalInfoDTO.flatNumber ? S.personalInfoDTO.flatNumber : "-",
                                        onChange: F => we("flatNumber", F.target.value)
                                    }) : S.personalInfoDTO.flatNumber ? S.personalInfoDTO.flatNumber : "-"
                                })]
                            })]
                        }, z)), i === "PARENTS" && g.map((S, z) => l.jsxs("tr", {
                            children: [l.jsx("td", {
                                colSpan: 4,
                                children: S.firstName
                            }), l.jsx("td", {colSpan: 4, children: S.lastName}), l.jsx("td", {
                                colSpan: 4,
                                children: S.email
                            }), l.jsx("td", {colSpan: 4, children: S.phoneNumber}), l.jsx("td", {colSpan: 4})]
                        }, z))]
                    })]
                })
            }), l.jsxs("div", {
                className: ze.filters,
                children: [l.jsx(ie, {
                    className: y ? ze.buttonOn : "",
                    type: "button",
                    children: "Edit",
                    onClick: () => ae(!y)
                }), l.jsx(ie, {type: "button", children: "Add"}), l.jsx(ie, {
                    type: "button",
                    children: "Save"
                }), l.jsx(ie, {type: "button", children: "Clear", onClick: P})]
            })]
        })
    }, M9 = () => l.jsx("main", {className: v9.content, children: l.jsx(F9, {})}), z9 = "_content_5wmim_1",
    U9 = "_filters_5wmim_8", B9 = "_charts_5wmim_16", H9 = "_buttons_5wmim_25", W9 = "_export_failure_5wmim_36",
    V9 = "_export_success_5wmim_40",
    Mn = {content: z9, filters: U9, charts: B9, buttons: H9, export_failure: W9, export_success: V9},
    Ao = {className: "-", subjectNames: ["NO DATA"]};

function $9(e, t) {
    const n = e.find(r => r.className === t);
    return n || Ao
}

function G9(e) {
    return e.length > 0 ? e.map(t => t.className) : ["-"]
}

const K9 = () => {
        const e = ne(p => p.login), [t, n] = v.useState([]), [r, s] = v.useState(Ao), [o, i] = v.useState(ir(Ao.subjectNames)), [a, c] = v.useState("Export"), [u, f] = v.useState(!0);
        v.useEffect(() => {
            f(!0), e && O9(e.id).then(p => {
                console.log("Teacher classes and subjects:", p), n(p), f(!1)
            }).catch(p => {
                console.error("Error fetching teacher classes and subjects:", p), f(!0)
            })
        }, [e]), v.useEffect(() => {
        }, [u]);
        const d = p => {
            s($9(t, p))
        }, g = p => {
            i(h => ({...h, [p]: !h[p]}))
        }, C = () => {
            s(t[0]), i(ir(Ao.subjectNames))
        };

        function y(p) {
            c(p), setTimeout(() => {
                c("Export")
            }, 2e3)
        }

        const _ = () => {
            c("Exporting...");
            const p = Object.keys(o).filter(h => o[h] && r.subjectNames.includes(h));
            console.log("Selected subjects:", p), r.className != "-" ? p.length > 0 ? A9(r.className, p).then(h => {
                console.log("Export request response", h), y("Exported!")
            }).catch(h => {
                console.error("Error requesting student grades report", h), y("Export failure!")
            }) : y("Select subjects!") : y("Select class!")
        }, x = () => {
            switch (a) {
                case"Exported!":
                    return Mn.export_success;
                case"Export failure!":
                    return Mn.export_failure;
                default:
                    return ""
            }
        };
        return l.jsxs("main", {
            className: Mn.content,
            children: [l.jsxs("div", {
                className: Mn.filters,
                children: [l.jsx(or, {
                    name: "Class",
                    options: G9(t),
                    selected: r.className,
                    onOptionChange: d
                }), l.jsx(ws, {name: "Subject", options: r.subjectNames, checkedItems: o, onCheckboxChange: g})]
            }), l.jsx("div", {
                className: Mn.charts,
                children: l.jsx("h1", {children: "Pick up a class and select subjects you want to include in the report."})
            }), l.jsxs("div", {
                className: Mn.buttons,
                children: [l.jsx(ie, {type: "button", children: a, className: x(), onClick: _}), l.jsx(ie, {
                    type: "button",
                    children: "Clear",
                    onClick: C
                })]
            })]
        })
    }, Q9 = "_content_5wmim_1", Y9 = "_filters_5wmim_8", Z9 = "_charts_5wmim_16", J9 = "_buttons_5wmim_25",
    q9 = "_export_failure_5wmim_36", X9 = "_export_success_5wmim_40",
    zn = {content: Q9, filters: Y9, charts: Z9, buttons: J9, export_failure: q9, export_success: X9},
    ev = "_expanded__content_1mdjn_1", tv = {expanded__content: ev};

function qn(e) {
    const t = new Date;
    e && t.setDate(t.getDate() + e);
    const n = t.getFullYear();
    let r = t.getMonth() + 1, s = t.getDate();
    return r < 10 && (r = "0" + r), s < 10 && (s = "0" + s), `${n}-${r}-${s}`
}

const nv = e => {
    const [t, n] = v.useState(!1), r = Vi(() => n(!1)), s = () => {
        n(o => !o)
    };
    return l.jsxs("div", {
        ref: r,
        className: qe.select,
        children: [l.jsxs("div", {
            className: `${qe.select__content} ${e.className}`,
            onClick: s,
            children: [l.jsx("h3", {children: e.name}), l.jsx("img", {
                src: t ? Wi : Hi,
                alt: t ? "collapse-icon" : "expand-icon"
            })]
        }), t && l.jsxs("div", {
            className: `${qe.expanded__content} ${tv.expanded__content}`,
            children: [l.jsx("label", {children: "Od: "}), l.jsx("input", {
                type: "date",
                name: "from",
                value: e.fromDate,
                onChange: e.handleFromDateChange,
                max: qn()
            }), l.jsx("label", {children: "Do: "}), l.jsx("input", {
                type: "date",
                name: "to",
                value: e.toDate,
                onChange: e.handleToDateChange,
                max: qn()
            })]
        })]
    })
}, rv = {id: -1, firstName: "NO", lastName: "DATA"}, sv = () => {
    const e = ne(w => w.login), [t, n] = v.useState([]), [r, s] = v.useState(rv), [o, i] = v.useState("Export"), [a, c] = v.useState(qn(-180)), [u, f] = v.useState(qn()), [d, g] = v.useState(!0);
    v.useEffect(() => {
        g(!0), L9().then(w => {
            n(w), s(w[0]), g(!1)
        }).catch(w => {
            console.log("Error getting teachers in principal report tab", w)
        })
    }, [e]), v.useEffect(() => {
    }, [d]);
    const C = w => {
        const E = t.findIndex(j => `${j.firstName} ${j.lastName}` == w);
        s(t[E])
    }, y = w => {
        c(w.target.value)
    }, _ = w => {
        f(w.target.value)
    }, x = () => {
        f(qn()), c(qn())
    };

    function p(w) {
        i(w), setTimeout(() => {
            i("Export")
        }, 2e3)
    }

    const h = () => {
        i("Exporting..."), b9(r?.id, new Date(a), new Date(u)).then(w => {
            console.log("Export request response", w), p("Exported!")
        }).catch(w => {
            console.error("Error requesting student grades report", w), p("Export failure!")
        })
    }, m = () => {
        switch (o) {
            case"Exported!":
                return zn.export_success;
            case"Export failure!":
                return zn.export_failure;
            default:
                return ""
        }
    };
    return l.jsxs("main", {
        className: zn.content,
        children: [l.jsxs("div", {
            className: zn.filters,
            children: [l.jsx(or, {
                name: "Teacher",
                options: t.map(w => `${w.firstName} ${w.lastName}`),
                selected: `${r.firstName} ${r.lastName}`,
                onOptionChange: C
            }), l.jsx(nv, {name: "Date", fromDate: a, toDate: u, handleFromDateChange: y, handleToDateChange: _})]
        }), l.jsx("div", {
            className: zn.charts,
            children: l.jsx("h1", {children: "Pick up a teacher and select date range you want to include in the report."})
        }), l.jsxs("div", {
            className: zn.buttons,
            children: [l.jsx(ie, {type: "button", children: o, className: m(), onClick: h}), l.jsx(ie, {
                type: "button",
                children: "Clear",
                onClick: x
            })]
        })]
    })
};

function ov() {
    const e = ne(r => r.login), [t, n] = v.useState(!1);
    return v.useEffect(() => {
        const r = j5();
        n(r !== null)
    }, [e]), l.jsx(g0, {
        children: l.jsx(c0, {
            children: l.jsxs(V, {
                path: "/",
                element: l.jsx(t_, {}),
                children: [!t && l.jsxs(V, {
                    element: l.jsx(n_, {}),
                    children: [l.jsx(V, {index: !0, element: l.jsx(x_, {})}), l.jsx(V, {
                        path: "reset",
                        element: l.jsx(S_, {})
                    })]
                }), e.role === A5 && t && l.jsxs(V, {
                    element: l.jsx(so, {}),
                    children: [l.jsx(V, {index: !0, element: l.jsx(eo, {})}), l.jsx(V, {
                        path: "config",
                        element: l.jsx(io, {})
                    }), l.jsx(V, {path: "tasks", element: l.jsx(ao, {})}), l.jsx(V, {
                        path: "reports",
                        element: l.jsx(sv, {})
                    }), l.jsx(V, {path: "manage", element: l.jsx(M9, {})})]
                }), e.role === su && t && l.jsxs(V, {
                    element: l.jsx(so, {}),
                    children: [l.jsx(V, {index: !0, element: l.jsx(eo, {})}), l.jsx(V, {
                        path: "config",
                        element: l.jsx(io, {})
                    }), l.jsx(V, {path: "grades", element: l.jsx(nf, {})}), l.jsx(V, {
                        path: "tasks",
                        element: l.jsx(ao, {})
                    }), l.jsx(V, {path: "reports", element: l.jsx(pf, {})})]
                }), e.role === ru && t && l.jsxs(V, {
                    element: l.jsx(so, {}),
                    children: [l.jsx(V, {index: !0, element: l.jsx(eo, {})}), l.jsx(V, {
                        path: "config",
                        element: l.jsx(io, {})
                    }), l.jsx(V, {path: "tasks", element: l.jsx(ao, {})}), l.jsx(V, {
                        path: "reports",
                        element: l.jsx(K9, {})
                    })]
                }), e.role === Bi && t && l.jsxs(V, {
                    element: l.jsx(so, {}),
                    children: [l.jsx(V, {index: !0, element: l.jsx(eo, {})}), l.jsx(V, {
                        path: "config",
                        element: l.jsx(io, {})
                    }), l.jsx(V, {path: "grades", element: l.jsx(nf, {})}), l.jsx(V, {
                        path: "tasks",
                        element: l.jsx(ao, {})
                    }), l.jsx(V, {path: "reports", element: l.jsx(pf, {})})]
                })]
            })
        })
    })
}

const iv = z2({
    reducer: {studentGrades: Ky, studentTasks: lg, login: gy, userData: w_, parentChildrenData: vy},
    middleware: e => e({serializableCheck: !1})
});
Il.createRoot(document.getElementById("root")).render(l.jsx(Ka.StrictMode, {
    children: l.jsx(Q0, {
        store: iv,
        children: l.jsx(ov, {})
    })
}));
window.ipcRenderer.on("main-process-message", (e, t) => {
    console.log(t)
});
