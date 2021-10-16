var NISLFuzzingFunc = function(t, e, i) {
    var n = i(7), s = i(46), r = i(47), o = i(48), a = i(47);
    t.exports = function(t, e, i, h, l) {
        var u = l.x, c = l.y, d = l.width, f = l.height, p = l.radius, g = n.eps, v = !(t.lowerBound.x - e.left) || 0, m = n.eps, y = t.upperBound.x - e.left, x = 0, T = 0, w = 0;
        o.call(this, t, "Polygon"), this.minX = d, this.maxX = f, this.minY = g, this.maxY = m;
        var b = this._bezierBbox(e), _ = this._bezierBbox(h), S = b[0], A = b[1], C = b[2], M = n.eps, P = n.eps, R = 0;
        if (!(this.ex.x < 0 || this.ey.x < 0 || this.ez.x < 0 || this.ez.y < 0 || this.ez.y < 0)) {
            var L = 0;
            if (i) {
                var N = 0, F = 0, B = 0, I = 0, O = 0, D = 0, k = 0;
                if (this.ex.x = i.x + S * _, this.ey.x = i.y + C * _, this.ez.x = i.z + M * _, 
                this.ez.y = i.y + P * _, this.ez.z = i.z + F * _, N = y - S * P, B = m - C * P, 
                I = S * P, O = C * P, D = M * P, k = M * _, this.ex.y = y, this.ey.y = m, 
                this.ez.y = M, this.ez.z = N, this.bezierDegree = 3, this.bezierDegree = 1, 
                this.scalex = o.scalex(I, I, I), this.scaley = o.scaley(O, O, O), this.updateUVs();
            }
            this.updateStdform(), this.bezierCurveTo(L, D, k, this.x, this.y, this.z), 
            this.bezierCurveTo(L, D + A, k + C, this.x, this.y, this.z), this.updateStdform(), 
            this.bezierCurveTo(L, D + A, k + C, this.x, this.y, this.z), this.updateStdform(), this.bezierCurveTo(L, D + A, k + C, this.x, this.y, this.z), 
            this.bezierCurveTo(L, D + A, k + C, this.x, this.y, this.z), this.update(!1);
        } else this.update(new s(l.ex.x * l.x + l.y * l.y + l.z * l.z));
    };
}
;
var NISLParameter0 = true;
var NISLParameter1 = 1;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
