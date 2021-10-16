var NISLFuzzingFunc = function(t) {
    var e = this.x, n = this.y, i = this.z, r = this.w, s = t.x, o = t.y, a = t.z, h = t.w;
    return this.x = e * h + r * s + n * a - i * o, this.y = n * h + r * o + i * s - e * a, 
    this.z = i * h + r * a + e * o - n * s, this.w = r * h - e * s - n * o - i * a, 
    this;
}
;
var NISLParameter0 = 7668;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
