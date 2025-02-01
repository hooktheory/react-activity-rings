import * as Ir from "react";
import Mr from "react";
function Qr(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var Z = { exports: {} }, J = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r;
function re() {
  if (_r) return J;
  _r = 1;
  var p = Mr, b = 60103;
  if (J.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var M = Symbol.for;
    b = M("react.element"), J.Fragment = M("react.fragment");
  }
  var j = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = Object.prototype.hasOwnProperty, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(l, h, P) {
    var C, T = {}, i = null, t = null;
    P !== void 0 && (i = "" + P), h.key !== void 0 && (i = "" + h.key), h.ref !== void 0 && (t = h.ref);
    for (C in h) S.call(h, C) && !y.hasOwnProperty(C) && (T[C] = h[C]);
    if (l && l.defaultProps) for (C in h = l.defaultProps, h) T[C] === void 0 && (T[C] = h[C]);
    return { $$typeof: b, type: l, key: i, ref: t, props: T, _owner: j.current };
  }
  return J.jsx = x, J.jsxs = x, J;
}
var sr = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xr;
function ee() {
  return xr || (xr = 1, function(p) {
    process.env.NODE_ENV !== "production" && function() {
      var b = Mr, M = 60103, j = 60106;
      p.Fragment = 60107;
      var S = 60108, y = 60114, x = 60109, l = 60110, h = 60112, P = 60113, C = 60120, T = 60115, i = 60116, t = 60121, s = 60122, m = 60117, R = 60129, c = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var a = Symbol.for;
        M = a("react.element"), j = a("react.portal"), p.Fragment = a("react.fragment"), S = a("react.strict_mode"), y = a("react.profiler"), x = a("react.provider"), l = a("react.context"), h = a("react.forward_ref"), P = a("react.suspense"), C = a("react.suspense_list"), T = a("react.memo"), i = a("react.lazy"), t = a("react.block"), s = a("react.server.block"), m = a("react.fundamental"), a("react.scope"), a("react.opaque.id"), R = a("react.debug_trace_mode"), a("react.offscreen"), c = a("react.legacy_hidden");
      }
      var v = typeof Symbol == "function" && Symbol.iterator, n = "@@iterator";
      function e(r) {
        if (r === null || typeof r != "object")
          return null;
        var f = v && r[v] || r[n];
        return typeof f == "function" ? f : null;
      }
      var u = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function o(r) {
        {
          for (var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), A = 1; A < f; A++)
            g[A - 1] = arguments[A];
          d("error", r, g);
        }
      }
      function d(r, f, g) {
        {
          var A = u.ReactDebugCurrentFrame, D = "";
          if (U) {
            var k = B(U.type), L = U._owner;
            D += E(k, U._source, L && B(L.type));
          }
          D += A.getStackAddendum(), D !== "" && (f += "%s", g = g.concat([D]));
          var I = g.map(function(V) {
            return "" + V;
          });
          I.unshift("Warning: " + f), Function.prototype.apply.call(console[r], console, I);
        }
      }
      var _ = !1;
      function O(r) {
        return !!(typeof r == "string" || typeof r == "function" || r === p.Fragment || r === y || r === R || r === S || r === P || r === C || r === c || _ || typeof r == "object" && r !== null && (r.$$typeof === i || r.$$typeof === T || r.$$typeof === x || r.$$typeof === l || r.$$typeof === h || r.$$typeof === m || r.$$typeof === t || r[0] === s));
      }
      var w = /^(.*)[\\\/]/;
      function E(r, f, g) {
        var A = "";
        if (f) {
          var D = f.fileName, k = D.replace(w, "");
          if (/^index\./.test(k)) {
            var L = D.match(w);
            if (L) {
              var I = L[1];
              if (I) {
                var V = I.replace(w, "");
                k = V + "/" + k;
              }
            }
          }
          A = " (at " + k + ":" + f.lineNumber + ")";
        } else g && (A = " (created by " + g + ")");
        return `
    in ` + (r || "Unknown") + A;
      }
      var $ = 1;
      function q(r) {
        return r._status === $ ? r._result : null;
      }
      function nr(r, f, g) {
        var A = f.displayName || f.name || "";
        return r.displayName || (A !== "" ? g + "(" + A + ")" : g);
      }
      function B(r) {
        if (r == null)
          return null;
        if (typeof r.tag == "number" && o("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
        switch (r) {
          case p.Fragment:
            return "Fragment";
          case j:
            return "Portal";
          case y:
            return "Profiler";
          case S:
            return "StrictMode";
          case P:
            return "Suspense";
          case C:
            return "SuspenseList";
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case l:
              return "Context.Consumer";
            case x:
              return "Context.Provider";
            case h:
              return nr(r, r.render, "ForwardRef");
            case T:
              return B(r.type);
            case t:
              return B(r.render);
            case i: {
              var f = r, g = q(f);
              if (g)
                return B(g);
              break;
            }
          }
        return null;
      }
      var fr = {};
      u.ReactDebugCurrentFrame;
      var U = null;
      function N(r) {
        U = r;
      }
      function Dr(r, f, g, A, D) {
        {
          var k = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var L in r)
            if (k(r, L)) {
              var I = void 0;
              try {
                if (typeof r[L] != "function") {
                  var V = Error((A || "React class") + ": " + g + " type `" + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[L] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw V.name = "Invariant Violation", V;
                }
                I = r[L](f, L, A, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (W) {
                I = W;
              }
              I && !(I instanceof Error) && (N(D), o("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", g, L, typeof I), N(null)), I instanceof Error && !(I.message in fr) && (fr[I.message] = !0, N(D), o("Failed %s type: %s", g, I.message), N(null));
            }
        }
      }
      var lr = u.ReactCurrentOwner, tr = Object.prototype.hasOwnProperty, $r = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, vr, dr;
      function qr(r) {
        if (tr.call(r, "ref")) {
          var f = Object.getOwnPropertyDescriptor(r, "ref").get;
          if (f && f.isReactWarning)
            return !1;
        }
        return r.ref !== void 0;
      }
      function Yr(r) {
        if (tr.call(r, "key")) {
          var f = Object.getOwnPropertyDescriptor(r, "key").get;
          if (f && f.isReactWarning)
            return !1;
        }
        return r.key !== void 0;
      }
      function Vr(r, f) {
        typeof r.ref == "string" && lr.current;
      }
      function Br(r, f) {
        {
          var g = function() {
            vr || (vr = !0, o("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
          };
          g.isReactWarning = !0, Object.defineProperty(r, "key", {
            get: g,
            configurable: !0
          });
        }
      }
      function Wr(r, f) {
        {
          var g = function() {
            dr || (dr = !0, o("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
          };
          g.isReactWarning = !0, Object.defineProperty(r, "ref", {
            get: g,
            configurable: !0
          });
        }
      }
      var Fr = function(r, f, g, A, D, k, L) {
        var I = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: M,
          // Built-in properties that belong on the element
          type: r,
          key: f,
          ref: g,
          props: L,
          // Record the component responsible for creating this element.
          _owner: k
        };
        return I._store = {}, Object.defineProperty(I._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(I, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: A
        }), Object.defineProperty(I, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: D
        }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
      };
      function Ur(r, f, g, A, D) {
        {
          var k, L = {}, I = null, V = null;
          g !== void 0 && (I = "" + g), Yr(f) && (I = "" + f.key), qr(f) && (V = f.ref, Vr(f, D));
          for (k in f)
            tr.call(f, k) && !$r.hasOwnProperty(k) && (L[k] = f[k]);
          if (r && r.defaultProps) {
            var W = r.defaultProps;
            for (k in W)
              L[k] === void 0 && (L[k] = W[k]);
          }
          if (I || V) {
            var F = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
            I && Br(L, F), V && Wr(L, F);
          }
          return Fr(r, I, V, D, A, lr.current, L);
        }
      }
      var ar = u.ReactCurrentOwner;
      u.ReactDebugCurrentFrame;
      function H(r) {
        U = r;
      }
      var ir;
      ir = !1;
      function ur(r) {
        return typeof r == "object" && r !== null && r.$$typeof === M;
      }
      function mr() {
        {
          if (ar.current) {
            var r = B(ar.current.type);
            if (r)
              return `

Check the render method of \`` + r + "`.";
          }
          return "";
        }
      }
      function Hr(r) {
        return "";
      }
      var pr = {};
      function zr(r) {
        {
          var f = mr();
          if (!f) {
            var g = typeof r == "string" ? r : r.displayName || r.name;
            g && (f = `

Check the top-level render call using <` + g + ">.");
          }
          return f;
        }
      }
      function hr(r, f) {
        {
          if (!r._store || r._store.validated || r.key != null)
            return;
          r._store.validated = !0;
          var g = zr(f);
          if (pr[g])
            return;
          pr[g] = !0;
          var A = "";
          r && r._owner && r._owner !== ar.current && (A = " It was passed a child from " + B(r._owner.type) + "."), H(r), o('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, A), H(null);
        }
      }
      function yr(r, f) {
        {
          if (typeof r != "object")
            return;
          if (Array.isArray(r))
            for (var g = 0; g < r.length; g++) {
              var A = r[g];
              ur(A) && hr(A, f);
            }
          else if (ur(r))
            r._store && (r._store.validated = !0);
          else if (r) {
            var D = e(r);
            if (typeof D == "function" && D !== r.entries)
              for (var k = D.call(r), L; !(L = k.next()).done; )
                ur(L.value) && hr(L.value, f);
          }
        }
      }
      function Jr(r) {
        {
          var f = r.type;
          if (f == null || typeof f == "string")
            return;
          var g;
          if (typeof f == "function")
            g = f.propTypes;
          else if (typeof f == "object" && (f.$$typeof === h || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          f.$$typeof === T))
            g = f.propTypes;
          else
            return;
          if (g) {
            var A = B(f);
            Dr(g, r.props, "prop", A, r);
          } else if (f.PropTypes !== void 0 && !ir) {
            ir = !0;
            var D = B(f);
            o("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
          }
          typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && o("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Nr(r) {
        {
          for (var f = Object.keys(r.props), g = 0; g < f.length; g++) {
            var A = f[g];
            if (A !== "children" && A !== "key") {
              H(r), o("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), H(null);
              break;
            }
          }
          r.ref !== null && (H(r), o("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
        }
      }
      function gr(r, f, g, A, D, k) {
        {
          var L = O(r);
          if (!L) {
            var I = "";
            (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var V = Hr();
            V ? I += V : I += mr();
            var W;
            r === null ? W = "null" : Array.isArray(r) ? W = "array" : r !== void 0 && r.$$typeof === M ? (W = "<" + (B(r.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : W = typeof r, o("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, I);
          }
          var F = Ur(r, f, g, D, k);
          if (F == null)
            return F;
          if (L) {
            var z = f.children;
            if (z !== void 0)
              if (A)
                if (Array.isArray(z)) {
                  for (var or = 0; or < z.length; or++)
                    yr(z[or], r);
                  Object.freeze && Object.freeze(z);
                } else
                  o("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                yr(z, r);
          }
          return r === p.Fragment ? Nr(F) : Jr(F), F;
        }
      }
      function Zr(r, f, g) {
        return gr(r, f, g, !0);
      }
      function Kr(r, f, g) {
        return gr(r, f, g, !1);
      }
      var Gr = Kr, Xr = Zr;
      p.jsx = Gr, p.jsxs = Xr;
    }();
  }(sr)), sr;
}
var Rr;
function ne() {
  return Rr || (Rr = 1, process.env.NODE_ENV === "production" ? Z.exports = re() : Z.exports = ee()), Z.exports;
}
var Y = ne();
const Sr = {
  dark: {
    LegendColorPercentage: "#ffffff",
    LegendColor: "#cccccc",
    RingColors: [
      "#ef135f",
      "#c1ff00",
      "#54f0f7"
      /* Move */
    ]
  },
  light: {
    LegendColorPercentage: "#323232",
    LegendColor: "#cccccc",
    RingColors: [
      "#50eba9",
      "#FAEB3F",
      "#E02020"
      /* Red */
    ]
  }
}, te = ({ data: p, title: b, theme: M }) => {
  const j = Sr[M || "dark"], S = {
    ...K.text,
    color: j.LegendColorPercentage
  }, y = { color: j.LegendColor };
  return /* @__PURE__ */ Y.jsxs("div", { style: K.container, children: [
    /* @__PURE__ */ Y.jsx("h3", { style: S, children: b }),
    p.map((x, l) => {
      const h = x.color || j.RingColors[l], P = { ...K.bullets, backgroundColor: h };
      return /* @__PURE__ */ Y.jsxs("div", { style: K.row, children: [
        /* @__PURE__ */ Y.jsx("div", { style: P }),
        x.label && /* @__PURE__ */ Y.jsxs("p", { style: S, children: [
          `${Math.round(x.value * 100)}% `,
          /* @__PURE__ */ Y.jsx("span", { style: y, children: x.label })
        ] })
      ] }, `l_${l}`);
    })
  ] });
}, K = {
  container: {
    marginLeft: 10
  },
  row: {
    display: "flex",
    alignItems: "center"
  },
  bullets: {
    width: 16,
    height: 16,
    borderRadius: 8
  },
  text: {
    padding: 7,
    margin: 0
  }
}, ae = Ir.memo(te), Er = ({ size: p, pie: b, data: M, theme: j, opacity: S }) => {
  const y = S ? "33" : "";
  return /* @__PURE__ */ Y.jsx("g", { children: b.map((x, l) => {
    const h = M[l], C = S && h.backgroundColor || h.color || j.RingColors[l];
    return h.value > 0 && h.value <= 1 ? /* @__PURE__ */ Y.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: x.curves[0].sector.path.print(),
        stroke: `${C}${y}`,
        strokeWidth: p
      },
      `r_${l}`
    ) : null;
  }) });
};
var G = { exports: {} }, X = { exports: {} }, Pr;
function ie() {
  return Pr || (Pr = 1, function(p, b) {
    Object.defineProperty(b, "__esModule", {
      value: !0
    });
    var M = /* @__PURE__ */ function() {
      function S(y, x) {
        var l = [], h = !0, P = !1, C = void 0;
        try {
          for (var T = y[Symbol.iterator](), i; !(h = (i = T.next()).done) && (l.push(i.value), !(x && l.length === x)); h = !0)
            ;
        } catch (t) {
          P = !0, C = t;
        } finally {
          try {
            !h && T.return && T.return();
          } finally {
            if (P) throw C;
          }
        }
        return l;
      }
      return function(y, x) {
        if (Array.isArray(y))
          return y;
        if (Symbol.iterator in Object(y))
          return S(y, x);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), j = function S(y, x) {
      var l = M(y, 2), h = l[0], P = l[1], C = M(x, 2), T = C[0], i = C[1], t = function(m) {
        return T + (i - T) * (m - h) / (P - h);
      };
      return t.inverse = function() {
        return S([T, i], [h, P]);
      }, t;
    };
    b.default = j, p.exports = b.default;
  }(X, X.exports)), X.exports;
}
var Q = { exports: {} }, rr = { exports: {} }, er = { exports: {} }, Cr;
function ue() {
  return Cr || (Cr = 1, function(p, b) {
    Object.defineProperty(b, "__esModule", {
      value: !0
    });
    var M = /* @__PURE__ */ function() {
      function T(i, t) {
        var s = [], m = !0, R = !1, c = void 0;
        try {
          for (var a = i[Symbol.iterator](), v; !(m = (v = a.next()).done) && (s.push(v.value), !(t && s.length === t)); m = !0)
            ;
        } catch (n) {
          R = !0, c = n;
        } finally {
          try {
            !m && a.return && a.return();
          } finally {
            if (R) throw c;
          }
        }
        return s;
      }
      return function(i, t) {
        if (Array.isArray(i))
          return i;
        if (Symbol.iterator in Object(i))
          return T(i, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), j = function(i) {
      return i * i;
    }, S = function(i, t) {
      var s = M(i, 2), m = s[0], R = s[1], c = M(t, 2), a = c[0], v = c[1];
      return Math.sqrt(j(m - a) + j(R - v));
    }, y = function(i, t) {
      var s = S(i, t);
      return s == 0 ? 1 / 0 : j(s) / (2 * Math.abs(i[1] - t[1]));
    }, x = function(i, t, s) {
      var m = (i[0] - s[0]) * (t[1] - s[1]) - (t[0] - s[0]) * (i[1] - s[1]);
      if (m == 0) return [1 / 0, 1 / 0];
      var R = (((i[0] - s[0]) * (i[0] + s[0]) + (i[1] - s[1]) * (i[1] + s[1])) / 2 * (t[1] - s[1]) - ((t[0] - s[0]) * (t[0] + s[0]) + (t[1] - s[1]) * (t[1] + s[1])) / 2 * (i[1] - s[1])) / m, c = (((t[0] - s[0]) * (t[0] + s[0]) + (t[1] - s[1]) * (t[1] + s[1])) / 2 * (i[0] - s[0]) - ((i[0] - s[0]) * (i[0] + s[0]) + (i[1] - s[1]) * (i[1] + s[1])) / 2 * (t[0] - s[0])) / m;
      return [R, c];
    }, l = function(i, t, s) {
      if (i[1] === t[1]) return [(i[0] + t[0]) / 2, (i[0] + t[0]) / 2];
      var m = (i[1] * t[0] - i[0] * t[1] + i[0] * s - t[0] * s + Math.sqrt((i[0] * i[0] + i[1] * i[1] - 2 * i[0] * t[0] + t[0] * t[0] - 2 * i[1] * t[1] + t[1] * t[1]) * (i[1] * t[1] - i[1] * s - t[1] * s + s * s))) / (i[1] - t[1]), R = (i[1] * t[0] - i[0] * t[1] + i[0] * s - t[0] * s - Math.sqrt((i[0] * i[0] + i[1] * i[1] - 2 * i[0] * t[0] + t[0] * t[0] - 2 * i[1] * t[1] + t[1] * t[1]) * (i[1] * t[1] - i[1] * s - t[1] * s + s * s))) / (i[1] - t[1]);
      return m < R ? [m, R] : [R, m];
    }, h = function(i, t) {
      var s = arguments.length <= 2 || arguments[2] === void 0 ? 1e-10 : arguments[2], m = t.ps[0] - i.ps[0], R = t.ps[1] - i.ps[1];
      if (i.m == 1 / 0) return i.hp * (t.m * m - R) <= s && t.vec[0] * m <= s;
      if (t.m == 1 / 0) return t.hp * (i.m * m - R) >= -s && i.vec[0] * m >= -s;
      var c = t.vec[0] * i.vec[1] - t.vec[1] * i.vec[0];
      if (c === 0) return !1;
      var a = (R * t.vec[0] - m * t.vec[1]) / c, v = (R * i.vec[0] - m * i.vec[1]) / c;
      return a >= -s && v >= s || a >= s && v >= -s;
    }, P = function(i, t) {
      return i.map(function(s) {
        return {
          x: s.x * t[0] + s.y * t[2] + t[4],
          y: s.x * t[1] + s.y * t[3] + t[5]
        };
      });
    }, C = function(i, t, s, m) {
      var R = Math.PI / 180, c = 1e-10, a = Math.cos(s * R), v = Math.sin(s * R), n = [i * (m[0] * a + m[2] * v), i * (m[1] * a + m[3] * v), t * (-m[0] * v + m[2] * a), t * (-m[1] * v + m[3] * a)], e = n[0] * n[0] + n[2] * n[2], u = n[1] * n[1] + n[3] * n[3], o = ((n[0] - n[3]) * (n[0] - n[3]) + (n[2] + n[1]) * (n[2] + n[1])) * ((n[0] + n[3]) * (n[0] + n[3]) + (n[2] - n[1]) * (n[2] - n[1])), d = (e + u) / 2;
      if (o < c * d)
        return {
          rx: Math.sqrt(d),
          ry: Math.sqrt(d),
          ax: 0,
          isDegenerate: !1
        };
      var _ = n[0] * n[1] + n[2] * n[3];
      o = Math.sqrt(o);
      var O = d + o / 2, w = d - o / 2, E = void 0, $ = void 0, q = void 0;
      return E = Math.abs(_) < c && Math.abs(O - u) < c ? 90 : Math.atan(Math.abs(_) > Math.abs(O - u) ? (O - e) / _ : _ / (O - u)) * 180 / Math.PI, E >= 0 ? ($ = Math.sqrt(O), q = Math.sqrt(w)) : (E += 90, $ = Math.sqrt(w), q = Math.sqrt(O)), {
        rx: $,
        ry: q,
        ax: E,
        isDegenerate: $ < c * q || q < c * $
      };
    };
    b.default = {
      distPointToPoint: S,
      distPointToParabol: y,
      circumCenter: x,
      parabolsCrossX: l,
      doHalflinesCross: h,
      matrixTransform: P,
      transformEllipse: C
    }, p.exports = b.default;
  }(er, er.exports)), er.exports;
}
var Tr;
function oe() {
  return Tr || (Tr = 1, function(p, b) {
    Object.defineProperty(b, "__esModule", {
      value: !0
    });
    var M = /* @__PURE__ */ function() {
      function y(x, l) {
        var h = [], P = !0, C = !1, T = void 0;
        try {
          for (var i = x[Symbol.iterator](), t; !(P = (t = i.next()).done) && (h.push(t.value), !(l && h.length === l)); P = !0)
            ;
        } catch (s) {
          C = !0, T = s;
        } finally {
          try {
            !P && i.return && i.return();
          } finally {
            if (C) throw T;
          }
        }
        return h;
      }
      return function(x, l) {
        if (Array.isArray(x))
          return x;
        if (Symbol.iterator in Object(x))
          return y(x, l);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), j = ue(), S = function y(x) {
      var l = x || [], h = function(a, v) {
        var n = a.slice(0, a.length);
        return n.push(v), n;
      }, P = function(a, v) {
        var n = M(a, 2), e = n[0], u = n[1], o = M(v, 2), d = o[0], _ = o[1];
        return e === d && u === _;
      }, C = function(a, v) {
        for (var n = a.length; a.charAt(n - 1) === "0"; )
          n = n - 1;
        return a.charAt(n - 1) === "." && (n = n - 1), a.substr(0, n);
      }, T = function(a, v) {
        var n = a.toFixed(v);
        return C(n);
      }, i = function(a) {
        var v = a.command, n = a.params, e = n.map(function(u) {
          return T(u, 6);
        });
        return v + " " + e.join(" ");
      }, t = function(a, v) {
        var n = a.command, e = a.params;
        switch (n) {
          case "M":
            return [e[0], e[1]];
          case "L":
            return [e[0], e[1]];
          case "H":
            return [e[0], v[1]];
          case "V":
            return [v[0], e[0]];
          case "Z":
            return null;
          case "C":
            return [e[4], e[5]];
          case "S":
            return [e[2], e[3]];
          case "Q":
            return [e[2], e[3]];
          case "T":
            return [e[0], e[1]];
          case "A":
            return [e[5], e[6]];
        }
      }, s = function(a, v, n) {
        var e = a.params, u = {
          V: function(d, _, O) {
            var w = [{ x: O[0], y: e[0] }], E = (0, j.matrixTransform)(w, _);
            return E[0].x === (0, j.matrixTransform)([{ x: O[0], y: O[1] }], _)[0].x ? {
              command: "V",
              params: [E[0].y]
            } : {
              command: "L",
              params: [E[0].x, E[0].y]
            };
          },
          H: function(d, _, O) {
            var w = [{ x: e[0], y: O[1] }], E = (0, j.matrixTransform)(w, _);
            return E[0].y === (0, j.matrixTransform)([{ x: O[0], y: O[1] }], _)[0].y ? {
              command: "H",
              params: [E[0].x]
            } : {
              command: "L",
              params: [E[0].x, E[0].y]
            };
          },
          A: function(d, _, O) {
            var w = (0, j.transformEllipse)(e[0], e[1], e[2], _), E = e[4];
            _[0] * _[3] - _[1] * _[2] < 0 && (E = E ? "0" : "1");
            var $ = [{ x: e[5], y: e[6] }], q = (0, j.matrixTransform)($, _);
            return w.isDegenerate ? {
              command: "L",
              params: [q[0].x, q[0].y]
            } : {
              command: "A",
              params: [w.rx, w.ry, w.ax, e[3], E, q[0].x, q[0].y]
            };
          },
          C: function(d, _, O) {
            var w = [{ x: e[0], y: e[1] }, { x: e[2], y: e[3] }, { x: e[4], y: e[5] }], E = (0, j.matrixTransform)(w, _);
            return {
              command: "C",
              params: [E[0].x, E[0].y, E[1].x, E[1].y, E[2].x, E[2].y]
            };
          },
          Z: function(d, _, O) {
            return {
              command: "Z",
              params: []
            };
          },
          default: function(d, _, O) {
            var w = [{ x: e[0], y: e[1] }], E = (0, j.matrixTransform)(w, _), $ = d.params.slice(0, d.params.length);
            return $.splice(0, 2, E[0].x, E[0].y), {
              command: d.command,
              params: $
            };
          }
        };
        return u[a.command] ? u[a.command](a, v, n) : u.default(a, v, n);
      }, m = function(a, v) {
        return function(n) {
          var e = typeof n == "object" ? a.map(function(u) {
            return n[u];
          }) : arguments;
          return v.apply(null, e);
        };
      }, R = function(a) {
        return y(h(l, a));
      };
      return {
        moveto: m(["x", "y"], function(c, a) {
          return R({
            command: "M",
            params: [c, a]
          });
        }),
        lineto: m(["x", "y"], function(c, a) {
          return R({
            command: "L",
            params: [c, a]
          });
        }),
        hlineto: m(["x"], function(c) {
          return R({
            command: "H",
            params: [c]
          });
        }),
        vlineto: m(["y"], function(c) {
          return R({
            command: "V",
            params: [c]
          });
        }),
        closepath: function() {
          return R({
            command: "Z",
            params: []
          });
        },
        curveto: m(["x1", "y1", "x2", "y2", "x", "y"], function(c, a, v, n, e, u) {
          return R({
            command: "C",
            params: [c, a, v, n, e, u]
          });
        }),
        smoothcurveto: m(["x2", "y2", "x", "y"], function(c, a, v, n) {
          return R({
            command: "S",
            params: [c, a, v, n]
          });
        }),
        qcurveto: m(["x1", "y1", "x", "y"], function(c, a, v, n) {
          return R({
            command: "Q",
            params: [c, a, v, n]
          });
        }),
        smoothqcurveto: m(["x", "y"], function(c, a) {
          return R({
            command: "T",
            params: [c, a]
          });
        }),
        arc: m(["rx", "ry", "xrot", "largeArcFlag", "sweepFlag", "x", "y"], function(c, a, v, n, e, u, o) {
          return R({
            command: "A",
            params: [c, a, v, n, e, u, o]
          });
        }),
        translate: m(["dx", "dy"], function() {
          var c = arguments.length <= 0 || arguments[0] === void 0 ? 0 : arguments[0], a = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1];
          if (c !== 0 || a !== 0) {
            var v = function() {
              var n = [0, 0], e = [1, 0, 0, 1, c, a], u = l.map(function(o) {
                var d = s(o, e, n);
                return n = t(o, n), d;
              });
              return {
                v: y(u)
              };
            }();
            if (typeof v == "object") return v.v;
          } else
            return y(l);
        }),
        rotate: m(["angle", "rx", "ry"], function(c) {
          var a = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1], v = arguments.length <= 2 || arguments[2] === void 0 ? 0 : arguments[2];
          if (c !== 0) {
            var n = function() {
              var e = void 0, u = void 0, o = l;
              a !== 0 && v !== 0 && (e = [0, 0], u = [1, 0, 0, 1, -a, -v], o = o.map(function(w) {
                var E = s(w, u, e);
                return e = t(w, e), E;
              }));
              var d = c * Math.PI / 180, _ = Math.cos(d), O = Math.sin(d);
              return e = [0, 0], u = [_, O, -O, _, 0, 0], o = o.map(function(w) {
                var E = s(w, u, e);
                return e = t(w, e), E;
              }), a !== 0 && v !== 0 && (e = [0, 0], u = [1, 0, 0, 1, a, v], o = o.map(function(w) {
                var E = s(w, u, e);
                return e = t(w, e), E;
              })), {
                v: y(o)
              };
            }();
            if (typeof n == "object") return n.v;
          } else
            return y(l);
        }),
        scale: m(["sx", "sy"], function() {
          var c = arguments.length <= 0 || arguments[0] === void 0 ? 1 : arguments[0], a = arguments.length <= 1 || arguments[1] === void 0 ? c : arguments[1];
          return function() {
            if (c !== 1 || a !== 1) {
              var v = function() {
                var n = [0, 0], e = [c, 0, 0, a, 0, 0], u = l.map(function(o) {
                  var d = s(o, e, n);
                  return n = t(o, n), d;
                });
                return {
                  v: y(u)
                };
              }();
              if (typeof v == "object") return v.v;
            } else
              return y(l);
          }();
        }),
        shearX: m(["angle"], function() {
          var c = arguments.length <= 0 || arguments[0] === void 0 ? 0 : arguments[0];
          if (c !== 0) {
            var a = function() {
              var v = [0, 0], n = [1, 0, Math.tan(c * Math.PI / 180), 1, 0, 0], e = l.map(function(u) {
                var o = s(u, n, v);
                return v = t(u, v), o;
              });
              return {
                v: y(e)
              };
            }();
            if (typeof a == "object") return a.v;
          } else
            return y(l);
        }),
        shearY: m(["angle"], function() {
          var c = arguments.length <= 0 || arguments[0] === void 0 ? 0 : arguments[0];
          if (c !== 0) {
            var a = function() {
              var v = [0, 0], n = [1, Math.tan(c * Math.PI / 180), 0, 1, 0, 0], e = l.map(function(u) {
                var o = s(u, n, v);
                return v = t(u, v), o;
              });
              return {
                v: y(e)
              };
            }();
            if (typeof a == "object") return a.v;
          } else
            return y(l);
        }),
        print: function() {
          return l.map(i).join(" ");
        },
        toString: function() {
          return (void 0).print();
        },
        points: function() {
          var a = [], v = [0, 0], n = !0, e = !1, u = void 0;
          try {
            for (var o = l[Symbol.iterator](), d; !(n = (d = o.next()).done); n = !0) {
              var _ = d.value, O = t(_, v);
              v = O, O && a.push(O);
            }
          } catch (w) {
            e = !0, u = w;
          } finally {
            try {
              !n && o.return && o.return();
            } finally {
              if (e)
                throw u;
            }
          }
          return a;
        },
        instructions: function() {
          return l.slice(0, l.length);
        },
        connect: function(a) {
          var v = this.points(), n = v[v.length - 1], e = a.points()[0], u = void 0;
          return l[l.length - 1].command !== "Z" ? (u = a.instructions().slice(1), P(n, e) || u.unshift({
            command: "L",
            params: e
          })) : u = a.instructions(), y(this.instructions().concat(u));
        }
      };
    };
    b.default = function() {
      return S();
    }, p.exports = b.default;
  }(rr, rr.exports)), rr.exports;
}
var cr = {}, wr;
function Lr() {
  return wr || (wr = 1, function(p) {
    Object.defineProperty(p, "__esModule", {
      value: !0
    });
    var b = /* @__PURE__ */ function() {
      function n(e, u) {
        var o = [], d = !0, _ = !1, O = void 0;
        try {
          for (var w = e[Symbol.iterator](), E; !(d = (E = w.next()).done) && (o.push(E.value), !(u && o.length === u)); d = !0)
            ;
        } catch ($) {
          _ = !0, O = $;
        } finally {
          try {
            !d && w.return && w.return();
          } finally {
            if (_) throw O;
          }
        }
        return o;
      }
      return function(e, u) {
        if (Array.isArray(e))
          return e;
        if (Symbol.iterator in Object(e))
          return n(e, u);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), M = function(e) {
      return e.reduce(function(u, o) {
        return u + o;
      }, 0);
    }, j = function(e) {
      return e.reduce(function(u, o) {
        return Math.min(u, o);
      });
    }, S = function(e) {
      return e.reduce(function(u, o) {
        return Math.max(u, o);
      });
    }, y = function(e, u) {
      return e.reduce(function(o, d) {
        return o + u(d);
      }, 0);
    }, x = function(e, u) {
      return e.reduce(function(o, d) {
        return Math.min(o, u(d));
      }, 1 / 0);
    }, l = function(e, u) {
      return e.reduce(function(o, d) {
        return Math.max(o, u(d));
      }, -1 / 0);
    }, h = function(e, u) {
      var o = b(e, 2), d = o[0], _ = o[1], O = b(u, 2), w = O[0], E = O[1];
      return [d + w, _ + E];
    }, P = function(e, u) {
      var o = b(e, 2), d = o[0], _ = o[1], O = b(u, 2), w = O[0], E = O[1];
      return [d - w, _ - E];
    }, C = function(e, u) {
      var o = b(u, 2), d = o[0], _ = o[1];
      return [e * d, e * _];
    }, T = function(e) {
      var u = b(e, 2), o = u[0], d = u[1];
      return Math.sqrt(o * o + d * d);
    }, i = function(e) {
      return e.reduce(h, [0, 0]);
    }, t = function(e) {
      return C(1 / e.length, e.reduce(h));
    }, s = function(e, u) {
      return C(e, [Math.sin(u), -Math.cos(u)]);
    }, m = function(e, u) {
      var o = e || {};
      for (var d in o) {
        var _ = o[d];
        u[d] = _(u.index, u.item, u.group);
      }
      return u;
    }, R = function(e, u, o) {
      for (var d = [], _ = e; _ < u; _++)
        d.push(_);
      return o && d.push(u), d;
    }, c = function(e, u) {
      var o = [], d = !0, _ = !1, O = void 0;
      try {
        for (var w = Object.keys(e)[Symbol.iterator](), E; !(d = (E = w.next()).done); d = !0) {
          var $ = E.value, q = e[$];
          o.push(u($, q));
        }
      } catch (nr) {
        _ = !0, O = nr;
      } finally {
        try {
          !d && w.return && w.return();
        } finally {
          if (_)
            throw O;
        }
      }
      return o;
    }, a = function(e) {
      return c(e, function(u, o) {
        return [u, o];
      });
    }, v = function(e) {
      return e;
    };
    p.sum = M, p.min = j, p.max = S, p.sumBy = y, p.minBy = x, p.maxBy = l, p.plus = h, p.minus = P, p.times = C, p.id = v, p.length = T, p.sumVectors = i, p.average = t, p.onCircle = s, p.enhance = m, p.range = R, p.mapObject = c, p.pairs = a, p.default = {
      sum: M,
      min: j,
      max: S,
      sumBy: y,
      minBy: x,
      maxBy: l,
      plus: h,
      minus: P,
      times: C,
      id: v,
      length: T,
      sumVectors: i,
      average: t,
      onCircle: s,
      enhance: m,
      range: R,
      mapObject: c,
      pairs: a
    };
  }(cr)), cr;
}
var Or;
function se() {
  return Or || (Or = 1, function(p, b) {
    Object.defineProperty(b, "__esModule", {
      value: !0
    });
    function M(l) {
      return l && l.__esModule ? l : { default: l };
    }
    function j(l) {
      if (Array.isArray(l)) {
        for (var h = 0, P = Array(l.length); h < l.length; h++) P[h] = l[h];
        return P;
      } else
        return Array.from(l);
    }
    var S = oe(), y = M(S), x = Lr();
    b.default = function(l) {
      var h, P, C, T, i = l.center, t = l.r, s = l.R, m = l.start, R = l.end, c = 1e-4;
      Math.abs(R - 2 * Math.PI) < c && (R = 2 * Math.PI - c);
      var a = (0, x.plus)(i, (0, x.onCircle)(s, m)), v = (0, x.plus)(i, (0, x.onCircle)(s, R)), n = (0, x.plus)(i, (0, x.onCircle)(t, R)), e = (0, x.plus)(i, (0, x.onCircle)(t, m)), u = R - m > Math.PI ? 1 : 0, o = (h = (P = (C = (T = (0, y.default)()).moveto.apply(T, j(a))).arc.apply(C, [s, s, 0, u, 1].concat(j(v)))).lineto.apply(P, j(n))).arc.apply(h, [t, t, 0, u, 0].concat(j(e))).closepath(), d = (m + R) / 2, _ = (t + s) / 2, O = (0, x.plus)(i, (0, x.onCircle)(_, d));
      return {
        path: o,
        centroid: O
      };
    }, p.exports = b.default;
  }(Q, Q.exports)), Q.exports;
}
var jr;
function ce() {
  return jr || (jr = 1, function(p, b) {
    Object.defineProperty(b, "__esModule", {
      value: !0
    });
    var M = /* @__PURE__ */ function() {
      function P(C, T) {
        var i = [], t = !0, s = !1, m = void 0;
        try {
          for (var R = C[Symbol.iterator](), c; !(t = (c = R.next()).done) && (i.push(c.value), !(T && i.length === T)); t = !0)
            ;
        } catch (a) {
          s = !0, m = a;
        } finally {
          try {
            !t && R.return && R.return();
          } finally {
            if (s) throw m;
          }
        }
        return i;
      }
      return function(C, T) {
        if (Array.isArray(C))
          return C;
        if (Symbol.iterator in Object(C))
          return P(C, T);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }();
    function j(P) {
      return P && P.__esModule ? P : { default: P };
    }
    var S = ie(), y = j(S), x = se(), l = j(x), h = Lr();
    b.default = function(P) {
      var C = P.data, T = P.accessor, i = P.center, t = P.r, s = P.R, m = P.compute, R = C.map(T), c = (0, h.sum)(R);
      c = c === 0 ? 1 : c;
      var a = (0, y.default)([0, c], [0, 2 * Math.PI]), v = [], n = 0, e = !0, u = !1, o = void 0;
      try {
        for (var d = C.entries()[Symbol.iterator](), _; !(e = (_ = d.next()).done); e = !0) {
          var O = M(_.value, 2), w = O[0], E = O[1], $ = R[w];
          v.push((0, h.enhance)(m, {
            item: E,
            index: w,
            sector: (0, l.default)({
              center: i,
              r: t,
              R: s,
              start: a(n),
              end: a(n + $)
            })
          })), n += $;
        }
      } catch (q) {
        u = !0, o = q;
      } finally {
        try {
          !e && d.return && d.return();
        } finally {
          if (u)
            throw o;
        }
      }
      return { curves: v };
    }, p.exports = b.default;
  }(G, G.exports)), G.exports;
}
var fe = ce();
const le = /* @__PURE__ */ Qr(fe), br = {
  create: (p, b, M, j) => p.map((S, y) => {
    const x = j || [S.value, 1 - S.value], l = (b / 2 - M) / p.length * (p.length - y - 1) + M;
    return le({
      r: l,
      R: l,
      data: x,
      center: [0, 0],
      accessor(h) {
        return h;
      }
    });
  })
}, ve = {
  width: 150,
  height: 150,
  ringSize: 14,
  radius: 32
}, kr = ({
  data: p,
  config: b,
  theme: M,
  legend: j,
  legendTitle: S
}) => {
  const y = { ...ve, ...b }, x = br.create(p, y.height, y.radius, [
    0.999,
    1e-3
  ]), l = br.create(p, y.height, y.radius), h = Sr[M || "dark"];
  return /* @__PURE__ */ Y.jsxs("div", { style: Ar.layout, children: [
    /* @__PURE__ */ Y.jsx(
      "div",
      {
        style: { ...Ar.container, width: y.width, height: y.height },
        children: /* @__PURE__ */ Y.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: y.width,
            height: y.height,
            children: /* @__PURE__ */ Y.jsxs("g", { transform: `translate(${y.width / 2},${y.height / 2})`, children: [
              /* @__PURE__ */ Y.jsx(
                Er,
                {
                  size: y.ringSize,
                  pie: x,
                  data: p,
                  theme: h,
                  opacity: !0
                }
              ),
              /* @__PURE__ */ Y.jsx(
                Er,
                {
                  size: y.ringSize,
                  pie: l,
                  data: p,
                  theme: h,
                  opacity: !1
                }
              )
            ] })
          }
        )
      }
    ),
    j && /* @__PURE__ */ Y.jsx(ae, { title: S, data: p, theme: M })
  ] });
};
kr.defaultProps = {
  data: [],
  theme: "dark",
  legend: !1
};
const Ar = {
  layout: {
    display: "flex",
    alignItems: "center"
  },
  container: {
    display: "flex"
  }
}, me = Ir.memo(kr);
export {
  me as default
};
