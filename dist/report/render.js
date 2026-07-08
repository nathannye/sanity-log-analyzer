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
}) : a, n)), l, u, d, f, p, m, h, g, _, v, y, b, ee, x, S = {}, C = [], te = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, w = Array.isArray;
function ne(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function re(e) {
	e && e.parentNode && e.parentNode.removeChild(e);
}
function ie(e, t, n) {
	var r, i, a, o = {};
	for (a in t) a == "key" ? r = t[a] : a == "ref" ? i = t[a] : o[a] = t[a];
	if (arguments.length > 2 && (o.children = arguments.length > 3 ? l.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) o[a] === void 0 && (o[a] = e.defaultProps[a]);
	return ae(e, o, r, i, null);
}
function ae(e, t, n, r, i) {
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
function T(e) {
	return e.children;
}
function E(e, t) {
	this.props = e, this.context = t;
}
function D(e, t) {
	if (t == null) return e.__ ? D(e.__, e.__i + 1) : null;
	for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? D(e) : null;
}
function oe(e) {
	if (e.__P && e.__d) {
		var t = e.__v, n = t.__e, r = [], i = [], a = ne({}, t);
		a.__v = t.__v + 1, u.vnode && u.vnode(a), he(e.__P, a, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, r, n ?? D(t), !!(32 & t.__u), i), a.__v = t.__v, a.__.__k[a.__i] = a, _e(r, a, i), t.__e = t.__ = null, a.__e != n && O(a);
	}
}
function O(e) {
	if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
		if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
	}), O(e);
}
function k(e) {
	(!e.__d && (e.__d = !0) && f.push(e) && !se.__r++ || p != u.debounceRendering) && ((p = u.debounceRendering) || m)(se);
}
function se() {
	try {
		for (var e, t = 1; f.length;) f.length > t && f.sort(h), e = f.shift(), t = f.length, oe(e);
	} finally {
		f.length = se.__r = 0;
	}
}
function ce(e, t, n, r, i, a, o, s, c, l, u) {
	var d, f, p, m, h, g, _, v = r && r.__k || C, y = t.length;
	for (c = le(n, t, v, c, y), d = 0; d < y; d++) (p = n.__k[d]) != null && (f = p.__i != -1 && v[p.__i] || S, p.__i = d, g = he(e, p, f, i, a, o, s, c, l, u), m = p.__e, p.ref && f.ref != p.ref && (f.ref && be(f.ref, null, p), u.push(p.ref, p.__c || m, p)), h == null && m != null && (h = m), (_ = !!(4 & p.__u)) || f.__k === p.__k ? (c = ue(p, c, e, _), _ && f.__e && (f.__e = null)) : typeof p.type == "function" && g !== void 0 ? c = g : m && (c = m.nextSibling), p.__u &= -7);
	return n.__e = h, c;
}
function le(e, t, n, r, i) {
	var a, o, s, c, l, u = n.length, d = u, f = 0;
	for (e.__k = Array(i), a = 0; a < i; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = e.__k[a] = ae(null, o, null, null, null) : w(o) ? o = e.__k[a] = ae(T, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = e.__k[a] = ae(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : e.__k[a] = o, c = a + f, o.__ = e, o.__b = e.__b + 1, s = null, (l = o.__i = de(o, n, c, d)) != -1 && (d--, (s = n[l]) && (s.__u |= 2)), s == null || s.__v == null ? (l == -1 && (i > u ? f-- : i < u && f++), typeof o.type != "function" && (o.__u |= 4)) : l != c && (l == c - 1 ? f-- : l == c + 1 ? f++ : (l > c ? f-- : f++, o.__u |= 4))) : e.__k[a] = null;
	if (d) for (a = 0; a < u; a++) (s = n[a]) != null && !(2 & s.__u) && (s.__e == r && (r = D(s)), xe(s, s));
	return r;
}
function ue(e, t, n, r) {
	var i, a;
	if (typeof e.type == "function") {
		for (i = e.__k, a = 0; i && a < i.length; a++) i[a] && (i[a].__ = e, t = ue(i[a], t, n, r));
		return t;
	}
	e.__e != t && (r && (t && e.type && !t.parentNode && (t = D(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
	do
		t &&= t.nextSibling;
	while (t != null && t.nodeType == 8);
	return t;
}
function de(e, t, n, r) {
	var i, a, o, s = e.key, c = e.type, l = t[n], u = l != null && (2 & l.__u) == 0;
	if (l === null && s == null || u && s == l.key && c == l.type) return n;
	if (r > +!!u) {
		for (i = n - 1, a = n + 1; i >= 0 || a < t.length;) if ((l = t[o = i >= 0 ? i-- : a++]) != null && !(2 & l.__u) && s == l.key && c == l.type) return o;
	}
	return -1;
}
function fe(e, t, n) {
	t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || te.test(t) ? n : n + "px";
}
function pe(e, t, n, r, i) {
	var a, o;
	n: if (t == "style") if (typeof n == "string") e.style.cssText = n;
	else {
		if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || fe(e.style, t, "");
		if (n) for (t in n) r && n[t] == r[t] || fe(e.style, t, n[t]);
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
function me(e) {
	return function(t) {
		if (this.l) {
			var n = this.l[t.type + e];
			if (t[_] == null) t[_] = b++;
			else if (t[_] < n[v]) return;
			return n(u.event ? u.event(t) : t);
		}
	};
}
function he(e, t, n, r, i, a, o, s, c, l) {
	var d, f, p, m, h, g, _, v, y, b, ee, x, S, te, ie, ae, D = t.type;
	if (t.constructor !== void 0) return null;
	128 & n.__u && (c = !!(32 & n.__u), a = [s = t.__e = n.__e]), (d = u.__b) && d(t);
	n: if (typeof D == "function") {
		f = o.length;
		try {
			if (y = t.props, b = D.prototype && D.prototype.render, ee = (d = D.contextType) && r[d.__c], x = d ? ee ? ee.props.value : d.__ : r, n.__c ? v = (p = t.__c = n.__c).__ = p.__E : (b ? t.__c = p = new D(y, x) : (t.__c = p = new E(y, x), p.constructor = D, p.render = Se), ee && ee.sub(p), p.state ||= {}, p.__n = r, m = p.__d = !0, p.__h = [], p._sb = []), b && p.__s == null && (p.__s = p.state), b && D.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = ne({}, p.__s)), ne(p.__s, D.getDerivedStateFromProps(y, p.__s))), h = p.props, g = p.state, p.__v = t, m) b && D.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), b && p.componentDidMount != null && p.__h.push(p.componentDidMount);
			else {
				if (b && D.getDerivedStateFromProps == null && y !== h && p.componentWillReceiveProps != null && p.componentWillReceiveProps(y, x), t.__v == n.__v || !p.__e && p.shouldComponentUpdate != null && !1 === p.shouldComponentUpdate(y, p.__s, x)) {
					t.__v != n.__v && (p.props = y, p.state = p.__s, p.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(e) {
						e && (e.__ = t);
					}), C.push.apply(p.__h, p._sb), p._sb = [], p.__h.length && o.push(p);
					break n;
				}
				p.componentWillUpdate != null && p.componentWillUpdate(y, p.__s, x), b && p.componentDidUpdate != null && p.__h.push(function() {
					p.componentDidUpdate(h, g, _);
				});
			}
			if (p.context = x, p.props = y, p.__P = e, p.__e = !1, S = u.__r, te = 0, b) p.state = p.__s, p.__d = !1, S && S(t), d = p.render(p.props, p.state, p.context), C.push.apply(p.__h, p._sb), p._sb = [];
			else do
				p.__d = !1, S && S(t), d = p.render(p.props, p.state, p.context), p.state = p.__s;
			while (p.__d && ++te < 25);
			p.state = p.__s, p.getChildContext != null && (r = ne(ne({}, r), p.getChildContext())), b && !m && p.getSnapshotBeforeUpdate != null && (_ = p.getSnapshotBeforeUpdate(h, g)), ie = d != null && d.type === T && d.key == null ? ve(d.props.children) : d, s = ce(e, w(ie) ? ie : [ie], t, n, r, i, a, o, s, c, l), p.base = t.__e, t.__u &= -161, p.__h.length && o.push(p), v && (p.__E = p.__ = null);
		} catch (e) {
			if (o.length = f, t.__v = null, c || a != null) {
				if (e.then) {
					for (t.__u |= c ? 160 : 128; s && s.nodeType == 8 && s.nextSibling;) s = s.nextSibling;
					a != null && (a[a.indexOf(s)] = null), t.__e = s;
				} else if (a != null) for (ae = a.length; ae--;) re(a[ae]);
			} else t.__e = n.__e;
			t.__k ??= n.__k || [], e.then || ge(t), u.__e(e, t, n);
		}
	} else a == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = ye(n.__e, t, n, r, i, a, o, c, l);
	return (d = u.diffed) && d(t), 128 & t.__u ? void 0 : s;
}
function ge(e) {
	e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(ge));
}
function _e(e, t, n) {
	for (var r = 0; r < n.length; r++) be(n[r], n[++r], n[++r]);
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
function ve(e) {
	return typeof e != "object" || !e || e.__b > 0 ? e : w(e) ? e.map(ve) : e.constructor === void 0 ? ne({}, e) : null;
}
function ye(e, t, n, r, i, a, o, s, c) {
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
		for (d in v) h = v[d], d == "dangerouslySetInnerHTML" ? p = h : d == "children" || d in y || d == "value" && "defaultValue" in y || d == "checked" && "defaultChecked" in y || pe(e, d, null, h, i);
		for (d in y) h = y[d], d == "children" ? m = h : d == "dangerouslySetInnerHTML" ? f = h : d == "value" ? g = h : d == "checked" ? _ = h : s && typeof h != "function" || v[d] === h || pe(e, d, h, v[d], i);
		if (f) s || p && (f.__html == p.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
		else if (p && (e.innerHTML = ""), ce(t.type == "template" ? e.content : e, w(m) ? m : [m], t, n, r, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, o, a ? a[0] : n.__k && D(n, 0), s, c), a != null) for (d = a.length; d--;) re(a[d]);
		s && b != "textarea" || (d = "value", b == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[d] || b == "progress" && !g || b == "option" && g != v[d]) && pe(e, d, g, v[d], i), d = "checked", _ != null && _ != e[d] && pe(e, d, _, v[d], i));
	}
	return e;
}
function be(e, t, n) {
	try {
		if (typeof e == "function") {
			var r = typeof e.__u == "function";
			r && e.__u(), r && t == null || (e.__u = e(t));
		} else e.current = t;
	} catch (e) {
		u.__e(e, n);
	}
}
function xe(e, t, n) {
	var r, i;
	if (u.unmount && u.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || be(r, null, t)), (r = e.__c) != null) {
		if (r.componentWillUnmount) try {
			r.componentWillUnmount();
		} catch (e) {
			u.__e(e, t);
		}
		r.base = r.__P = r.__n = null;
	}
	if (r = e.__k) for (i = 0; i < r.length; i++) r[i] && xe(r[i], t, n || typeof e.type != "function");
	n || re(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Se(e, t, n) {
	return this.constructor(e, n);
}
l = C.slice, u = { __e: function(e, t, n, r) {
	for (var i, a, o; t = t.__;) if ((i = t.__c) && !i.__) try {
		if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i;
	} catch (t) {
		e = t;
	}
	throw e;
} }, d = 0, E.prototype.setState = function(e, t) {
	var n = this.__s != null && this.__s != this.state ? this.__s : this.__s = ne({}, this.state);
	typeof e == "function" && (e = e(ne({}, n), this.props)), e && ne(n, e), e != null && this.__v && (t && this._sb.push(t), k(this));
}, E.prototype.forceUpdate = function(e) {
	this.__v && (this.__e = !0, e && this.__h.push(e), k(this));
}, E.prototype.render = T, f = [], m = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, h = function(e, t) {
	return e.__v.__b - t.__v.__b;
}, se.__r = 0, g = Math.random().toString(8), _ = "__d" + g, v = "__a" + g, y = /(PointerCapture)$|Capture$/i, b = 0, ee = me(!1), x = me(!0);
//#endregion
//#region node_modules/preact-render-to-string/dist/index.module.js
var Ce = "diffed", we = "__c", Te = "__s", Ee = "__c", De = "__k", Oe = "__d", ke = "__s", Ae = /[\s\n\\/='"\0<>]/, je = /^(xlink|xmlns|xml)([A-Z])/, Me = /^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/, Ne = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/, Pe = /* @__PURE__ */ new Set(["draggable", "spellcheck"]);
function Fe(e) {
	e.__g === void 0 ? e[Oe] = !0 : e.__g |= 8;
}
function Ie(e) {
	e.__g === void 0 ? e[Oe] = !1 : e.__g &= -9;
}
function Le(e) {
	return e.__g === void 0 ? !0 === e[Oe] : !!(8 & e.__g);
}
var Re = /["&<]/;
function ze(e) {
	if (e.length === 0 || !1 === Re.test(e)) return e;
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
var Be = {}, Ve = /* @__PURE__ */ new Set(/* @__PURE__ */ "animation-iteration-count.border-image-outset.border-image-slice.border-image-width.box-flex.box-flex-group.box-ordinal-group.column-count.fill-opacity.flex.flex-grow.flex-negative.flex-order.flex-positive.flex-shrink.flood-opacity.font-weight.grid-column.grid-row.line-clamp.line-height.opacity.order.orphans.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-miterlimit.stroke-opacity.stroke-width.tab-size.widows.z-index.zoom".split(".")), He = /[A-Z]/g;
function Ue(e) {
	var t = "";
	for (var n in e) {
		var r = e[n];
		if (r != null && r !== "") {
			var i = n[0] == "-" ? n : Be[n] || (Be[n] = n.replace(He, "-$&").toLowerCase()), a = ";";
			typeof r != "number" || i.startsWith("--") || Ve.has(i) || (a = "px;"), t = t + i + ":" + r + a;
		}
	}
	return t || void 0;
}
function We() {
	this.__d = !0;
}
function Ge(e, t) {
	return {
		__v: e,
		context: t,
		props: e.props,
		setState: We,
		forceUpdate: We,
		__d: !0,
		__h: []
	};
}
function Ke(e, t, n) {
	if (!e.s) {
		if (n instanceof qe) {
			if (!n.s) return void (n.o = Ke.bind(null, e, t));
			1 & t && (t = n.s), n = n.v;
		}
		if (n && n.then) return void n.then(Ke.bind(null, e, t), Ke.bind(null, e, 2));
		e.s = t, e.v = n;
		let r = e.o;
		r && r(e);
	}
}
var qe = /*#__PURE__*/ function() {
	function e() {}
	return e.prototype.then = function(t, n) {
		var r = new e(), i = this.s;
		if (i) {
			var a = 1 & i ? t : n;
			if (a) {
				try {
					Ke(r, 1, a(this.v));
				} catch (e) {
					Ke(r, 2, e);
				}
				return r;
			}
			return this;
		}
		return this.o = function(e) {
			try {
				var i = e.v;
				1 & e.s ? Ke(r, 1, t ? t(i) : i) : n ? Ke(r, 1, n(i)) : Ke(r, 2, i);
			} catch (e) {
				Ke(r, 2, e);
			}
		}, r;
	}, e;
}(), Je, Ye, Xe, Ze, Qe = {}, $e = [], et = Array.isArray, tt = Object.assign, nt = "", rt = "<!--$s-->", it = "<!--/$s-->";
function at(e) {
	return typeof e == "string" ? rt + e + it : et(e) ? (e.unshift(rt), e.push(it), e) : e && typeof e.then == "function" ? e.then(at) : rt + e + it;
}
function ot(e, t, n) {
	var r = u[Te];
	u[Te] = !0, Je = u.__b, Ye = u[Ce], Xe = u.__r, Ze = u.unmount;
	var i = ie(T, null);
	i[De] = [e];
	try {
		var a = ct(e, t || Qe, !1, void 0, i, !1, n);
		return et(a) ? a.join(nt) : a;
	} catch (e) {
		throw e.then ? Error("Use \"renderToStringAsync\" for suspenseful rendering.") : e;
	} finally {
		u[we] && u[we](e, $e), u[Te] = r, $e.length = 0;
	}
}
function st(e, t) {
	var n, r = e.type, i = !0;
	return e[Ee] ? (i = !1, (n = e[Ee]).state = n[ke]) : n = new r(e.props, t), e[Ee] = n, n.__v = e, n.props = e.props, n.context = t, Fe(n), n.state ??= Qe, n[ke] ?? (n[ke] = n.state), r.getDerivedStateFromProps ? n.state = tt({}, n.state, r.getDerivedStateFromProps(n.props, n.state)) : i && n.componentWillMount ? (n.componentWillMount(), n.state = n[ke] === n.state ? n.state : n[ke]) : !i && n.componentWillUpdate && n.componentWillUpdate(), Xe && Xe(e), n.render(n.props, n.state, t);
}
function ct(e, t, n, r, i, a, o) {
	if (e == null || !0 === e || !1 === e || e === nt) return nt;
	var s = typeof e;
	if (s != "object") return s == "function" ? nt : s == "string" ? ze(e) : e + nt;
	if (et(e)) {
		var c, l = nt;
		i[De] = e;
		for (var d = e.length, f = 0; f < d; f++) {
			var p = e[f];
			if (p != null && typeof p != "boolean") {
				var m, h = ct(p, t, n, r, i, a, o);
				typeof h == "string" ? l += h : (c ||= Array(d), l && c.push(l), l = nt, et(h) ? (m = c).push.apply(m, h) : c.push(h));
			}
		}
		return c ? (l && c.push(l), c) : l;
	}
	if (e.constructor !== void 0) return nt;
	e.__ = i, Je && Je(e);
	var g = e.type, _ = e.props;
	if (typeof g == "function") {
		var v, y, b, ee = t;
		if (g === T) {
			if ("tpl" in _) {
				for (var x = nt, S = 0; S < _.tpl.length; S++) if (x += _.tpl[S], _.exprs && S < _.exprs.length) {
					var C = _.exprs[S];
					if (C == null) continue;
					typeof C != "object" || C.constructor !== void 0 && !et(C) ? x += C : x += ct(C, t, n, r, e, a, o);
				}
				return x;
			}
			if ("UNSTABLE_comment" in _) return "<!--" + ze(_.UNSTABLE_comment) + "-->";
			y = _.children;
		} else {
			if ((v = g.contextType) != null) {
				var te = t[v.__c];
				ee = te ? te.props.value : v.__;
			}
			var w = g.prototype && typeof g.prototype.render == "function";
			if (w) y = st(e, ee), b = e[Ee];
			else {
				e[Ee] = b = Ge(e, ee);
				for (var ne = 0; Le(b) && ne++ < 25;) {
					Ie(b), Xe && Xe(e);
					try {
						y = g.call(b, _, ee);
					} catch (t) {
						throw a && t && typeof t.then == "function" && (e._suspended = !0), t;
					}
				}
				Fe(b);
			}
			if (b.getChildContext != null && (t = tt({}, t, b.getChildContext())), w && u.errorBoundaries && (g.getDerivedStateFromError || b.componentDidCatch)) {
				y = y != null && y.type === T && y.key == null && y.props.tpl == null ? y.props.children : y;
				try {
					return ct(y, t, n, r, e, a, !1);
				} catch (i) {
					return g.getDerivedStateFromError && (b[ke] = g.getDerivedStateFromError(i)), b.componentDidCatch && b.componentDidCatch(i, Qe), Le(b) ? (y = st(e, t), (b = e[Ee]).getChildContext != null && (t = tt({}, t, b.getChildContext())), ct(y = y != null && y.type === T && y.key == null && y.props.tpl == null ? y.props.children : y, t, n, r, e, a, o)) : nt;
				} finally {
					Ye && Ye(e), Ze && Ze(e);
				}
			}
		}
		y = y != null && y.type === T && y.key == null && y.props.tpl == null ? y.props.children : y;
		try {
			var re = ct(y, t, n, r, e, a, o);
			return Ye && Ye(e), u.unmount && u.unmount(e), e._suspended ? at(re) : re;
		} catch (i) {
			if (!a && o && o.onError) {
				var ie = function i(s) {
					return o.onError(s, e, function(e, s) {
						try {
							return ct(e, t, n, r, s, a, o);
						} catch (e) {
							return i(e);
						}
					});
				}(i);
				if (ie !== void 0) return ie;
				var ae = u.__e;
				return ae && ae(i, e), nt;
			}
			if (!a || !i || typeof i.then != "function") throw i;
			return i.then(function i() {
				try {
					var s = ct(y, t, n, r, e, a, o);
					return e._suspended ? at(s) : s;
				} catch (e) {
					if (!e || typeof e.then != "function") throw e;
					return e.then(i);
				}
			});
		}
	}
	var E, D = "<" + g, oe = nt;
	for (var O in _) {
		var k = _[O];
		if (typeof (k = dt(k) ? k.value : k) != "function" || O === "class" || O === "className") {
			switch (O) {
				case "children":
					E = k;
					continue;
				case "key":
				case "ref":
				case "__self":
				case "__source": continue;
				case "htmlFor":
					if ("for" in _) continue;
					O = "for";
					break;
				case "className":
					if ("class" in _) continue;
					O = "class";
					break;
				case "defaultChecked":
					O = "checked";
					break;
				case "defaultSelected":
					O = "selected";
					break;
				case "defaultValue":
				case "value":
					switch (O = "value", g) {
						case "textarea":
							E = k;
							continue;
						case "select":
							r = k;
							continue;
						case "option": r != k || "selected" in _ || (D += " selected");
					}
					break;
				case "dangerouslySetInnerHTML":
					oe = k && k.__html;
					continue;
				case "style":
					typeof k == "object" && (k = Ue(k));
					break;
				case "acceptCharset":
					O = "accept-charset";
					break;
				case "httpEquiv":
					O = "http-equiv";
					break;
				default:
					if (Ae.test(O)) continue;
					je.test(O) ? O = O.replace(je, "$1:$2").toLowerCase() : O[4] !== "-" && !Pe.has(O) || k == null ? n ? Ne.test(O) && (O = O === "panose1" ? "panose-1" : O.replace(/([A-Z])/g, "-$1").toLowerCase()) : Me.test(O) && (O = O.toLowerCase()) : k += nt;
			}
			k != null && !1 !== k && (D = !0 === k || k === nt ? D + " " + O : D + " " + O + "=\"" + (typeof k == "string" ? ze(k) : k + nt) + "\"");
		}
	}
	if (Ae.test(g)) throw Error(g + " is not a valid HTML tag name in " + D + ">");
	if (oe || (typeof E == "string" ? oe = ze(E) : E != null && !1 !== E && !0 !== E && (oe = ct(E, t, g === "svg" || g !== "foreignObject" && n, r, e, a, o))), Ye && Ye(e), Ze && Ze(e), !oe && lt.has(g)) return D + "/>";
	var se = "</" + g + ">", ce = D + ">";
	return et(oe) ? [ce].concat(oe, [se]) : typeof oe == "string" ? ce + oe + se : [
		ce,
		oe,
		se
	];
}
var lt = /* @__PURE__ */ new Set([
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
]), ut = ot;
function dt(e) {
	return typeof e == "object" && !!e && typeof e.peek == "function" && "value" in e;
}
//#endregion
//#region src/format.ts
function ft(e) {
	return JSON.stringify(e).replaceAll("<", "\\u003c");
}
function A(e) {
	return Number(e).toLocaleString();
}
function j(e) {
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
function pt(e) {
	return `${e.toFixed(1)}%`;
}
function mt(e) {
	let t = e * 100;
	return t > 0 && t < 1 ? "<1%" : `${Math.round(t)}%`;
}
function ht(e) {
	let t = Number.parseInt(e.split(":")[0] ?? "", 10);
	return Number.isFinite(t) ? t === 0 ? "12AM" : t === 12 ? "12PM" : t < 12 ? `${t}AM` : `${t - 12}PM` : e;
}
var gt = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric",
	year: "numeric",
	timeZone: "UTC"
});
function _t(e) {
	if (!e) return "";
	let t = new Date(e);
	return Number.isNaN(t.getTime()) ? "" : gt.format(t);
}
//#endregion
//#region src/ranked-row.ts
function vt(e) {
	return e.requests > 0 ? e.responseBytes / e.requests : 0;
}
//#endregion
//#region node_modules/groq-js/dist/_chunks-es/shared.mjs
function yt(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function bt(e) {
	let t = [];
	for (let n of e.split(".")) n === "*" ? t.push("[^.]+") : n === "**" ? t.push(".*") : t.push(yt(n));
	return RegExp(`^${t.join(".")}$`);
}
var xt = class {
	pattern;
	patternRe;
	constructor(e) {
		this.pattern = e, this.patternRe = bt(e);
	}
	matches(e) {
		return this.patternRe.test(e);
	}
	toJSON() {
		return this.pattern;
	}
}, St = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|([-+]\d{2}:\d{2}))$/;
function Ct(e) {
	return St.test(e) ? new Date(e) : null;
}
function wt(e) {
	let t = Tt(e.getUTCFullYear(), 4), n = Tt(e.getUTCMonth() + 1, 2), r = Tt(e.getUTCDate(), 2), i = Tt(e.getUTCHours(), 2), a = Tt(e.getUTCMinutes(), 2), o = Tt(e.getUTCSeconds(), 2), s = "", c = e.getMilliseconds();
	return c != 0 && (s = `.${Tt(c, 3)}`), `${t}-${n}-${r}T${i}:${a}:${o}${s}Z`;
}
function Tt(e, t) {
	let n = e.toString();
	for (; n.length < t;) n = `0${n}`;
	return n;
}
var Et = class {
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
			for (let t of e) yield Pt(t);
		})(this.data);
		throw Error(`Cannot iterate over: ${this.type}`);
	}
}, M = new Et(null, "null"), Dt = new Et(!0, "boolean"), Ot = new Et(!1, "boolean"), kt = class e {
	date;
	constructor(e) {
		this.date = e;
	}
	static parseToValue(t) {
		let n = Ct(t);
		return n ? new Et(new e(n), "datetime") : M;
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
		return wt(this.date);
	}
	toJSON() {
		return this.toString();
	}
};
function At(e) {
	return Number.isFinite(e) ? new Et(e, "number") : M;
}
function jt(e) {
	return new Et(e, "string");
}
function Mt(e) {
	return e && typeof e.next == "function";
}
function Nt(e) {
	return new Et(e, "array");
}
function Pt(e) {
	return Mt(e) ? new It(async function* () {
		for await (let t of e) yield Pt(t);
	}) : e == null ? M : new Et(e, Ft(e));
}
function Ft(e) {
	return e === null || typeof e > "u" ? "null" : Array.isArray(e) ? "array" : e instanceof xt ? "path" : e instanceof kt ? "datetime" : typeof e;
}
var It = class {
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
		return new Et(await this.get(), "array");
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
function Lt(e) {
	return [
		"AccessAttribute",
		"ArrayCoerce",
		"Filter",
		"Group",
		"Tuple",
		"SelectorNested"
	].includes(e.type);
}
function Rt(e) {
	switch (e.type) {
		case "Group": return Rt(e.base);
		case "Value":
		case "Parameter": return !0;
		case "Pos":
		case "Neg": return Rt(e.base);
		case "OpCall": switch (e.op) {
			case "+":
			case "-":
			case "*":
			case "/":
			case "%":
			case "**": return Rt(e.left) && Rt(e.right);
			default: return !1;
		}
		default: return !1;
	}
}
function zt(e) {
	return Rt(e) ? Ht(e) : null;
}
function Bt(e) {
	return e.constructor === Object || e.constructor === void 0;
}
function Vt(e) {
	return e == null ? M : typeof e == "boolean" ? e ? Dt : Ot : typeof e == "number" ? At(e) : typeof e == "string" ? jt(e) : Array.isArray(e) ? Nt(e) : typeof e == "object" && Bt(e) ? new Et(e, "object") : M;
}
function Ht(e) {
	switch (e.type) {
		case "Value": return Vt(e.value);
		case "Parameter": return M;
		case "Group": return Ht(e.base);
		case "Pos": {
			let t = Ht(e.base);
			return t.type === "number" ? At(t.data) : M;
		}
		case "Neg": {
			let t = Ht(e.base);
			return t.type === "number" ? At(-t.data) : M;
		}
		case "OpCall": {
			let t = Ht(e.left), n = Ht(e.right);
			switch (e.op) {
				case "+": return t.type === "number" && n.type === "number" ? At(t.data + n.data) : t.type === "string" && n.type === "string" ? jt(t.data + n.data) : t.type === "array" && n.type === "array" ? Nt(t.data.concat(n.data)) : t.type === "object" && n.type === "object" ? new Et({
					...t.data,
					...n.data
				}, "object") : M;
				case "-": return t.type === "number" && n.type === "number" ? At(t.data - n.data) : M;
				case "*": return t.type === "number" && n.type === "number" ? At(t.data * n.data) : M;
				case "/": return t.type === "number" && n.type === "number" ? At(t.data / n.data) : M;
				case "%": return t.type === "number" && n.type === "number" ? At(t.data % n.data) : M;
				case "**": return t.type === "number" && n.type === "number" ? At(t.data ** +n.data) : M;
				default: return M;
			}
		}
		default: return M;
	}
}
var Ut = {
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
}, Wt = {
	order: { arity: (e) => e >= 1 },
	score: { arity: (e) => e >= 1 }
}, Gt = /* @__PURE__ */ o(((e, t) => {
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
})), Kt = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		n.debug = n, n.default = n, n.coerce = c, n.disable = o, n.enable = i, n.enabled = s, n.humanize = Gt(), n.destroy = l, Object.keys(e).forEach((t) => {
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
})), qt = /* @__PURE__ */ c((/* @__PURE__ */ o(((e, t) => {
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
	t.exports = Kt()(e);
	var { formatters: s } = t.exports;
	s.j = function(e) {
		try {
			return JSON.stringify(e);
		} catch (e) {
			return "[UnexpectedJSONParseError]: " + e.message;
		}
	};
})))(), 1), Jt = class {
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
}, Yt = /^([\t\n\v\f\r \u0085\u00A0]|(\/\/[^\n]*\n))+/, Xt = /^\d+/, Zt = /^[a-zA-Z_][a-zA-Z_0-9]*/;
function Qt(e) {
	let t = 0;
	t = P(e, t);
	let n = {};
	for (; t < e.length && e.substring(t, t + 2) === "fn";) {
		let r = sn(e, t);
		if (r.type === "error") return r;
		n[`${r.namespace}::${r.name}`] = r, t = P(e, r.position);
	}
	let r = N(e, t, 0);
	return r.type === "error" ? r : (t = P(e, r.position), t === e.length ? (delete r.position, delete r.failPosition, r.customFunctions = n, r) : (r.failPosition && (t = r.failPosition - 1), {
		type: "error",
		message: "Unexpected end of query",
		position: t
	}));
}
function N(e, t, n) {
	let r = t, i = e[t], a;
	switch (i) {
		case "+": {
			let n = N(e, P(e, t + 1), 10);
			if (n.type === "error") return n;
			a = [{
				name: "pos",
				position: r
			}].concat(n.marks), t = n.position;
			break;
		}
		case "-": {
			let n = N(e, P(e, t + 1), 8);
			if (n.type === "error") return n;
			a = [{
				name: "neg",
				position: r
			}].concat(n.marks), t = n.position;
			break;
		}
		case "(": {
			let n = $t(e, t);
			if (n.type === "error") return n;
			t = n.position, a = n.marks;
			break;
		}
		case "!": {
			let n = N(e, P(e, t + 1), 10);
			if (n.type === "error") return n;
			a = [{
				name: "not",
				position: r
			}].concat(n.marks), t = n.position;
			break;
		}
		case "{": {
			let n = nn(e, t);
			if (n.type === "error") return n;
			a = n.marks, t = n.position;
			break;
		}
		case "[":
			if (a = [{
				name: "array",
				position: t
			}], t = P(e, t + 1), e[t] !== "]") for (;;) {
				e.slice(t, t + 3) === "..." && (a.push({
					name: "array_splat",
					position: t
				}), t = P(e, t + 3));
				let n = N(e, t, 0);
				if (n.type === "error") return n;
				if (a = a.concat(n.marks), t = n.position, t = P(e, t), e[t] !== "," || (t = P(e, t + 1), e[t] === "]")) break;
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
			let n = rn(e, t);
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
			let n = an(e, t + 1, Zt);
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
			let n = an(e, t, Xt);
			if (n) {
				t += n;
				let i = "integer";
				if (e[t] === ".") {
					let n = an(e, t + 1, Xt);
					n && (i = "float", t += 1 + n);
				}
				if (e[t] === "e" || e[t] === "E") {
					i = "sci", t++, (e[t] === "+" || e[t] === "-") && t++;
					let n = an(e, t, Xt);
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
			let i = an(e, t, Zt);
			if (i) {
				switch (t += i, e[t]) {
					case ":":
					case "(": {
						let n = tn(e, r, t);
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
		let i = P(e, t);
		if (i === e.length) {
			t = i;
			break;
		}
		if (s = en(e, i), s.type === "success") {
			for (a.unshift({
				name: "traverse",
				position: r
			}); s.type === "success";) a = a.concat(s.marks), t = s.position, s = en(e, P(e, t));
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
						let s = N(e, P(e, i + 2), 1);
						if (s.type === "error") return s;
						a = a.concat(s.marks), a.unshift({
							name: "pair",
							position: r
						}), t = s.position, o = 1;
						break;
					}
					case "=": {
						if (n > 4 || o <= 4) break loop;
						let s = N(e, P(e, i + 2), 5);
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
				let s = N(e, P(e, i + 1), 7);
				if (s.type === "error") return s;
				a = a.concat(s.marks), a.unshift({
					name: "add",
					position: r
				}), t = s.position, o = 6;
				break;
			}
			case "-": {
				if (n > 6 || o < 6) break loop;
				let s = N(e, P(e, i + 1), 7);
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
					let s = N(e, P(e, i + 2), 8);
					if (s.type === "error") return s;
					a = a.concat(s.marks), a.unshift({
						name: "pow",
						position: r
					}), t = s.position, o = 8;
					break;
				}
				if (n > 7 || o < 7) break loop;
				let s = N(e, P(e, i + 1), 8);
				if (s.type === "error") return s;
				a = a.concat(s.marks), a.unshift({
					name: "mul",
					position: r
				}), t = s.position, o = 7;
				break;
			}
			case "/": {
				if (n > 7 || o < 7) break loop;
				let s = N(e, P(e, i + 1), 8);
				if (s.type === "error") return s;
				a = a.concat(s.marks), a.unshift({
					name: "div",
					position: r
				}), t = s.position, o = 7;
				break;
			}
			case "%": {
				if (n > 7 || o < 7) break loop;
				let s = N(e, P(e, i + 1), 8);
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
				let c = N(e, P(e, s), 5);
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
					let s = N(e, P(e, i + 2), 3);
					if (s.type === "error") return s;
					a = a.concat(s.marks), a.unshift({
						name: "or",
						position: r
					}), t = s.position, o = 2;
				} else {
					if (n > 11 || o < 11) break loop;
					let s = P(e, i + 1), c = an(e, s, Zt);
					if (!c) return {
						type: "error",
						message: "Expected identifier",
						position: s
					};
					if (t = s + c, e[t] === "(" || e[t] === ":") {
						let n = tn(e, s, t);
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
				let s = N(e, P(e, i + 2), 4);
				if (s.type === "error") return s;
				a = a.concat(s.marks), a.unshift({
					name: "and",
					position: r
				}), t = s.position, o = 3;
				break;
			}
			case "!": {
				if (e[i + 1] !== "=" || n > 4 || o <= 4) break loop;
				let s = N(e, P(e, i + 2), 5);
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
			default: switch (on(e, i, Zt)) {
				case "in": {
					if (n > 4 || o <= 4) break loop;
					t = P(e, i + 2);
					let s = !1;
					e[t] === "(" && (s = !0, t = P(e, t + 1));
					let c = t, l = N(e, t, 5);
					if (l.type === "error") return l;
					if (t = P(e, l.position), e[t] === "." && e[t + 1] === ".") {
						let n = "inc_range";
						e[t + 2] === "." ? (n = "exc_range", t = P(e, t + 3)) : t = P(e, t + 2);
						let i = N(e, t, 5);
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
						if (t = P(e, t), e[t] !== ")") return {
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
					let s = N(e, P(e, i + 5), 5);
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
function $t(e, t) {
	let n = t, r, i = N(e, P(e, t + 1), 0);
	if (i.type === "error") return i;
	switch (t = P(e, i.position), e[t]) {
		case ",":
			for (r = [{
				name: "tuple",
				position: n
			}].concat(i.marks), t = P(e, t + 1);;) {
				if (i = N(e, t, 0), i.type === "error") return i;
				if (r.push(...i.marks), t = P(e, i.position), e[t] !== ",") break;
				t = P(e, t + 1);
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
function en(e, t) {
	let n = t;
	switch (e[t]) {
		case ".": {
			if (t = P(e, t + 1), e[t] === "(") return $t(e, t);
			let r = t, i = an(e, t, Zt);
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
			let i = P(e, t), a = an(e, i, Zt);
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
			if (t = P(e, t + 1), e[t] === "]") return {
				type: "success",
				marks: [{
					name: "array_postfix",
					position: n
				}],
				position: t + 1
			};
			let r = t, i = N(e, t, 0);
			if (i.type === "error") return i;
			if (t = P(e, i.position), e[t] === "." && e[t + 1] === ".") {
				let a = "inc_range";
				e[t + 2] === "." ? (a = "exc_range", t += 3) : t += 2, t = P(e, t);
				let o = N(e, t, 0);
				return o.type === "error" ? o : (t = P(e, o.position), e[t] === "]" ? {
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
			if (t = P(e, t + 1), e[t] === "{") {
				let r = nn(e, t);
				return r.type === "error" || r.marks.unshift({
					name: "projection",
					position: n
				}), r;
			}
			break;
		case "{": {
			let r = nn(e, t);
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
function tn(e, t, n) {
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
		}), n = P(e, n + 2);
		let i = an(e, n, Zt);
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
		}), n = P(e, n + i), e[n] !== "(") return {
			type: "error",
			message: "Expected \"(\" after function name",
			position: n
		};
		n++, n = P(e, n);
	} else r.push({
		name: "ident",
		position: t
	}, {
		name: "ident_end",
		position: n
	}), n = P(e, n + 1);
	let i = n;
	if (e[n] !== ")") for (;;) {
		let t = N(e, n, 0);
		if (t.type === "error") return t;
		if (r = r.concat(t.marks), i = t.position, n = P(e, t.position), e[n] !== "," || (n = P(e, n + 1), e[n] === ")")) break;
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
function nn(e, t) {
	let n = [{
		name: "object",
		position: t
	}];
	for (t = P(e, t + 1); e[t] !== "}";) {
		let r = t;
		if (e.slice(t, t + 3) === "...") if (t = P(e, t + 3), e[t] !== "}" && e[t] !== ",") {
			let i = N(e, t, 0);
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
			let i = N(e, t, 0);
			if (i.type === "error") return i;
			let a = P(e, i.position);
			if (i.marks[0].name === "str" && e[a] === ":") {
				let o = N(e, P(e, a + 1), 0);
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
		if (t = P(e, t), e[t] !== ",") break;
		t = P(e, t + 1);
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
function rn(e, t) {
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
function P(e, t) {
	return t + an(e, t, Yt);
}
function an(e, t, n) {
	let r = n.exec(e.slice(t));
	return r ? r[0].length : 0;
}
function on(e, t, n) {
	let r = n.exec(e.slice(t));
	return r ? r[0] : null;
}
function sn(e, t) {
	let n = t, r = [], i = "", a = "";
	if (e.substring(n, n + 2) !== "fn") return {
		type: "success",
		position: n,
		marks: r
	};
	r.push({
		name: "func_decl",
		position: t
	}), n = P(e, n + 2);
	let o = n;
	if (i = on(e, n, Zt), !i) return {
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
	}), n = P(e, n + i.length), e.substring(n, n + 2) !== "::") return {
		type: "error",
		message: "Expected \"::\" after namespace",
		position: n
	};
	if (n = P(e, n + 2), a = on(e, n, Zt), !a) return {
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
	}), n = P(e, n + a.length), e[n] !== "(") return {
		type: "error",
		message: "Expected \"(\"",
		position: n
	};
	for (n = P(e, n + 1); n < e.length && e[n] !== ")";) {
		if (e[n] !== "$") return {
			type: "error",
			message: "Parameter should start with \"$\"",
			position: n
		};
		let t = n;
		n++;
		let i = on(e, n, Zt);
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
		}), n = P(e, n), e[n] === ",") n = P(e, n + 1);
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
	}), n = P(e, n + 1), e[n] !== "=") return {
		type: "error",
		message: "Expected \"=\"",
		position: n
	};
	n = P(e, n + 1);
	let s = N(e, n, 0);
	return s.type === "error" ? s : (r = r.concat(s.marks), n = P(e, s.position), e[n] === ";" ? (n++, {
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
function cn(e, t) {
	return (n) => t(e(n));
}
function ln(e) {
	return (t) => ({
		type: "Map",
		base: t,
		expr: e({ type: "This" })
	});
}
function un(e) {
	return (t) => ({
		type: "FlatMap",
		base: t,
		expr: e({ type: "This" })
	});
}
function dn(e, t) {
	if (!t) return {
		type: "a-a",
		build: e
	};
	switch (t.type) {
		case "a-a": return {
			type: "a-a",
			build: cn(e, t.build)
		};
		case "a-b": return {
			type: "a-b",
			build: cn(e, t.build)
		};
		case "b-b": return {
			type: "a-a",
			build: cn(e, ln(t.build))
		};
		case "b-a": return {
			type: "a-a",
			build: cn(e, un(t.build))
		};
		default: throw Error(`unknown type: ${t.type}`);
	}
}
function fn(e, t) {
	if (!t) return {
		type: "b-b",
		build: e
	};
	switch (t.type) {
		case "a-a":
		case "b-a": return {
			type: "b-a",
			build: cn(e, t.build)
		};
		case "a-b":
		case "b-b": return {
			type: "b-b",
			build: cn(e, t.build)
		};
		default: throw Error(`unknown type: ${t.type}`);
	}
}
function pn(e, t) {
	if (!t) return {
		type: "a-b",
		build: e
	};
	switch (t.type) {
		case "a-a":
		case "b-a": return {
			type: "a-a",
			build: cn(e, t.build)
		};
		case "a-b":
		case "b-b": return {
			type: "a-b",
			build: cn(e, t.build)
		};
		default: throw Error(`unknown type: ${t.type}`);
	}
}
function mn(e, t) {
	if (!t) return {
		type: "b-b",
		build: e
	};
	switch (t.type) {
		case "a-a": return {
			type: "a-a",
			build: cn(ln(e), t.build)
		};
		case "a-b": return {
			type: "a-b",
			build: cn(ln(e), t.build)
		};
		case "b-a": return {
			type: "b-a",
			build: cn(e, t.build)
		};
		case "b-b": return {
			type: "b-b",
			build: cn(e, t.build)
		};
		default: throw Error(`unknown type: ${t.type}`);
	}
}
function F(e, t, n = 0) {
	switch (e.type) {
		case "Projection": return {
			...e,
			base: F(e.base, t, n),
			expr: F(e.expr, t, n + 1)
		};
		case "Filter": return {
			...e,
			base: F(e.base, t, n),
			expr: F(e.expr, t, n + 1)
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
				value: F(e.value, t, n)
			}))
		};
		case "PipeFuncCall": return {
			...e,
			base: F(e.base, t, n),
			args: e.args.map((e) => F(e, t, n))
		};
		case "Object": return {
			...e,
			attributes: e.attributes.map((e) => {
				switch (e.type) {
					case "ObjectAttributeValue": return {
						...e,
						value: F(e.value, t, n)
					};
					case "ObjectConditionalSplat": return {
						...e,
						condition: F(e.condition, t, n),
						value: F(e.value, t, n)
					};
					case "ObjectSplat": return {
						...e,
						value: F(e.value, t, n)
					};
					default: return e;
				}
			})
		};
		case "FlatMap":
		case "Map": return {
			...e,
			expr: F(e.expr, t, n),
			base: F(e.base, t, n)
		};
		case "FuncCall": return {
			...e,
			args: e.args.map((e) => F(e, t, n))
		};
		case "Tuple": return {
			...e,
			members: e.members.map((e) => F(e, t, n))
		};
		case "Select": {
			let r = e.alternatives.map((e) => ({
				...e,
				condition: F(e.condition, t, n),
				value: F(e.value, t, n)
			}));
			return e.fallback ? {
				...e,
				alternatives: r,
				fallback: F(e.fallback, t, n)
			} : {
				...e,
				alternatives: r
			};
		}
		case "SelectorNested": return {
			...e,
			base: F(e.base, t, n),
			nested: F(e.nested, t, n)
		};
		case "SelectorFuncCall": return {
			...e,
			arg: F(e.arg, t, n)
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
			base: F(e.base, t, n)
		} : e;
		case "InRange": return {
			...e,
			base: F(e.base, t, n),
			left: F(e.left, t, n),
			right: F(e.right, t, n)
		};
		case "OpCall":
		case "And":
		case "Or": return {
			...e,
			left: F(e.left, t, n),
			right: F(e.right, t, n)
		};
		case "Parameter":
		case "Everything":
		case "This":
		case "Value":
		case "Context": return e;
		default: throw Error(`Handle all cases: ${e.type}`);
	}
}
var hn = {
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
function gn(e) {
	let t = parseInt(e, 16);
	return String.fromCharCode(t);
}
var I = class extends Error {
	name = "GroqQueryError";
};
function _n(e, t = /* @__PURE__ */ new Set()) {
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
			if ((t.type === "Everything" || t.type === "Array" || t.type === "PipeFuncCall") && (a = dn((e) => e, a)), a === null) throw Error("BUG: unexpected empty traversal");
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
						e.shift(), t += hn[n];
						break;
					}
					case "unicode_hex":
						e.shift(), t += gn(e.processStringEnd());
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
					if (e.fallback) throw new I("unexpected argument to select()");
					r.shift();
					let t = r.process(n), i = r.process(n);
					e.alternatives.push({
						type: "SelectAlternative",
						condition: t,
						value: i
					});
				} else {
					if (e.fallback) throw new I("unexpected argument to select()");
					e.fallback = r.process(n);
				}
				return r.shift(), e;
			}
			let s = [];
			for (; r.getMark().name !== "func_args_end";) Sn(i, o, s.length) ? s.push(r.process(a)) : s.push(r.process(n));
			if (r.shift(), i === "global" && (o === "before" || o === "after") && r.parseOptions.mode === "delta") return {
				type: "Context",
				key: o
			};
			if (i === "global" && o === "boost" && !r.allowBoost) throw new I("unexpected boost");
			let c = r.customFunctions[`${i}::${o}`];
			if (c !== void 0) {
				let n = Tn(e, t), i = new Jt(r.string, c.marks, r.customFunctions, e).process(n);
				return yn(o, i.params.length, s.length), xn(i.body, (e) => F(e, i.params), (e) => bn(e, i.params, s));
			}
			let l = Ut[i];
			if (!l) throw new I(`Undefined namespace: ${i}`);
			let u = l[o];
			if (!u || (u.arity !== void 0 && yn(o, u.arity, s.length), u.mode !== void 0 && u.mode !== r.parseOptions.mode)) throw new I(`Undefined function: ${o}`);
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
			if (e.getMark().name === "namespace" && (e.shift(), r = e.processString()), r !== "global") throw new I(`Undefined namespace: ${r}`);
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
			let s = Wt[i];
			if (!s) throw new I(`Undefined pipe function: ${i}`);
			return s.arity && yn(i, s.arity, a.length), {
				type: "PipeFuncCall",
				base: t,
				name: i,
				args: a
			};
		},
		pair() {
			throw new I("unexpected =>");
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
			throw new I("unexpected asc");
		},
		desc() {
			throw new I("unexpected desc");
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
				name: vn(t),
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
			let t = e.process(n), r = zt(t);
			return r && r.type === "number" ? (e) => pn((e) => ({
				type: "AccessElement",
				base: e,
				index: r.data
			}), e) : r && r.type === "string" ? (e) => fn((e) => ({
				type: "AccessAttribute",
				base: e,
				name: r.data
			}), e) : (e) => dn((e) => ({
				type: "Filter",
				base: e,
				expr: t
			}), e);
		},
		slice(e) {
			let t = e.getMark().name === "inc_range";
			e.shift();
			let r = e.process(n), i = e.process(n), a = zt(r), o = zt(i);
			if (!a || !o || a.type !== "number" || o.type !== "number") throw new I("slicing must use constant numbers");
			return (e) => dn((e) => ({
				type: "Slice",
				base: e,
				left: a.data,
				right: o.data,
				isInclusive: t
			}), e);
		},
		projection(e) {
			let t = e.process(n);
			return (e) => mn((e) => ({
				type: "Projection",
				base: e,
				expr: t
			}), e);
		},
		attr_access(e) {
			let t = e.processString();
			return (e) => fn((e) => ({
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
			return (e) => fn((e) => n({
				type: "Deref",
				base: e
			}), e);
		},
		array_postfix() {
			return (e) => dn((e) => ({
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
				let r = e.process(n), i = zt(r);
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
				if (!Lt(n)) throw Error(`Unexpected result parsing nested selector: ${n.type}`);
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
function vn(e) {
	if (e.type === "AccessAttribute" && !e.base) return e.name;
	if (e.type === "PipeFuncCall" || e.type === "Deref" || e.type === "Map" || e.type === "FlatMap" || e.type === "Projection" || e.type === "Slice" || e.type === "Filter" || e.type === "AccessElement" || e.type === "ArrayCoerce" || e.type === "Group") return vn(e.base);
	throw new I(`Cannot determine property key for type: ${e.type}`);
}
function yn(e, t, n) {
	if (typeof t == "number") {
		if (n !== t) throw new I(`Incorrect number of arguments to function ${e}(). Expected ${t}, got ${n}.`);
	} else if (t && !t(n)) throw new I(`Incorrect number of arguments to function ${e}().`);
}
function bn(e, t, n) {
	if (e.type !== "Parameter") throw new I(`Expected parameter node, got ${e.type}`);
	let r = t.findIndex((t) => t.name === e.name);
	if (r === -1) throw new I(`Missing argument for parameter ${e.name} in function call`);
	return n[r];
}
function xn(e, t, n = (e) => e) {
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
	throw new I(`Unexpected function body, must be a projection. Got "${e.type}"`);
}
function Sn(e, t, n) {
	return e == "diff" && n == 2 && ["changedAny", "changedOnly"].includes(t);
}
var Cn = class extends Error {
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
function wn(e, t = {}) {
	let n = Qt(e);
	if (n.type === "error") throw new Cn(n.position, e, n.message);
	En(e, n.customFunctions, t);
	let r = new Jt(e, n.marks, n.customFunctions, t), i = _n(t);
	return r.process(i);
}
function Tn(e, t = /* @__PURE__ */ new Set()) {
	return { func_decl(n) {
		let r = n.processString(), i = n.processString(), a = `${r}::${i}`;
		if (t.has(a)) throw new I(`Recursive function definition detected for ${a}`);
		let o = _n(e, /* @__PURE__ */ new Set([...t, a])), s = [];
		for (; n.getMark().name !== "func_params_end";) {
			let e = n.process(o);
			if (e.type !== "Parameter") throw Error("expected parameter");
			s.push(e);
		}
		if (s.length !== 1) throw new I("Custom functions can only have one parameter");
		return n.shift(), {
			type: "FuncDeclaration",
			namespace: r,
			name: i,
			params: s,
			body: n.process(o)
		};
	} };
}
function En(e, t, n) {
	for (let r in t) {
		if (!t.hasOwnProperty(r)) continue;
		let i = t[r], a = new Jt(e, i.marks, t, n), o = Tn(n), s = a.process(o);
		xn(s.body, (e) => F(e, s.params));
	}
}
var { compare: Dn } = new Intl.Collator("en"), On = (0, qt.default)("typeEvaluator:scope:trace");
On.log = console.log.bind(console);
var kn = (0, qt.default)("typeEvaluator:evaluate:trace");
kn.log = console.log.bind(console);
var An = (0, qt.default)("typeEvaluator:evaluate:debug");
An.log = console.log.bind(console), (0, qt.default)("typeEvaluator:evaluate:warn");
//#endregion
//#region src/report/analyze-groq.ts
var jn = "uses the {...} spread operator and may waste bandwidth by fetching more fields than needed";
function Mn() {
	return {
		dereferences: 0,
		projections: 0,
		subqueries: 0,
		spreads: 0,
		arrayTraversals: 0,
		functionCalls: {}
	};
}
function Nn(e) {
	return !e || typeof e != "object" ? null : e;
}
function Pn(e, t) {
	let n = typeof e == "string" ? e : "", r = typeof t == "string" ? t : "unknown";
	return n ? `${n}::${r}` : r;
}
function Fn(e, t, n) {
	let r = Nn(e);
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
					let e = Pn(r.namespace, r.name);
					t.functionCalls[e] = (t.functionCalls[e] ?? 0) + 1;
					let n = r.args;
					if (Array.isArray(n)) for (let e of n) Fn(e, t, !0);
				}
				return;
			case "PipeFuncCall":
				{
					let e = Pn("", r.name);
					t.functionCalls[e] = (t.functionCalls[e] ?? 0) + 1, Fn(r.base, t, n);
					let i = r.args;
					if (Array.isArray(i)) for (let e of i) Fn(e, t, !0);
				}
				return;
			case "SelectorFuncCall":
				{
					let e = Pn("", r.name);
					t.functionCalls[e] = (t.functionCalls[e] ?? 0) + 1, Fn(r.arg, t, !0);
				}
				return;
			default: break;
		}
		for (let e of Object.values(r)) if (Array.isArray(e)) for (let r of e) Fn(r, t, n);
		else Fn(e, t, n);
	}
}
function In(e, t) {
	try {
		let n = wn(e, t ? { params: t } : {}), r = Mn();
		return Fn(n, r, !1), r;
	} catch (e) {
		if (e instanceof Cn) return null;
		throw e;
	}
}
function Ln(e, t) {
	let n = In(e, t);
	return n !== null && n.spreads > 0;
}
//#endregion
//#region src/report/classify-url.ts
var Rn = /* @__PURE__ */ new Set([
	".jpg",
	".jpeg",
	".png",
	".gif",
	".webp",
	".svg",
	".avif",
	".ico"
]), zn = /* @__PURE__ */ new Set([
	".mp4",
	".webm",
	".mov",
	".m4v",
	".ogv"
]), Bn = /* @__PURE__ */ new Set([
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
function Vn(e) {
	try {
		return new URL(e).pathname;
	} catch {
		return null;
	}
}
function Hn(e) {
	let t = e.lastIndexOf(".");
	return t === -1 ? "" : e.slice(t).toLowerCase();
}
function Un(e) {
	return e.includes("/data/query") || e.endsWith("/query");
}
function Wn(e) {
	let t = Vn(e);
	return t ? Hn(t) === ".mp4" : !1;
}
function Gn(e) {
	let t = Vn(e);
	if (!t) return null;
	if (Un(t)) return "query";
	let n = t.toLowerCase();
	if (n.includes("/images/")) return "image";
	let r = Hn(t);
	return Rn.has(r) ? "image" : zn.has(r) ? "video" : n.includes("/files/") || Bn.has(r) ? "file" : null;
}
//#endregion
//#region src/report/groq-query.ts
function Kn(e) {
	return decodeURIComponent(e.replace(/\+/g, " "));
}
function qn(e) {
	try {
		let t = new URL(e).searchParams.get("query");
		if (!t) return null;
		let n = Kn(t).trim();
		return n.length > 0 ? n : null;
	} catch {
		return null;
	}
}
function Jn(e) {
	try {
		let t = new URL(e).searchParams.get("params");
		if (!t) return null;
		let n = Kn(t).trim();
		if (!n) return null;
		let r = JSON.parse(n);
		return !r || typeof r != "object" || Array.isArray(r) ? null : r;
	} catch {
		return null;
	}
}
//#endregion
//#region src/report/group-urls-by-kind.ts
var Yn = [
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
function Xn(e) {
	return Yn.filter((t) => t.id !== "other" || e.other.length > 0);
}
function Zn(e) {
	let t = {
		image: [],
		file: [],
		query: [],
		other: []
	};
	for (let n of e) {
		let e = Gn(n.label);
		e === "image" ? t.image.push(n) : e === "file" || e === "video" ? t.file.push(n) : e === "query" ? t.query.push(n) : t.other.push(n);
	}
	return t;
}
function Qn(e) {
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
function $n(e) {
	let t = e.lastIndexOf(".");
	return t === -1 ? "" : e.slice(t).toLowerCase();
}
function er(e) {
	if (e === null) return null;
	let t = Number.parseInt(e, 10);
	return Number.isFinite(t) ? t : null;
}
function tr(e) {
	let t = $n(e), n = t ? e.slice(0, -t.length) : e, r = n.split("-"), i = (r[r.length - 1] ?? "").match(/^(\d+)x(\d+)$/);
	return i ? {
		id: r.slice(0, -1).join("-") || n,
		width: er(i[1] ?? null)
	} : {
		id: n,
		width: null
	};
}
function nr(e) {
	try {
		let t = new URL(e), n = t.pathname.split("/").filter(Boolean).at(-1) ?? e, r = $n(n) === ".svg", { id: i, width: a } = tr(n);
		return {
			id: i,
			width: er(t.searchParams.get("w")) ?? a,
			quality: er(t.searchParams.get("q")),
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
function rr(e) {
	try {
		let t = new URL(e);
		return t.searchParams.has("dl") ? (t.searchParams.delete("dl"), t.toString()) : e;
	} catch {
		return e;
	}
}
function ir(e) {
	return e !== null && e > 2e3;
}
function ar(e, t) {
	return !t && e !== null && e > 87;
}
function or(e) {
	return e !== null && e !== "auto";
}
//#endregion
//#region node_modules/ua-parser-js/src/main/ua-parser.mjs
var sr = "2.0.10", cr = 500, lr = "user-agent", ur = "", dr = "?", L = {
	FUNCTION: "function",
	OBJECT: "object",
	STRING: "string",
	UNDEFINED: "undefined"
}, fr = "browser", pr = "cpu", mr = "device", hr = "engine", gr = "os", _r = "result", R = "name", z = "type", B = "vendor", V = "version", H = "architecture", vr = "major", U = "model", yr = "console", W = "mobile", G = "tablet", K = "smarttv", br = "wearable", xr = "xr", Sr = "embedded", Cr = "fetcher", wr = "inapp", Tr = "brands", Er = "formFactors", Dr = "fullVersionList", Or = "platform", kr = "platformVersion", Ar = "bitness", jr = "sec-ch-ua", Mr = jr + "-full-version-list", Nr = jr + "-arch", Pr = jr + "-" + Ar, Fr = jr + "-form-factors", Ir = jr + "-" + W, Lr = jr + "-" + U, Rr = jr + "-" + Or, zr = Rr + "-version", Br = [
	Tr,
	Dr,
	W,
	U,
	Or,
	kr,
	H,
	Er,
	Ar
], Vr = "Amazon", Hr = "Apple", Ur = "ASUS", Wr = "BlackBerry", Gr = "Google", Kr = "Huawei", qr = "Lenovo", Jr = "Honor", Yr = "LG", Xr = "Microsoft", Zr = "Motorola", Qr = "Nvidia", $r = "OnePlus", ei = "OPPO", ti = "Samsung", ni = "Sharp", ri = "Sony", ii = "Xiaomi", ai = "Zebra", oi = "Chrome", si = "Chromium", ci = "Chromecast", li = "Edge", ui = "Firefox", di = "Opera", fi = "Facebook", pi = "Sogou", mi = "Mobile ", hi = " Browser", gi = "Windows", _i = typeof window !== L.UNDEFINED && window.navigator ? window.navigator : void 0, vi = _i && _i.userAgentData ? _i.userAgentData : void 0, yi = function(e, t) {
	var n = {}, r = t;
	if (!Si(t)) for (var i in r = {}, t) for (var a in t[i]) r[a] = t[i][a].concat(r[a] ? r[a] : []);
	for (var o in e) n[o] = r[o] && r[o].length % 2 == 0 ? r[o].concat(e[o]) : e[o];
	return n;
}, bi = function(e) {
	for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
	return t;
}, xi = function(e, t) {
	if (typeof e === L.OBJECT && e.length > 0) {
		for (var n in e) if (Ti(t) == Ti(e[n])) return !0;
		return !1;
	}
	return Ci(e) ? Ti(t) == Ti(e) : !1;
}, Si = function(e, t) {
	for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? Si(e[n]) : !1);
}, Ci = function(e) {
	return typeof e === L.STRING;
}, wi = function(e) {
	if (e) {
		for (var t = [], n = Di(e).split(","), r = 0; r < n.length; r++) if (n[r].indexOf(";") > -1) {
			var i = Ai(n[r]).split(";v=");
			t[r] = {
				brand: i[0],
				version: i[1]
			};
		} else t[r] = Ai(n[r]);
		return t;
	}
}, Ti = function(e) {
	return Ci(e) ? e.toLowerCase() : e;
}, Ei = function(e) {
	return Ci(e) ? ki(/[^\d\.]/g, e).split(".")[0] : void 0;
}, Di = function(e) {
	return Ci(e) ? Ai(ki(/\\?\"/g, e), cr) : void 0;
}, Oi = function(e) {
	for (var t in e) if (e.hasOwnProperty(t)) {
		var n = e[t];
		typeof n == L.OBJECT && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0;
	}
	return this;
}, ki = function(e, t) {
	return Ci(t) ? t.replace(e, ur) : t;
}, Ai = function(e, t) {
	return e = ki(/^\s\s*/, String(e)), typeof t === L.UNDEFINED ? e : e.substring(0, t);
}, ji = function(e, t) {
	if (!(!e || !t)) for (var n = 0, r, i, a, o, s, c; n < t.length && !s;) {
		var l = t[n], u = t[n + 1];
		for (r = i = 0; r < l.length && !s && l[r];) if (s = l[r++].exec(e), s) for (a = 0; a < u.length; a++) c = s[++i], o = u[a], typeof o === L.OBJECT && o.length > 0 ? o.length === 2 ? typeof o[1] == L.FUNCTION ? this[o[0]] = o[1].call(this, c) : this[o[0]] = o[1] : o.length >= 3 && (typeof o[1] === L.FUNCTION && !(o[1].exec && o[1].test) ? o.length > 3 ? this[o[0]] = c ? o[1].apply(this, o.slice(2)) : void 0 : this[o[0]] = c ? o[1].call(this, c, o[2]) : void 0 : o.length == 3 ? this[o[0]] = c ? c.replace(o[1], o[2]) : void 0 : o.length == 4 ? this[o[0]] = c ? o[3].call(this, c.replace(o[1], o[2])) : void 0 : o.length > 4 && (this[o[0]] = c ? o[3].apply(this, [c.replace(o[1], o[2])].concat(o.slice(4))) : void 0)) : this[o] = c || void 0;
		n += 2;
	}
}, Mi = function(e, t) {
	return t.test.test(e) ? t.ifTrue : t.ifFalse;
}, Ni = function(e, t) {
	for (var n in t) if (typeof t[n] === L.OBJECT && t[n].length > 0) {
		for (var r = 0; r < t[n].length; r++) if (xi(t[n][r], e)) return n === dr ? void 0 : n;
	} else if (xi(t[n], e)) return n === dr ? void 0 : n;
	return t.hasOwnProperty("*") ? t["*"] : e;
}, Pi = {
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
}, Fi = {
	embedded: "Automotive",
	mobile: "Mobile",
	tablet: ["Tablet", "EInk"],
	smarttv: "TV",
	wearable: "Watch",
	xr: ["VR", "XR"],
	"?": ["Desktop", "Unknown"],
	"*": void 0
}, Ii = {
	Chrome: "Google Chrome",
	Edge: "Microsoft Edge",
	"Edge WebView2": "Microsoft Edge WebView2",
	"Chrome WebView": "Android WebView",
	"Chrome Headless": "HeadlessChrome",
	"Huawei Browser": "HuaweiBrowser",
	"MIUI Browser": "Miui Browser",
	"Opera Mobi": "OperaMobile",
	Yandex: "YaBrowser"
}, Li = {
	browser: [
		[/\b(?:crmo|crios)\/([\w\.]+)/i],
		[V, [R, mi + "Chrome"]],
		[/webview.+edge\/([\w\.]+)/i],
		[
			V,
			[R, li + " WebView"],
			[z, wr]
		],
		[/edg(?:e|ios|a)?\/([\w\.]+)/i],
		[V, [R, "Edge"]],
		[
			/(opera mini)\/([-\w\.]+)/i,
			/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
			/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
		],
		[R, V],
		[/opios[\/ ]+([\w\.]+)/i],
		[V, [R, di + " Mini"]],
		[/\bop(?:rg)?x\/([\w\.]+)/i],
		[V, [R, di + " GX"]],
		[/\bopr\/([\w\.]+)/i],
		[V, [R, di]],
		[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
		[V, [R, "Baidu"]],
		[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
		[V, [R, "Maxthon"]],
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
		[R, V],
		[/quark(?:pc)?\/([-\w\.]+)/i],
		[V, [R, "Quark"]],
		[/\bddg\/([\w\.]+)/i],
		[V, [R, "DuckDuckGo"]],
		[/(?:\buc? ?browser|(?:juc.+)ucweb| ucpc)[\/ ]?([\w\.]+)/i],
		[V, [R, "UCBrowser"]],
		[
			/microm.+\bqbcore\/([\w\.]+)/i,
			/\bqbcore\/([\w\.]+).+microm/i,
			/micromessenger\/([\w\.]+)/i
		],
		[V, [R, "WeChat"]],
		[/konqueror\/([\w\.]+)/i],
		[V, [R, "Konqueror"]],
		[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
		[V, [R, "IE"]],
		[/ya(?:search)?browser\/([\w\.]+)/i],
		[V, [R, "Yandex"]],
		[/slbrowser\/([\w\.]+)/i],
		[V, [R, "Smart " + qr + hi]],
		[/(av(?:ast|g|ira))\/([\w\.]+)/i],
		[[
			R,
			/(.+)/,
			"$1 Secure" + hi
		], V],
		[/norton\/([\w\.]+)/i],
		[V, [R, "Norton Private" + hi]],
		[/\bfocus\/([\w\.]+)/i],
		[V, [R, ui + " Focus"]],
		[/ mms\/([\w\.]+)$/i],
		[V, [R, di + " Neon"]],
		[/ opt\/([\w\.]+)$/i],
		[V, [R, di + " Touch"]],
		[/coc_coc\w+\/([\w\.]+)/i],
		[V, [R, "Coc Coc"]],
		[/dolfin\/([\w\.]+)/i],
		[V, [R, "Dolphin"]],
		[/coast\/([\w\.]+)/i],
		[V, [R, di + " Coast"]],
		[/miuibrowser\/([\w\.]+)/i],
		[V, [R, "MIUI" + hi]],
		[/fxios\/([\w\.-]+)/i],
		[V, [R, mi + ui]],
		[/\bqihoobrowser\/?([\w\.]*)/i],
		[V, [R, "360"]],
		[/\b(qq)\/([\w\.]+)/i],
		[[
			R,
			/(.+)/,
			"$1Browser"
		], V],
		[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
		[[
			R,
			/(.+)/,
			"$1" + hi
		], V],
		[/ HBPC\/([\w\.]+)/],
		[V, [R, Kr + hi]],
		[/samsungbrowser\/([\w\.]+)/i],
		[V, [R, ti + " Internet"]],
		[/metasr[\/ ]?([\d\.]+)/i],
		[V, [R, pi + " Explorer"]],
		[/(sogou)mo\w+\/([\d\.]+)/i],
		[[R, pi + " Mobile"], V],
		[
			/(electron)\/([\w\.]+) safari/i,
			/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
			/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
		],
		[R, V],
		[/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],
		[R],
		[/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],
		[V, R],
		[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
		[
			[R, fi],
			V,
			[z, wr]
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
			R,
			V,
			[z, wr]
		],
		[/\bgsa\/([\w\.]+) .*safari\//i],
		[
			V,
			[R, "GSA"],
			[z, wr]
		],
		[/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],
		[
			V,
			[R, "TikTok"],
			[z, wr]
		],
		[/\[(linkedin)app\]/i],
		[R, [z, wr]],
		[/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
		[
			[
				R,
				/(.+)/,
				"Zalo"
			],
			V,
			[z, wr]
		],
		[/(chromium)[\/ ]([-\w\.]+)/i],
		[R, V],
		[/ome-(lighthouse)$/i],
		[R, [z, Cr]],
		[/headlesschrome(?:\/([\w\.]+)| )/i],
		[V, [R, oi + " Headless"]],
		[/wv\).+chrome\/([\w\.]+).+edgw\//i],
		[
			V,
			[R, li + " WebView2"],
			[z, wr]
		],
		[/; wv\).+(chrome)\/([\w\.]+)/i],
		[
			[R, oi + " WebView"],
			V,
			[z, wr]
		],
		[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
		[V, [R, "Android" + hi]],
		[/chrome\/([\w\.]+) mobile/i],
		[V, [R, mi + "Chrome"]],
		[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
		[R, V],
		[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
		[V, [R, mi + "Safari"]],
		[/iphone .*mobile(?:\/\w+ | ?)safari/i],
		[[R, mi + "Safari"]],
		[/version\/([\w\.\,]+) .*(safari)/i],
		[V, R],
		[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
		[R, [V, "1"]],
		[/(webkit|khtml)\/([\w\.]+)/i],
		[R, V],
		[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
		[[R, mi + ui], V],
		[/(navigator|netscape\d?)\/([-\w\.]+)/i],
		[[R, "Netscape"], V],
		[/(wolvic|librewolf)\/([\w\.]+)/i],
		[R, V],
		[/mobile vr; rv:([\w\.]+)\).+firefox/i],
		[V, [R, ui + " Reality"]],
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
		[R, [
			V,
			/_/g,
			"."
		]],
		[/(cobalt)\/([\w\.]+)/i],
		[R, [
			V,
			/[^\d\.]+./,
			ur
		]]
	],
	cpu: [
		[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
		[[H, "amd64"]],
		[/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
		[[H, "ia32"]],
		[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
		[[H, "arm64"]],
		[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
		[[H, "armhf"]],
		[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
		[[H, "arm"]],
		[/ sun4\w[;\)]/i],
		[[H, "sparc"]],
		[
			/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
			/((ppc|powerpc)(64)?)( mac|;|\))/i,
			/(?:osf1|[freopnt]{3,4}bsd) (alpha)/i
		],
		[[
			H,
			/ower/,
			ur,
			Ti
		]],
		[/mc680.0/i],
		[[H, "68k"]],
		[/winnt.+\[axp/i],
		[[H, "alpha"]]
	],
	device: [
		[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
		[
			U,
			[B, ti],
			[z, G]
		],
		[
			/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
			/samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
			/sec-(sgh\w+)/i
		],
		[
			U,
			[B, ti],
			[z, W]
		],
		[/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
		[
			U,
			[B, Hr],
			[z, W]
		],
		[/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i, /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],
		[
			U,
			[B, Hr],
			[z, G]
		],
		[/(macintosh);/i],
		[U, [B, Hr]],
		[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
		[
			U,
			[B, ni],
			[z, W]
		],
		[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
		[
			U,
			[B, Jr],
			[z, G]
		],
		[/honor([-\w ]+)[;\)]/i],
		[
			U,
			[B, Jr],
			[z, W]
		],
		[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
		[
			U,
			[B, Kr],
			[z, G]
		],
		[/(?:huawei) ?([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],
		[
			U,
			[B, Kr],
			[z, W]
		],
		[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
		[
			[
				U,
				/_/g,
				" "
			],
			[B, ii],
			[z, G]
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
				U,
				/_/g,
				" "
			],
			[B, ii],
			[z, W]
		],
		[/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
		[
			U,
			[B, $r],
			[z, W]
		],
		[/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
		[
			U,
			[B, ei],
			[z, W]
		],
		[/\b(opd2(\d{3}a?))(?: bui|\))/i],
		[
			U,
			[
				B,
				Ni,
				{
					OnePlus: [
						"203",
						"304",
						"403",
						"404",
						"413",
						"415"
					],
					"*": ei
				}
			],
			[z, G]
		],
		[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
		[
			U,
			[B, "BLU"],
			[z, W]
		],
		[/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
		[
			U,
			[B, "Vivo"],
			[z, W]
		],
		[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
		[
			U,
			[B, "Realme"],
			[z, W]
		],
		[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
		[
			U,
			[B, qr],
			[z, G]
		],
		[/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
		[
			U,
			[B, qr],
			[z, W]
		],
		[
			/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
			/\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
			/((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
		],
		[
			U,
			[B, Zr],
			[z, W]
		],
		[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
		[
			U,
			[B, Zr],
			[z, G]
		],
		[/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
		[
			U,
			[B, Yr],
			[z, G]
		],
		[
			/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
			/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
			/\blg-?([\d\w]+) bui/i
		],
		[
			U,
			[B, Yr],
			[z, W]
		],
		[/(nokia) (t[12][01])/i],
		[
			B,
			U,
			[z, G]
		],
		[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],
		[
			[
				U,
				/_/g,
				" "
			],
			[z, W],
			[B, "Nokia"]
		],
		[/(pixel (c|tablet))\b/i],
		[
			U,
			[B, Gr],
			[z, G]
		],
		[/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i],
		[
			U,
			[B, Gr],
			[z, W]
		],
		[/(google) (pixelbook( go)?)/i],
		[B, U],
		[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
		[
			U,
			[B, ri],
			[z, W]
		],
		[/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
		[
			[U, "Xperia Tablet"],
			[B, ri],
			[z, G]
		],
		[
			/(alexa)webm/i,
			/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
			/(kf[a-z]+)( bui|\)).+silk\//i
		],
		[
			U,
			[B, Vr],
			[z, G]
		],
		[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
		[
			[
				U,
				/(.+)/g,
				"Fire Phone $1"
			],
			[B, Vr],
			[z, W]
		],
		[/(playbook);[-\w\),; ]+(rim)/i],
		[
			U,
			B,
			[z, G]
		],
		[/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
		[
			U,
			[B, Wr],
			[z, W]
		],
		[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
		[
			U,
			[B, Ur],
			[z, G]
		],
		[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
		[
			U,
			[B, Ur],
			[z, W]
		],
		[/(nexus 9)/i],
		[
			U,
			[B, "HTC"],
			[z, G]
		],
		[
			/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
			/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
			/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
		],
		[
			B,
			[
				U,
				/_/g,
				" "
			],
			[z, W]
		],
		[/tcl (xess p17aa)/i, /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],
		[
			U,
			[B, "TCL"],
			[z, G]
		],
		[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],
		[
			U,
			[B, "TCL"],
			[z, W]
		],
		[/(itel) ((\w+))/i],
		[
			[B, Ti],
			U,
			[
				z,
				Ni,
				{
					tablet: ["p10001l", "w7001"],
					"*": "mobile"
				}
			]
		],
		[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
		[
			U,
			[B, "Acer"],
			[z, G]
		],
		[/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
		[
			U,
			[B, "Meizu"],
			[z, W]
		],
		[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
		[
			U,
			[B, "Ulefone"],
			[z, W]
		],
		[/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
		[
			U,
			[B, "Energizer"],
			[z, W]
		],
		[/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
		[
			U,
			[B, "Cat"],
			[z, W]
		],
		[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
		[
			U,
			[B, "Smartfren"],
			[z, W]
		],
		[/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
		[
			U,
			[B, "Nothing"],
			[z, W]
		],
		[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
		[
			U,
			[B, "Archos"],
			[z, G]
		],
		[/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
		[
			U,
			[B, "Archos"],
			[z, W]
		],
		[/blackview ([-\w ]+)( b|\))/i, /; (bv\d{4}[-\w ]*)( b|\))/i],
		[
			U,
			[B, "Blackview"],
			[z, W]
		],
		[/; (n159v)/i],
		[
			U,
			[B, "HMD"],
			[z, W]
		],
		[/((revvl[ \w\+]+|tm(?:rv|af)\w*[45]g(?:tb)?))( b|\))/i],
		[
			U,
			[
				z,
				Mi,
				{
					test: /ta?b/i,
					ifTrue: G,
					ifFalse: W
				}
			],
			[B, "T-Mobile"]
		],
		[/(imo) (tab \w+)/i, /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],
		[
			B,
			U,
			[z, G]
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
			B,
			U,
			[z, W]
		],
		[
			/(kobo)\s(ereader|touch)/i,
			/(hp).+(touchpad(?!.+tablet)|tablet)/i,
			/(kindle)\/([\w\.]+)/i
		],
		[
			B,
			U,
			[z, G]
		],
		[/(surface duo)/i],
		[
			U,
			[B, Xr],
			[z, G]
		],
		[/droid [\d\.]+; (fp\du?)(?: b|\))/i],
		[
			U,
			[B, "Fairphone"],
			[z, W]
		],
		[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
		[
			U,
			[B, Qr],
			[z, G]
		],
		[/(sprint) (\w+)/i],
		[
			B,
			U,
			[z, W]
		],
		[/(kin\.[onetw]{3})/i],
		[
			[
				U,
				/\./g,
				" "
			],
			[B, Xr],
			[z, W]
		],
		[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
		[
			U,
			[B, ai],
			[z, G]
		],
		[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
		[
			U,
			[B, ai],
			[z, W]
		],
		[/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
		[B, [z, K]],
		[/hbbtv.+maple;(\d+)/i],
		[
			[
				U,
				/^/,
				"SmartTV"
			],
			[B, ti],
			[z, K]
		],
		[/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
		[
			B,
			U,
			[z, K]
		],
		[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
		[[B, Yr], [z, K]],
		[/(apple) ?tv/i],
		[
			B,
			[U, Hr + " TV"],
			[z, K]
		],
		[/crkey.*devicetype\/chromecast/i],
		[
			[U, ci + " Third Generation"],
			[B, Gr],
			[z, K]
		],
		[/crkey.*devicetype\/([^/]*)/i],
		[
			[
				U,
				/^/,
				"Chromecast "
			],
			[B, Gr],
			[z, K]
		],
		[/fuchsia.*crkey/i],
		[
			[U, ci + " Nest Hub"],
			[B, Gr],
			[z, K]
		],
		[/crkey/i],
		[
			[U, ci],
			[B, Gr],
			[z, K]
		],
		[/(portaltv)/i],
		[
			U,
			[B, fi],
			[z, K]
		],
		[/droid.+aft(\w+)( bui|\))/i],
		[
			U,
			[B, Vr],
			[z, K]
		],
		[/(shield \w+ tv)/i],
		[
			U,
			[B, Qr],
			[z, K]
		],
		[/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
		[
			U,
			[B, ni],
			[z, K]
		],
		[/(bravia[\w ]+)( bui|\))/i],
		[
			U,
			[B, ri],
			[z, K]
		],
		[/(mi(tv|box)-?\w+) bui/i],
		[
			U,
			[B, ii],
			[z, K]
		],
		[/Hbbtv.*(technisat) (.*);/i],
		[
			B,
			U,
			[z, K]
		],
		[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
		[
			[
				B,
				/.+\/(\w+)/,
				"$1",
				Ni,
				{ LG: "lge" }
			],
			[U, Ai],
			[z, K]
		],
		[/(playstation \w+)/i],
		[
			U,
			[B, ri],
			[z, yr]
		],
		[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
		[
			U,
			[B, Xr],
			[z, yr]
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
				B,
				Ni,
				{
					Nvidia: "Shield",
					Anbernic: "RGCUBE",
					Logitech: "GR0006"
				}
			],
			U,
			[z, yr]
		],
		[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
		[
			U,
			[B, ti],
			[z, br]
		],
		[/((pebble))app/i, /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
		[
			B,
			U,
			[z, br]
		],
		[/(ow(?:19|20)?we?[1-3]{1,3})/i],
		[
			U,
			[B, ei],
			[z, br]
		],
		[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
		[
			U,
			[B, Hr],
			[z, br]
		],
		[/(opwwe\d{3})/i],
		[
			U,
			[B, $r],
			[z, br]
		],
		[/(moto 360)/i],
		[
			U,
			[B, Zr],
			[z, br]
		],
		[/(smartwatch 3)/i],
		[
			U,
			[B, ri],
			[z, br]
		],
		[/(g watch r)/i],
		[
			U,
			[B, Yr],
			[z, br]
		],
		[/droid.+; (wt63?0{2,3})\)/i],
		[
			U,
			[B, ai],
			[z, br]
		],
		[/droid.+; (glass) \d/i],
		[
			U,
			[B, Gr],
			[z, xr]
		],
		[/(pico) ([\w ]+) os\d/i],
		[
			B,
			U,
			[z, xr]
		],
		[/(quest( \d| pro)?s?).+vr/i],
		[
			U,
			[B, fi],
			[z, xr]
		],
		[/mobile vr; rv.+firefox/i],
		[[z, xr]],
		[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
		[B, [z, Sr]],
		[/(aeobc)\b/i],
		[
			U,
			[B, Vr],
			[z, Sr]
		],
		[/(homepod).+mac os/i],
		[
			U,
			[B, Hr],
			[z, Sr]
		],
		[/windows iot/i],
		[[z, Sr]],
		[/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
		[U, [z, K]],
		[/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],
		[[z, K]],
		[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],
		[U, [
			z,
			Ni,
			{
				mobile: "Mobile",
				xr: "VR",
				"*": G
			}
		]],
		[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
		[[z, G]],
		[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
		[[z, W]],
		[/droid .+?; ([\w\. -]+)( bui|\))/i],
		[U, [B, "Generic"]]
	],
	engine: [
		[/windows.+ edge\/([\w\.]+)/i],
		[V, [R, li + "HTML"]],
		[/(arkweb)\/([\w\.]+)/i],
		[R, V],
		[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
		[V, [R, "Blink"]],
		[
			/(presto)\/([\w\.]+)/i,
			/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
			/ekioh(flow)\/([\w\.]+)/i,
			/(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,
			/(icab)[\/ ]([23]\.[\d\.]+)/i,
			/\b(libweb)/i
		],
		[R, V],
		[/ladybird\//i],
		[[R, "LibWeb"]],
		[/rv\:([\w\.]{1,9})\b.+(gecko)/i],
		[V, R]
	],
	os: [
		[/(windows nt) (6\.[23]); arm/i],
		[[
			R,
			/N/,
			"R"
		], [
			V,
			Ni,
			Pi
		]],
		[/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i, /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i],
		[R, V],
		[/windows nt ?([\d\.\)]*)(?!.+xbox)/i, /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],
		[[
			V,
			/(;|\))/g,
			"",
			Ni,
			Pi
		], [R, gi]],
		[/(windows ce)\/?([\d\.]*)/i],
		[R, V],
		[
			/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
			/(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
			/\btvos ?([\w\.]+)/i,
			/cfnetwork\/.+darwin/i
		],
		[[
			V,
			/_/g,
			"."
		], [R, "iOS"]],
		[/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],
		[[R, "macOS"], [
			V,
			/_/g,
			"."
		]],
		[/android ([\d\.]+).*crkey/i],
		[V, [R, ci + " Android"]],
		[/fuchsia.*crkey\/([\d\.]+)/i],
		[V, [R, ci + " Fuchsia"]],
		[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
		[V, [R, ci + " SmartSpeaker"]],
		[/linux.*crkey\/([\d\.]+)/i],
		[V, [R, ci + " Linux"]],
		[/crkey\/([\d\.]+)/i],
		[V, [R, ci]],
		[/droid ([\w\.]+)\b.+(android[- ]x86)/i],
		[V, R],
		[/(ubuntu) ([\w\.]+) like android/i],
		[[
			R,
			/(.+)/,
			"$1 Touch"
		], V],
		[/(harmonyos)[\/ ]?([\d\.]*)/i, /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i],
		[R, V],
		[/\(bb(10);/i],
		[V, [R, Wr]],
		[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
		[V, [R, "Symbian"]],
		[/mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i],
		[V, [R, ui + " OS"]],
		[/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i, /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],
		[V, [R, "webOS"]],
		[/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
		[[
			V,
			Ni,
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
		], [R, "webOS"]],
		[/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],
		[V, [R, "watchOS"]],
		[/cros [\w]+(?:\)| ([\w\.]+)\b)/i],
		[V, [R, "Chrome OS"]],
		[/kepler ([\w\.]+); (aft|aeo)/i],
		[V, [R, "Vega OS"]],
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
		[R, V],
		[/(sunos) ?([\d\.]*)/i],
		[[R, "Solaris"], V],
		[/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
		[R, V]
	]
}, Ri = (function() {
	var e = {
		init: {},
		isIgnore: {},
		isIgnoreRgx: {},
		toString: {}
	};
	return Oi.call(e.init, [
		[fr, [
			R,
			V,
			vr,
			z
		]],
		[pr, [H]],
		[mr, [
			z,
			U,
			B
		]],
		[hr, [R, V]],
		[gr, [R, V]]
	]), Oi.call(e.isIgnore, [
		[fr, [V, vr]],
		[hr, [V]],
		[gr, [V]]
	]), Oi.call(e.isIgnoreRgx, [[fr, / ?browser$/i], [gr, / ?os$/i]]), Oi.call(e.toString, [
		[fr, [R, V]],
		[pr, [H]],
		[mr, [B, U]],
		[hr, [R, V]],
		[gr, [R, V]]
	]), e;
})(), zi = function(e, t) {
	var n = Ri.init[t], r = Ri.isIgnore[t] || 0, i = Ri.isIgnoreRgx[t] || 0, a = Ri.toString[t] || 0;
	function o() {
		Oi.call(this, n);
	}
	return o.prototype.getItem = function() {
		return e;
	}, o.prototype.withClientHints = function() {
		return vi ? vi.getHighEntropyValues(Br).then(function(t) {
			return e.setCH(new Bi(t, !1)).parseCH().get();
		}) : e.parseCH().get();
	}, o.prototype.withFeatureCheck = function() {
		return e.detectFeature().get();
	}, t != _r && (o.prototype.is = function(e) {
		var t = !1;
		for (var n in this) if (this.hasOwnProperty(n) && !xi(r, n) && Ti(i ? ki(i, this[n]) : this[n]) == Ti(i ? ki(i, e) : e)) {
			if (t = !0, e != L.UNDEFINED) break;
		} else if (e == L.UNDEFINED && t) {
			t = !t;
			break;
		}
		return t;
	}, o.prototype.toString = function() {
		var e = ur;
		for (var t in a) typeof this[a[t]] !== L.UNDEFINED && (e += (e ? " " : ur) + this[a[t]]);
		return e || L.UNDEFINED;
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
function Bi(e, t) {
	if (e ||= {}, Oi.call(this, Br), t) Oi.call(this, [
		[Tr, wi(e[jr])],
		[Dr, wi(e[Mr])],
		[W, /\?1/.test(e[Ir])],
		[U, Di(e[Lr])],
		[Or, Di(e[Rr])],
		[kr, Di(e[zr])],
		[H, Di(e[Nr])],
		[Er, wi(e[Fr])],
		[Ar, Di(e[Pr])]
	]);
	else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== L.UNDEFINED && (this[n] = e[n]);
}
function Vi(e, t, n, r) {
	return Oi.call(this, [
		["itemType", e],
		["ua", t],
		["uaCH", r],
		["rgxMap", n],
		["data", zi(this, e)]
	]), this;
}
Vi.prototype.get = function(e) {
	return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data;
}, Vi.prototype.set = function(e, t) {
	return this.data[e] = t, this;
}, Vi.prototype.setCH = function(e) {
	return this.uaCH = e, this;
}, Vi.prototype.detectFeature = function() {
	if (_i && _i.userAgent == this.ua) switch (this.itemType) {
		case fr:
			_i.brave && typeof _i.brave.isBrave == L.FUNCTION && this.set(R, "Brave");
			break;
		case mr:
			!this.get(z) && vi && vi[W] && this.set(z, W), this.get(U) == "Macintosh" && _i && typeof _i.standalone !== L.UNDEFINED && _i.maxTouchPoints && _i.maxTouchPoints > 2 && this.set(U, "iPad").set(z, G);
			break;
		case gr:
			!this.get(R) && vi && vi[Or] && this.set(R, vi[Or]);
			break;
		case _r:
			var e = this.data, t = function(t) {
				return e[t].getItem().detectFeature().get();
			};
			this.set(fr, t(fr)).set(pr, t(pr)).set(mr, t(mr)).set(hr, t(hr)).set(gr, t(gr));
	}
	return this;
}, Vi.prototype.parseUA = function() {
	switch (this.itemType != _r && ji.call(this.data, this.ua, this.rgxMap), this.itemType) {
		case fr:
			this.set(vr, Ei(this.get(V)));
			break;
		case gr:
			if (this.get(R) == "iOS" && this.get(V) && /^1[89][^\d]/.exec(this.get(V))) {
				var e = /\) Version\/((\d+)[\d\.]*)/.exec(this.ua);
				e && parseInt(e[2], 10) >= 26 && this.set(V, e[1]);
			}
			break;
	}
	return this;
}, Vi.prototype.parseCH = function() {
	var e = this.uaCH, t = this.rgxMap;
	switch (this.itemType) {
		case fr:
		case hr:
			var n = e[Dr] || e[Tr], r;
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i].brand || n[i], o = n[i].version;
				this.itemType == fr && !/not.a.brand/i.test(a) && (!r || /Chrom/.test(r) && a != si || r == li && /WebView2/.test(a)) && (a = Ni(a, Ii), r = this.get(R), r && !/Chrom/.test(r) && /Chrom/.test(a) || this.set(R, a).set(V, o).set(vr, Ei(o)), r = a), this.itemType == hr && a == si && this.set(V, o);
			}
			break;
		case pr:
			var s = e[H];
			s && (s && e[Ar] == "64" && (s += "64"), ji.call(this.data, s + ";", t));
			break;
		case mr:
			if (e[W] && this.set(z, W), e[U] && (this.set(U, e[U]), !this.get(z) || !this.get(B))) {
				var c = {};
				ji.call(c, "droid 9; " + e[U] + ")", t), !this.get(z) && c.type && this.set(z, c.type), !this.get(B) && c.vendor && this.set(B, c.vendor);
			}
			if (e[Er]) {
				var l;
				if (typeof e[Er] != "string") for (var u = 0; !l && u < e[Er].length;) l = Ni(e[Er][u++], Fi);
				else l = Ni(e[Er], Fi);
				this.set(z, l);
			}
			break;
		case gr:
			var d = e[Or];
			if (d) {
				var f = e[kr];
				d == gi && (f = parseInt(Ei(f), 10) >= 13 ? "11" : "10"), this.set(R, d).set(V, f);
			}
			this.get(R) == gi && e[U] == "Xbox" && this.set(R, "Xbox").set(V, void 0);
			break;
		case _r:
			var p = this.data, m = function(t) {
				return p[t].getItem().setCH(e).parseCH().get();
			};
			this.set(fr, m(fr)).set(pr, m(pr)).set(mr, m(mr)).set(hr, m(hr)).set(gr, m(gr));
	}
	return this;
};
function Hi(e, t, n) {
	if (typeof e === L.OBJECT ? (Si(e, !0) ? (typeof t === L.OBJECT && (n = t), t = e) : (n = e, t = void 0), e = void 0) : typeof e === L.STRING && !Si(t, !0) && (n = t, t = void 0), n) if (typeof n.append === L.FUNCTION) {
		var r = {};
		n.forEach(function(e, t) {
			r[String(t).toLowerCase()] = e;
		}), n = r;
	} else {
		var i = {};
		for (var a in n) n.hasOwnProperty(a) && (i[String(a).toLowerCase()] = n[a]);
		n = i;
	}
	if (!(this instanceof Hi)) return new Hi(e, t, n).getResult();
	var o = typeof e === L.STRING ? e : n && n[lr] ? n[lr] : _i && _i.userAgent ? _i.userAgent : ur, s = new Bi(n, !0), c = Li, l = function(e) {
		return e == _r ? function() {
			return new Vi(e, o, c, s).set("ua", o).set(fr, this.getBrowser()).set(pr, this.getCPU()).set(mr, this.getDevice()).set(hr, this.getEngine()).set(gr, this.getOS()).get();
		} : function() {
			return new Vi(e, o, c[e], s).parseUA().get();
		};
	};
	return Oi.call(this, [
		["getBrowser", l(fr)],
		["getCPU", l(pr)],
		["getDevice", l(mr)],
		["getEngine", l(hr)],
		["getOS", l(gr)],
		["getResult", l(_r)],
		["getUA", function() {
			return o;
		}],
		["setUA", function(e) {
			return Ci(e) && (o = Ai(e, cr)), this;
		}],
		["useExtension", function(e) {
			return e && (c = yi(c, e)), this;
		}]
	]).setUA(o).useExtension(t), this;
}
Hi.VERSION = sr, Hi.BROWSER = bi([
	R,
	V,
	vr,
	z
]), Hi.CPU = bi([H]), Hi.DEVICE = bi([
	U,
	B,
	z,
	yr,
	W,
	K,
	G,
	br,
	Sr
]), Hi.ENGINE = Hi.OS = bi([R, V]);
//#endregion
//#region node_modules/ua-parser-js/src/extensions/ua-parser-extensions.mjs
var q = "model", J = "name", Y = "type", X = "vendor", Z = "version", Ui = "mobile", Wi = "tablet", Gi = "crawler", Ki = "cli", qi = "email", Ji = "fetcher", Yi = "inapp", Xi = "mediaplayer", Zi = "library", Qi = function(e) {
	return {
		YahooMobile: "Yahoo Mail",
		YahooMail: "Yahoo Mail",
		"K-9": "K-9 Mail",
		"K-9 Mail": "K-9 Mail",
		Zdesktop: "Zimbra",
		zdesktop: "Zimbra"
	}[e] || e;
}, $i = Object.freeze({ browser: [[/(wget|curl|lynx|elinks|httpie|powershell)[\/ ]\(?([\w\.-]+)/i], [
	J,
	Z,
	[Y, Ki]
]] }), ea = Object.freeze({ browser: [
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
		J,
		Z,
		[Y, Gi]
	],
	[/(ev-crawler)\/([\w\.]+)/i],
	[
		[J, "Headline"],
		Z,
		[Y, Gi]
	],
	[/(yandexbot\/([\w\.]+); mirrordetector)/i],
	[
		[
			J,
			/\/.+;/gi,
			""
		],
		Z,
		[Y, Gi]
	],
	[/((?:adsbot|apis|mediapartners)-google(?:-mobile)?|google-?(?:other|cloudvertexbot|extended|notebooklm|safety))/i, /\b((ai2|aspiegel|atlassian-|dataforseo|deepseek|imagesift|petal|seekport|turnitin|v0|yacy)bot|360spider-?(image|video)?|baidu-ads|botify|(byte|tiktok)spider|cohere-training-data-crawler|elastic(?=\/s)|marginalia|proximic|siteimprove(?=bot|\.com)|teoma|webzio|yahoo! slurp)/i],
	[J, [Y, Gi]]
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
		X,
		q,
		[Y, Wi]
	],
	[/(u304aa)/i],
	[
		q,
		[X, "AT&T"],
		[Y, Ui]
	],
	[/\bsie-(\w*)/i],
	[
		q,
		[X, "Siemens"],
		[Y, Ui]
	],
	[/\b(rct\w+) b/i],
	[
		q,
		[X, "RCA"],
		[Y, Wi]
	],
	[/\b(venue[\d ]{2,7}) b/i],
	[
		q,
		[X, "Dell"],
		[Y, Wi]
	],
	[/\b(q(?:mv|ta)\w+) b/i],
	[
		q,
		[X, "Verizon"],
		[Y, Wi]
	],
	[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
	[
		q,
		[X, "Barnes & Noble"],
		[Y, Wi]
	],
	[/\b(tm\d{3}\w+) b/i],
	[
		q,
		[X, "NuVision"],
		[Y, Wi]
	],
	[/\b(k88) b/i],
	[
		q,
		[X, "ZTE"],
		[Y, Wi]
	],
	[/\b(nx\d{3}j) b/i],
	[
		q,
		[X, "ZTE"],
		[Y, Ui]
	],
	[/\b(gen\d{3}) b.+49h/i],
	[
		q,
		[X, "Swiss"],
		[Y, Ui]
	],
	[/\b(zur\d{3}) b/i],
	[
		q,
		[X, "Swiss"],
		[Y, Wi]
	],
	[/^((zeki)?tb.*\b) b/i],
	[
		q,
		[X, "Zeki"],
		[Y, Wi]
	],
	[/\b([yr]\d{2}) b/i, /\b(?:dragon[- ]+touch |dt)(\w{5}) b/i],
	[
		q,
		[X, "Dragon Touch"],
		[Y, Wi]
	],
	[/\b(ns-?\w{0,9}) b/i],
	[
		q,
		[X, "Insignia"],
		[Y, Wi]
	],
	[/\b((nxa|next)-?\w{0,9}) b/i],
	[
		q,
		[X, "NextBook"],
		[Y, Wi]
	],
	[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
	[
		[X, "Voice"],
		q,
		[Y, Ui]
	],
	[/\b(lvtel\-)?(v1[12]) b/i],
	[
		[X, "LvTel"],
		q,
		[Y, Ui]
	],
	[/\b(ph-1) /i],
	[
		q,
		[X, "Essential"],
		[Y, Ui]
	],
	[/\b(v(100md|700na|7011|917g).*\b) b/i],
	[
		q,
		[X, "Envizen"],
		[Y, Wi]
	],
	[/\b(trio[-\w\. ]+) b/i],
	[
		q,
		[X, "MachSpeed"],
		[Y, Wi]
	],
	[/\btu_(1491) b/i],
	[
		q,
		[X, "Rotor"],
		[Y, Wi]
	]
] }), Object.freeze({ browser: [
	[/(android)\/([\w\.-]+email)/i],
	[
		J,
		Z,
		[Y, qi]
	],
	[/* @__PURE__ */ RegExp("((?:air|aqua|blue|claws|daum|fair|fox|k-9|mac|nylas|pegasus|poco|poly|proton|samsung|squirrel|yahoo) ?e?mail(?:-desktop| app| bridge)?|microsoft outlook|r2mail2|spicebird|turnpike|yahoomobile|(?:microsoft )?outlook(?:-express)?|macoutlook|windows-live-mail|alpine|balsa|barca|canary|emclient|eudora|evolution|geary|gnus|horde::imp|incredimail|kmail2?|kontact|lotus-notes|mail(?:bird|mate|spring)|mutt|navermailapp|newton|nine|postbox|rainloop|roundcube webmail|spar(?:row|kdesktop)|sylpheed|the bat!|thunderbird|trojita|tutanota-desktop|wanderlust|zdesktop|zohomail-desktop)(?:m.+ail; |[\\/ ])([\\w\\.-]+)", "i")],
	[
		[J, Qi],
		Z,
		[Y, qi]
	],
	[/(mail)\/([\w\.]+) cf/i],
	[
		J,
		Z,
		[Y, qi]
	],
	[/(zimbra)\/([\w\.-]+)/i],
	[
		J,
		Z,
		[Y, qi]
	]
] });
var ta = Object.freeze({
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
			J,
			Z,
			[Y, Ji]
		],
		[/((?:better uptime |keybase|telegram|vercel)bot|lighthouse$|feedfetcher-google|gemini-deep-research|google(?:docs|imageproxy|-read-aloud|-pagerenderer|producer)|snap url preview|vercel(flags|tracing|-(favicon|screenshot)-bot)|virustotal(?=cloud)|yandex(?:sitelinks|userproxy))/i],
		[J, [Y, Ji]]
	],
	os: [[/whatsapp\/[\d\.]+ (a|i)/i], [[J, (e) => e == "A" ? "Android" : "iOS"]]]
});
Object.freeze({ browser: [
	[/\b(discord|figma|mattermost|notion|postman|rambox|rocket.chat|slack|teams)\/([\w\.]+).+(electron\/|; ios)/i, /(flipboard)\/([\w\.]+)/i],
	[
		J,
		Z,
		[Y, Yi]
	],
	[/(evernote) win/i, /(teams)mobile-(ios|and)/i],
	[J, [Y, Yi]],
	[/chatlyio\/([\d\.]+)/i],
	[
		Z,
		[J, "Slack"],
		[Y, Yi]
	],
	[/ultralite app_version\/([\w\.]+)/i],
	[
		Z,
		[J, "TikTok Lite"],
		[Y, Yi]
	],
	[/\) code\/([\d\.]+).+electron\//i],
	[
		Z,
		[J, "VS Code"],
		[Y, Yi]
	],
	[/jp\.co\.yahoo\.(?:android\.yjtop|ipn\.appli)\/([\d\.]+)/i],
	[
		Z,
		[J, "Yahoo! Japan"],
		[Y, Yi]
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
		J,
		Z,
		[Y, Xi]
	],
	[/(flrp)\/([\w\.-]+)/i],
	[
		[J, "Flip Player"],
		Z,
		[Y, Xi]
	],
	[/(fstream|media player classic|inlight radio|mplayer|nativehost|nero showtime|ocms-bot|queryseekspider|tapinradio|tunein radio|winamp|yourmuze)/i],
	[J, [Y, Xi]],
	[/(htc_one_s|windows-media-player|wmplayer)\/([\w\.-]+)/i],
	[
		[
			J,
			/[_-]/g,
			" "
		],
		Z,
		[Y, Xi]
	],
	[/(rad.io|radio.(?:de|at|fr)) ([\d\.]+)/i],
	[
		[J, "rad.io"],
		Z,
		[Y, Xi]
	]
] });
var na = Object.freeze({ browser: [
	[
		/^((?:apache|go|java)-http-?client|axios|bun|dart|deno|got|(?:guzzle|lua-resty-|ocaml-co|ok)http|hackney|http\.rb|java|jetty|libwww-perl|needle|node(?:\.js|-fetch|-superagent)|php-soap|postmanruntime|python-(?:httpx|urllib[23]?|requests)|rest-client|scrapy)\/([\w\.]+)/i,
		/(adobeair|aiohttp|jsdom)\/([\w\.]+)/i,
		/(nutch)-([\w\.-]+)(\(|$)/i,
		/\((java)\/([\w\.]+)/i
	],
	[
		J,
		Z,
		[Y, Zi]
	],
	[/(node-fetch|phpcrawl|undici)/i],
	[J, [Y, Zi]]
] });
Object.freeze({ device: [
	[/aftlbt962e2/i],
	[[X, "BMW"]],
	[/dilink.+(byd) auto/i],
	[X],
	[/aftlft962x3/i],
	[[X, "Jeep"], [q, "Wagooner"]],
	[/(rivian) (r1t)/i],
	[X, q],
	[/vcc.+netfront/i],
	[[X, "Volvo"]]
] });
var ra = Object.freeze({
	browser: [
		...$i.browser,
		...ta.browser,
		...ea.browser,
		...na.browser
	],
	os: [...ta.os]
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
var ia = Object.freeze({
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
var { Crawler: Q, Fetcher: aa } = Object.freeze({
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
}).BrowserName, oa = class {
	constructor(e, t, n) {
		this.ext = e, this.prop = t, this.list = n.map((e) => e.toLowerCase());
	}
	includes(e) {
		return this.list.includes((typeof e == "string" ? new Hi(e, this.ext).getBrowser() : e.browser)[this.prop]?.toLowerCase());
	}
}, sa = new oa(ra, "type", [
	ia.CLI,
	ia.CRAWLER,
	ia.FETCHER,
	ia.LIBRARY
]);
new oa(ta, "name", [
	aa.AMAZON_NOVA_ACT,
	aa.ANTHROPIC_CLAUDE_USER,
	aa.COHERE_AI,
	aa.DUCKDUCKGO_ASSISTBOT,
	aa.GOOGLE_GEMINI_DEEP_RESEARCH,
	aa.MISTRALAI_USER,
	aa.OPENAI_CHATGPT_USER,
	aa.PERPLEXITY_USER
]), new oa(ea, "name", [
	Q.AI2_BOT,
	Q.AMAZON_BOT,
	Q.ANTHROPIC_AI,
	Q.ANTHROPIC_CLAUDE_BOT,
	Q.ANTHROPIC_CLAUDE_SEARCHBOT,
	Q.ANTHROPIC_CLAUDE_WEB,
	Q.APPLE_BOT,
	Q.APPLE_BOT_EXTENDED,
	Q.ATLASSIAN_BOT,
	Q.BRAVE_BOT,
	Q.BYTEDANCE_BYTESPIDER,
	Q.BYTEDANCE_TIKTOKSPIDER,
	Q.CLOUDFLARE_AUTORAG,
	Q.COHERE_TRAINING_DATA_CRAWLER,
	Q.COMMON_CRAWL_CCBOT,
	Q.COVEO_BOT,
	Q.DATAFORSEO_BOT,
	Q.DEEPSEEK_BOT,
	Q.DIFFBOT,
	Q.GOOGLE_EXTENDED,
	Q.GOOGLE_NOTEBOOKLM,
	Q.GOOGLE_OTHER,
	Q.GOOGLE_OTHER_IMAGE,
	Q.GOOGLE_OTHER_VIDEO,
	Q.GOOGLE_CLOUDVERTEXBOT,
	Q.HIVE_IMAGESIFTBOT,
	Q.HUAWEI_PETALBOT,
	Q.HUAWEI_PANGUBOT,
	Q.HUGGINGFACE_BOT,
	Q.KANGAROO_BOT,
	Q.FIRECRAWL_AGENT,
	Q.META_FACEBOOKBOT,
	Q.META_EXTERNALAGENT,
	Q.META_WEBINDEXER,
	Q.OPENAI_GPTBOT,
	Q.OPENAI_SEARCH_BOT,
	Q.PERPLEXITY_BOT,
	Q.REPLICATE_BOT,
	Q.RUNPOD_BOT,
	Q.SB_INTUITIONS_BOT,
	Q.SEMRUSH_BOT_CONTENTSHAKE,
	Q.SEMRUSH_BOT_SWA,
	Q.TIMPI_BOT,
	Q.TOGETHER_BOT,
	Q.HUNTER_VELENPUBLICWEBCRAWLER,
	Q.VERCEL_V0BOT,
	Q.WEBZIO_OMGILI,
	Q.WEBZIO_OMGILI_BOT,
	Q.WEBZIO_EXTENDED,
	Q.XAI_BOT,
	Q.YOU_BOT,
	Q.ZHIPU_CHATGLM_SPIDER
]);
var ca = (e) => sa.includes(e), la = /^@sanity\/client\b|\bsanity\/client\b|^curl\b|^axios\b|node-fetch|^got\/|python-requests|aiohttp|httpx|^Go-http-client|^okhttp\b|^Java\/|^libwww-perl|postmanruntime/i, ua = /\bMobile\b|iPhone|iPod|Android.+Mobile|Windows Phone/i, da = /Macintosh|Windows NT|Win64|X11; Linux|X11; Ubuntu|CrOS/i;
function fa(e) {
	if (e) return e.replace(/^Mobile\s+/i, "");
}
function pa(e) {
	if (e) return e === "Mac OS" ? "macOS" : e;
}
function ma(e) {
	return e ? e === "macOS" ? "mac" : e === "Windows" ? "windows" : "other" : "other";
}
function ha(e) {
	return e === "mobile" || e === "tablet" || e === "wearable";
}
function ga(e) {
	return la.test(e);
}
function _a(e, t) {
	return ha(t) || ua.test(e) ? "mobile" : da.test(e) ? "desktop" : null;
}
function va(e) {
	return e ? /@sanity\/client/i.test(e) ? "@sanity/client" : /^curl\b/i.test(e) ? "curl" : /postman/i.test(e) ? "Postman" : /^axios\b/i.test(e) || /node-fetch/i.test(e) || /^got\//i.test(e) ? "HTTP client" : /python-requests|aiohttp|httpx/i.test(e) ? "Python client" : /^Go-http-client/i.test(e) ? "Go client" : e.length > 48 ? `${e.slice(0, 45)}…` : e : "Unknown";
}
function ya(e, t, n) {
	let r = [e, t].filter(Boolean);
	return r.length === 0 ? va(n) : r.join(" ");
}
function ba(e) {
	return {
		deviceKind: null,
		osFamily: null,
		isTrackable: !1,
		displayLabel: va(e),
		raw: e
	};
}
function xa(e) {
	let t = e.trim();
	if (!t || ga(t) || ca(t)) return ba(e);
	let n = new Hi(t).getResult();
	if (ca(n) || !n.browser.name) return ba(e);
	let r = pa(n.os.name), i = fa(n.browser.name), a = _a(t, n.device.type);
	return {
		deviceKind: a,
		osFamily: ma(r),
		isTrackable: a !== null,
		displayLabel: ya(r, i, t),
		raw: e
	};
}
function Sa(e) {
	let t = 0, n = 0, r = 0, i = 0, a = 0;
	for (let o of e) {
		let e = xa(o.label);
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
//#region src/report/narrative.ts
var Ca = .5, wa = .001, Ta = {
	"image-width": "oversized image delivery",
	"image-format": "image CDN settings",
	"image-quality": "image quality settings",
	"groq-spread": "GROQ query efficiency",
	"mp4-transfer": "video delivery format",
	"status-5xx": "server reliability",
	"status-4xx": "client request errors"
};
function Ea(e) {
	return e.length === 0 ? null : e.reduce((e, t) => t.bytes > e.bytes ? t : e);
}
function Da(e) {
	return e.length === 0 ? null : e.reduce((e, t) => {
		let n = e.responseBytes ?? 0, r = t.responseBytes ?? 0;
		return r === n ? (t.requests ?? 0) > (e.requests ?? 0) ? t : e : r > n ? t : e;
	});
}
function Oa(e, t) {
	return t <= 0 ? 0 : e / t;
}
function ka(e) {
	return e.byStatus.filter(({ label: e }) => Number(e) >= 500).reduce((e, t) => e + t.count, 0);
}
var Aa = [
	{
		kind: "fact",
		when: (e) => {
			let t = Ea(e.summary.distribution.segments);
			return t !== null && t.share >= Ca;
		},
		render: (e) => {
			let t = Ea(e.summary.distribution.segments);
			return t ? `Bandwidth is dominated by ${t.label.toLowerCase()} (${mt(t.share)}).` : "";
		},
		score: (e) => {
			let t = Ea(e.summary.distribution.segments);
			return t ? t.share * 100 : 0;
		}
	},
	{
		kind: "fact",
		when: (e) => {
			let t = e.topContributors.query;
			return t ? Oa(t.responseBytes, e.view.byUrlKind.query.responseBytes) >= Ca : !1;
		},
		render: () => "Only one query is responsible for most query bandwidth.",
		score: (e) => {
			let t = e.topContributors.query;
			return t ? Oa(t.responseBytes, e.view.byUrlKind.query.responseBytes) * 80 : 0;
		}
	},
	{
		kind: "fact",
		when: (e) => {
			let t = e.topContributors.image;
			return t ? Oa(t.responseBytes, e.view.byUrlKind.image.responseBytes) >= Ca : !1;
		},
		render: () => "A single image accounts for most image bandwidth.",
		score: (e) => {
			let t = e.topContributors.image;
			return t ? Oa(t.responseBytes, e.view.byUrlKind.image.responseBytes) * 70 : 0;
		}
	},
	{
		kind: "opportunity",
		when: (e) => Da([...e.summary.critical, ...e.summary.warnings]) !== null,
		render: (e) => {
			let t = Da([...e.summary.critical, ...e.summary.warnings]);
			return t ? t.id === "image-width" ? "Image dimensions appear to be the primary optimization opportunity." : t.id === "groq-spread" ? "GROQ query shape appears to be the main bandwidth driver." : t.id === "image-format" || t.id === "image-quality" ? "Image CDN settings appear to be the primary optimization opportunity." : t.id === "mp4-transfer" ? "Video delivery format appears to be the primary optimization opportunity." : t.id === "status-5xx" ? "Server reliability appears to be the most urgent issue." : "Client request errors appear to need attention." : "";
		},
		score: (e) => {
			let t = Da([...e.summary.critical, ...e.summary.warnings]);
			if (!t) return 0;
			let n = t.responseBytes ?? 0;
			return e.view.responseBytes <= 0 ? 50 : Math.max(40, n / e.view.responseBytes * 100);
		}
	},
	{
		kind: "health",
		when: (e) => {
			let t = ka(e.view);
			return t === 0 ? !1 : t / Math.max(e.view.requests, 1) < wa;
		},
		render: (e) => {
			let t = ka(e.view);
			return `Server health appears normal with only ${A(t)} 5xx ${t === 1 ? "response" : "responses"}.`;
		},
		score: () => 55
	},
	{
		kind: "health",
		when: (e) => {
			let t = ka(e.view);
			return t === 0 ? !1 : t / Math.max(e.view.requests, 1) >= wa;
		},
		render: () => "Server errors are elevated and likely need investigation.",
		score: () => 90
	},
	{
		kind: "health",
		when: (e) => e.summary.critical.length === 0 && e.summary.warnings.length === 0,
		render: () => "No major optimization targets stand out in this dataset.",
		score: () => 20
	}
];
function ja(e) {
	let t = [...e.summary.critical, ...e.summary.warnings], n = Da(t), r = e.summary.overallHealth;
	if (r === "red" && n?.id === "status-5xx") return "Server reliability should be addressed before bandwidth optimizations.";
	if (t.length === 0) return "Overall this dataset looks healthy with no significant issues detected.";
	if (n) {
		let e = Ta[n.id];
		if (e) return r === "green" ? `Overall this dataset shows a healthy API with ${e} being the primary optimization target.` : `Overall this dataset is generally healthy, with ${e} as the primary optimization target.`;
	}
	return "Overall this dataset has a mix of issues worth reviewing in the sections below.";
}
function Ma(e, t) {
	let n = {
		view: e,
		summary: t,
		topContributors: t.topContributors
	}, r = Aa.filter((e) => e.when(n)).map((e) => ({
		text: e.render(n),
		kind: e.kind,
		score: e.score(n)
	})).filter((e) => e.text.length > 0).sort((e, t) => t.score - e.score), i = [], a = /* @__PURE__ */ new Set();
	for (let e of r) {
		if (i.length >= 4) break;
		e.kind !== "health" && a.has(e.kind) || (i.push({
			text: e.text,
			kind: e.kind
		}), a.add(e.kind));
	}
	let o = ja(n);
	return o && i.push({
		text: o,
		kind: "synthesis"
	}), i;
}
//#endregion
//#region src/report/summarize.ts
var Na = 1024, Pa = Na * 1024, Fa = 100 * Pa, Ia = 1e3, La = .25, Ra = 10 * Pa, za = 100, Ba = .75, Va = .7, Ha = 400 * Na, Ua = .2, Wa = .5;
function Ga(e, t, n = `${t}s`) {
	return e === 1 ? t : n;
}
function Ka(e, t, n) {
	return `${A(e)} ${Ga(e, t, n)}`;
}
function qa(e) {
	return e.reduce((e, t) => (e.requests += t.requests, e.responseBytes += t.responseBytes, e), {
		requests: 0,
		responseBytes: 0
	});
}
function Ja(e, t) {
	return e.responseBytes >= Fa || e.requests >= Ia || t.responseBytes >= Ra && e.responseBytes / t.responseBytes >= La || t.requests >= za && e.requests / t.requests >= La;
}
function Ya(e, t) {
	return Ja(e, t) ? "critical" : "warning";
}
function Xa(e, t) {
	e.push(t);
}
function Za(e) {
	return Zn(e).image.map((e) => ({
		row: e,
		parsed: nr(e.label)
	}));
}
function Qa(e) {
	let t = Za(e);
	return {
		imageRows: t,
		wideRows: t.filter(({ parsed: e }) => ir(e.width)),
		unsafeFormatRows: t.filter(({ parsed: e }) => or(e.format)),
		qualityRows: t.filter(({ parsed: e }) => ar(e.quality, e.isSvg)),
		imageTotals: qa(t.map(({ row: e }) => e))
	};
}
function $a(e) {
	return Zn(e).query.filter((e) => {
		let t = qn(e.label), n = t ? Jn(e.label) : null;
		return t !== null && Ln(t, n ?? void 0);
	});
}
function eo(e) {
	return Zn(e).file.filter((e) => Wn(e.label));
}
function to(e, t) {
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
function no(e) {
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
function ro(e) {
	let t = e.toLowerCase();
	return t.includes("cdn.sanity.io") || t === "cdn" ? "CDN" : t.includes("apicdn") || t.includes("api.sanity.io") ? "API CDN" : e;
}
function io(e, t) {
	return e > 0 ? "red" : t > 0 ? "yellow" : "green";
}
function ao(e) {
	let t = [
		{
			label: "Images",
			bytes: e.byUrlKind.image.responseBytes,
			share: 0
		},
		{
			label: "Queries",
			bytes: e.byUrlKind.query.responseBytes,
			share: 0
		},
		{
			label: "Files",
			bytes: e.byUrlKind.file.responseBytes,
			share: 0
		},
		{
			label: "Other",
			bytes: e.byUrlKind.other.responseBytes,
			share: 0
		}
	].filter((e) => e.bytes > 0).map((t) => ({
		...t,
		share: e.responseBytes > 0 ? t.bytes / e.responseBytes : 0
	}));
	return {
		totalBytes: e.responseBytes,
		segments: t
	};
}
function oo(e, t, n) {
	let r = $a(e.byUrl);
	if (r.length > 0) {
		let i = qa(r), a = Ya(i, e), o = {
			id: "groq-spread",
			severity: a,
			summary: `${Ka(r.length, "query")} ${r.length === 1 ? "uses" : "use"} {...}`,
			suggestedFix: "Project only needed fields instead of using the {...} spread operator",
			requests: i.requests,
			responseBytes: i.responseBytes
		};
		Xa(a === "critical" ? t : n, o);
	}
	let i = eo(e.byUrl);
	if (i.length > 0) {
		let r = qa(i), a = Ya(r, e), o = {
			id: "mp4-transfer",
			severity: a,
			summary: `${Ka(i.length, "MP4 URL", "MP4 URLs")} served as progressive MP4`,
			suggestedFix: "Serve video via HLS (or similar adaptive streaming) instead of progressive MP4",
			requests: r.requests,
			responseBytes: r.responseBytes
		};
		Xa(a === "critical" ? t : n, o);
	}
	let a = Qa(e.byUrl);
	if (a.wideRows.length > 0) {
		let r = qa(a.wideRows.map(({ row: e }) => e)), i = Ya(r, e), o = {
			id: "image-width",
			severity: i,
			summary: `${Ka(a.wideRows.length, "image")} exceed 2000px`,
			suggestedFix: "Cap CDN width requests at 2000px or below",
			requests: r.requests,
			responseBytes: r.responseBytes
		};
		Xa(i === "critical" ? t : n, o);
	}
	if (a.unsafeFormatRows.length > 0) {
		let r = qa(a.unsafeFormatRows.map(({ row: e }) => e)), i = Ya(r, e), o = {
			id: "image-format",
			severity: i,
			summary: `${Ka(a.unsafeFormatRows.length, "image")} missing format=auto`,
			suggestedFix: "Use auto=format (or fm/format=\"auto\") for CDN image URLs",
			requests: r.requests,
			responseBytes: r.responseBytes
		};
		Xa(i === "critical" ? t : n, o);
	}
	if (a.qualityRows.length > 0) {
		let r = qa(a.qualityRows.map(({ row: e }) => e)), i = Ya(r, e), o = {
			id: "image-quality",
			severity: i,
			summary: `${Ka(a.qualityRows.length, "image")} with quality above 87`,
			suggestedFix: "Keep image quality at 87 or below for raster assets",
			requests: r.requests,
			responseBytes: r.responseBytes
		};
		Xa(i === "critical" ? t : n, o);
	}
	let o = e.byStatus.filter(({ label: e }) => Number(e) >= 500).reduce((e, t) => e + t.count, 0), s = e.byStatus.filter(({ label: e }) => {
		let t = Number(e);
		return t >= 400 && t < 500;
	}).reduce((e, t) => e + t.count, 0);
	return o > 0 && Xa(t, {
		id: "status-5xx",
		severity: "critical",
		summary: `${Ka(o, "server error")}`,
		suggestedFix: "Investigate failing API/CDN handlers returning 5xx",
		requests: o
	}), s > 0 && Xa(n, {
		id: "status-4xx",
		severity: "warning",
		summary: `${Ka(s, "client error")}`,
		suggestedFix: "Review missing assets and invalid client requests returning 4xx",
		requests: s
	}), {
		querySpreadRows: r,
		mp4Rows: i,
		images: a,
		serverErrorCount: o,
		clientErrorCount: s
	};
}
function so(e) {
	let t = [], n = ao(e).segments.reduce((e, t) => !e || t.bytes > e.bytes ? t : e, null);
	n && n.share >= Wa && e.responseBytes > 0 && t.push({ summary: `${n.label} account for ${mt(n.share)} of bandwidth` });
	let r = to(e.byDomain, "responseBytes");
	r && r.share >= Ba && t.push({ summary: `${ro(r.label)} serves ${mt(r.share)} of traffic` });
	let i = to(e.byHour, "responseBytes");
	i && i.share >= Va && t.push({ summary: `Peak hour was ${ht(i.label)}` });
	let a = no(e.responseSizeHistogram);
	return a && a.share >= Ba && t.push({ summary: `${mt(a.share)} of responses are ${a.label}` }), t;
}
function co(e, t) {
	let n = [], { querySpreadRows: r, mp4Rows: i, images: a, serverErrorCount: o, clientErrorCount: s } = t;
	a.imageRows.length > 0 && a.unsafeFormatRows.length === 0 && n.push({ summary: "All images use auto=format" }), a.imageTotals.requests > 0 && a.imageTotals.responseBytes / a.imageTotals.requests < Ha && n.push({ summary: "Average image response size is reasonable" });
	let c = to(e.byHour, "responseBytes");
	return (!c || c.share < Va) && n.push({ summary: "No suspicious bandwidth spikes detected" }), e.includesStudio && e.responseBytes > 0 && e.studio.responseBytes / e.responseBytes < Ua && n.push({ summary: "Studio traffic is negligible" }), o === 0 && n.push({ summary: "No server errors detected" }), s === 0 && n.push({ summary: "No client errors detected" }), e.byUrlKind.query.requests > 0 && r.length === 0 && n.push({ summary: "No GROQ spread queries detected" }), a.imageRows.length > 0 && a.wideRows.length === 0 && n.push({ summary: "No oversized image widths detected" }), a.imageRows.length > 0 && a.qualityRows.length === 0 && n.push({ summary: "No high image quality settings detected" }), e.byUrlKind.file.requests > 0 && i.length === 0 && n.push({ summary: "No progressive MP4 downloads detected" }), n.slice(0, 8);
}
function lo(e) {
	let t = [], n = [], r = oo(e, t, n), i = ao(e), a = so(e), o = co(e, r), s = {
		overallHealth: io(t.length, n.length),
		critical: t,
		warnings: n,
		observations: a,
		healthy: o,
		atAGlance: [],
		distribution: i,
		topContributors: e.topContributors
	};
	return {
		...s,
		atAGlance: Ma(e, s)
	};
}
function uo(e) {
	let t = e.critical.length + e.warnings.length;
	return t === 0 ? "✅ No issues detected" : `🚨 ${A(t)} ${Ga(t, "issue")} detected`;
}
//#endregion
//#region src/report/markdown.ts
function fo(e) {
	return e.replaceAll("|", "\\|").replaceAll("\n", " ").replaceAll("\r", "");
}
function po(e) {
	return e.toLowerCase().trim().replaceAll(/[^\w\s-]/g, "").replaceAll(/\s+/g, "-").replaceAll(/-+/g, "-").replace(/^-+|-+$/g, "") || "report";
}
var mo = "consider HLS streaming instead of MP4";
function ho(e, t) {
	return t.length === 0 ? "" : [
		`### ${e}`,
		"",
		...t.slice(0, 8).map((e) => `- ${e}`),
		""
	].join("\n");
}
function go(e) {
	return [
		"### Distribution",
		"",
		`- Total: ${j(e.distribution.totalBytes)}`,
		...e.distribution.segments.map((e) => `- ${e.label}: ${j(e.bytes)}`),
		""
	].join("\n");
}
function _o(e) {
	let t = [], { topContributors: n } = e;
	return n.image && t.push(`- Largest image: ${j(n.image.responseBytes)} (${A(n.image.requests)} requests)`), n.query && t.push(`- Largest query: ${j(n.query.responseBytes)} (${A(n.query.requests)} requests)`), n.file && t.push(`- Largest file: ${j(n.file.responseBytes)} (${A(n.file.requests)} requests)`), n.referer && t.push(`- Largest referer: ${j(n.referer.responseBytes)}`), t.length === 0 ? "" : [
		"### Top contributors",
		"",
		...t,
		""
	].join("\n");
}
function vo(e) {
	let t = lo(e), n = t.atAGlance.filter((e) => e.kind !== "synthesis").map((e) => e.text), r = t.atAGlance.find((e) => e.kind === "synthesis");
	return [
		"## Executive Summary",
		"",
		uo(t),
		"",
		ho("At a glance", n),
		r ? `${r.text}\n` : "",
		go(t),
		_o(t),
		ho("Critical", t.critical.map((e) => e.summary)),
		ho("Warnings", t.warnings.map((e) => e.summary)),
		ho("Observations", t.observations.map((e) => e.summary)),
		ho("No action needed", t.healthy.map((e) => `✓ ${e.summary}`))
	].filter(Boolean).join("\n");
}
function yo(e, t) {
	if (e === null) return "—";
	let n = String(e);
	return t ? `${n} (${t})` : n;
}
function bo(e, t) {
	if (t.length === 0) return "";
	let n = [
		`### ${e}`,
		"",
		"| Label | Requests | Bandwidth | Avg / req |",
		"| --- | ---: | ---: | ---: |"
	];
	for (let e of t) n.push(`| ${fo(e.label)} | ${A(e.requests)} | ${j(e.responseBytes)} | ${j(vt(e))} |`);
	return n.push(""), n.join("\n");
}
function xo(e, t) {
	if (t.length === 0) return "";
	let n = [
		`#### ${e}`,
		"",
		"| Label | Requests | Bandwidth | Avg / req |",
		"| --- | ---: | ---: | ---: |"
	];
	for (let e of t) n.push(`| ${fo(e.label)} | ${A(e.requests)} | ${j(e.responseBytes)} | ${j(vt(e))} |`);
	return n.push(""), n.join("\n");
}
function So(e) {
	if (e.length === 0) return "";
	let t = [
		"#### Images",
		"",
		"| ID | URL | Width | Quality | Format | Bandwidth | Requests | Avg / req |",
		"| --- | --- | ---: | ---: | --- | ---: | ---: | ---: |"
	];
	for (let n of e) {
		let e = nr(n.label), r = yo(e.width, ir(e.width) ? "width exceeds 2000px" : void 0), i = yo(e.quality, ar(e.quality, e.isSvg) ? "quality exceeds 87" : void 0), a = yo(e.format, or(e.format) ? "format should be \"auto\"" : void 0);
		t.push(`| ${fo(e.id)} | ${fo(n.label)} | ${r} | ${i} | ${a} | ${j(n.responseBytes)} | ${A(n.requests)} | ${j(vt(n))} |`);
	}
	return t.push(""), t.join("\n");
}
function Co(e) {
	if (e.length === 0) return "";
	let t = [
		"#### Queries",
		"",
		"| Label | Requests | Bandwidth | Avg / req |",
		"| --- | ---: | ---: | ---: |"
	];
	for (let n of e) {
		let e = qn(n.label), r = e ? Jn(n.label) : null, i = e && Ln(e, r ?? void 0) ? `${n.label} (${jn})` : n.label;
		t.push(`| ${fo(i)} | ${A(n.requests)} | ${j(n.responseBytes)} | ${j(vt(n))} |`);
	}
	return t.push(""), t.join("\n");
}
function wo(e) {
	if (e.length === 0) return "";
	let t = [
		"#### Files",
		"",
		"| Label | Requests | Bandwidth | Avg / req |",
		"| --- | ---: | ---: | ---: |"
	];
	for (let n of e) {
		let e = Wn(n.label) ? `${n.label} (${mo})` : n.label;
		t.push(`| ${fo(e)} | ${A(n.requests)} | ${j(n.responseBytes)} | ${j(vt(n))} |`);
	}
	return t.push(""), t.join("\n");
}
function To(e) {
	let t = Zn(e), n = ["### Top URLs", ""];
	return t.image.length > 0 && n.push(So(t.image)), t.file.length > 0 && n.push(wo(t.file)), t.query.length > 0 && n.push(Co(t.query)), t.other.length > 0 && n.push(xo("Other", t.other)), n.filter(Boolean).join("\n");
}
function Eo(e, t) {
	if (t.length === 0) return "";
	let n = Sa(t), r = [`### ${e}`, ""];
	n.trackableRequests > 0 && r.push(`Mac ${pt(n.macPct)} · Windows ${pt(n.windowsPct)} · Mobile ${pt(n.mobilePct)} · Desktop ${pt(n.desktopPct)}`, ""), r.push("| Device | Label | Requests | Bandwidth | Avg / req |", "| --- | --- | ---: | ---: | ---: |");
	for (let e of t) {
		let t = xa(e.label), n = t.deviceKind === "mobile" ? "Mobile" : t.deviceKind === "desktop" ? "Desktop" : "—";
		r.push(`| ${n} | ${fo(`${t.displayLabel} — ${t.raw}`)} | ${A(e.requests)} | ${j(e.responseBytes)} | ${j(vt(e))} |`);
	}
	return r.push(""), r.join("\n");
}
function Do(e, t) {
	if (t.length === 0) return "";
	let n = [
		`### ${e}`,
		"",
		"| Label | Count |",
		"| --- | ---: |"
	];
	for (let e of t) n.push(`| ${fo(e.label)} | ${A(e.count)} |`);
	return n.push(""), n.join("\n");
}
function Oo(e) {
	let t = e.firstTimestamp && e.lastTimestamp ? `${_t(e.firstTimestamp)} → ${_t(e.lastTimestamp)}` : "No timestamps found";
	return [
		"## Summary",
		"",
		`- Requests: ${A(e.requests)}`,
		`- Response bandwidth: ${j(e.responseBytes)}`,
		`- Request bytes: ${j(e.requestBytes)}`,
		`- Period: ${t}`,
		`- Studio: ${A(e.studio.requests)} requests, ${j(e.studio.responseBytes)} response`,
		`- Billable: ${A(e.nonStudio.requests)} requests, ${j(e.nonStudio.responseBytes)} response`,
		""
	].join("\n");
}
function ko(e, t) {
	let n = [];
	return t.domain && n.push(bo("Top domains", e.byDomain)), t.endpoint && n.push(bo("Top endpoints", e.byEndpoint)), t.date && n.push(bo("Daily bandwidth", e.byDate)), t.hour && n.push(bo("Hourly bandwidth", e.byHour)), t.status && n.push(Do("Response codes", e.byStatus)), t.histogram && n.push(Do("Response size buckets", e.responseSizeHistogram)), t.urls && n.push(To(e.byUrl)), t.referers && n.push(bo("Top referers", e.byReferer)), t.userAgents && n.push(Eo("Top user agents", e.byUserAgent)), t.ips && n.push(bo("Top IPs", e.byIp)), n.filter(Boolean).join("\n");
}
function Ao(e, t) {
	let n = t === "billable" ? e.billable : e.all;
	return [
		`# ${e.title}`,
		"",
		`- Source: \`${e.sourcePath}\``,
		`- Generated: ${e.generatedAt}`,
		`- View: ${n.label}`,
		`- Max table rows: ${e.config.topN}`,
		"",
		vo(n),
		"",
		Oo(n),
		ko(n, e.config.sections)
	].join("\n");
}
//#endregion
//#region node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jo = 0;
Array.isArray;
function $(e, t, n, r, i, a) {
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
		__v: --jo,
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
function Mo({ data: e }) {
	return /* @__PURE__ */ $("header", {
		class: "mb-24 flex flex-wrap items-start justify-between gap-16 lg:items-end",
		children: [/* @__PURE__ */ $("div", { children: [/* @__PURE__ */ $("h1", {
			class: "heading-1 m-0",
			children: e.title
		}), /* @__PURE__ */ $("div", {
			class: "body-1 mt-10 max-w-[72ch] text-muted",
			children: [
				"Generated from ",
				/* @__PURE__ */ $("code", { children: e.sourcePath }),
				". The report is self-contained and includes the normalized summary JSON payload inline."
			]
		})] }), /* @__PURE__ */ $("div", {
			class: "body-2 grid justify-items-start gap-8 text-left text-muted lg:justify-items-end lg:text-right",
			children: [/* @__PURE__ */ $("div", { children: ["Generated on: ", _t(e.generatedAt)] }), /* @__PURE__ */ $("div", { children: ["Max table rows: ", e.config.topN] })]
		})]
	});
}
//#endregion
//#region src/report/components/Button.tsx
var No = {
	default: "btn",
	"ghost-icon": "btn-ghost",
	"ghost-icon-sm": "btn-ghost-sm",
	"outline-pill": "btn-pill",
	"outline-pill-accent": "btn-accent",
	tab: "btn-tab"
};
function Po({ variant: e = "default", icon: t, iconPosition: n = "start", children: r, class: i, type: a = "button", ...o }) {
	return /* @__PURE__ */ $("button", {
		type: a,
		class: [No[e], i].filter(Boolean).join(" "),
		...o,
		children: [
			t && n === "start" ? /* @__PURE__ */ $("span", {
				class: "btn-icon",
				children: t
			}) : null,
			r ? /* @__PURE__ */ $("span", {
				class: "btn-label",
				children: r
			}) : null,
			t && n === "end" ? /* @__PURE__ */ $("span", {
				class: "btn-icon",
				children: t
			}) : null
		]
	});
}
//#endregion
//#region src/report/components/icons.tsx
function Fo() {
	return /* @__PURE__ */ $("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ $("rect", {
			x: "9",
			y: "9",
			width: "13",
			height: "13",
			rx: "2",
			ry: "2"
		}), /* @__PURE__ */ $("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
	});
}
function Io() {
	return /* @__PURE__ */ $("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ $("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
			/* @__PURE__ */ $("polyline", { points: "15 3 21 3 21 9" }),
			/* @__PURE__ */ $("line", {
				x1: "10",
				y1: "14",
				x2: "21",
				y2: "3"
			})
		]
	});
}
function Lo() {
	return /* @__PURE__ */ $("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ $("path", { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
			/* @__PURE__ */ $("line", {
				x1: "12",
				y1: "9",
				x2: "12",
				y2: "13"
			}),
			/* @__PURE__ */ $("line", {
				x1: "12",
				y1: "17",
				x2: "12.01",
				y2: "17"
			})
		]
	});
}
function Ro() {
	return /* @__PURE__ */ $("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ $("circle", {
				cx: "12",
				cy: "12",
				r: "10"
			}),
			/* @__PURE__ */ $("line", {
				x1: "12",
				y1: "8",
				x2: "12",
				y2: "12"
			}),
			/* @__PURE__ */ $("line", {
				x1: "12",
				y1: "16",
				x2: "12.01",
				y2: "16"
			})
		]
	});
}
function zo() {
	return /* @__PURE__ */ $("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ $("path", { d: "m8 9 4-4 4 4" }), /* @__PURE__ */ $("path", { d: "m8 15 4 4 4-4" })]
	});
}
function Bo() {
	return /* @__PURE__ */ $("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ $("path", { d: "M12 3v12" }),
			/* @__PURE__ */ $("path", { d: "m7 10 5 5 5-5" }),
			/* @__PURE__ */ $("path", { d: "M5 21h14" })
		]
	});
}
//#endregion
//#region src/report/components/MarkdownDownload.tsx
function Vo() {
	return /* @__PURE__ */ $(Po, {
		id: "download-markdown",
		icon: /* @__PURE__ */ $(Bo, {}),
		children: "Download markdown for LLM"
	});
}
//#endregion
//#region src/report/components/ViewToggle.tsx
function Ho() {
	return /* @__PURE__ */ $("label", {
		class: "panel flex cursor-pointer items-center gap-10 px-16 py-12 select-none",
		children: [/* @__PURE__ */ $("input", {
			type: "checkbox",
			id: "show-studio-requests",
			class: "m-0 size-16 cursor-pointer accent-[var(--color-blue,#0ea5e9)]"
		}), /* @__PURE__ */ $("span", {
			class: "body-2 text-text",
			children: "Show non-billable studio requests"
		})]
	});
}
//#endregion
//#region src/report/components/ReportControls.tsx
function Uo({ showToggle: e }) {
	return /* @__PURE__ */ $("div", {
		class: "mb-24 flex flex-wrap items-center gap-12 [&>:first-child]:min-w-0 [&>:first-child]:flex-1 [&>:first-child]:basis-240",
		children: [e ? /* @__PURE__ */ $(Ho, {}) : null, /* @__PURE__ */ $(Vo, {})]
	});
}
//#endregion
//#region src/report/sections.ts
var Wo = {
	image: "urls/image",
	file: "urls/file",
	query: "urls/query",
	other: "urls/other"
};
function Go(e) {
	return Xn(Zn(e ?? [])).map((e) => ({
		slug: Wo[e.id],
		label: e.label
	}));
}
var Ko = [
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
function qo(e, t) {
	return Ko.filter((t) => !t.configKey || e[t.configKey]).map(({ slug: e, label: n }) => ({
		slug: e,
		label: n,
		children: e === "urls" ? Go(t) : void 0
	}));
}
//#endregion
//#region src/report/components/TableOfContents.tsx
function Jo({ sections: e, urlRows: t }) {
	let n = qo(e, t);
	return /* @__PURE__ */ $("nav", {
		class: "card top-20 self-start lg:sticky",
		"aria-label": "Report sections",
		children: [/* @__PURE__ */ $("div", {
			class: "eyebrow-1 mb-12 text-muted",
			children: "Contents"
		}), /* @__PURE__ */ $("ul", {
			class: "m-0 grid list-none gap-4 p-0",
			children: n.map((e) => /* @__PURE__ */ $("li", { children: [/* @__PURE__ */ $("a", {
				class: "body-2 block rounded-sm px-8 py-6 text-text no-underline transition-colors hover:bg-white/6",
				href: `#${e.slug}`,
				"data-toc-link": !0,
				children: e.label
			}), e.children && e.children.length > 0 ? /* @__PURE__ */ $("ul", {
				class: "mt-2 mb-4 grid list-none gap-2 py-0 pr-0 pl-12",
				children: e.children.map((e) => /* @__PURE__ */ $("li", { children: /* @__PURE__ */ $("a", {
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
var Yo = [
	"blue",
	"green",
	"amber",
	"red",
	"purple",
	"teal",
	"orange"
];
function Xo(e) {
	return `var(--color-${e})`;
}
function Zo(e) {
	let t = {};
	for (let [n, r] of Yo.entries()) {
		let i = e[n];
		i && (t[`--color-${r}`] = i);
	}
	return t;
}
//#endregion
//#region src/report/vertical-bar-chart.ts
var Qo = 26.8, $o = 3.2;
function es(e) {
	let t = [];
	for (let n = 0; n <= 4; n += 1) t.push(e / 4 * n);
	return t;
}
function ts(e, t = 1) {
	if (e <= 0) return t;
	let n = 10 ** Math.floor(Math.log10(e)), r = e / n, i;
	return i = r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10, Math.max(i * n, t);
}
var ns = {
	barColumn: "_barColumn_s5la3_1",
	bar: "_bar_s5la3_1"
};
//#endregion
//#region src/report/components/VerticalBarChart.tsx
function rs({ title: e, rows: t, accent: n, emptyMessage: r, axisMax: i, formatAxisTick: a }) {
	let o = es(i);
	return /* @__PURE__ */ $("section", {
		class: "card",
		children: [/* @__PURE__ */ $("h3", {
			class: "heading-3",
			children: e
		}), t.length === 0 ? /* @__PURE__ */ $("p", {
			class: "empty body-2 mt-12",
			children: r
		}) : /* @__PURE__ */ $("div", {
			class: "mt-12 flex min-h-0 gap-8",
			children: [/* @__PURE__ */ $("div", {
				class: "mb-32 flex h-268 w-56 shrink-0 flex-col justify-between",
				"aria-hidden": "true",
				children: o.slice().reverse().map((e) => /* @__PURE__ */ $("span", {
					class: "eyebrow-1 text-right leading-none tabular-nums text-muted",
					children: a(e)
				}, e))
			}), /* @__PURE__ */ $("div", {
				class: "min-w-0 flex-1",
				children: /* @__PURE__ */ $("div", {
					class: "relative h-300 max-h-300",
					children: [o.map((e) => /* @__PURE__ */ $("div", {
						class: "pointer-events-none absolute right-0 left-0 h-0 border-t border-white/6",
						style: { bottom: `${$o + e / i * Qo}rem` }
					}, e)), /* @__PURE__ */ $("div", {
						class: "relative z-1 box-border flex h-full items-stretch gap-4 overflow-x-auto pb-32",
						children: t.map((e) => {
							let t = i > 0 ? Math.min(e.value / i * 100, 100) : 0;
							return /* @__PURE__ */ $("div", {
								class: `${ns.barColumn} relative flex min-h-0 min-w-16 flex-1 flex-col items-stretch`,
								"data-tip": e.tip,
								children: [/* @__PURE__ */ $("div", {
									class: "flex min-h-0 flex-1 items-end",
									children: /* @__PURE__ */ $("div", {
										class: `${ns.bar} w-full min-h-2 rounded-t-sm`,
										style: {
											height: `${t.toFixed(2)}%`,
											background: n
										}
									})
								}), /* @__PURE__ */ $("span", {
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
var is = 1024 ** 3;
function as(e) {
	return e / is;
}
function os(e) {
	return e * is;
}
function ss(e) {
	let t = as(e);
	return t >= 100 ? `${t.toFixed(0)} GB` : t >= 10 ? `${t.toFixed(1)} GB` : t >= 1 ? `${t.toFixed(2)} GB` : t >= .01 ? `${t.toFixed(3)} GB` : t > 0 ? `${t.toFixed(4)} GB` : "0 GB";
}
function cs({ title: e, rows: t, accent: n }) {
	return /* @__PURE__ */ $(rs, {
		title: e,
		accent: n,
		emptyMessage: "No bandwidth data in this range.",
		axisMax: ts(t.reduce((e, t) => Math.max(e, t.responseBytes), 0), os(.001)),
		formatAxisTick: ss,
		rows: t.map((e) => ({
			label: e.label,
			value: e.responseBytes,
			tip: `${j(e.responseBytes)} · ${A(e.requests)} requests`
		}))
	});
}
//#endregion
//#region src/report/components/BarList.tsx
function ls({ title: e, rows: t, accent: n }) {
	let r = t.reduce((e, t) => Math.max(e, t.responseBytes), 0);
	return /* @__PURE__ */ $("section", {
		class: "card",
		children: [/* @__PURE__ */ $("h3", {
			class: "heading-3",
			children: e
		}), /* @__PURE__ */ $("div", {
			class: "mt-12 grid gap-10",
			children: t.map((e) => {
				let t = r > 0 ? e.responseBytes / r * 100 : 0;
				return /* @__PURE__ */ $("div", {
					class: "grid gap-6",
					children: [/* @__PURE__ */ $("div", {
						class: "flex items-baseline justify-between gap-16",
						children: [/* @__PURE__ */ $("span", {
							class: "min-w-0 truncate text-text",
							title: e.label,
							children: e.label
						}), /* @__PURE__ */ $("span", {
							class: "num shrink-0",
							children: [
								j(e.responseBytes),
								" ",
								/* @__PURE__ */ $("span", {
									class: "num",
									children: ["• ", A(e.requests)]
								})
							]
						})]
					}), /* @__PURE__ */ $("div", {
						class: "h-10 w-full overflow-hidden rounded-pill bg-track",
						children: /* @__PURE__ */ $("div", {
							class: "h-full rounded-[inherit]",
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
function us(e) {
	return A(Math.round(e));
}
function ds({ title: e, rows: t, accent: n }) {
	return /* @__PURE__ */ $(rs, {
		title: e,
		accent: n,
		emptyMessage: "No response code data in this range.",
		axisMax: ts(t.reduce((e, t) => Math.max(e, t.count), 0)),
		formatAxisTick: us,
		rows: t.map((e) => ({
			label: e.label,
			value: e.count,
			tip: `${A(e.count)} requests`
		}))
	});
}
//#endregion
//#region src/report/components/CountBars.tsx
function fs({ title: e, rows: t, accent: n }) {
	let r = t.reduce((e, t) => Math.max(e, t.count), 0);
	return /* @__PURE__ */ $("section", {
		class: "card",
		children: [/* @__PURE__ */ $("h3", {
			class: "heading-3",
			children: e
		}), /* @__PURE__ */ $("div", {
			class: "mt-12 grid gap-10",
			children: t.map((e) => {
				let t = r > 0 ? e.count / r * 100 : 0;
				return /* @__PURE__ */ $("div", {
					class: "grid gap-6",
					children: [/* @__PURE__ */ $("div", {
						class: "flex items-baseline justify-between gap-16",
						children: [/* @__PURE__ */ $("span", {
							class: "min-w-0 truncate text-text",
							children: e.label
						}), /* @__PURE__ */ $("span", {
							class: "num shrink-0",
							children: A(e.count)
						})]
					}), /* @__PURE__ */ $("div", {
						class: "h-10 w-full overflow-hidden rounded-pill bg-track",
						children: /* @__PURE__ */ $("div", {
							class: "h-full rounded-[inherit]",
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
function ps(e) {
	return e == null || e === "" ? "" : String(e);
}
//#endregion
//#region src/report/components/SortableTableHeader.tsx
function ms({ label: e, sortKey: t, sortType: n, className: r }) {
	return /* @__PURE__ */ $("th", {
		class: r,
		children: /* @__PURE__ */ $("button", {
			type: "button",
			class: "sort-header",
			"data-sort-key": t,
			"data-sort-type": n,
			"data-sort-direction": "none",
			"aria-sort": "none",
			children: [/* @__PURE__ */ $("span", {
				class: "leading-[1.2]",
				children: e
			}), /* @__PURE__ */ $("span", {
				class: "sort-icon",
				children: /* @__PURE__ */ $(zo, {})
			})]
		})
	});
}
//#endregion
//#region src/report/components/DataTable.tsx
function hs({ title: e, rows: t, hasCopyButton: n = !1, copyToastMessage: r = "Copied", labelAdornment: i, renderLabel: a, header: o }) {
	return /* @__PURE__ */ $("section", {
		class: "card",
		children: [
			/* @__PURE__ */ $("h3", {
				class: "heading-3",
				children: e
			}),
			o,
			/* @__PURE__ */ $("div", {
				class: "data-table-wrap",
				children: /* @__PURE__ */ $("table", {
					class: "body-1 data-table",
					"data-sortable-table": !0,
					children: [/* @__PURE__ */ $("thead", { children: /* @__PURE__ */ $("tr", { children: [
						/* @__PURE__ */ $(ms, {
							label: "Label",
							sortKey: "label",
							sortType: "string"
						}),
						/* @__PURE__ */ $(ms, {
							label: "Bandwidth",
							sortKey: "bandwidth",
							sortType: "number",
							className: "num"
						}),
						/* @__PURE__ */ $(ms, {
							label: "Requests",
							sortKey: "requests",
							sortType: "number",
							className: "num"
						}),
						/* @__PURE__ */ $(ms, {
							label: "Avg / req",
							sortKey: "avg",
							sortType: "number",
							className: "num"
						})
					] }) }), /* @__PURE__ */ $("tbody", { children: t.map((e, t) => /* @__PURE__ */ $("tr", {
						"data-row-index": t,
						"data-sort-label": ps(e.label),
						"data-sort-bandwidth": ps(e.responseBytes),
						"data-sort-requests": ps(e.requests),
						"data-sort-avg": ps(vt(e)),
						children: [
							/* @__PURE__ */ $("td", {
								class: "max-w-520",
								title: a ? void 0 : e.label,
								children: a ? a(e) : /* @__PURE__ */ $("div", {
									class: "flex min-w-0 items-center gap-6",
									children: [
										n ? /* @__PURE__ */ $(Po, {
											variant: "ghost-icon-sm",
											icon: /* @__PURE__ */ $(Fo, {}),
											"data-copy-value": e.label,
											"data-copy-toast": r,
											"aria-label": `Copy "${e.label}"`,
											title: "Copy to clipboard"
										}) : null,
										/* @__PURE__ */ $("span", {
											class: "min-w-0 flex-1 truncate",
											children: e.label
										}),
										i ? i(e) : null
									]
								})
							}),
							/* @__PURE__ */ $("td", {
								class: "num",
								children: j(e.responseBytes)
							}),
							/* @__PURE__ */ $("td", {
								class: "num",
								children: A(e.requests)
							}),
							/* @__PURE__ */ $("td", {
								class: "num",
								children: j(vt(e))
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
function gs(e, t, n, r) {
	let i = e + t;
	if (i <= 0) return `background: ${r};`;
	let a = e / i * 100;
	return `background: conic-gradient(${n} 0 ${a}%, ${r} ${a}% 100%);`;
}
var _s = { donut: "_donut_1drq4_1" };
//#endregion
//#region src/report/components/Donut.tsx
function vs({ title: e, primary: t, secondary: n, colors: r }) {
	let i = t.value + n.value, a = i > 0 ? t.value / i * 100 : 0;
	return /* @__PURE__ */ $("article", {
		class: "card",
		children: [/* @__PURE__ */ $("h3", {
			class: "heading-3",
			children: e
		}), /* @__PURE__ */ $("div", {
			class: "mt-12 grid justify-items-center gap-16",
			children: [/* @__PURE__ */ $("div", {
				class: `${_s.donut} relative grid aspect-square w-full place-items-center rounded-full p-22`,
				style: gs(t.value, n.value, r.primary, r.secondary),
				children: /* @__PURE__ */ $("div", {
					class: "body-1 relative z-1 grid justify-items-center gap-4 text-center",
					children: [/* @__PURE__ */ $("strong", {
						class: "heading-4",
						children: j(i)
					}), /* @__PURE__ */ $("span", { children: pt(a) })]
				})
			}), /* @__PURE__ */ $("div", {
				class: "body-1 grid w-full gap-10 text-muted",
				children: [/* @__PURE__ */ $("div", { children: [
					/* @__PURE__ */ $("span", {
						class: "mr-8 inline-block size-11 rounded-pill align-[-0.1rem]",
						style: { background: r.primary }
					}),
					t.label,
					" ",
					/* @__PURE__ */ $("strong", {
						class: "text-text",
						children: j(t.value)
					})
				] }), /* @__PURE__ */ $("div", { children: [
					/* @__PURE__ */ $("span", {
						class: "mr-8 inline-block size-11 rounded-pill align-[-0.1rem]",
						style: { background: r.secondary }
					}),
					n.label,
					" ",
					/* @__PURE__ */ $("strong", {
						class: "text-text",
						children: j(n.value)
					})
				] })]
			})]
		})]
	});
}
//#endregion
//#region src/report/components/ContributorCard.tsx
function ys(e, t) {
	return t === "image" ? nr(e.label).id : e.label;
}
function bs({ title: e, contributor: t, labelKind: n = "default", showRequests: r = !0 }) {
	let i = ys(t, n);
	return /* @__PURE__ */ $("article", {
		class: "card card-metric grid min-w-0 content-between gap-8",
		children: [
			/* @__PURE__ */ $("div", {
				class: "eyebrow-1 text-muted",
				children: e
			}),
			/* @__PURE__ */ $("div", {
				class: "body-1 truncate text-text",
				title: t.label,
				children: i
			}),
			/* @__PURE__ */ $("div", {
				class: "display-1 text-text",
				children: j(t.responseBytes)
			}),
			r ? /* @__PURE__ */ $("div", {
				class: "body-2 text-muted",
				children: [A(t.requests), " requests"]
			}) : null
		]
	});
}
//#endregion
//#region src/report/components/DistributionCard.tsx
function xs({ totalBytes: e, segments: t }) {
	return /* @__PURE__ */ $("article", {
		class: "card card-metric grid content-between gap-12",
		children: [
			/* @__PURE__ */ $("div", {
				class: "eyebrow-1 text-muted",
				children: "Distribution"
			}),
			/* @__PURE__ */ $("div", {
				class: "display-1 text-text",
				children: j(e)
			}),
			/* @__PURE__ */ $("div", {
				class: "body-2 grid gap-4 text-muted",
				children: t.map((e) => /* @__PURE__ */ $("div", { children: [
					mt(e.share),
					" ",
					e.label
				] }, e.label))
			})
		]
	});
}
//#endregion
//#region src/report/components/FindingBox.tsx
var Ss = {
	green: "tone-green",
	red: "tone-red",
	yellow: "tone-yellow"
};
function Cs({ text: e, tone: t }) {
	let n = [
		"card",
		"grid",
		"min-h-0",
		"content-start",
		"gap-8"
	];
	return t && n.push(Ss[t]), /* @__PURE__ */ $("article", {
		class: n.join(" "),
		children: t ? /* @__PURE__ */ $("div", {
			class: "flex items-center gap-8",
			children: [/* @__PURE__ */ $("span", {
				class: "status-dot shrink-0",
				"aria-hidden": "true"
			}), /* @__PURE__ */ $("p", {
				class: "body-1 m-0 min-w-0 text-text",
				children: e
			})]
		}) : /* @__PURE__ */ $("p", {
			class: "body-1 m-0 min-w-0 text-text",
			children: e
		})
	});
}
//#endregion
//#region src/report/components/FindingsSummary.tsx
function ws({ title: e, items: t, emptyMessage: n, tone: r }) {
	return t.length === 0 && !n ? null : /* @__PURE__ */ $("div", {
		class: "flex flex-col gap-12",
		children: [/* @__PURE__ */ $("div", {
			class: "eyebrow-1 section-title",
			children: e
		}), t.length === 0 ? /* @__PURE__ */ $(Cs, {
			text: n ?? "",
			tone: r
		}) : /* @__PURE__ */ $("div", {
			class: "flex flex-col gap-12",
			children: t.map((e) => /* @__PURE__ */ $(Cs, {
				text: e,
				tone: r
			}, e))
		})]
	});
}
function Ts({ summary: e }) {
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
	].filter((e) => e !== null), i = [/* @__PURE__ */ $(xs, {
		totalBytes: e.distribution.totalBytes,
		segments: e.distribution.segments
	}, "distribution"), ...r.map((e) => /* @__PURE__ */ $(bs, {
		title: e.title,
		contributor: e.contributor,
		labelKind: e.labelKind,
		showRequests: e.showRequests ?? !0
	}, e.key))];
	return /* @__PURE__ */ $("section", {
		class: "mb-24 grid scroll-mt-20 gap-16",
		"data-section": "findings",
		"data-health": e.overallHealth,
		children: [
			e.atAGlance.length > 0 ? /* @__PURE__ */ $("div", {
				class: "card grid gap-12",
				children: [
					/* @__PURE__ */ $("div", {
						class: "eyebrow-1 section-title",
						children: "At a glance"
					}),
					t.length > 0 ? /* @__PURE__ */ $("div", {
						class: "grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3",
						children: t.map((e) => /* @__PURE__ */ $(Cs, { text: e.text }, e.text))
					}) : null,
					n ? /* @__PURE__ */ $("p", {
						class: "body-1 m-0 text-text font-medium",
						children: n.text
					}) : null
				]
			}) : null,
			i.length > 0 ? /* @__PURE__ */ $("div", {
				class: "grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3",
				children: i
			}) : null,
			/* @__PURE__ */ $("div", {
				class: "grid grid-cols-2 lg:grid-cols-4 gap-x-24 gap-y-48",
				children: [
					/* @__PURE__ */ $(ws, {
						title: "Critical",
						items: e.critical.map((e) => e.summary),
						emptyMessage: "No critical issues detected.",
						tone: "red"
					}),
					/* @__PURE__ */ $(ws, {
						title: "Warnings",
						items: e.warnings.map((e) => e.summary),
						tone: "yellow"
					}),
					/* @__PURE__ */ $(ws, {
						title: "Observations",
						items: e.observations.map((e) => e.summary)
					}),
					/* @__PURE__ */ $(ws, {
						title: "No action needed",
						items: e.healthy.map((e) => `✓ ${e.summary}`),
						tone: "green"
					})
				]
			})
		]
	});
}
//#endregion
//#region src/report/components/Metric.tsx
function Es({ label: e, value: t, note: n }) {
	return /* @__PURE__ */ $("article", {
		class: "card card-metric grid content-between gap-0",
		children: [
			/* @__PURE__ */ $("div", {
				class: "eyebrow-1 text-muted",
				children: e
			}),
			/* @__PURE__ */ $("div", {
				class: "display-1 mt-auto pt-10",
				children: t
			}),
			n ? /* @__PURE__ */ $("div", {
				class: "body-2 mt-8 text-muted",
				children: n
			}) : null
		]
	});
}
//#endregion
//#region src/report/is-development-url.ts
function Ds(e, t) {
	let n = e.toLowerCase();
	return (n === "localhost" || n === "127.0.0.1") && t !== "";
}
function Os(e) {
	return /^192\.168\.\d{1,3}\.\d{1,3}$/.test(e);
}
function ks(e) {
	return /192\.168\.\d{1,3}\.\d{1,3}/.test(e) ? !0 : /(?:^|\/\/)(?:localhost|127\.0\.0\.1):\d+/.test(e);
}
function As(e) {
	if (!e || e === "(empty)") return !1;
	try {
		let t = new URL(e);
		return Os(t.hostname) || Ds(t.hostname, t.port);
	} catch {
		return ks(e);
	}
}
//#endregion
//#region src/report/components/RefererDataTable.tsx
function js(e) {
	return e.startsWith("https://");
}
function Ms({ row: e }) {
	return /* @__PURE__ */ $("div", {
		class: "flex min-w-0 items-center gap-6",
		children: [
			/* @__PURE__ */ $(Po, {
				variant: "ghost-icon-sm",
				icon: /* @__PURE__ */ $(Fo, {}),
				"data-copy-value": e.label,
				"aria-label": `Copy "${e.label}"`,
				title: "Copy to clipboard"
			}),
			js(e.label) ? /* @__PURE__ */ $("a", {
				href: e.label,
				target: "_blank",
				rel: "noopener noreferrer",
				class: "btn-ghost-sm",
				"aria-label": `Open "${e.label}" in new tab`,
				title: "Open in new tab",
				children: /* @__PURE__ */ $("span", {
					class: "btn-icon",
					children: /* @__PURE__ */ $(Io, {})
				})
			}) : null,
			/* @__PURE__ */ $("span", {
				class: "min-w-0 flex-1 truncate",
				children: e.label
			}),
			As(e.label) ? /* @__PURE__ */ $("span", {
				class: "badge-amber",
				children: "Development"
			}) : null
		]
	});
}
function Ns({ title: e, rows: t }) {
	return /* @__PURE__ */ $(hs, {
		title: e,
		rows: t,
		renderLabel: (e) => /* @__PURE__ */ $(Ms, { row: e })
	});
}
//#endregion
//#region src/report/format-groq.ts
function Ps(e) {
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
var Fs = /* @__PURE__ */ c((/* @__PURE__ */ o(((e, t) => {
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
						var C = x.value;
						if (t.length > e.length) return;
						if (!(C instanceof a)) {
							var te = 1, w;
							if (v) {
								if (w = o(ee, S, e, _), !w || w.index >= e.length) break;
								var ne = w.index, re = w.index + w[0].length, ie = S;
								for (ie += x.value.length; ne >= ie;) x = x.next, ie += x.value.length;
								if (ie -= x.value.length, S = ie, x.value instanceof a) continue;
								for (var ae = x; ae !== t.tail && (ie < re || typeof ae.value == "string"); ae = ae.next) te++, ie += ae.value.length;
								te--, C = e.slice(S, ie), w.index -= S;
							} else if (w = o(ee, 0, C, _), !w) continue;
							var ne = w.index, T = w[0], E = C.slice(0, ne), D = C.slice(ne + T.length), oe = S + C.length;
							d && oe > d.reach && (d.reach = oe);
							var O = x.prev;
							E && (O = l(t, O, E), S += E.length), u(t, O, te);
							var k = new a(f, g ? i.tokenize(T, g) : T, y, T);
							if (x = l(t, O, k), D && l(t, x, D), te > 1) {
								var se = {
									cause: f + "," + m,
									reach: oe
								};
								s(e, t, n, x.prev, S, se), d && se.reach > d.reach && (d.reach = se.reach);
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
})))(), 1), Is = {
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
typeof Prism < "u" && typeof Prism.languages == "object" && Prism.languages !== null && !Array.isArray(Prism.languages) && (Prism.languages.groq = Is), Object.assign((e) => {
	e.languages.groq = Is;
}, {
	displayName: "groq",
	aliases: []
});
//#endregion
//#region src/report/highlight-groq.ts
function Ls(e) {
	return Fs.default.highlight(e, Fs.default.languages.groq, "groq");
}
//#endregion
//#region src/report/components/GroqQueryStats.tsx
var Rs = [
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
	return t.length === 0 && n.length === 0 ? /* @__PURE__ */ $("p", {
		class: "empty body-2",
		children: "No structural features detected."
	}) : /* @__PURE__ */ $("dl", {
		class: "m-0 grid gap-6",
		children: [t.map((t) => /* @__PURE__ */ $("div", {
			class: "flex items-baseline justify-between gap-12 border-t border-border-subtle pt-6 first:border-t-0 first:pt-0",
			children: [/* @__PURE__ */ $("dt", {
				class: "body-2 m-0 text-text",
				children: zs(t)
			}), /* @__PURE__ */ $("dd", {
				class: "num m-0",
				children: e[t]
			})]
		}, t)), n.length > 0 ? /* @__PURE__ */ $("div", {
			class: "mt-4 grid gap-4 border-t border-border-subtle pt-8",
			children: [/* @__PURE__ */ $("div", {
				class: "font-semibold text-text",
				style: { fontSize: "var(--text-size-xs)" },
				children: "functionCalls"
			}), n.map(([e, t]) => /* @__PURE__ */ $("div", {
				class: "flex items-baseline justify-between gap-12",
				children: [/* @__PURE__ */ $("dt", {
					class: "body-2 m-0 text-muted",
					children: e
				}), /* @__PURE__ */ $("dd", {
					class: "num m-0",
					children: t
				})]
			}, e))]
		}) : null]
	});
}
//#endregion
//#region src/report/components/GroqQueryFlyout.tsx
function Vs({ id: e, query: t, params: n = null, requests: r, responseBytes: i }) {
	let a = Ps(t), o = Ls(a), s = In(a, n ?? void 0), c = Ln(a, n ?? void 0), l = r > 0 ? i / r : 0, u = n && Object.keys(n).length > 0 ? JSON.stringify(n, null, 2) : null;
	return /* @__PURE__ */ $("dialog", {
		id: e,
		class: "dialog w-full max-w-[min(72rem,calc(100vw-3.2rem))] border border-border-faint bg-panel p-0 text-text shadow-[0_1.6rem_4.8rem_rgba(0,0,0,0.45)] rounded-md",
		"data-groq-flyout": !0,
		children: /* @__PURE__ */ $("div", {
			class: "px-16 pt-12 pb-16",
			children: [
				/* @__PURE__ */ $("div", {
					class: "mb-12 flex items-center gap-8",
					children: [
						/* @__PURE__ */ $("h4", {
							class: "heading-3 mb-0 flex-1 text-[1.4rem]",
							children: "GROQ query"
						}),
						/* @__PURE__ */ $(Po, {
							variant: "outline-pill",
							icon: /* @__PURE__ */ $(Fo, {}),
							iconPosition: "end",
							"data-copy-value": a,
							"data-copy-toast": "Copied query",
							"aria-label": "Copy query",
							children: "Copy query"
						}),
						/* @__PURE__ */ $(Po, {
							variant: "ghost-icon",
							icon: "×",
							"data-groq-flyout-close": !0,
							"aria-label": "Close"
						})
					]
				}),
				/* @__PURE__ */ $("div", { children: [/* @__PURE__ */ $("div", {
					class: "eyebrow-1 mb-8 text-muted",
					children: "Usage"
				}), /* @__PURE__ */ $("dl", {
					class: "m-0 grid grid-cols-3 gap-8",
					children: [
						/* @__PURE__ */ $("div", {
							class: "m-0 rounded-sm border border-border-subtle bg-black/20 px-12 py-10",
							children: [/* @__PURE__ */ $("dt", {
								class: "m-0 text-muted",
								style: { fontSize: "var(--text-size-xs)" },
								children: "Bandwidth"
							}), /* @__PURE__ */ $("dd", {
								class: "body-2 mt-4 mb-0 tabular-nums",
								children: j(i)
							})]
						}),
						/* @__PURE__ */ $("div", {
							class: "m-0 rounded-sm border border-border-subtle bg-black/20 px-12 py-10",
							children: [/* @__PURE__ */ $("dt", {
								class: "m-0 text-muted",
								style: { fontSize: "var(--text-size-xs)" },
								children: "Requests"
							}), /* @__PURE__ */ $("dd", {
								class: "body-2 mt-4 mb-0 tabular-nums",
								children: A(r)
							})]
						}),
						/* @__PURE__ */ $("div", {
							class: "m-0 rounded-sm border border-border-subtle bg-black/20 px-12 py-10",
							children: [/* @__PURE__ */ $("dt", {
								class: "m-0 text-muted",
								style: { fontSize: "var(--text-size-xs)" },
								children: "Avg / req"
							}), /* @__PURE__ */ $("dd", {
								class: "body-2 mt-4 mb-0 tabular-nums",
								children: j(l)
							})]
						})
					]
				})] }),
				c ? /* @__PURE__ */ $("p", {
					class: "body-2 mt-22 mb-14 rounded-sm border border-[var(--color-amber,#f59e0b)] px-10 py-8 leading-[1.5] text-[var(--color-amber)] bg-[var(--color-amber-light,rgba(245,158,11,0.12))]",
					children: [
						"This query ",
						jn,
						"."
					]
				}) : null,
				/* @__PURE__ */ $("div", {
					class: "mt-16 border-t border-border-subtle pt-16",
					children: [/* @__PURE__ */ $("div", {
						class: "eyebrow-1 mb-8 text-muted",
						children: "Query"
					}), /* @__PURE__ */ $("pre", {
						class: "body-2 m-0 max-h-240 overflow-auto rounded-sm border border-border-subtle bg-black/35 p-12 font-mono leading-[1.5] break-words whitespace-pre-wrap",
						children: /* @__PURE__ */ $("code", {
							class: "language-groq",
							dangerouslySetInnerHTML: { __html: o }
						})
					})]
				}),
				u ? /* @__PURE__ */ $("div", {
					class: "mt-16 border-t border-border-subtle pt-16",
					children: [/* @__PURE__ */ $("div", {
						class: "eyebrow-1 mb-8 text-muted",
						children: "Params"
					}), /* @__PURE__ */ $("pre", {
						class: "body-2 m-0 max-h-240 overflow-auto rounded-sm border border-border-subtle bg-black/35 p-12 font-mono leading-[1.5] break-words whitespace-pre-wrap",
						children: /* @__PURE__ */ $("code", { children: u })
					})]
				}) : null,
				/* @__PURE__ */ $("div", {
					class: "mt-16 border-t border-border-subtle pt-16",
					children: [/* @__PURE__ */ $("div", {
						class: "eyebrow-1 mb-8 text-muted",
						children: "Structure"
					}), s ? /* @__PURE__ */ $(Bs, { stats: s }) : /* @__PURE__ */ $("p", {
						class: "body-2 empty m-0",
						children: "Could not analyze query structure."
					})]
				}),
				/* @__PURE__ */ $("p", {
					class: "body-2 mt-22 text-muted",
					children: [
						"Want to learn more about making efficient queries? Check out Sanity's guide on",
						" ",
						/* @__PURE__ */ $("a", {
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
	wrap: "_wrap_rjk14_1",
	tooltip: "_tooltip_rjk14_11",
	placementTop: "_placementTop_rjk14_37",
	placementBottom: "_placementBottom_rjk14_42"
};
//#endregion
//#region src/report/components/Tooltip.tsx
function Us({ content: e, children: t, placement: n = "top", class: r }) {
	let i = n === "bottom" ? Hs.placementBottom : Hs.placementTop;
	return /* @__PURE__ */ $("span", {
		class: [
			Hs.wrap,
			i,
			r
		].filter(Boolean).join(" "),
		children: [t, /* @__PURE__ */ $("span", {
			class: Hs.tooltip,
			role: "tooltip",
			children: e
		})]
	});
}
//#endregion
//#region src/report/components/UrlDataTable.tsx
function Ws(e) {
	return e === null ? "—" : String(e);
}
function Gs({ rows: e, showFlyout: t = !1, variant: n = "default", idPrefix: r }) {
	if (e.length === 0) return /* @__PURE__ */ $("p", {
		class: "empty body-2 py-12",
		children: "No URLs in this category."
	});
	let i = n === "image", a = n === "file", o = i || a;
	return /* @__PURE__ */ $("div", {
		class: "data-table-wrap",
		children: /* @__PURE__ */ $("table", {
			class: "body-1 data-table",
			"data-sortable-table": !0,
			children: [/* @__PURE__ */ $("thead", { children: /* @__PURE__ */ $("tr", { children: [
				/* @__PURE__ */ $(ms, {
					label: "Label",
					sortKey: "label",
					sortType: "string"
				}),
				i ? /* @__PURE__ */ $(T, { children: [
					/* @__PURE__ */ $(ms, {
						label: "Width",
						sortKey: "width",
						sortType: "number",
						className: "num"
					}),
					/* @__PURE__ */ $(ms, {
						label: "Quality",
						sortKey: "quality",
						sortType: "number",
						className: "num"
					}),
					/* @__PURE__ */ $(ms, {
						label: "Format",
						sortKey: "format",
						sortType: "string"
					})
				] }) : null,
				/* @__PURE__ */ $(ms, {
					label: "Bandwidth",
					sortKey: "bandwidth",
					sortType: "number",
					className: "num"
				}),
				/* @__PURE__ */ $(ms, {
					label: "Requests",
					sortKey: "requests",
					sortType: "number",
					className: "num"
				}),
				/* @__PURE__ */ $(ms, {
					label: "Avg / req",
					sortKey: "avg",
					sortType: "number",
					className: "num"
				})
			] }) }), /* @__PURE__ */ $("tbody", { children: e.map((e, n) => {
				let s = t ? qn(e.label) : null, c = s === null ? null : Jn(e.label), l = s === null ? !1 : Ln(s, c ?? void 0), u = s ? `${r}-flyout-${n}` : void 0, d = i ? nr(e.label) : null;
				return /* @__PURE__ */ $("tr", {
					"data-row-index": n,
					"data-sort-label": ps(i ? d?.id ?? e.label : e.label),
					"data-sort-bandwidth": ps(e.responseBytes),
					"data-sort-requests": ps(e.requests),
					"data-sort-avg": ps(vt(e)),
					...i ? {
						"data-sort-width": ps(d?.width ?? null),
						"data-sort-quality": ps(d?.quality ?? null),
						"data-sort-format": ps(d?.format ?? null)
					} : {},
					children: [
						/* @__PURE__ */ $("td", {
							class: "max-w-520",
							title: i ? e.label : void 0,
							children: [/* @__PURE__ */ $("div", {
								class: "flex min-w-0 items-center gap-6",
								children: [
									/* @__PURE__ */ $(Po, {
										variant: "ghost-icon-sm",
										icon: /* @__PURE__ */ $(Fo, {}),
										"data-copy-value": e.label,
										"data-copy-toast": "Copied URL",
										"aria-label": `Copy "${e.label}"`,
										title: "Copy to clipboard"
									}),
									o ? /* @__PURE__ */ $("a", {
										href: rr(e.label),
										target: "_blank",
										rel: "noopener noreferrer",
										class: "btn-ghost-sm",
										"aria-label": `Open "${i ? d?.id ?? e.label : e.label}" in new tab`,
										title: "Open in new tab",
										children: /* @__PURE__ */ $("span", {
											class: "btn-icon",
											children: /* @__PURE__ */ $(Io, {})
										})
									}) : null,
									/* @__PURE__ */ $("span", {
										class: "min-w-0 flex-1 truncate",
										children: i ? d?.id : e.label
									}),
									a && Wn(e.label) ? /* @__PURE__ */ $(Us, {
										content: "Consider using HLS streaming services like Mux instead of serving large single MP4 files to reduce bandwidth and improve playback.",
										children: /* @__PURE__ */ $("span", {
											class: "inline-flex shrink-0 text-[var(--color-amber,#f59e0b)] [&>svg]:size-14",
											children: /* @__PURE__ */ $(Lo, {})
										})
									}) : null,
									l ? /* @__PURE__ */ $(Us, {
										content: `This query ${jn}.`,
										children: /* @__PURE__ */ $("span", {
											class: "inline-flex shrink-0 text-[var(--color-amber,#f59e0b)] [&>svg]:size-14",
											children: /* @__PURE__ */ $(Lo, {})
										})
									}) : null,
									u ? /* @__PURE__ */ $(Po, {
										variant: "outline-pill-accent",
										"data-groq-flyout-target": u,
										"aria-haspopup": "dialog",
										children: "View query"
									}) : null
								]
							}), u && s ? /* @__PURE__ */ $(Vs, {
								id: u,
								query: s,
								params: c,
								requests: e.requests,
								responseBytes: e.responseBytes
							}) : null]
						}),
						i && d ? /* @__PURE__ */ $(T, { children: [
							/* @__PURE__ */ $("td", {
								class: "num",
								children: /* @__PURE__ */ $("div", {
									class: "inline-flex items-center gap-6",
									children: [/* @__PURE__ */ $("span", { children: Ws(d.width) }), ir(d.width) ? /* @__PURE__ */ $(Us, {
										content: "Width exceeds 2000px",
										children: /* @__PURE__ */ $("span", {
											class: "badge-red",
											children: "Too large"
										})
									}) : null]
								})
							}),
							/* @__PURE__ */ $("td", {
								class: "num",
								children: /* @__PURE__ */ $("div", {
									class: "inline-flex items-center gap-6",
									children: [/* @__PURE__ */ $("span", { children: Ws(d.quality) }), ar(d.quality, d.isSvg) ? /* @__PURE__ */ $(Us, {
										content: "Quality exceeds 87",
										children: /* @__PURE__ */ $("span", {
											class: "inline-flex shrink-0 text-[var(--color-red,#ef4444)] [&>svg]:size-14",
											children: /* @__PURE__ */ $(Ro, {})
										})
									}) : null]
								})
							}),
							/* @__PURE__ */ $("td", { children: /* @__PURE__ */ $("div", {
								class: "inline-flex items-center gap-6",
								children: [/* @__PURE__ */ $("span", { children: Ws(d.format) }), or(d.format) ? /* @__PURE__ */ $(Us, {
									content: "Format should be \"auto\"",
									children: /* @__PURE__ */ $("span", {
										class: "inline-flex shrink-0 text-[var(--color-red,#ef4444)] [&>svg]:size-14",
										children: /* @__PURE__ */ $(Ro, {})
									})
								}) : null]
							}) })
						] }) : null,
						/* @__PURE__ */ $("td", {
							class: "num",
							children: j(e.responseBytes)
						}),
						/* @__PURE__ */ $("td", {
							class: "num",
							children: A(e.requests)
						}),
						/* @__PURE__ */ $("td", {
							class: "num",
							children: j(vt(e))
						})
					]
				}, `${e.label}-${n}`);
			}) })]
		})
	});
}
//#endregion
//#region src/report/components/UrlTabsSection.tsx
function Ks({ rows: e, idPrefix: t }) {
	let n = Zn(e), r = Qn(n), i = Xn(n);
	return /* @__PURE__ */ $("section", {
		class: "card scroll-mt-20",
		"data-section": "urls",
		"data-url-tabs": !0,
		"data-default-url-tab": r,
		children: [
			/* @__PURE__ */ $("h3", {
				class: "heading-3",
				children: "Top URLs"
			}),
			/* @__PURE__ */ $("div", {
				class: "mt-12 flex flex-wrap gap-6",
				role: "tablist",
				"aria-label": "URL categories",
				children: i.map((e) => /* @__PURE__ */ $(Po, {
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
			i.map((e) => /* @__PURE__ */ $("div", {
				id: `${t}-panel-${e.id}`,
				class: "mt-12",
				role: "tabpanel",
				"data-url-panel": e.id,
				hidden: e.id !== r || void 0,
				children: /* @__PURE__ */ $(Gs, {
					rows: n[e.id],
					showFlyout: e.id === "query",
					variant: e.id === "image" ? "image" : e.id === "file" ? "file" : "default",
					idPrefix: `${t}-${e.id}`
				})
			}, e.id))
		]
	});
}
//#endregion
//#region src/report/components/UserAgentDataTable.tsx
function qs(e) {
	return /^@sanity/i.test(e.trim());
}
function Js() {
	return /* @__PURE__ */ $("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ $("rect", {
				x: "2",
				y: "3",
				width: "20",
				height: "14",
				rx: "2"
			}),
			/* @__PURE__ */ $("path", { d: "M8 21h8" }),
			/* @__PURE__ */ $("path", { d: "M12 17v4" })
		]
	});
}
function Ys() {
	return /* @__PURE__ */ $("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"aria-hidden": "true",
		children: /* @__PURE__ */ $("rect", {
			x: "7",
			y: "2",
			width: "10",
			height: "20",
			rx: "2"
		})
	});
}
function Xs({ raw: e }) {
	let t = xa(e);
	return /* @__PURE__ */ $("div", {
		class: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ $("div", {
			class: "flex min-w-0 items-center gap-6",
			children: [
				t.deviceKind ? /* @__PURE__ */ $("span", {
					class: "inline-flex size-16 shrink-0 items-center justify-center text-muted [&>svg]:size-14",
					title: t.deviceKind === "mobile" ? "Mobile" : "Desktop",
					"aria-label": t.deviceKind === "mobile" ? "Mobile" : "Desktop",
					children: t.deviceKind === "mobile" ? /* @__PURE__ */ $(Ys, {}) : /* @__PURE__ */ $(Js, {})
				}) : null,
				/* @__PURE__ */ $("span", {
					class: "min-w-0 truncate",
					children: t.deviceKind ? t.displayLabel : t.raw || t.displayLabel
				}),
				qs(e) ? /* @__PURE__ */ $("span", {
					class: "badge-blue",
					children: "Sanity client"
				}) : null
			]
		}), t.deviceKind ? /* @__PURE__ */ $("div", {
			class: "truncate pl-22 leading-[1.35] text-muted",
			style: { fontSize: "var(--text-size-xs)" },
			title: t.raw,
			children: t.raw
		}) : null]
	});
}
function Zs({ rows: e }) {
	let t = Sa(e);
	return t.trackableRequests === 0 ? null : /* @__PURE__ */ $("div", {
		class: "mt-12 flex flex-wrap gap-8",
		children: [
			/* @__PURE__ */ $("span", {
				class: "pill items-baseline gap-4 py-4 pr-9 pl-4",
				children: [/* @__PURE__ */ $("strong", {
					class: "body-2 font-semibold text-text",
					children: "Mac"
				}), pt(t.macPct)]
			}),
			/* @__PURE__ */ $("span", {
				class: "pill items-baseline gap-4 py-4 pr-9 pl-4",
				children: [/* @__PURE__ */ $("strong", {
					class: "body-2 font-semibold text-text",
					children: "Windows"
				}), pt(t.windowsPct)]
			}),
			/* @__PURE__ */ $("span", {
				class: "pill items-baseline gap-4 py-4 pr-9 pl-4",
				children: [/* @__PURE__ */ $("strong", {
					class: "body-2 font-semibold text-text",
					children: "Mobile"
				}), pt(t.mobilePct)]
			}),
			/* @__PURE__ */ $("span", {
				class: "pill items-baseline gap-4 py-4 pr-9 pl-4",
				children: [/* @__PURE__ */ $("strong", {
					class: "body-2 font-semibold text-text",
					children: "Desktop"
				}), pt(t.desktopPct)]
			})
		]
	});
}
function Qs({ title: e, rows: t }) {
	return /* @__PURE__ */ $(hs, {
		title: e,
		rows: t,
		header: /* @__PURE__ */ $(Zs, { rows: t }),
		renderLabel: (e) => /* @__PURE__ */ $(Xs, { raw: e.label })
	});
}
//#endregion
//#region src/report/components/ViewSection.tsx
function $s({ view: e, sections: t, viewKey: n, hidden: r = !1 }) {
	let i = e.firstTimestamp && e.lastTimestamp ? `${_t(e.firstTimestamp)} → ${_t(e.lastTimestamp)}` : "No timestamps found", a = lo(e);
	return /* @__PURE__ */ $("div", {
		"data-report-view": n,
		hidden: r || void 0,
		children: [
			/* @__PURE__ */ $(Ts, { summary: a }),
			/* @__PURE__ */ $("section", {
				class: "scroll-mt-20",
				"data-section": "summary",
				children: /* @__PURE__ */ $("div", {
					class: "mb-24 flex flex-wrap gap-16 [&>*]:min-w-[130px]",
					children: [
						/* @__PURE__ */ $(Es, {
							label: "Requests",
							value: A(e.requests),
							note: i
						}),
						/* @__PURE__ */ $(Es, {
							label: "Bandwidth",
							value: j(e.responseBytes),
							note: "Response size total"
						}),
						/* @__PURE__ */ $(Es, {
							label: "Request bytes",
							value: j(e.requestBytes),
							note: "Inbound payload total"
						}),
						/* @__PURE__ */ $(Es, {
							label: "Studio",
							value: j(e.studio.responseBytes),
							note: `${A(e.studio.requests)} requests`
						}),
						/* @__PURE__ */ $(Es, {
							label: "Billable",
							value: j(e.nonStudio.responseBytes),
							note: `${A(e.nonStudio.requests)} requests`
						}),
						/* @__PURE__ */ $(vs, {
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
								primary: Xo("blue"),
								secondary: Xo("green")
							}
						})
					]
				})
			}),
			/* @__PURE__ */ $("div", {
				class: "mb-24 flex flex-col gap-16",
				children: [/* @__PURE__ */ $("div", {
					class: "flex flex-col gap-16",
					children: [
						/* @__PURE__ */ $("div", {
							class: "eyebrow-1 section-title",
							children: "Charts"
						}),
						/* @__PURE__ */ $("div", {
							class: "grid grid-cols-1 gap-16 lg:grid-cols-2",
							children: [t.domain ? /* @__PURE__ */ $("section", {
								class: "scroll-mt-20",
								"data-section": "domain",
								children: /* @__PURE__ */ $(ls, {
									title: "Top domains",
									rows: e.byDomain,
									accent: Xo("blue")
								})
							}) : null, t.endpoint ? /* @__PURE__ */ $("section", {
								class: "scroll-mt-20",
								"data-section": "endpoint",
								children: /* @__PURE__ */ $(ls, {
									title: "Top endpoints",
									rows: e.byEndpoint,
									accent: Xo("green")
								})
							}) : null]
						}),
						/* @__PURE__ */ $("div", {
							class: "grid grid-cols-1 gap-16 lg:grid-cols-2",
							children: [t.date ? /* @__PURE__ */ $("section", {
								class: "scroll-mt-20",
								"data-section": "date",
								children: /* @__PURE__ */ $(cs, {
									title: "Daily bandwidth",
									rows: e.byDate,
									accent: Xo("amber")
								})
							}) : null, t.hour ? /* @__PURE__ */ $("section", {
								class: "scroll-mt-20",
								"data-section": "hour",
								children: /* @__PURE__ */ $(cs, {
									title: "Hourly bandwidth",
									rows: e.byHour,
									accent: Xo("red")
								})
							}) : null]
						}),
						/* @__PURE__ */ $("div", {
							class: "grid grid-cols-1 gap-16 lg:grid-cols-2",
							children: [t.status ? /* @__PURE__ */ $("section", {
								class: "scroll-mt-20",
								"data-section": "status",
								children: /* @__PURE__ */ $(ds, {
									title: "Response codes",
									rows: e.byStatus,
									accent: Xo("purple")
								})
							}) : null, t.histogram ? /* @__PURE__ */ $("section", {
								class: "scroll-mt-20",
								"data-section": "histogram",
								children: /* @__PURE__ */ $(fs, {
									title: "Response size buckets",
									rows: e.responseSizeHistogram,
									accent: Xo("teal")
								})
							}) : null]
						})
					]
				}), /* @__PURE__ */ $("div", {
					class: "flex flex-col gap-16",
					children: [
						/* @__PURE__ */ $("div", {
							class: "eyebrow-1 section-title",
							children: "Top lists"
						}),
						t.urls ? /* @__PURE__ */ $("div", {
							class: "scroll-mt-20",
							children: /* @__PURE__ */ $(Ks, {
								rows: e.byUrl,
								idPrefix: `urls-${n}`
							})
						}) : null,
						t.referers ? /* @__PURE__ */ $("section", {
							class: "scroll-mt-20",
							"data-section": "referers",
							children: /* @__PURE__ */ $(Ns, {
								title: "Top referers",
								rows: e.byReferer
							})
						}) : null,
						t.userAgents ? /* @__PURE__ */ $("section", {
							class: "scroll-mt-20",
							"data-section": "userAgents",
							children: /* @__PURE__ */ $(Qs, {
								title: "Top user agents",
								rows: e.byUserAgent
							})
						}) : null,
						t.ips ? /* @__PURE__ */ $("section", {
							class: "scroll-mt-20",
							"data-section": "ips",
							children: /* @__PURE__ */ $(hs, {
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
//#endregion
//#region src/report/ReportApp.tsx
function ec({ data: e }) {
	let t = Zo(e.config.palette), n = e.config.sections.billableComparison, r = n ? e.billable.byUrl : e.all.byUrl;
	return /* @__PURE__ */ $("main", {
		class: "mx-auto max-w-1600 px-20 pb-56 pt-32",
		style: t,
		children: [/* @__PURE__ */ $(Mo, { data: e }), /* @__PURE__ */ $("div", {
			class: "grid grid-cols-1 items-start gap-24 lg:grid-cols-[22rem_minmax(0,1fr)]",
			children: [/* @__PURE__ */ $(Jo, {
				sections: e.config.sections,
				urlRows: r
			}), /* @__PURE__ */ $("div", {
				class: "min-w-0",
				children: [
					/* @__PURE__ */ $(Uo, { showToggle: n }),
					n ? /* @__PURE__ */ $(T, { children: [/* @__PURE__ */ $($s, {
						view: e.billable,
						sections: e.config.sections,
						viewKey: "billable"
					}), /* @__PURE__ */ $($s, {
						view: e.all,
						sections: e.config.sections,
						viewKey: "all",
						hidden: !0
					})] }) : /* @__PURE__ */ $($s, {
						view: e.all,
						sections: e.config.sections,
						viewKey: "all"
					}),
					/* @__PURE__ */ $("div", {
						class: "body-2 mt-24 text-muted",
						children: [
							"Raw report payload is embedded in",
							" ",
							/* @__PURE__ */ $("code", { children: "<script type=\"application/json\">" }),
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
var tc = "(function(){\ndocument.addEventListener(\"click\",function(e){\nvar btn=e.target.closest(\"[data-copy-value]\");\nif(!btn)return;\ne.preventDefault();\nvar value=btn.getAttribute(\"data-copy-value\");\nif(!value)return;\nvar message=btn.getAttribute(\"data-copy-toast\")||\"Copied\";\nnavigator.clipboard.writeText(value).then(function(){\nwindow.__showReportToast(message);\n}).catch(function(){});\n});\n})();", nc = "(function(){\ndocument.addEventListener(\"click\",function(e){\nvar target=e.target.closest(\"[data-groq-flyout-target]\");\nif(target){\ne.preventDefault();\nvar id=target.getAttribute(\"data-groq-flyout-target\");\nif(!id)return;\nvar dialog=document.getElementById(id);\nif(dialog&&typeof dialog.showModal===\"function\")dialog.showModal();\nreturn;\n}\nif(e.target.closest(\"[data-groq-flyout-close]\")){\nvar closeDialog=e.target.closest(\"dialog[data-groq-flyout]\");\nif(closeDialog)closeDialog.close();\n}\n});\ndocument.addEventListener(\"click\",function(e){\nvar dialog=e.target;\nif(dialog&&dialog.tagName===\"DIALOG\"&&dialog.hasAttribute(\"data-groq-flyout\")&&e.target===dialog){\ndialog.close();\n}\n});\n})();", rc = "(function(){\nvar button=document.getElementById(\"download-markdown\");\nvar payloadEl=document.getElementById(\"report-markdown\");\nif(!button||!payloadEl)return;\n\nbutton.addEventListener(\"click\",function(){\nvar payload;\ntry{payload=JSON.parse(payloadEl.textContent||\"\");}catch(e){return;}\nif(!payload||!payload.filenameBase)return;\n\nvar checkbox=document.getElementById(\"show-studio-requests\");\nvar view=checkbox&&checkbox.checked?\"all\":\"billable\";\nif(!checkbox)view=\"all\";\n\nvar markdown=view===\"all\"?payload.all:payload.billable;\nif(!markdown)return;\n\nvar suffix=view===\"all\"?\"_all\":\"_billable-only\";\nvar filename=payload.filenameBase+suffix+\".md\";\nvar blob=new Blob([markdown],{type:\"text/markdown;charset=utf-8\"});\nvar url=URL.createObjectURL(blob);\nvar link=document.createElement(\"a\");\nlink.href=url;\nlink.download=filename;\nlink.click();\nURL.revokeObjectURL(url);\nwindow.__showReportToast(\"Downloaded\");\n});\n})();", ic = "(function(){\nfunction parseSortValue(raw,type){\nif(raw===\"\")return null;\nif(type===\"number\"){\nvar n=Number(raw);\nreturn Number.isFinite(n)?n:null;\n}\nreturn raw;\n}\nfunction compareValues(a,b,type,direction){\nvar mult=direction===\"asc\"?1:-1;\nif(a===null&&b===null)return 0;\nif(a===null)return 1;\nif(b===null)return -1;\nif(type===\"string\")return String(a).localeCompare(String(b))*mult;\nreturn(Number(a)-Number(b))*mult;\n}\nfunction setHeaderState(btn,direction){\nvar aria=direction===\"asc\"?\"ascending\":direction===\"desc\"?\"descending\":\"none\";\nbtn.setAttribute(\"data-sort-direction\",direction);\nbtn.setAttribute(\"aria-sort\",aria);\n}\nfunction sortTable(table,direction,key,type){\nvar tbody=table.querySelector(\"tbody\");\nif(!tbody)return;\nvar rows=Array.from(tbody.querySelectorAll(\"tr\"));\nif(direction===\"none\"){\nrows.sort(function(a,b){\nreturn Number(a.getAttribute(\"data-row-index\"))-Number(b.getAttribute(\"data-row-index\"));\n});\n}else{\nvar attr=\"data-sort-\"+key;\nrows.sort(function(a,b){\nvar av=parseSortValue(a.getAttribute(attr)||\"\",type);\nvar bv=parseSortValue(b.getAttribute(attr)||\"\",type);\nreturn compareValues(av,bv,type,direction);\n});\n}\nrows.forEach(function(row){tbody.appendChild(row);});\n}\ndocument.addEventListener(\"click\",function(e){\nvar btn=e.target.closest(\"[data-sort-key]\");\nif(!btn)return;\nvar table=btn.closest(\"[data-sortable-table]\");\nif(!table)return;\ne.preventDefault();\nvar key=btn.getAttribute(\"data-sort-key\");\nvar type=btn.getAttribute(\"data-sort-type\")||\"string\";\nif(!key)return;\nvar current=btn.getAttribute(\"data-sort-direction\")||\"none\";\nvar next=current===\"none\"?\"asc\":current===\"asc\"?\"desc\":\"none\";\ntable.querySelectorAll(\"[data-sort-key]\").forEach(function(other){\nif(other!==btn)setHeaderState(other,\"none\");\n});\nsetHeaderState(btn,next);\nsortTable(table,next,key,type);\n});\n})();", ac = "(function(){\nvar toast=null,hideTimer=null;\nvar supportsPopover=typeof HTMLElement.prototype.showPopover===\"function\";\nwindow.__showReportToast=function(message){\nif(!toast){\ntoast=document.createElement(\"div\");\ntoast.className=\"copy-toast\";\ntoast.setAttribute(\"role\",\"status\");\ntoast.setAttribute(\"aria-live\",\"polite\");\nif(supportsPopover)toast.setAttribute(\"popover\",\"manual\");\ndocument.body.appendChild(toast);\n}\ntoast.textContent=message||\"Done\";\nif(supportsPopover){\nif(toast.matches(\":popover-open\"))toast.hidePopover();\ntoast.showPopover();\n}\ntoast.classList.add(\"copy-toast--visible\");\nclearTimeout(hideTimer);\nhideTimer=setTimeout(function(){\ntoast.classList.remove(\"copy-toast--visible\");\nif(supportsPopover&&toast.matches(\":popover-open\"))toast.hidePopover();\n},1500);\n};\n})();", oc = "(function(){\nfunction parseHash(hash){\nvar raw=(hash||\"\").replace(/^#/,\"\");\nif(!raw)return{section:\"\",urlTab:null};\nif(raw.indexOf(\"urls/\")===0)return{section:\"urls\",urlTab:raw.slice(5),full:raw};\nif(raw===\"urls\")return{section:\"urls\",urlTab:null,full:\"urls\"};\nreturn{section:raw,urlTab:null,full:raw};\n}\n\nfunction scrollToSection(section,fullHash){\nvar target=document.querySelector('[data-report-view]:not([hidden]) [data-section=\"'+section+'\"]');\nif(!target)return;\ntarget.scrollIntoView({behavior:\"smooth\",block:\"start\"});\nif(history.replaceState){\nhistory.replaceState(null,\"\",window.location.pathname+window.location.search+\"#\"+fullHash);\n}else{\nwindow.location.hash=fullHash;\n}\n}\n\nfunction navigate(hash){\nvar parsed=parseHash(hash);\nif(!parsed.section)return;\nscrollToSection(parsed.section,parsed.full);\nif(parsed.section===\"urls\"&&typeof window.__activateUrlTab===\"function\"){\nwindow.__activateUrlTab(parsed.urlTab);\n}\n}\n\ndocument.addEventListener(\"click\",function(e){\nvar link=e.target.closest(\"[data-toc-link]\");\nif(!link)return;\nvar slug=(link.getAttribute(\"href\")||\"\").replace(/^#/,\"\");\nif(!slug)return;\ne.preventDefault();\nnavigate(\"#\"+slug);\n});\n\nvar initialHash=window.location.hash;\nif(initialHash){\nrequestAnimationFrame(function(){navigate(initialHash);});\n}\n})();", sc = "(function(){\nfunction visibleUrlTabsSection(){\nreturn document.querySelector('[data-report-view]:not([hidden]) [data-url-tabs]');\n}\n\nfunction activateUrlTab(tab){\nvar section=visibleUrlTabsSection();\nif(!section)return;\nvar resolved=tab||section.getAttribute(\"data-default-url-tab\")||\"image\";\nif(!section.querySelector('[data-url-tab=\"'+resolved+'\"]')){\nresolved=section.getAttribute(\"data-default-url-tab\")||\"image\";\n}\nvar tabs=section.querySelectorAll(\"[data-url-tab]\");\nvar panels=section.querySelectorAll(\"[data-url-panel]\");\ntabs.forEach(function(btn){\nvar isActive=btn.getAttribute(\"data-url-tab\")===resolved;\nbtn.setAttribute(\"aria-selected\",isActive?\"true\":\"false\");\n});\npanels.forEach(function(panel){\npanel.hidden=panel.getAttribute(\"data-url-panel\")!==resolved;\n});\nsection.setAttribute(\"data-active-url-tab\",resolved);\n}\n\nwindow.__activateUrlTab=activateUrlTab;\n\ndocument.addEventListener(\"click\",function(e){\nvar tabButton=e.target.closest(\"[data-url-tab]\");\nif(!tabButton)return;\nvar section=tabButton.closest(\"[data-url-tabs]\");\nif(!section)return;\nvar tab=tabButton.getAttribute(\"data-url-tab\");\nif(!tab)return;\ne.preventDefault();\nactivateUrlTab(tab);\nvar suffix=tab===\"image\"?\"\":(\"/\"+tab);\nif(history.replaceState){\nhistory.replaceState(null,\"\",window.location.pathname+window.location.search+\"#urls\"+suffix);\n}\n});\n})();", cc = "(function(){\nvar STORAGE_KEY=\"sanity-log-report-show-studio\";\nvar checkbox=document.getElementById(\"show-studio-requests\");\nvar billableView=document.querySelector('[data-report-view=\"billable\"]');\nvar allView=document.querySelector('[data-report-view=\"all\"]');\nif(!checkbox||!billableView||!allView)return;\n\nfunction setView(showAll){\nbillableView.hidden=showAll;\nallView.hidden=!showAll;\ntry{sessionStorage.setItem(STORAGE_KEY,showAll?\"1\":\"0\");}catch(e){}\n}\n\nvar saved=null;\ntry{saved=sessionStorage.getItem(STORAGE_KEY);}catch(e){}\nif(saved===\"1\"){\ncheckbox.checked=true;\nsetView(true);\n}\n\ncheckbox.addEventListener(\"change\",function(){\nsetView(checkbox.checked);\n});\n})();", lc = [
	"/*! tailwindcss v4.3.2 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;--color-black:#000;--color-white:#fff;--spacing:.1rem;--font-weight-medium:500;--font-weight-semibold:600;--tracking-tight:-.025em;--tracking-wide:.025em;--radius-sm:.7rem;--radius-md:1.2rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-panel:#18181be6;--color-text:#f4f4f5;--color-muted:#a1a1aa;--color-border-subtle:#ffffff14;--color-border-faint:#ffffff1f;--color-track:#ffffff14;--radius-pill:99.9rem}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.top-20{top:calc(var(--spacing) * 20)}.right-0{right:0}.left-0{left:0}.z-1{z-index:1}.section-title{color:var(--color-muted);margin:.8rem 0 -.4rem;padding-left:.4rem}.empty{color:var(--color-muted);margin:0}.m-0{margin:0}.mx-auto{margin-inline:auto}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-10{margin-top:calc(var(--spacing) * 10)}.mt-12{margin-top:calc(var(--spacing) * 12)}.mt-16{margin-top:calc(var(--spacing) * 16)}.mt-22{margin-top:calc(var(--spacing) * 22)}.mt-24{margin-top:calc(var(--spacing) * 24)}.mt-auto{margin-top:auto}.mr-8{margin-right:calc(var(--spacing) * 8)}.heading-3{margin-bottom:2.75rem;font-size:1.6rem;font-weight:600}.mb-0{margin-bottom:0}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-8{margin-bottom:calc(var(--spacing) * 8)}.mb-12{margin-bottom:calc(var(--spacing) * 12)}.mb-14{margin-bottom:calc(var(--spacing) * 14)}.mb-24{margin-bottom:calc(var(--spacing) * 24)}.mb-32{margin-bottom:calc(var(--spacing) * 32)}.box-border{box-sizing:border-box}.btn-ghost{border-radius:var(--radius-sm);width:2.8rem;height:2.8rem;color:var(--color-muted);cursor:pointer;background:0 0;border:none;justify-content:center;align-items:center;padding:0;font-family:inherit;font-size:2rem;line-height:1;display:inline-flex}.btn-ghost-sm{border-radius:var(--radius-sm);width:2.4rem;height:2.4rem;color:var(--color-muted);cursor:pointer;background:0 0;border:none;justify-content:center;align-items:center;padding:0;font-family:inherit;display:inline-flex}.pill{border:.1rem solid var(--color-border-faint);border-radius:var(--radius-pill);color:var(--color-muted);font-size:var(--text-size-xs);background:#ffffff0a;flex-shrink:0;align-items:center;gap:.4rem;padding:.4rem .8rem;font-weight:600;display:inline-flex}.btn-pill{border:.1rem solid var(--color-border-faint);border-radius:var(--radius-pill);color:var(--color-muted);font-family:inherit;font-size:var(--text-size-xs);cursor:pointer;background:#ffffff0a;align-items:center;gap:.4rem;padding:.4rem .8rem;font-weight:600;display:inline-flex}.btn{border:.1rem solid var(--color-border-subtle);border-radius:var(--radius-md);background:var(--color-panel);color:var(--color-text);font-family:inherit;font-size:var(--text-size-sm);white-space:nowrap;cursor:pointer;align-items:center;gap:.8rem;padding:1.2rem 1.6rem;transition:border-color .15s,background .15s;display:inline-flex}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-11{width:calc(var(--spacing) * 11);height:calc(var(--spacing) * 11)}.size-16{width:calc(var(--spacing) * 16);height:calc(var(--spacing) * 16)}.h-0{height:0}.h-10{height:calc(var(--spacing) * 10)}.h-24{height:calc(var(--spacing) * 24)}.h-268{height:calc(var(--spacing) * 268)}.h-300{height:calc(var(--spacing) * 300)}.h-full{height:100%}.max-h-240{max-height:calc(var(--spacing) * 240)}.max-h-300{max-height:calc(var(--spacing) * 300)}.card-metric{min-height:12rem}.min-h-0{min-height:0}.min-h-2{min-height:calc(var(--spacing) * 2)}.min-h-full{min-height:100%}.w-56{width:calc(var(--spacing) * 56)}.w-full{width:100%}.max-w-520{max-width:calc(var(--spacing) * 520)}.max-w-1600{max-width:calc(var(--spacing) * 1600)}.max-w-\\[72ch\\]{max-width:72ch}.max-w-\\[min\\(72rem\\,calc\\(100vw-3\\.2rem\\)\\)\\]{max-width:min(72rem,100vw - 3.2rem)}.max-w-full{max-width:100%}.min-w-0{min-width:0}.min-w-16{min-width:calc(var(--spacing) * 16)}.flex-1{flex:1}.btn-accent{border:.1rem solid var(--color-border-faint);border-radius:var(--radius-pill);color:var(--color-blue);font-family:inherit;font-size:var(--text-size-xs);cursor:pointer;background:#0ea5e91f;flex-shrink:0;padding:.3rem .8rem;font-weight:600}.badge-red{border:.1rem solid var(--color-border-faint);border-radius:var(--radius-pill);color:var(--color-red,#ef4444);font-size:var(--text-size-xs);white-space:nowrap;background:#ef44441f;flex-shrink:0;padding:.2rem .6rem;font-weight:600}.badge-amber{border:.1rem solid var(--color-border-faint);border-radius:var(--radius-pill);color:var(--color-amber,#f59e0b);font-size:var(--text-size-xs);background:#f59e0b1f;flex-shrink:0;padding:.3rem .8rem;font-weight:600}.badge-blue{border:.1rem solid var(--color-border-faint);border-radius:var(--radius-pill);color:var(--color-blue,#3b82f6);font-size:var(--text-size-xs);background:#3b82f61f;flex-shrink:0;padding:.3rem .8rem;font-weight:600}.shrink-0{flex-shrink:0}.border-collapse{border-collapse:collapse}.btn-tab{border:.1rem solid var(--color-border-subtle);border-radius:var(--radius-pill);color:var(--color-muted);font-family:inherit;font-size:var(--text-size-sm);cursor:pointer;background:0 0;padding:.6rem 1.2rem;font-weight:600}.cursor-pointer{cursor:pointer}.scroll-mt-20{scroll-margin-top:calc(var(--spacing) * 20)}.list-none{list-style-type:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.content-between{align-content:space-between}.content-start{align-content:flex-start}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-items-center{justify-items:center}.justify-items-start{justify-items:start}.gap-0{gap:0}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-8{gap:calc(var(--spacing) * 8)}.gap-10{gap:calc(var(--spacing) * 10)}.gap-12{gap:calc(var(--spacing) * 12)}.gap-16{gap:calc(var(--spacing) * 16)}.gap-24{gap:calc(var(--spacing) * 24)}.gap-x-24{column-gap:calc(var(--spacing) * 24)}.gap-y-48{row-gap:calc(var(--spacing) * 48)}.self-start{align-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.card{border:.1rem solid var(--color-border-subtle);border-radius:var(--radius-md);background:var(--color-panel);-webkit-backdrop-filter:blur(.8rem);backdrop-filter:blur(.8rem);padding:1.6rem}.panel{border:.1rem solid var(--color-border-subtle);border-radius:var(--radius-md);background:var(--color-panel)}.rounded-\\[inherit\\]{border-radius:inherit}.rounded-full{border-radius:3.40282e38px}.rounded-md{border-radius:var(--radius-md)}.rounded-pill{border-radius:var(--radius-pill)}.rounded-sm{border-radius:var(--radius-sm)}.rounded-t-sm{border-top-left-radius:var(--radius-sm);border-top-right-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.tone-green{color:var(--color-green);border-color:var(--color-green)}@supports (color:color-mix(in lab, red, red)){.tone-green{border-color:color-mix(in srgb, var(--color-green) 35%, transparent)}}.tone-red{color:var(--color-red);border-color:var(--color-red)}@supports (color:color-mix(in lab, red, red)){.tone-red{border-color:color-mix(in srgb, var(--color-red) 45%, transparent)}}.tone-yellow{color:var(--color-amber);border-color:var(--color-amber)}@supports (color:color-mix(in lab, red, red)){.tone-yellow{border-color:color-mix(in srgb, var(--color-amber) 40%, transparent)}}.border-\\[var\\(--color-amber\\,\\#f59e0b\\)\\]{border-color:var(--color-amber,#f59e0b)}.border-border-faint{border-color:var(--color-border-faint)}.border-border-subtle{border-color:var(--color-border-subtle)}.border-white\\/6{border-color:#ffffff0f}@supports (color:color-mix(in lab, red, red)){.border-white\\/6{border-color:color-mix(in oklab, var(--color-white) 6%, transparent)}}.bg-\\[var\\(--color-amber-light\\,rgba\\(245\\,158\\,11\\,0\\.12\\)\\)\\]{background-color:var(--color-amber-light,#f59e0b1f)}.bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab, red, red)){.bg-black\\/20{background-color:color-mix(in oklab, var(--color-black) 20%, transparent)}}.bg-black\\/35{background-color:#00000059}@supports (color:color-mix(in lab, red, red)){.bg-black\\/35{background-color:color-mix(in oklab, var(--color-black) 35%, transparent)}}.bg-panel{background-color:var(--color-panel)}.bg-track{background-color:var(--color-track)}.p-0{padding:0}.p-12{padding:calc(var(--spacing) * 12)}.p-22{padding:calc(var(--spacing) * 22)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-10{padding-inline:calc(var(--spacing) * 10)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-16{padding-inline:calc(var(--spacing) * 16)}.px-20{padding-inline:calc(var(--spacing) * 20)}.py-0{padding-block:0}.py-4{padding-block:calc(var(--spacing) * 4)}.py-6{padding-block:calc(var(--spacing) * 6)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-10{padding-block:calc(var(--spacing) * 10)}.py-12{padding-block:calc(var(--spacing) * 12)}.pt-6{padding-top:calc(var(--spacing) * 6)}.pt-8{padding-top:calc(var(--spacing) * 8)}.pt-10{padding-top:calc(var(--spacing) * 10)}.pt-12{padding-top:calc(var(--spacing) * 12)}.pt-16{padding-top:calc(var(--spacing) * 16)}.pt-32{padding-top:calc(var(--spacing) * 32)}.pr-0{padding-right:0}.pr-9{padding-right:calc(var(--spacing) * 9)}.pb-16{padding-bottom:calc(var(--spacing) * 16)}.pb-32{padding-bottom:calc(var(--spacing) * 32)}.pb-56{padding-bottom:calc(var(--spacing) * 56)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-12{padding-left:calc(var(--spacing) * 12)}.pl-22{padding-left:calc(var(--spacing) * 22)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-\\[-0\\.1rem\\]{vertical-align:-.1rem}.font-mono{font-family:var(--font-mono)}.heading-1{letter-spacing:var(--tracking-tight);font-size:clamp(3.2rem,4vw,5.2rem);font-weight:800;line-height:.95}.eyebrow-1{font-size:var(--text-size-xs);letter-spacing:var(--tracking-wide);text-transform:uppercase;font-weight:700}.display-1{font-size:clamp(2.32rem,2vw,3.52rem);font-weight:800}.heading-4{font-size:2.08rem;font-weight:700}.body-1{font-size:var(--text-size-md)}.body-2{font-size:var(--text-size-sm)}.text-\\[1\\.4rem\\]{font-size:1.4rem}.leading-\\[1\\.2\\]{--tw-leading:1.2;line-height:1.2}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-none{--tw-leading:1;line-height:1}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.break-words{overflow-wrap:break-word}.whitespace-pre-wrap{white-space:pre-wrap}.num{color:var(--color-muted);font-variant-numeric:tabular-nums}.text-\\[var\\(--color-amber\\)\\]{color:var(--color-amber)}.text-\\[var\\(--color-amber\\,\\#f59e0b\\)\\]{color:var(--color-amber,#f59e0b)}.text-\\[var\\(--color-red\\,\\#ef4444\\)\\]{color:var(--color-red,#ef4444)}.text-muted{color:var(--color-muted)}.text-text{color:var(--color-text)}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.no-underline{text-decoration-line:none}.accent-\\[var\\(--color-blue\\,\\#0ea5e9\\)\\]{accent-color:var(--color-blue,#0ea5e9)}.shadow-\\[0_1\\.6rem_4\\.8rem_rgba\\(0\\,0\\,0\\,0\\.45\\)\\]{--tw-shadow:0 1.6rem 4.8rem var(--tw-shadow-color,#00000073);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.select-none{-webkit-user-select:none;user-select:none}.first\\:border-t-0:first-child{border-top-style:var(--tw-border-style);border-top-width:0}.first\\:pt-0:first-child{padding-top:0}@media (hover:hover){.hover\\:bg-white\\/6:hover{background-color:#ffffff0f}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-white\\/6:hover{background-color:color-mix(in oklab, var(--color-white) 6%, transparent)}}.hover\\:text-text:hover{color:var(--color-text)}}@media (width>=768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (width>=1024px){.lg\\:sticky{position:sticky}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:grid-cols-\\[22rem_minmax\\(0\\,1fr\\)\\]{grid-template-columns:22rem minmax(0,1fr)}.lg\\:items-end{align-items:flex-end}.lg\\:justify-items-end{justify-items:end}.lg\\:text-right{text-align:right}}.\\[\\&\\>\\*\\]\\:min-w-\\[130px\\]>*{min-width:130px}.\\[\\&\\>\\:first-child\\]\\:min-w-0>:first-child{min-width:0}.\\[\\&\\>\\:first-child\\]\\:flex-1>:first-child{flex:1}.\\[\\&\\>\\:first-child\\]\\:basis-240>:first-child{flex-basis:calc(var(--spacing) * 240)}.\\[\\&\\>svg\\]\\:size-14>svg{width:calc(var(--spacing) * 14);height:calc(var(--spacing) * 14)}}.language-groq .token.comment{color:#71717a}.language-groq .token.string{color:#86efac}.language-groq .token.number,.language-groq .token.boolean,.language-groq .token.null{color:#fcd34d}.language-groq .token.keyword-operator{color:#c4b5fd}.language-groq .token.function{color:#7dd3fc}.language-groq .token.namespace{color:#fdba74}.language-groq .token.variable,.language-groq .token.special-variable{color:#f9a8d4}.language-groq .token.wildcard{color:#f472b6}.language-groq .token.operator{color:#a1a1aa}.language-groq .token.spread,.language-groq .token.punctuation{color:#d4d4d8}:root{--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--text-size-xs:1.152rem;--text-size-sm:1.44rem;--text-size-md:1.52rem;--tracking-tight:.02em;--tracking-wide:.0275em;--accent:#0ea5e9}html{font-size:62.5%}*{box-sizing:border-box}body{min-height:100vh;font-family:var(--font-sans);font-size:var(--text-size-md);color:var(--color-text);background:#101011;margin:0}h3{margin:0}code,pre{font-family:var(--font-mono)}.btn:hover{border-color:var(--color-border-faint);background:#ffffff0a}.btn-ghost:hover,.btn-ghost-sm:hover{color:var(--color-text);background:#ffffff0f}.btn-pill:hover{color:var(--color-text);background:#ffffff14}.btn-tab:hover{color:var(--color-text);background:#ffffff0f}.btn-tab[aria-selected=true]{border-color:var(--color-blue)}@supports (color:color-mix(in lab, red, red)){.btn-tab[aria-selected=true]{border-color:color-mix(in srgb, var(--color-blue) 45%, transparent)}}.btn-tab[aria-selected=true]{color:var(--color-blue);background:#0ea5e91f}.btn-accent:hover{background:#0ea5e933}.dialog::backdrop{-webkit-backdrop-filter:blur(.2rem);backdrop-filter:blur(.2rem);background:#0000008c}.copy-toast{z-index:9999;border-radius:var(--radius-pill);border:.1rem solid var(--color-border-faint);color:var(--color-text);font-size:var(--text-size-sm);opacity:0;pointer-events:none;background:#18181b;margin:0;padding:.8rem 1.6rem;font-weight:500;transition:opacity .2s,transform .2s;position:fixed;bottom:2.4rem;left:50%;transform:translate(-50%)translateY(1rem);box-shadow:0 .4rem 1.6rem #00000059}.copy-toast--visible{opacity:1;transform:translate(-50%)translateY(0)}.btn .btn-icon{flex-shrink:0;justify-content:center;align-items:center;line-height:1;display:inline-flex}.btn .btn-icon svg{width:1.6rem;height:1.6rem}.btn-ghost .btn-icon svg,.btn-ghost-sm .btn-icon svg,.btn-pill .btn-icon svg{width:1.4rem;height:1.4rem}.btn-label{line-height:1}.data-table-wrap{border-radius:var(--radius-sm);border:.1rem solid var(--color-border-subtle);max-height:42rem;margin-top:1.2rem;overflow:auto}.data-table{border-collapse:collapse;width:100%}.data-table th,.data-table td{text-align:left;vertical-align:top;border-bottom:.1rem solid #ffffff12;padding:1rem 1.2rem}.data-table th{z-index:2;color:var(--color-muted);-webkit-backdrop-filter:blur(1.2rem);backdrop-filter:blur(1.2rem);background:#0c0c10f5;font-weight:600;position:sticky;top:0}.sort-header{color:inherit;font:inherit;font-weight:inherit;cursor:pointer;text-align:inherit;border-radius:var(--radius-sm);background:0 0;border:none;align-items:center;gap:.4rem;margin:0;padding:0;display:inline-flex}.sort-header:hover{color:var(--color-text)}.sort-header:focus-visible{outline:.2rem solid var(--accent);outline-offset:.2rem}.num .sort-header{justify-content:flex-start;width:100%}.sort-icon{opacity:.45;flex-shrink:0;display:inline-flex}.sort-icon svg{width:1.4rem;height:1.4rem}.sort-header[data-sort-direction=asc],.sort-header[data-sort-direction=desc]{color:var(--color-text)}.sort-header[data-sort-direction=asc] .sort-icon,.sort-header[data-sort-direction=desc] .sort-icon{opacity:1}.sort-header[data-sort-direction=asc] .sort-icon svg path:first-child,.sort-header[data-sort-direction=desc] .sort-icon svg path:last-child{stroke:var(--color-text)}.sort-header[data-sort-direction=asc] .sort-icon svg path:last-child,.sort-header[data-sort-direction=desc] .sort-icon svg path:first-child{opacity:.35}.priority-dot{background:currentColor;border-radius:50%;flex-shrink:0;width:.8rem;height:.8rem;box-shadow:0 0 1rem}.status-dot{background:currentColor;border-radius:50%;flex-shrink:0;width:1.2rem;height:1.2rem;box-shadow:0 0 1.6rem}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}",
	"._barColumn_s5la3_1:hover ._bar_s5la3_1,._barColumn_s5la3_1:focus-within ._bar_s5la3_1{opacity:.85}._barColumn_s5la3_1:after{content:attr(data-tip);z-index:2;border-radius:var(--radius-sm);border:.1rem solid var(--color-border-faint);color:var(--color-text);font-size:var(--text-size-xs);font-variant-numeric:tabular-nums;white-space:nowrap;opacity:0;pointer-events:none;background:#18181b;padding:.4rem .8rem;line-height:1.4;transition:opacity .15s,transform .15s;position:absolute;bottom:calc(100% - 2.6rem);left:50%;transform:translate(-50%)translateY(.4rem);box-shadow:0 .4rem 1.2rem #00000059}._barColumn_s5la3_1:hover:after,._barColumn_s5la3_1:focus-within:after{opacity:1;transform:translate(-50%)translateY(0)}._bar_s5la3_1{transition:opacity .15s}",
	"._wrap_rjk14_1{vertical-align:middle;display:inline-flex;position:relative}._wrap_rjk14_1:hover{z-index:3}._tooltip_rjk14_11{z-index:20;border:.1rem solid var(--color-border-faint);border-radius:var(--radius-sm);width:max-content;max-width:24rem;color:var(--color-text);font-size:var(--text-size-xs);text-align:center;white-space:normal;pointer-events:none;opacity:0;visibility:hidden;background:#18181b;padding:.5rem .8rem;font-weight:500;line-height:1.4;transition:opacity .15s,transform .15s,visibility .15s;position:absolute;left:50%;box-shadow:0 .4rem 1.2rem #0006}._placementTop_rjk14_37 ._tooltip_rjk14_11{bottom:calc(100% + .5rem);transform:translate(-50%)translateY(.3rem)}._placementBottom_rjk14_42 ._tooltip_rjk14_11{top:calc(100% + .5rem);transform:translate(-50%)translateY(-.3rem)}._placementTop_rjk14_37 ._tooltip_rjk14_11:after{content:\"\";border:.4rem solid #0000;border-top-color:#18181b;position:absolute;top:100%;left:50%;transform:translate(-50%)}._placementBottom_rjk14_42 ._tooltip_rjk14_11:after{content:\"\";border:.4rem solid #0000;border-bottom-color:#18181b;position:absolute;bottom:100%;left:50%;transform:translate(-50%)}._wrap_rjk14_1:hover ._tooltip_rjk14_11{opacity:1;visibility:visible;transform:translate(-50%)translateY(0)}",
	"._donut_1drq4_1:after{content:\"\";border:.1rem solid var(--color-border-subtle);background:#0a0a0cf2;border-radius:50%;position:absolute;inset:2.4rem}"
].join("\n");
//#endregion
//#region src/report/report-renderer.tsx
function uc(e) {
	let t = ut(/* @__PURE__ */ $(ec, { data: e })), n = ft(e), r = ft({
		filenameBase: po(e.title),
		billable: Ao(e, "billable"),
		all: Ao(e, "all")
	});
	return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${e.title}</title>
  <style>${lc}</style>
</head>
<body>
${t}
  <script type="application/json" id="report-data">${n}<\/script>
  <script type="application/json" id="report-markdown">${r}<\/script>
  <script>${ac}<\/script>
  <script>${tc}<\/script>
  <script>${cc}<\/script>
  <script>${rc}<\/script>
  <script>${sc}<\/script>
  <script>${ic}<\/script>
  <script>${nc}<\/script>
  <script>${oc}<\/script>
</body>
</html>`;
}
//#endregion
export { uc as renderReportHtml };
