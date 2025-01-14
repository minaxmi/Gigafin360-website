﻿(function(j, f, c, i, d, l, g) { /*! Jssor */
    new(function() {});
    var e = j.$JssorEasing$ = { $EaseSwing: function(a) { return -c.cos(a * c.PI) / 2 + .5 }, $EaseLinear: function(a) { return a }, $EaseInQuad: function(a) { return a * a }, $EaseOutQuad: function(a) { return -a * (a - 2) }, $EaseInOutQuad: function(a) { return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1) }, $EaseInCubic: function(a) { return a * a * a }, $EaseOutCubic: function(a) { return (a -= 1) * a * a + 1 }, $EaseInOutCubic: function(a) { return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2) }, $EaseInQuart: function(a) { return a * a * a * a }, $EaseOutQuart: function(a) { return -((a -= 1) * a * a * a - 1) }, $EaseInOutQuart: function(a) { return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2) }, $EaseInQuint: function(a) { return a * a * a * a * a }, $EaseOutQuint: function(a) { return (a -= 1) * a * a * a * a + 1 }, $EaseInOutQuint: function(a) { return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2) }, $EaseInSine: function(a) { return 1 - c.cos(c.PI / 2 * a) }, $EaseOutSine: function(a) { return c.sin(c.PI / 2 * a) }, $EaseInOutSine: function(a) { return -1 / 2 * (c.cos(c.PI * a) - 1) }, $EaseInExpo: function(a) { return a == 0 ? 0 : c.pow(2, 10 * (a - 1)) }, $EaseOutExpo: function(a) { return a == 1 ? 1 : -c.pow(2, -10 * a) + 1 }, $EaseInOutExpo: function(a) { return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * c.pow(2, 10 * (a - 1)) : 1 / 2 * (-c.pow(2, -10 * --a) + 2) }, $EaseInCirc: function(a) { return -(c.sqrt(1 - a * a) - 1) }, $EaseOutCirc: function(a) { return c.sqrt(1 - (a -= 1) * a) }, $EaseInOutCirc: function(a) { return (a *= 2) < 1 ? -1 / 2 * (c.sqrt(1 - a * a) - 1) : 1 / 2 * (c.sqrt(1 - (a -= 2) * a) + 1) }, $EaseInElastic: function(a) { if (!a || a == 1) return a; var b = .3,
                    d = .075; return -(c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b)) }, $EaseOutElastic: function(a) { if (!a || a == 1) return a; var b = .3,
                    d = .075; return c.pow(2, -10 * a) * c.sin((a - d) * 2 * c.PI / b) + 1 }, $EaseInOutElastic: function(a) { if (!a || a == 1) return a; var b = .45,
                    d = .1125; return (a *= 2) < 1 ? -.5 * c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) : c.pow(2, -10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) * .5 + 1 }, $EaseInBack: function(a) { var b = 1.70158; return a * a * ((b + 1) * a - b) }, $EaseOutBack: function(a) { var b = 1.70158; return (a -= 1) * a * ((b + 1) * a + b) + 1 }, $EaseInOutBack: function(a) { var b = 1.70158; return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2) }, $EaseInBounce: function(a) { return 1 - e.$EaseOutBounce(1 - a) }, $EaseOutBounce: function(a) { return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375 }, $EaseInOutBounce: function(a) { return a < 1 / 2 ? e.$EaseInBounce(a * 2) * .5 : e.$EaseOutBounce(a * 2 - 1) * .5 + .5 }, $EaseGoBack: function(a) { return 1 - c.abs(2 - 1) }, $EaseInWave: function(a) { return 1 - c.cos(a * c.PI * 2) }, $EaseOutWave: function(a) { return c.sin(a * c.PI * 2) }, $EaseOutJump: function(a) { return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a) }, $EaseInJump: function(a) { return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a } },
        h = j.$Jease$ = { $Swing: e.$EaseSwing, $Linear: e.$EaseLinear, $InQuad: e.$EaseInQuad, $OutQuad: e.$EaseOutQuad, $InOutQuad: e.$EaseInOutQuad, $InCubic: e.$EaseInCubic, $OutCubic: e.$EaseOutCubic, $InOutCubic: e.$EaseInOutCubic, $InQuart: e.$EaseInQuart, $OutQuart: e.$EaseOutQuart, $InOutQuart: e.$EaseInOutQuart, $InQuint: e.$EaseInQuint, $OutQuint: e.$EaseOutQuint, $InOutQuint: e.$EaseInOutQuint, $InSine: e.$EaseInSine, $OutSine: e.$EaseOutSine, $InOutSine: e.$EaseInOutSine, $InExpo: e.$EaseInExpo, $OutExpo: e.$EaseOutExpo, $InOutExpo: e.$EaseInOutExpo, $InCirc: e.$EaseInCirc, $OutCirc: e.$EaseOutCirc, $InOutCirc: e.$EaseInOutCirc, $InElastic: e.$EaseInElastic, $OutElastic: e.$EaseOutElastic, $InOutElastic: e.$EaseInOutElastic, $InBack: e.$EaseInBack, $OutBack: e.$EaseOutBack, $InOutBack: e.$EaseInOutBack, $InBounce: e.$EaseInBounce, $OutBounce: e.$EaseOutBounce, $InOutBounce: e.$EaseInOutBounce, $GoBack: e.$EaseGoBack, $InWave: e.$EaseInWave, $OutWave: e.$EaseOutWave, $OutJump: e.$EaseOutJump, $InJump: e.$EaseInJump };
    var b = new function() { var h = this,
            Ab = /\S+/g,
            K = 1,
            ib = 2,
            mb = 3,
            lb = 4,
            qb = 5,
            L, s = 0,
            k = 0,
            t = 0,
            z = 0,
            A = 0,
            D = navigator,
            vb = D.appName,
            o = D.userAgent,
            q = parseFloat;

        function Ib() { if (!L) { L = { Rf: "ontouchstart" in j || "createTouch" in f }; var a; if (D.pointerEnabled || (a = D.msPointerEnabled)) L.Md = a ? "msTouchAction" : "touchAction" } return L }

        function v(h) { if (!s) { s = -1; if (vb == "Microsoft Internet Explorer" && !!j.attachEvent && !!j.ActiveXObject) { var e = o.indexOf("MSIE");
                    s = K;
                    t = q(o.substring(e + 5, o.indexOf(";", e))); /*@cc_on z=@_jscript_version@*/ ;
                    k = f.documentMode || t } else if (vb == "Netscape" && !!j.addEventListener) { var d = o.indexOf("Firefox"),
                        b = o.indexOf("Safari"),
                        g = o.indexOf("Chrome"),
                        c = o.indexOf("AppleWebKit"); if (d >= 0) { s = ib;
                        k = q(o.substring(d + 8)) } else if (b >= 0) { var i = o.substring(0, b).lastIndexOf("/");
                        s = g >= 0 ? lb : mb;
                        k = q(o.substring(i + 1, b)) } else { var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o); if (a) { s = K;
                            k = t = q(a[1]) } } if (c >= 0) A = q(o.substring(c + 12)) } else { var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o); if (a) { s = qb;
                        k = q(a[2]) } } } return h == s }

        function r() { return v(K) }

        function S() { return r() && (k < 6 || f.compatMode == "BackCompat") }

        function kb() { return v(mb) }

        function pb() { return v(qb) }

        function fb() { return kb() && A > 534 && A < 535 }

        function H() { v(); return A > 537 || k > 42 || s == K && k >= 11 }

        function Q() { return r() && k < 9 }

        function gb(a) { var b, c; return function(f) { if (!b) { b = d; var e = a.substr(0, 1).toUpperCase() + a.substr(1);
                    n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(h, d) { var b = a; if (d) b = h + e; if (f.style[b] != g) return c = b }) } return c } }

        function eb(b) { var a; return function(c) { a = a || gb(b)(c) || b; return a } } var M = eb("transform");

        function ub(a) { return {}.toString.call(a) } var rb = {};
        n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) { rb["[object " + a + "]"] = a.toLowerCase() });

        function n(b, d) { var a, c; if (ub(b) == "[object Array]") { for (a = 0; a < b.length; a++)
                    if (c = d(b[a], a, b)) return c } else
                for (a in b)
                    if (c = d(b[a], a, b)) return c }

        function F(a) { return a == i ? String(a) : rb[ub(a)] || "object" }

        function sb(a) { for (var b in a) return d }

        function B(a) { try { return F(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf")) } catch (b) {} }

        function p(a, b) { return { x: a, y: b } }

        function yb(b, a) { setTimeout(b, a || 0) }

        function C(b, d, c) { var a = !b || b == "inherit" ? "" : b;
            n(d, function(c) { var b = c.exec(a); if (b) { var d = a.substr(0, b.index),
                        e = a.substr(b.index + b[0].length + 1, a.length - 1);
                    a = d + e } });
            a = c + (!a.indexOf(" ") ? "" : " ") + a; return a }

        function T(b, a) { if (k < 9) b.style.filter = a } h.Nf = Ib;
        h.Hd = r;
        h.Mf = kb;
        h.Cd = pb;
        h.Of = H;
        h.Ob = Q;
        gb("transform");
        h.Pd = function() { return k };
        h.Pf = function() { v(); return A };
        h.$Delay = yb;

        function ab(a) { a.constructor === ab.caller && a.Bd && a.Bd.apply(a, ab.caller.arguments) } h.Bd = ab;
        h.rb = function(a) { if (h.eg(a)) a = f.getElementById(a); return a };

        function u(a) { return a || j.event } h.Kd = u;
        h.lc = function(b) { b = u(b); var a = b.target || b.srcElement || f; if (a.nodeType == 3) a = h.Wd(a); return a };
        h.Sd = function(a) { a = u(a); return { x: a.pageX || a.clientX || 0, y: a.pageY || a.clientY || 0 } };

        function G(c, d, a) { if (a !== g) c.style[d] = a == g ? "" : a;
            else { var b = c.currentStyle || c.style;
                a = b[d]; if (a == "" && j.getComputedStyle) { b = c.ownerDocument.defaultView.getComputedStyle(c, i);
                    b && (a = b.getPropertyValue(d) || b[d]) } return a } }

        function cb(b, c, a, d) { if (a !== g) { if (a == i) a = "";
                else d && (a += "px");
                G(b, c, a) } else return q(G(b, c)) }

        function m(c, a) { var d = a ? cb : G,
                b; if (a & 4) b = eb(c); return function(e, f) { return d(e, b ? b(e) : c, f, a & 2) } }

        function Db(b) { if (r() && t < 9) { var a = /opacity=([^)]*)/.exec(b.style.filter || ""); return a ? q(a[1]) / 100 : 1 } else return q(b.style.opacity || "1") }

        function Fb(b, a, f) { if (r() && t < 9) { var h = b.style.filter || "",
                    i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                    e = c.round(100 * a),
                    d = ""; if (e < 100 || f) d = "alpha(opacity=" + e + ") "; var g = C(h, [i], d);
                T(b, g) } else b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100 } var N = { $Rotate: ["rotate"], $RotateX: ["rotateX"], $RotateY: ["rotateY"], $SkewX: ["skewX"], $SkewY: ["skewY"] }; if (!H()) N = E(N, { $ScaleX: ["scaleX", 2], $ScaleY: ["scaleY", 2], $TranslateZ: ["translateZ", 1] });

        function O(d, a) { var c = ""; if (a) { if (r() && k && k < 10) { delete a.$RotateX;
                    delete a.$RotateY;
                    delete a.$TranslateZ } b.a(a, function(d, b) { var a = N[b]; if (a) { var e = a[1] || 0; if (P[b] != d) c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")" } }); if (H()) { if (a.$TranslateX || a.$TranslateY || a.$TranslateZ != g) c += " translate3d(" + (a.$TranslateX || 0) + "px," + (a.$TranslateY || 0) + "px," + (a.$TranslateZ || 0) + "px)"; if (a.$ScaleX == g) a.$ScaleX = 1; if (a.$ScaleY == g) a.$ScaleY = 1; if (a.$ScaleX != 1 || a.$ScaleY != 1) c += " scale3d(" + a.$ScaleX + ", " + a.$ScaleY + ", 1)" } } d.style[M(d)] = c } h.Nc = m("transformOrigin", 4);
        h.Yf = m("backfaceVisibility", 4);
        h.Xf = m("transformStyle", 4);
        h.Zf = m("perspective", 6);
        h.bg = m("perspectiveOrigin", 4);
        h.ag = function(a, b) { if (r() && t < 9 || t < 10 && S()) a.style.zoom = b == 1 ? "" : b;
            else { var c = M(a),
                    f = "scale(" + b + ")",
                    e = a.style[c],
                    g = new RegExp(/[\s]*scale\(.*?\)/g),
                    d = C(e, [g], f);
                a.style[c] = d } };
        h.cc = function(b, a) { return function(c) { c = u(c); var e = c.type,
                    d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !h.wf(a, d)) && b(c) } };
        h.c = function(a, c, d, b) { a = h.rb(a); if (a.addEventListener) { c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b) } else if (a.attachEvent) { a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture() } };
        h.U = function(a, c, d, b) { a = h.rb(a); if (a.removeEventListener) { c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b) } else if (a.detachEvent) { a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture() } };
        h.gc = function(a) { a = u(a);
            a.preventDefault && a.preventDefault();
            a.cancel = d;
            a.returnValue = l };
        h.vf = function(a) { a = u(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = d };
        h.H = function(d, c) { var a = [].slice.call(arguments, 2),
                b = function() { var b = a.concat([].slice.call(arguments, 0)); return c.apply(d, b) }; return b };
        h.qf = function(a, b) { if (b == g) return a.textContent || a.innerText; var c = f.createTextNode(b);
            h.wc(a);
            a.appendChild(c) };
        h.yb = function(d, c) { for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a); return b };

        function tb(a, c, e, b) { b = b || "u"; for (a = a ? a.firstChild : i; a; a = a.nextSibling)
                if (a.nodeType == 1) { if (X(a, b) == c) return a; if (!e) { var d = tb(a, c, e, b); if (d) return d } } } h.v = tb;

        function V(a, d, f, b) { b = b || "u"; var c = []; for (a = a ? a.firstChild : i; a; a = a.nextSibling)
                if (a.nodeType == 1) { X(a, b) == d && c.push(a); if (!f) { var e = V(a, d, f, b); if (e.length) c = c.concat(e) } }
            return c }

        function nb(a, c, d) { for (a = a ? a.firstChild : i; a; a = a.nextSibling)
                if (a.nodeType == 1) { if (a.tagName == c) return a; if (!d) { var b = nb(a, c, d); if (b) return b } } } h.Jf = nb;

        function hb(a, c, e) { var b = []; for (a = a ? a.firstChild : i; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    (!c || a.tagName == c) && b.push(a); if (!e) { var d = hb(a, c, e); if (d.length) b = b.concat(d) } }
            return b } h.Lf = hb;
        h.Kf = function(b, a) { return b.getElementsByTagName(a) };

        function E() { var e = arguments,
                d, c, b, a, h = 1 & e[0],
                f = 1 + h;
            d = e[f - 1] || {}; for (; f < e.length; f++)
                if (c = e[f])
                    for (b in c) { a = c[b]; if (a !== g) { a = c[b]; var i = d[b];
                            d[b] = h && (B(i) || B(a)) ? E(h, {}, i, a) : a } }
            return d } h.o = E;

        function bb(f, g) { var d = {},
                c, a, b; for (c in f) { a = f[c];
                b = g[c]; if (a !== b) { var e; if (B(a) && B(b)) { a = bb(a, b);
                        e = !sb(a) }!e && (d[c] = a) } } return d } h.nd = function(a) { return F(a) == "function" };
        h.eg = function(a) { return F(a) == "string" };
        h.Vb = function(a) { return !isNaN(q(a)) && isFinite(a) };
        h.a = n;
        h.Fd = B;

        function U(a) { return f.createElement(a) } h.mb = function() { return U("DIV") };
        h.Ff = function() { return U("SPAN") };
        h.kd = function() {};

        function Y(b, c, a) { if (a == g) return b.getAttribute(c);
            b.setAttribute(c, a) }

        function X(a, b) { return Y(a, b) || Y(a, "data-" + b) } h.A = Y;
        h.j = X;

        function x(b, a) { if (a == g) return b.className;
            b.className = a } h.ld = x;

        function xb(b) { var a = {};
            n(b, function(b) { if (b != g) a[b] = b }); return a }

        function zb(b, a) { return b.match(a || Ab) }

        function R(b, a) { return xb(zb(b || "", a)) } h.Mg = zb;

        function db(b, c) { var a = "";
            n(c, function(c) { a && (a += b);
                a += c }); return a }

        function J(a, c, b) { x(a, db(" ", E(bb(R(x(a)), R(c)), R(b)))) } h.Wd = function(a) { return a.parentNode };
        h.O = function(a) { h.W(a, "none") };
        h.u = function(a, b) { h.W(a, b ? "none" : "") };
        h.Jg = function(b, a) { b.removeAttribute(a) };
        h.Vg = function() { return r() && k < 10 };
        h.Wg = function(d, a) { if (a) d.style.clip = "rect(" + c.round(a.$Top || a.I || 0) + "px " + c.round(a.$Right) + "px " + c.round(a.$Bottom) + "px " + c.round(a.$Left || a.D || 0) + "px)";
            else if (a !== g) { var h = d.style.cssText,
                    f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    e = C(h, f, "");
                b.Yb(d, e) } };
        h.N = function() { return +new Date };
        h.F = function(b, a) { b.appendChild(a) };
        h.Zb = function(b, a, c) {
            (c || a.parentNode).insertBefore(b, a) };
        h.Jb = function(b, a) { a = a || b.parentNode;
            a && a.removeChild(b) };
        h.Ag = function(a, b) { n(a, function(a) { h.Jb(a, b) }) };
        h.wc = function(a) { h.Ag(h.yb(a, d), a) };
        h.zg = function(a, b) { var c = h.Wd(a);
            b & 1 && h.z(a, (h.l(c) - h.l(a)) / 2);
            b & 2 && h.B(a, (h.k(c) - h.k(a)) / 2) };
        h.ac = function(b, a) { return parseInt(b, a || 10) };
        h.mg = q;
        h.wf = function(b, a) { var c = f.body; while (a && b !== a && c !== a) try { a = a.parentNode } catch (d) { return l }
            return b === a };

        function Z(d, c, b) { var a = d.cloneNode(!c);!b && h.Jg(a, "id"); return a } h.Z = Z;
        h.Hb = function(e, f) { var a = new Image;

            function b(e, d) { h.U(a, "load", b);
                h.U(a, "abort", c);
                h.U(a, "error", c);
                f && f(a, d) }

            function c(a) { b(a, d) } if (pb() && k < 11.6 || !e) b(!e);
            else { h.c(a, "load", b);
                h.c(a, "abort", c);
                h.c(a, "error", c);
                a.src = e } };
        h.Pg = function(d, a, e) { var c = d.length + 1;

            function b(b) { c--; if (a && b && b.src == a.src) a = b;!c && e && e(a) } n(d, function(a) { h.Hb(a.src, b) });
            b() };
        h.hd = function(a, g, i, h) { if (h) a = Z(a); var c = V(a, g); if (!c.length) c = b.Kf(a, g); for (var f = c.length - 1; f > -1; f--) { var d = c[f],
                    e = Z(i);
                x(e, x(d));
                b.Yb(e, d.style.cssText);
                b.Zb(e, d);
                b.Jb(d) } return a };

        function Gb(a) { var l = this,
                p = "",
                r = ["av", "pv", "ds", "dn"],
                e = [],
                q, k = 0,
                i = 0,
                d = 0;

            function j() { J(a, q, e[d || k || i & 2 || i]);
                b.bb(a, "pointer-events", d ? "none" : "") }

            function c() { k = 0;
                j();
                h.U(f, "mouseup", c);
                h.U(f, "touchend", c);
                h.U(f, "touchcancel", c) }

            function o(a) { if (d) h.gc(a);
                else { k = 4;
                    j();
                    h.c(f, "mouseup", c);
                    h.c(f, "touchend", c);
                    h.c(f, "touchcancel", c) } } l.id = function(a) { if (a === g) return i;
                i = a & 2 || a & 1;
                j() };
            l.$Enable = function(a) { if (a === g) return !d;
                d = a ? 0 : 3;
                j() };
            l.$Elmt = a = h.rb(a); var m = b.Mg(x(a)); if (m) p = m.shift();
            n(r, function(a) { e.push(p + a) });
            q = db(" ", e);
            e.unshift("");
            h.c(a, "mousedown", o);
            h.c(a, "touchstart", o) } h.bc = function(a) { return new Gb(a) };
        h.bb = G;
        h.tb = m("overflow");
        h.B = m("top", 2);
        h.z = m("left", 2);
        h.l = m("width", 2);
        h.k = m("height", 2);
        h.xd = m("marginLeft", 2);
        h.yd = m("marginTop", 2);
        h.s = m("position");
        h.W = m("display");
        h.G = m("zIndex", 1);
        h.Bb = function(b, a, c) { if (a != g) Fb(b, a, c);
            else return Db(b) };
        h.Yb = function(a, b) { if (b != g) a.style.cssText = b;
            else return a.style.cssText }; var W = { $Opacity: h.Bb, $Top: h.B, $Left: h.z, R: h.l, T: h.k, Kb: h.s, Sh: h.W, $ZIndex: h.G };

        function w(f, l) { var e = Q(),
                b = H(),
                d = fb(),
                j = M(f);

            function k(b, d, a) { var e = b.sb(p(-d / 2, -a / 2)),
                    f = b.sb(p(d / 2, -a / 2)),
                    g = b.sb(p(d / 2, a / 2)),
                    h = b.sb(p(-d / 2, a / 2));
                b.sb(p(300, 300)); return p(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2) }

            function a(d, a) { a = a || {}; var n = a.$TranslateZ || 0,
                    p = (a.$RotateX || 0) % 360,
                    q = (a.$RotateY || 0) % 360,
                    u = (a.$Rotate || 0) % 360,
                    l = a.$ScaleX,
                    m = a.$ScaleY,
                    f = a.Rh; if (l == g) l = 1; if (m == g) m = 1; if (f == g) f = 1; if (e) { n = 0;
                    p = 0;
                    q = 0;
                    f = 0 } var c = new Cb(a.$TranslateX, a.$TranslateY, n);
                c.$RotateX(p);
                c.$RotateY(q);
                c.ve(u);
                c.xe(a.$SkewX, a.$SkewY);
                c.$Scale(l, m, f); if (b) { c.$Move(a.D, a.I);
                    d.style[j] = c.qe() } else if (!z || z < 9) { var o = "",
                        i = { x: 0, y: 0 }; if (a.$OriginalWidth) i = k(c, a.$OriginalWidth, a.$OriginalHeight);
                    h.yd(d, i.y);
                    h.xd(d, i.x);
                    o = c.se(); var s = d.style.filter,
                        t = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                        r = C(s, [t], o);
                    T(d, r) } } w = function(e, c) { c = c || {}; var j = c.D,
                    k = c.I,
                    f;
                n(W, function(a, b) { f = c[b];
                    f !== g && a(e, f) });
                h.Wg(e, c.$Clip); if (!b) { j != g && h.z(e, (c.bd || 0) + j);
                    k != g && h.B(e, (c.dd || 0) + k) } if (c.Xd)
                    if (d) yb(h.H(i, O, e, c));
                    else a(e, c) };
            h.lb = O; if (d) h.lb = w; if (e) h.lb = a;
            else if (!b) a = O;
            h.M = w;
            w(f, l) } h.lb = w;
        h.M = w;

        function Cb(j, k, o) { var d = this,
                b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, j || 0, k || 0, o || 0, 1],
                h = c.sin,
                g = c.cos,
                l = c.tan;

            function f(a) { return a * c.PI / 180 }

            function n(a, b) { return { x: a, y: b } }

            function m(b, c, f, g, i, l, n, o, q, t, u, w, y, A, C, F, a, d, e, h, j, k, m, p, r, s, v, x, z, B, D, E) { return [b * a + c * j + f * r + g * z, b * d + c * k + f * s + g * B, b * e + c * m + f * v + g * D, b * h + c * p + f * x + g * E, i * a + l * j + n * r + o * z, i * d + l * k + n * s + o * B, i * e + l * m + n * v + o * D, i * h + l * p + n * x + o * E, q * a + t * j + u * r + w * z, q * d + t * k + u * s + w * B, q * e + t * m + u * v + w * D, q * h + t * p + u * x + w * E, y * a + A * j + C * r + F * z, y * d + A * k + C * s + F * B, y * e + A * m + C * v + F * D, y * h + A * p + C * x + F * E] }

            function e(c, a) { return m.apply(i, (a || b).concat(c)) } d.$Scale = function(a, c, d) { if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1]) };
            d.$Move = function(a, c, d) { b[12] += a || 0;
                b[13] += c || 0;
                b[14] += d || 0 };
            d.$RotateX = function(c) { if (c) { a = f(c); var d = g(a),
                        i = h(a);
                    b = e([1, 0, 0, 0, 0, d, i, 0, 0, -i, d, 0, 0, 0, 0, 1]) } };
            d.$RotateY = function(c) { if (c) { a = f(c); var d = g(a),
                        i = h(a);
                    b = e([d, 0, -i, 0, 0, 1, 0, 0, i, 0, d, 0, 0, 0, 0, 1]) } };
            d.ve = function(c) { if (c) { a = f(c); var d = g(a),
                        i = h(a);
                    b = e([d, i, 0, 0, -i, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]) } };
            d.xe = function(a, c) { if (a || c) { j = f(a);
                    k = f(c);
                    b = e([1, l(k), 0, 0, l(j), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]) } };
            d.sb = function(c) { var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]); return n(a[12], a[13]) };
            d.qe = function() { return "matrix3d(" + b.join(",") + ")" };
            d.se = function() { return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')" } } new(function() { var a = this;

            function b(d, g) { for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                    for (var k = f[c] = [], b = 0; b < h; b++) { for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
                        k[b] = e }
                return f } a.$ScaleX = function(b, c) { return a.cd(b, c, 0) };
            a.$ScaleY = function(b, c) { return a.cd(b, 0, c) };
            a.cd = function(a, c, d) { return b(a, [
                    [c, 0],
                    [0, d]
                ]) };
            a.sb = function(d, c) { var a = b(d, [
                    [c.x],
                    [c.y]
                ]); return p(a[0][0], a[1][0]) } }); var P = { bd: 0, dd: 0, D: 0, I: 0, $Zoom: 1, $ScaleX: 1, $ScaleY: 1, $Rotate: 0, $RotateX: 0, $RotateY: 0, $TranslateX: 0, $TranslateY: 0, $TranslateZ: 0, $SkewX: 0, $SkewY: 0 };
        h.Jc = function(a) { var c = a || {}; if (a)
                if (b.nd(a)) c = { Lc: c };
                else if (b.nd(a.$Clip)) c.$Clip = { Lc: a.$Clip }; return c };

        function wb(c, a) { var b = {};
            n(c, function(c, d) { var e = c; if (a[d] != g)
                    if (h.Vb(c)) e = c + a[d];
                    else e = wb(c, a[d]);
                b[d] = e }); return b } h.ce = wb;
        h.jd = function(l, m, x, q, z, A, n) { var a = m; if (l) { a = {}; for (var h in m) { var B = A[h] || 1,
                        w = z[h] || [0, 1],
                        f = (x - w[0]) / w[1];
                    f = c.min(c.max(f, 0), 1);
                    f = f * B; var u = c.floor(f); if (f != u) f -= u; var j = q.Lc || e.$EaseSwing,
                        k, C = l[h],
                        p = m[h]; if (b.Vb(p)) { j = q[h] || j; var y = j(f);
                        k = C + p * y } else { k = b.o({ hc: {} }, l[h]); var v = q[h] || {};
                        b.a(p.hc || p, function(d, a) { j = v[a] || v.Lc || j; var c = j(f),
                                b = d * c;
                            k.hc[a] = b;
                            k[a] += b }) } a[h] = k } var t = b.a(m, function(b, a) { return P[a] != g });
                t && b.a(P, function(c, b) { if (a[b] == g && l[b] !== g) a[b] = l[b] }); if (t) { if (a.$Zoom) a.$ScaleX = a.$ScaleY = a.$Zoom;
                    a.$OriginalWidth = n.$OriginalWidth;
                    a.$OriginalHeight = n.$OriginalHeight;
                    a.Xd = d } } if (m.$Clip && n.$Move) { var o = a.$Clip.hc,
                    s = (o.$Top || 0) + (o.$Bottom || 0),
                    r = (o.$Left || 0) + (o.$Right || 0);
                a.$Left = (a.$Left || 0) + r;
                a.$Top = (a.$Top || 0) + s;
                a.$Clip.$Left -= r;
                a.$Clip.$Right -= r;
                a.$Clip.$Top -= s;
                a.$Clip.$Bottom -= s } if (a.$Clip && b.Vg() && !a.$Clip.$Top && !a.$Clip.$Left && !a.$Clip.I && !a.$Clip.D && a.$Clip.$Right == n.$OriginalWidth && a.$Clip.$Bottom == n.$OriginalHeight) a.$Clip = i; return a } };

    function n() { var a = this,
            d = [];

        function h(a, b) { d.push({ rc: a, nc: b }) }

        function g(a, c) { b.a(d, function(b, e) { b.rc == a && b.nc === c && d.splice(e, 1) }) } a.$On = a.addEventListener = h;
        a.$Off = a.removeEventListener = g;
        a.m = function(a) { var c = [].slice.call(arguments, 1);
            b.a(d, function(b) { b.rc == a && b.nc.apply(j, c) }) } }
    var m = function(z, C, g, M, P, J) { z = z || 0; var a = this,
            q, o, p, v, A = 0,
            H, I, G, B, y = 0,
            h = 0,
            m = 0,
            D, k, e, f, n, L, w = [],
            x;

        function Q(a) { e += a;
            f += a;
            k += a;
            h += a;
            m += a;
            y += a }

        function u(p) { var i = p; if (n) { if (i >= f || i <= e && !L) i = ((i - e) % n + n) % n + e; if (g.Ye && i <= e) i = e + n } if (!D || v || h != i) { var j = c.min(i, f);
                j = c.max(j, e); if (!D || v || j != m) { if (J) { var l = (j - k) / (C || 1); if (g.$Reverse) l = 1 - l; var o = b.jd(P, J, l, H, G, I, g); if (x) b.a(o, function(b, a) { x[a] && x[a](M, b) });
                        else b.M(M, o) } a.sc(m - k, j - k); var r = m,
                        q = m = j;
                    b.a(w, function(b, c) { var a = i <= h ? w[w.length - c - 1] : b;
                        a.E(m - y) });
                    h = i;
                    D = d;
                    a.dc(r, q) } } }

        function E(a, b, d) { b && a.$Shift(f); if (!d) { e = c.min(e, a.uc() + y);
                f = c.max(f, a.Eb() + y) } w.push(a) } var r = j.requestAnimationFrame || j.webkitRequestAnimationFrame || j.mozRequestAnimationFrame || j.msRequestAnimationFrame; if (b.Mf() && b.Pd() < 7) r = i;
        r = r || function(a) { b.$Delay(a, g.$Interval) };

        function K() { if (q) { var d = b.N(),
                    e = c.min(d - A, g.Yc),
                    a = h + e * p;
                A = d; if (a * p >= o * p) a = o;
                u(a); if (!v && a * p >= o * p) N(B);
                else r(K) } }

        function t(g, i, j) { if (!q) { q = d;
                v = j;
                B = i;
                g = c.max(g, e);
                g = c.min(g, f);
                o = g;
                p = o < h ? -1 : 1;
                a.Mc();
                A = b.N();
                r(K) } }

        function N(b) { if (q) { v = q = B = l;
                a.Wc();
                b && b() } } a.$Play = function(a, b, c) { t(a ? h + a : f, b, c) };
        a.Uc = t;
        a.qb = N;
        a.Be = function(a) { t(a) };
        a.cb = function() { return h };
        a.Rc = function() { return o };
        a.Db = function() { return m };
        a.E = u;
        a.$Move = function(a) { u(h + a) };
        a.$IsPlaying = function() { return q };
        a.Ue = function(a) { n = a };
        a.$Shift = Q;
        a.gb = function(a, b) { E(a, 0, b) };
        a.Hc = function(a) { E(a, 1) };
        a.Me = function(a) { f += a };
        a.uc = function() { return e };
        a.Eb = function() { return f };
        a.dc = a.Mc = a.Wc = a.sc = b.kd;
        a.Cc = b.N();
        g = b.o({ $Interval: 16, Yc: 50 }, g);
        n = g.Dc;
        L = g.Pe;
        x = g.Oe;
        e = k = z;
        f = z + C;
        I = g.$Round || {};
        G = g.$During || {};
        H = b.Jc(g.$Easing) };
    var p = j.$JssorSlideshowFormations$ = new function() { var h = this,
            b = 0,
            a = 1,
            f = 2,
            e = 3,
            s = 1,
            r = 2,
            t = 4,
            q = 8,
            w = 256,
            x = 512,
            v = 1024,
            u = 2048,
            j = u + s,
            i = u + r,
            o = x + s,
            m = x + r,
            n = w + t,
            k = w + q,
            l = v + t,
            p = v + q;

        function y(a) { return (a & r) == r }

        function z(a) { return (a & t) == t }

        function g(b, a, c) { c.push(a);
            b[a] = b[a] || [];
            b[a].push(c) } h.$FormationStraight = function(f) { for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.Nb, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)
                for (a = 0; a < d; a++) { switch (s) {
                        case j:
                            c = h - (a * e + (q - b)); break;
                        case l:
                            c = h - (b * d + (p - a)); break;
                        case o:
                            c = h - (a * e + b);
                        case n:
                            c = h - (b * d + a); break;
                        case i:
                            c = a * e + b; break;
                        case k:
                            c = b * d + (p - a); break;
                        case m:
                            c = a * e + (q - b); break;
                        default:
                            c = b * d + a } g(r, c, [b, a]) }
            return r };
        h.$FormationSwirl = function(q) { var x = q.$Cols,
                y = q.$Rows,
                B = q.$Assembly,
                w = q.Nb,
                A = [],
                z = [],
                u = 0,
                c = 0,
                h = 0,
                r = x - 1,
                s = y - 1,
                t, p, v = 0; switch (B) {
                case j:
                    c = r;
                    h = 0;
                    p = [f, a, e, b]; break;
                case l:
                    c = 0;
                    h = s;
                    p = [b, e, a, f]; break;
                case o:
                    c = r;
                    h = s;
                    p = [e, a, f, b]; break;
                case n:
                    c = r;
                    h = s;
                    p = [a, e, b, f]; break;
                case i:
                    c = 0;
                    h = 0;
                    p = [f, b, e, a]; break;
                case k:
                    c = r;
                    h = 0;
                    p = [a, f, b, e]; break;
                case m:
                    c = 0;
                    h = s;
                    p = [e, b, f, a]; break;
                default:
                    c = 0;
                    h = 0;
                    p = [b, f, a, e] } u = 0; while (u < w) { t = h + "," + c; if (c >= 0 && c < x && h >= 0 && h < y && !z[t]) { z[t] = d;
                    g(A, u++, [h, c]) } else switch (p[v++ % p.length]) {
                    case b:
                        c--; break;
                    case f:
                        h--; break;
                    case a:
                        c++; break;
                    case e:
                        h++ }
                switch (p[v % p.length]) {
                    case b:
                        c++; break;
                    case f:
                        h++; break;
                    case a:
                        c--; break;
                    case e:
                        h-- } } return A };
        h.$FormationZigZag = function(p) { var w = p.$Cols,
                x = p.$Rows,
                z = p.$Assembly,
                v = p.Nb,
                t = [],
                u = 0,
                c = 0,
                d = 0,
                q = w - 1,
                r = x - 1,
                y, h, s = 0; switch (z) {
                case j:
                    c = q;
                    d = 0;
                    h = [f, a, e, a]; break;
                case l:
                    c = 0;
                    d = r;
                    h = [b, e, a, e]; break;
                case o:
                    c = q;
                    d = r;
                    h = [e, a, f, a]; break;
                case n:
                    c = q;
                    d = r;
                    h = [a, e, b, e]; break;
                case i:
                    c = 0;
                    d = 0;
                    h = [f, b, e, b]; break;
                case k:
                    c = q;
                    d = 0;
                    h = [a, f, b, f]; break;
                case m:
                    c = 0;
                    d = r;
                    h = [e, b, f, b]; break;
                default:
                    c = 0;
                    d = 0;
                    h = [b, f, a, f] } u = 0; while (u < v) { y = d + "," + c; if (c >= 0 && c < w && d >= 0 && d < x && typeof t[y] == "undefined") { g(t, u++, [d, c]); switch (h[s % h.length]) {
                        case b:
                            c++; break;
                        case f:
                            d++; break;
                        case a:
                            c--; break;
                        case e:
                            d-- } } else { switch (h[s++ % h.length]) {
                        case b:
                            c--; break;
                        case f:
                            d--; break;
                        case a:
                            c++; break;
                        case e:
                            d++ } switch (h[s++ % h.length]) {
                        case b:
                            c++; break;
                        case f:
                            d++; break;
                        case a:
                            c--; break;
                        case e:
                            d-- } } } return t };
        h.$FormationStraightStairs = function(q) { var u = q.$Cols,
                v = q.$Rows,
                e = q.$Assembly,
                t = q.Nb,
                r = [],
                s = 0,
                c = 0,
                d = 0,
                f = u - 1,
                h = v - 1,
                x = t - 1; switch (e) {
                case j:
                case m:
                case o:
                case i:
                    var a = 0,
                        b = 0; break;
                case k:
                case l:
                case n:
                case p:
                    var a = f,
                        b = 0; break;
                default:
                    e = p; var a = f,
                        b = 0 } c = a;
            d = b; while (s < t) { if (z(e) || y(e)) g(r, x - s++, [d, c]);
                else g(r, s++, [d, c]); switch (e) {
                    case j:
                    case m:
                        c--;
                        d++; break;
                    case o:
                    case i:
                        c++;
                        d--; break;
                    case k:
                    case l:
                        c--;
                        d--; break;
                    case p:
                    case n:
                    default:
                        c++;
                        d++ } if (c < 0 || d < 0 || c > f || d > h) { switch (e) {
                        case j:
                        case m:
                            a++; break;
                        case k:
                        case l:
                        case o:
                        case i:
                            b++; break;
                        case p:
                        case n:
                        default:
                            a-- } if (a < 0 || b < 0 || a > f || b > h) { switch (e) {
                            case j:
                            case m:
                                a = f;
                                b++; break;
                            case o:
                            case i:
                                b = h;
                                a++; break;
                            case k:
                            case l:
                                b = h;
                                a--; break;
                            case p:
                            case n:
                            default:
                                a = 0;
                                b++ } if (b > h) b = h;
                        else if (b < 0) b = 0;
                        else if (a > f) a = f;
                        else if (a < 0) a = 0 } d = b;
                    c = a } } return r };
        h.$FormationSquare = function(i) { var a = i.$Cols || 1,
                b = i.$Rows || 1,
                j = [],
                d, e, f, h, k;
            f = a < b ? (b - a) / 2 : 0;
            h = a > b ? (a - b) / 2 : 0;
            k = c.round(c.max(a / 2, b / 2)) + 1; for (d = 0; d < a; d++)
                for (e = 0; e < b; e++) g(j, k - c.min(d + 1 + f, e + 1 + h, a - d + f, b - e + h), [e, d]); return j };
        h.$FormationRectangle = function(f) { var d = f.$Cols || 1,
                e = f.$Rows || 1,
                h = [],
                a, b, i;
            i = c.round(c.min(d / 2, e / 2)) + 1; for (a = 0; a < d; a++)
                for (b = 0; b < e; b++) g(h, i - c.min(a + 1, b + 1, d - a, e - b), [b, a]); return h };
        h.$FormationRandom = function(d) { for (var e = [], a, b = 0; b < d.$Rows; b++)
                for (a = 0; a < d.$Cols; a++) g(e, c.ceil(1e5 * c.random()) % 13, [b, a]); return e };
        h.$FormationCircle = function(d) { for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
                for (a = 0; a < f; a++) g(h, c.round(c.sqrt(c.pow(b - i, 2) + c.pow(a - j, 2))), [a, b]); return h };
        h.$FormationCross = function(d) { for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
                for (a = 0; a < f; a++) g(h, c.round(c.min(c.abs(b - i), c.abs(a - j))), [a, b]); return h };
        h.$FormationRectangleCross = function(f) { for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = c.max(d, e) + 1, b = 0; b < h; b++)
                for (a = 0; a < i; a++) g(j, c.round(k - c.max(d - c.abs(b - d), e - c.abs(a - e))) - 1, [a, b]); return j } };
    j.$JssorSlideshowRunner$ = function(k, s, q, u, z) { var f = this,
            v, g, a, y = 0,
            x = u.$TransitionsOrder,
            r, h = 8;

        function t(a) { if (a.$Top) a.I = a.$Top; if (a.$Left) a.D = a.$Left;
            b.a(a, function(a) { b.Fd(a) && t(a) }) }

        function j(g, f) { var a = { $Interval: f, $Duration: 1, $Delay: 0, $Cols: 1, $Rows: 1, $Opacity: 0, $Zoom: 0, $Clip: 0, $Move: l, $SlideOut: l, $Reverse: l, $Formation: p.$FormationRandom, $Assembly: 1032, $ChessMode: { $Column: 0, $Row: 0 }, $Easing: e.$EaseSwing, $Round: {}, Pb: [], $During: {} };
            b.o(a, g);
            t(a);
            a.Nb = a.$Cols * a.$Rows;
            a.$Easing = b.Jc(a.$Easing);
            a.Ae = c.ceil(a.$Duration / a.$Interval);
            a.ae = function(c, b) { c /= a.$Cols;
                b /= a.$Rows; var f = c + "x" + b; if (!a.Pb[f]) { a.Pb[f] = { R: c, T: b }; for (var d = 0; d < a.$Cols; d++)
                        for (var e = 0; e < a.$Rows; e++) a.Pb[f][e + "," + d] = { $Top: e * b, $Right: d * c + c, $Bottom: e * b + b, $Left: d * c } } return a.Pb[f] }; if (a.$Brother) { a.$Brother = j(a.$Brother, f);
                a.$SlideOut = d } return a }

        function o(B, h, a, w, o, m) { var z = this,
                u, v = {},
                j = {},
                n = [],
                f, e, s, q = a.$ChessMode.$Column || 0,
                r = a.$ChessMode.$Row || 0,
                g = a.ae(o, m),
                p = C(a),
                D = p.length - 1,
                t = a.$Duration + a.$Delay * D,
                x = w + t,
                k = a.$SlideOut,
                y;
            x += 50;

            function C(a) { var b = a.$Formation(a); return a.$Reverse ? b.reverse() : b } z.Ud = x;
            z.Tb = function(d) { d -= w; var e = d < t; if (e || y) { y = e; if (!k) d = t - d; var f = c.ceil(d / a.$Interval);
                    b.a(j, function(a, e) { var d = c.max(f, a.te);
                        d = c.min(d, a.length - 1); if (a.wd != d) { if (!a.wd && !k) b.u(n[e]);
                            else d == a.he && k && b.O(n[e]);
                            a.wd = d;
                            b.M(n[e], a[d]) } }) } };
            h = b.Z(h);
            b.lb(h, i); if (b.Ob()) { var E = !h["no-image"],
                    A = b.Lf(h);
                b.a(A, function(a) {
                    (E || a["jssor-slider"]) && b.Bb(a, b.Bb(a), d) }) } b.a(p, function(h, i) { b.a(h, function(G) { var K = G[0],
                        J = G[1],
                        t = K + "," + J,
                        n = l,
                        p = l,
                        x = l; if (q && J % 2) { if (q & 3) n = !n; if (q & 12) p = !p; if (q & 16) x = !x } if (r && K % 2) { if (r & 3) n = !n; if (r & 12) p = !p; if (r & 16) x = !x } a.$Top = a.$Top || a.$Clip & 4;
                    a.$Bottom = a.$Bottom || a.$Clip & 8;
                    a.$Left = a.$Left || a.$Clip & 1;
                    a.$Right = a.$Right || a.$Clip & 2; var C = p ? a.$Bottom : a.$Top,
                        z = p ? a.$Top : a.$Bottom,
                        B = n ? a.$Right : a.$Left,
                        A = n ? a.$Left : a.$Right;
                    a.$Clip = C || z || B || A;
                    s = {};
                    e = { I: 0, D: 0, $Opacity: 1, R: o, T: m };
                    f = b.o({}, e);
                    u = b.o({}, g[t]); if (a.$Opacity) e.$Opacity = 2 - a.$Opacity; if (a.$ZIndex) { e.$ZIndex = a.$ZIndex;
                        f.$ZIndex = 0 } var I = a.$Cols * a.$Rows > 1 || a.$Clip; if (a.$Zoom || a.$Rotate) { var H = d; if (b.Ob())
                            if (a.$Cols * a.$Rows > 1) H = l;
                            else I = l; if (H) { e.$Zoom = a.$Zoom ? a.$Zoom - 1 : 1;
                            f.$Zoom = 1; if (b.Ob() || b.Cd()) e.$Zoom = c.min(e.$Zoom, 2); var N = a.$Rotate || 0;
                            e.$Rotate = N * 360 * (x ? -1 : 1);
                            f.$Rotate = 0 } } if (I) { var h = u.hc = {}; if (a.$Clip) { var w = a.$ScaleClip || 1; if (C && z) { h.$Top = g.T / 2 * w;
                                h.$Bottom = -h.$Top } else if (C) h.$Bottom = -g.T * w;
                            else if (z) h.$Top = g.T * w; if (B && A) { h.$Left = g.R / 2 * w;
                                h.$Right = -h.$Left } else if (B) h.$Right = -g.R * w;
                            else if (A) h.$Left = g.R * w } s.$Clip = u;
                        f.$Clip = g[t] } var L = n ? 1 : -1,
                        M = p ? 1 : -1; if (a.x) e.D += o * a.x * L; if (a.y) e.I += m * a.y * M;
                    b.a(e, function(a, c) { if (b.Vb(a))
                            if (a != f[c]) s[c] = a - f[c] });
                    v[t] = k ? f : e; var D = a.Ae,
                        y = c.round(i * a.$Delay / a.$Interval);
                    j[t] = new Array(y);
                    j[t].te = y;
                    j[t].he = y + D - 1; for (var F = 0; F <= D; F++) { var E = b.jd(f, s, F / D, a.$Easing, a.$During, a.$Round, { $Move: a.$Move, $OriginalWidth: o, $OriginalHeight: m });
                        E.$ZIndex = E.$ZIndex || 1;
                        j[t].push(E) } }) });
            p.reverse();
            b.a(p, function(a) { b.a(a, function(c) { var f = c[0],
                        e = c[1],
                        d = f + "," + e,
                        a = h; if (e || f) a = b.Z(h);
                    b.M(a, v[d]);
                    b.tb(a, "hidden");
                    b.s(a, "absolute");
                    B.ge(a);
                    n[d] = a;
                    b.u(a, !k) }) }) }

        function w() { var b = this,
                c = 0;
            m.call(b, 0, v);
            b.dc = function(d, b) { if (b - c > h) { c = b;
                    a && a.Tb(b);
                    g && g.Tb(b) } };
            b.Ac = r } f.ke = function() { var a = 0,
                b = u.$Transitions,
                d = b.length; if (x) a = y++ % d;
            else a = c.floor(c.random() * d);
            b[a] && (b[a].jb = a); return b[a] };
        f.re = function(w, x, l, m, b) { r = b;
            b = j(b, h); var i = m.fd,
                e = l.fd;
            i["no-image"] = !m.Lb;
            e["no-image"] = !l.Lb; var n = i,
                p = e,
                u = b,
                d = b.$Brother || j({}, h); if (!b.$SlideOut) { n = e;
                p = i } var t = d.$Shift || 0;
            g = new o(k, p, d, c.max(t - d.$Interval, 0), s, q);
            a = new o(k, n, u, c.max(d.$Interval - t, 0), s, q);
            g.Tb(0);
            a.Tb(0);
            v = c.max(g.Ud, a.Ud);
            f.jb = w };
        f.Gb = function() { k.Gb();
            g = i;
            a = i };
        f.lf = function() { var b = i; if (a) b = new w; return b }; if (b.Ob() || b.Cd() || z && b.Pf() < 537) h = 16;
        n.call(f);
        m.call(f, -1e7, 1e7) };
    var k = j.$JssorSlider$ = function(p, hc) { var h = this;

        function Fc() { var a = this;
            m.call(a, -1e8, 2e8);
            a.nf = function() { var b = a.Db(),
                    d = c.floor(b),
                    f = t(d),
                    e = b - c.floor(b); return { jb: f, pf: d, Kb: e } };
            a.dc = function(b, a) { var e = c.floor(a); if (e != a && a > b) e++;
                Wb(e, d);
                h.m(k.$EVT_POSITION_CHANGE, t(a), t(b), a, b) } }

        function Ec() { var a = this;
            m.call(a, 0, 0, { Dc: r });
            b.a(C, function(b) { D & 1 && b.Ue(r);
                a.Hc(b);
                b.$Shift(gb / dc) }) }

        function Dc() { var a = this,
                b = Vb.$Elmt;
            m.call(a, -1, 2, { $Easing: e.$EaseLinear, Oe: { Kb: bc }, Dc: r }, b, { Kb: 1 }, { Kb: -2 });
            a.Qb = b }

        function rc(o, n) { var b = this,
                e, f, g, j, c;
            m.call(b, -1e8, 2e8, { Yc: 100 });
            b.Mc = function() { O = d;
                R = i;
                h.m(k.$EVT_SWIPE_START, t(w.cb()), w.cb()) };
            b.Wc = function() { O = l;
                j = l; var a = w.nf();
                h.m(k.$EVT_SWIPE_END, t(w.cb()), w.cb());!a.Kb && Hc(a.pf, s) };
            b.dc = function(i, h) { var b; if (j) b = c;
                else { b = f; if (g) { var d = h / g;
                        b = a.$SlideEasing(d) * (f - e) + e } } w.E(b) };
            b.Rb = function(a, d, c, h) { e = a;
                f = d;
                g = c;
                w.E(a);
                b.E(0);
                b.Uc(c, h) };
            b.Qe = function(a) { j = d;
                c = a;
                b.$Play(a, i, d) };
            b.Te = function(a) { c = a };
            w = new Fc;
            w.gb(o);
            w.gb(n) }

        function sc() { var c = this,
                a = Zb();
            b.G(a, 0);
            b.bb(a, "pointerEvents", "none");
            c.$Elmt = a;
            c.ge = function(c) { b.F(a, c);
                b.u(a) };
            c.Gb = function() { b.O(a);
                b.wc(a) } }

        function Bc(j, f) { var e = this,
                q, L, x, o, y = [],
                w, B, W, H, S, F, g, v, p;
            m.call(e, -u, u + 1, {});

            function E(a) { q && q.Ld();
                T(j, a, 0);
                F = d;
                q = new I.$Class(j, I, b.mg(b.j(j, "idle")) || qc);
                q.E(0) }

            function Y() { q.Cc < I.Cc && E() }

            function O(p, r, n) { if (!H) { H = d; if (o && n) { var g = n.width,
                            c = n.height,
                            m = g,
                            j = c; if (g && c && a.$FillMode) { if (a.$FillMode & 3 && (!(a.$FillMode & 4) || g > K || c > J)) { var i = l,
                                    q = K / J * c / g; if (a.$FillMode & 1) i = q > 1;
                                else if (a.$FillMode & 2) i = q < 1;
                                m = i ? g * J / c : K;
                                j = i ? J : c * K / g } b.l(o, m);
                            b.k(o, j);
                            b.B(o, (J - j) / 2);
                            b.z(o, (K - m) / 2) } b.s(o, "absolute");
                        h.m(k.$EVT_LOAD_END, f) } } b.O(r);
                p && p(e) }

            function X(b, c, d, g) { if (g == R && s == f && P)
                    if (!Gc) { var a = t(b);
                        A.re(a, f, c, e, d);
                        c.Re();
                        U.$Shift(a - U.uc() - 1);
                        U.E(a);
                        z.Rb(b, b, 0) } }

            function ab(b) { if (b == R && s == f) { if (!g) { var a = i; if (A)
                            if (A.jb == f) a = A.lf();
                            else A.Gb();
                        Y();
                        g = new zc(j, f, a, q);
                        g.Oc(p) }!g.$IsPlaying() && g.kc() } }

            function G(d, h, l) { if (d == f) { if (d != h) C[h] && C[h].Tc();
                    else !l && g && g.Je();
                    p && p.$Enable(); var m = R = b.N();
                    e.Hb(b.H(i, ab, m)) } else { var k = c.min(f, d),
                        j = c.max(f, d),
                        o = c.min(j - k, k + r - j),
                        n = u + a.$LazyLoading - 1;
                    (!S || o <= n) && e.Hb() } }

            function bb() { if (s == f && g) { g.qb();
                    p && p.$Quit();
                    p && p.$Disable();
                    g.sd() } }

            function eb() { s == f && g && g.qb() }

            function Z(a) {!M && h.m(k.$EVT_CLICK, f, a) }

            function Q() { p = v.pInstance;
                g && g.Oc(p) } e.Hb = function(c, a) { a = a || x; if (y.length && !H) { b.u(a); if (!W) { W = d;
                        h.m(k.$EVT_LOAD_START, f);
                        b.a(y, function(a) { if (!b.A(a, "src")) { a.src = b.j(a, "src2");
                                b.W(a, a["display-origin"]) } }) } b.Pg(y, o, b.H(i, O, c, a)) } else O(c, a) };
            e.af = function() { var j = f; if (a.$AutoPlaySteps < 0) j -= r; var d = j + a.$AutoPlaySteps * xc; if (D & 2) d = t(d); if (!(D & 1) && !db) d = c.max(0, c.min(d, r - u)); if (d != f) { if (A) { var g = A.ke(r); if (g) { var k = R = b.N(),
                                h = C[t(d)]; return h.Hb(b.H(i, X, d, h, g, k), x) } } ob(d) } else if (a.$Loop) { e.Tc();
                    G(f, f) } };
            e.Ic = function() { G(f, f, d) };
            e.Tc = function() { p && p.$Quit();
                p && p.$Disable();
                e.ad();
                g && g.pe();
                g = i;
                E() };
            e.Re = function() { b.O(j) };
            e.ad = function() { b.u(j) };
            e.le = function() { p && p.$Enable() };

            function T(a, c, e) { if (b.A(a, "jssor-slider")) return; if (!F) { if (a.tagName == "IMG") { y.push(a); if (!b.A(a, "src")) { S = d;
                            a["display-origin"] = b.W(a);
                            b.O(a) } } if (e) { b.G(a, (b.G(a) || 0) + 1);
                        b.yd(a, 0);
                        b.xd(a, 0);
                        b.lb(a, { $TranslateZ: 0 }) } } var f = b.yb(a);
                b.a(f, function(f) { var h = f.tagName,
                        i = b.j(f, "u"); if (i == "player" && !v) { v = f; if (v.pInstance) Q();
                        else b.c(v, "dataavailable", Q) } if (i == "caption") { if (c) { b.Nc(f, b.j(f, "to"));
                            b.Yf(f, b.j(f, "bf"));
                            b.j(f, "3d") && b.Xf(f, "preserve-3d") } else if (!b.Hd()) { var g = b.Z(f, l, d);
                            b.Zb(g, f, a);
                            b.Jb(f, a);
                            f = g;
                            c = d } } else if (!F && !e && !o) { if (h == "A") { if (b.j(f, "u") == "image") o = b.Jf(f, "IMG");
                            else o = b.v(f, "image", d); if (o) { w = f;
                                b.W(w, "block");
                                b.M(w, V);
                                B = b.Z(w, d);
                                b.s(w, "relative");
                                b.Bb(B, 0);
                                b.bb(B, "backgroundColor", "#000") } } else if (h == "IMG" && b.j(f, "u") == "image") o = f; if (o) { o.border = 0;
                            b.M(o, V) } } T(f, c, e + 1) }) } e.sc = function(c, b) { var a = u - b;
                bc(L, a) };
            e.jb = f;
            n.call(e);
            b.Zf(j, b.j(j, "p"));
            b.bg(j, b.j(j, "po")); var N = b.v(j, "thumb", d); if (N) { e.ug = b.Z(N);
                b.O(N) } b.u(j);
            x = b.Z(cb);
            b.G(x, 1e3);
            b.c(j, "click", Z);
            E(d);
            e.Lb = o;
            e.gd = B;
            e.fd = j;
            e.Qb = L = j;
            b.F(L, x);
            h.$On(203, G);
            h.$On(28, eb);
            h.$On(24, bb) }

        function zc(y, f, p, q) { var a = this,
                n = 0,
                u = 0,
                g, i, e, c, j, t, r, o = C[f];
            m.call(a, 0, 0);

            function v() { b.wc(N);
                fc && j && o.gd && b.F(N, o.gd);
                b.u(N, !j && o.Lb) }

            function w() { a.kc() }

            function x(b) { r = b;
                a.qb();
                a.kc() } a.kc = function() { var b = a.Db(); if (!B && !O && !r && s == f) { if (!b) { if (g && !j) { j = d;
                            a.sd(d);
                            h.m(k.$EVT_SLIDESHOW_START, f, n, u, g, c) } v() } var l, p = k.$EVT_STATE_CHANGE; if (b != c)
                        if (b == e) l = c;
                        else if (b == i) l = e;
                    else if (!b) l = i;
                    else l = a.Rc();
                    h.m(p, f, b, n, i, e, c); var m = P && (!E || F); if (b == c)(e != c && !(E & 12) || m) && o.af();
                    else(m || b != e) && a.Uc(l, w) } };
            a.Je = function() { e == c && e == a.Db() && a.E(i) };
            a.pe = function() { A && A.jb == f && A.Gb(); var b = a.Db();
                b < c && h.m(k.$EVT_STATE_CHANGE, f, -b - 1, n, i, e, c) };
            a.sd = function(a) { p && b.tb(ib, a && p.Ac.$Outside ? "" : "hidden") };
            a.sc = function(b, a) { if (j && a >= g) { j = l;
                    v();
                    o.ad();
                    A.Gb();
                    h.m(k.$EVT_SLIDESHOW_END, f, n, u, g, c) } h.m(k.$EVT_PROGRESS_CHANGE, f, a, n, i, e, c) };
            a.Oc = function(a) { if (a && !t) { t = a;
                    a.$On($JssorPlayer$.Ne, x) } };
            p && a.Hc(p);
            g = a.Eb();
            a.Hc(q);
            i = g + q.qd;
            e = g + q.rd;
            c = a.Eb() }

        function Mb(a, c, d) { b.z(a, c);
            b.B(a, d) }

        function bc(c, b) { var a = x > 0 ? x : hb,
                d = Bb * b * (a & 1),
                e = Cb * b * (a >> 1 & 1);
            Mb(c, d, e) }

        function Rb() { qb = O;
            Kb = z.Rc();
            G = w.cb() }

        function ic() { Rb(); if (B || !F && E & 12) { z.qb();
                h.m(k.Gg) } }

        function gc(f) { if (!B && (F || !(E & 12)) && !z.$IsPlaying()) { var d = w.cb(),
                    b = c.ceil(G); if (f && c.abs(H) >= a.$MinDragOffsetToSlide) { b = c.ceil(d);
                    b += fb } if (!(D & 1)) b = c.min(r - u, c.max(b, 0)); var e = c.abs(b - d);
                e = 1 - c.pow(1 - e, 5); if (!M && qb) z.Be(Kb);
                else if (d == b) { ub.le();
                    ub.Ic() } else z.Rb(d, b, e * Xb) } }

        function Ib(a) {!b.j(b.lc(a), "nodrag") && b.gc(a) }

        function vc(a) { ac(a, 1) }

        function ac(a, c) { a = b.Kd(a); var j = b.lc(a); if (!L && !b.j(j, "nodrag") && wc() && (!c || a.touches.length == 1)) { B = d;
                Ab = l;
                R = i;
                b.c(f, c ? "touchmove" : "mousemove", Db);
                b.N();
                M = 0;
                ic(); if (!qb) x = 0; if (c) { var g = a.touches[0];
                    vb = g.clientX;
                    wb = g.clientY } else { var e = b.Sd(a);
                    vb = e.x;
                    wb = e.y } H = 0;
                bb = 0;
                fb = 0;
                h.m(k.$EVT_DRAG_START, t(G), G, a) } }

        function Db(e) { if (B) { e = b.Kd(e); var f; if (e.type != "mousemove") { var l = e.touches[0];
                    f = { x: l.clientX, y: l.clientY } } else f = b.Sd(e); if (f) { var j = f.x - vb,
                        k = f.y - wb; if (c.floor(G) != G) x = x || hb & L; if ((j || k) && !x) { if (L == 3)
                            if (c.abs(k) > c.abs(j)) x = 2;
                            else x = 1;
                        else x = L; if (kb && x == 1 && c.abs(k) - c.abs(j) > 3) Ab = d } if (x) { var a = k,
                            i = Cb; if (x == 1) { a = j;
                            i = Bb } if (!(D & 1)) { if (a > 0) { var g = i * s,
                                    h = a - g; if (h > 0) a = g + c.sqrt(h) * 5 } if (a < 0) { var g = i * (r - u - s),
                                    h = -a - g; if (h > 0) a = -g - c.sqrt(h) * 5 } } if (H - bb < -2) fb = 0;
                        else if (H - bb > 2) fb = -1;
                        bb = H;
                        H = a;
                        tb = G - H / i / (Z || 1); if (H && x && !Ab) { b.gc(e); if (!O) z.Qe(tb);
                            else z.Te(tb) } } } } }

        function nb() { tc(); if (B) { B = l;
                b.N();
                b.U(f, "mousemove", Db);
                b.U(f, "touchmove", Db);
                M = H;
                z.qb(); var a = w.cb();
                h.m(k.$EVT_DRAG_END, t(a), a, t(G), G);
                E & 12 && Rb();
                gc(d) } }

        function mc(c) { if (M) { b.vf(c); var a = b.lc(c); while (a && v !== a) { a.tagName == "A" && b.gc(c); try { a = a.parentNode } catch (d) { break } } } }

        function Lb(a) { C[s];
            s = t(a);
            ub = C[s];
            Wb(a); return s }

        function Hc(a, b) { x = 0;
            Lb(a);
            h.m(k.$EVT_PARK, t(a), b) }

        function Wb(a, c) { yb = a;
            b.a(S, function(b) { b.zc(t(a), a, c) }) }

        function wc() { var b = k.od || 0,
                a = Y; if (kb) a & 1 && (a &= 1);
            k.od |= a; return L = a & ~b }

        function tc() { if (L) { k.od &= ~Y;
                L = 0 } }

        function Zb() { var a = b.mb();
            b.M(a, V);
            b.s(a, "absolute"); return a }

        function t(a) { return (a % r + r) % r }

        function nc(b, d) { if (d)
                if (!D) { b = c.min(c.max(b + yb, 0), r - u);
                    d = l } else if (D & 2) { b = t(b + yb);
                d = l } ob(b, a.$SlideDuration, d) }

        function zb() { b.a(S, function(a) { a.vc(a.Wb.$ChanceToShow <= F) }) }

        function kc() { if (!F) { F = 1;
                zb(); if (!B) { E & 12 && gc();
                    E & 3 && C[s].Ic() } } }

        function jc() { if (F) { F = 0;
                zb();
                B || !(E & 12) || ic() } }

        function lc() { V = { R: K, T: J, $Top: 0, $Left: 0 };
            b.a(T, function(a) { b.M(a, V);
                b.s(a, "absolute");
                b.tb(a, "hidden");
                b.O(a) });
            b.M(cb, V) }

        function mb(b, a) { ob(b, a, d) }

        function ob(h, f, k) { if (Tb && (!B && (F || !(E & 12)) || a.$NaviQuitDrag)) { O = d;
                B = l;
                z.qb(); if (f == g) f = Xb; var e = Eb.Db(),
                    b = h; if (k) { b = e + h; if (h > 0) b = c.ceil(b);
                    else b = c.floor(b) } if (D & 2) b = t(b); if (!(D & 1)) b = c.max(0, c.min(b, r - u)); var j = (b - e) % r;
                b = e + j; var i = e == b ? 0 : f * c.abs(j);
                i = c.min(i, f * u * 1.5);
                z.Rb(e, b, i || 1) } } h.$PlayTo = ob;
        h.$GoTo = function(a) { w.E(Lb(a)) };
        h.$Next = function() { mb(1) };
        h.$Prev = function() { mb(-1) };
        h.$Pause = function() { P = l };
        h.$Play = function() { if (!P) { P = d;
                C[s] && C[s].Ic() } };
        h.$SetSlideshowTransitions = function(b) { a.$SlideshowOptions.$Transitions = b };
        h.$SetCaptionTransitions = function(a) { I.$Transitions = a;
            I.Cc = b.N() };
        h.$SlidesCount = function() { return T.length };
        h.$CurrentIndex = function() { return s };
        h.$IsAutoPlaying = function() { return P };
        h.$IsDragging = function() { return B };
        h.$IsSliding = function() { return O };
        h.$IsMouseOver = function() { return !F };
        h.$LastDragSucceded = function() { return M };

        function X() { return b.l(y || p) }

        function jb() { return b.k(y || p) } h.$OriginalWidth = h.$GetOriginalWidth = X;
        h.$OriginalHeight = h.$GetOriginalHeight = jb;

        function Gb(c, d) { if (c == g) return b.l(p); if (!y) { var a = b.mb(f);
                b.ld(a, b.ld(p));
                b.Yb(a, b.Yb(p));
                b.W(a, "block");
                b.s(a, "relative");
                b.B(a, 0);
                b.z(a, 0);
                b.tb(a, "visible");
                y = b.mb(f);
                b.s(y, "absolute");
                b.B(y, 0);
                b.z(y, 0);
                b.l(y, b.l(p));
                b.k(y, b.k(p));
                b.Nc(y, "0 0");
                b.F(y, a); var i = b.yb(p);
                b.F(p, y);
                b.bb(p, "backgroundImage", "");
                b.a(i, function(c) { b.F(b.j(c, "noscale") ? p : a, c);
                    b.j(c, "autocenter") && Nb.push(c) }) } Z = c / (d ? b.k : b.l)(y);
            b.ag(y, Z); var h = d ? Z * X() : c,
                e = d ? c : Z * jb();
            b.l(p, h);
            b.k(p, e);
            b.a(Nb, function(a) { var c = b.ac(b.j(a, "autocenter"));
                b.zg(a, c) }) } h.$ScaleHeight = h.$GetScaleHeight = function(a) { if (a == g) return b.k(p);
            Gb(a, d) };
        h.$ScaleWidth = h.$SetScaleWidth = h.$GetScaleWidth = Gb;
        h.Nd = function(a) { var d = c.ceil(t(gb / dc)),
                b = t(a - s + d); if (b > u) { if (a - s > r / 2) a -= r;
                else if (a - s <= -r / 2) a += r } else a = s + b - d; return a };
        n.call(h);
        h.$Elmt = p = b.rb(p); var a = b.o({ $FillMode: 0, $LazyLoading: 1, $ArrowKeyNavigation: 1, $StartIndex: 0, $AutoPlay: l, $Loop: 1, $HWA: d, $NaviQuitDrag: d, $AutoPlaySteps: 1, $AutoPlayInterval: 3e3, $PauseOnHover: 1, $SlideDuration: 500, $SlideEasing: e.$EaseOutQuad, $MinDragOffsetToSlide: 20, $SlideSpacing: 0, $Cols: 1, $Align: 0, $UISearchMode: 1, $PlayOrientation: 1, $DragOrientation: 1 }, hc);
        a.$HWA = a.$HWA && b.Of(); if (a.$Idle != g) a.$AutoPlayInterval = a.$Idle; if (a.$ParkingPosition != g) a.$Align = a.$ParkingPosition; var hb = a.$PlayOrientation & 3,
            xc = (a.$PlayOrientation & 4) / -4 || 1,
            eb = a.$SlideshowOptions,
            I = b.o({ $Class: q, $PlayInMode: 1, $PlayOutMode: 1, $HWA: a.$HWA }, a.$CaptionSliderOptions);
        I.$Transitions = I.$Transitions || I.$CaptionTransitions; var rb = a.$BulletNavigatorOptions,
            W = a.$ArrowNavigatorOptions,
            ab = a.$ThumbnailNavigatorOptions,
            Q = !a.$UISearchMode,
            y, v = b.v(p, "slides", Q),
            cb = b.v(p, "loading", Q) || b.mb(f),
            Jb = b.v(p, "navigator", Q),
            ec = b.v(p, "arrowleft", Q),
            cc = b.v(p, "arrowright", Q),
            Hb = b.v(p, "thumbnavigator", Q),
            pc = b.l(v),
            oc = b.k(v),
            V, T = [],
            yc = b.yb(v);
        b.a(yc, function(a) { a.tagName == "DIV" && !b.j(a, "u") && T.push(a);
            b.G(a, (b.G(a) || 0) + 1) }); var s = -1,
            yb, ub, r = T.length,
            K = a.$SlideWidth || pc,
            J = a.$SlideHeight || oc,
            Yb = a.$SlideSpacing,
            Bb = K + Yb,
            Cb = J + Yb,
            dc = hb & 1 ? Bb : Cb,
            u = c.min(a.$Cols, r),
            ib, x, L, Ab, S = [],
            Sb, Ub, Qb, fc, Gc, P, E = a.$PauseOnHover,
            qc = a.$AutoPlayInterval,
            Xb = a.$SlideDuration,
            sb, db, gb, Tb = u < r,
            D = Tb ? a.$Loop : 0,
            Y, M, F = 1,
            O, B, R, vb = 0,
            wb = 0,
            H, bb, fb, Eb, w, U, z, Vb = new sc,
            Z, Nb = []; if (r) { if (a.$HWA) Mb = function(a, c, d) { b.lb(a, { $TranslateX: c, $TranslateY: d }) };
            P = a.$AutoPlay;
            h.Wb = hc;
            lc();
            b.A(p, "jssor-slider", d);
            b.G(v, b.G(v) || 0);
            b.s(v, "absolute");
            ib = b.Z(v, d);
            b.Zb(ib, v); if (eb) { fc = eb.$ShowLink;
                sb = eb.$Class;
                db = u == 1 && r > 1 && sb && (!b.Hd() || b.Pd() >= 8) } gb = db || u >= r || !(D & 1) ? 0 : a.$Align;
            Y = (u > 1 || gb ? hb : -1) & a.$DragOrientation; var xb = v,
                C = [],
                A, N, Fb = b.Nf(),
                kb = Fb.Rf,
                G, qb, Kb, tb;
            Fb.Md && b.bb(xb, Fb.Md, ([i, "pan-y", "pan-x", "none"])[Y] || "");
            U = new Dc; if (db) A = new sb(Vb, K, J, eb, kb);
            b.F(ib, U.Qb);
            b.tb(v, "hidden");
            N = Zb();
            b.bb(N, "backgroundColor", "#000");
            b.Bb(N, 0);
            b.Zb(N, xb.firstChild, xb); for (var pb = 0; pb < T.length; pb++) { var Ac = T[pb],
                    Cc = new Bc(Ac, pb);
                C.push(Cc) } b.O(cb);
            Eb = new Ec;
            z = new rc(Eb, U);
            b.c(v, "click", mc, d);
            b.c(p, "mouseout", b.cc(kc, p));
            b.c(p, "mouseover", b.cc(jc, p)); if (Y) { b.c(v, "mousedown", ac);
                b.c(v, "touchstart", vc);
                b.c(v, "dragstart", Ib);
                b.c(v, "selectstart", Ib);
                b.c(f, "mouseup", nb);
                b.c(f, "touchend", nb);
                b.c(f, "touchcancel", nb);
                b.c(j, "blur", nb) } E &= kb ? 10 : 5; if (Jb && rb) { Sb = new rb.$Class(Jb, rb, X(), jb());
                S.push(Sb) } if (W && ec && cc) { W.$Loop = D;
                W.$Cols = u;
                Ub = new W.$Class(ec, cc, W, X(), jb());
                S.push(Ub) } if (Hb && ab) { ab.$StartIndex = a.$StartIndex;
                Qb = new ab.$Class(Hb, ab);
                S.push(Qb) } b.a(S, function(a) { a.mc(r, C, cb);
                a.$On(o.jc, nc) });
            b.bb(p, "visibility", "visible");
            Gb(X());
            zb();
            a.$ArrowKeyNavigation && b.c(f, "keydown", function(b) { if (b.keyCode == 37) mb(-a.$ArrowKeyNavigation);
                else b.keyCode == 39 && mb(a.$ArrowKeyNavigation) }); var lb = a.$StartIndex; if (!(D & 1)) lb = c.max(0, c.min(lb, r - u));
            z.Rb(lb, lb, 0) } };
    k.$EVT_CLICK = 21;
    k.$EVT_DRAG_START = 22;
    k.$EVT_DRAG_END = 23;
    k.$EVT_SWIPE_START = 24;
    k.$EVT_SWIPE_END = 25;
    k.$EVT_LOAD_START = 26;
    k.$EVT_LOAD_END = 27;
    k.Gg = 28;
    k.$EVT_POSITION_CHANGE = 202;
    k.$EVT_PARK = 203;
    k.$EVT_SLIDESHOW_START = 206;
    k.$EVT_SLIDESHOW_END = 207;
    k.$EVT_PROGRESS_CHANGE = 208;
    k.$EVT_STATE_CHANGE = 209;
    var o = { jc: 1 };
    j.$JssorBulletNavigator$ = function(e, C) { var f = this;
        n.call(f);
        e = b.rb(e); var s, A, z, r, k = 0,
            a, m, j, w, x, h, g, q, p, B = [],
            y = [];

        function v(a) { a != -1 && y[a].id(a == k) }

        function t(a) { f.m(o.jc, a * m) } f.$Elmt = e;
        f.zc = function(a) { if (a != r) { var d = k,
                    b = c.floor(a / m);
                k = b;
                r = a;
                v(d);
                v(b) } };
        f.vc = function(a) { b.u(e, a) }; var u;
        f.mc = function(E) { if (!u) { s = c.ceil(E / m);
                k = 0; var o = q + w,
                    r = p + x,
                    n = c.ceil(s / j) - 1;
                A = q + o * (!h ? n : j - 1);
                z = p + r * (h ? n : j - 1);
                b.l(e, A);
                b.k(e, z); for (var f = 0; f < s; f++) { var C = b.Ff();
                    b.qf(C, f + 1); var l = b.hd(g, "numbertemplate", C, d);
                    b.s(l, "absolute"); var v = f % (n + 1);
                    b.z(l, !h ? o * v : f % j * o);
                    b.B(l, h ? r * v : c.floor(f / (n + 1)) * r);
                    b.F(e, l);
                    B[f] = l;
                    a.$ActionMode & 1 && b.c(l, "click", b.H(i, t, f));
                    a.$ActionMode & 2 && b.c(l, "mouseover", b.cc(b.H(i, t, f), l));
                    y[f] = b.bc(l) } u = d } };
        f.Wb = a = b.o({ $SpacingX: 10, $SpacingY: 10, $Orientation: 1, $ActionMode: 1 }, C);
        g = b.v(e, "prototype");
        q = b.l(g);
        p = b.k(g);
        b.Jb(g, e);
        m = a.$Steps || 1;
        j = a.$Rows || 1;
        w = a.$SpacingX;
        x = a.$SpacingY;
        h = a.$Orientation - 1;
        a.$Scale == l && b.A(e, "noscale", d);
        a.$AutoCenter && b.A(e, "autocenter", a.$AutoCenter) };
    j.$JssorArrowNavigator$ = function(a, g, h) { var c = this;
        n.call(c); var r, e, f, j;
        b.l(a);
        b.k(a); var p, m;

        function k(a) { c.m(o.jc, a, d) }

        function t(c) { b.u(a, c);
            b.u(g, c) }

        function s() { p.$Enable(h.$Loop || e > 0);
            m.$Enable(h.$Loop || e < r - h.$Cols) } c.zc = function(b, a, c) { if (c) e = a;
            else { e = b;
                s() } };
        c.vc = t; var q;
        c.mc = function(c) { r = c;
            e = 0; if (!q) { b.c(a, "click", b.H(i, k, -j));
                b.c(g, "click", b.H(i, k, j));
                p = b.bc(a);
                m = b.bc(g);
                q = d } };
        c.Wb = f = b.o({ $Steps: 1 }, h);
        j = f.$Steps; if (f.$Scale == l) { b.A(a, "noscale", d);
            b.A(g, "noscale", d) } if (f.$AutoCenter) { b.A(a, "autocenter", f.$AutoCenter);
            b.A(g, "autocenter", f.$AutoCenter) } };
    j.$JssorThumbnailNavigator$ = function(g, B) { var h = this,
            y, p, a, v = [],
            z, x, e, q, r, u, t, m, s, f, j;
        n.call(h);
        g = b.rb(g);

        function A(n, f) { var g = this,
                c, m, l;

            function q() { m.id(p == f) }

            function k(d) { if (d || !s.$LastDragSucceded()) { var a = e - f % e,
                        b = s.Nd((f + a) / e - 1),
                        c = b * e + e - a;
                    h.m(o.jc, c) } } g.jb = f;
            g.zd = q;
            l = n.ug || n.Lb || b.mb();
            g.Qb = c = b.hd(j, "thumbnailtemplate", l, d);
            m = b.bc(c);
            a.$ActionMode & 1 && b.c(c, "click", b.H(i, k, 0));
            a.$ActionMode & 2 && b.c(c, "mouseover", b.cc(b.H(i, k, 1), c)) } h.zc = function(b, d, f) { var a = p;
            p = b;
            a != -1 && v[a].zd();
            v[b].zd();!f && s.$PlayTo(s.Nd(c.floor(d / e))) };
        h.vc = function(a) { b.u(g, a) }; var w;
        h.mc = function(F, D) { if (!w) { y = F;
                c.ceil(y / e);
                p = -1;
                m = c.min(m, D.length); var h = a.$Orientation & 1,
                    n = u + (u + q) * (e - 1) * (1 - h),
                    j = t + (t + r) * (e - 1) * h,
                    B = n + (n + q) * (m - 1) * h,
                    o = j + (j + r) * (m - 1) * (1 - h);
                b.s(f, "absolute");
                b.tb(f, "hidden");
                a.$AutoCenter & 1 && b.z(f, (z - B) / 2);
                a.$AutoCenter & 2 && b.B(f, (x - o) / 2);
                b.l(f, B);
                b.k(f, o); var i = [];
                b.a(D, function(l, g) { var j = new A(l, g),
                        d = j.Qb,
                        a = c.floor(g / e),
                        k = g % e;
                    b.z(d, (u + q) * k * (1 - h));
                    b.B(d, (t + r) * k * h); if (!i[a]) { i[a] = b.mb();
                        b.F(f, i[a]) } b.F(i[a], d);
                    v.push(j) }); var E = b.o({ $AutoPlay: l, $NaviQuitDrag: l, $SlideWidth: n, $SlideHeight: j, $SlideSpacing: q * h + r * (1 - h), $MinDragOffsetToSlide: 12, $SlideDuration: 200, $PauseOnHover: 1, $PlayOrientation: a.$Orientation, $DragOrientation: a.$NoDrag || a.$DisableDrag ? 0 : a.$Orientation }, a);
                s = new k(g, E);
                w = d } };
        h.Wb = a = b.o({ $SpacingX: 0, $SpacingY: 0, $Cols: 1, $Orientation: 1, $AutoCenter: 3, $ActionMode: 1 }, B);
        z = b.l(g);
        x = b.k(g);
        f = b.v(g, "slides", d);
        j = b.v(f, "prototype");
        u = b.l(j);
        t = b.k(j);
        b.Jb(j, f);
        e = a.$Rows || 1;
        q = a.$SpacingX;
        r = a.$SpacingY;
        m = a.$Cols;
        a.$Scale == l && b.A(g, "noscale", d) };

    function q(e, d, c) { var a = this;
        m.call(a, 0, c);
        a.Ld = b.kd;
        a.qd = 0;
        a.rd = c } j.$JssorCaptionSlideo$ = function(v, j, u) { var a = this,
            w, n = {},
            p = j.$Transitions,
            r = j.$Controls,
            e = new m(0, 0),
            t = [],
            o = [],
            f = [];
        m.call(a, 0, 0);

        function q(d, c) { var a = {};
            b.a(d, function(d, f) { var e = n[f]; if (e) { if (b.Fd(d)) d = q(d, c || f == "e");
                    else if (c)
                        if (b.Vb(d)) d = w[d];
                    a[e] = d } }); return a }

        function s(e, c) { var a = [],
                d = b.yb(e);
            b.a(d, function(d) { var h = b.j(d, "u") == "caption"; if (h) { var e = b.j(d, "t"),
                        g = p[b.ac(e)] || p[e],
                        f = { $Elmt: d, Ac: g };
                    a.push(f) } if (c < 5) a = a.concat(s(d, c + 1)) }); return a }

        function l(c, d, e) { var a = 0;!b.a(c, function(b, c) { a = c; return b.Q > e }) && a++;
            c.splice(a, 0, d) }

        function z(k, n, e) { var a; if (r) { var j = b.j(k, "c"); if (j) { var h = r[b.ac(j)]; if (h) { a = { Q: h.r, kb: 0, ic: [], Gc: [], Qd: 0 };
                        l(f, a, h.b) } } } b.a(n, function(g) { var f = b.o(d, {}, q(g)),
                    j = b.Jc(f.$Easing);
                delete f.$Easing; if (f.$Left) { f.D = f.$Left;
                    j.D = j.$Left;
                    delete f.$Left } if (f.$Top) { f.I = f.$Top;
                    j.I = j.$Top;
                    delete f.$Top } var p = { $Easing: j, $OriginalWidth: e.R, $OriginalHeight: e.T },
                    n = new m(g.b, g.d, p, k, e, f),
                    h = t[g.b]; if (h == i) { h = { Q: g.b, ic: [] };
                    t[g.b] = h;
                    l(o, h, g.b) } h.ic.push(n); if (a && g.b + g.d > a.Q) { a.kb = c.max(a.kb, g.b + g.d);
                    a.Gc.push(n) } e = b.ce(e, f) }); if (a && a.Gc.length) { var g = new m(a.Q, a.kb - a.Q, { Dc: a.kb - a.Q, Pe: d, Ye: d });
                b.a(a.Gc, function(a) { g.gb(a, d) });
                g.$Shift(a.kb - a.Q);
                a.ic = [g] } return e }

        function y(a) { b.a(a, function(f) { var a = f.$Elmt,
                    e = b.l(a),
                    d = b.k(a),
                    c = { $Left: b.z(a), $Top: b.B(a), D: 0, I: 0, $Opacity: 1, $ZIndex: b.G(a) || 0, $Rotate: 0, $RotateX: 0, $RotateY: 0, $ScaleX: 1, $ScaleY: 1, $TranslateX: 0, $TranslateY: 0, $TranslateZ: 0, $SkewX: 0, $SkewY: 0, R: e, T: d, $Clip: { $Top: 0, $Right: e, $Bottom: d, $Left: 0 } };
                c.bd = c.$Left;
                c.dd = c.$Top;
                z(a, f.Ac, c) }) }

        function B(g, f, h) { var c = g.b - f; if (c) { var b = new m(f, c);
                b.gb(e, d);
                b.$Shift(h);
                a.gb(b) } a.Me(g.d); return c }

        function A(g) { var c = e.uc(),
                d = 0;
            b.a(g, function(e, g) { e = b.o({ d: u }, e);
                B(e, c, d);
                c = e.b;
                d += e.d; if (!g || e.t == 2) { a.qd = c;
                    a.rd = c + e.d } b.a(f, function(a) { if (a.kb > e.b) a.Qd += e.d }) }) }

        function g(j, e, a) { var f = e.length; if (f > 4)
                for (var k = c.ceil(f / 4), d = 0; d < k; d++) { var h = e.slice(d * 4, c.min(d * 4 + 4, f)),
                        i = new m(h[0].Q, a || 0);
                    g(i, h, a);
                    j.gb(i, a) } else b.a(e, function(c) { b.a(c.ic, function(b) { b.$Shift(c.Qd || 0);
                        j.gb(b, a) }) }) } a.Ld = function() { a.E(-1, d) };
        w = [h.$Swing, h.$Linear, h.$InQuad, h.$OutQuad, h.$InOutQuad, h.$InCubic, h.$OutCubic, h.$InOutCubic, h.$InQuart, h.$OutQuart, h.$InOutQuart, h.$InQuint, h.$OutQuint, h.$InOutQuint, h.$InSine, h.$OutSine, h.$InOutSine, h.$InExpo, h.$OutExpo, h.$InOutExpo, h.$InCirc, h.$OutCirc, h.$InOutCirc, h.$InElastic, h.$OutElastic, h.$InOutElastic, h.$InBack, h.$OutBack, h.$InOutBack, h.$InBounce, h.$OutBounce, h.$InOutBounce, h.$GoBack, h.$InWave, h.$OutWave, h.$OutJump, h.$InJump]; var C = { $Top: "y", $Left: "x", $Bottom: "m", $Right: "t", $Rotate: "r", $RotateX: "rX", $RotateY: "rY", $ScaleX: "sX", $ScaleY: "sY", $TranslateX: "tX", $TranslateY: "tY", $TranslateZ: "tZ", $SkewX: "kX", $SkewY: "kY", $Opacity: "o", $Easing: "e", $ZIndex: "i", $Clip: "c" };
        b.a(C, function(b, a) { n[b] = a });
        y(s(v, 1));
        g(e, o); var x = j.$Breaks || [],
            k = [].concat(x[b.ac(b.j(v, "b"))] || []);
        k.push({ b: e.Eb(), d: k.length ? 0 : u });
        A(k);
        g(a, f, a.Eb());
        a.E(-1) }
})(window, document, Math, null, true, false)