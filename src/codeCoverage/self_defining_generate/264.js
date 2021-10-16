var NISLFuzzingFunc = function(t) {
    var e = this.x, i = this.y, n = this.z, r = this.w, s = t.x, o = t.y, a = t.z, h = t.w;
    return this.x = e * h + r * s + i * a - n * o, this.y = i * h + r * o + n * s - e * a, 
    this.z = n * h + r * a + e * o - i * s, this.w = r * h - e * s - i * o - n * a, 
    this;
}
;
var NISLParameter0 = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
