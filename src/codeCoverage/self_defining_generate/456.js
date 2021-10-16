var NISLFuzzingFunc = function(t, e) {
    var r = e.x, i = e.y, n = e.z, o = t.x, a = t.y, s = t.z, h = t.w, l = o * o + a * a + s * s + h * h, u = i * o + n * a + o * s + h * h, c = n * i + o * s + a * h + s * l;
    return u < c ? u = (l = c) < 1 ? 1 : c : u > 2 && (u = 2 * u * (u * (u * (u * u) - a * u) + a * (a * u - i * u) + i * (i * u - n * u) + n * (n * u - i * a) + n * (n * a - i * s)), 
    [ 3, 1, 0 ];
}
;
var NISLParameter0 = undefined;
var NISLParameter1 = -80036431.15489745321858506;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
