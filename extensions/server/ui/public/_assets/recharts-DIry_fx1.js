import * as g from "react";
import Ql, { isValidElement as jt, forwardRef as _e, createContext as Ve, useContext as ft, useMemo as wt, useState as Fe, useCallback as re, useRef as H, useImperativeHandle as zp, useEffect as Te, PureComponent as Bp, useLayoutEffect as $e, cloneElement as Oa, createElement as Fp, Children as Lb, memo as qp } from "react";
import { createPortal as Wp } from "react-dom";
function Kp(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Kp(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Z() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Kp(e)) && (n && (n += " "), n += t);
  return n;
}
var zb = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function Jl(e) {
  if (typeof e != "string")
    return !1;
  var t = zb;
  return t.includes(e);
}
var Bb = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it, and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], Fb = new Set(Bb);
function Up(e) {
  return typeof e != "string" ? !1 : Fb.has(e);
}
function Hp(e) {
  return typeof e == "string" && e.startsWith("data-");
}
function gt(e) {
  if (typeof e != "object" || e === null)
    return {};
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (Up(r) || Hp(r)) && (t[r] = e[r]);
  return t;
}
function _n(e) {
  if (e == null)
    return null;
  if (/* @__PURE__ */ jt(e) && typeof e.props == "object" && e.props !== null) {
    var t = e.props;
    return gt(t);
  }
  return typeof e == "object" && !Array.isArray(e) ? gt(e) : null;
}
function lt(e) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (Up(r) || Hp(r) || Jl(r)) && (t[r] = e[r]);
  return t;
}
var qb = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Ju() {
  return Ju = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ju.apply(null, arguments);
}
function Wb(e, t) {
  if (e == null) return {};
  var r, n, i = Kb(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Kb(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Yp = /* @__PURE__ */ _e((e, t) => {
  var {
    children: r,
    width: n,
    height: i,
    viewBox: a,
    className: o,
    style: u,
    title: l,
    desc: c
  } = e, s = Wb(e, qb), f = a || {
    width: n,
    height: i,
    x: 0,
    y: 0
  }, d = Z("recharts-surface", o);
  return /* @__PURE__ */ g.createElement("svg", Ju({}, lt(s), {
    className: d,
    width: n,
    height: i,
    style: u,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height),
    ref: t
  }), /* @__PURE__ */ g.createElement("title", null, l), /* @__PURE__ */ g.createElement("desc", null, c), r);
}), Ub = ["children", "className"];
function el() {
  return el = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, el.apply(null, arguments);
}
function Hb(e, t) {
  if (e == null) return {};
  var r, n, i = Yb(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Yb(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var qe = /* @__PURE__ */ g.forwardRef((e, t) => {
  var {
    children: r,
    className: n
  } = e, i = Hb(e, Ub), a = Z("recharts-layer", n);
  return /* @__PURE__ */ g.createElement("g", el({
    className: a
  }, lt(i), {
    ref: t
  }), r);
}), Gb = /* @__PURE__ */ Ve(null);
function te(e) {
  return function() {
    return e;
  };
}
const Gp = Math.cos, Ii = Math.sin, xt = Math.sqrt, Ci = Math.PI, Aa = 2 * Ci, tl = Math.PI, rl = 2 * tl, pr = 1e-6, Vb = rl - pr;
function Vp(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Xb(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Vp;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class Zb {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Vp : Xb(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, u = this._y1, l = n - t, c = i - r, s = o - t, f = u - r, d = s * s + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > pr) if (!(Math.abs(f * l - c * s) > pr) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let v = n - o, p = i - u, h = l * l + c * c, m = v * v + p * p, y = Math.sqrt(h), b = Math.sqrt(d), w = a * Math.tan((tl - Math.acos((h + d - m) / (2 * y * b))) / 2), x = w / b, O = w / y;
      Math.abs(x - 1) > pr && this._append`L${t + x * s},${r + x * f}`, this._append`A${a},${a},0,0,${+(f * v > s * p)},${this._x1 = t + O * l},${this._y1 = r + O * c}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), l = n * Math.sin(i), c = t + u, s = r + l, f = 1 ^ o, d = o ? i - a : a - i;
    this._x1 === null ? this._append`M${c},${s}` : (Math.abs(this._x1 - c) > pr || Math.abs(this._y1 - s) > pr) && this._append`L${c},${s}`, n && (d < 0 && (d = d % rl + rl), d > Vb ? this._append`A${n},${n},0,1,${f},${t - u},${r - l}A${n},${n},0,1,${f},${this._x1 = c},${this._y1 = s}` : d > pr && this._append`A${n},${n},0,${+(d >= tl)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function ec(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new Zb(t);
}
function tc(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Xp(e) {
  this._context = e;
}
Xp.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Sa(e) {
  return new Xp(e);
}
function Zp(e) {
  return e[0];
}
function Qp(e) {
  return e[1];
}
function Jp(e, t) {
  var r = te(!0), n = null, i = Sa, a = null, o = ec(u);
  e = typeof e == "function" ? e : e === void 0 ? Zp : te(e), t = typeof t == "function" ? t : t === void 0 ? Qp : te(t);
  function u(l) {
    var c, s = (l = tc(l)).length, f, d = !1, v;
    for (n == null && (a = i(v = o())), c = 0; c <= s; ++c)
      !(c < s && r(f = l[c], c, l)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(f, c, l), +t(f, c, l));
    if (v) return a = null, v + "" || null;
  }
  return u.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : te(+l), u) : e;
  }, u.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : te(+l), u) : t;
  }, u.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : te(!!l), u) : r;
  }, u.curve = function(l) {
    return arguments.length ? (i = l, n != null && (a = i(n)), u) : i;
  }, u.context = function(l) {
    return arguments.length ? (l == null ? n = a = null : a = i(n = l), u) : n;
  }, u;
}
function oi(e, t, r) {
  var n = null, i = te(!0), a = null, o = Sa, u = null, l = ec(c);
  e = typeof e == "function" ? e : e === void 0 ? Zp : te(+e), t = typeof t == "function" ? t : te(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Qp : te(+r);
  function c(f) {
    var d, v, p, h = (f = tc(f)).length, m, y = !1, b, w = new Array(h), x = new Array(h);
    for (a == null && (u = o(b = l())), d = 0; d <= h; ++d) {
      if (!(d < h && i(m = f[d], d, f)) === y)
        if (y = !y)
          v = d, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), p = d - 1; p >= v; --p)
            u.point(w[p], x[p]);
          u.lineEnd(), u.areaEnd();
        }
      y && (w[d] = +e(m, d, f), x[d] = +t(m, d, f), u.point(n ? +n(m, d, f) : w[d], r ? +r(m, d, f) : x[d]));
    }
    if (b) return u = null, b + "" || null;
  }
  function s() {
    return Jp().defined(i).curve(o).context(a);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : te(+f), n = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : te(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : te(+f), c) : n;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : te(+f), r = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : te(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : te(+f), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return s().x(e).y(t);
  }, c.lineY1 = function() {
    return s().x(e).y(r);
  }, c.lineX1 = function() {
    return s().x(n).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : te(!!f), c) : i;
  }, c.curve = function(f) {
    return arguments.length ? (o = f, a != null && (u = o(a)), c) : o;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? a = u = null : u = o(a = f), c) : a;
  }, c;
}
class em {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function Qb(e) {
  return new em(e, !0);
}
function Jb(e) {
  return new em(e, !1);
}
const rc = {
  draw(e, t) {
    const r = xt(t / Ci);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Aa);
  }
}, ew = {
  draw(e, t) {
    const r = xt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, tm = xt(1 / 3), tw = tm * 2, rw = {
  draw(e, t) {
    const r = xt(t / tw), n = r * tm;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, nw = {
  draw(e, t) {
    const r = xt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, iw = 0.8908130915292852, rm = Ii(Ci / 10) / Ii(7 * Ci / 10), aw = Ii(Aa / 10) * rm, ow = -Gp(Aa / 10) * rm, uw = {
  draw(e, t) {
    const r = xt(t * iw), n = aw * r, i = ow * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = Aa * a / 5, u = Gp(o), l = Ii(o);
      e.lineTo(l * r, -u * r), e.lineTo(u * n - l * i, l * n + u * i);
    }
    e.closePath();
  }
}, xo = xt(3), lw = {
  draw(e, t) {
    const r = -xt(t / (xo * 3));
    e.moveTo(0, r * 2), e.lineTo(-xo * r, -r), e.lineTo(xo * r, -r), e.closePath();
  }
}, it = -0.5, at = xt(3) / 2, nl = 1 / xt(12), cw = (nl / 2 + 1) * 3, sw = {
  draw(e, t) {
    const r = xt(t / cw), n = r / 2, i = r * nl, a = n, o = r * nl + r, u = -a, l = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(u, l), e.lineTo(it * n - at * i, at * n + it * i), e.lineTo(it * a - at * o, at * a + it * o), e.lineTo(it * u - at * l, at * u + it * l), e.lineTo(it * n + at * i, it * i - at * n), e.lineTo(it * a + at * o, it * o - at * a), e.lineTo(it * u + at * l, it * l - at * u), e.closePath();
  }
};
function fw(e, t) {
  let r = null, n = ec(i);
  e = typeof e == "function" ? e : te(e || rc), t = typeof t == "function" ? t : te(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : te(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : te(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function ki() {
}
function Ti(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function nm(e) {
  this._context = e;
}
nm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Ti(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        Ti(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function dw(e) {
  return new nm(e);
}
function im(e) {
  this._context = e;
}
im.prototype = {
  areaStart: ki,
  areaEnd: ki,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Ti(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function vw(e) {
  return new im(e);
}
function am(e) {
  this._context = e;
}
am.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Ti(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function hw(e) {
  return new am(e);
}
function om(e) {
  this._context = e;
}
om.prototype = {
  areaStart: ki,
  areaEnd: ki,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function pw(e) {
  return new om(e);
}
function Us(e) {
  return e < 0 ? -1 : 1;
}
function Hs(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), u = (a * i + o * n) / (n + i);
  return (Us(a) + Us(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function Ys(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Po(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function Mi(e) {
  this._context = e;
}
Mi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Po(this, this._t0, Ys(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Po(this, Ys(this, r = Hs(this, e, t)), r);
          break;
        default:
          Po(this, this._t0, r = Hs(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function um(e) {
  this._context = new lm(e);
}
(um.prototype = Object.create(Mi.prototype)).point = function(e, t) {
  Mi.prototype.point.call(this, t, e);
};
function lm(e) {
  this._context = e;
}
lm.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function mw(e) {
  return new Mi(e);
}
function yw(e) {
  return new um(e);
}
function cm(e) {
  this._context = e;
}
cm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Gs(e), i = Gs(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Gs(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function gw(e) {
  return new cm(e);
}
function _a(e, t) {
  this._context = e, this._t = t;
}
_a.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function bw(e) {
  return new _a(e, 0.5);
}
function ww(e) {
  return new _a(e, 0);
}
function xw(e) {
  return new _a(e, 1);
}
function Sr(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function il(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function Pw(e, t) {
  return e[t];
}
function Ow(e) {
  const t = [];
  return t.key = e, t;
}
function Aw() {
  var e = te([]), t = il, r = Sr, n = Pw;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), Ow), u, l = o.length, c = -1, s;
    for (const f of a)
      for (u = 0, ++c; u < l; ++u)
        (o[u][c] = [0, +n(f, o[u].key, c, a)]).data = f;
    for (u = 0, s = tc(t(o)); u < l; ++u)
      o[s[u]].index = u;
    return r(o, s), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : te(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : te(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? il : typeof a == "function" ? a : te(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Sr, i) : r;
  }, i;
}
function Sw(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Sr(e, t);
  }
}
function _w(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    Sr(e, t);
  }
}
function Ew(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, l = 0, c = 0; u < o; ++u) {
        for (var s = e[t[u]], f = s[n][1] || 0, d = s[n - 1][1] || 0, v = (f - d) / 2, p = 0; p < u; ++p) {
          var h = e[t[p]], m = h[n][1] || 0, y = h[n - 1][1] || 0;
          v += m - y;
        }
        l += f, c += v * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, l && (r -= c / l);
    }
    i[n - 1][1] += i[n - 1][0] = r, Sr(e, t);
  }
}
function ur(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oo = {}, Ao = {}, Vs;
function jw() {
  return Vs || (Vs = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r === "__proto__";
    }
    e.isUnsafeProperty = t;
  })(Ao)), Ao;
}
var So = {}, Xs;
function sm() {
  return Xs || (Xs = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      switch (typeof r) {
        case "number":
        case "symbol":
          return !1;
        case "string":
          return r.includes(".") || r.includes("[") || r.includes("]");
      }
    }
    e.isDeepKey = t;
  })(So)), So;
}
var _o = {}, Zs;
function nc() {
  return Zs || (Zs = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "string" || typeof r == "symbol" ? r : Object.is(r?.valueOf?.(), -0) ? "-0" : String(r);
    }
    e.toKey = t;
  })(_o)), _o;
}
var Eo = {}, jo = {}, Qs;
function Iw() {
  return Qs || (Qs = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      if (r == null)
        return "";
      if (typeof r == "string")
        return r;
      if (Array.isArray(r))
        return r.map(t).join(",");
      const n = String(r);
      return n === "0" && Object.is(Number(r), -0) ? "-0" : n;
    }
    e.toString = t;
  })(jo)), jo;
}
var Js;
function ic() {
  return Js || (Js = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Iw(), r = /* @__PURE__ */ nc();
    function n(i) {
      if (Array.isArray(i))
        return i.map(r.toKey);
      if (typeof i == "symbol")
        return [i];
      i = t.toString(i);
      const a = [], o = i.length;
      if (o === 0)
        return a;
      let u = 0, l = "", c = "", s = !1;
      for (i.charCodeAt(0) === 46 && (a.push(""), u++); u < o; ) {
        const f = i[u];
        c ? f === "\\" && u + 1 < o ? (u++, l += i[u]) : f === c ? c = "" : l += f : s ? f === '"' || f === "'" ? c = f : f === "]" ? (s = !1, a.push(l), l = "") : l += f : f === "[" ? (s = !0, l && (a.push(l), l = "")) : f === "." ? l && (a.push(l), l = "") : l += f, u++;
      }
      return l && a.push(l), a;
    }
    e.toPath = n;
  })(Eo)), Eo;
}
var ef;
function ac() {
  return ef || (ef = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ jw(), r = /* @__PURE__ */ sm(), n = /* @__PURE__ */ nc(), i = /* @__PURE__ */ ic();
    function a(u, l, c) {
      if (u == null)
        return c;
      switch (typeof l) {
        case "string": {
          if (t.isUnsafeProperty(l))
            return c;
          const s = u[l];
          return s === void 0 ? r.isDeepKey(l) ? a(u, i.toPath(l), c) : c : s;
        }
        case "number":
        case "symbol": {
          typeof l == "number" && (l = n.toKey(l));
          const s = u[l];
          return s === void 0 ? c : s;
        }
        default: {
          if (Array.isArray(l))
            return o(u, l, c);
          if (Object.is(l?.valueOf(), -0) ? l = "-0" : l = String(l), t.isUnsafeProperty(l))
            return c;
          const s = u[l];
          return s === void 0 ? c : s;
        }
      }
    }
    function o(u, l, c) {
      if (l.length === 0)
        return c;
      let s = u;
      for (let f = 0; f < l.length; f++) {
        if (s == null || t.isUnsafeProperty(l[f]))
          return c;
        s = s[l[f]];
      }
      return s === void 0 ? c : s;
    }
    e.get = a;
  })(Oo)), Oo;
}
var Io, tf;
function Cw() {
  return tf || (tf = 1, Io = ac().get), Io;
}
var kw = /* @__PURE__ */ Cw();
const _r = /* @__PURE__ */ ur(kw);
var Tw = 4;
function nr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tw, r = 10 ** t, n = Math.round(e * r) / r;
  return Object.is(n, -0) ? 0 : n;
}
function se(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return e.reduce((i, a, o) => {
    var u = r[o - 1];
    return typeof u == "string" ? i + u + a : u !== void 0 ? i + nr(u) + a : i + a;
  }, "");
}
var Ae = (e) => e === 0 ? 0 : e > 0 ? 1 : -1, Ct = (e) => typeof e == "number" && e != +e, Er = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1, D = (e) => (typeof e == "number" || e instanceof Number) && !Ct(e), kt = (e) => D(e) || typeof e == "string", Mw = 0, En = (e) => {
  var t = ++Mw;
  return "".concat(e || "").concat(t);
}, Ne = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!D(t) && typeof t != "string")
    return n;
  var a;
  if (Er(t)) {
    if (r == null)
      return n;
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return Ct(a) && (a = n), i && r != null && a > r && (a = r), a;
}, fm = (e) => {
  if (!Array.isArray(e))
    return !1;
  for (var t = e.length, r = {}, n = 0; n < t; n++)
    if (!r[String(e[n])])
      r[String(e[n])] = !0;
    else
      return !0;
  return !1;
};
function pe(e, t, r) {
  return D(e) && D(t) ? nr(e + r * (t - e)) : t;
}
function Dw(e, t, r) {
  if (!(!e || !e.length))
    return e.find((n) => n && (typeof t == "function" ? t(n) : _r(n, t)) === r);
}
var Se = (e) => e === null || typeof e > "u", qn = (e) => Se(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
function Ye(e) {
  return e != null;
}
function en() {
}
var Nw = ["type", "size", "sizeType"];
function al() {
  return al = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, al.apply(null, arguments);
}
function rf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rf(Object(r), !0).forEach(function(n) {
      $w(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $w(e, t, r) {
  return (t = Rw(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Rw(e) {
  var t = Lw(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Lw(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zw(e, t) {
  if (e == null) return {};
  var r, n, i = Bw(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Bw(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var dm = {
  symbolCircle: rc,
  symbolCross: ew,
  symbolDiamond: rw,
  symbolSquare: nw,
  symbolStar: uw,
  symbolTriangle: lw,
  symbolWye: sw
}, Fw = Math.PI / 180, qw = (e) => {
  var t = "symbol".concat(qn(e));
  return dm[t] || rc;
}, Ww = (e, t, r) => {
  if (t === "area")
    return e;
  switch (r) {
    case "cross":
      return 5 * e * e / 9;
    case "diamond":
      return 0.5 * e * e / Math.sqrt(3);
    case "square":
      return e * e;
    case "star": {
      var n = 18 * Fw;
      return 1.25 * e * e * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e * e / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
    default:
      return Math.PI * e * e / 4;
  }
}, Kw = (e, t) => {
  dm["symbol".concat(qn(e))] = t;
}, vm = (e) => {
  var {
    type: t = "circle",
    size: r = 64,
    sizeType: n = "area"
  } = e, i = zw(e, Nw), a = nf(nf({}, i), {}, {
    type: t,
    size: r,
    sizeType: n
  }), o = "circle";
  typeof t == "string" && (o = t);
  var u = () => {
    var d = qw(o), v = fw().type(d).size(Ww(r, n, o)), p = v();
    if (p !== null)
      return p;
  }, {
    className: l,
    cx: c,
    cy: s
  } = a, f = lt(a);
  return D(c) && D(s) && D(r) ? /* @__PURE__ */ g.createElement("path", al({}, f, {
    className: Z("recharts-symbols", l),
    transform: "translate(".concat(c, ", ").concat(s, ")"),
    d: u()
  })) : null;
};
vm.registerSymbol = Kw;
var hm = (e) => "radius" in e && "startAngle" in e && "endAngle" in e, Uw = (e, t) => {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ jt(e) && (r = e.props), typeof r != "object" && typeof r != "function")
    return null;
  var n = {};
  return Object.keys(r).forEach((i) => {
    Jl(i) && (n[i] = ((a) => r[i](r, a)));
  }), n;
}, Hw = (e, t, r) => (n) => (e(t, r, n), null), Ea = (e, t, r) => {
  if (e === null || typeof e != "object" && typeof e != "function")
    return null;
  var n = null;
  return Object.keys(e).forEach((i) => {
    var a = e[i];
    Jl(i) && typeof a == "function" && (n || (n = {}), n[i] = Hw(a, t, r));
  }), n;
};
function af(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? af(Object(r), !0).forEach(function(n) {
      Gw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : af(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Gw(e, t, r) {
  return (t = Vw(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Vw(e) {
  var t = Xw(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Xw(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Re(e, t) {
  var r = Yw({}, e), n = t, i = Object.keys(t), a = i.reduce((o, u) => (o[u] === void 0 && n[u] !== void 0 && (o[u] = n[u]), o), r);
  return a;
}
var Co = {}, ko = {}, of;
function Zw() {
  return of || (of = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      const i = /* @__PURE__ */ new Map();
      for (let a = 0; a < r.length; a++) {
        const o = r[a], u = n(o, a, r);
        i.has(u) || i.set(u, o);
      }
      return Array.from(i.values());
    }
    e.uniqBy = t;
  })(ko)), ko;
}
var To = {}, uf;
function Qw() {
  return uf || (uf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return function(...i) {
        return r.apply(this, i.slice(0, n));
      };
    }
    e.ary = t;
  })(To)), To;
}
var Mo = {}, lf;
function pm() {
  return lf || (lf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r;
    }
    e.identity = t;
  })(Mo)), Mo;
}
var Do = {}, No = {}, $o = {}, cf;
function Jw() {
  return cf || (cf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Number.isSafeInteger(r) && r >= 0;
    }
    e.isLength = t;
  })($o)), $o;
}
var sf;
function oc() {
  return sf || (sf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Jw();
    function r(n) {
      return n != null && typeof n != "function" && t.isLength(n.length);
    }
    e.isArrayLike = r;
  })(No)), No;
}
var Ro = {}, ff;
function ex() {
  return ff || (ff = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "object" && r !== null;
    }
    e.isObjectLike = t;
  })(Ro)), Ro;
}
var df;
function tx() {
  return df || (df = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ oc(), r = /* @__PURE__ */ ex();
    function n(i) {
      return r.isObjectLike(i) && t.isArrayLike(i);
    }
    e.isArrayLikeObject = n;
  })(Do)), Do;
}
var Lo = {}, zo = {}, vf;
function rx() {
  return vf || (vf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ ac();
    function r(n) {
      return function(i) {
        return t.get(i, n);
      };
    }
    e.property = r;
  })(zo)), zo;
}
var Bo = {}, Fo = {}, qo = {}, Wo = {}, hf;
function mm() {
  return hf || (hf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r !== null && (typeof r == "object" || typeof r == "function");
    }
    e.isObject = t;
  })(Wo)), Wo;
}
var Ko = {}, pf;
function ym() {
  return pf || (pf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null || typeof r != "object" && typeof r != "function";
    }
    e.isPrimitive = t;
  })(Ko)), Ko;
}
var Uo = {}, mf;
function gm() {
  return mf || (mf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return r === n || Number.isNaN(r) && Number.isNaN(n);
    }
    e.isEqualsSameValueZero = t;
  })(Uo)), Uo;
}
var yf;
function nx() {
  return yf || (yf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ mm(), r = /* @__PURE__ */ ym(), n = /* @__PURE__ */ gm();
    function i(s, f, d) {
      return typeof d != "function" ? i(s, f, () => {
      }) : a(s, f, function v(p, h, m, y, b, w) {
        const x = d(p, h, m, y, b, w);
        return x !== void 0 ? !!x : a(p, h, v, w);
      }, /* @__PURE__ */ new Map());
    }
    function a(s, f, d, v) {
      if (f === s)
        return !0;
      switch (typeof f) {
        case "object":
          return o(s, f, d, v);
        case "function":
          return Object.keys(f).length > 0 ? a(s, { ...f }, d, v) : n.isEqualsSameValueZero(s, f);
        default:
          return t.isObject(s) ? typeof f == "string" ? f === "" : !0 : n.isEqualsSameValueZero(s, f);
      }
    }
    function o(s, f, d, v) {
      if (f == null)
        return !0;
      if (Array.isArray(f))
        return l(s, f, d, v);
      if (f instanceof Map)
        return u(s, f, d, v);
      if (f instanceof Set)
        return c(s, f, d, v);
      const p = Object.keys(f);
      if (s == null || r.isPrimitive(s))
        return p.length === 0;
      if (p.length === 0)
        return !0;
      if (v?.has(f))
        return v.get(f) === s;
      v?.set(f, s);
      try {
        for (let h = 0; h < p.length; h++) {
          const m = p[h];
          if (!r.isPrimitive(s) && !(m in s) || f[m] === void 0 && s[m] !== void 0 || f[m] === null && s[m] !== null || !d(s[m], f[m], m, s, f, v))
            return !1;
        }
        return !0;
      } finally {
        v?.delete(f);
      }
    }
    function u(s, f, d, v) {
      if (f.size === 0)
        return !0;
      if (!(s instanceof Map))
        return !1;
      for (const [p, h] of f.entries()) {
        const m = s.get(p);
        if (d(m, h, p, s, f, v) === !1)
          return !1;
      }
      return !0;
    }
    function l(s, f, d, v) {
      if (f.length === 0)
        return !0;
      if (!Array.isArray(s))
        return !1;
      const p = /* @__PURE__ */ new Set();
      for (let h = 0; h < f.length; h++) {
        const m = f[h];
        let y = !1;
        for (let b = 0; b < s.length; b++) {
          if (p.has(b))
            continue;
          const w = s[b];
          let x = !1;
          if (d(w, m, h, s, f, v) && (x = !0), x) {
            p.add(b), y = !0;
            break;
          }
        }
        if (!y)
          return !1;
      }
      return !0;
    }
    function c(s, f, d, v) {
      return f.size === 0 ? !0 : s instanceof Set ? l([...s], [...f], d, v) : !1;
    }
    e.isMatchWith = i, e.isSetMatch = c;
  })(qo)), qo;
}
var gf;
function bm() {
  return gf || (gf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ nx();
    function r(n, i) {
      return t.isMatchWith(n, i, () => {
      });
    }
    e.isMatch = r;
  })(Fo)), Fo;
}
var Ho = {}, Yo = {}, Go = {}, bf;
function ix() {
  return bf || (bf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
    }
    e.getSymbols = t;
  })(Go)), Go;
}
var Vo = {}, wf;
function uc() {
  return wf || (wf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
    }
    e.getTag = t;
  })(Vo)), Vo;
}
var Xo = {}, xf;
function wm() {
  return xf || (xf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = "[object RegExp]", r = "[object String]", n = "[object Number]", i = "[object Boolean]", a = "[object Arguments]", o = "[object Symbol]", u = "[object Date]", l = "[object Map]", c = "[object Set]", s = "[object Array]", f = "[object Function]", d = "[object ArrayBuffer]", v = "[object Object]", p = "[object Error]", h = "[object DataView]", m = "[object Uint8Array]", y = "[object Uint8ClampedArray]", b = "[object Uint16Array]", w = "[object Uint32Array]", x = "[object BigUint64Array]", O = "[object Int8Array]", P = "[object Int16Array]", A = "[object Int32Array]", _ = "[object BigInt64Array]", C = "[object Float32Array]", T = "[object Float64Array]";
    e.argumentsTag = a, e.arrayBufferTag = d, e.arrayTag = s, e.bigInt64ArrayTag = _, e.bigUint64ArrayTag = x, e.booleanTag = i, e.dataViewTag = h, e.dateTag = u, e.errorTag = p, e.float32ArrayTag = C, e.float64ArrayTag = T, e.functionTag = f, e.int16ArrayTag = P, e.int32ArrayTag = A, e.int8ArrayTag = O, e.mapTag = l, e.numberTag = n, e.objectTag = v, e.regexpTag = t, e.setTag = c, e.stringTag = r, e.symbolTag = o, e.uint16ArrayTag = b, e.uint32ArrayTag = w, e.uint8ArrayTag = m, e.uint8ClampedArrayTag = y;
  })(Xo)), Xo;
}
var Zo = {}, Pf;
function ax() {
  return Pf || (Pf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return ArrayBuffer.isView(r) && !(r instanceof DataView);
    }
    e.isTypedArray = t;
  })(Zo)), Zo;
}
var Of;
function xm() {
  return Of || (Of = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ ix(), r = /* @__PURE__ */ uc(), n = /* @__PURE__ */ wm(), i = /* @__PURE__ */ ym(), a = /* @__PURE__ */ ax();
    function o(s, f) {
      return u(s, void 0, s, /* @__PURE__ */ new Map(), f);
    }
    function u(s, f, d, v = /* @__PURE__ */ new Map(), p = void 0) {
      const h = p?.(s, f, d, v);
      if (h !== void 0)
        return h;
      if (i.isPrimitive(s))
        return s;
      if (v.has(s))
        return v.get(s);
      if (Array.isArray(s)) {
        const m = new Array(s.length);
        v.set(s, m);
        for (let y = 0; y < s.length; y++)
          m[y] = u(s[y], y, d, v, p);
        return Object.hasOwn(s, "index") && (m.index = s.index), Object.hasOwn(s, "input") && (m.input = s.input), m;
      }
      if (s instanceof Date)
        return new Date(s.getTime());
      if (s instanceof RegExp) {
        const m = new RegExp(s.source, s.flags);
        return m.lastIndex = s.lastIndex, m;
      }
      if (s instanceof Map) {
        const m = /* @__PURE__ */ new Map();
        v.set(s, m);
        for (const [y, b] of s)
          m.set(y, u(b, y, d, v, p));
        return m;
      }
      if (s instanceof Set) {
        const m = /* @__PURE__ */ new Set();
        v.set(s, m);
        for (const y of s)
          m.add(u(y, void 0, d, v, p));
        return m;
      }
      if (typeof Buffer < "u" && Buffer.isBuffer(s))
        return s.subarray();
      if (a.isTypedArray(s)) {
        const m = new (Object.getPrototypeOf(s)).constructor(s.length);
        v.set(s, m);
        for (let y = 0; y < s.length; y++)
          m[y] = u(s[y], y, d, v, p);
        return m;
      }
      if (s instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && s instanceof SharedArrayBuffer)
        return s.slice(0);
      if (s instanceof DataView) {
        const m = new DataView(s.buffer.slice(0), s.byteOffset, s.byteLength);
        return v.set(s, m), l(m, s, d, v, p), m;
      }
      if (typeof File < "u" && s instanceof File) {
        const m = new File([s], s.name, {
          type: s.type
        });
        return v.set(s, m), l(m, s, d, v, p), m;
      }
      if (typeof Blob < "u" && s instanceof Blob) {
        const m = new Blob([s], { type: s.type });
        return v.set(s, m), l(m, s, d, v, p), m;
      }
      if (s instanceof Error) {
        const m = new s.constructor();
        return v.set(s, m), m.message = s.message, m.name = s.name, m.stack = s.stack, m.cause = s.cause, l(m, s, d, v, p), m;
      }
      if (s instanceof Boolean) {
        const m = new Boolean(s.valueOf());
        return v.set(s, m), l(m, s, d, v, p), m;
      }
      if (s instanceof Number) {
        const m = new Number(s.valueOf());
        return v.set(s, m), l(m, s, d, v, p), m;
      }
      if (s instanceof String) {
        const m = new String(s.valueOf());
        return v.set(s, m), l(m, s, d, v, p), m;
      }
      if (typeof s == "object" && c(s)) {
        const m = Object.create(Object.getPrototypeOf(s));
        return v.set(s, m), l(m, s, d, v, p), m;
      }
      return s;
    }
    function l(s, f, d = s, v, p) {
      const h = [...Object.keys(f), ...t.getSymbols(f)];
      for (let m = 0; m < h.length; m++) {
        const y = h[m], b = Object.getOwnPropertyDescriptor(s, y);
        (b == null || b.writable) && (s[y] = u(f[y], y, d, v, p));
      }
    }
    function c(s) {
      switch (r.getTag(s)) {
        case n.argumentsTag:
        case n.arrayTag:
        case n.arrayBufferTag:
        case n.dataViewTag:
        case n.booleanTag:
        case n.dateTag:
        case n.float32ArrayTag:
        case n.float64ArrayTag:
        case n.int8ArrayTag:
        case n.int16ArrayTag:
        case n.int32ArrayTag:
        case n.mapTag:
        case n.numberTag:
        case n.objectTag:
        case n.regexpTag:
        case n.setTag:
        case n.stringTag:
        case n.symbolTag:
        case n.uint8ArrayTag:
        case n.uint8ClampedArrayTag:
        case n.uint16ArrayTag:
        case n.uint32ArrayTag:
          return !0;
        default:
          return !1;
      }
    }
    e.cloneDeepWith = o, e.cloneDeepWithImpl = u, e.copyProperties = l;
  })(Yo)), Yo;
}
var Af;
function ox() {
  return Af || (Af = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ xm();
    function r(n) {
      return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
    }
    e.cloneDeep = r;
  })(Ho)), Ho;
}
var Sf;
function ux() {
  return Sf || (Sf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ bm(), r = /* @__PURE__ */ ox();
    function n(i) {
      return i = r.cloneDeep(i), (a) => t.isMatch(a, i);
    }
    e.matches = n;
  })(Bo)), Bo;
}
var Qo = {}, Jo = {}, eu = {}, _f;
function lx() {
  return _f || (_f = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ xm(), r = /* @__PURE__ */ uc(), n = /* @__PURE__ */ wm();
    function i(a, o) {
      return t.cloneDeepWith(a, (u, l, c, s) => {
        const f = o?.(u, l, c, s);
        if (f !== void 0)
          return f;
        if (typeof a == "object") {
          if (r.getTag(a) === n.objectTag && typeof a.constructor != "function") {
            const d = {};
            return s.set(a, d), t.copyProperties(d, a, c, s), d;
          }
          switch (Object.prototype.toString.call(a)) {
            case n.numberTag:
            case n.stringTag:
            case n.booleanTag: {
              const d = new a.constructor(a?.valueOf());
              return t.copyProperties(d, a), d;
            }
            case n.argumentsTag: {
              const d = {};
              return t.copyProperties(d, a), d.length = a.length, d[Symbol.iterator] = a[Symbol.iterator], d;
            }
            default:
              return;
          }
        }
      });
    }
    e.cloneDeepWith = i;
  })(eu)), eu;
}
var Ef;
function cx() {
  return Ef || (Ef = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ lx();
    function r(n) {
      return t.cloneDeepWith(n);
    }
    e.cloneDeep = r;
  })(Jo)), Jo;
}
var tu = {}, ru = {}, jf;
function Pm() {
  return jf || (jf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /^(?:0|[1-9]\d*)$/;
    function r(n, i = Number.MAX_SAFE_INTEGER) {
      switch (typeof n) {
        case "number":
          return Number.isInteger(n) && n >= 0 && n < i;
        case "symbol":
          return !1;
        case "string":
          return t.test(n);
      }
    }
    e.isIndex = r;
  })(ru)), ru;
}
var nu = {}, If;
function sx() {
  return If || (If = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ uc();
    function r(n) {
      return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
    }
    e.isArguments = r;
  })(nu)), nu;
}
var Cf;
function fx() {
  return Cf || (Cf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ sm(), r = /* @__PURE__ */ Pm(), n = /* @__PURE__ */ sx(), i = /* @__PURE__ */ ic();
    function a(o, u) {
      let l;
      if (Array.isArray(u) ? l = u : typeof u == "string" && t.isDeepKey(u) && o?.[u] == null ? l = i.toPath(u) : l = [u], l.length === 0)
        return !1;
      let c = o;
      for (let s = 0; s < l.length; s++) {
        const f = l[s];
        if ((c == null || !Object.hasOwn(c, f)) && !((Array.isArray(c) || n.isArguments(c)) && r.isIndex(f) && f < c.length))
          return !1;
        c = c[f];
      }
      return !0;
    }
    e.has = a;
  })(tu)), tu;
}
var kf;
function dx() {
  return kf || (kf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ bm(), r = /* @__PURE__ */ nc(), n = /* @__PURE__ */ cx(), i = /* @__PURE__ */ ac(), a = /* @__PURE__ */ fx();
    function o(u, l) {
      switch (typeof u) {
        case "object": {
          Object.is(u?.valueOf(), -0) && (u = "-0");
          break;
        }
        case "number": {
          u = r.toKey(u);
          break;
        }
      }
      return l = n.cloneDeep(l), function(c) {
        const s = i.get(c, u);
        return s === void 0 ? a.has(c, u) : l === void 0 ? s === void 0 : t.isMatch(s, l);
      };
    }
    e.matchesProperty = o;
  })(Qo)), Qo;
}
var Tf;
function vx() {
  return Tf || (Tf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ pm(), r = /* @__PURE__ */ rx(), n = /* @__PURE__ */ ux(), i = /* @__PURE__ */ dx();
    function a(o) {
      if (o == null)
        return t.identity;
      switch (typeof o) {
        case "function":
          return o;
        case "object":
          return Array.isArray(o) && o.length === 2 ? i.matchesProperty(o[0], o[1]) : n.matches(o);
        case "string":
        case "symbol":
        case "number":
          return r.property(o);
      }
    }
    e.iteratee = a;
  })(Lo)), Lo;
}
var Mf;
function hx() {
  return Mf || (Mf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Zw(), r = /* @__PURE__ */ Qw(), n = /* @__PURE__ */ pm(), i = /* @__PURE__ */ tx(), a = /* @__PURE__ */ vx();
    function o(u, l = n.identity) {
      return i.isArrayLikeObject(u) ? t.uniqBy(Array.from(u), r.ary(a.iteratee(l), 1)) : [];
    }
    e.uniqBy = o;
  })(Co)), Co;
}
var iu, Df;
function px() {
  return Df || (Df = 1, iu = hx().uniqBy), iu;
}
var mx = /* @__PURE__ */ px();
const Nf = /* @__PURE__ */ ur(mx);
function yx(e, t, r) {
  return t === !0 ? Nf(e, r) : typeof t == "function" ? Nf(e, t) : e;
}
var au = { exports: {} }, ou = {}, uu = { exports: {} }, lu = {};
var $f;
function gx() {
  if ($f) return lu;
  $f = 1;
  var e = Ql;
  function t(f, d) {
    return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, a = e.useLayoutEffect, o = e.useDebugValue;
  function u(f, d) {
    var v = d(), p = n({ inst: { value: v, getSnapshot: d } }), h = p[0].inst, m = p[1];
    return a(
      function() {
        h.value = v, h.getSnapshot = d, l(h) && m({ inst: h });
      },
      [f, v, d]
    ), i(
      function() {
        return l(h) && m({ inst: h }), f(function() {
          l(h) && m({ inst: h });
        });
      },
      [f]
    ), o(v), v;
  }
  function l(f) {
    var d = f.getSnapshot;
    f = f.value;
    try {
      var v = d();
      return !r(f, v);
    } catch {
      return !0;
    }
  }
  function c(f, d) {
    return d();
  }
  var s = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : u;
  return lu.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : s, lu;
}
var Rf;
function bx() {
  return Rf || (Rf = 1, uu.exports = gx()), uu.exports;
}
var Lf;
function wx() {
  if (Lf) return ou;
  Lf = 1;
  var e = Ql, t = bx();
  function r(c, s) {
    return c === s && (c !== 0 || 1 / c === 1 / s) || c !== c && s !== s;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, a = e.useRef, o = e.useEffect, u = e.useMemo, l = e.useDebugValue;
  return ou.useSyncExternalStoreWithSelector = function(c, s, f, d, v) {
    var p = a(null);
    if (p.current === null) {
      var h = { hasValue: !1, value: null };
      p.current = h;
    } else h = p.current;
    p = u(
      function() {
        function y(P) {
          if (!b) {
            if (b = !0, w = P, P = d(P), v !== void 0 && h.hasValue) {
              var A = h.value;
              if (v(A, P))
                return x = A;
            }
            return x = P;
          }
          if (A = x, n(w, P)) return A;
          var _ = d(P);
          return v !== void 0 && v(A, _) ? (w = P, A) : (w = P, x = _);
        }
        var b = !1, w, x, O = f === void 0 ? null : f;
        return [
          function() {
            return y(s());
          },
          O === null ? void 0 : function() {
            return y(O());
          }
        ];
      },
      [s, f, d, v]
    );
    var m = i(c, p[0], p[1]);
    return o(
      function() {
        h.hasValue = !0, h.value = m;
      },
      [m]
    ), l(m), m;
  }, ou;
}
var zf;
function xx() {
  return zf || (zf = 1, au.exports = wx()), au.exports;
}
var Px = xx(), lc = /* @__PURE__ */ Ve(null), Ox = (e) => e, ue = () => {
  var e = ft(lc);
  return e ? e.store.dispatch : Ox;
}, Oi = () => {
}, Ax = () => Oi, Sx = (e, t) => e === t;
function N(e) {
  var t = ft(lc), r = wt(() => t ? (n) => {
    if (n != null)
      return e(n);
  } : Oi, [t, e]);
  return Px.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : Ax, t ? t.store.getState : Oi, t ? t.store.getState : Oi, r, Sx);
}
function _x(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Ex(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function jx(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Bf = (e) => Array.isArray(e) ? e : [e];
function Ix(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return jx(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Cx(e, t) {
  const r = [], { length: n } = e;
  for (let i = 0; i < n; i++)
    r.push(e[i].apply(null, t));
  return r;
}
var kx = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Tx = typeof WeakRef < "u" ? WeakRef : kx, Mx = 0, Ff = 1;
function ui() {
  return {
    s: Mx,
    v: void 0,
    o: null,
    p: null
  };
}
function Om(e, t = {}) {
  let r = ui();
  const { resultEqualityCheck: n } = t;
  let i, a = 0;
  function o() {
    let u = r;
    const { length: l } = arguments;
    for (let f = 0, d = l; f < d; f++) {
      const v = arguments[f];
      if (typeof v == "function" || typeof v == "object" && v !== null) {
        let p = u.o;
        p === null && (u.o = p = /* @__PURE__ */ new WeakMap());
        const h = p.get(v);
        h === void 0 ? (u = ui(), p.set(v, u)) : u = h;
      } else {
        let p = u.p;
        p === null && (u.p = p = /* @__PURE__ */ new Map());
        const h = p.get(v);
        h === void 0 ? (u = ui(), p.set(v, u)) : u = h;
      }
    }
    const c = u;
    let s;
    if (u.s === Ff)
      s = u.v;
    else if (s = e.apply(null, arguments), a++, n) {
      const f = i?.deref?.() ?? i;
      f != null && n(f, s) && (s = f, a !== 0 && a--), i = typeof s == "object" && s !== null || typeof s == "function" ? new Tx(s) : s;
    }
    return c.s = Ff, c.v = s, s;
  }
  return o.clearCache = () => {
    r = ui(), o.resetResultsCount();
  }, o.resultsCount = () => a, o.resetResultsCount = () => {
    a = 0;
  }, o;
}
function Dx(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...i) => {
    let a = 0, o = 0, u, l = {}, c = i.pop();
    typeof c == "object" && (l = c, c = i.pop()), _x(
      c,
      `createSelector expects an output function after the inputs, but received: [${typeof c}]`
    );
    const s = {
      ...r,
      ...l
    }, {
      memoize: f,
      memoizeOptions: d = [],
      argsMemoize: v = Om,
      argsMemoizeOptions: p = []
    } = s, h = Bf(d), m = Bf(p), y = Ix(i), b = f(function() {
      return a++, c.apply(
        null,
        arguments
      );
    }, ...h), w = v(function() {
      o++;
      const O = Cx(
        y,
        arguments
      );
      return u = b.apply(null, O), u;
    }, ...m);
    return Object.assign(w, {
      resultFunc: c,
      memoizedResultFunc: b,
      dependencies: y,
      dependencyRecomputations: () => o,
      resetDependencyRecomputations: () => {
        o = 0;
      },
      lastResult: () => u,
      recomputations: () => a,
      resetRecomputations: () => {
        a = 0;
      },
      memoize: f,
      argsMemoize: v
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var S = /* @__PURE__ */ Dx(Om), Nx = Object.assign(
  (e, t = S) => {
    Ex(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (a) => e[a]
    );
    return t(
      n,
      (...a) => a.reduce((o, u, l) => (o[r[l]] = u, o), {})
    );
  },
  { withTypes: () => Nx }
), cu = {}, su = {}, fu = {}, qf;
function $x() {
  return qf || (qf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(n) {
      return typeof n == "symbol" ? 1 : n === null ? 2 : n === void 0 ? 3 : n !== n ? 4 : 0;
    }
    const r = (n, i, a) => {
      if (n !== i) {
        const o = t(n), u = t(i);
        if (o === u && o === 0) {
          if (n < i)
            return a === "desc" ? 1 : -1;
          if (n > i)
            return a === "desc" ? -1 : 1;
        }
        return a === "desc" ? u - o : o - u;
      }
      return 0;
    };
    e.compareValues = r;
  })(fu)), fu;
}
var du = {}, vu = {}, Wf;
function Am() {
  return Wf || (Wf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "symbol" || r instanceof Symbol;
    }
    e.isSymbol = t;
  })(vu)), vu;
}
var Kf;
function Rx() {
  return Kf || (Kf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Am(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function i(a, o) {
      return Array.isArray(a) ? !1 : typeof a == "number" || typeof a == "boolean" || a == null || t.isSymbol(a) ? !0 : typeof a == "string" && (n.test(a) || !r.test(a)) || o != null && Object.hasOwn(o, a);
    }
    e.isKey = i;
  })(du)), du;
}
var Uf;
function Lx() {
  return Uf || (Uf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ $x(), r = /* @__PURE__ */ Rx(), n = /* @__PURE__ */ ic();
    function i(a, o, u, l) {
      if (a == null)
        return [];
      u = l ? void 0 : u, Array.isArray(a) || (a = Object.values(a)), Array.isArray(o) || (o = o == null ? [null] : [o]), o.length === 0 && (o = [null]), Array.isArray(u) || (u = u == null ? [] : [u]), u = u.map((v) => String(v));
      const c = (v, p) => {
        let h = v;
        for (let m = 0; m < p.length && h != null; ++m)
          h = h[p[m]];
        return h;
      }, s = (v, p) => p == null || v == null ? p : typeof v == "object" && "key" in v ? Object.hasOwn(p, v.key) ? p[v.key] : c(p, v.path) : typeof v == "function" ? v(p) : Array.isArray(v) ? c(p, v) : typeof p == "object" ? p[v] : p, f = o.map((v) => (Array.isArray(v) && v.length === 1 && (v = v[0]), v == null || typeof v == "function" || Array.isArray(v) || r.isKey(v) ? v : { key: v, path: n.toPath(v) }));
      return a.map((v) => ({
        original: v,
        criteria: f.map((p) => s(p, v))
      })).slice().sort((v, p) => {
        for (let h = 0; h < f.length; h++) {
          const m = t.compareValues(v.criteria[h], p.criteria[h], u[h]);
          if (m !== 0)
            return m;
        }
        return 0;
      }).map((v) => v.original);
    }
    e.orderBy = i;
  })(su)), su;
}
var hu = {}, Hf;
function zx() {
  return Hf || (Hf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n = 1) {
      const i = [], a = Math.floor(n), o = (u, l) => {
        for (let c = 0; c < u.length; c++) {
          const s = u[c];
          Array.isArray(s) && l < a ? o(s, l + 1) : i.push(s);
        }
      };
      return o(r, 0), i;
    }
    e.flatten = t;
  })(hu)), hu;
}
var pu = {}, Yf;
function Sm() {
  return Yf || (Yf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Pm(), r = /* @__PURE__ */ oc(), n = /* @__PURE__ */ mm(), i = /* @__PURE__ */ gm();
    function a(o, u, l) {
      return n.isObject(l) && (typeof u == "number" && r.isArrayLike(l) && t.isIndex(u) && u < l.length || typeof u == "string" && u in l) ? i.isEqualsSameValueZero(l[u], o) : !1;
    }
    e.isIterateeCall = a;
  })(pu)), pu;
}
var Gf;
function Bx() {
  return Gf || (Gf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Lx(), r = /* @__PURE__ */ zx(), n = /* @__PURE__ */ Sm();
    function i(a, ...o) {
      const u = o.length;
      return u > 1 && n.isIterateeCall(a, o[0], o[1]) ? o = [] : u > 2 && n.isIterateeCall(o[0], o[1], o[2]) && (o = [o[0]]), t.orderBy(a, r.flatten(o), ["asc"]);
    }
    e.sortBy = i;
  })(cu)), cu;
}
var mu, Vf;
function Fx() {
  return Vf || (Vf = 1, mu = Bx().sortBy), mu;
}
var qx = /* @__PURE__ */ Fx();
const ja = /* @__PURE__ */ ur(qx);
var _m = (e) => e.legend.settings, Wx = (e) => e.legend.size, Kx = (e) => e.legend.payload;
S([Kx, _m], (e, t) => {
  var {
    itemSorter: r
  } = t, n = e.flat(1);
  return r ? ja(n, r) : n;
});
var li = 1;
function Ux() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = Fe({
    height: 0,
    left: 0,
    top: 0,
    width: 0
  }), n = re(
    (i) => {
      if (i != null) {
        var a = i.getBoundingClientRect(), o = {
          height: a.height,
          left: a.left,
          top: a.top,
          width: a.width
        };
        (Math.abs(o.height - t.height) > li || Math.abs(o.left - t.left) > li || Math.abs(o.top - t.top) > li || Math.abs(o.width - t.width) > li) && r({
          height: o.height,
          left: o.left,
          top: o.top,
          width: o.width
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t.width, t.height, t.top, t.left, ...e]
  );
  return [t, n];
}
function Ie(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Hx = typeof Symbol == "function" && Symbol.observable || "@@observable", Xf = Hx, yu = () => Math.random().toString(36).substring(7).split("").join("."), Yx = {
  INIT: `@@redux/INIT${/* @__PURE__ */ yu()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ yu()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${yu()}`
}, Di = Yx;
function cc(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Em(e, t, r) {
  if (typeof e != "function")
    throw new Error(Ie(2));
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(Ie(0));
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(Ie(1));
    return r(Em)(e, t);
  }
  let n = e, i = t, a = /* @__PURE__ */ new Map(), o = a, u = 0, l = !1;
  function c() {
    o === a && (o = /* @__PURE__ */ new Map(), a.forEach((m, y) => {
      o.set(y, m);
    }));
  }
  function s() {
    if (l)
      throw new Error(Ie(3));
    return i;
  }
  function f(m) {
    if (typeof m != "function")
      throw new Error(Ie(4));
    if (l)
      throw new Error(Ie(5));
    let y = !0;
    c();
    const b = u++;
    return o.set(b, m), function() {
      if (y) {
        if (l)
          throw new Error(Ie(6));
        y = !1, c(), o.delete(b), a = null;
      }
    };
  }
  function d(m) {
    if (!cc(m))
      throw new Error(Ie(7));
    if (typeof m.type > "u")
      throw new Error(Ie(8));
    if (typeof m.type != "string")
      throw new Error(Ie(17));
    if (l)
      throw new Error(Ie(9));
    try {
      l = !0, i = n(i, m);
    } finally {
      l = !1;
    }
    return (a = o).forEach((b) => {
      b();
    }), m;
  }
  function v(m) {
    if (typeof m != "function")
      throw new Error(Ie(10));
    n = m, d({
      type: Di.REPLACE
    });
  }
  function p() {
    const m = f;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(y) {
        if (typeof y != "object" || y === null)
          throw new Error(Ie(11));
        function b() {
          const x = y;
          x.next && x.next(s());
        }
        return b(), {
          unsubscribe: m(b)
        };
      },
      [Xf]() {
        return this;
      }
    };
  }
  return d({
    type: Di.INIT
  }), {
    dispatch: d,
    subscribe: f,
    getState: s,
    replaceReducer: v,
    [Xf]: p
  };
}
function Gx(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: Di.INIT
    }) > "u")
      throw new Error(Ie(12));
    if (typeof r(void 0, {
      type: Di.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Ie(13));
  });
}
function jm(e) {
  const t = Object.keys(e), r = {};
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    typeof e[o] == "function" && (r[o] = e[o]);
  }
  const n = Object.keys(r);
  let i;
  try {
    Gx(r);
  } catch (a) {
    i = a;
  }
  return function(o = {}, u) {
    if (i)
      throw i;
    let l = !1;
    const c = {};
    for (let s = 0; s < n.length; s++) {
      const f = n[s], d = r[f], v = o[f], p = d(v, u);
      if (typeof p > "u")
        throw u && u.type, new Error(Ie(14));
      c[f] = p, l = l || p !== v;
    }
    return l = l || n.length !== Object.keys(o).length, l ? c : o;
  };
}
function Ni(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function Vx(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let a = () => {
      throw new Error(Ie(15));
    };
    const o = {
      getState: i.getState,
      dispatch: (l, ...c) => a(l, ...c)
    }, u = e.map((l) => l(o));
    return a = Ni(...u)(i.dispatch), {
      ...i,
      dispatch: a
    };
  };
}
function Im(e) {
  return cc(e) && "type" in e && typeof e.type == "string";
}
var Cm = /* @__PURE__ */ Symbol.for("immer-nothing"), Zf = /* @__PURE__ */ Symbol.for("immer-draftable"), We = /* @__PURE__ */ Symbol.for("immer-state");
function ht(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var tt = Object, Yr = tt.getPrototypeOf, $i = "constructor", Ia = "prototype", ol = "configurable", Ri = "enumerable", Ai = "writable", jn = "value", Bt = (e) => !!e && !!e[We];
function bt(e) {
  return e ? km(e) || ka(e) || !!e[Zf] || !!e[$i]?.[Zf] || Ta(e) || Ma(e) : !1;
}
var Xx = tt[Ia][$i].toString(), Qf = /* @__PURE__ */ new WeakMap();
function km(e) {
  if (!e || !sc(e))
    return !1;
  const t = Yr(e);
  if (t === null || t === tt[Ia])
    return !0;
  const r = tt.hasOwnProperty.call(t, $i) && t[$i];
  if (r === Object)
    return !0;
  if (!qr(r))
    return !1;
  let n = Qf.get(r);
  return n === void 0 && (n = Function.toString.call(r), Qf.set(r, n)), n === Xx;
}
function Ca(e, t, r = !0) {
  Wn(e) === 0 ? (r ? Reflect.ownKeys(e) : tt.keys(e)).forEach((i) => {
    t(i, e[i], e);
  }) : e.forEach((n, i) => t(i, n, e));
}
function Wn(e) {
  const t = e[We];
  return t ? t.type_ : ka(e) ? 1 : Ta(e) ? 2 : Ma(e) ? 3 : 0;
}
var Jf = (e, t, r = Wn(e)) => r === 2 ? e.has(t) : tt[Ia].hasOwnProperty.call(e, t), ul = (e, t, r = Wn(e)) => (
  // @ts-ignore
  r === 2 ? e.get(t) : e[t]
), Li = (e, t, r, n = Wn(e)) => {
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
};
function Zx(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var ka = Array.isArray, Ta = (e) => e instanceof Map, Ma = (e) => e instanceof Set, sc = (e) => typeof e == "object", qr = (e) => typeof e == "function", gu = (e) => typeof e == "boolean";
function Qx(e) {
  const t = +e;
  return Number.isInteger(t) && String(t) === e;
}
var Dt = (e) => e.copy_ || e.base_, fc = (e) => e.modified_ ? e.copy_ : e.base_;
function ll(e, t) {
  if (Ta(e))
    return new Map(e);
  if (Ma(e))
    return new Set(e);
  if (ka(e))
    return Array[Ia].slice.call(e);
  const r = km(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = tt.getOwnPropertyDescriptors(e);
    delete n[We];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], u = n[o];
      u[Ai] === !1 && (u[Ai] = !0, u[ol] = !0), (u.get || u.set) && (n[o] = {
        [ol]: !0,
        [Ai]: !0,
        // could live with !!desc.set as well here...
        [Ri]: u[Ri],
        [jn]: e[o]
      });
    }
    return tt.create(Yr(e), n);
  } else {
    const n = Yr(e);
    if (n !== null && r)
      return { ...e };
    const i = tt.create(n);
    return tt.assign(i, e);
  }
}
function dc(e, t = !1) {
  return Da(e) || Bt(e) || !bt(e) || (Wn(e) > 1 && tt.defineProperties(e, {
    set: ci,
    add: ci,
    clear: ci,
    delete: ci
  }), tt.freeze(e), t && Ca(
    e,
    (r, n) => {
      dc(n, !0);
    },
    !1
  )), e;
}
function Jx() {
  ht(2);
}
var ci = {
  [jn]: Jx
};
function Da(e) {
  return e === null || !sc(e) ? !0 : tt.isFrozen(e);
}
var zi = "MapSet", cl = "Patches", ed = "ArrayMethods", Tm = {};
function jr(e) {
  const t = Tm[e];
  return t || ht(0, e), t;
}
var td = (e) => !!Tm[e], In, Mm = () => In, eP = (e, t) => ({
  drafts_: [],
  parent_: e,
  immer_: t,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: td(zi) ? jr(zi) : void 0,
  arrayMethodsPlugin_: td(ed) ? jr(ed) : void 0
});
function rd(e, t) {
  t && (e.patchPlugin_ = jr(cl), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function sl(e) {
  fl(e), e.drafts_.forEach(tP), e.drafts_ = null;
}
function fl(e) {
  e === In && (In = e.parent_);
}
var nd = (e) => In = eP(In, e);
function tP(e) {
  const t = e[We];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function id(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  if (e !== void 0 && e !== r) {
    r[We].modified_ && (sl(t), ht(4)), bt(e) && (e = ad(t, e));
    const { patchPlugin_: i } = t;
    i && i.generateReplacementPatches_(
      r[We].base_,
      e,
      t
    );
  } else
    e = ad(t, r);
  return rP(t, e, !0), sl(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Cm ? e : void 0;
}
function ad(e, t) {
  if (Da(t))
    return t;
  const r = t[We];
  if (!r)
    return Bi(t, e.handledSet_, e);
  if (!Na(r, e))
    return t;
  if (!r.modified_)
    return r.base_;
  if (!r.finalized_) {
    const { callbacks_: n } = r;
    if (n)
      for (; n.length > 0; )
        n.pop()(e);
    $m(r, e);
  }
  return r.copy_;
}
function rP(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && dc(t, r);
}
function Dm(e) {
  e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var Na = (e, t) => e.scope_ === t, nP = [];
function Nm(e, t, r, n) {
  const i = Dt(e), a = e.type_;
  if (n !== void 0 && ul(i, n, a) === t) {
    Li(i, n, r, a);
    return;
  }
  if (!e.draftLocations_) {
    const u = e.draftLocations_ = /* @__PURE__ */ new Map();
    Ca(i, (l, c) => {
      if (Bt(c)) {
        const s = u.get(c) || [];
        s.push(l), u.set(c, s);
      }
    });
  }
  const o = e.draftLocations_.get(t) ?? nP;
  for (const u of o)
    Li(i, u, r, a);
}
function iP(e, t, r) {
  e.callbacks_.push(function(i) {
    const a = t;
    if (!a || !Na(a, i))
      return;
    i.mapSetPlugin_?.fixSetContents(a);
    const o = fc(a);
    Nm(e, a.draft_ ?? a, o, r), $m(a, i);
  });
}
function $m(e, t) {
  if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
    const { patchPlugin_: n } = t;
    if (n) {
      const i = n.getPath(e);
      i && n.generatePatches_(e, i, t);
    }
    Dm(e);
  }
}
function aP(e, t, r) {
  const { scope_: n } = e;
  if (Bt(r)) {
    const i = r[We];
    Na(i, n) && i.callbacks_.push(function() {
      Si(e);
      const o = fc(i);
      Nm(e, r, o, t);
    });
  } else bt(r) && e.callbacks_.push(function() {
    const a = Dt(e);
    e.type_ === 3 ? a.has(r) && Bi(r, n.handledSet_, n) : ul(a, t, e.type_) === r && n.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && Bi(
      ul(e.copy_, t, e.type_),
      n.handledSet_,
      n
    );
  });
}
function Bi(e, t, r) {
  return !r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1 || Bt(e) || t.has(e) || !bt(e) || Da(e) || (t.add(e), Ca(e, (n, i) => {
    if (Bt(i)) {
      const a = i[We];
      if (Na(a, r)) {
        const o = fc(a);
        Li(e, n, o, e.type_), Dm(a);
      }
    } else bt(i) && Bi(i, t, r);
  })), e;
}
function oP(e, t) {
  const r = ka(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Mm(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    // actually instantiated in `prepareCopy()`
    assigned_: void 0,
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1,
    // `callbacks` actually gets assigned in `createProxy`
    callbacks_: void 0
  };
  let i = n, a = Fi;
  r && (i = [n], a = Cn);
  const { revoke: o, proxy: u } = Proxy.revocable(i, a);
  return n.draft_ = u, n.revoke_ = o, [u, n];
}
var Fi = {
  get(e, t) {
    if (t === We)
      return e;
    let r = e.scope_.arrayMethodsPlugin_;
    const n = e.type_ === 1 && typeof t == "string";
    if (n && r?.isArrayOperationMethod(t))
      return r.createMethodInterceptor(e, t);
    const i = Dt(e);
    if (!Jf(i, t, e.type_))
      return uP(e, i, t);
    const a = i[t];
    if (e.finalized_ || !bt(a) || n && e.operationMethod && r?.isMutatingArrayMethod(
      e.operationMethod
    ) && Qx(t))
      return a;
    if (a === bu(e.base_, t)) {
      Si(e);
      const o = e.type_ === 1 ? +t : t, u = vl(e.scope_, a, e, o);
      return e.copy_[o] = u;
    }
    return a;
  },
  has(e, t) {
    return t in Dt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Dt(e));
  },
  set(e, t, r) {
    const n = Rm(Dt(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = bu(Dt(e), t), a = i?.[We];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_.set(t, !1), !0;
      if (Zx(r, i) && (r !== void 0 || Jf(e.base_, t, e.type_)))
        return !0;
      Si(e), dl(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_.set(t, !0), aP(e, t, r)), !0;
  },
  deleteProperty(e, t) {
    return Si(e), bu(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), dl(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = Dt(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      [Ai]: !0,
      [ol]: e.type_ !== 1 || t !== "length",
      [Ri]: n[Ri],
      [jn]: r[t]
    };
  },
  defineProperty() {
    ht(11);
  },
  getPrototypeOf(e) {
    return Yr(e.base_);
  },
  setPrototypeOf() {
    ht(12);
  }
}, Cn = {};
for (let e in Fi) {
  let t = Fi[e];
  Cn[e] = function() {
    const r = arguments;
    return r[0] = r[0][0], t.apply(this, r);
  };
}
Cn.deleteProperty = function(e, t) {
  return Cn.set.call(this, e, t, void 0);
};
Cn.set = function(e, t, r) {
  return Fi.set.call(this, e[0], t, r, e[0]);
};
function bu(e, t) {
  const r = e[We];
  return (r ? Dt(r) : e)[t];
}
function uP(e, t, r) {
  const n = Rm(t, r);
  return n ? jn in n ? n[jn] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function Rm(e, t) {
  if (!(t in e))
    return;
  let r = Yr(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Yr(r);
  }
}
function dl(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && dl(e.parent_));
}
function Si(e) {
  e.copy_ || (e.assigned_ = /* @__PURE__ */ new Map(), e.copy_ = ll(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var lP = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (r, n, i) => {
      if (qr(r) && !qr(n)) {
        const o = n;
        n = r;
        const u = this;
        return function(c = o, ...s) {
          return u.produce(c, (f) => n.call(this, f, ...s));
        };
      }
      qr(n) || ht(6), i !== void 0 && !qr(i) && ht(7);
      let a;
      if (bt(r)) {
        const o = nd(this), u = vl(o, r, void 0);
        let l = !0;
        try {
          a = n(u), l = !1;
        } finally {
          l ? sl(o) : fl(o);
        }
        return rd(o, i), id(a, o);
      } else if (!r || !sc(r)) {
        if (a = n(r), a === void 0 && (a = r), a === Cm && (a = void 0), this.autoFreeze_ && dc(a, !0), i) {
          const o = [], u = [];
          jr(cl).generateReplacementPatches_(r, a, {
            patches_: o,
            inversePatches_: u
          }), i(o, u);
        }
        return a;
      } else
        ht(1, r);
    }, this.produceWithPatches = (r, n) => {
      if (qr(r))
        return (u, ...l) => this.produceWithPatches(u, (c) => r(c, ...l));
      let i, a;
      return [this.produce(r, n, (u, l) => {
        i = u, a = l;
      }), i, a];
    }, gu(t?.autoFreeze) && this.setAutoFreeze(t.autoFreeze), gu(t?.useStrictShallowCopy) && this.setUseStrictShallowCopy(t.useStrictShallowCopy), gu(t?.useStrictIteration) && this.setUseStrictIteration(t.useStrictIteration);
  }
  createDraft(t) {
    bt(t) || ht(8), Bt(t) && (t = yt(t));
    const r = nd(this), n = vl(r, t, void 0);
    return n[We].isManual_ = !0, fl(r), n;
  }
  finishDraft(t, r) {
    const n = t && t[We];
    (!n || !n.isManual_) && ht(9);
    const { scope_: i } = n;
    return rd(i, r), id(void 0, i);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(t) {
    this.useStrictIteration_ = t;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(t, r) {
    let n;
    for (n = r.length - 1; n >= 0; n--) {
      const a = r[n];
      if (a.path.length === 0 && a.op === "replace") {
        t = a.value;
        break;
      }
    }
    n > -1 && (r = r.slice(n + 1));
    const i = jr(cl).applyPatches_;
    return Bt(t) ? i(t, r) : this.produce(
      t,
      (a) => i(a, r)
    );
  }
};
function vl(e, t, r, n) {
  const [i, a] = Ta(t) ? jr(zi).proxyMap_(t, r) : Ma(t) ? jr(zi).proxySet_(t, r) : oP(t, r);
  return (r?.scope_ ?? Mm()).drafts_.push(i), a.callbacks_ = r?.callbacks_ ?? [], a.key_ = n, r && n !== void 0 ? iP(r, a, n) : a.callbacks_.push(function(l) {
    l.mapSetPlugin_?.fixSetContents(a);
    const { patchPlugin_: c } = l;
    a.modified_ && c && c.generatePatches_(a, [], l);
  }), i;
}
function yt(e) {
  return Bt(e) || ht(10, e), Lm(e);
}
function Lm(e) {
  if (!bt(e) || Da(e))
    return e;
  const t = e[We];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = ll(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = ll(e, !0);
  return Ca(
    r,
    (i, a) => {
      Li(r, i, Lm(a));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var cP = new lP(), zm = cP.produce;
function Bm(e) {
  return ({ dispatch: r, getState: n }) => (i) => (a) => typeof a == "function" ? a(r, n, e) : i(a);
}
var sP = Bm(), fP = Bm, dP = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ni : Ni.apply(null, arguments);
};
function ct(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i)
        throw new Error(rt(0));
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Im(n) && n.type === e, r;
}
var Fm = class Pn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Pn.prototype);
  }
  static get [Symbol.species]() {
    return Pn;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Pn(...t[0].concat(this)) : new Pn(...t.concat(this));
  }
};
function od(e) {
  return bt(e) ? zm(e, () => {
  }) : e;
}
function si(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function vP(e) {
  return typeof e == "boolean";
}
var hP = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: a = !0
  } = t ?? {};
  let o = new Fm();
  return r && (vP(r) ? o.push(sP) : o.push(fP(r.extraArgument))), o;
}, qm = "RTK_autoBatch", ae = () => (e) => ({
  payload: e,
  meta: {
    [qm]: !0
  }
}), ud = (e) => (t) => {
  setTimeout(t, e);
}, Wm = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let i = !0, a = !1, o = !1;
  const u = /* @__PURE__ */ new Set(), l = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : ud(10)
  ) : e.type === "callback" ? e.queueNotification : ud(e.timeout), c = () => {
    o = !1, a && (a = !1, u.forEach((s) => s()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(s) {
      const f = () => i && s(), d = n.subscribe(f);
      return u.add(s), () => {
        d(), u.delete(s);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(s) {
      try {
        return i = !s?.meta?.[qm], a = !i, a && (o || (o = !0, l(c))), n.dispatch(s);
      } finally {
        i = !0;
      }
    }
  });
}, pP = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new Fm(e);
  return n && i.push(Wm(typeof n == "object" ? n : void 0)), i;
};
function mP(e) {
  const t = hP(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    preloadedState: a = void 0,
    enhancers: o = void 0
  } = e || {};
  let u;
  if (typeof r == "function")
    u = r;
  else if (cc(r))
    u = jm(r);
  else
    throw new Error(rt(1));
  let l;
  typeof n == "function" ? l = n(t) : l = t();
  let c = Ni;
  i && (c = dP({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof i == "object" && i
  }));
  const s = Vx(...l), f = pP(s);
  let d = typeof o == "function" ? o(f) : f();
  const v = c(...d);
  return Em(u, a, v);
}
function Km(e) {
  const t = {}, r = [];
  let n;
  const i = {
    addCase(a, o) {
      const u = typeof a == "string" ? a : a.type;
      if (!u)
        throw new Error(rt(28));
      if (u in t)
        throw new Error(rt(29));
      return t[u] = o, i;
    },
    addAsyncThunk(a, o) {
      return o.pending && (t[a.pending.type] = o.pending), o.rejected && (t[a.rejected.type] = o.rejected), o.fulfilled && (t[a.fulfilled.type] = o.fulfilled), o.settled && r.push({
        matcher: a.settled,
        reducer: o.settled
      }), i;
    },
    addMatcher(a, o) {
      return r.push({
        matcher: a,
        reducer: o
      }), i;
    },
    addDefaultCase(a) {
      return n = a, i;
    }
  };
  return e(i), [t, r, n];
}
function yP(e) {
  return typeof e == "function";
}
function gP(e, t) {
  let [r, n, i] = Km(t), a;
  if (yP(e))
    a = () => od(e());
  else {
    const u = od(e);
    a = () => u;
  }
  function o(u = a(), l) {
    let c = [r[l.type], ...n.filter(({
      matcher: s
    }) => s(l)).map(({
      reducer: s
    }) => s)];
    return c.filter((s) => !!s).length === 0 && (c = [i]), c.reduce((s, f) => {
      if (f)
        if (Bt(s)) {
          const v = f(s, l);
          return v === void 0 ? s : v;
        } else {
          if (bt(s))
            return zm(s, (d) => f(d, l));
          {
            const d = f(s, l);
            if (d === void 0) {
              if (s === null)
                return s;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return d;
          }
        }
      return s;
    }, u);
  }
  return o.getInitialState = a, o;
}
var bP = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", wP = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += bP[Math.random() * 64 | 0];
  return t;
}, xP = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function PP(e, t) {
  return `${e}/${t}`;
}
function OP({
  creators: e
} = {}) {
  const t = e?.asyncThunk?.[xP];
  return function(n) {
    const {
      name: i,
      reducerPath: a = i
    } = n;
    if (!i)
      throw new Error(rt(11));
    const o = (typeof n.reducers == "function" ? n.reducers(SP()) : n.reducers) || {}, u = Object.keys(o), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, c = {
      addCase(w, x) {
        const O = typeof w == "string" ? w : w.type;
        if (!O)
          throw new Error(rt(12));
        if (O in l.sliceCaseReducersByType)
          throw new Error(rt(13));
        return l.sliceCaseReducersByType[O] = x, c;
      },
      addMatcher(w, x) {
        return l.sliceMatchers.push({
          matcher: w,
          reducer: x
        }), c;
      },
      exposeAction(w, x) {
        return l.actionCreators[w] = x, c;
      },
      exposeCaseReducer(w, x) {
        return l.sliceCaseReducersByName[w] = x, c;
      }
    };
    u.forEach((w) => {
      const x = o[w], O = {
        reducerName: w,
        type: PP(i, w),
        createNotation: typeof n.reducers == "function"
      };
      EP(x) ? IP(O, x, c, t) : _P(O, x, c);
    });
    function s() {
      const [w = {}, x = [], O = void 0] = typeof n.extraReducers == "function" ? Km(n.extraReducers) : [n.extraReducers], P = {
        ...w,
        ...l.sliceCaseReducersByType
      };
      return gP(n.initialState, (A) => {
        for (let _ in P)
          A.addCase(_, P[_]);
        for (let _ of l.sliceMatchers)
          A.addMatcher(_.matcher, _.reducer);
        for (let _ of x)
          A.addMatcher(_.matcher, _.reducer);
        O && A.addDefaultCase(O);
      });
    }
    const f = (w) => w, d = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new WeakMap();
    let p;
    function h(w, x) {
      return p || (p = s()), p(w, x);
    }
    function m() {
      return p || (p = s()), p.getInitialState();
    }
    function y(w, x = !1) {
      function O(A) {
        let _ = A[w];
        return typeof _ > "u" && x && (_ = si(v, O, m)), _;
      }
      function P(A = f) {
        const _ = si(d, x, () => /* @__PURE__ */ new WeakMap());
        return si(_, A, () => {
          const C = {};
          for (const [T, k] of Object.entries(n.selectors ?? {}))
            C[T] = AP(k, A, () => si(v, A, m), x);
          return C;
        });
      }
      return {
        reducerPath: w,
        getSelectors: P,
        get selectors() {
          return P(O);
        },
        selectSlice: O
      };
    }
    const b = {
      name: i,
      reducer: h,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: m,
      ...y(a),
      injectInto(w, {
        reducerPath: x,
        ...O
      } = {}) {
        const P = x ?? a;
        return w.inject({
          reducerPath: P,
          reducer: h
        }, O), {
          ...b,
          ...y(P, !0)
        };
      }
    };
    return b;
  };
}
function AP(e, t, r, n) {
  function i(a, ...o) {
    let u = t(a);
    return typeof u > "u" && n && (u = r()), e(u, ...o);
  }
  return i.unwrapped = e, i;
}
var Xe = /* @__PURE__ */ OP();
function SP() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function _P({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let a, o;
  if ("reducer" in n) {
    if (r && !jP(n))
      throw new Error(rt(17));
    a = n.reducer, o = n.prepare;
  } else
    a = n;
  i.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, o ? ct(e, o) : ct(e));
}
function EP(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function jP(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function IP({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(rt(18));
  const {
    payloadCreator: a,
    fulfilled: o,
    pending: u,
    rejected: l,
    settled: c,
    options: s
  } = r, f = i(e, a, s);
  n.exposeAction(t, f), o && n.addCase(f.fulfilled, o), u && n.addCase(f.pending, u), l && n.addCase(f.rejected, l), c && n.addMatcher(f.settled, c), n.exposeCaseReducer(t, {
    fulfilled: o || fi,
    pending: u || fi,
    rejected: l || fi,
    settled: c || fi
  });
}
function fi() {
}
var CP = "task", Um = "listener", Hm = "completed", vc = "cancelled", kP = `task-${vc}`, TP = `task-${Hm}`, hl = `${Um}-${vc}`, MP = `${Um}-${Hm}`, $a = class {
  constructor(e) {
    this.code = e, this.message = `${CP} ${vc} (reason: ${e})`;
  }
  name = "TaskAbortError";
  message;
}, hc = (e, t) => {
  if (typeof e != "function")
    throw new TypeError(rt(32));
}, qi = () => {
}, Ym = (e, t = qi) => (e.catch(t), e), Gm = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), Pr = (e) => {
  if (e.aborted)
    throw new $a(e.reason);
};
function Vm(e, t) {
  let r = qi;
  return new Promise((n, i) => {
    const a = () => i(new $a(e.reason));
    if (e.aborted) {
      a();
      return;
    }
    r = Gm(e, a), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = qi;
  });
}
var DP = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (r) {
    return {
      status: r instanceof $a ? "cancelled" : "rejected",
      error: r
    };
  } finally {
    t?.();
  }
}, Wi = (e) => (t) => Ym(Vm(e, t).then((r) => (Pr(e), r))), Xm = (e) => {
  const t = Wi(e);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, {
  assign: Ur
} = Object, ld = {}, Ra = "listenerMiddleware", NP = (e, t) => {
  const r = (n) => Gm(e, () => n.abort(e.reason));
  return (n, i) => {
    hc(n);
    const a = new AbortController();
    r(a);
    const o = DP(async () => {
      Pr(e), Pr(a.signal);
      const u = await n({
        pause: Wi(a.signal),
        delay: Xm(a.signal),
        signal: a.signal
      });
      return Pr(a.signal), u;
    }, () => a.abort(TP));
    return i?.autoJoin && t.push(o.catch(qi)), {
      result: Wi(e)(o),
      cancel() {
        a.abort(kP);
      }
    };
  };
}, $P = (e, t) => {
  const r = async (n, i) => {
    Pr(t);
    let a = () => {
    };
    const u = [new Promise((l, c) => {
      let s = e({
        predicate: n,
        effect: (f, d) => {
          d.unsubscribe(), l([f, d.getState(), d.getOriginalState()]);
        }
      });
      a = () => {
        s(), c();
      };
    })];
    i != null && u.push(new Promise((l) => setTimeout(l, i, null)));
    try {
      const l = await Vm(t, Promise.race(u));
      return Pr(t), l;
    } finally {
      a();
    }
  };
  return (n, i) => Ym(r(n, i));
}, Zm = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: i,
    effect: a
  } = e;
  if (t)
    i = ct(t).match;
  else if (r)
    t = r.type, i = r.match;
  else if (n)
    i = n;
  else if (!i) throw new Error(rt(21));
  return hc(a), {
    predicate: i,
    type: t,
    effect: a
  };
}, Qm = /* @__PURE__ */ Ur((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = Zm(e);
  return {
    id: wP(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(rt(22));
    }
  };
}, {
  withTypes: () => Qm
}), cd = (e, t) => {
  const {
    type: r,
    effect: n,
    predicate: i
  } = Zm(t);
  return Array.from(e.values()).find((a) => (typeof r == "string" ? a.type === r : a.predicate === i) && a.effect === n);
}, pl = (e) => {
  e.pending.forEach((t) => {
    t.abort(hl);
  });
}, RP = (e, t) => () => {
  for (const r of t.keys())
    pl(r);
  e.clear();
}, sd = (e, t, r) => {
  try {
    e(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, Jm = /* @__PURE__ */ Ur(/* @__PURE__ */ ct(`${Ra}/add`), {
  withTypes: () => Jm
}), LP = /* @__PURE__ */ ct(`${Ra}/removeAll`), ey = /* @__PURE__ */ Ur(/* @__PURE__ */ ct(`${Ra}/remove`), {
  withTypes: () => ey
}), zP = (...e) => {
  console.error(`${Ra}/error`, ...e);
}, Kn = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = (v) => {
    const p = r.get(v) ?? 0;
    r.set(v, p + 1);
  }, i = (v) => {
    const p = r.get(v) ?? 1;
    p === 1 ? r.delete(v) : r.set(v, p - 1);
  }, {
    extra: a,
    onError: o = zP
  } = e;
  hc(o);
  const u = (v) => (v.unsubscribe = () => t.delete(v.id), t.set(v.id, v), (p) => {
    v.unsubscribe(), p?.cancelActive && pl(v);
  }), l = (v) => {
    const p = cd(t, v) ?? Qm(v);
    return u(p);
  };
  Ur(l, {
    withTypes: () => l
  });
  const c = (v) => {
    const p = cd(t, v);
    return p && (p.unsubscribe(), v.cancelActive && pl(p)), !!p;
  };
  Ur(c, {
    withTypes: () => c
  });
  const s = async (v, p, h, m) => {
    const y = new AbortController(), b = $P(l, y.signal), w = [];
    try {
      v.pending.add(y), n(v), await Promise.resolve(v.effect(
        p,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        Ur({}, h, {
          getOriginalState: m,
          condition: (x, O) => b(x, O).then(Boolean),
          take: b,
          delay: Xm(y.signal),
          pause: Wi(y.signal),
          extra: a,
          signal: y.signal,
          fork: NP(y.signal, w),
          unsubscribe: v.unsubscribe,
          subscribe: () => {
            t.set(v.id, v);
          },
          cancelActiveListeners: () => {
            v.pending.forEach((x, O, P) => {
              x !== y && (x.abort(hl), P.delete(x));
            });
          },
          cancel: () => {
            y.abort(hl), v.pending.delete(y);
          },
          throwIfCancelled: () => {
            Pr(y.signal);
          }
        })
      ));
    } catch (x) {
      x instanceof $a || sd(o, x, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(w), y.abort(MP), i(v), v.pending.delete(y);
    }
  }, f = RP(t, r);
  return {
    middleware: (v) => (p) => (h) => {
      if (!Im(h))
        return p(h);
      if (Jm.match(h))
        return l(h.payload);
      if (LP.match(h)) {
        f();
        return;
      }
      if (ey.match(h))
        return c(h.payload);
      let m = v.getState();
      const y = () => {
        if (m === ld)
          throw new Error(rt(23));
        return m;
      };
      let b;
      try {
        if (b = p(h), t.size > 0) {
          const w = v.getState(), x = Array.from(t.values());
          for (const O of x) {
            let P = !1;
            try {
              P = O.predicate(h, w, m);
            } catch (A) {
              P = !1, sd(o, A, {
                raisedBy: "predicate"
              });
            }
            P && s(O, h, v, y);
          }
        }
      } finally {
        m = ld;
      }
      return b;
    },
    startListening: l,
    stopListening: c,
    clearListeners: f
  };
};
function rt(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var BP = {
  layoutType: "horizontal",
  width: 0,
  height: 0,
  margin: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
  },
  scale: 1
}, ty = Xe({
  name: "chartLayout",
  initialState: BP,
  reducers: {
    setLayout(e, t) {
      e.layoutType = t.payload;
    },
    setChartSize(e, t) {
      e.width = t.payload.width, e.height = t.payload.height;
    },
    setMargin(e, t) {
      var r, n, i, a;
      e.margin.top = (r = t.payload.top) !== null && r !== void 0 ? r : 0, e.margin.right = (n = t.payload.right) !== null && n !== void 0 ? n : 0, e.margin.bottom = (i = t.payload.bottom) !== null && i !== void 0 ? i : 0, e.margin.left = (a = t.payload.left) !== null && a !== void 0 ? a : 0;
    },
    setScale(e, t) {
      e.scale = t.payload;
    }
  }
}), {
  setMargin: FP,
  setLayout: qP,
  setChartSize: WP,
  setScale: KP
} = ty.actions, UP = ty.reducer;
function ry(e, t, r) {
  return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
}
function q(e) {
  return Number.isFinite(e);
}
function Tt(e) {
  return typeof e == "number" && e > 0 && Number.isFinite(e);
}
function fd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fd(Object(r), !0).forEach(function(n) {
      HP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HP(e, t, r) {
  return (t = YP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YP(e) {
  var t = GP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function GP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ie(e, t, r) {
  return Se(e) || Se(t) ? r : kt(t) ? _r(e, t, r) : typeof t == "function" ? t(e) : r;
}
var VP = (e, t, r) => {
  if (t && r) {
    var {
      width: n,
      height: i
    } = r, {
      align: a,
      verticalAlign: o,
      layout: u
    } = t;
    if ((u === "vertical" || u === "horizontal" && o === "middle") && a !== "center" && D(e[a]))
      return Wr(Wr({}, e), {}, {
        [a]: e[a] + (n || 0)
      });
    if ((u === "horizontal" || u === "vertical" && a === "center") && o !== "middle" && D(e[o]))
      return Wr(Wr({}, e), {}, {
        [o]: e[o] + (i || 0)
      });
  }
  return e;
}, lr = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis", ny = (e, t, r, n) => {
  if (n)
    return e.map((u) => u.coordinate);
  var i, a, o = e.map((u) => (u.coordinate === t && (i = !0), u.coordinate === r && (a = !0), u.coordinate));
  return i || o.push(t), a || o.push(r), o;
}, iy = (e, t, r) => {
  if (!e)
    return null;
  var {
    duplicateDomain: n,
    type: i,
    range: a,
    scale: o,
    realScaleType: u,
    isCategorical: l,
    categoricalDomain: c,
    tickCount: s,
    ticks: f,
    niceTicks: d,
    axisType: v
  } = e;
  if (!o)
    return null;
  var p = u === "scaleBand" && o.bandwidth ? o.bandwidth() / 2 : 2, h = i === "category" && o.bandwidth ? o.bandwidth() / p : 0;
  if (h = v === "angleAxis" && a && a.length >= 2 ? Ae(a[0] - a[1]) * 2 * h : h, f || d) {
    var m = (f || d || []).map((y, b) => {
      var w = n ? n.indexOf(y) : y, x = o.map(w);
      return q(x) ? {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: x + h,
        value: y,
        offset: h,
        index: b
      } : null;
    }).filter(Ye);
    return m;
  }
  return l && c ? c.map((y, b) => {
    var w = o.map(y);
    return q(w) ? {
      coordinate: w + h,
      value: y,
      index: b,
      offset: h
    } : null;
  }).filter(Ye) : o.ticks && s != null ? o.ticks(s).map((y, b) => {
    var w = o.map(y);
    return q(w) ? {
      coordinate: w + h,
      value: y,
      index: b,
      offset: h
    } : null;
  }).filter(Ye) : o.domain().map((y, b) => {
    var w = o.map(y);
    return q(w) ? {
      coordinate: w + h,
      // @ts-expect-error can't use Date as an index
      value: n ? n[y] : y,
      index: b,
      offset: h
    } : null;
  }).filter(Ye);
}, XP = (e, t) => {
  if (!t || t.length !== 2 || !D(t[0]) || !D(t[1]))
    return e;
  var r = Math.min(t[0], t[1]), n = Math.max(t[0], t[1]), i = [e[0], e[1]];
  return (!D(e[0]) || e[0] < r) && (i[0] = r), (!D(e[1]) || e[1] > n) && (i[1] = n), i[0] > n && (i[0] = n), i[1] < r && (i[1] = r), i;
}, ZP = (e) => {
  var t, r = e.length;
  if (!(r <= 0)) {
    var n = (t = e[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0))
      for (var i = 0; i < n; ++i)
        for (var a = 0, o = 0, u = 0; u < r; ++u) {
          var l = e[u], c = l?.[i];
          if (c != null) {
            var s = c[1], f = c[0], d = Ct(s) ? f : s;
            d >= 0 ? (c[0] = a, a += d, c[1] = a) : (c[0] = o, o += d, c[1] = o);
          }
        }
  }
}, QP = (e) => {
  var t, r = e.length;
  if (!(r <= 0)) {
    var n = (t = e[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0))
      for (var i = 0; i < n; ++i)
        for (var a = 0, o = 0; o < r; ++o) {
          var u = e[o], l = u?.[i];
          if (l != null) {
            var c = Ct(l[1]) ? l[0] : l[1];
            c >= 0 ? (l[0] = a, a += c, l[1] = a) : (l[0] = 0, l[1] = 0);
          }
        }
  }
}, JP = {
  sign: ZP,
  // @ts-expect-error definitelytyped types are incorrect
  expand: Sw,
  // @ts-expect-error definitelytyped types are incorrect
  none: Sr,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: _w,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: Ew,
  positive: QP
}, eO = (e, t, r) => {
  var n, i = (n = JP[r]) !== null && n !== void 0 ? n : Sr, a = Aw().keys(t).value((u, l) => Number(ie(u, l, 0))).order(il).offset(i), o = a(e);
  return o.forEach((u, l) => {
    u.forEach((c, s) => {
      var f = ie(e[s], t[l], 0);
      Array.isArray(f) && f.length === 2 && D(f[0]) && D(f[1]) && (c[0] = f[0], c[1] = f[1]);
    });
  }), o;
};
function tO(e) {
  return e == null ? void 0 : String(e);
}
var dd = (e) => {
  var {
    axis: t,
    ticks: r,
    offset: n,
    bandSize: i,
    entry: a,
    index: o
  } = e;
  if (t.type === "category")
    return r[o] ? r[o].coordinate + n : null;
  var u = ie(a, t.dataKey, t.scale.domain()[o]);
  if (Se(u))
    return null;
  var l = t.scale.map(u);
  return D(l) ? l - i / 2 + n : null;
}, rO = (e) => {
  var {
    numericAxis: t
  } = e, r = t.scale.domain();
  if (t.type === "number") {
    var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]);
    return n <= 0 && i >= 0 ? 0 : i < 0 ? i : n;
  }
  return r[0];
}, nO = (e) => {
  var t = e.flat(2).filter(D);
  return [Math.min(...t), Math.max(...t)];
}, iO = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]], aO = (e, t, r) => {
  if (e != null)
    return iO(Object.keys(e).reduce((n, i) => {
      var a = e[i];
      if (!a)
        return n;
      var {
        stackedData: o
      } = a, u = o.reduce((l, c) => {
        var s = ry(c, t, r), f = nO(s);
        return !q(f[0]) || !q(f[1]) ? l : [Math.min(l[0], f[0]), Math.max(l[1], f[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(u[0], n[0]), Math.max(u[1], n[1])];
    }, [1 / 0, -1 / 0]));
}, vd = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, hd = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Ki = (e, t, r) => {
  if (e && e.scale && e.scale.bandwidth) {
    var n = e.scale.bandwidth();
    if (!r || n > 0)
      return n;
  }
  if (e && t && t.length >= 2) {
    for (var i = ja(t, (s) => s.coordinate), a = 1 / 0, o = 1, u = i.length; o < u; o++) {
      var l = i[o], c = i[o - 1];
      a = Math.min((l?.coordinate || 0) - (c?.coordinate || 0), a);
    }
    return a === 1 / 0 ? 0 : a;
  }
  return r ? void 0 : 0;
};
function pd(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: r,
    payload: n,
    value: i,
    name: a
  } = e;
  return Wr(Wr({}, t), {}, {
    dataKey: r,
    payload: n,
    value: i,
    name: a
  });
}
function La(e, t) {
  if (e)
    return String(e);
  if (typeof t == "string")
    return t;
}
var oO = (e, t) => {
  if (t === "horizontal")
    return e.chartX;
  if (t === "vertical")
    return e.chartY;
}, uO = (e, t) => t === "centric" ? e.angle : e.radius, Yt = (e) => e.layout.width, Gt = (e) => e.layout.height, lO = (e) => e.layout.scale, ay = (e) => e.layout.margin, za = S((e) => e.cartesianAxis.xAxis, (e) => Object.values(e)), Ba = S((e) => e.cartesianAxis.yAxis, (e) => Object.values(e)), oy = "data-recharts-item-index", uy = "data-recharts-item-id", Un = 60;
function md(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function di(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? md(Object(r), !0).forEach(function(n) {
      cO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : md(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cO(e, t, r) {
  return (t = sO(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sO(e) {
  var t = fO(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fO(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var dO = (e) => e.brush.height;
function vO(e) {
  var t = Ba(e);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : Un;
      return r + i;
    }
    return r;
  }, 0);
}
function hO(e) {
  var t = Ba(e);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : Un;
      return r + i;
    }
    return r;
  }, 0);
}
function pO(e) {
  var t = za(e);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function mO(e) {
  var t = za(e);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var ye = S([Yt, Gt, ay, dO, vO, hO, pO, mO, _m, Wx], (e, t, r, n, i, a, o, u, l, c) => {
  var s = {
    left: (r.left || 0) + i,
    right: (r.right || 0) + a
  }, f = {
    top: (r.top || 0) + o,
    bottom: (r.bottom || 0) + u
  }, d = di(di({}, f), s), v = d.bottom;
  d.bottom += n, d = VP(d, l, c);
  var p = e - d.left - d.right, h = t - d.top - d.bottom;
  return di(di({
    brushBottom: v
  }, d), {}, {
    // never return negative values for height and width
    width: Math.max(p, 0),
    height: Math.max(h, 0)
  });
}), yO = S(ye, (e) => ({
  x: e.left,
  y: e.top,
  width: e.width,
  height: e.height
})), pc = S(Yt, Gt, (e, t) => ({
  x: 0,
  y: 0,
  width: e,
  height: t
})), gO = /* @__PURE__ */ Ve(null), Ze = () => ft(gO) != null, Fa = (e) => e.brush, qa = S([Fa, ye, ay], (e, t, r) => ({
  height: e.height,
  x: D(e.x) ? e.x : t.left,
  y: D(e.y) ? e.y : t.top + t.height + t.brushBottom - (r?.bottom || 0),
  width: D(e.width) ? e.width : t.width
})), wu = {}, xu = {}, Pu = {}, yd;
function bO() {
  return yd || (yd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n, { signal: i, edges: a } = {}) {
      let o, u = null;
      const l = a != null && a.includes("leading"), c = a == null || a.includes("trailing"), s = () => {
        u !== null && (r.apply(o, u), o = void 0, u = null);
      }, f = () => {
        c && s(), h();
      };
      let d = null;
      const v = () => {
        d != null && clearTimeout(d), d = setTimeout(() => {
          d = null, f();
        }, n);
      }, p = () => {
        d !== null && (clearTimeout(d), d = null);
      }, h = () => {
        p(), o = void 0, u = null;
      }, m = () => {
        s();
      }, y = function(...b) {
        if (i?.aborted)
          return;
        o = this, u = b;
        const w = d == null;
        v(), l && w && s();
      };
      return y.schedule = v, y.cancel = h, y.flush = m, i?.addEventListener("abort", h, { once: !0 }), y;
    }
    e.debounce = t;
  })(Pu)), Pu;
}
var gd;
function wO() {
  return gd || (gd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ bO();
    function r(n, i = 0, a = {}) {
      typeof a != "object" && (a = {});
      const { leading: o = !1, trailing: u = !0, maxWait: l } = a, c = Array(2);
      o && (c[0] = "leading"), u && (c[1] = "trailing");
      let s, f = null;
      const d = t.debounce(function(...h) {
        s = n.apply(this, h), f = null;
      }, i, { edges: c }), v = function(...h) {
        return l != null && (f === null && (f = Date.now()), Date.now() - f >= l) ? (s = n.apply(this, h), f = Date.now(), d.cancel(), d.schedule(), s) : (d.apply(this, h), s);
      }, p = () => (d.flush(), s);
      return v.cancel = d.cancel, v.flush = p, v;
    }
    e.debounce = r;
  })(xu)), xu;
}
var bd;
function xO() {
  return bd || (bd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ wO();
    function r(n, i = 0, a = {}) {
      const { leading: o = !0, trailing: u = !0 } = a;
      return t.debounce(n, i, {
        leading: o,
        maxWait: i,
        trailing: u
      });
    }
    e.throttle = r;
  })(wu)), wu;
}
var Ou, wd;
function PO() {
  return wd || (wd = 1, Ou = xO().throttle), Ou;
}
var OO = /* @__PURE__ */ PO();
const AO = /* @__PURE__ */ ur(OO);
var Ui = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, () => i[o++]));
    }
}, _t = {
  width: "100%",
  height: "100%",
  debounce: 0,
  minWidth: 0,
  initialDimension: {
    width: -1,
    height: -1
  }
}, ly = (e, t, r) => {
  var {
    width: n = _t.width,
    height: i = _t.height,
    aspect: a,
    maxHeight: o
  } = r, u = Er(n) ? e : Number(n), l = Er(i) ? t : Number(i);
  return a && a > 0 && (u ? l = u / a : l && (u = l * a), o && l != null && l > o && (l = o)), {
    calculatedWidth: u,
    calculatedHeight: l
  };
}, SO = {
  width: 0,
  height: 0,
  overflow: "visible"
}, _O = {
  width: 0,
  overflowX: "visible"
}, EO = {
  height: 0,
  overflowY: "visible"
}, jO = {}, IO = (e) => {
  var {
    width: t,
    height: r
  } = e, n = Er(t), i = Er(r);
  return n && i ? SO : n ? _O : i ? EO : jO;
};
function CO(e) {
  var {
    width: t,
    height: r,
    aspect: n
  } = e, i = t, a = r;
  return i === void 0 && a === void 0 ? (i = _t.width, a = _t.height) : i === void 0 ? i = n && n > 0 ? void 0 : _t.width : a === void 0 && (a = n && n > 0 ? void 0 : _t.height), {
    width: i,
    height: a
  };
}
function ml() {
  return ml = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ml.apply(null, arguments);
}
function xd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xd(Object(r), !0).forEach(function(n) {
      kO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kO(e, t, r) {
  return (t = TO(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TO(e) {
  var t = MO(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function MO(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var cy = /* @__PURE__ */ Ve(_t.initialDimension);
function DO(e) {
  return Tt(e.width) && Tt(e.height);
}
function sy(e) {
  var {
    children: t,
    width: r,
    height: n
  } = e, i = wt(() => ({
    width: r,
    height: n
  }), [r, n]);
  return DO(i) ? /* @__PURE__ */ g.createElement(cy.Provider, {
    value: i
  }, t) : null;
}
var mc = () => ft(cy), NO = /* @__PURE__ */ _e((e, t) => {
  var {
    aspect: r,
    initialDimension: n = _t.initialDimension,
    width: i,
    height: a,
    /*
     * default min-width to 0 if not specified - 'auto' causes issues with flexbox
     * https://github.com/recharts/recharts/issues/172
     */
    minWidth: o = _t.minWidth,
    minHeight: u,
    maxHeight: l,
    children: c,
    debounce: s = _t.debounce,
    id: f,
    className: d,
    onResize: v,
    style: p = {}
  } = e, h = H(null), m = H();
  m.current = v, zp(t, () => h.current);
  var [y, b] = Fe({
    containerWidth: n.width,
    containerHeight: n.height
  }), w = re((_, C) => {
    b((T) => {
      var k = Math.round(_), E = Math.round(C);
      return T.containerWidth === k && T.containerHeight === E ? T : {
        containerWidth: k,
        containerHeight: E
      };
    });
  }, []);
  Te(() => {
    if (h.current == null || typeof ResizeObserver > "u")
      return en;
    var _ = (E) => {
      var R, $ = E[0];
      if ($ != null) {
        var {
          width: z,
          height: F
        } = $.contentRect;
        w(z, F), (R = m.current) === null || R === void 0 || R.call(m, z, F);
      }
    };
    s > 0 && (_ = AO(_, s, {
      trailing: !0,
      leading: !1
    }));
    var C = new ResizeObserver(_), {
      width: T,
      height: k
    } = h.current.getBoundingClientRect();
    return w(T, k), C.observe(h.current), () => {
      C.disconnect();
    };
  }, [w, s]);
  var {
    containerWidth: x,
    containerHeight: O
  } = y;
  Ui(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var {
    calculatedWidth: P,
    calculatedHeight: A
  } = ly(x, O, {
    width: i,
    height: a,
    aspect: r,
    maxHeight: l
  });
  return Ui(P != null && P > 0 || A != null && A > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, P, A, i, a, o, u, r), /* @__PURE__ */ g.createElement("div", {
    id: f ? "".concat(f) : void 0,
    className: Z("recharts-responsive-container", d),
    style: Pd(Pd({}, p), {}, {
      width: i,
      height: a,
      minWidth: o,
      minHeight: u,
      maxHeight: l
    }),
    ref: h
  }, /* @__PURE__ */ g.createElement("div", {
    style: IO({
      width: i,
      height: a
    })
  }, /* @__PURE__ */ g.createElement(sy, {
    width: P,
    height: A
  }, c)));
}), h$ = /* @__PURE__ */ _e((e, t) => {
  var r = mc();
  if (Tt(r.width) && Tt(r.height))
    return e.children;
  var {
    width: n,
    height: i
  } = CO({
    width: e.width,
    height: e.height,
    aspect: e.aspect
  }), {
    calculatedWidth: a,
    calculatedHeight: o
  } = ly(void 0, void 0, {
    width: n,
    height: i,
    aspect: e.aspect,
    maxHeight: e.maxHeight
  });
  return D(a) && D(o) ? /* @__PURE__ */ g.createElement(sy, {
    width: a,
    height: o
  }, e.children) : /* @__PURE__ */ g.createElement(NO, ml({}, e, {
    width: n,
    height: i,
    ref: t
  }));
});
function yc(e) {
  if (e)
    return {
      x: e.x,
      y: e.y,
      upperWidth: "upperWidth" in e ? e.upperWidth : e.width,
      lowerWidth: "lowerWidth" in e ? e.lowerWidth : e.width,
      width: e.width,
      height: e.height
    };
}
var Wa = () => {
  var e, t = Ze(), r = N(yO), n = N(qa), i = (e = N(Fa)) === null || e === void 0 ? void 0 : e.padding;
  return !t || !n || !i ? r : {
    width: n.width - i.left - i.right,
    height: n.height - i.top - i.bottom,
    x: i.left,
    y: i.top
  };
}, $O = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  brushBottom: 0
}, fy = () => {
  var e;
  return (e = N(ye)) !== null && e !== void 0 ? e : $O;
}, dy = () => N(Yt), vy = () => N(Gt), G = (e) => e.layout.layoutType, tn = () => N(G), hy = () => {
  var e = tn();
  if (e === "horizontal" || e === "vertical")
    return e;
}, py = (e) => {
  var t = e.layout.layoutType;
  if (t === "centric" || t === "radial")
    return t;
}, RO = () => {
  var e = tn();
  return e !== void 0;
}, Hn = (e) => {
  var t = ue(), r = Ze(), {
    width: n,
    height: i
  } = e, a = mc(), o = n, u = i;
  return a && (o = a.width > 0 ? a.width : n, u = a.height > 0 ? a.height : i), Te(() => {
    !r && Tt(o) && Tt(u) && t(WP({
      width: o,
      height: u
    }));
  }, [t, r, o, u]), null;
}, my = /* @__PURE__ */ Symbol.for("immer-nothing"), Od = /* @__PURE__ */ Symbol.for("immer-draftable"), nt = /* @__PURE__ */ Symbol.for("immer-state");
function pt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var kn = Object.getPrototypeOf;
function Gr(e) {
  return !!e && !!e[nt];
}
function Ir(e) {
  return e ? yy(e) || Array.isArray(e) || !!e[Od] || !!e.constructor?.[Od] || Yn(e) || Ua(e) : !1;
}
var LO = Object.prototype.constructor.toString(), Ad = /* @__PURE__ */ new WeakMap();
function yy(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  if (r === Object)
    return !0;
  if (typeof r != "function")
    return !1;
  let n = Ad.get(r);
  return n === void 0 && (n = Function.toString.call(r), Ad.set(r, n)), n === LO;
}
function Hi(e, t, r = !0) {
  Ka(e) === 0 ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((i) => {
    t(i, e[i], e);
  }) : e.forEach((n, i) => t(i, n, e));
}
function Ka(e) {
  const t = e[nt];
  return t ? t.type_ : Array.isArray(e) ? 1 : Yn(e) ? 2 : Ua(e) ? 3 : 0;
}
function yl(e, t) {
  return Ka(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function gy(e, t, r) {
  const n = Ka(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function zO(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Yn(e) {
  return e instanceof Map;
}
function Ua(e) {
  return e instanceof Set;
}
function mr(e) {
  return e.copy_ || e.base_;
}
function gl(e, t) {
  if (Yn(e))
    return new Map(e);
  if (Ua(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = yy(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[nt];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], u = n[o];
      u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (n[o] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: u.enumerable,
        value: e[o]
      });
    }
    return Object.create(kn(e), n);
  } else {
    const n = kn(e);
    if (n !== null && r)
      return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function gc(e, t = !1) {
  return Ha(e) || Gr(e) || !Ir(e) || (Ka(e) > 1 && Object.defineProperties(e, {
    set: vi,
    add: vi,
    clear: vi,
    delete: vi
  }), Object.freeze(e), t && Object.values(e).forEach((r) => gc(r, !0))), e;
}
function BO() {
  pt(2);
}
var vi = {
  value: BO
};
function Ha(e) {
  return e === null || typeof e != "object" ? !0 : Object.isFrozen(e);
}
var FO = {};
function Cr(e) {
  const t = FO[e];
  return t || pt(0, e), t;
}
var Tn;
function by() {
  return Tn;
}
function qO(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Sd(e, t) {
  t && (Cr("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function bl(e) {
  wl(e), e.drafts_.forEach(WO), e.drafts_ = null;
}
function wl(e) {
  e === Tn && (Tn = e.parent_);
}
function _d(e) {
  return Tn = qO(Tn, e);
}
function WO(e) {
  const t = e[nt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Ed(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[nt].modified_ && (bl(t), pt(4)), Ir(e) && (e = Yi(t, e), t.parent_ || Gi(t, e)), t.patches_ && Cr("Patches").generateReplacementPatches_(
    r[nt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Yi(t, r, []), bl(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== my ? e : void 0;
}
function Yi(e, t, r) {
  if (Ha(t))
    return t;
  const n = e.immer_.shouldUseStrictIteration(), i = t[nt];
  if (!i)
    return Hi(
      t,
      (a, o) => jd(e, i, t, a, o, r),
      n
    ), t;
  if (i.scope_ !== e)
    return t;
  if (!i.modified_)
    return Gi(e, i.base_, !0), i.base_;
  if (!i.finalized_) {
    i.finalized_ = !0, i.scope_.unfinalizedDrafts_--;
    const a = i.copy_;
    let o = a, u = !1;
    i.type_ === 3 && (o = new Set(a), a.clear(), u = !0), Hi(
      o,
      (l, c) => jd(
        e,
        i,
        a,
        l,
        c,
        r,
        u
      ),
      n
    ), Gi(e, a, !1), r && e.patches_ && Cr("Patches").generatePatches_(
      i,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return i.copy_;
}
function jd(e, t, r, n, i, a, o) {
  if (i == null || typeof i != "object" && !o)
    return;
  const u = Ha(i);
  if (!(u && !o)) {
    if (Gr(i)) {
      const l = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
      !yl(t.assigned_, n) ? a.concat(n) : void 0, c = Yi(e, i, l);
      if (gy(r, n, c), Gr(c))
        e.canAutoFreeze_ = !1;
      else
        return;
    } else o && r.add(i);
    if (Ir(i) && !u) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === i && u)
        return;
      Yi(e, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && (Yn(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && Gi(e, i);
    }
  }
}
function Gi(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && gc(t, r);
}
function KO(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : by(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = n, a = bc;
  r && (i = [n], a = Mn);
  const { revoke: o, proxy: u } = Proxy.revocable(i, a);
  return n.draft_ = u, n.revoke_ = o, u;
}
var bc = {
  get(e, t) {
    if (t === nt)
      return e;
    const r = mr(e);
    if (!yl(r, t))
      return UO(e, r, t);
    const n = r[t];
    return e.finalized_ || !Ir(n) ? n : n === Au(e.base_, t) ? (Su(e), e.copy_[t] = Pl(n, e)) : n;
  },
  has(e, t) {
    return t in mr(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(mr(e));
  },
  set(e, t, r) {
    const n = wy(mr(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = Au(mr(e), t), a = i?.[nt];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (zO(r, i) && (r !== void 0 || yl(e.base_, t)))
        return !0;
      Su(e), xl(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Au(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Su(e), xl(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = mr(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    pt(11);
  },
  getPrototypeOf(e) {
    return kn(e.base_);
  },
  setPrototypeOf() {
    pt(12);
  }
}, Mn = {};
Hi(bc, (e, t) => {
  Mn[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Mn.deleteProperty = function(e, t) {
  return Mn.set.call(this, e, t, void 0);
};
Mn.set = function(e, t, r) {
  return bc.set.call(this, e[0], t, r, e[0]);
};
function Au(e, t) {
  const r = e[nt];
  return (r ? mr(r) : e)[t];
}
function UO(e, t, r) {
  const n = wy(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function wy(e, t) {
  if (!(t in e))
    return;
  let r = kn(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = kn(r);
  }
}
function xl(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && xl(e.parent_));
}
function Su(e) {
  e.copy_ || (e.copy_ = gl(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var HO = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !0, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const a = r;
        r = t;
        const o = this;
        return function(l = a, ...c) {
          return o.produce(l, (s) => r.call(this, s, ...c));
        };
      }
      typeof r != "function" && pt(6), n !== void 0 && typeof n != "function" && pt(7);
      let i;
      if (Ir(t)) {
        const a = _d(this), o = Pl(t, void 0);
        let u = !0;
        try {
          i = r(o), u = !1;
        } finally {
          u ? bl(a) : wl(a);
        }
        return Sd(a, n), Ed(i, a);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === my && (i = void 0), this.autoFreeze_ && gc(i, !0), n) {
          const a = [], o = [];
          Cr("Patches").generateReplacementPatches_(t, i, a, o), n(a, o);
        }
        return i;
      } else
        pt(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (o, ...u) => this.produceWithPatches(o, (l) => t(l, ...u));
      let n, i;
      return [this.produce(t, r, (o, u) => {
        n = o, i = u;
      }), n, i];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy), typeof e?.useStrictIteration == "boolean" && this.setUseStrictIteration(e.useStrictIteration);
  }
  createDraft(e) {
    Ir(e) || pt(8), Gr(e) && (e = YO(e));
    const t = _d(this), r = Pl(e, void 0);
    return r[nt].isManual_ = !0, wl(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[nt];
    (!r || !r.isManual_) && pt(9);
    const { scope_: n } = r;
    return Sd(n, t), Ed(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(e) {
    this.useStrictIteration_ = e;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Cr("Patches").applyPatches_;
    return Gr(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function Pl(e, t) {
  const r = Yn(e) ? Cr("MapSet").proxyMap_(e, t) : Ua(e) ? Cr("MapSet").proxySet_(e, t) : KO(e, t);
  return (t ? t.scope_ : by()).drafts_.push(r), r;
}
function YO(e) {
  return Gr(e) || pt(10, e), xy(e);
}
function xy(e) {
  if (!Ir(e) || Ha(e))
    return e;
  const t = e[nt];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = gl(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = gl(e, !0);
  return Hi(
    r,
    (i, a) => {
      gy(r, i, xy(a));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var GO = new HO();
GO.produce;
var VO = {
  settings: {
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    itemSorter: "value"
  },
  size: {
    width: 0,
    height: 0
  },
  payload: []
}, Py = Xe({
  name: "legend",
  initialState: VO,
  reducers: {
    setLegendSize(e, t) {
      e.size.width = t.payload.width, e.size.height = t.payload.height;
    },
    setLegendSettings(e, t) {
      e.settings.align = t.payload.align, e.settings.layout = t.payload.layout, e.settings.verticalAlign = t.payload.verticalAlign, e.settings.itemSorter = t.payload.itemSorter;
    },
    addLegendPayload: {
      reducer(e, t) {
        e.payload.push(t.payload);
      },
      prepare: ae()
    },
    replaceLegendPayload: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = yt(e).payload.indexOf(r);
        i > -1 && (e.payload[i] = n);
      },
      prepare: ae()
    },
    removeLegendPayload: {
      reducer(e, t) {
        var r = yt(e).payload.indexOf(t.payload);
        r > -1 && e.payload.splice(r, 1);
      },
      prepare: ae()
    }
  }
}), {
  setLegendSize: p$,
  setLegendSettings: m$,
  addLegendPayload: Oy,
  replaceLegendPayload: Ay,
  removeLegendPayload: Sy
} = Py.actions, XO = Py.reducer;
function Ol() {
  return Ol = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ol.apply(null, arguments);
}
function Id(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Id(Object(r), !0).forEach(function(n) {
      ZO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Id(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ZO(e, t, r) {
  return (t = QO(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QO(e) {
  var t = JO(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function JO(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function e1(e) {
  return Array.isArray(e) && kt(e[0]) && kt(e[1]) ? e.join(" ~ ") : e;
}
var Lr = {
  separator: " : ",
  contentStyle: {
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  },
  itemStyle: {
    display: "block",
    paddingTop: 4,
    paddingBottom: 4,
    color: "#000"
  },
  labelStyle: {},
  accessibilityLayer: !1
}, t1 = (e) => {
  var {
    separator: t = Lr.separator,
    contentStyle: r,
    itemStyle: n,
    labelStyle: i = Lr.labelStyle,
    payload: a,
    formatter: o,
    itemSorter: u,
    wrapperClassName: l,
    labelClassName: c,
    label: s,
    labelFormatter: f,
    accessibilityLayer: d = Lr.accessibilityLayer
  } = e, v = () => {
    if (a && a.length) {
      var O = {
        padding: 0,
        margin: 0
      }, P = (u ? ja(a, u) : a).map((A, _) => {
        if (A.type === "none")
          return null;
        var C = A.formatter || o || e1, {
          value: T,
          name: k
        } = A, E = T, R = k;
        if (C) {
          var $ = C(T, k, A, _, a);
          if (Array.isArray($))
            [E, R] = $;
          else if ($ != null)
            E = $;
          else
            return null;
        }
        var z = vn(vn({}, Lr.itemStyle), {}, {
          color: A.color || Lr.itemStyle.color
        }, n);
        return /* @__PURE__ */ g.createElement("li", {
          className: "recharts-tooltip-item",
          key: "tooltip-item-".concat(_),
          style: z
        }, kt(R) ? /* @__PURE__ */ g.createElement("span", {
          className: "recharts-tooltip-item-name"
        }, R) : null, kt(R) ? /* @__PURE__ */ g.createElement("span", {
          className: "recharts-tooltip-item-separator"
        }, t) : null, /* @__PURE__ */ g.createElement("span", {
          className: "recharts-tooltip-item-value"
        }, E), /* @__PURE__ */ g.createElement("span", {
          className: "recharts-tooltip-item-unit"
        }, A.unit || ""));
      });
      return /* @__PURE__ */ g.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: O
      }, P);
    }
    return null;
  }, p = vn(vn({}, Lr.contentStyle), r), h = vn({
    margin: 0
  }, i), m = !Se(s), y = m ? s : "", b = Z("recharts-default-tooltip", l), w = Z("recharts-tooltip-label", c);
  m && f && a !== void 0 && a !== null && (y = f(s, a));
  var x = d ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ g.createElement("div", Ol({
    className: b,
    style: p
  }, x), /* @__PURE__ */ g.createElement("p", {
    className: w,
    style: h
  }, /* @__PURE__ */ g.isValidElement(y) ? y : "".concat(y)), v());
}, hn = "recharts-tooltip-wrapper", r1 = {
  visibility: "hidden"
};
function n1(e) {
  var {
    coordinate: t,
    translateX: r,
    translateY: n
  } = e;
  return Z(hn, {
    ["".concat(hn, "-right")]: D(r) && t && D(t.x) && r >= t.x,
    ["".concat(hn, "-left")]: D(r) && t && D(t.x) && r < t.x,
    ["".concat(hn, "-bottom")]: D(n) && t && D(t.y) && n >= t.y,
    ["".concat(hn, "-top")]: D(n) && t && D(t.y) && n < t.y
  });
}
function Cd(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    key: n,
    offset: i,
    position: a,
    reverseDirection: o,
    tooltipDimension: u,
    viewBox: l,
    viewBoxDimension: c
  } = e;
  if (a && D(a[n]))
    return a[n];
  var s = r[n] - u - (i > 0 ? i : 0), f = r[n] + i;
  if (t[n])
    return o[n] ? s : f;
  var d = l[n];
  if (d == null)
    return 0;
  if (o[n]) {
    var v = s, p = d;
    return v < p ? Math.max(f, d) : Math.max(s, d);
  }
  if (c == null)
    return 0;
  var h = f + u, m = d + c;
  return h > m ? Math.max(s, d) : Math.max(f, d);
}
function i1(e) {
  var {
    translateX: t,
    translateY: r,
    useTranslate3d: n
  } = e;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function a1(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    offsetTop: n,
    offsetLeft: i,
    position: a,
    reverseDirection: o,
    tooltipBox: u,
    useTranslate3d: l,
    viewBox: c
  } = e, s, f, d;
  return u.height > 0 && u.width > 0 && r ? (f = Cd({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offset: i,
    position: a,
    reverseDirection: o,
    tooltipDimension: u.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), d = Cd({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offset: n,
    position: a,
    reverseDirection: o,
    tooltipDimension: u.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), s = i1({
    translateX: f,
    translateY: d,
    useTranslate3d: l
  })) : s = r1, {
    cssProperties: s,
    cssClasses: n1({
      translateX: f,
      translateY: d,
      coordinate: r
    })
  };
}
function kd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kd(Object(r), !0).forEach(function(n) {
      Al(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Al(e, t, r) {
  return (t = o1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function o1(e) {
  var t = u1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function u1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class l1 extends Bp {
  constructor() {
    super(...arguments), Al(this, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      }
    }), Al(this, "handleKeyDown", (t) => {
      if (t.key === "Escape") {
        var r, n, i, a;
        this.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (r = (n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== null && r !== void 0 ? r : 0,
            y: (i = (a = this.props.coordinate) === null || a === void 0 ? void 0 : a.y) !== null && i !== void 0 ? i : 0
          }
        });
      }
    });
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  componentDidUpdate() {
    var t, r;
    this.state.dismissed && (((t = this.props.coordinate) === null || t === void 0 ? void 0 : t.x) !== this.state.dismissedAtCoordinate.x || ((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
  }
  render() {
    var {
      active: t,
      allowEscapeViewBox: r,
      animationDuration: n,
      animationEasing: i,
      children: a,
      coordinate: o,
      hasPayload: u,
      isAnimationActive: l,
      offset: c,
      position: s,
      reverseDirection: f,
      useTranslate3d: d,
      viewBox: v,
      wrapperStyle: p,
      lastBoundingBox: h,
      innerRef: m,
      hasPortalFromProps: y
    } = this.props, b = typeof c == "number" ? c : c.x, w = typeof c == "number" ? c : c.y, {
      cssClasses: x,
      cssProperties: O
    } = a1({
      allowEscapeViewBox: r,
      coordinate: o,
      offsetLeft: b,
      offsetTop: w,
      position: s,
      reverseDirection: f,
      tooltipBox: {
        height: h.height,
        width: h.width
      },
      useTranslate3d: d,
      viewBox: v
    }), P = y ? {} : hi(hi({
      transition: l && t ? "transform ".concat(n, "ms ").concat(i) : void 0
    }, O), {}, {
      pointerEvents: "none",
      visibility: !this.state.dismissed && t && u ? "visible" : "hidden",
      position: "absolute",
      top: 0,
      left: 0
    }), A = hi(hi({}, P), {}, {
      visibility: !this.state.dismissed && t && u ? "visible" : "hidden"
    }, p);
    return (
      // This element allow listening to the `Escape` key. See https://github.com/recharts/recharts/pull/2925
      /* @__PURE__ */ g.createElement("div", {
        // @ts-expect-error typescript library does not recognize xmlns attribute, but it's required for an HTML chunk inside SVG.
        xmlns: "http://www.w3.org/1999/xhtml",
        tabIndex: -1,
        className: x,
        style: A,
        ref: m
      }, a)
    );
  }
}
var _y = () => {
  var e;
  return (e = N((t) => t.rootProps.accessibilityLayer)) !== null && e !== void 0 ? e : !0;
};
function Sl() {
  return Sl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sl.apply(null, arguments);
}
function Td(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Md(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Td(Object(r), !0).forEach(function(n) {
      c1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Td(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function c1(e, t, r) {
  return (t = s1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function s1(e) {
  var t = f1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function f1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Dd = {
  curveBasisClosed: vw,
  curveBasisOpen: hw,
  curveBasis: dw,
  curveBumpX: Qb,
  curveBumpY: Jb,
  curveLinearClosed: pw,
  curveLinear: Sa,
  curveMonotoneX: mw,
  curveMonotoneY: yw,
  curveNatural: gw,
  curveStep: bw,
  curveStepAfter: xw,
  curveStepBefore: ww
}, Vi = (e) => q(e.x) && q(e.y), Nd = (e) => e.base != null && Vi(e.base) && Vi(e), pn = (e) => e.x, mn = (e) => e.y, d1 = (e, t) => {
  if (typeof e == "function")
    return e;
  var r = "curve".concat(qn(e));
  if ((r === "curveMonotone" || r === "curveBump") && t) {
    var n = Dd["".concat(r).concat(t === "vertical" ? "Y" : "X")];
    if (n)
      return n;
  }
  return Dd[r] || Sa;
}, $d = {
  connectNulls: !1,
  type: "linear"
}, v1 = (e) => {
  var {
    type: t = $d.type,
    points: r = [],
    baseLine: n,
    layout: i,
    connectNulls: a = $d.connectNulls
  } = e, o = d1(t, i), u = a ? r.filter(Vi) : r;
  if (Array.isArray(n)) {
    var l, c = r.map((p, h) => Md(Md({}, p), {}, {
      base: n[h]
    }));
    i === "vertical" ? l = oi().y(mn).x1(pn).x0((p) => p.base.x) : l = oi().x(pn).y1(mn).y0((p) => p.base.y);
    var s = l.defined(Nd).curve(o), f = a ? c.filter(Nd) : c;
    return s(f);
  }
  var d;
  i === "vertical" && D(n) ? d = oi().y(mn).x1(pn).x0(n) : D(n) ? d = oi().x(pn).y1(mn).y0(n) : d = Jp().x(pn).y(mn);
  var v = d.defined(Vi).curve(o);
  return v(u);
}, wc = (e) => {
  var {
    className: t,
    points: r,
    path: n,
    pathRef: i
  } = e, a = tn();
  if ((!r || !r.length) && !n)
    return null;
  var o = {
    type: e.type,
    points: e.points,
    baseLine: e.baseLine,
    layout: e.layout || a,
    connectNulls: e.connectNulls
  }, u = r && r.length ? v1(o) : n;
  return /* @__PURE__ */ g.createElement("path", Sl({}, gt(e), Uw(e), {
    className: Z("recharts-curve", t),
    d: u === null ? void 0 : u,
    ref: i
  }));
}, h1 = ["x", "y", "top", "left", "width", "height", "className"];
function _l() {
  return _l = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _l.apply(null, arguments);
}
function Rd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function p1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rd(Object(r), !0).forEach(function(n) {
      m1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function m1(e, t, r) {
  return (t = y1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function y1(e) {
  var t = g1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function g1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function b1(e, t) {
  if (e == null) return {};
  var r, n, i = w1(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function w1(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var x1 = (e, t, r, n, i, a) => "M".concat(e, ",").concat(i, "v").concat(n, "M").concat(a, ",").concat(t, "h").concat(r), P1 = (e) => {
  var {
    x: t = 0,
    y: r = 0,
    top: n = 0,
    left: i = 0,
    width: a = 0,
    height: o = 0,
    className: u
  } = e, l = b1(e, h1), c = p1({
    x: t,
    y: r,
    top: n,
    left: i,
    width: a,
    height: o
  }, l);
  return !D(t) || !D(r) || !D(a) || !D(o) || !D(n) || !D(i) ? null : /* @__PURE__ */ g.createElement("path", _l({}, lt(c), {
    className: Z("recharts-cross", u),
    d: x1(t, r, a, o, n, i)
  }));
};
function O1(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function Ld(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ld(Object(r), !0).forEach(function(n) {
      A1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ld(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A1(e, t, r) {
  return (t = S1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function S1(e) {
  var t = _1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var E1 = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), Ey = (e, t, r) => e.map((n) => "".concat(E1(n), " ").concat(t, "ms ").concat(r)).join(","), j1 = (e, t) => [Object.keys(e), Object.keys(t)].reduce((r, n) => r.filter((i) => n.includes(i))), Dn = (e, t) => Object.keys(t).reduce((r, n) => zd(zd({}, r), {}, {
  [n]: e(n, t[n])
}), {});
function Bd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bd(Object(r), !0).forEach(function(n) {
      I1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function I1(e, t, r) {
  return (t = C1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function C1(e) {
  var t = k1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function k1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Xi = (e, t, r) => e + (t - e) * r, El = (e) => {
  var {
    from: t,
    to: r
  } = e;
  return t !== r;
}, jy = (e, t, r) => {
  var n = Dn((i, a) => {
    if (El(a)) {
      var [o, u] = e(a.from, a.to, a.velocity);
      return me(me({}, a), {}, {
        from: o,
        velocity: u
      });
    }
    return a;
  }, t);
  return r < 1 ? Dn((i, a) => El(a) && n[i] != null ? me(me({}, a), {}, {
    velocity: Xi(a.velocity, n[i].velocity, r),
    from: Xi(a.from, n[i].from, r)
  }) : a, t) : jy(e, n, r - 1);
};
function T1(e, t, r, n, i, a) {
  var o, u = n.reduce((d, v) => me(me({}, d), {}, {
    [v]: {
      from: e[v],
      velocity: 0,
      to: t[v]
    }
  }), {}), l = () => Dn((d, v) => v.from, u), c = () => !Object.values(u).filter(El).length, s = null, f = (d) => {
    o || (o = d);
    var v = d - o, p = v / r.dt;
    u = jy(r, u, p), i(me(me(me({}, e), t), l())), o = d, c() || (s = a.setTimeout(f));
  };
  return () => (s = a.setTimeout(f), () => {
    var d;
    (d = s) === null || d === void 0 || d();
  });
}
function M1(e, t, r, n, i, a, o) {
  var u = null, l = i.reduce((f, d) => {
    var v = e[d], p = t[d];
    return v == null || p == null ? f : me(me({}, f), {}, {
      [d]: [v, p]
    });
  }, {}), c, s = (f) => {
    c || (c = f);
    var d = (f - c) / n, v = Dn((h, m) => Xi(...m, r(d)), l);
    if (a(me(me(me({}, e), t), v)), d < 1)
      u = o.setTimeout(s);
    else {
      var p = Dn((h, m) => Xi(...m, r(1)), l);
      a(me(me(me({}, e), t), p));
    }
  };
  return () => (u = o.setTimeout(s), () => {
    var f;
    (f = u) === null || f === void 0 || f();
  });
}
const D1 = (e, t, r, n, i, a) => {
  var o = j1(e, t);
  return r == null ? () => (i(me(me({}, e), t)), () => {
  }) : r.isStepper === !0 ? T1(e, t, r, o, i, a) : M1(e, t, r, n, o, i, a);
};
var Zi = 1e-4, Iy = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1], Cy = (e, t) => e.map((r, n) => r * t ** n).reduce((r, n) => r + n), Fd = (e, t) => (r) => {
  var n = Iy(e, t);
  return Cy(n, r);
}, N1 = (e, t) => (r) => {
  var n = Iy(e, t), i = [...n.map((a, o) => a * o).slice(1), 0];
  return Cy(i, r);
}, $1 = (e) => {
  var t, r = e.split("(");
  if (r.length !== 2 || r[0] !== "cubic-bezier")
    return null;
  var n = (t = r[1]) === null || t === void 0 || (t = t.split(")")[0]) === null || t === void 0 ? void 0 : t.split(",");
  if (n == null || n.length !== 4)
    return null;
  var i = n.map((a) => parseFloat(a));
  return [i[0], i[1], i[2], i[3]];
}, R1 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        return [0, 0, 1, 1];
      case "ease":
        return [0.25, 0.1, 0.25, 1];
      case "ease-in":
        return [0.42, 0, 1, 1];
      case "ease-out":
        return [0.42, 0, 0.58, 1];
      case "ease-in-out":
        return [0, 0, 0.58, 1];
      default: {
        var i = $1(r[0]);
        if (i)
          return i;
      }
    }
  return r.length === 4 ? r : [0, 0, 1, 1];
}, L1 = (e, t, r, n) => {
  var i = Fd(e, r), a = Fd(t, n), o = N1(e, r), u = (c) => c > 1 ? 1 : c < 0 ? 0 : c, l = (c) => {
    for (var s = c > 1 ? 1 : c, f = s, d = 0; d < 8; ++d) {
      var v = i(f) - s, p = o(f);
      if (Math.abs(v - s) < Zi || p < Zi)
        return a(f);
      f = u(f - v / p);
    }
    return a(f);
  };
  return l.isStepper = !1, l;
}, qd = function() {
  return L1(...R1(...arguments));
}, z1 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
    stiff: r = 100,
    damping: n = 8,
    dt: i = 17
  } = t, a = (o, u, l) => {
    var c = -(o - u) * r, s = l * n, f = l + (c - s) * i / 1e3, d = l * i / 1e3 + o;
    return Math.abs(d - u) < Zi && Math.abs(f) < Zi ? [u, 0] : [d, f];
  };
  return a.isStepper = !0, a.dt = i, a;
}, B1 = (e) => {
  if (typeof e == "string")
    switch (e) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return qd(e);
      case "spring":
        return z1();
      default:
        if (e.split("(")[0] === "cubic-bezier")
          return qd(e);
    }
  return typeof e == "function" ? e : null;
};
function F1(e) {
  var t, r = () => null, n = !1, i = null, a = (o) => {
    if (!n) {
      if (Array.isArray(o)) {
        if (!o.length)
          return;
        var u = o, [l, ...c] = u;
        if (typeof l == "number") {
          i = e.setTimeout(a.bind(null, c), l);
          return;
        }
        a(l), i = e.setTimeout(a.bind(null, c));
        return;
      }
      typeof o == "string" && (t = o, r(t)), typeof o == "object" && (t = o, r(t)), typeof o == "function" && o();
    }
  };
  return {
    stop: () => {
      n = !0;
    },
    start: (o) => {
      n = !1, i && (i(), i = null), a(o);
    },
    subscribe: (o) => (r = o, () => {
      r = () => null;
    }),
    getTimeoutController: () => e
  };
}
class q1 {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), i = null, a = (o) => {
      o - n >= r ? t(o) : typeof requestAnimationFrame == "function" && (i = requestAnimationFrame(a));
    };
    return i = requestAnimationFrame(a), () => {
      i != null && cancelAnimationFrame(i);
    };
  }
}
function W1() {
  return F1(new q1());
}
var K1 = /* @__PURE__ */ Ve(W1);
function U1(e, t) {
  var r = ft(K1);
  return wt(() => t ?? r(e), [e, t, r]);
}
var H1 = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), Ya = {
  isSsr: H1()
}, Y1 = {
  begin: 0,
  duration: 1e3,
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  onAnimationEnd: () => {
  },
  onAnimationStart: () => {
  }
}, Wd = {
  t: 0
}, _u = {
  t: 1
};
function Ga(e) {
  var t = Re(e, Y1), {
    isActive: r,
    canBegin: n,
    duration: i,
    easing: a,
    begin: o,
    onAnimationEnd: u,
    onAnimationStart: l,
    children: c
  } = t, s = r === "auto" ? !Ya.isSsr : r, f = U1(t.animationId, t.animationManager), [d, v] = Fe(s ? Wd : _u), p = H(null);
  return Te(() => {
    s || v(_u);
  }, [s]), Te(() => {
    if (!s || !n)
      return en;
    var h = D1(Wd, _u, B1(a), i, v, f.getTimeoutController()), m = () => {
      p.current = h();
    };
    return f.start([l, o, m, i, u]), () => {
      f.stop(), p.current && p.current(), u();
    };
  }, [s, n, i, a, o, l, u, f]), c(d.t);
}
function Va(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = H(En(t)), n = H(e);
  return n.current !== e && (r.current = En(t), n.current = e), r.current;
}
var G1 = ["radius"], V1 = ["radius"], Kd, Ud, Hd, Yd, Gd, Vd, Xd, Zd, Qd, Jd;
function ev(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ev(Object(r), !0).forEach(function(n) {
      X1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ev(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function X1(e, t, r) {
  return (t = Z1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z1(e) {
  var t = Q1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Q1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qi() {
  return Qi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qi.apply(null, arguments);
}
function rv(e, t) {
  if (e == null) return {};
  var r, n, i = J1(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function J1(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Ot(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var nv = (e, t, r, n, i) => {
  var a = nr(r), o = nr(n), u = Math.min(Math.abs(a) / 2, Math.abs(o) / 2), l = o >= 0 ? 1 : -1, c = a >= 0 ? 1 : -1, s = o >= 0 && a >= 0 || o < 0 && a < 0 ? 1 : 0, f;
  if (u > 0 && Array.isArray(i)) {
    for (var d = [0, 0, 0, 0], v = 0, p = 4; v < p; v++) {
      var h, m = (h = i[v]) !== null && h !== void 0 ? h : 0;
      d[v] = m > u ? u : m;
    }
    f = se(Kd || (Kd = Ot(["M", ",", ""])), e, t + l * d[0]), d[0] > 0 && (f += se(Ud || (Ud = Ot(["A ", ",", ",0,0,", ",", ",", ""])), d[0], d[0], s, e + c * d[0], t)), f += se(Hd || (Hd = Ot(["L ", ",", ""])), e + r - c * d[1], t), d[1] > 0 && (f += se(Yd || (Yd = Ot(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[1], d[1], s, e + r, t + l * d[1])), f += se(Gd || (Gd = Ot(["L ", ",", ""])), e + r, t + n - l * d[2]), d[2] > 0 && (f += se(Vd || (Vd = Ot(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[2], d[2], s, e + r - c * d[2], t + n)), f += se(Xd || (Xd = Ot(["L ", ",", ""])), e + c * d[3], t + n), d[3] > 0 && (f += se(Zd || (Zd = Ot(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[3], d[3], s, e, t + n - l * d[3])), f += "Z";
  } else if (u > 0 && i === +i && i > 0) {
    var y = Math.min(u, i);
    f = se(Qd || (Qd = Ot(["M ", ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", " Z"])), e, t + l * y, y, y, s, e + c * y, t, e + r - c * y, t, y, y, s, e + r, t + l * y, e + r, t + n - l * y, y, y, s, e + r - c * y, t + n, e + c * y, t + n, y, y, s, e, t + n - l * y);
  } else
    f = se(Jd || (Jd = Ot(["M ", ",", " h ", " v ", " h ", " Z"])), e, t, r, n, -r);
  return f;
}, iv = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, ky = (e) => {
  var t = Re(e, iv), r = H(null), [n, i] = Fe(-1);
  Te(() => {
    if (r.current && r.current.getTotalLength)
      try {
        var L = r.current.getTotalLength();
        L && i(L);
      } catch {
      }
  }, []);
  var {
    x: a,
    y: o,
    width: u,
    height: l,
    radius: c,
    className: s
  } = t, {
    animationEasing: f,
    animationDuration: d,
    animationBegin: v,
    isAnimationActive: p,
    isUpdateAnimationActive: h
  } = t, m = H(u), y = H(l), b = H(a), w = H(o), x = wt(() => ({
    x: a,
    y: o,
    width: u,
    height: l,
    radius: c
  }), [a, o, u, l, c]), O = Va(x, "rectangle-");
  if (a !== +a || o !== +o || u !== +u || l !== +l || u === 0 || l === 0)
    return null;
  var P = Z("recharts-rectangle", s);
  if (!h) {
    var A = lt(t), {
      radius: _
    } = A, C = rv(A, G1);
    return /* @__PURE__ */ g.createElement("path", Qi({}, C, {
      x: nr(a),
      y: nr(o),
      width: nr(u),
      height: nr(l),
      radius: typeof c == "number" ? c : void 0,
      className: P,
      d: nv(a, o, u, l, c)
    }));
  }
  var T = m.current, k = y.current, E = b.current, R = w.current, $ = "0px ".concat(n === -1 ? 1 : n, "px"), z = "".concat(n, "px 0px"), F = Ey(["strokeDasharray"], d, typeof f == "string" ? f : iv.animationEasing);
  return /* @__PURE__ */ g.createElement(Ga, {
    animationId: O,
    key: O,
    canBegin: n > 0,
    duration: d,
    easing: f,
    isActive: h,
    begin: v
  }, (L) => {
    var Y = pe(T, u, L), U = pe(k, l, L), Q = pe(E, a, L), we = pe(R, o, L);
    r.current && (m.current = Y, y.current = U, b.current = Q, w.current = we);
    var Le;
    p ? L > 0 ? Le = {
      transition: F,
      strokeDasharray: z
    } : Le = {
      strokeDasharray: $
    } : Le = {
      strokeDasharray: z
    };
    var vt = lt(t), {
      radius: Ke
    } = vt, dr = rv(vt, V1);
    return /* @__PURE__ */ g.createElement("path", Qi({}, dr, {
      radius: typeof c == "number" ? c : void 0,
      className: P,
      d: nv(Q, we, Y, U, c),
      ref: r,
      style: tv(tv({}, Le), t.style)
    }));
  });
};
function av(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ov(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? av(Object(r), !0).forEach(function(n) {
      eA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : av(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eA(e, t, r) {
  return (t = tA(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tA(e) {
  var t = rA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function rA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ji = Math.PI / 180, nA = (e) => e * 180 / Math.PI, ve = (e, t, r, n) => ({
  x: e + Math.cos(-Ji * n) * r,
  y: t + Math.sin(-Ji * n) * r
}), Ty = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, iA = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    x: i,
    y: a
  } = t;
  return Math.sqrt((r - i) ** 2 + (n - a) ** 2);
}, aA = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    cx: i,
    cy: a
  } = t, o = iA({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
  if (o <= 0)
    return {
      radius: o,
      angle: 0
    };
  var u = (r - i) / o, l = Math.acos(u);
  return n > a && (l = 2 * Math.PI - l), {
    radius: o,
    angle: nA(l),
    angleInRadian: l
  };
}, oA = (e) => {
  var {
    startAngle: t,
    endAngle: r
  } = e, n = Math.floor(t / 360), i = Math.floor(r / 360), a = Math.min(n, i);
  return {
    startAngle: t - a * 360,
    endAngle: r - a * 360
  };
}, uA = (e, t) => {
  var {
    startAngle: r,
    endAngle: n
  } = t, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return e + o * 360;
}, lA = (e, t) => {
  var {
    chartX: r,
    chartY: n
  } = e, {
    radius: i,
    angle: a
  } = aA({
    x: r,
    y: n
  }, t), {
    innerRadius: o,
    outerRadius: u
  } = t;
  if (i < o || i > u || i === 0)
    return null;
  var {
    startAngle: l,
    endAngle: c
  } = oA(t), s = a, f;
  if (l <= c) {
    for (; s > c; )
      s -= 360;
    for (; s < l; )
      s += 360;
    f = s >= l && s <= c;
  } else {
    for (; s > l; )
      s -= 360;
    for (; s < c; )
      s += 360;
    f = s >= c && s <= l;
  }
  return f ? ov(ov({}, t), {}, {
    radius: i,
    angle: uA(s, t)
  }) : null;
};
function My(e) {
  var {
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  } = e, o = ve(t, r, n, i), u = ve(t, r, n, a);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
var uv, lv, cv, sv, fv, dv, vv;
function jl() {
  return jl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jl.apply(null, arguments);
}
function gr(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var cA = (e, t) => {
  var r = Ae(t - e), n = Math.min(Math.abs(t - e), 359.999);
  return r * n;
}, pi = (e) => {
  var {
    cx: t,
    cy: r,
    radius: n,
    angle: i,
    sign: a,
    isExternal: o,
    cornerRadius: u,
    cornerIsExternal: l
  } = e, c = u * (o ? 1 : -1) + n, s = Math.asin(u / c) / Ji, f = l ? i : i + a * s, d = ve(t, r, c, f), v = ve(t, r, n, f), p = l ? i - a * s : i, h = ve(t, r, c * Math.cos(s * Ji), p);
  return {
    center: d,
    circleTangency: v,
    lineTangency: h,
    theta: s
  };
}, Dy = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    startAngle: a,
    endAngle: o
  } = e, u = cA(a, o), l = a + u, c = ve(t, r, i, a), s = ve(t, r, i, l), f = se(uv || (uv = gr(["M ", ",", `
    A `, ",", `,0,
    `, ",", `,
    `, ",", `
  `])), c.x, c.y, i, i, +(Math.abs(u) > 180), +(a > l), s.x, s.y);
  if (n > 0) {
    var d = ve(t, r, n, a), v = ve(t, r, n, l);
    f += se(lv || (lv = gr(["L ", ",", `
            A `, ",", `,0,
            `, ",", `,
            `, ",", " Z"])), v.x, v.y, n, n, +(Math.abs(u) > 180), +(a <= l), d.x, d.y);
  } else
    f += se(cv || (cv = gr(["L ", ",", " Z"])), t, r);
  return f;
}, sA = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    cornerRadius: a,
    forceCornerRadius: o,
    cornerIsExternal: u,
    startAngle: l,
    endAngle: c
  } = e, s = Ae(c - l), {
    circleTangency: f,
    lineTangency: d,
    theta: v
  } = pi({
    cx: t,
    cy: r,
    radius: i,
    angle: l,
    sign: s,
    cornerRadius: a,
    cornerIsExternal: u
  }), {
    circleTangency: p,
    lineTangency: h,
    theta: m
  } = pi({
    cx: t,
    cy: r,
    radius: i,
    angle: c,
    sign: -s,
    cornerRadius: a,
    cornerIsExternal: u
  }), y = u ? Math.abs(l - c) : Math.abs(l - c) - v - m;
  if (y < 0)
    return o ? se(sv || (sv = gr(["M ", ",", `
        a`, ",", ",0,0,1,", `,0
        a`, ",", ",0,0,1,", `,0
      `])), d.x, d.y, a, a, a * 2, a, a, -a * 2) : Dy({
      cx: t,
      cy: r,
      innerRadius: n,
      outerRadius: i,
      startAngle: l,
      endAngle: c
    });
  var b = se(fv || (fv = gr(["M ", ",", `
    A`, ",", ",0,0,", ",", ",", `
    A`, ",", ",0,", ",", ",", ",", `
    A`, ",", ",0,0,", ",", ",", `
  `])), d.x, d.y, a, a, +(s < 0), f.x, f.y, i, i, +(y > 180), +(s < 0), p.x, p.y, a, a, +(s < 0), h.x, h.y);
  if (n > 0) {
    var {
      circleTangency: w,
      lineTangency: x,
      theta: O
    } = pi({
      cx: t,
      cy: r,
      radius: n,
      angle: l,
      sign: s,
      isExternal: !0,
      cornerRadius: a,
      cornerIsExternal: u
    }), {
      circleTangency: P,
      lineTangency: A,
      theta: _
    } = pi({
      cx: t,
      cy: r,
      radius: n,
      angle: c,
      sign: -s,
      isExternal: !0,
      cornerRadius: a,
      cornerIsExternal: u
    }), C = u ? Math.abs(l - c) : Math.abs(l - c) - O - _;
    if (C < 0 && a === 0)
      return "".concat(b, "L").concat(t, ",").concat(r, "Z");
    b += se(dv || (dv = gr(["L", ",", `
      A`, ",", ",0,0,", ",", ",", `
      A`, ",", ",0,", ",", ",", ",", `
      A`, ",", ",0,0,", ",", ",", "Z"])), A.x, A.y, a, a, +(s < 0), P.x, P.y, n, n, +(C > 180), +(s > 0), w.x, w.y, a, a, +(s < 0), x.x, x.y);
  } else
    b += se(vv || (vv = gr(["L", ",", "Z"])), t, r);
  return b;
}, fA = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, Ny = (e) => {
  var t = Re(e, fA), {
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    cornerRadius: o,
    forceCornerRadius: u,
    cornerIsExternal: l,
    startAngle: c,
    endAngle: s,
    className: f
  } = t;
  if (a < i || c === s)
    return null;
  var d = Z("recharts-sector", f), v = a - i, p = Ne(o, v, 0, !0), h;
  return p > 0 && Math.abs(c - s) < 360 ? h = sA({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    cornerRadius: Math.min(p, v / 2),
    forceCornerRadius: u,
    cornerIsExternal: l,
    startAngle: c,
    endAngle: s
  }) : h = Dy({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    startAngle: c,
    endAngle: s
  }), /* @__PURE__ */ g.createElement("path", jl({}, lt(t), {
    className: d,
    d: h
  }));
};
function dA(e, t, r) {
  if (e === "horizontal")
    return [{
      x: t.x,
      y: r.top
    }, {
      x: t.x,
      y: r.top + r.height
    }];
  if (e === "vertical")
    return [{
      x: r.left,
      y: t.y
    }, {
      x: r.left + r.width,
      y: t.y
    }];
  if (hm(t)) {
    if (e === "centric") {
      var {
        cx: n,
        cy: i,
        innerRadius: a,
        outerRadius: o,
        angle: u
      } = t, l = ve(n, i, a, u), c = ve(n, i, o, u);
      return [{
        x: l.x,
        y: l.y
      }, {
        x: c.x,
        y: c.y
      }];
    }
    return My(t);
  }
}
var Eu = {}, ju = {}, Iu = {}, hv;
function vA() {
  return hv || (hv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Am();
    function r(n) {
      return t.isSymbol(n) ? NaN : Number(n);
    }
    e.toNumber = r;
  })(Iu)), Iu;
}
var pv;
function hA() {
  return pv || (pv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ vA();
    function r(n) {
      return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
    }
    e.toFinite = r;
  })(ju)), ju;
}
var mv;
function pA() {
  return mv || (mv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Sm(), r = /* @__PURE__ */ hA();
    function n(i, a, o) {
      o && typeof o != "number" && t.isIterateeCall(i, a, o) && (a = o = void 0), i = r.toFinite(i), a === void 0 ? (a = i, i = 0) : a = r.toFinite(a), o = o === void 0 ? i < a ? 1 : -1 : r.toFinite(o);
      const u = Math.max(Math.ceil((a - i) / (o || 1)), 0), l = new Array(u);
      for (let c = 0; c < u; c++)
        l[c] = i, i += o;
      return l;
    }
    e.range = n;
  })(Eu)), Eu;
}
var Cu, yv;
function mA() {
  return yv || (yv = 1, Cu = pA().range), Cu;
}
var yA = /* @__PURE__ */ mA();
const $y = /* @__PURE__ */ ur(yA);
function ir(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function gA(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function xc(e) {
  let t, r, n;
  e.length !== 2 ? (t = ir, r = (u, l) => ir(e(u), l), n = (u, l) => e(u) - l) : (t = e === ir || e === gA ? e : bA, r = e, n = e);
  function i(u, l, c = 0, s = u.length) {
    if (c < s) {
      if (t(l, l) !== 0) return s;
      do {
        const f = c + s >>> 1;
        r(u[f], l) < 0 ? c = f + 1 : s = f;
      } while (c < s);
    }
    return c;
  }
  function a(u, l, c = 0, s = u.length) {
    if (c < s) {
      if (t(l, l) !== 0) return s;
      do {
        const f = c + s >>> 1;
        r(u[f], l) <= 0 ? c = f + 1 : s = f;
      } while (c < s);
    }
    return c;
  }
  function o(u, l, c = 0, s = u.length) {
    const f = i(u, l, c, s - 1);
    return f > c && n(u[f - 1], l) > -n(u[f], l) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function bA() {
  return 0;
}
function Ry(e) {
  return e === null ? NaN : +e;
}
function* wA(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const xA = xc(ir), Gn = xA.right;
xc(Ry).center;
class gv extends Map {
  constructor(t, r = AA) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(bv(this, t));
  }
  has(t) {
    return super.has(bv(this, t));
  }
  set(t, r) {
    return super.set(PA(this, t), r);
  }
  delete(t) {
    return super.delete(OA(this, t));
  }
}
function bv({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function PA({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function OA({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function AA(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function SA(e = ir) {
  if (e === ir) return Ly;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function Ly(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const _A = Math.sqrt(50), EA = Math.sqrt(10), jA = Math.sqrt(2);
function ea(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= _A ? 10 : a >= EA ? 5 : a >= jA ? 2 : 1;
  let u, l, c;
  return i < 0 ? (c = Math.pow(10, -i) / o, u = Math.round(e * c), l = Math.round(t * c), u / c < e && ++u, l / c > t && --l, c = -c) : (c = Math.pow(10, i) * o, u = Math.round(e / c), l = Math.round(t / c), u * c < e && ++u, l * c > t && --l), l < u && 0.5 <= r && r < 2 ? ea(e, t, r * 2) : [u, l, c];
}
function Il(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? ea(t, e, r) : ea(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1, l = new Array(u);
  if (n)
    if (o < 0) for (let c = 0; c < u; ++c) l[c] = (a - c) / -o;
    else for (let c = 0; c < u; ++c) l[c] = (a - c) * o;
  else if (o < 0) for (let c = 0; c < u; ++c) l[c] = (i + c) / -o;
  else for (let c = 0; c < u; ++c) l[c] = (i + c) * o;
  return l;
}
function Cl(e, t, r) {
  return t = +t, e = +e, r = +r, ea(e, t, r)[2];
}
function kl(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? Cl(t, e, r) : Cl(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function wv(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function xv(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function zy(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? Ly : SA(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, c = t - r + 1, s = Math.log(l), f = 0.5 * Math.exp(2 * s / 3), d = 0.5 * Math.sqrt(s * f * (l - f) / l) * (c - l / 2 < 0 ? -1 : 1), v = Math.max(r, Math.floor(t - c * f / l + d)), p = Math.min(n, Math.floor(t + (l - c) * f / l + d));
      zy(e, t, v, p, i);
    }
    const a = e[t];
    let o = r, u = n;
    for (yn(e, r, t), i(e[n], a) > 0 && yn(e, r, n); o < u; ) {
      for (yn(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    i(e[r], a) === 0 ? yn(e, r, u) : (++u, yn(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e;
}
function yn(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function IA(e, t, r) {
  if (e = Float64Array.from(wA(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return xv(e);
    if (t >= 1) return wv(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = wv(zy(e, a).subarray(0, a + 1)), u = xv(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function CA(e, t, r = Ry) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function kA(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function dt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Vt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Tl = /* @__PURE__ */ Symbol("implicit");
function Pc() {
  var e = new gv(), t = [], r = [], n = Tl;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== Tl) return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new gv();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Pc(t, r).unknown(n);
  }, dt.apply(i, arguments), i;
}
function Oc() {
  var e = Pc().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, u = !1, l = 0, c = 0, s = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, v = i < n, p = v ? i : n, h = v ? n : i;
    a = (h - p) / Math.max(1, d - l + c * 2), u && (a = Math.floor(a)), p += (h - p - a * (d - l)) * s, o = a * (1 - l), u && (p = Math.round(p), o = Math.round(o));
    var m = kA(d).map(function(y) {
      return p + a * y;
    });
    return r(v ? m.reverse() : m);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), f()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, i] = d, n = +n, i = +i, f()) : [n, i];
  }, e.rangeRound = function(d) {
    return [n, i] = d, n = +n, i = +i, u = !0, f();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(d) {
    return arguments.length ? (u = !!d, f()) : u;
  }, e.padding = function(d) {
    return arguments.length ? (l = Math.min(1, c = +d), f()) : l;
  }, e.paddingInner = function(d) {
    return arguments.length ? (l = Math.min(1, d), f()) : l;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (c = +d, f()) : c;
  }, e.align = function(d) {
    return arguments.length ? (s = Math.max(0, Math.min(1, d)), f()) : s;
  }, e.copy = function() {
    return Oc(t(), [n, i]).round(u).paddingInner(l).paddingOuter(c).align(s);
  }, dt.apply(f(), arguments);
}
function By(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return By(t());
  }, e;
}
function TA() {
  return By(Oc.apply(null, arguments).paddingInner(1));
}
function Ac(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Fy(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Vn() {
}
var Nn = 0.7, ta = 1 / Nn, Hr = "\\s*([+-]?\\d+)\\s*", $n = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", It = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", MA = /^#([0-9a-f]{3,8})$/, DA = new RegExp(`^rgb\\(${Hr},${Hr},${Hr}\\)$`), NA = new RegExp(`^rgb\\(${It},${It},${It}\\)$`), $A = new RegExp(`^rgba\\(${Hr},${Hr},${Hr},${$n}\\)$`), RA = new RegExp(`^rgba\\(${It},${It},${It},${$n}\\)$`), LA = new RegExp(`^hsl\\(${$n},${It},${It}\\)$`), zA = new RegExp(`^hsla\\(${$n},${It},${It},${$n}\\)$`), Pv = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Ac(Vn, Rn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ov,
  // Deprecated! Use color.formatHex.
  formatHex: Ov,
  formatHex8: BA,
  formatHsl: FA,
  formatRgb: Av,
  toString: Av
});
function Ov() {
  return this.rgb().formatHex();
}
function BA() {
  return this.rgb().formatHex8();
}
function FA() {
  return qy(this).formatHsl();
}
function Av() {
  return this.rgb().formatRgb();
}
function Rn(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = MA.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Sv(t) : r === 3 ? new Ge(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? mi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? mi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = DA.exec(e)) ? new Ge(t[1], t[2], t[3], 1) : (t = NA.exec(e)) ? new Ge(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = $A.exec(e)) ? mi(t[1], t[2], t[3], t[4]) : (t = RA.exec(e)) ? mi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = LA.exec(e)) ? jv(t[1], t[2] / 100, t[3] / 100, 1) : (t = zA.exec(e)) ? jv(t[1], t[2] / 100, t[3] / 100, t[4]) : Pv.hasOwnProperty(e) ? Sv(Pv[e]) : e === "transparent" ? new Ge(NaN, NaN, NaN, 0) : null;
}
function Sv(e) {
  return new Ge(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function mi(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Ge(e, t, r, n);
}
function qA(e) {
  return e instanceof Vn || (e = Rn(e)), e ? (e = e.rgb(), new Ge(e.r, e.g, e.b, e.opacity)) : new Ge();
}
function Ml(e, t, r, n) {
  return arguments.length === 1 ? qA(e) : new Ge(e, t, r, n ?? 1);
}
function Ge(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Ac(Ge, Ml, Fy(Vn, {
  brighter(e) {
    return e = e == null ? ta : Math.pow(ta, e), new Ge(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Nn : Math.pow(Nn, e), new Ge(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ge(Or(this.r), Or(this.g), Or(this.b), ra(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: _v,
  // Deprecated! Use color.formatHex.
  formatHex: _v,
  formatHex8: WA,
  formatRgb: Ev,
  toString: Ev
}));
function _v() {
  return `#${br(this.r)}${br(this.g)}${br(this.b)}`;
}
function WA() {
  return `#${br(this.r)}${br(this.g)}${br(this.b)}${br((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ev() {
  const e = ra(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Or(this.r)}, ${Or(this.g)}, ${Or(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ra(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Or(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function br(e) {
  return e = Or(e), (e < 16 ? "0" : "") + e.toString(16);
}
function jv(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new mt(e, t, r, n);
}
function qy(e) {
  if (e instanceof mt) return new mt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Vn || (e = Rn(e)), !e) return new mt();
  if (e instanceof mt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, u = a - i, l = (a + i) / 2;
  return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : u = l > 0 && l < 1 ? 0 : o, new mt(o, u, l, e.opacity);
}
function KA(e, t, r, n) {
  return arguments.length === 1 ? qy(e) : new mt(e, t, r, n ?? 1);
}
function mt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Ac(mt, KA, Fy(Vn, {
  brighter(e) {
    return e = e == null ? ta : Math.pow(ta, e), new mt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Nn : Math.pow(Nn, e), new mt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Ge(
      ku(e >= 240 ? e - 240 : e + 120, i, n),
      ku(e, i, n),
      ku(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new mt(Iv(this.h), yi(this.s), yi(this.l), ra(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ra(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Iv(this.h)}, ${yi(this.s) * 100}%, ${yi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Iv(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function yi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ku(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Sc = (e) => () => e;
function UA(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function HA(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function YA(e) {
  return (e = +e) == 1 ? Wy : function(t, r) {
    return r - t ? HA(t, r, e) : Sc(isNaN(t) ? r : t);
  };
}
function Wy(e, t) {
  var r = t - e;
  return r ? UA(e, r) : Sc(isNaN(e) ? t : e);
}
const Cv = (function e(t) {
  var r = YA(t);
  function n(i, a) {
    var o = r((i = Ml(i)).r, (a = Ml(a)).r), u = r(i.g, a.g), l = r(i.b, a.b), c = Wy(i.opacity, a.opacity);
    return function(s) {
      return i.r = o(s), i.g = u(s), i.b = l(s), i.opacity = c(s), i + "";
    };
  }
  return n.gamma = e, n;
})(1);
function GA(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function VA(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function XA(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = rn(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function ZA(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function na(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function QA(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = rn(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var Dl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Tu = new RegExp(Dl.source, "g");
function JA(e) {
  return function() {
    return e;
  };
}
function eS(e) {
  return function(t) {
    return e(t) + "";
  };
}
function tS(e, t) {
  var r = Dl.lastIndex = Tu.lastIndex = 0, n, i, a, o = -1, u = [], l = [];
  for (e = e + "", t = t + ""; (n = Dl.exec(e)) && (i = Tu.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, l.push({ i: o, x: na(n, i) })), r = Tu.lastIndex;
  return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? l[0] ? eS(l[0].x) : JA(t) : (t = l.length, function(c) {
    for (var s = 0, f; s < t; ++s) u[(f = l[s]).i] = f.x(c);
    return u.join("");
  });
}
function rn(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Sc(t) : (r === "number" ? na : r === "string" ? (n = Rn(t)) ? (t = n, Cv) : tS : t instanceof Rn ? Cv : t instanceof Date ? ZA : VA(t) ? GA : Array.isArray(t) ? XA : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? QA : na)(e, t);
}
function _c(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function rS(e, t) {
  t === void 0 && (t = e, e = rn);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[u](o - u);
  };
}
function nS(e) {
  return function() {
    return e;
  };
}
function ia(e) {
  return +e;
}
var kv = [0, 1];
function Be(e) {
  return e;
}
function Nl(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : nS(isNaN(t) ? NaN : 0.5);
}
function iS(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function aS(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = Nl(i, n), a = r(o, a)) : (n = Nl(n, i), a = r(a, o)), function(u) {
    return a(n(u));
  };
}
function oS(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = Nl(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(u) {
    var l = Gn(e, u, 1, n) - 1;
    return a[l](i[l](u));
  };
}
function Xn(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Xa() {
  var e = kv, t = kv, r = rn, n, i, a, o = Be, u, l, c;
  function s() {
    var d = Math.min(e.length, t.length);
    return o !== Be && (o = iS(e[0], e[d - 1])), u = d > 2 ? oS : aS, l = c = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? a : (l || (l = u(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(i((c || (c = u(t, e.map(n), na)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, ia), s()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), s()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = _c, s();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : Be, s()) : o !== Be;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, s()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (a = d, f) : a;
  }, function(d, v) {
    return n = d, i = v, s();
  };
}
function Ec() {
  return Xa()(Be, Be);
}
function uS(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function aa(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Vr(e) {
  return e = aa(Math.abs(e)), e ? e[1] : NaN;
}
function lS(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, u = e[0], l = 0; i > 0 && u > 0 && (l + u + 1 > n && (u = Math.max(1, n - l)), a.push(r.substring(i -= u, i + u)), !((l += u + 1) > n)); )
      u = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function cS(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var sS = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ln(e) {
  if (!(t = sS.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new jc({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Ln.prototype = jc.prototype;
function jc(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
jc.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function fS(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var oa;
function dS(e, t) {
  var r = aa(e, t);
  if (!r) return oa = void 0, e.toPrecision(t);
  var n = r[0], i = r[1], a = i - (oa = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + aa(e, Math.max(0, t + a - 1))[0];
}
function Tv(e, t) {
  var r = aa(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Mv = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: uS,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Tv(e * 100, t),
  r: Tv,
  s: dS,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Dv(e) {
  return e;
}
var Nv = Array.prototype.map, $v = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function vS(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Dv : lS(Nv.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Dv : cS(Nv.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f, d) {
    f = Ln(f);
    var v = f.fill, p = f.align, h = f.sign, m = f.symbol, y = f.zero, b = f.width, w = f.comma, x = f.precision, O = f.trim, P = f.type;
    P === "n" ? (w = !0, P = "g") : Mv[P] || (x === void 0 && (x = 12), O = !0, P = "g"), (y || v === "0" && p === "=") && (y = !0, v = "0", p = "=");
    var A = (d && d.prefix !== void 0 ? d.prefix : "") + (m === "$" ? r : m === "#" && /[boxX]/.test(P) ? "0" + P.toLowerCase() : ""), _ = (m === "$" ? n : /[%p]/.test(P) ? o : "") + (d && d.suffix !== void 0 ? d.suffix : ""), C = Mv[P], T = /[defgprs%]/.test(P);
    x = x === void 0 ? 6 : /[gprs]/.test(P) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function k(E) {
      var R = A, $ = _, z, F, L;
      if (P === "c")
        $ = C(E) + $, E = "";
      else {
        E = +E;
        var Y = E < 0 || 1 / E < 0;
        if (E = isNaN(E) ? l : C(Math.abs(E), x), O && (E = fS(E)), Y && +E == 0 && h !== "+" && (Y = !1), R = (Y ? h === "(" ? h : u : h === "-" || h === "(" ? "" : h) + R, $ = (P === "s" && !isNaN(E) && oa !== void 0 ? $v[8 + oa / 3] : "") + $ + (Y && h === "(" ? ")" : ""), T) {
          for (z = -1, F = E.length; ++z < F; )
            if (L = E.charCodeAt(z), 48 > L || L > 57) {
              $ = (L === 46 ? i + E.slice(z + 1) : E.slice(z)) + $, E = E.slice(0, z);
              break;
            }
        }
      }
      w && !y && (E = t(E, 1 / 0));
      var U = R.length + E.length + $.length, Q = U < b ? new Array(b - U + 1).join(v) : "";
      switch (w && y && (E = t(Q + E, Q.length ? b - $.length : 1 / 0), Q = ""), p) {
        case "<":
          E = R + E + $ + Q;
          break;
        case "=":
          E = R + Q + E + $;
          break;
        case "^":
          E = Q.slice(0, U = Q.length >> 1) + R + E + $ + Q.slice(U);
          break;
        default:
          E = Q + R + E + $;
          break;
      }
      return a(E);
    }
    return k.toString = function() {
      return f + "";
    }, k;
  }
  function s(f, d) {
    var v = Math.max(-8, Math.min(8, Math.floor(Vr(d) / 3))) * 3, p = Math.pow(10, -v), h = c((f = Ln(f), f.type = "f", f), { suffix: $v[8 + v / 3] });
    return function(m) {
      return h(p * m);
    };
  }
  return {
    format: c,
    formatPrefix: s
  };
}
var gi, Ic, Ky;
hS({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function hS(e) {
  return gi = vS(e), Ic = gi.format, Ky = gi.formatPrefix, gi;
}
function pS(e) {
  return Math.max(0, -Vr(Math.abs(e)));
}
function mS(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Vr(t) / 3))) * 3 - Vr(Math.abs(e)));
}
function yS(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Vr(t) - Vr(e)) + 1;
}
function Uy(e, t, r, n) {
  var i = kl(e, t, r), a;
  switch (n = Ln(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = mS(i, o)) && (n.precision = a), Ky(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = yS(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = pS(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Ic(n);
}
function cr(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Il(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return Uy(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], u = n[a], l, c, s = 10;
    for (u < o && (c = o, o = u, u = c, c = i, i = a, a = c); s-- > 0; ) {
      if (c = Cl(o, u, r), c === l)
        return n[i] = o, n[a] = u, t(n);
      if (c > 0)
        o = Math.floor(o / c) * c, u = Math.ceil(u / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, u = Math.floor(u * c) / c;
      else
        break;
      l = c;
    }
    return e;
  }, e;
}
function Hy() {
  var e = Ec();
  return e.copy = function() {
    return Xn(e, Hy());
  }, dt.apply(e, arguments), cr(e);
}
function Yy(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, ia), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Yy(e).unknown(t);
  }, e = arguments.length ? Array.from(e, ia) : [0, 1], cr(r);
}
function Gy(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function Rv(e) {
  return Math.log(e);
}
function Lv(e) {
  return Math.exp(e);
}
function gS(e) {
  return -Math.log(-e);
}
function bS(e) {
  return -Math.exp(-e);
}
function wS(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function xS(e) {
  return e === 10 ? wS : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function PS(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function zv(e) {
  return (t, r) => -e(-t, r);
}
function Cc(e) {
  const t = e(Rv, Lv), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = PS(n), a = xS(n), r()[0] < 0 ? (i = zv(i), a = zv(a), e(gS, bS)) : e(Rv, Lv), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const l = r();
    let c = l[0], s = l[l.length - 1];
    const f = s < c;
    f && ([c, s] = [s, c]);
    let d = i(c), v = i(s), p, h;
    const m = u == null ? 10 : +u;
    let y = [];
    if (!(n % 1) && v - d < m) {
      if (d = Math.floor(d), v = Math.ceil(v), c > 0) {
        for (; d <= v; ++d)
          for (p = 1; p < n; ++p)
            if (h = d < 0 ? p / a(-d) : p * a(d), !(h < c)) {
              if (h > s) break;
              y.push(h);
            }
      } else for (; d <= v; ++d)
        for (p = n - 1; p >= 1; --p)
          if (h = d > 0 ? p / a(-d) : p * a(d), !(h < c)) {
            if (h > s) break;
            y.push(h);
          }
      y.length * 2 < m && (y = Il(c, s, m));
    } else
      y = Il(d, v, Math.min(v - d, m)).map(a);
    return f ? y.reverse() : y;
  }, t.tickFormat = (u, l) => {
    if (u == null && (u = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = Ln(l)).precision == null && (l.trim = !0), l = Ic(l)), u === 1 / 0) return l;
    const c = Math.max(1, n * u / t.ticks().length);
    return (s) => {
      let f = s / a(Math.round(i(s)));
      return f * n < n - 0.5 && (f *= n), f <= c ? l(s) : "";
    };
  }, t.nice = () => r(Gy(r(), {
    floor: (u) => a(Math.floor(i(u))),
    ceil: (u) => a(Math.ceil(i(u)))
  })), t;
}
function Vy() {
  const e = Cc(Xa()).domain([1, 10]);
  return e.copy = () => Xn(e, Vy()).base(e.base()), dt.apply(e, arguments), e;
}
function Bv(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Fv(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function kc(e) {
  var t = 1, r = e(Bv(t), Fv(t));
  return r.constant = function(n) {
    return arguments.length ? e(Bv(t = +n), Fv(t)) : t;
  }, cr(r);
}
function Xy() {
  var e = kc(Xa());
  return e.copy = function() {
    return Xn(e, Xy()).constant(e.constant());
  }, dt.apply(e, arguments);
}
function qv(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function OS(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function AS(e) {
  return e < 0 ? -e * e : e * e;
}
function Tc(e) {
  var t = e(Be, Be), r = 1;
  function n() {
    return r === 1 ? e(Be, Be) : r === 0.5 ? e(OS, AS) : e(qv(r), qv(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, cr(t);
}
function Mc() {
  var e = Tc(Xa());
  return e.copy = function() {
    return Xn(e, Mc()).exponent(e.exponent());
  }, dt.apply(e, arguments), e;
}
function SS() {
  return Mc.apply(null, arguments).exponent(0.5);
}
function Wv(e) {
  return Math.sign(e) * e * e;
}
function _S(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Zy() {
  var e = Ec(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = _S(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(Wv(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, ia)).map(Wv)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Zy(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, dt.apply(i, arguments), cr(i);
}
function Qy() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = CA(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[Gn(r, o)];
  }
  return a.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [
      u > 0 ? r[u - 1] : e[0],
      u < r.length ? r[u] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let u of o) u != null && !isNaN(u = +u) && e.push(u);
    return e.sort(ir), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Qy().domain(e).range(t).unknown(n);
  }, dt.apply(a, arguments);
}
function Jy() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(l) {
    return l != null && l <= l ? i[Gn(n, l, 0, r)] : a;
  }
  function u() {
    var l = -1;
    for (n = new Array(r); ++l < r; ) n[l] = ((l + 1) * t - (l - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(l) {
    return arguments.length ? ([e, t] = l, e = +e, t = +t, u()) : [e, t];
  }, o.range = function(l) {
    return arguments.length ? (r = (i = Array.from(l)).length - 1, u()) : i.slice();
  }, o.invertExtent = function(l) {
    var c = i.indexOf(l);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, o.unknown = function(l) {
    return arguments.length && (a = l), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return Jy().domain([e, t]).range(i).unknown(a);
  }, dt.apply(cr(o), arguments);
}
function eg() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[Gn(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e[o - 1], e[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return eg().domain(e).range(t).unknown(r);
  }, dt.apply(i, arguments);
}
const Mu = /* @__PURE__ */ new Date(), Du = /* @__PURE__ */ new Date();
function ge(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), u = i.ceil(a);
    return a - o < u - a ? o : u;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
    const l = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0)) return l;
    let c;
    do
      l.push(c = /* @__PURE__ */ new Date(+a)), t(a, u), e(a);
    while (c < a && a < o);
    return l;
  }, i.filter = (a) => ge((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o)
      if (u < 0) for (; ++u <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --u >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (Mu.setTime(+a), Du.setTime(+o), e(Mu), e(Du), Math.floor(r(Mu, Du))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const ua = ge(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ua.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ge((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : ua);
ua.range;
const $t = 1e3, ut = $t * 60, Rt = ut * 60, Ft = Rt * 24, Dc = Ft * 7, Kv = Ft * 30, Nu = Ft * 365, wr = ge((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getUTCSeconds());
wr.range;
const Nc = ge((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * $t);
}, (e, t) => {
  e.setTime(+e + t * ut);
}, (e, t) => (t - e) / ut, (e) => e.getMinutes());
Nc.range;
const $c = ge((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ut);
}, (e, t) => (t - e) / ut, (e) => e.getUTCMinutes());
$c.range;
const Rc = ge((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * $t - e.getMinutes() * ut);
}, (e, t) => {
  e.setTime(+e + t * Rt);
}, (e, t) => (t - e) / Rt, (e) => e.getHours());
Rc.range;
const Lc = ge((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Rt);
}, (e, t) => (t - e) / Rt, (e) => e.getUTCHours());
Lc.range;
const Zn = ge(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ut) / Ft,
  (e) => e.getDate() - 1
);
Zn.range;
const Za = ge((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ft, (e) => e.getUTCDate() - 1);
Za.range;
const tg = ge((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ft, (e) => Math.floor(e / Ft));
tg.range;
function Dr(e) {
  return ge((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * ut) / Dc);
}
const Qa = Dr(0), la = Dr(1), ES = Dr(2), jS = Dr(3), Xr = Dr(4), IS = Dr(5), CS = Dr(6);
Qa.range;
la.range;
ES.range;
jS.range;
Xr.range;
IS.range;
CS.range;
function Nr(e) {
  return ge((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Dc);
}
const Ja = Nr(0), ca = Nr(1), kS = Nr(2), TS = Nr(3), Zr = Nr(4), MS = Nr(5), DS = Nr(6);
Ja.range;
ca.range;
kS.range;
TS.range;
Zr.range;
MS.range;
DS.range;
const zc = ge((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
zc.range;
const Bc = ge((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Bc.range;
const qt = ge((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
qt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ge((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
qt.range;
const Wt = ge((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Wt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ge((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Wt.range;
function rg(e, t, r, n, i, a) {
  const o = [
    [wr, 1, $t],
    [wr, 5, 5 * $t],
    [wr, 15, 15 * $t],
    [wr, 30, 30 * $t],
    [a, 1, ut],
    [a, 5, 5 * ut],
    [a, 15, 15 * ut],
    [a, 30, 30 * ut],
    [i, 1, Rt],
    [i, 3, 3 * Rt],
    [i, 6, 6 * Rt],
    [i, 12, 12 * Rt],
    [n, 1, Ft],
    [n, 2, 2 * Ft],
    [r, 1, Dc],
    [t, 1, Kv],
    [t, 3, 3 * Kv],
    [e, 1, Nu]
  ];
  function u(c, s, f) {
    const d = s < c;
    d && ([c, s] = [s, c]);
    const v = f && typeof f.range == "function" ? f : l(c, s, f), p = v ? v.range(c, +s + 1) : [];
    return d ? p.reverse() : p;
  }
  function l(c, s, f) {
    const d = Math.abs(s - c) / f, v = xc(([, , m]) => m).right(o, d);
    if (v === o.length) return e.every(kl(c / Nu, s / Nu, f));
    if (v === 0) return ua.every(Math.max(kl(c, s, f), 1));
    const [p, h] = o[d / o[v - 1][2] < o[v][2] / d ? v - 1 : v];
    return p.every(h);
  }
  return [u, l];
}
const [NS, $S] = rg(Wt, Bc, Ja, tg, Lc, $c), [RS, LS] = rg(qt, zc, Qa, Zn, Rc, Nc);
function $u(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ru(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function gn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function zS(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, u = e.months, l = e.shortMonths, c = bn(i), s = wn(i), f = bn(a), d = wn(a), v = bn(o), p = wn(o), h = bn(u), m = wn(u), y = bn(l), b = wn(l), w = {
    a: L,
    A: Y,
    b: U,
    B: Q,
    c: null,
    d: Xv,
    e: Xv,
    f: l_,
    g: g_,
    G: w_,
    H: a_,
    I: o_,
    j: u_,
    L: ng,
    m: c_,
    M: s_,
    p: we,
    q: Le,
    Q: Jv,
    s: eh,
    S: f_,
    u: d_,
    U: v_,
    V: h_,
    w: p_,
    W: m_,
    x: null,
    X: null,
    y: y_,
    Y: b_,
    Z: x_,
    "%": Qv
  }, x = {
    a: vt,
    A: Ke,
    b: dr,
    B: dn,
    c: null,
    d: Zv,
    e: Zv,
    f: S_,
    g: N_,
    G: R_,
    H: P_,
    I: O_,
    j: A_,
    L: ag,
    m: __,
    M: E_,
    p: Ue,
    q: wo,
    Q: Jv,
    s: eh,
    S: j_,
    u: I_,
    U: C_,
    V: k_,
    w: T_,
    W: M_,
    x: null,
    X: null,
    y: D_,
    Y: $_,
    Z: L_,
    "%": Qv
  }, O = {
    a: T,
    A: k,
    b: E,
    B: R,
    c: $,
    d: Gv,
    e: Gv,
    f: t_,
    g: Yv,
    G: Hv,
    H: Vv,
    I: Vv,
    j: ZS,
    L: e_,
    m: XS,
    M: QS,
    p: C,
    q: VS,
    Q: n_,
    s: i_,
    S: JS,
    u: KS,
    U: US,
    V: HS,
    w: WS,
    W: YS,
    x: z,
    X: F,
    y: Yv,
    Y: Hv,
    Z: GS,
    "%": r_
  };
  w.x = P(r, w), w.X = P(n, w), w.c = P(t, w), x.x = P(r, x), x.X = P(n, x), x.c = P(t, x);
  function P(j, B) {
    return function(W) {
      var I = [], He = -1, ee = 0, Qe = j.length, Je, vr, Ks;
      for (W instanceof Date || (W = /* @__PURE__ */ new Date(+W)); ++He < Qe; )
        j.charCodeAt(He) === 37 && (I.push(j.slice(ee, He)), (vr = Uv[Je = j.charAt(++He)]) != null ? Je = j.charAt(++He) : vr = Je === "e" ? " " : "0", (Ks = B[Je]) && (Je = Ks(W, vr)), I.push(Je), ee = He + 1);
      return I.push(j.slice(ee, He)), I.join("");
    };
  }
  function A(j, B) {
    return function(W) {
      var I = gn(1900, void 0, 1), He = _(I, j, W += "", 0), ee, Qe;
      if (He != W.length) return null;
      if ("Q" in I) return new Date(I.Q);
      if ("s" in I) return new Date(I.s * 1e3 + ("L" in I ? I.L : 0));
      if (B && !("Z" in I) && (I.Z = 0), "p" in I && (I.H = I.H % 12 + I.p * 12), I.m === void 0 && (I.m = "q" in I ? I.q : 0), "V" in I) {
        if (I.V < 1 || I.V > 53) return null;
        "w" in I || (I.w = 1), "Z" in I ? (ee = Ru(gn(I.y, 0, 1)), Qe = ee.getUTCDay(), ee = Qe > 4 || Qe === 0 ? ca.ceil(ee) : ca(ee), ee = Za.offset(ee, (I.V - 1) * 7), I.y = ee.getUTCFullYear(), I.m = ee.getUTCMonth(), I.d = ee.getUTCDate() + (I.w + 6) % 7) : (ee = $u(gn(I.y, 0, 1)), Qe = ee.getDay(), ee = Qe > 4 || Qe === 0 ? la.ceil(ee) : la(ee), ee = Zn.offset(ee, (I.V - 1) * 7), I.y = ee.getFullYear(), I.m = ee.getMonth(), I.d = ee.getDate() + (I.w + 6) % 7);
      } else ("W" in I || "U" in I) && ("w" in I || (I.w = "u" in I ? I.u % 7 : "W" in I ? 1 : 0), Qe = "Z" in I ? Ru(gn(I.y, 0, 1)).getUTCDay() : $u(gn(I.y, 0, 1)).getDay(), I.m = 0, I.d = "W" in I ? (I.w + 6) % 7 + I.W * 7 - (Qe + 5) % 7 : I.w + I.U * 7 - (Qe + 6) % 7);
      return "Z" in I ? (I.H += I.Z / 100 | 0, I.M += I.Z % 100, Ru(I)) : $u(I);
    };
  }
  function _(j, B, W, I) {
    for (var He = 0, ee = B.length, Qe = W.length, Je, vr; He < ee; ) {
      if (I >= Qe) return -1;
      if (Je = B.charCodeAt(He++), Je === 37) {
        if (Je = B.charAt(He++), vr = O[Je in Uv ? B.charAt(He++) : Je], !vr || (I = vr(j, W, I)) < 0) return -1;
      } else if (Je != W.charCodeAt(I++))
        return -1;
    }
    return I;
  }
  function C(j, B, W) {
    var I = c.exec(B.slice(W));
    return I ? (j.p = s.get(I[0].toLowerCase()), W + I[0].length) : -1;
  }
  function T(j, B, W) {
    var I = v.exec(B.slice(W));
    return I ? (j.w = p.get(I[0].toLowerCase()), W + I[0].length) : -1;
  }
  function k(j, B, W) {
    var I = f.exec(B.slice(W));
    return I ? (j.w = d.get(I[0].toLowerCase()), W + I[0].length) : -1;
  }
  function E(j, B, W) {
    var I = y.exec(B.slice(W));
    return I ? (j.m = b.get(I[0].toLowerCase()), W + I[0].length) : -1;
  }
  function R(j, B, W) {
    var I = h.exec(B.slice(W));
    return I ? (j.m = m.get(I[0].toLowerCase()), W + I[0].length) : -1;
  }
  function $(j, B, W) {
    return _(j, t, B, W);
  }
  function z(j, B, W) {
    return _(j, r, B, W);
  }
  function F(j, B, W) {
    return _(j, n, B, W);
  }
  function L(j) {
    return o[j.getDay()];
  }
  function Y(j) {
    return a[j.getDay()];
  }
  function U(j) {
    return l[j.getMonth()];
  }
  function Q(j) {
    return u[j.getMonth()];
  }
  function we(j) {
    return i[+(j.getHours() >= 12)];
  }
  function Le(j) {
    return 1 + ~~(j.getMonth() / 3);
  }
  function vt(j) {
    return o[j.getUTCDay()];
  }
  function Ke(j) {
    return a[j.getUTCDay()];
  }
  function dr(j) {
    return l[j.getUTCMonth()];
  }
  function dn(j) {
    return u[j.getUTCMonth()];
  }
  function Ue(j) {
    return i[+(j.getUTCHours() >= 12)];
  }
  function wo(j) {
    return 1 + ~~(j.getUTCMonth() / 3);
  }
  return {
    format: function(j) {
      var B = P(j += "", w);
      return B.toString = function() {
        return j;
      }, B;
    },
    parse: function(j) {
      var B = A(j += "", !1);
      return B.toString = function() {
        return j;
      }, B;
    },
    utcFormat: function(j) {
      var B = P(j += "", x);
      return B.toString = function() {
        return j;
      }, B;
    },
    utcParse: function(j) {
      var B = A(j += "", !0);
      return B.toString = function() {
        return j;
      }, B;
    }
  };
}
var Uv = { "-": "", _: " ", 0: "0" }, Ee = /^\s*\d+/, BS = /^%/, FS = /[\\^$*+?|[\]().{}]/g;
function K(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function qS(e) {
  return e.replace(FS, "\\$&");
}
function bn(e) {
  return new RegExp("^(?:" + e.map(qS).join("|") + ")", "i");
}
function wn(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function WS(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function KS(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function US(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function HS(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function YS(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Hv(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Yv(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function GS(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function VS(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function XS(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Gv(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function ZS(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Vv(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function QS(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function JS(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function e_(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function t_(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function r_(e, t, r) {
  var n = BS.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function n_(e, t, r) {
  var n = Ee.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function i_(e, t, r) {
  var n = Ee.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Xv(e, t) {
  return K(e.getDate(), t, 2);
}
function a_(e, t) {
  return K(e.getHours(), t, 2);
}
function o_(e, t) {
  return K(e.getHours() % 12 || 12, t, 2);
}
function u_(e, t) {
  return K(1 + Zn.count(qt(e), e), t, 3);
}
function ng(e, t) {
  return K(e.getMilliseconds(), t, 3);
}
function l_(e, t) {
  return ng(e, t) + "000";
}
function c_(e, t) {
  return K(e.getMonth() + 1, t, 2);
}
function s_(e, t) {
  return K(e.getMinutes(), t, 2);
}
function f_(e, t) {
  return K(e.getSeconds(), t, 2);
}
function d_(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function v_(e, t) {
  return K(Qa.count(qt(e) - 1, e), t, 2);
}
function ig(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Xr(e) : Xr.ceil(e);
}
function h_(e, t) {
  return e = ig(e), K(Xr.count(qt(e), e) + (qt(e).getDay() === 4), t, 2);
}
function p_(e) {
  return e.getDay();
}
function m_(e, t) {
  return K(la.count(qt(e) - 1, e), t, 2);
}
function y_(e, t) {
  return K(e.getFullYear() % 100, t, 2);
}
function g_(e, t) {
  return e = ig(e), K(e.getFullYear() % 100, t, 2);
}
function b_(e, t) {
  return K(e.getFullYear() % 1e4, t, 4);
}
function w_(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Xr(e) : Xr.ceil(e), K(e.getFullYear() % 1e4, t, 4);
}
function x_(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + K(t / 60 | 0, "0", 2) + K(t % 60, "0", 2);
}
function Zv(e, t) {
  return K(e.getUTCDate(), t, 2);
}
function P_(e, t) {
  return K(e.getUTCHours(), t, 2);
}
function O_(e, t) {
  return K(e.getUTCHours() % 12 || 12, t, 2);
}
function A_(e, t) {
  return K(1 + Za.count(Wt(e), e), t, 3);
}
function ag(e, t) {
  return K(e.getUTCMilliseconds(), t, 3);
}
function S_(e, t) {
  return ag(e, t) + "000";
}
function __(e, t) {
  return K(e.getUTCMonth() + 1, t, 2);
}
function E_(e, t) {
  return K(e.getUTCMinutes(), t, 2);
}
function j_(e, t) {
  return K(e.getUTCSeconds(), t, 2);
}
function I_(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function C_(e, t) {
  return K(Ja.count(Wt(e) - 1, e), t, 2);
}
function og(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Zr(e) : Zr.ceil(e);
}
function k_(e, t) {
  return e = og(e), K(Zr.count(Wt(e), e) + (Wt(e).getUTCDay() === 4), t, 2);
}
function T_(e) {
  return e.getUTCDay();
}
function M_(e, t) {
  return K(ca.count(Wt(e) - 1, e), t, 2);
}
function D_(e, t) {
  return K(e.getUTCFullYear() % 100, t, 2);
}
function N_(e, t) {
  return e = og(e), K(e.getUTCFullYear() % 100, t, 2);
}
function $_(e, t) {
  return K(e.getUTCFullYear() % 1e4, t, 4);
}
function R_(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Zr(e) : Zr.ceil(e), K(e.getUTCFullYear() % 1e4, t, 4);
}
function L_() {
  return "+0000";
}
function Qv() {
  return "%";
}
function Jv(e) {
  return +e;
}
function eh(e) {
  return Math.floor(+e / 1e3);
}
var zr, ug, lg;
z_({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function z_(e) {
  return zr = zS(e), ug = zr.format, zr.parse, lg = zr.utcFormat, zr.utcParse, zr;
}
function B_(e) {
  return new Date(e);
}
function F_(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Fc(e, t, r, n, i, a, o, u, l, c) {
  var s = Ec(), f = s.invert, d = s.domain, v = c(".%L"), p = c(":%S"), h = c("%I:%M"), m = c("%I %p"), y = c("%a %d"), b = c("%b %d"), w = c("%B"), x = c("%Y");
  function O(P) {
    return (l(P) < P ? v : u(P) < P ? p : o(P) < P ? h : a(P) < P ? m : n(P) < P ? i(P) < P ? y : b : r(P) < P ? w : x)(P);
  }
  return s.invert = function(P) {
    return new Date(f(P));
  }, s.domain = function(P) {
    return arguments.length ? d(Array.from(P, F_)) : d().map(B_);
  }, s.ticks = function(P) {
    var A = d();
    return e(A[0], A[A.length - 1], P ?? 10);
  }, s.tickFormat = function(P, A) {
    return A == null ? O : c(A);
  }, s.nice = function(P) {
    var A = d();
    return (!P || typeof P.range != "function") && (P = t(A[0], A[A.length - 1], P ?? 10)), P ? d(Gy(A, P)) : s;
  }, s.copy = function() {
    return Xn(s, Fc(e, t, r, n, i, a, o, u, l, c));
  }, s;
}
function q_() {
  return dt.apply(Fc(RS, LS, qt, zc, Qa, Zn, Rc, Nc, wr, ug).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function W_() {
  return dt.apply(Fc(NS, $S, Wt, Bc, Ja, Za, Lc, $c, wr, lg).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function eo() {
  var e = 0, t = 1, r, n, i, a, o = Be, u = !1, l;
  function c(f) {
    return f == null || isNaN(f = +f) ? l : o(i === 0 ? 0.5 : (f = (a(f) - r) * i, u ? Math.max(0, Math.min(1, f)) : f));
  }
  c.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(f) {
    return arguments.length ? (u = !!f, c) : u;
  }, c.interpolator = function(f) {
    return arguments.length ? (o = f, c) : o;
  };
  function s(f) {
    return function(d) {
      var v, p;
      return arguments.length ? ([v, p] = d, o = f(v, p), c) : [o(0), o(1)];
    };
  }
  return c.range = s(rn), c.rangeRound = s(_c), c.unknown = function(f) {
    return arguments.length ? (l = f, c) : l;
  }, function(f) {
    return a = f, r = f(e), n = f(t), i = r === n ? 0 : 1 / (n - r), c;
  };
}
function sr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function cg() {
  var e = cr(eo()(Be));
  return e.copy = function() {
    return sr(e, cg());
  }, Vt.apply(e, arguments);
}
function sg() {
  var e = Cc(eo()).domain([1, 10]);
  return e.copy = function() {
    return sr(e, sg()).base(e.base());
  }, Vt.apply(e, arguments);
}
function fg() {
  var e = kc(eo());
  return e.copy = function() {
    return sr(e, fg()).constant(e.constant());
  }, Vt.apply(e, arguments);
}
function qc() {
  var e = Tc(eo());
  return e.copy = function() {
    return sr(e, qc()).exponent(e.exponent());
  }, Vt.apply(e, arguments);
}
function K_() {
  return qc.apply(null, arguments).exponent(0.5);
}
function dg() {
  var e = [], t = Be;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Gn(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(ir), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => IA(e, a / n));
  }, r.copy = function() {
    return dg(t).domain(e);
  }, Vt.apply(r, arguments);
}
function to() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, u, l, c = Be, s, f = !1, d;
  function v(h) {
    return isNaN(h = +h) ? d : (h = 0.5 + ((h = +s(h)) - a) * (n * h < n * a ? u : l), c(f ? Math.max(0, Math.min(1, h)) : h));
  }
  v.domain = function(h) {
    return arguments.length ? ([e, t, r] = h, i = s(e = +e), a = s(t = +t), o = s(r = +r), u = i === a ? 0 : 0.5 / (a - i), l = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, v) : [e, t, r];
  }, v.clamp = function(h) {
    return arguments.length ? (f = !!h, v) : f;
  }, v.interpolator = function(h) {
    return arguments.length ? (c = h, v) : c;
  };
  function p(h) {
    return function(m) {
      var y, b, w;
      return arguments.length ? ([y, b, w] = m, c = rS(h, [y, b, w]), v) : [c(0), c(0.5), c(1)];
    };
  }
  return v.range = p(rn), v.rangeRound = p(_c), v.unknown = function(h) {
    return arguments.length ? (d = h, v) : d;
  }, function(h) {
    return s = h, i = h(e), a = h(t), o = h(r), u = i === a ? 0 : 0.5 / (a - i), l = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, v;
  };
}
function vg() {
  var e = cr(to()(Be));
  return e.copy = function() {
    return sr(e, vg());
  }, Vt.apply(e, arguments);
}
function hg() {
  var e = Cc(to()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return sr(e, hg()).base(e.base());
  }, Vt.apply(e, arguments);
}
function pg() {
  var e = kc(to());
  return e.copy = function() {
    return sr(e, pg()).constant(e.constant());
  }, Vt.apply(e, arguments);
}
function Wc() {
  var e = Tc(to());
  return e.copy = function() {
    return sr(e, Wc()).exponent(e.exponent());
  }, Vt.apply(e, arguments);
}
function U_() {
  return Wc.apply(null, arguments).exponent(0.5);
}
const On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Oc,
  scaleDiverging: vg,
  scaleDivergingLog: hg,
  scaleDivergingPow: Wc,
  scaleDivergingSqrt: U_,
  scaleDivergingSymlog: pg,
  scaleIdentity: Yy,
  scaleImplicit: Tl,
  scaleLinear: Hy,
  scaleLog: Vy,
  scaleOrdinal: Pc,
  scalePoint: TA,
  scalePow: Mc,
  scaleQuantile: Qy,
  scaleQuantize: Jy,
  scaleRadial: Zy,
  scaleSequential: cg,
  scaleSequentialLog: sg,
  scaleSequentialPow: qc,
  scaleSequentialQuantile: dg,
  scaleSequentialSqrt: K_,
  scaleSequentialSymlog: fg,
  scaleSqrt: SS,
  scaleSymlog: Xy,
  scaleThreshold: eg,
  scaleTime: q_,
  scaleUtc: W_,
  tickFormat: Uy
}, Symbol.toStringTag, { value: "Module" }));
var Xt = (e) => e.chartData, ro = S([Xt], (e) => {
  var t = e.chartData != null ? e.chartData.length - 1 : 0;
  return {
    chartData: e.chartData,
    computedData: e.computedData,
    dataEndIndex: t,
    dataStartIndex: 0
  };
}), mg = (e, t, r, n) => n ? ro(e) : Xt(e), H_ = (e, t, r) => r ? ro(e) : Xt(e);
function Kt(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, r] = e;
    if (q(t) && q(r))
      return !0;
  }
  return !1;
}
function th(e, t, r) {
  return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function yg(e, t) {
  if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
    var [r, n] = e, i, a;
    if (q(r))
      i = r;
    else if (typeof r == "function")
      return;
    if (q(n))
      a = n;
    else if (typeof n == "function")
      return;
    var o = [i, a];
    if (Kt(o))
      return o;
  }
}
function Y_(e, t, r) {
  if (!(!r && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var n = e(t, r);
        if (Kt(n))
          return th(n, t, r);
      } catch {
      }
    if (Array.isArray(e) && e.length === 2) {
      var [i, a] = e, o, u;
      if (i === "auto")
        t != null && (o = Math.min(...t));
      else if (D(i))
        o = i;
      else if (typeof i == "function")
        try {
          t != null && (o = i(t?.[0]));
        } catch {
        }
      else if (typeof i == "string" && vd.test(i)) {
        var l = vd.exec(i);
        if (l == null || l[1] == null || t == null)
          o = void 0;
        else {
          var c = +l[1];
          o = t[0] - c;
        }
      } else
        o = t?.[0];
      if (a === "auto")
        t != null && (u = Math.max(...t));
      else if (D(a))
        u = a;
      else if (typeof a == "function")
        try {
          t != null && (u = a(t?.[1]));
        } catch {
        }
      else if (typeof a == "string" && hd.test(a)) {
        var s = hd.exec(a);
        if (s == null || s[1] == null || t == null)
          u = void 0;
        else {
          var f = +s[1];
          u = t[1] + f;
        }
      } else
        u = t?.[1];
      var d = [o, u];
      if (Kt(d))
        return t == null ? d : th(d, t, r);
    }
  }
}
var nn = 1e9, G_ = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Uc, oe = !0, st = "[DecimalError] ", Ar = st + "Invalid argument: ", Kc = st + "Exponent out of range: ", an = Math.floor, yr = Math.pow, V_ = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, et, Oe = 1e7, ne = 7, gg = 9007199254740991, sa = an(gg / ne), M = {};
M.absoluteValue = M.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
M.comparedTo = M.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
M.decimalPlaces = M.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * ne;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
M.dividedBy = M.div = function(e) {
  return Lt(this, new this.constructor(e));
};
M.dividedToIntegerBy = M.idiv = function(e) {
  var t = this, r = t.constructor;
  return J(Lt(t, new r(e), 0, 1), r.precision);
};
M.equals = M.eq = function(e) {
  return !this.cmp(e);
};
M.exponent = function() {
  return he(this);
};
M.greaterThan = M.gt = function(e) {
  return this.cmp(e) > 0;
};
M.greaterThanOrEqualTo = M.gte = function(e) {
  return this.cmp(e) >= 0;
};
M.isInteger = M.isint = function() {
  return this.e > this.d.length - 2;
};
M.isNegative = M.isneg = function() {
  return this.s < 0;
};
M.isPositive = M.ispos = function() {
  return this.s > 0;
};
M.isZero = function() {
  return this.s === 0;
};
M.lessThan = M.lt = function(e) {
  return this.cmp(e) < 0;
};
M.lessThanOrEqualTo = M.lte = function(e) {
  return this.cmp(e) < 1;
};
M.logarithm = M.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(et)) throw Error(st + "NaN");
  if (r.s < 1) throw Error(st + (r.s ? "NaN" : "-Infinity"));
  return r.eq(et) ? new n(0) : (oe = !1, t = Lt(zn(r, a), zn(e, a), a), oe = !0, J(t, i));
};
M.minus = M.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? xg(t, e) : bg(t, (e.s = -e.s, e));
};
M.modulo = M.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(st + "NaN");
  return r.s ? (oe = !1, t = Lt(r, e, 0, 1).times(e), oe = !0, r.minus(t)) : J(new n(r), i);
};
M.naturalExponential = M.exp = function() {
  return wg(this);
};
M.naturalLogarithm = M.ln = function() {
  return zn(this);
};
M.negated = M.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
M.plus = M.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? bg(t, e) : xg(t, (e.s = -e.s, e));
};
M.precision = M.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ar + e);
  if (t = he(i) + 1, n = i.d.length - 1, r = n * ne + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
M.squareRoot = M.sqrt = function() {
  var e, t, r, n, i, a, o, u = this, l = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new l(0);
    throw Error(st + "NaN");
  }
  for (e = he(u), oe = !1, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = Et(u.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = an((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(Lt(u, a, o + 2)).times(0.5), Et(a.d).slice(0, o) === (t = Et(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (J(a, r + 1, 0), a.times(a).eq(u)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return oe = !0, J(n, r);
};
M.times = M.mul = function(e) {
  var t, r, n, i, a, o, u, l, c, s = this, f = s.constructor, d = s.d, v = (e = new f(e)).d;
  if (!s.s || !e.s) return new f(0);
  for (e.s *= s.s, r = s.e + e.e, l = d.length, c = v.length, l < c && (a = d, d = v, v = a, o = l, l = c, c = o), a = [], o = l + c, n = o; n--; ) a.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      u = a[i] + v[n] * d[i - n - 1] + t, a[i--] = u % Oe | 0, t = u / Oe | 0;
    a[i] = (a[i] + t) % Oe | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, oe ? J(e, f.precision) : e;
};
M.toDecimalPlaces = M.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Mt(e, 0, nn), t === void 0 ? t = n.rounding : Mt(t, 0, 8), J(r, e + he(r) + 1, t));
};
M.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = kr(n, !0) : (Mt(e, 0, nn), t === void 0 ? t = i.rounding : Mt(t, 0, 8), n = J(new i(n), e + 1, t), r = kr(n, !0, e + 1)), r;
};
M.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? kr(i) : (Mt(e, 0, nn), t === void 0 ? t = a.rounding : Mt(t, 0, 8), n = J(new a(i), e + he(i) + 1, t), r = kr(n.abs(), !1, e + he(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
M.toInteger = M.toint = function() {
  var e = this, t = e.constructor;
  return J(new t(e), he(e) + 1, t.rounding);
};
M.toNumber = function() {
  return +this;
};
M.toPower = M.pow = function(e) {
  var t, r, n, i, a, o, u = this, l = u.constructor, c = 12, s = +(e = new l(e));
  if (!e.s) return new l(et);
  if (u = new l(u), !u.s) {
    if (e.s < 1) throw Error(st + "Infinity");
    return u;
  }
  if (u.eq(et)) return u;
  if (n = l.precision, e.eq(et)) return J(u, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = u.s, o) {
    if ((r = s < 0 ? -s : s) <= gg) {
      for (i = new l(et), t = Math.ceil(n / ne + 4), oe = !1; r % 2 && (i = i.times(u), nh(i.d, t)), r = an(r / 2), r !== 0; )
        u = u.times(u), nh(u.d, t);
      return oe = !0, e.s < 0 ? new l(et).div(i) : J(i, n);
    }
  } else if (a < 0) throw Error(st + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, oe = !1, i = e.times(zn(u, n + c)), oe = !0, i = wg(i), i.s = a, i;
};
M.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = he(i), n = kr(i, r <= a.toExpNeg || r >= a.toExpPos)) : (Mt(e, 1, nn), t === void 0 ? t = a.rounding : Mt(t, 0, 8), i = J(new a(i), e, t), r = he(i), n = kr(i, e <= r || r <= a.toExpNeg, e)), n;
};
M.toSignificantDigits = M.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Mt(e, 1, nn), t === void 0 ? t = n.rounding : Mt(t, 0, 8)), J(new n(r), e, t);
};
M.toString = M.valueOf = M.val = M.toJSON = M[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = he(e), r = e.constructor;
  return kr(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function bg(e, t) {
  var r, n, i, a, o, u, l, c, s = e.constructor, f = s.precision;
  if (!e.s || !t.s)
    return t.s || (t = new s(e)), oe ? J(t, f) : t;
  if (l = e.d, c = t.d, o = e.e, i = t.e, l = l.slice(), a = o - i, a) {
    for (a < 0 ? (n = l, a = -a, u = c.length) : (n = c, i = o, u = l.length), o = Math.ceil(f / ne), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (u = l.length, a = c.length, u - a < 0 && (a = u, n = c, c = l, l = n), r = 0; a; )
    r = (l[--a] = l[a] + c[a] + r) / Oe | 0, l[a] %= Oe;
  for (r && (l.unshift(r), ++i), u = l.length; l[--u] == 0; ) l.pop();
  return t.d = l, t.e = i, oe ? J(t, f) : t;
}
function Mt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Ar + e);
}
function Et(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = ne - n.length, r && (a += er(r)), a += n;
    o = e[t], n = o + "", r = ne - n.length, r && (a += er(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Lt = /* @__PURE__ */ (function() {
  function e(n, i) {
    var a, o = 0, u = n.length;
    for (n = n.slice(); u--; )
      a = n[u] * i + o, n[u] = a % Oe | 0, o = a / Oe | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, l;
    if (a != o)
      l = a > o ? 1 : -1;
    else
      for (u = l = 0; u < a; u++)
        if (n[u] != i[u]) {
          l = n[u] > i[u] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Oe + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var u, l, c, s, f, d, v, p, h, m, y, b, w, x, O, P, A, _, C = n.constructor, T = n.s == i.s ? 1 : -1, k = n.d, E = i.d;
    if (!n.s) return new C(n);
    if (!i.s) throw Error(st + "Division by zero");
    for (l = n.e - i.e, A = E.length, O = k.length, v = new C(T), p = v.d = [], c = 0; E[c] == (k[c] || 0); ) ++c;
    if (E[c] > (k[c] || 0) && --l, a == null ? b = a = C.precision : o ? b = a + (he(n) - he(i)) + 1 : b = a, b < 0) return new C(0);
    if (b = b / ne + 2 | 0, c = 0, A == 1)
      for (s = 0, E = E[0], b++; (c < O || s) && b--; c++)
        w = s * Oe + (k[c] || 0), p[c] = w / E | 0, s = w % E | 0;
    else {
      for (s = Oe / (E[0] + 1) | 0, s > 1 && (E = e(E, s), k = e(k, s), A = E.length, O = k.length), x = A, h = k.slice(0, A), m = h.length; m < A; ) h[m++] = 0;
      _ = E.slice(), _.unshift(0), P = E[0], E[1] >= Oe / 2 && ++P;
      do
        s = 0, u = t(E, h, A, m), u < 0 ? (y = h[0], A != m && (y = y * Oe + (h[1] || 0)), s = y / P | 0, s > 1 ? (s >= Oe && (s = Oe - 1), f = e(E, s), d = f.length, m = h.length, u = t(f, h, d, m), u == 1 && (s--, r(f, A < d ? _ : E, d))) : (s == 0 && (u = s = 1), f = E.slice()), d = f.length, d < m && f.unshift(0), r(h, f, m), u == -1 && (m = h.length, u = t(E, h, A, m), u < 1 && (s++, r(h, A < m ? _ : E, m))), m = h.length) : u === 0 && (s++, h = [0]), p[c++] = s, u && h[0] ? h[m++] = k[x] || 0 : (h = [k[x]], m = 1);
      while ((x++ < O || h[0] !== void 0) && b--);
    }
    return p[0] || p.shift(), v.e = l, J(v, o ? a + he(v) + 1 : a);
  };
})();
function wg(e, t) {
  var r, n, i, a, o, u, l = 0, c = 0, s = e.constructor, f = s.precision;
  if (he(e) > 16) throw Error(Kc + he(e));
  if (!e.s) return new s(et);
  for (oe = !1, u = f, o = new s(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(yr(2, c)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new s(et), s.precision = u; ; ) {
    if (i = J(i.times(e), u), r = r.times(++l), o = a.plus(Lt(i, r, u)), Et(o.d).slice(0, u) === Et(a.d).slice(0, u)) {
      for (; c--; ) a = J(a.times(a), u);
      return s.precision = f, t == null ? (oe = !0, J(a, f)) : a;
    }
    a = o;
  }
}
function he(e) {
  for (var t = e.e * ne, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Lu(e, t, r) {
  if (t > e.LN10.sd())
    throw oe = !0, r && (e.precision = r), Error(st + "LN10 precision limit exceeded");
  return J(new e(e.LN10), t);
}
function er(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function zn(e, t) {
  var r, n, i, a, o, u, l, c, s, f = 1, d = 10, v = e, p = v.d, h = v.constructor, m = h.precision;
  if (v.s < 1) throw Error(st + (v.s ? "NaN" : "-Infinity"));
  if (v.eq(et)) return new h(0);
  if (t == null ? (oe = !1, c = m) : c = t, v.eq(10))
    return t == null && (oe = !0), Lu(h, c);
  if (c += d, h.precision = c, r = Et(p), n = r.charAt(0), a = he(v), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      v = v.times(e), r = Et(v.d), n = r.charAt(0), f++;
    a = he(v), n > 1 ? (v = new h("0." + r), a++) : v = new h(n + "." + r.slice(1));
  } else
    return l = Lu(h, c + 2, m).times(a + ""), v = zn(new h(n + "." + r.slice(1)), c - d).plus(l), h.precision = m, t == null ? (oe = !0, J(v, m)) : v;
  for (u = o = v = Lt(v.minus(et), v.plus(et), c), s = J(v.times(v), c), i = 3; ; ) {
    if (o = J(o.times(s), c), l = u.plus(Lt(o, new h(i), c)), Et(l.d).slice(0, c) === Et(u.d).slice(0, c))
      return u = u.times(2), a !== 0 && (u = u.plus(Lu(h, c + 2, m).times(a + ""))), u = Lt(u, new h(f), c), h.precision = m, t == null ? (oe = !0, J(u, m)) : u;
    u = l, i += 2;
  }
}
function rh(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = an(r / ne), e.d = [], n = (r + 1) % ne, r < 0 && (n += ne), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= ne; n < i; ) e.d.push(+t.slice(n, n += ne));
      t = t.slice(n), n = ne - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), oe && (e.e > sa || e.e < -sa)) throw Error(Kc + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function J(e, t, r) {
  var n, i, a, o, u, l, c, s, f = e.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += ne, i = t, c = f[s = 0];
  else {
    if (s = Math.ceil((n + 1) / ne), a = f.length, s >= a) return e;
    for (c = a = f[s], o = 1; a >= 10; a /= 10) o++;
    n %= ne, i = n - ne + o;
  }
  if (r !== void 0 && (a = yr(10, o - i - 1), u = c / a % 10 | 0, l = t < 0 || f[s + 1] !== void 0 || c % a, l = r < 4 ? (u || l) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || l || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? c / yr(10, o - i) : 0 : f[s - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return l ? (a = he(e), f.length = 1, t = t - a - 1, f[0] = yr(10, (ne - t % ne) % ne), e.e = an(-t / ne) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = s, a = 1, s--) : (f.length = s + 1, a = yr(10, ne - n), f[s] = i > 0 ? (c / yr(10, o - i) % yr(10, i) | 0) * a : 0), l)
    for (; ; )
      if (s == 0) {
        (f[0] += a) == Oe && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[s] += a, f[s] != Oe) break;
        f[s--] = 0, a = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (oe && (e.e > sa || e.e < -sa))
    throw Error(Kc + he(e));
  return e;
}
function xg(e, t) {
  var r, n, i, a, o, u, l, c, s, f, d = e.constructor, v = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), oe ? J(t, v) : t;
  if (l = e.d, f = t.d, n = t.e, c = e.e, l = l.slice(), o = c - n, o) {
    for (s = o < 0, s ? (r = l, o = -o, u = f.length) : (r = f, n = c, u = l.length), i = Math.max(Math.ceil(v / ne), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = l.length, u = f.length, s = i < u, s && (u = i), i = 0; i < u; i++)
      if (l[i] != f[i]) {
        s = l[i] < f[i];
        break;
      }
    o = 0;
  }
  for (s && (r = l, l = f, f = r, t.s = -t.s), u = l.length, i = f.length - u; i > 0; --i) l[u++] = 0;
  for (i = f.length; i > o; ) {
    if (l[--i] < f[i]) {
      for (a = i; a && l[--a] === 0; ) l[a] = Oe - 1;
      --l[a], l[i] += Oe;
    }
    l[i] -= f[i];
  }
  for (; l[--u] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? (t.d = l, t.e = n, oe ? J(t, v) : t) : new d(0);
}
function kr(e, t, r) {
  var n, i = he(e), a = Et(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + er(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + er(-i - 1) + a, r && (n = r - o) > 0 && (a += er(n))) : i >= o ? (a += er(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + er(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += er(n))), e.s < 0 ? "-" + a : a;
}
function nh(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Pg(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(Ar + a);
      if (a > 0)
        o.s = 1;
      else if (a < 0)
        a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return rh(o, a.toString());
    } else if (typeof a != "string")
      throw Error(Ar + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, V_.test(a)) rh(o, a);
    else throw Error(Ar + a);
  }
  if (i.prototype = M, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = Pg, i.config = i.set = X_, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function X_(e) {
  if (!e || typeof e != "object")
    throw Error(st + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    nn,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (an(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Ar + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Ar + r + ": " + n);
  return this;
}
var Uc = Pg(G_);
et = new Uc(1);
const V = Uc;
function Og(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new V(e).abs().log(10).toNumber()) + 1, t;
}
function Ag(e, t, r) {
  for (var n = new V(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var Sg = (e) => {
  var [t, r] = e, [n, i] = [t, r];
  return t > r && ([n, i] = [r, t]), [n, i];
}, _g = (e, t, r) => {
  if (e.lte(0))
    return new V(0);
  var n = Og(e.toNumber()), i = new V(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, u = new V(Math.ceil(a.div(o).toNumber())).add(r).mul(o), l = u.mul(i);
  return t ? new V(l.toNumber()) : new V(Math.ceil(l.toNumber()));
}, Z_ = (e, t, r) => {
  var n = new V(1), i = new V(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new V(10).pow(Og(e) - 1), i = new V(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new V(Math.floor(e)));
  } else e === 0 ? i = new V(Math.floor((t - 1) / 2)) : r || (i = new V(Math.floor(e)));
  for (var o = Math.floor((t - 1) / 2), u = [], l = 0; l < t; l++)
    u.push(i.add(new V(l - o).mul(n)).toNumber());
  return u;
}, Eg = function(t, r, n, i) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((r - t) / (n - 1)))
    return {
      step: new V(0),
      tickMin: new V(0),
      tickMax: new V(0)
    };
  var o = _g(new V(r).sub(t).div(n - 1), i, a), u;
  t <= 0 && r >= 0 ? u = new V(0) : (u = new V(t).add(r).div(2), u = u.sub(new V(u).mod(o)));
  var l = Math.ceil(u.sub(t).div(o).toNumber()), c = Math.ceil(new V(r).sub(u).div(o).toNumber()), s = l + c + 1;
  return s > n ? Eg(t, r, n, i, a + 1) : (s < n && (c = r > 0 ? c + (n - s) : c, l = r > 0 ? l : l + (n - s)), {
    step: o,
    tickMin: u.sub(new V(l).mul(o)),
    tickMax: u.add(new V(c).mul(o))
  });
}, Q_ = function(t) {
  var [r, n] = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), [u, l] = Sg([r, n]);
  if (u === -1 / 0 || l === 1 / 0) {
    var c = l === 1 / 0 ? [u, ...Array(i - 1).fill(1 / 0)] : [...Array(i - 1).fill(-1 / 0), l];
    return r > n ? c.reverse() : c;
  }
  if (u === l)
    return Z_(u, i, a);
  var {
    step: s,
    tickMin: f,
    tickMax: d
  } = Eg(u, l, o, a, 0), v = Ag(f, d.add(new V(0.1).mul(s)), s);
  return r > n ? v.reverse() : v;
}, J_ = function(t, r) {
  var [n, i] = t, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, [o, u] = Sg([n, i]);
  if (o === -1 / 0 || u === 1 / 0)
    return [n, i];
  if (o === u)
    return [o];
  var l = Math.max(r, 2), c = _g(new V(u).sub(o).div(l - 1), a, 0), s = [...Ag(new V(o), new V(u), c), u];
  return a === !1 && (s = s.map((f) => Math.round(f))), n > i ? s.reverse() : s;
}, jg = (e) => e.rootProps.maxBarSize, eE = (e) => e.rootProps.barGap, Ig = (e) => e.rootProps.barCategoryGap, tE = (e) => e.rootProps.barSize, Qn = (e) => e.rootProps.stackOffset, Cg = (e) => e.rootProps.reverseStackOrder, Hc = (e) => e.options.chartName, Yc = (e) => e.rootProps.syncId, kg = (e) => e.rootProps.syncMethod, Gc = (e) => e.options.eventEmitter, ke = {
  /**
   * CartesianGrid and PolarGrid
   */
  grid: -100,
  /**
   * Background of Bar and RadialBar.
   * This is not visible by default but can be enabled by setting background={true} on Bar or RadialBar.
   */
  barBackground: -50,
  /*
   * other chart elements or custom elements without specific zIndex
   * render in here, at zIndex 0
   */
  /**
   * Area, Pie, Radar, and ReferenceArea
   */
  area: 100,
  /**
   * Cursor is embedded inside Tooltip and controlled by it.
   * The Tooltip itself has a separate portal and is not included in the zIndex system;
   * Cursor is the decoration inside the chart area. CursorRectangle is a rectangle box.
   * It renders below bar so that in a stacked bar chart the cursor rectangle does not hide the other bars.
   */
  cursorRectangle: 200,
  /**
   * Bar and RadialBar
   */
  bar: 300,
  /**
   * Line and ReferenceLine, and ErrorBor
   */
  line: 400,
  /**
   * XAxis and YAxis and PolarAngleAxis and PolarRadiusAxis ticks and lines and children
   */
  axis: 500,
  /**
   * Scatter and ReferenceDot,
   * and Dots of Line and Area and Radar if they have dot=true
   */
  scatter: 600,
  /**
   * Hovering over a Bar or RadialBar renders a highlight rectangle
   */
  activeBar: 1e3,
  /**
   * Cursor is embedded inside Tooltip and controlled by it.
   * The Tooltip itself has a separate portal and is not included in the zIndex system;
   * Cursor is the decoration inside the chart area, usually a cross or a box.
   * CursorLine is a line cursor rendered in Line, Area, Scatter, Radar charts.
   * It renders above the Line and Scatter so that it is always visible.
   * It renders below active dot so that the dot is always visible and shows the current point.
   * We're also assuming that the active dot is small enough that it does not fully cover the cursor line.
   *
   * This also applies to the radial cursor in RadialBarChart.
   */
  cursorLine: 1100,
  /**
   * Hovering over a Point in Line, Area, Scatter, Radar renders a highlight dot
   */
  activeDot: 1200,
  /**
   * LabelList and Label, including Axis labels
   */
  label: 2e3
}, hr = {
  allowDecimals: !1,
  // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
  allowDataOverflow: !1,
  angleAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  type: "auto"
}, At = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: !0,
  includeHidden: !1,
  radiusAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  type: "auto"
}, no = (e, t) => {
  if (!(!e || !t))
    return e != null && e.reversed ? [t[1], t[0]] : t;
};
function io(e, t, r) {
  if (r !== "auto")
    return r;
  if (e != null)
    return lr(e, t) ? "category" : "number";
}
function ih(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ih(Object(r), !0).forEach(function(n) {
      rE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ih(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rE(e, t, r) {
  return (t = nE(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nE(e) {
  var t = iE(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function iE(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ah = {
  allowDataOverflow: hr.allowDataOverflow,
  allowDecimals: hr.allowDecimals,
  allowDuplicatedCategory: !1,
  // defaultPolarAngleAxisProps.allowDuplicatedCategory has it set to true but the actual axis rendering ignores the prop because reasons,
  dataKey: void 0,
  domain: void 0,
  id: hr.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: hr.reversed,
  scale: hr.scale,
  tick: hr.tick,
  tickCount: void 0,
  ticks: void 0,
  type: hr.type,
  unit: void 0
}, oh = {
  allowDataOverflow: At.allowDataOverflow,
  allowDecimals: At.allowDecimals,
  allowDuplicatedCategory: At.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: At.radiusAxisId,
  includeHidden: At.includeHidden,
  name: void 0,
  reversed: At.reversed,
  scale: At.scale,
  tick: At.tick,
  tickCount: At.tickCount,
  ticks: void 0,
  type: At.type,
  unit: void 0
}, aE = (e, t) => {
  if (t != null)
    return e.polarAxis.angleAxis[t];
}, Vc = S([aE, py], (e, t) => {
  var r;
  if (e != null)
    return e;
  var n = (r = io(t, "angleAxis", ah.type)) !== null && r !== void 0 ? r : "category";
  return fa(fa({}, ah), {}, {
    type: n
  });
}), oE = (e, t) => e.polarAxis.radiusAxis[t], Xc = S([oE, py], (e, t) => {
  var r;
  if (e != null)
    return e;
  var n = (r = io(t, "radiusAxis", oh.type)) !== null && r !== void 0 ? r : "category";
  return fa(fa({}, oh), {}, {
    type: n
  });
}), ao = (e) => e.polarOptions, Zc = S([Yt, Gt, ye], Ty), Tg = S([ao, Zc], (e, t) => {
  if (e != null)
    return Ne(e.innerRadius, t, 0);
}), Mg = S([ao, Zc], (e, t) => {
  if (e != null)
    return Ne(e.outerRadius, t, t * 0.8);
}), uE = (e) => {
  if (e == null)
    return [0, 0];
  var {
    startAngle: t,
    endAngle: r
  } = e;
  return [t, r];
}, Dg = S([ao], uE);
S([Vc, Dg], no);
var Ng = S([Zc, Tg, Mg], (e, t, r) => {
  if (!(e == null || t == null || r == null))
    return [t, r];
});
S([Xc, Ng], no);
var $g = S([G, ao, Tg, Mg, Yt, Gt], (e, t, r, n, i, a) => {
  if (!(e !== "centric" && e !== "radial" || t == null || r == null || n == null)) {
    var {
      cx: o,
      cy: u,
      startAngle: l,
      endAngle: c
    } = t;
    return {
      cx: Ne(o, i, i / 2),
      cy: Ne(u, a, a / 2),
      innerRadius: r,
      outerRadius: n,
      startAngle: l,
      endAngle: c,
      clockWise: !1
      // this property look useful, why not use it?
    };
  }
}), le = (e, t) => t, Jn = (e, t, r) => r;
function Qc(e) {
  return e?.id;
}
function Rg(e, t, r) {
  var {
    chartData: n = []
  } = t, {
    allowDuplicatedCategory: i,
    dataKey: a
  } = r, o = /* @__PURE__ */ new Map();
  return e.forEach((u) => {
    var l, c = (l = u.data) !== null && l !== void 0 ? l : n;
    if (!(c == null || c.length === 0)) {
      var s = Qc(u);
      c.forEach((f, d) => {
        var v = a == null || i ? d : String(ie(f, a, null)), p = ie(f, u.dataKey, 0), h;
        o.has(v) ? h = o.get(v) : h = {}, Object.assign(h, {
          [s]: p
        }), o.set(v, h);
      });
    }
  }), Array.from(o.values());
}
function oo(e) {
  return "stackId" in e && e.stackId != null && e.dataKey != null;
}
var uo = (e, t) => e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function lo(e, t) {
  return Array.isArray(e) && Array.isArray(t) && e.length === 0 && t.length === 0 ? !0 : e === t;
}
function lE(e, t) {
  if (e.length === t.length) {
    for (var r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  return !1;
}
var je = (e) => {
  var t = G(e);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, on = (e) => e.tooltip.settings.axisId;
function cE(e) {
  if (e in On)
    return On[e]();
  var t = "scale".concat(qn(e));
  if (t in On)
    return On[t]();
}
function uh(e) {
  var t = e.ticks, r = e.bandwidth, n = e.range(), i = [Math.min(...n), Math.max(...n)];
  return {
    domain: () => e.domain(),
    range: (function(a) {
      function o() {
        return a.apply(this, arguments);
      }
      return o.toString = function() {
        return a.toString();
      }, o;
    })(() => i),
    rangeMin: () => i[0],
    rangeMax: () => i[1],
    isInRange(a) {
      var o = i[0], u = i[1];
      return o <= u ? a >= o && a <= u : a >= u && a <= o;
    },
    bandwidth: r ? () => r.call(e) : void 0,
    ticks: t ? (a) => t.call(e, a) : void 0,
    map: (a, o) => {
      var u = e(a);
      if (u != null) {
        if (e.bandwidth && o !== null && o !== void 0 && o.position) {
          var l = e.bandwidth();
          switch (o.position) {
            case "middle":
              u += l / 2;
              break;
            case "end":
              u += l;
              break;
          }
        }
        return u;
      }
    }
  };
}
function lh(e, t, r) {
  if (typeof e == "function")
    return uh(e.copy().domain(t).range(r));
  if (e != null) {
    var n = cE(e);
    if (n != null)
      return n.domain(t).range(r), uh(n);
  }
}
var Lg = (e, t) => {
  if (t != null)
    switch (e) {
      case "linear": {
        if (!Kt(t)) {
          for (var r, n, i = 0; i < t.length; i++) {
            var a = t[i];
            q(a) && ((r === void 0 || a < r) && (r = a), (n === void 0 || a > n) && (n = a));
          }
          return r !== void 0 && n !== void 0 ? [r, n] : void 0;
        }
        return t;
      }
      default:
        return t;
    }
};
function ch(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function da(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ch(Object(r), !0).forEach(function(n) {
      sE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ch(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sE(e, t, r) {
  return (t = fE(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fE(e) {
  var t = dE(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function dE(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $l = [0, "auto"], xe = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: void 0,
  height: 30,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "bottom",
  padding: {
    left: 0,
    right: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "category",
  unit: void 0
}, zg = (e, t) => e.cartesianAxis.xAxis[t], Zt = (e, t) => {
  var r = zg(e, t);
  return r ?? xe;
}, Pe = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: $l,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "left",
  padding: {
    top: 0,
    bottom: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "number",
  unit: void 0,
  width: Un
}, Bg = (e, t) => e.cartesianAxis.yAxis[t], Qt = (e, t) => {
  var r = Bg(e, t);
  return r ?? Pe;
}, vE = {
  domain: [0, "auto"],
  includeHidden: !1,
  reversed: !1,
  allowDataOverflow: !1,
  allowDuplicatedCategory: !1,
  dataKey: void 0,
  id: 0,
  name: "",
  range: [64, 64],
  scale: "auto",
  type: "number",
  unit: ""
}, Jc = (e, t) => {
  var r = e.cartesianAxis.zAxis[t];
  return r ?? vE;
}, de = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Zt(e, r);
    case "yAxis":
      return Qt(e, r);
    case "zAxis":
      return Jc(e, r);
    case "angleAxis":
      return Vc(e, r);
    case "radiusAxis":
      return Xc(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, hE = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Zt(e, r);
    case "yAxis":
      return Qt(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, un = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Zt(e, r);
    case "yAxis":
      return Qt(e, r);
    case "angleAxis":
      return Vc(e, r);
    case "radiusAxis":
      return Xc(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Fg = (e) => e.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function es(e, t) {
  return (r) => {
    switch (e) {
      case "xAxis":
        return "xAxisId" in r && r.xAxisId === t;
      case "yAxis":
        return "yAxisId" in r && r.yAxisId === t;
      case "zAxis":
        return "zAxisId" in r && r.zAxisId === t;
      case "angleAxis":
        return "angleAxisId" in r && r.angleAxisId === t;
      case "radiusAxis":
        return "radiusAxisId" in r && r.radiusAxisId === t;
      default:
        return !1;
    }
  };
}
var ts = (e) => e.graphicalItems.cartesianItems, pE = S([le, Jn], es), rs = (e, t, r) => e.filter(r).filter((n) => t?.includeHidden === !0 ? !0 : !n.hide), ei = S([ts, de, pE], rs, {
  memoizeOptions: {
    resultEqualityCheck: lo
  }
}), qg = S([ei], (e) => e.filter((t) => t.type === "area" || t.type === "bar").filter(oo)), Wg = (e) => e.filter((t) => !("stackId" in t) || t.stackId === void 0), mE = S([ei], Wg), ns = (e) => e.map((t) => t.data).filter(Boolean).flat(1), yE = S([ei], ns, {
  memoizeOptions: {
    resultEqualityCheck: lo
  }
}), is = (e, t) => {
  var {
    chartData: r = [],
    dataStartIndex: n,
    dataEndIndex: i
  } = t;
  return e.length > 0 ? e : r.slice(n, i + 1);
}, as = S([yE, mg], is), os = (e, t, r) => t?.dataKey != null ? e.map((n) => ({
  value: ie(n, t.dataKey)
})) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e.map((i) => ({
  value: ie(i, n)
}))) : e.map((n) => ({
  value: n
})), co = S([as, de, ei], os);
function Kg(e, t) {
  switch (e) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return !1;
  }
}
function _i(e) {
  if (kt(e) || e instanceof Date) {
    var t = Number(e);
    if (q(t))
      return t;
  }
}
function sh(e) {
  if (Array.isArray(e)) {
    var t = [_i(e[0]), _i(e[1])];
    return Kt(t) ? t : void 0;
  }
  var r = _i(e);
  if (r != null)
    return [r, r];
}
function Ut(e) {
  return e.map(_i).filter(Ye);
}
function gE(e, t, r) {
  return !r || typeof t != "number" || Ct(t) ? [] : r.length ? Ut(r.flatMap((n) => {
    var i = ie(e, n.dataKey), a, o;
    if (Array.isArray(i) ? [a, o] = i : a = o = i, !(!q(a) || !q(o)))
      return [t - a, t + o];
  })) : [];
}
var be = (e) => {
  var t = je(e), r = on(e);
  return un(e, t, r);
}, ti = S([be], (e) => e?.dataKey), bE = S([qg, mg, be], Rg), Ug = (e, t, r, n) => {
  var i = {}, a = t.reduce((o, u) => {
    if (u.stackId == null)
      return o;
    var l = o[u.stackId];
    return l == null && (l = []), l.push(u), o[u.stackId] = l, o;
  }, i);
  return Object.fromEntries(Object.entries(a).map((o) => {
    var [u, l] = o, c = n ? [...l].reverse() : l, s = c.map(Qc);
    return [u, {
      // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
      stackedData: eO(e, s, r),
      graphicalItems: c
    }];
  }));
}, Rl = S([bE, qg, Qn, Cg], Ug), Hg = (e, t, r, n) => {
  var {
    dataStartIndex: i,
    dataEndIndex: a
  } = t;
  if (n == null && r !== "zAxis") {
    var o = aO(e, i, a);
    if (!(o != null && o[0] === 0 && o[1] === 0))
      return o;
  }
}, wE = S([de], (e) => e.allowDataOverflow), us = (e) => {
  var t;
  if (e == null || !("domain" in e))
    return $l;
  if (e.domain != null)
    return e.domain;
  if ("ticks" in e && e.ticks != null) {
    if (e.type === "number") {
      var r = Ut(e.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e.type === "category")
      return e.ticks.map(String);
  }
  return (t = e?.domain) !== null && t !== void 0 ? t : $l;
}, ls = S([de], us), cs = S([ls, wE], yg), xE = S([Rl, Xt, le, cs], Hg, {
  memoizeOptions: {
    resultEqualityCheck: uo
  }
}), so = (e) => e.errorBars, PE = (e, t, r) => e.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => Kg(r, n)), va = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r.filter(Boolean);
  if (i.length !== 0) {
    var a = i.flat(), o = Math.min(...a), u = Math.max(...a);
    return [o, u];
  }
}, ss = (e, t, r, n, i) => {
  var a, o;
  if (r.length > 0 && e.forEach((u) => {
    r.forEach((l) => {
      var c, s, f = (c = n[l.id]) === null || c === void 0 ? void 0 : c.filter((y) => Kg(i, y)), d = ie(u, (s = t.dataKey) !== null && s !== void 0 ? s : l.dataKey), v = gE(u, d, f);
      if (v.length >= 2) {
        var p = Math.min(...v), h = Math.max(...v);
        (a == null || p < a) && (a = p), (o == null || h > o) && (o = h);
      }
      var m = sh(d);
      m != null && (a = a == null ? m[0] : Math.min(a, m[0]), o = o == null ? m[1] : Math.max(o, m[1]));
    });
  }), t?.dataKey != null && e.forEach((u) => {
    var l = sh(ie(u, t.dataKey));
    l != null && (a = a == null ? l[0] : Math.min(a, l[0]), o = o == null ? l[1] : Math.max(o, l[1]));
  }), q(a) && q(o))
    return [a, o];
}, OE = S([as, de, mE, so, le], ss, {
  memoizeOptions: {
    resultEqualityCheck: uo
  }
});
function AE(e) {
  var {
    value: t
  } = e;
  if (kt(t) || t instanceof Date)
    return t;
}
var SE = (e, t, r) => {
  var n = e.map(AE).filter((i) => i != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && fm(n)) ? $y(0, e.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, Yg = (e) => e.referenceElements.dots, ln = (e, t, r) => e.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), _E = S([Yg, le, Jn], ln), Gg = (e) => e.referenceElements.areas, EE = S([Gg, le, Jn], ln), Vg = (e) => e.referenceElements.lines, jE = S([Vg, le, Jn], ln), Xg = (e, t) => {
  if (e != null) {
    var r = Ut(e.map((n) => t === "xAxis" ? n.x : n.y));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, IE = S(_E, le, Xg), Zg = (e, t) => {
  if (e != null) {
    var r = Ut(e.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, CE = S([EE, le], Zg);
function kE(e) {
  var t;
  if (e.x != null)
    return Ut([e.x]);
  var r = (t = e.segment) === null || t === void 0 ? void 0 : t.map((n) => n.x);
  return r == null || r.length === 0 ? [] : Ut(r);
}
function TE(e) {
  var t;
  if (e.y != null)
    return Ut([e.y]);
  var r = (t = e.segment) === null || t === void 0 ? void 0 : t.map((n) => n.y);
  return r == null || r.length === 0 ? [] : Ut(r);
}
var Qg = (e, t) => {
  if (e != null) {
    var r = e.flatMap((n) => t === "xAxis" ? kE(n) : TE(n));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, ME = S([jE, le], Qg), DE = S(IE, ME, CE, (e, t, r) => va(e, r, t)), fs = (e, t, r, n, i, a, o, u) => {
  if (r != null)
    return r;
  var l = o === "vertical" && u === "xAxis" || o === "horizontal" && u === "yAxis", c = l ? va(n, a, i) : va(a, i);
  return Y_(t, c, e.allowDataOverflow);
}, NE = S([de, ls, cs, xE, OE, DE, G, le], fs, {
  memoizeOptions: {
    resultEqualityCheck: uo
  }
}), $E = [0, 1], ds = (e, t, r, n, i, a, o) => {
  if (!((e == null || r == null || r.length === 0) && o === void 0)) {
    var {
      dataKey: u,
      type: l
    } = e, c = lr(t, a);
    if (c && u == null) {
      var s;
      return $y(0, (s = r?.length) !== null && s !== void 0 ? s : 0);
    }
    return l === "category" ? SE(n, e, c) : i === "expand" ? $E : o;
  }
}, vs = S([de, G, as, co, Qn, le, NE], ds);
function RE(e) {
  return e in On;
}
var Jg = (e, t, r) => {
  if (e != null) {
    var {
      scale: n,
      type: i
    } = e;
    if (n === "auto")
      return i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !t) ? "point" : i === "category" ? "band" : "linear";
    if (typeof n == "string") {
      var a = "scale".concat(qn(n));
      return RE(a) ? a : "point";
    }
  }
}, fr = S([de, Fg, Hc], Jg);
function hs(e, t, r, n) {
  if (!(r == null || n == null))
    return typeof e.scale == "function" ? lh(e.scale, r, n) : lh(t, r, n);
}
var ps = (e, t, r) => {
  var n = us(t);
  if (!(r !== "auto" && r !== "linear")) {
    if (t != null && t.tickCount && Array.isArray(n) && (n[0] === "auto" || n[1] === "auto") && Kt(e))
      return Q_(e, t.tickCount, t.allowDecimals);
    if (t != null && t.tickCount && t.type === "number" && Kt(e))
      return J_(e, t.tickCount, t.allowDecimals);
  }
}, ms = S([vs, un, fr], ps), ys = (e, t, r, n) => {
  if (
    /*
     * Angle axis for some reason uses nice ticks when rendering axis tick labels,
     * but doesn't use nice ticks for extending domain like all the other axes do.
     * Not really sure why? Is there a good reason,
     * or is it just because someone added support for nice ticks to the other axes and forgot this one?
     */
    n !== "angleAxis" && e?.type === "number" && Kt(t) && Array.isArray(r) && r.length > 0
  ) {
    var i, a, o = t[0], u = (i = r[0]) !== null && i !== void 0 ? i : 0, l = t[1], c = (a = r[r.length - 1]) !== null && a !== void 0 ? a : 0;
    return [Math.min(o, u), Math.max(l, c)];
  }
  return t;
}, LE = S([de, vs, ms, le], ys), zE = S(co, de, (e, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(Ut(e.map((f) => f.value))).sort((f, d) => f - d), i = n[0], a = n[n.length - 1];
    if (i == null || a == null)
      return 1 / 0;
    var o = a - i;
    if (o === 0)
      return 1 / 0;
    for (var u = 0; u < n.length - 1; u++) {
      var l = n[u], c = n[u + 1];
      if (!(l == null || c == null)) {
        var s = c - l;
        r = Math.min(r, s);
      }
    }
    return r / o;
  }
}), e0 = S(zE, G, Ig, ye, (e, t, r, n, i) => i, (e, t, r, n, i) => {
  if (!q(e))
    return 0;
  var a = t === "vertical" ? n.height : n.width;
  if (i === "gap")
    return e * a / 2;
  if (i === "no-gap") {
    var o = Ne(r, e * a), u = e * a / 2;
    return u - o - (u - o) / a * o;
  }
  return 0;
}), BE = (e, t, r) => {
  var n = Zt(e, t);
  return n == null || typeof n.padding != "string" ? 0 : e0(e, "xAxis", t, r, n.padding);
}, FE = (e, t, r) => {
  var n = Qt(e, t);
  return n == null || typeof n.padding != "string" ? 0 : e0(e, "yAxis", t, r, n.padding);
}, qE = S(Zt, BE, (e, t) => {
  var r, n;
  if (e == null)
    return {
      left: 0,
      right: 0
    };
  var {
    padding: i
  } = e;
  return typeof i == "string" ? {
    left: t,
    right: t
  } : {
    left: ((r = i.left) !== null && r !== void 0 ? r : 0) + t,
    right: ((n = i.right) !== null && n !== void 0 ? n : 0) + t
  };
}), WE = S(Qt, FE, (e, t) => {
  var r, n;
  if (e == null)
    return {
      top: 0,
      bottom: 0
    };
  var {
    padding: i
  } = e;
  return typeof i == "string" ? {
    top: t,
    bottom: t
  } : {
    top: ((r = i.top) !== null && r !== void 0 ? r : 0) + t,
    bottom: ((n = i.bottom) !== null && n !== void 0 ? n : 0) + t
  };
}), KE = S([ye, qE, qa, Fa, (e, t, r) => r], (e, t, r, n, i) => {
  var {
    padding: a
  } = n;
  return i ? [a.left, r.width - a.right] : [e.left + t.left, e.left + e.width - t.right];
}), UE = S([ye, G, WE, qa, Fa, (e, t, r) => r], (e, t, r, n, i, a) => {
  var {
    padding: o
  } = i;
  return a ? [n.height - o.bottom, o.top] : t === "horizontal" ? [e.top + e.height - r.bottom, e.top + r.top] : [e.top + r.top, e.top + e.height - r.bottom];
}), ri = (e, t, r, n) => {
  var i;
  switch (t) {
    case "xAxis":
      return KE(e, r, n);
    case "yAxis":
      return UE(e, r, n);
    case "zAxis":
      return (i = Jc(e, r)) === null || i === void 0 ? void 0 : i.range;
    case "angleAxis":
      return Dg(e);
    case "radiusAxis":
      return Ng(e, r);
    default:
      return;
  }
}, t0 = S([de, ri], no), HE = S([fr, LE], Lg), fo = S([de, fr, HE, t0], hs);
S([ei, so, le], PE);
function r0(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var vo = (e, t) => t, ho = (e, t, r) => r, YE = S(za, vo, ho, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(r0)), GE = S(Ba, vo, ho, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(r0)), n0 = (e, t) => ({
  width: e.width,
  height: t.height
}), VE = (e, t) => {
  var r = typeof t.width == "number" ? t.width : Un;
  return {
    width: r,
    height: e.height
  };
}, i0 = S(ye, Zt, n0), XE = (e, t, r) => {
  switch (t) {
    case "top":
      return e.top;
    case "bottom":
      return r - e.bottom;
    default:
      return 0;
  }
}, ZE = (e, t, r) => {
  switch (t) {
    case "left":
      return e.left;
    case "right":
      return r - e.right;
    default:
      return 0;
  }
}, QE = S(Gt, ye, YE, vo, ho, (e, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((u) => {
    var l = n0(t, u);
    o == null && (o = XE(t, n, e));
    var c = n === "top" && !i || n === "bottom" && i;
    a[u.id] = o - Number(c) * l.height, o += (c ? -1 : 1) * l.height;
  }), a;
}), JE = S(Yt, ye, GE, vo, ho, (e, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((u) => {
    var l = VE(t, u);
    o == null && (o = ZE(t, n, e));
    var c = n === "left" && !i || n === "right" && i;
    a[u.id] = o - Number(c) * l.width, o += (c ? -1 : 1) * l.width;
  }), a;
}), ej = (e, t) => {
  var r = Zt(e, t);
  if (r != null)
    return QE(e, r.orientation, r.mirror);
}, tj = S([ye, Zt, ej, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var i = r?.[n];
    return i == null ? {
      x: e.left,
      y: 0
    } : {
      x: e.left,
      y: i
    };
  }
}), rj = (e, t) => {
  var r = Qt(e, t);
  if (r != null)
    return JE(e, r.orientation, r.mirror);
}, nj = S([ye, Qt, rj, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var i = r?.[n];
    return i == null ? {
      x: 0,
      y: e.top
    } : {
      x: i,
      y: e.top
    };
  }
}), a0 = S(ye, Qt, (e, t) => {
  var r = typeof t.width == "number" ? t.width : Un;
  return {
    width: r,
    height: e.height
  };
}), fh = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return i0(e, r).width;
    case "yAxis":
      return a0(e, r).height;
    default:
      return;
  }
}, o0 = (e, t, r, n) => {
  if (r != null) {
    var {
      allowDuplicatedCategory: i,
      type: a,
      dataKey: o
    } = r, u = lr(e, n), l = t.map((c) => c.value);
    if (o && u && a === "category" && i && fm(l))
      return l;
  }
}, gs = S([G, co, de, le], o0), u0 = (e, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var {
      type: i,
      scale: a
    } = r, o = lr(e, n);
    if (o && (i === "number" || a !== "auto"))
      return t.map((u) => u.value);
  }
}, bs = S([G, co, un, le], u0), dh = S([G, hE, fr, fo, gs, bs, ri, ms, le], (e, t, r, n, i, a, o, u, l) => {
  if (t != null) {
    var c = lr(e, l);
    return {
      angle: t.angle,
      interval: t.interval,
      minTickGap: t.minTickGap,
      orientation: t.orientation,
      tick: t.tick,
      tickCount: t.tickCount,
      tickFormatter: t.tickFormatter,
      ticks: t.ticks,
      type: t.type,
      unit: t.unit,
      axisType: l,
      categoricalDomain: a,
      duplicateDomain: i,
      isCategorical: c,
      niceTicks: u,
      range: o,
      realScaleType: r,
      scale: n
    };
  }
}), ij = (e, t, r, n, i, a, o, u, l) => {
  if (!(t == null || n == null)) {
    var c = lr(e, l), {
      type: s,
      ticks: f,
      tickCount: d
    } = t, v = (
      // @ts-expect-error This is testing for `scaleBand` but for band axis the type is reported as `band` so this looks like a dead code with a workaround elsewhere?
      r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2
    ), p = s === "category" && n.bandwidth ? n.bandwidth() / v : 0;
    p = l === "angleAxis" && a != null && a.length >= 2 ? Ae(a[0] - a[1]) * 2 * p : p;
    var h = f || i;
    return h ? h.map((m, y) => {
      var b = o ? o.indexOf(m) : m, w = n.map(b);
      return q(w) ? {
        index: y,
        coordinate: w + p,
        value: m,
        offset: p
      } : null;
    }).filter(Ye) : c && u ? u.map((m, y) => {
      var b = n.map(m);
      return q(b) ? {
        coordinate: b + p,
        value: m,
        index: y,
        offset: p
      } : null;
    }).filter(Ye) : n.ticks ? n.ticks(d).map((m, y) => {
      var b = n.map(m);
      return q(b) ? {
        coordinate: b + p,
        value: m,
        index: y,
        offset: p
      } : null;
    }).filter(Ye) : n.domain().map((m, y) => {
      var b = n.map(m);
      return q(b) ? {
        coordinate: b + p,
        // @ts-expect-error can't use Date as index
        value: o ? o[m] : m,
        index: y,
        offset: p
      } : null;
    }).filter(Ye);
  }
}, l0 = S([G, un, fr, fo, ms, ri, gs, bs, le], ij), aj = (e, t, r, n, i, a, o) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var u = lr(e, o), {
      tickCount: l
    } = t, c = 0;
    return c = o === "angleAxis" && n?.length >= 2 ? Ae(n[0] - n[1]) * 2 * c : c, u && a ? a.map((s, f) => {
      var d = r.map(s);
      return q(d) ? {
        coordinate: d + c,
        value: s,
        index: f,
        offset: c
      } : null;
    }).filter(Ye) : r.ticks ? r.ticks(l).map((s, f) => {
      var d = r.map(s);
      return q(d) ? {
        coordinate: d + c,
        value: s,
        index: f,
        offset: c
      } : null;
    }).filter(Ye) : r.domain().map((s, f) => {
      var d = r.map(s);
      return q(d) ? {
        coordinate: d + c,
        // @ts-expect-error can't use unknown as index
        value: i ? i[s] : s,
        index: f,
        offset: c
      } : null;
    }).filter(Ye);
  }
}, Qr = S([G, un, fo, ri, gs, bs, le], aj), Jr = S(de, fo, (e, t) => {
  if (!(e == null || t == null))
    return da(da({}, e), {}, {
      scale: t
    });
}), oj = S([de, fr, vs, t0], hs);
S((e, t, r) => Jc(e, r), oj, (e, t) => {
  if (!(e == null || t == null))
    return da(da({}, e), {}, {
      scale: t
    });
});
var uj = S([G, za, Ba], (e, t, r) => {
  switch (e) {
    case "horizontal":
      return t.some((n) => n.reversed) ? "right-to-left" : "left-to-right";
    case "vertical":
      return r.some((n) => n.reversed) ? "bottom-to-top" : "top-to-bottom";
    // TODO: make this better. For now, right arrow triggers "forward", left arrow "back"
    // however, the tooltip moves an unintuitive direction because of how the indices are rendered
    case "centric":
    case "radial":
      return "left-to-right";
    default:
      return;
  }
}), c0 = (e) => e.options.defaultTooltipEventType, s0 = (e) => e.options.validateTooltipEventTypes;
function f0(e, t, r) {
  if (e == null)
    return t;
  var n = e ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function ws(e, t) {
  var r = c0(e), n = s0(e);
  return f0(t, r, n);
}
function lj(e) {
  return N((t) => ws(t, e));
}
var d0 = (e, t) => {
  var r, n = Number(t);
  if (!(Ct(n) || t == null))
    return n >= 0 ? e == null || (r = e[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, cj = (e) => e.tooltip.settings, rr = {
  active: !1,
  index: null,
  dataKey: void 0,
  graphicalItemId: void 0,
  coordinate: void 0
}, sj = {
  itemInteraction: {
    click: rr,
    hover: rr
  },
  axisInteraction: {
    click: rr,
    hover: rr
  },
  keyboardInteraction: rr,
  syncInteraction: {
    active: !1,
    index: null,
    dataKey: void 0,
    label: void 0,
    coordinate: void 0,
    sourceViewBox: void 0,
    graphicalItemId: void 0
  },
  tooltipItemPayloads: [],
  settings: {
    shared: void 0,
    trigger: "hover",
    axisId: 0,
    active: !1,
    defaultIndex: void 0
  }
}, v0 = Xe({
  name: "tooltip",
  initialState: sj,
  reducers: {
    addTooltipEntrySettings: {
      reducer(e, t) {
        e.tooltipItemPayloads.push(t.payload);
      },
      prepare: ae()
    },
    replaceTooltipEntrySettings: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = yt(e).tooltipItemPayloads.indexOf(r);
        i > -1 && (e.tooltipItemPayloads[i] = n);
      },
      prepare: ae()
    },
    removeTooltipEntrySettings: {
      reducer(e, t) {
        var r = yt(e).tooltipItemPayloads.indexOf(t.payload);
        r > -1 && e.tooltipItemPayloads.splice(r, 1);
      },
      prepare: ae()
    },
    setTooltipSettingsState(e, t) {
      e.settings = t.payload;
    },
    setActiveMouseOverItemIndex(e, t) {
      e.syncInteraction.active = !1, e.keyboardInteraction.active = !1, e.itemInteraction.hover.active = !0, e.itemInteraction.hover.index = t.payload.activeIndex, e.itemInteraction.hover.dataKey = t.payload.activeDataKey, e.itemInteraction.hover.graphicalItemId = t.payload.activeGraphicalItemId, e.itemInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    mouseLeaveChart(e) {
      e.itemInteraction.hover.active = !1, e.axisInteraction.hover.active = !1;
    },
    mouseLeaveItem(e) {
      e.itemInteraction.hover.active = !1;
    },
    setActiveClickItemIndex(e, t) {
      e.syncInteraction.active = !1, e.itemInteraction.click.active = !0, e.keyboardInteraction.active = !1, e.itemInteraction.click.index = t.payload.activeIndex, e.itemInteraction.click.dataKey = t.payload.activeDataKey, e.itemInteraction.click.graphicalItemId = t.payload.activeGraphicalItemId, e.itemInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setMouseOverAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.axisInteraction.hover.active = !0, e.keyboardInteraction.active = !1, e.axisInteraction.hover.index = t.payload.activeIndex, e.axisInteraction.hover.dataKey = t.payload.activeDataKey, e.axisInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    setMouseClickAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.keyboardInteraction.active = !1, e.axisInteraction.click.active = !0, e.axisInteraction.click.index = t.payload.activeIndex, e.axisInteraction.click.dataKey = t.payload.activeDataKey, e.axisInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setSyncInteraction(e, t) {
      e.syncInteraction = t.payload;
    },
    setKeyboardInteraction(e, t) {
      e.keyboardInteraction.active = t.payload.active, e.keyboardInteraction.index = t.payload.activeIndex, e.keyboardInteraction.coordinate = t.payload.activeCoordinate;
    }
  }
}), {
  addTooltipEntrySettings: fj,
  replaceTooltipEntrySettings: dj,
  removeTooltipEntrySettings: vj,
  setTooltipSettingsState: hj,
  setActiveMouseOverItemIndex: h0,
  mouseLeaveItem: pj,
  mouseLeaveChart: p0,
  setActiveClickItemIndex: mj,
  setMouseOverAxisIndex: m0,
  setMouseClickAxisIndex: yj,
  setSyncInteraction: Ll,
  setKeyboardInteraction: zl
} = v0.actions, gj = v0.reducer;
function vh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vh(Object(r), !0).forEach(function(n) {
      bj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bj(e, t, r) {
  return (t = wj(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wj(e) {
  var t = xj(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xj(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pj(e, t, r) {
  return t === "axis" ? r === "click" ? e.axisInteraction.click : e.axisInteraction.hover : r === "click" ? e.itemInteraction.click : e.itemInteraction.hover;
}
function Oj(e) {
  return e.index != null;
}
var y0 = (e, t, r, n) => {
  if (t == null)
    return rr;
  var i = Pj(e, t, r);
  if (i == null)
    return rr;
  if (i.active)
    return i;
  if (e.keyboardInteraction.active)
    return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null)
    return e.syncInteraction;
  var a = e.settings.active === !0;
  if (Oj(i)) {
    if (a)
      return bi(bi({}, i), {}, {
        active: !0
      });
  } else if (n != null)
    return {
      active: !0,
      coordinate: void 0,
      dataKey: void 0,
      index: n,
      graphicalItemId: void 0
    };
  return bi(bi({}, rr), {}, {
    coordinate: i.coordinate
  });
};
function Aj(e) {
  if (typeof e == "number")
    return Number.isFinite(e) ? e : void 0;
  if (e instanceof Date) {
    var t = e.valueOf();
    return Number.isFinite(t) ? t : void 0;
  }
  var r = Number(e);
  return Number.isFinite(r) ? r : void 0;
}
function Sj(e, t) {
  var r = Aj(e), n = t[0], i = t[1];
  if (r === void 0)
    return !1;
  var a = Math.min(n, i), o = Math.max(n, i);
  return r >= a && r <= o;
}
function _j(e, t, r) {
  if (r == null || t == null)
    return !0;
  var n = ie(e, t);
  return n == null || !Kt(r) ? !0 : Sj(n, r);
}
var xs = (e, t, r, n) => {
  var i = e?.index;
  if (i == null)
    return null;
  var a = Number(i);
  if (!q(a))
    return i;
  var o = 0, u = 1 / 0;
  t.length > 0 && (u = t.length - 1);
  var l = Math.max(o, Math.min(a, u)), c = t[l];
  return c == null || _j(c, r, n) ? String(l) : null;
}, g0 = (e, t, r, n, i, a, o) => {
  if (a != null) {
    var u = o[0], l = u?.getPosition(a);
    if (l != null)
      return l;
    var c = i?.[Number(a)];
    if (c)
      return r === "horizontal" ? {
        x: c.coordinate,
        y: (n.top + t) / 2
      } : {
        x: (n.left + e) / 2,
        y: c.coordinate
      };
  }
}, b0 = (e, t, r, n) => {
  if (t === "axis")
    return e.tooltipItemPayloads;
  if (e.tooltipItemPayloads.length === 0)
    return [];
  var i;
  if (r === "hover" ? i = e.itemInteraction.hover.graphicalItemId : i = e.itemInteraction.click.graphicalItemId, i == null && n != null) {
    var a = e.tooltipItemPayloads[0];
    return a != null ? [a] : [];
  }
  return e.tooltipItemPayloads.filter((o) => {
    var u;
    return ((u = o.settings) === null || u === void 0 ? void 0 : u.graphicalItemId) === i;
  });
}, w0 = (e) => e.options.tooltipPayloadSearcher, cn = (e) => e.tooltip;
function hh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ph(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hh(Object(r), !0).forEach(function(n) {
      Ej(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ej(e, t, r) {
  return (t = jj(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jj(e) {
  var t = Ij(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ij(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Cj(e, t) {
  return e ?? t;
}
var x0 = (e, t, r, n, i, a, o) => {
  if (!(t == null || a == null)) {
    var {
      chartData: u,
      computedData: l,
      dataStartIndex: c,
      dataEndIndex: s
    } = r, f = [];
    return e.reduce((d, v) => {
      var p, {
        dataDefinedOnItem: h,
        settings: m
      } = v, y = Cj(h, u), b = Array.isArray(y) ? ry(y, c, s) : y, w = (p = m?.dataKey) !== null && p !== void 0 ? p : n, x = m?.nameKey, O;
      if (n && Array.isArray(b) && /*
       * findEntryInArray won't work for Scatter because Scatter provides an array of arrays
       * as tooltip payloads and findEntryInArray is not prepared to handle that.
       * Sad but also ScatterChart only allows 'item' tooltipEventType
       * and also this is only a problem if there are multiple Scatters and each has its own data array
       * so let's fix that some other time.
       */
      !Array.isArray(b[0]) && /*
       * If the tooltipEventType is 'axis', we should search for the dataKey in the sliced data
       * because thanks to allowDuplicatedCategory=false, the order of elements in the array
       * no longer matches the order of elements in the original data
       * and so we need to search by the active dataKey + label rather than by index.
       *
       * The same happens if multiple graphical items are present in the chart
       * and each of them has its own data array. Those arrays get concatenated
       * and again the tooltip index no longer matches the original data.
       *
       * On the other hand the tooltipEventType 'item' should always search by index
       * because we get the index from interacting over the individual elements
       * which is always accurate, irrespective of the allowDuplicatedCategory setting.
       */
      o === "axis" ? O = Dw(b, n, i) : O = a(b, t, l, x), Array.isArray(O))
        O.forEach((A) => {
          var _ = ph(ph({}, m), {}, {
            // @ts-expect-error we're assuming that item has name and unit properties
            name: A.name,
            // @ts-expect-error we're assuming that item has name and unit properties
            unit: A.unit,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            color: void 0,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            fill: void 0
          });
          d.push(pd({
            tooltipEntrySettings: _,
            // @ts-expect-error we're assuming that item has name and unit properties
            dataKey: A.dataKey,
            // @ts-expect-error we're assuming that item has name and unit properties
            payload: A.payload,
            // @ts-expect-error getValueByDataKey does not validate the output type
            value: ie(A.payload, A.dataKey),
            // @ts-expect-error we're assuming that item has name and unit properties
            name: A.name
          }));
        });
      else {
        var P;
        d.push(pd({
          tooltipEntrySettings: m,
          dataKey: w,
          payload: O,
          // @ts-expect-error getValueByDataKey does not validate the output type
          value: ie(O, w),
          // @ts-expect-error getValueByDataKey does not validate the output type
          name: (P = ie(O, x)) !== null && P !== void 0 ? P : m?.name
        }));
      }
      return d;
    }, f);
  }
}, Ps = S([be, Fg, Hc], Jg), kj = S([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [...e, ...t]), Tj = S([je, on], es), sn = S([kj, be, Tj], rs, {
  memoizeOptions: {
    resultEqualityCheck: lo
  }
}), Mj = S([sn], (e) => e.filter(oo)), Dj = S([sn], ns, {
  memoizeOptions: {
    resultEqualityCheck: lo
  }
}), fn = S([Dj, Xt], is), Nj = S([Mj, Xt, be], Rg), Os = S([fn, be, sn], os), P0 = S([be], us), $j = S([be], (e) => e.allowDataOverflow), O0 = S([P0, $j], yg), Rj = S([sn], (e) => e.filter(oo)), Lj = S([Nj, Rj, Qn, Cg], Ug), zj = S([Lj, Xt, je, O0], Hg), Bj = S([sn], Wg), Fj = S([fn, be, Bj, so, je], ss, {
  memoizeOptions: {
    resultEqualityCheck: uo
  }
}), qj = S([Yg, je, on], ln), Wj = S([qj, je], Xg), Kj = S([Gg, je, on], ln), Uj = S([Kj, je], Zg), Hj = S([Vg, je, on], ln), Yj = S([Hj, je], Qg), Gj = S([Wj, Yj, Uj], va), Vj = S([be, P0, O0, zj, Fj, Gj, G, je], fs), ni = S([be, G, fn, Os, Qn, je, Vj], ds), Xj = S([ni, be, Ps], ps), Zj = S([be, ni, Xj, je], ys), A0 = (e) => {
  var t = je(e), r = on(e), n = !1;
  return ri(e, t, r, n);
}, S0 = S([be, A0], no), _0 = S([be, Ps, Zj, S0], hs), Qj = S([G, Os, be, je], o0), Jj = S([G, Os, be, je], u0), eI = (e, t, r, n, i, a, o, u) => {
  if (t) {
    var {
      type: l
    } = t, c = lr(e, u);
    if (n) {
      var s = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, f = l === "category" && n.bandwidth ? n.bandwidth() / s : 0;
      return f = u === "angleAxis" && i != null && i?.length >= 2 ? Ae(i[0] - i[1]) * 2 * f : f, c && o ? o.map((d, v) => {
        var p = n.map(d);
        return q(p) ? {
          coordinate: p + f,
          value: d,
          index: v,
          offset: f
        } : null;
      }).filter(Ye) : n.domain().map((d, v) => {
        var p = n.map(d);
        return q(p) ? {
          coordinate: p + f,
          // @ts-expect-error can't use Date as an index
          value: a ? a[d] : d,
          index: v,
          offset: f
        } : null;
      }).filter(Ye);
    }
  }
}, Jt = S([G, be, Ps, _0, A0, Qj, Jj, je], eI), As = S([c0, s0, cj], (e, t, r) => f0(r.shared, e, t)), E0 = (e) => e.tooltip.settings.trigger, Ss = (e) => e.tooltip.settings.defaultIndex, ii = S([cn, As, E0, Ss], y0), Tr = S([ii, fn, ti, ni], xs), j0 = S([Jt, Tr], d0), _s = S([ii], (e) => {
  if (e)
    return e.dataKey;
}), tI = S([ii], (e) => {
  if (e)
    return e.graphicalItemId;
}), I0 = S([cn, As, E0, Ss], b0), rI = S([Yt, Gt, G, ye, Jt, Ss, I0], g0), nI = S([ii, rI], (e, t) => e != null && e.coordinate ? e.coordinate : t), iI = S([ii], (e) => {
  var t;
  return (t = e?.active) !== null && t !== void 0 ? t : !1;
}), aI = S([I0, Tr, Xt, ti, j0, w0, As], x0);
S([aI], (e) => {
  if (e != null) {
    var t = e.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
function mh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mh(Object(r), !0).forEach(function(n) {
      oI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oI(e, t, r) {
  return (t = uI(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uI(e) {
  var t = lI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function lI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var cI = () => N(be), sI = () => {
  var e = cI(), t = N(Jt), r = N(_0);
  return Ki(!e || !r ? void 0 : yh(yh({}, e), {}, {
    scale: r
  }), t);
};
function gh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gh(Object(r), !0).forEach(function(n) {
      fI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fI(e, t, r) {
  return (t = dI(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dI(e) {
  var t = vI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function vI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var hI = (e, t, r, n) => {
  var i = t.find((a) => a && a.index === r);
  if (i) {
    if (e === "horizontal")
      return {
        x: i.coordinate,
        y: n.chartY
      };
    if (e === "vertical")
      return {
        x: n.chartX,
        y: i.coordinate
      };
  }
  return {
    x: 0,
    y: 0
  };
}, pI = (e, t, r, n) => {
  var i = t.find((c) => c && c.index === r);
  if (i) {
    if (e === "centric") {
      var a = i.coordinate, {
        radius: o
      } = n;
      return Br(Br(Br({}, n), ve(n.cx, n.cy, o, a)), {}, {
        angle: a,
        radius: o
      });
    }
    var u = i.coordinate, {
      angle: l
    } = n;
    return Br(Br(Br({}, n), ve(n.cx, n.cy, u, l)), {}, {
      angle: l,
      radius: u
    });
  }
  return {
    angle: 0,
    clockWise: !1,
    cx: 0,
    cy: 0,
    endAngle: 0,
    innerRadius: 0,
    outerRadius: 0,
    radius: 0,
    startAngle: 0,
    x: 0,
    y: 0
  };
};
function mI(e, t) {
  var {
    chartX: r,
    chartY: n
  } = e;
  return r >= t.left && r <= t.left + t.width && n >= t.top && n <= t.top + t.height;
}
var C0 = (e, t, r, n, i) => {
  var a, o = (a = t?.length) !== null && a !== void 0 ? a : 0;
  if (o <= 1 || e == null)
    return 0;
  if (n === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6)
    for (var u = 0; u < o; u++) {
      var l, c, s, f, d, v = u > 0 ? (l = r[u - 1]) === null || l === void 0 ? void 0 : l.coordinate : (c = r[o - 1]) === null || c === void 0 ? void 0 : c.coordinate, p = (s = r[u]) === null || s === void 0 ? void 0 : s.coordinate, h = u >= o - 1 ? (f = r[0]) === null || f === void 0 ? void 0 : f.coordinate : (d = r[u + 1]) === null || d === void 0 ? void 0 : d.coordinate, m = void 0;
      if (!(v == null || p == null || h == null))
        if (Ae(p - v) !== Ae(h - p)) {
          var y = [];
          if (Ae(h - p) === Ae(i[1] - i[0])) {
            m = h;
            var b = p + i[1] - i[0];
            y[0] = Math.min(b, (b + v) / 2), y[1] = Math.max(b, (b + v) / 2);
          } else {
            m = v;
            var w = h + i[1] - i[0];
            y[0] = Math.min(p, (w + p) / 2), y[1] = Math.max(p, (w + p) / 2);
          }
          var x = [Math.min(p, (m + p) / 2), Math.max(p, (m + p) / 2)];
          if (e > x[0] && e <= x[1] || e >= y[0] && e <= y[1]) {
            var O;
            return (O = r[u]) === null || O === void 0 ? void 0 : O.index;
          }
        } else {
          var P = Math.min(v, h), A = Math.max(v, h);
          if (e > (P + p) / 2 && e <= (A + p) / 2) {
            var _;
            return (_ = r[u]) === null || _ === void 0 ? void 0 : _.index;
          }
        }
    }
  else if (t)
    for (var C = 0; C < o; C++) {
      var T = t[C];
      if (T != null) {
        var k = t[C + 1], E = t[C - 1];
        if (C === 0 && k != null && e <= (T.coordinate + k.coordinate) / 2 || C === o - 1 && E != null && e > (T.coordinate + E.coordinate) / 2 || C > 0 && C < o - 1 && E != null && k != null && e > (T.coordinate + E.coordinate) / 2 && e <= (T.coordinate + k.coordinate) / 2)
          return T.index;
      }
    }
  return -1;
}, yI = () => N(Hc), Es = (e, t) => t, k0 = (e, t, r) => r, js = (e, t, r, n) => n, gI = S(Jt, (e) => ja(e, (t) => t.coordinate)), Is = S([cn, Es, k0, js], y0), Cs = S([Is, fn, ti, ni], xs), bI = (e, t, r) => {
  if (t != null) {
    var n = cn(e);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, T0 = S([cn, Es, k0, js], b0), ha = S([Yt, Gt, G, ye, Jt, js, T0], g0), wI = S([Is, ha], (e, t) => {
  var r;
  return (r = e.coordinate) !== null && r !== void 0 ? r : t;
}), M0 = S([Jt, Cs], d0), xI = S([T0, Cs, Xt, ti, M0, w0, Es], x0), PI = S([Is, Cs], (e, t) => ({
  isActive: e.active && t != null,
  activeIndex: t
})), OI = (e, t, r, n, i, a, o) => {
  if (!(!e || !r || !n || !i) && mI(e, o)) {
    var u = oO(e, t), l = C0(u, a, i, r, n), c = hI(t, i, l, e);
    return {
      activeIndex: String(l),
      activeCoordinate: c
    };
  }
}, AI = (e, t, r, n, i, a, o) => {
  if (!(!e || !n || !i || !a || !r)) {
    var u = lA(e, r);
    if (u) {
      var l = uO(u, t), c = C0(l, o, a, n, i), s = pI(t, a, c, u);
      return {
        activeIndex: String(c),
        activeCoordinate: s
      };
    }
  }
}, SI = (e, t, r, n, i, a, o, u) => {
  if (!(!e || !t || !n || !i || !a))
    return t === "horizontal" || t === "vertical" ? OI(e, t, n, i, a, o, u) : AI(e, t, r, n, i, a, o);
}, _I = S((e) => e.zIndex.zIndexMap, (e, t) => t, (e, t, r) => r, (e, t, r) => {
  if (t != null) {
    var n = e[t];
    if (n != null)
      return r ? n.panoramaElement : n.element;
  }
}), EI = S((e) => e.zIndex.zIndexMap, (e) => {
  var t = Object.keys(e).map((n) => parseInt(n, 10)).concat(Object.values(ke)), r = Array.from(new Set(t));
  return r.sort((n, i) => n - i);
}, {
  memoizeOptions: {
    resultEqualityCheck: lE
  }
});
function bh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bh(Object(r), !0).forEach(function(n) {
      jI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jI(e, t, r) {
  return (t = II(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function II(e) {
  var t = CI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function CI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var kI = {}, TI = {
  zIndexMap: Object.values(ke).reduce((e, t) => wh(wh({}, e), {}, {
    [t]: {
      element: void 0,
      panoramaElement: void 0,
      consumers: 0
    }
  }), kI)
}, MI = new Set(Object.values(ke));
function DI(e) {
  return MI.has(e);
}
var D0 = Xe({
  name: "zIndex",
  initialState: TI,
  reducers: {
    registerZIndexPortal: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] ? e.zIndexMap[r].consumers += 1 : e.zIndexMap[r] = {
          consumers: 1,
          element: void 0,
          panoramaElement: void 0
        };
      },
      prepare: ae()
    },
    unregisterZIndexPortal: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] && (e.zIndexMap[r].consumers -= 1, e.zIndexMap[r].consumers <= 0 && !DI(r) && delete e.zIndexMap[r]);
      },
      prepare: ae()
    },
    registerZIndexPortalElement: {
      reducer: (e, t) => {
        var {
          zIndex: r,
          element: n,
          isPanorama: i
        } = t.payload;
        e.zIndexMap[r] ? i ? e.zIndexMap[r].panoramaElement = n : e.zIndexMap[r].element = n : e.zIndexMap[r] = {
          consumers: 0,
          element: i ? void 0 : n,
          panoramaElement: i ? n : void 0
        };
      },
      prepare: ae()
    },
    unregisterZIndexPortalElement: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] && (t.payload.isPanorama ? e.zIndexMap[r].panoramaElement = void 0 : e.zIndexMap[r].element = void 0);
      },
      prepare: ae()
    }
  }
}), {
  registerZIndexPortal: NI,
  unregisterZIndexPortal: $I,
  registerZIndexPortalElement: RI,
  unregisterZIndexPortalElement: LI
} = D0.actions, zI = D0.reducer;
function Pt(e) {
  var {
    zIndex: t,
    children: r
  } = e, n = RO(), i = n && t !== void 0 && t !== 0, a = Ze(), o = ue();
  $e(() => i ? (o(NI({
    zIndex: t
  })), () => {
    o($I({
      zIndex: t
    }));
  }) : en, [o, t, i]);
  var u = N((l) => _I(l, t, a));
  return i ? u ? /* @__PURE__ */ Wp(r, u) : null : r;
}
function Bl() {
  return Bl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bl.apply(null, arguments);
}
function xh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xh(Object(r), !0).forEach(function(n) {
      BI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BI(e, t, r) {
  return (t = FI(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FI(e) {
  var t = qI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function WI(e) {
  var {
    cursor: t,
    cursorComp: r,
    cursorProps: n
  } = e;
  return /* @__PURE__ */ jt(t) ? /* @__PURE__ */ Oa(t, n) : /* @__PURE__ */ Fp(r, n);
}
function KI(e) {
  var t, {
    coordinate: r,
    payload: n,
    index: i,
    offset: a,
    tooltipAxisBandSize: o,
    layout: u,
    cursor: l,
    tooltipEventType: c,
    chartName: s
  } = e, f = r, d = n, v = i;
  if (!l || !f || s !== "ScatterChart" && c !== "axis")
    return null;
  var p, h, m;
  if (s === "ScatterChart")
    p = f, h = P1, m = ke.cursorLine;
  else if (s === "BarChart")
    p = O1(u, f, a, o), h = ky, m = ke.cursorRectangle;
  else if (u === "radial" && hm(f)) {
    var {
      cx: y,
      cy: b,
      radius: w,
      startAngle: x,
      endAngle: O
    } = My(f);
    p = {
      cx: y,
      cy: b,
      startAngle: x,
      endAngle: O,
      innerRadius: w,
      outerRadius: w
    }, h = Ny, m = ke.cursorLine;
  } else
    p = {
      points: dA(u, f, a)
    }, h = wc, m = ke.cursorLine;
  var P = typeof l == "object" && "className" in l ? l.className : void 0, A = wi(wi(wi(wi({
    stroke: "#ccc",
    pointerEvents: "none"
  }, a), p), _n(l)), {}, {
    payload: d,
    payloadIndex: v,
    className: Z("recharts-tooltip-cursor", P)
  });
  return /* @__PURE__ */ g.createElement(Pt, {
    zIndex: (t = e.zIndex) !== null && t !== void 0 ? t : m
  }, /* @__PURE__ */ g.createElement(WI, {
    cursor: l,
    cursorComp: h,
    cursorProps: A
  }));
}
function UI(e) {
  var t = sI(), r = fy(), n = tn(), i = yI();
  return t == null || r == null || n == null || i == null ? null : /* @__PURE__ */ g.createElement(KI, Bl({}, e, {
    offset: r,
    layout: n,
    tooltipAxisBandSize: t,
    chartName: i
  }));
}
var N0 = /* @__PURE__ */ Ve(null), HI = () => ft(N0), zu = { exports: {} }, Ph;
function YI() {
  return Ph || (Ph = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function i(l, c, s) {
      this.fn = l, this.context = c, this.once = s || !1;
    }
    function a(l, c, s, f, d) {
      if (typeof s != "function")
        throw new TypeError("The listener must be a function");
      var v = new i(s, f || l, d), p = r ? r + c : c;
      return l._events[p] ? l._events[p].fn ? l._events[p] = [l._events[p], v] : l._events[p].push(v) : (l._events[p] = v, l._eventsCount++), l;
    }
    function o(l, c) {
      --l._eventsCount === 0 ? l._events = new n() : delete l._events[c];
    }
    function u() {
      this._events = new n(), this._eventsCount = 0;
    }
    u.prototype.eventNames = function() {
      var c = [], s, f;
      if (this._eventsCount === 0) return c;
      for (f in s = this._events)
        t.call(s, f) && c.push(r ? f.slice(1) : f);
      return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(s)) : c;
    }, u.prototype.listeners = function(c) {
      var s = r ? r + c : c, f = this._events[s];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var d = 0, v = f.length, p = new Array(v); d < v; d++)
        p[d] = f[d].fn;
      return p;
    }, u.prototype.listenerCount = function(c) {
      var s = r ? r + c : c, f = this._events[s];
      return f ? f.fn ? 1 : f.length : 0;
    }, u.prototype.emit = function(c, s, f, d, v, p) {
      var h = r ? r + c : c;
      if (!this._events[h]) return !1;
      var m = this._events[h], y = arguments.length, b, w;
      if (m.fn) {
        switch (m.once && this.removeListener(c, m.fn, void 0, !0), y) {
          case 1:
            return m.fn.call(m.context), !0;
          case 2:
            return m.fn.call(m.context, s), !0;
          case 3:
            return m.fn.call(m.context, s, f), !0;
          case 4:
            return m.fn.call(m.context, s, f, d), !0;
          case 5:
            return m.fn.call(m.context, s, f, d, v), !0;
          case 6:
            return m.fn.call(m.context, s, f, d, v, p), !0;
        }
        for (w = 1, b = new Array(y - 1); w < y; w++)
          b[w - 1] = arguments[w];
        m.fn.apply(m.context, b);
      } else {
        var x = m.length, O;
        for (w = 0; w < x; w++)
          switch (m[w].once && this.removeListener(c, m[w].fn, void 0, !0), y) {
            case 1:
              m[w].fn.call(m[w].context);
              break;
            case 2:
              m[w].fn.call(m[w].context, s);
              break;
            case 3:
              m[w].fn.call(m[w].context, s, f);
              break;
            case 4:
              m[w].fn.call(m[w].context, s, f, d);
              break;
            default:
              if (!b) for (O = 1, b = new Array(y - 1); O < y; O++)
                b[O - 1] = arguments[O];
              m[w].fn.apply(m[w].context, b);
          }
      }
      return !0;
    }, u.prototype.on = function(c, s, f) {
      return a(this, c, s, f, !1);
    }, u.prototype.once = function(c, s, f) {
      return a(this, c, s, f, !0);
    }, u.prototype.removeListener = function(c, s, f, d) {
      var v = r ? r + c : c;
      if (!this._events[v]) return this;
      if (!s)
        return o(this, v), this;
      var p = this._events[v];
      if (p.fn)
        p.fn === s && (!d || p.once) && (!f || p.context === f) && o(this, v);
      else {
        for (var h = 0, m = [], y = p.length; h < y; h++)
          (p[h].fn !== s || d && !p[h].once || f && p[h].context !== f) && m.push(p[h]);
        m.length ? this._events[v] = m.length === 1 ? m[0] : m : o(this, v);
      }
      return this;
    }, u.prototype.removeAllListeners = function(c) {
      var s;
      return c ? (s = r ? r + c : c, this._events[s] && o(this, s)) : (this._events = new n(), this._eventsCount = 0), this;
    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u;
  })(zu)), zu.exports;
}
var GI = YI();
const VI = /* @__PURE__ */ ur(GI);
var Bn = new VI(), Fl = "recharts.syncEvent.tooltip", Oh = "recharts.syncEvent.brush", $0 = (e, t) => {
  if (t && Array.isArray(e)) {
    var r = Number.parseInt(t, 10);
    if (!Ct(r))
      return e[r];
  }
}, XI = {
  chartName: "",
  tooltipPayloadSearcher: () => {
  },
  eventEmitter: void 0,
  defaultTooltipEventType: "axis"
}, R0 = Xe({
  name: "options",
  initialState: XI,
  reducers: {
    createEventEmitter: (e) => {
      e.eventEmitter == null && (e.eventEmitter = /* @__PURE__ */ Symbol("rechartsEventEmitter"));
    }
  }
}), ZI = R0.reducer, {
  createEventEmitter: QI
} = R0.actions;
function JI(e) {
  return e.tooltip.syncInteraction;
}
var eC = {
  chartData: void 0,
  computedData: void 0,
  dataStartIndex: 0,
  dataEndIndex: 0
}, L0 = Xe({
  name: "chartData",
  initialState: eC,
  reducers: {
    setChartData(e, t) {
      if (e.chartData = t.payload, t.payload == null) {
        e.dataStartIndex = 0, e.dataEndIndex = 0;
        return;
      }
      t.payload.length > 0 && e.dataEndIndex !== t.payload.length - 1 && (e.dataEndIndex = t.payload.length - 1);
    },
    setComputedData(e, t) {
      e.computedData = t.payload;
    },
    setDataStartEndIndexes(e, t) {
      var {
        startIndex: r,
        endIndex: n
      } = t.payload;
      r != null && (e.dataStartIndex = r), n != null && (e.dataEndIndex = n);
    }
  }
}), {
  setChartData: Ah,
  setDataStartEndIndexes: tC,
  setComputedData: y$
} = L0.actions, rC = L0.reducer, nC = ["x", "y"];
function Sh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sh(Object(r), !0).forEach(function(n) {
      iC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iC(e, t, r) {
  return (t = aC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aC(e) {
  var t = oC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function oC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function uC(e, t) {
  if (e == null) return {};
  var r, n, i = lC(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function lC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function cC() {
  var e = N(Yc), t = N(Gc), r = ue(), n = N(kg), i = N(Jt), a = tn(), o = Wa(), u = N((l) => l.rootProps.className);
  Te(() => {
    if (e == null)
      return en;
    var l = (c, s, f) => {
      if (t !== f && e === c) {
        if (n === "index") {
          var d;
          if (o && s !== null && s !== void 0 && (d = s.payload) !== null && d !== void 0 && d.coordinate && s.payload.sourceViewBox) {
            var v = s.payload.coordinate, {
              x: p,
              y: h
            } = v, m = uC(v, nC), {
              x: y,
              y: b,
              width: w,
              height: x
            } = s.payload.sourceViewBox, O = Fr(Fr({}, m), {}, {
              x: o.x + (w ? (p - y) / w : 0) * o.width,
              y: o.y + (x ? (h - b) / x : 0) * o.height
            });
            r(Fr(Fr({}, s), {}, {
              payload: Fr(Fr({}, s.payload), {}, {
                coordinate: O
              })
            }));
          } else
            r(s);
          return;
        }
        if (i != null) {
          var P;
          if (typeof n == "function") {
            var A = {
              activeTooltipIndex: s.payload.index == null ? void 0 : Number(s.payload.index),
              isTooltipActive: s.payload.active,
              activeIndex: s.payload.index == null ? void 0 : Number(s.payload.index),
              activeLabel: s.payload.label,
              activeDataKey: s.payload.dataKey,
              activeCoordinate: s.payload.coordinate
            }, _ = n(i, A);
            P = i[_];
          } else n === "value" && (P = i.find((F) => String(F.value) === s.payload.label));
          var {
            coordinate: C
          } = s.payload;
          if (P == null || s.payload.active === !1 || C == null || o == null) {
            r(Ll({
              active: !1,
              coordinate: void 0,
              dataKey: void 0,
              index: null,
              label: void 0,
              sourceViewBox: void 0,
              graphicalItemId: void 0
            }));
            return;
          }
          var {
            x: T,
            y: k
          } = C, E = Math.min(T, o.x + o.width), R = Math.min(k, o.y + o.height), $ = {
            x: a === "horizontal" ? P.coordinate : E,
            y: a === "horizontal" ? R : P.coordinate
          }, z = Ll({
            active: s.payload.active,
            coordinate: $,
            dataKey: s.payload.dataKey,
            index: String(P.index),
            label: s.payload.label,
            sourceViewBox: s.payload.sourceViewBox,
            graphicalItemId: s.payload.graphicalItemId
          });
          r(z);
        }
      }
    };
    return Bn.on(Fl, l), () => {
      Bn.off(Fl, l);
    };
  }, [u, r, t, e, n, i, a, o]);
}
function sC() {
  var e = N(Yc), t = N(Gc), r = ue();
  Te(() => {
    if (e == null)
      return en;
    var n = (i, a, o) => {
      t !== o && e === i && r(tC(a));
    };
    return Bn.on(Oh, n), () => {
      Bn.off(Oh, n);
    };
  }, [r, t, e]);
}
function fC() {
  var e = ue();
  Te(() => {
    e(QI());
  }, [e]), cC(), sC();
}
function dC(e, t, r, n, i, a) {
  var o = N((v) => bI(v, e, t)), u = N(Gc), l = N(Yc), c = N(kg), s = N(JI), f = s?.active, d = Wa();
  Te(() => {
    if (!f && l != null && u != null) {
      var v = Ll({
        active: a,
        coordinate: r,
        dataKey: o,
        index: i,
        label: typeof n == "number" ? String(n) : n,
        sourceViewBox: d,
        graphicalItemId: void 0
      });
      Bn.emit(Fl, l, v, u);
    }
  }, [f, r, o, i, n, u, l, c, a, d]);
}
function _h(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Eh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _h(Object(r), !0).forEach(function(n) {
      vC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _h(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vC(e, t, r) {
  return (t = hC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hC(e) {
  var t = pC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function pC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mC(e) {
  return e.dataKey;
}
function yC(e, t) {
  return /* @__PURE__ */ g.isValidElement(e) ? /* @__PURE__ */ g.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ g.createElement(e, t) : /* @__PURE__ */ g.createElement(t1, t);
}
var jh = [], gC = {
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  axisId: 0,
  contentStyle: {},
  cursor: !0,
  filterNull: !0,
  includeHidden: !1,
  isAnimationActive: "auto",
  itemSorter: "name",
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  wrapperStyle: {}
};
function g$(e) {
  var t, r, n = Re(e, gC), {
    active: i,
    allowEscapeViewBox: a,
    animationDuration: o,
    animationEasing: u,
    content: l,
    filterNull: c,
    isAnimationActive: s,
    offset: f,
    payloadUniqBy: d,
    position: v,
    reverseDirection: p,
    useTranslate3d: h,
    wrapperStyle: m,
    cursor: y,
    shared: b,
    trigger: w,
    defaultIndex: x,
    portal: O,
    axisId: P
  } = n, A = ue(), _ = typeof x == "number" ? String(x) : x;
  Te(() => {
    A(hj({
      shared: b,
      trigger: w,
      axisId: P,
      active: i,
      defaultIndex: _
    }));
  }, [A, b, w, P, i, _]);
  var C = Wa(), T = _y(), k = lj(b), {
    activeIndex: E,
    isActive: R
  } = (t = N((Ue) => PI(Ue, k, w, _))) !== null && t !== void 0 ? t : {}, $ = N((Ue) => xI(Ue, k, w, _)), z = N((Ue) => M0(Ue, k, w, _)), F = N((Ue) => wI(Ue, k, w, _)), L = $, Y = HI(), U = (r = i ?? R) !== null && r !== void 0 ? r : !1, [Q, we] = Ux([L, U]), Le = k === "axis" ? z : void 0;
  dC(k, w, F, Le, E, U);
  var vt = O ?? Y;
  if (vt == null || C == null || k == null)
    return null;
  var Ke = L ?? jh;
  U || (Ke = jh), c && Ke.length && (Ke = yx(Ke.filter((Ue) => Ue.value != null && (Ue.hide !== !0 || n.includeHidden)), d, mC));
  var dr = Ke.length > 0, dn = /* @__PURE__ */ g.createElement(l1, {
    allowEscapeViewBox: a,
    animationDuration: o,
    animationEasing: u,
    isAnimationActive: s,
    active: U,
    coordinate: F,
    hasPayload: dr,
    offset: f,
    position: v,
    reverseDirection: p,
    useTranslate3d: h,
    viewBox: C,
    wrapperStyle: m,
    lastBoundingBox: Q,
    innerRef: we,
    hasPortalFromProps: !!O
  }, yC(l, Eh(Eh({}, n), {}, {
    payload: Ke,
    label: Le,
    active: U,
    activeIndex: E,
    coordinate: F,
    accessibilityLayer: T
  })));
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ Wp(dn, vt), U && /* @__PURE__ */ g.createElement(UI, {
    cursor: y,
    tooltipEventType: k,
    coordinate: F,
    payload: Ke,
    index: E
  }));
}
var po = (e) => null;
po.displayName = "Cell";
function bC(e, t, r) {
  return (t = wC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wC(e) {
  var t = xC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class PC {
  constructor(t) {
    bC(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
  }
  get(t) {
    var r = this.cache.get(t);
    return r !== void 0 && (this.cache.delete(t), this.cache.set(t, r)), r;
  }
  set(t, r) {
    if (this.cache.has(t))
      this.cache.delete(t);
    else if (this.cache.size >= this.maxSize) {
      var n = this.cache.keys().next().value;
      n != null && this.cache.delete(n);
    }
    this.cache.set(t, r);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
}
function Ih(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function OC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ih(Object(r), !0).forEach(function(n) {
      AC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ih(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AC(e, t, r) {
  return (t = SC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SC(e) {
  var t = _C(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _C(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var EC = {
  cacheSize: 2e3,
  enableCache: !0
}, z0 = OC({}, EC), Ch = new PC(z0.cacheSize), jC = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, kh = "recharts_measurement_span";
function IC(e, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", i = t.fontWeight || "", a = t.fontStyle || "", o = t.letterSpacing || "", u = t.textTransform || "";
  return "".concat(e, "|").concat(r, "|").concat(n, "|").concat(i, "|").concat(a, "|").concat(o, "|").concat(u);
}
var Th = (e, t) => {
  try {
    var r = document.getElementById(kh);
    r || (r = document.createElement("span"), r.setAttribute("id", kh), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, jC, t), r.textContent = "".concat(e);
    var n = r.getBoundingClientRect();
    return {
      width: n.width,
      height: n.height
    };
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, Sn = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Ya.isSsr)
    return {
      width: 0,
      height: 0
    };
  if (!z0.enableCache)
    return Th(t, r);
  var n = IC(t, r), i = Ch.get(n);
  if (i)
    return i;
  var a = Th(t, r);
  return Ch.set(n, a), a;
}, B0;
function CC(e, t, r) {
  return (t = kC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kC(e) {
  var t = TC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function TC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Mh = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Dh = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, MC = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, DC = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, NC = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, $C = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
function RC(e) {
  return $C.includes(e);
}
var Kr = "NaN";
function LC(e, t) {
  return e * NC[t];
}
class Ce {
  static parse(t) {
    var r, [, n, i] = (r = DC.exec(t)) !== null && r !== void 0 ? r : [];
    return n == null ? Ce.NaN : new Ce(parseFloat(n), i ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, Ct(t) && (this.unit = ""), r !== "" && !MC.test(r) && (this.num = NaN, this.unit = ""), RC(r) && (this.num = LC(t, r), this.unit = "px");
  }
  add(t) {
    return this.unit !== t.unit ? new Ce(NaN, "") : new Ce(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit ? new Ce(NaN, "") : new Ce(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new Ce(NaN, "") : new Ce(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new Ce(NaN, "") : new Ce(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return Ct(this.num);
  }
}
B0 = Ce;
CC(Ce, "NaN", new B0(NaN, ""));
function F0(e) {
  if (e == null || e.includes(Kr))
    return Kr;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, [, n, i, a] = (r = Mh.exec(t)) !== null && r !== void 0 ? r : [], o = Ce.parse(n ?? ""), u = Ce.parse(a ?? ""), l = i === "*" ? o.multiply(u) : o.divide(u);
    if (l.isNaN())
      return Kr;
    t = t.replace(Mh, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var c, [, s, f, d] = (c = Dh.exec(t)) !== null && c !== void 0 ? c : [], v = Ce.parse(s ?? ""), p = Ce.parse(d ?? ""), h = f === "+" ? v.add(p) : v.subtract(p);
    if (h.isNaN())
      return Kr;
    t = t.replace(Dh, h.toString());
  }
  return t;
}
var Nh = /\(([^()]*)\)/;
function zC(e) {
  for (var t = e, r; (r = Nh.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(Nh, F0(n));
  }
  return t;
}
function BC(e) {
  var t = e.replace(/\s+/g, "");
  return t = zC(t), t = F0(t), t;
}
function FC(e) {
  try {
    return BC(e);
  } catch {
    return Kr;
  }
}
function Bu(e) {
  var t = FC(e.slice(5, -1));
  return t === Kr ? "" : t;
}
var qC = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"], WC = ["dx", "dy", "angle", "className", "breakAll"];
function ql() {
  return ql = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ql.apply(null, arguments);
}
function $h(e, t) {
  if (e == null) return {};
  var r, n, i = KC(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function KC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var q0 = /[ \f\n\r\t\v\u2028\u2029]+/, W0 = (e) => {
  var {
    children: t,
    breakAll: r,
    style: n
  } = e;
  try {
    var i = [];
    Se(t) || (r ? i = t.toString().split("") : i = t.toString().split(q0));
    var a = i.map((u) => ({
      word: u,
      width: Sn(u, n).width
    })), o = r ? 0 : Sn(" ", n).width;
    return {
      wordsWithComputedWidth: a,
      spaceWidth: o
    };
  } catch {
    return null;
  }
};
function UC(e) {
  return e === "start" || e === "middle" || e === "end" || e === "inherit";
}
var K0 = (e, t, r, n) => e.reduce((i, a) => {
  var {
    word: o,
    width: u
  } = a, l = i[i.length - 1];
  if (l && u != null && (t == null || n || l.width + u + r < Number(t)))
    l.words.push(o), l.width += u + r;
  else {
    var c = {
      words: [o],
      width: u
    };
    i.push(c);
  }
  return i;
}, []), U0 = (e) => e.reduce((t, r) => t.width > r.width ? t : r), HC = "…", Rh = (e, t, r, n, i, a, o, u) => {
  var l = e.slice(0, t), c = W0({
    breakAll: r,
    style: n,
    children: l + HC
  });
  if (!c)
    return [!1, []];
  var s = K0(c.wordsWithComputedWidth, a, o, u), f = s.length > i || U0(s).width > Number(a);
  return [f, s];
}, YC = (e, t, r, n, i) => {
  var {
    maxLines: a,
    children: o,
    style: u,
    breakAll: l
  } = e, c = D(a), s = String(o), f = K0(t, n, r, i);
  if (!c || i)
    return f;
  var d = f.length > a || U0(f).width > Number(n);
  if (!d)
    return f;
  for (var v = 0, p = s.length - 1, h = 0, m; v <= p && h <= s.length - 1; ) {
    var y = Math.floor((v + p) / 2), b = y - 1, [w, x] = Rh(s, b, l, u, a, n, r, i), [O] = Rh(s, y, l, u, a, n, r, i);
    if (!w && !O && (v = y + 1), w && O && (p = y - 1), !w && O) {
      m = x;
      break;
    }
    h++;
  }
  return m || f;
}, Lh = (e) => {
  var t = Se(e) ? [] : e.toString().split(q0);
  return [{
    words: t,
    width: void 0
  }];
}, GC = (e) => {
  var {
    width: t,
    scaleToFit: r,
    children: n,
    style: i,
    breakAll: a,
    maxLines: o
  } = e;
  if ((t || r) && !Ya.isSsr) {
    var u, l, c = W0({
      breakAll: a,
      children: n,
      style: i
    });
    if (c) {
      var {
        wordsWithComputedWidth: s,
        spaceWidth: f
      } = c;
      u = s, l = f;
    } else
      return Lh(n);
    return YC({
      breakAll: a,
      children: n,
      maxLines: o,
      style: i
    }, u, l, t, !!r);
  }
  return Lh(n);
}, H0 = "#808080", VC = {
  angle: 0,
  breakAll: !1,
  // Magic number from d3
  capHeight: "0.71em",
  fill: H0,
  lineHeight: "1em",
  scaleToFit: !1,
  textAnchor: "start",
  // Maintain compat with existing charts / default SVG behavior
  verticalAnchor: "end",
  x: 0,
  y: 0
}, mo = /* @__PURE__ */ _e((e, t) => {
  var r = Re(e, VC), {
    x: n,
    y: i,
    lineHeight: a,
    capHeight: o,
    fill: u,
    scaleToFit: l,
    textAnchor: c,
    verticalAnchor: s
  } = r, f = $h(r, qC), d = wt(() => GC({
    breakAll: f.breakAll,
    children: f.children,
    maxLines: f.maxLines,
    scaleToFit: l,
    style: f.style,
    width: f.width
  }), [f.breakAll, f.children, f.maxLines, l, f.style, f.width]), {
    dx: v,
    dy: p,
    angle: h,
    className: m,
    breakAll: y
  } = f, b = $h(f, WC);
  if (!kt(n) || !kt(i) || d.length === 0)
    return null;
  var w = Number(n) + (D(v) ? v : 0), x = Number(i) + (D(p) ? p : 0);
  if (!q(w) || !q(x))
    return null;
  var O;
  switch (s) {
    case "start":
      O = Bu("calc(".concat(o, ")"));
      break;
    case "middle":
      O = Bu("calc(".concat((d.length - 1) / 2, " * -").concat(a, " + (").concat(o, " / 2))"));
      break;
    default:
      O = Bu("calc(".concat(d.length - 1, " * -").concat(a, ")"));
      break;
  }
  var P = [], A = d[0];
  if (l && A != null) {
    var _ = A.width, {
      width: C
    } = f;
    P.push("scale(".concat(D(C) && D(_) ? C / _ : 1, ")"));
  }
  return h && P.push("rotate(".concat(h, ", ").concat(w, ", ").concat(x, ")")), P.length && (b.transform = P.join(" ")), /* @__PURE__ */ g.createElement("text", ql({}, lt(b), {
    ref: t,
    x: w,
    y: x,
    className: Z("recharts-text", m),
    textAnchor: c,
    fill: u.includes("url") ? H0 : u
  }), d.map((T, k) => {
    var E = T.words.join(y ? "" : " ");
    return (
      // duplicate words will cause duplicate keys which is why we add the array index here
      /* @__PURE__ */ g.createElement("tspan", {
        x: w,
        dy: k === 0 ? O : a,
        key: "".concat(E, "-").concat(k)
      }, E)
    );
  }));
});
mo.displayName = "Text";
function zh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function St(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zh(Object(r), !0).forEach(function(n) {
      XC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function XC(e, t, r) {
  return (t = ZC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZC(e) {
  var t = QC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function QC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var JC = (e) => {
  var {
    viewBox: t,
    position: r,
    offset: n = 0,
    parentViewBox: i
  } = e, {
    x: a,
    y: o,
    height: u,
    upperWidth: l,
    lowerWidth: c
  } = yc(t), s = a, f = a + (l - c) / 2, d = (s + f) / 2, v = (l + c) / 2, p = s + l / 2, h = u >= 0 ? 1 : -1, m = h * n, y = h > 0 ? "end" : "start", b = h > 0 ? "start" : "end", w = l >= 0 ? 1 : -1, x = w * n, O = w > 0 ? "end" : "start", P = w > 0 ? "start" : "end", A = i;
  if (r === "top") {
    var _ = {
      x: s + l / 2,
      y: o - m,
      horizontalAnchor: "middle",
      verticalAnchor: y
    };
    return A && (_.height = Math.max(o - A.y, 0), _.width = l), _;
  }
  if (r === "bottom") {
    var C = {
      x: f + c / 2,
      y: o + u + m,
      horizontalAnchor: "middle",
      verticalAnchor: b
    };
    return A && (C.height = Math.max(A.y + A.height - (o + u), 0), C.width = c), C;
  }
  if (r === "left") {
    var T = {
      x: d - x,
      y: o + u / 2,
      horizontalAnchor: O,
      verticalAnchor: "middle"
    };
    return A && (T.width = Math.max(T.x - A.x, 0), T.height = u), T;
  }
  if (r === "right") {
    var k = {
      x: d + v + x,
      y: o + u / 2,
      horizontalAnchor: P,
      verticalAnchor: "middle"
    };
    return A && (k.width = Math.max(A.x + A.width - k.x, 0), k.height = u), k;
  }
  var E = A ? {
    width: v,
    height: u
  } : {};
  return r === "insideLeft" ? St({
    x: d + x,
    y: o + u / 2,
    horizontalAnchor: P,
    verticalAnchor: "middle"
  }, E) : r === "insideRight" ? St({
    x: d + v - x,
    y: o + u / 2,
    horizontalAnchor: O,
    verticalAnchor: "middle"
  }, E) : r === "insideTop" ? St({
    x: s + l / 2,
    y: o + m,
    horizontalAnchor: "middle",
    verticalAnchor: b
  }, E) : r === "insideBottom" ? St({
    x: f + c / 2,
    y: o + u - m,
    horizontalAnchor: "middle",
    verticalAnchor: y
  }, E) : r === "insideTopLeft" ? St({
    x: s + x,
    y: o + m,
    horizontalAnchor: P,
    verticalAnchor: b
  }, E) : r === "insideTopRight" ? St({
    x: s + l - x,
    y: o + m,
    horizontalAnchor: O,
    verticalAnchor: b
  }, E) : r === "insideBottomLeft" ? St({
    x: f + x,
    y: o + u - m,
    horizontalAnchor: P,
    verticalAnchor: y
  }, E) : r === "insideBottomRight" ? St({
    x: f + c - x,
    y: o + u - m,
    horizontalAnchor: O,
    verticalAnchor: y
  }, E) : r && typeof r == "object" && (D(r.x) || Er(r.x)) && (D(r.y) || Er(r.y)) ? St({
    x: a + Ne(r.x, v),
    y: o + Ne(r.y, u),
    horizontalAnchor: "end",
    verticalAnchor: "end"
  }, E) : St({
    x: p,
    y: o + u / 2,
    horizontalAnchor: "middle",
    verticalAnchor: "middle"
  }, E);
}, ek = ["labelRef"], tk = ["content"];
function Bh(e, t) {
  if (e == null) return {};
  var r, n, i = rk(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function rk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Fh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function An(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fh(Object(r), !0).forEach(function(n) {
      nk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nk(e, t, r) {
  return (t = ik(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ik(e) {
  var t = ak(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ak(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Nt() {
  return Nt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nt.apply(null, arguments);
}
var Y0 = /* @__PURE__ */ Ve(null), ok = (e) => {
  var {
    x: t,
    y: r,
    upperWidth: n,
    lowerWidth: i,
    width: a,
    height: o,
    children: u
  } = e, l = wt(() => ({
    x: t,
    y: r,
    upperWidth: n,
    lowerWidth: i,
    width: a,
    height: o
  }), [t, r, n, i, a, o]);
  return /* @__PURE__ */ g.createElement(Y0.Provider, {
    value: l
  }, u);
}, G0 = () => {
  var e = ft(Y0), t = Wa();
  return e || (t ? yc(t) : void 0);
}, uk = /* @__PURE__ */ Ve(null), lk = () => {
  var e = ft(uk), t = N($g);
  return e || t;
}, ck = (e) => {
  var {
    value: t,
    formatter: r
  } = e, n = Se(e.children) ? t : e.children;
  return typeof r == "function" ? r(n) : n;
}, ks = (e) => e != null && typeof e == "function", sk = (e, t) => {
  var r = Ae(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, fk = (e, t, r, n, i) => {
  var {
    offset: a,
    className: o
  } = e, {
    cx: u,
    cy: l,
    innerRadius: c,
    outerRadius: s,
    startAngle: f,
    endAngle: d,
    clockWise: v
  } = i, p = (c + s) / 2, h = sk(f, d), m = h >= 0 ? 1 : -1, y, b;
  switch (t) {
    case "insideStart":
      y = f + m * a, b = v;
      break;
    case "insideEnd":
      y = d - m * a, b = !v;
      break;
    case "end":
      y = d + m * a, b = v;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  b = h <= 0 ? b : !b;
  var w = ve(u, l, p, y), x = ve(u, l, p, y + (b ? 1 : -1) * 359), O = "M".concat(w.x, ",").concat(w.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(b ? 0 : 1, `,
    `).concat(x.x, ",").concat(x.y), P = Se(e.id) ? En("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ g.createElement("text", Nt({}, n, {
    dominantBaseline: "central",
    className: Z("recharts-radial-bar-label", o)
  }), /* @__PURE__ */ g.createElement("defs", null, /* @__PURE__ */ g.createElement("path", {
    id: P,
    d: O
  })), /* @__PURE__ */ g.createElement("textPath", {
    xlinkHref: "#".concat(P)
  }, r));
}, dk = (e, t, r) => {
  var {
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: u,
    endAngle: l
  } = e, c = (u + l) / 2;
  if (r === "outside") {
    var {
      x: s,
      y: f
    } = ve(n, i, o + t, c);
    return {
      x: s,
      y: f,
      textAnchor: s >= n ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (r === "center")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (r === "centerTop")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (r === "centerBottom")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var d = (a + o) / 2, {
    x: v,
    y: p
  } = ve(n, i, d, c);
  return {
    x: v,
    y: p,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, Ei = (e) => e != null && "cx" in e && D(e.cx), vk = {
  angle: 0,
  offset: 5,
  zIndex: ke.label,
  position: "middle",
  textBreakAll: !1
};
function hk(e) {
  if (!Ei(e))
    return e;
  var {
    cx: t,
    cy: r,
    outerRadius: n
  } = e, i = n * 2;
  return {
    x: t - n,
    y: r - n,
    width: i,
    upperWidth: i,
    lowerWidth: i,
    height: i
  };
}
function tr(e) {
  var t = Re(e, vk), {
    viewBox: r,
    parentViewBox: n,
    position: i,
    value: a,
    children: o,
    content: u,
    className: l = "",
    textBreakAll: c,
    labelRef: s
  } = t, f = lk(), d = G0(), v = i === "center" ? d : f ?? d, p, h, m;
  r == null ? p = v : Ei(r) ? p = r : p = yc(r);
  var y = hk(p);
  if (!p || Se(a) && Se(o) && !/* @__PURE__ */ jt(u) && typeof u != "function")
    return null;
  var b = An(An({}, t), {}, {
    viewBox: p
  });
  if (/* @__PURE__ */ jt(u)) {
    var {
      labelRef: w
    } = b, x = Bh(b, ek);
    return /* @__PURE__ */ Oa(u, x);
  }
  if (typeof u == "function") {
    var {
      content: O
    } = b, P = Bh(b, tk);
    if (h = /* @__PURE__ */ Fp(u, P), /* @__PURE__ */ jt(h))
      return h;
  } else
    h = ck(t);
  var A = lt(t);
  if (Ei(p)) {
    if (i === "insideStart" || i === "insideEnd" || i === "end")
      return fk(t, i, h, A, p);
    m = dk(p, t.offset, t.position);
  } else {
    if (!y)
      return null;
    var _ = JC({
      viewBox: y,
      position: i,
      offset: t.offset,
      parentViewBox: Ei(n) ? void 0 : n
    });
    m = An(An({
      x: _.x,
      y: _.y,
      textAnchor: _.horizontalAnchor,
      verticalAnchor: _.verticalAnchor
    }, _.width !== void 0 ? {
      width: _.width
    } : {}), _.height !== void 0 ? {
      height: _.height
    } : {});
  }
  return /* @__PURE__ */ g.createElement(Pt, {
    zIndex: t.zIndex
  }, /* @__PURE__ */ g.createElement(mo, Nt({
    ref: s,
    className: Z("recharts-label", l)
  }, A, m, {
    /*
     * textAnchor is decided by default based on the `position`
     * but we allow overriding via props for precise control.
     */
    textAnchor: UC(A.textAnchor) ? A.textAnchor : m.textAnchor,
    breakAll: c
  }), h));
}
tr.displayName = "Label";
var pk = (e, t, r) => {
  if (!e)
    return null;
  var n = {
    viewBox: t,
    labelRef: r
  };
  return e === !0 ? /* @__PURE__ */ g.createElement(tr, Nt({
    key: "label-implicit"
  }, n)) : kt(e) ? /* @__PURE__ */ g.createElement(tr, Nt({
    key: "label-implicit",
    value: e
  }, n)) : /* @__PURE__ */ jt(e) ? e.type === tr ? /* @__PURE__ */ Oa(e, An({
    key: "label-implicit"
  }, n)) : /* @__PURE__ */ g.createElement(tr, Nt({
    key: "label-implicit",
    content: e
  }, n)) : ks(e) ? /* @__PURE__ */ g.createElement(tr, Nt({
    key: "label-implicit",
    content: e
  }, n)) : e && typeof e == "object" ? /* @__PURE__ */ g.createElement(tr, Nt({}, e, {
    key: "label-implicit"
  }, n)) : null;
};
function mk(e) {
  var {
    label: t,
    labelRef: r
  } = e, n = G0();
  return pk(t, n, r) || null;
}
var Fu = {}, qu = {}, qh;
function yk() {
  return qh || (qh = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r[r.length - 1];
    }
    e.last = t;
  })(qu)), qu;
}
var Wu = {}, Wh;
function gk() {
  return Wh || (Wh = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Array.isArray(r) ? r : Array.from(r);
    }
    e.toArray = t;
  })(Wu)), Wu;
}
var Kh;
function bk() {
  return Kh || (Kh = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ yk(), r = /* @__PURE__ */ gk(), n = /* @__PURE__ */ oc();
    function i(a) {
      if (n.isArrayLike(a))
        return t.last(r.toArray(a));
    }
    e.last = i;
  })(Fu)), Fu;
}
var Ku, Uh;
function wk() {
  return Uh || (Uh = 1, Ku = bk().last), Ku;
}
var xk = /* @__PURE__ */ wk();
const Pk = /* @__PURE__ */ ur(xk);
var Ok = ["valueAccessor"], Ak = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
function pa() {
  return pa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pa.apply(null, arguments);
}
function Hh(e, t) {
  if (e == null) return {};
  var r, n, i = Sk(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Sk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var _k = (e) => Array.isArray(e.value) ? Pk(e.value) : e.value, V0 = /* @__PURE__ */ Ve(void 0), Ek = V0.Provider, X0 = /* @__PURE__ */ Ve(void 0), jk = X0.Provider;
function Ik() {
  return ft(V0);
}
function Ck() {
  return ft(X0);
}
function ji(e) {
  var {
    valueAccessor: t = _k
  } = e, r = Hh(e, Ok), {
    dataKey: n,
    clockWise: i,
    id: a,
    textBreakAll: o,
    zIndex: u
  } = r, l = Hh(r, Ak), c = Ik(), s = Ck(), f = c || s;
  return !f || !f.length ? null : /* @__PURE__ */ g.createElement(Pt, {
    zIndex: u ?? ke.label
  }, /* @__PURE__ */ g.createElement(qe, {
    className: "recharts-label-list"
  }, f.map((d, v) => {
    var p, h = Se(n) ? t(d, v) : ie(d.payload, n), m = Se(a) ? {} : {
      id: "".concat(a, "-").concat(v)
    };
    return /* @__PURE__ */ g.createElement(tr, pa({
      key: "label-".concat(v)
    }, lt(d), l, m, {
      /*
       * Prefer to use the explicit fill from LabelList props.
       * Only in an absence of that, fall back to the fill of the entry.
       * The entry fill can be quite difficult to see especially in Bar, Pie, RadialBar in inside positions.
       * On the other hand it's quite convenient in Scatter, Line, or when the position is outside the Bar, Pie filled shapes.
       */
      fill: (p = r.fill) !== null && p !== void 0 ? p : d.fill,
      parentViewBox: d.parentViewBox,
      value: h,
      textBreakAll: o,
      viewBox: d.viewBox,
      index: v,
      zIndex: 0
    }));
  })));
}
ji.displayName = "LabelList";
function Z0(e) {
  var {
    label: t
  } = e;
  return t ? t === !0 ? /* @__PURE__ */ g.createElement(ji, {
    key: "labelList-implicit"
  }) : /* @__PURE__ */ g.isValidElement(t) || ks(t) ? /* @__PURE__ */ g.createElement(ji, {
    key: "labelList-implicit",
    content: t
  }) : typeof t == "object" ? /* @__PURE__ */ g.createElement(ji, pa({
    key: "labelList-implicit"
  }, t, {
    type: String(t.type)
  })) : null : null;
}
var Q0 = (e) => e.graphicalItems.polarItems, kk = S([le, Jn], es), yo = S([Q0, de, kk], rs), Tk = S([yo], ns), go = S([Tk, ro], is), Mk = S([go, de, yo], os);
S([go, de, yo], (e, t, r) => r.length > 0 ? e.flatMap((n) => r.flatMap((i) => {
  var a, o = ie(n, (a = t.dataKey) !== null && a !== void 0 ? a : i.dataKey);
  return {
    value: o,
    errorDomain: []
    // polar charts do not have error bars
  };
})).filter(Boolean) : t?.dataKey != null ? e.map((n) => ({
  value: ie(n, t.dataKey),
  errorDomain: []
})) : e.map((n) => ({
  value: n,
  errorDomain: []
})));
var Yh = () => {
}, Dk = S([go, de, yo, so, le], ss), Nk = S([de, ls, cs, Yh, Dk, Yh, G, le], fs), J0 = S([de, G, go, Mk, Qn, le, Nk], ds), $k = S([J0, un, fr], ps), Rk = S([de, J0, $k, le], ys);
S([fr, Rk], Lg);
var Lk = {
  radiusAxis: {},
  angleAxis: {}
}, eb = Xe({
  name: "polarAxis",
  initialState: Lk,
  reducers: {
    addRadiusAxis(e, t) {
      e.radiusAxis[t.payload.id] = t.payload;
    },
    removeRadiusAxis(e, t) {
      delete e.radiusAxis[t.payload.id];
    },
    addAngleAxis(e, t) {
      e.angleAxis[t.payload.id] = t.payload;
    },
    removeAngleAxis(e, t) {
      delete e.angleAxis[t.payload.id];
    }
  }
}), {
  addRadiusAxis: b$,
  removeRadiusAxis: w$,
  addAngleAxis: x$,
  removeAngleAxis: P$
} = eb.actions, zk = eb.reducer;
function tb(e) {
  return e && typeof e == "object" && "className" in e && typeof e.className == "string" ? e.className : "";
}
function Gh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gh(Object(r), !0).forEach(function(n) {
      Bk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Bk(e, t, r) {
  return (t = Fk(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Fk(e) {
  var t = qk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qk(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Wk = (e, t) => t, Ts = S([Q0, Wk], (e, t) => e.filter((r) => r.type === "pie").find((r) => r.id === t)), Kk = [], Ms = (e, t, r) => r?.length === 0 ? Kk : r, rb = S([ro, Ts, Ms], (e, t, r) => {
  var {
    chartData: n
  } = e;
  if (t != null) {
    var i;
    if (t?.data != null && t.data.length > 0 ? i = t.data : i = n, (!i || !i.length) && r != null && (i = r.map((a) => Vh(Vh({}, t.presentationProps), a.props))), i != null)
      return i;
  }
}), Uk = S([rb, Ts, Ms], (e, t, r) => {
  if (!(e == null || t == null))
    return e.map((n, i) => {
      var a, o = ie(n, t.nameKey, t.name), u;
      return r != null && (a = r[i]) !== null && a !== void 0 && (a = a.props) !== null && a !== void 0 && a.fill ? u = r[i].props.fill : typeof n == "object" && n != null && "fill" in n ? u = n.fill : u = t.fill, {
        value: La(o, t.dataKey),
        color: u,
        // @ts-expect-error we need a better typing for our data inputs
        payload: n,
        type: t.legendType
      };
    });
}), Hk = S([rb, Ts, Ms, ye], (e, t, r, n) => {
  if (!(t == null || e == null))
    return VT({
      offset: n,
      pieSettings: t,
      displayedData: e,
      cells: r
    });
}), Uu = { exports: {} }, X = {};
var Xh;
function Yk() {
  if (Xh) return X;
  Xh = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), i = /* @__PURE__ */ Symbol.for("react.profiler"), a = /* @__PURE__ */ Symbol.for("react.consumer"), o = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), l = /* @__PURE__ */ Symbol.for("react.suspense"), c = /* @__PURE__ */ Symbol.for("react.suspense_list"), s = /* @__PURE__ */ Symbol.for("react.memo"), f = /* @__PURE__ */ Symbol.for("react.lazy"), d = /* @__PURE__ */ Symbol.for("react.view_transition"), v = /* @__PURE__ */ Symbol.for("react.client.reference");
  function p(h) {
    if (typeof h == "object" && h !== null) {
      var m = h.$$typeof;
      switch (m) {
        case e:
          switch (h = h.type, h) {
            case r:
            case i:
            case n:
            case l:
            case c:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case o:
                case u:
                case f:
                case s:
                  return h;
                case a:
                  return h;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  return X.ContextConsumer = a, X.ContextProvider = o, X.Element = e, X.ForwardRef = u, X.Fragment = r, X.Lazy = f, X.Memo = s, X.Portal = t, X.Profiler = i, X.StrictMode = n, X.Suspense = l, X.SuspenseList = c, X.isContextConsumer = function(h) {
    return p(h) === a;
  }, X.isContextProvider = function(h) {
    return p(h) === o;
  }, X.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, X.isForwardRef = function(h) {
    return p(h) === u;
  }, X.isFragment = function(h) {
    return p(h) === r;
  }, X.isLazy = function(h) {
    return p(h) === f;
  }, X.isMemo = function(h) {
    return p(h) === s;
  }, X.isPortal = function(h) {
    return p(h) === t;
  }, X.isProfiler = function(h) {
    return p(h) === i;
  }, X.isStrictMode = function(h) {
    return p(h) === n;
  }, X.isSuspense = function(h) {
    return p(h) === l;
  }, X.isSuspenseList = function(h) {
    return p(h) === c;
  }, X.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === i || h === n || h === l || h === c || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === s || h.$$typeof === o || h.$$typeof === a || h.$$typeof === u || h.$$typeof === v || h.getModuleId !== void 0);
  }, X.typeOf = p, X;
}
var Zh;
function Gk() {
  return Zh || (Zh = 1, Uu.exports = /* @__PURE__ */ Yk()), Uu.exports;
}
var Vk = /* @__PURE__ */ Gk(), Qh = (e) => typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "", Jh = null, Hu = null, nb = (e) => {
  if (e === Jh && Array.isArray(Hu))
    return Hu;
  var t = [];
  return Lb.forEach(e, (r) => {
    Se(r) || (Vk.isFragment(r) ? t = t.concat(nb(r.props.children)) : t.push(r));
  }), Hu = t, Jh = e, t;
};
function Ds(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map((i) => Qh(i)) : n = [Qh(t)], nb(e).forEach((i) => {
    var a = _r(i, "type.displayName") || _r(i, "type.name");
    a && n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
var Yu = {}, ep;
function Xk() {
  return ep || (ep = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      if (typeof r != "object" || r == null)
        return !1;
      if (Object.getPrototypeOf(r) === null)
        return !0;
      if (Object.prototype.toString.call(r) !== "[object Object]") {
        const i = r[Symbol.toStringTag];
        return i == null || !Object.getOwnPropertyDescriptor(r, Symbol.toStringTag)?.writable ? !1 : r.toString() === `[object ${i}]`;
      }
      let n = r;
      for (; Object.getPrototypeOf(n) !== null; )
        n = Object.getPrototypeOf(n);
      return Object.getPrototypeOf(r) === n;
    }
    e.isPlainObject = t;
  })(Yu)), Yu;
}
var Gu, tp;
function Zk() {
  return tp || (tp = 1, Gu = Xk().isPlainObject), Gu;
}
var Qk = /* @__PURE__ */ Zk();
const Jk = /* @__PURE__ */ ur(Qk);
var rp, np, ip, ap, op;
function up(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? up(Object(r), !0).forEach(function(n) {
      eT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : up(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eT(e, t, r) {
  return (t = tT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tT(e) {
  var t = rT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function rT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ma() {
  return ma = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ma.apply(null, arguments);
}
function xn(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var cp = (e, t, r, n, i) => {
  var a = r - n, o;
  return o = se(rp || (rp = xn(["M ", ",", ""])), e, t), o += se(np || (np = xn(["L ", ",", ""])), e + r, t), o += se(ip || (ip = xn(["L ", ",", ""])), e + r - a / 2, t + i), o += se(ap || (ap = xn(["L ", ",", ""])), e + r - a / 2 - n, t + i), o += se(op || (op = xn(["L ", ",", " Z"])), e, t), o;
}, nT = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, iT = (e) => {
  var t = Re(e, nT), {
    x: r,
    y: n,
    upperWidth: i,
    lowerWidth: a,
    height: o,
    className: u
  } = t, {
    animationEasing: l,
    animationDuration: c,
    animationBegin: s,
    isUpdateAnimationActive: f
  } = t, d = H(null), [v, p] = Fe(-1), h = H(i), m = H(a), y = H(o), b = H(r), w = H(n), x = Va(e, "trapezoid-");
  if (Te(() => {
    if (d.current && d.current.getTotalLength)
      try {
        var $ = d.current.getTotalLength();
        $ && p($);
      } catch {
      }
  }, []), r !== +r || n !== +n || i !== +i || a !== +a || o !== +o || i === 0 && a === 0 || o === 0)
    return null;
  var O = Z("recharts-trapezoid", u);
  if (!f)
    return /* @__PURE__ */ g.createElement("g", null, /* @__PURE__ */ g.createElement("path", ma({}, lt(t), {
      className: O,
      d: cp(r, n, i, a, o)
    })));
  var P = h.current, A = m.current, _ = y.current, C = b.current, T = w.current, k = "0px ".concat(v === -1 ? 1 : v, "px"), E = "".concat(v, "px 0px"), R = Ey(["strokeDasharray"], c, l);
  return /* @__PURE__ */ g.createElement(Ga, {
    animationId: x,
    key: x,
    canBegin: v > 0,
    duration: c,
    easing: l,
    isActive: f,
    begin: s
  }, ($) => {
    var z = pe(P, i, $), F = pe(A, a, $), L = pe(_, o, $), Y = pe(C, r, $), U = pe(T, n, $);
    d.current && (h.current = z, m.current = F, y.current = L, b.current = Y, w.current = U);
    var Q = $ > 0 ? {
      transition: R,
      strokeDasharray: E
    } : {
      strokeDasharray: k
    };
    return /* @__PURE__ */ g.createElement("path", ma({}, lt(t), {
      className: O,
      d: cp(Y, U, z, F, L),
      ref: d,
      style: lp(lp({}, Q), t.style)
    }));
  });
}, aT = ["option", "shapeType", "activeClassName"];
function oT(e, t) {
  if (e == null) return {};
  var r, n, i = uT(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function uT(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function sp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ya(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sp(Object(r), !0).forEach(function(n) {
      lT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lT(e, t, r) {
  return (t = cT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cT(e) {
  var t = sT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function sT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fT(e, t) {
  return ya(ya({}, t), e);
}
function dT(e, t) {
  return e === "symbols";
}
function fp(e) {
  var {
    shapeType: t,
    elementProps: r
  } = e;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ g.createElement(ky, r);
    case "trapezoid":
      return /* @__PURE__ */ g.createElement(iT, r);
    case "sector":
      return /* @__PURE__ */ g.createElement(Ny, r);
    case "symbols":
      if (dT(t))
        return /* @__PURE__ */ g.createElement(vm, r);
      break;
    case "curve":
      return /* @__PURE__ */ g.createElement(wc, r);
    default:
      return null;
  }
}
function vT(e) {
  return /* @__PURE__ */ jt(e) ? e.props : e;
}
function ib(e) {
  var {
    option: t,
    shapeType: r,
    activeClassName: n = "recharts-active-shape"
  } = e, i = oT(e, aT), a;
  if (/* @__PURE__ */ jt(t))
    a = /* @__PURE__ */ Oa(t, ya(ya({}, i), vT(t)));
  else if (typeof t == "function")
    a = t(i, i.index);
  else if (Jk(t) && typeof t != "boolean") {
    var o = fT(t, i);
    a = /* @__PURE__ */ g.createElement(fp, {
      shapeType: r,
      elementProps: o
    });
  } else {
    var u = i;
    a = /* @__PURE__ */ g.createElement(fp, {
      shapeType: r,
      elementProps: u
    });
  }
  return i.isActive ? /* @__PURE__ */ g.createElement(qe, {
    className: n
  }, a) : a;
}
var Ns = (e, t, r) => {
  var n = ue();
  return (i, a) => (o) => {
    e?.(i, a, o), n(h0({
      activeIndex: String(a),
      activeDataKey: t,
      activeCoordinate: i.tooltipPosition,
      activeGraphicalItemId: r
    }));
  };
}, $s = (e) => {
  var t = ue();
  return (r, n) => (i) => {
    e?.(r, n, i), t(pj());
  };
}, Rs = (e, t, r) => {
  var n = ue();
  return (i, a) => (o) => {
    e?.(i, a, o), n(mj({
      activeIndex: String(a),
      activeDataKey: t,
      activeCoordinate: i.tooltipPosition,
      activeGraphicalItemId: r
    }));
  };
};
function ab(e) {
  var {
    tooltipEntrySettings: t
  } = e, r = ue(), n = Ze(), i = H(null);
  return $e(() => {
    n || (i.current === null ? r(fj(t)) : i.current !== t && r(dj({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [t, r, n]), $e(() => () => {
    i.current && (r(vj(i.current)), i.current = null);
  }, [r]), null;
}
function hT(e) {
  var {
    legendPayload: t
  } = e, r = ue(), n = Ze(), i = H(null);
  return $e(() => {
    n || (i.current === null ? r(Oy(t)) : i.current !== t && r(Ay({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [r, n, t]), $e(() => () => {
    i.current && (r(Sy(i.current)), i.current = null);
  }, [r]), null;
}
function pT(e) {
  var {
    legendPayload: t
  } = e, r = ue(), n = N(G), i = H(null);
  return $e(() => {
    n !== "centric" && n !== "radial" || (i.current === null ? r(Oy(t)) : i.current !== t && r(Ay({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [r, n, t]), $e(() => () => {
    i.current && (r(Sy(i.current)), i.current = null);
  }, [r]), null;
}
var Vu, mT = () => {
  var [e] = g.useState(() => En("uid-"));
  return e;
}, yT = (Vu = g.useId) !== null && Vu !== void 0 ? Vu : mT;
function gT(e, t) {
  var r = yT();
  return t || (e ? "".concat(e, "-").concat(r) : r);
}
var bT = /* @__PURE__ */ Ve(void 0), ob = (e) => {
  var {
    id: t,
    type: r,
    children: n
  } = e, i = gT("recharts-".concat(r), t);
  return /* @__PURE__ */ g.createElement(bT.Provider, {
    value: i
  }, n(i));
}, wT = {
  cartesianItems: [],
  polarItems: []
}, ub = Xe({
  name: "graphicalItems",
  initialState: wT,
  reducers: {
    addCartesianGraphicalItem: {
      reducer(e, t) {
        e.cartesianItems.push(t.payload);
      },
      prepare: ae()
    },
    replaceCartesianGraphicalItem: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = yt(e).cartesianItems.indexOf(r);
        i > -1 && (e.cartesianItems[i] = n);
      },
      prepare: ae()
    },
    removeCartesianGraphicalItem: {
      reducer(e, t) {
        var r = yt(e).cartesianItems.indexOf(t.payload);
        r > -1 && e.cartesianItems.splice(r, 1);
      },
      prepare: ae()
    },
    addPolarGraphicalItem: {
      reducer(e, t) {
        e.polarItems.push(t.payload);
      },
      prepare: ae()
    },
    removePolarGraphicalItem: {
      reducer(e, t) {
        var r = yt(e).polarItems.indexOf(t.payload);
        r > -1 && e.polarItems.splice(r, 1);
      },
      prepare: ae()
    }
  }
}), {
  addCartesianGraphicalItem: xT,
  replaceCartesianGraphicalItem: PT,
  removeCartesianGraphicalItem: OT,
  addPolarGraphicalItem: AT,
  removePolarGraphicalItem: ST
} = ub.actions, _T = ub.reducer, ET = (e) => {
  var t = ue(), r = H(null);
  return $e(() => {
    r.current === null ? t(xT(e)) : r.current !== e && t(PT({
      prev: r.current,
      next: e
    })), r.current = e;
  }, [t, e]), $e(() => () => {
    r.current && (t(OT(r.current)), r.current = null);
  }, [t]), null;
}, jT = /* @__PURE__ */ qp(ET);
function IT(e) {
  var t = ue();
  return $e(() => (t(AT(e)), () => {
    t(ST(e));
  }), [t, e]), null;
}
var CT = ["key"], kT = ["onMouseEnter", "onClick", "onMouseLeave"], TT = ["id"], MT = ["id"];
function dp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dp(Object(r), !0).forEach(function(n) {
      DT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function DT(e, t, r) {
  return (t = NT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function NT(e) {
  var t = $T(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $T(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function or() {
  return or = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, or.apply(null, arguments);
}
function bo(e, t) {
  if (e == null) return {};
  var r, n, i = RT(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function RT(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function LT(e) {
  var t = wt(() => Ds(e.children, po), [e.children]), r = N((n) => Uk(n, e.id, t));
  return r == null ? null : /* @__PURE__ */ g.createElement(pT, {
    legendPayload: r
  });
}
var zT = /* @__PURE__ */ g.memo((e) => {
  var {
    dataKey: t,
    nameKey: r,
    sectors: n,
    stroke: i,
    strokeWidth: a,
    fill: o,
    name: u,
    hide: l,
    tooltipType: c,
    id: s
  } = e, f = {
    dataDefinedOnItem: n.map((d) => d.tooltipPayload),
    getPosition: (d) => {
      var v;
      return (v = n[Number(d)]) === null || v === void 0 ? void 0 : v.tooltipPosition;
    },
    settings: {
      stroke: i,
      strokeWidth: a,
      fill: o,
      dataKey: t,
      nameKey: r,
      name: La(u, t),
      hide: l,
      type: c,
      color: o,
      unit: "",
      // why doesn't Pie support unit?
      graphicalItemId: s
    }
  };
  return /* @__PURE__ */ g.createElement(ab, {
    tooltipEntrySettings: f
  });
}), BT = (e, t) => e > t ? "start" : e < t ? "end" : "middle", FT = (e, t, r) => Ne(typeof t == "function" ? t(e) : t, r, r * 0.8), qT = (e, t, r) => {
  var {
    top: n,
    left: i,
    width: a,
    height: o
  } = t, u = Ty(a, o), l = i + Ne(e.cx, a, a / 2), c = n + Ne(e.cy, o, o / 2), s = Ne(e.innerRadius, u, 0), f = FT(r, e.outerRadius, u), d = e.maxRadius || Math.sqrt(a * a + o * o) / 2;
  return {
    cx: l,
    cy: c,
    innerRadius: s,
    outerRadius: f,
    maxRadius: d
  };
}, WT = (e, t) => {
  var r = Ae(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, KT = (e, t) => {
  if (/* @__PURE__ */ g.isValidElement(e))
    return /* @__PURE__ */ g.cloneElement(e, t);
  if (typeof e == "function")
    return e(t);
  var r = Z("recharts-pie-label-line", typeof e != "boolean" ? e.className : ""), {
    key: n
  } = t, i = bo(t, CT);
  return /* @__PURE__ */ g.createElement(wc, or({}, i, {
    type: "linear",
    className: r
  }));
}, UT = (e, t, r) => {
  if (/* @__PURE__ */ g.isValidElement(e))
    return /* @__PURE__ */ g.cloneElement(e, t);
  var n = r;
  if (typeof e == "function" && (n = e(t), /* @__PURE__ */ g.isValidElement(n)))
    return n;
  var i = Z("recharts-pie-label-text", tb(e));
  return /* @__PURE__ */ g.createElement(mo, or({}, t, {
    alignmentBaseline: "middle",
    className: i
  }), n);
};
function HT(e) {
  var {
    sectors: t,
    props: r,
    showLabels: n
  } = e, {
    label: i,
    labelLine: a,
    dataKey: o
  } = r;
  if (!n || !i || !t)
    return null;
  var u = gt(r), l = _n(i), c = _n(a), s = typeof i == "object" && "offsetRadius" in i && typeof i.offsetRadius == "number" && i.offsetRadius || 20, f = t.map((d, v) => {
    var p = (d.startAngle + d.endAngle) / 2, h = ve(d.cx, d.cy, d.outerRadius + s, p), m = fe(fe(fe(fe({}, u), d), {}, {
      // @ts-expect-error customLabelProps is contributing unknown props
      stroke: "none"
    }, l), {}, {
      index: v,
      textAnchor: BT(h.x, d.cx)
    }, h), y = fe(fe(fe(fe({}, u), d), {}, {
      // @ts-expect-error customLabelLineProps is contributing unknown props
      fill: "none",
      // @ts-expect-error customLabelLineProps is contributing unknown props
      stroke: d.fill
    }, c), {}, {
      index: v,
      points: [ve(d.cx, d.cy, d.outerRadius, p), h],
      key: "line"
    });
    return /* @__PURE__ */ g.createElement(Pt, {
      zIndex: ke.label,
      key: "label-".concat(d.startAngle, "-").concat(d.endAngle, "-").concat(d.midAngle, "-").concat(v)
    }, /* @__PURE__ */ g.createElement(qe, null, a && KT(a, y), UT(i, m, ie(d, o))));
  });
  return /* @__PURE__ */ g.createElement(qe, {
    className: "recharts-pie-labels"
  }, f);
}
function YT(e) {
  var {
    sectors: t,
    props: r,
    showLabels: n
  } = e, {
    label: i
  } = r;
  return typeof i == "object" && i != null && "position" in i ? /* @__PURE__ */ g.createElement(Z0, {
    label: i
  }) : /* @__PURE__ */ g.createElement(HT, {
    sectors: t,
    props: r,
    showLabels: n
  });
}
function GT(e) {
  var {
    sectors: t,
    activeShape: r,
    inactiveShape: n,
    allOtherPieProps: i,
    shape: a,
    id: o
  } = e, u = N(Tr), l = N(_s), c = N(tI), {
    onMouseEnter: s,
    onClick: f,
    onMouseLeave: d
  } = i, v = bo(i, kT), p = Ns(s, i.dataKey, o), h = $s(d), m = Rs(f, i.dataKey, o);
  return t == null || t.length === 0 ? null : /* @__PURE__ */ g.createElement(g.Fragment, null, t.map((y, b) => {
    if (y?.startAngle === 0 && y?.endAngle === 0 && t.length !== 1) return null;
    var w = c == null || c === o, x = String(b) === u && (l == null || i.dataKey === l) && w, O = u ? n : null, P = r && x ? r : O, A = fe(fe({}, y), {}, {
      stroke: y.stroke,
      tabIndex: -1,
      [oy]: b,
      [uy]: o
    });
    return /* @__PURE__ */ g.createElement(qe, or({
      key: "sector-".concat(y?.startAngle, "-").concat(y?.endAngle, "-").concat(y.midAngle, "-").concat(b),
      tabIndex: -1,
      className: "recharts-pie-sector"
    }, Ea(v, y, b), {
      // @ts-expect-error the types need a bit of attention
      onMouseEnter: p(y, b),
      onMouseLeave: h(y, b),
      onClick: m(y, b)
    }), /* @__PURE__ */ g.createElement(ib, or({
      option: a ?? P,
      index: b,
      shapeType: "sector",
      isActive: x
    }, A)));
  }));
}
function VT(e) {
  var t, {
    pieSettings: r,
    displayedData: n,
    cells: i,
    offset: a
  } = e, {
    cornerRadius: o,
    startAngle: u,
    endAngle: l,
    dataKey: c,
    nameKey: s,
    tooltipType: f
  } = r, d = Math.abs(r.minAngle), v = WT(u, l), p = Math.abs(v), h = n.length <= 1 ? 0 : (t = r.paddingAngle) !== null && t !== void 0 ? t : 0, m = n.filter((P) => ie(P, c, 0) !== 0).length, y = (p >= 360 ? m : m - 1) * h, b = p - m * d - y, w = n.reduce((P, A) => {
    var _ = ie(A, c, 0);
    return P + (D(_) ? _ : 0);
  }, 0), x;
  if (w > 0) {
    var O;
    x = n.map((P, A) => {
      var _ = ie(P, c, 0), C = ie(P, s, A), T = qT(r, a, P), k = (D(_) ? _ : 0) / w, E, R = fe(fe({}, P), i && i[A] && i[A].props);
      A ? E = O.endAngle + Ae(v) * h * (_ !== 0 ? 1 : 0) : E = u;
      var $ = E + Ae(v) * ((_ !== 0 ? d : 0) + k * b), z = (E + $) / 2, F = (T.innerRadius + T.outerRadius) / 2, L = [{
        name: C,
        value: _,
        payload: R,
        dataKey: c,
        type: f,
        graphicalItemId: r.id
      }], Y = ve(T.cx, T.cy, F, z);
      return O = fe(fe(fe(fe({}, r.presentationProps), {}, {
        percent: k,
        cornerRadius: typeof o == "string" ? parseFloat(o) : o,
        name: C,
        tooltipPayload: L,
        midAngle: z,
        middleRadius: F,
        tooltipPosition: Y
      }, R), T), {}, {
        value: _,
        dataKey: c,
        startAngle: E,
        endAngle: $,
        payload: R,
        paddingAngle: Ae(v) * h
      }), O;
    });
  }
  return x;
}
function XT(e) {
  var {
    showLabels: t,
    sectors: r,
    children: n
  } = e, i = wt(() => !t || !r ? [] : r.map((a) => ({
    value: a.value,
    payload: a.payload,
    clockWise: !1,
    parentViewBox: void 0,
    viewBox: {
      cx: a.cx,
      cy: a.cy,
      innerRadius: a.innerRadius,
      outerRadius: a.outerRadius,
      startAngle: a.startAngle,
      endAngle: a.endAngle,
      clockWise: !1
    },
    fill: a.fill
  })), [r, t]);
  return /* @__PURE__ */ g.createElement(jk, {
    value: t ? i : void 0
  }, n);
}
function ZT(e) {
  var {
    props: t,
    previousSectorsRef: r,
    id: n
  } = e, {
    sectors: i,
    isAnimationActive: a,
    animationBegin: o,
    animationDuration: u,
    animationEasing: l,
    activeShape: c,
    inactiveShape: s,
    onAnimationStart: f,
    onAnimationEnd: d
  } = t, v = Va(t, "recharts-pie-"), p = r.current, [h, m] = Fe(!1), y = re(() => {
    typeof d == "function" && d(), m(!1);
  }, [d]), b = re(() => {
    typeof f == "function" && f(), m(!0);
  }, [f]);
  return /* @__PURE__ */ g.createElement(XT, {
    showLabels: !h,
    sectors: i
  }, /* @__PURE__ */ g.createElement(Ga, {
    animationId: v,
    begin: o,
    duration: u,
    isActive: a,
    easing: l,
    onAnimationStart: b,
    onAnimationEnd: y,
    key: v
  }, (w) => {
    var x, O = [], P = i && i[0], A = (x = P?.startAngle) !== null && x !== void 0 ? x : 0;
    return i?.forEach((_, C) => {
      var T = p && p[C], k = C > 0 ? _r(_, "paddingAngle", 0) : 0;
      if (T) {
        var E = pe(T.endAngle - T.startAngle, _.endAngle - _.startAngle, w), R = fe(fe({}, _), {}, {
          startAngle: A + k,
          endAngle: A + E + k
        });
        O.push(R), A = R.endAngle;
      } else {
        var {
          endAngle: $,
          startAngle: z
        } = _, F = pe(0, $ - z, w), L = fe(fe({}, _), {}, {
          startAngle: A + k,
          endAngle: A + F + k
        });
        O.push(L), A = L.endAngle;
      }
    }), r.current = O, /* @__PURE__ */ g.createElement(qe, null, /* @__PURE__ */ g.createElement(GT, {
      sectors: O,
      activeShape: c,
      inactiveShape: s,
      allOtherPieProps: t,
      shape: t.shape,
      id: n
    }));
  }), /* @__PURE__ */ g.createElement(YT, {
    showLabels: !h,
    sectors: i,
    props: t
  }), t.children);
}
var QT = {
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  cx: "50%",
  cy: "50%",
  dataKey: "value",
  endAngle: 360,
  fill: "#808080",
  hide: !1,
  innerRadius: 0,
  isAnimationActive: "auto",
  label: !1,
  labelLine: !0,
  legendType: "rect",
  minAngle: 0,
  nameKey: "name",
  outerRadius: "80%",
  paddingAngle: 0,
  rootTabIndex: 0,
  startAngle: 0,
  stroke: "#fff",
  zIndex: ke.area
};
function JT(e) {
  var {
    id: t
  } = e, r = bo(e, TT), {
    hide: n,
    className: i,
    rootTabIndex: a
  } = e, o = wt(() => Ds(e.children, po), [e.children]), u = N((s) => Hk(s, t, o)), l = H(null), c = Z("recharts-pie", i);
  return n || u == null ? (l.current = null, /* @__PURE__ */ g.createElement(qe, {
    tabIndex: a,
    className: c
  })) : /* @__PURE__ */ g.createElement(Pt, {
    zIndex: e.zIndex
  }, /* @__PURE__ */ g.createElement(zT, {
    dataKey: e.dataKey,
    nameKey: e.nameKey,
    sectors: u,
    stroke: e.stroke,
    strokeWidth: e.strokeWidth,
    fill: e.fill,
    name: e.name,
    hide: e.hide,
    tooltipType: e.tooltipType,
    id: t
  }), /* @__PURE__ */ g.createElement(qe, {
    tabIndex: a,
    className: c
  }, /* @__PURE__ */ g.createElement(ZT, {
    props: fe(fe({}, r), {}, {
      sectors: u
    }),
    previousSectorsRef: l,
    id: t
  })));
}
function eM(e) {
  var t = Re(e, QT), {
    id: r
  } = t, n = bo(t, MT), i = gt(n);
  return /* @__PURE__ */ g.createElement(ob, {
    id: r,
    type: "pie"
  }, (a) => /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(IT, {
    type: "pie",
    id: a,
    data: n.data,
    dataKey: n.dataKey,
    hide: n.hide,
    angleAxisId: 0,
    radiusAxisId: 0,
    name: n.name,
    nameKey: n.nameKey,
    tooltipType: n.tooltipType,
    legendType: n.legendType,
    fill: n.fill,
    cx: n.cx,
    cy: n.cy,
    startAngle: n.startAngle,
    endAngle: n.endAngle,
    paddingAngle: n.paddingAngle,
    minAngle: n.minAngle,
    innerRadius: n.innerRadius,
    outerRadius: n.outerRadius,
    cornerRadius: n.cornerRadius,
    presentationProps: i,
    maxRadius: t.maxRadius
  }), /* @__PURE__ */ g.createElement(LT, or({}, n, {
    id: a
  })), /* @__PURE__ */ g.createElement(JT, or({}, n, {
    id: a
  }))));
}
eM.displayName = "Pie";
function vp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vp(Object(r), !0).forEach(function(n) {
      tM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tM(e, t, r) {
  return (t = rM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rM(e) {
  var t = nM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lb = 0, iM = {
  xAxis: {},
  yAxis: {},
  zAxis: {}
}, cb = Xe({
  name: "cartesianAxis",
  initialState: iM,
  reducers: {
    addXAxis: {
      reducer(e, t) {
        e.xAxis[t.payload.id] = t.payload;
      },
      prepare: ae()
    },
    replaceXAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.xAxis[r.id] !== void 0 && (r.id !== n.id && delete e.xAxis[r.id], e.xAxis[n.id] = n);
      },
      prepare: ae()
    },
    removeXAxis: {
      reducer(e, t) {
        delete e.xAxis[t.payload.id];
      },
      prepare: ae()
    },
    addYAxis: {
      reducer(e, t) {
        e.yAxis[t.payload.id] = t.payload;
      },
      prepare: ae()
    },
    replaceYAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.yAxis[r.id] !== void 0 && (r.id !== n.id && delete e.yAxis[r.id], e.yAxis[n.id] = n);
      },
      prepare: ae()
    },
    removeYAxis: {
      reducer(e, t) {
        delete e.yAxis[t.payload.id];
      },
      prepare: ae()
    },
    addZAxis: {
      reducer(e, t) {
        e.zAxis[t.payload.id] = t.payload;
      },
      prepare: ae()
    },
    replaceZAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.zAxis[r.id] !== void 0 && (r.id !== n.id && delete e.zAxis[r.id], e.zAxis[n.id] = n);
      },
      prepare: ae()
    },
    removeZAxis: {
      reducer(e, t) {
        delete e.zAxis[t.payload.id];
      },
      prepare: ae()
    },
    updateYAxisWidth(e, t) {
      var {
        id: r,
        width: n
      } = t.payload, i = e.yAxis[r];
      if (i) {
        var a, o = i.widthHistory || [];
        if (o.length === 3 && o[0] === o[2] && n === o[1] && n !== i.width && Math.abs(n - ((a = o[0]) !== null && a !== void 0 ? a : 0)) <= 1)
          return;
        var u = [...o, n].slice(-3);
        e.yAxis[r] = hp(hp({}, i), {}, {
          width: n,
          widthHistory: u
        });
      }
    }
  }
}), {
  addXAxis: aM,
  replaceXAxis: oM,
  removeXAxis: uM,
  addYAxis: lM,
  replaceYAxis: cM,
  removeYAxis: sM,
  addZAxis: O$,
  replaceZAxis: A$,
  removeZAxis: S$,
  updateYAxisWidth: fM
} = cb.actions, dM = cb.reducer, vM = S([ye], (e) => ({
  top: e.top,
  bottom: e.bottom,
  left: e.left,
  right: e.right
})), hM = S([vM, Yt, Gt], (e, t, r) => {
  if (!(!e || t == null || r == null))
    return {
      x: e.left,
      y: e.top,
      width: Math.max(0, t - e.left - e.right),
      height: Math.max(0, r - e.top - e.bottom)
    };
}), sb = () => N(hM), pp = (e, t, r) => {
  var n = r ?? e;
  if (!Se(n))
    return Ne(n, t, 0);
}, pM = (e, t, r) => {
  var n = {}, i = e.filter(oo), a = e.filter((c) => c.stackId == null), o = i.reduce((c, s) => {
    var f = c[s.stackId];
    return f == null && (f = []), f.push(s), c[s.stackId] = f, c;
  }, n), u = Object.entries(o).map((c) => {
    var s, [f, d] = c, v = d.map((h) => h.dataKey), p = pp(t, r, (s = d[0]) === null || s === void 0 ? void 0 : s.barSize);
    return {
      stackId: f,
      dataKeys: v,
      barSize: p
    };
  }), l = a.map((c) => {
    var s = [c.dataKey].filter((d) => d != null), f = pp(t, r, c.barSize);
    return {
      stackId: void 0,
      dataKeys: s,
      barSize: f
    };
  });
  return [...u, ...l];
};
function mp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mp(Object(r), !0).forEach(function(n) {
      mM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mM(e, t, r) {
  return (t = yM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yM(e) {
  var t = gM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function gM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bM(e, t, r, n, i) {
  var a, o = n.length;
  if (!(o < 1)) {
    var u = Ne(e, r, 0, !0), l, c = [];
    if (q((a = n[0]) === null || a === void 0 ? void 0 : a.barSize)) {
      var s = !1, f = r / o, d = n.reduce((b, w) => b + (w.barSize || 0), 0);
      d += (o - 1) * u, d >= r && (d -= (o - 1) * u, u = 0), d >= r && f > 0 && (s = !0, f *= 0.9, d = o * f);
      var v = (r - d) / 2 >> 0, p = {
        offset: v - u,
        size: 0
      };
      l = n.reduce((b, w) => {
        var x, O = {
          stackId: w.stackId,
          dataKeys: w.dataKeys,
          position: {
            offset: p.offset + p.size + u,
            size: s ? f : (x = w.barSize) !== null && x !== void 0 ? x : 0
          }
        }, P = [...b, O];
        return p = O.position, P;
      }, c);
    } else {
      var h = Ne(t, r, 0, !0);
      r - 2 * h - (o - 1) * u <= 0 && (u = 0);
      var m = (r - 2 * h - (o - 1) * u) / o;
      m > 1 && (m >>= 0);
      var y = q(i) ? Math.min(m, i) : m;
      l = n.reduce((b, w, x) => [...b, {
        stackId: w.stackId,
        dataKeys: w.dataKeys,
        position: {
          offset: h + (m + u) * x + (m - y) / 2,
          size: y
        }
      }], c);
    }
    return l;
  }
}
var wM = (e, t, r, n, i, a, o) => {
  var u = Se(o) ? t : o, l = bM(r, n, i !== a ? i : a, e, u);
  return i !== a && l != null && (l = l.map((c) => xi(xi({}, c), {}, {
    position: xi(xi({}, c.position), {}, {
      offset: c.position.offset - i / 2
    })
  }))), l;
}, xM = (e, t) => {
  var r = Qc(t);
  if (!(!e || r == null || t == null)) {
    var {
      stackId: n
    } = t;
    if (n != null) {
      var i = e[n];
      if (i) {
        var {
          stackedData: a
        } = i;
        if (a)
          return a.find((o) => o.key === r);
      }
    }
  }
}, PM = (e, t) => {
  if (!(e == null || t == null)) {
    var r = e.find((n) => n.stackId === t.stackId && t.dataKey != null && n.dataKeys.includes(t.dataKey));
    if (r != null)
      return r.position;
  }
};
function OM(e, t) {
  return e && typeof e == "object" && "zIndex" in e && typeof e.zIndex == "number" && q(e.zIndex) ? e.zIndex : t;
}
var fb = (e) => {
  var {
    chartData: t
  } = e, r = ue(), n = Ze();
  return Te(() => n ? () => {
  } : (r(Ah(t)), () => {
    r(Ah(void 0));
  }), [t, r, n]), null;
}, yp = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}, db = Xe({
  name: "brush",
  initialState: yp,
  reducers: {
    setBrushSettings(e, t) {
      return t.payload == null ? yp : t.payload;
    }
  }
}), {
  setBrushSettings: _$
} = db.actions, AM = db.reducer;
function SM(e) {
  return (e % 180 + 180) % 180;
}
var _M = function(t) {
  var {
    width: r,
    height: n
  } = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = SM(i), o = a * Math.PI / 180, u = Math.atan(n / r), l = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(l);
}, EM = {
  dots: [],
  areas: [],
  lines: []
}, vb = Xe({
  name: "referenceElements",
  initialState: EM,
  reducers: {
    addDot: (e, t) => {
      e.dots.push(t.payload);
    },
    removeDot: (e, t) => {
      var r = yt(e).dots.findIndex((n) => n === t.payload);
      r !== -1 && e.dots.splice(r, 1);
    },
    addArea: (e, t) => {
      e.areas.push(t.payload);
    },
    removeArea: (e, t) => {
      var r = yt(e).areas.findIndex((n) => n === t.payload);
      r !== -1 && e.areas.splice(r, 1);
    },
    addLine: (e, t) => {
      e.lines.push(t.payload);
    },
    removeLine: (e, t) => {
      var r = yt(e).lines.findIndex((n) => n === t.payload);
      r !== -1 && e.lines.splice(r, 1);
    }
  }
}), {
  addDot: E$,
  removeDot: j$,
  addArea: I$,
  removeArea: C$,
  addLine: k$,
  removeLine: T$
} = vb.actions, jM = vb.reducer, IM = /* @__PURE__ */ Ve(void 0), CM = (e) => {
  var {
    children: t
  } = e, [r] = Fe("".concat(En("recharts"), "-clip")), n = sb();
  if (n == null)
    return null;
  var {
    x: i,
    y: a,
    width: o,
    height: u
  } = n;
  return /* @__PURE__ */ g.createElement(IM.Provider, {
    value: r
  }, /* @__PURE__ */ g.createElement("defs", null, /* @__PURE__ */ g.createElement("clipPath", {
    id: r
  }, /* @__PURE__ */ g.createElement("rect", {
    x: i,
    y: a,
    height: u,
    width: o
  }))), t);
};
function hb(e, t) {
  if (t < 1)
    return [];
  if (t === 1)
    return e;
  for (var r = [], n = 0; n < e.length; n += t) {
    var i = e[n];
    i !== void 0 && r.push(i);
  }
  return r;
}
function kM(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return _M(n, r);
}
function TM(e, t, r) {
  var n = r === "width", {
    x: i,
    y: a,
    width: o,
    height: u
  } = e;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + o : a + u
  } : {
    start: n ? i + o : a + u,
    end: n ? i : a
  };
}
function Fn(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function MM(e, t) {
  return hb(e, t + 1);
}
function DM(e, t, r, n, i) {
  for (var a = (n || []).slice(), {
    start: o,
    end: u
  } = t, l = 0, c = 1, s = o, f = function() {
    var p = n?.[l];
    if (p === void 0)
      return {
        v: hb(n, c)
      };
    var h = l, m, y = () => (m === void 0 && (m = r(p, h)), m), b = p.coordinate, w = l === 0 || Fn(e, b, y, s, u);
    w || (l = 0, s = o, c += 1), w && (s = b + e * (y() / 2 + i), l += c);
  }, d; c <= a.length; )
    if (d = f(), d) return d.v;
  return [];
}
function NM(e, t, r, n, i) {
  var a = (n || []).slice(), o = a.length;
  if (o === 0)
    return [];
  for (var {
    start: u,
    end: l
  } = t, c = 1; c <= o; c++) {
    for (var s = (o - 1) % c, f = u, d = !0, v = function() {
      var x = n[h];
      if (x == null)
        return 0;
      var O = h, P, A = () => (P === void 0 && (P = r(x, O)), P), _ = x.coordinate, C = h === s || Fn(e, _, A, f, l);
      if (!C)
        return d = !1, 1;
      C && (f = _ + e * (A() / 2 + i));
    }, p, h = s; h < o && (p = v(), !(p !== 0 && p === 1)); h += c)
      ;
    if (d) {
      for (var m = [], y = s; y < o; y += c) {
        var b = n[y];
        b != null && m.push(b);
      }
      return m;
    }
  }
  return [];
}
function gp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gp(Object(r), !0).forEach(function(n) {
      $M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $M(e, t, r) {
  return (t = RM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RM(e) {
  var t = LM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function LM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zM(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, {
    start: u
  } = t, {
    end: l
  } = t, c = function(d) {
    var v = a[d];
    if (v == null)
      return 1;
    var p = v, h, m = () => (h === void 0 && (h = r(v, d)), h);
    if (d === o - 1) {
      var y = e * (p.coordinate + e * m() / 2 - l);
      a[d] = p = Me(Me({}, p), {}, {
        tickCoord: y > 0 ? p.coordinate - y * e : p.coordinate
      });
    } else
      a[d] = p = Me(Me({}, p), {}, {
        tickCoord: p.coordinate
      });
    if (p.tickCoord != null) {
      var b = Fn(e, p.tickCoord, m, u, l);
      b && (l = p.tickCoord - e * (m() / 2 + i), a[d] = Me(Me({}, p), {}, {
        isShow: !0
      }));
    }
  }, s = o - 1; s >= 0; s--)
    c(s);
  return a;
}
function BM(e, t, r, n, i, a) {
  var o = (n || []).slice(), u = o.length, {
    start: l,
    end: c
  } = t;
  if (a) {
    var s = n[u - 1];
    if (s != null) {
      var f = r(s, u - 1), d = e * (s.coordinate + e * f / 2 - c);
      if (o[u - 1] = s = Me(Me({}, s), {}, {
        tickCoord: d > 0 ? s.coordinate - d * e : s.coordinate
      }), s.tickCoord != null) {
        var v = Fn(e, s.tickCoord, () => f, l, c);
        v && (c = s.tickCoord - e * (f / 2 + i), o[u - 1] = Me(Me({}, s), {}, {
          isShow: !0
        }));
      }
    }
  }
  for (var p = a ? u - 1 : u, h = function(b) {
    var w = o[b];
    if (w == null)
      return 1;
    var x = w, O, P = () => (O === void 0 && (O = r(w, b)), O);
    if (b === 0) {
      var A = e * (x.coordinate - e * P() / 2 - l);
      o[b] = x = Me(Me({}, x), {}, {
        tickCoord: A < 0 ? x.coordinate - A * e : x.coordinate
      });
    } else
      o[b] = x = Me(Me({}, x), {}, {
        tickCoord: x.coordinate
      });
    if (x.tickCoord != null) {
      var _ = Fn(e, x.tickCoord, P, l, c);
      _ && (l = x.tickCoord + e * (P() / 2 + i), o[b] = Me(Me({}, x), {}, {
        isShow: !0
      }));
    }
  }, m = 0; m < p; m++)
    h(m);
  return o;
}
function Ls(e, t, r) {
  var {
    tick: n,
    ticks: i,
    viewBox: a,
    minTickGap: o,
    orientation: u,
    interval: l,
    tickFormatter: c,
    unit: s,
    angle: f
  } = e;
  if (!i || !i.length || !n)
    return [];
  if (D(l) || Ya.isSsr) {
    var d;
    return (d = MM(i, D(l) ? l : 0)) !== null && d !== void 0 ? d : [];
  }
  var v = [], p = u === "top" || u === "bottom" ? "width" : "height", h = s && p === "width" ? Sn(s, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, m = (O, P) => {
    var A = typeof c == "function" ? c(O.value, P) : O.value;
    return p === "width" ? kM(Sn(A, {
      fontSize: t,
      letterSpacing: r
    }), h, f) : Sn(A, {
      fontSize: t,
      letterSpacing: r
    })[p];
  }, y = i[0], b = i[1], w = i.length >= 2 && y != null && b != null ? Ae(b.coordinate - y.coordinate) : 1, x = TM(a, w, p);
  return l === "equidistantPreserveStart" ? DM(w, x, m, i, o) : l === "equidistantPreserveEnd" ? NM(w, x, m, i, o) : (l === "preserveStart" || l === "preserveStartEnd" ? v = BM(w, x, m, i, o, l === "preserveStartEnd") : v = zM(w, x, m, i, o), v.filter((O) => O.isShow));
}
var FM = (e) => {
  var {
    ticks: t,
    label: r,
    labelGapWithTick: n = 5,
    // Default gap between label and tick
    tickSize: i = 0,
    tickMargin: a = 0
  } = e, o = 0;
  if (t) {
    Array.from(t).forEach((s) => {
      if (s) {
        var f = s.getBoundingClientRect();
        f.width > o && (o = f.width);
      }
    });
    var u = r ? r.getBoundingClientRect().width : 0, l = i + a, c = o + l + u + (r ? n : 0);
    return Math.round(c);
  }
  return 0;
}, qM = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType"];
function WM(e, t) {
  if (e == null) return {};
  var r, n, i = KM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function KM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Mr() {
  return Mr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mr.apply(null, arguments);
}
function bp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bp(Object(r), !0).forEach(function(n) {
      UM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function UM(e, t, r) {
  return (t = HM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HM(e) {
  var t = YM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function YM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zt = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
  zIndex: ke.axis
};
function GM(e) {
  var {
    x: t,
    y: r,
    width: n,
    height: i,
    orientation: a,
    mirror: o,
    axisLine: u,
    otherSvgProps: l
  } = e;
  if (!u)
    return null;
  var c = ce(ce(ce({}, l), gt(u)), {}, {
    fill: "none"
  });
  if (a === "top" || a === "bottom") {
    var s = +(a === "top" && !o || a === "bottom" && o);
    c = ce(ce({}, c), {}, {
      x1: t,
      y1: r + s * i,
      x2: t + n,
      y2: r + s * i
    });
  } else {
    var f = +(a === "left" && !o || a === "right" && o);
    c = ce(ce({}, c), {}, {
      x1: t + f * n,
      y1: r,
      x2: t + f * n,
      y2: r + i
    });
  }
  return /* @__PURE__ */ g.createElement("line", Mr({}, c, {
    className: Z("recharts-cartesian-axis-line", _r(u, "className"))
  }));
}
function VM(e, t, r, n, i, a, o, u, l) {
  var c, s, f, d, v, p, h = u ? -1 : 1, m = e.tickSize || o, y = D(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (a) {
    case "top":
      c = s = e.coordinate, d = r + +!u * i, f = d - h * m, p = f - h * l, v = y;
      break;
    case "left":
      f = d = e.coordinate, s = t + +!u * n, c = s - h * m, v = c - h * l, p = y;
      break;
    case "right":
      f = d = e.coordinate, s = t + +u * n, c = s + h * m, v = c + h * l, p = y;
      break;
    default:
      c = s = e.coordinate, d = r + +u * i, f = d + h * m, p = f + h * l, v = y;
      break;
  }
  return {
    line: {
      x1: c,
      y1: f,
      x2: s,
      y2: d
    },
    tick: {
      x: v,
      y: p
    }
  };
}
function XM(e, t) {
  switch (e) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function ZM(e, t) {
  switch (e) {
    case "left":
    case "right":
      return "middle";
    case "top":
      return t ? "start" : "end";
    default:
      return t ? "end" : "start";
  }
}
function QM(e) {
  var {
    option: t,
    tickProps: r,
    value: n
  } = e, i, a = Z(r.className, "recharts-cartesian-axis-tick-value");
  if (/* @__PURE__ */ g.isValidElement(t))
    i = /* @__PURE__ */ g.cloneElement(t, ce(ce({}, r), {}, {
      className: a
    }));
  else if (typeof t == "function")
    i = t(ce(ce({}, r), {}, {
      className: a
    }));
  else {
    var o = "recharts-cartesian-axis-tick-value";
    typeof t != "boolean" && (o = Z(o, tb(t))), i = /* @__PURE__ */ g.createElement(mo, Mr({}, r, {
      className: o
    }), n);
  }
  return i;
}
var JM = /* @__PURE__ */ _e((e, t) => {
  var {
    ticks: r = [],
    tick: n,
    tickLine: i,
    stroke: a,
    tickFormatter: o,
    unit: u,
    padding: l,
    tickTextProps: c,
    orientation: s,
    mirror: f,
    x: d,
    y: v,
    width: p,
    height: h,
    tickSize: m,
    tickMargin: y,
    fontSize: b,
    letterSpacing: w,
    getTicksConfig: x,
    events: O,
    axisType: P
  } = e, A = Ls(ce(ce({}, x), {}, {
    ticks: r
  }), b, w), _ = XM(s, f), C = ZM(s, f), T = gt(x), k = _n(n), E = {};
  typeof i == "object" && (E = i);
  var R = ce(ce({}, T), {}, {
    fill: "none"
  }, E), $ = A.map((L) => ce({
    entry: L
  }, VM(L, d, v, p, h, s, m, f, y))), z = $.map((L) => {
    var {
      entry: Y,
      line: U
    } = L;
    return /* @__PURE__ */ g.createElement(qe, {
      className: "recharts-cartesian-axis-tick",
      key: "tick-".concat(Y.value, "-").concat(Y.coordinate, "-").concat(Y.tickCoord)
    }, i && /* @__PURE__ */ g.createElement("line", Mr({}, R, U, {
      className: Z("recharts-cartesian-axis-tick-line", _r(i, "className"))
    })));
  }), F = $.map((L, Y) => {
    var U, Q, {
      entry: we,
      tick: Le
    } = L, vt = ce(ce(ce(ce({
      verticalAnchor: C
    }, T), {}, {
      textAnchor: _,
      stroke: "none",
      fill: a
    }, Le), {}, {
      index: Y,
      payload: we,
      visibleTicksCount: A.length,
      tickFormatter: o,
      padding: l
    }, c), {}, {
      angle: (U = (Q = c?.angle) !== null && Q !== void 0 ? Q : T.angle) !== null && U !== void 0 ? U : 0
    }), Ke = ce(ce({}, vt), k);
    return /* @__PURE__ */ g.createElement(qe, Mr({
      className: "recharts-cartesian-axis-tick-label",
      key: "tick-label-".concat(we.value, "-").concat(we.coordinate, "-").concat(we.tickCoord)
    }, Ea(O, we, Y)), n && /* @__PURE__ */ g.createElement(QM, {
      option: n,
      tickProps: Ke,
      value: "".concat(typeof o == "function" ? o(we.value, Y) : we.value).concat(u || "")
    }));
  });
  return /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-axis-ticks recharts-".concat(P, "-ticks")
  }, F.length > 0 && /* @__PURE__ */ g.createElement(Pt, {
    zIndex: ke.label
  }, /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-axis-tick-labels recharts-".concat(P, "-tick-labels"),
    ref: t
  }, F)), z.length > 0 && /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-axis-tick-lines recharts-".concat(P, "-tick-lines")
  }, z));
}), eD = /* @__PURE__ */ _e((e, t) => {
  var {
    axisLine: r,
    width: n,
    height: i,
    className: a,
    hide: o,
    ticks: u,
    axisType: l
  } = e, c = WM(e, qM), [s, f] = Fe(""), [d, v] = Fe(""), p = H(null);
  zp(t, () => ({
    getCalculatedWidth: () => {
      var m;
      return FM({
        ticks: p.current,
        label: (m = e.labelRef) === null || m === void 0 ? void 0 : m.current,
        labelGapWithTick: 5,
        tickSize: e.tickSize,
        tickMargin: e.tickMargin
      });
    }
  }));
  var h = re((m) => {
    if (m) {
      var y = m.getElementsByClassName("recharts-cartesian-axis-tick-value");
      p.current = y;
      var b = y[0];
      if (b) {
        var w = window.getComputedStyle(b), x = w.fontSize, O = w.letterSpacing;
        (x !== s || O !== d) && (f(x), v(O));
      }
    }
  }, [s, d]);
  return o || n != null && n <= 0 || i != null && i <= 0 ? null : /* @__PURE__ */ g.createElement(Pt, {
    zIndex: e.zIndex
  }, /* @__PURE__ */ g.createElement(qe, {
    className: Z("recharts-cartesian-axis", a)
  }, /* @__PURE__ */ g.createElement(GM, {
    x: e.x,
    y: e.y,
    width: n,
    height: i,
    orientation: e.orientation,
    mirror: e.mirror,
    axisLine: r,
    otherSvgProps: gt(e)
  }), /* @__PURE__ */ g.createElement(JM, {
    ref: h,
    axisType: l,
    events: c,
    fontSize: s,
    getTicksConfig: e,
    height: e.height,
    letterSpacing: d,
    mirror: e.mirror,
    orientation: e.orientation,
    padding: e.padding,
    stroke: e.stroke,
    tick: e.tick,
    tickFormatter: e.tickFormatter,
    tickLine: e.tickLine,
    tickMargin: e.tickMargin,
    tickSize: e.tickSize,
    tickTextProps: e.tickTextProps,
    ticks: u,
    unit: e.unit,
    width: e.width,
    x: e.x,
    y: e.y
  }), /* @__PURE__ */ g.createElement(ok, {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    lowerWidth: e.width,
    upperWidth: e.width
  }, /* @__PURE__ */ g.createElement(mk, {
    label: e.label,
    labelRef: e.labelRef
  }), e.children)));
}), zs = /* @__PURE__ */ g.forwardRef((e, t) => {
  var r = Re(e, zt);
  return /* @__PURE__ */ g.createElement(eD, Mr({}, r, {
    ref: t
  }));
});
zs.displayName = "CartesianAxis";
var tD = ["x1", "y1", "x2", "y2", "key"], rD = ["offset"], nD = ["xAxisId", "yAxisId"], iD = ["xAxisId", "yAxisId"];
function wp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function De(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wp(Object(r), !0).forEach(function(n) {
      aD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aD(e, t, r) {
  return (t = oD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oD(e) {
  var t = uD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function uD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xr() {
  return xr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xr.apply(null, arguments);
}
function ga(e, t) {
  if (e == null) return {};
  var r, n, i = lD(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function lD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var cD = (e) => {
  var {
    fill: t
  } = e;
  if (!t || t === "none")
    return null;
  var {
    fillOpacity: r,
    x: n,
    y: i,
    width: a,
    height: o,
    ry: u
  } = e;
  return /* @__PURE__ */ g.createElement("rect", {
    x: n,
    y: i,
    ry: u,
    width: a,
    height: o,
    stroke: "none",
    fill: t,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg"
  });
};
function pb(e) {
  var {
    option: t,
    lineItemProps: r
  } = e, n;
  if (/* @__PURE__ */ g.isValidElement(t))
    n = /* @__PURE__ */ g.cloneElement(t, r);
  else if (typeof t == "function")
    n = t(r);
  else {
    var i, {
      x1: a,
      y1: o,
      x2: u,
      y2: l,
      key: c
    } = r, s = ga(r, tD), f = (i = gt(s)) !== null && i !== void 0 ? i : {}, {
      offset: d
    } = f, v = ga(f, rD);
    n = /* @__PURE__ */ g.createElement("line", xr({}, v, {
      x1: a,
      y1: o,
      x2: u,
      y2: l,
      fill: "none",
      key: c
    }));
  }
  return n;
}
function sD(e) {
  var {
    x: t,
    width: r,
    horizontal: n = !0,
    horizontalPoints: i
  } = e;
  if (!n || !i || !i.length)
    return null;
  var {
    xAxisId: a,
    yAxisId: o
  } = e, u = ga(e, nD), l = i.map((c, s) => {
    var f = De(De({}, u), {}, {
      x1: t,
      y1: c,
      x2: t + r,
      y2: c,
      key: "line-".concat(s),
      index: s
    });
    return /* @__PURE__ */ g.createElement(pb, {
      key: "line-".concat(s),
      option: n,
      lineItemProps: f
    });
  });
  return /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, l);
}
function fD(e) {
  var {
    y: t,
    height: r,
    vertical: n = !0,
    verticalPoints: i
  } = e;
  if (!n || !i || !i.length)
    return null;
  var {
    xAxisId: a,
    yAxisId: o
  } = e, u = ga(e, iD), l = i.map((c, s) => {
    var f = De(De({}, u), {}, {
      x1: c,
      y1: t,
      x2: c,
      y2: t + r,
      key: "line-".concat(s),
      index: s
    });
    return /* @__PURE__ */ g.createElement(pb, {
      option: n,
      lineItemProps: f,
      key: "line-".concat(s)
    });
  });
  return /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, l);
}
function dD(e) {
  var {
    horizontalFill: t,
    fillOpacity: r,
    x: n,
    y: i,
    width: a,
    height: o,
    horizontalPoints: u,
    horizontal: l = !0
  } = e;
  if (!l || !t || !t.length || u == null)
    return null;
  var c = u.map((f) => Math.round(f + i - i)).sort((f, d) => f - d);
  i !== c[0] && c.unshift(0);
  var s = c.map((f, d) => {
    var v = c[d + 1], p = v == null, h = p ? i + o - f : v - f;
    if (h <= 0)
      return null;
    var m = d % t.length;
    return /* @__PURE__ */ g.createElement("rect", {
      key: "react-".concat(d),
      y: f,
      x: n,
      height: h,
      width: a,
      stroke: "none",
      fill: t[m],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, s);
}
function vD(e) {
  var {
    vertical: t = !0,
    verticalFill: r,
    fillOpacity: n,
    x: i,
    y: a,
    width: o,
    height: u,
    verticalPoints: l
  } = e;
  if (!t || !r || !r.length)
    return null;
  var c = l.map((f) => Math.round(f + i - i)).sort((f, d) => f - d);
  i !== c[0] && c.unshift(0);
  var s = c.map((f, d) => {
    var v = c[d + 1], p = v == null, h = p ? i + o - f : v - f;
    if (h <= 0)
      return null;
    var m = d % r.length;
    return /* @__PURE__ */ g.createElement("rect", {
      key: "react-".concat(d),
      x: f,
      y: a,
      width: h,
      height: u,
      stroke: "none",
      fill: r[m],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, s);
}
var hD = (e, t) => {
  var {
    xAxis: r,
    width: n,
    height: i,
    offset: a
  } = e;
  return ny(Ls(De(De(De({}, zt), r), {}, {
    ticks: iy(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), a.left, a.left + a.width, t);
}, pD = (e, t) => {
  var {
    yAxis: r,
    width: n,
    height: i,
    offset: a
  } = e;
  return ny(Ls(De(De(De({}, zt), r), {}, {
    ticks: iy(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), a.top, a.top + a.height, t);
}, mD = {
  horizontal: !0,
  vertical: !0,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: [],
  xAxisId: 0,
  yAxisId: 0,
  syncWithTicks: !1,
  zIndex: ke.grid
};
function yD(e) {
  var t = dy(), r = vy(), n = fy(), i = De(De({}, Re(e, mD)), {}, {
    x: D(e.x) ? e.x : n.left,
    y: D(e.y) ? e.y : n.top,
    width: D(e.width) ? e.width : n.width,
    height: D(e.height) ? e.height : n.height
  }), {
    xAxisId: a,
    yAxisId: o,
    x: u,
    y: l,
    width: c,
    height: s,
    syncWithTicks: f,
    horizontalValues: d,
    verticalValues: v
  } = i, p = Ze(), h = N((C) => dh(C, "xAxis", a, p)), m = N((C) => dh(C, "yAxis", o, p));
  if (!Tt(c) || !Tt(s) || !D(u) || !D(l))
    return null;
  var y = i.verticalCoordinatesGenerator || hD, b = i.horizontalCoordinatesGenerator || pD, {
    horizontalPoints: w,
    verticalPoints: x
  } = i;
  if ((!w || !w.length) && typeof b == "function") {
    var O = d && d.length, P = b({
      yAxis: m ? De(De({}, m), {}, {
        ticks: O ? d : m.ticks
      }) : void 0,
      width: t ?? c,
      height: r ?? s,
      offset: n
    }, O ? !0 : f);
    Ui(Array.isArray(P), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof P, "]")), Array.isArray(P) && (w = P);
  }
  if ((!x || !x.length) && typeof y == "function") {
    var A = v && v.length, _ = y({
      xAxis: h ? De(De({}, h), {}, {
        ticks: A ? v : h.ticks
      }) : void 0,
      width: t ?? c,
      height: r ?? s,
      offset: n
    }, A ? !0 : f);
    Ui(Array.isArray(_), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof _, "]")), Array.isArray(_) && (x = _);
  }
  return /* @__PURE__ */ g.createElement(Pt, {
    zIndex: i.zIndex
  }, /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ g.createElement(cD, {
    fill: i.fill,
    fillOpacity: i.fillOpacity,
    x: i.x,
    y: i.y,
    width: i.width,
    height: i.height,
    ry: i.ry
  }), /* @__PURE__ */ g.createElement(dD, xr({}, i, {
    horizontalPoints: w
  })), /* @__PURE__ */ g.createElement(vD, xr({}, i, {
    verticalPoints: x
  })), /* @__PURE__ */ g.createElement(sD, xr({}, i, {
    offset: n,
    horizontalPoints: w,
    xAxis: h,
    yAxis: m
  })), /* @__PURE__ */ g.createElement(fD, xr({}, i, {
    offset: n,
    verticalPoints: x,
    xAxis: h,
    yAxis: m
  }))));
}
yD.displayName = "CartesianGrid";
var gD = {}, mb = Xe({
  name: "errorBars",
  initialState: gD,
  reducers: {
    addErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] || (e[r] = []), e[r].push(n);
    },
    replaceErrorBar: (e, t) => {
      var {
        itemId: r,
        prev: n,
        next: i
      } = t.payload;
      e[r] && (e[r] = e[r].map((a) => a.dataKey === n.dataKey && a.direction === n.direction ? i : a));
    },
    removeErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] && (e[r] = e[r].filter((i) => i.dataKey !== n.dataKey || i.direction !== n.direction));
    }
  }
}), {
  addErrorBar: M$,
  replaceErrorBar: D$,
  removeErrorBar: N$
} = mb.actions, bD = mb.reducer, wD = ["children"];
function xD(e, t) {
  if (e == null) return {};
  var r, n, i = PD(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function PD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var OD = {
  data: [],
  xAxisId: "xAxis-0",
  yAxisId: "yAxis-0",
  dataPointFormatter: () => ({
    x: 0,
    y: 0,
    value: 0
  }),
  errorBarOffset: 0
}, AD = /* @__PURE__ */ Ve(OD);
function SD(e) {
  var {
    children: t
  } = e, r = xD(e, wD);
  return /* @__PURE__ */ g.createElement(AD.Provider, {
    value: r
  }, t);
}
function yb(e, t) {
  var r, n, i = N((c) => Zt(c, e)), a = N((c) => Qt(c, t)), o = (r = i?.allowDataOverflow) !== null && r !== void 0 ? r : xe.allowDataOverflow, u = (n = a?.allowDataOverflow) !== null && n !== void 0 ? n : Pe.allowDataOverflow, l = o || u;
  return {
    needClip: l,
    needClipX: o,
    needClipY: u
  };
}
function _D(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    clipPathId: n
  } = e, i = sb(), {
    needClipX: a,
    needClipY: o,
    needClip: u
  } = yb(t, r);
  if (!u || !i)
    return null;
  var {
    x: l,
    y: c,
    width: s,
    height: f
  } = i;
  return /* @__PURE__ */ g.createElement("clipPath", {
    id: "clipPath-".concat(n)
  }, /* @__PURE__ */ g.createElement("rect", {
    x: a ? l : l - s / 2,
    y: o ? c : c - f / 2,
    width: a ? s : s * 2,
    height: o ? f : f * 2
  }));
}
var Xu = { exports: {} }, Zu = {};
var xp;
function ED() {
  if (xp) return Zu;
  xp = 1;
  var e = Ql;
  function t(l, c) {
    return l === c && (l !== 0 || 1 / l === 1 / c) || l !== l && c !== c;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, a = e.useEffect, o = e.useMemo, u = e.useDebugValue;
  return Zu.useSyncExternalStoreWithSelector = function(l, c, s, f, d) {
    var v = i(null);
    if (v.current === null) {
      var p = { hasValue: !1, value: null };
      v.current = p;
    } else p = v.current;
    v = o(
      function() {
        function m(O) {
          if (!y) {
            if (y = !0, b = O, O = f(O), d !== void 0 && p.hasValue) {
              var P = p.value;
              if (d(P, O))
                return w = P;
            }
            return w = O;
          }
          if (P = w, r(b, O)) return P;
          var A = f(O);
          return d !== void 0 && d(P, A) ? (b = O, P) : (b = O, w = A);
        }
        var y = !1, b, w, x = s === void 0 ? null : s;
        return [
          function() {
            return m(c());
          },
          x === null ? void 0 : function() {
            return m(x());
          }
        ];
      },
      [c, s, f, d]
    );
    var h = n(l, v[0], v[1]);
    return a(
      function() {
        p.hasValue = !0, p.value = h;
      },
      [h]
    ), u(h), h;
  }, Zu;
}
var Pp;
function jD() {
  return Pp || (Pp = 1, Xu.exports = ED()), Xu.exports;
}
jD();
function ID(e) {
  e();
}
function CD() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      ID(() => {
        let r = e;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; )
        r.push(n), n = n.next;
      return r;
    },
    subscribe(r) {
      let n = !0;
      const i = t = {
        callback: r,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : e = i, function() {
        !n || e === null || (n = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
      };
    }
  };
}
var Op = {
  notify() {
  },
  get: () => []
};
function kD(e, t) {
  let r, n = Op, i = 0, a = !1;
  function o(h) {
    s();
    const m = n.subscribe(h);
    let y = !1;
    return () => {
      y || (y = !0, m(), f());
    };
  }
  function u() {
    n.notify();
  }
  function l() {
    p.onStateChange && p.onStateChange();
  }
  function c() {
    return a;
  }
  function s() {
    i++, r || (r = e.subscribe(l), n = CD());
  }
  function f() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = Op);
  }
  function d() {
    a || (a = !0, s());
  }
  function v() {
    a && (a = !1, f());
  }
  const p = {
    addNestedSub: o,
    notifyNestedSubs: u,
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: d,
    tryUnsubscribe: v,
    getListeners: () => n
  };
  return p;
}
var TD = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", MD = /* @__PURE__ */ TD(), DD = () => typeof navigator < "u" && navigator.product === "ReactNative", ND = /* @__PURE__ */ DD(), $D = () => MD || ND ? g.useLayoutEffect : g.useEffect, RD = /* @__PURE__ */ $D();
function Ap(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function LD(e, t) {
  if (Ap(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let i = 0; i < r.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !Ap(e[r[i]], t[r[i]]))
      return !1;
  return !0;
}
var zD = /* @__PURE__ */ Symbol.for("react-redux-context"), BD = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function FD() {
  if (!g.createContext) return {};
  const e = BD[zD] ??= /* @__PURE__ */ new Map();
  let t = e.get(g.createContext);
  return t || (t = g.createContext(
    null
  ), e.set(g.createContext, t)), t;
}
var qD = /* @__PURE__ */ FD();
function WD(e) {
  const { children: t, context: r, serverState: n, store: i } = e, a = g.useMemo(() => {
    const l = kD(i);
    return {
      store: i,
      subscription: l,
      getServerState: n ? () => n : void 0
    };
  }, [i, n]), o = g.useMemo(() => i.getState(), [i]);
  RD(() => {
    const { subscription: l } = a;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), o !== i.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [a, o]);
  const u = r || qD;
  return /* @__PURE__ */ g.createElement(u.Provider, { value: a }, t);
}
var KD = WD, UD = /* @__PURE__ */ new Set([
  "axisLine",
  "tickLine",
  "activeBar",
  "activeDot",
  "activeLabel",
  "activeShape",
  "allowEscapeViewBox",
  "background",
  "cursor",
  "dot",
  "label",
  "line",
  "margin",
  "padding",
  "position",
  "shape",
  "style",
  "tick",
  "wrapperStyle",
  // radius can be an array of 4 numbers, easy to compare shallowly
  "radius"
]);
function HD(e, t) {
  return e == null && t == null ? !0 : typeof e == "number" && typeof t == "number" ? e === t || e !== e && t !== t : e === t;
}
function Bs(e, t) {
  var r = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (var n of r)
    if (UD.has(n)) {
      if (e[n] == null && t[n] == null)
        continue;
      if (!LD(e[n], t[n]))
        return !1;
    } else if (!HD(e[n], t[n]))
      return !1;
  return !0;
}
function $r(e, t) {
  var r, n;
  return (r = (n = e.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.xAxisId) !== null && r !== void 0 ? r : lb;
}
function Rr(e, t) {
  var r, n;
  return (r = (n = e.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.yAxisId) !== null && r !== void 0 ? r : lb;
}
var YD = "Invariant failed";
function GD(e, t) {
  throw new Error(YD);
}
function Wl() {
  return Wl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wl.apply(null, arguments);
}
function ba(e) {
  return /* @__PURE__ */ g.createElement(ib, Wl({
    shapeType: "rectangle",
    activeClassName: "recharts-active-bar"
  }, e));
}
var VD = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (n, i) => {
    if (D(t)) return t;
    var a = D(n) || Se(n);
    return a ? t(n, i) : (a || GD(), r);
  };
}, XD = (e, t, r) => r, ZD = (e, t) => t, ai = S([ts, ZD], (e, t) => e.filter((r) => r.type === "bar").find((r) => r.id === t)), QD = S([ai], (e) => e?.maxBarSize), JD = (e, t, r, n) => n, eN = S([G, ts, $r, Rr, XD], (e, t, r, n, i) => t.filter((a) => e === "horizontal" ? a.xAxisId === r : a.yAxisId === n).filter((a) => a.isPanorama === i).filter((a) => a.hide === !1).filter((a) => a.type === "bar")), tN = (e, t, r) => {
  var n = G(e), i = $r(e, t), a = Rr(e, t);
  if (!(i == null || a == null))
    return n === "horizontal" ? Rl(e, "yAxis", a, r) : Rl(e, "xAxis", i, r);
}, rN = (e, t) => {
  var r = G(e), n = $r(e, t), i = Rr(e, t);
  if (!(n == null || i == null))
    return r === "horizontal" ? fh(e, "xAxis", n) : fh(e, "yAxis", i);
}, nN = S([eN, tE, rN], pM), iN = (e, t, r) => {
  var n, i, a = ai(e, t);
  if (a == null)
    return 0;
  var o = $r(e, t), u = Rr(e, t);
  if (o == null || u == null)
    return 0;
  var l = G(e), c = jg(e), {
    maxBarSize: s
  } = a, f = Se(s) ? c : s, d, v;
  return l === "horizontal" ? (d = Jr(e, "xAxis", o, r), v = Qr(e, "xAxis", o, r)) : (d = Jr(e, "yAxis", u, r), v = Qr(e, "yAxis", u, r)), (n = (i = Ki(d, v, !0)) !== null && i !== void 0 ? i : f) !== null && n !== void 0 ? n : 0;
}, gb = (e, t, r) => {
  var n = G(e), i = $r(e, t), a = Rr(e, t);
  if (!(i == null || a == null)) {
    var o, u;
    return n === "horizontal" ? (o = Jr(e, "xAxis", i, r), u = Qr(e, "xAxis", i, r)) : (o = Jr(e, "yAxis", a, r), u = Qr(e, "yAxis", a, r)), Ki(o, u);
  }
}, aN = S([nN, jg, eE, Ig, iN, gb, QD], wM), oN = (e, t, r) => {
  var n = $r(e, t);
  if (n != null)
    return Jr(e, "xAxis", n, r);
}, uN = (e, t, r) => {
  var n = Rr(e, t);
  if (n != null)
    return Jr(e, "yAxis", n, r);
}, lN = (e, t, r) => {
  var n = $r(e, t);
  if (n != null)
    return Qr(e, "xAxis", n, r);
}, cN = (e, t, r) => {
  var n = Rr(e, t);
  if (n != null)
    return Qr(e, "yAxis", n, r);
}, sN = S([aN, ai], PM), fN = S([tN, ai], xM), dN = S([ye, pc, oN, uN, lN, cN, sN, G, H_, gb, fN, ai, JD], (e, t, r, n, i, a, o, u, l, c, s, f, d) => {
  var {
    chartData: v,
    dataStartIndex: p,
    dataEndIndex: h
  } = l;
  if (!(f == null || o == null || t == null || u !== "horizontal" && u !== "vertical" || r == null || n == null || i == null || a == null || c == null)) {
    var {
      data: m
    } = f, y;
    if (m != null && m.length > 0 ? y = m : y = v?.slice(p, h + 1), y != null)
      return BN({
        layout: u,
        barSettings: f,
        pos: o,
        parentViewBox: t,
        bandSize: c,
        xAxis: r,
        yAxis: n,
        xAxisTicks: i,
        yAxisTicks: a,
        stackedData: s,
        displayedData: y,
        offset: e,
        cells: d,
        dataStartIndex: p
      });
  }
}), vN = ["index"];
function Kl() {
  return Kl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kl.apply(null, arguments);
}
function hN(e, t) {
  if (e == null) return {};
  var r, n, i = pN(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function pN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var bb = /* @__PURE__ */ Ve(void 0), mN = (e) => {
  var t = ft(bb);
  if (t != null)
    return t.stackId;
  if (e != null)
    return tO(e);
}, yN = (e, t) => "recharts-bar-stack-clip-path-".concat(e, "-").concat(t), gN = (e) => {
  var t = ft(bb);
  if (t != null) {
    var {
      stackId: r
    } = t;
    return "url(#".concat(yN(r, e), ")");
  }
}, wb = (e) => {
  var {
    index: t
  } = e, r = hN(e, vN), n = gN(t);
  return /* @__PURE__ */ g.createElement(qe, Kl({
    className: "recharts-bar-stack-layer",
    clipPath: n
  }, r));
}, bN = ["onMouseEnter", "onMouseLeave", "onClick"], wN = ["value", "background", "tooltipPosition"], xN = ["id"], PN = ["onMouseEnter", "onClick", "onMouseLeave"];
function Ht() {
  return Ht = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ht.apply(null, arguments);
}
function Sp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sp(Object(r), !0).forEach(function(n) {
      ON(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ON(e, t, r) {
  return (t = AN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AN(e) {
  var t = SN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function SN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wa(e, t) {
  if (e == null) return {};
  var r, n, i = _N(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function _N(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var EN = (e) => {
  var {
    dataKey: t,
    name: r,
    fill: n,
    legendType: i,
    hide: a
  } = e;
  return [{
    inactive: a,
    dataKey: t,
    type: i,
    color: n,
    value: La(r, t),
    payload: e
  }];
}, jN = /* @__PURE__ */ g.memo((e) => {
  var {
    dataKey: t,
    stroke: r,
    strokeWidth: n,
    fill: i,
    name: a,
    hide: o,
    unit: u,
    tooltipType: l,
    id: c
  } = e, s = {
    dataDefinedOnItem: void 0,
    getPosition: en,
    settings: {
      stroke: r,
      strokeWidth: n,
      fill: i,
      dataKey: t,
      nameKey: void 0,
      name: La(a, t),
      hide: o,
      type: l,
      color: i,
      unit: u,
      graphicalItemId: c
    }
  };
  return /* @__PURE__ */ g.createElement(ab, {
    tooltipEntrySettings: s
  });
});
function IN(e) {
  var t = N(Tr), {
    data: r,
    dataKey: n,
    background: i,
    allOtherBarProps: a
  } = e, {
    onMouseEnter: o,
    onMouseLeave: u,
    onClick: l
  } = a, c = wa(a, bN), s = Ns(o, n, a.id), f = $s(u), d = Rs(l, n, a.id);
  if (!i || r == null)
    return null;
  var v = _n(i);
  return /* @__PURE__ */ g.createElement(Pt, {
    zIndex: OM(i, ke.barBackground)
  }, r.map((p, h) => {
    var {
      value: m,
      background: y,
      tooltipPosition: b
    } = p, w = wa(p, wN);
    if (!y)
      return null;
    var x = s(p, h), O = f(p, h), P = d(p, h), A = ze(ze(ze(ze(ze({
      option: i,
      isActive: String(h) === t
    }, w), {}, {
      // @ts-expect-error backgroundProps is contributing unknown props
      fill: "#eee"
    }, y), v), Ea(c, p, h)), {}, {
      onMouseEnter: x,
      onMouseLeave: O,
      onClick: P,
      dataKey: n,
      index: h,
      className: "recharts-bar-background-rectangle"
    });
    return /* @__PURE__ */ g.createElement(ba, Ht({
      key: "background-bar-".concat(h)
    }, A));
  }));
}
function CN(e) {
  var {
    showLabels: t,
    children: r,
    rects: n
  } = e, i = n?.map((a) => {
    var o = {
      x: a.x,
      y: a.y,
      width: a.width,
      lowerWidth: a.width,
      upperWidth: a.width,
      height: a.height
    };
    return ze(ze({}, o), {}, {
      value: a.value,
      payload: a.payload,
      parentViewBox: a.parentViewBox,
      viewBox: o,
      fill: a.fill
    });
  });
  return /* @__PURE__ */ g.createElement(Ek, {
    value: t ? i : void 0
  }, r);
}
function kN(e) {
  var {
    shape: t,
    activeBar: r,
    baseProps: n,
    entry: i,
    index: a,
    dataKey: o
  } = e, u = N(Tr), l = N(_s), c = r && String(a) === u && (l == null || o === l), s = c ? r : t;
  return c ? /* @__PURE__ */ g.createElement(Pt, {
    zIndex: ke.activeBar
  }, /* @__PURE__ */ g.createElement(wb, {
    index: a
  }, /* @__PURE__ */ g.createElement(ba, Ht({}, n, {
    name: String(n.name)
  }, i, {
    isActive: c,
    option: s,
    index: a,
    dataKey: o
  })))) : /* @__PURE__ */ g.createElement(ba, Ht({}, n, {
    name: String(n.name)
  }, i, {
    isActive: c,
    option: s,
    index: a,
    dataKey: o
  }));
}
function TN(e) {
  var {
    shape: t,
    baseProps: r,
    entry: n,
    index: i,
    dataKey: a
  } = e;
  return /* @__PURE__ */ g.createElement(ba, Ht({}, r, {
    name: String(r.name)
  }, n, {
    isActive: !1,
    option: t,
    index: i,
    dataKey: a
  }));
}
function MN(e) {
  var t, {
    data: r,
    props: n
  } = e, i = (t = gt(n)) !== null && t !== void 0 ? t : {}, {
    id: a
  } = i, o = wa(i, xN), {
    shape: u,
    dataKey: l,
    activeBar: c
  } = n, {
    onMouseEnter: s,
    onClick: f,
    onMouseLeave: d
  } = n, v = wa(n, PN), p = Ns(s, l, a), h = $s(d), m = Rs(f, l, a);
  return r ? /* @__PURE__ */ g.createElement(g.Fragment, null, r.map((y, b) => /* @__PURE__ */ g.createElement(wb, Ht({
    index: b,
    key: "rectangle-".concat(y?.x, "-").concat(y?.y, "-").concat(y?.value, "-").concat(b),
    className: "recharts-bar-rectangle"
  }, Ea(v, y, b), {
    // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
    onMouseEnter: p(y, b),
    onMouseLeave: h(y, b),
    onClick: m(y, b)
  }), c ? /* @__PURE__ */ g.createElement(kN, {
    shape: u,
    activeBar: c,
    baseProps: o,
    entry: y,
    index: b,
    dataKey: l
  }) : (
    /*
     * If the `activeBar` prop is falsy, then let's call the variant without hooks.
     * Using the `selectActiveTooltipIndex` selector is usually fast
     * but in charts with large-ish amount of data even the few nanoseconds add up to a noticeable jank.
     * If the activeBar is false then we don't need to know which index is active - because we won't use it anyway.
     * So let's just skip the hooks altogether. That way, React can skip rendering the component,
     * and can skip the tree reconciliation for its children too.
     * Because we can't call hooks conditionally, we need to have a separate component for that.
     */
    /* @__PURE__ */ g.createElement(TN, {
      shape: u,
      baseProps: o,
      entry: y,
      index: b,
      dataKey: l
    })
  )))) : null;
}
function DN(e) {
  var {
    props: t,
    previousRectanglesRef: r
  } = e, {
    data: n,
    layout: i,
    isAnimationActive: a,
    animationBegin: o,
    animationDuration: u,
    animationEasing: l,
    onAnimationEnd: c,
    onAnimationStart: s
  } = t, f = r.current, d = Va(t, "recharts-bar-"), [v, p] = Fe(!1), h = !v, m = re(() => {
    typeof c == "function" && c(), p(!1);
  }, [c]), y = re(() => {
    typeof s == "function" && s(), p(!0);
  }, [s]);
  return /* @__PURE__ */ g.createElement(CN, {
    showLabels: h,
    rects: n
  }, /* @__PURE__ */ g.createElement(Ga, {
    animationId: d,
    begin: o,
    duration: u,
    isActive: a,
    easing: l,
    onAnimationEnd: m,
    onAnimationStart: y,
    key: d
  }, (b) => {
    var w = b === 1 ? n : n?.map((x, O) => {
      var P = f && f[O];
      if (P)
        return ze(ze({}, x), {}, {
          x: pe(P.x, x.x, b),
          y: pe(P.y, x.y, b),
          width: pe(P.width, x.width, b),
          height: pe(P.height, x.height, b)
        });
      if (i === "horizontal") {
        var A = pe(0, x.height, b), _ = pe(x.stackedBarStart, x.y, b);
        return ze(ze({}, x), {}, {
          y: _,
          height: A
        });
      }
      var C = pe(0, x.width, b), T = pe(x.stackedBarStart, x.x, b);
      return ze(ze({}, x), {}, {
        width: C,
        x: T
      });
    });
    return b > 0 && (r.current = w ?? null), w == null ? null : /* @__PURE__ */ g.createElement(qe, null, /* @__PURE__ */ g.createElement(MN, {
      props: t,
      data: w
    }));
  }), /* @__PURE__ */ g.createElement(Z0, {
    label: t.label
  }), t.children);
}
function NN(e) {
  var t = H(null);
  return /* @__PURE__ */ g.createElement(DN, {
    previousRectanglesRef: t,
    props: e
  });
}
var xb = 0, $N = (e, t) => {
  var r = Array.isArray(e.value) ? e.value[1] : e.value;
  return {
    x: e.x,
    y: e.y,
    value: r,
    // @ts-expect-error getValueByDataKey does not validate the output type
    errorVal: ie(e, t)
  };
};
class RN extends Bp {
  render() {
    var {
      hide: t,
      data: r,
      dataKey: n,
      className: i,
      xAxisId: a,
      yAxisId: o,
      needClip: u,
      background: l,
      id: c
    } = this.props;
    if (t || r == null)
      return null;
    var s = Z("recharts-bar", i), f = c;
    return /* @__PURE__ */ g.createElement(qe, {
      className: s,
      id: c
    }, u && /* @__PURE__ */ g.createElement("defs", null, /* @__PURE__ */ g.createElement(_D, {
      clipPathId: f,
      xAxisId: a,
      yAxisId: o
    })), /* @__PURE__ */ g.createElement(qe, {
      className: "recharts-bar-rectangles",
      clipPath: u ? "url(#clipPath-".concat(f, ")") : void 0
    }, /* @__PURE__ */ g.createElement(IN, {
      data: r,
      dataKey: n,
      background: l,
      allOtherBarProps: this.props
    }), /* @__PURE__ */ g.createElement(NN, this.props)));
  }
}
var LN = {
  activeBar: !1,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
  background: !1,
  hide: !1,
  isAnimationActive: "auto",
  label: !1,
  legendType: "rect",
  minPointSize: xb,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: ke.bar
};
function zN(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: i,
    minPointSize: a,
    activeBar: o,
    animationBegin: u,
    animationDuration: l,
    animationEasing: c,
    isAnimationActive: s
  } = e, {
    needClip: f
  } = yb(t, r), d = tn(), v = Ze(), p = Ds(e.children, po), h = N((b) => dN(b, e.id, v, p));
  if (d !== "vertical" && d !== "horizontal")
    return null;
  var m, y = h?.[0];
  return y == null || y.height == null || y.width == null ? m = 0 : m = d === "vertical" ? y.height / 2 : y.width / 2, /* @__PURE__ */ g.createElement(SD, {
    xAxisId: t,
    yAxisId: r,
    data: h,
    dataPointFormatter: $N,
    errorBarOffset: m
  }, /* @__PURE__ */ g.createElement(RN, Ht({}, e, {
    layout: d,
    needClip: f,
    data: h,
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: i,
    minPointSize: a,
    activeBar: o,
    animationBegin: u,
    animationDuration: l,
    animationEasing: c,
    isAnimationActive: s
  })));
}
function BN(e) {
  var {
    layout: t,
    barSettings: {
      dataKey: r,
      minPointSize: n
    },
    pos: i,
    bandSize: a,
    xAxis: o,
    yAxis: u,
    xAxisTicks: l,
    yAxisTicks: c,
    stackedData: s,
    displayedData: f,
    offset: d,
    cells: v,
    parentViewBox: p,
    dataStartIndex: h
  } = e, m = t === "horizontal" ? u : o, y = s ? m.scale.domain() : null, b = rO({
    numericAxis: m
  }), w = m.scale.map(b);
  return f.map((x, O) => {
    var P, A, _, C, T, k;
    if (s) {
      var E = s[O + h];
      if (E == null)
        return null;
      P = XP(E, y);
    } else
      P = ie(x, r), Array.isArray(P) || (P = [b, P]);
    var R = VD(n, xb)(P[1], O);
    if (t === "horizontal") {
      var $, z = u.scale.map(P[0]), F = u.scale.map(P[1]);
      if (z == null || F == null)
        return null;
      A = dd({
        axis: o,
        ticks: l,
        bandSize: a,
        offset: i.offset,
        entry: x,
        index: O
      }), _ = ($ = F ?? z) !== null && $ !== void 0 ? $ : void 0, C = i.size;
      var L = z - F;
      if (T = Ct(L) ? 0 : L, k = {
        x: A,
        y: d.top,
        width: C,
        height: d.height
      }, Math.abs(R) > 0 && Math.abs(T) < Math.abs(R)) {
        var Y = Ae(T || R) * (Math.abs(R) - Math.abs(T));
        _ -= Y, T += Y;
      }
    } else {
      var U = o.scale.map(P[0]), Q = o.scale.map(P[1]);
      if (U == null || Q == null)
        return null;
      if (A = U, _ = dd({
        axis: u,
        ticks: c,
        bandSize: a,
        offset: i.offset,
        entry: x,
        index: O
      }), C = Q - U, T = i.size, k = {
        x: d.left,
        y: _,
        width: d.width,
        height: T
      }, Math.abs(R) > 0 && Math.abs(C) < Math.abs(R)) {
        var we = Ae(C || R) * (Math.abs(R) - Math.abs(C));
        C += we;
      }
    }
    if (A == null || _ == null || C == null || T == null)
      return null;
    var Le = ze(ze({}, x), {}, {
      stackedBarStart: w,
      x: A,
      y: _,
      width: C,
      height: T,
      value: s ? P : P[1],
      payload: x,
      background: k,
      tooltipPosition: {
        x: A + C / 2,
        y: _ + T / 2
      },
      parentViewBox: p
    }, v && v[O] && v[O].props);
    return Le;
  }).filter(Boolean);
}
function FN(e) {
  var t = Re(e, LN), r = mN(t.stackId), n = Ze();
  return /* @__PURE__ */ g.createElement(ob, {
    id: t.id,
    type: "bar"
  }, (i) => /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(hT, {
    legendPayload: EN(t)
  }), /* @__PURE__ */ g.createElement(jN, {
    dataKey: t.dataKey,
    stroke: t.stroke,
    strokeWidth: t.strokeWidth,
    fill: t.fill,
    name: t.name,
    hide: t.hide,
    unit: t.unit,
    tooltipType: t.tooltipType,
    id: i
  }), /* @__PURE__ */ g.createElement(jT, {
    type: "bar",
    id: i,
    data: void 0,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    stackId: r,
    hide: t.hide,
    barSize: t.barSize,
    minPointSize: t.minPointSize,
    maxBarSize: t.maxBarSize,
    isPanorama: n
  }), /* @__PURE__ */ g.createElement(Pt, {
    zIndex: t.zIndex
  }, /* @__PURE__ */ g.createElement(zN, Ht({}, t, {
    id: i
  })))));
}
var qN = /* @__PURE__ */ g.memo(FN, Bs);
qN.displayName = "Bar";
var WN = ["domain", "range"], KN = ["domain", "range"];
function _p(e, t) {
  if (e == null) return {};
  var r, n, i = UN(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function UN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Ep(e, t) {
  return e === t ? !0 : Array.isArray(e) && e.length === 2 && Array.isArray(t) && t.length === 2 ? e[0] === t[0] && e[1] === t[1] : !1;
}
function Pb(e, t) {
  if (e === t)
    return !0;
  var {
    domain: r,
    range: n
  } = e, i = _p(e, WN), {
    domain: a,
    range: o
  } = t, u = _p(t, KN);
  return !Ep(r, a) || !Ep(n, o) ? !1 : Bs(i, u);
}
var HN = ["type"], YN = ["dangerouslySetInnerHTML", "ticks", "scale"], GN = ["id", "scale"];
function Ul() {
  return Ul = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ul.apply(null, arguments);
}
function jp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ip(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jp(Object(r), !0).forEach(function(n) {
      VN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VN(e, t, r) {
  return (t = XN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XN(e) {
  var t = ZN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ZN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hl(e, t) {
  if (e == null) return {};
  var r, n, i = QN(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function QN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function JN(e) {
  var t = ue(), r = H(null), n = hy(), {
    type: i
  } = e, a = Hl(e, HN), o = io(n, "xAxis", i), u = wt(() => {
    if (o != null)
      return Ip(Ip({}, a), {}, {
        type: o
      });
  }, [a, o]);
  return $e(() => {
    u != null && (r.current === null ? t(aM(u)) : r.current !== u && t(oM({
      prev: r.current,
      next: u
    })), r.current = u);
  }, [u, t]), $e(() => () => {
    r.current && (t(uM(r.current)), r.current = null);
  }, [t]), null;
}
var e2 = (e) => {
  var {
    xAxisId: t,
    className: r
  } = e, n = N(pc), i = Ze(), a = "xAxis", o = N((y) => l0(y, a, t, i)), u = N((y) => i0(y, t)), l = N((y) => tj(y, t)), c = N((y) => zg(y, t));
  if (u == null || l == null || c == null)
    return null;
  var {
    dangerouslySetInnerHTML: s,
    ticks: f,
    scale: d
  } = e, v = Hl(e, YN), {
    id: p,
    scale: h
  } = c, m = Hl(c, GN);
  return /* @__PURE__ */ g.createElement(zs, Ul({}, v, m, {
    x: l.x,
    y: l.y,
    width: u.width,
    height: u.height,
    className: Z("recharts-".concat(a, " ").concat(a), r),
    viewBox: n,
    ticks: o,
    axisType: a
  }));
}, t2 = {
  allowDataOverflow: xe.allowDataOverflow,
  allowDecimals: xe.allowDecimals,
  allowDuplicatedCategory: xe.allowDuplicatedCategory,
  angle: xe.angle,
  axisLine: zt.axisLine,
  height: xe.height,
  hide: !1,
  includeHidden: xe.includeHidden,
  interval: xe.interval,
  label: !1,
  minTickGap: xe.minTickGap,
  mirror: xe.mirror,
  orientation: xe.orientation,
  padding: xe.padding,
  reversed: xe.reversed,
  scale: xe.scale,
  tick: xe.tick,
  tickCount: xe.tickCount,
  tickLine: zt.tickLine,
  tickSize: zt.tickSize,
  type: xe.type,
  xAxisId: 0
}, r2 = (e) => {
  var t = Re(e, t2);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(JN, {
    allowDataOverflow: t.allowDataOverflow,
    allowDecimals: t.allowDecimals,
    allowDuplicatedCategory: t.allowDuplicatedCategory,
    angle: t.angle,
    dataKey: t.dataKey,
    domain: t.domain,
    height: t.height,
    hide: t.hide,
    id: t.xAxisId,
    includeHidden: t.includeHidden,
    interval: t.interval,
    minTickGap: t.minTickGap,
    mirror: t.mirror,
    name: t.name,
    orientation: t.orientation,
    padding: t.padding,
    reversed: t.reversed,
    scale: t.scale,
    tick: t.tick,
    tickCount: t.tickCount,
    tickFormatter: t.tickFormatter,
    ticks: t.ticks,
    type: t.type,
    unit: t.unit
  }), /* @__PURE__ */ g.createElement(e2, t));
}, n2 = /* @__PURE__ */ g.memo(r2, Pb);
n2.displayName = "XAxis";
var i2 = ["type"], a2 = ["dangerouslySetInnerHTML", "ticks", "scale"], o2 = ["id", "scale"];
function Yl() {
  return Yl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yl.apply(null, arguments);
}
function Cp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cp(Object(r), !0).forEach(function(n) {
      u2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function u2(e, t, r) {
  return (t = l2(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function l2(e) {
  var t = c2(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function c2(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Gl(e, t) {
  if (e == null) return {};
  var r, n, i = s2(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function s2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function f2(e) {
  var t = ue(), r = H(null), n = hy(), {
    type: i
  } = e, a = Gl(e, i2), o = io(n, "yAxis", i), u = wt(() => {
    if (o != null)
      return kp(kp({}, a), {}, {
        type: o
      });
  }, [o, a]);
  return $e(() => {
    u != null && (r.current === null ? t(lM(u)) : r.current !== u && t(cM({
      prev: r.current,
      next: u
    })), r.current = u);
  }, [u, t]), $e(() => () => {
    r.current && (t(sM(r.current)), r.current = null);
  }, [t]), null;
}
function d2(e) {
  var {
    yAxisId: t,
    className: r,
    width: n,
    label: i
  } = e, a = H(null), o = H(null), u = N(pc), l = Ze(), c = ue(), s = "yAxis", f = N((P) => a0(P, t)), d = N((P) => nj(P, t)), v = N((P) => l0(P, s, t, l)), p = N((P) => Bg(P, t));
  if ($e(() => {
    if (!(n !== "auto" || !f || ks(i) || /* @__PURE__ */ jt(i) || p == null)) {
      var P = a.current;
      if (P) {
        var A = P.getCalculatedWidth();
        Math.round(f.width) !== Math.round(A) && c(fM({
          id: t,
          width: A
        }));
      }
    }
  }, [
    // The dependency on cartesianAxisRef.current is not needed because useLayoutEffect will run after every render.
    // The ref will be populated by then.
    // To re-run this effect when ticks change, we can depend on the ticks array from the store.
    v,
    f,
    c,
    i,
    t,
    n,
    p
  ]), f == null || d == null || p == null)
    return null;
  var {
    dangerouslySetInnerHTML: h,
    ticks: m,
    scale: y
  } = e, b = Gl(e, a2), {
    id: w,
    scale: x
  } = p, O = Gl(p, o2);
  return /* @__PURE__ */ g.createElement(zs, Yl({}, b, O, {
    ref: a,
    labelRef: o,
    x: d.x,
    y: d.y,
    tickTextProps: n === "auto" ? {
      width: void 0
    } : {
      width: n
    },
    width: f.width,
    height: f.height,
    className: Z("recharts-".concat(s, " ").concat(s), r),
    viewBox: u,
    ticks: v,
    axisType: s
  }));
}
var v2 = {
  allowDataOverflow: Pe.allowDataOverflow,
  allowDecimals: Pe.allowDecimals,
  allowDuplicatedCategory: Pe.allowDuplicatedCategory,
  angle: Pe.angle,
  axisLine: zt.axisLine,
  hide: !1,
  includeHidden: Pe.includeHidden,
  interval: Pe.interval,
  label: !1,
  minTickGap: Pe.minTickGap,
  mirror: Pe.mirror,
  orientation: Pe.orientation,
  padding: Pe.padding,
  reversed: Pe.reversed,
  scale: Pe.scale,
  tick: Pe.tick,
  tickCount: Pe.tickCount,
  tickLine: zt.tickLine,
  tickSize: zt.tickSize,
  type: Pe.type,
  width: Pe.width,
  yAxisId: 0
}, h2 = (e) => {
  var t = Re(e, v2);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(f2, {
    interval: t.interval,
    id: t.yAxisId,
    scale: t.scale,
    type: t.type,
    domain: t.domain,
    allowDataOverflow: t.allowDataOverflow,
    dataKey: t.dataKey,
    allowDuplicatedCategory: t.allowDuplicatedCategory,
    allowDecimals: t.allowDecimals,
    tickCount: t.tickCount,
    padding: t.padding,
    includeHidden: t.includeHidden,
    reversed: t.reversed,
    ticks: t.ticks,
    width: t.width,
    orientation: t.orientation,
    mirror: t.mirror,
    hide: t.hide,
    unit: t.unit,
    name: t.name,
    angle: t.angle,
    minTickGap: t.minTickGap,
    tick: t.tick,
    tickFormatter: t.tickFormatter
  }), /* @__PURE__ */ g.createElement(d2, t));
}, p2 = /* @__PURE__ */ g.memo(h2, Pb);
p2.displayName = "YAxis";
var m2 = (e, t) => t, Fs = S([m2, G, $g, je, S0, Jt, gI, ye], SI), qs = (e) => {
  var t = e.currentTarget.getBoundingClientRect(), r = t.width / e.currentTarget.offsetWidth, n = t.height / e.currentTarget.offsetHeight;
  return {
    /*
     * Here it's important to use:
     * - event.clientX and event.clientY to get the mouse position relative to the viewport, including scroll.
     * - pageX and pageY are not used because they are relative to the whole document, and ignore scroll.
     * - rect.left and rect.top are used to get the position of the chart relative to the viewport.
     * - offsetX and offsetY are not used because they are relative to the offset parent
     *  which may or may not be the same as the clientX and clientY, depending on the position of the chart in the DOM
     *  and surrounding element styles. CSS position: relative, absolute, fixed, will change the offset parent.
     * - scaleX and scaleY are necessary for when the chart element is scaled using CSS `transform: scale(N)`.
     */
    chartX: Math.round((e.clientX - t.left) / r),
    chartY: Math.round((e.clientY - t.top) / n)
  };
}, Ob = ct("mouseClick"), Ab = Kn();
Ab.startListening({
  actionCreator: Ob,
  effect: (e, t) => {
    var r = e.payload, n = Fs(t.getState(), qs(r));
    n?.activeIndex != null && t.dispatch(yj({
      activeIndex: n.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: n.activeCoordinate
    }));
  }
});
var Vl = ct("mouseMove"), Sb = Kn(), Pi = null;
Sb.startListening({
  actionCreator: Vl,
  effect: (e, t) => {
    var r = e.payload;
    Pi !== null && cancelAnimationFrame(Pi);
    var n = qs(r);
    Pi = requestAnimationFrame(() => {
      var i = t.getState(), a = ws(i, i.tooltip.settings.shared);
      if (a === "axis") {
        var o = Fs(i, n);
        o?.activeIndex != null ? t.dispatch(m0({
          activeIndex: o.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: o.activeCoordinate
        })) : t.dispatch(p0());
      }
      Pi = null;
    });
  }
});
function y2(e, t) {
  return t instanceof HTMLElement ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">') : t === window ? "global.window" : e === "children" && typeof t == "object" && t !== null ? "<<CHILDREN>>" : t;
}
var Tp = {
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  barSize: void 0,
  className: void 0,
  maxBarSize: void 0,
  stackOffset: "none",
  syncId: void 0,
  syncMethod: "index",
  baseValue: void 0,
  reverseStackOrder: !1
}, _b = Xe({
  name: "rootProps",
  initialState: Tp,
  reducers: {
    updateOptions: (e, t) => {
      var r;
      e.accessibilityLayer = t.payload.accessibilityLayer, e.barCategoryGap = t.payload.barCategoryGap, e.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : Tp.barGap, e.barSize = t.payload.barSize, e.maxBarSize = t.payload.maxBarSize, e.stackOffset = t.payload.stackOffset, e.syncId = t.payload.syncId, e.syncMethod = t.payload.syncMethod, e.className = t.payload.className, e.baseValue = t.payload.baseValue, e.reverseStackOrder = t.payload.reverseStackOrder;
    }
  }
}), g2 = _b.reducer, {
  updateOptions: b2
} = _b.actions, w2 = null, x2 = {
  updatePolarOptions: (e, t) => t.payload
}, Eb = Xe({
  name: "polarOptions",
  initialState: w2,
  reducers: x2
}), {
  updatePolarOptions: P2
} = Eb.actions, O2 = Eb.reducer, jb = ct("keyDown"), Ib = ct("focus"), Ws = Kn();
Ws.startListening({
  actionCreator: jb,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip, a = e.payload;
      if (!(a !== "ArrowRight" && a !== "ArrowLeft" && a !== "Enter")) {
        var o = xs(i, fn(r), ti(r), ni(r)), u = o == null ? -1 : Number(o);
        if (!(!Number.isFinite(u) || u < 0)) {
          var l = Jt(r);
          if (a === "Enter") {
            var c = ha(r, "axis", "hover", String(i.index));
            t.dispatch(zl({
              active: !i.active,
              activeIndex: i.index,
              activeCoordinate: c
            }));
            return;
          }
          var s = uj(r), f = s === "left-to-right" ? 1 : -1, d = a === "ArrowRight" ? 1 : -1, v = u + d * f;
          if (!(l == null || v >= l.length || v < 0)) {
            var p = ha(r, "axis", "hover", String(v));
            t.dispatch(zl({
              active: !0,
              activeIndex: v.toString(),
              activeCoordinate: p
            }));
          }
        }
      }
    }
  }
});
Ws.startListening({
  actionCreator: Ib,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip;
      if (!i.active && i.index == null) {
        var a = "0", o = ha(r, "axis", "hover", String(a));
        t.dispatch(zl({
          active: !0,
          activeIndex: a,
          activeCoordinate: o
        }));
      }
    }
  }
});
var ot = ct("externalEvent"), Cb = Kn(), Qu = /* @__PURE__ */ new Map();
Cb.startListening({
  actionCreator: ot,
  effect: (e, t) => {
    var {
      handler: r,
      reactEvent: n
    } = e.payload;
    if (r != null) {
      n.persist();
      var i = n.type, a = Qu.get(i);
      a !== void 0 && cancelAnimationFrame(a);
      var o = requestAnimationFrame(() => {
        try {
          var u = t.getState(), l = {
            activeCoordinate: nI(u),
            activeDataKey: _s(u),
            activeIndex: Tr(u),
            activeLabel: j0(u),
            activeTooltipIndex: Tr(u),
            isTooltipActive: iI(u)
          };
          r(l, n);
        } finally {
          Qu.delete(i);
        }
      });
      Qu.set(i, o);
    }
  }
});
var A2 = S([cn], (e) => e.tooltipItemPayloads), S2 = S([A2, (e, t) => t, (e, t, r) => r], (e, t, r) => {
  if (t != null) {
    var n = e.find((a) => a.settings.graphicalItemId === r);
    if (n != null) {
      var {
        getPosition: i
      } = n;
      if (i != null)
        return i(t);
    }
  }
}), kb = ct("touchMove"), Tb = Kn();
Tb.startListening({
  actionCreator: kb,
  effect: (e, t) => {
    var r = e.payload;
    if (!(r.touches == null || r.touches.length === 0)) {
      var n = t.getState(), i = ws(n, n.tooltip.settings.shared);
      if (i === "axis") {
        var a = r.touches[0];
        if (a == null)
          return;
        var o = Fs(n, qs({
          clientX: a.clientX,
          clientY: a.clientY,
          currentTarget: r.currentTarget
        }));
        o?.activeIndex != null && t.dispatch(m0({
          activeIndex: o.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: o.activeCoordinate
        }));
      } else if (i === "item") {
        var u, l = r.touches[0];
        if (document.elementFromPoint == null || l == null)
          return;
        var c = document.elementFromPoint(l.clientX, l.clientY);
        if (!c || !c.getAttribute)
          return;
        var s = c.getAttribute(oy), f = (u = c.getAttribute(uy)) !== null && u !== void 0 ? u : void 0, d = sn(n).find((h) => h.id === f);
        if (s == null || d == null || f == null)
          return;
        var {
          dataKey: v
        } = d, p = S2(n, s, f);
        t.dispatch(h0({
          activeDataKey: v,
          activeIndex: s,
          activeCoordinate: p,
          activeGraphicalItemId: f
        }));
      }
    }
  }
});
var _2 = jm({
  brush: AM,
  cartesianAxis: dM,
  chartData: rC,
  errorBars: bD,
  graphicalItems: _T,
  layout: UP,
  legend: XO,
  options: ZI,
  polarAxis: zk,
  polarOptions: O2,
  referenceElements: jM,
  rootProps: g2,
  tooltip: gj,
  zIndex: zI
}), E2 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
  return mP({
    reducer: _2,
    // redux-toolkit v1 types are unhappy with the preloadedState type. Remove the `as any` when bumping to v2
    preloadedState: t,
    // @ts-expect-error redux-toolkit v1 types are unhappy with the middleware array. Remove this comment when bumping to v2
    middleware: (n) => {
      var i;
      return n({
        serializableCheck: !1,
        immutableCheck: !["commonjs", "es6", "production"].includes((i = "es6") !== null && i !== void 0 ? i : "")
      }).concat([Ab.middleware, Sb.middleware, Ws.middleware, Cb.middleware, Tb.middleware]);
    },
    /*
     * I can't find out how to satisfy typescript here.
     * We return `EnhancerArray<[StoreEnhancer<{}, {}>, StoreEnhancer]>` from this function,
     * but the types say we should return `EnhancerArray<StoreEnhancer<{}, {}>`.
     * Looks like it's badly inferred generics, but it won't allow me to provide the correct type manually either.
     * So let's just ignore the error for now.
     */
    // @ts-expect-error mismatched generics
    enhancers: (n) => {
      var i = n;
      return typeof n == "function" && (i = n()), i.concat(Wm({
        type: "raf"
      }));
    },
    devTools: {
      serialize: {
        replacer: y2
      },
      name: "recharts-".concat(r)
    }
  });
};
function Mb(e) {
  var {
    preloadedState: t,
    children: r,
    reduxStoreName: n
  } = e, i = Ze(), a = H(null);
  if (i)
    return r;
  a.current == null && (a.current = E2(t, n));
  var o = lc;
  return /* @__PURE__ */ g.createElement(KD, {
    context: o,
    store: a.current
  }, r);
}
function j2(e) {
  var {
    layout: t,
    margin: r
  } = e, n = ue(), i = Ze();
  return Te(() => {
    i || (n(qP(t)), n(FP(r)));
  }, [n, i, t, r]), null;
}
var Db = /* @__PURE__ */ qp(j2, Bs);
function Nb(e) {
  var t = ue();
  return Te(() => {
    t(b2(e));
  }, [t, e]), null;
}
function Mp(e) {
  var {
    zIndex: t,
    isPanorama: r
  } = e, n = H(null), i = ue();
  return $e(() => (n.current && i(RI({
    zIndex: t,
    element: n.current,
    isPanorama: r
  })), () => {
    i(LI({
      zIndex: t,
      isPanorama: r
    }));
  }), [i, t, r]), /* @__PURE__ */ g.createElement("g", {
    tabIndex: -1,
    ref: n
  });
}
function Dp(e) {
  var {
    children: t,
    isPanorama: r
  } = e, n = N(EI);
  if (!n || n.length === 0)
    return t;
  var i = n.filter((o) => o < 0), a = n.filter((o) => o > 0);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, i.map((o) => /* @__PURE__ */ g.createElement(Mp, {
    key: o,
    zIndex: o,
    isPanorama: r
  })), t, a.map((o) => /* @__PURE__ */ g.createElement(Mp, {
    key: o,
    zIndex: o,
    isPanorama: r
  })));
}
var I2 = ["children"];
function C2(e, t) {
  if (e == null) return {};
  var r, n, i = k2(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function k2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function xa() {
  return xa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xa.apply(null, arguments);
}
var T2 = {
  width: "100%",
  height: "100%",
  /*
   * display: block is necessary here because the default for an SVG is display: inline,
   * which in some browsers (Chrome) adds a little bit of extra space above and below the SVG
   * to make space for the descender of letters like "g" and "y". This throws off the height calculation
   * and causes the container to grow indefinitely on each render with responsive=true.
   * Display: block removes that extra space.
   *
   * Interestingly, Firefox does not have this problem, but it doesn't hurt to add the style anyway.
   */
  display: "block"
}, M2 = /* @__PURE__ */ _e((e, t) => {
  var r = dy(), n = vy(), i = _y();
  if (!Tt(r) || !Tt(n))
    return null;
  var {
    children: a,
    otherAttributes: o,
    title: u,
    desc: l
  } = e, c, s;
  return o != null && (typeof o.tabIndex == "number" ? c = o.tabIndex : c = i ? 0 : void 0, typeof o.role == "string" ? s = o.role : s = i ? "application" : void 0), /* @__PURE__ */ g.createElement(Yp, xa({}, o, {
    title: u,
    desc: l,
    role: s,
    tabIndex: c,
    width: r,
    height: n,
    style: T2,
    ref: t
  }), a);
}), D2 = (e) => {
  var {
    children: t
  } = e, r = N(qa);
  if (!r)
    return null;
  var {
    width: n,
    height: i,
    y: a,
    x: o
  } = r;
  return /* @__PURE__ */ g.createElement(Yp, {
    width: n,
    height: i,
    x: o,
    y: a
  }, t);
}, Np = /* @__PURE__ */ _e((e, t) => {
  var {
    children: r
  } = e, n = C2(e, I2), i = Ze();
  return i ? /* @__PURE__ */ g.createElement(D2, null, /* @__PURE__ */ g.createElement(Dp, {
    isPanorama: !0
  }, r)) : /* @__PURE__ */ g.createElement(M2, xa({
    ref: t
  }, n), /* @__PURE__ */ g.createElement(Dp, {
    isPanorama: !1
  }, r));
});
function N2() {
  var e = ue(), [t, r] = Fe(null), n = N(lO);
  return Te(() => {
    if (t != null) {
      var i = t.getBoundingClientRect(), a = i.width / t.offsetWidth;
      q(a) && a !== n && e(KP(a));
    }
  }, [t, e, n]), r;
}
function $p(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $p(Object(r), !0).forEach(function(n) {
      R2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $p(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function R2(e, t, r) {
  return (t = L2(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function L2(e) {
  var t = z2(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function z2(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ar() {
  return ar = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ar.apply(null, arguments);
}
var B2 = () => (fC(), null);
function Pa(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string") {
    var t = parseFloat(e);
    if (!Number.isNaN(t))
      return t;
  }
  return 0;
}
var F2 = /* @__PURE__ */ _e((e, t) => {
  var r, n, i = H(null), [a, o] = Fe({
    containerWidth: Pa((r = e.style) === null || r === void 0 ? void 0 : r.width),
    containerHeight: Pa((n = e.style) === null || n === void 0 ? void 0 : n.height)
  }), u = re((c, s) => {
    o((f) => {
      var d = Math.round(c), v = Math.round(s);
      return f.containerWidth === d && f.containerHeight === v ? f : {
        containerWidth: d,
        containerHeight: v
      };
    });
  }, []), l = re((c) => {
    if (typeof t == "function" && t(c), c != null && typeof ResizeObserver < "u") {
      var {
        width: s,
        height: f
      } = c.getBoundingClientRect();
      u(s, f);
      var d = (p) => {
        var h = p[0];
        if (h != null) {
          var {
            width: m,
            height: y
          } = h.contentRect;
          u(m, y);
        }
      }, v = new ResizeObserver(d);
      v.observe(c), i.current = v;
    }
  }, [t, u]);
  return Te(() => () => {
    var c = i.current;
    c?.disconnect();
  }, [u]), /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Hn, {
    width: a.containerWidth,
    height: a.containerHeight
  }), /* @__PURE__ */ g.createElement("div", ar({
    ref: l
  }, e)));
}), q2 = /* @__PURE__ */ _e((e, t) => {
  var {
    width: r,
    height: n
  } = e, [i, a] = Fe({
    containerWidth: Pa(r),
    containerHeight: Pa(n)
  }), o = re((l, c) => {
    a((s) => {
      var f = Math.round(l), d = Math.round(c);
      return s.containerWidth === f && s.containerHeight === d ? s : {
        containerWidth: f,
        containerHeight: d
      };
    });
  }, []), u = re((l) => {
    if (typeof t == "function" && t(l), l != null) {
      var {
        width: c,
        height: s
      } = l.getBoundingClientRect();
      o(c, s);
    }
  }, [t, o]);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Hn, {
    width: i.containerWidth,
    height: i.containerHeight
  }), /* @__PURE__ */ g.createElement("div", ar({
    ref: u
  }, e)));
}), W2 = /* @__PURE__ */ _e((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Hn, {
    width: r,
    height: n
  }), /* @__PURE__ */ g.createElement("div", ar({
    ref: t
  }, e)));
}), K2 = /* @__PURE__ */ _e((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return typeof r == "string" || typeof n == "string" ? /* @__PURE__ */ g.createElement(q2, ar({}, e, {
    ref: t
  })) : typeof r == "number" && typeof n == "number" ? /* @__PURE__ */ g.createElement(W2, ar({}, e, {
    width: r,
    height: n,
    ref: t
  })) : /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Hn, {
    width: r,
    height: n
  }), /* @__PURE__ */ g.createElement("div", ar({
    ref: t
  }, e)));
});
function U2(e) {
  return e ? F2 : K2;
}
var H2 = /* @__PURE__ */ _e((e, t) => {
  var {
    children: r,
    className: n,
    height: i,
    onClick: a,
    onContextMenu: o,
    onDoubleClick: u,
    onMouseDown: l,
    onMouseEnter: c,
    onMouseLeave: s,
    onMouseMove: f,
    onMouseUp: d,
    onTouchEnd: v,
    onTouchMove: p,
    onTouchStart: h,
    style: m,
    width: y,
    responsive: b,
    dispatchTouchEvents: w = !0
  } = e, x = H(null), O = ue(), [P, A] = Fe(null), [_, C] = Fe(null), T = N2(), k = mc(), E = k?.width > 0 ? k.width : y, R = k?.height > 0 ? k.height : i, $ = re((j) => {
    T(j), typeof t == "function" && t(j), A(j), C(j), j != null && (x.current = j);
  }, [T, t, A, C]), z = re((j) => {
    O(Ob(j)), O(ot({
      handler: a,
      reactEvent: j
    }));
  }, [O, a]), F = re((j) => {
    O(Vl(j)), O(ot({
      handler: c,
      reactEvent: j
    }));
  }, [O, c]), L = re((j) => {
    O(p0()), O(ot({
      handler: s,
      reactEvent: j
    }));
  }, [O, s]), Y = re((j) => {
    O(Vl(j)), O(ot({
      handler: f,
      reactEvent: j
    }));
  }, [O, f]), U = re(() => {
    O(Ib());
  }, [O]), Q = re((j) => {
    O(jb(j.key));
  }, [O]), we = re((j) => {
    O(ot({
      handler: o,
      reactEvent: j
    }));
  }, [O, o]), Le = re((j) => {
    O(ot({
      handler: u,
      reactEvent: j
    }));
  }, [O, u]), vt = re((j) => {
    O(ot({
      handler: l,
      reactEvent: j
    }));
  }, [O, l]), Ke = re((j) => {
    O(ot({
      handler: d,
      reactEvent: j
    }));
  }, [O, d]), dr = re((j) => {
    O(ot({
      handler: h,
      reactEvent: j
    }));
  }, [O, h]), dn = re((j) => {
    w && O(kb(j)), O(ot({
      handler: p,
      reactEvent: j
    }));
  }, [O, w, p]), Ue = re((j) => {
    O(ot({
      handler: v,
      reactEvent: j
    }));
  }, [O, v]), wo = U2(b);
  return /* @__PURE__ */ g.createElement(N0.Provider, {
    value: P
  }, /* @__PURE__ */ g.createElement(Gb.Provider, {
    value: _
  }, /* @__PURE__ */ g.createElement(wo, {
    width: E ?? m?.width,
    height: R ?? m?.height,
    className: Z("recharts-wrapper", n),
    style: $2({
      position: "relative",
      cursor: "default",
      width: E,
      height: R
    }, m),
    onClick: z,
    onContextMenu: we,
    onDoubleClick: Le,
    onFocus: U,
    onKeyDown: Q,
    onMouseDown: vt,
    onMouseEnter: F,
    onMouseLeave: L,
    onMouseMove: Y,
    onMouseUp: Ke,
    onTouchEnd: Ue,
    onTouchMove: dn,
    onTouchStart: dr,
    ref: $
  }, /* @__PURE__ */ g.createElement(B2, null), r)));
}), Y2 = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function G2(e, t) {
  if (e == null) return {};
  var r, n, i = V2(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function V2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var $b = /* @__PURE__ */ _e((e, t) => {
  var {
    width: r,
    height: n,
    responsive: i,
    children: a,
    className: o,
    style: u,
    compact: l,
    title: c,
    desc: s
  } = e, f = G2(e, Y2), d = gt(f);
  return l ? /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Hn, {
    width: r,
    height: n
  }), /* @__PURE__ */ g.createElement(Np, {
    otherAttributes: d,
    title: c,
    desc: s
  }, a)) : /* @__PURE__ */ g.createElement(H2, {
    className: o,
    style: u,
    width: r,
    height: n,
    responsive: i ?? !1,
    onClick: e.onClick,
    onMouseLeave: e.onMouseLeave,
    onMouseEnter: e.onMouseEnter,
    onMouseMove: e.onMouseMove,
    onMouseDown: e.onMouseDown,
    onMouseUp: e.onMouseUp,
    onContextMenu: e.onContextMenu,
    onDoubleClick: e.onDoubleClick,
    onTouchStart: e.onTouchStart,
    onTouchMove: e.onTouchMove,
    onTouchEnd: e.onTouchEnd
  }, /* @__PURE__ */ g.createElement(Np, {
    otherAttributes: d,
    title: c,
    desc: s,
    ref: t
  }, /* @__PURE__ */ g.createElement(CM, null, a)));
});
function Xl() {
  return Xl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xl.apply(null, arguments);
}
var X2 = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, Z2 = {
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  layout: "horizontal",
  margin: X2,
  responsive: !1,
  reverseStackOrder: !1,
  stackOffset: "none",
  syncMethod: "index"
}, Q2 = /* @__PURE__ */ _e(function(t, r) {
  var n, i = Re(t.categoricalChartProps, Z2), {
    chartName: a,
    defaultTooltipEventType: o,
    validateTooltipEventTypes: u,
    tooltipPayloadSearcher: l,
    categoricalChartProps: c
  } = t, s = {
    chartName: a,
    defaultTooltipEventType: o,
    validateTooltipEventTypes: u,
    tooltipPayloadSearcher: l,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ g.createElement(Mb, {
    preloadedState: {
      options: s
    },
    reduxStoreName: (n = c.id) !== null && n !== void 0 ? n : a
  }, /* @__PURE__ */ g.createElement(fb, {
    chartData: c.data
  }), /* @__PURE__ */ g.createElement(Db, {
    layout: i.layout,
    margin: i.margin
  }), /* @__PURE__ */ g.createElement(Nb, {
    baseValue: i.baseValue,
    accessibilityLayer: i.accessibilityLayer,
    barCategoryGap: i.barCategoryGap,
    maxBarSize: i.maxBarSize,
    stackOffset: i.stackOffset,
    barGap: i.barGap,
    barSize: i.barSize,
    syncId: i.syncId,
    syncMethod: i.syncMethod,
    className: i.className,
    reverseStackOrder: i.reverseStackOrder
  }), /* @__PURE__ */ g.createElement($b, Xl({}, i, {
    ref: r
  })));
}), J2 = ["axis", "item"], $$ = /* @__PURE__ */ _e((e, t) => /* @__PURE__ */ g.createElement(Q2, {
  chartName: "BarChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: J2,
  tooltipPayloadSearcher: $0,
  categoricalChartProps: e,
  ref: t
}));
function e$(e) {
  var t = ue();
  return Te(() => {
    t(P2(e));
  }, [t, e]), null;
}
var t$ = ["layout"];
function Zl() {
  return Zl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zl.apply(null, arguments);
}
function r$(e, t) {
  if (e == null) return {};
  var r, n, i = n$(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function n$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var i$ = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, Rb = {
  accessibilityLayer: !0,
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: i$,
  reverseStackOrder: !1,
  syncMethod: "index",
  layout: "radial",
  responsive: !1,
  cx: "50%",
  cy: "50%",
  innerRadius: 0,
  outerRadius: "80%"
}, a$ = /* @__PURE__ */ _e(function(t, r) {
  var n, i = Re(t.categoricalChartProps, Rb), {
    layout: a
  } = i, o = r$(i, t$), {
    chartName: u,
    defaultTooltipEventType: l,
    validateTooltipEventTypes: c,
    tooltipPayloadSearcher: s
  } = t, f = {
    chartName: u,
    defaultTooltipEventType: l,
    validateTooltipEventTypes: c,
    tooltipPayloadSearcher: s,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ g.createElement(Mb, {
    preloadedState: {
      options: f
    },
    reduxStoreName: (n = i.id) !== null && n !== void 0 ? n : u
  }, /* @__PURE__ */ g.createElement(fb, {
    chartData: i.data
  }), /* @__PURE__ */ g.createElement(Db, {
    layout: a,
    margin: i.margin
  }), /* @__PURE__ */ g.createElement(Nb, {
    baseValue: void 0,
    accessibilityLayer: i.accessibilityLayer,
    barCategoryGap: i.barCategoryGap,
    maxBarSize: i.maxBarSize,
    stackOffset: i.stackOffset,
    barGap: i.barGap,
    barSize: i.barSize,
    syncId: i.syncId,
    syncMethod: i.syncMethod,
    className: i.className,
    reverseStackOrder: i.reverseStackOrder
  }), /* @__PURE__ */ g.createElement(e$, {
    cx: i.cx,
    cy: i.cy,
    startAngle: i.startAngle,
    endAngle: i.endAngle,
    innerRadius: i.innerRadius,
    outerRadius: i.outerRadius
  }), /* @__PURE__ */ g.createElement($b, Zl({}, o, {
    ref: r
  })));
});
function Rp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rp(Object(r), !0).forEach(function(n) {
      o$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function o$(e, t, r) {
  return (t = u$(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function u$(e) {
  var t = l$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function l$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var c$ = ["item"], s$ = Lp(Lp({}, Rb), {}, {
  layout: "centric",
  startAngle: 0,
  endAngle: 360
}), R$ = /* @__PURE__ */ _e((e, t) => {
  var r = Re(e, s$);
  return /* @__PURE__ */ g.createElement(a$, {
    chartName: "PieChart",
    defaultTooltipEventType: "item",
    validateTooltipEventTypes: c$,
    tooltipPayloadSearcher: $0,
    categoricalChartProps: r,
    ref: t
  });
});
export {
  $$ as B,
  po as C,
  R$ as P,
  h$ as R,
  g$ as T,
  n2 as X,
  p2 as Y,
  eM as a,
  yD as b,
  qN as c
};
