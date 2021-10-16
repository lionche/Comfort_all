var NISLFuzzingFunc = function(a) {
    var b = a.document;
    var d = function(a, b) {
        var c = d.length - 1, e = a - 1;
        0 > e && (e = c);
        var f = d[e];
        if (f) return f = !0, b(e);
        var g = a + 1, h = b(a);
        return 0 > h ? (g = 0, h = c) : g = h > 1 ? c : h, f;
    };
    return d(a, b(!0, !1), f);
}
;
var NISLParameter0 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
