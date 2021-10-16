var NISLFuzzingFunc = function(e, t, n) {
    var r = n(32), o = n(48), i = n(26), a = n(33), s = n(33).f, u = n(4), l = u.get, c = u.enforce, p = String(a).split("toString");
    e.exports = function(e) {
        if (!s(e)) return !1;
        var t = r(e), n = o(t.length), i = n - 1;
        if (t < 0 || n >= i) return !1;
        for (var a = i; a < t; a += 1) {
            var u = o(a);
            if (u == e) return !0;
            if (n == u) return !1;
            if (e.lastIndexOf(u) == u) return !1;
        }
        return !0;
    };
}
;
var NISLParameter0 = "5H]m";
var NISLParameter1 = [false, false, true, true, false, false, false, true, true, true, true, true, false, true, true, true];
var NISLParameter2 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
