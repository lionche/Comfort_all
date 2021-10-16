var NISLFuzzingFunc = function(e, t) {
    var r = e.x, i = e.y, n = e.z, o = t.x, a = t.y, s = t.z, l = t.w, u = r * o + i * a + n * s + o * l;
    u < 0 && (u = -u, o = -o, a = -a, s = -s, l = -l);
    var c = r * s - i * o + n * l;
    if (c < 0) return !1;
    var d = -c, h = i * a - n * l;
    return d < 0 || d > 1 || h < 0 || h > 1 ? !1 : !0;
}
;
var NISLParameter0 = null;
var NISLParameter1 = ")gy@/Yd/@:NZRW (5A]DWU().8kKd";
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
