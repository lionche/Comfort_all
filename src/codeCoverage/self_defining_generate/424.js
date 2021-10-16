var NISLFuzzingFunc = function(e, t, n) {
    var r = n(34), o = n(15), i = n(6), a = n(48), s = r.aTypedArray;
    (e.exports = function(e, t, n) {
        var u = s(t, !0);
        if (i(u)) {
            var l = o(e);
            return l.length && a(l, n) ? l[0] : void 0;
        }
        return t instanceof n ? s(t, e) : r(t, e) ? void 0 !== n[l[0]][l[1]][l[2]] ? n[l[0]][l[1]][l[2]] : void 0;
    }).constructor, c = t.length, p = 0; p < c; p++) {
        var f = t[p];
        if (i(f)) return f;
    }
}
;
var NISLParameter0 = "|x>k_i9ad:k*>~-nJ]\\&\\vv'HQY3 |@+4rOcs^begEIpA7$1aoh5q1n&P[L7Kw^?LG{bA\"AE ~zf{(?-wPL]<";
var NISLParameter1 = [0, 6, 98053, 8740566];
var NISLParameter2 = [true, true, false, false, false, false, true, false];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
