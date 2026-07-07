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
}(), ke, B, V, H, Ae = {}, je = [], U = Array.isArray, Me = Object.assign, W = "", Ne = "<!--$s-->", Pe = "<!--/$s-->";
function Fe(e) {
	return typeof e == "string" ? Ne + e + Pe : U(e) ? (e.unshift(Ne), e.push(Pe), e) : e && typeof e.then == "function" ? e.then(Fe) : Ne + e + Pe;
}
function Ie(e, n, r) {
	var i = t[le];
	t[le] = !0, ke = t.__b, B = t[se], V = t.__r, H = t.unmount;
	var a = b(S, null);
	a[ue] = [e];
	try {
		var o = G(e, n || Ae, !1, void 0, a, !1, r);
		return U(o) ? o.join(W) : o;
	} catch (e) {
		throw e.then ? Error("Use \"renderToStringAsync\" for suspenseful rendering.") : e;
	} finally {
		t[ce] && t[ce](e, je), t[le] = i, je.length = 0;
	}
}
function Le(e, t) {
	var n, r = e.type, i = !0;
	return e[L] ? (i = !1, (n = e[L]).state = n[R]) : n = new r(e.props, t), e[L] = n, n.__v = e, n.props = e.props, n.context = t, _e(n), n.state ??= Ae, n[R] ?? (n[R] = n.state), r.getDerivedStateFromProps ? n.state = Me({}, n.state, r.getDerivedStateFromProps(n.props, n.state)) : i && n.componentWillMount ? (n.componentWillMount(), n.state = n[R] === n.state ? n.state : n[R]) : !i && n.componentWillUpdate && n.componentWillUpdate(), V && V(e), n.render(n.props, n.state, t);
}
function G(e, n, r, i, a, o, s) {
	if (e == null || !0 === e || !1 === e || e === W) return W;
	var c = typeof e;
	if (c != "object") return c == "function" ? W : c == "string" ? xe(e) : e + W;
	if (U(e)) {
		var l, u = W;
		a[ue] = e;
		for (var d = e.length, f = 0; f < d; f++) {
			var p = e[f];
			if (p != null && typeof p != "boolean") {
				var m, h = G(p, n, r, i, a, o, s);
				typeof h == "string" ? u += h : (l ||= Array(d), u && l.push(u), u = W, U(h) ? (m = l).push.apply(m, h) : l.push(h));
			}
		}
		return l ? (u && l.push(u), l) : u;
	}
	if (e.constructor !== void 0) return W;
	e.__ = a, ke && ke(e);
	var g = e.type, _ = e.props;
	if (typeof g == "function") {
		var v, y, b, x = n;
		if (g === S) {
			if ("tpl" in _) {
				for (var C = W, w = 0; w < _.tpl.length; w++) if (C += _.tpl[w], _.exprs && w < _.exprs.length) {
					var T = _.exprs[w];
					if (T == null) continue;
					typeof T != "object" || T.constructor !== void 0 && !U(T) ? C += T : C += G(T, n, r, i, e, o, s);
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
			if (D) y = Le(e, x), b = e[L];
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
			if (b.getChildContext != null && (n = Me({}, n, b.getChildContext())), D && t.errorBoundaries && (g.getDerivedStateFromError || b.componentDidCatch)) {
				y = y != null && y.type === S && y.key == null && y.props.tpl == null ? y.props.children : y;
				try {
					return G(y, n, r, i, e, o, !1);
				} catch (t) {
					return g.getDerivedStateFromError && (b[R] = g.getDerivedStateFromError(t)), b.componentDidCatch && b.componentDidCatch(t, Ae), ye(b) ? (y = Le(e, n), (b = e[L]).getChildContext != null && (n = Me({}, n, b.getChildContext())), G(y = y != null && y.type === S && y.key == null && y.props.tpl == null ? y.props.children : y, n, r, i, e, o, s)) : W;
				} finally {
					B && B(e), H && H(e);
				}
			}
		}
		y = y != null && y.type === S && y.key == null && y.props.tpl == null ? y.props.children : y;
		try {
			var ee = G(y, n, r, i, e, o, s);
			return B && B(e), t.unmount && t.unmount(e), e._suspended ? Fe(ee) : ee;
		} catch (a) {
			if (!o && s && s.onError) {
				var k = function t(a) {
					return s.onError(a, e, function(e, a) {
						try {
							return G(e, n, r, i, a, o, s);
						} catch (e) {
							return t(e);
						}
					});
				}(a);
				if (k !== void 0) return k;
				var A = t.__e;
				return A && A(a, e), W;
			}
			if (!o || !a || typeof a.then != "function") throw a;
			return a.then(function t() {
				try {
					var a = G(y, n, r, i, e, o, s);
					return e._suspended ? Fe(a) : a;
				} catch (e) {
					if (!e || typeof e.then != "function") throw e;
					return e.then(t);
				}
			});
		}
	}
	var j, M = "<" + g, N = W;
	for (var P in _) {
		var F = _[P];
		if (typeof (F = Be(F) ? F.value : F) != "function" || P === "class" || P === "className") {
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
					pe.test(P) ? P = P.replace(pe, "$1:$2").toLowerCase() : P[4] !== "-" && !ge.has(P) || F == null ? r ? he.test(P) && (P = P === "panose1" ? "panose-1" : P.replace(/([A-Z])/g, "-$1").toLowerCase()) : me.test(P) && (P = P.toLowerCase()) : F += W;
			}
			F != null && !1 !== F && (M = !0 === F || F === W ? M + " " + P : M + " " + P + "=\"" + (typeof F == "string" ? xe(F) : F + W) + "\"");
		}
	}
	if (fe.test(g)) throw Error(g + " is not a valid HTML tag name in " + M + ">");
	if (N || (typeof j == "string" ? N = xe(j) : j != null && !1 !== j && !0 !== j && (N = G(j, n, g === "svg" || g !== "foreignObject" && r, i, e, o, s))), B && B(e), H && H(e), !N && Re.has(g)) return M + "/>";
	var I = "</" + g + ">", te = M + ">";
	return U(N) ? [te].concat(N, [I]) : typeof N == "string" ? te + N + I : [
		te,
		N,
		I
	];
}
var Re = /* @__PURE__ */ new Set([
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
]), ze = Ie;
function Be(e) {
	return typeof e == "object" && !!e && typeof e.peek == "function" && "value" in e;
}
//#endregion
//#region src/format.ts
function Ve(e) {
	return JSON.stringify(e).replaceAll("<", "\\u003c");
}
function K(e) {
	return Number(e).toLocaleString();
}
function q(e) {
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
function He(e) {
	return `${e.toFixed(1)}%`;
}
var Ue = {
	chips: "_chips_3e2ye_1",
	chip: "_chip_3e2ye_1"
}, We = 0;
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
		__v: --We,
		__i: -1,
		__u: 0,
		__source: a,
		__self: o
	};
	if (typeof e == "function" && (s = e.defaultProps)) for (c in s) l[c] === void 0 && (l[c] = s[c]);
	return t.vnode && t.vnode(u), u;
}
//#endregion
//#region src/report/components/Chips.tsx
var Ge = [
	"Offline HTML",
	"Streaming NDJSON",
	"Configurable sections",
	"Embedded JSON payload"
];
function Ke() {
	return /* @__PURE__ */ J("div", {
		class: Ue.chips,
		children: Ge.map((e) => /* @__PURE__ */ J("div", {
			class: Ue.chip,
			children: e
		}, e))
	});
}
var qe = {
	header: "_header_1ivgp_1",
	title: "_title_1ivgp_10",
	subtitle: "_subtitle_1ivgp_17",
	meta: "_meta_1ivgp_23"
};
//#endregion
//#region src/report/components/Header.tsx
function Je({ data: e }) {
	return /* @__PURE__ */ J("header", {
		class: qe.header,
		children: [/* @__PURE__ */ J("div", { children: [/* @__PURE__ */ J("h1", {
			class: qe.title,
			children: e.title
		}), /* @__PURE__ */ J("div", {
			class: qe.subtitle,
			children: [
				"Generated from ",
				e.sourcePath,
				". The report is self-contained and includes the normalized summary JSON payload inline."
			]
		})] }), /* @__PURE__ */ J("div", {
			class: qe.meta,
			children: [
				/* @__PURE__ */ J("div", { children: ["Generated ", e.generatedAt] }),
				/* @__PURE__ */ J("div", { children: ["Top N: ", String(e.config.topN)] }),
				/* @__PURE__ */ J("div", { children: e.config.sections.billableComparison ? "Billable comparison enabled" : "Billable comparison disabled" })
			]
		})]
	});
}
var Y = {
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
function Ye({ title: e, rows: t, accent: n }) {
	let r = t.reduce((e, t) => Math.max(e, t.responseBytes), 0);
	return /* @__PURE__ */ J("section", {
		class: "card",
		children: [/* @__PURE__ */ J("h3", { children: e }), /* @__PURE__ */ J("div", {
			class: Y.bars,
			children: t.map((e) => {
				let t = r > 0 ? e.responseBytes / r * 100 : 0;
				return /* @__PURE__ */ J("div", {
					class: Y.row,
					children: [/* @__PURE__ */ J("div", {
						class: Y.head,
						children: [/* @__PURE__ */ J("span", {
							class: Y.label,
							title: e.label,
							children: e.label
						}), /* @__PURE__ */ J("span", {
							class: Y.value,
							children: [
								q(e.responseBytes),
								" ",
								/* @__PURE__ */ J("span", {
									class: Y.meta,
									children: K(e.requests)
								})
							]
						})]
					}), /* @__PURE__ */ J("div", {
						class: Y.track,
						children: /* @__PURE__ */ J("div", {
							class: Y.fill,
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
//#region src/report/components/CountBars.tsx
function Xe({ title: e, rows: t, accent: n }) {
	let r = t.reduce((e, t) => Math.max(e, t.count), 0);
	return /* @__PURE__ */ J("section", {
		class: "card",
		children: [/* @__PURE__ */ J("h3", { children: e }), /* @__PURE__ */ J("div", {
			class: Y.bars,
			children: t.map((e) => {
				let t = r > 0 ? e.count / r * 100 : 0;
				return /* @__PURE__ */ J("div", {
					class: Y.row,
					children: [/* @__PURE__ */ J("div", {
						class: Y.head,
						children: [/* @__PURE__ */ J("span", {
							class: Y.label,
							children: e.label
						}), /* @__PURE__ */ J("span", {
							class: Y.value,
							children: K(e.count)
						})]
					}), /* @__PURE__ */ J("div", {
						class: Y.track,
						children: /* @__PURE__ */ J("div", {
							class: Y.fill,
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
var Ze = {
	wrap: "_wrap_15ign_1",
	table: "_table_15ign_9",
	labelCell: "_labelCell_15ign_32"
};
//#endregion
//#region src/report/components/DataTable.tsx
function X({ title: e, rows: t }) {
	return /* @__PURE__ */ J("section", {
		class: "card",
		children: [/* @__PURE__ */ J("h3", { children: e }), /* @__PURE__ */ J("div", {
			class: Ze.wrap,
			children: /* @__PURE__ */ J("table", {
				class: Ze.table,
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
				] }) }), /* @__PURE__ */ J("tbody", { children: t.map((e) => /* @__PURE__ */ J("tr", { children: [
					/* @__PURE__ */ J("td", {
						class: Ze.labelCell,
						title: e.label,
						children: e.label
					}),
					/* @__PURE__ */ J("td", {
						class: "num",
						children: q(e.responseBytes)
					}),
					/* @__PURE__ */ J("td", {
						class: "num",
						children: K(e.requests)
					})
				] }, e.label)) })]
			})
		})]
	});
}
//#endregion
//#region src/report/utils/styleForShare.ts
function Qe(e, t, n, r) {
	let i = e + t;
	if (i <= 0) return `background: ${r};`;
	let a = e / i * 100;
	return `background: conic-gradient(${n} 0 ${a}%, ${r} ${a}% 100%);`;
}
var Z = {
	wrap: "_wrap_83hxu_1",
	donut: "_donut_83hxu_8",
	center: "_center_83hxu_27",
	legend: "_legend_83hxu_41",
	swatch: "_swatch_83hxu_53"
};
//#endregion
//#region src/report/components/Donut.tsx
function $e({ title: e, primary: t, secondary: n, colors: r }) {
	let i = t.value + n.value, a = i > 0 ? t.value / i * 100 : 0;
	return /* @__PURE__ */ J("article", {
		class: "card",
		children: [/* @__PURE__ */ J("h3", { children: e }), /* @__PURE__ */ J("div", {
			class: Z.wrap,
			children: [/* @__PURE__ */ J("div", {
				class: Z.donut,
				style: Qe(t.value, n.value, r.primary, r.secondary),
				children: /* @__PURE__ */ J("div", {
					class: Z.center,
					children: [/* @__PURE__ */ J("strong", { children: q(i) }), /* @__PURE__ */ J("span", { children: He(a) })]
				})
			}), /* @__PURE__ */ J("div", {
				class: Z.legend,
				children: [/* @__PURE__ */ J("div", { children: [
					/* @__PURE__ */ J("span", {
						class: Z.swatch,
						style: { background: r.primary }
					}),
					t.label,
					" ",
					/* @__PURE__ */ J("strong", { children: q(t.value) })
				] }), /* @__PURE__ */ J("div", { children: [
					/* @__PURE__ */ J("span", {
						class: Z.swatch,
						style: { background: r.secondary }
					}),
					n.label,
					" ",
					/* @__PURE__ */ J("strong", { children: q(n.value) })
				] })]
			})]
		})]
	});
}
var et = {
	metric: "_metric_ouiq2_1",
	label: "_label_ouiq2_12",
	value: "_value_ouiq2_19",
	note: "_note_ouiq2_25"
};
//#endregion
//#region src/report/components/Metric.tsx
function Q({ label: e, value: t, note: n }) {
	return /* @__PURE__ */ J("article", {
		class: et.metric,
		children: [
			/* @__PURE__ */ J("div", {
				class: et.label,
				children: e
			}),
			/* @__PURE__ */ J("div", {
				class: et.value,
				children: t
			}),
			n ? /* @__PURE__ */ J("div", {
				class: et.note,
				children: n
			}) : null
		]
	});
}
var $ = {
	section: "_section_7xqrt_1",
	viewGrid: "_viewGrid_7xqrt_23",
	grid2: "_grid2_7xqrt_30",
	stack: "_stack_7xqrt_43",
	sectionTitle: "_sectionTitle_7xqrt_48"
};
//#endregion
//#region src/report/components/ViewSection.tsx
function tt({ view: e, palette: t, sections: n }) {
	let [r, i, a, o, s, c] = t, l = e.firstTimestamp && e.lastTimestamp ? `${e.firstTimestamp} → ${e.lastTimestamp}` : "No timestamps found";
	return /* @__PURE__ */ J("details", {
		class: $.section,
		open: !0,
		children: [
			/* @__PURE__ */ J("summary", { children: e.label }),
			/* @__PURE__ */ J("div", {
				class: $.viewGrid,
				children: [
					/* @__PURE__ */ J(Q, {
						label: "Requests",
						value: K(e.requests),
						note: l
					}),
					/* @__PURE__ */ J(Q, {
						label: "Bandwidth",
						value: q(e.responseBytes),
						note: "Response size total"
					}),
					/* @__PURE__ */ J(Q, {
						label: "Request bytes",
						value: q(e.requestBytes),
						note: "Inbound payload total"
					}),
					/* @__PURE__ */ J(Q, {
						label: "Studio",
						value: q(e.studio.responseBytes),
						note: `${K(e.studio.requests)} requests`
					}),
					/* @__PURE__ */ J(Q, {
						label: "Billable",
						value: q(e.nonStudio.responseBytes),
						note: `${K(e.nonStudio.requests)} requests`
					}),
					/* @__PURE__ */ J($e, {
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
							primary: r,
							secondary: i
						}
					})
				]
			}),
			/* @__PURE__ */ J("div", {
				class: $.grid2,
				children: [/* @__PURE__ */ J("div", {
					class: $.stack,
					children: [
						/* @__PURE__ */ J("div", {
							class: $.sectionTitle,
							children: "Charts"
						}),
						/* @__PURE__ */ J("div", {
							class: $.grid2,
							children: [n.domain ? /* @__PURE__ */ J(Ye, {
								title: "Top domains",
								rows: e.byDomain,
								accent: r
							}) : null, n.endpoint ? /* @__PURE__ */ J(Ye, {
								title: "Top endpoints",
								rows: e.byEndpoint,
								accent: i
							}) : null]
						}),
						/* @__PURE__ */ J("div", {
							class: $.grid2,
							children: [n.date ? /* @__PURE__ */ J(Ye, {
								title: "Daily bandwidth",
								rows: e.byDate,
								accent: a
							}) : null, n.hour ? /* @__PURE__ */ J(Ye, {
								title: "Hourly bandwidth",
								rows: e.byHour,
								accent: o
							}) : null]
						}),
						/* @__PURE__ */ J("div", {
							class: $.grid2,
							children: [n.status ? /* @__PURE__ */ J(Xe, {
								title: "Response codes",
								rows: e.byStatus,
								accent: s
							}) : null, n.histogram ? /* @__PURE__ */ J(Xe, {
								title: "Response size buckets",
								rows: e.responseSizeHistogram,
								accent: c
							}) : null]
						})
					]
				}), /* @__PURE__ */ J("div", {
					class: $.stack,
					children: [
						/* @__PURE__ */ J("div", {
							class: $.sectionTitle,
							children: "Top lists"
						}),
						n.urls ? /* @__PURE__ */ J(X, {
							title: "Top URLs",
							rows: e.byUrl
						}) : null,
						n.referers ? /* @__PURE__ */ J(X, {
							title: "Top referers",
							rows: e.byReferer
						}) : null,
						n.userAgents ? /* @__PURE__ */ J(X, {
							title: "Top user agents",
							rows: e.byUserAgent
						}) : null,
						n.ips ? /* @__PURE__ */ J(X, {
							title: "Top IPs",
							rows: e.byIp
						}) : null
					]
				})]
			})
		]
	});
}
var nt = {
	page: "_page_1qr8x_1",
	footer: "_footer_1qr8x_7"
};
//#endregion
//#region src/report/ReportApp.tsx
function rt({ data: e }) {
	let { palette: t } = e.config, n = {
		"--chart-1": t[0],
		"--chart-2": t[1],
		"--chart-3": t[2],
		"--chart-4": t[3],
		"--chart-5": t[4],
		"--chart-6": t[5],
		"--chart-7": t[6]
	};
	return /* @__PURE__ */ J("main", {
		class: nt.page,
		style: n,
		children: [
			/* @__PURE__ */ J(Je, { data: e }),
			/* @__PURE__ */ J(Ke, {}),
			/* @__PURE__ */ J(tt, {
				view: e.all,
				palette: t,
				sections: e.config.sections
			}),
			e.config.sections.billableComparison ? /* @__PURE__ */ J(tt, {
				view: e.billable,
				palette: t,
				sections: e.config.sections
			}) : null,
			/* @__PURE__ */ J("div", {
				class: nt.footer,
				children: [
					"Raw report payload is embedded in ",
					/* @__PURE__ */ J("code", { children: "<script type=\"application/json\">" }),
					" for downstream automation."
				]
			})
		]
	});
}
//#endregion
//#region src/report/styles/collect-css.ts
var it = [
	"html{font-size:62.5%}:root{--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--bg:#09090b;--panel:#18181be6;--panel-border:#3f3f46e6;--text:#f4f4f5;--muted:#a1a1aa;--radius-lg:2.4rem;--radius-md:2rem;--radius-sm:1.6rem;--radius-pill:99.9rem;--border-subtle:#ffffff14;--border-faint:#ffffff1f;--track-bg:#ffffff14;--font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace}*{box-sizing:border-box}body{min-height:100vh;font-family:var(--font-sans);color:var(--text);background:radial-gradient(circle at 0 0,#0ea5e929,#0000 30%),radial-gradient(circle at 85% 15%,#a855f724,#0000 28%),linear-gradient(#050507,#0d0d12 40%,#101016);margin:0}h3{margin:0}.num{color:var(--muted);font-variant-numeric:tabular-nums}code,pre{font-family:var(--font-mono)}.card{border:.1rem solid var(--border-subtle);border-radius:var(--radius-md);background:var(--panel);-webkit-backdrop-filter:blur(.8rem);backdrop-filter:blur(.8rem);padding:1.6rem}",
	"._page_1qr8x_1{max-width:144rem;margin:0 auto;padding:3.2rem 2rem 5.6rem}._footer_1qr8x_7{color:var(--muted);margin-top:2.4rem;font-size:1.44rem}",
	"._header_1ivgp_1{flex-wrap:wrap;justify-content:space-between;align-items:end;gap:1.6rem;margin-bottom:2.4rem;display:flex}._title_1ivgp_10{letter-spacing:-.05em;margin:0;font-size:clamp(3.2rem,4vw,5.2rem);line-height:.95}._subtitle_1ivgp_17{color:var(--muted);max-width:72ch;margin-top:1rem}._meta_1ivgp_23{text-align:right;color:var(--muted);justify-items:end;gap:.8rem;font-size:1.52rem;display:grid}@media (width<=110rem){._meta_1ivgp_23{text-align:left;justify-items:start}._header_1ivgp_1{align-items:start}}",
	"._chips_3e2ye_1{flex-wrap:wrap;gap:1rem;margin:2rem 0 2.8rem;display:flex}._chip_3e2ye_1{border:.1rem solid var(--border-faint);border-radius:var(--radius-pill);color:var(--text);background:#ffffff0a;padding:.8rem 1.2rem;font-size:1.44rem}",
	"._section_7xqrt_1{border:.1rem solid var(--panel-border);border-radius:var(--radius-lg);background:linear-gradient(#18181beb,#111117eb);margin-bottom:2.4rem;overflow:clip;box-shadow:0 2rem 6rem #0003}._section_7xqrt_1>summary{cursor:pointer;border-bottom:.1rem solid var(--border-subtle);padding:1.8rem 2rem;font-size:1.92rem;font-weight:700;list-style:none}._section_7xqrt_1>summary::-webkit-details-marker{display:none}._viewGrid_7xqrt_23{grid-template-columns:repeat(auto-fit,minmax(18rem,1fr));gap:1.6rem;padding:2rem;display:grid}._grid2_7xqrt_30{grid-template-columns:repeat(2,minmax(0,1fr));gap:1.6rem;padding:0 2rem 2rem;display:grid}@media (width<=110rem){._grid2_7xqrt_30{grid-template-columns:1fr}}._stack_7xqrt_43{gap:1.6rem;display:grid}._sectionTitle_7xqrt_48{color:var(--muted);text-transform:uppercase;letter-spacing:.12em;margin:.8rem 0 -.4rem;padding-left:.4rem;font-size:1.184rem}",
	"._metric_ouiq2_1{border:.1rem solid var(--border-subtle);border-radius:var(--radius-md);background:var(--panel);-webkit-backdrop-filter:blur(.8rem);backdrop-filter:blur(.8rem);align-content:space-between;min-height:12rem;padding:1.6rem;display:grid}._label_ouiq2_12{text-transform:uppercase;letter-spacing:.1em;color:var(--muted);font-size:1.152rem}._value_ouiq2_19{margin-top:1rem;font-size:clamp(2.32rem,2vw,3.52rem);font-weight:800}._note_ouiq2_25{color:var(--muted);margin-top:.8rem;font-size:1.472rem}",
	"._wrap_83hxu_1{justify-items:center;gap:1.6rem;margin-top:1.2rem;display:grid}._donut_83hxu_8{border-radius:50%;place-items:center;width:18rem;height:18rem;padding:2.2rem;display:grid;position:relative}._donut_83hxu_8:after{content:\"\";border:.1rem solid var(--border-subtle);background:#0a0a0cf2;border-radius:50%;position:absolute;inset:2.4rem}._center_83hxu_27{z-index:1;text-align:center;justify-items:center;gap:.4rem;font-size:1.52rem;display:grid;position:relative}._center_83hxu_27 strong{font-size:2.08rem}._legend_83hxu_41{width:100%;color:var(--muted);gap:1rem;font-size:1.472rem;display:grid}._legend_83hxu_41 strong{color:var(--text)}._swatch_83hxu_53{border-radius:var(--radius-pill);vertical-align:-.1rem;width:1.1rem;height:1.1rem;margin-right:.8rem;display:inline-block}",
	"._bars_10ft9_1{gap:1rem;margin-top:1.2rem;display:grid}._row_10ft9_7{gap:.6rem;display:grid}._head_10ft9_12{justify-content:space-between;align-items:baseline;gap:1.6rem;display:flex}._label_10ft9_19{text-overflow:ellipsis;white-space:nowrap;min-width:0;color:var(--text);overflow:hidden}._value_10ft9_27,._meta_10ft9_32{color:var(--muted);font-variant-numeric:tabular-nums}._track_10ft9_37{border-radius:var(--radius-pill);background:var(--track-bg);width:100%;height:1rem;overflow:hidden}._fill_10ft9_45{border-radius:inherit;height:100%}",
	"._wrap_15ign_1{border-radius:var(--radius-sm);border:.1rem solid var(--border-subtle);max-height:42rem;margin-top:1.2rem;overflow:auto}._table_15ign_9{border-collapse:collapse;width:100%;font-size:1.472rem}._table_15ign_9 th,._table_15ign_9 td{text-align:left;vertical-align:top;border-bottom:.1rem solid #ffffff12;padding:1rem 1.2rem}._table_15ign_9 th{color:var(--muted);-webkit-backdrop-filter:blur(1.2rem);backdrop-filter:blur(1.2rem);background:#0c0c10f5;font-weight:600;position:sticky;top:0}._labelCell_15ign_32{text-overflow:ellipsis;white-space:nowrap;max-width:52rem;overflow:hidden}"
].join("\n");
//#endregion
//#region src/report/report-renderer.tsx
function at(e) {
	let t = ze(/* @__PURE__ */ J(rt, { data: e })), n = Ve(e);
	return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${e.title}</title>
  <style>${it}</style>
</head>
<body>
${t}
  <script type="application/json" id="report-data">${n}<\/script>
</body>
</html>`;
}
//#endregion
export { at as renderReportHtml };
