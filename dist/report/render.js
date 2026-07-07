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
}) : a, n)), l, u, d, f, p, m, h, g, _, v, y, b, x, S, C = {}, w = [], ee = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, T = Array.isArray;
function te(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function ne(e) {
	e && e.parentNode && e.parentNode.removeChild(e);
}
function E(e, t, n) {
	var r, i, a, o = {};
	for (a in t) a == "key" ? r = t[a] : a == "ref" ? i = t[a] : o[a] = t[a];
	if (arguments.length > 2 && (o.children = arguments.length > 3 ? l.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) o[a] === void 0 && (o[a] = e.defaultProps[a]);
	return D(e, o, r, i, null);
}
function D(e, t, n, r, i) {
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
function re(e) {
	return e.children;
}
function O(e, t) {
	this.props = e, this.context = t;
}
function k(e, t) {
	if (t == null) return e.__ ? k(e.__, e.__i + 1) : null;
	for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? k(e) : null;
}
function ie(e) {
	if (e.__P && e.__d) {
		var t = e.__v, n = t.__e, r = [], i = [], a = te({}, t);
		a.__v = t.__v + 1, u.vnode && u.vnode(a), pe(e.__P, a, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, r, n ?? k(t), !!(32 & t.__u), i), a.__v = t.__v, a.__.__k[a.__i] = a, he(r, a, i), t.__e = t.__ = null, a.__e != n && A(a);
	}
}
function A(e) {
	if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
		if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
	}), A(e);
}
function j(e) {
	(!e.__d && (e.__d = !0) && f.push(e) && !ae.__r++ || p != u.debounceRendering) && ((p = u.debounceRendering) || m)(ae);
}
function ae() {
	try {
		for (var e, t = 1; f.length;) f.length > t && f.sort(h), e = f.shift(), t = f.length, ie(e);
	} finally {
		f.length = ae.__r = 0;
	}
}
function oe(e, t, n, r, i, a, o, s, c, l, u) {
	var d, f, p, m, h, g, _, v = r && r.__k || w, y = t.length;
	for (c = se(n, t, v, c, y), d = 0; d < y; d++) (p = n.__k[d]) != null && (f = p.__i != -1 && v[p.__i] || C, p.__i = d, g = pe(e, p, f, i, a, o, s, c, l, u), m = p.__e, p.ref && f.ref != p.ref && (f.ref && ve(f.ref, null, p), u.push(p.ref, p.__c || m, p)), h == null && m != null && (h = m), (_ = !!(4 & p.__u)) || f.__k === p.__k ? (c = ce(p, c, e, _), _ && f.__e && (f.__e = null)) : typeof p.type == "function" && g !== void 0 ? c = g : m && (c = m.nextSibling), p.__u &= -7);
	return n.__e = h, c;
}
function se(e, t, n, r, i) {
	var a, o, s, c, l, u = n.length, d = u, f = 0;
	for (e.__k = Array(i), a = 0; a < i; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = e.__k[a] = D(null, o, null, null, null) : T(o) ? o = e.__k[a] = D(re, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = e.__k[a] = D(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : e.__k[a] = o, c = a + f, o.__ = e, o.__b = e.__b + 1, s = null, (l = o.__i = le(o, n, c, d)) != -1 && (d--, (s = n[l]) && (s.__u |= 2)), s == null || s.__v == null ? (l == -1 && (i > u ? f-- : i < u && f++), typeof o.type != "function" && (o.__u |= 4)) : l != c && (l == c - 1 ? f-- : l == c + 1 ? f++ : (l > c ? f-- : f++, o.__u |= 4))) : e.__k[a] = null;
	if (d) for (a = 0; a < u; a++) (s = n[a]) != null && !(2 & s.__u) && (s.__e == r && (r = k(s)), ye(s, s));
	return r;
}
function ce(e, t, n, r) {
	var i, a;
	if (typeof e.type == "function") {
		for (i = e.__k, a = 0; i && a < i.length; a++) i[a] && (i[a].__ = e, t = ce(i[a], t, n, r));
		return t;
	}
	e.__e != t && (r && (t && e.type && !t.parentNode && (t = k(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
	do
		t &&= t.nextSibling;
	while (t != null && t.nodeType == 8);
	return t;
}
function le(e, t, n, r) {
	var i, a, o, s = e.key, c = e.type, l = t[n], u = l != null && (2 & l.__u) == 0;
	if (l === null && s == null || u && s == l.key && c == l.type) return n;
	if (r > +!!u) {
		for (i = n - 1, a = n + 1; i >= 0 || a < t.length;) if ((l = t[o = i >= 0 ? i-- : a++]) != null && !(2 & l.__u) && s == l.key && c == l.type) return o;
	}
	return -1;
}
function ue(e, t, n) {
	t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || ee.test(t) ? n : n + "px";
}
function de(e, t, n, r, i) {
	var a, o;
	n: if (t == "style") if (typeof n == "string") e.style.cssText = n;
	else {
		if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || ue(e.style, t, "");
		if (n) for (t in n) r && n[t] == r[t] || ue(e.style, t, n[t]);
	}
	else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(y, "$1")), o = t.toLowerCase(), t = o in e || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2), e.l ||= {}, e.l[t + a] = n, n ? r ? n[v] = r[v] : (n[v] = b, e.addEventListener(t, a ? S : x, a)) : e.removeEventListener(t, a ? S : x, a);
	else {
		if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
			e[t] = n ?? "";
			break n;
		} catch {}
		typeof n == "function" || (n == null || !1 === n && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
	}
}
function fe(e) {
	return function(t) {
		if (this.l) {
			var n = this.l[t.type + e];
			if (t[_] == null) t[_] = b++;
			else if (t[_] < n[v]) return;
			return n(u.event ? u.event(t) : t);
		}
	};
}
function pe(e, t, n, r, i, a, o, s, c, l) {
	var d, f, p, m, h, g, _, v, y, b, x, S, C, ee, E, D, k = t.type;
	if (t.constructor !== void 0) return null;
	128 & n.__u && (c = !!(32 & n.__u), a = [s = t.__e = n.__e]), (d = u.__b) && d(t);
	n: if (typeof k == "function") {
		f = o.length;
		try {
			if (y = t.props, b = k.prototype && k.prototype.render, x = (d = k.contextType) && r[d.__c], S = d ? x ? x.props.value : d.__ : r, n.__c ? v = (p = t.__c = n.__c).__ = p.__E : (b ? t.__c = p = new k(y, S) : (t.__c = p = new O(y, S), p.constructor = k, p.render = be), x && x.sub(p), p.state ||= {}, p.__n = r, m = p.__d = !0, p.__h = [], p._sb = []), b && p.__s == null && (p.__s = p.state), b && k.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = te({}, p.__s)), te(p.__s, k.getDerivedStateFromProps(y, p.__s))), h = p.props, g = p.state, p.__v = t, m) b && k.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), b && p.componentDidMount != null && p.__h.push(p.componentDidMount);
			else {
				if (b && k.getDerivedStateFromProps == null && y !== h && p.componentWillReceiveProps != null && p.componentWillReceiveProps(y, S), t.__v == n.__v || !p.__e && p.shouldComponentUpdate != null && !1 === p.shouldComponentUpdate(y, p.__s, S)) {
					t.__v != n.__v && (p.props = y, p.state = p.__s, p.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(e) {
						e && (e.__ = t);
					}), w.push.apply(p.__h, p._sb), p._sb = [], p.__h.length && o.push(p);
					break n;
				}
				p.componentWillUpdate != null && p.componentWillUpdate(y, p.__s, S), b && p.componentDidUpdate != null && p.__h.push(function() {
					p.componentDidUpdate(h, g, _);
				});
			}
			if (p.context = S, p.props = y, p.__P = e, p.__e = !1, C = u.__r, ee = 0, b) p.state = p.__s, p.__d = !1, C && C(t), d = p.render(p.props, p.state, p.context), w.push.apply(p.__h, p._sb), p._sb = [];
			else do
				p.__d = !1, C && C(t), d = p.render(p.props, p.state, p.context), p.state = p.__s;
			while (p.__d && ++ee < 25);
			p.state = p.__s, p.getChildContext != null && (r = te(te({}, r), p.getChildContext())), b && !m && p.getSnapshotBeforeUpdate != null && (_ = p.getSnapshotBeforeUpdate(h, g)), E = d != null && d.type === re && d.key == null ? ge(d.props.children) : d, s = oe(e, T(E) ? E : [E], t, n, r, i, a, o, s, c, l), p.base = t.__e, t.__u &= -161, p.__h.length && o.push(p), v && (p.__E = p.__ = null);
		} catch (e) {
			if (o.length = f, t.__v = null, c || a != null) {
				if (e.then) {
					for (t.__u |= c ? 160 : 128; s && s.nodeType == 8 && s.nextSibling;) s = s.nextSibling;
					a != null && (a[a.indexOf(s)] = null), t.__e = s;
				} else if (a != null) for (D = a.length; D--;) ne(a[D]);
			} else t.__e = n.__e;
			t.__k ??= n.__k || [], e.then || me(t), u.__e(e, t, n);
		}
	} else a == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = _e(n.__e, t, n, r, i, a, o, c, l);
	return (d = u.diffed) && d(t), 128 & t.__u ? void 0 : s;
}
function me(e) {
	e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(me));
}
function he(e, t, n) {
	for (var r = 0; r < n.length; r++) ve(n[r], n[++r], n[++r]);
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
function ge(e) {
	return typeof e != "object" || !e || e.__b > 0 ? e : T(e) ? e.map(ge) : e.constructor === void 0 ? te({}, e) : null;
}
function _e(e, t, n, r, i, a, o, s, c) {
	var d, f, p, m, h, g, _, v = n.props || C, y = t.props, b = t.type;
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
		for (d in v) h = v[d], d == "dangerouslySetInnerHTML" ? p = h : d == "children" || d in y || d == "value" && "defaultValue" in y || d == "checked" && "defaultChecked" in y || de(e, d, null, h, i);
		for (d in y) h = y[d], d == "children" ? m = h : d == "dangerouslySetInnerHTML" ? f = h : d == "value" ? g = h : d == "checked" ? _ = h : s && typeof h != "function" || v[d] === h || de(e, d, h, v[d], i);
		if (f) s || p && (f.__html == p.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
		else if (p && (e.innerHTML = ""), oe(t.type == "template" ? e.content : e, T(m) ? m : [m], t, n, r, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, o, a ? a[0] : n.__k && k(n, 0), s, c), a != null) for (d = a.length; d--;) ne(a[d]);
		s && b != "textarea" || (d = "value", b == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[d] || b == "progress" && !g || b == "option" && g != v[d]) && de(e, d, g, v[d], i), d = "checked", _ != null && _ != e[d] && de(e, d, _, v[d], i));
	}
	return e;
}
function ve(e, t, n) {
	try {
		if (typeof e == "function") {
			var r = typeof e.__u == "function";
			r && e.__u(), r && t == null || (e.__u = e(t));
		} else e.current = t;
	} catch (e) {
		u.__e(e, n);
	}
}
function ye(e, t, n) {
	var r, i;
	if (u.unmount && u.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || ve(r, null, t)), (r = e.__c) != null) {
		if (r.componentWillUnmount) try {
			r.componentWillUnmount();
		} catch (e) {
			u.__e(e, t);
		}
		r.base = r.__P = r.__n = null;
	}
	if (r = e.__k) for (i = 0; i < r.length; i++) r[i] && ye(r[i], t, n || typeof e.type != "function");
	n || ne(e.__e), e.__c = e.__ = e.__e = void 0;
}
function be(e, t, n) {
	return this.constructor(e, n);
}
l = w.slice, u = { __e: function(e, t, n, r) {
	for (var i, a, o; t = t.__;) if ((i = t.__c) && !i.__) try {
		if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i;
	} catch (t) {
		e = t;
	}
	throw e;
} }, d = 0, O.prototype.setState = function(e, t) {
	var n = this.__s != null && this.__s != this.state ? this.__s : this.__s = te({}, this.state);
	typeof e == "function" && (e = e(te({}, n), this.props)), e && te(n, e), e != null && this.__v && (t && this._sb.push(t), j(this));
}, O.prototype.forceUpdate = function(e) {
	this.__v && (this.__e = !0, e && this.__h.push(e), j(this));
}, O.prototype.render = re, f = [], m = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, h = function(e, t) {
	return e.__v.__b - t.__v.__b;
}, ae.__r = 0, g = Math.random().toString(8), _ = "__d" + g, v = "__a" + g, y = /(PointerCapture)$|Capture$/i, b = 0, x = fe(!1), S = fe(!0);
//#endregion
//#region node_modules/preact-render-to-string/dist/index.module.js
var xe = "diffed", Se = "__c", Ce = "__s", we = "__c", Te = "__k", Ee = "__d", De = "__s", Oe = /[\s\n\\/='"\0<>]/, ke = /^(xlink|xmlns|xml)([A-Z])/, Ae = /^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/, je = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/, Me = /* @__PURE__ */ new Set(["draggable", "spellcheck"]);
function Ne(e) {
	e.__g === void 0 ? e[Ee] = !0 : e.__g |= 8;
}
function Pe(e) {
	e.__g === void 0 ? e[Ee] = !1 : e.__g &= -9;
}
function Fe(e) {
	return e.__g === void 0 ? !0 === e[Ee] : !!(8 & e.__g);
}
var Ie = /["&<]/;
function Le(e) {
	if (e.length === 0 || !1 === Ie.test(e)) return e;
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
var Re = {}, ze = /* @__PURE__ */ new Set(/* @__PURE__ */ "animation-iteration-count.border-image-outset.border-image-slice.border-image-width.box-flex.box-flex-group.box-ordinal-group.column-count.fill-opacity.flex.flex-grow.flex-negative.flex-order.flex-positive.flex-shrink.flood-opacity.font-weight.grid-column.grid-row.line-clamp.line-height.opacity.order.orphans.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-miterlimit.stroke-opacity.stroke-width.tab-size.widows.z-index.zoom".split(".")), Be = /[A-Z]/g;
function Ve(e) {
	var t = "";
	for (var n in e) {
		var r = e[n];
		if (r != null && r !== "") {
			var i = n[0] == "-" ? n : Re[n] || (Re[n] = n.replace(Be, "-$&").toLowerCase()), a = ";";
			typeof r != "number" || i.startsWith("--") || ze.has(i) || (a = "px;"), t = t + i + ":" + r + a;
		}
	}
	return t || void 0;
}
function He() {
	this.__d = !0;
}
function Ue(e, t) {
	return {
		__v: e,
		context: t,
		props: e.props,
		setState: He,
		forceUpdate: He,
		__d: !0,
		__h: []
	};
}
function We(e, t, n) {
	if (!e.s) {
		if (n instanceof Ge) {
			if (!n.s) return void (n.o = We.bind(null, e, t));
			1 & t && (t = n.s), n = n.v;
		}
		if (n && n.then) return void n.then(We.bind(null, e, t), We.bind(null, e, 2));
		e.s = t, e.v = n;
		let r = e.o;
		r && r(e);
	}
}
var Ge = /*#__PURE__*/ function() {
	function e() {}
	return e.prototype.then = function(t, n) {
		var r = new e(), i = this.s;
		if (i) {
			var a = 1 & i ? t : n;
			if (a) {
				try {
					We(r, 1, a(this.v));
				} catch (e) {
					We(r, 2, e);
				}
				return r;
			}
			return this;
		}
		return this.o = function(e) {
			try {
				var i = e.v;
				1 & e.s ? We(r, 1, t ? t(i) : i) : n ? We(r, 1, n(i)) : We(r, 2, i);
			} catch (e) {
				We(r, 2, e);
			}
		}, r;
	}, e;
}(), Ke, qe, Je, Ye, Xe = {}, Ze = [], Qe = Array.isArray, $e = Object.assign, M = "", et = "<!--$s-->", tt = "<!--/$s-->";
function nt(e) {
	return typeof e == "string" ? et + e + tt : Qe(e) ? (e.unshift(et), e.push(tt), e) : e && typeof e.then == "function" ? e.then(nt) : et + e + tt;
}
function rt(e, t, n) {
	var r = u[Ce];
	u[Ce] = !0, Ke = u.__b, qe = u[xe], Je = u.__r, Ye = u.unmount;
	var i = E(re, null);
	i[Te] = [e];
	try {
		var a = at(e, t || Xe, !1, void 0, i, !1, n);
		return Qe(a) ? a.join(M) : a;
	} catch (e) {
		throw e.then ? Error("Use \"renderToStringAsync\" for suspenseful rendering.") : e;
	} finally {
		u[Se] && u[Se](e, Ze), u[Ce] = r, Ze.length = 0;
	}
}
function it(e, t) {
	var n, r = e.type, i = !0;
	return e[we] ? (i = !1, (n = e[we]).state = n[De]) : n = new r(e.props, t), e[we] = n, n.__v = e, n.props = e.props, n.context = t, Ne(n), n.state ??= Xe, n[De] ?? (n[De] = n.state), r.getDerivedStateFromProps ? n.state = $e({}, n.state, r.getDerivedStateFromProps(n.props, n.state)) : i && n.componentWillMount ? (n.componentWillMount(), n.state = n[De] === n.state ? n.state : n[De]) : !i && n.componentWillUpdate && n.componentWillUpdate(), Je && Je(e), n.render(n.props, n.state, t);
}
function at(e, t, n, r, i, a, o) {
	if (e == null || !0 === e || !1 === e || e === M) return M;
	var s = typeof e;
	if (s != "object") return s == "function" ? M : s == "string" ? Le(e) : e + M;
	if (Qe(e)) {
		var c, l = M;
		i[Te] = e;
		for (var d = e.length, f = 0; f < d; f++) {
			var p = e[f];
			if (p != null && typeof p != "boolean") {
				var m, h = at(p, t, n, r, i, a, o);
				typeof h == "string" ? l += h : (c ||= Array(d), l && c.push(l), l = M, Qe(h) ? (m = c).push.apply(m, h) : c.push(h));
			}
		}
		return c ? (l && c.push(l), c) : l;
	}
	if (e.constructor !== void 0) return M;
	e.__ = i, Ke && Ke(e);
	var g = e.type, _ = e.props;
	if (typeof g == "function") {
		var v, y, b, x = t;
		if (g === re) {
			if ("tpl" in _) {
				for (var S = M, C = 0; C < _.tpl.length; C++) if (S += _.tpl[C], _.exprs && C < _.exprs.length) {
					var w = _.exprs[C];
					if (w == null) continue;
					typeof w != "object" || w.constructor !== void 0 && !Qe(w) ? S += w : S += at(w, t, n, r, e, a, o);
				}
				return S;
			}
			if ("UNSTABLE_comment" in _) return "<!--" + Le(_.UNSTABLE_comment) + "-->";
			y = _.children;
		} else {
			if ((v = g.contextType) != null) {
				var ee = t[v.__c];
				x = ee ? ee.props.value : v.__;
			}
			var T = g.prototype && typeof g.prototype.render == "function";
			if (T) y = it(e, x), b = e[we];
			else {
				e[we] = b = Ue(e, x);
				for (var te = 0; Fe(b) && te++ < 25;) {
					Pe(b), Je && Je(e);
					try {
						y = g.call(b, _, x);
					} catch (t) {
						throw a && t && typeof t.then == "function" && (e._suspended = !0), t;
					}
				}
				Ne(b);
			}
			if (b.getChildContext != null && (t = $e({}, t, b.getChildContext())), T && u.errorBoundaries && (g.getDerivedStateFromError || b.componentDidCatch)) {
				y = y != null && y.type === re && y.key == null && y.props.tpl == null ? y.props.children : y;
				try {
					return at(y, t, n, r, e, a, !1);
				} catch (i) {
					return g.getDerivedStateFromError && (b[De] = g.getDerivedStateFromError(i)), b.componentDidCatch && b.componentDidCatch(i, Xe), Fe(b) ? (y = it(e, t), (b = e[we]).getChildContext != null && (t = $e({}, t, b.getChildContext())), at(y = y != null && y.type === re && y.key == null && y.props.tpl == null ? y.props.children : y, t, n, r, e, a, o)) : M;
				} finally {
					qe && qe(e), Ye && Ye(e);
				}
			}
		}
		y = y != null && y.type === re && y.key == null && y.props.tpl == null ? y.props.children : y;
		try {
			var ne = at(y, t, n, r, e, a, o);
			return qe && qe(e), u.unmount && u.unmount(e), e._suspended ? nt(ne) : ne;
		} catch (i) {
			if (!a && o && o.onError) {
				var E = function i(s) {
					return o.onError(s, e, function(e, s) {
						try {
							return at(e, t, n, r, s, a, o);
						} catch (e) {
							return i(e);
						}
					});
				}(i);
				if (E !== void 0) return E;
				var D = u.__e;
				return D && D(i, e), M;
			}
			if (!a || !i || typeof i.then != "function") throw i;
			return i.then(function i() {
				try {
					var s = at(y, t, n, r, e, a, o);
					return e._suspended ? nt(s) : s;
				} catch (e) {
					if (!e || typeof e.then != "function") throw e;
					return e.then(i);
				}
			});
		}
	}
	var O, k = "<" + g, ie = M;
	for (var A in _) {
		var j = _[A];
		if (typeof (j = ct(j) ? j.value : j) != "function" || A === "class" || A === "className") {
			switch (A) {
				case "children":
					O = j;
					continue;
				case "key":
				case "ref":
				case "__self":
				case "__source": continue;
				case "htmlFor":
					if ("for" in _) continue;
					A = "for";
					break;
				case "className":
					if ("class" in _) continue;
					A = "class";
					break;
				case "defaultChecked":
					A = "checked";
					break;
				case "defaultSelected":
					A = "selected";
					break;
				case "defaultValue":
				case "value":
					switch (A = "value", g) {
						case "textarea":
							O = j;
							continue;
						case "select":
							r = j;
							continue;
						case "option": r != j || "selected" in _ || (k += " selected");
					}
					break;
				case "dangerouslySetInnerHTML":
					ie = j && j.__html;
					continue;
				case "style":
					typeof j == "object" && (j = Ve(j));
					break;
				case "acceptCharset":
					A = "accept-charset";
					break;
				case "httpEquiv":
					A = "http-equiv";
					break;
				default:
					if (Oe.test(A)) continue;
					ke.test(A) ? A = A.replace(ke, "$1:$2").toLowerCase() : A[4] !== "-" && !Me.has(A) || j == null ? n ? je.test(A) && (A = A === "panose1" ? "panose-1" : A.replace(/([A-Z])/g, "-$1").toLowerCase()) : Ae.test(A) && (A = A.toLowerCase()) : j += M;
			}
			j != null && !1 !== j && (k = !0 === j || j === M ? k + " " + A : k + " " + A + "=\"" + (typeof j == "string" ? Le(j) : j + M) + "\"");
		}
	}
	if (Oe.test(g)) throw Error(g + " is not a valid HTML tag name in " + k + ">");
	if (ie || (typeof O == "string" ? ie = Le(O) : O != null && !1 !== O && !0 !== O && (ie = at(O, t, g === "svg" || g !== "foreignObject" && n, r, e, a, o))), qe && qe(e), Ye && Ye(e), !ie && ot.has(g)) return k + "/>";
	var ae = "</" + g + ">", oe = k + ">";
	return Qe(ie) ? [oe].concat(ie, [ae]) : typeof ie == "string" ? oe + ie + ae : [
		oe,
		ie,
		ae
	];
}
var ot = /* @__PURE__ */ new Set([
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
]), st = rt;
function ct(e) {
	return typeof e == "object" && !!e && typeof e.peek == "function" && "value" in e;
}
//#endregion
//#region src/format.ts
function lt(e) {
	return JSON.stringify(e).replaceAll("<", "\\u003c");
}
function N(e) {
	return Number(e).toLocaleString();
}
function P(e) {
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
function ut(e) {
	return `${e.toFixed(1)}%`;
}
var dt = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric",
	year: "numeric",
	timeZone: "UTC"
});
function ft(e) {
	if (!e) return "";
	let t = new Date(e);
	return Number.isNaN(t.getTime()) ? "" : dt.format(t);
}
//#endregion
//#region src/ranked-row.ts
function pt(e) {
	return e.requests > 0 ? e.responseBytes / e.requests : 0;
}
//#endregion
//#region node_modules/ua-parser-js/src/main/ua-parser.mjs
var mt = "2.0.10", ht = 500, gt = "user-agent", _t = "", vt = "?", F = {
	FUNCTION: "function",
	OBJECT: "object",
	STRING: "string",
	UNDEFINED: "undefined"
}, yt = "browser", bt = "cpu", xt = "device", St = "engine", Ct = "os", wt = "result", I = "name", L = "type", R = "vendor", z = "version", B = "architecture", Tt = "major", V = "model", Et = "console", H = "mobile", U = "tablet", W = "smarttv", Dt = "wearable", Ot = "xr", kt = "embedded", At = "fetcher", jt = "inapp", Mt = "brands", Nt = "formFactors", Pt = "fullVersionList", Ft = "platform", It = "platformVersion", Lt = "bitness", Rt = "sec-ch-ua", zt = Rt + "-full-version-list", Bt = Rt + "-arch", Vt = Rt + "-" + Lt, Ht = Rt + "-form-factors", Ut = Rt + "-" + H, Wt = Rt + "-" + V, Gt = Rt + "-" + Ft, Kt = Gt + "-version", qt = [
	Mt,
	Pt,
	H,
	V,
	Ft,
	It,
	B,
	Nt,
	Lt
], Jt = "Amazon", Yt = "Apple", Xt = "ASUS", Zt = "BlackBerry", Qt = "Google", $t = "Huawei", en = "Lenovo", tn = "Honor", nn = "LG", rn = "Microsoft", an = "Motorola", on = "Nvidia", sn = "OnePlus", cn = "OPPO", ln = "Samsung", un = "Sharp", dn = "Sony", fn = "Xiaomi", pn = "Zebra", mn = "Chrome", hn = "Chromium", gn = "Chromecast", _n = "Edge", vn = "Firefox", yn = "Opera", bn = "Facebook", xn = "Sogou", Sn = "Mobile ", Cn = " Browser", wn = "Windows", Tn = typeof window !== F.UNDEFINED && window.navigator ? window.navigator : void 0, En = Tn && Tn.userAgentData ? Tn.userAgentData : void 0, Dn = function(e, t) {
	var n = {}, r = t;
	if (!An(t)) for (var i in r = {}, t) for (var a in t[i]) r[a] = t[i][a].concat(r[a] ? r[a] : []);
	for (var o in e) n[o] = r[o] && r[o].length % 2 == 0 ? r[o].concat(e[o]) : e[o];
	return n;
}, On = function(e) {
	for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
	return t;
}, kn = function(e, t) {
	if (typeof e === F.OBJECT && e.length > 0) {
		for (var n in e) if (Nn(t) == Nn(e[n])) return !0;
		return !1;
	}
	return jn(e) ? Nn(t) == Nn(e) : !1;
}, An = function(e, t) {
	for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? An(e[n]) : !1);
}, jn = function(e) {
	return typeof e === F.STRING;
}, Mn = function(e) {
	if (e) {
		for (var t = [], n = Fn(e).split(","), r = 0; r < n.length; r++) if (n[r].indexOf(";") > -1) {
			var i = Rn(n[r]).split(";v=");
			t[r] = {
				brand: i[0],
				version: i[1]
			};
		} else t[r] = Rn(n[r]);
		return t;
	}
}, Nn = function(e) {
	return jn(e) ? e.toLowerCase() : e;
}, Pn = function(e) {
	return jn(e) ? Ln(/[^\d\.]/g, e).split(".")[0] : void 0;
}, Fn = function(e) {
	return jn(e) ? Rn(Ln(/\\?\"/g, e), ht) : void 0;
}, In = function(e) {
	for (var t in e) if (e.hasOwnProperty(t)) {
		var n = e[t];
		typeof n == F.OBJECT && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0;
	}
	return this;
}, Ln = function(e, t) {
	return jn(t) ? t.replace(e, _t) : t;
}, Rn = function(e, t) {
	return e = Ln(/^\s\s*/, String(e)), typeof t === F.UNDEFINED ? e : e.substring(0, t);
}, zn = function(e, t) {
	if (!(!e || !t)) for (var n = 0, r, i, a, o, s, c; n < t.length && !s;) {
		var l = t[n], u = t[n + 1];
		for (r = i = 0; r < l.length && !s && l[r];) if (s = l[r++].exec(e), s) for (a = 0; a < u.length; a++) c = s[++i], o = u[a], typeof o === F.OBJECT && o.length > 0 ? o.length === 2 ? typeof o[1] == F.FUNCTION ? this[o[0]] = o[1].call(this, c) : this[o[0]] = o[1] : o.length >= 3 && (typeof o[1] === F.FUNCTION && !(o[1].exec && o[1].test) ? o.length > 3 ? this[o[0]] = c ? o[1].apply(this, o.slice(2)) : void 0 : this[o[0]] = c ? o[1].call(this, c, o[2]) : void 0 : o.length == 3 ? this[o[0]] = c ? c.replace(o[1], o[2]) : void 0 : o.length == 4 ? this[o[0]] = c ? o[3].call(this, c.replace(o[1], o[2])) : void 0 : o.length > 4 && (this[o[0]] = c ? o[3].apply(this, [c.replace(o[1], o[2])].concat(o.slice(4))) : void 0)) : this[o] = c || void 0;
		n += 2;
	}
}, Bn = function(e, t) {
	return t.test.test(e) ? t.ifTrue : t.ifFalse;
}, Vn = function(e, t) {
	for (var n in t) if (typeof t[n] === F.OBJECT && t[n].length > 0) {
		for (var r = 0; r < t[n].length; r++) if (kn(t[n][r], e)) return n === vt ? void 0 : n;
	} else if (kn(t[n], e)) return n === vt ? void 0 : n;
	return t.hasOwnProperty("*") ? t["*"] : e;
}, Hn = {
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
}, Un = {
	embedded: "Automotive",
	mobile: "Mobile",
	tablet: ["Tablet", "EInk"],
	smarttv: "TV",
	wearable: "Watch",
	xr: ["VR", "XR"],
	"?": ["Desktop", "Unknown"],
	"*": void 0
}, Wn = {
	Chrome: "Google Chrome",
	Edge: "Microsoft Edge",
	"Edge WebView2": "Microsoft Edge WebView2",
	"Chrome WebView": "Android WebView",
	"Chrome Headless": "HeadlessChrome",
	"Huawei Browser": "HuaweiBrowser",
	"MIUI Browser": "Miui Browser",
	"Opera Mobi": "OperaMobile",
	Yandex: "YaBrowser"
}, Gn = {
	browser: [
		[/\b(?:crmo|crios)\/([\w\.]+)/i],
		[z, [I, Sn + "Chrome"]],
		[/webview.+edge\/([\w\.]+)/i],
		[
			z,
			[I, _n + " WebView"],
			[L, jt]
		],
		[/edg(?:e|ios|a)?\/([\w\.]+)/i],
		[z, [I, "Edge"]],
		[
			/(opera mini)\/([-\w\.]+)/i,
			/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
			/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
		],
		[I, z],
		[/opios[\/ ]+([\w\.]+)/i],
		[z, [I, yn + " Mini"]],
		[/\bop(?:rg)?x\/([\w\.]+)/i],
		[z, [I, yn + " GX"]],
		[/\bopr\/([\w\.]+)/i],
		[z, [I, yn]],
		[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
		[z, [I, "Baidu"]],
		[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
		[z, [I, "Maxthon"]],
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
		[I, z],
		[/quark(?:pc)?\/([-\w\.]+)/i],
		[z, [I, "Quark"]],
		[/\bddg\/([\w\.]+)/i],
		[z, [I, "DuckDuckGo"]],
		[/(?:\buc? ?browser|(?:juc.+)ucweb| ucpc)[\/ ]?([\w\.]+)/i],
		[z, [I, "UCBrowser"]],
		[
			/microm.+\bqbcore\/([\w\.]+)/i,
			/\bqbcore\/([\w\.]+).+microm/i,
			/micromessenger\/([\w\.]+)/i
		],
		[z, [I, "WeChat"]],
		[/konqueror\/([\w\.]+)/i],
		[z, [I, "Konqueror"]],
		[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
		[z, [I, "IE"]],
		[/ya(?:search)?browser\/([\w\.]+)/i],
		[z, [I, "Yandex"]],
		[/slbrowser\/([\w\.]+)/i],
		[z, [I, "Smart " + en + Cn]],
		[/(av(?:ast|g|ira))\/([\w\.]+)/i],
		[[
			I,
			/(.+)/,
			"$1 Secure" + Cn
		], z],
		[/norton\/([\w\.]+)/i],
		[z, [I, "Norton Private" + Cn]],
		[/\bfocus\/([\w\.]+)/i],
		[z, [I, vn + " Focus"]],
		[/ mms\/([\w\.]+)$/i],
		[z, [I, yn + " Neon"]],
		[/ opt\/([\w\.]+)$/i],
		[z, [I, yn + " Touch"]],
		[/coc_coc\w+\/([\w\.]+)/i],
		[z, [I, "Coc Coc"]],
		[/dolfin\/([\w\.]+)/i],
		[z, [I, "Dolphin"]],
		[/coast\/([\w\.]+)/i],
		[z, [I, yn + " Coast"]],
		[/miuibrowser\/([\w\.]+)/i],
		[z, [I, "MIUI" + Cn]],
		[/fxios\/([\w\.-]+)/i],
		[z, [I, Sn + vn]],
		[/\bqihoobrowser\/?([\w\.]*)/i],
		[z, [I, "360"]],
		[/\b(qq)\/([\w\.]+)/i],
		[[
			I,
			/(.+)/,
			"$1Browser"
		], z],
		[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
		[[
			I,
			/(.+)/,
			"$1" + Cn
		], z],
		[/ HBPC\/([\w\.]+)/],
		[z, [I, $t + Cn]],
		[/samsungbrowser\/([\w\.]+)/i],
		[z, [I, ln + " Internet"]],
		[/metasr[\/ ]?([\d\.]+)/i],
		[z, [I, xn + " Explorer"]],
		[/(sogou)mo\w+\/([\d\.]+)/i],
		[[I, xn + " Mobile"], z],
		[
			/(electron)\/([\w\.]+) safari/i,
			/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
			/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
		],
		[I, z],
		[/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],
		[I],
		[/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],
		[z, I],
		[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
		[
			[I, bn],
			z,
			[L, jt]
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
			I,
			z,
			[L, jt]
		],
		[/\bgsa\/([\w\.]+) .*safari\//i],
		[
			z,
			[I, "GSA"],
			[L, jt]
		],
		[/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],
		[
			z,
			[I, "TikTok"],
			[L, jt]
		],
		[/\[(linkedin)app\]/i],
		[I, [L, jt]],
		[/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
		[
			[
				I,
				/(.+)/,
				"Zalo"
			],
			z,
			[L, jt]
		],
		[/(chromium)[\/ ]([-\w\.]+)/i],
		[I, z],
		[/ome-(lighthouse)$/i],
		[I, [L, At]],
		[/headlesschrome(?:\/([\w\.]+)| )/i],
		[z, [I, mn + " Headless"]],
		[/wv\).+chrome\/([\w\.]+).+edgw\//i],
		[
			z,
			[I, _n + " WebView2"],
			[L, jt]
		],
		[/; wv\).+(chrome)\/([\w\.]+)/i],
		[
			[I, mn + " WebView"],
			z,
			[L, jt]
		],
		[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
		[z, [I, "Android" + Cn]],
		[/chrome\/([\w\.]+) mobile/i],
		[z, [I, Sn + "Chrome"]],
		[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
		[I, z],
		[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
		[z, [I, Sn + "Safari"]],
		[/iphone .*mobile(?:\/\w+ | ?)safari/i],
		[[I, Sn + "Safari"]],
		[/version\/([\w\.\,]+) .*(safari)/i],
		[z, I],
		[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
		[I, [z, "1"]],
		[/(webkit|khtml)\/([\w\.]+)/i],
		[I, z],
		[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
		[[I, Sn + vn], z],
		[/(navigator|netscape\d?)\/([-\w\.]+)/i],
		[[I, "Netscape"], z],
		[/(wolvic|librewolf)\/([\w\.]+)/i],
		[I, z],
		[/mobile vr; rv:([\w\.]+)\).+firefox/i],
		[z, [I, vn + " Reality"]],
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
		[I, [
			z,
			/_/g,
			"."
		]],
		[/(cobalt)\/([\w\.]+)/i],
		[I, [
			z,
			/[^\d\.]+./,
			_t
		]]
	],
	cpu: [
		[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
		[[B, "amd64"]],
		[/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
		[[B, "ia32"]],
		[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
		[[B, "arm64"]],
		[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
		[[B, "armhf"]],
		[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
		[[B, "arm"]],
		[/ sun4\w[;\)]/i],
		[[B, "sparc"]],
		[
			/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
			/((ppc|powerpc)(64)?)( mac|;|\))/i,
			/(?:osf1|[freopnt]{3,4}bsd) (alpha)/i
		],
		[[
			B,
			/ower/,
			_t,
			Nn
		]],
		[/mc680.0/i],
		[[B, "68k"]],
		[/winnt.+\[axp/i],
		[[B, "alpha"]]
	],
	device: [
		[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
		[
			V,
			[R, ln],
			[L, U]
		],
		[
			/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
			/samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
			/sec-(sgh\w+)/i
		],
		[
			V,
			[R, ln],
			[L, H]
		],
		[/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
		[
			V,
			[R, Yt],
			[L, H]
		],
		[/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i, /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],
		[
			V,
			[R, Yt],
			[L, U]
		],
		[/(macintosh);/i],
		[V, [R, Yt]],
		[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
		[
			V,
			[R, un],
			[L, H]
		],
		[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
		[
			V,
			[R, tn],
			[L, U]
		],
		[/honor([-\w ]+)[;\)]/i],
		[
			V,
			[R, tn],
			[L, H]
		],
		[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
		[
			V,
			[R, $t],
			[L, U]
		],
		[/(?:huawei) ?([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],
		[
			V,
			[R, $t],
			[L, H]
		],
		[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
		[
			[
				V,
				/_/g,
				" "
			],
			[R, fn],
			[L, U]
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
				V,
				/_/g,
				" "
			],
			[R, fn],
			[L, H]
		],
		[/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
		[
			V,
			[R, sn],
			[L, H]
		],
		[/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
		[
			V,
			[R, cn],
			[L, H]
		],
		[/\b(opd2(\d{3}a?))(?: bui|\))/i],
		[
			V,
			[
				R,
				Vn,
				{
					OnePlus: [
						"203",
						"304",
						"403",
						"404",
						"413",
						"415"
					],
					"*": cn
				}
			],
			[L, U]
		],
		[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
		[
			V,
			[R, "BLU"],
			[L, H]
		],
		[/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
		[
			V,
			[R, "Vivo"],
			[L, H]
		],
		[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
		[
			V,
			[R, "Realme"],
			[L, H]
		],
		[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
		[
			V,
			[R, en],
			[L, U]
		],
		[/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
		[
			V,
			[R, en],
			[L, H]
		],
		[
			/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
			/\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
			/((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
		],
		[
			V,
			[R, an],
			[L, H]
		],
		[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
		[
			V,
			[R, an],
			[L, U]
		],
		[/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
		[
			V,
			[R, nn],
			[L, U]
		],
		[
			/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
			/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
			/\blg-?([\d\w]+) bui/i
		],
		[
			V,
			[R, nn],
			[L, H]
		],
		[/(nokia) (t[12][01])/i],
		[
			R,
			V,
			[L, U]
		],
		[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],
		[
			[
				V,
				/_/g,
				" "
			],
			[L, H],
			[R, "Nokia"]
		],
		[/(pixel (c|tablet))\b/i],
		[
			V,
			[R, Qt],
			[L, U]
		],
		[/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i],
		[
			V,
			[R, Qt],
			[L, H]
		],
		[/(google) (pixelbook( go)?)/i],
		[R, V],
		[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
		[
			V,
			[R, dn],
			[L, H]
		],
		[/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
		[
			[V, "Xperia Tablet"],
			[R, dn],
			[L, U]
		],
		[
			/(alexa)webm/i,
			/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
			/(kf[a-z]+)( bui|\)).+silk\//i
		],
		[
			V,
			[R, Jt],
			[L, U]
		],
		[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
		[
			[
				V,
				/(.+)/g,
				"Fire Phone $1"
			],
			[R, Jt],
			[L, H]
		],
		[/(playbook);[-\w\),; ]+(rim)/i],
		[
			V,
			R,
			[L, U]
		],
		[/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
		[
			V,
			[R, Zt],
			[L, H]
		],
		[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
		[
			V,
			[R, Xt],
			[L, U]
		],
		[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
		[
			V,
			[R, Xt],
			[L, H]
		],
		[/(nexus 9)/i],
		[
			V,
			[R, "HTC"],
			[L, U]
		],
		[
			/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
			/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
			/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
		],
		[
			R,
			[
				V,
				/_/g,
				" "
			],
			[L, H]
		],
		[/tcl (xess p17aa)/i, /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],
		[
			V,
			[R, "TCL"],
			[L, U]
		],
		[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],
		[
			V,
			[R, "TCL"],
			[L, H]
		],
		[/(itel) ((\w+))/i],
		[
			[R, Nn],
			V,
			[
				L,
				Vn,
				{
					tablet: ["p10001l", "w7001"],
					"*": "mobile"
				}
			]
		],
		[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
		[
			V,
			[R, "Acer"],
			[L, U]
		],
		[/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
		[
			V,
			[R, "Meizu"],
			[L, H]
		],
		[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
		[
			V,
			[R, "Ulefone"],
			[L, H]
		],
		[/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
		[
			V,
			[R, "Energizer"],
			[L, H]
		],
		[/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
		[
			V,
			[R, "Cat"],
			[L, H]
		],
		[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
		[
			V,
			[R, "Smartfren"],
			[L, H]
		],
		[/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
		[
			V,
			[R, "Nothing"],
			[L, H]
		],
		[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
		[
			V,
			[R, "Archos"],
			[L, U]
		],
		[/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
		[
			V,
			[R, "Archos"],
			[L, H]
		],
		[/blackview ([-\w ]+)( b|\))/i, /; (bv\d{4}[-\w ]*)( b|\))/i],
		[
			V,
			[R, "Blackview"],
			[L, H]
		],
		[/; (n159v)/i],
		[
			V,
			[R, "HMD"],
			[L, H]
		],
		[/((revvl[ \w\+]+|tm(?:rv|af)\w*[45]g(?:tb)?))( b|\))/i],
		[
			V,
			[
				L,
				Bn,
				{
					test: /ta?b/i,
					ifTrue: U,
					ifFalse: H
				}
			],
			[R, "T-Mobile"]
		],
		[/(imo) (tab \w+)/i, /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],
		[
			R,
			V,
			[L, U]
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
			R,
			V,
			[L, H]
		],
		[
			/(kobo)\s(ereader|touch)/i,
			/(hp).+(touchpad(?!.+tablet)|tablet)/i,
			/(kindle)\/([\w\.]+)/i
		],
		[
			R,
			V,
			[L, U]
		],
		[/(surface duo)/i],
		[
			V,
			[R, rn],
			[L, U]
		],
		[/droid [\d\.]+; (fp\du?)(?: b|\))/i],
		[
			V,
			[R, "Fairphone"],
			[L, H]
		],
		[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
		[
			V,
			[R, on],
			[L, U]
		],
		[/(sprint) (\w+)/i],
		[
			R,
			V,
			[L, H]
		],
		[/(kin\.[onetw]{3})/i],
		[
			[
				V,
				/\./g,
				" "
			],
			[R, rn],
			[L, H]
		],
		[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
		[
			V,
			[R, pn],
			[L, U]
		],
		[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
		[
			V,
			[R, pn],
			[L, H]
		],
		[/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
		[R, [L, W]],
		[/hbbtv.+maple;(\d+)/i],
		[
			[
				V,
				/^/,
				"SmartTV"
			],
			[R, ln],
			[L, W]
		],
		[/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
		[
			R,
			V,
			[L, W]
		],
		[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
		[[R, nn], [L, W]],
		[/(apple) ?tv/i],
		[
			R,
			[V, Yt + " TV"],
			[L, W]
		],
		[/crkey.*devicetype\/chromecast/i],
		[
			[V, gn + " Third Generation"],
			[R, Qt],
			[L, W]
		],
		[/crkey.*devicetype\/([^/]*)/i],
		[
			[
				V,
				/^/,
				"Chromecast "
			],
			[R, Qt],
			[L, W]
		],
		[/fuchsia.*crkey/i],
		[
			[V, gn + " Nest Hub"],
			[R, Qt],
			[L, W]
		],
		[/crkey/i],
		[
			[V, gn],
			[R, Qt],
			[L, W]
		],
		[/(portaltv)/i],
		[
			V,
			[R, bn],
			[L, W]
		],
		[/droid.+aft(\w+)( bui|\))/i],
		[
			V,
			[R, Jt],
			[L, W]
		],
		[/(shield \w+ tv)/i],
		[
			V,
			[R, on],
			[L, W]
		],
		[/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
		[
			V,
			[R, un],
			[L, W]
		],
		[/(bravia[\w ]+)( bui|\))/i],
		[
			V,
			[R, dn],
			[L, W]
		],
		[/(mi(tv|box)-?\w+) bui/i],
		[
			V,
			[R, fn],
			[L, W]
		],
		[/Hbbtv.*(technisat) (.*);/i],
		[
			R,
			V,
			[L, W]
		],
		[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
		[
			[
				R,
				/.+\/(\w+)/,
				"$1",
				Vn,
				{ LG: "lge" }
			],
			[V, Rn],
			[L, W]
		],
		[/(playstation \w+)/i],
		[
			V,
			[R, dn],
			[L, Et]
		],
		[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
		[
			V,
			[R, rn],
			[L, Et]
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
				R,
				Vn,
				{
					Nvidia: "Shield",
					Anbernic: "RGCUBE",
					Logitech: "GR0006"
				}
			],
			V,
			[L, Et]
		],
		[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
		[
			V,
			[R, ln],
			[L, Dt]
		],
		[/((pebble))app/i, /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
		[
			R,
			V,
			[L, Dt]
		],
		[/(ow(?:19|20)?we?[1-3]{1,3})/i],
		[
			V,
			[R, cn],
			[L, Dt]
		],
		[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
		[
			V,
			[R, Yt],
			[L, Dt]
		],
		[/(opwwe\d{3})/i],
		[
			V,
			[R, sn],
			[L, Dt]
		],
		[/(moto 360)/i],
		[
			V,
			[R, an],
			[L, Dt]
		],
		[/(smartwatch 3)/i],
		[
			V,
			[R, dn],
			[L, Dt]
		],
		[/(g watch r)/i],
		[
			V,
			[R, nn],
			[L, Dt]
		],
		[/droid.+; (wt63?0{2,3})\)/i],
		[
			V,
			[R, pn],
			[L, Dt]
		],
		[/droid.+; (glass) \d/i],
		[
			V,
			[R, Qt],
			[L, Ot]
		],
		[/(pico) ([\w ]+) os\d/i],
		[
			R,
			V,
			[L, Ot]
		],
		[/(quest( \d| pro)?s?).+vr/i],
		[
			V,
			[R, bn],
			[L, Ot]
		],
		[/mobile vr; rv.+firefox/i],
		[[L, Ot]],
		[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
		[R, [L, kt]],
		[/(aeobc)\b/i],
		[
			V,
			[R, Jt],
			[L, kt]
		],
		[/(homepod).+mac os/i],
		[
			V,
			[R, Yt],
			[L, kt]
		],
		[/windows iot/i],
		[[L, kt]],
		[/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
		[V, [L, W]],
		[/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],
		[[L, W]],
		[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],
		[V, [
			L,
			Vn,
			{
				mobile: "Mobile",
				xr: "VR",
				"*": U
			}
		]],
		[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
		[[L, U]],
		[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
		[[L, H]],
		[/droid .+?; ([\w\. -]+)( bui|\))/i],
		[V, [R, "Generic"]]
	],
	engine: [
		[/windows.+ edge\/([\w\.]+)/i],
		[z, [I, _n + "HTML"]],
		[/(arkweb)\/([\w\.]+)/i],
		[I, z],
		[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
		[z, [I, "Blink"]],
		[
			/(presto)\/([\w\.]+)/i,
			/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
			/ekioh(flow)\/([\w\.]+)/i,
			/(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,
			/(icab)[\/ ]([23]\.[\d\.]+)/i,
			/\b(libweb)/i
		],
		[I, z],
		[/ladybird\//i],
		[[I, "LibWeb"]],
		[/rv\:([\w\.]{1,9})\b.+(gecko)/i],
		[z, I]
	],
	os: [
		[/(windows nt) (6\.[23]); arm/i],
		[[
			I,
			/N/,
			"R"
		], [
			z,
			Vn,
			Hn
		]],
		[/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i, /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i],
		[I, z],
		[/windows nt ?([\d\.\)]*)(?!.+xbox)/i, /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],
		[[
			z,
			/(;|\))/g,
			"",
			Vn,
			Hn
		], [I, wn]],
		[/(windows ce)\/?([\d\.]*)/i],
		[I, z],
		[
			/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
			/(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
			/\btvos ?([\w\.]+)/i,
			/cfnetwork\/.+darwin/i
		],
		[[
			z,
			/_/g,
			"."
		], [I, "iOS"]],
		[/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],
		[[I, "macOS"], [
			z,
			/_/g,
			"."
		]],
		[/android ([\d\.]+).*crkey/i],
		[z, [I, gn + " Android"]],
		[/fuchsia.*crkey\/([\d\.]+)/i],
		[z, [I, gn + " Fuchsia"]],
		[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
		[z, [I, gn + " SmartSpeaker"]],
		[/linux.*crkey\/([\d\.]+)/i],
		[z, [I, gn + " Linux"]],
		[/crkey\/([\d\.]+)/i],
		[z, [I, gn]],
		[/droid ([\w\.]+)\b.+(android[- ]x86)/i],
		[z, I],
		[/(ubuntu) ([\w\.]+) like android/i],
		[[
			I,
			/(.+)/,
			"$1 Touch"
		], z],
		[/(harmonyos)[\/ ]?([\d\.]*)/i, /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i],
		[I, z],
		[/\(bb(10);/i],
		[z, [I, Zt]],
		[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
		[z, [I, "Symbian"]],
		[/mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i],
		[z, [I, vn + " OS"]],
		[/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i, /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],
		[z, [I, "webOS"]],
		[/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
		[[
			z,
			Vn,
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
		], [I, "webOS"]],
		[/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],
		[z, [I, "watchOS"]],
		[/cros [\w]+(?:\)| ([\w\.]+)\b)/i],
		[z, [I, "Chrome OS"]],
		[/kepler ([\w\.]+); (aft|aeo)/i],
		[z, [I, "Vega OS"]],
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
		[I, z],
		[/(sunos) ?([\d\.]*)/i],
		[[I, "Solaris"], z],
		[/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
		[I, z]
	]
}, Kn = (function() {
	var e = {
		init: {},
		isIgnore: {},
		isIgnoreRgx: {},
		toString: {}
	};
	return In.call(e.init, [
		[yt, [
			I,
			z,
			Tt,
			L
		]],
		[bt, [B]],
		[xt, [
			L,
			V,
			R
		]],
		[St, [I, z]],
		[Ct, [I, z]]
	]), In.call(e.isIgnore, [
		[yt, [z, Tt]],
		[St, [z]],
		[Ct, [z]]
	]), In.call(e.isIgnoreRgx, [[yt, / ?browser$/i], [Ct, / ?os$/i]]), In.call(e.toString, [
		[yt, [I, z]],
		[bt, [B]],
		[xt, [R, V]],
		[St, [I, z]],
		[Ct, [I, z]]
	]), e;
})(), qn = function(e, t) {
	var n = Kn.init[t], r = Kn.isIgnore[t] || 0, i = Kn.isIgnoreRgx[t] || 0, a = Kn.toString[t] || 0;
	function o() {
		In.call(this, n);
	}
	return o.prototype.getItem = function() {
		return e;
	}, o.prototype.withClientHints = function() {
		return En ? En.getHighEntropyValues(qt).then(function(t) {
			return e.setCH(new Jn(t, !1)).parseCH().get();
		}) : e.parseCH().get();
	}, o.prototype.withFeatureCheck = function() {
		return e.detectFeature().get();
	}, t != wt && (o.prototype.is = function(e) {
		var t = !1;
		for (var n in this) if (this.hasOwnProperty(n) && !kn(r, n) && Nn(i ? Ln(i, this[n]) : this[n]) == Nn(i ? Ln(i, e) : e)) {
			if (t = !0, e != F.UNDEFINED) break;
		} else if (e == F.UNDEFINED && t) {
			t = !t;
			break;
		}
		return t;
	}, o.prototype.toString = function() {
		var e = _t;
		for (var t in a) typeof this[a[t]] !== F.UNDEFINED && (e += (e ? " " : _t) + this[a[t]]);
		return e || F.UNDEFINED;
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
function Jn(e, t) {
	if (e ||= {}, In.call(this, qt), t) In.call(this, [
		[Mt, Mn(e[Rt])],
		[Pt, Mn(e[zt])],
		[H, /\?1/.test(e[Ut])],
		[V, Fn(e[Wt])],
		[Ft, Fn(e[Gt])],
		[It, Fn(e[Kt])],
		[B, Fn(e[Bt])],
		[Nt, Mn(e[Ht])],
		[Lt, Fn(e[Vt])]
	]);
	else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== F.UNDEFINED && (this[n] = e[n]);
}
function Yn(e, t, n, r) {
	return In.call(this, [
		["itemType", e],
		["ua", t],
		["uaCH", r],
		["rgxMap", n],
		["data", qn(this, e)]
	]), this;
}
Yn.prototype.get = function(e) {
	return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data;
}, Yn.prototype.set = function(e, t) {
	return this.data[e] = t, this;
}, Yn.prototype.setCH = function(e) {
	return this.uaCH = e, this;
}, Yn.prototype.detectFeature = function() {
	if (Tn && Tn.userAgent == this.ua) switch (this.itemType) {
		case yt:
			Tn.brave && typeof Tn.brave.isBrave == F.FUNCTION && this.set(I, "Brave");
			break;
		case xt:
			!this.get(L) && En && En[H] && this.set(L, H), this.get(V) == "Macintosh" && Tn && typeof Tn.standalone !== F.UNDEFINED && Tn.maxTouchPoints && Tn.maxTouchPoints > 2 && this.set(V, "iPad").set(L, U);
			break;
		case Ct:
			!this.get(I) && En && En[Ft] && this.set(I, En[Ft]);
			break;
		case wt:
			var e = this.data, t = function(t) {
				return e[t].getItem().detectFeature().get();
			};
			this.set(yt, t(yt)).set(bt, t(bt)).set(xt, t(xt)).set(St, t(St)).set(Ct, t(Ct));
	}
	return this;
}, Yn.prototype.parseUA = function() {
	switch (this.itemType != wt && zn.call(this.data, this.ua, this.rgxMap), this.itemType) {
		case yt:
			this.set(Tt, Pn(this.get(z)));
			break;
		case Ct:
			if (this.get(I) == "iOS" && this.get(z) && /^1[89][^\d]/.exec(this.get(z))) {
				var e = /\) Version\/((\d+)[\d\.]*)/.exec(this.ua);
				e && parseInt(e[2], 10) >= 26 && this.set(z, e[1]);
			}
			break;
	}
	return this;
}, Yn.prototype.parseCH = function() {
	var e = this.uaCH, t = this.rgxMap;
	switch (this.itemType) {
		case yt:
		case St:
			var n = e[Pt] || e[Mt], r;
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i].brand || n[i], o = n[i].version;
				this.itemType == yt && !/not.a.brand/i.test(a) && (!r || /Chrom/.test(r) && a != hn || r == _n && /WebView2/.test(a)) && (a = Vn(a, Wn), r = this.get(I), r && !/Chrom/.test(r) && /Chrom/.test(a) || this.set(I, a).set(z, o).set(Tt, Pn(o)), r = a), this.itemType == St && a == hn && this.set(z, o);
			}
			break;
		case bt:
			var s = e[B];
			s && (s && e[Lt] == "64" && (s += "64"), zn.call(this.data, s + ";", t));
			break;
		case xt:
			if (e[H] && this.set(L, H), e[V] && (this.set(V, e[V]), !this.get(L) || !this.get(R))) {
				var c = {};
				zn.call(c, "droid 9; " + e[V] + ")", t), !this.get(L) && c.type && this.set(L, c.type), !this.get(R) && c.vendor && this.set(R, c.vendor);
			}
			if (e[Nt]) {
				var l;
				if (typeof e[Nt] != "string") for (var u = 0; !l && u < e[Nt].length;) l = Vn(e[Nt][u++], Un);
				else l = Vn(e[Nt], Un);
				this.set(L, l);
			}
			break;
		case Ct:
			var d = e[Ft];
			if (d) {
				var f = e[It];
				d == wn && (f = parseInt(Pn(f), 10) >= 13 ? "11" : "10"), this.set(I, d).set(z, f);
			}
			this.get(I) == wn && e[V] == "Xbox" && this.set(I, "Xbox").set(z, void 0);
			break;
		case wt:
			var p = this.data, m = function(t) {
				return p[t].getItem().setCH(e).parseCH().get();
			};
			this.set(yt, m(yt)).set(bt, m(bt)).set(xt, m(xt)).set(St, m(St)).set(Ct, m(Ct));
	}
	return this;
};
function Xn(e, t, n) {
	if (typeof e === F.OBJECT ? (An(e, !0) ? (typeof t === F.OBJECT && (n = t), t = e) : (n = e, t = void 0), e = void 0) : typeof e === F.STRING && !An(t, !0) && (n = t, t = void 0), n) if (typeof n.append === F.FUNCTION) {
		var r = {};
		n.forEach(function(e, t) {
			r[String(t).toLowerCase()] = e;
		}), n = r;
	} else {
		var i = {};
		for (var a in n) n.hasOwnProperty(a) && (i[String(a).toLowerCase()] = n[a]);
		n = i;
	}
	if (!(this instanceof Xn)) return new Xn(e, t, n).getResult();
	var o = typeof e === F.STRING ? e : n && n[gt] ? n[gt] : Tn && Tn.userAgent ? Tn.userAgent : _t, s = new Jn(n, !0), c = Gn, l = function(e) {
		return e == wt ? function() {
			return new Yn(e, o, c, s).set("ua", o).set(yt, this.getBrowser()).set(bt, this.getCPU()).set(xt, this.getDevice()).set(St, this.getEngine()).set(Ct, this.getOS()).get();
		} : function() {
			return new Yn(e, o, c[e], s).parseUA().get();
		};
	};
	return In.call(this, [
		["getBrowser", l(yt)],
		["getCPU", l(bt)],
		["getDevice", l(xt)],
		["getEngine", l(St)],
		["getOS", l(Ct)],
		["getResult", l(wt)],
		["getUA", function() {
			return o;
		}],
		["setUA", function(e) {
			return jn(e) && (o = Rn(e, ht)), this;
		}],
		["useExtension", function(e) {
			return e && (c = Dn(c, e)), this;
		}]
	]).setUA(o).useExtension(t), this;
}
Xn.VERSION = mt, Xn.BROWSER = On([
	I,
	z,
	Tt,
	L
]), Xn.CPU = On([B]), Xn.DEVICE = On([
	V,
	R,
	L,
	Et,
	H,
	W,
	U,
	Dt,
	kt
]), Xn.ENGINE = Xn.OS = On([I, z]);
//#endregion
//#region src/report/parse-user-agent.ts
function Zn(e) {
	if (e) return e.replace(/^Mobile\s+/i, "");
}
function Qn(e) {
	if (e) return e === "Mac OS" ? "macOS" : e;
}
function $n(e) {
	return e ? e === "macOS" ? "mac" : e === "Windows" ? "windows" : "other" : "other";
}
function er(e) {
	return e === "mobile" || e === "tablet" || e === "wearable";
}
function tr(e) {
	return e ? /^curl\b/i.test(e) ? "(curl)" : /postman/i.test(e) ? "(Postman)" : /^axios\b/i.test(e) || /node-fetch/i.test(e) || /^got\//i.test(e) ? "(HTTP client)" : /python-requests|aiohttp|httpx/i.test(e) ? "(Python client)" : /^Go-http-client/i.test(e) ? "(Go client)" : e.length > 48 ? `(${e.slice(0, 45)}…)` : `(${e})` : "(Unknown)";
}
function nr(e, t, n) {
	let r = [e, t].filter(Boolean);
	return r.length === 0 ? tr(n) : `(${r.join(" ")})`;
}
function rr(e) {
	let t = e.trim();
	if (!t) return {
		deviceKind: "desktop",
		osFamily: "other",
		displayLabel: "(Unknown)",
		raw: e
	};
	let { browser: n, os: r, device: i } = new Xn(t).getResult(), a = Qn(r.name), o = Zn(n.name);
	return {
		deviceKind: er(i.type) ? "mobile" : "desktop",
		osFamily: $n(a),
		displayLabel: nr(a, o, t),
		raw: e
	};
}
function ir(e) {
	let t = 0, n = 0, r = 0, i = 0, a = 0;
	for (let o of e) {
		let e = rr(o.label);
		t += o.requests, e.osFamily === "mac" && (n += o.requests), e.osFamily === "windows" && (r += o.requests), e.deviceKind === "mobile" ? i += o.requests : a += o.requests;
	}
	let o = (e) => t > 0 ? e / t * 100 : 0;
	return {
		totalRequests: t,
		macPct: o(n),
		windowsPct: o(r),
		mobilePct: o(i),
		desktopPct: o(a)
	};
}
//#endregion
//#region src/report/markdown.ts
function ar(e) {
	return e.replaceAll("|", "\\|").replaceAll("\n", " ").replaceAll("\r", "");
}
function or(e) {
	return e.toLowerCase().trim().replaceAll(/[^\w\s-]/g, "").replaceAll(/\s+/g, "-").replaceAll(/-+/g, "-").replace(/^-+|-+$/g, "") || "report";
}
function sr(e, t) {
	if (t.length === 0) return "";
	let n = [
		`### ${e}`,
		"",
		"| Label | Requests | Bandwidth | Avg / req |",
		"| --- | ---: | ---: | ---: |"
	];
	for (let e of t) n.push(`| ${ar(e.label)} | ${N(e.requests)} | ${P(e.responseBytes)} | ${P(pt(e))} |`);
	return n.push(""), n.join("\n");
}
function cr(e, t) {
	if (t.length === 0) return "";
	let n = ir(t), r = [
		`### ${e}`,
		"",
		`Mac ${ut(n.macPct)} · Windows ${ut(n.windowsPct)} · Mobile ${ut(n.mobilePct)} · Desktop ${ut(n.desktopPct)}`,
		"",
		"| Device | Label | Requests | Bandwidth | Avg / req |",
		"| --- | --- | ---: | ---: | ---: |"
	];
	for (let e of t) {
		let t = rr(e.label), n = t.deviceKind === "mobile" ? "Mobile" : "Desktop";
		r.push(`| ${n} | ${ar(`${t.displayLabel} — ${t.raw}`)} | ${N(e.requests)} | ${P(e.responseBytes)} | ${P(pt(e))} |`);
	}
	return r.push(""), r.join("\n");
}
function lr(e, t) {
	if (t.length === 0) return "";
	let n = [
		`### ${e}`,
		"",
		"| Label | Count |",
		"| --- | ---: |"
	];
	for (let e of t) n.push(`| ${ar(e.label)} | ${N(e.count)} |`);
	return n.push(""), n.join("\n");
}
function ur(e) {
	let t = e.firstTimestamp && e.lastTimestamp ? `${ft(e.firstTimestamp)} → ${ft(e.lastTimestamp)}` : "No timestamps found";
	return [
		"## Summary",
		"",
		`- Requests: ${N(e.requests)}`,
		`- Response bandwidth: ${P(e.responseBytes)}`,
		`- Request bytes: ${P(e.requestBytes)}`,
		`- Period: ${t}`,
		`- Studio: ${N(e.studio.requests)} requests, ${P(e.studio.responseBytes)} response`,
		`- Billable: ${N(e.nonStudio.requests)} requests, ${P(e.nonStudio.responseBytes)} response`,
		""
	].join("\n");
}
function dr(e, t) {
	let n = [];
	return t.domain && n.push(sr("Top domains", e.byDomain)), t.endpoint && n.push(sr("Top endpoints", e.byEndpoint)), t.date && n.push(sr("Daily bandwidth", e.byDate)), t.hour && n.push(sr("Hourly bandwidth", e.byHour)), t.status && n.push(lr("Response codes", e.byStatus)), t.histogram && n.push(lr("Response size buckets", e.responseSizeHistogram)), t.urls && n.push(sr("Top URLs", e.byUrl)), t.referers && n.push(sr("Top referers", e.byReferer)), t.userAgents && n.push(cr("Top user agents", e.byUserAgent)), t.ips && n.push(sr("Top IPs", e.byIp)), n.filter(Boolean).join("\n");
}
function fr(e, t) {
	let n = t === "billable" ? e.billable : e.all;
	return [
		`# ${e.title}`,
		"",
		`- Source: \`${e.sourcePath}\``,
		`- Generated: ${e.generatedAt}`,
		`- View: ${n.label}`,
		`- Max table rows: ${e.config.topN}`,
		"",
		ur(n),
		dr(n, e.config.sections)
	].join("\n");
}
var pr = {
	header: "_header_1755g_1",
	title: "_title_1755g_10",
	subtitle: "_subtitle_1755g_14",
	meta: "_meta_1755g_20"
}, mr = 0;
Array.isArray;
function G(e, t, n, r, i, a) {
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
		__v: --mr,
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
function hr({ data: e }) {
	return /* @__PURE__ */ G("header", {
		class: pr.header,
		children: [/* @__PURE__ */ G("div", { children: [/* @__PURE__ */ G("h1", {
			class: `heading-1 ${pr.title}`,
			children: e.title
		}), /* @__PURE__ */ G("div", {
			class: `body-1 ${pr.subtitle}`,
			children: [
				"Generated from ",
				/* @__PURE__ */ G("code", { children: e.sourcePath }),
				". The report is self-contained and includes the normalized summary JSON payload inline."
			]
		})] }), /* @__PURE__ */ G("div", {
			class: `body-2 ${pr.meta}`,
			children: [/* @__PURE__ */ G("div", { children: ["Generated on: ", ft(e.generatedAt)] }), /* @__PURE__ */ G("div", { children: ["Max table rows: ", e.config.topN] })]
		})]
	});
}
var gr = { button: "_button_1k609_1" };
//#endregion
//#region src/report/components/MarkdownDownload.tsx
function _r() {
	return /* @__PURE__ */ G("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ G("path", { d: "M12 3v12" }),
			/* @__PURE__ */ G("path", { d: "m7 10 5 5 5-5" }),
			/* @__PURE__ */ G("path", { d: "M5 21h14" })
		]
	});
}
function vr() {
	return /* @__PURE__ */ G("button", {
		type: "button",
		id: "download-markdown",
		class: gr.button,
		children: [/* @__PURE__ */ G(_r, {}), /* @__PURE__ */ G("span", { children: "Download markdown for LLM" })]
	});
}
var yr = {
	toggle: "_toggle_qim5j_1",
	input: "_input_qim5j_13",
	label: "_label_qim5j_21"
};
//#endregion
//#region src/report/components/ViewToggle.tsx
function br() {
	return /* @__PURE__ */ G("label", {
		class: yr.toggle,
		children: [/* @__PURE__ */ G("input", {
			type: "checkbox",
			id: "show-studio-requests",
			class: yr.input
		}), /* @__PURE__ */ G("span", {
			class: yr.label,
			children: "Show non-billable studio requests"
		})]
	});
}
var xr = { row: "_row_1de3z_1" };
//#endregion
//#region src/report/components/ReportControls.tsx
function Sr({ showToggle: e }) {
	return /* @__PURE__ */ G("div", {
		class: xr.row,
		children: [e ? /* @__PURE__ */ G(br, {}) : null, /* @__PURE__ */ G(vr, {})]
	});
}
//#endregion
//#region src/report/sections.ts
var Cr = [
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
		configKey: "urls",
		children: [
			{
				slug: "urls/image",
				label: "Images"
			},
			{
				slug: "urls/file",
				label: "Files"
			},
			{
				slug: "urls/query",
				label: "Queries"
			},
			{
				slug: "urls/other",
				label: "Other"
			}
		]
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
function wr(e) {
	return Cr.filter((t) => !t.configKey || e[t.configKey]).map(({ slug: e, label: t, children: n }) => ({
		slug: e,
		label: t,
		children: n
	}));
}
var Tr = {
	toc: "_toc_15opi_1",
	heading: "_heading_15opi_12",
	list: "_list_15opi_17",
	link: "_link_15opi_25",
	subList: "_subList_15opi_39",
	subLink: "_subLink_15opi_47"
};
//#endregion
//#region src/report/components/TableOfContents.tsx
function Er({ sections: e }) {
	let t = wr(e);
	return /* @__PURE__ */ G("nav", {
		class: Tr.toc,
		"aria-label": "Report sections",
		children: [/* @__PURE__ */ G("div", {
			class: `eyebrow-1 ${Tr.heading}`,
			children: "Contents"
		}), /* @__PURE__ */ G("ul", {
			class: Tr.list,
			children: t.map((e) => /* @__PURE__ */ G("li", { children: [/* @__PURE__ */ G("a", {
				class: Tr.link,
				href: `#${e.slug}`,
				"data-toc-link": !0,
				children: e.label
			}), e.children && e.children.length > 0 ? /* @__PURE__ */ G("ul", {
				class: Tr.subList,
				children: e.children.map((e) => /* @__PURE__ */ G("li", { children: /* @__PURE__ */ G("a", {
					class: Tr.subLink,
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
var Dr = [
	"blue",
	"green",
	"amber",
	"red",
	"purple",
	"teal",
	"orange"
];
function Or(e) {
	return `var(--color-${e})`;
}
function kr(e) {
	let t = {};
	for (let [n, r] of Dr.entries()) {
		let i = e[n];
		i && (t[`--color-${r}`] = i);
	}
	return t;
}
//#endregion
//#region src/report/vertical-bar-chart.ts
var Ar = 26.8, jr = 3.2;
function Mr(e) {
	let t = [];
	for (let n = 0; n <= 4; n += 1) t.push(e / 4 * n);
	return t;
}
function Nr(e, t = 1) {
	if (e <= 0) return t;
	let n = 10 ** Math.floor(Math.log10(e)), r = e / n, i;
	return i = r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10, Math.max(i * n, t);
}
var Pr = {
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
function Fr({ title: e, rows: t, accent: n, emptyMessage: r, axisMax: i, formatAxisTick: a }) {
	let o = Mr(i);
	return /* @__PURE__ */ G("section", {
		class: "card",
		children: [/* @__PURE__ */ G("h3", {
			class: "heading-3",
			children: e
		}), t.length === 0 ? /* @__PURE__ */ G("p", {
			class: Pr.empty,
			children: r
		}) : /* @__PURE__ */ G("div", {
			class: Pr.chart,
			children: [/* @__PURE__ */ G("div", {
				class: Pr.yAxis,
				"aria-hidden": "true",
				children: o.slice().reverse().map((e) => /* @__PURE__ */ G("span", {
					class: Pr.yTick,
					children: a(e)
				}, e))
			}), /* @__PURE__ */ G("div", {
				class: Pr.plotArea,
				children: /* @__PURE__ */ G("div", {
					class: Pr.barRegion,
					children: [o.map((e) => /* @__PURE__ */ G("div", {
						class: Pr.gridLine,
						style: { bottom: `${jr + e / i * Ar}rem` }
					}, e)), /* @__PURE__ */ G("div", {
						class: Pr.bars,
						children: t.map((e) => {
							let t = i > 0 ? Math.min(e.value / i * 100, 100) : 0;
							return /* @__PURE__ */ G("div", {
								class: Pr.barColumn,
								"data-tip": e.tip,
								children: [/* @__PURE__ */ G("div", {
									class: Pr.barTrack,
									children: /* @__PURE__ */ G("div", {
										class: Pr.bar,
										style: {
											height: `${t.toFixed(2)}%`,
											background: n
										}
									})
								}), /* @__PURE__ */ G("span", {
									class: Pr.xLabel,
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
var Ir = 1024 ** 3;
function Lr(e) {
	return e / Ir;
}
function Rr(e) {
	return e * Ir;
}
function zr(e) {
	let t = Lr(e);
	return t >= 100 ? `${t.toFixed(0)} GB` : t >= 10 ? `${t.toFixed(1)} GB` : t >= 1 ? `${t.toFixed(2)} GB` : t >= .01 ? `${t.toFixed(3)} GB` : t > 0 ? `${t.toFixed(4)} GB` : "0 GB";
}
function Br({ title: e, rows: t, accent: n }) {
	return /* @__PURE__ */ G(Fr, {
		title: e,
		accent: n,
		emptyMessage: "No bandwidth data in this range.",
		axisMax: Nr(t.reduce((e, t) => Math.max(e, t.responseBytes), 0), Rr(.001)),
		formatAxisTick: zr,
		rows: t.map((e) => ({
			label: e.label,
			value: e.responseBytes,
			tip: `${P(e.responseBytes)} · ${N(e.requests)} requests`
		}))
	});
}
var K = {
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
function Vr({ title: e, rows: t, accent: n }) {
	let r = t.reduce((e, t) => Math.max(e, t.responseBytes), 0);
	return /* @__PURE__ */ G("section", {
		class: "card",
		children: [/* @__PURE__ */ G("h3", {
			class: "heading-3",
			children: e
		}), /* @__PURE__ */ G("div", {
			class: K.bars,
			children: t.map((e) => {
				let t = r > 0 ? e.responseBytes / r * 100 : 0;
				return /* @__PURE__ */ G("div", {
					class: K.row,
					children: [/* @__PURE__ */ G("div", {
						class: K.head,
						children: [/* @__PURE__ */ G("span", {
							class: K.label,
							title: e.label,
							children: e.label
						}), /* @__PURE__ */ G("span", {
							class: K.value,
							children: [
								P(e.responseBytes),
								" ",
								/* @__PURE__ */ G("span", {
									class: K.meta,
									children: ["• ", N(e.requests)]
								})
							]
						})]
					}), /* @__PURE__ */ G("div", {
						class: K.track,
						children: /* @__PURE__ */ G("div", {
							class: K.fill,
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
function Hr(e) {
	return N(Math.round(e));
}
function Ur({ title: e, rows: t, accent: n }) {
	return /* @__PURE__ */ G(Fr, {
		title: e,
		accent: n,
		emptyMessage: "No response code data in this range.",
		axisMax: Nr(t.reduce((e, t) => Math.max(e, t.count), 0)),
		formatAxisTick: Hr,
		rows: t.map((e) => ({
			label: e.label,
			value: e.count,
			tip: `${N(e.count)} requests`
		}))
	});
}
//#endregion
//#region src/report/components/CountBars.tsx
function Wr({ title: e, rows: t, accent: n }) {
	let r = t.reduce((e, t) => Math.max(e, t.count), 0);
	return /* @__PURE__ */ G("section", {
		class: "card",
		children: [/* @__PURE__ */ G("h3", { children: e }), /* @__PURE__ */ G("div", {
			class: K.bars,
			children: t.map((e) => {
				let t = r > 0 ? e.count / r * 100 : 0;
				return /* @__PURE__ */ G("div", {
					class: K.row,
					children: [/* @__PURE__ */ G("div", {
						class: K.head,
						children: [/* @__PURE__ */ G("span", {
							class: K.label,
							children: e.label
						}), /* @__PURE__ */ G("span", {
							class: K.value,
							children: N(e.count)
						})]
					}), /* @__PURE__ */ G("div", {
						class: K.track,
						children: /* @__PURE__ */ G("div", {
							class: K.fill,
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
var Gr = {
	wrap: "_wrap_3lzo_1",
	table: "_table_3lzo_9",
	labelCell: "_labelCell_3lzo_31",
	labelCellInner: "_labelCellInner_3lzo_35",
	labelText: "_labelText_3lzo_42",
	copyButton: "_copyButton_3lzo_50"
};
//#endregion
//#region src/report/components/DataTable.tsx
function Kr() {
	return /* @__PURE__ */ G("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ G("rect", {
			x: "9",
			y: "9",
			width: "13",
			height: "13",
			rx: "2",
			ry: "2"
		}), /* @__PURE__ */ G("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
	});
}
function qr({ title: e, rows: t, hasCopyButton: n = !1, copyToastMessage: r = "Copied", labelAdornment: i, renderLabel: a, header: o }) {
	return /* @__PURE__ */ G("section", {
		class: "card",
		children: [
			/* @__PURE__ */ G("h3", {
				class: "heading-3",
				children: e
			}),
			o,
			/* @__PURE__ */ G("div", {
				class: Gr.wrap,
				children: /* @__PURE__ */ G("table", {
					class: `body-1 ${Gr.table}`,
					children: [/* @__PURE__ */ G("thead", { children: /* @__PURE__ */ G("tr", { children: [
						/* @__PURE__ */ G("th", { children: "Label" }),
						/* @__PURE__ */ G("th", {
							class: "num",
							children: "Bandwidth"
						}),
						/* @__PURE__ */ G("th", {
							class: "num",
							children: "Requests"
						}),
						/* @__PURE__ */ G("th", {
							class: "num",
							children: "Avg / req"
						})
					] }) }), /* @__PURE__ */ G("tbody", { children: t.map((e) => /* @__PURE__ */ G("tr", { children: [
						/* @__PURE__ */ G("td", {
							class: Gr.labelCell,
							title: a ? void 0 : e.label,
							children: a ? a(e) : /* @__PURE__ */ G("div", {
								class: Gr.labelCellInner,
								children: [
									n ? /* @__PURE__ */ G("button", {
										type: "button",
										class: Gr.copyButton,
										"data-copy-value": e.label,
										"data-copy-toast": r,
										"aria-label": `Copy "${e.label}"`,
										title: "Copy to clipboard",
										children: /* @__PURE__ */ G(Kr, {})
									}) : null,
									/* @__PURE__ */ G("span", {
										class: Gr.labelText,
										children: e.label
									}),
									i ? i(e) : null
								]
							})
						}),
						/* @__PURE__ */ G("td", {
							class: "num",
							children: P(e.responseBytes)
						}),
						/* @__PURE__ */ G("td", {
							class: "num",
							children: N(e.requests)
						}),
						/* @__PURE__ */ G("td", {
							class: "num",
							children: P(pt(e))
						})
					] }, e.label)) })]
				})
			})
		]
	});
}
//#endregion
//#region src/report/utils/styleForShare.ts
function Jr(e, t, n, r) {
	let i = e + t;
	if (i <= 0) return `background: ${r};`;
	let a = e / i * 100;
	return `background: conic-gradient(${n} 0 ${a}%, ${r} ${a}% 100%);`;
}
var Yr = {
	wrap: "_wrap_19u7b_1",
	donut: "_donut_19u7b_8",
	center: "_center_19u7b_27",
	legend: "_legend_19u7b_36",
	swatch: "_swatch_19u7b_47"
};
//#endregion
//#region src/report/components/Donut.tsx
function Xr({ title: e, primary: t, secondary: n, colors: r }) {
	let i = t.value + n.value, a = i > 0 ? t.value / i * 100 : 0;
	return /* @__PURE__ */ G("article", {
		class: "card",
		children: [/* @__PURE__ */ G("h3", {
			class: "heading-3",
			children: e
		}), /* @__PURE__ */ G("div", {
			class: Yr.wrap,
			children: [/* @__PURE__ */ G("div", {
				class: Yr.donut,
				style: Jr(t.value, n.value, r.primary, r.secondary),
				children: /* @__PURE__ */ G("div", {
					class: `body-1 ${Yr.center}`,
					children: [/* @__PURE__ */ G("strong", {
						class: "heading-4",
						children: P(i)
					}), /* @__PURE__ */ G("span", { children: ut(a) })]
				})
			}), /* @__PURE__ */ G("div", {
				class: `body-1 ${Yr.legend}`,
				children: [/* @__PURE__ */ G("div", { children: [
					/* @__PURE__ */ G("span", {
						class: Yr.swatch,
						style: { background: r.primary }
					}),
					t.label,
					" ",
					/* @__PURE__ */ G("strong", { children: P(t.value) })
				] }), /* @__PURE__ */ G("div", { children: [
					/* @__PURE__ */ G("span", {
						class: Yr.swatch,
						style: { background: r.secondary }
					}),
					n.label,
					" ",
					/* @__PURE__ */ G("strong", { children: P(n.value) })
				] })]
			})]
		})]
	});
}
var Zr = {
	metric: "_metric_4re7a_1",
	label: "_label_4re7a_12",
	value: "_value_4re7a_16",
	note: "_note_4re7a_20"
};
//#endregion
//#region src/report/components/Metric.tsx
function Qr({ label: e, value: t, note: n }) {
	return /* @__PURE__ */ G("article", {
		class: Zr.metric,
		children: [
			/* @__PURE__ */ G("div", {
				class: `eyebrow-1 ${Zr.label}`,
				children: e
			}),
			/* @__PURE__ */ G("div", {
				class: `display-1 ${Zr.value}`,
				children: t
			}),
			n ? /* @__PURE__ */ G("div", {
				class: `body-2 ${Zr.note}`,
				children: n
			}) : null
		]
	});
}
//#endregion
//#region src/report/is-development-url.ts
function $r(e, t) {
	let n = e.toLowerCase();
	return (n === "localhost" || n === "127.0.0.1") && t !== "";
}
function ei(e) {
	return /^192\.168\.\d{1,3}\.\d{1,3}$/.test(e);
}
function ti(e) {
	return /192\.168\.\d{1,3}\.\d{1,3}/.test(e) ? !0 : /(?:^|\/\/)(?:localhost|127\.0\.0\.1):\d+/.test(e);
}
function ni(e) {
	if (!e || e === "(empty)") return !1;
	try {
		let t = new URL(e);
		return ei(t.hostname) || $r(t.hostname, t.port);
	} catch {
		return ti(e);
	}
}
var ri = { chip: "_chip_1idw4_1" };
//#endregion
//#region src/report/components/RefererDataTable.tsx
function ii({ title: e, rows: t }) {
	return /* @__PURE__ */ G(qr, {
		title: e,
		rows: t,
		labelAdornment: (e) => ni(e.label) ? /* @__PURE__ */ G("span", {
			class: ri.chip,
			children: "Development"
		}) : null
	});
}
var ai = {
	summary: "_summary_1whfi_1",
	stat: "_stat_1whfi_8",
	labelStack: "_labelStack_1whfi_25",
	labelHead: "_labelHead_1whfi_32",
	deviceIcon: "_deviceIcon_1whfi_39",
	parsedLabel: "_parsedLabel_1whfi_54",
	rawLabel: "_rawLabel_1whfi_61"
};
//#endregion
//#region src/report/components/UserAgentDataTable.tsx
function oi() {
	return /* @__PURE__ */ G("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ G("rect", {
				x: "2",
				y: "3",
				width: "20",
				height: "14",
				rx: "2"
			}),
			/* @__PURE__ */ G("path", { d: "M8 21h8" }),
			/* @__PURE__ */ G("path", { d: "M12 17v4" })
		]
	});
}
function si() {
	return /* @__PURE__ */ G("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: /* @__PURE__ */ G("rect", {
			x: "7",
			y: "2",
			width: "10",
			height: "20",
			rx: "2"
		})
	});
}
function ci({ raw: e }) {
	let t = rr(e), n = t.deviceKind === "mobile" ? si : oi, r = t.deviceKind === "mobile" ? "Mobile" : "Desktop";
	return /* @__PURE__ */ G("div", {
		class: ai.labelStack,
		children: [/* @__PURE__ */ G("div", {
			class: ai.labelHead,
			children: [/* @__PURE__ */ G("span", {
				class: ai.deviceIcon,
				title: r,
				"aria-label": r,
				children: /* @__PURE__ */ G(n, {})
			}), /* @__PURE__ */ G("span", {
				class: ai.parsedLabel,
				children: t.displayLabel
			})]
		}), /* @__PURE__ */ G("div", {
			class: ai.rawLabel,
			title: t.raw,
			children: t.raw
		})]
	});
}
function li({ rows: e }) {
	let t = ir(e);
	return t.totalRequests === 0 ? null : /* @__PURE__ */ G("div", {
		class: ai.summary,
		children: [
			/* @__PURE__ */ G("span", {
				class: ai.stat,
				children: [/* @__PURE__ */ G("strong", { children: "Mac" }), ut(t.macPct)]
			}),
			/* @__PURE__ */ G("span", {
				class: ai.stat,
				children: [/* @__PURE__ */ G("strong", { children: "Windows" }), ut(t.windowsPct)]
			}),
			/* @__PURE__ */ G("span", {
				class: ai.stat,
				children: [/* @__PURE__ */ G("strong", { children: "Mobile" }), ut(t.mobilePct)]
			}),
			/* @__PURE__ */ G("span", {
				class: ai.stat,
				children: [/* @__PURE__ */ G("strong", { children: "Desktop" }), ut(t.desktopPct)]
			})
		]
	});
}
function ui({ title: e, rows: t }) {
	return /* @__PURE__ */ G(qr, {
		title: e,
		rows: t,
		header: /* @__PURE__ */ G(li, { rows: t }),
		renderLabel: (e) => /* @__PURE__ */ G(ci, { raw: e.label })
	});
}
//#endregion
//#region src/report/classify-url.ts
var di = /* @__PURE__ */ new Set([
	".jpg",
	".jpeg",
	".png",
	".gif",
	".webp",
	".svg",
	".avif",
	".ico"
]), fi = /* @__PURE__ */ new Set([
	".mp4",
	".webm",
	".mov",
	".m4v",
	".ogv"
]), pi = /* @__PURE__ */ new Set([
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
function mi(e) {
	try {
		return new URL(e).pathname;
	} catch {
		return null;
	}
}
function hi(e) {
	let t = e.lastIndexOf(".");
	return t === -1 ? "" : e.slice(t).toLowerCase();
}
function gi(e) {
	return e.includes("/data/query") || e.endsWith("/query");
}
function _i(e) {
	let t = mi(e);
	if (!t) return null;
	if (gi(t)) return "query";
	let n = t.toLowerCase();
	if (n.includes("/images/")) return "image";
	let r = hi(t);
	return di.has(r) ? "image" : fi.has(r) ? "video" : n.includes("/files/") || pi.has(r) ? "file" : null;
}
//#endregion
//#region src/report/group-urls-by-kind.ts
function vi(e) {
	let t = {
		image: [],
		file: [],
		query: [],
		other: []
	};
	for (let n of e) {
		let e = _i(n.label);
		e === "image" ? t.image.push(n) : e === "file" || e === "video" ? t.file.push(n) : e === "query" ? t.query.push(n) : t.other.push(n);
	}
	return t;
}
function yi(e) {
	for (let t of [
		"image",
		"file",
		"query",
		"other"
	]) if (e[t].length > 0) return t;
	return "image";
}
var bi = {
	section: "_section_1lzo0_1",
	tabList: "_tabList_1lzo0_5",
	tab: "_tab_1lzo0_5",
	panel: "_panel_1lzo0_34"
};
//#endregion
//#region src/report/groq-query.ts
function xi(e) {
	return decodeURIComponent(e.replace(/\+/g, " "));
}
function Si(e) {
	try {
		let t = new URL(e).searchParams.get("query");
		if (!t) return null;
		let n = xi(t).trim();
		return n.length > 0 ? n : null;
	} catch {
		return null;
	}
}
function Ci(e) {
	try {
		let t = new URL(e).searchParams.get("params");
		if (!t) return null;
		let n = xi(t).trim();
		if (!n) return null;
		let r = JSON.parse(n);
		return !r || typeof r != "object" || Array.isArray(r) ? null : r;
	} catch {
		return null;
	}
}
//#endregion
//#region node_modules/groq-js/dist/_chunks-es/shared.mjs
function wi(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ti(e) {
	let t = [];
	for (let n of e.split(".")) n === "*" ? t.push("[^.]+") : n === "**" ? t.push(".*") : t.push(wi(n));
	return RegExp(`^${t.join(".")}$`);
}
var Ei = class {
	pattern;
	patternRe;
	constructor(e) {
		this.pattern = e, this.patternRe = Ti(e);
	}
	matches(e) {
		return this.patternRe.test(e);
	}
	toJSON() {
		return this.pattern;
	}
}, Di = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|([-+]\d{2}:\d{2}))$/;
function Oi(e) {
	return Di.test(e) ? new Date(e) : null;
}
function ki(e) {
	let t = Ai(e.getUTCFullYear(), 4), n = Ai(e.getUTCMonth() + 1, 2), r = Ai(e.getUTCDate(), 2), i = Ai(e.getUTCHours(), 2), a = Ai(e.getUTCMinutes(), 2), o = Ai(e.getUTCSeconds(), 2), s = "", c = e.getMilliseconds();
	return c != 0 && (s = `.${Ai(c, 3)}`), `${t}-${n}-${r}T${i}:${a}:${o}${s}Z`;
}
function Ai(e, t) {
	let n = e.toString();
	for (; n.length < t;) n = `0${n}`;
	return n;
}
var ji = class {
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
			for (let t of e) yield zi(t);
		})(this.data);
		throw Error(`Cannot iterate over: ${this.type}`);
	}
}, q = new ji(null, "null"), Mi = new ji(!0, "boolean"), Ni = new ji(!1, "boolean"), Pi = class e {
	date;
	constructor(e) {
		this.date = e;
	}
	static parseToValue(t) {
		let n = Oi(t);
		return n ? new ji(new e(n), "datetime") : q;
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
		return ki(this.date);
	}
	toJSON() {
		return this.toString();
	}
};
function Fi(e) {
	return Number.isFinite(e) ? new ji(e, "number") : q;
}
function Ii(e) {
	return new ji(e, "string");
}
function Li(e) {
	return e && typeof e.next == "function";
}
function Ri(e) {
	return new ji(e, "array");
}
function zi(e) {
	return Li(e) ? new Vi(async function* () {
		for await (let t of e) yield zi(t);
	}) : e == null ? q : new ji(e, Bi(e));
}
function Bi(e) {
	return e === null || typeof e > "u" ? "null" : Array.isArray(e) ? "array" : e instanceof Ei ? "path" : e instanceof Pi ? "datetime" : typeof e;
}
var Vi = class {
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
		return new ji(await this.get(), "array");
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
function Hi(e) {
	return [
		"AccessAttribute",
		"ArrayCoerce",
		"Filter",
		"Group",
		"Tuple",
		"SelectorNested"
	].includes(e.type);
}
function Ui(e) {
	switch (e.type) {
		case "Group": return Ui(e.base);
		case "Value":
		case "Parameter": return !0;
		case "Pos":
		case "Neg": return Ui(e.base);
		case "OpCall": switch (e.op) {
			case "+":
			case "-":
			case "*":
			case "/":
			case "%":
			case "**": return Ui(e.left) && Ui(e.right);
			default: return !1;
		}
		default: return !1;
	}
}
function Wi(e) {
	return Ui(e) ? qi(e) : null;
}
function Gi(e) {
	return e.constructor === Object || e.constructor === void 0;
}
function Ki(e) {
	return e == null ? q : typeof e == "boolean" ? e ? Mi : Ni : typeof e == "number" ? Fi(e) : typeof e == "string" ? Ii(e) : Array.isArray(e) ? Ri(e) : typeof e == "object" && Gi(e) ? new ji(e, "object") : q;
}
function qi(e) {
	switch (e.type) {
		case "Value": return Ki(e.value);
		case "Parameter": return q;
		case "Group": return qi(e.base);
		case "Pos": {
			let t = qi(e.base);
			return t.type === "number" ? Fi(t.data) : q;
		}
		case "Neg": {
			let t = qi(e.base);
			return t.type === "number" ? Fi(-t.data) : q;
		}
		case "OpCall": {
			let t = qi(e.left), n = qi(e.right);
			switch (e.op) {
				case "+": return t.type === "number" && n.type === "number" ? Fi(t.data + n.data) : t.type === "string" && n.type === "string" ? Ii(t.data + n.data) : t.type === "array" && n.type === "array" ? Ri(t.data.concat(n.data)) : t.type === "object" && n.type === "object" ? new ji({
					...t.data,
					...n.data
				}, "object") : q;
				case "-": return t.type === "number" && n.type === "number" ? Fi(t.data - n.data) : q;
				case "*": return t.type === "number" && n.type === "number" ? Fi(t.data * n.data) : q;
				case "/": return t.type === "number" && n.type === "number" ? Fi(t.data / n.data) : q;
				case "%": return t.type === "number" && n.type === "number" ? Fi(t.data % n.data) : q;
				case "**": return t.type === "number" && n.type === "number" ? Fi(t.data ** +n.data) : q;
				default: return q;
			}
		}
		default: return q;
	}
}
var Ji = {
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
}, Yi = {
	order: { arity: (e) => e >= 1 },
	score: { arity: (e) => e >= 1 }
}, Xi = /* @__PURE__ */ o(((e, t) => {
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
})), Zi = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		n.debug = n, n.default = n, n.coerce = c, n.disable = o, n.enable = i, n.enabled = s, n.humanize = Xi(), n.destroy = l, Object.keys(e).forEach((t) => {
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
})), Qi = /* @__PURE__ */ c((/* @__PURE__ */ o(((e, t) => {
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
	t.exports = Zi()(e);
	var { formatters: s } = t.exports;
	s.j = function(e) {
		try {
			return JSON.stringify(e);
		} catch (e) {
			return "[UnexpectedJSONParseError]: " + e.message;
		}
	};
})))(), 1), $i = class {
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
}, ea = /^([\t\n\v\f\r \u0085\u00A0]|(\/\/[^\n]*\n))+/, ta = /^\d+/, na = /^[a-zA-Z_][a-zA-Z_0-9]*/;
function ra(e) {
	let t = 0;
	t = Y(e, t);
	let n = {};
	for (; t < e.length && e.substring(t, t + 2) === "fn";) {
		let r = da(e, t);
		if (r.type === "error") return r;
		n[`${r.namespace}::${r.name}`] = r, t = Y(e, r.position);
	}
	let r = J(e, t, 0);
	return r.type === "error" ? r : (t = Y(e, r.position), t === e.length ? (delete r.position, delete r.failPosition, r.customFunctions = n, r) : (r.failPosition && (t = r.failPosition - 1), {
		type: "error",
		message: "Unexpected end of query",
		position: t
	}));
}
function J(e, t, n) {
	let r = t, i = e[t], a;
	switch (i) {
		case "+": {
			let n = J(e, Y(e, t + 1), 10);
			if (n.type === "error") return n;
			a = [{
				name: "pos",
				position: r
			}].concat(n.marks), t = n.position;
			break;
		}
		case "-": {
			let n = J(e, Y(e, t + 1), 8);
			if (n.type === "error") return n;
			a = [{
				name: "neg",
				position: r
			}].concat(n.marks), t = n.position;
			break;
		}
		case "(": {
			let n = ia(e, t);
			if (n.type === "error") return n;
			t = n.position, a = n.marks;
			break;
		}
		case "!": {
			let n = J(e, Y(e, t + 1), 10);
			if (n.type === "error") return n;
			a = [{
				name: "not",
				position: r
			}].concat(n.marks), t = n.position;
			break;
		}
		case "{": {
			let n = sa(e, t);
			if (n.type === "error") return n;
			a = n.marks, t = n.position;
			break;
		}
		case "[":
			if (a = [{
				name: "array",
				position: t
			}], t = Y(e, t + 1), e[t] !== "]") for (;;) {
				e.slice(t, t + 3) === "..." && (a.push({
					name: "array_splat",
					position: t
				}), t = Y(e, t + 3));
				let n = J(e, t, 0);
				if (n.type === "error") return n;
				if (a = a.concat(n.marks), t = n.position, t = Y(e, t), e[t] !== "," || (t = Y(e, t + 1), e[t] === "]")) break;
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
			let n = ca(e, t);
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
			let n = la(e, t + 1, na);
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
			let n = la(e, t, ta);
			if (n) {
				t += n;
				let i = "integer";
				if (e[t] === ".") {
					let n = la(e, t + 1, ta);
					n && (i = "float", t += 1 + n);
				}
				if (e[t] === "e" || e[t] === "E") {
					i = "sci", t++, (e[t] === "+" || e[t] === "-") && t++;
					let n = la(e, t, ta);
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
			let i = la(e, t, na);
			if (i) {
				switch (t += i, e[t]) {
					case ":":
					case "(": {
						let n = oa(e, r, t);
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
		let i = Y(e, t);
		if (i === e.length) {
			t = i;
			break;
		}
		if (s = aa(e, i), s.type === "success") {
			for (a.unshift({
				name: "traverse",
				position: r
			}); s.type === "success";) a = a.concat(s.marks), t = s.position, s = aa(e, Y(e, t));
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
						let s = J(e, Y(e, i + 2), 1);
						if (s.type === "error") return s;
						a = a.concat(s.marks), a.unshift({
							name: "pair",
							position: r
						}), t = s.position, o = 1;
						break;
					}
					case "=": {
						if (n > 4 || o <= 4) break loop;
						let s = J(e, Y(e, i + 2), 5);
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
				let s = J(e, Y(e, i + 1), 7);
				if (s.type === "error") return s;
				a = a.concat(s.marks), a.unshift({
					name: "add",
					position: r
				}), t = s.position, o = 6;
				break;
			}
			case "-": {
				if (n > 6 || o < 6) break loop;
				let s = J(e, Y(e, i + 1), 7);
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
					let s = J(e, Y(e, i + 2), 8);
					if (s.type === "error") return s;
					a = a.concat(s.marks), a.unshift({
						name: "pow",
						position: r
					}), t = s.position, o = 8;
					break;
				}
				if (n > 7 || o < 7) break loop;
				let s = J(e, Y(e, i + 1), 8);
				if (s.type === "error") return s;
				a = a.concat(s.marks), a.unshift({
					name: "mul",
					position: r
				}), t = s.position, o = 7;
				break;
			}
			case "/": {
				if (n > 7 || o < 7) break loop;
				let s = J(e, Y(e, i + 1), 8);
				if (s.type === "error") return s;
				a = a.concat(s.marks), a.unshift({
					name: "div",
					position: r
				}), t = s.position, o = 7;
				break;
			}
			case "%": {
				if (n > 7 || o < 7) break loop;
				let s = J(e, Y(e, i + 1), 8);
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
				let c = J(e, Y(e, s), 5);
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
					let s = J(e, Y(e, i + 2), 3);
					if (s.type === "error") return s;
					a = a.concat(s.marks), a.unshift({
						name: "or",
						position: r
					}), t = s.position, o = 2;
				} else {
					if (n > 11 || o < 11) break loop;
					let s = Y(e, i + 1), c = la(e, s, na);
					if (!c) return {
						type: "error",
						message: "Expected identifier",
						position: s
					};
					if (t = s + c, e[t] === "(" || e[t] === ":") {
						let n = oa(e, s, t);
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
				let s = J(e, Y(e, i + 2), 4);
				if (s.type === "error") return s;
				a = a.concat(s.marks), a.unshift({
					name: "and",
					position: r
				}), t = s.position, o = 3;
				break;
			}
			case "!": {
				if (e[i + 1] !== "=" || n > 4 || o <= 4) break loop;
				let s = J(e, Y(e, i + 2), 5);
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
			default: switch (ua(e, i, na)) {
				case "in": {
					if (n > 4 || o <= 4) break loop;
					t = Y(e, i + 2);
					let s = !1;
					e[t] === "(" && (s = !0, t = Y(e, t + 1));
					let c = t, l = J(e, t, 5);
					if (l.type === "error") return l;
					if (t = Y(e, l.position), e[t] === "." && e[t + 1] === ".") {
						let n = "inc_range";
						e[t + 2] === "." ? (n = "exc_range", t = Y(e, t + 3)) : t = Y(e, t + 2);
						let i = J(e, t, 5);
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
						if (t = Y(e, t), e[t] !== ")") return {
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
					let s = J(e, Y(e, i + 5), 5);
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
function ia(e, t) {
	let n = t, r, i = J(e, Y(e, t + 1), 0);
	if (i.type === "error") return i;
	switch (t = Y(e, i.position), e[t]) {
		case ",":
			for (r = [{
				name: "tuple",
				position: n
			}].concat(i.marks), t = Y(e, t + 1);;) {
				if (i = J(e, t, 0), i.type === "error") return i;
				if (r.push(...i.marks), t = Y(e, i.position), e[t] !== ",") break;
				t = Y(e, t + 1);
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
function aa(e, t) {
	let n = t;
	switch (e[t]) {
		case ".": {
			if (t = Y(e, t + 1), e[t] === "(") return ia(e, t);
			let r = t, i = la(e, t, na);
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
			let i = Y(e, t), a = la(e, i, na);
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
			if (t = Y(e, t + 1), e[t] === "]") return {
				type: "success",
				marks: [{
					name: "array_postfix",
					position: n
				}],
				position: t + 1
			};
			let r = t, i = J(e, t, 0);
			if (i.type === "error") return i;
			if (t = Y(e, i.position), e[t] === "." && e[t + 1] === ".") {
				let a = "inc_range";
				e[t + 2] === "." ? (a = "exc_range", t += 3) : t += 2, t = Y(e, t);
				let o = J(e, t, 0);
				return o.type === "error" ? o : (t = Y(e, o.position), e[t] === "]" ? {
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
			if (t = Y(e, t + 1), e[t] === "{") {
				let r = sa(e, t);
				return r.type === "error" || r.marks.unshift({
					name: "projection",
					position: n
				}), r;
			}
			break;
		case "{": {
			let r = sa(e, t);
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
function oa(e, t, n) {
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
		}), n = Y(e, n + 2);
		let i = la(e, n, na);
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
		}), n = Y(e, n + i), e[n] !== "(") return {
			type: "error",
			message: "Expected \"(\" after function name",
			position: n
		};
		n++, n = Y(e, n);
	} else r.push({
		name: "ident",
		position: t
	}, {
		name: "ident_end",
		position: n
	}), n = Y(e, n + 1);
	let i = n;
	if (e[n] !== ")") for (;;) {
		let t = J(e, n, 0);
		if (t.type === "error") return t;
		if (r = r.concat(t.marks), i = t.position, n = Y(e, t.position), e[n] !== "," || (n = Y(e, n + 1), e[n] === ")")) break;
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
function sa(e, t) {
	let n = [{
		name: "object",
		position: t
	}];
	for (t = Y(e, t + 1); e[t] !== "}";) {
		let r = t;
		if (e.slice(t, t + 3) === "...") if (t = Y(e, t + 3), e[t] !== "}" && e[t] !== ",") {
			let i = J(e, t, 0);
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
			let i = J(e, t, 0);
			if (i.type === "error") return i;
			let a = Y(e, i.position);
			if (i.marks[0].name === "str" && e[a] === ":") {
				let o = J(e, Y(e, a + 1), 0);
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
		if (t = Y(e, t), e[t] !== ",") break;
		t = Y(e, t + 1);
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
function ca(e, t) {
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
function Y(e, t) {
	return t + la(e, t, ea);
}
function la(e, t, n) {
	let r = n.exec(e.slice(t));
	return r ? r[0].length : 0;
}
function ua(e, t, n) {
	let r = n.exec(e.slice(t));
	return r ? r[0] : null;
}
function da(e, t) {
	let n = t, r = [], i = "", a = "";
	if (e.substring(n, n + 2) !== "fn") return {
		type: "success",
		position: n,
		marks: r
	};
	r.push({
		name: "func_decl",
		position: t
	}), n = Y(e, n + 2);
	let o = n;
	if (i = ua(e, n, na), !i) return {
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
	}), n = Y(e, n + i.length), e.substring(n, n + 2) !== "::") return {
		type: "error",
		message: "Expected \"::\" after namespace",
		position: n
	};
	if (n = Y(e, n + 2), a = ua(e, n, na), !a) return {
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
	}), n = Y(e, n + a.length), e[n] !== "(") return {
		type: "error",
		message: "Expected \"(\"",
		position: n
	};
	for (n = Y(e, n + 1); n < e.length && e[n] !== ")";) {
		if (e[n] !== "$") return {
			type: "error",
			message: "Parameter should start with \"$\"",
			position: n
		};
		let t = n;
		n++;
		let i = ua(e, n, na);
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
		}), n = Y(e, n), e[n] === ",") n = Y(e, n + 1);
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
	}), n = Y(e, n + 1), e[n] !== "=") return {
		type: "error",
		message: "Expected \"=\"",
		position: n
	};
	n = Y(e, n + 1);
	let s = J(e, n, 0);
	return s.type === "error" ? s : (r = r.concat(s.marks), n = Y(e, s.position), e[n] === ";" ? (n++, {
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
function fa(e, t) {
	return (n) => t(e(n));
}
function pa(e) {
	return (t) => ({
		type: "Map",
		base: t,
		expr: e({ type: "This" })
	});
}
function ma(e) {
	return (t) => ({
		type: "FlatMap",
		base: t,
		expr: e({ type: "This" })
	});
}
function ha(e, t) {
	if (!t) return {
		type: "a-a",
		build: e
	};
	switch (t.type) {
		case "a-a": return {
			type: "a-a",
			build: fa(e, t.build)
		};
		case "a-b": return {
			type: "a-b",
			build: fa(e, t.build)
		};
		case "b-b": return {
			type: "a-a",
			build: fa(e, pa(t.build))
		};
		case "b-a": return {
			type: "a-a",
			build: fa(e, ma(t.build))
		};
		default: throw Error(`unknown type: ${t.type}`);
	}
}
function ga(e, t) {
	if (!t) return {
		type: "b-b",
		build: e
	};
	switch (t.type) {
		case "a-a":
		case "b-a": return {
			type: "b-a",
			build: fa(e, t.build)
		};
		case "a-b":
		case "b-b": return {
			type: "b-b",
			build: fa(e, t.build)
		};
		default: throw Error(`unknown type: ${t.type}`);
	}
}
function _a(e, t) {
	if (!t) return {
		type: "a-b",
		build: e
	};
	switch (t.type) {
		case "a-a":
		case "b-a": return {
			type: "a-a",
			build: fa(e, t.build)
		};
		case "a-b":
		case "b-b": return {
			type: "a-b",
			build: fa(e, t.build)
		};
		default: throw Error(`unknown type: ${t.type}`);
	}
}
function va(e, t) {
	if (!t) return {
		type: "b-b",
		build: e
	};
	switch (t.type) {
		case "a-a": return {
			type: "a-a",
			build: fa(pa(e), t.build)
		};
		case "a-b": return {
			type: "a-b",
			build: fa(pa(e), t.build)
		};
		case "b-a": return {
			type: "b-a",
			build: fa(e, t.build)
		};
		case "b-b": return {
			type: "b-b",
			build: fa(e, t.build)
		};
		default: throw Error(`unknown type: ${t.type}`);
	}
}
function X(e, t, n = 0) {
	switch (e.type) {
		case "Projection": return {
			...e,
			base: X(e.base, t, n),
			expr: X(e.expr, t, n + 1)
		};
		case "Filter": return {
			...e,
			base: X(e.base, t, n),
			expr: X(e.expr, t, n + 1)
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
				value: X(e.value, t, n)
			}))
		};
		case "PipeFuncCall": return {
			...e,
			base: X(e.base, t, n),
			args: e.args.map((e) => X(e, t, n))
		};
		case "Object": return {
			...e,
			attributes: e.attributes.map((e) => {
				switch (e.type) {
					case "ObjectAttributeValue": return {
						...e,
						value: X(e.value, t, n)
					};
					case "ObjectConditionalSplat": return {
						...e,
						condition: X(e.condition, t, n),
						value: X(e.value, t, n)
					};
					case "ObjectSplat": return {
						...e,
						value: X(e.value, t, n)
					};
					default: return e;
				}
			})
		};
		case "FlatMap":
		case "Map": return {
			...e,
			expr: X(e.expr, t, n),
			base: X(e.base, t, n)
		};
		case "FuncCall": return {
			...e,
			args: e.args.map((e) => X(e, t, n))
		};
		case "Tuple": return {
			...e,
			members: e.members.map((e) => X(e, t, n))
		};
		case "Select": {
			let r = e.alternatives.map((e) => ({
				...e,
				condition: X(e.condition, t, n),
				value: X(e.value, t, n)
			}));
			return e.fallback ? {
				...e,
				alternatives: r,
				fallback: X(e.fallback, t, n)
			} : {
				...e,
				alternatives: r
			};
		}
		case "SelectorNested": return {
			...e,
			base: X(e.base, t, n),
			nested: X(e.nested, t, n)
		};
		case "SelectorFuncCall": return {
			...e,
			arg: X(e.arg, t, n)
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
			base: X(e.base, t, n)
		} : e;
		case "InRange": return {
			...e,
			base: X(e.base, t, n),
			left: X(e.left, t, n),
			right: X(e.right, t, n)
		};
		case "OpCall":
		case "And":
		case "Or": return {
			...e,
			left: X(e.left, t, n),
			right: X(e.right, t, n)
		};
		case "Parameter":
		case "Everything":
		case "This":
		case "Value":
		case "Context": return e;
		default: throw Error(`Handle all cases: ${e.type}`);
	}
}
var ya = {
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
function ba(e) {
	let t = parseInt(e, 16);
	return String.fromCharCode(t);
}
var Z = class extends Error {
	name = "GroqQueryError";
};
function xa(e, t = /* @__PURE__ */ new Set()) {
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
			if ((t.type === "Everything" || t.type === "Array" || t.type === "PipeFuncCall") && (a = ha((e) => e, a)), a === null) throw Error("BUG: unexpected empty traversal");
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
						e.shift(), t += ya[n];
						break;
					}
					case "unicode_hex":
						e.shift(), t += ba(e.processStringEnd());
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
					if (e.fallback) throw new Z("unexpected argument to select()");
					r.shift();
					let t = r.process(n), i = r.process(n);
					e.alternatives.push({
						type: "SelectAlternative",
						condition: t,
						value: i
					});
				} else {
					if (e.fallback) throw new Z("unexpected argument to select()");
					e.fallback = r.process(n);
				}
				return r.shift(), e;
			}
			let s = [];
			for (; r.getMark().name !== "func_args_end";) Ea(i, o, s.length) ? s.push(r.process(a)) : s.push(r.process(n));
			if (r.shift(), i === "global" && (o === "before" || o === "after") && r.parseOptions.mode === "delta") return {
				type: "Context",
				key: o
			};
			if (i === "global" && o === "boost" && !r.allowBoost) throw new Z("unexpected boost");
			let c = r.customFunctions[`${i}::${o}`];
			if (c !== void 0) {
				let n = ka(e, t), i = new $i(r.string, c.marks, r.customFunctions, e).process(n);
				return Ca(o, i.params.length, s.length), Ta(i.body, (e) => X(e, i.params), (e) => wa(e, i.params, s));
			}
			let l = Ji[i];
			if (!l) throw new Z(`Undefined namespace: ${i}`);
			let u = l[o];
			if (!u || (u.arity !== void 0 && Ca(o, u.arity, s.length), u.mode !== void 0 && u.mode !== r.parseOptions.mode)) throw new Z(`Undefined function: ${o}`);
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
			if (e.getMark().name === "namespace" && (e.shift(), r = e.processString()), r !== "global") throw new Z(`Undefined namespace: ${r}`);
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
			let s = Yi[i];
			if (!s) throw new Z(`Undefined pipe function: ${i}`);
			return s.arity && Ca(i, s.arity, a.length), {
				type: "PipeFuncCall",
				base: t,
				name: i,
				args: a
			};
		},
		pair() {
			throw new Z("unexpected =>");
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
			throw new Z("unexpected asc");
		},
		desc() {
			throw new Z("unexpected desc");
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
				name: Sa(t),
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
			let t = e.process(n), r = Wi(t);
			return r && r.type === "number" ? (e) => _a((e) => ({
				type: "AccessElement",
				base: e,
				index: r.data
			}), e) : r && r.type === "string" ? (e) => ga((e) => ({
				type: "AccessAttribute",
				base: e,
				name: r.data
			}), e) : (e) => ha((e) => ({
				type: "Filter",
				base: e,
				expr: t
			}), e);
		},
		slice(e) {
			let t = e.getMark().name === "inc_range";
			e.shift();
			let r = e.process(n), i = e.process(n), a = Wi(r), o = Wi(i);
			if (!a || !o || a.type !== "number" || o.type !== "number") throw new Z("slicing must use constant numbers");
			return (e) => ha((e) => ({
				type: "Slice",
				base: e,
				left: a.data,
				right: o.data,
				isInclusive: t
			}), e);
		},
		projection(e) {
			let t = e.process(n);
			return (e) => va((e) => ({
				type: "Projection",
				base: e,
				expr: t
			}), e);
		},
		attr_access(e) {
			let t = e.processString();
			return (e) => ga((e) => ({
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
			return (e) => ga((e) => n({
				type: "Deref",
				base: e
			}), e);
		},
		array_postfix() {
			return (e) => ha((e) => ({
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
				let r = e.process(n), i = Wi(r);
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
				if (!Hi(n)) throw Error(`Unexpected result parsing nested selector: ${n.type}`);
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
function Sa(e) {
	if (e.type === "AccessAttribute" && !e.base) return e.name;
	if (e.type === "PipeFuncCall" || e.type === "Deref" || e.type === "Map" || e.type === "FlatMap" || e.type === "Projection" || e.type === "Slice" || e.type === "Filter" || e.type === "AccessElement" || e.type === "ArrayCoerce" || e.type === "Group") return Sa(e.base);
	throw new Z(`Cannot determine property key for type: ${e.type}`);
}
function Ca(e, t, n) {
	if (typeof t == "number") {
		if (n !== t) throw new Z(`Incorrect number of arguments to function ${e}(). Expected ${t}, got ${n}.`);
	} else if (t && !t(n)) throw new Z(`Incorrect number of arguments to function ${e}().`);
}
function wa(e, t, n) {
	if (e.type !== "Parameter") throw new Z(`Expected parameter node, got ${e.type}`);
	let r = t.findIndex((t) => t.name === e.name);
	if (r === -1) throw new Z(`Missing argument for parameter ${e.name} in function call`);
	return n[r];
}
function Ta(e, t, n = (e) => e) {
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
	throw new Z(`Unexpected function body, must be a projection. Got "${e.type}"`);
}
function Ea(e, t, n) {
	return e == "diff" && n == 2 && ["changedAny", "changedOnly"].includes(t);
}
var Da = class extends Error {
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
function Oa(e, t = {}) {
	let n = ra(e);
	if (n.type === "error") throw new Da(n.position, e, n.message);
	Aa(e, n.customFunctions, t);
	let r = new $i(e, n.marks, n.customFunctions, t), i = xa(t);
	return r.process(i);
}
function ka(e, t = /* @__PURE__ */ new Set()) {
	return { func_decl(n) {
		let r = n.processString(), i = n.processString(), a = `${r}::${i}`;
		if (t.has(a)) throw new Z(`Recursive function definition detected for ${a}`);
		let o = xa(e, /* @__PURE__ */ new Set([...t, a])), s = [];
		for (; n.getMark().name !== "func_params_end";) {
			let e = n.process(o);
			if (e.type !== "Parameter") throw Error("expected parameter");
			s.push(e);
		}
		if (s.length !== 1) throw new Z("Custom functions can only have one parameter");
		return n.shift(), {
			type: "FuncDeclaration",
			namespace: r,
			name: i,
			params: s,
			body: n.process(o)
		};
	} };
}
function Aa(e, t, n) {
	for (let r in t) {
		if (!t.hasOwnProperty(r)) continue;
		let i = t[r], a = new $i(e, i.marks, t, n), o = ka(n), s = a.process(o);
		Ta(s.body, (e) => X(e, s.params));
	}
}
var { compare: ja } = new Intl.Collator("en"), Ma = (0, Qi.default)("typeEvaluator:scope:trace");
Ma.log = console.log.bind(console);
var Na = (0, Qi.default)("typeEvaluator:evaluate:trace");
Na.log = console.log.bind(console);
var Pa = (0, Qi.default)("typeEvaluator:evaluate:debug");
Pa.log = console.log.bind(console), (0, Qi.default)("typeEvaluator:evaluate:warn");
//#endregion
//#region src/report/analyze-groq.ts
function Fa() {
	return {
		dereferences: 0,
		projections: 0,
		subqueries: 0,
		spreads: 0,
		arrayTraversals: 0,
		functionCalls: {}
	};
}
function Ia(e) {
	return !e || typeof e != "object" ? null : e;
}
function La(e, t) {
	let n = typeof e == "string" ? e : "", r = typeof t == "string" ? t : "unknown";
	return n ? `${n}::${r}` : r;
}
function Ra(e, t, n) {
	let r = Ia(e);
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
					let e = La(r.namespace, r.name);
					t.functionCalls[e] = (t.functionCalls[e] ?? 0) + 1;
					let n = r.args;
					if (Array.isArray(n)) for (let e of n) Ra(e, t, !0);
				}
				return;
			case "PipeFuncCall":
				{
					let e = La("", r.name);
					t.functionCalls[e] = (t.functionCalls[e] ?? 0) + 1, Ra(r.base, t, n);
					let i = r.args;
					if (Array.isArray(i)) for (let e of i) Ra(e, t, !0);
				}
				return;
			case "SelectorFuncCall":
				{
					let e = La("", r.name);
					t.functionCalls[e] = (t.functionCalls[e] ?? 0) + 1, Ra(r.arg, t, !0);
				}
				return;
			default: break;
		}
		for (let e of Object.values(r)) if (Array.isArray(e)) for (let r of e) Ra(r, t, n);
		else Ra(e, t, n);
	}
}
function za(e, t) {
	try {
		let n = Oa(e, t ? { params: t } : {}), r = Fa();
		return Ra(n, r, !1), r;
	} catch (e) {
		if (e instanceof Da) return null;
		throw e;
	}
}
//#endregion
//#region src/report/format-groq.ts
function Ba(e) {
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
var Va = /* @__PURE__ */ c((/* @__PURE__ */ o(((e, t) => {
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
					for (var x = h.pattern || h, S = r.next, C = c; S !== t.tail && !(d && C >= d.reach); C += S.value.length, S = S.next) {
						var w = S.value;
						if (t.length > e.length) return;
						if (!(w instanceof a)) {
							var ee = 1, T;
							if (v) {
								if (T = o(x, C, e, _), !T || T.index >= e.length) break;
								var te = T.index, ne = T.index + T[0].length, E = C;
								for (E += S.value.length; te >= E;) S = S.next, E += S.value.length;
								if (E -= S.value.length, C = E, S.value instanceof a) continue;
								for (var D = S; D !== t.tail && (E < ne || typeof D.value == "string"); D = D.next) ee++, E += D.value.length;
								ee--, w = e.slice(C, E), T.index -= C;
							} else if (T = o(x, 0, w, _), !T) continue;
							var te = T.index, re = T[0], O = w.slice(0, te), k = w.slice(te + re.length), ie = C + w.length;
							d && ie > d.reach && (d.reach = ie);
							var A = S.prev;
							O && (A = l(t, A, O), C += O.length), u(t, A, ee);
							var j = new a(f, g ? i.tokenize(re, g) : re, y, re);
							if (S = l(t, A, j), k && l(t, S, k), ee > 1) {
								var ae = {
									cause: f + "," + m,
									reach: ie
								};
								s(e, t, n, S.prev, C, ae), d && ae.reach > d.reach && (d.reach = ae.reach);
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
})))(), 1), Ha = {
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
typeof Prism < "u" && typeof Prism.languages == "object" && Prism.languages !== null && !Array.isArray(Prism.languages) && (Prism.languages.groq = Ha), Object.assign((e) => {
	e.languages.groq = Ha;
}, {
	displayName: "groq",
	aliases: []
});
//#endregion
//#region src/report/highlight-groq.ts
function Ua(e) {
	return Va.default.highlight(e, Va.default.languages.groq, "groq");
}
var Wa = {
	stats: "_stats_8ca1h_1",
	row: "_row_8ca1h_7",
	group: "_group_8ca1h_25",
	groupLabel: "_groupLabel_8ca1h_33",
	empty: "_empty_8ca1h_40"
}, Ga = [
	"dereferences",
	"projections",
	"subqueries",
	"spreads",
	"arrayTraversals"
];
function Ka(e) {
	return e.replace(/([A-Z])/g, " $1").replace(/^./, (e) => e.toUpperCase());
}
function qa({ stats: e }) {
	let t = Ga.filter((t) => e[t] > 0).sort((t, n) => e[n] - e[t]), n = Object.entries(e.functionCalls).filter(([, e]) => e > 0).sort(([e], [t]) => e.localeCompare(t));
	return t.length === 0 && n.length === 0 ? /* @__PURE__ */ G("p", {
		class: Wa.empty,
		children: "No structural features detected."
	}) : /* @__PURE__ */ G("dl", {
		class: Wa.stats,
		children: [t.map((t) => /* @__PURE__ */ G("div", {
			class: Wa.row,
			children: [/* @__PURE__ */ G("dt", { children: Ka(t) }), /* @__PURE__ */ G("dd", {
				class: "num",
				children: e[t]
			})]
		}, t)), n.length > 0 ? /* @__PURE__ */ G("div", {
			class: Wa.group,
			children: [/* @__PURE__ */ G("div", {
				class: Wa.groupLabel,
				children: "functionCalls"
			}), n.map(([e, t]) => /* @__PURE__ */ G("div", {
				class: Wa.row,
				children: [/* @__PURE__ */ G("dt", { children: e }), /* @__PURE__ */ G("dd", {
					class: "num",
					children: t
				})]
			}, e))]
		}) : null]
	});
}
var Q = {
	dialog: "_dialog_1b6be_1",
	panel: "_panel_1b6be_17",
	header: "_header_1b6be_21",
	title: "_title_1b6be_28",
	iconButton: "_iconButton_1b6be_33",
	copyButton: "_copyButton_1b6be_59",
	copyButtonLabel: "_copyButtonLabel_1b6be_78",
	section: "_section_1b6be_87",
	stats: "_stats_1b6be_93",
	stat: "_stat_1b6be_93",
	statLabel: "_statLabel_1b6be_108",
	statValue: "_statValue_1b6be_114",
	sectionLabel: "_sectionLabel_1b6be_120",
	pre: "_pre_1b6be_125",
	error: "_error_1b6be_140"
};
//#endregion
//#region src/report/components/GroqQueryFlyout.tsx
function Ja() {
	return /* @__PURE__ */ G("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ G("rect", {
			x: "9",
			y: "9",
			width: "13",
			height: "13",
			rx: "2",
			ry: "2"
		}), /* @__PURE__ */ G("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
	});
}
function Ya({ id: e, query: t, params: n = null, requests: r, responseBytes: i }) {
	let a = Ba(t), o = Ua(a), s = za(a, n ?? void 0), c = r > 0 ? i / r : 0, l = n && Object.keys(n).length > 0 ? JSON.stringify(n, null, 2) : null;
	return /* @__PURE__ */ G("dialog", {
		id: e,
		class: Q.dialog,
		"data-groq-flyout": !0,
		children: /* @__PURE__ */ G("div", {
			class: Q.panel,
			children: [
				/* @__PURE__ */ G("div", {
					class: Q.header,
					children: [
						/* @__PURE__ */ G("h4", {
							class: `heading-3 ${Q.title}`,
							children: "GROQ query"
						}),
						/* @__PURE__ */ G("button", {
							type: "button",
							class: Q.copyButton,
							"data-copy-value": a,
							"data-copy-toast": "Copied query",
							"aria-label": "Copy query",
							children: [/* @__PURE__ */ G("span", {
								class: Q.copyButtonLabel,
								children: "Copy query"
							}), /* @__PURE__ */ G(Ja, {})]
						}),
						/* @__PURE__ */ G("button", {
							type: "button",
							class: Q.iconButton,
							"data-groq-flyout-close": !0,
							"aria-label": "Close",
							children: "×"
						})
					]
				}),
				/* @__PURE__ */ G("div", {
					class: Q.section,
					children: [/* @__PURE__ */ G("div", {
						class: `eyebrow-1 ${Q.sectionLabel}`,
						children: "Usage"
					}), /* @__PURE__ */ G("dl", {
						class: Q.stats,
						children: [
							/* @__PURE__ */ G("div", {
								class: Q.stat,
								children: [/* @__PURE__ */ G("dt", {
									class: Q.statLabel,
									children: "Bandwidth"
								}), /* @__PURE__ */ G("dd", {
									class: Q.statValue,
									children: P(i)
								})]
							}),
							/* @__PURE__ */ G("div", {
								class: Q.stat,
								children: [/* @__PURE__ */ G("dt", {
									class: Q.statLabel,
									children: "Requests"
								}), /* @__PURE__ */ G("dd", {
									class: Q.statValue,
									children: N(r)
								})]
							}),
							/* @__PURE__ */ G("div", {
								class: Q.stat,
								children: [/* @__PURE__ */ G("dt", {
									class: Q.statLabel,
									children: "Avg / req"
								}), /* @__PURE__ */ G("dd", {
									class: Q.statValue,
									children: P(c)
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ G("div", {
					class: Q.section,
					children: [/* @__PURE__ */ G("div", {
						class: `eyebrow-1 ${Q.sectionLabel}`,
						children: "Query"
					}), /* @__PURE__ */ G("pre", {
						class: Q.pre,
						children: /* @__PURE__ */ G("code", {
							class: "language-groq",
							dangerouslySetInnerHTML: { __html: o }
						})
					})]
				}),
				l ? /* @__PURE__ */ G("div", {
					class: Q.section,
					children: [/* @__PURE__ */ G("div", {
						class: `eyebrow-1 ${Q.sectionLabel}`,
						children: "Params"
					}), /* @__PURE__ */ G("pre", {
						class: Q.pre,
						children: /* @__PURE__ */ G("code", { children: l })
					})]
				}) : null,
				/* @__PURE__ */ G("div", {
					class: Q.section,
					children: [/* @__PURE__ */ G("div", {
						class: `eyebrow-1 ${Q.sectionLabel}`,
						children: "Structure"
					}), s ? /* @__PURE__ */ G(qa, { stats: s }) : /* @__PURE__ */ G("p", {
						class: Q.error,
						children: "Could not analyze query structure."
					})]
				})
			]
		})
	});
}
var Xa = {
	empty: "_empty_1vmp7_1",
	viewQueryButton: "_viewQueryButton_1vmp7_8"
};
//#endregion
//#region src/report/components/UrlDataTable.tsx
function Za() {
	return /* @__PURE__ */ G("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ G("rect", {
			x: "9",
			y: "9",
			width: "13",
			height: "13",
			rx: "2",
			ry: "2"
		}), /* @__PURE__ */ G("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
	});
}
function Qa({ rows: e, showFlyout: t = !1, idPrefix: n }) {
	return e.length === 0 ? /* @__PURE__ */ G("p", {
		class: Xa.empty,
		children: "No URLs in this category."
	}) : /* @__PURE__ */ G("div", {
		class: Gr.wrap,
		children: /* @__PURE__ */ G("table", {
			class: `body-1 ${Gr.table}`,
			children: [/* @__PURE__ */ G("thead", { children: /* @__PURE__ */ G("tr", { children: [
				/* @__PURE__ */ G("th", { children: "Label" }),
				/* @__PURE__ */ G("th", {
					class: "num",
					children: "Bandwidth"
				}),
				/* @__PURE__ */ G("th", {
					class: "num",
					children: "Requests"
				}),
				/* @__PURE__ */ G("th", {
					class: "num",
					children: "Avg / req"
				})
			] }) }), /* @__PURE__ */ G("tbody", { children: e.map((e, r) => {
				let i = t ? Si(e.label) : null, a = i === null ? null : Ci(e.label), o = i ? `${n}-flyout-${r}` : void 0;
				return /* @__PURE__ */ G("tr", { children: [
					/* @__PURE__ */ G("td", {
						class: Gr.labelCell,
						title: e.label,
						children: [/* @__PURE__ */ G("div", {
							class: Gr.labelCellInner,
							children: [
								/* @__PURE__ */ G("button", {
									type: "button",
									class: Gr.copyButton,
									"data-copy-value": e.label,
									"data-copy-toast": "Copied URL",
									"aria-label": `Copy "${e.label}"`,
									title: "Copy to clipboard",
									children: /* @__PURE__ */ G(Za, {})
								}),
								/* @__PURE__ */ G("span", {
									class: Gr.labelText,
									children: e.label
								}),
								o ? /* @__PURE__ */ G("button", {
									type: "button",
									class: Xa.viewQueryButton,
									"data-groq-flyout-target": o,
									"aria-haspopup": "dialog",
									children: "View query"
								}) : null
							]
						}), o && i ? /* @__PURE__ */ G(Ya, {
							id: o,
							query: i,
							params: a,
							requests: e.requests,
							responseBytes: e.responseBytes
						}) : null]
					}),
					/* @__PURE__ */ G("td", {
						class: "num",
						children: P(e.responseBytes)
					}),
					/* @__PURE__ */ G("td", {
						class: "num",
						children: N(e.requests)
					}),
					/* @__PURE__ */ G("td", {
						class: "num",
						children: P(pt(e))
					})
				] }, `${e.label}-${r}`);
			}) })]
		})
	});
}
//#endregion
//#region src/report/components/UrlTabsSection.tsx
var $a = [
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
function eo({ rows: e, idPrefix: t }) {
	let n = vi(e), r = yi(n);
	return /* @__PURE__ */ G("section", {
		class: `card ${bi.section}`,
		"data-section": "urls",
		"data-url-tabs": !0,
		"data-default-url-tab": r,
		children: [
			/* @__PURE__ */ G("h3", {
				class: "heading-3",
				children: "Top URLs"
			}),
			/* @__PURE__ */ G("div", {
				class: bi.tabList,
				role: "tablist",
				"aria-label": "URL categories",
				children: $a.map((e) => /* @__PURE__ */ G("button", {
					type: "button",
					class: bi.tab,
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
			$a.map((e) => /* @__PURE__ */ G("div", {
				id: `${t}-panel-${e.id}`,
				class: bi.panel,
				role: "tabpanel",
				"data-url-panel": e.id,
				hidden: e.id !== r || void 0,
				children: /* @__PURE__ */ G(Qa, {
					rows: n[e.id],
					showFlyout: e.id === "query",
					idPrefix: `${t}-${e.id}`
				})
			}, e.id))
		]
	});
}
var $ = {
	sectionBlock: "_sectionBlock_1pzat_1",
	viewGrid: "_viewGrid_1pzat_5",
	grid2: "_grid2_1pzat_12",
	stack: "_stack_1pzat_25",
	sectionTitle: "_sectionTitle_1pzat_30"
};
//#endregion
//#region src/report/components/ViewSection.tsx
function to({ view: e, sections: t, viewKey: n, hidden: r = !1 }) {
	let i = e.firstTimestamp && e.lastTimestamp ? `${ft(e.firstTimestamp)} → ${ft(e.lastTimestamp)}` : "No timestamps found";
	return /* @__PURE__ */ G("div", {
		"data-report-view": n,
		hidden: r || void 0,
		children: [/* @__PURE__ */ G("section", {
			class: $.sectionBlock,
			"data-section": "summary",
			children: /* @__PURE__ */ G("div", {
				class: $.viewGrid,
				children: [
					/* @__PURE__ */ G(Qr, {
						label: "Requests",
						value: N(e.requests),
						note: i
					}),
					/* @__PURE__ */ G(Qr, {
						label: "Bandwidth",
						value: P(e.responseBytes),
						note: "Response size total"
					}),
					/* @__PURE__ */ G(Qr, {
						label: "Request bytes",
						value: P(e.requestBytes),
						note: "Inbound payload total"
					}),
					/* @__PURE__ */ G(Qr, {
						label: "Studio",
						value: P(e.studio.responseBytes),
						note: `${N(e.studio.requests)} requests`
					}),
					/* @__PURE__ */ G(Qr, {
						label: "Billable",
						value: P(e.nonStudio.responseBytes),
						note: `${N(e.nonStudio.requests)} requests`
					}),
					/* @__PURE__ */ G(Xr, {
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
							primary: Or("blue"),
							secondary: Or("green")
						}
					})
				]
			})
		}), /* @__PURE__ */ G("div", {
			class: $.grid2,
			children: [/* @__PURE__ */ G("div", {
				class: $.stack,
				children: [
					/* @__PURE__ */ G("div", {
						class: `eyebrow-1 ${$.sectionTitle}`,
						children: "Charts"
					}),
					/* @__PURE__ */ G("div", {
						class: $.grid2,
						children: [t.domain ? /* @__PURE__ */ G("section", {
							class: $.sectionBlock,
							"data-section": "domain",
							children: /* @__PURE__ */ G(Vr, {
								title: "Top domains",
								rows: e.byDomain,
								accent: Or("blue")
							})
						}) : null, t.endpoint ? /* @__PURE__ */ G("section", {
							class: $.sectionBlock,
							"data-section": "endpoint",
							children: /* @__PURE__ */ G(Vr, {
								title: "Top endpoints",
								rows: e.byEndpoint,
								accent: Or("green")
							})
						}) : null]
					}),
					/* @__PURE__ */ G("div", {
						class: $.grid2,
						children: [t.date ? /* @__PURE__ */ G("section", {
							class: $.sectionBlock,
							"data-section": "date",
							children: /* @__PURE__ */ G(Br, {
								title: "Daily bandwidth",
								rows: e.byDate,
								accent: Or("amber")
							})
						}) : null, t.hour ? /* @__PURE__ */ G("section", {
							class: $.sectionBlock,
							"data-section": "hour",
							children: /* @__PURE__ */ G(Br, {
								title: "Hourly bandwidth",
								rows: e.byHour,
								accent: Or("red")
							})
						}) : null]
					}),
					/* @__PURE__ */ G("div", {
						class: $.grid2,
						children: [t.status ? /* @__PURE__ */ G("section", {
							class: $.sectionBlock,
							"data-section": "status",
							children: /* @__PURE__ */ G(Ur, {
								title: "Response codes",
								rows: e.byStatus,
								accent: Or("purple")
							})
						}) : null, t.histogram ? /* @__PURE__ */ G("section", {
							class: $.sectionBlock,
							"data-section": "histogram",
							children: /* @__PURE__ */ G(Wr, {
								title: "Response size buckets",
								rows: e.responseSizeHistogram,
								accent: Or("teal")
							})
						}) : null]
					})
				]
			}), /* @__PURE__ */ G("div", {
				class: $.stack,
				children: [
					/* @__PURE__ */ G("div", {
						class: `eyebrow-1 ${$.sectionTitle}`,
						children: "Top lists"
					}),
					t.urls ? /* @__PURE__ */ G("div", {
						class: $.sectionBlock,
						children: /* @__PURE__ */ G(eo, {
							rows: e.byUrl,
							idPrefix: `urls-${n}`
						})
					}) : null,
					t.referers ? /* @__PURE__ */ G("section", {
						class: $.sectionBlock,
						"data-section": "referers",
						children: /* @__PURE__ */ G(ii, {
							title: "Top referers",
							rows: e.byReferer
						})
					}) : null,
					t.userAgents ? /* @__PURE__ */ G("section", {
						class: $.sectionBlock,
						"data-section": "userAgents",
						children: /* @__PURE__ */ G(ui, {
							title: "Top user agents",
							rows: e.byUserAgent
						})
					}) : null,
					t.ips ? /* @__PURE__ */ G("section", {
						class: $.sectionBlock,
						"data-section": "ips",
						children: /* @__PURE__ */ G(qr, {
							hasCopyButton: !0,
							copyToastMessage: "Copied IP",
							title: "Top IPs",
							rows: e.byIp
						})
					}) : null
				]
			})]
		})]
	});
}
var no = {
	page: "_page_ji3w4_1",
	layout: "_layout_ji3w4_7",
	content: "_content_ji3w4_14",
	footer: "_footer_ji3w4_18"
};
//#endregion
//#region src/report/ReportApp.tsx
function ro({ data: e }) {
	let t = kr(e.config.palette), n = e.config.sections.billableComparison;
	return /* @__PURE__ */ G("main", {
		class: no.page,
		style: t,
		children: [/* @__PURE__ */ G(hr, { data: e }), /* @__PURE__ */ G("div", {
			class: no.layout,
			children: [/* @__PURE__ */ G(Er, { sections: e.config.sections }), /* @__PURE__ */ G("div", {
				class: no.content,
				children: [
					/* @__PURE__ */ G(Sr, { showToggle: n }),
					n ? /* @__PURE__ */ G(re, { children: [/* @__PURE__ */ G(to, {
						view: e.billable,
						sections: e.config.sections,
						viewKey: "billable"
					}), /* @__PURE__ */ G(to, {
						view: e.all,
						sections: e.config.sections,
						viewKey: "all",
						hidden: !0
					})] }) : /* @__PURE__ */ G(to, {
						view: e.all,
						sections: e.config.sections,
						viewKey: "all"
					}),
					/* @__PURE__ */ G("div", {
						class: `body-2 ${no.footer}`,
						children: [
							"Raw report payload is embedded in",
							" ",
							/* @__PURE__ */ G("code", { children: "<script type=\"application/json\">" }),
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
var io = "(function(){\ndocument.addEventListener(\"click\",function(e){\nvar btn=e.target.closest(\"[data-copy-value]\");\nif(!btn)return;\ne.preventDefault();\nvar value=btn.getAttribute(\"data-copy-value\");\nif(!value)return;\nvar message=btn.getAttribute(\"data-copy-toast\")||\"Copied\";\nnavigator.clipboard.writeText(value).then(function(){\nwindow.__showReportToast(message);\n}).catch(function(){});\n});\n})();", ao = "(function(){\ndocument.addEventListener(\"click\",function(e){\nvar target=e.target.closest(\"[data-groq-flyout-target]\");\nif(target){\ne.preventDefault();\nvar id=target.getAttribute(\"data-groq-flyout-target\");\nif(!id)return;\nvar dialog=document.getElementById(id);\nif(dialog&&typeof dialog.showModal===\"function\")dialog.showModal();\nreturn;\n}\nif(e.target.closest(\"[data-groq-flyout-close]\")){\nvar closeDialog=e.target.closest(\"dialog[data-groq-flyout]\");\nif(closeDialog)closeDialog.close();\n}\n});\ndocument.addEventListener(\"click\",function(e){\nvar dialog=e.target;\nif(dialog&&dialog.tagName===\"DIALOG\"&&dialog.hasAttribute(\"data-groq-flyout\")&&e.target===dialog){\ndialog.close();\n}\n});\n})();", oo = "(function(){\nvar button=document.getElementById(\"download-markdown\");\nvar payloadEl=document.getElementById(\"report-markdown\");\nif(!button||!payloadEl)return;\n\nbutton.addEventListener(\"click\",function(){\nvar payload;\ntry{payload=JSON.parse(payloadEl.textContent||\"\");}catch(e){return;}\nif(!payload||!payload.filenameBase)return;\n\nvar checkbox=document.getElementById(\"show-studio-requests\");\nvar view=checkbox&&checkbox.checked?\"all\":\"billable\";\nif(!checkbox)view=\"all\";\n\nvar markdown=view===\"all\"?payload.all:payload.billable;\nif(!markdown)return;\n\nvar suffix=view===\"all\"?\"_all\":\"_billable-only\";\nvar filename=payload.filenameBase+suffix+\".md\";\nvar blob=new Blob([markdown],{type:\"text/markdown;charset=utf-8\"});\nvar url=URL.createObjectURL(blob);\nvar link=document.createElement(\"a\");\nlink.href=url;\nlink.download=filename;\nlink.click();\nURL.revokeObjectURL(url);\nwindow.__showReportToast(\"Downloaded\");\n});\n})();", so = "(function(){\nvar toast=null,hideTimer=null;\nvar supportsPopover=typeof HTMLElement.prototype.showPopover===\"function\";\nwindow.__showReportToast=function(message){\nif(!toast){\ntoast=document.createElement(\"div\");\ntoast.className=\"copy-toast\";\ntoast.setAttribute(\"role\",\"status\");\ntoast.setAttribute(\"aria-live\",\"polite\");\nif(supportsPopover)toast.setAttribute(\"popover\",\"manual\");\ndocument.body.appendChild(toast);\n}\ntoast.textContent=message||\"Done\";\nif(supportsPopover){\nif(toast.matches(\":popover-open\"))toast.hidePopover();\ntoast.showPopover();\n}\ntoast.classList.add(\"copy-toast--visible\");\nclearTimeout(hideTimer);\nhideTimer=setTimeout(function(){\ntoast.classList.remove(\"copy-toast--visible\");\nif(supportsPopover&&toast.matches(\":popover-open\"))toast.hidePopover();\n},1500);\n};\n})();", co = "(function(){\nfunction parseHash(hash){\nvar raw=(hash||\"\").replace(/^#/,\"\");\nif(!raw)return{section:\"\",urlTab:null};\nif(raw.indexOf(\"urls/\")===0)return{section:\"urls\",urlTab:raw.slice(5),full:raw};\nif(raw===\"urls\")return{section:\"urls\",urlTab:null,full:\"urls\"};\nreturn{section:raw,urlTab:null,full:raw};\n}\n\nfunction scrollToSection(section,fullHash){\nvar target=document.querySelector('[data-report-view]:not([hidden]) [data-section=\"'+section+'\"]');\nif(!target)return;\ntarget.scrollIntoView({behavior:\"smooth\",block:\"start\"});\nif(history.replaceState){\nhistory.replaceState(null,\"\",window.location.pathname+window.location.search+\"#\"+fullHash);\n}else{\nwindow.location.hash=fullHash;\n}\n}\n\nfunction navigate(hash){\nvar parsed=parseHash(hash);\nif(!parsed.section)return;\nscrollToSection(parsed.section,parsed.full);\nif(parsed.section===\"urls\"&&typeof window.__activateUrlTab===\"function\"){\nwindow.__activateUrlTab(parsed.urlTab);\n}\n}\n\ndocument.addEventListener(\"click\",function(e){\nvar link=e.target.closest(\"[data-toc-link]\");\nif(!link)return;\nvar slug=(link.getAttribute(\"href\")||\"\").replace(/^#/,\"\");\nif(!slug)return;\ne.preventDefault();\nnavigate(\"#\"+slug);\n});\n\nvar initialHash=window.location.hash;\nif(initialHash){\nrequestAnimationFrame(function(){navigate(initialHash);});\n}\n})();", lo = "(function(){\nfunction visibleUrlTabsSection(){\nreturn document.querySelector('[data-report-view]:not([hidden]) [data-url-tabs]');\n}\n\nfunction activateUrlTab(tab){\nvar section=visibleUrlTabsSection();\nif(!section)return;\nvar resolved=tab||section.getAttribute(\"data-default-url-tab\")||\"image\";\nif(!section.querySelector('[data-url-tab=\"'+resolved+'\"]')){\nresolved=section.getAttribute(\"data-default-url-tab\")||\"image\";\n}\nvar tabs=section.querySelectorAll(\"[data-url-tab]\");\nvar panels=section.querySelectorAll(\"[data-url-panel]\");\ntabs.forEach(function(btn){\nvar isActive=btn.getAttribute(\"data-url-tab\")===resolved;\nbtn.setAttribute(\"aria-selected\",isActive?\"true\":\"false\");\n});\npanels.forEach(function(panel){\npanel.hidden=panel.getAttribute(\"data-url-panel\")!==resolved;\n});\nsection.setAttribute(\"data-active-url-tab\",resolved);\n}\n\nwindow.__activateUrlTab=activateUrlTab;\n\ndocument.addEventListener(\"click\",function(e){\nvar tabButton=e.target.closest(\"[data-url-tab]\");\nif(!tabButton)return;\nvar section=tabButton.closest(\"[data-url-tabs]\");\nif(!section)return;\nvar tab=tabButton.getAttribute(\"data-url-tab\");\nif(!tab)return;\ne.preventDefault();\nactivateUrlTab(tab);\nvar suffix=tab===\"image\"?\"\":(\"/\"+tab);\nif(history.replaceState){\nhistory.replaceState(null,\"\",window.location.pathname+window.location.search+\"#urls\"+suffix);\n}\n});\n})();", uo = "(function(){\nvar STORAGE_KEY=\"sanity-log-report-show-studio\";\nvar checkbox=document.getElementById(\"show-studio-requests\");\nvar billableView=document.querySelector('[data-report-view=\"billable\"]');\nvar allView=document.querySelector('[data-report-view=\"all\"]');\nif(!checkbox||!billableView||!allView)return;\n\nfunction setView(showAll){\nbillableView.hidden=showAll;\nallView.hidden=!showAll;\ntry{sessionStorage.setItem(STORAGE_KEY,showAll?\"1\":\"0\");}catch(e){}\n}\n\nvar saved=null;\ntry{saved=sessionStorage.getItem(STORAGE_KEY);}catch(e){}\nif(saved===\"1\"){\ncheckbox.checked=true;\nsetView(true);\n}\n\ncheckbox.addEventListener(\"change\",function(){\nsetView(checkbox.checked);\n});\n})();", fo = [
	":root{--text-size-xs:1.152rem;--text-size-sm:1.44rem;--text-size-md:1.52rem;--tracking-tight:.02em;--tracking-wide:.0275em}.heading-1{letter-spacing:var(--tracking-tight);font-size:clamp(3.2rem,4vw,5.2rem);line-height:.95}.heading-2{font-size:1.92rem;font-weight:700}.heading-3{font-size:1.6rem;font-weight:600}.heading-4{font-size:2.08rem;font-weight:700}.display-1{font-size:clamp(2.32rem,2vw,3.52rem);font-weight:800}.eyebrow-1{font-size:var(--text-size-xs);letter-spacing:var(--tracking-wide);text-transform:uppercase;font-weight:700}.body-1{font-size:var(--text-size-md)}.body-2{font-size:var(--text-size-sm)}.tracking-tight{letter-spacing:var(--tracking-tight)}.tracking-wide{letter-spacing:var(--tracking-wide)}html{font-size:62.5%}:root{--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--bg:#09090b;--panel:#18181be6;--panel-border:#3f3f46e6;--text:#f4f4f5;--muted:#a1a1aa;--radius-lg:2rem;--radius-md:1.2rem;--radius-sm:.7rem;--radius-pill:99.9rem;--border-subtle:#ffffff14;--border-faint:#ffffff1f;--track-bg:#ffffff14;--font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace}*{box-sizing:border-box}body{min-height:100vh;font-family:var(--font-sans);font-size:var(--text-size-md);color:var(--text);background:#101011;margin:0}h3{margin:0}.num{color:var(--muted);font-variant-numeric:tabular-nums}code,pre{font-family:var(--font-mono)}.card{border:.1rem solid var(--border-subtle);border-radius:var(--radius-md);background:var(--panel);-webkit-backdrop-filter:blur(.8rem);backdrop-filter:blur(.8rem);padding:1.6rem}.copy-toast{z-index:9999;border-radius:var(--radius-pill);border:.1rem solid var(--border-faint);color:var(--text);font-size:var(--text-size-sm);opacity:0;pointer-events:none;background:#18181b;margin:0;padding:.8rem 1.6rem;font-weight:500;transition:opacity .2s,transform .2s;position:fixed;bottom:2.4rem;left:50%;transform:translate(-50%)translateY(1rem);box-shadow:0 .4rem 1.6rem #00000059}.copy-toast--visible{opacity:1;transform:translate(-50%)translateY(0)}",
	"._page_ji3w4_1{max-width:160rem;margin:0 auto;padding:3.2rem 2rem 5.6rem}._layout_ji3w4_7{grid-template-columns:22rem minmax(0,1fr);align-items:start;gap:2.4rem;display:grid}._content_ji3w4_14{min-width:0}._footer_ji3w4_18{color:var(--muted);margin-top:2.4rem}@media (width<=90rem){._layout_ji3w4_7{grid-template-columns:1fr}}",
	"._header_1755g_1{flex-wrap:wrap;justify-content:space-between;align-items:end;gap:1.6rem;margin-bottom:2.4rem;display:flex}._title_1755g_10{margin:0}._subtitle_1755g_14{color:var(--muted);max-width:72ch;margin-top:1rem}._meta_1755g_20{text-align:right;color:var(--muted);justify-items:end;gap:.8rem;display:grid}@media (width<=110rem){._meta_1755g_20{text-align:left;justify-items:start}._header_1755g_1{align-items:start}}",
	"._toc_15opi_1{border:.1rem solid var(--border-subtle);border-radius:var(--radius-md);background:var(--panel);-webkit-backdrop-filter:blur(.8rem);backdrop-filter:blur(.8rem);align-self:start;padding:1.6rem;position:sticky;top:2rem}._heading_15opi_12{color:var(--muted);margin-bottom:1.2rem}._list_15opi_17{gap:.4rem;margin:0;padding:0;list-style:none;display:grid}._link_15opi_25{border-radius:var(--radius-sm);color:var(--text);font-size:var(--text-size-sm);padding:.6rem .8rem;text-decoration:none;transition:background .15s;display:block}._link_15opi_25:hover{background:#ffffff0f}._subList_15opi_39{gap:.2rem;margin:.2rem 0 .4rem;padding:0 0 0 1.2rem;list-style:none;display:grid}._subLink_15opi_47{border-radius:var(--radius-sm);color:var(--muted);font-size:var(--text-size-xs);padding:.4rem .8rem;text-decoration:none;transition:background .15s;display:block}._subLink_15opi_47:hover{color:var(--text);background:#ffffff0f}@media (width<=90rem){._toc_15opi_1{position:static}}",
	"._row_1de3z_1{flex-wrap:wrap;align-items:center;gap:1.2rem;margin-bottom:2.4rem;display:flex}._row_1de3z_1>:first-child{flex:24rem}",
	"._toggle_qim5j_1{border:.1rem solid var(--border-subtle);border-radius:var(--radius-md);background:var(--panel);cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;gap:1rem;padding:1.2rem 1.6rem;display:flex}._input_qim5j_13{cursor:pointer;width:1.6rem;height:1.6rem;accent-color:var(--color-blue,#0ea5e9);margin:0}._label_qim5j_21{font-size:var(--text-size-sm);color:var(--text)}",
	"._button_1k609_1{border:.1rem solid var(--border-subtle);border-radius:var(--radius-md);background:var(--panel);color:var(--text);font-size:var(--text-size-sm);cursor:pointer;white-space:nowrap;align-items:center;gap:.8rem;padding:1.2rem 1.6rem;font-family:inherit;transition:border-color .15s,background .15s;display:inline-flex}._button_1k609_1:hover{border-color:var(--border-faint);background:#ffffff0a}._button_1k609_1 svg{flex-shrink:0;width:1.6rem;height:1.6rem}",
	"._sectionBlock_1pzat_1{scroll-margin-top:2rem}._viewGrid_1pzat_5{grid-template-columns:repeat(auto-fit,minmax(0,1fr));gap:1.6rem;margin-bottom:2.4rem;display:grid}._grid2_1pzat_12{grid-template-columns:repeat(2,minmax(0,1fr));gap:1.6rem;margin-bottom:2.4rem;display:grid}@media (width<=110rem){._grid2_1pzat_12{grid-template-columns:1fr}}._stack_1pzat_25{gap:1.6rem;display:grid}._sectionTitle_1pzat_30{color:var(--muted);margin:.8rem 0 -.4rem;padding-left:.4rem}",
	"._metric_4re7a_1{border:.1rem solid var(--border-subtle);border-radius:var(--radius-md);background:var(--panel);-webkit-backdrop-filter:blur(.8rem);backdrop-filter:blur(.8rem);align-content:space-between;min-height:12rem;padding:1.6rem;display:grid}._label_4re7a_12{color:var(--muted)}._value_4re7a_16{margin-top:1rem}._note_4re7a_20{color:var(--muted);margin-top:.8rem}",
	"._wrap_19u7b_1{justify-items:center;gap:1.6rem;margin-top:1.2rem;display:grid}._donut_19u7b_8{aspect-ratio:1;border-radius:50%;place-items:center;width:100%;padding:2.2rem;display:grid;position:relative}._donut_19u7b_8:after{content:\"\";border:.1rem solid var(--border-subtle);background:#0a0a0cf2;border-radius:50%;position:absolute;inset:2.4rem}._center_19u7b_27{z-index:1;text-align:center;justify-items:center;gap:.4rem;display:grid;position:relative}._legend_19u7b_36{width:100%;color:var(--muted);gap:1rem;display:grid}._legend_19u7b_36 strong{color:var(--text)}._swatch_19u7b_47{border-radius:var(--radius-pill);vertical-align:-.1rem;width:1.1rem;height:1.1rem;margin-right:.8rem;display:inline-block}",
	"._bars_10ft9_1{gap:1rem;margin-top:1.2rem;display:grid}._row_10ft9_7{gap:.6rem;display:grid}._head_10ft9_12{justify-content:space-between;align-items:baseline;gap:1.6rem;display:flex}._label_10ft9_19{text-overflow:ellipsis;white-space:nowrap;min-width:0;color:var(--text);overflow:hidden}._value_10ft9_27,._meta_10ft9_32{color:var(--muted);font-variant-numeric:tabular-nums}._track_10ft9_37{border-radius:var(--radius-pill);background:var(--track-bg);width:100%;height:1rem;overflow:hidden}._fill_10ft9_45{border-radius:inherit;height:100%}",
	"._empty_14852_1{color:var(--muted);font-size:var(--text-size-sm);margin:1.2rem 0 0}._chart_14852_7{gap:.8rem;min-height:0;margin-top:1.2rem;display:flex}._yAxis_14852_14{flex-direction:column;flex-shrink:0;justify-content:space-between;width:5.6rem;height:26.8rem;margin-bottom:3.2rem;display:flex}._yTick_14852_24{color:var(--muted);font-size:var(--text-size-xs);font-variant-numeric:tabular-nums;text-align:right;line-height:1}._plotArea_14852_32{flex:1;min-width:0}._barRegion_14852_37{height:30rem;max-height:30rem;position:relative}._gridLine_14852_43{pointer-events:none;border-top:.1rem solid #ffffff0f;height:0;position:absolute;left:0;right:0}._bars_14852_52{z-index:1;box-sizing:border-box;align-items:stretch;gap:.4rem;height:100%;padding-bottom:3.2rem;display:flex;position:relative;overflow-x:auto}._barColumn_14852_64{flex-direction:column;flex:1 1 0;align-items:stretch;min-width:1.6rem;min-height:0;display:flex;position:relative}._barTrack_14852_74{flex:1;align-items:flex-end;min-height:0;display:flex}._bar_14852_37{border-radius:var(--radius-sm) var(--radius-sm) 0 0;width:100%;min-height:.2rem;transition:opacity .15s}._barColumn_14852_64:hover ._bar_14852_37,._barColumn_14852_64:focus-within ._bar_14852_37{opacity:.85}._barColumn_14852_64:after{content:attr(data-tip);z-index:2;border-radius:var(--radius-sm);border:.1rem solid var(--border-faint);color:var(--text);font-size:var(--text-size-xs);font-variant-numeric:tabular-nums;white-space:nowrap;opacity:0;pointer-events:none;background:#18181b;padding:.4rem .8rem;line-height:1.4;transition:opacity .15s,transform .15s;position:absolute;bottom:calc(100% - 2.6rem);left:50%;transform:translate(-50%)translateY(.4rem);box-shadow:0 .4rem 1.2rem #00000059}._barColumn_14852_64:hover:after,._barColumn_14852_64:focus-within:after{opacity:1;transform:translate(-50%)translateY(0)}._xLabel_14852_123{max-width:100%;height:2.4rem;color:var(--muted);font-size:var(--text-size-xs);text-align:center;text-overflow:ellipsis;white-space:nowrap;flex-shrink:0;margin-top:.8rem;line-height:1.2;overflow:hidden}",
	"._wrap_3lzo_1{border-radius:var(--radius-sm);border:.1rem solid var(--border-subtle);max-height:42rem;margin-top:1.2rem;overflow:auto}._table_3lzo_9{border-collapse:collapse;width:100%}._table_3lzo_9 th,._table_3lzo_9 td{text-align:left;vertical-align:top;border-bottom:.1rem solid #ffffff12;padding:1rem 1.2rem}._table_3lzo_9 th{color:var(--muted);-webkit-backdrop-filter:blur(1.2rem);backdrop-filter:blur(1.2rem);background:#0c0c10f5;font-weight:600;position:sticky;top:0}._labelCell_3lzo_31{max-width:52rem}._labelCellInner_3lzo_35{align-items:center;gap:.6rem;min-width:0;display:flex}._labelText_3lzo_42{text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0;overflow:hidden}._copyButton_3lzo_50{border-radius:var(--radius-sm);width:2.4rem;height:2.4rem;color:var(--muted);cursor:pointer;background:0 0;border:none;flex-shrink:0;justify-content:center;align-items:center;padding:0;display:inline-flex}._copyButton_3lzo_50:hover{color:var(--text);background:#ffffff0f}._copyButton_3lzo_50 svg{width:1.4rem;height:1.4rem}",
	"._chip_1idw4_1{border:.1rem solid var(--border-faint);border-radius:var(--radius-pill);color:var(--color-amber,#f59e0b);font-size:var(--text-size-xs);background:#f59e0b1f;flex-shrink:0;padding:.3rem .8rem;font-weight:600}",
	"._summary_1whfi_1{flex-wrap:wrap;gap:.8rem;margin-top:1.2rem;display:flex}._stat_1whfi_8{border:.1rem solid var(--border-faint);border-radius:var(--radius-pill);color:var(--muted);font-size:var(--text-size-xs);align-items:baseline;gap:.4rem;padding:.4rem .9rem;display:inline-flex}._stat_1whfi_8 strong{color:var(--text);font-size:var(--text-size-sm);font-weight:600}._labelStack_1whfi_25{flex-direction:column;gap:.3rem;min-width:0;display:flex}._labelHead_1whfi_32{align-items:center;gap:.6rem;min-width:0;display:flex}._deviceIcon_1whfi_39{width:1.6rem;height:1.6rem;color:var(--muted);flex-shrink:0;justify-content:center;align-items:center;display:inline-flex}._deviceIcon_1whfi_39 svg{width:1.4rem;height:1.4rem}._parsedLabel_1whfi_54{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}._rawLabel_1whfi_61{color:var(--muted);font-size:var(--text-size-xs);text-overflow:ellipsis;white-space:nowrap;padding-left:2.2rem;line-height:1.35;overflow:hidden}",
	"._section_1lzo0_1{margin-top:0}._tabList_1lzo0_5{flex-wrap:wrap;gap:.6rem;margin-top:1.2rem;display:flex}._tab_1lzo0_5{border:.1rem solid var(--border-subtle);border-radius:var(--radius-pill);color:var(--muted);font-size:var(--text-size-sm);cursor:pointer;background:0 0;padding:.6rem 1.2rem;font-weight:600}._tab_1lzo0_5:hover{color:var(--text);background:#ffffff0f}._tab_1lzo0_5[aria-selected=true]{border-color:color-mix(in srgb, var(--color-blue) 45%, transparent);color:var(--color-blue);background:#0ea5e91f}._panel_1lzo0_34{margin-top:1.2rem}._panel_1lzo0_34[hidden]{display:none}",
	"._empty_1vmp7_1{color:var(--muted);font-size:var(--text-size-sm);margin:0;padding:1.2rem 0}._viewQueryButton_1vmp7_8{border:.1rem solid var(--border-faint);border-radius:var(--radius-pill);color:var(--color-blue);font-size:var(--text-size-xs);cursor:pointer;background:#0ea5e91f;flex-shrink:0;padding:.3rem .8rem;font-weight:600}._viewQueryButton_1vmp7_8:hover{background:#0ea5e933}",
	"._dialog_1b6be_1{border:.1rem solid var(--border-faint);border-radius:var(--radius-md);background:var(--panel);width:100%;max-width:min(72rem,100vw - 3.2rem);color:var(--text);padding:0;box-shadow:0 1.6rem 4.8rem #00000073}._dialog_1b6be_1::backdrop{-webkit-backdrop-filter:blur(.2rem);backdrop-filter:blur(.2rem);background:#0000008c}._panel_1b6be_17{padding:1.2rem 1.6rem 1.6rem}._header_1b6be_21{align-items:center;gap:.8rem;margin-bottom:1.2rem;display:flex}._title_1b6be_28{flex:1;font-size:1.4rem}._iconButton_1b6be_33{border-radius:var(--radius-sm);width:2.8rem;height:2.8rem;color:var(--muted);cursor:pointer;background:0 0;border:none;justify-content:center;align-items:center;padding:0;font-size:2rem;line-height:1;display:inline-flex}._iconButton_1b6be_33:hover{color:var(--text);background:#ffffff0f}._iconButton_1b6be_33 svg{width:1.4rem;height:1.4rem}._copyButton_1b6be_59{border:.1rem solid var(--border-faint);border-radius:var(--radius-pill);color:var(--muted);cursor:pointer;font-size:var(--text-size-xs);background:#ffffff0a;align-items:center;gap:.4rem;padding:.4rem .8rem;font-weight:600;display:inline-flex}._copyButton_1b6be_59:hover{color:var(--text);background:#ffffff14}._copyButtonLabel_1b6be_78{line-height:1}._copyButton_1b6be_59 svg{width:1.4rem;height:1.4rem}._section_1b6be_87+._section_1b6be_87{border-top:.1rem solid var(--border-subtle);margin-top:1.6rem;padding-top:1.6rem}._stats_1b6be_93{grid-template-columns:repeat(3,minmax(0,1fr));gap:.8rem;margin:0;display:grid}._stat_1b6be_93{border:.1rem solid var(--border-subtle);border-radius:var(--radius-sm);background:#0003;margin:0;padding:1rem 1.2rem}._statLabel_1b6be_108{font-size:var(--text-size-xs);color:var(--muted);margin:0}._statValue_1b6be_114{font-size:var(--text-size-sm);font-variant-numeric:tabular-nums;margin:.4rem 0 0}._sectionLabel_1b6be_120{color:var(--muted);margin-bottom:.8rem}._pre_1b6be_125{border-radius:var(--radius-sm);border:.1rem solid var(--border-subtle);max-height:24rem;font-family:var(--font-mono);font-size:var(--text-size-sm);white-space:pre-wrap;word-break:break-word;background:#00000059;margin:0;padding:1.2rem;line-height:1.5;overflow:auto}._error_1b6be_140{font-size:var(--text-size-sm);color:var(--muted);margin:0}",
	"._stats_8ca1h_1{gap:.6rem;margin:0;display:grid}._row_8ca1h_7{font-size:var(--text-size-sm);grid-template-columns:1fr auto;align-items:baseline;gap:1.2rem;display:grid}._row_8ca1h_7 dt{color:var(--muted);margin:0}._row_8ca1h_7 dd{color:var(--text);margin:0}._group_8ca1h_25{border-top:.1rem solid var(--border-subtle);gap:.6rem;margin-top:.4rem;padding-top:.8rem;display:grid}._groupLabel_8ca1h_33{font-size:var(--text-size-xs);color:var(--text);letter-spacing:.04em;font-weight:600}._empty_8ca1h_40{font-size:var(--text-size-sm);color:var(--muted);margin:0}",
	".language-groq .token.comment{color:#71717a}.language-groq .token.string{color:#86efac}.language-groq .token.number,.language-groq .token.boolean,.language-groq .token.null{color:#fcd34d}.language-groq .token.keyword-operator{color:#c4b5fd}.language-groq .token.function{color:#7dd3fc}.language-groq .token.namespace{color:#fdba74}.language-groq .token.variable,.language-groq .token.special-variable{color:#f9a8d4}.language-groq .token.wildcard{color:#f472b6}.language-groq .token.operator{color:#a1a1aa}.language-groq .token.spread,.language-groq .token.punctuation{color:#d4d4d8}"
].join("\n");
//#endregion
//#region src/report/report-renderer.tsx
function po(e) {
	let t = st(/* @__PURE__ */ G(ro, { data: e })), n = lt(e), r = lt({
		filenameBase: or(e.title),
		billable: fr(e, "billable"),
		all: fr(e, "all")
	});
	return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${e.title}</title>
  <style>${fo}</style>
</head>
<body>
${t}
  <script type="application/json" id="report-data">${n}<\/script>
  <script type="application/json" id="report-markdown">${r}<\/script>
  <script>${so}<\/script>
  <script>${io}<\/script>
  <script>${uo}<\/script>
  <script>${oo}<\/script>
  <script>${lo}<\/script>
  <script>${ao}<\/script>
  <script>${co}<\/script>
</body>
</html>`;
}
//#endregion
export { po as renderReportHtml };
