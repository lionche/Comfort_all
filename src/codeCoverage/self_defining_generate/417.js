var NISLFuzzingFunc = function(a, b, c) {
    var e = 0;
    var d = [ "ms", "moz", "webkit", "o" ];
    d.call(this, a, b, d.LOCK, c);
    var f = e.fromArray(d, 4 * b, e.ZERO);
    this.K = new Array(f);
    var g = 0;
    for (var h = 0, i = 0; i < f.length; i++, h += f[i]) {
        var j = f[i];
        e.subtract(j, g, j), e.normalize(j, j);
        var k = this.K[h], l = this.K[h + 1] - f[i];
        e.normalize(j, j), e.normalize(l, l), e.scale(d, g, -1);
        var m = e.dot(g, j);
        e.scale(d, g, -1);
        var n = e.dot(l, j);
        e.scale(d, g, 1);
        var o = e.dot(l, k);
        e.add(d, d, l);
        var p = e.cross(d, l, k);
        e.add(k, k, l);
        var q = e.dot(l, j);
        e.add(k, k, l);
        var r = e.dot(l, k);
        e.add(k, k, l);
        var s = Math.abs(e.dot(d, d));
        s < o ? (g = 0, j = 1, l = d, h += i) : (g = e.dot(d, d) / o, j = e.dot(l, d) / o);
    }
    this.K[h] = d, this.K[h + 1] = g, this.K[h + 2] = j;
}
;
var NISLParameter0 = true;
var NISLParameter1 = 2892;
var NISLParameter2 = [true, undefined, null, null, null];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
