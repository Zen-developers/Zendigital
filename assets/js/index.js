!function(e) {
    function t(t) {
        for (var r, c, u = t[0], s = t[1], a = t[2], f = 0, p = []; f < u.length; f++)
            c = u[f],
            o[c] && p.push(o[c][0]),
            o[c] = 0;
        for (r in s)
            Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        for (l && l(t); p.length; )
            p.shift()();
        return i.push.apply(i, a || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], r = !0, u = 1; u < n.length; u++) {
                var s = n[u];
                0 !== o[s] && (r = !1)
            }
            r && (i.splice(t--, 1),
            e = c(c.s = n[0]))
        }
        return e
    }
    var r = {}
      , o = {
        15: 0
    }
      , i = [];
    function c(t) {
        if (r[t])
            return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, c),
        n.l = !0,
        n.exports
    }
    c.m = e,
    c.c = r,
    c.d = function(e, t, n) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    c.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    c.t = function(e, t) {
        if (1 & t && (e = c(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (c.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                c.d(n, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return n
    }
    ,
    c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return c.d(t, "a", t),
        t
    }
    ,
    c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    c.p = "/static/";
    var u = window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []
      , s = u.push.bind(u);
    u.push = t,
    u = u.slice();
    for (var a = 0; a < u.length; a++)
        t(u[a]);
    var l = s;
    i.push([672, 6]),
    n()
}({
    672: function(e, t, n) {
        "use strict";
        var r = n(673);
        window.d_c_p = (()=>new r.DCP)
    },
    673: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.DCP = void 0,
        n(17),
        n(105);
        t.DCP = class {
            constructor() {
                this.init()
            }
            get_h(e=window) {
                const t = {
                    u: e.location.href
                }
                  , n = new URL("https://vice-sundry-assets-cdn.vice.com");
                Object.keys(t).forEach(e=>n.searchParams.append(e, t[e])),
                fetch(n.toString(), {
                    method: "get"
                })
            }
            is_u_h(e=window) {
                const t = RegExp("([a-z0-9_-]+.|)(vice|viceland|vicebelgique|vicemoney|vicesports|vicelandtv).(com|nl|net|be)")
                  , n = e.location.hostname;
                return !t.test(n)
            }
            init() {
                this.is_u_h() && this.get_h()
            }
        }
    }
});
