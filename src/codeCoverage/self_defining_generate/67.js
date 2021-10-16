var NISLFuzzingFunc = function(e) {
    var t = this;
    var n = e.x, i = e.y, r = e.width, o = e.height, a = e.radius, s = e.arotation;
    return t(n) ? (n[0] = r, n[1] = i, n[2] = -o, n[3] = s, n) : new e(r, -o, o, s);
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
