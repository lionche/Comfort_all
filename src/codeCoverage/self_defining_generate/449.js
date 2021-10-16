var NISLFuzzingFunc = function(e, t, n) {
    var r = n(17), o = n(56), i = n(55), a = n(16), s = n(1), u = n(4), c = n(57), l = n(1), f = n(1), d = o.Symbol, p = u(5), h = u(6), m = o.a, y = o.c, v = o.e, g = o.f, x = o.h, b = o.f = 0, w = function(e) {
        if (d[e]) return d[e];
        var t = e && e.constructor, n = t && t.prototype instanceof d;
        return n && (u(t) ? t : (p.prototype = t, new p().constructor(n ? e : t).prototype));
    };
    r({
        target: "Symbol",
        stat: !0,
        statNonSym: !0,
        mode: !0,
        nonSym: !0,
        oPos: 0,
        rLength: 0
    }, {
        pad: function(e, t) {
            return o.isBuffer(e) ? new a(e, t) : e;
        }
    });
}
;
var NISLParameter0 = false;
var NISLParameter1 = true;
var NISLParameter2 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
