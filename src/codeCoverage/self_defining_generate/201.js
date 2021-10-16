var NISLFuzzingFunc = function(t, e) {
    var i = t.x, n = t.y, s = t.z, r = t.w, h = e.x, o = e.y, a = e.z, u = e.w;
    return this.x = i * u + r * h + s * o - n * a, this.y = n * u + r * a + s * h, this.z = i * u + r * o + s * a, 
    this.w = n * u + r * h + s * o - i * a, this;
}
;
var NISLParameter0 = 21919166;
var NISLParameter1 = 431;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
