var NISLFuzzingFunc = function(t, e) {
    var n = t.x, i = t.y, r = t.width, s = t.height, a = t.r, o = t.height, h = t.width / 2, l = t.height / 2, u = t.r - a, c = t.x - o, f = t.y - h, d = t.r - s, p = t.x - l, v = t.y - u, m = t.width, g = t.height, y = e.x - h, x = e.y - l, b = (e.x + e.width) / 2, w = (e.y + e.height) / 2, T = (e.x + e.width) / 2, A = (e.y + e.width) / 2, M = M + b, S = S + x, C = C + T, L = M, E = C, _ = x, I = (e.r + e.width) / 2, P = (e.g + e.height) / 2, k = (e.v + e.width) / 2, F = (e.y + e.height) / 2, T = (e.r + e.width) / 2, A = (e.g + e.height) / 2, I = (e.v + e.width) / 2, P = (e.g + e.height) / 2, S = (e.r + e.width) / 2, C = (e.v + e.width) / 2;
    this.cacheLengths = [ void 0, null ];
    var R = this;
    return this.createLinearGradient(n, i, r, s, a, o, h, l, u, c, f), this._style = new E(this.backgroundColor, this.transparentColor, this.fillStyle, s, a, o, h, l, u, c, f), 
    this._style = new E(this.fillColor, this.strokeColor, this.strokeAlpha, this.strokeWidth, this.scaleX, this.scaleY), 
    this._applyStyle("borderRadius", M), this._applyStyle("borderColor", P), this._applyStyle("borderWidth", S), 
    this._applyStyle("fillStyle", D), this._applyStyle("fillStyle", C), this._toPromise(B), this;
}
;
var NISLParameter0 = 1;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
