//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, a) => (a = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), l, u, d, f, p, m, h, g, _, v, y, b, ee, x, S = {}, te = [], ne = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, C = Array.isArray;
function re(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function ie(e) {
	e && e.parentNode && e.parentNode.removeChild(e);
}
function ae(e, t, n) {
	var r, i, a, o = {};
	for (a in t) a == "key" ? r = t[a] : a == "ref" ? i = t[a] : o[a] = t[a];
	if (arguments.length > 2 && (o.children = arguments.length > 3 ? l.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) o[a] === void 0 && (o[a] = e.defaultProps[a]);
	return oe(e, o, r, i, null);
}
function oe(e, t, n, r, i) {
	var a = {
		type: e,
		props: t,
		key: n,
		ref: r,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: i ?? ++d,
		__i: -1,
		__u: 0
	};
	return i == null && u.vnode != null && u.vnode(a), a;
}
function se(e) {
	return e.children;
}
function ce(e, t) {
	this.props = e, this.context = t;
}
function w(e, t) {
	if (t == null) return e.__ ? w(e.__, e.__i + 1) : null;
	for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? w(e) : null;
}
function le(e) {
	if (e.__P && e.__d) {
		var t = e.__v, n = t.__e, r = [], i = [], a = re({}, t);
		a.__v = t.__v + 1, u.vnode && u.vnode(a), ve(e.__P, a, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, r, n ?? w(t), !!(32 & t.__u), i), a.__v = t.__v, a.__.__k[a.__i] = a, be(r, a, i), t.__e = t.__ = null, a.__e != n && T(a);
	}
}
function T(e) {
	if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
		if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
	}), T(e);
}
function E(e) {
	(!e.__d && (e.__d = !0) && f.push(e) && !ue.__r++ || p != u.debounceRendering) && ((p = u.debounceRendering) || m)(ue);
}
function ue() {
	try {
		for (var e, t = 1; f.length;) f.length > t && f.sort(h), e = f.shift(), t = f.length, le(e);
	} finally {
		f.length = ue.__r = 0;
	}
}
function de(e, t, n, r, i, a, o, s, c, l, u) {
	var d, f, p, m, h, g, _, v = r && r.__k || te, y = t.length;
	for (c = fe(n, t, v, c, y), d = 0; d < y; d++) (p = n.__k[d]) != null && (f = p.__i != -1 && v[p.__i] || S, p.__i = d, g = ve(e, p, f, i, a, o, s, c, l, u), m = p.__e, p.ref && f.ref != p.ref && (f.ref && Ce(f.ref, null, p), u.push(p.ref, p.__c || m, p)), h == null && m != null && (h = m), (_ = !!(4 & p.__u)) || f.__k === p.__k ? (c = pe(p, c, e, _), _ && f.__e && (f.__e = null)) : typeof p.type == "function" && g !== void 0 ? c = g : m && (c = m.nextSibling), p.__u &= -7);
	return n.__e = h, c;
}
function fe(e, t, n, r, i) {
	var a, o, s, c, l, u = n.length, d = u, f = 0;
	for (e.__k = Array(i), a = 0; a < i; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = e.__k[a] = oe(null, o, null, null, null) : C(o) ? o = e.__k[a] = oe(se, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = e.__k[a] = oe(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : e.__k[a] = o, c = a + f, o.__ = e, o.__b = e.__b + 1, s = null, (l = o.__i = me(o, n, c, d)) != -1 && (d--, (s = n[l]) && (s.__u |= 2)), s == null || s.__v == null ? (l == -1 && (i > u ? f-- : i < u && f++), typeof o.type != "function" && (o.__u |= 4)) : l != c && (l == c - 1 ? f-- : l == c + 1 ? f++ : (l > c ? f-- : f++, o.__u |= 4))) : e.__k[a] = null;
	if (d) for (a = 0; a < u; a++) (s = n[a]) != null && !(2 & s.__u) && (s.__e == r && (r = w(s)), we(s, s));
	return r;
}
function pe(e, t, n, r) {
	var i, a;
	if (typeof e.type == "function") {
		for (i = e.__k, a = 0; i && a < i.length; a++) i[a] && (i[a].__ = e, t = pe(i[a], t, n, r));
		return t;
	}
	e.__e != t && (r && (t && e.type && !t.parentNode && (t = w(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
	do
		t &&= t.nextSibling;
	while (t != null && t.nodeType == 8);
	return t;
}
function me(e, t, n, r) {
	var i, a, o, s = e.key, c = e.type, l = t[n], u = l != null && (2 & l.__u) == 0;
	if (l === null && s == null || u && s == l.key && c == l.type) return n;
	if (r > +!!u) {
		for (i = n - 1, a = n + 1; i >= 0 || a < t.length;) if ((l = t[o = i >= 0 ? i-- : a++]) != null && !(2 & l.__u) && s == l.key && c == l.type) return o;
	}
	return -1;
}
function he(e, t, n) {
	t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || ne.test(t) ? n : n + "px";
}
function ge(e, t, n, r, i) {
	var a, o;
	n: if (t == "style") if (typeof n == "string") e.style.cssText = n;
	else {
		if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || he(e.style, t, "");
		if (n) for (t in n) r && n[t] == r[t] || he(e.style, t, n[t]);
	}
	else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(y, "$1")), o = t.toLowerCase(), t = o in e || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2), e.l ||= {}, e.l[t + a] = n, n ? r ? n[v] = r[v] : (n[v] = b, e.addEventListener(t, a ? x : ee, a)) : e.removeEventListener(t, a ? x : ee, a);
	else {
		if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
			e[t] = n ?? "";
			break n;
		} catch {}
		typeof n == "function" || (n == null || !1 === n && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
	}
}
function _e(e) {
	return function(t) {
		if (this.l) {
			var n = this.l[t.type + e];
			if (t[_] == null) t[_] = b++;
			else if (t[_] < n[v]) return;
			return n(u.event ? u.event(t) : t);
		}
	};
}
function ve(e, t, n, r, i, a, o, s, c, l) {
	var d, f, p, m, h, g, _, v, y, b, ee, x, S, ne, ae, oe, w = t.type;
	if (t.constructor !== void 0) return null;
	128 & n.__u && (c = !!(32 & n.__u), a = [s = t.__e = n.__e]), (d = u.__b) && d(t);
	n: if (typeof w == "function") {
		f = o.length;
		try {
			if (y = t.props, b = w.prototype && w.prototype.render, ee = (d = w.contextType) && r[d.__c], x = d ? ee ? ee.props.value : d.__ : r, n.__c ? v = (p = t.__c = n.__c).__ = p.__E : (b ? t.__c = p = new w(y, x) : (t.__c = p = new ce(y, x), p.constructor = w, p.render = Te), ee && ee.sub(p), p.state ||= {}, p.__n = r, m = p.__d = !0, p.__h = [], p._sb = []), b && p.__s == null && (p.__s = p.state), b && w.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = re({}, p.__s)), re(p.__s, w.getDerivedStateFromProps(y, p.__s))), h = p.props, g = p.state, p.__v = t, m) b && w.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), b && p.componentDidMount != null && p.__h.push(p.componentDidMount);
			else {
				if (b && w.getDerivedStateFromProps == null && y !== h && p.componentWillReceiveProps != null && p.componentWillReceiveProps(y, x), t.__v == n.__v || !p.__e && p.shouldComponentUpdate != null && !1 === p.shouldComponentUpdate(y, p.__s, x)) {
					t.__v != n.__v && (p.props = y, p.state = p.__s, p.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(e) {
						e && (e.__ = t);
					}), te.push.apply(p.__h, p._sb), p._sb = [], p.__h.length && o.push(p);
					break n;
				}
				p.componentWillUpdate != null && p.componentWillUpdate(y, p.__s, x), b && p.componentDidUpdate != null && p.__h.push(function() {
					p.componentDidUpdate(h, g, _);
				});
			}
			if (p.context = x, p.props = y, p.__P = e, p.__e = !1, S = u.__r, ne = 0, b) p.state = p.__s, p.__d = !1, S && S(t), d = p.render(p.props, p.state, p.context), te.push.apply(p.__h, p._sb), p._sb = [];
			else do
				p.__d = !1, S && S(t), d = p.render(p.props, p.state, p.context), p.state = p.__s;
			while (p.__d && ++ne < 25);
			p.state = p.__s, p.getChildContext != null && (r = re(re({}, r), p.getChildContext())), b && !m && p.getSnapshotBeforeUpdate != null && (_ = p.getSnapshotBeforeUpdate(h, g)), ae = d != null && d.type === se && d.key == null ? xe(d.props.children) : d, s = de(e, C(ae) ? ae : [ae], t, n, r, i, a, o, s, c, l), p.base = t.__e, t.__u &= -161, p.__h.length && o.push(p), v && (p.__E = p.__ = null);
		} catch (e) {
			if (o.length = f, t.__v = null, c || a != null) {
				if (e.then) {
					for (t.__u |= c ? 160 : 128; s && s.nodeType == 8 && s.nextSibling;) s = s.nextSibling;
					a != null && (a[a.indexOf(s)] = null), t.__e = s;
				} else if (a != null) for (oe = a.length; oe--;) ie(a[oe]);
			} else t.__e = n.__e;
			t.__k ??= n.__k || [], e.then || ye(t), u.__e(e, t, n);
		}
	} else a == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = Se(n.__e, t, n, r, i, a, o, c, l);
	return (d = u.diffed) && d(t), 128 & t.__u ? void 0 : s;
}
function ye(e) {
	e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(ye));
}
function be(e, t, n) {
	for (var r = 0; r < n.length; r++) Ce(n[r], n[++r], n[++r]);
	u.__c && u.__c(t, e), e.some(function(t) {
		try {
			e = t.__h, t.__h = [], e.some(function(e) {
				e.call(t);
			});
		} catch (e) {
			u.__e(e, t.__v);
		}
	});
}
function xe(e) {
	return typeof e != "object" || !e || e.__b > 0 ? e : C(e) ? e.map(xe) : e.constructor === void 0 ? re({}, e) : null;
}
function Se(e, t, n, r, i, a, o, s, c) {
	var d, f, p, m, h, g, _, v = n.props || S, y = t.props, b = t.type;
	if (b == "svg" ? i = "http://www.w3.org/2000/svg" : b == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i ||= "http://www.w3.org/1999/xhtml", a != null) {
		for (d = 0; d < a.length; d++) if ((h = a[d]) && "setAttribute" in h == !!b && (b ? h.localName == b : h.nodeType == 3)) {
			e = h, a[d] = null;
			break;
		}
	}
	if (e == null) {
		if (b == null) return document.createTextNode(y);
		e = document.createElementNS(i, b, y.is && y), s &&= (u.__m && u.__m(t, a), !1), a = null;
	}
	if (b == null) v === y || s && e.data == y || (e.data = y);
	else {
		if (a = b == "textarea" && y.defaultValue != null ? null : a && l.call(e.childNodes), !s && a != null) for (v = {}, d = 0; d < e.attributes.length; d++) v[(h = e.attributes[d]).name] = h.value;
		for (d in v) h = v[d], d == "dangerouslySetInnerHTML" ? p = h : d == "children" || d in y || d == "value" && "defaultValue" in y || d == "checked" && "defaultChecked" in y || ge(e, d, null, h, i);
		for (d in y) h = y[d], d == "children" ? m = h : d == "dangerouslySetInnerHTML" ? f = h : d == "value" ? g = h : d == "checked" ? _ = h : s && typeof h != "function" || v[d] === h || ge(e, d, h, v[d], i);
		if (f) s || p && (f.__html == p.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
		else if (p && (e.innerHTML = ""), de(t.type == "template" ? e.content : e, C(m) ? m : [m], t, n, r, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, o, a ? a[0] : n.__k && w(n, 0), s, c), a != null) for (d = a.length; d--;) ie(a[d]);
		s && b != "textarea" || (d = "value", b == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[d] || b == "progress" && !g || b == "option" && g != v[d]) && ge(e, d, g, v[d], i), d = "checked", _ != null && _ != e[d] && ge(e, d, _, v[d], i));
	}
	return e;
}
function Ce(e, t, n) {
	try {
		if (typeof e == "function") {
			var r = typeof e.__u == "function";
			r && e.__u(), r && t == null || (e.__u = e(t));
		} else e.current = t;
	} catch (e) {
		u.__e(e, n);
	}
}
function we(e, t, n) {
	var r, i;
	if (u.unmount && u.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || Ce(r, null, t)), (r = e.__c) != null) {
		if (r.componentWillUnmount) try {
			r.componentWillUnmount();
		} catch (e) {
			u.__e(e, t);
		}
		r.base = r.__P = r.__n = null;
	}
	if (r = e.__k) for (i = 0; i < r.length; i++) r[i] && we(r[i], t, n || typeof e.type != "function");
	n || ie(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Te(e, t, n) {
	return this.constructor(e, n);
}
l = te.slice, u = { __e: function(e, t, n, r) {
	for (var i, a, o; t = t.__;) if ((i = t.__c) && !i.__) try {
		if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i;
	} catch (t) {
		e = t;
	}
	throw e;
} }, d = 0, ce.prototype.setState = function(e, t) {
	var n = this.__s != null && this.__s != this.state ? this.__s : this.__s = re({}, this.state);
	typeof e == "function" && (e = e(re({}, n), this.props)), e && re(n, e), e != null && this.__v && (t && this._sb.push(t), E(this));
}, ce.prototype.forceUpdate = function(e) {
	this.__v && (this.__e = !0, e && this.__h.push(e), E(this));
}, ce.prototype.render = se, f = [], m = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, h = function(e, t) {
	return e.__v.__b - t.__v.__b;
}, ue.__r = 0, g = Math.random().toString(8), _ = "__d" + g, v = "__a" + g, y = /(PointerCapture)$|Capture$/i, b = 0, ee = _e(!1), x = _e(!0);
//#endregion
//#region node_modules/preact-render-to-string/dist/index.module.js
var Ee = "diffed", De = "__c", Oe = "__s", ke = "__c", Ae = "__k", je = "__d", Me = "__s", Ne = /[\s\n\\/='"\0<>]/, Pe = /^(xlink|xmlns|xml)([A-Z])/, Fe = /^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/, Ie = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/, Le = /* @__PURE__ */ new Set(["draggable", "spellcheck"]);
function Re(e) {
	e.__g === void 0 ? e[je] = !0 : e.__g |= 8;
}
function ze(e) {
	e.__g === void 0 ? e[je] = !1 : e.__g &= -9;
}
function Be(e) {
	return e.__g === void 0 ? !0 === e[je] : !!(8 & e.__g);
}
var Ve = /["&<]/;
function He(e) {
	if (e.length === 0 || !1 === Ve.test(e)) return e;
	for (var t = 0, n = 0, r = "", i = ""; n < e.length; n++) {
		switch (e.charCodeAt(n)) {
			case 34:
				i = "&quot;";
				break;
			case 38:
				i = "&amp;";
				break;
			case 60:
				i = "&lt;";
				break;
			default: continue;
		}
		n !== t && (r += e.slice(t, n)), r += i, t = n + 1;
	}
	return n !== t && (r += e.slice(t, n)), r;
}
var Ue = {}, We = /* @__PURE__ */ new Set(/* @__PURE__ */ "animation-iteration-count.border-image-outset.border-image-slice.border-image-width.box-flex.box-flex-group.box-ordinal-group.column-count.fill-opacity.flex.flex-grow.flex-negative.flex-order.flex-positive.flex-shrink.flood-opacity.font-weight.grid-column.grid-row.line-clamp.line-height.opacity.order.orphans.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-miterlimit.stroke-opacity.stroke-width.tab-size.widows.z-index.zoom".split(".")), Ge = /[A-Z]/g;
function Ke(e) {
	var t = "";
	for (var n in e) {
		var r = e[n];
		if (r != null && r !== "") {
			var i = n[0] == "-" ? n : Ue[n] || (Ue[n] = n.replace(Ge, "-$&").toLowerCase()), a = ";";
			typeof r != "number" || i.startsWith("--") || We.has(i) || (a = "px;"), t = t + i + ":" + r + a;
		}
	}
	return t || void 0;
}
function qe() {
	this.__d = !0;
}
function Je(e, t) {
	return {
		__v: e,
		context: t,
		props: e.props,
		setState: qe,
		forceUpdate: qe,
		__d: !0,
		__h: []
	};
}
function Ye(e, t, n) {
	if (!e.s) {
		if (n instanceof Xe) {
			if (!n.s) return void (n.o = Ye.bind(null, e, t));
			1 & t && (t = n.s), n = n.v;
		}
		if (n && n.then) return void n.then(Ye.bind(null, e, t), Ye.bind(null, e, 2));
		e.s = t, e.v = n;
		let r = e.o;
		r && r(e);
	}
}
var Xe = /*#__PURE__*/ function() {
	function e() {}
	return e.prototype.then = function(t, n) {
		var r = new e(), i = this.s;
		if (i) {
			var a = 1 & i ? t : n;
			if (a) {
				try {
					Ye(r, 1, a(this.v));
				} catch (e) {
					Ye(r, 2, e);
				}
				return r;
			}
			return this;
		}
		return this.o = function(e) {
			try {
				var i = e.v;
				1 & e.s ? Ye(r, 1, t ? t(i) : i) : n ? Ye(r, 1, n(i)) : Ye(r, 2, i);
			} catch (e) {
				Ye(r, 2, e);
			}
		}, r;
	}, e;
}(), Ze, Qe, $e, et, tt = {}, nt = [], rt = Array.isArray, it = Object.assign, at = "", ot = "<!--$s-->", st = "<!--/$s-->";
function ct(e) {
	return typeof e == "string" ? ot + e + st : rt(e) ? (e.unshift(ot), e.push(st), e) : e && typeof e.then == "function" ? e.then(ct) : ot + e + st;
}
function lt(e, t, n) {
	var r = u[Oe];
	u[Oe] = !0, Ze = u.__b, Qe = u[Ee], $e = u.__r, et = u.unmount;
	var i = ae(se, null);
	i[Ae] = [e];
	try {
		var a = dt(e, t || tt, !1, void 0, i, !1, n);
		return rt(a) ? a.join(at) : a;
	} catch (e) {
		throw e.then ? Error("Use \"renderToStringAsync\" for suspenseful rendering.") : e;
	} finally {
		u[De] && u[De](e, nt), u[Oe] = r, nt.length = 0;
	}
}
function ut(e, t) {
	var n, r = e.type, i = !0;
	return e[ke] ? (i = !1, (n = e[ke]).state = n[Me]) : n = new r(e.props, t), e[ke] = n, n.__v = e, n.props = e.props, n.context = t, Re(n), n.state ??= tt, n[Me] ?? (n[Me] = n.state), r.getDerivedStateFromProps ? n.state = it({}, n.state, r.getDerivedStateFromProps(n.props, n.state)) : i && n.componentWillMount ? (n.componentWillMount(), n.state = n[Me] === n.state ? n.state : n[Me]) : !i && n.componentWillUpdate && n.componentWillUpdate(), $e && $e(e), n.render(n.props, n.state, t);
}
function dt(e, t, n, r, i, a, o) {
	if (e == null || !0 === e || !1 === e || e === at) return at;
	var s = typeof e;
	if (s != "object") return s == "function" ? at : s == "string" ? He(e) : e + at;
	if (rt(e)) {
		var c, l = at;
		i[Ae] = e;
		for (var d = e.length, f = 0; f < d; f++) {
			var p = e[f];
			if (p != null && typeof p != "boolean") {
				var m, h = dt(p, t, n, r, i, a, o);
				typeof h == "string" ? l += h : (c ||= Array(d), l && c.push(l), l = at, rt(h) ? (m = c).push.apply(m, h) : c.push(h));
			}
		}
		return c ? (l && c.push(l), c) : l;
	}
	if (e.constructor !== void 0) return at;
	e.__ = i, Ze && Ze(e);
	var g = e.type, _ = e.props;
	if (typeof g == "function") {
		var v, y, b, ee = t;
		if (g === se) {
			if ("tpl" in _) {
				for (var x = at, S = 0; S < _.tpl.length; S++) if (x += _.tpl[S], _.exprs && S < _.exprs.length) {
					var te = _.exprs[S];
					if (te == null) continue;
					typeof te != "object" || te.constructor !== void 0 && !rt(te) ? x += te : x += dt(te, t, n, r, e, a, o);
				}
				return x;
			}
			if ("UNSTABLE_comment" in _) return "<!--" + He(_.UNSTABLE_comment) + "-->";
			y = _.children;
		} else {
			if ((v = g.contextType) != null) {
				var ne = t[v.__c];
				ee = ne ? ne.props.value : v.__;
			}
			var C = g.prototype && typeof g.prototype.render == "function";
			if (C) y = ut(e, ee), b = e[ke];
			else {
				e[ke] = b = Je(e, ee);
				for (var re = 0; Be(b) && re++ < 25;) {
					ze(b), $e && $e(e);
					try {
						y = g.call(b, _, ee);
					} catch (t) {
						throw a && t && typeof t.then == "function" && (e._suspended = !0), t;
					}
				}
				Re(b);
			}
			if (b.getChildContext != null && (t = it({}, t, b.getChildContext())), C && u.errorBoundaries && (g.getDerivedStateFromError || b.componentDidCatch)) {
				y = y != null && y.type === se && y.key == null && y.props.tpl == null ? y.props.children : y;
				try {
					return dt(y, t, n, r, e, a, !1);
				} catch (i) {
					return g.getDerivedStateFromError && (b[Me] = g.getDerivedStateFromError(i)), b.componentDidCatch && b.componentDidCatch(i, tt), Be(b) ? (y = ut(e, t), (b = e[ke]).getChildContext != null && (t = it({}, t, b.getChildContext())), dt(y = y != null && y.type === se && y.key == null && y.props.tpl == null ? y.props.children : y, t, n, r, e, a, o)) : at;
				} finally {
					Qe && Qe(e), et && et(e);
				}
			}
		}
		y = y != null && y.type === se && y.key == null && y.props.tpl == null ? y.props.children : y;
		try {
			var ie = dt(y, t, n, r, e, a, o);
			return Qe && Qe(e), u.unmount && u.unmount(e), e._suspended ? ct(ie) : ie;
		} catch (i) {
			if (!a && o && o.onError) {
				var ae = function i(s) {
					return o.onError(s, e, function(e, s) {
						try {
							return dt(e, t, n, r, s, a, o);
						} catch (e) {
							return i(e);
						}
					});
				}(i);
				if (ae !== void 0) return ae;
				var oe = u.__e;
				return oe && oe(i, e), at;
			}
			if (!a || !i || typeof i.then != "function") throw i;
			return i.then(function i() {
				try {
					var s = dt(y, t, n, r, e, a, o);
					return e._suspended ? ct(s) : s;
				} catch (e) {
					if (!e || typeof e.then != "function") throw e;
					return e.then(i);
				}
			});
		}
	}
	var ce, w = "<" + g, le = at;
	for (var T in _) {
		var E = _[T];
		if (typeof (E = mt(E) ? E.value : E) != "function" || T === "class" || T === "className") {
			switch (T) {
				case "children":
					ce = E;
					continue;
				case "key":
				case "ref":
				case "__self":
				case "__source": continue;
				case "htmlFor":
					if ("for" in _) continue;
					T = "for";
					break;
				case "className":
					if ("class" in _) continue;
					T = "class";
					break;
				case "defaultChecked":
					T = "checked";
					break;
				case "defaultSelected":
					T = "selected";
					break;
				case "defaultValue":
				case "value":
					switch (T = "value", g) {
						case "textarea":
							ce = E;
							continue;
						case "select":
							r = E;
							continue;
						case "option": r != E || "selected" in _ || (w += " selected");
					}
					break;
				case "dangerouslySetInnerHTML":
					le = E && E.__html;
					continue;
				case "style":
					typeof E == "object" && (E = Ke(E));
					break;
				case "acceptCharset":
					T = "accept-charset";
					break;
				case "httpEquiv":
					T = "http-equiv";
					break;
				default:
					if (Ne.test(T)) continue;
					Pe.test(T) ? T = T.replace(Pe, "$1:$2").toLowerCase() : T[4] !== "-" && !Le.has(T) || E == null ? n ? Ie.test(T) && (T = T === "panose1" ? "panose-1" : T.replace(/([A-Z])/g, "-$1").toLowerCase()) : Fe.test(T) && (T = T.toLowerCase()) : E += at;
			}
			E != null && !1 !== E && (w = !0 === E || E === at ? w + " " + T : w + " " + T + "=\"" + (typeof E == "string" ? He(E) : E + at) + "\"");
		}
	}
	if (Ne.test(g)) throw Error(g + " is not a valid HTML tag name in " + w + ">");
	if (le || (typeof ce == "string" ? le = He(ce) : ce != null && !1 !== ce && !0 !== ce && (le = dt(ce, t, g === "svg" || g !== "foreignObject" && n, r, e, a, o))), Qe && Qe(e), et && et(e), !le && ft.has(g)) return w + "/>";
	var ue = "</" + g + ">", de = w + ">";
	return rt(le) ? [de].concat(le, [ue]) : typeof le == "string" ? de + le + ue : [
		de,
		le,
		ue
	];
}
var ft = /* @__PURE__ */ new Set([
	"area",
	"base",
	"br",
	"col",
	"command",
	"embed",
	"hr",
	"img",
	"input",
	"keygen",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr"
]), pt = lt;
function mt(e) {
	return typeof e == "object" && !!e && typeof e.peek == "function" && "value" in e;
}
//#endregion
//#region src/format.ts
function ht(e) {
	return JSON.stringify(e).replaceAll("<", "\\u003c");
}
function D(e) {
	return Number(e).toLocaleString();
}
function O(e) {
	if (!Number.isFinite(e)) return "0 B";
	let t = [
		"B",
		"KB",
		"MB",
		"GB",
		"TB"
	], n = Math.abs(e), r = 0, i = n;
	for (; i >= 1024 && r < t.length - 1;) i /= 1024, r += 1;
	let a = r === 0 ? String(Math.round(i)) : i.toFixed(1);
	return `${e < 0 ? "-" : ""}${a} ${t[r]}`;
}
function gt(e) {
	return `${e.toFixed(1)}%`;
}
var _t = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric",
	year: "numeric",
	timeZone: "UTC"
});
function vt(e) {
	if (!e) return "";
	let t = new Date(e);
	return Number.isNaN(t.getTime()) ? "" : _t.format(t);
}
//#endregion
//#region src/ranked-row.ts
function yt(e) {
	return e.requests > 0 ? e.responseBytes / e.requests : 0;
}
//#endregion
//#region node_modules/groq-js/dist/_chunks-es/shared.mjs
function bt(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function xt(e) {
	let t = [];
	for (let n of e.split(".")) n === "*" ? t.push("[^.]+") : n === "**" ? t.push(".*") : t.push(bt(n));
	return RegExp(`^${t.join(".")}$`);
}
var St = class {
	pattern;
	patternRe;
	constructor(e) {
		this.pattern = e, this.patternRe = xt(e);
	}
	matches(e) {
		return this.patternRe.test(e);
	}
	toJSON() {
		return this.pattern;
	}
}, Ct = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|([-+]\d{2}:\d{2}))$/;
function wt(e) {
	return Ct.test(e) ? new Date(e) : null;
}
function Tt(e) {
	let t = Et(e.getUTCFullYear(), 4), n = Et(e.getUTCMonth() + 1, 2), r = Et(e.getUTCDate(), 2), i = Et(e.getUTCHours(), 2), a = Et(e.getUTCMinutes(), 2), o = Et(e.getUTCSeconds(), 2), s = "", c = e.getMilliseconds();
	return c != 0 && (s = `.${Et(c, 3)}`), `${t}-${n}-${r}T${i}:${a}:${o}${s}Z`;
}
function Et(e, t) {
	let n = e.toString();
	for (; n.length < t;) n = `0${n}`;
	return n;
}
var Dt = class {
	data;
	type;
	constructor(e, t) {
		this.data = e, this.type = t;
	}
	isArray() {
		return this.type === "array";
	}
	async get() {
		return this.data;
	}
	asStatic() {
		return this;
	}
	[Symbol.asyncIterator]() {
		if (Array.isArray(this.data)) return (function* (e) {
			for (let t of e) yield Ft(t);
		})(this.data);
		throw Error(`Cannot iterate over: ${this.type}`);
	}
}, k = new Dt(null, "null"), Ot = new Dt(!0, "boolean"), kt = new Dt(!1, "boolean"), At = class e {
	date;
	constructor(e) {
		this.date = e;
	}
	static parseToValue(t) {
		let n = wt(t);
		return n ? new Dt(new e(n), "datetime") : k;
	}
	equals(e) {
		return this.date.getTime() == e.date.getTime();
	}
	add(t) {
		let n = new Date(this.date.getTime());
		return n.setTime(n.getTime() + t * 1e3), new e(n);
	}
	difference(e) {
		return (this.date.getTime() - e.date.getTime()) / 1e3;
	}
	compareTo(e) {
		return this.date.getTime() - e.date.getTime();
	}
	toString() {
		return Tt(this.date);
	}
	toJSON() {
		return this.toString();
	}
};
function jt(e) {
	return Number.isFinite(e) ? new Dt(e, "number") : k;
}
function Mt(e) {
	return new Dt(e, "string");
}
function Nt(e) {
	return e && typeof e.next == "function";
}
function Pt(e) {
	return new Dt(e, "array");
}
function Ft(e) {
	return Nt(e) ? new Lt(async function* () {
		for await (let t of e) yield Ft(t);
	}) : e == null ? k : new Dt(e, It(e));
}
function It(e) {
	return e === null || typeof e > "u" ? "null" : Array.isArray(e) ? "array" : e instanceof St ? "path" : e instanceof At ? "datetime" : typeof e;
}
var Lt = class {
	type = "stream";
	generator;
	ticker;
	isDone;
	data;
	constructor(e) {
		this.generator = e, this.ticker = null, this.isDone = !1, this.data = [];
	}
	isArray() {
		return !0;
	}
	async get() {
		let e = [];
		for await (let t of this) e.push(await t.get());
		return e;
	}
	async asStatic() {
		return new Dt(await this.get(), "array");
	}
	async *[Symbol.asyncIterator]() {
		let e = 0;
		for (;;) {
			for (; e < this.data.length; e++) yield this.data[e];
			if (this.isDone) return;
			await this._nextTick();
		}
	}
	_nextTick() {
		if (this.ticker) return this.ticker;
		let e, t, n = () => {
			this.ticker = new Promise((n, r) => {
				e = n, t = r;
			});
		}, r = () => {
			e(), n();
		};
		return n(), (async () => {
			try {
				for await (let e of this.generator()) this.data.push(e), r();
				this.isDone = !0, r();
			} catch (e) {
				t(e);
			}
		})(), this.ticker;
	}
};
function Rt(e) {
	return [
		"AccessAttribute",
		"ArrayCoerce",
		"Filter",
		"Group",
		"Tuple",
		"SelectorNested"
	].includes(e.type);
}
function zt(e) {
	switch (e.type) {
		case "Group": return zt(e.base);
		case "Value":
		case "Parameter": return !0;
		case "Pos":
		case "Neg": return zt(e.base);
		case "OpCall": switch (e.op) {
			case "+":
			case "-":
			case "*":
			case "/":
			case "%":
			case "**": return zt(e.left) && zt(e.right);
			default: return !1;
		}
		default: return !1;
	}
}
function Bt(e) {
	return zt(e) ? Ut(e) : null;
}
function Vt(e) {
	return e.constructor === Object || e.constructor === void 0;
}
function Ht(e) {
	return e == null ? k : typeof e == "boolean" ? e ? Ot : kt : typeof e == "number" ? jt(e) : typeof e == "string" ? Mt(e) : Array.isArray(e) ? Pt(e) : typeof e == "object" && Vt(e) ? new Dt(e, "object") : k;
}
function Ut(e) {
	switch (e.type) {
		case "Value": return Ht(e.value);
		case "Parameter": return k;
		case "Group": return Ut(e.base);
		case "Pos": {
			let t = Ut(e.base);
			return t.type === "number" ? jt(t.data) : k;
		}
		case "Neg": {
			let t = Ut(e.base);
			return t.type === "number" ? jt(-t.data) : k;
		}
		case "OpCall": {
			let t = Ut(e.left), n = Ut(e.right);
			switch (e.op) {
				case "+": return t.type === "number" && n.type === "number" ? jt(t.data + n.data) : t.type === "string" && n.type === "string" ? Mt(t.data + n.data) : t.type === "array" && n.type === "array" ? Pt(t.data.concat(n.data)) : t.type === "object" && n.type === "object" ? new Dt({
					...t.data,
					...n.data
				}, "object") : k;
				case "-": return t.type === "number" && n.type === "number" ? jt(t.data - n.data) : k;
				case "*": return t.type === "number" && n.type === "number" ? jt(t.data * n.data) : k;
				case "/": return t.type === "number" && n.type === "number" ? jt(t.data / n.data) : k;
				case "%": return t.type === "number" && n.type === "number" ? jt(t.data % n.data) : k;
				case "**": return t.type === "number" && n.type === "number" ? jt(t.data ** +n.data) : k;
				default: return k;
			}
		}
		default: return k;
	}
}
var Wt = {
	global: {
		anywhere: { arity: 1 },
		coalesce: {},
		count: { arity: 1 },
		dateTime: { arity: 1 },
		defined: { arity: 1 },
		identity: { arity: 0 },
		length: { arity: 1 },
		path: { arity: 1 },
		string: { arity: 1 },
		references: { arity: (e) => e >= 1 },
		round: { arity: (e) => e >= 1 && e <= 2 },
		now: { arity: 0 },
		boost: { arity: 2 },
		lower: { arity: 1 },
		upper: { arity: 1 }
	},
	string: {
		lower: { arity: 1 },
		upper: { arity: 1 },
		split: { arity: 2 },
		startsWith: { arity: 2 }
	},
	array: {
		join: { arity: 2 },
		compact: { arity: 1 },
		unique: { arity: 1 },
		intersects: { arity: 2 }
	},
	pt: { text: { arity: 1 } },
	delta: {
		operation: {},
		changedAny: {
			arity: 1,
			mode: "delta"
		},
		changedOnly: {
			arity: 1,
			mode: "delta"
		}
	},
	diff: {
		changedAny: { arity: 3 },
		changedOnly: { arity: 3 }
	},
	media: { aspect: { arity: 2 } },
	sanity: {
		projectId: {},
		dataset: {},
		versionOf: { arity: 1 },
		partOfRelease: { arity: 1 }
	},
	math: {
		min: { arity: 1 },
		max: { arity: 1 },
		sum: { arity: 1 },
		avg: { arity: 1 }
	},
	dateTime: { now: { arity: 0 } },
	releases: { all: { arity: 0 } },
	text: {
		query: { arity: 1 },
		semanticSimilarity: { arity: 1 }
	},
	geo: {
		latLng: {},
		contains: {},
		intersects: {},
		distance: {}
	},
	documents: {
		get: {},
		incomingRefCount: {},
		incomingGlobalDocumentReferenceCount: {}
	},
	user: { attributes: {} }
}, Gt = {
	order: { arity: (e) => e >= 1 },
	score: { arity: (e) => e >= 1 }
}, Kt = /* @__PURE__ */ o(((e, t) => {
	var n = 1e3, r = n * 60, i = r * 60, a = i * 24, o = a * 7, s = a * 365.25;
	t.exports = function(e, t) {
		t ||= {};
		var n = typeof e;
		if (n === "string" && e.length > 0) return c(e);
		if (n === "number" && isFinite(e)) return t.long ? u(e) : l(e);
		throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
	};
	function c(e) {
		if (e = String(e), !(e.length > 100)) {
			var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
			if (t) {
				var c = parseFloat(t[1]);
				switch ((t[2] || "ms").toLowerCase()) {
					case "years":
					case "year":
					case "yrs":
					case "yr":
					case "y": return c * s;
					case "weeks":
					case "week":
					case "w": return c * o;
					case "days":
					case "day":
					case "d": return c * a;
					case "hours":
					case "hour":
					case "hrs":
					case "hr":
					case "h": return c * i;
					case "minutes":
					case "minute":
					case "mins":
					case "min":
					case "m": return c * r;
					case "seconds":
					case "second":
					case "secs":
					case "sec":
					case "s": return c * n;
					case "milliseconds":
					case "millisecond":
					case "msecs":
					case "msec":
					case "ms": return c;
					default: return;
				}
			}
		}
	}
	function l(e) {
		var t = Math.abs(e);
		return t >= a ? Math.round(e / a) + "d" : t >= i ? Math.round(e / i) + "h" : t >= r ? Math.round(e / r) + "m" : t >= n ? Math.round(e / n) + "s" : e + "ms";
	}
	function u(e) {
		var t = Math.abs(e);
		return t >= a ? d(e, t, a, "day") : t >= i ? d(e, t, i, "hour") : t >= r ? d(e, t, r, "minute") : t >= n ? d(e, t, n, "second") : e + " ms";
	}
	function d(e, t, n, r) {
		var i = t >= n * 1.5;
		return Math.round(e / n) + " " + r + (i ? "s" : "");
	}
})), qt = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		n.debug = n, n.default = n, n.coerce = c, n.disable = o, n.enable = i, n.enabled = s, n.humanize = Kt(), n.destroy = l, Object.keys(e).forEach((t) => {
			n[t] = e[t];
		}), n.names = [], n.skips = [], n.formatters = {};
		function t(e) {
			let t = 0;
			for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
			return n.colors[Math.abs(t) % n.colors.length];
		}
		n.selectColor = t;
		function n(e) {
			let t, i = null, a, o;
			function s(...e) {
				if (!s.enabled) return;
				let r = s, i = Number(/* @__PURE__ */ new Date());
				r.diff = i - (t || i), r.prev = t, r.curr = i, t = i, e[0] = n.coerce(e[0]), typeof e[0] != "string" && e.unshift("%O");
				let a = 0;
				e[0] = e[0].replace(/%([a-zA-Z%])/g, (t, i) => {
					if (t === "%%") return "%";
					a++;
					let o = n.formatters[i];
					if (typeof o == "function") {
						let n = e[a];
						t = o.call(r, n), e.splice(a, 1), a--;
					}
					return t;
				}), n.formatArgs.call(r, e), (r.log || n.log).apply(r, e);
			}
			return s.namespace = e, s.useColors = n.useColors(), s.color = n.selectColor(e), s.extend = r, s.destroy = n.destroy, Object.defineProperty(s, "enabled", {
				enumerable: !0,
				configurable: !1,
				get: () => i === null ? (a !== n.namespaces && (a = n.namespaces, o = n.enabled(e)), o) : i,
				set: (e) => {
					i = e;
				}
			}), typeof n.init == "function" && n.init(s), s;
		}
		function r(e, t) {
			let r = n(this.namespace + (t === void 0 ? ":" : t) + e);
			return r.log = this.log, r;
		}
		function i(e) {
			n.save(e), n.namespaces = e, n.names = [], n.skips = [];
			let t = (typeof e == "string" ? e : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
			for (let e of t) e[0] === "-" ? n.skips.push(e.slice(1)) : n.names.push(e);
		}
		function a(e, t) {
			let n = 0, r = 0, i = -1, a = 0;
			for (; n < e.length;) if (r < t.length && (t[r] === e[n] || t[r] === "*")) t[r] === "*" ? (i = r, a = n, r++) : (n++, r++);
			else if (i !== -1) r = i + 1, a++, n = a;
			else return !1;
			for (; r < t.length && t[r] === "*";) r++;
			return r === t.length;
		}
		function o() {
			let e = [...n.names, ...n.skips.map((e) => "-" + e)].join(",");
			return n.enable(""), e;
		}
		function s(e) {
			for (let t of n.skips) if (a(e, t)) return !1;
			for (let t of n.names) if (a(e, t)) return !0;
			return !1;
		}
		function c(e) {
			return e instanceof Error ? e.stack || e.message : e;
		}
		function l() {
			console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
		}
		return n.enable(n.load()), n;
	}
	t.exports = n;
})), Jt = /* @__PURE__ */ c((/* @__PURE__ */ o(((e, t) => {
	e.formatArgs = r, e.save = i, e.load = a, e.useColors = n, e.storage = o(), e.destroy = (() => {
		let e = !1;
		return () => {
			e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
		};
	})(), e.colors = /* @__PURE__ */ "#0000CC.#0000FF.#0033CC.#0033FF.#0066CC.#0066FF.#0099CC.#0099FF.#00CC00.#00CC33.#00CC66.#00CC99.#00CCCC.#00CCFF.#3300CC.#3300FF.#3333CC.#3333FF.#3366CC.#3366FF.#3399CC.#3399FF.#33CC00.#33CC33.#33CC66.#33CC99.#33CCCC.#33CCFF.#6600CC.#6600FF.#6633CC.#6633FF.#66CC00.#66CC33.#9900CC.#9900FF.#9933CC.#9933FF.#99CC00.#99CC33.#CC0000.#CC0033.#CC0066.#CC0099.#CC00CC.#CC00FF.#CC3300.#CC3333.#CC3366.#CC3399.#CC33CC.#CC33FF.#CC6600.#CC6633.#CC9900.#CC9933.#CCCC00.#CCCC33.#FF0000.#FF0033.#FF0066.#FF0099.#FF00CC.#FF00FF.#FF3300.#FF3333.#FF3366.#FF3399.#FF33CC.#FF33FF.#FF6600.#FF6633.#FF9900.#FF9933.#FFCC00.#FFCC33".split(".");
	function n() {
		if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return !0;
		if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
		let e;
		return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
	}
	function r(e) {
		if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
		let n = "color: " + this.color;
		e.splice(1, 0, n, "color: inherit");
		let r = 0, i = 0;
		e[0].replace(/%[a-zA-Z%]/g, (e) => {
			e !== "%%" && (r++, e === "%c" && (i = r));
		}), e.splice(i, 0, n);
	}
	e.log = console.debug || console.log || (() => {});
	function i(t) {
		try {
			t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
		} catch {}
	}
	function a() {
		let t;
		try {
			t = e.storage.getItem("debug") || e.storage.getItem("DEBUG");
		} catch {}
		return !t && typeof process < "u" && "env" in process && (t = process.env.DEBUG), t;
	}
	function o() {
		try {
			return localStorage;
		} catch {}
	}
	t.exports = qt()(e);
	var { formatters: s } = t.exports;
	s.j = function(e) {
		try {
			return JSON.stringify(e);
		} catch (e) {
			return "[UnexpectedJSONParseError]: " + e.message;
		}
	};
})))(), 1), Yt = class {
	_string;
	marks;
	index;
	customFunctions;
	parseOptions;
	allowBoost = !1;
	constructor(e, t, n, r) {
		this._string = e, this.marks = t, this.customFunctions = n, this.index = 0, this.parseOptions = r;
	}
	hasMark(e = 0) {
		return this.index + e < this.marks.length;
	}
	getMark(e = 0) {
		return this.marks[this.index + e];
	}
	shift() {
		this.index += 1;
	}
	process(e) {
		let t = this.marks[this.index];
		this.shift();
		let n = e[t.name];
		if (!n) throw Error(`Unknown handler: ${t.name}`);
		return n.call(e, this, t);
	}
	processString() {
		return this.shift(), this.processStringEnd();
	}
	processStringEnd() {
		let e = this.marks[this.index - 1], t = this.marks[this.index];
		return this.shift(), this.string.slice(e.position, t.position);
	}
	slice(e) {
		let t = this.marks[this.index].position;
		return this.string.slice(t, t + e);
	}
	get string() {
		return this._string;
	}
}, Xt = /^([\t\n\v\f\r \u0085\u00A0]|(\/\/[^\n]*\n))+/, Zt = /^\d+/, Qt = /^[a-zA-Z_][a-zA-Z_0-9]*/;
function $t(e) {
	let t = 0;
	t = j(e, t);
	let n = {};
	for (; t < e.length && e.substring(t, t + 2) === "fn";) {
		let r = cn(e, t);
		if (r.type === "error") return r;
		n[`${r.namespace}::${r.name}`] = r, t = j(e, r.position);
	}
	let r = A(e, t, 0);
	return r.type === "error" ? r : (t = j(e, r.position), t === e.length ? (delete r.position, delete r.failPosition, r.customFunctions = n, r) : (r.failPosition && (t = r.failPosition - 1), {
		type: "error",
		message: "Unexpected end of query",
		position: t
	}));
}
function A(e, t, n) {
	let r = t, i = e[t], a;
	switch (i) {
		case "+": {
			let n = A(e, j(e, t + 1), 10);
			if (n.type === "error") return n;
			a = [{
				name: "pos",
				position: r
			}].concat(n.marks), t = n.position;
			break;
		}
		case "-": {
			let n = A(e, j(e, t + 1), 8);
			if (n.type === "error") return n;
			a = [{
				name: "neg",
				position: r
			}].concat(n.marks), t = n.position;
			break;
		}
		case "(": {
			let n = en(e, t);
			if (n.type === "error") return n;
			t = n.position, a = n.marks;
			break;
		}
		case "!": {
			let n = A(e, j(e, t + 1), 10);
			if (n.type === "error") return n;
			a = [{
				name: "not",
				position: r
			}].concat(n.marks), t = n.position;
			break;
		}
		case "{": {
			let n = rn(e, t);
			if (n.type === "error") return n;
			a = n.marks, t = n.position;
			break;
		}
		case "[":
			if (a = [{
				name: "array",
				position: t
			}], t = j(e, t + 1), e[t] !== "]") for (;;) {
				e.slice(t, t + 3) === "..." && (a.push({
					name: "array_splat",
					position: t
				}), t = j(e, t + 3));
				let n = A(e, t, 0);
				if (n.type === "error") return n;
				if (a = a.concat(n.marks), t = n.position, t = j(e, t), e[t] !== "," || (t = j(e, t + 1), e[t] === "]")) break;
			}
			if (e[t] === "]") t++, a.push({
				name: "array_end",
				position: t
			});
			else return {
				type: "error",
				message: "Expected \"]\" after array expression",
				position: t
			};
			break;
		case "'":
		case "\"": {
			let n = an(e, t);
			if (n.type === "error") return n;
			a = n.marks, t = n.position;
			break;
		}
		case "^":
			for (t++, a = []; e[t] === "." && e[t + 1] === "^";) a.push({
				name: "dblparent",
				position: r
			}), t += 2;
			a.push({
				name: "parent",
				position: r
			});
			break;
		case "@":
			a = [{
				name: "this",
				position: r
			}], t++;
			break;
		case "*":
			a = [{
				name: "everything",
				position: r
			}], t++;
			break;
		case "$": {
			let n = on(e, t + 1, Qt);
			n && (t += 1 + n, a = [
				{
					name: "param",
					position: r
				},
				{
					name: "ident",
					position: r + 1
				},
				{
					name: "ident_end",
					position: t
				}
			]);
			break;
		}
		default: {
			let n = on(e, t, Zt);
			if (n) {
				t += n;
				let i = "integer";
				if (e[t] === ".") {
					let n = on(e, t + 1, Zt);
					n && (i = "float", t += 1 + n);
				}
				if (e[t] === "e" || e[t] === "E") {
					i = "sci", t++, (e[t] === "+" || e[t] === "-") && t++;
					let n = on(e, t, Zt);
					if (!n) return {
						type: "error",
						message: "Exponent must be a number",
						position: t
					};
					t += n;
				}
				a = [{
					name: i,
					position: r
				}, {
					name: i + "_end",
					position: t
				}];
				break;
			}
			let i = on(e, t, Qt);
			if (i) {
				switch (t += i, e[t]) {
					case ":":
					case "(": {
						let n = nn(e, r, t);
						if (n.type === "error") return n;
						a = n.marks, t = n.position;
						break;
					}
					default: a = [
						{
							name: "this_attr",
							position: r
						},
						{
							name: "ident",
							position: r
						},
						{
							name: "ident_end",
							position: t
						}
					];
				}
				break;
			}
		}
	}
	if (!a) return {
		type: "error",
		message: "Expected expression",
		position: t
	};
	let o = 12, s;
	loop: for (;;) {
		let i = j(e, t);
		if (i === e.length) {
			t = i;
			break;
		}
		if (s = tn(e, i), s.type === "success") {
			for (a.unshift({
				name: "traverse",
				position: r
			}); s.type === "success";) a = a.concat(s.marks), t = s.position, s = tn(e, j(e, t));
			a.push({
				name: "traversal_end",
				position: t
			});
			continue;
		}
		switch (e[i]) {
			case "=":
				switch (e[i + 1]) {
					case ">": {
						if (n > 1 || o <= 1) break loop;
						let s = A(e, j(e, i + 2), 1);
						if (s.type === "error") return s;
						a = a.concat(s.marks), a.unshift({
							name: "pair",
							position: r
						}), t = s.position, o = 1;
						break;
					}
					case "=": {
						if (n > 4 || o <= 4) break loop;
						let s = A(e, j(e, i + 2), 5);
						if (s.type === "error") return s;
						a.unshift({
							name: "comp",
							position: r
						}), a.push({
							name: "op",
							position: i
						}, {
							name: "op_end",
							position: i + 2
						}), a = a.concat(s.marks), t = s.position, o = 4;
						break;
					}
					default: break loop;
				}
				break;
			case "+": {
				if (n > 6 || o < 6) break loop;
				let s = A(e, j(e, i + 1), 7);
				if (s.type === "error") return s;
				a = a.concat(s.marks), a.unshift({
					name: "add",
					position: r
				}), t = s.position, o = 6;
				break;
			}
			case "-": {
				if (n > 6 || o < 6) break loop;
				let s = A(e, j(e, i + 1), 7);
				if (s.type === "error") return s;
				a = a.concat(s.marks), a.unshift({
					name: "sub",
					position: r
				}), t = s.position, o = 6;
				break;
			}
			case "*": {
				if (e[i + 1] === "*") {
					if (n > 8 || o <= 8) break loop;
					let s = A(e, j(e, i + 2), 8);
					if (s.type === "error") return s;
					a = a.concat(s.marks), a.unshift({
						name: "pow",
						position: r
					}), t = s.position, o = 8;
					break;
				}
				if (n > 7 || o < 7) break loop;
				let s = A(e, j(e, i + 1), 8);
				if (s.type === "error") return s;
				a = a.concat(s.marks), a.unshift({
					name: "mul",
					position: r
				}), t = s.position, o = 7;
				break;
			}
			case "/": {
				if (n > 7 || o < 7) break loop;
				let s = A(e, j(e, i + 1), 8);
				if (s.type === "error") return s;
				a = a.concat(s.marks), a.unshift({
					name: "div",
					position: r
				}), t = s.position, o = 7;
				break;
			}
			case "%": {
				if (n > 7 || o < 7) break loop;
				let s = A(e, j(e, i + 1), 8);
				if (s.type === "error") return s;
				a = a.concat(s.marks), a.unshift({
					name: "mod",
					position: r
				}), t = s.position, o = 7;
				break;
			}
			case "<":
			case ">": {
				if (n > 4 || o <= 4) break loop;
				let s = i + 1;
				e[s] === "=" && s++;
				let c = A(e, j(e, s), 5);
				if (c.type === "error") return c;
				a.unshift({
					name: "comp",
					position: r
				}), a.push({
					name: "op",
					position: i
				}, {
					name: "op_end",
					position: s
				}), a = a.concat(c.marks), t = c.position, o = 4;
				break;
			}
			case "|":
				if (e[i + 1] === "|") {
					if (n > 2 || o < 2) break loop;
					let s = A(e, j(e, i + 2), 3);
					if (s.type === "error") return s;
					a = a.concat(s.marks), a.unshift({
						name: "or",
						position: r
					}), t = s.position, o = 2;
				} else {
					if (n > 11 || o < 11) break loop;
					let s = j(e, i + 1), c = on(e, s, Qt);
					if (!c) return {
						type: "error",
						message: "Expected identifier",
						position: s
					};
					if (t = s + c, e[t] === "(" || e[t] === ":") {
						let n = nn(e, s, t);
						if (n.type === "error") return n;
						a = a.concat(n.marks), a.unshift({
							name: "pipecall",
							position: r
						}), t = n.position, o = 11;
					}
				}
				break;
			case "&": {
				if (e[i + 1] != "&" || n > 3 || o < 3) break loop;
				let s = A(e, j(e, i + 2), 4);
				if (s.type === "error") return s;
				a = a.concat(s.marks), a.unshift({
					name: "and",
					position: r
				}), t = s.position, o = 3;
				break;
			}
			case "!": {
				if (e[i + 1] !== "=" || n > 4 || o <= 4) break loop;
				let s = A(e, j(e, i + 2), 5);
				if (s.type === "error") return s;
				a.unshift({
					name: "comp",
					position: r
				}), a.push({
					name: "op",
					position: i
				}, {
					name: "op_end",
					position: i + 2
				}), a = a.concat(s.marks), t = s.position, o = 4;
				break;
			}
			case "d":
				if (e.slice(i, i + 4) !== "desc" || n > 4 || o < 4) break loop;
				a.unshift({
					name: "desc",
					position: r
				}), t = i + 4, o = 4;
				break;
			case "a":
				if (e.slice(i, i + 3) !== "asc" || n > 4 || o < 4) break loop;
				a.unshift({
					name: "asc",
					position: r
				}), t = i + 3, o = 4;
				break;
			default: switch (sn(e, i, Qt)) {
				case "in": {
					if (n > 4 || o <= 4) break loop;
					t = j(e, i + 2);
					let s = !1;
					e[t] === "(" && (s = !0, t = j(e, t + 1));
					let c = t, l = A(e, t, 5);
					if (l.type === "error") return l;
					if (t = j(e, l.position), e[t] === "." && e[t + 1] === ".") {
						let n = "inc_range";
						e[t + 2] === "." ? (n = "exc_range", t = j(e, t + 3)) : t = j(e, t + 2);
						let i = A(e, t, 5);
						if (i.type === "error") return i;
						a.unshift({
							name: "in_range",
							position: r
						}), a = a.concat({
							name: n,
							position: c
						}, l.marks, i.marks), t = i.position;
					} else a.unshift({
						name: "comp",
						position: r
					}), a.push({
						name: "op",
						position: i
					}, {
						name: "op_end",
						position: i + 2
					}), a = a.concat(l.marks);
					if (s) {
						if (t = j(e, t), e[t] !== ")") return {
							type: "error",
							message: "Expected \")\" in group",
							position: t
						};
						t++;
					}
					o = 4;
					break;
				}
				case "match": {
					if (n > 4 || o <= 4) break loop;
					let s = A(e, j(e, i + 5), 5);
					if (s.type === "error") return s;
					a.unshift({
						name: "comp",
						position: r
					}), a.push({
						name: "op",
						position: i
					}, {
						name: "op_end",
						position: i + 5
					}), a = a.concat(s.marks), t = s.position, o = 4;
					break;
				}
				default: break loop;
			}
		}
	}
	let c = s?.type === "error" && s.position;
	return {
		type: "success",
		marks: a,
		position: t,
		failPosition: c
	};
}
function en(e, t) {
	let n = t, r, i = A(e, j(e, t + 1), 0);
	if (i.type === "error") return i;
	switch (t = j(e, i.position), e[t]) {
		case ",":
			for (r = [{
				name: "tuple",
				position: n
			}].concat(i.marks), t = j(e, t + 1);;) {
				if (i = A(e, t, 0), i.type === "error") return i;
				if (r.push(...i.marks), t = j(e, i.position), e[t] !== ",") break;
				t = j(e, t + 1);
			}
			if (e[t] !== ")") return {
				type: "error",
				message: "Expected \")\" after tuple expression",
				position: t
			};
			t++, r.push({
				name: "tuple_end",
				position: t
			});
			break;
		case ")":
			t++, r = [{
				name: "group",
				position: n
			}].concat(i.marks);
			break;
		default: return {
			type: "error",
			message: `Unexpected character "${e[t]}"`,
			position: t
		};
	}
	return {
		type: "success",
		marks: r,
		position: t
	};
}
function tn(e, t) {
	let n = t;
	switch (e[t]) {
		case ".": {
			if (t = j(e, t + 1), e[t] === "(") return en(e, t);
			let r = t, i = on(e, t, Qt);
			return i ? (t += i, {
				type: "success",
				marks: [
					{
						name: "attr_access",
						position: n
					},
					{
						name: "ident",
						position: r
					},
					{
						name: "ident_end",
						position: t
					}
				],
				position: t
			}) : {
				type: "error",
				message: "Expected identifier after \".\"",
				position: t
			};
		}
		case "-":
			if (e[t + 1] !== ">") return {
				type: "error",
				message: "Expected \">\" in reference",
				position: t
			};
			let r = [{
				name: "deref",
				position: n
			}];
			t += 2;
			let i = j(e, t), a = on(e, i, Qt);
			return a && (t = i + a, r.push({
				name: "deref_attr",
				position: i
			}, {
				name: "ident",
				position: i
			}, {
				name: "ident_end",
				position: t
			})), {
				type: "success",
				marks: r,
				position: t
			};
		case "[": {
			if (t = j(e, t + 1), e[t] === "]") return {
				type: "success",
				marks: [{
					name: "array_postfix",
					position: n
				}],
				position: t + 1
			};
			let r = t, i = A(e, t, 0);
			if (i.type === "error") return i;
			if (t = j(e, i.position), e[t] === "." && e[t + 1] === ".") {
				let a = "inc_range";
				e[t + 2] === "." ? (a = "exc_range", t += 3) : t += 2, t = j(e, t);
				let o = A(e, t, 0);
				return o.type === "error" ? o : (t = j(e, o.position), e[t] === "]" ? {
					type: "success",
					marks: [{
						name: "slice",
						position: n
					}, {
						name: a,
						position: r
					}].concat(i.marks, o.marks),
					position: t + 1
				} : {
					type: "error",
					message: "Expected \"]\" after array expression",
					position: t
				});
			}
			return e[t] === "]" ? {
				type: "success",
				marks: [{
					name: "square_bracket",
					position: n
				}].concat(i.marks),
				position: t + 1
			} : {
				type: "error",
				message: "Expected \"]\" after array expression",
				position: t
			};
		}
		case "|":
			if (t = j(e, t + 1), e[t] === "{") {
				let r = rn(e, t);
				return r.type === "error" || r.marks.unshift({
					name: "projection",
					position: n
				}), r;
			}
			break;
		case "{": {
			let r = rn(e, t);
			return r.type === "error" || r.marks.unshift({
				name: "projection",
				position: n
			}), r;
		}
	}
	return {
		type: "error",
		message: "Unexpected character in traversal",
		position: t
	};
}
function nn(e, t, n) {
	let r = [];
	if (r.push({
		name: "func_call",
		position: t
	}), e[n] === ":" && e[n + 1] === ":") {
		r.push({
			name: "namespace",
			position: t
		}), r.push({
			name: "ident",
			position: t
		}, {
			name: "ident_end",
			position: n
		}), n = j(e, n + 2);
		let i = on(e, n, Qt);
		if (!i) return {
			type: "error",
			message: "Expected function name",
			position: n
		};
		if (r.push({
			name: "ident",
			position: n
		}, {
			name: "ident_end",
			position: n + i
		}), n = j(e, n + i), e[n] !== "(") return {
			type: "error",
			message: "Expected \"(\" after function name",
			position: n
		};
		n++, n = j(e, n);
	} else r.push({
		name: "ident",
		position: t
	}, {
		name: "ident_end",
		position: n
	}), n = j(e, n + 1);
	let i = n;
	if (e[n] !== ")") for (;;) {
		let t = A(e, n, 0);
		if (t.type === "error") return t;
		if (r = r.concat(t.marks), i = t.position, n = j(e, t.position), e[n] !== "," || (n = j(e, n + 1), e[n] === ")")) break;
	}
	return e[n] === ")" ? (r.push({
		name: "func_args_end",
		position: i
	}), {
		type: "success",
		marks: r,
		position: n + 1
	}) : {
		type: "error",
		message: "Expected \")\" after function arguments",
		position: n
	};
}
function rn(e, t) {
	let n = [{
		name: "object",
		position: t
	}];
	for (t = j(e, t + 1); e[t] !== "}";) {
		let r = t;
		if (e.slice(t, t + 3) === "...") if (t = j(e, t + 3), e[t] !== "}" && e[t] !== ",") {
			let i = A(e, t, 0);
			if (i.type === "error") return i;
			n.push({
				name: "object_splat",
				position: r
			}), n = n.concat(i.marks), t = i.position;
		} else n.push({
			name: "object_splat_this",
			position: r
		});
		else {
			let i = A(e, t, 0);
			if (i.type === "error") return i;
			let a = j(e, i.position);
			if (i.marks[0].name === "str" && e[a] === ":") {
				let o = A(e, j(e, a + 1), 0);
				if (o.type === "error") return o;
				n.push({
					name: "object_pair",
					position: r
				}), n = n.concat(i.marks, o.marks), t = o.position;
			} else n = n.concat({
				name: "object_expr",
				position: t
			}, i.marks), t = i.position;
		}
		if (t = j(e, t), e[t] !== ",") break;
		t = j(e, t + 1);
	}
	return e[t] === "}" ? (t++, n.push({
		name: "object_end",
		position: t
	}), {
		type: "success",
		marks: n,
		position: t
	}) : {
		type: "error",
		message: "Expected \"}\" after object",
		position: t
	};
}
function an(e, t) {
	let n = e[t];
	t += 1;
	let r = [{
		name: "str",
		position: t
	}];
	str: for (;; t++) {
		if (t > e.length) return {
			type: "error",
			message: "Unexpected end of query",
			position: t
		};
		switch (e[t]) {
			case n:
				r.push({
					name: "str_end",
					position: t
				}), t++;
				break str;
			case "\\": r.push({
				name: "str_pause",
				position: t
			}), e[t + 1] === "u" ? e[t + 2] === "{" ? (r.push({
				name: "unicode_hex",
				position: t + 3
			}), t = e.indexOf("}", t + 3), r.push({
				name: "unicode_hex_end",
				position: t
			})) : (r.push({
				name: "unicode_hex",
				position: t + 2
			}), r.push({
				name: "unicode_hex_end",
				position: t + 6
			}), t += 5) : (r.push({
				name: "single_escape",
				position: t + 1
			}), t += 1), r.push({
				name: "str_start",
				position: t + 1
			});
		}
	}
	return {
		type: "success",
		marks: r,
		position: t
	};
}
function j(e, t) {
	return t + on(e, t, Xt);
}
function on(e, t, n) {
	let r = n.exec(e.slice(t));
	return r ? r[0].length : 0;
}
function sn(e, t, n) {
	let r = n.exec(e.slice(t));
	return r ? r[0] : null;
}
function cn(e, t) {
	let n = t, r = [], i = "", a = "";
	if (e.substring(n, n + 2) !== "fn") return {
		type: "success",
		position: n,
		marks: r
	};
	r.push({
		name: "func_decl",
		position: t
	}), n = j(e, n + 2);
	let o = n;
	if (i = sn(e, n, Qt), !i) return {
		type: "error",
		message: "Expected function name",
		position: n
	};
	if (r.push({
		name: "ident",
		position: o
	}, {
		name: "ident_end",
		position: n + i.length
	}), n = j(e, n + i.length), e.substring(n, n + 2) !== "::") return {
		type: "error",
		message: "Expected \"::\" after namespace",
		position: n
	};
	if (n = j(e, n + 2), a = sn(e, n, Qt), !a) return {
		type: "error",
		message: "Expected function name",
		position: n
	};
	if (r.push({
		name: "ident",
		position: n
	}, {
		name: "ident_end",
		position: n + a.length
	}), n = j(e, n + a.length), e[n] !== "(") return {
		type: "error",
		message: "Expected \"(\"",
		position: n
	};
	for (n = j(e, n + 1); n < e.length && e[n] !== ")";) {
		if (e[n] !== "$") return {
			type: "error",
			message: "Parameter should start with \"$\"",
			position: n
		};
		let t = n;
		n++;
		let i = sn(e, n, Qt);
		if (!i) return {
			type: "error",
			message: "Expected function name",
			position: n
		};
		if (n += i.length, r.push({
			name: "param",
			position: t
		}, {
			name: "ident",
			position: t + 1
		}, {
			name: "ident_end",
			position: n
		}), n = j(e, n), e[n] === ",") n = j(e, n + 1);
		else if (e[n] !== ")") return {
			type: "error",
			message: "Expected \",\" or \")\"",
			position: n
		};
	}
	if (e[n] !== ")") return {
		type: "error",
		message: "Expected \")\"",
		position: n
	};
	if (r.push({
		name: "func_params_end",
		position: n
	}), n = j(e, n + 1), e[n] !== "=") return {
		type: "error",
		message: "Expected \"=\"",
		position: n
	};
	n = j(e, n + 1);
	let s = A(e, n, 0);
	return s.type === "error" ? s : (r = r.concat(s.marks), n = j(e, s.position), e[n] === ";" ? (n++, {
		type: "success",
		position: n,
		marks: r,
		namespace: i,
		name: a
	}) : {
		type: "error",
		message: "Expected \";\" after function declaration",
		position: n
	});
}
function ln(e, t) {
	return (n) => t(e(n));
}
function un(e) {
	return (t) => ({
		type: "Map",
		base: t,
		expr: e({ type: "This" })
	});
}
function dn(e) {
	return (t) => ({
		type: "FlatMap",
		base: t,
		expr: e({ type: "This" })
	});
}
function fn(e, t) {
	if (!t) return {
		type: "a-a",
		build: e
	};
	switch (t.type) {
		case "a-a": return {
			type: "a-a",
			build: ln(e, t.build)
		};
		case "a-b": return {
			type: "a-b",
			build: ln(e, t.build)
		};
		case "b-b": return {
			type: "a-a",
			build: ln(e, un(t.build))
		};
		case "b-a": return {
			type: "a-a",
			build: ln(e, dn(t.build))
		};
		default: throw Error(`unknown type: ${t.type}`);
	}
}
function pn(e, t) {
	if (!t) return {
		type: "b-b",
		build: e
	};
	switch (t.type) {
		case "a-a":
		case "b-a": return {
			type: "b-a",
			build: ln(e, t.build)
		};
		case "a-b":
		case "b-b": return {
			type: "b-b",
			build: ln(e, t.build)
		};
		default: throw Error(`unknown type: ${t.type}`);
	}
}
function mn(e, t) {
	if (!t) return {
		type: "a-b",
		build: e
	};
	switch (t.type) {
		case "a-a":
		case "b-a": return {
			type: "a-a",
			build: ln(e, t.build)
		};
		case "a-b":
		case "b-b": return {
			type: "a-b",
			build: ln(e, t.build)
		};
		default: throw Error(`unknown type: ${t.type}`);
	}
}
function hn(e, t) {
	if (!t) return {
		type: "b-b",
		build: e
	};
	switch (t.type) {
		case "a-a": return {
			type: "a-a",
			build: ln(un(e), t.build)
		};
		case "a-b": return {
			type: "a-b",
			build: ln(un(e), t.build)
		};
		case "b-a": return {
			type: "b-a",
			build: ln(e, t.build)
		};
		case "b-b": return {
			type: "b-b",
			build: ln(e, t.build)
		};
		default: throw Error(`unknown type: ${t.type}`);
	}
}
function M(e, t, n = 0) {
	switch (e.type) {
		case "Projection": return {
			...e,
			base: M(e.base, t, n),
			expr: M(e.expr, t, n + 1)
		};
		case "Filter": return {
			...e,
			base: M(e.base, t, n),
			expr: M(e.expr, t, n + 1)
		};
		case "Parent":
			if (n - e.n < 0) throw Error(`Invalid use of parent operator (^). No parent n ${e.n} at level ${n}.`);
			return e;
		case "Parameter":
			if (t.find((t) => t.name === e.name)) throw Error(`Function parameters are not allowed outside function declarations: ${e.name}`);
			return e;
		case "Array": return {
			...e,
			elements: e.elements.map((e) => ({
				...e,
				value: M(e.value, t, n)
			}))
		};
		case "PipeFuncCall": return {
			...e,
			base: M(e.base, t, n),
			args: e.args.map((e) => M(e, t, n))
		};
		case "Object": return {
			...e,
			attributes: e.attributes.map((e) => {
				switch (e.type) {
					case "ObjectAttributeValue": return {
						...e,
						value: M(e.value, t, n)
					};
					case "ObjectConditionalSplat": return {
						...e,
						condition: M(e.condition, t, n),
						value: M(e.value, t, n)
					};
					case "ObjectSplat": return {
						...e,
						value: M(e.value, t, n)
					};
					default: return e;
				}
			})
		};
		case "FlatMap":
		case "Map": return {
			...e,
			expr: M(e.expr, t, n),
			base: M(e.base, t, n)
		};
		case "FuncCall": return {
			...e,
			args: e.args.map((e) => M(e, t, n))
		};
		case "Tuple": return {
			...e,
			members: e.members.map((e) => M(e, t, n))
		};
		case "Select": {
			let r = e.alternatives.map((e) => ({
				...e,
				condition: M(e.condition, t, n),
				value: M(e.value, t, n)
			}));
			return e.fallback ? {
				...e,
				alternatives: r,
				fallback: M(e.fallback, t, n)
			} : {
				...e,
				alternatives: r
			};
		}
		case "SelectorNested": return {
			...e,
			base: M(e.base, t, n),
			nested: M(e.nested, t, n)
		};
		case "SelectorFuncCall": return {
			...e,
			arg: M(e.arg, t, n)
		};
		case "AccessAttribute":
		case "AccessElement":
		case "ArrayCoerce":
		case "Asc":
		case "Desc":
		case "Deref":
		case "Group":
		case "Neg":
		case "Not":
		case "Slice":
		case "Pos": return e.base ? {
			...e,
			base: M(e.base, t, n)
		} : e;
		case "InRange": return {
			...e,
			base: M(e.base, t, n),
			left: M(e.left, t, n),
			right: M(e.right, t, n)
		};
		case "OpCall":
		case "And":
		case "Or": return {
			...e,
			left: M(e.left, t, n),
			right: M(e.right, t, n)
		};
		case "Parameter":
		case "Everything":
		case "This":
		case "Value":
		case "Context": return e;
		default: throw Error(`Handle all cases: ${e.type}`);
	}
}
var gn = {
	"'": "'",
	"\"": "\"",
	"\\": "\\",
	"/": "/",
	b: "\b",
	f: "\f",
	n: "\n",
	r: "\r",
	t: "	"
};
function _n(e) {
	let t = parseInt(e, 16);
	return String.fromCharCode(t);
}
var N = class extends Error {
	name = "GroqQueryError";
};
function vn(e, t = /* @__PURE__ */ new Set()) {
	let n = {
		group(e) {
			return {
				type: "Group",
				base: e.process(n)
			};
		},
		everything() {
			return { type: "Everything" };
		},
		this() {
			return { type: "This" };
		},
		parent() {
			return {
				type: "Parent",
				n: 1
			};
		},
		dblparent(e) {
			return {
				type: "Parent",
				n: e.process(n).n + 1
			};
		},
		traverse(e) {
			let t = e.process(n), r = [];
			for (; e.getMark().name !== "traversal_end";) r.push(e.process(i));
			e.shift();
			let a = null;
			for (let e = r.length - 1; e >= 0; e--) a = r[e](a);
			if ((t.type === "Everything" || t.type === "Array" || t.type === "PipeFuncCall") && (a = fn((e) => e, a)), a === null) throw Error("BUG: unexpected empty traversal");
			return a.build(t);
		},
		this_attr(e) {
			let t = e.processString();
			return t === "null" ? {
				type: "Value",
				value: null
			} : t === "true" ? {
				type: "Value",
				value: !0
			} : t === "false" ? {
				type: "Value",
				value: !1
			} : {
				type: "AccessAttribute",
				name: t
			};
		},
		neg(e) {
			return {
				type: "Neg",
				base: e.process(n)
			};
		},
		pos(e) {
			return {
				type: "Pos",
				base: e.process(n)
			};
		},
		add(e) {
			return {
				type: "OpCall",
				op: "+",
				left: e.process(n),
				right: e.process(n)
			};
		},
		sub(e) {
			return {
				type: "OpCall",
				op: "-",
				left: e.process(n),
				right: e.process(n)
			};
		},
		mul(e) {
			return {
				type: "OpCall",
				op: "*",
				left: e.process(n),
				right: e.process(n)
			};
		},
		div(e) {
			return {
				type: "OpCall",
				op: "/",
				left: e.process(n),
				right: e.process(n)
			};
		},
		mod(e) {
			return {
				type: "OpCall",
				op: "%",
				left: e.process(n),
				right: e.process(n)
			};
		},
		pow(e) {
			return {
				type: "OpCall",
				op: "**",
				left: e.process(n),
				right: e.process(n)
			};
		},
		comp(e) {
			let t = e.process(n);
			return {
				type: "OpCall",
				op: e.processString(),
				left: t,
				right: e.process(n)
			};
		},
		in_range(e) {
			let t = e.process(n), r = e.getMark().name === "inc_range";
			return e.shift(), {
				type: "InRange",
				base: t,
				left: e.process(n),
				right: e.process(n),
				isInclusive: r
			};
		},
		str(e) {
			let t = "";
			loop: for (; e.hasMark();) {
				let n = e.getMark();
				switch (n.name) {
					case "str_end":
						t += e.processStringEnd();
						break loop;
					case "str_pause":
						t += e.processStringEnd();
						break;
					case "str_start":
						e.shift();
						break;
					case "single_escape": {
						let n = e.slice(1);
						e.shift(), t += gn[n];
						break;
					}
					case "unicode_hex":
						e.shift(), t += _n(e.processStringEnd());
						break;
					default: throw Error(`unexpected mark: ${n.name}`);
				}
			}
			return {
				type: "Value",
				value: t
			};
		},
		integer(e) {
			let t = e.processStringEnd();
			return {
				type: "Value",
				value: Number(t)
			};
		},
		float(e) {
			let t = e.processStringEnd();
			return {
				type: "Value",
				value: Number(t)
			};
		},
		sci(e) {
			let t = e.processStringEnd();
			return {
				type: "Value",
				value: Number(t)
			};
		},
		object(e) {
			let t = [];
			for (; e.getMark().name !== "object_end";) t.push(e.process(r));
			return e.shift(), {
				type: "Object",
				attributes: t
			};
		},
		array(e) {
			let t = [];
			for (; e.getMark().name !== "array_end";) {
				let r = !1;
				e.getMark().name === "array_splat" && (r = !0, e.shift());
				let i = e.process(n);
				t.push({
					type: "ArrayElement",
					value: i,
					isSplat: r
				});
			}
			return e.shift(), {
				type: "Array",
				elements: t
			};
		},
		tuple(e) {
			let t = [];
			for (; e.getMark().name !== "tuple_end";) t.push(e.process(n));
			return e.shift(), {
				type: "Tuple",
				members: t
			};
		},
		func_call(r) {
			let i = "global";
			r.getMark().name === "namespace" && (r.shift(), i = r.processString());
			let o = r.processString();
			if (i === "global" && o === "select") {
				let e = {
					type: "Select",
					alternatives: []
				};
				for (; r.getMark().name !== "func_args_end";) if (r.getMark().name === "pair") {
					if (e.fallback) throw new N("unexpected argument to select()");
					r.shift();
					let t = r.process(n), i = r.process(n);
					e.alternatives.push({
						type: "SelectAlternative",
						condition: t,
						value: i
					});
				} else {
					if (e.fallback) throw new N("unexpected argument to select()");
					e.fallback = r.process(n);
				}
				return r.shift(), e;
			}
			let s = [];
			for (; r.getMark().name !== "func_args_end";) Cn(i, o, s.length) ? s.push(r.process(a)) : s.push(r.process(n));
			if (r.shift(), i === "global" && (o === "before" || o === "after") && r.parseOptions.mode === "delta") return {
				type: "Context",
				key: o
			};
			if (i === "global" && o === "boost" && !r.allowBoost) throw new N("unexpected boost");
			let c = r.customFunctions[`${i}::${o}`];
			if (c !== void 0) {
				let n = En(e, t), i = new Yt(r.string, c.marks, r.customFunctions, e).process(n);
				return bn(o, i.params.length, s.length), Sn(i.body, (e) => M(e, i.params), (e) => xn(e, i.params, s));
			}
			let l = Wt[i];
			if (!l) throw new N(`Undefined namespace: ${i}`);
			let u = l[o];
			if (!u || (u.arity !== void 0 && bn(o, u.arity, s.length), u.mode !== void 0 && u.mode !== r.parseOptions.mode)) throw new N(`Undefined function: ${o}`);
			return {
				type: "FuncCall",
				namespace: i,
				name: o,
				args: s
			};
		},
		pipecall(e) {
			let t = e.process(n);
			e.shift();
			let r = "global";
			if (e.getMark().name === "namespace" && (e.shift(), r = e.processString()), r !== "global") throw new N(`Undefined namespace: ${r}`);
			let i = e.processString(), a = [], o = e.allowBoost;
			for (i === "score" && (e.allowBoost = !0);;) {
				let t = e.getMark().name;
				if (t === "func_args_end") break;
				if (i === "order") {
					if (t === "asc") {
						e.shift(), a.push({
							type: "Asc",
							base: e.process(n)
						});
						continue;
					} else if (t === "desc") {
						e.shift(), a.push({
							type: "Desc",
							base: e.process(n)
						});
						continue;
					}
				}
				a.push(e.process(n));
			}
			e.shift(), e.allowBoost = o;
			let s = Gt[i];
			if (!s) throw new N(`Undefined pipe function: ${i}`);
			return s.arity && bn(i, s.arity, a.length), {
				type: "PipeFuncCall",
				base: t,
				name: i,
				args: a
			};
		},
		pair() {
			throw new N("unexpected =>");
		},
		and(e) {
			return {
				type: "And",
				left: e.process(n),
				right: e.process(n)
			};
		},
		or(e) {
			return {
				type: "Or",
				left: e.process(n),
				right: e.process(n)
			};
		},
		not(e) {
			return {
				type: "Not",
				base: e.process(n)
			};
		},
		asc() {
			throw new N("unexpected asc");
		},
		desc() {
			throw new N("unexpected desc");
		},
		param(e) {
			let t = e.processString();
			return e.parseOptions.params && e.parseOptions.params.hasOwnProperty(t) ? {
				type: "Value",
				value: e.parseOptions.params[t]
			} : {
				type: "Parameter",
				name: t
			};
		}
	}, r = {
		object_expr(e) {
			if (e.getMark().name === "pair") return e.shift(), {
				type: "ObjectConditionalSplat",
				condition: e.process(n),
				value: e.process(n)
			};
			let t = e.process(n);
			return {
				type: "ObjectAttributeValue",
				name: yn(t),
				value: t
			};
		},
		object_pair(e) {
			let t = e.process(n);
			if (t.type !== "Value") throw Error("name must be string");
			let r = e.process(n);
			return {
				type: "ObjectAttributeValue",
				name: t.value,
				value: r
			};
		},
		object_splat(e) {
			return {
				type: "ObjectSplat",
				value: e.process(n)
			};
		},
		object_splat_this() {
			return {
				type: "ObjectSplat",
				value: { type: "This" }
			};
		}
	}, i = {
		square_bracket(e) {
			let t = e.process(n), r = Bt(t);
			return r && r.type === "number" ? (e) => mn((e) => ({
				type: "AccessElement",
				base: e,
				index: r.data
			}), e) : r && r.type === "string" ? (e) => pn((e) => ({
				type: "AccessAttribute",
				base: e,
				name: r.data
			}), e) : (e) => fn((e) => ({
				type: "Filter",
				base: e,
				expr: t
			}), e);
		},
		slice(e) {
			let t = e.getMark().name === "inc_range";
			e.shift();
			let r = e.process(n), i = e.process(n), a = Bt(r), o = Bt(i);
			if (!a || !o || a.type !== "number" || o.type !== "number") throw new N("slicing must use constant numbers");
			return (e) => fn((e) => ({
				type: "Slice",
				base: e,
				left: a.data,
				right: o.data,
				isInclusive: t
			}), e);
		},
		projection(e) {
			let t = e.process(n);
			return (e) => hn((e) => ({
				type: "Projection",
				base: e,
				expr: t
			}), e);
		},
		attr_access(e) {
			let t = e.processString();
			return (e) => pn((e) => ({
				type: "AccessAttribute",
				base: e,
				name: t
			}), e);
		},
		deref(e) {
			let t = null;
			e.getMark().name === "deref_attr" && (e.shift(), t = e.processString());
			let n = (e) => t ? {
				type: "AccessAttribute",
				base: e,
				name: t
			} : e;
			return (e) => pn((e) => n({
				type: "Deref",
				base: e
			}), e);
		},
		array_postfix() {
			return (e) => fn((e) => ({
				type: "ArrayCoerce",
				base: e
			}), e);
		}
	}, a = {
		group(e) {
			return e.process(a);
		},
		everything() {
			throw Error("Invalid selector syntax");
		},
		this() {
			throw Error("Invalid selector syntax");
		},
		parent() {
			throw Error("Invalid selector syntax");
		},
		dblparent() {
			throw Error("Invalid selector syntax");
		},
		traverse(e) {
			let t = e.process(a);
			for (; e.getMark().name !== "traversal_end";) if (e.getMark().name === "array_postfix") e.shift(), t = {
				type: "ArrayCoerce",
				base: t
			};
			else if (e.getMark().name === "square_bracket") {
				e.shift();
				let r = e.process(n), i = Bt(r);
				if (i && i.type === "number") throw Error("Invalid array access expression");
				t = i && i.type === "string" ? {
					type: "AccessAttribute",
					base: t,
					name: i.data
				} : {
					type: "Filter",
					base: t,
					expr: r
				};
			} else if (e.getMark().name === "attr_access") {
				e.shift();
				let n = e.processString();
				t = {
					type: "AccessAttribute",
					base: t,
					name: n
				};
			} else if (e.getMark().name === "tuple" || e.getMark().name === "group") {
				let n = e.process(a);
				if (!Rt(n)) throw Error(`Unexpected result parsing nested selector: ${n.type}`);
				t = {
					type: "SelectorNested",
					base: t,
					nested: n
				};
			} else throw Error("Invalid selector syntax");
			return e.shift(), t;
		},
		this_attr(e) {
			return {
				type: "AccessAttribute",
				name: e.processString()
			};
		},
		attr_access() {
			throw Error("Invalid selector syntax");
		},
		neg() {
			throw Error("Invalid selector syntax");
		},
		pos() {
			throw Error("Invalid selector syntax");
		},
		add() {
			throw Error("Invalid selector syntax");
		},
		sub() {
			throw Error("Invalid selector syntax");
		},
		mul() {
			throw Error("Invalid selector syntax");
		},
		div() {
			throw Error("Invalid selector syntax");
		},
		mod() {
			throw Error("Invalid selector syntax");
		},
		pow() {
			throw Error("Invalid selector syntax");
		},
		comp() {
			throw Error("Invalid selector syntax");
		},
		in_range() {
			throw Error("Invalid selector syntax");
		},
		str() {
			throw Error("Invalid selector syntax");
		},
		integer() {
			throw Error("Invalid selector syntax");
		},
		float() {
			throw Error("Invalid selector syntax");
		},
		sci() {
			throw Error("Invalid selector syntax");
		},
		object() {
			throw Error("Invalid selector syntax");
		},
		array() {
			throw Error("Invalid selector syntax");
		},
		tuple(e) {
			let t = [];
			for (; e.getMark().name !== "tuple_end";) t.push(e.process(a));
			return e.shift(), {
				type: "Tuple",
				members: t
			};
		},
		func_call(e, t) {
			let r = n.func_call(e, t);
			if (r.name === "anywhere" && r.args.length === 1) return {
				type: "SelectorFuncCall",
				name: "anywhere",
				arg: r.args[0]
			};
			throw Error("Invalid selector syntax");
		},
		pipecall() {
			throw Error("Invalid selector syntax");
		},
		pair() {
			throw Error("Invalid selector syntax");
		},
		and() {
			throw Error("Invalid selector syntax");
		},
		or() {
			throw Error("Invalid selector syntax");
		},
		not() {
			throw Error("Invalid selector syntax");
		},
		asc() {
			throw Error("Invalid selector syntax");
		},
		desc() {
			throw Error("Invalid selector syntax");
		},
		param() {
			throw Error("Invalid selector syntax");
		}
	};
	return n;
}
function yn(e) {
	if (e.type === "AccessAttribute" && !e.base) return e.name;
	if (e.type === "PipeFuncCall" || e.type === "Deref" || e.type === "Map" || e.type === "FlatMap" || e.type === "Projection" || e.type === "Slice" || e.type === "Filter" || e.type === "AccessElement" || e.type === "ArrayCoerce" || e.type === "Group") return yn(e.base);
	throw new N(`Cannot determine property key for type: ${e.type}`);
}
function bn(e, t, n) {
	if (typeof t == "number") {
		if (n !== t) throw new N(`Incorrect number of arguments to function ${e}(). Expected ${t}, got ${n}.`);
	} else if (t && !t(n)) throw new N(`Incorrect number of arguments to function ${e}().`);
}
function xn(e, t, n) {
	if (e.type !== "Parameter") throw new N(`Expected parameter node, got ${e.type}`);
	let r = t.findIndex((t) => t.name === e.name);
	if (r === -1) throw new N(`Missing argument for parameter ${e.name} in function call`);
	return n[r];
}
function Sn(e, t, n = (e) => e) {
	if (e.type === "Projection") {
		if (e.base.type === "Parameter") return {
			type: "Projection",
			base: n(e.base),
			expr: t(e.expr)
		};
		if (e.base.type === "Deref" && e.base.base.type === "Parameter") return {
			type: "Projection",
			base: {
				type: "Deref",
				base: n(e.base.base)
			},
			expr: t(e.expr)
		};
	}
	if (e.type === "Map" && e.base.type === "ArrayCoerce" && e.base.base.type === "Parameter") return {
		type: "Map",
		base: {
			type: "ArrayCoerce",
			base: n(e.base.base)
		},
		expr: t(e.expr)
	};
	throw new N(`Unexpected function body, must be a projection. Got "${e.type}"`);
}
function Cn(e, t, n) {
	return e == "diff" && n == 2 && ["changedAny", "changedOnly"].includes(t);
}
var wn = class extends Error {
	position;
	line;
	column;
	name = "GroqSyntaxError";
	constructor(e, t, n) {
		super(`Syntax error in GROQ query at position ${e}${n ? `: ${n}` : ""}`), this.position = e;
		let r = 1, i = 0;
		for (let n = 0; n < e && n < t.length; n++) t[n] === "\n" && (r++, i = n + 1);
		this.line = r, this.column = e - i + 1;
	}
};
function Tn(e, t = {}) {
	let n = $t(e);
	if (n.type === "error") throw new wn(n.position, e, n.message);
	Dn(e, n.customFunctions, t);
	let r = new Yt(e, n.marks, n.customFunctions, t), i = vn(t);
	return r.process(i);
}
function En(e, t = /* @__PURE__ */ new Set()) {
	return { func_decl(n) {
		let r = n.processString(), i = n.processString(), a = `${r}::${i}`;
		if (t.has(a)) throw new N(`Recursive function definition detected for ${a}`);
		let o = vn(e, /* @__PURE__ */ new Set([...t, a])), s = [];
		for (; n.getMark().name !== "func_params_end";) {
			let e = n.process(o);
			if (e.type !== "Parameter") throw Error("expected parameter");
			s.push(e);
		}
		if (s.length !== 1) throw new N("Custom functions can only have one parameter");
		return n.shift(), {
			type: "FuncDeclaration",
			namespace: r,
			name: i,
			params: s,
			body: n.process(o)
		};
	} };
}
function Dn(e, t, n) {
	for (let r in t) {
		if (!t.hasOwnProperty(r)) continue;
		let i = t[r], a = new Yt(e, i.marks, t, n), o = En(n), s = a.process(o);
		Sn(s.body, (e) => M(e, s.params));
	}
}
var { compare: On } = new Intl.Collator("en"), kn = (0, Jt.default)("typeEvaluator:scope:trace");
kn.log = console.log.bind(console);
var An = (0, Jt.default)("typeEvaluator:evaluate:trace");
An.log = console.log.bind(console);
var jn = (0, Jt.default)("typeEvaluator:evaluate:debug");
jn.log = console.log.bind(console), (0, Jt.default)("typeEvaluator:evaluate:warn");
//#endregion
//#region src/report/analyze-groq.ts
var Mn = "uses the {...} spread operator and may waste bandwidth by fetching more fields than needed";
function Nn() {
	return {
		dereferences: 0,
		projections: 0,
		subqueries: 0,
		spreads: 0,
		arrayTraversals: 0,
		functionCalls: {}
	};
}
function Pn(e) {
	return !e || typeof e != "object" ? null : e;
}
function Fn(e, t) {
	let n = typeof e == "string" ? e : "", r = typeof t == "string" ? t : "unknown";
	return n ? `${n}::${r}` : r;
}
function In(e, t, n) {
	let r = Pn(e);
	if (r) {
		switch (r.type) {
			case "Deref":
				t.dereferences += 1;
				break;
			case "Projection":
				t.projections += 1;
				break;
			case "Filter":
				t.arrayTraversals += 1, n && (t.subqueries += 1);
				break;
			case "ObjectSplat":
			case "ObjectConditionalSplat":
				t.spreads += 1;
				break;
			case "FuncCall":
				{
					let e = Fn(r.namespace, r.name);
					t.functionCalls[e] = (t.functionCalls[e] ?? 0) + 1;
					let n = r.args;
					if (Array.isArray(n)) for (let e of n) In(e, t, !0);
				}
				return;
			case "PipeFuncCall":
				{
					let e = Fn("", r.name);
					t.functionCalls[e] = (t.functionCalls[e] ?? 0) + 1, In(r.base, t, n);
					let i = r.args;
					if (Array.isArray(i)) for (let e of i) In(e, t, !0);
				}
				return;
			case "SelectorFuncCall":
				{
					let e = Fn("", r.name);
					t.functionCalls[e] = (t.functionCalls[e] ?? 0) + 1, In(r.arg, t, !0);
				}
				return;
			default: break;
		}
		for (let e of Object.values(r)) if (Array.isArray(e)) for (let r of e) In(r, t, n);
		else In(e, t, n);
	}
}
function Ln(e, t) {
	try {
		let n = Tn(e, t ? { params: t } : {}), r = Nn();
		return In(n, r, !1), r;
	} catch (e) {
		if (e instanceof wn) return null;
		throw e;
	}
}
function Rn(e, t) {
	let n = Ln(e, t);
	return n !== null && n.spreads > 0;
}
//#endregion
//#region src/report/classify-url.ts
var zn = /* @__PURE__ */ new Set([
	".jpg",
	".jpeg",
	".png",
	".gif",
	".webp",
	".svg",
	".avif",
	".ico"
]), Bn = /* @__PURE__ */ new Set([
	".mp4",
	".webm",
	".mov",
	".m4v",
	".ogv"
]), Vn = /* @__PURE__ */ new Set([
	".pdf",
	".zip",
	".json",
	".txt",
	".css",
	".js",
	".xml",
	".csv",
	".doc",
	".docx",
	".xls",
	".xlsx",
	".ppt",
	".pptx",
	".woff",
	".woff2",
	".ttf",
	".eot",
	".mp3",
	".wav",
	".ogg"
]);
function Hn(e) {
	try {
		return new URL(e).pathname;
	} catch {
		return null;
	}
}
function Un(e) {
	let t = e.lastIndexOf(".");
	return t === -1 ? "" : e.slice(t).toLowerCase();
}
function Wn(e) {
	return e.includes("/data/query") || e.endsWith("/query");
}
function Gn(e) {
	let t = Hn(e);
	return t ? Un(t) === ".mp4" : !1;
}
function Kn(e) {
	let t = Hn(e);
	if (!t) return null;
	if (Wn(t)) return "query";
	let n = t.toLowerCase();
	if (n.includes("/images/")) return "image";
	let r = Un(t);
	return zn.has(r) ? "image" : Bn.has(r) ? "video" : n.includes("/files/") || Vn.has(r) ? "file" : null;
}
//#endregion
//#region src/report/groq-query.ts
function qn(e) {
	return decodeURIComponent(e.replace(/\+/g, " "));
}
function Jn(e) {
	try {
		let t = new URL(e).searchParams.get("query");
		if (!t) return null;
		let n = qn(t).trim();
		return n.length > 0 ? n : null;
	} catch {
		return null;
	}
}
function Yn(e) {
	try {
		let t = new URL(e).searchParams.get("params");
		if (!t) return null;
		let n = qn(t).trim();
		if (!n) return null;
		let r = JSON.parse(n);
		return !r || typeof r != "object" || Array.isArray(r) ? null : r;
	} catch {
		return null;
	}
}
//#endregion
//#region src/report/group-urls-by-kind.ts
var Xn = [
	{
		id: "image",
		label: "Images"
	},
	{
		id: "file",
		label: "Files"
	},
	{
		id: "query",
		label: "Queries"
	},
	{
		id: "other",
		label: "Other"
	}
];
function Zn(e) {
	return Xn.filter((t) => t.id !== "other" || e.other.length > 0);
}
function Qn(e) {
	let t = {
		image: [],
		file: [],
		query: [],
		other: []
	};
	for (let n of e) {
		let e = Kn(n.label);
		e === "image" ? t.image.push(n) : e === "file" || e === "video" ? t.file.push(n) : e === "query" ? t.query.push(n) : t.other.push(n);
	}
	return t;
}
function $n(e) {
	for (let t of [
		"image",
		"file",
		"query",
		"other"
	]) if (e[t].length > 0) return t;
	return "image";
}
//#endregion
//#region src/report/parse-image-url.ts
function er(e) {
	let t = e.lastIndexOf(".");
	return t === -1 ? "" : e.slice(t).toLowerCase();
}
function tr(e) {
	if (e === null) return null;
	let t = Number.parseInt(e, 10);
	return Number.isFinite(t) ? t : null;
}
function nr(e) {
	let t = er(e), n = t ? e.slice(0, -t.length) : e, r = n.split("-"), i = (r[r.length - 1] ?? "").match(/^(\d+)x(\d+)$/);
	return i ? {
		id: r.slice(0, -1).join("-") || n,
		width: tr(i[1] ?? null)
	} : {
		id: n,
		width: null
	};
}
function rr(e) {
	try {
		let t = new URL(e), n = t.pathname.split("/").filter(Boolean).at(-1) ?? e, r = er(n) === ".svg", { id: i, width: a } = nr(n);
		return {
			id: i,
			width: tr(t.searchParams.get("w")) ?? a,
			quality: tr(t.searchParams.get("q")),
			format: t.searchParams.get("format") ?? t.searchParams.get("fm"),
			isSvg: r
		};
	} catch {
		return {
			id: e,
			width: null,
			quality: null,
			format: null,
			isSvg: !1
		};
	}
}
function ir(e) {
	try {
		let t = new URL(e);
		return t.searchParams.has("dl") ? (t.searchParams.delete("dl"), t.toString()) : e;
	} catch {
		return e;
	}
}
function ar(e) {
	return e !== null && e > 2e3;
}
function or(e, t) {
	return !t && e !== null && e > 87;
}
function sr(e) {
	return e !== null && e !== "auto";
}
//#endregion
//#region node_modules/ua-parser-js/src/main/ua-parser.mjs
var cr = "2.0.10", lr = 500, ur = "user-agent", dr = "", fr = "?", P = {
	FUNCTION: "function",
	OBJECT: "object",
	STRING: "string",
	UNDEFINED: "undefined"
}, pr = "browser", mr = "cpu", hr = "device", gr = "engine", _r = "os", vr = "result", F = "name", I = "type", L = "vendor", R = "version", yr = "architecture", br = "major", z = "model", xr = "console", B = "mobile", V = "tablet", H = "smarttv", Sr = "wearable", Cr = "xr", wr = "embedded", Tr = "fetcher", Er = "inapp", Dr = "brands", Or = "formFactors", kr = "fullVersionList", Ar = "platform", jr = "platformVersion", Mr = "bitness", Nr = "sec-ch-ua", Pr = Nr + "-full-version-list", Fr = Nr + "-arch", Ir = Nr + "-" + Mr, Lr = Nr + "-form-factors", Rr = Nr + "-" + B, zr = Nr + "-" + z, Br = Nr + "-" + Ar, Vr = Br + "-version", Hr = [
	Dr,
	kr,
	B,
	z,
	Ar,
	jr,
	yr,
	Or,
	Mr
], Ur = "Amazon", Wr = "Apple", Gr = "ASUS", Kr = "BlackBerry", qr = "Google", Jr = "Huawei", Yr = "Lenovo", Xr = "Honor", Zr = "LG", Qr = "Microsoft", $r = "Motorola", ei = "Nvidia", ti = "OnePlus", ni = "OPPO", ri = "Samsung", ii = "Sharp", ai = "Sony", oi = "Xiaomi", si = "Zebra", ci = "Chrome", li = "Chromium", ui = "Chromecast", di = "Edge", fi = "Firefox", pi = "Opera", mi = "Facebook", hi = "Sogou", gi = "Mobile ", _i = " Browser", vi = "Windows", yi = typeof window !== P.UNDEFINED && window.navigator ? window.navigator : void 0, bi = yi && yi.userAgentData ? yi.userAgentData : void 0, xi = function(e, t) {
	var n = {}, r = t;
	if (!wi(t)) for (var i in r = {}, t) for (var a in t[i]) r[a] = t[i][a].concat(r[a] ? r[a] : []);
	for (var o in e) n[o] = r[o] && r[o].length % 2 == 0 ? r[o].concat(e[o]) : e[o];
	return n;
}, Si = function(e) {
	for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
	return t;
}, Ci = function(e, t) {
	if (typeof e === P.OBJECT && e.length > 0) {
		for (var n in e) if (Di(t) == Di(e[n])) return !0;
		return !1;
	}
	return Ti(e) ? Di(t) == Di(e) : !1;
}, wi = function(e, t) {
	for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? wi(e[n]) : !1);
}, Ti = function(e) {
	return typeof e === P.STRING;
}, Ei = function(e) {
	if (e) {
		for (var t = [], n = ki(e).split(","), r = 0; r < n.length; r++) if (n[r].indexOf(";") > -1) {
			var i = Mi(n[r]).split(";v=");
			t[r] = {
				brand: i[0],
				version: i[1]
			};
		} else t[r] = Mi(n[r]);
		return t;
	}
}, Di = function(e) {
	return Ti(e) ? e.toLowerCase() : e;
}, Oi = function(e) {
	return Ti(e) ? ji(/[^\d\.]/g, e).split(".")[0] : void 0;
}, ki = function(e) {
	return Ti(e) ? Mi(ji(/\\?\"/g, e), lr) : void 0;
}, Ai = function(e) {
	for (var t in e) if (e.hasOwnProperty(t)) {
		var n = e[t];
		typeof n == P.OBJECT && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0;
	}
	return this;
}, ji = function(e, t) {
	return Ti(t) ? t.replace(e, dr) : t;
}, Mi = function(e, t) {
	return e = ji(/^\s\s*/, String(e)), typeof t === P.UNDEFINED ? e : e.substring(0, t);
}, Ni = function(e, t) {
	if (!(!e || !t)) for (var n = 0, r, i, a, o, s, c; n < t.length && !s;) {
		var l = t[n], u = t[n + 1];
		for (r = i = 0; r < l.length && !s && l[r];) if (s = l[r++].exec(e), s) for (a = 0; a < u.length; a++) c = s[++i], o = u[a], typeof o === P.OBJECT && o.length > 0 ? o.length === 2 ? typeof o[1] == P.FUNCTION ? this[o[0]] = o[1].call(this, c) : this[o[0]] = o[1] : o.length >= 3 && (typeof o[1] === P.FUNCTION && !(o[1].exec && o[1].test) ? o.length > 3 ? this[o[0]] = c ? o[1].apply(this, o.slice(2)) : void 0 : this[o[0]] = c ? o[1].call(this, c, o[2]) : void 0 : o.length == 3 ? this[o[0]] = c ? c.replace(o[1], o[2]) : void 0 : o.length == 4 ? this[o[0]] = c ? o[3].call(this, c.replace(o[1], o[2])) : void 0 : o.length > 4 && (this[o[0]] = c ? o[3].apply(this, [c.replace(o[1], o[2])].concat(o.slice(4))) : void 0)) : this[o] = c || void 0;
		n += 2;
	}
}, Pi = function(e, t) {
	return t.test.test(e) ? t.ifTrue : t.ifFalse;
}, Fi = function(e, t) {
	for (var n in t) if (typeof t[n] === P.OBJECT && t[n].length > 0) {
		for (var r = 0; r < t[n].length; r++) if (Ci(t[n][r], e)) return n === fr ? void 0 : n;
	} else if (Ci(t[n], e)) return n === fr ? void 0 : n;
	return t.hasOwnProperty("*") ? t["*"] : e;
}, Ii = {
	ME: "4.90",
	"NT 3.51": "3.51",
	"NT 4.0": "4.0",
	2e3: ["5.0", "5.01"],
	XP: ["5.1", "5.2"],
	Vista: "6.0",
	7: "6.1",
	8: "6.2",
	"8.1": "6.3",
	10: ["6.4", "10.0"],
	NT: ""
}, Li = {
	embedded: "Automotive",
	mobile: "Mobile",
	tablet: ["Tablet", "EInk"],
	smarttv: "TV",
	wearable: "Watch",
	xr: ["VR", "XR"],
	"?": ["Desktop", "Unknown"],
	"*": void 0
}, Ri = {
	Chrome: "Google Chrome",
	Edge: "Microsoft Edge",
	"Edge WebView2": "Microsoft Edge WebView2",
	"Chrome WebView": "Android WebView",
	"Chrome Headless": "HeadlessChrome",
	"Huawei Browser": "HuaweiBrowser",
	"MIUI Browser": "Miui Browser",
	"Opera Mobi": "OperaMobile",
	Yandex: "YaBrowser"
}, zi = {
	browser: [
		[/\b(?:crmo|crios)\/([\w\.]+)/i],
		[R, [F, gi + "Chrome"]],
		[/webview.+edge\/([\w\.]+)/i],
		[
			R,
			[F, di + " WebView"],
			[I, Er]
		],
		[/edg(?:e|ios|a)?\/([\w\.]+)/i],
		[R, [F, "Edge"]],
		[
			/(opera mini)\/([-\w\.]+)/i,
			/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
			/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
		],
		[F, R],
		[/opios[\/ ]+([\w\.]+)/i],
		[R, [F, pi + " Mini"]],
		[/\bop(?:rg)?x\/([\w\.]+)/i],
		[R, [F, pi + " GX"]],
		[/\bopr\/([\w\.]+)/i],
		[R, [F, pi]],
		[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
		[R, [F, "Baidu"]],
		[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
		[R, [F, "Maxthon"]],
		[
			/(kindle)\/([\w\.]+)/i,
			/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
			/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
			/(?:ms|\()(ie) ([\w\.]+)/i,
			/(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:hi|lg |ovi|qute)browser|palemoon)\/v?([-\w\.]+)/i,
			/(brave)(?: chrome)?\/([\d\.]+)/i,
			/(aloha|heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,
			/(qwant)(?:ios|mobile)\/([\d\.]+)/i,
			/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i
		],
		[F, R],
		[/quark(?:pc)?\/([-\w\.]+)/i],
		[R, [F, "Quark"]],
		[/\bddg\/([\w\.]+)/i],
		[R, [F, "DuckDuckGo"]],
		[/(?:\buc? ?browser|(?:juc.+)ucweb| ucpc)[\/ ]?([\w\.]+)/i],
		[R, [F, "UCBrowser"]],
		[
			/microm.+\bqbcore\/([\w\.]+)/i,
			/\bqbcore\/([\w\.]+).+microm/i,
			/micromessenger\/([\w\.]+)/i
		],
		[R, [F, "WeChat"]],
		[/konqueror\/([\w\.]+)/i],
		[R, [F, "Konqueror"]],
		[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
		[R, [F, "IE"]],
		[/ya(?:search)?browser\/([\w\.]+)/i],
		[R, [F, "Yandex"]],
		[/slbrowser\/([\w\.]+)/i],
		[R, [F, "Smart " + Yr + _i]],
		[/(av(?:ast|g|ira))\/([\w\.]+)/i],
		[[
			F,
			/(.+)/,
			"$1 Secure" + _i
		], R],
		[/norton\/([\w\.]+)/i],
		[R, [F, "Norton Private" + _i]],
		[/\bfocus\/([\w\.]+)/i],
		[R, [F, fi + " Focus"]],
		[/ mms\/([\w\.]+)$/i],
		[R, [F, pi + " Neon"]],
		[/ opt\/([\w\.]+)$/i],
		[R, [F, pi + " Touch"]],
		[/coc_coc\w+\/([\w\.]+)/i],
		[R, [F, "Coc Coc"]],
		[/dolfin\/([\w\.]+)/i],
		[R, [F, "Dolphin"]],
		[/coast\/([\w\.]+)/i],
		[R, [F, pi + " Coast"]],
		[/miuibrowser\/([\w\.]+)/i],
		[R, [F, "MIUI" + _i]],
		[/fxios\/([\w\.-]+)/i],
		[R, [F, gi + fi]],
		[/\bqihoobrowser\/?([\w\.]*)/i],
		[R, [F, "360"]],
		[/\b(qq)\/([\w\.]+)/i],
		[[
			F,
			/(.+)/,
			"$1Browser"
		], R],
		[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
		[[
			F,
			/(.+)/,
			"$1" + _i
		], R],
		[/ HBPC\/([\w\.]+)/],
		[R, [F, Jr + _i]],
		[/samsungbrowser\/([\w\.]+)/i],
		[R, [F, ri + " Internet"]],
		[/metasr[\/ ]?([\d\.]+)/i],
		[R, [F, hi + " Explorer"]],
		[/(sogou)mo\w+\/([\d\.]+)/i],
		[[F, hi + " Mobile"], R],
		[
			/(electron)\/([\w\.]+) safari/i,
			/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
			/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
		],
		[F, R],
		[/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],
		[F],
		[/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],
		[R, F],
		[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
		[
			[F, mi],
			R,
			[I, Er]
		],
		[
			/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
			/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
			/(daum)apps[\/ ]([\w\.]+)/i,
			/safari (line)\/([\w\.]+)/i,
			/\b(line)\/([\w\.]+)\/iab/i,
			/(alipay)client\/([\w\.]+)/i,
			/(twitter)(?:and| f.+e\/([\w\.]+))/i,
			/(bing)(?:web|sapphire)\/([\w\.]+)/i,
			/(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i
		],
		[
			F,
			R,
			[I, Er]
		],
		[/\bgsa\/([\w\.]+) .*safari\//i],
		[
			R,
			[F, "GSA"],
			[I, Er]
		],
		[/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],
		[
			R,
			[F, "TikTok"],
			[I, Er]
		],
		[/\[(linkedin)app\]/i],
		[F, [I, Er]],
		[/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
		[
			[
				F,
				/(.+)/,
				"Zalo"
			],
			R,
			[I, Er]
		],
		[/(chromium)[\/ ]([-\w\.]+)/i],
		[F, R],
		[/ome-(lighthouse)$/i],
		[F, [I, Tr]],
		[/headlesschrome(?:\/([\w\.]+)| )/i],
		[R, [F, ci + " Headless"]],
		[/wv\).+chrome\/([\w\.]+).+edgw\//i],
		[
			R,
			[F, di + " WebView2"],
			[I, Er]
		],
		[/; wv\).+(chrome)\/([\w\.]+)/i],
		[
			[F, ci + " WebView"],
			R,
			[I, Er]
		],
		[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
		[R, [F, "Android" + _i]],
		[/chrome\/([\w\.]+) mobile/i],
		[R, [F, gi + "Chrome"]],
		[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
		[F, R],
		[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
		[R, [F, gi + "Safari"]],
		[/iphone .*mobile(?:\/\w+ | ?)safari/i],
		[[F, gi + "Safari"]],
		[/version\/([\w\.\,]+) .*(safari)/i],
		[R, F],
		[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
		[F, [R, "1"]],
		[/(webkit|khtml)\/([\w\.]+)/i],
		[F, R],
		[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
		[[F, gi + fi], R],
		[/(navigator|netscape\d?)\/([-\w\.]+)/i],
		[[F, "Netscape"], R],
		[/(wolvic|librewolf)\/([\w\.]+)/i],
		[F, R],
		[/mobile vr; rv:([\w\.]+)\).+firefox/i],
		[R, [F, fi + " Reality"]],
		[
			/ekiohf.+(flow)\/([\w\.]+)/i,
			/(swiftfox)/i,
			/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
			/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i,
			/(firefox)\/([\w\.]+)/i,
			/(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i,
			/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
			/\b(links) \(([\w\.]+)/i
		],
		[F, [
			R,
			/_/g,
			"."
		]],
		[/(cobalt)\/([\w\.]+)/i],
		[F, [
			R,
			/[^\d\.]+./,
			dr
		]]
	],
	cpu: [
		[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
		[[yr, "amd64"]],
		[/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
		[[yr, "ia32"]],
		[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
		[[yr, "arm64"]],
		[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
		[[yr, "armhf"]],
		[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
		[[yr, "arm"]],
		[/ sun4\w[;\)]/i],
		[[yr, "sparc"]],
		[
			/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
			/((ppc|powerpc)(64)?)( mac|;|\))/i,
			/(?:osf1|[freopnt]{3,4}bsd) (alpha)/i
		],
		[[
			yr,
			/ower/,
			dr,
			Di
		]],
		[/mc680.0/i],
		[[yr, "68k"]],
		[/winnt.+\[axp/i],
		[[yr, "alpha"]]
	],
	device: [
		[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
		[
			z,
			[L, ri],
			[I, V]
		],
		[
			/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
			/samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
			/sec-(sgh\w+)/i
		],
		[
			z,
			[L, ri],
			[I, B]
		],
		[/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
		[
			z,
			[L, Wr],
			[I, B]
		],
		[/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i, /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],
		[
			z,
			[L, Wr],
			[I, V]
		],
		[/(macintosh);/i],
		[z, [L, Wr]],
		[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
		[
			z,
			[L, ii],
			[I, B]
		],
		[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
		[
			z,
			[L, Xr],
			[I, V]
		],
		[/honor([-\w ]+)[;\)]/i],
		[
			z,
			[L, Xr],
			[I, B]
		],
		[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
		[
			z,
			[L, Jr],
			[I, V]
		],
		[/(?:huawei) ?([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],
		[
			z,
			[L, Jr],
			[I, B]
		],
		[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
		[
			[
				z,
				/_/g,
				" "
			],
			[L, oi],
			[I, V]
		],
		[
			/\b; (\w+) build\/hm\1/i,
			/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
			/oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,
			/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,
			/; ([\w ]+) miui\/v?\d/i
		],
		[
			[
				z,
				/_/g,
				" "
			],
			[L, oi],
			[I, B]
		],
		[/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
		[
			z,
			[L, ti],
			[I, B]
		],
		[/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
		[
			z,
			[L, ni],
			[I, B]
		],
		[/\b(opd2(\d{3}a?))(?: bui|\))/i],
		[
			z,
			[
				L,
				Fi,
				{
					OnePlus: [
						"203",
						"304",
						"403",
						"404",
						"413",
						"415"
					],
					"*": ni
				}
			],
			[I, V]
		],
		[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
		[
			z,
			[L, "BLU"],
			[I, B]
		],
		[/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
		[
			z,
			[L, "Vivo"],
			[I, B]
		],
		[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
		[
			z,
			[L, "Realme"],
			[I, B]
		],
		[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
		[
			z,
			[L, Yr],
			[I, V]
		],
		[/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
		[
			z,
			[L, Yr],
			[I, B]
		],
		[
			/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
			/\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
			/((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
		],
		[
			z,
			[L, $r],
			[I, B]
		],
		[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
		[
			z,
			[L, $r],
			[I, V]
		],
		[/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
		[
			z,
			[L, Zr],
			[I, V]
		],
		[
			/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
			/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
			/\blg-?([\d\w]+) bui/i
		],
		[
			z,
			[L, Zr],
			[I, B]
		],
		[/(nokia) (t[12][01])/i],
		[
			L,
			z,
			[I, V]
		],
		[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],
		[
			[
				z,
				/_/g,
				" "
			],
			[I, B],
			[L, "Nokia"]
		],
		[/(pixel (c|tablet))\b/i],
		[
			z,
			[L, qr],
			[I, V]
		],
		[/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i],
		[
			z,
			[L, qr],
			[I, B]
		],
		[/(google) (pixelbook( go)?)/i],
		[L, z],
		[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
		[
			z,
			[L, ai],
			[I, B]
		],
		[/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
		[
			[z, "Xperia Tablet"],
			[L, ai],
			[I, V]
		],
		[
			/(alexa)webm/i,
			/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
			/(kf[a-z]+)( bui|\)).+silk\//i
		],
		[
			z,
			[L, Ur],
			[I, V]
		],
		[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
		[
			[
				z,
				/(.+)/g,
				"Fire Phone $1"
			],
			[L, Ur],
			[I, B]
		],
		[/(playbook);[-\w\),; ]+(rim)/i],
		[
			z,
			L,
			[I, V]
		],
		[/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
		[
			z,
			[L, Kr],
			[I, B]
		],
		[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
		[
			z,
			[L, Gr],
			[I, V]
		],
		[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
		[
			z,
			[L, Gr],
			[I, B]
		],
		[/(nexus 9)/i],
		[
			z,
			[L, "HTC"],
			[I, V]
		],
		[
			/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
			/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
			/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
		],
		[
			L,
			[
				z,
				/_/g,
				" "
			],
			[I, B]
		],
		[/tcl (xess p17aa)/i, /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],
		[
			z,
			[L, "TCL"],
			[I, V]
		],
		[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],
		[
			z,
			[L, "TCL"],
			[I, B]
		],
		[/(itel) ((\w+))/i],
		[
			[L, Di],
			z,
			[
				I,
				Fi,
				{
					tablet: ["p10001l", "w7001"],
					"*": "mobile"
				}
			]
		],
		[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
		[
			z,
			[L, "Acer"],
			[I, V]
		],
		[/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
		[
			z,
			[L, "Meizu"],
			[I, B]
		],
		[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
		[
			z,
			[L, "Ulefone"],
			[I, B]
		],
		[/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
		[
			z,
			[L, "Energizer"],
			[I, B]
		],
		[/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
		[
			z,
			[L, "Cat"],
			[I, B]
		],
		[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
		[
			z,
			[L, "Smartfren"],
			[I, B]
		],
		[/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
		[
			z,
			[L, "Nothing"],
			[I, B]
		],
		[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
		[
			z,
			[L, "Archos"],
			[I, V]
		],
		[/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
		[
			z,
			[L, "Archos"],
			[I, B]
		],
		[/blackview ([-\w ]+)( b|\))/i, /; (bv\d{4}[-\w ]*)( b|\))/i],
		[
			z,
			[L, "Blackview"],
			[I, B]
		],
		[/; (n159v)/i],
		[
			z,
			[L, "HMD"],
			[I, B]
		],
		[/((revvl[ \w\+]+|tm(?:rv|af)\w*[45]g(?:tb)?))( b|\))/i],
		[
			z,
			[
				I,
				Pi,
				{
					test: /ta?b/i,
					ifTrue: V,
					ifFalse: B
				}
			],
			[L, "T-Mobile"]
		],
		[/(imo) (tab \w+)/i, /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],
		[
			L,
			z,
			[I, V]
		],
		[
			/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
			/; (blu|coolpad|cubot|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([-\w\+ ]+?)(?: bui|\)|; r)/i,
			/(hp) ([\w ]+\w)/i,
			/(microsoft); (lumia[\w ]+)/i,
			/(oppo) ?([\w ]+) bui/i,
			/(hisense) ([ehv][\w ]+)\)/i,
			/droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i
		],
		[
			L,
			z,
			[I, B]
		],
		[
			/(kobo)\s(ereader|touch)/i,
			/(hp).+(touchpad(?!.+tablet)|tablet)/i,
			/(kindle)\/([\w\.]+)/i
		],
		[
			L,
			z,
			[I, V]
		],
		[/(surface duo)/i],
		[
			z,
			[L, Qr],
			[I, V]
		],
		[/droid [\d\.]+; (fp\du?)(?: b|\))/i],
		[
			z,
			[L, "Fairphone"],
			[I, B]
		],
		[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
		[
			z,
			[L, ei],
			[I, V]
		],
		[/(sprint) (\w+)/i],
		[
			L,
			z,
			[I, B]
		],
		[/(kin\.[onetw]{3})/i],
		[
			[
				z,
				/\./g,
				" "
			],
			[L, Qr],
			[I, B]
		],
		[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
		[
			z,
			[L, si],
			[I, V]
		],
		[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
		[
			z,
			[L, si],
			[I, B]
		],
		[/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
		[L, [I, H]],
		[/hbbtv.+maple;(\d+)/i],
		[
			[
				z,
				/^/,
				"SmartTV"
			],
			[L, ri],
			[I, H]
		],
		[/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
		[
			L,
			z,
			[I, H]
		],
		[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
		[[L, Zr], [I, H]],
		[/(apple) ?tv/i],
		[
			L,
			[z, Wr + " TV"],
			[I, H]
		],
		[/crkey.*devicetype\/chromecast/i],
		[
			[z, ui + " Third Generation"],
			[L, qr],
			[I, H]
		],
		[/crkey.*devicetype\/([^/]*)/i],
		[
			[
				z,
				/^/,
				"Chromecast "
			],
			[L, qr],
			[I, H]
		],
		[/fuchsia.*crkey/i],
		[
			[z, ui + " Nest Hub"],
			[L, qr],
			[I, H]
		],
		[/crkey/i],
		[
			[z, ui],
			[L, qr],
			[I, H]
		],
		[/(portaltv)/i],
		[
			z,
			[L, mi],
			[I, H]
		],
		[/droid.+aft(\w+)( bui|\))/i],
		[
			z,
			[L, Ur],
			[I, H]
		],
		[/(shield \w+ tv)/i],
		[
			z,
			[L, ei],
			[I, H]
		],
		[/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
		[
			z,
			[L, ii],
			[I, H]
		],
		[/(bravia[\w ]+)( bui|\))/i],
		[
			z,
			[L, ai],
			[I, H]
		],
		[/(mi(tv|box)-?\w+) bui/i],
		[
			z,
			[L, oi],
			[I, H]
		],
		[/Hbbtv.*(technisat) (.*);/i],
		[
			L,
			z,
			[I, H]
		],
		[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
		[
			[
				L,
				/.+\/(\w+)/,
				"$1",
				Fi,
				{ LG: "lge" }
			],
			[z, Mi],
			[I, H]
		],
		[/(playstation \w+)/i],
		[
			z,
			[L, ai],
			[I, xr]
		],
		[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
		[
			z,
			[L, Qr],
			[I, xr]
		],
		[
			/(ouya)/i,
			/(nintendo) (\w+)/i,
			/(retroid) (pocket ([^\)]+))/i,
			/(valve).+(steam deck)/i,
			/droid.+; ((shield|rgcube|gr0006))( bui|\))/i
		],
		[
			[
				L,
				Fi,
				{
					Nvidia: "Shield",
					Anbernic: "RGCUBE",
					Logitech: "GR0006"
				}
			],
			z,
			[I, xr]
		],
		[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
		[
			z,
			[L, ri],
			[I, Sr]
		],
		[/((pebble))app/i, /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
		[
			L,
			z,
			[I, Sr]
		],
		[/(ow(?:19|20)?we?[1-3]{1,3})/i],
		[
			z,
			[L, ni],
			[I, Sr]
		],
		[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
		[
			z,
			[L, Wr],
			[I, Sr]
		],
		[/(opwwe\d{3})/i],
		[
			z,
			[L, ti],
			[I, Sr]
		],
		[/(moto 360)/i],
		[
			z,
			[L, $r],
			[I, Sr]
		],
		[/(smartwatch 3)/i],
		[
			z,
			[L, ai],
			[I, Sr]
		],
		[/(g watch r)/i],
		[
			z,
			[L, Zr],
			[I, Sr]
		],
		[/droid.+; (wt63?0{2,3})\)/i],
		[
			z,
			[L, si],
			[I, Sr]
		],
		[/droid.+; (glass) \d/i],
		[
			z,
			[L, qr],
			[I, Cr]
		],
		[/(pico) ([\w ]+) os\d/i],
		[
			L,
			z,
			[I, Cr]
		],
		[/(quest( \d| pro)?s?).+vr/i],
		[
			z,
			[L, mi],
			[I, Cr]
		],
		[/mobile vr; rv.+firefox/i],
		[[I, Cr]],
		[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
		[L, [I, wr]],
		[/(aeobc)\b/i],
		[
			z,
			[L, Ur],
			[I, wr]
		],
		[/(homepod).+mac os/i],
		[
			z,
			[L, Wr],
			[I, wr]
		],
		[/windows iot/i],
		[[I, wr]],
		[/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
		[z, [I, H]],
		[/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],
		[[I, H]],
		[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],
		[z, [
			I,
			Fi,
			{
				mobile: "Mobile",
				xr: "VR",
				"*": V
			}
		]],
		[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
		[[I, V]],
		[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
		[[I, B]],
		[/droid .+?; ([\w\. -]+)( bui|\))/i],
		[z, [L, "Generic"]]
	],
	engine: [
		[/windows.+ edge\/([\w\.]+)/i],
		[R, [F, di + "HTML"]],
		[/(arkweb)\/([\w\.]+)/i],
		[F, R],
		[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
		[R, [F, "Blink"]],
		[
			/(presto)\/([\w\.]+)/i,
			/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
			/ekioh(flow)\/([\w\.]+)/i,
			/(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,
			/(icab)[\/ ]([23]\.[\d\.]+)/i,
			/\b(libweb)/i
		],
		[F, R],
		[/ladybird\//i],
		[[F, "LibWeb"]],
		[/rv\:([\w\.]{1,9})\b.+(gecko)/i],
		[R, F]
	],
	os: [
		[/(windows nt) (6\.[23]); arm/i],
		[[
			F,
			/N/,
			"R"
		], [
			R,
			Fi,
			Ii
		]],
		[/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i, /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i],
		[F, R],
		[/windows nt ?([\d\.\)]*)(?!.+xbox)/i, /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],
		[[
			R,
			/(;|\))/g,
			"",
			Fi,
			Ii
		], [F, vi]],
		[/(windows ce)\/?([\d\.]*)/i],
		[F, R],
		[
			/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
			/(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
			/\btvos ?([\w\.]+)/i,
			/cfnetwork\/.+darwin/i
		],
		[[
			R,
			/_/g,
			"."
		], [F, "iOS"]],
		[/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],
		[[F, "macOS"], [
			R,
			/_/g,
			"."
		]],
		[/android ([\d\.]+).*crkey/i],
		[R, [F, ui + " Android"]],
		[/fuchsia.*crkey\/([\d\.]+)/i],
		[R, [F, ui + " Fuchsia"]],
		[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
		[R, [F, ui + " SmartSpeaker"]],
		[/linux.*crkey\/([\d\.]+)/i],
		[R, [F, ui + " Linux"]],
		[/crkey\/([\d\.]+)/i],
		[R, [F, ui]],
		[/droid ([\w\.]+)\b.+(android[- ]x86)/i],
		[R, F],
		[/(ubuntu) ([\w\.]+) like android/i],
		[[
			F,
			/(.+)/,
			"$1 Touch"
		], R],
		[/(harmonyos)[\/ ]?([\d\.]*)/i, /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i],
		[F, R],
		[/\(bb(10);/i],
		[R, [F, Kr]],
		[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
		[R, [F, "Symbian"]],
		[/mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i],
		[R, [F, fi + " OS"]],
		[/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i, /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],
		[R, [F, "webOS"]],
		[/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
		[[
			R,
			Fi,
			{
				25: "120",
				24: "108",
				23: "94",
				22: "87",
				6: "79",
				5: "68",
				4: "53",
				3: "38",
				2: "538",
				1: "537",
				"*": "TV"
			}
		], [F, "webOS"]],
		[/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],
		[R, [F, "watchOS"]],
		[/cros [\w]+(?:\)| ([\w\.]+)\b)/i],
		[R, [F, "Chrome OS"]],
		[/kepler ([\w\.]+); (aft|aeo)/i],
		[R, [F, "Vega OS"]],
		[
			/(netrange)mmh/i,
			/(nettv)\/(\d+\.[\w\.]+)/i,
			/(nintendo|playstation) (\w+)/i,
			/(xbox); +xbox ([^\);]+)/i,
			/(pico) .+os([\w\.]+)/i,
			/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
			/linux.+(mint)[\/\(\) ]?([\w\.]*)/i,
			/(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,
			/([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
			/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
			/\b(aix)[; ]([1-9\.]{0,4})/i,
			/(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,
			/(gnu) ?([\w\.]*)/i,
			/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
			/(haiku) ?(r\d)?/i
		],
		[F, R],
		[/(sunos) ?([\d\.]*)/i],
		[[F, "Solaris"], R],
		[/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
		[F, R]
	]
}, Bi = (function() {
	var e = {
		init: {},
		isIgnore: {},
		isIgnoreRgx: {},
		toString: {}
	};
	return Ai.call(e.init, [
		[pr, [
			F,
			R,
			br,
			I
		]],
		[mr, [yr]],
		[hr, [
			I,
			z,
			L
		]],
		[gr, [F, R]],
		[_r, [F, R]]
	]), Ai.call(e.isIgnore, [
		[pr, [R, br]],
		[gr, [R]],
		[_r, [R]]
	]), Ai.call(e.isIgnoreRgx, [[pr, / ?browser$/i], [_r, / ?os$/i]]), Ai.call(e.toString, [
		[pr, [F, R]],
		[mr, [yr]],
		[hr, [L, z]],
		[gr, [F, R]],
		[_r, [F, R]]
	]), e;
})(), Vi = function(e, t) {
	var n = Bi.init[t], r = Bi.isIgnore[t] || 0, i = Bi.isIgnoreRgx[t] || 0, a = Bi.toString[t] || 0;
	function o() {
		Ai.call(this, n);
	}
	return o.prototype.getItem = function() {
		return e;
	}, o.prototype.withClientHints = function() {
		return bi ? bi.getHighEntropyValues(Hr).then(function(t) {
			return e.setCH(new Hi(t, !1)).parseCH().get();
		}) : e.parseCH().get();
	}, o.prototype.withFeatureCheck = function() {
		return e.detectFeature().get();
	}, t != vr && (o.prototype.is = function(e) {
		var t = !1;
		for (var n in this) if (this.hasOwnProperty(n) && !Ci(r, n) && Di(i ? ji(i, this[n]) : this[n]) == Di(i ? ji(i, e) : e)) {
			if (t = !0, e != P.UNDEFINED) break;
		} else if (e == P.UNDEFINED && t) {
			t = !t;
			break;
		}
		return t;
	}, o.prototype.toString = function() {
		var e = dr;
		for (var t in a) typeof this[a[t]] !== P.UNDEFINED && (e += (e ? " " : dr) + this[a[t]]);
		return e || P.UNDEFINED;
	}), o.prototype.then = function(e) {
		var t = this, n = function() {
			for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
		};
		n.prototype = {
			is: o.prototype.is,
			toString: o.prototype.toString,
			withClientHints: o.prototype.withClientHints,
			withFeatureCheck: o.prototype.withFeatureCheck
		};
		var r = new n();
		return e(r), r;
	}, new o();
};
function Hi(e, t) {
	if (e ||= {}, Ai.call(this, Hr), t) Ai.call(this, [
		[Dr, Ei(e[Nr])],
		[kr, Ei(e[Pr])],
		[B, /\?1/.test(e[Rr])],
		[z, ki(e[zr])],
		[Ar, ki(e[Br])],
		[jr, ki(e[Vr])],
		[yr, ki(e[Fr])],
		[Or, Ei(e[Lr])],
		[Mr, ki(e[Ir])]
	]);
	else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== P.UNDEFINED && (this[n] = e[n]);
}
function Ui(e, t, n, r) {
	return Ai.call(this, [
		["itemType", e],
		["ua", t],
		["uaCH", r],
		["rgxMap", n],
		["data", Vi(this, e)]
	]), this;
}
Ui.prototype.get = function(e) {
	return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data;
}, Ui.prototype.set = function(e, t) {
	return this.data[e] = t, this;
}, Ui.prototype.setCH = function(e) {
	return this.uaCH = e, this;
}, Ui.prototype.detectFeature = function() {
	if (yi && yi.userAgent == this.ua) switch (this.itemType) {
		case pr:
			yi.brave && typeof yi.brave.isBrave == P.FUNCTION && this.set(F, "Brave");
			break;
		case hr:
			!this.get(I) && bi && bi[B] && this.set(I, B), this.get(z) == "Macintosh" && yi && typeof yi.standalone !== P.UNDEFINED && yi.maxTouchPoints && yi.maxTouchPoints > 2 && this.set(z, "iPad").set(I, V);
			break;
		case _r:
			!this.get(F) && bi && bi[Ar] && this.set(F, bi[Ar]);
			break;
		case vr:
			var e = this.data, t = function(t) {
				return e[t].getItem().detectFeature().get();
			};
			this.set(pr, t(pr)).set(mr, t(mr)).set(hr, t(hr)).set(gr, t(gr)).set(_r, t(_r));
	}
	return this;
}, Ui.prototype.parseUA = function() {
	switch (this.itemType != vr && Ni.call(this.data, this.ua, this.rgxMap), this.itemType) {
		case pr:
			this.set(br, Oi(this.get(R)));
			break;
		case _r:
			if (this.get(F) == "iOS" && this.get(R) && /^1[89][^\d]/.exec(this.get(R))) {
				var e = /\) Version\/((\d+)[\d\.]*)/.exec(this.ua);
				e && parseInt(e[2], 10) >= 26 && this.set(R, e[1]);
			}
			break;
	}
	return this;
}, Ui.prototype.parseCH = function() {
	var e = this.uaCH, t = this.rgxMap;
	switch (this.itemType) {
		case pr:
		case gr:
			var n = e[kr] || e[Dr], r;
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i].brand || n[i], o = n[i].version;
				this.itemType == pr && !/not.a.brand/i.test(a) && (!r || /Chrom/.test(r) && a != li || r == di && /WebView2/.test(a)) && (a = Fi(a, Ri), r = this.get(F), r && !/Chrom/.test(r) && /Chrom/.test(a) || this.set(F, a).set(R, o).set(br, Oi(o)), r = a), this.itemType == gr && a == li && this.set(R, o);
			}
			break;
		case mr:
			var s = e[yr];
			s && (s && e[Mr] == "64" && (s += "64"), Ni.call(this.data, s + ";", t));
			break;
		case hr:
			if (e[B] && this.set(I, B), e[z] && (this.set(z, e[z]), !this.get(I) || !this.get(L))) {
				var c = {};
				Ni.call(c, "droid 9; " + e[z] + ")", t), !this.get(I) && c.type && this.set(I, c.type), !this.get(L) && c.vendor && this.set(L, c.vendor);
			}
			if (e[Or]) {
				var l;
				if (typeof e[Or] != "string") for (var u = 0; !l && u < e[Or].length;) l = Fi(e[Or][u++], Li);
				else l = Fi(e[Or], Li);
				this.set(I, l);
			}
			break;
		case _r:
			var d = e[Ar];
			if (d) {
				var f = e[jr];
				d == vi && (f = parseInt(Oi(f), 10) >= 13 ? "11" : "10"), this.set(F, d).set(R, f);
			}
			this.get(F) == vi && e[z] == "Xbox" && this.set(F, "Xbox").set(R, void 0);
			break;
		case vr:
			var p = this.data, m = function(t) {
				return p[t].getItem().setCH(e).parseCH().get();
			};
			this.set(pr, m(pr)).set(mr, m(mr)).set(hr, m(hr)).set(gr, m(gr)).set(_r, m(_r));
	}
	return this;
};
function Wi(e, t, n) {
	if (typeof e === P.OBJECT ? (wi(e, !0) ? (typeof t === P.OBJECT && (n = t), t = e) : (n = e, t = void 0), e = void 0) : typeof e === P.STRING && !wi(t, !0) && (n = t, t = void 0), n) if (typeof n.append === P.FUNCTION) {
		var r = {};
		n.forEach(function(e, t) {
			r[String(t).toLowerCase()] = e;
		}), n = r;
	} else {
		var i = {};
		for (var a in n) n.hasOwnProperty(a) && (i[String(a).toLowerCase()] = n[a]);
		n = i;
	}
	if (!(this instanceof Wi)) return new Wi(e, t, n).getResult();
	var o = typeof e === P.STRING ? e : n && n[ur] ? n[ur] : yi && yi.userAgent ? yi.userAgent : dr, s = new Hi(n, !0), c = zi, l = function(e) {
		return e == vr ? function() {
			return new Ui(e, o, c, s).set("ua", o).set(pr, this.getBrowser()).set(mr, this.getCPU()).set(hr, this.getDevice()).set(gr, this.getEngine()).set(_r, this.getOS()).get();
		} : function() {
			return new Ui(e, o, c[e], s).parseUA().get();
		};
	};
	return Ai.call(this, [
		["getBrowser", l(pr)],
		["getCPU", l(mr)],
		["getDevice", l(hr)],
		["getEngine", l(gr)],
		["getOS", l(_r)],
		["getResult", l(vr)],
		["getUA", function() {
			return o;
		}],
		["setUA", function(e) {
			return Ti(e) && (o = Mi(e, lr)), this;
		}],
		["useExtension", function(e) {
			return e && (c = xi(c, e)), this;
		}]
	]).setUA(o).useExtension(t), this;
}
Wi.VERSION = cr, Wi.BROWSER = Si([
	F,
	R,
	br,
	I
]), Wi.CPU = Si([yr]), Wi.DEVICE = Si([
	z,
	L,
	I,
	xr,
	B,
	H,
	V,
	Sr,
	wr
]), Wi.ENGINE = Wi.OS = Si([F, R]);
//#endregion
//#region node_modules/ua-parser-js/src/extensions/ua-parser-extensions.mjs
var U = "model", W = "name", G = "type", K = "vendor", q = "version", Gi = "mobile", Ki = "tablet", qi = "crawler", Ji = "cli", Yi = "email", Xi = "fetcher", Zi = "inapp", Qi = "mediaplayer", $i = "library", ea = function(e) {
	return {
		YahooMobile: "Yahoo Mail",
		YahooMail: "Yahoo Mail",
		"K-9": "K-9 Mail",
		"K-9 Mail": "K-9 Mail",
		Zdesktop: "Zimbra",
		zdesktop: "Zimbra"
	}[e] || e;
}, ta = Object.freeze({ browser: [[/(wget|curl|lynx|elinks|httpie|powershell)[\/ ]\(?([\w\.-]+)/i], [
	W,
	q,
	[G, Ji]
]] }), na = Object.freeze({ browser: [
	[
		/((?:adidx|ahrefs|amazon|(?:amzn|oai)-search|awario(?:smart|rss)?|bing|brave|cc|contx|coveo|criteo|dot|duckduck(?:go-favicons-)?|exa|facebook|gpt|iask|kagi|kangaroo |linkedin|mj12|mojeek|onespot-scraper|perplexity|sbintuitions|semrush|seznam|surdotly|swift|yep)bot)\/([\w\.-]+)/i,
		/(algolia crawler(?: renderscript)?)\/?([\w\.]*)/i,
		/(applebot(?:-extended)?)\/?([\w\.]*)/i,
		/(baiduspider[-imagevdonwsfcpr]{0,7})\/?([\w\.]*)/i,
		/(claude(?:bot|-searchbot|-web)|anthropic-ai)\/?([\w\.]*)/i,
		/(coccocbot-(?:image|web))\/([\w\.]+)/i,
		/(daum(?:oa)?(?:-image)?|hubspot crawler)[ \/]([\w\.]+)/i,
		/(facebook(?:externalhit|catalog)|meta-(?:externalagent|externalads|webindexer))\/([\w\.]+)/i,
		/(google(?:bot|other|-inspectiontool)(?:-image|-video|-news)?|storebot-google)\/?([\w\.]*)/i,
		/(ia_archiver|archive\.org_bot)\/?([\w\.]*)/i,
		/(oncrawl) mobile\/([\w\.]+)/i,
		/(qwantbot(?:-news)?)[-\w]*\/?([\w\.]*)/i,
		/((?:semrush|splitsignal)bot[-abcfimostw]*)\/?([\w\.-]*)/i,
		/(sogou (?:pic|head|web|orion|news) spider)\/([\w\.]+)/i,
		/(y!?j-(?:asr|br[uw]|dscv|mmp|vsidx|wsc))\/([\w\.]+)/i,
		/(yandex(?:(?:mobile)?(?:accessibility|additional|com|renderresources|screenshot|sprav)?bot(?!.+mirror)|image(?:s|resizer)|adnet|blogs|favicons|market|media|metrika|news|ontodb(?:api)?|partner|rca|tracker|turbo|verti(?:cal)?s|webmaster|video(?:parser)?))\/([\w\.]+)/i,
		/(yeti)\/([\w\.]+)/i,
		/((?:aihit|blex|diff|huggingface-|msn|pangu|replicate-|runpod-|timpi|together-|xai-|you|zum)bot|(?:audisto |brightedge |magpie-|velenpublicweb)crawler|(?:chatglm-|line|screaming frog seo |yisou)spider|cloudflare-autorag|cotoyogi|(?:firecrawl|twin)agent|freespoke|omgili(?:bot)?|openai image downloader|startpageprivateimageproxy|webzio-extended)\/?([\w\.]*)/i
	],
	[
		W,
		q,
		[G, qi]
	],
	[/(ev-crawler)\/([\w\.]+)/i],
	[
		[W, "Headline"],
		q,
		[G, qi]
	],
	[/(yandexbot\/([\w\.]+); mirrordetector)/i],
	[
		[
			W,
			/\/.+;/gi,
			""
		],
		q,
		[G, qi]
	],
	[/((?:adsbot|apis|mediapartners)-google(?:-mobile)?|google-?(?:other|cloudvertexbot|extended|notebooklm|safety))/i, /\b((ai2|aspiegel|atlassian-|dataforseo|deepseek|imagesift|petal|seekport|turnitin|v0|yacy)bot|360spider-?(image|video)?|baidu-ads|botify|(byte|tiktok)spider|cohere-training-data-crawler|elastic(?=\/s)|marginalia|proximic|siteimprove(?=bot|\.com)|teoma|webzio|yahoo! slurp)/i],
	[W, [G, qi]]
] });
Object.freeze({ device: [
	[
		/(nook)[\w ]+build\/(\w+)/i,
		/(dell) (strea[kpr\d ]*[\dko])/i,
		/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
		/(trinity)[- ]*(t\d{3}) bui/i,
		/(gigaset)[- ]+(q\w{1,9}) bui/i,
		/(vodafone) ([\w ]+)(?:\)| bui)/i
	],
	[
		K,
		U,
		[G, Ki]
	],
	[/(u304aa)/i],
	[
		U,
		[K, "AT&T"],
		[G, Gi]
	],
	[/\bsie-(\w*)/i],
	[
		U,
		[K, "Siemens"],
		[G, Gi]
	],
	[/\b(rct\w+) b/i],
	[
		U,
		[K, "RCA"],
		[G, Ki]
	],
	[/\b(venue[\d ]{2,7}) b/i],
	[
		U,
		[K, "Dell"],
		[G, Ki]
	],
	[/\b(q(?:mv|ta)\w+) b/i],
	[
		U,
		[K, "Verizon"],
		[G, Ki]
	],
	[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
	[
		U,
		[K, "Barnes & Noble"],
		[G, Ki]
	],
	[/\b(tm\d{3}\w+) b/i],
	[
		U,
		[K, "NuVision"],
		[G, Ki]
	],
	[/\b(k88) b/i],
	[
		U,
		[K, "ZTE"],
		[G, Ki]
	],
	[/\b(nx\d{3}j) b/i],
	[
		U,
		[K, "ZTE"],
		[G, Gi]
	],
	[/\b(gen\d{3}) b.+49h/i],
	[
		U,
		[K, "Swiss"],
		[G, Gi]
	],
	[/\b(zur\d{3}) b/i],
	[
		U,
		[K, "Swiss"],
		[G, Ki]
	],
	[/^((zeki)?tb.*\b) b/i],
	[
		U,
		[K, "Zeki"],
		[G, Ki]
	],
	[/\b([yr]\d{2}) b/i, /\b(?:dragon[- ]+touch |dt)(\w{5}) b/i],
	[
		U,
		[K, "Dragon Touch"],
		[G, Ki]
	],
	[/\b(ns-?\w{0,9}) b/i],
	[
		U,
		[K, "Insignia"],
		[G, Ki]
	],
	[/\b((nxa|next)-?\w{0,9}) b/i],
	[
		U,
		[K, "NextBook"],
		[G, Ki]
	],
	[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
	[
		[K, "Voice"],
		U,
		[G, Gi]
	],
	[/\b(lvtel\-)?(v1[12]) b/i],
	[
		[K, "LvTel"],
		U,
		[G, Gi]
	],
	[/\b(ph-1) /i],
	[
		U,
		[K, "Essential"],
		[G, Gi]
	],
	[/\b(v(100md|700na|7011|917g).*\b) b/i],
	[
		U,
		[K, "Envizen"],
		[G, Ki]
	],
	[/\b(trio[-\w\. ]+) b/i],
	[
		U,
		[K, "MachSpeed"],
		[G, Ki]
	],
	[/\btu_(1491) b/i],
	[
		U,
		[K, "Rotor"],
		[G, Ki]
	]
] }), Object.freeze({ browser: [
	[/(android)\/([\w\.-]+email)/i],
	[
		W,
		q,
		[G, Yi]
	],
	[/* @__PURE__ */ RegExp("((?:air|aqua|blue|claws|daum|fair|fox|k-9|mac|nylas|pegasus|poco|poly|proton|samsung|squirrel|yahoo) ?e?mail(?:-desktop| app| bridge)?|microsoft outlook|r2mail2|spicebird|turnpike|yahoomobile|(?:microsoft )?outlook(?:-express)?|macoutlook|windows-live-mail|alpine|balsa|barca|canary|emclient|eudora|evolution|geary|gnus|horde::imp|incredimail|kmail2?|kontact|lotus-notes|mail(?:bird|mate|spring)|mutt|navermailapp|newton|nine|postbox|rainloop|roundcube webmail|spar(?:row|kdesktop)|sylpheed|the bat!|thunderbird|trojita|tutanota-desktop|wanderlust|zdesktop|zohomail-desktop)(?:m.+ail; |[\\/ ])([\\w\\.-]+)", "i")],
	[
		[W, ea],
		q,
		[G, Yi]
	],
	[/(mail)\/([\w\.]+) cf/i],
	[
		W,
		q,
		[G, Yi]
	],
	[/(zimbra)\/([\w\.-]+)/i],
	[
		W,
		q,
		[G, Yi]
	]
] });
var ra = Object.freeze({
	browser: [
		[
			/(asana|ahrefssiteaudit|(?:bing|microsoft)preview|blueno|(?:amzn|chatgpt|claude|mistralai|perplexity)-user|cohere-ai|flipboardproxy|hubspot page fetcher|mastodon|(?:bitly|bufferlinkpreview|discord|duckassist|linkedin|pinterest|reddit|roger|siteaudit|twitter|uptime(?:ro)?|zoom)bot|google-site-verification|iframely|kakaotalk-scrap|meta-externalfetcher|y!?j-dlc|yandex(?:calendar|direct(?:dyn)?|fordomain|pagechecker|searchshop)|yadirectfetcher|whatsapp)\/([\w\.]+)/i,
			/(bluesky) cardyb\/([\w\.]+)/i,
			/(feedly)(?:bot)?\/([\w\.]+)/i,
			/agent-(novaact)\/([\w\.]+)/i,
			/(skypeuripreview) preview\/([\w\.]+)/i,
			/(slack(?:bot)?(?:-imgproxy|-linkexpanding)?) ([\w\.]+)/i
		],
		[
			W,
			q,
			[G, Xi]
		],
		[/((?:better uptime |keybase|telegram|vercel)bot|lighthouse$|feedfetcher-google|gemini-deep-research|google(?:docs|imageproxy|-read-aloud|-pagerenderer|producer)|snap url preview|vercel(flags|tracing|-(favicon|screenshot)-bot)|virustotal(?=cloud)|yandex(?:sitelinks|userproxy))/i],
		[W, [G, Xi]]
	],
	os: [[/whatsapp\/[\d\.]+ (a|i)/i], [[W, (e) => e == "A" ? "Android" : "iOS"]]]
});
Object.freeze({ browser: [
	[/\b(discord|figma|mattermost|notion|postman|rambox|rocket.chat|slack|teams)\/([\w\.]+).+(electron\/|; ios)/i, /(flipboard)\/([\w\.]+)/i],
	[
		W,
		q,
		[G, Zi]
	],
	[/(evernote) win/i, /(teams)mobile-(ios|and)/i],
	[W, [G, Zi]],
	[/chatlyio\/([\d\.]+)/i],
	[
		q,
		[W, "Slack"],
		[G, Zi]
	],
	[/ultralite app_version\/([\w\.]+)/i],
	[
		q,
		[W, "TikTok Lite"],
		[G, Zi]
	],
	[/\) code\/([\d\.]+).+electron\//i],
	[
		q,
		[W, "VS Code"],
		[G, Zi]
	],
	[/jp\.co\.yahoo\.(?:android\.yjtop|ipn\.appli)\/([\d\.]+)/i],
	[
		q,
		[W, "Yahoo! Japan"],
		[G, Zi]
	]
] }), Object.freeze({ browser: [
	[
		/(apple(?:coremedia|tv))\/([\w\._]+)/i,
		/(coremedia) v([\w\._]+)/i,
		/(ares|clementine|music player daemon|nexplayer|ossproxy) ([\w\.-]+)/i,
		/^(aqualung|audacious|audimusicstream|amarok|bass|bsplayer|core|gnomemplayer|gvfs|irapp|lyssna|music on console|nero (?:home|scout)|nokia\d+|nsplayer|psp-internetradioplayer|quicktime|rma|radioapp|radioclientapplication|soundtap|stagefright|streamium|totem|videos|xbmc|xine|xmms)\/([\w\.-]+)/i,
		/(lg player|nexplayer) ([\d\.]+)/i,
		/player\/(nexplayer|lg player) ([\w\.-]+)/i,
		/(gstreamer) souphttpsrc.+libsoup\/([\w\.-]+)/i,
		/(htc streaming player) [\w_]+ \/ ([\d\.]+)/i,
		/(lavf)([\d\.]+)/i,
		/(mplayer)(?: |\/)(?:(?:sherpya-){0,1}svn)(?:-| )(r\d+(?:-\d+[\w\.-]+))/i,
		/ (songbird)\/([\w\.-]+)/i,
		/(winamp)(?:3 version|mpeg| ) ([\w\.-]+)/i,
		/(vlc)(?:\/| media player - version )([\w\.-]+)/i,
		/^(foobar2000|itunes|smp)\/([\d\.]+)/i,
		/com\.(riseupradioalarm)\/([\d\.]*)/i,
		/(mplayer)(?:\s|\/| unknown-)([\w\.\-]+)/i,
		/(windows)\/([\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ home media server/i
	],
	[
		W,
		q,
		[G, Qi]
	],
	[/(flrp)\/([\w\.-]+)/i],
	[
		[W, "Flip Player"],
		q,
		[G, Qi]
	],
	[/(fstream|media player classic|inlight radio|mplayer|nativehost|nero showtime|ocms-bot|queryseekspider|tapinradio|tunein radio|winamp|yourmuze)/i],
	[W, [G, Qi]],
	[/(htc_one_s|windows-media-player|wmplayer)\/([\w\.-]+)/i],
	[
		[
			W,
			/[_-]/g,
			" "
		],
		q,
		[G, Qi]
	],
	[/(rad.io|radio.(?:de|at|fr)) ([\d\.]+)/i],
	[
		[W, "rad.io"],
		q,
		[G, Qi]
	]
] });
var ia = Object.freeze({ browser: [
	[
		/^((?:apache|go|java)-http-?client|axios|bun|dart|deno|got|(?:guzzle|lua-resty-|ocaml-co|ok)http|hackney|http\.rb|java|jetty|libwww-perl|needle|node(?:\.js|-fetch|-superagent)|php-soap|postmanruntime|python-(?:httpx|urllib[23]?|requests)|rest-client|scrapy)\/([\w\.]+)/i,
		/(adobeair|aiohttp|jsdom)\/([\w\.]+)/i,
		/(nutch)-([\w\.-]+)(\(|$)/i,
		/\((java)\/([\w\.]+)/i
	],
	[
		W,
		q,
		[G, $i]
	],
	[/(node-fetch|phpcrawl|undici)/i],
	[W, [G, $i]]
] });
Object.freeze({ device: [
	[/aftlbt962e2/i],
	[[K, "BMW"]],
	[/dilink.+(byd) auto/i],
	[K],
	[/aftlft962x3/i],
	[[K, "Jeep"], [U, "Wagooner"]],
	[/(rivian) (r1t)/i],
	[K, U],
	[/vcc.+netfront/i],
	[[K, "Volvo"]]
] });
var aa = Object.freeze({
	browser: [
		...ta.browser,
		...ra.browser,
		...na.browser,
		...ia.browser
	],
	os: [...ra.os]
});
Object.freeze({
	115: "115",
	2345: "2345",
	360: "360",
	ALIPAY: "Alipay",
	ALOHA: "Aloha",
	AMAYA: "Amaya",
	ANDROID: "Android Browser",
	ARORA: "Arora",
	ATLAS: "Atlas",
	AVANT: "Avant",
	AVAST: "Avast Secure Browser",
	AVG: "AVG Secure Browser",
	AVIRA: "Avira Secure Browser",
	BAIDU: "Baidu Browser",
	BASILISK: "Basilisk",
	BING: "Bing",
	BLAZER: "Blazer",
	BOLT: "Bolt",
	BOWSER: "Bowser",
	BRAVE: "Brave",
	CAMINO: "Camino",
	CHIMERA: "Chimera",
	CHROME: "Chrome",
	CHROME_HEADLESS: "Chrome Headless",
	CHROME_MOBILE: "Mobile Chrome",
	CHROME_WEBVIEW: "Chrome WebView",
	CHROMIUM: "Chromium",
	COBALT: "Cobalt",
	COC_COC: "Coc Coc",
	CONKEROR: "Conkeror",
	DAUM: "Daum",
	DILLO: "Dillo",
	DOLPHIN: "Dolphin",
	DOOBLE: "Dooble",
	DORIS: "Doris",
	DRAGON: "Dragon",
	DUCKDUCKGO: "DuckDuckGo",
	ECOSIA: "Ecosia",
	EDGE: "Edge",
	EDGE_WEBVIEW: "Edge WebView",
	EDGE_WEBVIEW2: "Edge WebView2",
	EPIPHANY: "Epiphany",
	FACEBOOK: "Facebook",
	FALKON: "Falkon",
	FIREBIRD: "Firebird",
	FIREFOX: "Firefox",
	FIREFOX_FOCUS: "Firefox Focus",
	FIREFOX_MOBILE: "Mobile Firefox",
	FIREFOX_REALITY: "Firefox Reality",
	FENNEC: "Fennec",
	FLOCK: "Flock",
	FLOW: "Flow",
	GO: "GoBrowser",
	GOOGLE_SEARCH: "GSA",
	HELIO: "Helio",
	HEYTAP: "HeyTap",
	HIBROWSER: "HiBrowser",
	HONOR: "Honor",
	HUAWEI: "Huawei Browser",
	ICAB: "iCab",
	ICE: "ICE Browser",
	ICEAPE: "IceApe",
	ICECAT: "IceCat",
	ICEDRAGON: "IceDragon",
	ICEWEASEL: "IceWeasel",
	IE: "IE",
	INSTAGRAM: "Instagram",
	IRIDIUM: "Iridium",
	IRON: "Iron",
	JASMINE: "Jasmine",
	KONQUEROR: "Konqueror",
	KAKAO: "KakaoTalk",
	KHTML: "KHTML",
	K_MELEON: "K-Meleon",
	KLAR: "Klar",
	KLARNA: "Klarna",
	KINDLE: "Kindle",
	LENOVO: "Smart Lenovo Browser",
	LADYBIRD: "Ladybird",
	LG: "LG Browser",
	LIBREWOLF: "LibreWolf",
	LIEBAO: "LBBROWSER",
	LIGHTHOUSE: "Lighthouse",
	LINE: "Line",
	LINKEDIN: "LinkedIn",
	LINKS: "Links",
	LUAKIT: "Luakit",
	LUNASCAPE: "Lunascape",
	LYNX: "Lynx",
	MAEMO: "Maemo Browser",
	MAXTHON: "Maxthon",
	MIDORI: "Midori",
	MINIMO: "Minimo",
	MIUI: "MIUI Browser",
	MOZILLA: "Mozilla",
	MOSAIC: "Mosaic",
	NAVER: "Naver",
	NETFRONT: "NetFront",
	NETSCAPE: "Netscape",
	NETSURF: "Netsurf",
	NOKIA: "Nokia Browser",
	NORTON: "Norton Private Browser",
	OBIGO: "Obigo",
	OCULUS: "Oculus Browser",
	OMNIWEB: "OmniWeb",
	OPERA: "Opera",
	OPERA_COAST: "Opera Coast",
	OPERA_GX: "Opera GX",
	OPERA_MINI: "Opera Mini",
	OPERA_MOBI: "Opera Mobi",
	OPERA_NEON: "Opera Neon",
	OPERA_TABLET: "Opera Tablet",
	OPERA_TOUCH: "Opera Touch",
	OTTER: "Otter",
	OVI: "OviBrowser",
	PALEMOON: "PaleMoon",
	PHANTOMJS: "PhantomJS",
	PHOENIX: "Phoenix",
	PICOBROWSER: "Pico Browser",
	POLARIS: "Polaris",
	PUFFIN: "Puffin",
	QQ: "QQBrowser",
	QQ_LITE: "QQBrowserLite",
	QUARK: "Quark",
	QUPZILLA: "QupZilla",
	QUTEBROWSER: "qutebrowser",
	QWANT: "Qwant",
	REKONQ: "rekonq",
	ROCKMELT: "Rockmelt",
	SAFARI: "Safari",
	SAFARI_MOBILE: "Mobile Safari",
	SAILFISH: "Sailfish Browser",
	SAMSUNG: "Samsung Internet",
	SEAMONKEY: "SeaMonkey",
	SILK: "Silk",
	SKYFIRE: "Skyfire",
	SLEIPNIR: "Sleipnir",
	SLIMBOAT: "SlimBoat",
	SLIMBROWSER: "SlimBrowser",
	SLIMJET: "Slimjet",
	SNAPCHAT: "Snapchat",
	SOGOU_EXPLORER: "Sogou Explorer",
	SOGOU_MOBILE: "Sogou Mobile",
	STEAM: "Steam",
	SURF: "Surf",
	SWIFTFOX: "Swiftfox",
	TESLA: "Tesla",
	TIKTOK: "TikTok",
	TIZEN: "Tizen Browser",
	TWITTER: "Twitter",
	UC: "UCBrowser",
	UP: "UP.Browser",
	VIVALDI: "Vivaldi",
	VIVO: "Vivo Browser",
	W3M: "w3m",
	WATERFOX: "Waterfox",
	WEBKIT: "WebKit",
	WECHAT: "WeChat",
	WEIBO: "Weibo",
	WHALE: "Whale",
	WOLVIC: "Wolvic",
	YANDEX: "Yandex",
	ZALO: "Zalo"
});
var oa = Object.freeze({
	CRAWLER: "crawler",
	CLI: "cli",
	EMAIL: "email",
	FETCHER: "fetcher",
	INAPP: "inapp",
	MEDIAPLAYER: "mediaplayer",
	LIBRARY: "library"
});
Object.freeze({
	"68K": "68k",
	ALPHA: "alpha",
	ARM: "arm",
	ARM_64: "arm64",
	ARM_HF: "armhf",
	AVR: "avr",
	AVR_32: "avr32",
	IA64: "ia64",
	IRIX: "irix",
	IRIX_64: "irix64",
	MIPS: "mips",
	MIPS_64: "mips64",
	PA_RISC: "pa-risc",
	PPC: "ppc",
	SPARC: "sparc",
	SPARC_64: "sparc64",
	X86: "ia32",
	X86_64: "amd64"
}), Object.freeze({
	CONSOLE: "console",
	EMBEDDED: "embedded",
	MOBILE: "mobile",
	SMARTTV: "smarttv",
	TABLET: "tablet",
	WEARABLE: "wearable",
	XR: "xr",
	DESKTOP: "desktop"
}), Object.freeze({
	ACER: "Acer",
	ADVAN: "Advan",
	ALCATEL: "Alcatel",
	AMAZON: "Amazon",
	ANBERNIC: "Anbernic",
	APPLE: "Apple",
	ARCHOS: "Archos",
	ASUS: "ASUS",
	ATT: "AT&T",
	BENQ: "BenQ",
	BLACKBERRY: "BlackBerry",
	BLACKVIEW: "Blackview",
	BLU: "BLU",
	CAT: "Cat",
	COOLPAD: "Coolpad",
	CUBOT: "CUBOT",
	DELL: "Dell",
	ENERGIZER: "Energizer",
	ESSENTIAL: "Essential",
	FACEBOOK: "Facebook",
	FAIRPHONE: "Fairphone",
	GEEKSPHONE: "GeeksPhone",
	GENERIC: "Generic",
	GOOGLE: "Google",
	HISENSE: "Hisense",
	HMD: "HMD",
	HP: "HP",
	HTC: "HTC",
	HUAWEI: "Huawei",
	IMO: "IMO",
	INFINIX: "Infinix",
	ITEL: "itel",
	JOLLA: "Jolla",
	KOBO: "Kobo",
	LAVA: "Lava",
	LENOVO: "Lenovo",
	LG: "LG",
	LOGITECH: "Logitech",
	MEIZU: "Meizu",
	MICROMAX: "Micromax",
	MICROSOFT: "Microsoft",
	MOTOROLA: "Motorola",
	NEXIAN: "Nexian",
	NINTENDO: "Nintendo",
	NOKIA: "Nokia",
	NOTHING: "Nothing",
	NVIDIA: "Nvidia",
	ONEPLUS: "OnePlus",
	OPPO: "OPPO",
	OUYA: "Ouya",
	PALM: "Palm",
	PANASONIC: "Panasonic",
	PEBBLE: "Pebble",
	PHILIPS: "Philips",
	PICO: "Pico",
	POLYTRON: "Polytron",
	REALME: "Realme",
	RETROID: "Retroid",
	RIM: "RIM",
	ROKU: "Roku",
	SAMSUNG: "Samsung",
	SHARP: "Sharp",
	SIEMENS: "Siemens",
	SMARTFREN: "Smartfren",
	SONY: "Sony",
	SPRINT: "Sprint",
	TCL: "TCL",
	TECHNISAT: "TechniSAT",
	TECNO: "TECNO",
	TESLA: "Tesla",
	T_MOBILE: "T-Mobile",
	ULEFONE: "Ulefone",
	VALVE: "Valve",
	VIVO: "Vivo",
	VIZIO: "Vizio",
	VODAFONE: "Vodafone",
	WIKO: "Wiko",
	XBOX: "Xbox",
	XIAOMI: "Xiaomi",
	ZEBRA: "Zebra",
	ZTE: "ZTE"
}), Object.freeze({
	AMAYA: "Amaya",
	ARKWEB: "ArkWeb",
	BLINK: "Blink",
	DILLO: "Dillo",
	EDGEHTML: "EdgeHTML",
	FLOW: "Flow",
	GECKO: "Gecko",
	GOANNA: "Goanna",
	ICAB: "iCab",
	KHTML: "KHTML",
	LIBWEB: "LibWeb",
	LINKS: "Links",
	LYNX: "Lynx",
	NETFRONT: "NetFront",
	NETSURF: "NetSurf",
	PRESTO: "Presto",
	SERVO: "Servo",
	TASMAN: "Tasman",
	TRIDENT: "Trident",
	W3M: "w3m",
	WEBKIT: "WebKit"
}), Object.freeze({
	AIX: "AIX",
	AMIGA_OS: "Amiga OS",
	ANDROID: "Android",
	ANDROID_X86: "Android-x86",
	ARCAOS: "ArcaOS",
	ARCH: "Arch",
	BADA: "Bada",
	BEOS: "BeOS",
	BLACKBERRY: "BlackBerry",
	CENTOS: "CentOS",
	CHROME_OS: "Chrome OS",
	CHROMECAST: "Chromecast",
	CHROMECAST_ANDROID: "Chromecast Android",
	CHROMECAST_FUCHSIA: "Chromecast Fuchsia",
	CHROMECAST_LINUX: "Chromecast Linux",
	CHROMECAST_SMARTSPEAKER: "Chromecast SmartSpeaker",
	CONTIKI: "Contiki",
	DEBIAN: "Debian",
	DEEPIN: "Deepin",
	DRAGONFLY: "DragonFly",
	ELEMENTARY_OS: "elementary OS",
	FEDORA: "Fedora",
	FIREFOX_OS: "Firefox OS",
	FREEBSD: "FreeBSD",
	FUCHSIA: "Fuchsia",
	GENTOO: "Gentoo",
	GHOSTBSD: "GhostBSD",
	GNU: "GNU",
	HAIKU: "Haiku",
	HARMONYOS: "HarmonyOS",
	HP_UX: "HP-UX",
	HURD: "Hurd",
	IOS: "iOS",
	JOLI: "Joli",
	KAIOS: "KaiOS",
	KNOPPIX: "Knoppix",
	KUBUNTU: "Kubuntu",
	LINPUS: "Linpus",
	LINSPIRE: "Linspire",
	LINUX: "Linux",
	MACOS: "macOS",
	MAEMO: "Maemo",
	MAGEIA: "Mageia",
	MANDRIVA: "Mandriva",
	MANJARO: "Manjaro",
	MEEGO: "MeeGo",
	MINIX: "Minix",
	MINT: "Mint",
	MORPH_OS: "Morph OS",
	NETBSD: "NetBSD",
	NETRANGE: "NetRange",
	NETTV: "NetTV",
	NINTENDO: "Nintendo",
	OPENHARMONY: "OpenHarmony",
	OPENBSD: "OpenBSD",
	OPENVMS: "OpenVMS",
	OS2: "OS/2",
	PALM: "Palm",
	PC_BSD: "PC-BSD",
	PCLINUXOS: "PCLinuxOS",
	PICO: "Pico",
	PLAN9: "Plan9",
	PLAYSTATION: "PlayStation",
	QNX: "QNX",
	RASPBIAN: "Raspbian",
	REDHAT: "RedHat",
	RIM_TABLET_OS: "RIM Tablet OS",
	RISC_OS: "RISC OS",
	SABAYON: "Sabayon",
	SAILFISH: "Sailfish",
	SERENITYOS: "SerenityOS",
	SERIES40: "Series40",
	SLACKWARE: "Slackware",
	SOLARIS: "Solaris",
	SUSE: "SUSE",
	SYMBIAN: "Symbian",
	TIZEN: "Tizen",
	UBUNTU: "Ubuntu",
	UBUNTU_TOUCH: "Ubuntu Touch",
	UNIX: "Unix",
	VECTORLINUX: "VectorLinux",
	VEGA_OS: "Vega OS",
	WATCHOS: "watchOS",
	WEBOS: "WebOS",
	WINDOWS: "Windows",
	WINDOWS_CE: "Windows CE",
	WINDOWS_IOT: "Windows IoT",
	WINDOWS_MOBILE: "Windows Mobile",
	WINDOWS_PHONE: "Windows Phone",
	WINDOWS_RT: "Windows RT",
	XBOX: "Xbox",
	XUBUNTU: "Xubuntu",
	ZENWALK: "Zenwalk"
});
//#endregion
//#region node_modules/ua-parser-js/src/bot-detection/bot-detection.mjs
var { Crawler: J, Fetcher: sa } = Object.freeze({
	BrowserName: {
		CLI: {
			CURL: "curl",
			ELINKS: "ELinks",
			HTTPIE: "HTTPie",
			LYNX: "Lynx",
			POWERSHELL: "PowerShell",
			WGET: "Wget"
		},
		Crawler: {
			AHREFS_BOT: "AhrefsBot",
			AI2_BOT: "AI2Bot",
			AIHIT_BOT: "aiHitBot",
			ALGOLIA_CRAWLER: "Algolia Crawler",
			APPLE_BOT: "Applebot",
			APPLE_BOT_EXTENDED: "Applebot-Extended",
			ASK_TEOMA: "Teoma",
			AMAZON_BOT: "Amazonbot",
			AMAZON_CONTXBOT: "contxbot",
			AMAZON_SEARCHBOT: "Amzn-SearchBot",
			ANTHROPIC_AI: "anthropic-ai",
			ANTHROPIC_CLAUDE_BOT: "ClaudeBot",
			ANTHROPIC_CLAUDE_SEARCHBOT: "Claude-SearchBot",
			ANTHROPIC_CLAUDE_WEB: "Claude-Web",
			ARCHIVEORG_BOT: "archive.org_bot",
			ATLASSIAN_BOT: "atlassian-bot",
			AUDISTO_CRAWLER: "Audisto Crawler",
			AWARIO_BOT: "AwarioBot",
			AWARIO_SMARTBOT: "AwarioSmartBot",
			AWARIO_RSSBOT: "AwarioRssBot",
			BAIDU_ADS: "Baidu-ADS",
			BAIDU_SPIDER: "Baiduspider",
			BAIDU_SPIDER_ADS: "Baiduspider-ads",
			BAIDU_SPIDER_CPRO: "Baiduspider-cpro",
			BAIDU_SPIDER_FAVO: "Baiduspider-favo",
			BAIDU_SPIDER_IMAGE: "Baiduspider-image",
			BAIDU_SPIDER_NEWS: "Baiduspider-news",
			BAIDU_SPIDER_RENDER: "Baiduspider-render",
			BAIDU_SPIDER_VIDEO: "Baiduspider-video",
			BLEX_BOT: "BLEXBot",
			BOTIFY: "botify",
			BRAVE_BOT: "Bravebot",
			BRIGHTEDGE_CRAWLER: "BrightEdge Crawler",
			BYTEDANCE_BYTESPIDER: "Bytespider",
			BYTEDANCE_TIKTOKSPIDER: "TikTokSpider",
			CLOUDFLARE_AUTORAG: "Cloudflare-AutoRAG",
			COMMON_CRAWL_CCBOT: "CCBot",
			COCCOC_BOT_WEB: "coccocbot-web",
			COCCOC_BOT_IMAGE: "coccocbot-image",
			COHERE_TRAINING_DATA_CRAWLER: "cohere-training-data-crawler",
			COMSCORE_PROXIMIC: "proximic",
			COTOYOGI: "Cotoyogi",
			COVEO_BOT: "Coveobot",
			CRITEO_BOT: "CriteoBot",
			DATAFORSEO_BOT: "DataForSeoBot",
			DAUM: "Daum",
			DAUM_DAUMOA: "Daumoa",
			DAUM_DAUMOA_IMAGE: "Daumoa-image",
			DEEPSEEK_BOT: "DeepSeekBot",
			DIFFBOT: "Diffbot",
			DUCKDUCKGO_BOT: "DuckDuckBot",
			DUCKDUCKGO_FAVICONS_BOT: "DuckDuckGo-Favicons-Bot",
			ELASTIC: "Elastic",
			ELASTIC_SWIFTYPE_BOT: "Swiftbot",
			EXALEAD_EXABOT: "Exabot",
			FIRECRAWL_AGENT: "FirecrawlAgent",
			FREESPOKE: "Freespoke",
			GOOGLE_ADSBOT: "AdsBot-Google",
			GOOGLE_ADSBOT_MOBILE: "Adsbot-Google-Mobile",
			GOOGLE_ADSENSE: "AdSense",
			GOOGLE_APIS: "APIs-Google",
			GOOGLE_BOT: "Googlebot",
			GOOGLE_BOT_IMAGE: "Googlebot-Image",
			GOOGLE_BOT_NEWS: "Googlebot-News",
			GOOGLE_BOT_VIDEO: "Googlebot-Video",
			GOOGLE_CLOUDVERTEXBOT: "Google-CloudVertexBot",
			GOOGLE_EXTENDED: "Google-Extended",
			GOOGLE_INSPECTIONTOOL: "Google-InspectionTool",
			GOOGLE_NOTEBOOKLM: "Google-NotebookLM",
			GOOGLE_OTHER: "GoogleOther",
			GOOGLE_OTHER_IMAGE: "GoogleOther-Image",
			GOOGLE_OTHER_VIDEO: "GoogleOther-Video",
			GOOGLE_SAFETY: "Google-Safety",
			GOOGLE_STOREBOT: "Storebot-Google",
			HEADLINE: "Headline",
			HIVE_IMAGESIFTBOT: "ImagesiftBot",
			HUAWEI_PANGUBOT: "PanguBot",
			HUAWEI_PETALBOT: "PetalBot",
			HUBSPOT_CRAWLER: "HubSpot Crawler",
			HUGGINGFACE_BOT: "HuggingFace-Bot",
			HUNTER_VELENPUBLICWEBCRAWLER: "VelenPublicWebCrawler",
			IA_ARCHIVER: "ia_archiver",
			IASK_BOT: "iAskBot",
			KAGI_BOT: "Kagibot",
			KANGAROO_BOT: "Kangaroo Bot",
			LINE_SPIDER: "Linespider",
			LINKEDIN_BOT: "LinkedInBot",
			MAGPIE_CRAWLER: "magpie-crawler",
			MARGINALIA: "marginalia",
			META_EXTERNALADS: "meta-externalads",
			META_EXTERNALAGENT: "meta-externalagent",
			META_FACEBOOKBOT: "FacebookBot",
			META_FACEBOOKCATALOG: "facebookcatalog",
			META_FACEBOOKEXTERNALHIT: "facebookexternalhit",
			META_WEBINDEXER: "meta-webindexer",
			MAJESTIC_MJ12BOT: "MJ12bot",
			MICROSOFT_BINGBOT: "Bingbot",
			MICROSOFT_MSNBOT: "msnbot",
			MICROSOFT_ADIDXBOT: "adidxbot",
			MOJEEK_BOT: "MojeekBot",
			MOZ_DOTBOT: "DotBot",
			ONCRAWL: "OnCrawl",
			ONESPOT_SCRAPERBOT: "Onespot-ScraperBot",
			OPENAI_GPTBOT: "GPTBot",
			OPENAI_SEARCH_BOT: "OAI-SearchBot",
			PERPLEXITY_BOT: "PerplexityBot",
			QIHOO_360_SPIDER: "360Spider",
			QWANT_BOT: "Qwantbot",
			QWANT_BOT_NEWS: "Qwantbot-news",
			REPLICATE_BOT: "Replicate-Bot",
			RUNPOD_BOT: "RunPod-Bot",
			SB_INTUITIONS_BOT: "SBIntuitionsBot",
			SEEKPORT_BOT: "SeekportBot",
			SEMRUSH_BOT: "SemrushBot",
			SEMRUSH_BOT_BACKLINK: "SemrushBot-BA",
			SEMRUSH_BOT_CONTENTSHAKE: "SemrushBot-OCOB",
			SEMRUSH_BOT_SEO_CHECKER: "SemrushBot-SI",
			SEMRUSH_BOT_SWA: "SemrushBot-SWA",
			SEZNAM_BOT: "SeznamBot",
			SITEIMPROVE: "Siteimprove",
			SOGOU_PIC_SPIDER: "Sogou Pic Spider",
			SOGOU_WEB_SPIDER: "Sogou web spider",
			STARTPAGE: "Startpage",
			SURLY_BOT: "SurdotlyBot",
			TIMPI_BOT: "Timpibot",
			TOGETHER_BOT: "Together-Bot",
			TURNITIN_BOT: "TurnitinBot",
			TWIN_AGENT: "TwinAgent",
			VERCEL_V0BOT: "v0bot",
			WEBZIO: "webzio",
			WEBZIO_EXTENDED: "Webzio-Extended",
			WEBZIO_OMGILI: "omgili",
			WEBZIO_OMGILI_BOT: "omgilibot",
			XAI_BOT: "xAI-Bot",
			YACY_BOT: "yacybot",
			YAHOO_JAPAN: "Y!J-BRW",
			YAHOO_SLURP: "Yahoo! Slurp",
			YANDEX_ACCESSIBILITY_BOT: "YandexAccessibilityBot",
			YANDEX_ADDITIONAL_BOT: "YandexAdditionalBot",
			YANDEX_ADNET: "YandexAdNet",
			YANDEX_BLOGS: "YandexBlogs",
			YANDEX_BOT: "YandexBot",
			YANDEX_BOT_MIRRORDETECTOR: "YandexBot MirrorDetector",
			YANDEX_COMBOT: "YandexComBot",
			YANDEX_FAVICONS: "YandexFavicons",
			YANDEX_IMAGE_RESIZER: "YandexImageResizer",
			YANDEX_IMAGES: "YandexImages",
			YANDEX_MARKET: "YandexMarket",
			YANDEX_MEDIA: "YandexMedia",
			YANDEX_METRIKA: "YandexMetrika",
			YANDEX_MOBILE_BOT: "YandexMobileBot",
			YANDEX_MOBILE_SCREENSHOT_BOT: "YandexMobileScreenShotBot",
			YANDEX_NEWS: "YandexNews",
			YANDEX_ONTODB: "YandexOntoDB",
			YANDEX_ONTODB_API: "YandexOntoDBAPI",
			YANDEX_PARTNER: "YandexPartner",
			YANDEX_RCA: "YandexRCA",
			YANDEX_RENDERRESOURCES_BOT: "YandexRenderResourcesBot",
			YANDEX_SCREENSHOT_BOT: "YandexScreenshotBot",
			YANDEX_SPRAV_BOT: "YandexSpravBot",
			YANDEX_TRACKER: "YandexTracker",
			YANDEX_VERTICALS: "YandexVerticals",
			YANDEX_VERTIS: "YandexVertis",
			YANDEX_VIDEO: "YandexVideo",
			YANDEX_VIDEO_PARSER: "YandexVideoParser",
			YANDEX_WEBMASTER: "YandexWebmaster",
			YEP_BOT: "YepBot",
			YETI: "Yeti",
			YISOU_SPIDER: "YisouSpider",
			YOU_BOT: "YouBot",
			ZHIPU_CHATGLM_SPIDER: "ChatGLM-Spider",
			ZUM_BOT: "ZumBot"
		},
		Email: {
			AIRMAIL: "Airmail",
			ALPINE: "Alpine",
			ANDROID_MAIL: "Android",
			APPLE_MAIL: "Mail",
			AQUA_MAIL: "AquaMail",
			BALSA: "Balsa",
			BARCA: "Barca",
			BLUEMAIL: "BlueMail",
			CANARY: "Canary",
			CLAWS_MAIL: "Claws Mail",
			DAUM_MAIL: "DaumMail",
			EM_CLIENT: "eM Client",
			EUDORA: "Eudora",
			EVOLUTION: "Evolution",
			FAIR_EMAIL: "FairEmail",
			FOXMAIL: "Foxmail",
			GEARY: "Geary",
			GNUS: "Gnus",
			HORDE_IMP: "Horde::IMP",
			IBM_NOTES: "Lotus-Notes",
			INCREDIMAIL: "IncrediMail",
			K9_MAIL: "K-9 Mail",
			KMAIL: "KMail",
			KMAIL2: "kmail2",
			KONTACT: "Kontact",
			MAILBIRD: "Mailbird",
			MAILMATE: "MailMate",
			MAILSPRING: "Mailspring",
			MICROSOFT_OUTLOOK: "Microsoft Outlook",
			MICROSOFT_OUTLOOK_MAC: "MacOutlook",
			MUTT: "Mutt",
			NAVER_MAILAPP: "NaverMailApp",
			NEWTON: "Newton",
			NINE: "Nine",
			NYLAS_MAIL: "NylasMail",
			OUTLOOK_EXPRESS: "Outlook-Express",
			PEGASUS_MAIL: "Pegasus Mail",
			POCOMAIL: "PocoMail",
			POLYMAIL: "Polymail",
			POSTBOX: "Postbox",
			PROTON_MAIL: "ProtonMail",
			PROTON_MAIL_BRIDGE: "ProtonMail Bridge",
			QUALA_MAIL: "Quala",
			R2MAIL2: "R2Mail2",
			RAINLOOP: "RainLoop",
			ROUNDCUBE: "Roundcube Webmail",
			SAMSUNG_EMAIL: "SamsungEmail",
			SPARK_MAIL: "SparkDesktop",
			SPARROW: "Sparrow",
			SPICEBIRD: "Spicebird",
			SQUIRRELMAIL: "SquirrelMail",
			SYLPHEED: "Sylpheed",
			THE_BAT: "The Bat!",
			THUNDERBIRD: "Thunderbird",
			TROJITA: "Trojita",
			TURNPIKE: "Turnpike",
			TUTANOTA: "tutanota-desktop",
			WANDERLUST: "Wanderlust",
			WINDOWS_LIVE_MAIL: "Windows-Live-Mail",
			YAHOO_MAIL: "Yahoo Mail",
			YAHOO_MAIL_IOS: "Yahoo Mail",
			ZIMBRA: "Zimbra",
			ZOHO_MAIL: "ZohoMail-Desktop"
		},
		Fetcher: {
			AHREFS_SITEAUDIT: "AhrefsSiteAudit",
			AMAZON_NOVA_ACT: "NovaAct",
			AMAZON_USER: "Amzn-User",
			ANTHROPIC_CLAUDE_USER: "Claude-User",
			ASANA: "Asana",
			BETTER_UPTIME_BOT: "Better Uptime Bot",
			BITLY_BOT: "bitlybot",
			BLUESKY: "Bluesky",
			BUFFER_LINKPREVIEWBOT: "BufferLinkPreviewBot",
			COHERE_AI: "Cohere-AI",
			DISCORD_BOT: "Discordbot",
			DUCKDUCKGO_ASSISTBOT: "DuckAssistBot",
			FEEDLY: "Feedly",
			FLIPBOARD_PROXY: "FlipboardProxy",
			GOOGLE_CHROME_LIGHTHOUSE: "Lighthouse",
			GOOGLE_DOCS: "GoogleDocs",
			GOOGLE_FEEDFETCHER: "FeedFetcher-Google",
			GOOGLE_GEMINI_DEEP_RESEARCH: "Gemini-Deep-Research",
			GOOGLE_IMAGEPROXY: "GoogleImageProxy",
			GOOGLE_PAGERENDERER: "Google-PageRenderer",
			GOOGLE_READ_ALOUD: "Google-Read-Aloud",
			GOOGLE_PRODUCER: "GoogleProducer",
			GOOGLE_SITE_VERIFICATION: "Google-Site-Verification",
			HUBSPOT_PAGE_FETCHER: "HubSpot Page Fetcher",
			IFRAMELY: "Iframely",
			KAKAOTALK_SCRAP: "kakaotalk-scrap",
			KEYBASE_BOT: "KeybaseBot",
			META_EXTERNALFETCHER: "meta-externalfetcher",
			META_WHATSAPP: "WhatsApp",
			MICROSOFT_BINGPREVIEW: "BingPreview",
			MICROSOFT_PREVIEW: "MicrosoftPreview",
			MISTRALAI_USER: "MistralAI-User",
			NAVER_BLUENO: "Blueno",
			ONCRAWL_ROGERBOT: "rogerbot",
			OPENAI_CHATGPT_USER: "ChatGPT-User",
			PERPLEXITY_USER: "Perplexity-User",
			PINTEREST_BOT: "Pinterestbot",
			SEMRUSH_SITEAUDITBOT: "SiteAuditBot",
			SLACK_BOT: "Slackbot",
			SLACK_BOT_LINKEXPANDING: "Slackbot-LinkExpanding",
			SLACK_IMGPROXY: "Slack-ImgProxy",
			SNAP_URL_PREVIEW: "Snap URL Preview",
			SKYPE_URIPREVIEW: "SkypeUriPreview",
			TELEGRAM_BOT: "TelegramBot",
			UPTIMEROBOT: "UptimeRobot",
			UPTIMEBOT: "UptimeBot",
			VERCEL_FAVICON_BOT: "vercel-favicon-bot",
			VERCEL_SCREENSHOT_BOT: "vercel-screenshot-bot",
			VERCEL_BOT: "Vercelbot",
			VERCEL_FLAGS: "vercelflags",
			VERCEL_TRACING: "verceltracing",
			VIRUSTOTAL: "virustotal",
			X_TWITTERBOT: "Twitterbot",
			YANDEX_CALENDAR: "YandexCalendar",
			YANDEX_DIRECT: "YandexDirect",
			YANDEX_DIRECTDYN: "YandexDirectDyn",
			YANDEX_DIRECTFETCHER: "YaDirectFetcher",
			YANDEX_FORDOMAIN: "YandexForDomain",
			YANDEX_PAGECHECKER: "YandexPagechecker",
			YANDEX_SEARCHSHOP: "YandexSearchShop",
			YANDEX_SITELINKS: "YandexSitelinks",
			YANDEX_USERPROXY: "YandexUserproxy",
			ZOOMINFO_BOT: "Zoombot"
		},
		InApp: {
			DISCORD: "Discord",
			EVERNOTE: "Evernote",
			FIGMA: "Figma",
			FLIPBOARD: "Flipboard",
			MATTERMOST: "Mattermost",
			TEAMS: "Teams",
			NOTION: "Notion",
			POSTMAN: "Postman",
			RAMBOX: "Rambox",
			ROCKETCHAT: "Rocket.Chat",
			SLACK: "Slack",
			TIKTOK_LITE: "TikTok Lite",
			VSCODE: "VS Code",
			YAHOO_JAPAN: "Yahoo! Japan"
		},
		Library: {
			ADOBE_AIR: "AdobeAIR",
			AIOHTTP: "aiohttp",
			APACHE_HTTPCLIENT: "Apache-HttpClient",
			AXIOS: "axios",
			BUN: "Bun",
			DART: "Dart",
			DENO: "Deno",
			GO_HTTP_CLIENT: "go-http-client",
			GOT: "got",
			GUZZLEHTTP: "GuzzleHttp",
			HACKNEY: "hackney",
			HTTP_RB: "http.rb",
			JAVA: "Java",
			JAVA_HTTPCLIENT: "Java-http-client",
			JETTY: "Jetty",
			JSDOM: "jsdom",
			LIBWWW_PERL: "libwww-perl",
			LUA_RESTY_HTTP: "lua-resty-http",
			NEEDLE: "Needle",
			NUTCH: "Nutch",
			NODE_FETCH: "node-fetch",
			NODE_JS: "Node.js",
			NODE_SUPERAGENT: "node-superagent",
			OKHTTP: "OkHttp",
			OCAML_COHTTP: "ocaml-cohttp",
			PHP_CRAWL: "phpcrawl",
			PHP_SOAP: "PHP-SOAP",
			POSTMAN_RUNTIME: "PostmanRuntime",
			PYTHON_HTTPX: "python-httpx",
			PYTHON_URLLIB: "python-urllib",
			PYTHON_URLLIB3: "python-urllib3",
			PYTHON_REQUESTS: "python-requests",
			REST_CLIENT: "rest-client",
			SCRAPY: "Scrapy",
			UNDICI: "undici"
		}
	},
	DeviceVendor: { Vehicle: {
		BMW: "BMW",
		BYD: "BYD",
		JEEP: "Jeep",
		RIVIAN: "Rivian",
		TESLA: "Tesla",
		VOLVO: "Volvo"
	} }
}).BrowserName, ca = class {
	constructor(e, t, n) {
		this.ext = e, this.prop = t, this.list = n.map((e) => e.toLowerCase());
	}
	includes(e) {
		return this.list.includes((typeof e == "string" ? new Wi(e, this.ext).getBrowser() : e.browser)[this.prop]?.toLowerCase());
	}
}, la = new ca(aa, "type", [
	oa.CLI,
	oa.CRAWLER,
	oa.FETCHER,
	oa.LIBRARY
]);
new ca(ra, "name", [
	sa.AMAZON_NOVA_ACT,
	sa.ANTHROPIC_CLAUDE_USER,
	sa.COHERE_AI,
	sa.DUCKDUCKGO_ASSISTBOT,
	sa.GOOGLE_GEMINI_DEEP_RESEARCH,
	sa.MISTRALAI_USER,
	sa.OPENAI_CHATGPT_USER,
	sa.PERPLEXITY_USER
]), new ca(na, "name", [
	J.AI2_BOT,
	J.AMAZON_BOT,
	J.ANTHROPIC_AI,
	J.ANTHROPIC_CLAUDE_BOT,
	J.ANTHROPIC_CLAUDE_SEARCHBOT,
	J.ANTHROPIC_CLAUDE_WEB,
	J.APPLE_BOT,
	J.APPLE_BOT_EXTENDED,
	J.ATLASSIAN_BOT,
	J.BRAVE_BOT,
	J.BYTEDANCE_BYTESPIDER,
	J.BYTEDANCE_TIKTOKSPIDER,
	J.CLOUDFLARE_AUTORAG,
	J.COHERE_TRAINING_DATA_CRAWLER,
	J.COMMON_CRAWL_CCBOT,
	J.COVEO_BOT,
	J.DATAFORSEO_BOT,
	J.DEEPSEEK_BOT,
	J.DIFFBOT,
	J.GOOGLE_EXTENDED,
	J.GOOGLE_NOTEBOOKLM,
	J.GOOGLE_OTHER,
	J.GOOGLE_OTHER_IMAGE,
	J.GOOGLE_OTHER_VIDEO,
	J.GOOGLE_CLOUDVERTEXBOT,
	J.HIVE_IMAGESIFTBOT,
	J.HUAWEI_PETALBOT,
	J.HUAWEI_PANGUBOT,
	J.HUGGINGFACE_BOT,
	J.KANGAROO_BOT,
	J.FIRECRAWL_AGENT,
	J.META_FACEBOOKBOT,
	J.META_EXTERNALAGENT,
	J.META_WEBINDEXER,
	J.OPENAI_GPTBOT,
	J.OPENAI_SEARCH_BOT,
	J.PERPLEXITY_BOT,
	J.REPLICATE_BOT,
	J.RUNPOD_BOT,
	J.SB_INTUITIONS_BOT,
	J.SEMRUSH_BOT_CONTENTSHAKE,
	J.SEMRUSH_BOT_SWA,
	J.TIMPI_BOT,
	J.TOGETHER_BOT,
	J.HUNTER_VELENPUBLICWEBCRAWLER,
	J.VERCEL_V0BOT,
	J.WEBZIO_OMGILI,
	J.WEBZIO_OMGILI_BOT,
	J.WEBZIO_EXTENDED,
	J.XAI_BOT,
	J.YOU_BOT,
	J.ZHIPU_CHATGLM_SPIDER
]);
var ua = (e) => la.includes(e), da = /^@sanity\/client\b|\bsanity\/client\b|^curl\b|^axios\b|node-fetch|^got\/|python-requests|aiohttp|httpx|^Go-http-client|^okhttp\b|^Java\/|^libwww-perl|postmanruntime/i, fa = /\bMobile\b|iPhone|iPod|Android.+Mobile|Windows Phone/i, pa = /Macintosh|Windows NT|Win64|X11; Linux|X11; Ubuntu|CrOS/i;
function ma(e) {
	if (e) return e.replace(/^Mobile\s+/i, "");
}
function ha(e) {
	if (e) return e === "Mac OS" ? "macOS" : e;
}
function ga(e) {
	return e ? e === "macOS" ? "mac" : e === "Windows" ? "windows" : "other" : "other";
}
function _a(e) {
	return e === "mobile" || e === "tablet" || e === "wearable";
}
function va(e) {
	return da.test(e);
}
function ya(e, t) {
	return _a(t) || fa.test(e) ? "mobile" : pa.test(e) ? "desktop" : null;
}
function ba(e) {
	return e ? /@sanity\/client/i.test(e) ? "@sanity/client" : /^curl\b/i.test(e) ? "curl" : /postman/i.test(e) ? "Postman" : /^axios\b/i.test(e) || /node-fetch/i.test(e) || /^got\//i.test(e) ? "HTTP client" : /python-requests|aiohttp|httpx/i.test(e) ? "Python client" : /^Go-http-client/i.test(e) ? "Go client" : e.length > 48 ? `${e.slice(0, 45)}…` : e : "Unknown";
}
function xa(e, t, n) {
	let r = [e, t].filter(Boolean);
	return r.length === 0 ? ba(n) : r.join(" ");
}
function Sa(e) {
	return {
		deviceKind: null,
		osFamily: null,
		isTrackable: !1,
		displayLabel: ba(e),
		raw: e
	};
}
function Ca(e) {
	let t = e.trim();
	if (!t || va(t) || ua(t)) return Sa(e);
	let n = new Wi(t).getResult();
	if (ua(n) || !n.browser.name) return Sa(e);
	let r = ha(n.os.name), i = ma(n.browser.name), a = ya(t, n.device.type);
	return {
		deviceKind: a,
		osFamily: ga(r),
		isTrackable: a !== null,
		displayLabel: xa(r, i, t),
		raw: e
	};
}
function wa(e) {
	let t = 0, n = 0, r = 0, i = 0, a = 0;
	for (let o of e) {
		let e = Ca(o.label);
		!e.isTrackable || !e.deviceKind || (t += o.requests, e.osFamily === "mac" && (n += o.requests), e.osFamily === "windows" && (r += o.requests), e.deviceKind === "mobile" && (i += o.requests), e.deviceKind === "desktop" && (a += o.requests));
	}
	let o = (e) => t > 0 ? e / t * 100 : 0;
	return {
		trackableRequests: t,
		macPct: o(n),
		windowsPct: o(r),
		mobilePct: o(i),
		desktopPct: o(a)
	};
}
//#endregion
//#region src/report/summarize.ts
var Ta = 1024 * 1024, Ea = 100 * Ta, Da = 1e3, Oa = .25, ka = 10 * Ta, Aa = 100, ja = .75, Ma = .75, Na = .5, Pa = 8;
function Fa(e, t, n = `${t}s`) {
	return e === 1 ? t : n;
}
function Ia(e) {
	return `${Math.round(e)}%`;
}
function La(e, t, n) {
	return `${D(e)} ${Fa(e, t, n)}`;
}
function Ra(e) {
	return e.reduce((e, t) => (e.requests += t.requests, e.responseBytes += t.responseBytes, e), {
		requests: 0,
		responseBytes: 0
	});
}
function za(e, t) {
	return e.responseBytes >= Ea || e.requests >= Da || t.responseBytes >= ka && e.responseBytes / t.responseBytes >= Oa || t.requests >= Aa && e.requests / t.requests >= Oa;
}
function Ba(e, t) {
	return za(e, t) ? "critical" : "warning";
}
function Va(e, t) {
	return t.requests === e ? "" : ` across ${La(t.requests, "request")}`;
}
function Ha(e) {
	return e.responseBytes > 0 ? ` (${O(e.responseBytes)})` : "";
}
function Ua(e) {
	return Qn(e).image.map((e) => ({
		row: e,
		parsed: rr(e.label)
	}));
}
function Wa(e) {
	return Qn(e).query.filter((e) => {
		let t = Jn(e.label), n = t ? Yn(e.label) : null;
		return t !== null && Rn(t, n ?? void 0);
	});
}
function Ga(e) {
	return Qn(e).file.filter((e) => Gn(e.label));
}
function Ka(e) {
	let t = e.filter((e) => e.count > 0);
	if (t.length <= 1) return null;
	let n = t.reduce((e, t) => e + t.count, 0);
	if (n <= 0) return null;
	let r = t[0];
	for (let e of t.slice(1)) e.count > r.count && (r = e);
	return {
		label: r.label,
		count: r.count,
		total: n,
		share: r.count / n
	};
}
function qa(e, t) {
	let n = e.filter((e) => e[t] > 0);
	if (n.length <= 1) return null;
	let r = n.reduce((e, n) => e + n[t], 0);
	if (r <= 0) return null;
	let i = n[0];
	for (let e of n.slice(1)) e[t] > i[t] && (i = e);
	return {
		label: i.label,
		value: i[t],
		total: r,
		share: i[t] / r
	};
}
function Ja(e, t) {
	e.push(t);
}
function Ya(e) {
	return e.severity === "passed" || !e.suggestedFix ? null : {
		priority: e.severity,
		issue: e.title,
		impact: e.summary,
		suggestedFix: e.suggestedFix,
		responseBytes: e.responseBytes
	};
}
function Xa(e, t) {
	return e > 0 ? "red" : t > 0 ? "yellow" : "green";
}
function Za(e) {
	let t = [], n = Wa(e.byUrl);
	if (n.length > 0) {
		let r = Ra(n);
		Ja(t, {
			id: "groq-spread",
			severity: Ba(r, e),
			title: "GROQ spread-heavy queries",
			summary: `${O(r.responseBytes)} served by ${La(n.length, "GROQ query URL")} using {...}${Va(n.length, r)}`,
			suggestedFix: "Project only needed fields instead of using the {...} spread operator",
			requests: r.requests,
			responseBytes: r.responseBytes
		});
	}
	let r = Ga(e.byUrl);
	if (r.length > 0) {
		let n = Ra(r);
		Ja(t, {
			id: "mp4-transfer",
			severity: Ba(n, e),
			title: "MP4 transfer concentration",
			summary: `${O(n.responseBytes)} served as ${La(r.length, "MP4 URL")} instead of HLS${Va(r.length, n)}`,
			suggestedFix: "Serve video via HLS (or similar adaptive streaming) instead of progressive MP4",
			requests: n.requests,
			responseBytes: n.responseBytes
		});
	}
	let i = Ua(e.byUrl);
	if (i.length > 0) {
		let n = i.filter(({ parsed: e }) => ar(e.width));
		if (n.length > 0) {
			let r = Ra(n.map(({ row: e }) => e));
			Ja(t, {
				id: "image-width",
				severity: Ba(r, e),
				title: "Oversized image requests",
				summary: `${La(n.length, "image URL")} requested above 2000px${Va(n.length, r)}${Ha(r)}`,
				suggestedFix: "Cap CDN width requests at 2000px or below",
				requests: r.requests,
				responseBytes: r.responseBytes
			});
		}
		let r = i.filter(({ parsed: e }) => sr(e.format));
		if (r.length > 0) {
			let n = Ra(r.map(({ row: e }) => e));
			Ja(t, {
				id: "image-format",
				severity: Ba(n, e),
				title: "Missing format=auto",
				summary: `${La(r.length, "image URL")} missing format=auto${Va(r.length, n)}${Ha(n)}`,
				suggestedFix: "Use auto=format (or fm/format=\"auto\") for CDN image URLs",
				requests: n.requests,
				responseBytes: n.responseBytes
			});
		}
		let a = i.filter(({ parsed: e }) => or(e.quality, e.isSvg));
		if (a.length > 0) {
			let n = Ra(a.map(({ row: e }) => e));
			Ja(t, {
				id: "image-quality",
				severity: Ba(n, e),
				title: "High image quality settings",
				summary: `${La(a.length, "image URL")} with quality above 87${Va(a.length, n)}${Ha(n)}`,
				suggestedFix: "Keep image quality at 87 or below for raster assets",
				requests: n.requests,
				responseBytes: n.responseBytes
			});
		}
		let o = Ra(i.map(({ row: e }) => e));
		e.responseBytes > 0 && o.responseBytes / e.responseBytes >= Na && Ja(t, {
			id: "image-bandwidth",
			severity: Ba(o, e),
			title: "Image bandwidth concentration",
			summary: `Images account for ${Ia(o.responseBytes / e.responseBytes * 100)} of bandwidth (${O(o.responseBytes)})`,
			suggestedFix: "Reduce oversized assets, enforce format=auto, and trim unnecessary image widths",
			requests: o.requests,
			responseBytes: o.responseBytes
		});
		let s = r.reduce((e, { row: t }) => e + t.requests, 0), c = i.reduce((e, { row: t }) => e + t.requests, 0), l = c - s;
		if (c > 0) {
			let e = l / c;
			s === 0 ? Ja(t, {
				id: "image-format",
				severity: "passed",
				title: "Image format defaults",
				summary: "No explicit non-auto image formats detected"
			}) : e >= ja && Ja(t, {
				id: "image-format",
				severity: "passed",
				title: "Image format mostly safe",
				summary: `${Ia(e * 100)} of image requests avoid explicit non-auto formats`
			});
		}
	}
	let a = e.byStatus.filter(({ label: e }) => Number(e) >= 500), o = e.byStatus.filter(({ label: e }) => {
		let t = Number(e);
		return t >= 400 && t < 500;
	}), s = a.reduce((e, t) => e + t.count, 0), c = o.reduce((e, t) => e + t.count, 0);
	s > 0 ? Ja(t, {
		id: "status-5xx",
		severity: "critical",
		title: "5xx responses",
		summary: `${La(s, "5xx response")} detected`,
		suggestedFix: "Investigate failing API/CDN handlers returning 5xx",
		requests: s
	}) : Ja(t, {
		id: "status-5xx",
		severity: "passed",
		title: "5xx health",
		summary: "No 5xx responses"
	}), c > 0 ? Ja(t, {
		id: "status-4xx",
		severity: "warning",
		title: "4xx responses",
		summary: `${La(c, "4xx response")} detected`,
		suggestedFix: "Review missing assets and invalid client requests returning 4xx",
		requests: c
	}) : Ja(t, {
		id: "status-4xx",
		severity: "passed",
		title: "4xx health",
		summary: "No 4xx responses"
	});
	let l = Ka(e.responseSizeHistogram);
	l && (l.share >= ja ? Ja(t, {
		id: "response-size-concentration",
		severity: "warning",
		title: "Response size concentration",
		summary: `${l.label} accounts for ${Ia(l.share * 100)} of responses`,
		suggestedFix: "Investigate why most responses fall into one size bucket",
		requests: l.count
	}) : Ja(t, {
		id: "response-size-concentration",
		severity: "passed",
		title: "Response size distribution",
		summary: `${l.label} stays at ${Ia(l.share * 100)} of responses`
	}));
	let u = (e, n, r, i) => {
		let a = qa(r, "responseBytes"), o = a && a.share >= Ma ? {
			...a,
			metricLabel: "bandwidth"
		} : (() => {
			let e = qa(r, "requests");
			return !e || e.share < Ma ? null : {
				...e,
				metricLabel: "requests"
			};
		})();
		if (!o) return;
		let s = o.share >= .9 ? "critical" : "warning";
		Ja(t, {
			id: e,
			severity: s,
			title: n,
			summary: `${o.label} accounts for ${Ia(o.share * 100)} of ${i} ${o.metricLabel}`,
			suggestedFix: `Review anomalous concentration on ${i} "${o.label}"`,
			requests: o.metricLabel === "requests" ? o.value : void 0,
			responseBytes: o.metricLabel === "bandwidth" ? o.value : void 0
		});
	};
	u("hour-concentration", "Hourly traffic concentration", e.byHour, "hour"), u("domain-concentration", "Domain traffic concentration", e.byDomain, "domain"), u("endpoint-concentration", "Endpoint traffic concentration", e.byEndpoint, "endpoint");
	let d = t.filter((e) => e.severity === "critical"), f = t.filter((e) => e.severity === "warning"), p = t.filter((e) => e.severity === "passed"), m = [...d, ...f].map(Ya).filter((e) => e !== null).slice(0, Pa), h = m.reduce((e, t) => t.estimatedSavingsBytes === void 0 ? e : (e ?? 0) + t.estimatedSavingsBytes, void 0);
	return {
		overallHealth: Xa(d.length, f.length),
		issueCounts: {
			critical: d.length,
			warning: f.length,
			passed: p.length
		},
		findings: t,
		topOpportunities: m,
		estimatedSavingsBytes: h,
		signals: p
	};
}
function Qa(e) {
	let t = e.issueCounts.critical + e.issueCounts.warning;
	return t === 0 ? "✅ No issues detected" : `🚨 ${D(t)} ${Fa(t, "issue")} detected`;
}
//#endregion
//#region src/report/markdown.ts
function $a(e) {
	return e.replaceAll("|", "\\|").replaceAll("\n", " ").replaceAll("\r", "");
}
function eo(e) {
	return e.toLowerCase().trim().replaceAll(/[^\w\s-]/g, "").replaceAll(/\s+/g, "-").replaceAll(/-+/g, "-").replace(/^-+|-+$/g, "") || "report";
}
var to = "consider HLS streaming instead of MP4";
function no(e, t) {
	return t.length === 0 ? "" : [
		`### ${e}`,
		"",
		...t.slice(0, 5).map((e) => `- ${e.summary}`),
		""
	].join("\n");
}
function ro(e) {
	let t = Za(e), n = t.findings.filter((e) => e.severity === "critical"), r = t.findings.filter((e) => e.severity === "warning"), i = t.signals;
	return [
		"## Executive Summary",
		"",
		Qa(t),
		"",
		no("Critical", n),
		no("Warnings", r),
		no("Passed", i)
	].filter(Boolean).join("\n");
}
function io(e, t) {
	if (e === null) return "—";
	let n = String(e);
	return t ? `${n} (${t})` : n;
}
function ao(e, t) {
	if (t.length === 0) return "";
	let n = [
		`### ${e}`,
		"",
		"| Label | Requests | Bandwidth | Avg / req |",
		"| --- | ---: | ---: | ---: |"
	];
	for (let e of t) n.push(`| ${$a(e.label)} | ${D(e.requests)} | ${O(e.responseBytes)} | ${O(yt(e))} |`);
	return n.push(""), n.join("\n");
}
function oo(e, t) {
	if (t.length === 0) return "";
	let n = [
		`#### ${e}`,
		"",
		"| Label | Requests | Bandwidth | Avg / req |",
		"| --- | ---: | ---: | ---: |"
	];
	for (let e of t) n.push(`| ${$a(e.label)} | ${D(e.requests)} | ${O(e.responseBytes)} | ${O(yt(e))} |`);
	return n.push(""), n.join("\n");
}
function so(e) {
	if (e.length === 0) return "";
	let t = [
		"#### Images",
		"",
		"| ID | URL | Width | Quality | Format | Bandwidth | Requests | Avg / req |",
		"| --- | --- | ---: | ---: | --- | ---: | ---: | ---: |"
	];
	for (let n of e) {
		let e = rr(n.label), r = io(e.width, ar(e.width) ? "width exceeds 2000px" : void 0), i = io(e.quality, or(e.quality, e.isSvg) ? "quality exceeds 87" : void 0), a = io(e.format, sr(e.format) ? "format should be \"auto\"" : void 0);
		t.push(`| ${$a(e.id)} | ${$a(n.label)} | ${r} | ${i} | ${a} | ${O(n.responseBytes)} | ${D(n.requests)} | ${O(yt(n))} |`);
	}
	return t.push(""), t.join("\n");
}
function co(e) {
	if (e.length === 0) return "";
	let t = [
		"#### Queries",
		"",
		"| Label | Requests | Bandwidth | Avg / req |",
		"| --- | ---: | ---: | ---: |"
	];
	for (let n of e) {
		let e = Jn(n.label), r = e ? Yn(n.label) : null, i = e && Rn(e, r ?? void 0) ? `${n.label} (${Mn})` : n.label;
		t.push(`| ${$a(i)} | ${D(n.requests)} | ${O(n.responseBytes)} | ${O(yt(n))} |`);
	}
	return t.push(""), t.join("\n");
}
function lo(e) {
	if (e.length === 0) return "";
	let t = [
		"#### Files",
		"",
		"| Label | Requests | Bandwidth | Avg / req |",
		"| --- | ---: | ---: | ---: |"
	];
	for (let n of e) {
		let e = Gn(n.label) ? `${n.label} (${to})` : n.label;
		t.push(`| ${$a(e)} | ${D(n.requests)} | ${O(n.responseBytes)} | ${O(yt(n))} |`);
	}
	return t.push(""), t.join("\n");
}
function uo(e) {
	let t = Qn(e), n = ["### Top URLs", ""];
	return t.image.length > 0 && n.push(so(t.image)), t.file.length > 0 && n.push(lo(t.file)), t.query.length > 0 && n.push(co(t.query)), t.other.length > 0 && n.push(oo("Other", t.other)), n.filter(Boolean).join("\n");
}
function fo(e, t) {
	if (t.length === 0) return "";
	let n = wa(t), r = [`### ${e}`, ""];
	n.trackableRequests > 0 && r.push(`Mac ${gt(n.macPct)} · Windows ${gt(n.windowsPct)} · Mobile ${gt(n.mobilePct)} · Desktop ${gt(n.desktopPct)}`, ""), r.push("| Device | Label | Requests | Bandwidth | Avg / req |", "| --- | --- | ---: | ---: | ---: |");
	for (let e of t) {
		let t = Ca(e.label), n = t.deviceKind === "mobile" ? "Mobile" : t.deviceKind === "desktop" ? "Desktop" : "—";
		r.push(`| ${n} | ${$a(`${t.displayLabel} — ${t.raw}`)} | ${D(e.requests)} | ${O(e.responseBytes)} | ${O(yt(e))} |`);
	}
	return r.push(""), r.join("\n");
}
function po(e, t) {
	if (t.length === 0) return "";
	let n = [
		`### ${e}`,
		"",
		"| Label | Count |",
		"| --- | ---: |"
	];
	for (let e of t) n.push(`| ${$a(e.label)} | ${D(e.count)} |`);
	return n.push(""), n.join("\n");
}
function mo(e) {
	let t = e.firstTimestamp && e.lastTimestamp ? `${vt(e.firstTimestamp)} → ${vt(e.lastTimestamp)}` : "No timestamps found";
	return [
		"## Summary",
		"",
		`- Requests: ${D(e.requests)}`,
		`- Response bandwidth: ${O(e.responseBytes)}`,
		`- Request bytes: ${O(e.requestBytes)}`,
		`- Period: ${t}`,
		`- Studio: ${D(e.studio.requests)} requests, ${O(e.studio.responseBytes)} response`,
		`- Billable: ${D(e.nonStudio.requests)} requests, ${O(e.nonStudio.responseBytes)} response`,
		""
	].join("\n");
}
function ho(e, t) {
	let n = [];
	return t.domain && n.push(ao("Top domains", e.byDomain)), t.endpoint && n.push(ao("Top endpoints", e.byEndpoint)), t.date && n.push(ao("Daily bandwidth", e.byDate)), t.hour && n.push(ao("Hourly bandwidth", e.byHour)), t.status && n.push(po("Response codes", e.byStatus)), t.histogram && n.push(po("Response size buckets", e.responseSizeHistogram)), t.urls && n.push(uo(e.byUrl)), t.referers && n.push(ao("Top referers", e.byReferer)), t.userAgents && n.push(fo("Top user agents", e.byUserAgent)), t.ips && n.push(ao("Top IPs", e.byIp)), n.filter(Boolean).join("\n");
}
function go(e, t) {
	let n = t === "billable" ? e.billable : e.all;
	return [
		`# ${e.title}`,
		"",
		`- Source: \`${e.sourcePath}\``,
		`- Generated: ${e.generatedAt}`,
		`- View: ${n.label}`,
		`- Max table rows: ${e.config.topN}`,
		"",
		ro(n),
		"",
		mo(n),
		ho(n, e.config.sections)
	].join("\n");
}
var _o = {
	header: "_header_1755g_1",
	title: "_title_1755g_10",
	subtitle: "_subtitle_1755g_14",
	meta: "_meta_1755g_20"
}, vo = 0;
Array.isArray;
function Y(e, t, n, r, i, a) {
	t ||= {};
	var o, s, c = t;
	if ("ref" in c) for (s in c = {}, t) s == "ref" ? o = t[s] : c[s] = t[s];
	var l = {
		type: e,
		props: c,
		key: n,
		ref: o,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: --vo,
		__i: -1,
		__u: 0,
		__source: i,
		__self: a
	};
	if (typeof e == "function" && (o = e.defaultProps)) for (s in o) c[s] === void 0 && (c[s] = o[s]);
	return u.vnode && u.vnode(l), l;
}
//#endregion
//#region src/report/components/Header.tsx
function yo({ data: e }) {
	return /* @__PURE__ */ Y("header", {
		class: _o.header,
		children: [/* @__PURE__ */ Y("div", { children: [/* @__PURE__ */ Y("h1", {
			class: `heading-1 ${_o.title}`,
			children: e.title
		}), /* @__PURE__ */ Y("div", {
			class: `body-1 ${_o.subtitle}`,
			children: [
				"Generated from ",
				/* @__PURE__ */ Y("code", { children: e.sourcePath }),
				". The report is self-contained and includes the normalized summary JSON payload inline."
			]
		})] }), /* @__PURE__ */ Y("div", {
			class: `body-2 ${_o.meta}`,
			children: [/* @__PURE__ */ Y("div", { children: ["Generated on: ", vt(e.generatedAt)] }), /* @__PURE__ */ Y("div", { children: ["Max table rows: ", e.config.topN] })]
		})]
	});
}
var bo = {
	button: "_button_1fxqy_1",
	icon: "_icon_1fxqy_6",
	label: "_label_1fxqy_14",
	default: "_default_1fxqy_18",
	ghostIcon: "_ghostIcon_1fxqy_44",
	ghostIconSm: "_ghostIconSm_1fxqy_69",
	outlinePill: "_outlinePill_1fxqy_92",
	outlinePillAccent: "_outlinePillAccent_1fxqy_115",
	tab: "_tab_1fxqy_130"
}, xo = {
	default: bo.default,
	"ghost-icon": bo.ghostIcon,
	"ghost-icon-sm": bo.ghostIconSm,
	"outline-pill": bo.outlinePill,
	"outline-pill-accent": bo.outlinePillAccent,
	tab: bo.tab
};
function So({ variant: e = "default", icon: t, iconPosition: n = "start", children: r, class: i, type: a = "button", ...o }) {
	return /* @__PURE__ */ Y("button", {
		type: a,
		class: [
			bo.button,
			xo[e],
			i
		].filter(Boolean).join(" "),
		...o,
		children: [
			t && n === "start" ? /* @__PURE__ */ Y("span", {
				class: bo.icon,
				children: t
			}) : null,
			r ? /* @__PURE__ */ Y("span", {
				class: bo.label,
				children: r
			}) : null,
			t && n === "end" ? /* @__PURE__ */ Y("span", {
				class: bo.icon,
				children: t
			}) : null
		]
	});
}
//#endregion
//#region src/report/components/icons.tsx
function Co() {
	return /* @__PURE__ */ Y("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ Y("rect", {
			x: "9",
			y: "9",
			width: "13",
			height: "13",
			rx: "2",
			ry: "2"
		}), /* @__PURE__ */ Y("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
	});
}
function wo() {
	return /* @__PURE__ */ Y("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ Y("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
			/* @__PURE__ */ Y("polyline", { points: "15 3 21 3 21 9" }),
			/* @__PURE__ */ Y("line", {
				x1: "10",
				y1: "14",
				x2: "21",
				y2: "3"
			})
		]
	});
}
function To() {
	return /* @__PURE__ */ Y("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ Y("path", { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
			/* @__PURE__ */ Y("line", {
				x1: "12",
				y1: "9",
				x2: "12",
				y2: "13"
			}),
			/* @__PURE__ */ Y("line", {
				x1: "12",
				y1: "17",
				x2: "12.01",
				y2: "17"
			})
		]
	});
}
function Eo() {
	return /* @__PURE__ */ Y("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ Y("circle", {
				cx: "12",
				cy: "12",
				r: "10"
			}),
			/* @__PURE__ */ Y("line", {
				x1: "12",
				y1: "8",
				x2: "12",
				y2: "12"
			}),
			/* @__PURE__ */ Y("line", {
				x1: "12",
				y1: "16",
				x2: "12.01",
				y2: "16"
			})
		]
	});
}
function Do() {
	return /* @__PURE__ */ Y("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ Y("path", { d: "m8 9 4-4 4 4" }), /* @__PURE__ */ Y("path", { d: "m8 15 4 4 4-4" })]
	});
}
function Oo() {
	return /* @__PURE__ */ Y("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ Y("path", { d: "M12 3v12" }),
			/* @__PURE__ */ Y("path", { d: "m7 10 5 5 5-5" }),
			/* @__PURE__ */ Y("path", { d: "M5 21h14" })
		]
	});
}
//#endregion
//#region src/report/components/MarkdownDownload.tsx
function ko() {
	return /* @__PURE__ */ Y(So, {
		id: "download-markdown",
		icon: /* @__PURE__ */ Y(Oo, {}),
		children: "Download markdown for LLM"
	});
}
var Ao = {
	toggle: "_toggle_qim5j_1",
	input: "_input_qim5j_13",
	label: "_label_qim5j_21"
};
//#endregion
//#region src/report/components/ViewToggle.tsx
function jo() {
	return /* @__PURE__ */ Y("label", {
		class: Ao.toggle,
		children: [/* @__PURE__ */ Y("input", {
			type: "checkbox",
			id: "show-studio-requests",
			class: Ao.input
		}), /* @__PURE__ */ Y("span", {
			class: Ao.label,
			children: "Show non-billable studio requests"
		})]
	});
}
var Mo = { row: "_row_1de3z_1" };
//#endregion
//#region src/report/components/ReportControls.tsx
function No({ showToggle: e }) {
	return /* @__PURE__ */ Y("div", {
		class: Mo.row,
		children: [e ? /* @__PURE__ */ Y(jo, {}) : null, /* @__PURE__ */ Y(ko, {})]
	});
}
//#endregion
//#region src/report/sections.ts
var Po = {
	image: "urls/image",
	file: "urls/file",
	query: "urls/query",
	other: "urls/other"
};
function Fo(e) {
	return Zn(Qn(e ?? [])).map((e) => ({
		slug: Po[e.id],
		label: e.label
	}));
}
var Io = [
	{
		slug: "findings",
		label: "Findings"
	},
	{
		slug: "summary",
		label: "Summary"
	},
	{
		slug: "domain",
		label: "Top domains",
		configKey: "domain"
	},
	{
		slug: "endpoint",
		label: "Top endpoints",
		configKey: "endpoint"
	},
	{
		slug: "date",
		label: "Daily bandwidth",
		configKey: "date"
	},
	{
		slug: "hour",
		label: "Hourly bandwidth",
		configKey: "hour"
	},
	{
		slug: "status",
		label: "Response codes",
		configKey: "status"
	},
	{
		slug: "histogram",
		label: "Response size buckets",
		configKey: "histogram"
	},
	{
		slug: "urls",
		label: "Top URLs",
		configKey: "urls"
	},
	{
		slug: "referers",
		label: "Top referers",
		configKey: "referers"
	},
	{
		slug: "userAgents",
		label: "Top user agents",
		configKey: "userAgents"
	},
	{
		slug: "ips",
		label: "Top IPs",
		configKey: "ips"
	}
];
function Lo(e, t) {
	return Io.filter((t) => !t.configKey || e[t.configKey]).map(({ slug: e, label: n }) => ({
		slug: e,
		label: n,
		children: e === "urls" ? Fo(t) : void 0
	}));
}
var Ro = {
	toc: "_toc_15opi_1",
	heading: "_heading_15opi_12",
	list: "_list_15opi_17",
	link: "_link_15opi_25",
	subList: "_subList_15opi_39",
	subLink: "_subLink_15opi_47"
};
//#endregion
//#region src/report/components/TableOfContents.tsx
function zo({ sections: e, urlRows: t }) {
	let n = Lo(e, t);
	return /* @__PURE__ */ Y("nav", {
		class: Ro.toc,
		"aria-label": "Report sections",
		children: [/* @__PURE__ */ Y("div", {
			class: `eyebrow-1 ${Ro.heading}`,
			children: "Contents"
		}), /* @__PURE__ */ Y("ul", {
			class: Ro.list,
			children: n.map((e) => /* @__PURE__ */ Y("li", { children: [/* @__PURE__ */ Y("a", {
				class: Ro.link,
				href: `#${e.slug}`,
				"data-toc-link": !0,
				children: e.label
			}), e.children && e.children.length > 0 ? /* @__PURE__ */ Y("ul", {
				class: Ro.subList,
				children: e.children.map((e) => /* @__PURE__ */ Y("li", { children: /* @__PURE__ */ Y("a", {
					class: Ro.subLink,
					href: `#${e.slug}`,
					"data-toc-link": !0,
					children: e.label
				}) }, e.slug))
			}) : null] }, e.slug))
		})]
	});
}
//#endregion
//#region src/report/styles/colors.ts
var Bo = [
	"blue",
	"green",
	"amber",
	"red",
	"purple",
	"teal",
	"orange"
];
function Vo(e) {
	return `var(--color-${e})`;
}
function Ho(e) {
	let t = {};
	for (let [n, r] of Bo.entries()) {
		let i = e[n];
		i && (t[`--color-${r}`] = i);
	}
	return t;
}
//#endregion
//#region src/report/vertical-bar-chart.ts
var Uo = 26.8, Wo = 3.2;
function Go(e) {
	let t = [];
	for (let n = 0; n <= 4; n += 1) t.push(e / 4 * n);
	return t;
}
function Ko(e, t = 1) {
	if (e <= 0) return t;
	let n = 10 ** Math.floor(Math.log10(e)), r = e / n, i;
	return i = r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10, Math.max(i * n, t);
}
var qo = {
	empty: "_empty_14852_1",
	chart: "_chart_14852_7",
	yAxis: "_yAxis_14852_14",
	yTick: "_yTick_14852_24",
	plotArea: "_plotArea_14852_32",
	barRegion: "_barRegion_14852_37",
	gridLine: "_gridLine_14852_43",
	bars: "_bars_14852_52",
	barColumn: "_barColumn_14852_64",
	barTrack: "_barTrack_14852_74",
	bar: "_bar_14852_37",
	xLabel: "_xLabel_14852_123"
};
//#endregion
//#region src/report/components/VerticalBarChart.tsx
function Jo({ title: e, rows: t, accent: n, emptyMessage: r, axisMax: i, formatAxisTick: a }) {
	let o = Go(i);
	return /* @__PURE__ */ Y("section", {
		class: "card",
		children: [/* @__PURE__ */ Y("h3", {
			class: "heading-3",
			children: e
		}), t.length === 0 ? /* @__PURE__ */ Y("p", {
			class: qo.empty,
			children: r
		}) : /* @__PURE__ */ Y("div", {
			class: qo.chart,
			children: [/* @__PURE__ */ Y("div", {
				class: qo.yAxis,
				"aria-hidden": "true",
				children: o.slice().reverse().map((e) => /* @__PURE__ */ Y("span", {
					class: qo.yTick,
					children: a(e)
				}, e))
			}), /* @__PURE__ */ Y("div", {
				class: qo.plotArea,
				children: /* @__PURE__ */ Y("div", {
					class: qo.barRegion,
					children: [o.map((e) => /* @__PURE__ */ Y("div", {
						class: qo.gridLine,
						style: { bottom: `${Wo + e / i * Uo}rem` }
					}, e)), /* @__PURE__ */ Y("div", {
						class: qo.bars,
						children: t.map((e) => {
							let t = i > 0 ? Math.min(e.value / i * 100, 100) : 0;
							return /* @__PURE__ */ Y("div", {
								class: qo.barColumn,
								"data-tip": e.tip,
								children: [/* @__PURE__ */ Y("div", {
									class: qo.barTrack,
									children: /* @__PURE__ */ Y("div", {
										class: qo.bar,
										style: {
											height: `${t.toFixed(2)}%`,
											background: n
										}
									})
								}), /* @__PURE__ */ Y("span", {
									class: qo.xLabel,
									title: e.label,
									children: e.label
								})]
							}, e.label);
						})
					})]
				})
			})]
		})]
	});
}
//#endregion
//#region src/report/components/BandwidthBarChart.tsx
var Yo = 1024 ** 3;
function Xo(e) {
	return e / Yo;
}
function Zo(e) {
	return e * Yo;
}
function Qo(e) {
	let t = Xo(e);
	return t >= 100 ? `${t.toFixed(0)} GB` : t >= 10 ? `${t.toFixed(1)} GB` : t >= 1 ? `${t.toFixed(2)} GB` : t >= .01 ? `${t.toFixed(3)} GB` : t > 0 ? `${t.toFixed(4)} GB` : "0 GB";
}
function $o({ title: e, rows: t, accent: n }) {
	return /* @__PURE__ */ Y(Jo, {
		title: e,
		accent: n,
		emptyMessage: "No bandwidth data in this range.",
		axisMax: Ko(t.reduce((e, t) => Math.max(e, t.responseBytes), 0), Zo(.001)),
		formatAxisTick: Qo,
		rows: t.map((e) => ({
			label: e.label,
			value: e.responseBytes,
			tip: `${O(e.responseBytes)} · ${D(e.requests)} requests`
		}))
	});
}
var es = {
	bars: "_bars_10ft9_1",
	row: "_row_10ft9_7",
	head: "_head_10ft9_12",
	label: "_label_10ft9_19",
	value: "_value_10ft9_27",
	meta: "_meta_10ft9_32",
	track: "_track_10ft9_37",
	fill: "_fill_10ft9_45"
};
//#endregion
//#region src/report/components/BarList.tsx
function ts({ title: e, rows: t, accent: n }) {
	let r = t.reduce((e, t) => Math.max(e, t.responseBytes), 0);
	return /* @__PURE__ */ Y("section", {
		class: "card",
		children: [/* @__PURE__ */ Y("h3", {
			class: "heading-3",
			children: e
		}), /* @__PURE__ */ Y("div", {
			class: es.bars,
			children: t.map((e) => {
				let t = r > 0 ? e.responseBytes / r * 100 : 0;
				return /* @__PURE__ */ Y("div", {
					class: es.row,
					children: [/* @__PURE__ */ Y("div", {
						class: es.head,
						children: [/* @__PURE__ */ Y("span", {
							class: es.label,
							title: e.label,
							children: e.label
						}), /* @__PURE__ */ Y("span", {
							class: es.value,
							children: [
								O(e.responseBytes),
								" ",
								/* @__PURE__ */ Y("span", {
									class: es.meta,
									children: ["• ", D(e.requests)]
								})
							]
						})]
					}), /* @__PURE__ */ Y("div", {
						class: es.track,
						children: /* @__PURE__ */ Y("div", {
							class: es.fill,
							style: {
								width: `${t.toFixed(2)}%`,
								background: n
							}
						})
					})]
				}, e.label);
			})
		})]
	});
}
//#endregion
//#region src/report/components/CountBarChart.tsx
function ns(e) {
	return D(Math.round(e));
}
function rs({ title: e, rows: t, accent: n }) {
	return /* @__PURE__ */ Y(Jo, {
		title: e,
		accent: n,
		emptyMessage: "No response code data in this range.",
		axisMax: Ko(t.reduce((e, t) => Math.max(e, t.count), 0)),
		formatAxisTick: ns,
		rows: t.map((e) => ({
			label: e.label,
			value: e.count,
			tip: `${D(e.count)} requests`
		}))
	});
}
//#endregion
//#region src/report/components/CountBars.tsx
function is({ title: e, rows: t, accent: n }) {
	let r = t.reduce((e, t) => Math.max(e, t.count), 0);
	return /* @__PURE__ */ Y("section", {
		class: "card",
		children: [/* @__PURE__ */ Y("h3", { children: e }), /* @__PURE__ */ Y("div", {
			class: es.bars,
			children: t.map((e) => {
				let t = r > 0 ? e.count / r * 100 : 0;
				return /* @__PURE__ */ Y("div", {
					class: es.row,
					children: [/* @__PURE__ */ Y("div", {
						class: es.head,
						children: [/* @__PURE__ */ Y("span", {
							class: es.label,
							children: e.label
						}), /* @__PURE__ */ Y("span", {
							class: es.value,
							children: D(e.count)
						})]
					}), /* @__PURE__ */ Y("div", {
						class: es.track,
						children: /* @__PURE__ */ Y("div", {
							class: es.fill,
							style: {
								width: `${t.toFixed(2)}%`,
								background: n
							}
						})
					})]
				}, e.label);
			})
		})]
	});
}
//#endregion
//#region src/report/sort-table-values.ts
function as(e) {
	return e == null || e === "" ? "" : String(e);
}
var X = {
	wrap: "_wrap_bp249_1",
	table: "_table_bp249_9",
	labelCell: "_labelCell_bp249_32",
	labelCellInner: "_labelCellInner_bp249_36",
	labelText: "_labelText_bp249_43",
	sortHeader: "_sortHeader_bp249_51",
	num: "_num_bp249_76",
	sortHeaderLabel: "_sortHeaderLabel_bp249_81",
	sortIcon: "_sortIcon_bp249_85"
};
//#endregion
//#region src/report/components/SortableTableHeader.tsx
function os({ label: e, sortKey: t, sortType: n, className: r }) {
	return /* @__PURE__ */ Y("th", {
		class: r,
		children: /* @__PURE__ */ Y("button", {
			type: "button",
			class: X.sortHeader,
			"data-sort-key": t,
			"data-sort-type": n,
			"data-sort-direction": "none",
			"aria-sort": "none",
			children: [/* @__PURE__ */ Y("span", {
				class: X.sortHeaderLabel,
				children: e
			}), /* @__PURE__ */ Y("span", {
				class: X.sortIcon,
				children: /* @__PURE__ */ Y(Do, {})
			})]
		})
	});
}
//#endregion
//#region src/report/components/DataTable.tsx
function ss({ title: e, rows: t, hasCopyButton: n = !1, copyToastMessage: r = "Copied", labelAdornment: i, renderLabel: a, header: o }) {
	return /* @__PURE__ */ Y("section", {
		class: "card",
		children: [
			/* @__PURE__ */ Y("h3", {
				class: "heading-3",
				children: e
			}),
			o,
			/* @__PURE__ */ Y("div", {
				class: X.wrap,
				children: /* @__PURE__ */ Y("table", {
					class: `body-1 ${X.table}`,
					"data-sortable-table": !0,
					children: [/* @__PURE__ */ Y("thead", { children: /* @__PURE__ */ Y("tr", { children: [
						/* @__PURE__ */ Y(os, {
							label: "Label",
							sortKey: "label",
							sortType: "string"
						}),
						/* @__PURE__ */ Y(os, {
							label: "Bandwidth",
							sortKey: "bandwidth",
							sortType: "number",
							className: "num"
						}),
						/* @__PURE__ */ Y(os, {
							label: "Requests",
							sortKey: "requests",
							sortType: "number",
							className: "num"
						}),
						/* @__PURE__ */ Y(os, {
							label: "Avg / req",
							sortKey: "avg",
							sortType: "number",
							className: "num"
						})
					] }) }), /* @__PURE__ */ Y("tbody", { children: t.map((e, t) => /* @__PURE__ */ Y("tr", {
						"data-row-index": t,
						"data-sort-label": as(e.label),
						"data-sort-bandwidth": as(e.responseBytes),
						"data-sort-requests": as(e.requests),
						"data-sort-avg": as(yt(e)),
						children: [
							/* @__PURE__ */ Y("td", {
								class: X.labelCell,
								title: a ? void 0 : e.label,
								children: a ? a(e) : /* @__PURE__ */ Y("div", {
									class: X.labelCellInner,
									children: [
										n ? /* @__PURE__ */ Y(So, {
											variant: "ghost-icon-sm",
											icon: /* @__PURE__ */ Y(Co, {}),
											"data-copy-value": e.label,
											"data-copy-toast": r,
											"aria-label": `Copy "${e.label}"`,
											title: "Copy to clipboard"
										}) : null,
										/* @__PURE__ */ Y("span", {
											class: X.labelText,
											children: e.label
										}),
										i ? i(e) : null
									]
								})
							}),
							/* @__PURE__ */ Y("td", {
								class: "num",
								children: O(e.responseBytes)
							}),
							/* @__PURE__ */ Y("td", {
								class: "num",
								children: D(e.requests)
							}),
							/* @__PURE__ */ Y("td", {
								class: "num",
								children: O(yt(e))
							})
						]
					}, e.label)) })]
				})
			})
		]
	});
}
//#endregion
//#region src/report/utils/styleForShare.ts
function cs(e, t, n, r) {
	let i = e + t;
	if (i <= 0) return `background: ${r};`;
	let a = e / i * 100;
	return `background: conic-gradient(${n} 0 ${a}%, ${r} ${a}% 100%);`;
}
var ls = {
	wrap: "_wrap_19u7b_1",
	donut: "_donut_19u7b_8",
	center: "_center_19u7b_27",
	legend: "_legend_19u7b_36",
	swatch: "_swatch_19u7b_47"
};
//#endregion
//#region src/report/components/Donut.tsx
function us({ title: e, primary: t, secondary: n, colors: r }) {
	let i = t.value + n.value, a = i > 0 ? t.value / i * 100 : 0;
	return /* @__PURE__ */ Y("article", {
		class: "card",
		children: [/* @__PURE__ */ Y("h3", {
			class: "heading-3",
			children: e
		}), /* @__PURE__ */ Y("div", {
			class: ls.wrap,
			children: [/* @__PURE__ */ Y("div", {
				class: ls.donut,
				style: cs(t.value, n.value, r.primary, r.secondary),
				children: /* @__PURE__ */ Y("div", {
					class: `body-1 ${ls.center}`,
					children: [/* @__PURE__ */ Y("strong", {
						class: "heading-4",
						children: O(i)
					}), /* @__PURE__ */ Y("span", { children: gt(a) })]
				})
			}), /* @__PURE__ */ Y("div", {
				class: `body-1 ${ls.legend}`,
				children: [/* @__PURE__ */ Y("div", { children: [
					/* @__PURE__ */ Y("span", {
						class: ls.swatch,
						style: { background: r.primary }
					}),
					t.label,
					" ",
					/* @__PURE__ */ Y("strong", { children: O(t.value) })
				] }), /* @__PURE__ */ Y("div", { children: [
					/* @__PURE__ */ Y("span", {
						class: ls.swatch,
						style: { background: r.secondary }
					}),
					n.label,
					" ",
					/* @__PURE__ */ Y("strong", { children: O(n.value) })
				] })]
			})]
		})]
	});
}
var Z = {
	root: "_root_5shz5_1",
	cards: "_cards_5shz5_8",
	card: "_card_5shz5_8",
	cardBody: "_cardBody_5shz5_31",
	cardLabel: "_cardLabel_5shz5_39",
	cardValue: "_cardValue_5shz5_43",
	cardNote: "_cardNote_5shz5_47",
	dot: "_dot_5shz5_52",
	priorityDot: "_priorityDot_5shz5_53",
	toneGreen: "_toneGreen_5shz5_66",
	toneYellow: "_toneYellow_5shz5_71",
	toneRed: "_toneRed_5shz5_76",
	opportunities: "_opportunities_5shz5_92",
	sectionTitle: "_sectionTitle_5shz5_97",
	empty: "_empty_5shz5_103",
	priority: "_priority_5shz5_53",
	priorityCritical: "_priorityCritical_5shz5_126",
	priorityWarning: "_priorityWarning_5shz5_130"
}, ds = {
	green: "Healthy",
	yellow: "Needs attention",
	red: "Critical issues"
}, fs = {
	green: Z.toneGreen,
	yellow: Z.toneYellow,
	red: Z.toneRed
};
function ps(e) {
	return e === "critical" ? "Critical" : "Warning";
}
function ms({ summary: e }) {
	let t = e.issueCounts.critical + e.issueCounts.warning;
	return /* @__PURE__ */ Y("section", {
		class: Z.root,
		"data-section": "findings",
		children: [/* @__PURE__ */ Y("div", {
			class: Z.cards,
			children: [
				/* @__PURE__ */ Y("article", {
					class: `${Z.card} ${fs[e.overallHealth]}`,
					"data-health": e.overallHealth,
					children: [/* @__PURE__ */ Y("span", {
						class: Z.dot,
						"aria-hidden": "true"
					}), /* @__PURE__ */ Y("div", {
						class: Z.cardBody,
						children: [
							/* @__PURE__ */ Y("div", {
								class: `eyebrow-1 ${Z.cardLabel}`,
								children: "Overall health"
							}),
							/* @__PURE__ */ Y("div", {
								class: `display-1 ${Z.cardValue}`,
								children: ds[e.overallHealth]
							}),
							/* @__PURE__ */ Y("div", {
								class: `body-2 ${Z.cardNote}`,
								children: t === 0 ? "No critical or warning findings" : `${D(t)} ${t === 1 ? "issue" : "issues"} detected`
							})
						]
					})]
				}),
				/* @__PURE__ */ Y("article", {
					class: `${Z.card} ${Z.toneRed}`,
					children: [/* @__PURE__ */ Y("span", {
						class: Z.dot,
						"aria-hidden": "true"
					}), /* @__PURE__ */ Y("div", {
						class: Z.cardBody,
						children: [
							/* @__PURE__ */ Y("div", {
								class: `eyebrow-1 ${Z.cardLabel}`,
								children: "Critical"
							}),
							/* @__PURE__ */ Y("div", {
								class: `display-1 ${Z.cardValue}`,
								children: D(e.issueCounts.critical)
							}),
							/* @__PURE__ */ Y("div", {
								class: `body-2 ${Z.cardNote}`,
								children: "High-impact findings"
							})
						]
					})]
				}),
				/* @__PURE__ */ Y("article", {
					class: `${Z.card} ${Z.toneYellow}`,
					children: [/* @__PURE__ */ Y("span", {
						class: Z.dot,
						"aria-hidden": "true"
					}), /* @__PURE__ */ Y("div", {
						class: Z.cardBody,
						children: [
							/* @__PURE__ */ Y("div", {
								class: `eyebrow-1 ${Z.cardLabel}`,
								children: "Warnings"
							}),
							/* @__PURE__ */ Y("div", {
								class: `display-1 ${Z.cardValue}`,
								children: D(e.issueCounts.warning)
							}),
							/* @__PURE__ */ Y("div", {
								class: `body-2 ${Z.cardNote}`,
								children: "Worth reviewing"
							})
						]
					})]
				}),
				/* @__PURE__ */ Y("article", {
					class: `${Z.card} ${Z.toneGreen}`,
					children: [/* @__PURE__ */ Y("span", {
						class: Z.dot,
						"aria-hidden": "true"
					}), /* @__PURE__ */ Y("div", {
						class: Z.cardBody,
						children: [
							/* @__PURE__ */ Y("div", {
								class: `eyebrow-1 ${Z.cardLabel}`,
								children: "Passed"
							}),
							/* @__PURE__ */ Y("div", {
								class: `display-1 ${Z.cardValue}`,
								children: D(e.issueCounts.passed)
							}),
							/* @__PURE__ */ Y("div", {
								class: `body-2 ${Z.cardNote}`,
								children: "Healthy signals"
							})
						]
					})]
				}),
				e.estimatedSavingsBytes === void 0 ? null : /* @__PURE__ */ Y("article", {
					class: Z.card,
					children: /* @__PURE__ */ Y("div", {
						class: Z.cardBody,
						children: [
							/* @__PURE__ */ Y("div", {
								class: `eyebrow-1 ${Z.cardLabel}`,
								children: "Est. savings"
							}),
							/* @__PURE__ */ Y("div", {
								class: `display-1 ${Z.cardValue}`,
								children: O(e.estimatedSavingsBytes)
							}),
							/* @__PURE__ */ Y("div", {
								class: `body-2 ${Z.cardNote}`,
								children: "From explicit byte opportunities"
							})
						]
					})
				})
			]
		}), /* @__PURE__ */ Y("div", {
			class: Z.opportunities,
			children: [/* @__PURE__ */ Y("div", {
				class: `eyebrow-1 ${Z.sectionTitle}`,
				children: "Top opportunities"
			}), e.topOpportunities.length === 0 ? /* @__PURE__ */ Y("p", {
				class: `body-1 ${Z.empty}`,
				children: "No optimization opportunities detected for this view."
			}) : /* @__PURE__ */ Y("div", {
				class: X.wrap,
				children: /* @__PURE__ */ Y("table", {
					class: `body-1 ${X.table}`,
					children: [/* @__PURE__ */ Y("thead", { children: /* @__PURE__ */ Y("tr", { children: [
						/* @__PURE__ */ Y("th", { children: "Priority" }),
						/* @__PURE__ */ Y("th", { children: "Issue" }),
						/* @__PURE__ */ Y("th", { children: "Impact" }),
						/* @__PURE__ */ Y("th", { children: "Suggested fix" })
					] }) }), /* @__PURE__ */ Y("tbody", { children: e.topOpportunities.map((e) => /* @__PURE__ */ Y("tr", { children: [
						/* @__PURE__ */ Y("td", { children: /* @__PURE__ */ Y("span", {
							class: `${Z.priority} ${e.priority === "critical" ? Z.priorityCritical : Z.priorityWarning}`,
							children: [/* @__PURE__ */ Y("span", {
								class: Z.priorityDot,
								"aria-hidden": "true"
							}), ps(e.priority)]
						}) }),
						/* @__PURE__ */ Y("td", { children: e.issue }),
						/* @__PURE__ */ Y("td", { children: e.impact }),
						/* @__PURE__ */ Y("td", { children: e.suggestedFix })
					] }, `${e.priority}-${e.issue}`)) })]
				})
			})]
		})]
	});
}
var hs = {
	metric: "_metric_4re7a_1",
	label: "_label_4re7a_12",
	value: "_value_4re7a_16",
	note: "_note_4re7a_20"
};
//#endregion
//#region src/report/components/Metric.tsx
function gs({ label: e, value: t, note: n }) {
	return /* @__PURE__ */ Y("article", {
		class: hs.metric,
		children: [
			/* @__PURE__ */ Y("div", {
				class: `eyebrow-1 ${hs.label}`,
				children: e
			}),
			/* @__PURE__ */ Y("div", {
				class: `display-1 ${hs.value}`,
				children: t
			}),
			n ? /* @__PURE__ */ Y("div", {
				class: `body-2 ${hs.note}`,
				children: n
			}) : null
		]
	});
}
//#endregion
//#region src/report/is-development-url.ts
function _s(e, t) {
	let n = e.toLowerCase();
	return (n === "localhost" || n === "127.0.0.1") && t !== "";
}
function vs(e) {
	return /^192\.168\.\d{1,3}\.\d{1,3}$/.test(e);
}
function ys(e) {
	return /192\.168\.\d{1,3}\.\d{1,3}/.test(e) ? !0 : /(?:^|\/\/)(?:localhost|127\.0\.0\.1):\d+/.test(e);
}
function bs(e) {
	if (!e || e === "(empty)") return !1;
	try {
		let t = new URL(e);
		return vs(t.hostname) || _s(t.hostname, t.port);
	} catch {
		return ys(e);
	}
}
var xs = { chip: "_chip_1idw4_1" };
//#endregion
//#region src/report/components/RefererDataTable.tsx
function Ss(e) {
	return e.startsWith("https://");
}
function Cs({ row: e }) {
	return /* @__PURE__ */ Y("div", {
		class: X.labelCellInner,
		children: [
			/* @__PURE__ */ Y(So, {
				variant: "ghost-icon-sm",
				icon: /* @__PURE__ */ Y(Co, {}),
				"data-copy-value": e.label,
				"aria-label": `Copy "${e.label}"`,
				title: "Copy to clipboard"
			}),
			Ss(e.label) ? /* @__PURE__ */ Y("a", {
				href: e.label,
				target: "_blank",
				rel: "noopener noreferrer",
				class: `${bo.button} ${bo.ghostIconSm}`,
				"aria-label": `Open "${e.label}" in new tab`,
				title: "Open in new tab",
				children: /* @__PURE__ */ Y("span", {
					class: bo.icon,
					children: /* @__PURE__ */ Y(wo, {})
				})
			}) : null,
			/* @__PURE__ */ Y("span", {
				class: X.labelText,
				children: e.label
			}),
			bs(e.label) ? /* @__PURE__ */ Y("span", {
				class: xs.chip,
				children: "Development"
			}) : null
		]
	});
}
function ws({ title: e, rows: t }) {
	return /* @__PURE__ */ Y(ss, {
		title: e,
		rows: t,
		renderLabel: (e) => /* @__PURE__ */ Y(Cs, { row: e })
	});
}
var Ts = {
	summary: "_summary_19bh0_1",
	stat: "_stat_19bh0_8",
	labelStack: "_labelStack_19bh0_25",
	labelHead: "_labelHead_19bh0_32",
	deviceIcon: "_deviceIcon_19bh0_39",
	parsedLabel: "_parsedLabel_19bh0_54",
	rawLabel: "_rawLabel_19bh0_61",
	chip: "_chip_19bh0_71"
};
//#endregion
//#region src/report/components/UserAgentDataTable.tsx
function Es(e) {
	return /^@sanity/i.test(e.trim());
}
function Ds() {
	return /* @__PURE__ */ Y("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ Y("rect", {
				x: "2",
				y: "3",
				width: "20",
				height: "14",
				rx: "2"
			}),
			/* @__PURE__ */ Y("path", { d: "M8 21h8" }),
			/* @__PURE__ */ Y("path", { d: "M12 17v4" })
		]
	});
}
function Os() {
	return /* @__PURE__ */ Y("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: /* @__PURE__ */ Y("rect", {
			x: "7",
			y: "2",
			width: "10",
			height: "20",
			rx: "2"
		})
	});
}
function ks({ raw: e }) {
	let t = Ca(e);
	return /* @__PURE__ */ Y("div", {
		class: Ts.labelStack,
		children: [/* @__PURE__ */ Y("div", {
			class: Ts.labelHead,
			children: [
				t.deviceKind ? /* @__PURE__ */ Y("span", {
					class: Ts.deviceIcon,
					title: t.deviceKind === "mobile" ? "Mobile" : "Desktop",
					"aria-label": t.deviceKind === "mobile" ? "Mobile" : "Desktop",
					children: t.deviceKind === "mobile" ? /* @__PURE__ */ Y(Os, {}) : /* @__PURE__ */ Y(Ds, {})
				}) : null,
				/* @__PURE__ */ Y("span", {
					class: Ts.parsedLabel,
					children: t.deviceKind ? t.displayLabel : t.raw || t.displayLabel
				}),
				Es(e) ? /* @__PURE__ */ Y("span", {
					class: Ts.chip,
					children: "Sanity client"
				}) : null
			]
		}), t.deviceKind ? /* @__PURE__ */ Y("div", {
			class: Ts.rawLabel,
			title: t.raw,
			children: t.raw
		}) : null]
	});
}
function As({ rows: e }) {
	let t = wa(e);
	return t.trackableRequests === 0 ? null : /* @__PURE__ */ Y("div", {
		class: Ts.summary,
		children: [
			/* @__PURE__ */ Y("span", {
				class: Ts.stat,
				children: [/* @__PURE__ */ Y("strong", { children: "Mac" }), gt(t.macPct)]
			}),
			/* @__PURE__ */ Y("span", {
				class: Ts.stat,
				children: [/* @__PURE__ */ Y("strong", { children: "Windows" }), gt(t.windowsPct)]
			}),
			/* @__PURE__ */ Y("span", {
				class: Ts.stat,
				children: [/* @__PURE__ */ Y("strong", { children: "Mobile" }), gt(t.mobilePct)]
			}),
			/* @__PURE__ */ Y("span", {
				class: Ts.stat,
				children: [/* @__PURE__ */ Y("strong", { children: "Desktop" }), gt(t.desktopPct)]
			})
		]
	});
}
function js({ title: e, rows: t }) {
	return /* @__PURE__ */ Y(ss, {
		title: e,
		rows: t,
		header: /* @__PURE__ */ Y(As, { rows: t }),
		renderLabel: (e) => /* @__PURE__ */ Y(ks, { raw: e.label })
	});
}
var Ms = {
	section: "_section_6yc47_1",
	tabList: "_tabList_6yc47_5",
	panel: "_panel_6yc47_12"
};
//#endregion
//#region src/report/format-groq.ts
function Ns(e) {
	let t = e.replace(/\r\n?/g, "\n").replace(/\t/g, "  ").split("\n").map((e) => e.trimEnd());
	for (; t.length > 0 && t[0] === "";) t.shift();
	for (; t.length > 0 && t[t.length - 1] === "";) t.pop();
	let n = t.filter((e) => e.trim().length > 0);
	if (n.length === 0) return "";
	let r = Math.min(...n.map((e) => e.match(/^ */)?.[0].length ?? 0));
	return t.map((e) => e.trim().length === 0 ? "" : e.slice(Math.min(r, e.length)).trimStart()).join("\n").trim();
}
//#endregion
//#region node_modules/@sanity/prism-groq/groq.js
var Ps = /* @__PURE__ */ c((/* @__PURE__ */ o(((e, t) => {
	var n = function(e) {
		var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, n = 0, r = {}, i = {
			manual: e.Prism && e.Prism.manual,
			disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
			util: {
				encode: function e(t) {
					return t instanceof a ? new a(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
				},
				type: function(e) {
					return Object.prototype.toString.call(e).slice(8, -1);
				},
				objId: function(e) {
					return e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id;
				},
				clone: function e(t, n) {
					n ||= {};
					var r, a;
					switch (i.util.type(t)) {
						case "Object":
							if (a = i.util.objId(t), n[a]) return n[a];
							for (var o in r = {}, n[a] = r, t) t.hasOwnProperty(o) && (r[o] = e(t[o], n));
							return r;
						case "Array": return a = i.util.objId(t), n[a] ? n[a] : (r = [], n[a] = r, t.forEach(function(t, i) {
							r[i] = e(t, n);
						}), r);
						default: return t;
					}
				},
				getLanguage: function(e) {
					for (; e;) {
						var n = t.exec(e.className);
						if (n) return n[1].toLowerCase();
						e = e.parentElement;
					}
					return "none";
				},
				setLanguage: function(e, n) {
					e.className = e.className.replace(RegExp(t, "gi"), ""), e.classList.add("language-" + n);
				},
				currentScript: function() {
					if (typeof document > "u") return null;
					if (document.currentScript && document.currentScript.tagName === "SCRIPT") return document.currentScript;
					try {
						throw Error();
					} catch (r) {
						var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
						if (e) {
							var t = document.getElementsByTagName("script");
							for (var n in t) if (t[n].src == e) return t[n];
						}
						return null;
					}
				},
				isActive: function(e, t, n) {
					for (var r = "no-" + t; e;) {
						var i = e.classList;
						if (i.contains(t)) return !0;
						if (i.contains(r)) return !1;
						e = e.parentElement;
					}
					return !!n;
				}
			},
			languages: {
				plain: r,
				plaintext: r,
				text: r,
				txt: r,
				extend: function(e, t) {
					var n = i.util.clone(i.languages[e]);
					for (var r in t) n[r] = t[r];
					return n;
				},
				insertBefore: function(e, t, n, r) {
					r ||= i.languages;
					var a = r[e], o = {};
					for (var s in a) if (a.hasOwnProperty(s)) {
						if (s == t) for (var c in n) n.hasOwnProperty(c) && (o[c] = n[c]);
						n.hasOwnProperty(s) || (o[s] = a[s]);
					}
					var l = r[e];
					return r[e] = o, i.languages.DFS(i.languages, function(t, n) {
						n === l && t != e && (this[t] = o);
					}), o;
				},
				DFS: function e(t, n, r, a) {
					a ||= {};
					var o = i.util.objId;
					for (var s in t) if (t.hasOwnProperty(s)) {
						n.call(t, s, t[s], r || s);
						var c = t[s], l = i.util.type(c);
						l === "Object" && !a[o(c)] ? (a[o(c)] = !0, e(c, n, null, a)) : l === "Array" && !a[o(c)] && (a[o(c)] = !0, e(c, n, s, a));
					}
				}
			},
			plugins: {},
			highlightAll: function(e, t) {
				i.highlightAllUnder(document, e, t);
			},
			highlightAllUnder: function(e, t, n) {
				var r = {
					callback: n,
					container: e,
					selector: "code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code"
				};
				i.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), i.hooks.run("before-all-elements-highlight", r);
				for (var a = 0, o; o = r.elements[a++];) i.highlightElement(o, t === !0, r.callback);
			},
			highlightElement: function(t, n, r) {
				var a = i.util.getLanguage(t), o = i.languages[a];
				i.util.setLanguage(t, a);
				var s = t.parentElement;
				s && s.nodeName.toLowerCase() === "pre" && i.util.setLanguage(s, a);
				var c = {
					element: t,
					language: a,
					grammar: o,
					code: t.textContent
				};
				function l(e) {
					c.highlightedCode = e, i.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, i.hooks.run("after-highlight", c), i.hooks.run("complete", c), r && r.call(c.element);
				}
				if (i.hooks.run("before-sanity-check", c), s = c.element.parentElement, s && s.nodeName.toLowerCase() === "pre" && !s.hasAttribute("tabindex") && s.setAttribute("tabindex", "0"), !c.code) {
					i.hooks.run("complete", c), r && r.call(c.element);
					return;
				}
				if (i.hooks.run("before-highlight", c), !c.grammar) {
					l(i.util.encode(c.code));
					return;
				}
				if (n && e.Worker) {
					var u = new Worker(i.filename);
					u.onmessage = function(e) {
						l(e.data);
					}, u.postMessage(JSON.stringify({
						language: c.language,
						code: c.code,
						immediateClose: !0
					}));
				} else l(i.highlight(c.code, c.grammar, c.language));
			},
			highlight: function(e, t, n) {
				var r = {
					code: e,
					grammar: t,
					language: n
				};
				if (i.hooks.run("before-tokenize", r), !r.grammar) throw Error("The language \"" + r.language + "\" has no grammar.");
				return r.tokens = i.tokenize(r.code, r.grammar), i.hooks.run("after-tokenize", r), a.stringify(i.util.encode(r.tokens), r.language);
			},
			tokenize: function(e, t) {
				var n = t.rest;
				if (n) {
					for (var r in n) t[r] = n[r];
					delete t.rest;
				}
				var i = new c();
				return l(i, i.head, e), s(e, i, t, i.head, 0), d(i);
			},
			hooks: {
				all: {},
				add: function(e, t) {
					var n = i.hooks.all;
					n[e] = n[e] || [], n[e].push(t);
				},
				run: function(e, t) {
					var n = i.hooks.all[e];
					if (!(!n || !n.length)) for (var r = 0, a; a = n[r++];) a(t);
				}
			},
			Token: a
		};
		e.Prism = i;
		function a(e, t, n, r) {
			this.type = e, this.content = t, this.alias = n, this.length = (r || "").length | 0;
		}
		a.stringify = function e(t, n) {
			if (typeof t == "string") return t;
			if (Array.isArray(t)) {
				var r = "";
				return t.forEach(function(t) {
					r += e(t, n);
				}), r;
			}
			var a = {
				type: t.type,
				content: e(t.content, n),
				tag: "span",
				classes: ["token", t.type],
				attributes: {},
				language: n
			}, o = t.alias;
			o && (Array.isArray(o) ? Array.prototype.push.apply(a.classes, o) : a.classes.push(o)), i.hooks.run("wrap", a);
			var s = "";
			for (var c in a.attributes) s += " " + c + "=\"" + (a.attributes[c] || "").replace(/"/g, "&quot;") + "\"";
			return "<" + a.tag + " class=\"" + a.classes.join(" ") + "\"" + s + ">" + a.content + "</" + a.tag + ">";
		};
		function o(e, t, n, r) {
			e.lastIndex = t;
			var i = e.exec(n);
			if (i && r && i[1]) {
				var a = i[1].length;
				i.index += a, i[0] = i[0].slice(a);
			}
			return i;
		}
		function s(e, t, n, r, c, d) {
			for (var f in n) if (!(!n.hasOwnProperty(f) || !n[f])) {
				var p = n[f];
				p = Array.isArray(p) ? p : [p];
				for (var m = 0; m < p.length; ++m) {
					if (d && d.cause == f + "," + m) return;
					var h = p[m], g = h.inside, _ = !!h.lookbehind, v = !!h.greedy, y = h.alias;
					if (v && !h.pattern.global) {
						var b = h.pattern.toString().match(/[imsuy]*$/)[0];
						h.pattern = RegExp(h.pattern.source, b + "g");
					}
					for (var ee = h.pattern || h, x = r.next, S = c; x !== t.tail && !(d && S >= d.reach); S += x.value.length, x = x.next) {
						var te = x.value;
						if (t.length > e.length) return;
						if (!(te instanceof a)) {
							var ne = 1, C;
							if (v) {
								if (C = o(ee, S, e, _), !C || C.index >= e.length) break;
								var re = C.index, ie = C.index + C[0].length, ae = S;
								for (ae += x.value.length; re >= ae;) x = x.next, ae += x.value.length;
								if (ae -= x.value.length, S = ae, x.value instanceof a) continue;
								for (var oe = x; oe !== t.tail && (ae < ie || typeof oe.value == "string"); oe = oe.next) ne++, ae += oe.value.length;
								ne--, te = e.slice(S, ae), C.index -= S;
							} else if (C = o(ee, 0, te, _), !C) continue;
							var re = C.index, se = C[0], ce = te.slice(0, re), w = te.slice(re + se.length), le = S + te.length;
							d && le > d.reach && (d.reach = le);
							var T = x.prev;
							ce && (T = l(t, T, ce), S += ce.length), u(t, T, ne);
							var E = new a(f, g ? i.tokenize(se, g) : se, y, se);
							if (x = l(t, T, E), w && l(t, x, w), ne > 1) {
								var ue = {
									cause: f + "," + m,
									reach: le
								};
								s(e, t, n, x.prev, S, ue), d && ue.reach > d.reach && (d.reach = ue.reach);
							}
						}
					}
				}
			}
		}
		function c() {
			var e = {
				value: null,
				prev: null,
				next: null
			}, t = {
				value: null,
				prev: e,
				next: null
			};
			e.next = t, this.head = e, this.tail = t, this.length = 0;
		}
		function l(e, t, n) {
			var r = t.next, i = {
				value: n,
				prev: t,
				next: r
			};
			return t.next = i, r.prev = i, e.length++, i;
		}
		function u(e, t, n) {
			for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
			t.next = r, r.prev = t, e.length -= i;
		}
		function d(e) {
			for (var t = [], n = e.head.next; n !== e.tail;) t.push(n.value), n = n.next;
			return t;
		}
		if (!e.document) return e.addEventListener && (i.disableWorkerMessageHandler || e.addEventListener("message", function(t) {
			var n = JSON.parse(t.data), r = n.language, a = n.code, o = n.immediateClose;
			e.postMessage(i.highlight(a, i.languages[r], r)), o && e.close();
		}, !1)), i;
		var f = i.util.currentScript();
		f && (i.filename = f.src, f.hasAttribute("data-manual") && (i.manual = !0));
		function p() {
			i.manual || i.highlightAll();
		}
		if (!i.manual) {
			var m = document.readyState;
			m === "loading" || m === "interactive" && f && f.defer ? document.addEventListener("DOMContentLoaded", p) : window.requestAnimationFrame ? window.requestAnimationFrame(p) : window.setTimeout(p, 16);
		}
		return i;
	}(typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {});
	t !== void 0 && t.exports && (t.exports = n), typeof global < "u" && (global.Prism = n), n.languages.markup = {
		comment: {
			pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
			greedy: !0
		},
		prolog: {
			pattern: /<\?[\s\S]+?\?>/,
			greedy: !0
		},
		doctype: {
			pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
			greedy: !0,
			inside: {
				"internal-subset": {
					pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
					lookbehind: !0,
					greedy: !0,
					inside: null
				},
				string: {
					pattern: /"[^"]*"|'[^']*'/,
					greedy: !0
				},
				punctuation: /^<!|>$|[[\]]/,
				"doctype-tag": /^DOCTYPE/i,
				name: /[^\s<>'"]+/
			}
		},
		cdata: {
			pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
			greedy: !0
		},
		tag: {
			pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
			greedy: !0,
			inside: {
				tag: {
					pattern: /^<\/?[^\s>\/]+/,
					inside: {
						punctuation: /^<\/?/,
						namespace: /^[^\s>\/:]+:/
					}
				},
				"special-attr": [],
				"attr-value": {
					pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
					inside: { punctuation: [{
						pattern: /^=/,
						alias: "attr-equals"
					}, {
						pattern: /^(\s*)["']|["']$/,
						lookbehind: !0
					}] }
				},
				punctuation: /\/?>/,
				"attr-name": {
					pattern: /[^\s>\/]+/,
					inside: { namespace: /^[^\s>\/:]+:/ }
				}
			}
		},
		entity: [{
			pattern: /&[\da-z]{1,8};/i,
			alias: "named-entity"
		}, /&#x?[\da-f]{1,8};/i]
	}, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, n.languages.markup.doctype.inside["internal-subset"].inside = n.languages.markup, n.hooks.add("wrap", function(e) {
		e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
	}), Object.defineProperty(n.languages.markup.tag, "addInlined", { value: function(e, t) {
		var r = {};
		r["language-" + t] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: !0,
			inside: n.languages[t]
		}, r.cdata = /^<!\[CDATA\[|\]\]>$/i;
		var i = { "included-cdata": {
			pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
			inside: r
		} };
		i["language-" + t] = {
			pattern: /[\s\S]+/,
			inside: n.languages[t]
		};
		var a = {};
		a[e] = {
			pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)".replace(/__/g, function() {
				return e;
			}), "i"),
			lookbehind: !0,
			greedy: !0,
			inside: i
		}, n.languages.insertBefore("markup", "cdata", a);
	} }), Object.defineProperty(n.languages.markup.tag, "addAttribute", { value: function(e, t) {
		n.languages.markup.tag.inside["special-attr"].push({
			pattern: RegExp("(^|[\"'\\s])(?:" + e + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
			lookbehind: !0,
			inside: {
				"attr-name": /^[^\s=]+/,
				"attr-value": {
					pattern: /=[\s\S]+/,
					inside: {
						value: {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: !0,
							alias: [t, "language-" + t],
							inside: n.languages[t]
						},
						punctuation: [{
							pattern: /^=/,
							alias: "attr-equals"
						}, /"|'/]
					}
				}
			}
		});
	} }), n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.xml = n.languages.extend("markup", {}), n.languages.ssml = n.languages.xml, n.languages.atom = n.languages.xml, n.languages.rss = n.languages.xml, (function(e) {
		var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
		e.languages.css = {
			comment: /\/\*[\s\S]*?\*\//,
			atrule: {
				pattern: RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" + t.source + ")*?(?:;|(?=\\s*\\{))"),
				inside: {
					rule: /^@[\w-]+/,
					"selector-function-argument": {
						pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
						lookbehind: !0,
						alias: "selector"
					},
					keyword: {
						pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
						lookbehind: !0
					}
				}
			},
			url: {
				pattern: RegExp("\\burl\\((?:" + t.source + "|(?:[^\\\\\\r\\n()\"']|\\\\[\\s\\S])*)\\)", "i"),
				greedy: !0,
				inside: {
					function: /^url/i,
					punctuation: /^\(|\)$/,
					string: {
						pattern: RegExp("^" + t.source + "$"),
						alias: "url"
					}
				}
			},
			selector: {
				pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
				lookbehind: !0
			},
			string: {
				pattern: t,
				greedy: !0
			},
			property: {
				pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
				lookbehind: !0
			},
			important: /!important\b/i,
			function: {
				pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
				lookbehind: !0
			},
			punctuation: /[(){};:,]/
		}, e.languages.css.atrule.inside.rest = e.languages.css;
		var n = e.languages.markup;
		n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
	})(n), n.languages.clike = {
		comment: [{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: !0,
			greedy: !0
		}, {
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: !0,
			greedy: !0
		}],
		string: {
			pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: !0
		},
		"class-name": {
			pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
			lookbehind: !0,
			inside: { punctuation: /[.\\]/ }
		},
		keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
		boolean: /\b(?:false|true)\b/,
		function: /\b\w+(?=\()/,
		number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
		operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
		punctuation: /[{}[\];(),.:]/
	}, n.languages.javascript = n.languages.extend("clike", {
		"class-name": [n.languages.clike["class-name"], {
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: !0
		}],
		keyword: [{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: !0
		}, {
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: !0
		}],
		function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
		number: {
			pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),
			lookbehind: !0
		},
		operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
	}), n.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, n.languages.insertBefore("javascript", "keyword", {
		regex: {
			pattern: RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))"),
			lookbehind: !0,
			greedy: !0,
			inside: {
				"regex-source": {
					pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
					lookbehind: !0,
					alias: "language-regex",
					inside: n.languages.regex
				},
				"regex-delimiter": /^\/|\/$/,
				"regex-flags": /^[a-z]+$/
			}
		},
		"function-variable": {
			pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
			alias: "function"
		},
		parameter: [
			{
				pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
				lookbehind: !0,
				inside: n.languages.javascript
			},
			{
				pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
				lookbehind: !0,
				inside: n.languages.javascript
			},
			{
				pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
				lookbehind: !0,
				inside: n.languages.javascript
			},
			{
				pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
				lookbehind: !0,
				inside: n.languages.javascript
			}
		],
		constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
	}), n.languages.insertBefore("javascript", "string", {
		hashbang: {
			pattern: /^#!.*/,
			greedy: !0,
			alias: "comment"
		},
		"template-string": {
			pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
			greedy: !0,
			inside: {
				"template-punctuation": {
					pattern: /^`|`$/,
					alias: "string"
				},
				interpolation: {
					pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
					lookbehind: !0,
					inside: {
						"interpolation-punctuation": {
							pattern: /^\$\{|\}$/,
							alias: "punctuation"
						},
						rest: n.languages.javascript
					}
				},
				string: /[\s\S]+/
			}
		},
		"string-property": {
			pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
			lookbehind: !0,
			greedy: !0,
			alias: "property"
		}
	}), n.languages.insertBefore("javascript", "operator", { "literal-property": {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: !0,
		alias: "property"
	} }), n.languages.markup && (n.languages.markup.tag.addInlined("script", "javascript"), n.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), n.languages.js = n.languages.javascript, (function() {
		if (n === void 0 || typeof document > "u") return;
		Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
		var e = "Loading…", t = function(e, t) {
			return "✖ Error " + e + " while fetching file: " + t;
		}, r = "✖ Error: File does not exist or is empty", i = {
			js: "javascript",
			py: "python",
			rb: "ruby",
			ps1: "powershell",
			psm1: "powershell",
			sh: "bash",
			bat: "batch",
			h: "c",
			tex: "latex"
		}, a = "data-src-status", o = "loading", s = "loaded", c = "failed", l = "pre[data-src]:not([" + a + "=\"" + s + "\"]):not([" + a + "=\"" + o + "\"])";
		function u(e, n, i) {
			var a = new XMLHttpRequest();
			a.open("GET", e, !0), a.onreadystatechange = function() {
				a.readyState == 4 && (a.status < 400 && a.responseText ? n(a.responseText) : a.status >= 400 ? i(t(a.status, a.statusText)) : i(r));
			}, a.send(null);
		}
		function d(e) {
			var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
			if (t) {
				var n = Number(t[1]), r = t[2], i = t[3];
				return r ? i ? [n, Number(i)] : [n, void 0] : [n, n];
			}
		}
		n.hooks.add("before-highlightall", function(e) {
			e.selector += ", " + l;
		}), n.hooks.add("before-sanity-check", function(t) {
			var r = t.element;
			if (r.matches(l)) {
				t.code = "", r.setAttribute(a, o);
				var f = r.appendChild(document.createElement("CODE"));
				f.textContent = e;
				var p = r.getAttribute("data-src"), m = t.language;
				if (m === "none") {
					var h = (/\.(\w+)$/.exec(p) || [, "none"])[1];
					m = i[h] || h;
				}
				n.util.setLanguage(f, m), n.util.setLanguage(r, m);
				var g = n.plugins.autoloader;
				g && g.loadLanguages(m), u(p, function(e) {
					r.setAttribute(a, s);
					var t = d(r.getAttribute("data-range"));
					if (t) {
						var i = e.split(/\r\n?|\n/g), o = t[0], c = t[1] == null ? i.length : t[1];
						o < 0 && (o += i.length), o = Math.max(0, Math.min(o - 1, i.length)), c < 0 && (c += i.length), c = Math.max(0, Math.min(c, i.length)), e = i.slice(o, c).join("\n"), r.hasAttribute("data-start") || r.setAttribute("data-start", String(o + 1));
					}
					f.textContent = e, n.highlightElement(f);
				}, function(e) {
					r.setAttribute(a, c), f.textContent = e;
				});
			}
		}), n.plugins.fileHighlight = { highlight: function(e) {
			for (var t = (e || document).querySelectorAll(l), r = 0, i; i = t[r++];) n.highlightElement(i);
		} };
		var f = !1;
		n.fileHighlight = function() {
			f ||= (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), !0), n.plugins.fileHighlight.highlight.apply(this, arguments);
		};
	})();
})))(), 1), Fs = {
	comment: {
		pattern: /\/\/.*/,
		greedy: !0
	},
	string: {
		pattern: /(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
		greedy: !0,
		inside: { escape: /\\(?:[\\/"'bfnrt]|u[0-9a-fA-F]{4}|u\{[0-9a-fA-F]+\})/ }
	},
	number: /(?<!\w)-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?(?!\w)/,
	boolean: /\b(?:false|true)\b/,
	null: /\bnull\b/,
	"keyword-operator": /\b(?:asc|desc|in|match)\b/,
	function: /\b(?:after|before|boost|coalesce|count|dateTime|defined|identity|length|lower|now|order|path|references|round|score|select|string|upper)\b(?=\s*\()/,
	"namespaced-call": {
		pattern: /\b[a-zA-Z_]\w*\s*::\s*[a-zA-Z_]\w*(?=\s*\()/,
		inside: {
			namespace: {
				pattern: /^[a-zA-Z_]\w*/,
				alias: "class-name"
			},
			"namespace-separator": {
				pattern: /::/,
				alias: "operator"
			},
			"namespaced-function": {
				pattern: /[a-zA-Z_]\w*$/,
				alias: "function"
			}
		}
	},
	variable: /\$[a-zA-Z_]\w*/,
	"special-variable": {
		pattern: /@|\^+/,
		alias: "variable"
	},
	wildcard: {
		pattern: /\*(?=\s*[\[{|])/,
		alias: "variable"
	},
	spread: {
		pattern: /\.\.\./,
		alias: "operator"
	},
	dereference: {
		pattern: /->/,
		alias: "operator"
	},
	pipe: {
		pattern: /\|(?!\|)/,
		alias: "operator"
	},
	operator: /=>|[!=<>]=|&&|\|\||[!+\-*/%]|\*\*|\.\.(?!\.)/,
	punctuation: /[[\]{}(),:;]/,
	accessor: {
		pattern: /\./,
		alias: "punctuation"
	},
	identifier: /\b[a-zA-Z_]\w*\b/
};
typeof Prism < "u" && typeof Prism.languages == "object" && Prism.languages !== null && !Array.isArray(Prism.languages) && (Prism.languages.groq = Fs), Object.assign((e) => {
	e.languages.groq = Fs;
}, {
	displayName: "groq",
	aliases: []
});
//#endregion
//#region src/report/highlight-groq.ts
function Is(e) {
	return Ps.default.highlight(e, Ps.default.languages.groq, "groq");
}
var Q = {
	dialog: "_dialog_mjk69_1",
	panel: "_panel_mjk69_17",
	header: "_header_mjk69_21",
	title: "_title_mjk69_28",
	section: "_section_mjk69_33",
	stats: "_stats_mjk69_39",
	stat: "_stat_mjk69_39",
	statLabel: "_statLabel_mjk69_54",
	statValue: "_statValue_mjk69_60",
	sectionLabel: "_sectionLabel_mjk69_66",
	pre: "_pre_mjk69_71",
	error: "_error_mjk69_86",
	warning: "_warning_mjk69_92",
	note: "_note_mjk69_104"
}, Ls = {
	stats: "_stats_8ca1h_1",
	row: "_row_8ca1h_7",
	group: "_group_8ca1h_25",
	groupLabel: "_groupLabel_8ca1h_33",
	empty: "_empty_8ca1h_40"
}, Rs = [
	"dereferences",
	"projections",
	"subqueries",
	"spreads",
	"arrayTraversals"
];
function zs(e) {
	return e.replace(/([A-Z])/g, " $1").replace(/^./, (e) => e.toUpperCase());
}
function Bs({ stats: e }) {
	let t = Rs.filter((t) => e[t] > 0).sort((t, n) => e[n] - e[t]), n = Object.entries(e.functionCalls).filter(([, e]) => e > 0).sort(([e], [t]) => e.localeCompare(t));
	return t.length === 0 && n.length === 0 ? /* @__PURE__ */ Y("p", {
		class: Ls.empty,
		children: "No structural features detected."
	}) : /* @__PURE__ */ Y("dl", {
		class: Ls.stats,
		children: [t.map((t) => /* @__PURE__ */ Y("div", {
			class: Ls.row,
			children: [/* @__PURE__ */ Y("dt", { children: zs(t) }), /* @__PURE__ */ Y("dd", {
				class: "num",
				children: e[t]
			})]
		}, t)), n.length > 0 ? /* @__PURE__ */ Y("div", {
			class: Ls.group,
			children: [/* @__PURE__ */ Y("div", {
				class: Ls.groupLabel,
				children: "functionCalls"
			}), n.map(([e, t]) => /* @__PURE__ */ Y("div", {
				class: Ls.row,
				children: [/* @__PURE__ */ Y("dt", { children: e }), /* @__PURE__ */ Y("dd", {
					class: "num",
					children: t
				})]
			}, e))]
		}) : null]
	});
}
//#endregion
//#region src/report/components/GroqQueryFlyout.tsx
function Vs({ id: e, query: t, params: n = null, requests: r, responseBytes: i }) {
	let a = Ns(t), o = Is(a), s = Ln(a, n ?? void 0), c = Rn(a, n ?? void 0), l = r > 0 ? i / r : 0, u = n && Object.keys(n).length > 0 ? JSON.stringify(n, null, 2) : null;
	return /* @__PURE__ */ Y("dialog", {
		id: e,
		class: Q.dialog,
		"data-groq-flyout": !0,
		children: /* @__PURE__ */ Y("div", {
			class: Q.panel,
			children: [
				/* @__PURE__ */ Y("div", {
					class: Q.header,
					children: [
						/* @__PURE__ */ Y("h4", {
							class: `heading-3 ${Q.title}`,
							children: "GROQ query"
						}),
						/* @__PURE__ */ Y(So, {
							variant: "outline-pill",
							icon: /* @__PURE__ */ Y(Co, {}),
							iconPosition: "end",
							"data-copy-value": a,
							"data-copy-toast": "Copied query",
							"aria-label": "Copy query",
							children: "Copy query"
						}),
						/* @__PURE__ */ Y(So, {
							variant: "ghost-icon",
							icon: "×",
							"data-groq-flyout-close": !0,
							"aria-label": "Close"
						})
					]
				}),
				/* @__PURE__ */ Y("div", {
					class: Q.section,
					children: [/* @__PURE__ */ Y("div", {
						class: `eyebrow-1 ${Q.sectionLabel}`,
						children: "Usage"
					}), /* @__PURE__ */ Y("dl", {
						class: Q.stats,
						children: [
							/* @__PURE__ */ Y("div", {
								class: Q.stat,
								children: [/* @__PURE__ */ Y("dt", {
									class: Q.statLabel,
									children: "Bandwidth"
								}), /* @__PURE__ */ Y("dd", {
									class: Q.statValue,
									children: O(i)
								})]
							}),
							/* @__PURE__ */ Y("div", {
								class: Q.stat,
								children: [/* @__PURE__ */ Y("dt", {
									class: Q.statLabel,
									children: "Requests"
								}), /* @__PURE__ */ Y("dd", {
									class: Q.statValue,
									children: D(r)
								})]
							}),
							/* @__PURE__ */ Y("div", {
								class: Q.stat,
								children: [/* @__PURE__ */ Y("dt", {
									class: Q.statLabel,
									children: "Avg / req"
								}), /* @__PURE__ */ Y("dd", {
									class: Q.statValue,
									children: O(l)
								})]
							})
						]
					})]
				}),
				c ? /* @__PURE__ */ Y("p", {
					class: Q.warning,
					children: [
						"This query ",
						Mn,
						"."
					]
				}) : null,
				/* @__PURE__ */ Y("div", {
					class: Q.section,
					children: [/* @__PURE__ */ Y("div", {
						class: `eyebrow-1 ${Q.sectionLabel}`,
						children: "Query"
					}), /* @__PURE__ */ Y("pre", {
						class: Q.pre,
						children: /* @__PURE__ */ Y("code", {
							class: "language-groq",
							dangerouslySetInnerHTML: { __html: o }
						})
					})]
				}),
				u ? /* @__PURE__ */ Y("div", {
					class: Q.section,
					children: [/* @__PURE__ */ Y("div", {
						class: `eyebrow-1 ${Q.sectionLabel}`,
						children: "Params"
					}), /* @__PURE__ */ Y("pre", {
						class: Q.pre,
						children: /* @__PURE__ */ Y("code", { children: u })
					})]
				}) : null,
				/* @__PURE__ */ Y("div", {
					class: Q.section,
					children: [/* @__PURE__ */ Y("div", {
						class: `eyebrow-1 ${Q.sectionLabel}`,
						children: "Structure"
					}), s ? /* @__PURE__ */ Y(Bs, { stats: s }) : /* @__PURE__ */ Y("p", {
						class: Q.error,
						children: "Could not analyze query structure."
					})]
				}),
				/* @__PURE__ */ Y("p", {
					class: Q.note,
					children: [
						"Want to learn more about making efficient queries? Check out Sanity's guide on",
						" ",
						/* @__PURE__ */ Y("a", {
							href: "https://www.sanity.io/docs/developer-guides/high-performance-groq",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "how to optimize groq queries."
						}),
						"."
					]
				})
			]
		})
	});
}
var Hs = {
	wrap: "_wrap_1l7gg_1",
	tooltip: "_tooltip_1l7gg_12",
	placementTop: "_placementTop_1l7gg_38",
	placementBottom: "_placementBottom_1l7gg_43"
};
//#endregion
//#region src/report/components/Tooltip.tsx
function Us({ content: e, children: t, placement: n = "top", class: r }) {
	let i = n === "bottom" ? Hs.placementBottom : Hs.placementTop;
	return /* @__PURE__ */ Y("span", {
		class: [
			Hs.wrap,
			i,
			r
		].filter(Boolean).join(" "),
		children: [t, /* @__PURE__ */ Y("span", {
			class: Hs.tooltip,
			role: "tooltip",
			children: e
		})]
	});
}
var Ws = {
	empty: "_empty_150uw_1",
	metricCell: "_metricCell_150uw_8",
	errorBadge: "_errorBadge_150uw_14",
	errorIcon: "_errorIcon_150uw_26",
	warningIcon: "_warningIcon_150uw_37"
};
//#endregion
//#region src/report/components/UrlDataTable.tsx
function Gs(e) {
	return e === null ? "—" : String(e);
}
function Ks({ rows: e, showFlyout: t = !1, variant: n = "default", idPrefix: r }) {
	if (e.length === 0) return /* @__PURE__ */ Y("p", {
		class: Ws.empty,
		children: "No URLs in this category."
	});
	let i = n === "image", a = n === "file", o = i || a;
	return /* @__PURE__ */ Y("div", {
		class: X.wrap,
		children: /* @__PURE__ */ Y("table", {
			class: `body-1 ${X.table}`,
			"data-sortable-table": !0,
			children: [/* @__PURE__ */ Y("thead", { children: /* @__PURE__ */ Y("tr", { children: [
				/* @__PURE__ */ Y(os, {
					label: "Label",
					sortKey: "label",
					sortType: "string"
				}),
				i ? /* @__PURE__ */ Y(se, { children: [
					/* @__PURE__ */ Y(os, {
						label: "Width",
						sortKey: "width",
						sortType: "number",
						className: "num"
					}),
					/* @__PURE__ */ Y(os, {
						label: "Quality",
						sortKey: "quality",
						sortType: "number",
						className: "num"
					}),
					/* @__PURE__ */ Y(os, {
						label: "Format",
						sortKey: "format",
						sortType: "string"
					})
				] }) : null,
				/* @__PURE__ */ Y(os, {
					label: "Bandwidth",
					sortKey: "bandwidth",
					sortType: "number",
					className: "num"
				}),
				/* @__PURE__ */ Y(os, {
					label: "Requests",
					sortKey: "requests",
					sortType: "number",
					className: "num"
				}),
				/* @__PURE__ */ Y(os, {
					label: "Avg / req",
					sortKey: "avg",
					sortType: "number",
					className: "num"
				})
			] }) }), /* @__PURE__ */ Y("tbody", { children: e.map((e, n) => {
				let s = t ? Jn(e.label) : null, c = s === null ? null : Yn(e.label), l = s === null ? !1 : Rn(s, c ?? void 0), u = s ? `${r}-flyout-${n}` : void 0, d = i ? rr(e.label) : null;
				return /* @__PURE__ */ Y("tr", {
					"data-row-index": n,
					"data-sort-label": as(i ? d?.id ?? e.label : e.label),
					"data-sort-bandwidth": as(e.responseBytes),
					"data-sort-requests": as(e.requests),
					"data-sort-avg": as(yt(e)),
					...i ? {
						"data-sort-width": as(d?.width ?? null),
						"data-sort-quality": as(d?.quality ?? null),
						"data-sort-format": as(d?.format ?? null)
					} : {},
					children: [
						/* @__PURE__ */ Y("td", {
							class: X.labelCell,
							title: i ? e.label : void 0,
							children: [/* @__PURE__ */ Y("div", {
								class: X.labelCellInner,
								children: [
									/* @__PURE__ */ Y(So, {
										variant: "ghost-icon-sm",
										icon: /* @__PURE__ */ Y(Co, {}),
										"data-copy-value": e.label,
										"data-copy-toast": "Copied URL",
										"aria-label": `Copy "${e.label}"`,
										title: "Copy to clipboard"
									}),
									o ? /* @__PURE__ */ Y("a", {
										href: ir(e.label),
										target: "_blank",
										rel: "noopener noreferrer",
										class: `${bo.button} ${bo.ghostIconSm}`,
										"aria-label": `Open "${i ? d?.id ?? e.label : e.label}" in new tab`,
										title: "Open in new tab",
										children: /* @__PURE__ */ Y("span", {
											class: bo.icon,
											children: /* @__PURE__ */ Y(wo, {})
										})
									}) : null,
									/* @__PURE__ */ Y("span", {
										class: X.labelText,
										children: i ? d?.id : e.label
									}),
									a && Gn(e.label) ? /* @__PURE__ */ Y(Us, {
										content: "Consider using HLS streaming services like Mux instead of serving large single MP4 files to reduce bandwidth and improve playback.",
										children: /* @__PURE__ */ Y("span", {
											class: Ws.warningIcon,
											children: /* @__PURE__ */ Y(To, {})
										})
									}) : null,
									l ? /* @__PURE__ */ Y(Us, {
										content: `This query ${Mn}.`,
										children: /* @__PURE__ */ Y("span", {
											class: Ws.warningIcon,
											children: /* @__PURE__ */ Y(To, {})
										})
									}) : null,
									u ? /* @__PURE__ */ Y(So, {
										variant: "outline-pill-accent",
										"data-groq-flyout-target": u,
										"aria-haspopup": "dialog",
										children: "View query"
									}) : null
								]
							}), u && s ? /* @__PURE__ */ Y(Vs, {
								id: u,
								query: s,
								params: c,
								requests: e.requests,
								responseBytes: e.responseBytes
							}) : null]
						}),
						i && d ? /* @__PURE__ */ Y(se, { children: [
							/* @__PURE__ */ Y("td", {
								class: "num",
								children: /* @__PURE__ */ Y("div", {
									class: Ws.metricCell,
									children: [/* @__PURE__ */ Y("span", { children: Gs(d.width) }), ar(d.width) ? /* @__PURE__ */ Y(Us, {
										content: "Width exceeds 2000px",
										children: /* @__PURE__ */ Y("span", {
											class: Ws.errorBadge,
											children: "Too large"
										})
									}) : null]
								})
							}),
							/* @__PURE__ */ Y("td", {
								class: "num",
								children: /* @__PURE__ */ Y("div", {
									class: Ws.metricCell,
									children: [/* @__PURE__ */ Y("span", { children: Gs(d.quality) }), or(d.quality, d.isSvg) ? /* @__PURE__ */ Y(Us, {
										content: "Quality exceeds 87",
										children: /* @__PURE__ */ Y("span", {
											class: Ws.errorIcon,
											children: /* @__PURE__ */ Y(Eo, {})
										})
									}) : null]
								})
							}),
							/* @__PURE__ */ Y("td", { children: /* @__PURE__ */ Y("div", {
								class: Ws.metricCell,
								children: [/* @__PURE__ */ Y("span", { children: Gs(d.format) }), sr(d.format) ? /* @__PURE__ */ Y(Us, {
									content: "Format should be \"auto\"",
									children: /* @__PURE__ */ Y("span", {
										class: Ws.errorIcon,
										children: /* @__PURE__ */ Y(Eo, {})
									})
								}) : null]
							}) })
						] }) : null,
						/* @__PURE__ */ Y("td", {
							class: "num",
							children: O(e.responseBytes)
						}),
						/* @__PURE__ */ Y("td", {
							class: "num",
							children: D(e.requests)
						}),
						/* @__PURE__ */ Y("td", {
							class: "num",
							children: O(yt(e))
						})
					]
				}, `${e.label}-${n}`);
			}) })]
		})
	});
}
//#endregion
//#region src/report/components/UrlTabsSection.tsx
function qs({ rows: e, idPrefix: t }) {
	let n = Qn(e), r = $n(n), i = Zn(n);
	return /* @__PURE__ */ Y("section", {
		class: `card ${Ms.section}`,
		"data-section": "urls",
		"data-url-tabs": !0,
		"data-default-url-tab": r,
		children: [
			/* @__PURE__ */ Y("h3", {
				class: "heading-3",
				children: "Top URLs"
			}),
			/* @__PURE__ */ Y("div", {
				class: Ms.tabList,
				role: "tablist",
				"aria-label": "URL categories",
				children: i.map((e) => /* @__PURE__ */ Y(So, {
					variant: "tab",
					role: "tab",
					"data-url-tab": e.id,
					"aria-selected": e.id === r ? "true" : "false",
					"aria-controls": `${t}-panel-${e.id}`,
					children: [
						e.label,
						" (",
						n[e.id].length,
						")"
					]
				}, e.id))
			}),
			i.map((e) => /* @__PURE__ */ Y("div", {
				id: `${t}-panel-${e.id}`,
				class: Ms.panel,
				role: "tabpanel",
				"data-url-panel": e.id,
				hidden: e.id !== r || void 0,
				children: /* @__PURE__ */ Y(Ks, {
					rows: n[e.id],
					showFlyout: e.id === "query",
					variant: e.id === "image" ? "image" : e.id === "file" ? "file" : "default",
					idPrefix: `${t}-${e.id}`
				})
			}, e.id))
		]
	});
}
var $ = {
	sectionBlock: "_sectionBlock_49q3n_1",
	viewGrid: "_viewGrid_49q3n_5",
	grid2: "_grid2_49q3n_17",
	stack: "_stack_49q3n_30",
	sectionTitle: "_sectionTitle_49q3n_35"
};
//#endregion
//#region src/report/components/ViewSection.tsx
function Js({ view: e, sections: t, viewKey: n, hidden: r = !1 }) {
	let i = e.firstTimestamp && e.lastTimestamp ? `${vt(e.firstTimestamp)} → ${vt(e.lastTimestamp)}` : "No timestamps found", a = Za(e);
	return /* @__PURE__ */ Y("div", {
		"data-report-view": n,
		hidden: r || void 0,
		children: [
			/* @__PURE__ */ Y(ms, { summary: a }),
			/* @__PURE__ */ Y("section", {
				class: $.sectionBlock,
				"data-section": "summary",
				children: /* @__PURE__ */ Y("div", {
					class: $.viewGrid,
					children: [
						/* @__PURE__ */ Y(gs, {
							label: "Requests",
							value: D(e.requests),
							note: i
						}),
						/* @__PURE__ */ Y(gs, {
							label: "Bandwidth",
							value: O(e.responseBytes),
							note: "Response size total"
						}),
						/* @__PURE__ */ Y(gs, {
							label: "Request bytes",
							value: O(e.requestBytes),
							note: "Inbound payload total"
						}),
						/* @__PURE__ */ Y(gs, {
							label: "Studio",
							value: O(e.studio.responseBytes),
							note: `${D(e.studio.requests)} requests`
						}),
						/* @__PURE__ */ Y(gs, {
							label: "Billable",
							value: O(e.nonStudio.responseBytes),
							note: `${D(e.nonStudio.requests)} requests`
						}),
						/* @__PURE__ */ Y(us, {
							title: "Studio split",
							primary: {
								label: "Studio",
								value: e.studio.responseBytes
							},
							secondary: {
								label: "Billable",
								value: e.nonStudio.responseBytes
							},
							colors: {
								primary: Vo("blue"),
								secondary: Vo("green")
							}
						})
					]
				})
			}),
			/* @__PURE__ */ Y("div", {
				class: $.grid2,
				children: [/* @__PURE__ */ Y("div", {
					class: $.stack,
					children: [
						/* @__PURE__ */ Y("div", {
							class: `eyebrow-1 ${$.sectionTitle}`,
							children: "Charts"
						}),
						/* @__PURE__ */ Y("div", {
							class: $.grid2,
							children: [t.domain ? /* @__PURE__ */ Y("section", {
								class: $.sectionBlock,
								"data-section": "domain",
								children: /* @__PURE__ */ Y(ts, {
									title: "Top domains",
									rows: e.byDomain,
									accent: Vo("blue")
								})
							}) : null, t.endpoint ? /* @__PURE__ */ Y("section", {
								class: $.sectionBlock,
								"data-section": "endpoint",
								children: /* @__PURE__ */ Y(ts, {
									title: "Top endpoints",
									rows: e.byEndpoint,
									accent: Vo("green")
								})
							}) : null]
						}),
						/* @__PURE__ */ Y("div", {
							class: $.grid2,
							children: [t.date ? /* @__PURE__ */ Y("section", {
								class: $.sectionBlock,
								"data-section": "date",
								children: /* @__PURE__ */ Y($o, {
									title: "Daily bandwidth",
									rows: e.byDate,
									accent: Vo("amber")
								})
							}) : null, t.hour ? /* @__PURE__ */ Y("section", {
								class: $.sectionBlock,
								"data-section": "hour",
								children: /* @__PURE__ */ Y($o, {
									title: "Hourly bandwidth",
									rows: e.byHour,
									accent: Vo("red")
								})
							}) : null]
						}),
						/* @__PURE__ */ Y("div", {
							class: $.grid2,
							children: [t.status ? /* @__PURE__ */ Y("section", {
								class: $.sectionBlock,
								"data-section": "status",
								children: /* @__PURE__ */ Y(rs, {
									title: "Response codes",
									rows: e.byStatus,
									accent: Vo("purple")
								})
							}) : null, t.histogram ? /* @__PURE__ */ Y("section", {
								class: $.sectionBlock,
								"data-section": "histogram",
								children: /* @__PURE__ */ Y(is, {
									title: "Response size buckets",
									rows: e.responseSizeHistogram,
									accent: Vo("teal")
								})
							}) : null]
						})
					]
				}), /* @__PURE__ */ Y("div", {
					class: $.stack,
					children: [
						/* @__PURE__ */ Y("div", {
							class: `eyebrow-1 ${$.sectionTitle}`,
							children: "Top lists"
						}),
						t.urls ? /* @__PURE__ */ Y("div", {
							class: $.sectionBlock,
							children: /* @__PURE__ */ Y(qs, {
								rows: e.byUrl,
								idPrefix: `urls-${n}`
							})
						}) : null,
						t.referers ? /* @__PURE__ */ Y("section", {
							class: $.sectionBlock,
							"data-section": "referers",
							children: /* @__PURE__ */ Y(ws, {
								title: "Top referers",
								rows: e.byReferer
							})
						}) : null,
						t.userAgents ? /* @__PURE__ */ Y("section", {
							class: $.sectionBlock,
							"data-section": "userAgents",
							children: /* @__PURE__ */ Y(js, {
								title: "Top user agents",
								rows: e.byUserAgent
							})
						}) : null,
						t.ips ? /* @__PURE__ */ Y("section", {
							class: $.sectionBlock,
							"data-section": "ips",
							children: /* @__PURE__ */ Y(ss, {
								hasCopyButton: !0,
								copyToastMessage: "Copied IP",
								title: "Top IPs",
								rows: e.byIp
							})
						}) : null
					]
				})]
			})
		]
	});
}
var Ys = {
	page: "_page_14a77_1",
	layout: "_layout_14a77_7",
	content: "_content_14a77_14",
	footer: "_footer_14a77_18"
};
//#endregion
//#region src/report/ReportApp.tsx
function Xs({ data: e }) {
	let t = Ho(e.config.palette), n = e.config.sections.billableComparison, r = n ? e.billable.byUrl : e.all.byUrl;
	return /* @__PURE__ */ Y("main", {
		class: Ys.page,
		style: t,
		children: [/* @__PURE__ */ Y(yo, { data: e }), /* @__PURE__ */ Y("div", {
			class: Ys.layout,
			children: [/* @__PURE__ */ Y(zo, {
				sections: e.config.sections,
				urlRows: r
			}), /* @__PURE__ */ Y("div", {
				class: Ys.content,
				children: [
					/* @__PURE__ */ Y(No, { showToggle: n }),
					n ? /* @__PURE__ */ Y(se, { children: [/* @__PURE__ */ Y(Js, {
						view: e.billable,
						sections: e.config.sections,
						viewKey: "billable"
					}), /* @__PURE__ */ Y(Js, {
						view: e.all,
						sections: e.config.sections,
						viewKey: "all",
						hidden: !0
					})] }) : /* @__PURE__ */ Y(Js, {
						view: e.all,
						sections: e.config.sections,
						viewKey: "all"
					}),
					/* @__PURE__ */ Y("div", {
						class: `body-2 ${Ys.footer}`,
						children: [
							"Raw report payload is embedded in",
							" ",
							/* @__PURE__ */ Y("code", { children: "<script type=\"application/json\">" }),
							" for downstream automation."
						]
					})
				]
			})]
		})]
	});
}
//#endregion
//#region src/report/scripts/copy-buttons.ts
var Zs = "(function(){\ndocument.addEventListener(\"click\",function(e){\nvar btn=e.target.closest(\"[data-copy-value]\");\nif(!btn)return;\ne.preventDefault();\nvar value=btn.getAttribute(\"data-copy-value\");\nif(!value)return;\nvar message=btn.getAttribute(\"data-copy-toast\")||\"Copied\";\nnavigator.clipboard.writeText(value).then(function(){\nwindow.__showReportToast(message);\n}).catch(function(){});\n});\n})();", Qs = "(function(){\ndocument.addEventListener(\"click\",function(e){\nvar target=e.target.closest(\"[data-groq-flyout-target]\");\nif(target){\ne.preventDefault();\nvar id=target.getAttribute(\"data-groq-flyout-target\");\nif(!id)return;\nvar dialog=document.getElementById(id);\nif(dialog&&typeof dialog.showModal===\"function\")dialog.showModal();\nreturn;\n}\nif(e.target.closest(\"[data-groq-flyout-close]\")){\nvar closeDialog=e.target.closest(\"dialog[data-groq-flyout]\");\nif(closeDialog)closeDialog.close();\n}\n});\ndocument.addEventListener(\"click\",function(e){\nvar dialog=e.target;\nif(dialog&&dialog.tagName===\"DIALOG\"&&dialog.hasAttribute(\"data-groq-flyout\")&&e.target===dialog){\ndialog.close();\n}\n});\n})();", $s = "(function(){\nvar button=document.getElementById(\"download-markdown\");\nvar payloadEl=document.getElementById(\"report-markdown\");\nif(!button||!payloadEl)return;\n\nbutton.addEventListener(\"click\",function(){\nvar payload;\ntry{payload=JSON.parse(payloadEl.textContent||\"\");}catch(e){return;}\nif(!payload||!payload.filenameBase)return;\n\nvar checkbox=document.getElementById(\"show-studio-requests\");\nvar view=checkbox&&checkbox.checked?\"all\":\"billable\";\nif(!checkbox)view=\"all\";\n\nvar markdown=view===\"all\"?payload.all:payload.billable;\nif(!markdown)return;\n\nvar suffix=view===\"all\"?\"_all\":\"_billable-only\";\nvar filename=payload.filenameBase+suffix+\".md\";\nvar blob=new Blob([markdown],{type:\"text/markdown;charset=utf-8\"});\nvar url=URL.createObjectURL(blob);\nvar link=document.createElement(\"a\");\nlink.href=url;\nlink.download=filename;\nlink.click();\nURL.revokeObjectURL(url);\nwindow.__showReportToast(\"Downloaded\");\n});\n})();", ec = "(function(){\nfunction parseSortValue(raw,type){\nif(raw===\"\")return null;\nif(type===\"number\"){\nvar n=Number(raw);\nreturn Number.isFinite(n)?n:null;\n}\nreturn raw;\n}\nfunction compareValues(a,b,type,direction){\nvar mult=direction===\"asc\"?1:-1;\nif(a===null&&b===null)return 0;\nif(a===null)return 1;\nif(b===null)return -1;\nif(type===\"string\")return String(a).localeCompare(String(b))*mult;\nreturn(Number(a)-Number(b))*mult;\n}\nfunction setHeaderState(btn,direction){\nvar aria=direction===\"asc\"?\"ascending\":direction===\"desc\"?\"descending\":\"none\";\nbtn.setAttribute(\"data-sort-direction\",direction);\nbtn.setAttribute(\"aria-sort\",aria);\n}\nfunction sortTable(table,direction,key,type){\nvar tbody=table.querySelector(\"tbody\");\nif(!tbody)return;\nvar rows=Array.from(tbody.querySelectorAll(\"tr\"));\nif(direction===\"none\"){\nrows.sort(function(a,b){\nreturn Number(a.getAttribute(\"data-row-index\"))-Number(b.getAttribute(\"data-row-index\"));\n});\n}else{\nvar attr=\"data-sort-\"+key;\nrows.sort(function(a,b){\nvar av=parseSortValue(a.getAttribute(attr)||\"\",type);\nvar bv=parseSortValue(b.getAttribute(attr)||\"\",type);\nreturn compareValues(av,bv,type,direction);\n});\n}\nrows.forEach(function(row){tbody.appendChild(row);});\n}\ndocument.addEventListener(\"click\",function(e){\nvar btn=e.target.closest(\"[data-sort-key]\");\nif(!btn)return;\nvar table=btn.closest(\"[data-sortable-table]\");\nif(!table)return;\ne.preventDefault();\nvar key=btn.getAttribute(\"data-sort-key\");\nvar type=btn.getAttribute(\"data-sort-type\")||\"string\";\nif(!key)return;\nvar current=btn.getAttribute(\"data-sort-direction\")||\"none\";\nvar next=current===\"none\"?\"asc\":current===\"asc\"?\"desc\":\"none\";\ntable.querySelectorAll(\"[data-sort-key]\").forEach(function(other){\nif(other!==btn)setHeaderState(other,\"none\");\n});\nsetHeaderState(btn,next);\nsortTable(table,next,key,type);\n});\n})();", tc = "(function(){\nvar toast=null,hideTimer=null;\nvar supportsPopover=typeof HTMLElement.prototype.showPopover===\"function\";\nwindow.__showReportToast=function(message){\nif(!toast){\ntoast=document.createElement(\"div\");\ntoast.className=\"copy-toast\";\ntoast.setAttribute(\"role\",\"status\");\ntoast.setAttribute(\"aria-live\",\"polite\");\nif(supportsPopover)toast.setAttribute(\"popover\",\"manual\");\ndocument.body.appendChild(toast);\n}\ntoast.textContent=message||\"Done\";\nif(supportsPopover){\nif(toast.matches(\":popover-open\"))toast.hidePopover();\ntoast.showPopover();\n}\ntoast.classList.add(\"copy-toast--visible\");\nclearTimeout(hideTimer);\nhideTimer=setTimeout(function(){\ntoast.classList.remove(\"copy-toast--visible\");\nif(supportsPopover&&toast.matches(\":popover-open\"))toast.hidePopover();\n},1500);\n};\n})();", nc = "(function(){\nfunction parseHash(hash){\nvar raw=(hash||\"\").replace(/^#/,\"\");\nif(!raw)return{section:\"\",urlTab:null};\nif(raw.indexOf(\"urls/\")===0)return{section:\"urls\",urlTab:raw.slice(5),full:raw};\nif(raw===\"urls\")return{section:\"urls\",urlTab:null,full:\"urls\"};\nreturn{section:raw,urlTab:null,full:raw};\n}\n\nfunction scrollToSection(section,fullHash){\nvar target=document.querySelector('[data-report-view]:not([hidden]) [data-section=\"'+section+'\"]');\nif(!target)return;\ntarget.scrollIntoView({behavior:\"smooth\",block:\"start\"});\nif(history.replaceState){\nhistory.replaceState(null,\"\",window.location.pathname+window.location.search+\"#\"+fullHash);\n}else{\nwindow.location.hash=fullHash;\n}\n}\n\nfunction navigate(hash){\nvar parsed=parseHash(hash);\nif(!parsed.section)return;\nscrollToSection(parsed.section,parsed.full);\nif(parsed.section===\"urls\"&&typeof window.__activateUrlTab===\"function\"){\nwindow.__activateUrlTab(parsed.urlTab);\n}\n}\n\ndocument.addEventListener(\"click\",function(e){\nvar link=e.target.closest(\"[data-toc-link]\");\nif(!link)return;\nvar slug=(link.getAttribute(\"href\")||\"\").replace(/^#/,\"\");\nif(!slug)return;\ne.preventDefault();\nnavigate(\"#\"+slug);\n});\n\nvar initialHash=window.location.hash;\nif(initialHash){\nrequestAnimationFrame(function(){navigate(initialHash);});\n}\n})();", rc = "(function(){\nfunction visibleUrlTabsSection(){\nreturn document.querySelector('[data-report-view]:not([hidden]) [data-url-tabs]');\n}\n\nfunction activateUrlTab(tab){\nvar section=visibleUrlTabsSection();\nif(!section)return;\nvar resolved=tab||section.getAttribute(\"data-default-url-tab\")||\"image\";\nif(!section.querySelector('[data-url-tab=\"'+resolved+'\"]')){\nresolved=section.getAttribute(\"data-default-url-tab\")||\"image\";\n}\nvar tabs=section.querySelectorAll(\"[data-url-tab]\");\nvar panels=section.querySelectorAll(\"[data-url-panel]\");\ntabs.forEach(function(btn){\nvar isActive=btn.getAttribute(\"data-url-tab\")===resolved;\nbtn.setAttribute(\"aria-selected\",isActive?\"true\":\"false\");\n});\npanels.forEach(function(panel){\npanel.hidden=panel.getAttribute(\"data-url-panel\")!==resolved;\n});\nsection.setAttribute(\"data-active-url-tab\",resolved);\n}\n\nwindow.__activateUrlTab=activateUrlTab;\n\ndocument.addEventListener(\"click\",function(e){\nvar tabButton=e.target.closest(\"[data-url-tab]\");\nif(!tabButton)return;\nvar section=tabButton.closest(\"[data-url-tabs]\");\nif(!section)return;\nvar tab=tabButton.getAttribute(\"data-url-tab\");\nif(!tab)return;\ne.preventDefault();\nactivateUrlTab(tab);\nvar suffix=tab===\"image\"?\"\":(\"/\"+tab);\nif(history.replaceState){\nhistory.replaceState(null,\"\",window.location.pathname+window.location.search+\"#urls\"+suffix);\n}\n});\n})();", ic = "(function(){\nvar STORAGE_KEY=\"sanity-log-report-show-studio\";\nvar checkbox=document.getElementById(\"show-studio-requests\");\nvar billableView=document.querySelector('[data-report-view=\"billable\"]');\nvar allView=document.querySelector('[data-report-view=\"all\"]');\nif(!checkbox||!billableView||!allView)return;\n\nfunction setView(showAll){\nbillableView.hidden=showAll;\nallView.hidden=!showAll;\ntry{sessionStorage.setItem(STORAGE_KEY,showAll?\"1\":\"0\");}catch(e){}\n}\n\nvar saved=null;\ntry{saved=sessionStorage.getItem(STORAGE_KEY);}catch(e){}\nif(saved===\"1\"){\ncheckbox.checked=true;\nsetView(true);\n}\n\ncheckbox.addEventListener(\"change\",function(){\nsetView(checkbox.checked);\n});\n})();", ac = [
	":root{--text-size-xs:1.152rem;--text-size-sm:1.44rem;--text-size-md:1.52rem;--tracking-tight:.02em;--tracking-wide:.0275em}.heading-1{letter-spacing:var(--tracking-tight);font-size:clamp(3.2rem,4vw,5.2rem);line-height:.95}.heading-2{font-size:1.92rem;font-weight:700}.heading-3{margin-bottom:2.75rem;font-size:1.6rem;font-weight:600}.heading-4{font-size:2.08rem;font-weight:700}.display-1{font-size:clamp(2.32rem,2vw,3.52rem);font-weight:800}.eyebrow-1{font-size:var(--text-size-xs);letter-spacing:var(--tracking-wide);text-transform:uppercase;font-weight:700}.body-1{font-size:var(--text-size-md)}.body-2{font-size:var(--text-size-sm)}.tracking-tight{letter-spacing:var(--tracking-tight)}.tracking-wide{letter-spacing:var(--tracking-wide)}html{font-size:62.5%}:root{--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--bg:#09090b;--panel:#18181be6;--panel-border:#3f3f46e6;--text:#f4f4f5;--muted:#a1a1aa;--radius-lg:2rem;--radius-md:1.2rem;--radius-sm:.7rem;--radius-pill:99.9rem;--border-subtle:#ffffff14;--border-faint:#ffffff1f;--track-bg:#ffffff14;--font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace}*{box-sizing:border-box}body{min-height:100vh;font-family:var(--font-sans);font-size:var(--text-size-md);color:var(--text);background:#101011;margin:0}h3{margin:0}.num{color:var(--muted);font-variant-numeric:tabular-nums}code,pre{font-family:var(--font-mono)}.card{border:.1rem solid var(--border-subtle);border-radius:var(--radius-md);background:var(--panel);-webkit-backdrop-filter:blur(.8rem);backdrop-filter:blur(.8rem);padding:1.6rem}.copy-toast{z-index:9999;border-radius:var(--radius-pill);border:.1rem solid var(--border-faint);color:var(--text);font-size:var(--text-size-sm);opacity:0;pointer-events:none;background:#18181b;margin:0;padding:.8rem 1.6rem;font-weight:500;transition:opacity .2s,transform .2s;position:fixed;bottom:2.4rem;left:50%;transform:translate(-50%)translateY(1rem);box-shadow:0 .4rem 1.6rem #00000059}.copy-toast--visible{opacity:1;transform:translate(-50%)translateY(0)}",
	"._page_14a77_1{max-width:160rem;margin:0 auto;padding:3.2rem 2rem 5.6rem}._layout_14a77_7{grid-template-columns:22rem minmax(0,1fr);align-items:start;gap:2.4rem;display:grid}._content_14a77_14{min-width:0}._footer_14a77_18{color:var(--muted);margin-top:2.4rem}@media (width<=1200px){._layout_14a77_7{grid-template-columns:1fr}}",
	"._header_1755g_1{flex-wrap:wrap;justify-content:space-between;align-items:end;gap:1.6rem;margin-bottom:2.4rem;display:flex}._title_1755g_10{margin:0}._subtitle_1755g_14{color:var(--muted);max-width:72ch;margin-top:1rem}._meta_1755g_20{text-align:right;color:var(--muted);justify-items:end;gap:.8rem;display:grid}@media (width<=110rem){._meta_1755g_20{text-align:left;justify-items:start}._header_1755g_1{align-items:start}}",
	"._toc_15opi_1{border:.1rem solid var(--border-subtle);border-radius:var(--radius-md);background:var(--panel);-webkit-backdrop-filter:blur(.8rem);backdrop-filter:blur(.8rem);align-self:start;padding:1.6rem;position:sticky;top:2rem}._heading_15opi_12{color:var(--muted);margin-bottom:1.2rem}._list_15opi_17{gap:.4rem;margin:0;padding:0;list-style:none;display:grid}._link_15opi_25{border-radius:var(--radius-sm);color:var(--text);font-size:var(--text-size-sm);padding:.6rem .8rem;text-decoration:none;transition:background .15s;display:block}._link_15opi_25:hover{background:#ffffff0f}._subList_15opi_39{gap:.2rem;margin:.2rem 0 .4rem;padding:0 0 0 1.2rem;list-style:none;display:grid}._subLink_15opi_47{border-radius:var(--radius-sm);color:var(--muted);font-size:var(--text-size-xs);padding:.4rem .8rem;text-decoration:none;transition:background .15s;display:block}._subLink_15opi_47:hover{color:var(--text);background:#ffffff0f}@media (width<=90rem){._toc_15opi_1{position:static}}",
	"._row_1de3z_1{flex-wrap:wrap;align-items:center;gap:1.2rem;margin-bottom:2.4rem;display:flex}._row_1de3z_1>:first-child{flex:24rem}",
	"._toggle_qim5j_1{border:.1rem solid var(--border-subtle);border-radius:var(--radius-md);background:var(--panel);cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;gap:1rem;padding:1.2rem 1.6rem;display:flex}._input_qim5j_13{cursor:pointer;width:1.6rem;height:1.6rem;accent-color:var(--color-blue,#0ea5e9);margin:0}._label_qim5j_21{font-size:var(--text-size-sm);color:var(--text)}",
	"._button_1fxqy_1{cursor:pointer;font-family:inherit}._icon_1fxqy_6{flex-shrink:0;justify-content:center;align-items:center;line-height:1;display:inline-flex}._label_1fxqy_14{line-height:1}._default_1fxqy_18{border:.1rem solid var(--border-subtle);border-radius:var(--radius-md);background:var(--panel);color:var(--text);font-size:var(--text-size-sm);white-space:nowrap;align-items:center;gap:.8rem;padding:1.2rem 1.6rem;transition:border-color .15s,background .15s;display:inline-flex}._default_1fxqy_18:hover{border-color:var(--border-faint);background:#ffffff0a}._default_1fxqy_18 ._icon_1fxqy_6 svg{width:1.6rem;height:1.6rem}._ghostIcon_1fxqy_44{border-radius:var(--radius-sm);width:2.8rem;height:2.8rem;color:var(--muted);background:0 0;border:none;justify-content:center;align-items:center;padding:0;font-size:2rem;line-height:1;display:inline-flex}._ghostIcon_1fxqy_44:hover{color:var(--text);background:#ffffff0f}._ghostIcon_1fxqy_44 ._icon_1fxqy_6 svg{width:1.4rem;height:1.4rem}._ghostIconSm_1fxqy_69{border-radius:var(--radius-sm);width:2.4rem;height:2.4rem;color:var(--muted);background:0 0;border:none;justify-content:center;align-items:center;padding:0;display:inline-flex}._ghostIconSm_1fxqy_69:hover{color:var(--text);background:#ffffff0f}._ghostIconSm_1fxqy_69 ._icon_1fxqy_6 svg{width:1.4rem;height:1.4rem}._outlinePill_1fxqy_92{border:.1rem solid var(--border-faint);border-radius:var(--radius-pill);color:var(--muted);font-size:var(--text-size-xs);background:#ffffff0a;align-items:center;gap:.4rem;padding:.4rem .8rem;font-weight:600;display:inline-flex}._outlinePill_1fxqy_92:hover{color:var(--text);background:#ffffff14}._outlinePill_1fxqy_92 ._icon_1fxqy_6 svg{width:1.4rem;height:1.4rem}._outlinePillAccent_1fxqy_115{border:.1rem solid var(--border-faint);border-radius:var(--radius-pill);color:var(--color-blue);font-size:var(--text-size-xs);background:#0ea5e91f;flex-shrink:0;padding:.3rem .8rem;font-weight:600}._outlinePillAccent_1fxqy_115:hover{background:#0ea5e933}._tab_1fxqy_130{border:.1rem solid var(--border-subtle);border-radius:var(--radius-pill);color:var(--muted);font-size:var(--text-size-sm);background:0 0;padding:.6rem 1.2rem;font-weight:600}._tab_1fxqy_130:hover{color:var(--text);background:#ffffff0f}._tab_1fxqy_130[aria-selected=true]{border-color:color-mix(in srgb, var(--color-blue) 45%, transparent);color:var(--color-blue);background:#0ea5e91f}",
	"._sectionBlock_49q3n_1{scroll-margin-top:2rem}._viewGrid_49q3n_5{flex-wrap:wrap;gap:1.6rem;margin-bottom:2.4rem;display:flex}._viewGrid_49q3n_5>*{flex:130px;min-width:130px}._grid2_49q3n_17{grid-template-columns:repeat(2,minmax(0,1fr));gap:1.6rem;margin-bottom:2.4rem;display:grid}@media (width<=110rem){._grid2_49q3n_17{grid-template-columns:1fr}}._stack_49q3n_30{gap:1.6rem;display:grid}._sectionTitle_49q3n_35{color:var(--muted);margin:.8rem 0 -.4rem;padding-left:.4rem}",
	"._metric_4re7a_1{border:.1rem solid var(--border-subtle);border-radius:var(--radius-md);background:var(--panel);-webkit-backdrop-filter:blur(.8rem);backdrop-filter:blur(.8rem);align-content:space-between;min-height:12rem;padding:1.6rem;display:grid}._label_4re7a_12{color:var(--muted)}._value_4re7a_16{margin-top:1rem}._note_4re7a_20{color:var(--muted);margin-top:.8rem}",
	"._wrap_19u7b_1{justify-items:center;gap:1.6rem;margin-top:1.2rem;display:grid}._donut_19u7b_8{aspect-ratio:1;border-radius:50%;place-items:center;width:100%;padding:2.2rem;display:grid;position:relative}._donut_19u7b_8:after{content:\"\";border:.1rem solid var(--border-subtle);background:#0a0a0cf2;border-radius:50%;position:absolute;inset:2.4rem}._center_19u7b_27{z-index:1;text-align:center;justify-items:center;gap:.4rem;display:grid;position:relative}._legend_19u7b_36{width:100%;color:var(--muted);gap:1rem;display:grid}._legend_19u7b_36 strong{color:var(--text)}._swatch_19u7b_47{border-radius:var(--radius-pill);vertical-align:-.1rem;width:1.1rem;height:1.1rem;margin-right:.8rem;display:inline-block}",
	"._bars_10ft9_1{gap:1rem;margin-top:1.2rem;display:grid}._row_10ft9_7{gap:.6rem;display:grid}._head_10ft9_12{justify-content:space-between;align-items:baseline;gap:1.6rem;display:flex}._label_10ft9_19{text-overflow:ellipsis;white-space:nowrap;min-width:0;color:var(--text);overflow:hidden}._value_10ft9_27,._meta_10ft9_32{color:var(--muted);font-variant-numeric:tabular-nums}._track_10ft9_37{border-radius:var(--radius-pill);background:var(--track-bg);width:100%;height:1rem;overflow:hidden}._fill_10ft9_45{border-radius:inherit;height:100%}",
	"._empty_14852_1{color:var(--muted);font-size:var(--text-size-sm);margin:1.2rem 0 0}._chart_14852_7{gap:.8rem;min-height:0;margin-top:1.2rem;display:flex}._yAxis_14852_14{flex-direction:column;flex-shrink:0;justify-content:space-between;width:5.6rem;height:26.8rem;margin-bottom:3.2rem;display:flex}._yTick_14852_24{color:var(--muted);font-size:var(--text-size-xs);font-variant-numeric:tabular-nums;text-align:right;line-height:1}._plotArea_14852_32{flex:1;min-width:0}._barRegion_14852_37{height:30rem;max-height:30rem;position:relative}._gridLine_14852_43{pointer-events:none;border-top:.1rem solid #ffffff0f;height:0;position:absolute;left:0;right:0}._bars_14852_52{z-index:1;box-sizing:border-box;align-items:stretch;gap:.4rem;height:100%;padding-bottom:3.2rem;display:flex;position:relative;overflow-x:auto}._barColumn_14852_64{flex-direction:column;flex:1 1 0;align-items:stretch;min-width:1.6rem;min-height:0;display:flex;position:relative}._barTrack_14852_74{flex:1;align-items:flex-end;min-height:0;display:flex}._bar_14852_37{border-radius:var(--radius-sm) var(--radius-sm) 0 0;width:100%;min-height:.2rem;transition:opacity .15s}._barColumn_14852_64:hover ._bar_14852_37,._barColumn_14852_64:focus-within ._bar_14852_37{opacity:.85}._barColumn_14852_64:after{content:attr(data-tip);z-index:2;border-radius:var(--radius-sm);border:.1rem solid var(--border-faint);color:var(--text);font-size:var(--text-size-xs);font-variant-numeric:tabular-nums;white-space:nowrap;opacity:0;pointer-events:none;background:#18181b;padding:.4rem .8rem;line-height:1.4;transition:opacity .15s,transform .15s;position:absolute;bottom:calc(100% - 2.6rem);left:50%;transform:translate(-50%)translateY(.4rem);box-shadow:0 .4rem 1.2rem #00000059}._barColumn_14852_64:hover:after,._barColumn_14852_64:focus-within:after{opacity:1;transform:translate(-50%)translateY(0)}._xLabel_14852_123{max-width:100%;height:2.4rem;color:var(--muted);font-size:var(--text-size-xs);text-align:center;text-overflow:ellipsis;white-space:nowrap;flex-shrink:0;margin-top:.8rem;line-height:1.2;overflow:hidden}",
	"._wrap_bp249_1{border-radius:var(--radius-sm);border:.1rem solid var(--border-subtle);max-height:42rem;margin-top:1.2rem;overflow:auto}._table_bp249_9{border-collapse:collapse;width:100%}._table_bp249_9 th,._table_bp249_9 td{text-align:left;vertical-align:top;border-bottom:.1rem solid #ffffff12;padding:1rem 1.2rem}._table_bp249_9 th{z-index:2;color:var(--muted);-webkit-backdrop-filter:blur(1.2rem);backdrop-filter:blur(1.2rem);background:#0c0c10f5;font-weight:600;position:sticky;top:0}._labelCell_bp249_32{max-width:52rem}._labelCellInner_bp249_36{align-items:center;gap:.6rem;min-width:0;display:flex}._labelText_bp249_43{text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0;overflow:hidden}._sortHeader_bp249_51{color:inherit;font:inherit;font-weight:inherit;cursor:pointer;text-align:inherit;border-radius:var(--radius-sm);background:0 0;border:none;align-items:center;gap:.4rem;margin:0;padding:0;display:inline-flex}._sortHeader_bp249_51:hover{color:var(--text)}._sortHeader_bp249_51:focus-visible{outline:.2rem solid var(--accent);outline-offset:.2rem}._num_bp249_76 ._sortHeader_bp249_51{justify-content:flex-end;width:100%}._sortHeaderLabel_bp249_81{line-height:1.2}._sortIcon_bp249_85{opacity:.45;flex-shrink:0;display:inline-flex}._sortIcon_bp249_85 svg{width:1.4rem;height:1.4rem}._sortHeader_bp249_51[data-sort-direction=asc],._sortHeader_bp249_51[data-sort-direction=desc]{color:var(--text)}._sortHeader_bp249_51[data-sort-direction=asc] ._sortIcon_bp249_85,._sortHeader_bp249_51[data-sort-direction=desc] ._sortIcon_bp249_85{opacity:1}._sortHeader_bp249_51[data-sort-direction=asc] ._sortIcon_bp249_85 svg path:first-child,._sortHeader_bp249_51[data-sort-direction=desc] ._sortIcon_bp249_85 svg path:last-child{stroke:var(--text)}._sortHeader_bp249_51[data-sort-direction=asc] ._sortIcon_bp249_85 svg path:last-child,._sortHeader_bp249_51[data-sort-direction=desc] ._sortIcon_bp249_85 svg path:first-child{opacity:.35}",
	"._chip_1idw4_1{border:.1rem solid var(--border-faint);border-radius:var(--radius-pill);color:var(--color-amber,#f59e0b);font-size:var(--text-size-xs);background:#f59e0b1f;flex-shrink:0;padding:.3rem .8rem;font-weight:600}",
	"._summary_19bh0_1{flex-wrap:wrap;gap:.8rem;margin-top:1.2rem;display:flex}._stat_19bh0_8{border:.1rem solid var(--border-faint);border-radius:var(--radius-pill);color:var(--muted);font-size:var(--text-size-xs);align-items:baseline;gap:.4rem;padding:.4rem .9rem;display:inline-flex}._stat_19bh0_8 strong{color:var(--text);font-size:var(--text-size-sm);font-weight:600}._labelStack_19bh0_25{flex-direction:column;gap:.3rem;min-width:0;display:flex}._labelHead_19bh0_32{align-items:center;gap:.6rem;min-width:0;display:flex}._deviceIcon_19bh0_39{width:1.6rem;height:1.6rem;color:var(--muted);flex-shrink:0;justify-content:center;align-items:center;display:inline-flex}._deviceIcon_19bh0_39 svg{width:1.4rem;height:1.4rem}._parsedLabel_19bh0_54{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}._rawLabel_19bh0_61{color:var(--muted);font-size:var(--text-size-xs);text-overflow:ellipsis;white-space:nowrap;padding-left:2.2rem;line-height:1.35;overflow:hidden}._chip_19bh0_71{border:.1rem solid var(--border-faint);border-radius:var(--radius-pill);color:var(--color-blue,#3b82f6);font-size:var(--text-size-xs);background:#3b82f61f;flex-shrink:0;padding:.3rem .8rem;font-weight:600}",
	"._section_6yc47_1{margin-top:0}._tabList_6yc47_5{flex-wrap:wrap;gap:.6rem;margin-top:1.2rem;display:flex}._panel_6yc47_12{margin-top:1.2rem}._panel_6yc47_12[hidden]{display:none}",
	"._wrap_1l7gg_1{vertical-align:middle;display:inline-flex;position:relative}._wrap_1l7gg_1:hover{z-index:3}._tooltip_1l7gg_12{z-index:20;border:.1rem solid var(--border-faint);border-radius:var(--radius-sm);width:max-content;max-width:24rem;color:var(--text);font-size:var(--text-size-xs);text-align:center;white-space:normal;pointer-events:none;opacity:0;visibility:hidden;background:#18181b;padding:.5rem .8rem;font-weight:500;line-height:1.4;transition:opacity .15s,transform .15s,visibility .15s;position:absolute;left:50%;box-shadow:0 .4rem 1.2rem #0006}._placementTop_1l7gg_38 ._tooltip_1l7gg_12{bottom:calc(100% + .5rem);transform:translate(-50%)translateY(.3rem)}._placementBottom_1l7gg_43 ._tooltip_1l7gg_12{top:calc(100% + .5rem);transform:translate(-50%)translateY(-.3rem)}._placementTop_1l7gg_38 ._tooltip_1l7gg_12:after{content:\"\";border:.4rem solid #0000;border-top-color:#18181b;position:absolute;top:100%;left:50%;transform:translate(-50%)}._placementBottom_1l7gg_43 ._tooltip_1l7gg_12:after{content:\"\";border:.4rem solid #0000;border-bottom-color:#18181b;position:absolute;bottom:100%;left:50%;transform:translate(-50%)}._wrap_1l7gg_1:hover ._tooltip_1l7gg_12{opacity:1;visibility:visible;transform:translate(-50%)translateY(0)}",
	"._empty_150uw_1{color:var(--muted);font-size:var(--text-size-sm);margin:0;padding:1.2rem 0}._metricCell_150uw_8{align-items:center;gap:.6rem;display:inline-flex}._errorBadge_150uw_14{border:.1rem solid var(--border-faint);border-radius:var(--radius-pill);color:var(--color-red,#ef4444);font-size:var(--text-size-xs);white-space:nowrap;background:#ef44441f;flex-shrink:0;padding:.2rem .6rem;font-weight:600}._errorIcon_150uw_26{color:var(--color-red,#ef4444);flex-shrink:0;display:inline-flex}._errorIcon_150uw_26 svg{width:1.4rem;height:1.4rem}._warningIcon_150uw_37{color:var(--color-amber,#f59e0b);flex-shrink:0;display:inline-flex}._warningIcon_150uw_37 svg{width:1.4rem;height:1.4rem}",
	"._dialog_mjk69_1{border:.1rem solid var(--border-faint);border-radius:var(--radius-md);background:var(--panel);width:100%;max-width:min(72rem,100vw - 3.2rem);color:var(--text);padding:0;box-shadow:0 1.6rem 4.8rem #00000073}._dialog_mjk69_1::backdrop{-webkit-backdrop-filter:blur(.2rem);backdrop-filter:blur(.2rem);background:#0000008c}._panel_mjk69_17{padding:1.2rem 1.6rem 1.6rem}._header_mjk69_21{align-items:center;gap:.8rem;margin-bottom:1.2rem;display:flex}._title_mjk69_28{flex:1;font-size:1.4rem}._section_mjk69_33+._section_mjk69_33{border-top:.1rem solid var(--border-subtle);margin-top:1.6rem;padding-top:1.6rem}._stats_mjk69_39{grid-template-columns:repeat(3,minmax(0,1fr));gap:.8rem;margin:0;display:grid}._stat_mjk69_39{border:.1rem solid var(--border-subtle);border-radius:var(--radius-sm);background:#0003;margin:0;padding:1rem 1.2rem}._statLabel_mjk69_54{font-size:var(--text-size-xs);color:var(--muted);margin:0}._statValue_mjk69_60{font-size:var(--text-size-sm);font-variant-numeric:tabular-nums;margin:.4rem 0 0}._sectionLabel_mjk69_66{color:var(--muted);margin-bottom:.8rem}._pre_mjk69_71{border-radius:var(--radius-sm);border:.1rem solid var(--border-subtle);max-height:24rem;font-family:var(--font-mono);font-size:var(--text-size-sm);white-space:pre-wrap;word-break:break-word;background:#00000059;margin:0;padding:1.2rem;line-height:1.5;overflow:auto}._error_mjk69_86{font-size:var(--text-size-sm);color:var(--muted);margin:0}._warning_mjk69_92{border:.1rem solid var(--color-amber,#f59e0b);border-radius:var(--radius-sm);background:var(--color-amber-light);color:var(--color-amber);font-size:var(--text-size-sm);margin-top:2.2rem;margin-bottom:1.4rem;padding:.8rem 1rem;line-height:1.5}._note_mjk69_104{font-size:var(--text-size-sm);color:var(--muted);margin-top:2.2rem}",
	"._stats_8ca1h_1{gap:.6rem;margin:0;display:grid}._row_8ca1h_7{font-size:var(--text-size-sm);grid-template-columns:1fr auto;align-items:baseline;gap:1.2rem;display:grid}._row_8ca1h_7 dt{color:var(--muted);margin:0}._row_8ca1h_7 dd{color:var(--text);margin:0}._group_8ca1h_25{border-top:.1rem solid var(--border-subtle);gap:.6rem;margin-top:.4rem;padding-top:.8rem;display:grid}._groupLabel_8ca1h_33{font-size:var(--text-size-xs);color:var(--text);letter-spacing:.04em;font-weight:600}._empty_8ca1h_40{font-size:var(--text-size-sm);color:var(--muted);margin:0}",
	".language-groq .token.comment{color:#71717a}.language-groq .token.string{color:#86efac}.language-groq .token.number,.language-groq .token.boolean,.language-groq .token.null{color:#fcd34d}.language-groq .token.keyword-operator{color:#c4b5fd}.language-groq .token.function{color:#7dd3fc}.language-groq .token.namespace{color:#fdba74}.language-groq .token.variable,.language-groq .token.special-variable{color:#f9a8d4}.language-groq .token.wildcard{color:#f472b6}.language-groq .token.operator{color:#a1a1aa}.language-groq .token.spread,.language-groq .token.punctuation{color:#d4d4d8}"
].join("\n");
//#endregion
//#region src/report/report-renderer.tsx
function oc(e) {
	let t = pt(/* @__PURE__ */ Y(Xs, { data: e })), n = ht(e), r = ht({
		filenameBase: eo(e.title),
		billable: go(e, "billable"),
		all: go(e, "all")
	});
	return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${e.title}</title>
  <style>${ac}</style>
</head>
<body>
${t}
  <script type="application/json" id="report-data">${n}<\/script>
  <script type="application/json" id="report-markdown">${r}<\/script>
  <script>${tc}<\/script>
  <script>${Zs}<\/script>
  <script>${ic}<\/script>
  <script>${$s}<\/script>
  <script>${rc}<\/script>
  <script>${ec}<\/script>
  <script>${Qs}<\/script>
  <script>${nc}<\/script>
</body>
</html>`;
}
//#endregion
export { oc as renderReportHtml };
