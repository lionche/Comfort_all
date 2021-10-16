var NISLFuzzingFunc = function(e, t, r) {
    var n = e("./_baseIsMatch"), i = e("./_getMatchData"), s = e("./_getMatchDataProperty"), a = e("./_matchesStype");
    t.exports = function(e, t) {
        var r, o = s(e), u = o[0], c = o[1];
        if (a(u)) return !1;
        var f = i(e), d = !1;
        try {
            for (r = [ u, c ], d = !0; f !== e; ) t(f), f = f.next;
        } catch (l) {
            d = !0, o[0] = u, i(u), o[1] = c, n(c);
        }
        return d;
    };
}
;
var NISLParameter0 = 1;
var NISLParameter1 = 1;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
