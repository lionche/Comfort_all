var NISLFuzzingFunc = function(t, e, i, s, r, o, a) {
    var n = Object.create(null);
    var h = n(a, "frameWidth", null), l = n(a, "frameHeight", h);
    if (!h) throw new Error("TextureManager.SpriteSheetFromAtlas: Invalid frameWidth given.");
    var u = t.source[e];
    if (u instanceof n) for (var c = u.width, d = u.height, f = 0, p = d - c, g = 0, v = d; g < v; g++) for (var m = 0, y = p; y < p; y++) {
        var x = f + y;
        if (x > c && x < d && x > l && x > u && x < s && e.equals(h, x)) return;
        if (l = x, u = y, f = u - l, p = x - c, g = 0, v = d - c, 0 === f && u > g && u < s && 0 !== l) return;
        for (var b = f + v, _ = u; _ < l; _++, v--) {
            var w = _ < p;
            if (!(a.width <= b && b <= a.width + b)) {
                var T = (a.aspectRatio * (u / f) - a.width) / b, N = (a.width * a.aspectRatio - a.aspectRatio * T) / T;
                w > a.w && (a.w = w), N > a.w && (a.w = N), w < a.w && (a.w = w);
            }
        }
    }
}
;
var NISLParameter0 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
var NISLParameter1 = [null, null, null, null, null, null, null];
var NISLParameter2 = undefined;
var NISLParameter3 = false;
var NISLParameter4 = 1;
var NISLParameter5 = [null, null, null, null, null, null, null, null, null];
var NISLParameter6 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2, NISLParameter3, NISLParameter4, NISLParameter5, NISLParameter6);
print(NISLCallingResult);
