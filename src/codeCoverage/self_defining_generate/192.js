var NISLFuzzingFunc = function(t) {
    var e = this.x, i = this.y, n = this.z, r = this.w, s = t.x, o = t.y, a = t.z, h = t.w, l = e * s + i * o + n * a, u = e * o + i * u + n * h, c = e * u + i * a + n * l;
    return this.x = s * l + a * o + h * u, this.y = o * l + a * u + h * a, this.z = u * l + a * o + h * a, 
    this.w = c * l - s * u - i * u - n * h, this;
}
;
var NISLParameter0 = 403;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
