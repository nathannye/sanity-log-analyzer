//#region node_modules/preact/dist/preact.module.js
var e, t, n, r, i, a, o, s, c, l, u, d, f, p, m = {}, h = [], g = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, _ = Array.isArray;
function v(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function y(e) {
	e && e.parentNode && e.parentNode.removeChild(e);
}
function b(t, n, r) {
	var i, a, o, s = {};
	for (o in n) o == "key" ? i = n[o] : o == "ref" ? a = n[o] : s[o] = n[o];
	if (arguments.length > 2 && (s.children = arguments.length > 3 ? e.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (o in t.defaultProps) s[o] === void 0 && (s[o] = t.defaultProps[o]);
	return x(t, s, i, a, null);
}
function x(e, r, i, a, o) {
	var s = {
		type: e,
		props: r,
		key: i,
		ref: a,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: o ?? ++n,
		__i: -1,
		__u: 0
	};
	return o == null && t.vnode != null && t.vnode(s), s;
}
function S(e) {
	return e.children;
}
function C(e, t) {
	this.props = e, this.context = t;
}
function w(e, t) {
	if (t == null) return e.__ ? w(e.__, e.__i + 1) : null;
	for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? w(e) : null;
}
function T(e) {
	if (e.__P && e.__d) {
		var n = e.__v, r = n.__e, i = [], a = [], o = v({}, n);
		o.__v = n.__v + 1, t.vnode && t.vnode(o), F(e.__P, o, n, e.__n, e.__P.namespaceURI, 32 & n.__u ? [r] : null, i, r ?? w(n), !!(32 & n.__u), a), o.__v = n.__v, o.__.__k[o.__i] = o, te(i, o, a), n.__e = n.__ = null, o.__e != r && E(o);
	}
}
function E(e) {
	if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
		if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
	}), E(e);
}
function D(e) {
	(!e.__d && (e.__d = !0) && r.push(e) && !O.__r++ || i != t.debounceRendering) && ((i = t.debounceRendering) || a)(O);
}
function O() {
	try {
		for (var e, t = 1; r.length;) r.length > t && r.sort(o), e = r.shift(), t = r.length, T(e);
	} finally {
		r.length = O.__r = 0;
	}
}
function ee(e, t, n, r, i, a, o, s, c, l, u) {
	var d, f, p, g, _, v, y, b = r && r.__k || h, x = t.length;
	for (c = k(n, t, b, c, x), d = 0; d < x; d++) (p = n.__k[d]) != null && (f = p.__i != -1 && b[p.__i] || m, p.__i = d, v = F(e, p, f, i, a, o, s, c, l, u), g = p.__e, p.ref && f.ref != p.ref && (f.ref && ie(f.ref, null, p), u.push(p.ref, p.__c || g, p)), _ == null && g != null && (_ = g), (y = !!(4 & p.__u)) || f.__k === p.__k ? (c = A(p, c, e, y), y && f.__e && (f.__e = null)) : typeof p.type == "function" && v !== void 0 ? c = v : g && (c = g.nextSibling), p.__u &= -7);
	return n.__e = _, c;
}
function k(e, t, n, r, i) {
	var a, o, s, c, l, u = n.length, d = u, f = 0;
	for (e.__k = Array(i), a = 0; a < i; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = e.__k[a] = x(null, o, null, null, null) : _(o) ? o = e.__k[a] = x(S, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = e.__k[a] = x(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : e.__k[a] = o, c = a + f, o.__ = e, o.__b = e.__b + 1, s = null, (l = o.__i = j(o, n, c, d)) != -1 && (d--, (s = n[l]) && (s.__u |= 2)), s == null || s.__v == null ? (l == -1 && (i > u ? f-- : i < u && f++), typeof o.type != "function" && (o.__u |= 4)) : l != c && (l == c - 1 ? f-- : l == c + 1 ? f++ : (l > c ? f-- : f++, o.__u |= 4))) : e.__k[a] = null;
	if (d) for (a = 0; a < u; a++) (s = n[a]) != null && !(2 & s.__u) && (s.__e == r && (r = w(s)), ae(s, s));
	return r;
}
function A(e, t, n, r) {
	var i, a;
	if (typeof e.type == "function") {
		for (i = e.__k, a = 0; i && a < i.length; a++) i[a] && (i[a].__ = e, t = A(i[a], t, n, r));
		return t;
	}
	e.__e != t && (r && (t && e.type && !t.parentNode && (t = w(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
	do
		t &&= t.nextSibling;
	while (t != null && t.nodeType == 8);
	return t;
}
function j(e, t, n, r) {
	var i, a, o, s = e.key, c = e.type, l = t[n], u = l != null && (2 & l.__u) == 0;
	if (l === null && s == null || u && s == l.key && c == l.type) return n;
	if (r > +!!u) {
		for (i = n - 1, a = n + 1; i >= 0 || a < t.length;) if ((l = t[o = i >= 0 ? i-- : a++]) != null && !(2 & l.__u) && s == l.key && c == l.type) return o;
	}
	return -1;
}
function M(e, t, n) {
	t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || g.test(t) ? n : n + "px";
}
function N(e, t, n, r, i) {
	var a, o;
	n: if (t == "style") if (typeof n == "string") e.style.cssText = n;
	else {
		if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || M(e.style, t, "");
		if (n) for (t in n) r && n[t] == r[t] || M(e.style, t, n[t]);
	}
	else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(u, "$1")), o = t.toLowerCase(), t = o in e || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2), e.l ||= {}, e.l[t + a] = n, n ? r ? n[l] = r[l] : (n[l] = d, e.addEventListener(t, a ? p : f, a)) : e.removeEventListener(t, a ? p : f, a);
	else {
		if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
			e[t] = n ?? "";
			break n;
		} catch {}
		typeof n == "function" || (n == null || !1 === n && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
	}
}
function P(e) {
	return function(n) {
		if (this.l) {
			var r = this.l[n.type + e];
			if (n[c] == null) n[c] = d++;
			else if (n[c] < r[l]) return;
			return r(t.event ? t.event(n) : n);
		}
	};
}
function F(e, n, r, i, a, o, s, c, l, u) {
	var d, f, p, m, g, b, x, w, T, E, D, O, k, A, j, M, N = n.type;
	if (n.constructor !== void 0) return null;
	128 & r.__u && (l = !!(32 & r.__u), o = [c = n.__e = r.__e]), (d = t.__b) && d(n);
	n: if (typeof N == "function") {
		f = s.length;
		try {
			if (T = n.props, E = N.prototype && N.prototype.render, D = (d = N.contextType) && i[d.__c], O = d ? D ? D.props.value : d.__ : i, r.__c ? w = (p = n.__c = r.__c).__ = p.__E : (E ? n.__c = p = new N(T, O) : (n.__c = p = new C(T, O), p.constructor = N, p.render = oe), D && D.sub(p), p.state ||= {}, p.__n = i, m = p.__d = !0, p.__h = [], p._sb = []), E && p.__s == null && (p.__s = p.state), E && N.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = v({}, p.__s)), v(p.__s, N.getDerivedStateFromProps(T, p.__s))), g = p.props, b = p.state, p.__v = n, m) E && N.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), E && p.componentDidMount != null && p.__h.push(p.componentDidMount);
			else {
				if (E && N.getDerivedStateFromProps == null && T !== g && p.componentWillReceiveProps != null && p.componentWillReceiveProps(T, O), n.__v == r.__v || !p.__e && p.shouldComponentUpdate != null && !1 === p.shouldComponentUpdate(T, p.__s, O)) {
					n.__v != r.__v && (p.props = T, p.state = p.__s, p.__d = !1), n.__e = r.__e, n.__k = r.__k, n.__k.some(function(e) {
						e && (e.__ = n);
					}), h.push.apply(p.__h, p._sb), p._sb = [], p.__h.length && s.push(p);
					break n;
				}
				p.componentWillUpdate != null && p.componentWillUpdate(T, p.__s, O), E && p.componentDidUpdate != null && p.__h.push(function() {
					p.componentDidUpdate(g, b, x);
				});
			}
			if (p.context = O, p.props = T, p.__P = e, p.__e = !1, k = t.__r, A = 0, E) p.state = p.__s, p.__d = !1, k && k(n), d = p.render(p.props, p.state, p.context), h.push.apply(p.__h, p._sb), p._sb = [];
			else do
				p.__d = !1, k && k(n), d = p.render(p.props, p.state, p.context), p.state = p.__s;
			while (p.__d && ++A < 25);
			p.state = p.__s, p.getChildContext != null && (i = v(v({}, i), p.getChildContext())), E && !m && p.getSnapshotBeforeUpdate != null && (x = p.getSnapshotBeforeUpdate(g, b)), j = d != null && d.type === S && d.key == null ? ne(d.props.children) : d, c = ee(e, _(j) ? j : [j], n, r, i, a, o, s, c, l, u), p.base = n.__e, n.__u &= -161, p.__h.length && s.push(p), w && (p.__E = p.__ = null);
		} catch (e) {
			if (s.length = f, n.__v = null, l || o != null) {
				if (e.then) {
					for (n.__u |= l ? 160 : 128; c && c.nodeType == 8 && c.nextSibling;) c = c.nextSibling;
					o != null && (o[o.indexOf(c)] = null), n.__e = c;
				} else if (o != null) for (M = o.length; M--;) y(o[M]);
			} else n.__e = r.__e;
			n.__k ??= r.__k || [], e.then || I(n), t.__e(e, n, r);
		}
	} else o == null && n.__v == r.__v ? (n.__k = r.__k, n.__e = r.__e) : c = n.__e = re(r.__e, n, r, i, a, o, s, l, u);
	return (d = t.diffed) && d(n), 128 & n.__u ? void 0 : c;
}
function I(e) {
	e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(I));
}
function te(e, n, r) {
	for (var i = 0; i < r.length; i++) ie(r[i], r[++i], r[++i]);
	t.__c && t.__c(n, e), e.some(function(n) {
		try {
			e = n.__h, n.__h = [], e.some(function(e) {
				e.call(n);
			});
		} catch (e) {
			t.__e(e, n.__v);
		}
	});
}
function ne(e) {
	return typeof e != "object" || !e || e.__b > 0 ? e : _(e) ? e.map(ne) : e.constructor === void 0 ? v({}, e) : null;
}
function re(n, r, i, a, o, s, c, l, u) {
	var d, f, p, h, g, v, b, x = i.props || m, S = r.props, C = r.type;
	if (C == "svg" ? o = "http://www.w3.org/2000/svg" : C == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o ||= "http://www.w3.org/1999/xhtml", s != null) {
		for (d = 0; d < s.length; d++) if ((g = s[d]) && "setAttribute" in g == !!C && (C ? g.localName == C : g.nodeType == 3)) {
			n = g, s[d] = null;
			break;
		}
	}
	if (n == null) {
		if (C == null) return document.createTextNode(S);
		n = document.createElementNS(o, C, S.is && S), l &&= (t.__m && t.__m(r, s), !1), s = null;
	}
	if (C == null) x === S || l && n.data == S || (n.data = S);
	else {
		if (s = C == "textarea" && S.defaultValue != null ? null : s && e.call(n.childNodes), !l && s != null) for (x = {}, d = 0; d < n.attributes.length; d++) x[(g = n.attributes[d]).name] = g.value;
		for (d in x) g = x[d], d == "dangerouslySetInnerHTML" ? p = g : d == "children" || d in S || d == "value" && "defaultValue" in S || d == "checked" && "defaultChecked" in S || N(n, d, null, g, o);
		for (d in S) g = S[d], d == "children" ? h = g : d == "dangerouslySetInnerHTML" ? f = g : d == "value" ? v = g : d == "checked" ? b = g : l && typeof g != "function" || x[d] === g || N(n, d, g, x[d], o);
		if (f) l || p && (f.__html == p.__html || f.__html == n.innerHTML) || (n.innerHTML = f.__html), r.__k = [];
		else if (p && (n.innerHTML = ""), ee(r.type == "template" ? n.content : n, _(h) ? h : [h], r, i, a, C == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, s, c, s ? s[0] : i.__k && w(i, 0), l, u), s != null) for (d = s.length; d--;) y(s[d]);
		l && C != "textarea" || (d = "value", C == "progress" && v == null ? n.removeAttribute("value") : v != null && (v !== n[d] || C == "progress" && !v || C == "option" && v != x[d]) && N(n, d, v, x[d], o), d = "checked", b != null && b != n[d] && N(n, d, b, x[d], o));
	}
	return n;
}
function ie(e, n, r) {
	try {
		if (typeof e == "function") {
			var i = typeof e.__u == "function";
			i && e.__u(), i && n == null || (e.__u = e(n));
		} else e.current = n;
	} catch (e) {
		t.__e(e, r);
	}
}
function ae(e, n, r) {
	var i, a;
	if (t.unmount && t.unmount(e), (i = e.ref) && (i.current && i.current != e.__e || ie(i, null, n)), (i = e.__c) != null) {
		if (i.componentWillUnmount) try {
			i.componentWillUnmount();
		} catch (e) {
			t.__e(e, n);
		}
		i.base = i.__P = i.__n = null;
	}
	if (i = e.__k) for (a = 0; a < i.length; a++) i[a] && ae(i[a], n, r || typeof e.type != "function");
	r || y(e.__e), e.__c = e.__ = e.__e = void 0;
}
function oe(e, t, n) {
	return this.constructor(e, n);
}
e = h.slice, t = { __e: function(e, t, n, r) {
	for (var i, a, o; t = t.__;) if ((i = t.__c) && !i.__) try {
		if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i;
	} catch (t) {
		e = t;
	}
	throw e;
} }, n = 0, C.prototype.setState = function(e, t) {
	var n = this.__s != null && this.__s != this.state ? this.__s : this.__s = v({}, this.state);
	typeof e == "function" && (e = e(v({}, n), this.props)), e && v(n, e), e != null && this.__v && (t && this._sb.push(t), D(this));
}, C.prototype.forceUpdate = function(e) {
	this.__v && (this.__e = !0, e && this.__h.push(e), D(this));
}, C.prototype.render = S, r = [], a = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = function(e, t) {
	return e.__v.__b - t.__v.__b;
}, O.__r = 0, s = Math.random().toString(8), c = "__d" + s, l = "__a" + s, u = /(PointerCapture)$|Capture$/i, d = 0, f = P(!1), p = P(!0);
//#endregion
//#region node_modules/preact-render-to-string/dist/index.module.js
var se = "diffed", ce = "__c", le = "__s", L = "__c", ue = "__k", de = "__d", R = "__s", fe = /[\s\n\\/='"\0<>]/, pe = /^(xlink|xmlns|xml)([A-Z])/, me = /^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/, he = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/, ge = /* @__PURE__ */ new Set(["draggable", "spellcheck"]);
function _e(e) {
	e.__g === void 0 ? e[de] = !0 : e.__g |= 8;
}
function ve(e) {
	e.__g === void 0 ? e[de] = !1 : e.__g &= -9;
}
function ye(e) {
	return e.__g === void 0 ? !0 === e[de] : !!(8 & e.__g);
}
var be = /["&<]/;
function xe(e) {
	if (e.length === 0 || !1 === be.test(e)) return e;
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
var Se = {}, Ce = /* @__PURE__ */ new Set(/* @__PURE__ */ "animation-iteration-count.border-image-outset.border-image-slice.border-image-width.box-flex.box-flex-group.box-ordinal-group.column-count.fill-opacity.flex.flex-grow.flex-negative.flex-order.flex-positive.flex-shrink.flood-opacity.font-weight.grid-column.grid-row.line-clamp.line-height.opacity.order.orphans.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-miterlimit.stroke-opacity.stroke-width.tab-size.widows.z-index.zoom".split(".")), we = /[A-Z]/g;
function Te(e) {
	var t = "";
	for (var n in e) {
		var r = e[n];
		if (r != null && r !== "") {
			var i = n[0] == "-" ? n : Se[n] || (Se[n] = n.replace(we, "-$&").toLowerCase()), a = ";";
			typeof r != "number" || i.startsWith("--") || Ce.has(i) || (a = "px;"), t = t + i + ":" + r + a;
		}
	}
	return t || void 0;
}
function Ee() {
	this.__d = !0;
}
function De(e, t) {
	return {
		__v: e,
		context: t,
		props: e.props,
		setState: Ee,
		forceUpdate: Ee,
		__d: !0,
		__h: []
	};
}
function z(e, t, n) {
	if (!e.s) {
		if (n instanceof Oe) {
			if (!n.s) return void (n.o = z.bind(null, e, t));
			1 & t && (t = n.s), n = n.v;
		}
		if (n && n.then) return void n.then(z.bind(null, e, t), z.bind(null, e, 2));
		e.s = t, e.v = n;
		let r = e.o;
		r && r(e);
	}
}
var Oe = /*#__PURE__*/ function() {
	function e() {}
	return e.prototype.then = function(t, n) {
		var r = new e(), i = this.s;
		if (i) {
			var a = 1 & i ? t : n;
			if (a) {
				try {
					z(r, 1, a(this.v));
				} catch (e) {
					z(r, 2, e);
				}
				return r;
			}
			return this;
		}
		return this.o = function(e) {
			try {
				var i = e.v;
				1 & e.s ? z(r, 1, t ? t(i) : i) : n ? z(r, 1, n(i)) : z(r, 2, i);
			} catch (e) {
				z(r, 2, e);
			}
		}, r;
	}, e;
}(), ke, B, V, Ae, je = {}, Me = [], H = Array.isArray, Ne = Object.assign, U = "", Pe = "<!--$s-->", Fe = "<!--/$s-->";
function Ie(e) {
	return typeof e == "string" ? Pe + e + Fe : H(e) ? (e.unshift(Pe), e.push(Fe), e) : e && typeof e.then == "function" ? e.then(Ie) : Pe + e + Fe;
}
function Le(e, n, r) {
	var i = t[le];
	t[le] = !0, ke = t.__b, B = t[se], V = t.__r, Ae = t.unmount;
	var a = b(S, null);
	a[ue] = [e];
	try {
		var o = W(e, n || je, !1, void 0, a, !1, r);
		return H(o) ? o.join(U) : o;
	} catch (e) {
		throw e.then ? Error("Use \"renderToStringAsync\" for suspenseful rendering.") : e;
	} finally {
		t[ce] && t[ce](e, Me), t[le] = i, Me.length = 0;
	}
}
function Re(e, t) {
	var n, r = e.type, i = !0;
	return e[L] ? (i = !1, (n = e[L]).state = n[R]) : n = new r(e.props, t), e[L] = n, n.__v = e, n.props = e.props, n.context = t, _e(n), n.state ??= je, n[R] ?? (n[R] = n.state), r.getDerivedStateFromProps ? n.state = Ne({}, n.state, r.getDerivedStateFromProps(n.props, n.state)) : i && n.componentWillMount ? (n.componentWillMount(), n.state = n[R] === n.state ? n.state : n[R]) : !i && n.componentWillUpdate && n.componentWillUpdate(), V && V(e), n.render(n.props, n.state, t);
}
function W(e, n, r, i, a, o, s) {
	if (e == null || !0 === e || !1 === e || e === U) return U;
	var c = typeof e;
	if (c != "object") return c == "function" ? U : c == "string" ? xe(e) : e + U;
	if (H(e)) {
		var l, u = U;
		a[ue] = e;
		for (var d = e.length, f = 0; f < d; f++) {
			var p = e[f];
			if (p != null && typeof p != "boolean") {
				var m, h = W(p, n, r, i, a, o, s);
				typeof h == "string" ? u += h : (l ||= Array(d), u && l.push(u), u = U, H(h) ? (m = l).push.apply(m, h) : l.push(h));
			}
		}
		return l ? (u && l.push(u), l) : u;
	}
	if (e.constructor !== void 0) return U;
	e.__ = a, ke && ke(e);
	var g = e.type, _ = e.props;
	if (typeof g == "function") {
		var v, y, b, x = n;
		if (g === S) {
			if ("tpl" in _) {
				for (var C = U, w = 0; w < _.tpl.length; w++) if (C += _.tpl[w], _.exprs && w < _.exprs.length) {
					var T = _.exprs[w];
					if (T == null) continue;
					typeof T != "object" || T.constructor !== void 0 && !H(T) ? C += T : C += W(T, n, r, i, e, o, s);
				}
				return C;
			}
			if ("UNSTABLE_comment" in _) return "<!--" + xe(_.UNSTABLE_comment) + "-->";
			y = _.children;
		} else {
			if ((v = g.contextType) != null) {
				var E = n[v.__c];
				x = E ? E.props.value : v.__;
			}
			var D = g.prototype && typeof g.prototype.render == "function";
			if (D) y = Re(e, x), b = e[L];
			else {
				e[L] = b = De(e, x);
				for (var O = 0; ye(b) && O++ < 25;) {
					ve(b), V && V(e);
					try {
						y = g.call(b, _, x);
					} catch (t) {
						throw o && t && typeof t.then == "function" && (e._suspended = !0), t;
					}
				}
				_e(b);
			}
			if (b.getChildContext != null && (n = Ne({}, n, b.getChildContext())), D && t.errorBoundaries && (g.getDerivedStateFromError || b.componentDidCatch)) {
				y = y != null && y.type === S && y.key == null && y.props.tpl == null ? y.props.children : y;
				try {
					return W(y, n, r, i, e, o, !1);
				} catch (t) {
					return g.getDerivedStateFromError && (b[R] = g.getDerivedStateFromError(t)), b.componentDidCatch && b.componentDidCatch(t, je), ye(b) ? (y = Re(e, n), (b = e[L]).getChildContext != null && (n = Ne({}, n, b.getChildContext())), W(y = y != null && y.type === S && y.key == null && y.props.tpl == null ? y.props.children : y, n, r, i, e, o, s)) : U;
				} finally {
					B && B(e), Ae && Ae(e);
				}
			}
		}
		y = y != null && y.type === S && y.key == null && y.props.tpl == null ? y.props.children : y;
		try {
			var ee = W(y, n, r, i, e, o, s);
			return B && B(e), t.unmount && t.unmount(e), e._suspended ? Ie(ee) : ee;
		} catch (a) {
			if (!o && s && s.onError) {
				var k = function t(a) {
					return s.onError(a, e, function(e, a) {
						try {
							return W(e, n, r, i, a, o, s);
						} catch (e) {
							return t(e);
						}
					});
				}(a);
				if (k !== void 0) return k;
				var A = t.__e;
				return A && A(a, e), U;
			}
			if (!o || !a || typeof a.then != "function") throw a;
			return a.then(function t() {
				try {
					var a = W(y, n, r, i, e, o, s);
					return e._suspended ? Ie(a) : a;
				} catch (e) {
					if (!e || typeof e.then != "function") throw e;
					return e.then(t);
				}
			});
		}
	}
	var j, M = "<" + g, N = U;
	for (var P in _) {
		var F = _[P];
		if (typeof (F = Ve(F) ? F.value : F) != "function" || P === "class" || P === "className") {
			switch (P) {
				case "children":
					j = F;
					continue;
				case "key":
				case "ref":
				case "__self":
				case "__source": continue;
				case "htmlFor":
					if ("for" in _) continue;
					P = "for";
					break;
				case "className":
					if ("class" in _) continue;
					P = "class";
					break;
				case "defaultChecked":
					P = "checked";
					break;
				case "defaultSelected":
					P = "selected";
					break;
				case "defaultValue":
				case "value":
					switch (P = "value", g) {
						case "textarea":
							j = F;
							continue;
						case "select":
							i = F;
							continue;
						case "option": i != F || "selected" in _ || (M += " selected");
					}
					break;
				case "dangerouslySetInnerHTML":
					N = F && F.__html;
					continue;
				case "style":
					typeof F == "object" && (F = Te(F));
					break;
				case "acceptCharset":
					P = "accept-charset";
					break;
				case "httpEquiv":
					P = "http-equiv";
					break;
				default:
					if (fe.test(P)) continue;
					pe.test(P) ? P = P.replace(pe, "$1:$2").toLowerCase() : P[4] !== "-" && !ge.has(P) || F == null ? r ? he.test(P) && (P = P === "panose1" ? "panose-1" : P.replace(/([A-Z])/g, "-$1").toLowerCase()) : me.test(P) && (P = P.toLowerCase()) : F += U;
			}
			F != null && !1 !== F && (M = !0 === F || F === U ? M + " " + P : M + " " + P + "=\"" + (typeof F == "string" ? xe(F) : F + U) + "\"");
		}
	}
	if (fe.test(g)) throw Error(g + " is not a valid HTML tag name in " + M + ">");
	if (N || (typeof j == "string" ? N = xe(j) : j != null && !1 !== j && !0 !== j && (N = W(j, n, g === "svg" || g !== "foreignObject" && r, i, e, o, s))), B && B(e), Ae && Ae(e), !N && ze.has(g)) return M + "/>";
	var I = "</" + g + ">", te = M + ">";
	return H(N) ? [te].concat(N, [I]) : typeof N == "string" ? te + N + I : [
		te,
		N,
		I
	];
}
var ze = /* @__PURE__ */ new Set([
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
]), Be = Le;
function Ve(e) {
	return typeof e == "object" && !!e && typeof e.peek == "function" && "value" in e;
}
//#endregion
//#region src/format.ts
function He(e) {
	return JSON.stringify(e).replaceAll("<", "\\u003c");
}
function G(e) {
	return Number(e).toLocaleString();
}
function Ue(e) {
	return e === null ? "—" : String(e);
}
function K(e) {
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
function q(e) {
	return `${e.toFixed(1)}%`;
}
function We(e) {
	let t = e * 100;
	return t > 0 && t < 1 ? "<1%" : `${Math.round(t)}%`;
}
var Ge = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric",
	year: "numeric",
	timeZone: "UTC"
});
function Ke(e) {
	if (!e) return "";
	let t = new Date(e);
	return Number.isNaN(t.getTime()) ? "" : Ge.format(t);
}
//#endregion
//#region src/report/report-filename.ts
function qe(e) {
	return e.toLowerCase().trim().replaceAll(/[^\w\s-]/g, "").replaceAll(/\s+/g, "-").replaceAll(/-+/g, "-").replace(/^-+|-+$/g, "") || "report";
}
//#endregion
//#region node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var Je = 0;
Array.isArray;
function J(e, n, r, i, a, o) {
	n ||= {};
	var s, c, l = n;
	if ("ref" in l) for (c in l = {}, n) c == "ref" ? s = n[c] : l[c] = n[c];
	var u = {
		type: e,
		props: l,
		key: r,
		ref: s,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: --Je,
		__i: -1,
		__u: 0,
		__source: a,
		__self: o
	};
	if (typeof e == "function" && (s = e.defaultProps)) for (c in s) l[c] === void 0 && (l[c] = s[c]);
	return t.vnode && t.vnode(u), u;
}
//#endregion
//#region src/report/components/Header.tsx
function Ye({ data: e }) {
	return /* @__PURE__ */ J("header", {
		class: "mb-24 flex flex-wrap items-start justify-between gap-16 lg:items-end",
		children: [/* @__PURE__ */ J("div", { children: [/* @__PURE__ */ J("h1", {
			class: "heading-1 m-0",
			children: e.title
		}), /* @__PURE__ */ J("div", {
			class: "body-1 mt-10 max-w-[72ch] text-muted",
			children: [
				"Generated from ",
				/* @__PURE__ */ J("code", { children: e.sourcePath }),
				". The report is self-contained and includes the normalized summary JSON payload inline."
			]
		})] }), /* @__PURE__ */ J("div", {
			class: "body-2 grid justify-items-start gap-8 text-left text-muted lg:justify-items-end lg:text-right",
			children: /* @__PURE__ */ J("div", { children: ["Max table rows: ", e.config.topN] })
		})]
	});
}
//#endregion
//#region src/report/components/Button.tsx
var Xe = {
	default: "btn",
	"ghost-icon": "btn-ghost",
	"ghost-icon-sm": "btn-ghost-sm",
	"outline-pill": "btn-pill",
	"outline-pill-accent": "btn-accent",
	tab: "btn-tab"
};
function Y({ variant: e = "default", icon: t, iconPosition: n = "start", children: r, class: i, type: a = "button", ...o }) {
	return /* @__PURE__ */ J("button", {
		type: a,
		class: [Xe[e], i].filter(Boolean).join(" "),
		...o,
		children: [
			t && n === "start" ? /* @__PURE__ */ J("span", {
				class: "btn-icon",
				children: t
			}) : null,
			r ? /* @__PURE__ */ J("span", {
				class: "btn-label",
				children: r
			}) : null,
			t && n === "end" ? /* @__PURE__ */ J("span", {
				class: "btn-icon",
				children: t
			}) : null
		]
	});
}
//#endregion
//#region src/report/components/icons.tsx
function Ze() {
	return /* @__PURE__ */ J("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ J("rect", {
			x: "9",
			y: "9",
			width: "13",
			height: "13",
			rx: "2",
			ry: "2"
		}), /* @__PURE__ */ J("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
	});
}
function Qe() {
	return /* @__PURE__ */ J("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ J("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
			/* @__PURE__ */ J("polyline", { points: "15 3 21 3 21 9" }),
			/* @__PURE__ */ J("line", {
				x1: "10",
				y1: "14",
				x2: "21",
				y2: "3"
			})
		]
	});
}
function $e() {
	return /* @__PURE__ */ J("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ J("path", { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
			/* @__PURE__ */ J("line", {
				x1: "12",
				y1: "9",
				x2: "12",
				y2: "13"
			}),
			/* @__PURE__ */ J("line", {
				x1: "12",
				y1: "17",
				x2: "12.01",
				y2: "17"
			})
		]
	});
}
function et() {
	return /* @__PURE__ */ J("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ J("circle", {
				cx: "12",
				cy: "12",
				r: "10"
			}),
			/* @__PURE__ */ J("line", {
				x1: "12",
				y1: "8",
				x2: "12",
				y2: "12"
			}),
			/* @__PURE__ */ J("line", {
				x1: "12",
				y1: "16",
				x2: "12.01",
				y2: "16"
			})
		]
	});
}
function tt() {
	return /* @__PURE__ */ J("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ J("path", { d: "m8 9 4-4 4 4" }), /* @__PURE__ */ J("path", { d: "m8 15 4 4 4-4" })]
	});
}
function nt() {
	return /* @__PURE__ */ J("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ J("path", { d: "M12 3v12" }),
			/* @__PURE__ */ J("path", { d: "m7 10 5 5 5-5" }),
			/* @__PURE__ */ J("path", { d: "M5 21h14" })
		]
	});
}
function rt() {
	return /* @__PURE__ */ J("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ J("rect", {
				x: "2",
				y: "3",
				width: "20",
				height: "14",
				rx: "2"
			}),
			/* @__PURE__ */ J("path", { d: "M8 21h8" }),
			/* @__PURE__ */ J("path", { d: "M12 17v4" })
		]
	});
}
function it() {
	return /* @__PURE__ */ J("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: /* @__PURE__ */ J("rect", {
			x: "7",
			y: "2",
			width: "10",
			height: "20",
			rx: "2"
		})
	});
}
//#endregion
//#region src/report/components/MarkdownDownload.tsx
function at() {
	return /* @__PURE__ */ J(Y, {
		id: "download-markdown",
		icon: /* @__PURE__ */ J(nt, {}),
		children: "Download markdown for LLM"
	});
}
//#endregion
//#region src/report/components/ViewToggle.tsx
function ot() {
	return /* @__PURE__ */ J("label", {
		class: "panel flex cursor-pointer items-center gap-10 px-16 py-12 select-none",
		children: [/* @__PURE__ */ J("input", {
			type: "checkbox",
			id: "show-studio-requests",
			class: "m-0 size-16 cursor-pointer accent-[var(--color-blue,#0ea5e9)]"
		}), /* @__PURE__ */ J("span", {
			class: "body-2 text-text",
			children: "Show non-billable studio requests"
		})]
	});
}
//#endregion
//#region src/report/components/ReportControls.tsx
function st({ showToggle: e }) {
	return /* @__PURE__ */ J("div", {
		class: "mb-24 flex flex-wrap items-center gap-12 [&>:first-child]:min-w-0 [&>:first-child]:flex-1 [&>:first-child]:basis-240",
		children: [e ? /* @__PURE__ */ J(ot, {}) : null, /* @__PURE__ */ J(at, {})]
	});
}
//#endregion
//#region src/report/classify-url.ts
var ct = /* @__PURE__ */ new Set([
	".jpg",
	".jpeg",
	".png",
	".gif",
	".webp",
	".svg",
	".avif",
	".ico"
]), lt = /* @__PURE__ */ new Set([
	".mp4",
	".webm",
	".mov",
	".m4v",
	".ogv"
]), ut = /* @__PURE__ */ new Set([
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
function dt(e) {
	try {
		return new URL(e).pathname;
	} catch {
		return null;
	}
}
function ft(e) {
	let t = e.lastIndexOf(".");
	return t === -1 ? "" : e.slice(t).toLowerCase();
}
function pt(e) {
	return e.includes("/data/query") || e.endsWith("/query");
}
function mt(e) {
	let t = dt(e);
	return t ? ft(t) === ".mp4" : !1;
}
function ht(e) {
	let t = dt(e);
	if (!t) return null;
	if (pt(t)) return "query";
	let n = t.toLowerCase();
	if (n.includes("/images/")) return "image";
	let r = ft(t);
	return ct.has(r) ? "image" : lt.has(r) ? "video" : n.includes("/files/") || ut.has(r) ? "file" : null;
}
//#endregion
//#region src/report/group-urls-by-kind.ts
var gt = [
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
function _t(e) {
	return gt.filter((t) => t.id !== "other" || e.other.length > 0);
}
function vt(e) {
	let t = {
		image: [],
		file: [],
		query: [],
		other: []
	};
	for (let n of e) {
		let e = ht(n.label);
		e === "image" ? t.image.push(n) : e === "file" || e === "video" ? t.file.push(n) : e === "query" ? t.query.push(n) : t.other.push(n);
	}
	return t;
}
function yt(e) {
	for (let t of [
		"image",
		"file",
		"query",
		"other"
	]) if (e[t].length > 0) return t;
	return "image";
}
//#endregion
//#region src/report/sections.ts
var bt = {
	image: "urls/image",
	file: "urls/file",
	query: "urls/query",
	other: "urls/other"
};
function xt(e) {
	return _t(vt(e ?? [])).map((e) => ({
		slug: bt[e.id],
		label: e.label
	}));
}
var St = [
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
function X(e) {
	return St.find((t) => t.slug === e)?.label;
}
var Ct = St;
function wt(e, t) {
	return Ct.filter((t) => !t.configKey || e[t.configKey]).map(({ slug: e, label: n }) => ({
		slug: e,
		label: n,
		children: e === "urls" ? xt(t) : void 0
	}));
}
//#endregion
//#region src/report/components/TableOfContents.tsx
function Tt({ sections: e, urlRows: t }) {
	let n = wt(e, t);
	return /* @__PURE__ */ J("nav", {
		class: "card top-20 self-start lg:sticky",
		"aria-label": "Report sections",
		children: [/* @__PURE__ */ J("div", {
			class: "eyebrow-1 mb-12 text-muted",
			children: "Contents"
		}), /* @__PURE__ */ J("ul", {
			class: "m-0 grid list-none gap-4 p-0",
			children: n.map((e) => /* @__PURE__ */ J("li", { children: [/* @__PURE__ */ J("a", {
				class: "body-2 block rounded-sm px-8 py-6 text-text no-underline transition-colors hover:bg-white/6",
				href: `#${e.slug}`,
				"data-toc-link": !0,
				children: e.label
			}), e.children && e.children.length > 0 ? /* @__PURE__ */ J("ul", {
				class: "mt-2 mb-4 grid list-none gap-2 py-0 pr-0 pl-12",
				children: e.children.map((e) => /* @__PURE__ */ J("li", { children: /* @__PURE__ */ J("a", {
					class: "eyebrow-1 block rounded-sm px-8 py-4 text-muted no-underline transition-colors hover:bg-white/6 hover:text-text",
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
var Et = [
	"#0ea5e9",
	"#22c55e",
	"#f59e0b",
	"#ef4444",
	"#a855f7",
	"#14b8a6",
	"#f97316"
], Dt = [
	"blue",
	"green",
	"amber",
	"red",
	"purple",
	"teal",
	"orange"
];
function Z(e) {
	return `var(--color-${e})`;
}
function Ot(e = Et) {
	let t = {};
	for (let [n, r] of Dt.entries()) {
		let i = e[n];
		i && (t[`--color-${r}`] = i);
	}
	return t;
}
var kt = 1024 * 1024, At = kt * 1024;
function jt(e) {
	return e / At;
}
function Mt(e) {
	return e * At;
}
//#endregion
//#region src/report/vertical-bar-chart.ts
var Nt = 26.8, Pt = 3.2;
function Ft(e) {
	let t = [];
	for (let n = 0; n <= 4; n += 1) t.push(e / 4 * n);
	return t;
}
function It(e, t = 1) {
	if (e <= 0) return t;
	let n = 10 ** Math.floor(Math.log10(e)), r = e / n, i;
	return i = r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10, Math.max(i * n, t);
}
var Lt = {
	barColumn: "_barColumn_s5la3_1",
	bar: "_bar_s5la3_1"
};
//#endregion
//#region src/report/components/VerticalBarChart.tsx
function Rt({ title: e, rows: t, accent: n, emptyMessage: r, axisMax: i, formatAxisTick: a }) {
	let o = Ft(i);
	return /* @__PURE__ */ J("section", {
		class: "card",
		children: [/* @__PURE__ */ J("h3", {
			class: "heading-3",
			children: e
		}), t.length === 0 ? /* @__PURE__ */ J("p", {
			class: "empty body-2 mt-12",
			children: r
		}) : /* @__PURE__ */ J("div", {
			class: "mt-12 flex min-h-0 gap-8",
			children: [/* @__PURE__ */ J("div", {
				class: "mb-32 flex h-268 w-56 shrink-0 flex-col justify-between",
				"aria-hidden": "true",
				children: o.slice().reverse().map((e) => /* @__PURE__ */ J("span", {
					class: "eyebrow-1 text-right leading-none tabular-nums text-muted",
					children: a(e)
				}, e))
			}), /* @__PURE__ */ J("div", {
				class: "min-w-0 flex-1",
				children: /* @__PURE__ */ J("div", {
					class: "relative h-300 max-h-300",
					children: [o.map((e) => /* @__PURE__ */ J("div", {
						class: "pointer-events-none absolute right-0 left-0 h-0 border-t border-white/6",
						style: { bottom: `${Pt + e / i * Nt}rem` }
					}, e)), /* @__PURE__ */ J("div", {
						class: "relative z-1 box-border flex h-full items-stretch gap-4 overflow-x-auto pb-32",
						children: t.map((e) => {
							let t = i > 0 ? Math.min(e.value / i * 100, 100) : 0;
							return /* @__PURE__ */ J("div", {
								class: `${Lt.barColumn} relative flex min-h-0 min-w-16 flex-1 flex-col items-stretch`,
								"data-tip": e.tip,
								children: [/* @__PURE__ */ J("div", {
									class: "flex min-h-0 flex-1 items-end",
									children: /* @__PURE__ */ J("div", {
										class: `${Lt.bar} w-full min-h-2 rounded-t-sm`,
										style: {
											height: `${t.toFixed(2)}%`,
											background: n
										}
									})
								}), /* @__PURE__ */ J("span", {
									class: "mt-8 h-24 max-w-full shrink-0 truncate text-center leading-[1.2] text-muted",
									style: { fontSize: "var(--text-size-xs)" },
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
function zt(e) {
	let t = jt(e);
	return t >= 100 ? `${t.toFixed(0)} GB` : t >= 10 ? `${t.toFixed(1)} GB` : t >= 1 ? `${t.toFixed(2)} GB` : t >= .01 ? `${t.toFixed(3)} GB` : t > 0 ? `${t.toFixed(4)} GB` : "0 GB";
}
function Bt({ title: e, rows: t, accent: n }) {
	return /* @__PURE__ */ J(Rt, {
		title: e,
		accent: n,
		emptyMessage: "No bandwidth data in this range.",
		axisMax: It(t.reduce((e, t) => Math.max(e, t.responseBytes), 0), Mt(.001)),
		formatAxisTick: zt,
		rows: t.map((e) => ({
			label: e.label,
			value: e.responseBytes,
			tip: `${K(e.responseBytes)} · ${G(e.requests)} requests`
		}))
	});
}
//#endregion
//#region src/report/components/HorizontalBarList.tsx
function Vt({ title: e, rows: t, accent: n, getLabel: r, getValue: i, formatValue: a }) {
	let o = t.reduce((e, t) => Math.max(e, i(t)), 0);
	return /* @__PURE__ */ J("section", {
		class: "card",
		children: [/* @__PURE__ */ J("h3", {
			class: "heading-3",
			children: e
		}), /* @__PURE__ */ J("div", {
			class: "mt-12 grid gap-10",
			children: t.map((e) => {
				let t = i(e), s = o > 0 ? t / o * 100 : 0, c = r(e);
				return /* @__PURE__ */ J("div", {
					class: "grid gap-6",
					children: [/* @__PURE__ */ J("div", {
						class: "flex items-baseline justify-between gap-16",
						children: [/* @__PURE__ */ J("span", {
							class: "min-w-0 truncate text-text",
							title: c,
							children: c
						}), /* @__PURE__ */ J("span", {
							class: "num shrink-0",
							children: a(e)
						})]
					}), /* @__PURE__ */ J("div", {
						class: "h-10 w-full overflow-hidden rounded-pill bg-track",
						children: /* @__PURE__ */ J("div", {
							class: "h-full rounded-[inherit]",
							style: {
								width: `${s.toFixed(2)}%`,
								background: n
							}
						})
					})]
				}, c);
			})
		})]
	});
}
//#endregion
//#region src/report/components/BarList.tsx
function Ht({ title: e, rows: t, accent: n }) {
	return /* @__PURE__ */ J(Vt, {
		title: e,
		rows: t,
		accent: n,
		getLabel: (e) => e.label,
		getValue: (e) => e.responseBytes,
		formatValue: (e) => /* @__PURE__ */ J(S, { children: [
			K(e.responseBytes),
			" ",
			/* @__PURE__ */ J("span", {
				class: "num",
				children: ["• ", G(e.requests)]
			})
		] })
	});
}
//#endregion
//#region src/report/components/CountBarChart.tsx
function Ut(e) {
	return G(Math.round(e));
}
function Wt({ title: e, rows: t, accent: n }) {
	return /* @__PURE__ */ J(Rt, {
		title: e,
		accent: n,
		emptyMessage: "No response code data in this range.",
		axisMax: It(t.reduce((e, t) => Math.max(e, t.count), 0)),
		formatAxisTick: Ut,
		rows: t.map((e) => ({
			label: e.label,
			value: e.count,
			tip: `${G(e.count)} requests`
		}))
	});
}
//#endregion
//#region src/report/components/CountBars.tsx
function Gt({ title: e, rows: t, accent: n }) {
	return /* @__PURE__ */ J(Vt, {
		title: e,
		rows: t,
		accent: n,
		getLabel: (e) => e.label,
		getValue: (e) => e.count,
		formatValue: (e) => G(e.count)
	});
}
//#endregion
//#region src/report/sort-table-values.ts
function Q(e) {
	return e == null || e === "" ? "" : String(e);
}
//#endregion
//#region src/ranked-row.ts
function Kt(e) {
	return e.requests > 0 ? e.responseBytes / e.requests : 0;
}
function qt(e) {
	return {
		"data-sort-label": Q(e.label),
		"data-sort-bandwidth": Q(e.responseBytes),
		"data-sort-requests": Q(e.requests),
		"data-sort-avg": Q(Kt(e))
	};
}
//#endregion
//#region src/report/components/LabelActions.tsx
function Jt({ value: e, copyToast: t, href: n, externalLinkLabel: r, children: i, adornments: a }) {
	return /* @__PURE__ */ J("div", {
		class: "flex min-w-0 items-center gap-6",
		children: [
			/* @__PURE__ */ J(Y, {
				variant: "ghost-icon-sm",
				icon: /* @__PURE__ */ J(Ze, {}),
				"data-copy-value": e,
				...t ? { "data-copy-toast": t } : {},
				"aria-label": `Copy "${e}"`,
				title: "Copy to clipboard"
			}),
			n ? /* @__PURE__ */ J("a", {
				href: n,
				target: "_blank",
				rel: "noopener noreferrer",
				class: "btn-ghost-sm",
				"aria-label": `Open "${r ?? e}" in new tab`,
				title: "Open in new tab",
				children: /* @__PURE__ */ J("span", {
					class: "btn-icon",
					children: /* @__PURE__ */ J(Qe, {})
				})
			}) : null,
			i,
			a
		]
	});
}
//#endregion
//#region src/report/components/RankedRowMetricCells.tsx
function Yt({ row: e }) {
	return /* @__PURE__ */ J(S, { children: [
		/* @__PURE__ */ J("td", {
			class: "num",
			children: K(e.responseBytes)
		}),
		/* @__PURE__ */ J("td", {
			class: "num",
			children: G(e.requests)
		}),
		/* @__PURE__ */ J("td", {
			class: "num",
			children: K(Kt(e))
		})
	] });
}
//#endregion
//#region src/report/components/SortableTableHeader.tsx
function $({ label: e, sortKey: t, sortType: n, className: r }) {
	return /* @__PURE__ */ J("th", {
		class: r,
		children: /* @__PURE__ */ J("button", {
			type: "button",
			class: "sort-header",
			"data-sort-key": t,
			"data-sort-type": n,
			"data-sort-direction": "none",
			"aria-sort": "none",
			children: [/* @__PURE__ */ J("span", {
				class: "leading-[1.2]",
				children: e
			}), /* @__PURE__ */ J("span", {
				class: "sort-icon",
				children: /* @__PURE__ */ J(tt, {})
			})]
		})
	});
}
//#endregion
//#region src/report/components/DataTable.tsx
function Xt({ title: e, rows: t, hasCopyButton: n = !1, copyToastMessage: r = "Copied", labelAdornment: i, renderLabel: a, header: o }) {
	return /* @__PURE__ */ J("section", {
		class: "card",
		children: [
			/* @__PURE__ */ J("h3", {
				class: "heading-3",
				children: e
			}),
			o,
			/* @__PURE__ */ J("div", {
				class: "data-table-wrap",
				children: /* @__PURE__ */ J("table", {
					class: "body-1 data-table",
					"data-sortable-table": !0,
					children: [/* @__PURE__ */ J("thead", { children: /* @__PURE__ */ J("tr", { children: [
						/* @__PURE__ */ J($, {
							label: "Label",
							sortKey: "label",
							sortType: "string"
						}),
						/* @__PURE__ */ J($, {
							label: "Bandwidth",
							sortKey: "bandwidth",
							sortType: "number",
							className: "num"
						}),
						/* @__PURE__ */ J($, {
							label: "Requests",
							sortKey: "requests",
							sortType: "number",
							className: "num"
						}),
						/* @__PURE__ */ J($, {
							label: "Avg / req",
							sortKey: "avg",
							sortType: "number",
							className: "num"
						})
					] }) }), /* @__PURE__ */ J("tbody", { children: t.map((e, t) => /* @__PURE__ */ J("tr", {
						"data-row-index": t,
						...qt(e),
						children: [/* @__PURE__ */ J("td", {
							class: "max-w-520",
							title: a ? void 0 : e.label,
							children: a ? a(e) : n ? /* @__PURE__ */ J(Jt, {
								value: e.label,
								copyToast: r,
								adornments: i?.(e),
								children: /* @__PURE__ */ J("span", {
									class: "min-w-0 flex-1 truncate",
									children: e.label
								})
							}) : /* @__PURE__ */ J("div", {
								class: "flex min-w-0 items-center gap-6",
								children: [/* @__PURE__ */ J("span", {
									class: "min-w-0 flex-1 truncate",
									children: e.label
								}), i ? i(e) : null]
							})
						}), /* @__PURE__ */ J(Yt, { row: e })]
					}, e.label)) })]
				})
			})
		]
	});
}
//#endregion
//#region src/report/utils/styleForShare.ts
function Zt(e, t, n, r) {
	let i = e + t;
	if (i <= 0) return `background: ${r};`;
	let a = e / i * 100;
	return `background: conic-gradient(${n} 0 ${a}%, ${r} ${a}% 100%);`;
}
function Qt(e) {
	let t = e.reduce((e, t) => e + t.value, 0);
	if (t <= 0 || e.length === 0) return "background: var(--color-track);";
	let n = 0, r = [];
	for (let i of e) {
		let e = n;
		n += i.value / t * 100, r.push(`${i.color} ${e}% ${n}%`);
	}
	return `background: conic-gradient(${r.join(", ")});`;
}
var $t = { donut: "_donut_1drq4_1" };
//#endregion
//#region src/report/components/Donut.tsx
function en({ slices: e }) {
	return /* @__PURE__ */ J("div", {
		class: "body-1 grid w-full gap-10 text-muted",
		children: e.map((e) => /* @__PURE__ */ J("div", { children: [
			/* @__PURE__ */ J("span", {
				class: "mr-8 inline-block size-11 rounded-pill align-[-0.1rem]",
				style: { background: e.color }
			}),
			e.label,
			" ",
			/* @__PURE__ */ J("strong", {
				class: "text-text",
				children: K(e.value)
			}),
			/* @__PURE__ */ J("span", {
				class: "num",
				children: [" • ", q(e.share)]
			})
		] }, e.label))
	});
}
function tn({ slices: e, centerLabel: t, centerNote: n, embedded: r = !1 }) {
	return /* @__PURE__ */ J("div", {
		class: r ? "grid justify-items-center gap-16" : "mt-12 grid justify-items-center gap-16",
		children: [/* @__PURE__ */ J("div", {
			class: `${$t.donut} relative grid aspect-square w-full max-w-[24rem] place-items-center rounded-full p-22`,
			style: Qt(e),
			children: /* @__PURE__ */ J("div", {
				class: "body-1 relative z-1 grid justify-items-center gap-4 text-center",
				children: [/* @__PURE__ */ J("strong", {
					class: "heading-4",
					children: t
				}), n ? /* @__PURE__ */ J("span", {
					class: "text-muted",
					children: n
				}) : null]
			})
		}), /* @__PURE__ */ J(en, { slices: e })]
	});
}
function nn({ title: e, slices: t, primary: n, secondary: r, colors: i, centerNote: a, embedded: o = !1 }) {
	if (t && t.length > 0) {
		let n = t.reduce((e, t) => e + t.value, 0), r = /* @__PURE__ */ J(tn, {
			slices: t.map((e) => ({
				...e,
				color: e.color ?? "var(--color-track)",
				share: n > 0 ? e.value / n * 100 : 0
			})),
			centerLabel: K(n),
			centerNote: a,
			embedded: o
		});
		return o ? r : /* @__PURE__ */ J("article", {
			class: "card h-full",
			children: [/* @__PURE__ */ J("h3", {
				class: "heading-3",
				children: e
			}), r]
		});
	}
	if (!n || !r || !i) return null;
	let s = n.value + r.value, c = s > 0 ? n.value / s * 100 : 0, l = [{
		...n,
		color: i.primary,
		share: c
	}, {
		...r,
		color: i.secondary,
		share: s > 0 ? r.value / s * 100 : 0
	}], u = /* @__PURE__ */ J("div", {
		class: o ? "grid justify-items-center gap-16" : "mt-12 grid justify-items-center gap-16",
		children: [/* @__PURE__ */ J("div", {
			class: `${$t.donut} relative grid aspect-square w-full place-items-center rounded-full p-22`,
			style: Zt(n.value, r.value, i.primary, i.secondary),
			children: /* @__PURE__ */ J("div", {
				class: "body-1 relative z-1 grid justify-items-center gap-4 text-center",
				children: [/* @__PURE__ */ J("strong", {
					class: "heading-4",
					children: K(s)
				}), /* @__PURE__ */ J("span", { children: q(c) })]
			})
		}), /* @__PURE__ */ J(en, { slices: l })]
	});
	return o ? u : /* @__PURE__ */ J("article", {
		class: "card",
		children: [/* @__PURE__ */ J("h3", {
			class: "heading-3",
			children: e
		}), u]
	});
}
//#endregion
//#region src/report/thresholds.ts
var rn = .05;
100 * kt, 10 * kt;
//#endregion
//#region src/report/split-ranked-by-share.ts
function an(e, t = rn) {
	let n = e.reduce((e, t) => e + t.responseBytes, 0), r = [], i = [];
	for (let [a, o] of e.entries()) {
		let e = n > 0 ? o.responseBytes / n : 0;
		if (e > t) {
			let t = Dt[a % Dt.length] ?? "blue";
			r.push({
				...o,
				share: e,
				color: Z(t)
			});
		} else (o.responseBytes > 0 || o.requests > 0) && i.push(o);
	}
	let a = Math.round(t * 100);
	return {
		totalBytes: n,
		major: r,
		minor: i,
		minorTotals: i.reduce((e, t) => ({
			label: e.label,
			requests: e.requests + t.requests,
			responseBytes: e.responseBytes + t.responseBytes
		}), {
			label: `Show < ${a}%`,
			requests: 0,
			responseBytes: 0
		})
	};
}
//#endregion
//#region src/report/components/EndpointBreakdown.tsx
var on = Math.round(rn * 100);
function sn({ minor: e, minorTotals: t }) {
	return e.length === 0 ? null : /* @__PURE__ */ J("div", {
		class: "data-table-wrap mt-0 min-w-0 flex-1",
		children: /* @__PURE__ */ J("details", {
			class: "endpoint-minor-details",
			children: [/* @__PURE__ */ J("summary", {
				class: "endpoint-minor-summary body-1",
				children: [
					/* @__PURE__ */ J("span", {
						class: "min-w-0 truncate text-text",
						children: t.label
					}),
					/* @__PURE__ */ J("span", {
						class: "num shrink-0 text-text",
						children: K(t.responseBytes)
					}),
					/* @__PURE__ */ J("span", {
						class: "num shrink-0 text-text",
						children: G(t.requests)
					})
				]
			}), /* @__PURE__ */ J("div", {
				class: "endpoint-minor-body",
				children: /* @__PURE__ */ J("table", {
					class: "body-1 data-table",
					children: [/* @__PURE__ */ J("thead", { children: /* @__PURE__ */ J("tr", { children: [
						/* @__PURE__ */ J("th", { children: "Label" }),
						/* @__PURE__ */ J("th", {
							class: "num",
							children: "Bandwidth"
						}),
						/* @__PURE__ */ J("th", {
							class: "num",
							children: "Requests"
						})
					] }) }), /* @__PURE__ */ J("tbody", { children: e.map((e) => /* @__PURE__ */ J("tr", { children: [
						/* @__PURE__ */ J("td", {
							class: "min-w-0 truncate",
							title: e.label,
							children: e.label
						}),
						/* @__PURE__ */ J("td", {
							class: "num",
							children: K(e.responseBytes)
						}),
						/* @__PURE__ */ J("td", {
							class: "num",
							children: G(e.requests)
						})
					] }, e.label)) })]
				})
			})]
		})
	});
}
function cn({ title: e, rows: t }) {
	let { major: n, minor: r, minorTotals: i } = an(t);
	return /* @__PURE__ */ J("div", {
		class: "card",
		children: [/* @__PURE__ */ J("h3", {
			class: "heading-3",
			children: e
		}), /* @__PURE__ */ J("div", {
			class: "mt-12 flex flex-col gap-16 lg:flex-row lg:items-start",
			children: [/* @__PURE__ */ J("div", {
				class: "w-full shrink-0 lg:w-[min(100%,34rem)]",
				children: n.length > 0 ? /* @__PURE__ */ J(nn, {
					embedded: !0,
					title: "",
					slices: n.map(({ label: e, responseBytes: t, color: n }) => ({
						label: e,
						value: t,
						color: n
					})),
					centerNote: `${n.length} endpoint${n.length === 1 ? "" : "s"} > ${on}%`
				}) : /* @__PURE__ */ J("div", {
					class: "body-1 card mt-0 text-muted",
					children: [
						"No endpoints reach ",
						on,
						"% of endpoint bandwidth in this view."
					]
				})
			}), r.length > 0 ? /* @__PURE__ */ J(sn, {
				minor: r,
				minorTotals: i
			}) : null]
		})]
	});
}
//#endregion
//#region src/report/parse-image-url.ts
var ln = 2e3, un = "auto";
function dn(e) {
	let t = e.lastIndexOf(".");
	return t === -1 ? "" : e.slice(t).toLowerCase();
}
function fn(e) {
	if (e === null) return null;
	let t = Number.parseInt(e, 10);
	return Number.isFinite(t) ? t : null;
}
function pn(e) {
	let t = dn(e), n = t ? e.slice(0, -t.length) : e, r = n.split("-"), i = (r[r.length - 1] ?? "").match(/^(\d+)x(\d+)$/);
	return i ? {
		id: r.slice(0, -1).join("-") || n,
		width: fn(i[1] ?? null)
	} : {
		id: n,
		width: null
	};
}
function mn(e) {
	try {
		let t = new URL(e), n = t.pathname.split("/").filter(Boolean).at(-1) ?? e, r = dn(n) === ".svg", { id: i, width: a } = pn(n);
		return {
			id: i,
			width: fn(t.searchParams.get("w")) ?? a,
			quality: fn(t.searchParams.get("q")),
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
function hn(e) {
	try {
		let t = new URL(e);
		return t.searchParams.has("dl") ? (t.searchParams.delete("dl"), t.toString()) : e;
	} catch {
		return e;
	}
}
function gn(e) {
	return e !== null && e > 2e3;
}
function _n(e, t) {
	return !t && e !== null && e > 87;
}
function vn(e) {
	return e !== null && e !== "auto";
}
//#endregion
//#region src/report/components/CardMetric.tsx
function yn({ children: e, className: t }) {
	let n = ["card", "card-metric"];
	return t && n.push(t), /* @__PURE__ */ J("article", {
		class: n.join(" "),
		children: e
	});
}
//#endregion
//#region src/report/components/ContributorCard.tsx
function bn(e, t) {
	return t === "image" ? mn(e.label).id : e.label;
}
function xn({ title: e, contributor: t, labelKind: n = "default", showRequests: r = !0 }) {
	let i = bn(t, n);
	return /* @__PURE__ */ J(yn, {
		className: "grid min-w-0 content-between gap-8",
		children: [
			/* @__PURE__ */ J("div", {
				class: "eyebrow-1 text-muted",
				children: e
			}),
			/* @__PURE__ */ J("div", {
				class: "body-1 truncate text-text",
				title: t.label,
				children: i
			}),
			/* @__PURE__ */ J("div", {
				class: "display-1 text-text",
				children: K(t.responseBytes)
			}),
			r ? /* @__PURE__ */ J("div", {
				class: "body-2 text-muted",
				children: [G(t.requests), " requests"]
			}) : null
		]
	});
}
//#endregion
//#region src/report/components/DistributionCard.tsx
function Sn({ totalBytes: e, segments: t }) {
	return /* @__PURE__ */ J(yn, {
		className: "grid content-between gap-12",
		children: [
			/* @__PURE__ */ J("div", {
				class: "eyebrow-1 text-muted",
				children: "Distribution"
			}),
			/* @__PURE__ */ J("div", {
				class: "display-1 text-text",
				children: K(e)
			}),
			/* @__PURE__ */ J("div", {
				class: "body-2 grid gap-4 text-muted",
				children: t.map((e) => /* @__PURE__ */ J("div", { children: [
					We(e.share),
					" ",
					e.label
				] }, e.label))
			})
		]
	});
}
//#endregion
//#region src/report/components/tone.ts
var Cn = {
	green: "tone-green",
	red: "tone-red",
	yellow: "tone-yellow"
};
function wn(e, t) {
	let n = [...e];
	return t && n.push(Cn[t]), n.join(" ");
}
//#endregion
//#region src/report/components/FindingBox.tsx
function Tn({ text: e, tone: t }) {
	return /* @__PURE__ */ J(yn, {
		className: wn([
			"grid",
			"min-h-0",
			"content-start",
			"gap-8"
		], t),
		children: t ? /* @__PURE__ */ J("div", {
			class: "flex items-center gap-8",
			children: [/* @__PURE__ */ J("span", {
				class: "status-dot shrink-0",
				"aria-hidden": "true"
			}), /* @__PURE__ */ J("p", {
				class: "body-1 m-0 min-w-0 text-text",
				children: e
			})]
		}) : /* @__PURE__ */ J("p", {
			class: "body-1 m-0 min-w-0 text-text",
			children: e
		})
	});
}
//#endregion
//#region src/report/components/FindingsSummary.tsx
function En({ title: e, items: t, emptyMessage: n, tone: r }) {
	return t.length === 0 && !n ? null : /* @__PURE__ */ J("div", {
		class: "flex flex-col gap-12",
		children: [/* @__PURE__ */ J("div", {
			class: "eyebrow-1 section-title",
			children: e
		}), t.length === 0 ? /* @__PURE__ */ J(Tn, {
			text: n ?? "",
			tone: r
		}) : /* @__PURE__ */ J("div", {
			class: "flex flex-col gap-12",
			children: t.map((e) => /* @__PURE__ */ J(Tn, {
				text: e,
				tone: r
			}, e))
		})]
	});
}
function Dn({ summary: e }) {
	let t = e.atAGlance.filter((e) => e.kind !== "synthesis"), n = e.atAGlance.find((e) => e.kind === "synthesis"), r = [
		e.topContributors.image ? {
			key: "image",
			title: "Largest image",
			contributor: e.topContributors.image,
			labelKind: "image"
		} : null,
		e.topContributors.file ? {
			key: "file",
			title: "Largest file",
			contributor: e.topContributors.file
		} : null,
		e.topContributors.query ? {
			key: "query",
			title: "Largest query",
			contributor: e.topContributors.query
		} : null,
		e.topContributors.referer ? {
			key: "referer",
			title: "Largest referer",
			contributor: e.topContributors.referer,
			showRequests: !1
		} : null
	].filter((e) => e !== null), i = [/* @__PURE__ */ J(Sn, {
		totalBytes: e.distribution.totalBytes,
		segments: e.distribution.segments
	}, "distribution"), ...r.map((e) => /* @__PURE__ */ J(xn, {
		title: e.title,
		contributor: e.contributor,
		labelKind: e.labelKind,
		showRequests: e.showRequests ?? !0
	}, e.key))];
	return /* @__PURE__ */ J("section", {
		class: "mb-24 grid scroll-mt-20 gap-16",
		"data-section": "findings",
		"data-health": e.overallHealth,
		children: [
			e.atAGlance.length > 0 ? /* @__PURE__ */ J("div", {
				class: "card grid gap-12",
				children: [
					/* @__PURE__ */ J("div", {
						class: "eyebrow-1 section-title",
						children: "At a glance"
					}),
					t.length > 0 ? /* @__PURE__ */ J("div", {
						class: "grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3",
						children: t.map((e) => /* @__PURE__ */ J(Tn, { text: e.text }, e.text))
					}) : null,
					n ? /* @__PURE__ */ J("p", {
						class: "body-1 m-0 text-text font-medium",
						children: n.text
					}) : null
				]
			}) : null,
			i.length > 0 ? /* @__PURE__ */ J("div", {
				class: "grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3",
				children: i
			}) : null,
			/* @__PURE__ */ J("div", {
				class: "grid grid-cols-2 lg:grid-cols-4 gap-x-24 gap-y-48",
				children: [
					/* @__PURE__ */ J(En, {
						title: "Critical",
						items: e.critical.map((e) => e.summary),
						emptyMessage: "No critical issues detected.",
						tone: "red"
					}),
					/* @__PURE__ */ J(En, {
						title: "Warnings",
						items: e.warnings.map((e) => e.summary),
						tone: "yellow"
					}),
					/* @__PURE__ */ J(En, {
						title: "Observations",
						items: e.observations.map((e) => e.summary)
					}),
					/* @__PURE__ */ J(En, {
						title: "No action needed",
						items: e.healthy.map((e) => e.summary),
						tone: "green"
					})
				]
			})
		]
	});
}
//#endregion
//#region src/report/components/Metric.tsx
function On({ label: e, value: t, note: n }) {
	return /* @__PURE__ */ J(yn, {
		className: "grid content-between gap-0",
		children: [
			/* @__PURE__ */ J("div", {
				class: "eyebrow-1 text-muted",
				children: e
			}),
			/* @__PURE__ */ J("div", {
				class: "display-1 mt-auto pt-10",
				children: t
			}),
			n ? /* @__PURE__ */ J("div", {
				class: "body-2 mt-8 text-muted",
				children: n
			}) : null
		]
	});
}
//#endregion
//#region src/report/is-development-url.ts
function kn(e, t) {
	let n = e.toLowerCase();
	return (n === "localhost" || n === "127.0.0.1") && t !== "";
}
function An(e) {
	return /^192\.168\.\d{1,3}\.\d{1,3}$/.test(e);
}
function jn(e) {
	return /192\.168\.\d{1,3}\.\d{1,3}/.test(e) ? !0 : /(?:^|\/\/)(?:localhost|127\.0\.0\.1):\d+/.test(e);
}
function Mn(e) {
	if (!e || e === "(empty)") return !1;
	try {
		let t = new URL(e);
		return An(t.hostname) || kn(t.hostname, t.port);
	} catch {
		return jn(e);
	}
}
//#endregion
//#region src/report/components/RefererDataTable.tsx
function Nn(e) {
	return e.startsWith("https://");
}
function Pn({ row: e }) {
	return /* @__PURE__ */ J(Jt, {
		value: e.label,
		href: Nn(e.label) ? e.label : void 0,
		adornments: Mn(e.label) ? /* @__PURE__ */ J("span", {
			class: "badge-amber",
			children: "Development"
		}) : null,
		children: /* @__PURE__ */ J("span", {
			class: "min-w-0 flex-1 truncate",
			children: e.label
		})
	});
}
function Fn({ title: e, rows: t }) {
	return /* @__PURE__ */ J(Xt, {
		title: e,
		rows: t,
		renderLabel: (e) => /* @__PURE__ */ J(Pn, { row: e })
	});
}
//#endregion
//#region src/report/groq-constants.ts
var In = "uses the {...} spread operator and may waste bandwidth by fetching more fields than needed", Ln = [
	"dereferences",
	"projections",
	"subqueries",
	"spreads",
	"arrayTraversals"
];
function Rn(e) {
	return e.replace(/([A-Z])/g, " $1").replace(/^./, (e) => e.toUpperCase());
}
function zn({ stats: e }) {
	let t = Ln.filter((t) => e[t] > 0).sort((t, n) => e[n] - e[t]), n = Object.entries(e.functionCalls).filter(([, e]) => e > 0).sort(([e], [t]) => e.localeCompare(t));
	return t.length === 0 && n.length === 0 ? /* @__PURE__ */ J("p", {
		class: "empty body-2",
		children: "No structural features detected."
	}) : /* @__PURE__ */ J("dl", {
		class: "m-0 grid gap-6",
		children: [t.map((t) => /* @__PURE__ */ J("div", {
			class: "flex items-baseline justify-between gap-12 border-t border-border-subtle pt-6 first:border-t-0 first:pt-0",
			children: [/* @__PURE__ */ J("dt", {
				class: "body-2 m-0 text-text",
				children: Rn(t)
			}), /* @__PURE__ */ J("dd", {
				class: "num m-0",
				children: e[t]
			})]
		}, t)), n.length > 0 ? /* @__PURE__ */ J("div", {
			class: "mt-4 grid gap-4 border-t border-border-subtle pt-8",
			children: [/* @__PURE__ */ J("div", {
				class: "font-semibold text-text",
				style: { fontSize: "var(--text-size-xs)" },
				children: "functionCalls"
			}), n.map(([e, t]) => /* @__PURE__ */ J("div", {
				class: "flex items-baseline justify-between gap-12",
				children: [/* @__PURE__ */ J("dt", {
					class: "body-2 m-0 text-muted",
					children: e
				}), /* @__PURE__ */ J("dd", {
					class: "num m-0",
					children: t
				})]
			}, e))]
		}) : null]
	});
}
//#endregion
//#region src/report/components/GroqQueryFlyout.tsx
function Bn({ id: e, details: t, requests: n, responseBytes: r }) {
	let { formattedQuery: i, highlightedQuery: a, stats: o, hasSpreadOperator: s, params: c } = t, l = n > 0 ? r / n : 0, u = c && Object.keys(c).length > 0 ? JSON.stringify(c, null, 2) : null;
	return /* @__PURE__ */ J("dialog", {
		id: e,
		class: "dialog w-full max-w-[min(72rem,calc(100vw-3.2rem))] border border-border-faint bg-panel p-0 text-text shadow-[0_1.6rem_4.8rem_rgba(0,0,0,0.45)] rounded-md",
		"data-groq-flyout": !0,
		children: /* @__PURE__ */ J("div", {
			class: "px-16 pt-12 pb-16",
			children: [
				/* @__PURE__ */ J("div", {
					class: "mb-12 flex items-center gap-8",
					children: [
						/* @__PURE__ */ J("h4", {
							class: "heading-3 mb-0 flex-1 text-[1.4rem]",
							children: "GROQ query"
						}),
						/* @__PURE__ */ J(Y, {
							variant: "outline-pill",
							icon: /* @__PURE__ */ J(Ze, {}),
							iconPosition: "end",
							"data-copy-value": i,
							"data-copy-toast": "Copied query",
							"aria-label": "Copy query",
							children: "Copy query"
						}),
						/* @__PURE__ */ J(Y, {
							variant: "ghost-icon",
							icon: "×",
							"data-groq-flyout-close": !0,
							"aria-label": "Close"
						})
					]
				}),
				/* @__PURE__ */ J("div", { children: [/* @__PURE__ */ J("div", {
					class: "eyebrow-1 mb-8 text-muted",
					children: "Usage"
				}), /* @__PURE__ */ J("dl", {
					class: "m-0 grid grid-cols-3 gap-8",
					children: [
						/* @__PURE__ */ J("div", {
							class: "m-0 rounded-sm border border-border-subtle bg-black/20 px-12 py-10",
							children: [/* @__PURE__ */ J("dt", {
								class: "m-0 text-muted",
								style: { fontSize: "var(--text-size-xs)" },
								children: "Bandwidth"
							}), /* @__PURE__ */ J("dd", {
								class: "body-2 mt-4 mb-0 tabular-nums",
								children: K(r)
							})]
						}),
						/* @__PURE__ */ J("div", {
							class: "m-0 rounded-sm border border-border-subtle bg-black/20 px-12 py-10",
							children: [/* @__PURE__ */ J("dt", {
								class: "m-0 text-muted",
								style: { fontSize: "var(--text-size-xs)" },
								children: "Requests"
							}), /* @__PURE__ */ J("dd", {
								class: "body-2 mt-4 mb-0 tabular-nums",
								children: G(n)
							})]
						}),
						/* @__PURE__ */ J("div", {
							class: "m-0 rounded-sm border border-border-subtle bg-black/20 px-12 py-10",
							children: [/* @__PURE__ */ J("dt", {
								class: "m-0 text-muted",
								style: { fontSize: "var(--text-size-xs)" },
								children: "Avg / req"
							}), /* @__PURE__ */ J("dd", {
								class: "body-2 mt-4 mb-0 tabular-nums",
								children: K(l)
							})]
						})
					]
				})] }),
				s ? /* @__PURE__ */ J("p", {
					class: "body-2 mt-22 mb-14 rounded-sm border border-[var(--color-amber,#f59e0b)] px-10 py-8 leading-[1.5] text-[var(--color-amber)] bg-[var(--color-amber-light,rgba(245,158,11,0.12))]",
					children: [
						"This query ",
						In,
						"."
					]
				}) : null,
				/* @__PURE__ */ J("div", {
					class: "mt-16 border-t border-border-subtle pt-16",
					children: [/* @__PURE__ */ J("div", {
						class: "eyebrow-1 mb-8 text-muted",
						children: "Query"
					}), /* @__PURE__ */ J("pre", {
						class: "body-2 m-0 max-h-240 overflow-auto rounded-sm border border-border-subtle bg-black/35 p-12 font-mono leading-[1.5] break-words whitespace-pre-wrap",
						children: /* @__PURE__ */ J("code", {
							class: "language-groq",
							dangerouslySetInnerHTML: { __html: a }
						})
					})]
				}),
				u ? /* @__PURE__ */ J("div", {
					class: "mt-16 border-t border-border-subtle pt-16",
					children: [/* @__PURE__ */ J("div", {
						class: "eyebrow-1 mb-8 text-muted",
						children: "Params"
					}), /* @__PURE__ */ J("pre", {
						class: "body-2 m-0 max-h-240 overflow-auto rounded-sm border border-border-subtle bg-black/35 p-12 font-mono leading-[1.5] break-words whitespace-pre-wrap",
						children: /* @__PURE__ */ J("code", { children: u })
					})]
				}) : null,
				/* @__PURE__ */ J("div", {
					class: "mt-16 border-t border-border-subtle pt-16",
					children: [/* @__PURE__ */ J("div", {
						class: "eyebrow-1 mb-8 text-muted",
						children: "Structure"
					}), o ? /* @__PURE__ */ J(zn, { stats: o }) : /* @__PURE__ */ J("p", {
						class: "body-2 empty m-0",
						children: "Could not analyze query structure."
					})]
				}),
				/* @__PURE__ */ J("p", {
					class: "body-2 mt-22 text-muted",
					children: [
						"Want to learn more about making efficient queries? Check out Sanity's guide on",
						" ",
						/* @__PURE__ */ J("a", {
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
var Vn = {
	wrap: "_wrap_rjk14_1",
	tooltip: "_tooltip_rjk14_11",
	placementTop: "_placementTop_rjk14_37",
	placementBottom: "_placementBottom_rjk14_42"
};
//#endregion
//#region src/report/components/Tooltip.tsx
function Hn({ content: e, children: t, placement: n = "top", class: r }) {
	let i = n === "bottom" ? Vn.placementBottom : Vn.placementTop;
	return /* @__PURE__ */ J("span", {
		class: [
			Vn.wrap,
			i,
			r
		].filter(Boolean).join(" "),
		children: [t, /* @__PURE__ */ J("span", {
			class: Vn.tooltip,
			role: "tooltip",
			children: e
		})]
	});
}
//#endregion
//#region src/report/components/UrlDataTable.tsx
function Un({ rows: e, showFlyout: t = !1, groqByUrl: n = {}, variant: r = "default", idPrefix: i }) {
	if (e.length === 0) return /* @__PURE__ */ J("p", {
		class: "empty body-2 py-12",
		children: "No URLs in this category."
	});
	let a = r === "image", o = r === "file", s = a || o;
	return /* @__PURE__ */ J("div", {
		class: "data-table-wrap",
		children: /* @__PURE__ */ J("table", {
			class: "body-1 data-table",
			"data-sortable-table": !0,
			children: [/* @__PURE__ */ J("thead", { children: /* @__PURE__ */ J("tr", { children: [
				/* @__PURE__ */ J($, {
					label: "Label",
					sortKey: "label",
					sortType: "string"
				}),
				a ? /* @__PURE__ */ J(S, { children: [
					/* @__PURE__ */ J($, {
						label: "Width",
						sortKey: "width",
						sortType: "number",
						className: "num"
					}),
					/* @__PURE__ */ J($, {
						label: "Quality",
						sortKey: "quality",
						sortType: "number",
						className: "num"
					}),
					/* @__PURE__ */ J($, {
						label: "Format",
						sortKey: "format",
						sortType: "string"
					})
				] }) : null,
				/* @__PURE__ */ J($, {
					label: "Bandwidth",
					sortKey: "bandwidth",
					sortType: "number",
					className: "num"
				}),
				/* @__PURE__ */ J($, {
					label: "Requests",
					sortKey: "requests",
					sortType: "number",
					className: "num"
				}),
				/* @__PURE__ */ J($, {
					label: "Avg / req",
					sortKey: "avg",
					sortType: "number",
					className: "num"
				})
			] }) }), /* @__PURE__ */ J("tbody", { children: e.map((e, r) => {
				let c = t ? n[e.label] : void 0, l = c ? `${i}-flyout-${r}` : void 0, u = a ? mn(e.label) : null, d = a ? u?.id ?? e.label : e.label, f = a ? u?.id ?? e.label : e.label;
				return /* @__PURE__ */ J("tr", {
					"data-row-index": r,
					...qt({
						...e,
						label: d
					}),
					...a ? {
						"data-sort-width": Q(u?.width ?? null),
						"data-sort-quality": Q(u?.quality ?? null),
						"data-sort-format": Q(u?.format ?? null)
					} : {},
					children: [
						/* @__PURE__ */ J("td", {
							class: "max-w-520",
							title: a ? e.label : void 0,
							children: [/* @__PURE__ */ J(Jt, {
								value: e.label,
								copyToast: "Copied URL",
								href: s ? hn(e.label) : void 0,
								externalLinkLabel: f,
								adornments: /* @__PURE__ */ J(S, { children: [
									o && mt(e.label) ? /* @__PURE__ */ J(Hn, {
										content: "Consider using HLS streaming services like Mux instead of serving large single MP4 files to reduce bandwidth and improve playback.",
										children: /* @__PURE__ */ J("span", {
											class: "icon-warning",
											children: /* @__PURE__ */ J($e, {})
										})
									}) : null,
									c?.hasSpreadOperator ? /* @__PURE__ */ J(Hn, {
										content: `This query ${In}.`,
										children: /* @__PURE__ */ J("span", {
											class: "icon-warning",
											children: /* @__PURE__ */ J($e, {})
										})
									}) : null,
									l ? /* @__PURE__ */ J(Y, {
										variant: "outline-pill-accent",
										"data-groq-flyout-target": l,
										"aria-haspopup": "dialog",
										children: "View query"
									}) : null
								] }),
								children: /* @__PURE__ */ J("span", {
									class: "min-w-0 flex-1 truncate",
									children: f
								})
							}), l && c ? /* @__PURE__ */ J(Bn, {
								id: l,
								details: c,
								requests: e.requests,
								responseBytes: e.responseBytes
							}) : null]
						}),
						a && u ? /* @__PURE__ */ J(S, { children: [
							/* @__PURE__ */ J("td", {
								class: "num",
								children: /* @__PURE__ */ J("div", {
									class: "inline-flex items-center gap-6",
									children: [/* @__PURE__ */ J("span", { children: Ue(u.width) }), gn(u.width) ? /* @__PURE__ */ J(Hn, {
										content: `Width exceeds ${ln}px`,
										children: /* @__PURE__ */ J("span", {
											class: "badge-red",
											children: "Too large"
										})
									}) : null]
								})
							}),
							/* @__PURE__ */ J("td", {
								class: "num",
								children: /* @__PURE__ */ J("div", {
									class: "inline-flex items-center gap-6",
									children: [/* @__PURE__ */ J("span", { children: Ue(u.quality) }), _n(u.quality, u.isSvg) ? /* @__PURE__ */ J(Hn, {
										content: "Quality exceeds 87",
										children: /* @__PURE__ */ J("span", {
											class: "icon-error",
											children: /* @__PURE__ */ J(et, {})
										})
									}) : null]
								})
							}),
							/* @__PURE__ */ J("td", { children: /* @__PURE__ */ J("div", {
								class: "inline-flex items-center gap-6",
								children: [/* @__PURE__ */ J("span", { children: Ue(u.format) }), vn(u.format) ? /* @__PURE__ */ J(Hn, {
									content: `Format should be "${un}"`,
									children: /* @__PURE__ */ J("span", {
										class: "icon-error",
										children: /* @__PURE__ */ J(et, {})
									})
								}) : null]
							}) })
						] }) : null,
						/* @__PURE__ */ J(Yt, { row: e })
					]
				}, `${e.label}-${r}`);
			}) })]
		})
	});
}
//#endregion
//#region src/report/components/UrlTabsSection.tsx
function Wn({ rows: e, groqByUrl: t, idPrefix: n }) {
	let r = vt(e), i = yt(r), a = _t(r);
	return /* @__PURE__ */ J("section", {
		class: "card scroll-mt-20",
		"data-section": "urls",
		"data-url-tabs": !0,
		"data-default-url-tab": i,
		children: [
			/* @__PURE__ */ J("h3", {
				class: "heading-3",
				children: X("urls") ?? "Top URLs"
			}),
			/* @__PURE__ */ J("div", {
				class: "mt-12 flex flex-wrap gap-6",
				role: "tablist",
				"aria-label": "URL categories",
				children: a.map((e) => /* @__PURE__ */ J(Y, {
					variant: "tab",
					role: "tab",
					"data-url-tab": e.id,
					"aria-selected": e.id === i ? "true" : "false",
					"aria-controls": `${n}-panel-${e.id}`,
					children: [
						e.label,
						" (",
						r[e.id].length,
						")"
					]
				}, e.id))
			}),
			a.map((e) => /* @__PURE__ */ J("div", {
				id: `${n}-panel-${e.id}`,
				class: "mt-12",
				role: "tabpanel",
				"data-url-panel": e.id,
				hidden: e.id !== i || void 0,
				children: /* @__PURE__ */ J(Un, {
					rows: r[e.id],
					showFlyout: e.id === "query",
					groqByUrl: t,
					variant: e.id === "image" ? "image" : e.id === "file" ? "file" : "default",
					idPrefix: `${n}-${e.id}`
				})
			}, e.id))
		]
	});
}
//#endregion
//#region src/report/components/UserAgentDataTable.tsx
function Gn(e) {
	return /^@sanity/i.test(e.trim());
}
function Kn({ raw: e, parsed: t }) {
	return /* @__PURE__ */ J("div", {
		class: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ J("div", {
			class: "flex min-w-0 items-center gap-6",
			children: [
				t.deviceKind ? /* @__PURE__ */ J("span", {
					class: "inline-flex size-16 shrink-0 items-center justify-center text-muted [&>svg]:size-14",
					title: t.deviceKind === "mobile" ? "Mobile" : "Desktop",
					"aria-label": t.deviceKind === "mobile" ? "Mobile" : "Desktop",
					children: t.deviceKind === "mobile" ? /* @__PURE__ */ J(it, {}) : /* @__PURE__ */ J(rt, {})
				}) : null,
				/* @__PURE__ */ J("span", {
					class: "min-w-0 truncate",
					children: t.deviceKind ? t.displayLabel : t.raw || t.displayLabel
				}),
				Gn(e) ? /* @__PURE__ */ J("span", {
					class: "badge-blue",
					children: "Sanity client"
				}) : null
			]
		}), t.deviceKind ? /* @__PURE__ */ J("div", {
			class: "truncate pl-22 leading-[1.35] text-muted",
			style: { fontSize: "var(--text-size-xs)" },
			title: t.raw,
			children: t.raw
		}) : null]
	});
}
function qn({ stats: e }) {
	return e.trackableRequests === 0 ? null : /* @__PURE__ */ J("div", {
		class: "mt-12 flex flex-wrap gap-8",
		children: [
			/* @__PURE__ */ J("span", {
				class: "pill items-baseline gap-4 py-4 pr-9 pl-4",
				children: [/* @__PURE__ */ J("strong", {
					class: "body-2 font-semibold text-text",
					children: "Mac"
				}), q(e.macPct)]
			}),
			/* @__PURE__ */ J("span", {
				class: "pill items-baseline gap-4 py-4 pr-9 pl-4",
				children: [/* @__PURE__ */ J("strong", {
					class: "body-2 font-semibold text-text",
					children: "Windows"
				}), q(e.windowsPct)]
			}),
			/* @__PURE__ */ J("span", {
				class: "pill items-baseline gap-4 py-4 pr-9 pl-4",
				children: [/* @__PURE__ */ J("strong", {
					class: "body-2 font-semibold text-text",
					children: "Mobile"
				}), q(e.mobilePct)]
			}),
			/* @__PURE__ */ J("span", {
				class: "pill items-baseline gap-4 py-4 pr-9 pl-4",
				children: [/* @__PURE__ */ J("strong", {
					class: "body-2 font-semibold text-text",
					children: "Desktop"
				}), q(e.desktopPct)]
			})
		]
	});
}
function Jn({ title: e, rows: t, userAgentByLabel: n, userAgentStats: r }) {
	return /* @__PURE__ */ J(Xt, {
		title: e,
		rows: t,
		header: /* @__PURE__ */ J(qn, { stats: r }),
		renderLabel: (e) => /* @__PURE__ */ J(Kn, {
			raw: e.label,
			parsed: n[e.label]
		})
	});
}
//#endregion
//#region src/report/components/ViewSection.tsx
function Yn({ view: e, sections: t, viewKey: n, hidden: r = !1 }) {
	let i = e.firstTimestamp && e.lastTimestamp ? `${Ke(e.firstTimestamp)} → ${Ke(e.lastTimestamp)}` : "No timestamps found", a = e.summary;
	return /* @__PURE__ */ J("div", {
		"data-report-view": n,
		hidden: r || void 0,
		children: [
			/* @__PURE__ */ J(Dn, { summary: a }),
			/* @__PURE__ */ J("section", {
				class: "scroll-mt-20",
				"data-section": "summary",
				children: /* @__PURE__ */ J("div", {
					class: "mb-24 flex flex-wrap gap-16 [&>*]:min-w-[130px]",
					children: [
						/* @__PURE__ */ J(On, {
							label: "Requests",
							value: G(e.requests),
							note: i
						}),
						/* @__PURE__ */ J(On, {
							label: "Bandwidth",
							value: K(e.responseBytes),
							note: "Response size total"
						}),
						/* @__PURE__ */ J(On, {
							label: "Request bytes",
							value: K(e.requestBytes),
							note: "Inbound payload total"
						}),
						/* @__PURE__ */ J(On, {
							label: "Studio",
							value: K(e.studio.responseBytes),
							note: `${G(e.studio.requests)} requests`
						}),
						/* @__PURE__ */ J(On, {
							label: "Billable",
							value: K(e.nonStudio.responseBytes),
							note: `${G(e.nonStudio.requests)} requests`
						}),
						/* @__PURE__ */ J(nn, {
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
								primary: Z("blue"),
								secondary: Z("green")
							}
						})
					]
				})
			}),
			/* @__PURE__ */ J("div", {
				class: "mb-24 flex flex-col gap-16",
				children: [/* @__PURE__ */ J("div", {
					class: "flex flex-col gap-16",
					children: [
						/* @__PURE__ */ J("div", {
							class: "eyebrow-1 section-title",
							children: "Charts"
						}),
						/* @__PURE__ */ J("div", {
							class: "grid grid-cols-1 gap-16 lg:grid-cols-2",
							children: t.domain ? /* @__PURE__ */ J("section", {
								class: "scroll-mt-20",
								"data-section": "domain",
								children: /* @__PURE__ */ J(Ht, {
									title: X("domain") ?? "Top domains",
									rows: e.byDomain,
									accent: Z("blue")
								})
							}) : null
						}),
						t.endpoint ? /* @__PURE__ */ J("section", {
							class: "scroll-mt-20",
							"data-section": "endpoint",
							children: /* @__PURE__ */ J(cn, {
								title: X("endpoint") ?? "Top endpoints",
								rows: e.byEndpoint
							})
						}) : null,
						t.date ? /* @__PURE__ */ J("section", {
							class: "scroll-mt-20",
							"data-section": "date",
							children: /* @__PURE__ */ J(Bt, {
								title: X("date") ?? "Daily bandwidth",
								rows: e.byDate,
								accent: Z("amber")
							})
						}) : null,
						t.hour ? /* @__PURE__ */ J("section", {
							class: "scroll-mt-20",
							"data-section": "hour",
							children: /* @__PURE__ */ J(Bt, {
								title: X("hour") ?? "Hourly bandwidth",
								rows: e.byHour,
								accent: Z("red")
							})
						}) : null,
						/* @__PURE__ */ J("div", {
							class: "grid grid-cols-1 gap-16 lg:grid-cols-2",
							children: [t.status ? /* @__PURE__ */ J("section", {
								class: "scroll-mt-20",
								"data-section": "status",
								children: /* @__PURE__ */ J(Wt, {
									title: X("status") ?? "Response codes",
									rows: e.byStatus,
									accent: Z("purple")
								})
							}) : null, t.histogram ? /* @__PURE__ */ J("section", {
								class: "scroll-mt-20",
								"data-section": "histogram",
								children: /* @__PURE__ */ J(Gt, {
									title: X("histogram") ?? "Response size buckets",
									rows: e.responseSizeHistogram,
									accent: Z("teal")
								})
							}) : null]
						})
					]
				}), /* @__PURE__ */ J("div", {
					class: "flex flex-col gap-16",
					children: [
						/* @__PURE__ */ J("div", {
							class: "eyebrow-1 section-title",
							children: "Top lists"
						}),
						t.urls ? /* @__PURE__ */ J("div", {
							class: "scroll-mt-20",
							children: /* @__PURE__ */ J(Wn, {
								rows: e.byUrl,
								groqByUrl: e.groqByUrl,
								idPrefix: `urls-${n}`
							})
						}) : null,
						t.referers ? /* @__PURE__ */ J("section", {
							class: "scroll-mt-20",
							"data-section": "referers",
							children: /* @__PURE__ */ J(Fn, {
								title: X("referers") ?? "Top referers",
								rows: e.byReferer
							})
						}) : null,
						t.userAgents ? /* @__PURE__ */ J("section", {
							class: "scroll-mt-20",
							"data-section": "userAgents",
							children: /* @__PURE__ */ J(Jn, {
								title: X("userAgents") ?? "Top user agents",
								rows: e.byUserAgent,
								userAgentByLabel: e.userAgentByLabel,
								userAgentStats: e.userAgentStats
							})
						}) : null,
						t.ips ? /* @__PURE__ */ J("section", {
							class: "scroll-mt-20",
							"data-section": "ips",
							children: /* @__PURE__ */ J(Xt, {
								hasCopyButton: !0,
								copyToastMessage: "Copied IP",
								title: X("ips") ?? "Top IPs",
								rows: e.byIp
							})
						}) : null
					]
				})]
			})
		]
	});
}
//#endregion
//#region src/report/ReportApp.tsx
function Xn({ data: e }) {
	let t = Ot(), n = e.config.sections.billableComparison, r = n ? e.billable.byUrl : e.all.byUrl;
	return /* @__PURE__ */ J("main", {
		class: "mx-auto max-w-1600 px-20 pb-56 pt-32",
		style: t,
		children: [/* @__PURE__ */ J(Ye, { data: e }), /* @__PURE__ */ J("div", {
			class: "grid grid-cols-1 items-start gap-24 lg:grid-cols-[22rem_minmax(0,1fr)]",
			children: [/* @__PURE__ */ J(Tt, {
				sections: e.config.sections,
				urlRows: r
			}), /* @__PURE__ */ J("div", {
				class: "min-w-0",
				children: [/* @__PURE__ */ J(st, { showToggle: n }), n ? /* @__PURE__ */ J(S, { children: [/* @__PURE__ */ J(Yn, {
					view: e.billable,
					sections: e.config.sections,
					viewKey: "billable"
				}), /* @__PURE__ */ J(Yn, {
					view: e.all,
					sections: e.config.sections,
					viewKey: "all",
					hidden: !0
				})] }) : /* @__PURE__ */ J(Yn, {
					view: e.all,
					sections: e.config.sections,
					viewKey: "all"
				})]
			})]
		})]
	});
}
//#endregion
//#region src/report/scripts/copy-buttons.ts
var Zn = "(function(){\ndocument.addEventListener(\"click\",function(e){\nvar btn=e.target.closest(\"[data-copy-value]\");\nif(!btn)return;\ne.preventDefault();\nvar value=btn.getAttribute(\"data-copy-value\");\nif(!value)return;\nvar message=btn.getAttribute(\"data-copy-toast\")||\"Copied\";\nnavigator.clipboard.writeText(value).then(function(){\nwindow.__showReportToast(message);\n}).catch(function(){});\n});\n})();", Qn = "(function(){\ndocument.addEventListener(\"click\",function(e){\nvar target=e.target.closest(\"[data-groq-flyout-target]\");\nif(target){\ne.preventDefault();\nvar id=target.getAttribute(\"data-groq-flyout-target\");\nif(!id)return;\nvar dialog=document.getElementById(id);\nif(dialog&&typeof dialog.showModal===\"function\")dialog.showModal();\nreturn;\n}\nif(e.target.closest(\"[data-groq-flyout-close]\")){\nvar closeDialog=e.target.closest(\"dialog[data-groq-flyout]\");\nif(closeDialog)closeDialog.close();\n}\n});\ndocument.addEventListener(\"click\",function(e){\nvar dialog=e.target;\nif(dialog&&dialog.tagName===\"DIALOG\"&&dialog.hasAttribute(\"data-groq-flyout\")&&e.target===dialog){\ndialog.close();\n}\n});\n})();", $n = "(function(){\nvar button=document.getElementById(\"download-markdown\");\nvar payloadEl=document.getElementById(\"report-markdown\");\nif(!button||!payloadEl)return;\n\nbutton.addEventListener(\"click\",function(){\nvar payload;\ntry{payload=JSON.parse(payloadEl.textContent||\"\");}catch(e){return;}\nif(!payload||!payload.filenameBase)return;\n\nvar checkbox=document.getElementById(\"show-studio-requests\");\nvar view=checkbox&&checkbox.checked?\"all\":\"billable\";\nif(!checkbox)view=\"all\";\n\nvar markdown=view===\"all\"?payload.all:payload.billable;\nif(!markdown)return;\n\nvar suffix=view===\"all\"?\"_all\":\"_billable-only\";\nvar filename=payload.filenameBase+suffix+\".md\";\nvar blob=new Blob([markdown],{type:\"text/markdown;charset=utf-8\"});\nvar url=URL.createObjectURL(blob);\nvar link=document.createElement(\"a\");\nlink.href=url;\nlink.download=filename;\nlink.click();\nURL.revokeObjectURL(url);\nwindow.__showReportToast(\"Downloaded\");\n});\n})();", er = "(function(){\nfunction parseSortValue(raw,type){\nif(raw===\"\")return null;\nif(type===\"number\"){\nvar n=Number(raw);\nreturn Number.isFinite(n)?n:null;\n}\nreturn raw;\n}\nfunction compareValues(a,b,type,direction){\nvar mult=direction===\"asc\"?1:-1;\nif(a===null&&b===null)return 0;\nif(a===null)return 1;\nif(b===null)return -1;\nif(type===\"string\")return String(a).localeCompare(String(b))*mult;\nreturn(Number(a)-Number(b))*mult;\n}\nfunction setHeaderState(btn,direction){\nvar aria=direction===\"asc\"?\"ascending\":direction===\"desc\"?\"descending\":\"none\";\nbtn.setAttribute(\"data-sort-direction\",direction);\nbtn.setAttribute(\"aria-sort\",aria);\n}\nfunction sortTable(table,direction,key,type){\nvar tbody=table.querySelector(\"tbody\");\nif(!tbody)return;\nvar rows=Array.from(tbody.querySelectorAll(\"tr\"));\nif(direction===\"none\"){\nrows.sort(function(a,b){\nreturn Number(a.getAttribute(\"data-row-index\"))-Number(b.getAttribute(\"data-row-index\"));\n});\n}else{\nvar attr=\"data-sort-\"+key;\nrows.sort(function(a,b){\nvar av=parseSortValue(a.getAttribute(attr)||\"\",type);\nvar bv=parseSortValue(b.getAttribute(attr)||\"\",type);\nreturn compareValues(av,bv,type,direction);\n});\n}\nrows.forEach(function(row){tbody.appendChild(row);});\n}\ndocument.addEventListener(\"click\",function(e){\nvar btn=e.target.closest(\"[data-sort-key]\");\nif(!btn)return;\nvar table=btn.closest(\"[data-sortable-table]\");\nif(!table)return;\ne.preventDefault();\nvar key=btn.getAttribute(\"data-sort-key\");\nvar type=btn.getAttribute(\"data-sort-type\")||\"string\";\nif(!key)return;\nvar current=btn.getAttribute(\"data-sort-direction\")||\"none\";\nvar next=current===\"none\"?\"asc\":current===\"asc\"?\"desc\":\"none\";\ntable.querySelectorAll(\"[data-sort-key]\").forEach(function(other){\nif(other!==btn)setHeaderState(other,\"none\");\n});\nsetHeaderState(btn,next);\nsortTable(table,next,key,type);\n});\n})();", tr = "(function(){\nvar toast=null,hideTimer=null;\nvar supportsPopover=typeof HTMLElement.prototype.showPopover===\"function\";\nwindow.__showReportToast=function(message){\nif(!toast){\ntoast=document.createElement(\"div\");\ntoast.className=\"copy-toast\";\ntoast.setAttribute(\"role\",\"status\");\ntoast.setAttribute(\"aria-live\",\"polite\");\nif(supportsPopover)toast.setAttribute(\"popover\",\"manual\");\ndocument.body.appendChild(toast);\n}\ntoast.textContent=message||\"Done\";\nif(supportsPopover){\nif(toast.matches(\":popover-open\"))toast.hidePopover();\ntoast.showPopover();\n}\ntoast.classList.add(\"copy-toast--visible\");\nclearTimeout(hideTimer);\nhideTimer=setTimeout(function(){\ntoast.classList.remove(\"copy-toast--visible\");\nif(supportsPopover&&toast.matches(\":popover-open\"))toast.hidePopover();\n},1500);\n};\n})();", nr = "(function(){\nfunction parseHash(hash){\nvar raw=(hash||\"\").replace(/^#/,\"\");\nif(!raw)return{section:\"\",urlTab:null};\nif(raw.indexOf(\"urls/\")===0)return{section:\"urls\",urlTab:raw.slice(5),full:raw};\nif(raw===\"urls\")return{section:\"urls\",urlTab:null,full:\"urls\"};\nreturn{section:raw,urlTab:null,full:raw};\n}\n\nfunction scrollToSection(section,fullHash){\nvar target=document.querySelector('[data-report-view]:not([hidden]) [data-section=\"'+section+'\"]');\nif(!target)return;\ntarget.scrollIntoView({behavior:\"smooth\",block:\"start\"});\nif(history.replaceState){\nhistory.replaceState(null,\"\",window.location.pathname+window.location.search+\"#\"+fullHash);\n}else{\nwindow.location.hash=fullHash;\n}\n}\n\nfunction navigate(hash){\nvar parsed=parseHash(hash);\nif(!parsed.section)return;\nscrollToSection(parsed.section,parsed.full);\nif(parsed.section===\"urls\"&&typeof window.__activateUrlTab===\"function\"){\nwindow.__activateUrlTab(parsed.urlTab);\n}\n}\n\ndocument.addEventListener(\"click\",function(e){\nvar link=e.target.closest(\"[data-toc-link]\");\nif(!link)return;\nvar slug=(link.getAttribute(\"href\")||\"\").replace(/^#/,\"\");\nif(!slug)return;\ne.preventDefault();\nnavigate(\"#\"+slug);\n});\n\nvar initialHash=window.location.hash;\nif(initialHash){\nrequestAnimationFrame(function(){navigate(initialHash);});\n}\n})();", rr = "(function(){\nfunction visibleUrlTabsSection(){\nreturn document.querySelector('[data-report-view]:not([hidden]) [data-url-tabs]');\n}\n\nfunction activateUrlTab(tab){\nvar section=visibleUrlTabsSection();\nif(!section)return;\nvar resolved=tab||section.getAttribute(\"data-default-url-tab\")||\"image\";\nif(!section.querySelector('[data-url-tab=\"'+resolved+'\"]')){\nresolved=section.getAttribute(\"data-default-url-tab\")||\"image\";\n}\nvar tabs=section.querySelectorAll(\"[data-url-tab]\");\nvar panels=section.querySelectorAll(\"[data-url-panel]\");\ntabs.forEach(function(btn){\nvar isActive=btn.getAttribute(\"data-url-tab\")===resolved;\nbtn.setAttribute(\"aria-selected\",isActive?\"true\":\"false\");\n});\npanels.forEach(function(panel){\npanel.hidden=panel.getAttribute(\"data-url-panel\")!==resolved;\n});\nsection.setAttribute(\"data-active-url-tab\",resolved);\n}\n\nwindow.__activateUrlTab=activateUrlTab;\n\ndocument.addEventListener(\"click\",function(e){\nvar tabButton=e.target.closest(\"[data-url-tab]\");\nif(!tabButton)return;\nvar section=tabButton.closest(\"[data-url-tabs]\");\nif(!section)return;\nvar tab=tabButton.getAttribute(\"data-url-tab\");\nif(!tab)return;\ne.preventDefault();\nactivateUrlTab(tab);\nvar suffix=tab===\"image\"?\"\":(\"/\"+tab);\nif(history.replaceState){\nhistory.replaceState(null,\"\",window.location.pathname+window.location.search+\"#urls\"+suffix);\n}\n});\n})();", ir = "(function(){\nvar STORAGE_KEY=\"sanity-log-report-show-studio\";\nvar checkbox=document.getElementById(\"show-studio-requests\");\nvar billableView=document.querySelector('[data-report-view=\"billable\"]');\nvar allView=document.querySelector('[data-report-view=\"all\"]');\nif(!checkbox||!billableView||!allView)return;\n\nfunction setView(showAll){\nbillableView.hidden=showAll;\nallView.hidden=!showAll;\ntry{sessionStorage.setItem(STORAGE_KEY,showAll?\"1\":\"0\");}catch(e){}\n}\n\nvar saved=null;\ntry{saved=sessionStorage.getItem(STORAGE_KEY);}catch(e){}\nif(saved===\"1\"){\ncheckbox.checked=true;\nsetView(true);\n}\n\ncheckbox.addEventListener(\"change\",function(){\nsetView(checkbox.checked);\n});\n})();", ar = [
	"/*! tailwindcss v4.3.2 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;--color-black:#000;--color-white:#fff;--spacing:.1rem;--font-weight-medium:500;--font-weight-semibold:600;--tracking-tight:-.025em;--tracking-wide:.025em;--radius-sm:.7rem;--radius-md:1.2rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-panel:#18181be6;--color-text:#f4f4f5;--color-muted:#a1a1aa;--color-border-subtle:#ffffff14;--color-border-faint:#ffffff1f;--color-track:#ffffff14;--radius-pill:99.9rem}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.top-20{top:calc(var(--spacing) * 20)}.right-0{right:0}.left-0{left:0}.z-1{z-index:1}.container{width:100%}@media (width>=390px){.container{max-width:390px}}@media (width>=768px){.container{max-width:768px}}@media (width>=1024px){.container{max-width:1024px}}@media (width>=1440px){.container{max-width:1440px}}@media (width>=96rem){.container{max-width:96rem}}.section-title{color:var(--color-muted);margin:.8rem 0 -.4rem;padding-left:.4rem}.empty{color:var(--color-muted);margin:0}.m-0{margin:0}.mx-auto{margin-inline:auto}.mt-0{margin-top:0}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-10{margin-top:calc(var(--spacing) * 10)}.mt-12{margin-top:calc(var(--spacing) * 12)}.mt-16{margin-top:calc(var(--spacing) * 16)}.mt-22{margin-top:calc(var(--spacing) * 22)}.mt-auto{margin-top:auto}.mr-8{margin-right:calc(var(--spacing) * 8)}.heading-3{margin-bottom:2.75rem;font-size:1.6rem;font-weight:600}.mb-0{margin-bottom:0}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-8{margin-bottom:calc(var(--spacing) * 8)}.mb-12{margin-bottom:calc(var(--spacing) * 12)}.mb-14{margin-bottom:calc(var(--spacing) * 14)}.mb-24{margin-bottom:calc(var(--spacing) * 24)}.mb-32{margin-bottom:calc(var(--spacing) * 32)}.box-border{box-sizing:border-box}.icon-error{color:var(--color-red,#ef4444);flex-shrink:0;display:inline-flex}.icon-error>svg{width:1.4rem;height:1.4rem}.icon-warning{color:var(--color-amber,#f59e0b);flex-shrink:0;display:inline-flex}.icon-warning>svg{width:1.4rem;height:1.4rem}.btn-ghost{border-radius:var(--radius-sm);width:2.8rem;height:2.8rem;color:var(--color-muted);cursor:pointer;background:0 0;border:none;justify-content:center;align-items:center;padding:0;font-family:inherit;font-size:2rem;line-height:1;display:inline-flex}.btn-ghost-sm{border-radius:var(--radius-sm);width:2.4rem;height:2.4rem;color:var(--color-muted);cursor:pointer;background:0 0;border:none;justify-content:center;align-items:center;padding:0;font-family:inherit;display:inline-flex}.pill{border:.1rem solid var(--color-border-faint);border-radius:var(--radius-pill);color:var(--color-muted);font-size:var(--text-size-xs);background:#ffffff0a;flex-shrink:0;align-items:center;gap:.4rem;padding:.4rem .8rem;font-weight:600;display:inline-flex}.btn-pill{border:.1rem solid var(--color-border-faint);border-radius:var(--radius-pill);color:var(--color-muted);font-family:inherit;font-size:var(--text-size-xs);cursor:pointer;background:#ffffff0a;align-items:center;gap:.4rem;padding:.4rem .8rem;font-weight:600;display:inline-flex}.btn{border:.1rem solid var(--color-border-subtle);border-radius:var(--radius-md);background:var(--color-panel);color:var(--color-text);font-family:inherit;font-size:var(--text-size-sm);white-space:nowrap;cursor:pointer;align-items:center;gap:.8rem;padding:1.2rem 1.6rem;transition:border-color .15s,background .15s;display:inline-flex}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-11{width:calc(var(--spacing) * 11);height:calc(var(--spacing) * 11)}.size-16{width:calc(var(--spacing) * 16);height:calc(var(--spacing) * 16)}.h-0{height:0}.h-10{height:calc(var(--spacing) * 10)}.h-24{height:calc(var(--spacing) * 24)}.h-268{height:calc(var(--spacing) * 268)}.h-300{height:calc(var(--spacing) * 300)}.h-full{height:100%}.max-h-240{max-height:calc(var(--spacing) * 240)}.max-h-300{max-height:calc(var(--spacing) * 300)}.card-metric{min-height:12rem}.min-h-0{min-height:0}.min-h-2{min-height:calc(var(--spacing) * 2)}.w-56{width:calc(var(--spacing) * 56)}.w-full{width:100%}.max-w-520{max-width:calc(var(--spacing) * 520)}.max-w-1600{max-width:calc(var(--spacing) * 1600)}.max-w-\\[24rem\\]{max-width:24rem}.max-w-\\[72ch\\]{max-width:72ch}.max-w-\\[min\\(72rem\\,calc\\(100vw-3\\.2rem\\)\\)\\]{max-width:min(72rem,100vw - 3.2rem)}.max-w-full{max-width:100%}.min-w-0{min-width:0}.min-w-16{min-width:calc(var(--spacing) * 16)}.flex-1{flex:1}.btn-accent{border:.1rem solid var(--color-border-faint);border-radius:var(--radius-pill);color:var(--color-blue);font-family:inherit;font-size:var(--text-size-xs);cursor:pointer;background:#0ea5e91f;flex-shrink:0;padding:.3rem .8rem;font-weight:600}.badge-red{border:.1rem solid var(--color-border-faint);border-radius:var(--radius-pill);color:var(--color-red,#ef4444);font-size:var(--text-size-xs);white-space:nowrap;background:#ef44441f;flex-shrink:0;padding:.2rem .6rem;font-weight:600}.badge-amber{border:.1rem solid var(--color-border-faint);border-radius:var(--radius-pill);color:var(--color-amber,#f59e0b);font-size:var(--text-size-xs);background:#f59e0b1f;flex-shrink:0;padding:.3rem .8rem;font-weight:600}.badge-blue{border:.1rem solid var(--color-border-faint);border-radius:var(--radius-pill);color:var(--color-blue,#3b82f6);font-size:var(--text-size-xs);background:#3b82f61f;flex-shrink:0;padding:.3rem .8rem;font-weight:600}.shrink-0{flex-shrink:0}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.btn-tab{border:.1rem solid var(--color-border-subtle);border-radius:var(--radius-pill);color:var(--color-muted);font-family:inherit;font-size:var(--text-size-sm);cursor:pointer;background:0 0;padding:.6rem 1.2rem;font-weight:600}.cursor-pointer{cursor:pointer}.scroll-mt-20{scroll-margin-top:calc(var(--spacing) * 20)}.list-none{list-style-type:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.content-between{align-content:space-between}.content-start{align-content:flex-start}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-items-center{justify-items:center}.justify-items-start{justify-items:start}.gap-0{gap:0}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-8{gap:calc(var(--spacing) * 8)}.gap-10{gap:calc(var(--spacing) * 10)}.gap-12{gap:calc(var(--spacing) * 12)}.gap-16{gap:calc(var(--spacing) * 16)}.gap-24{gap:calc(var(--spacing) * 24)}.gap-x-24{column-gap:calc(var(--spacing) * 24)}.gap-y-48{row-gap:calc(var(--spacing) * 48)}.self-start{align-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.card{border:.1rem solid var(--color-border-subtle);border-radius:var(--radius-md);background:var(--color-panel);-webkit-backdrop-filter:blur(.8rem);backdrop-filter:blur(.8rem);padding:1.6rem}.panel{border:.1rem solid var(--color-border-subtle);border-radius:var(--radius-md);background:var(--color-panel)}.rounded-\\[inherit\\]{border-radius:inherit}.rounded-full{border-radius:3.40282e38px}.rounded-md{border-radius:var(--radius-md)}.rounded-pill{border-radius:var(--radius-pill)}.rounded-sm{border-radius:var(--radius-sm)}.rounded-t-sm{border-top-left-radius:var(--radius-sm);border-top-right-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.tone-green{color:var(--color-green);border-color:var(--color-green)}@supports (color:color-mix(in lab, red, red)){.tone-green{border-color:color-mix(in srgb, var(--color-green) 35%, transparent)}}.tone-red{color:var(--color-red);border-color:var(--color-red)}@supports (color:color-mix(in lab, red, red)){.tone-red{border-color:color-mix(in srgb, var(--color-red) 45%, transparent)}}.tone-yellow{color:var(--color-amber);border-color:var(--color-amber)}@supports (color:color-mix(in lab, red, red)){.tone-yellow{border-color:color-mix(in srgb, var(--color-amber) 40%, transparent)}}.border-\\[var\\(--color-amber\\,\\#f59e0b\\)\\]{border-color:var(--color-amber,#f59e0b)}.border-border-faint{border-color:var(--color-border-faint)}.border-border-subtle{border-color:var(--color-border-subtle)}.border-white\\/6{border-color:#ffffff0f}@supports (color:color-mix(in lab, red, red)){.border-white\\/6{border-color:color-mix(in oklab, var(--color-white) 6%, transparent)}}.bg-\\[var\\(--color-amber-light\\,rgba\\(245\\,158\\,11\\,0\\.12\\)\\)\\]{background-color:var(--color-amber-light,#f59e0b1f)}.bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab, red, red)){.bg-black\\/20{background-color:color-mix(in oklab, var(--color-black) 20%, transparent)}}.bg-black\\/35{background-color:#00000059}@supports (color:color-mix(in lab, red, red)){.bg-black\\/35{background-color:color-mix(in oklab, var(--color-black) 35%, transparent)}}.bg-panel{background-color:var(--color-panel)}.bg-track{background-color:var(--color-track)}.p-0{padding:0}.p-12{padding:calc(var(--spacing) * 12)}.p-22{padding:calc(var(--spacing) * 22)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-10{padding-inline:calc(var(--spacing) * 10)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-16{padding-inline:calc(var(--spacing) * 16)}.px-20{padding-inline:calc(var(--spacing) * 20)}.py-0{padding-block:0}.py-4{padding-block:calc(var(--spacing) * 4)}.py-6{padding-block:calc(var(--spacing) * 6)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-10{padding-block:calc(var(--spacing) * 10)}.py-12{padding-block:calc(var(--spacing) * 12)}.pt-6{padding-top:calc(var(--spacing) * 6)}.pt-8{padding-top:calc(var(--spacing) * 8)}.pt-10{padding-top:calc(var(--spacing) * 10)}.pt-12{padding-top:calc(var(--spacing) * 12)}.pt-16{padding-top:calc(var(--spacing) * 16)}.pt-32{padding-top:calc(var(--spacing) * 32)}.pr-0{padding-right:0}.pr-9{padding-right:calc(var(--spacing) * 9)}.pb-16{padding-bottom:calc(var(--spacing) * 16)}.pb-32{padding-bottom:calc(var(--spacing) * 32)}.pb-56{padding-bottom:calc(var(--spacing) * 56)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-12{padding-left:calc(var(--spacing) * 12)}.pl-22{padding-left:calc(var(--spacing) * 22)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-\\[-0\\.1rem\\]{vertical-align:-.1rem}.font-mono{font-family:var(--font-mono)}.heading-1{letter-spacing:var(--tracking-tight);font-size:clamp(3.2rem,4vw,5.2rem);font-weight:800;line-height:.95}.eyebrow-1{font-size:var(--text-size-xs);letter-spacing:var(--tracking-wide);text-transform:uppercase;font-weight:700}.display-1{font-size:clamp(2.32rem,2vw,3.52rem);font-weight:800}.heading-4{font-size:2.08rem;font-weight:700}.body-1{font-size:var(--text-size-md)}.body-2{font-size:var(--text-size-sm)}.text-\\[1\\.4rem\\]{font-size:1.4rem}.leading-\\[1\\.2\\]{--tw-leading:1.2;line-height:1.2}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-none{--tw-leading:1;line-height:1}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.break-words{overflow-wrap:break-word}.whitespace-pre-wrap{white-space:pre-wrap}.num{color:var(--color-muted);font-variant-numeric:tabular-nums}.text-\\[var\\(--color-amber\\)\\]{color:var(--color-amber)}.text-muted{color:var(--color-muted)}.text-text{color:var(--color-text)}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.no-underline{text-decoration-line:none}.accent-\\[var\\(--color-blue\\,\\#0ea5e9\\)\\]{accent-color:var(--color-blue,#0ea5e9)}.shadow-\\[0_1\\.6rem_4\\.8rem_rgba\\(0\\,0\\,0\\,0\\.45\\)\\]{--tw-shadow:0 1.6rem 4.8rem var(--tw-shadow-color,#00000073);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.select-none{-webkit-user-select:none;user-select:none}.first\\:border-t-0:first-child{border-top-style:var(--tw-border-style);border-top-width:0}.first\\:pt-0:first-child{padding-top:0}@media (hover:hover){.hover\\:bg-white\\/6:hover{background-color:#ffffff0f}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-white\\/6:hover{background-color:color-mix(in oklab, var(--color-white) 6%, transparent)}}.hover\\:text-text:hover{color:var(--color-text)}}@media (width>=768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (width>=1024px){.lg\\:sticky{position:sticky}.lg\\:w-\\[min\\(100\\%\\,34rem\\)\\]{width:min(100%,34rem)}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:grid-cols-\\[22rem_minmax\\(0\\,1fr\\)\\]{grid-template-columns:22rem minmax(0,1fr)}.lg\\:flex-row{flex-direction:row}.lg\\:items-end{align-items:flex-end}.lg\\:items-start{align-items:flex-start}.lg\\:justify-items-end{justify-items:end}.lg\\:text-right{text-align:right}}.\\[\\&\\>\\*\\]\\:min-w-\\[130px\\]>*{min-width:130px}.\\[\\&\\>\\:first-child\\]\\:min-w-0>:first-child{min-width:0}.\\[\\&\\>\\:first-child\\]\\:flex-1>:first-child{flex:1}.\\[\\&\\>\\:first-child\\]\\:basis-240>:first-child{flex-basis:calc(var(--spacing) * 240)}.\\[\\&\\>svg\\]\\:size-14>svg{width:calc(var(--spacing) * 14);height:calc(var(--spacing) * 14)}}.language-groq .token.comment{color:#71717a}.language-groq .token.string{color:#86efac}.language-groq .token.number,.language-groq .token.boolean,.language-groq .token.null{color:#fcd34d}.language-groq .token.keyword-operator{color:#c4b5fd}.language-groq .token.function{color:#7dd3fc}.language-groq .token.namespace{color:#fdba74}.language-groq .token.variable,.language-groq .token.special-variable{color:#f9a8d4}.language-groq .token.wildcard{color:#f472b6}.language-groq .token.operator{color:#a1a1aa}.language-groq .token.spread,.language-groq .token.punctuation{color:#d4d4d8}:root{--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--text-size-xs:1.152rem;--text-size-sm:1.44rem;--text-size-md:1.52rem;--tracking-tight:.02em;--tracking-wide:.0275em;--accent:#0ea5e9}html{font-size:62.5%}*{box-sizing:border-box}body{min-height:100vh;font-family:var(--font-sans);font-size:var(--text-size-md);color:var(--color-text);background:#101011;margin:0}h3{margin:0}code,pre{font-family:var(--font-mono)}.btn:hover{border-color:var(--color-border-faint);background:#ffffff0a}.btn-ghost:hover,.btn-ghost-sm:hover{color:var(--color-text);background:#ffffff0f}.btn-pill:hover{color:var(--color-text);background:#ffffff14}.btn-tab:hover{color:var(--color-text);background:#ffffff0f}.btn-tab[aria-selected=true]{border-color:var(--color-blue)}@supports (color:color-mix(in lab, red, red)){.btn-tab[aria-selected=true]{border-color:color-mix(in srgb, var(--color-blue) 45%, transparent)}}.btn-tab[aria-selected=true]{color:var(--color-blue);background:#0ea5e91f}.btn-accent:hover{background:#0ea5e933}.dialog::backdrop{-webkit-backdrop-filter:blur(.2rem);backdrop-filter:blur(.2rem);background:#0000008c}.copy-toast{z-index:9999;border-radius:var(--radius-pill);border:.1rem solid var(--color-border-faint);color:var(--color-text);font-size:var(--text-size-sm);opacity:0;pointer-events:none;background:#18181b;margin:0;padding:.8rem 1.6rem;font-weight:500;transition:opacity .2s,transform .2s;position:fixed;bottom:2.4rem;left:50%;transform:translate(-50%)translateY(1rem);box-shadow:0 .4rem 1.6rem #00000059}.copy-toast--visible{opacity:1;transform:translate(-50%)translateY(0)}.btn .btn-icon{flex-shrink:0;justify-content:center;align-items:center;line-height:1;display:inline-flex}.btn .btn-icon svg{width:1.6rem;height:1.6rem}.btn-ghost .btn-icon svg,.btn-ghost-sm .btn-icon svg,.btn-pill .btn-icon svg{width:1.4rem;height:1.4rem}.btn-label{line-height:1}.data-table-wrap{border-radius:var(--radius-sm);border:.1rem solid var(--color-border-subtle);max-height:42rem;margin-top:1.2rem;overflow:auto}.data-table{border-collapse:collapse;width:100%}.data-table th,.data-table td{text-align:left;vertical-align:top;border-bottom:.1rem solid #ffffff12;padding:1rem 1.2rem}.data-table th{z-index:2;color:var(--color-muted);-webkit-backdrop-filter:blur(1.2rem);backdrop-filter:blur(1.2rem);background:#0c0c10f5;font-weight:600;position:sticky;top:0}.endpoint-minor-details{border-radius:inherit}.endpoint-minor-body{border-top:.1rem solid #ffffff12}.endpoint-minor-summary{cursor:pointer;grid-template-columns:minmax(0,1fr) 10rem 8rem;align-items:center;gap:1.6rem;padding:1rem 1.2rem;list-style:none;display:grid}.endpoint-minor-summary::-webkit-details-marker{display:none}.endpoint-minor-summary:before{content:\"▸\";color:var(--color-muted);margin-right:.4rem}.endpoint-minor-details[open] .endpoint-minor-summary:before{content:\"▾\"}.endpoint-minor-body .data-table td{background:#ffffff05}.sort-header{color:inherit;font:inherit;font-weight:inherit;cursor:pointer;text-align:inherit;border-radius:var(--radius-sm);background:0 0;border:none;align-items:center;gap:.4rem;margin:0;padding:0;display:inline-flex}.sort-header:hover{color:var(--color-text)}.sort-header:focus-visible{outline:.2rem solid var(--accent);outline-offset:.2rem}.num .sort-header{justify-content:flex-start;width:100%}.sort-icon{opacity:.45;flex-shrink:0;display:inline-flex}.sort-icon svg{width:1.4rem;height:1.4rem}.sort-header[data-sort-direction=asc],.sort-header[data-sort-direction=desc]{color:var(--color-text)}.sort-header[data-sort-direction=asc] .sort-icon,.sort-header[data-sort-direction=desc] .sort-icon{opacity:1}.sort-header[data-sort-direction=asc] .sort-icon svg path:first-child,.sort-header[data-sort-direction=desc] .sort-icon svg path:last-child{stroke:var(--color-text)}.sort-header[data-sort-direction=asc] .sort-icon svg path:last-child,.sort-header[data-sort-direction=desc] .sort-icon svg path:first-child{opacity:.35}.priority-dot{background:currentColor;border-radius:50%;flex-shrink:0;width:.8rem;height:.8rem;box-shadow:0 0 1rem}.status-dot{background:currentColor;border-radius:50%;flex-shrink:0;width:1.2rem;height:1.2rem;box-shadow:0 0 1.6rem}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}",
	"._barColumn_s5la3_1:hover ._bar_s5la3_1,._barColumn_s5la3_1:focus-within ._bar_s5la3_1{opacity:.85}._barColumn_s5la3_1:after{content:attr(data-tip);z-index:2;border-radius:var(--radius-sm);border:.1rem solid var(--color-border-faint);color:var(--color-text);font-size:var(--text-size-xs);font-variant-numeric:tabular-nums;white-space:nowrap;opacity:0;pointer-events:none;background:#18181b;padding:.4rem .8rem;line-height:1.4;transition:opacity .15s,transform .15s;position:absolute;bottom:calc(100% - 2.6rem);left:50%;transform:translate(-50%)translateY(.4rem);box-shadow:0 .4rem 1.2rem #00000059}._barColumn_s5la3_1:hover:after,._barColumn_s5la3_1:focus-within:after{opacity:1;transform:translate(-50%)translateY(0)}._bar_s5la3_1{transition:opacity .15s}",
	"._wrap_rjk14_1{vertical-align:middle;display:inline-flex;position:relative}._wrap_rjk14_1:hover{z-index:3}._tooltip_rjk14_11{z-index:20;border:.1rem solid var(--color-border-faint);border-radius:var(--radius-sm);width:max-content;max-width:24rem;color:var(--color-text);font-size:var(--text-size-xs);text-align:center;white-space:normal;pointer-events:none;opacity:0;visibility:hidden;background:#18181b;padding:.5rem .8rem;font-weight:500;line-height:1.4;transition:opacity .15s,transform .15s,visibility .15s;position:absolute;left:50%;box-shadow:0 .4rem 1.2rem #0006}._placementTop_rjk14_37 ._tooltip_rjk14_11{bottom:calc(100% + .5rem);transform:translate(-50%)translateY(.3rem)}._placementBottom_rjk14_42 ._tooltip_rjk14_11{top:calc(100% + .5rem);transform:translate(-50%)translateY(-.3rem)}._placementTop_rjk14_37 ._tooltip_rjk14_11:after{content:\"\";border:.4rem solid #0000;border-top-color:#18181b;position:absolute;top:100%;left:50%;transform:translate(-50%)}._placementBottom_rjk14_42 ._tooltip_rjk14_11:after{content:\"\";border:.4rem solid #0000;border-bottom-color:#18181b;position:absolute;bottom:100%;left:50%;transform:translate(-50%)}._wrap_rjk14_1:hover ._tooltip_rjk14_11{opacity:1;visibility:visible;transform:translate(-50%)translateY(0)}",
	"._donut_1drq4_1:after{content:\"\";border:.1rem solid var(--color-border-subtle);background:#0a0a0cf2;border-radius:50%;position:absolute;inset:2.4rem}"
].join("\n");
//#endregion
//#region src/report/report-renderer.tsx
function or(e) {
	let t = Be(/* @__PURE__ */ J(Xn, { data: e })), n = He(e), r = He({
		filenameBase: qe(e.title),
		billable: e.markdown.billable,
		all: e.markdown.all
	});
	return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${e.title}</title>
  <style>${ar}</style>
</head>
<body>
${t}
  <script type="application/json" id="report-data">${n}<\/script>
  <script type="application/json" id="report-markdown">${r}<\/script>
  <script>${tr}<\/script>
  <script>${Zn}<\/script>
  <script>${ir}<\/script>
  <script>${$n}<\/script>
  <script>${rr}<\/script>
  <script>${er}<\/script>
  <script>${Qn}<\/script>
  <script>${nr}<\/script>
</body>
</html>`;
}
//#endregion
export { or as renderReportHtml };
