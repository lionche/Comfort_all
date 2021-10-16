var NISLFuzzingFunc = function(e, t, n) {
    var r = e("../geometry/Vector");
    var o = e("./Point");
    var i = t.layer, s = i.world;
    if (0 !== s.alpha) {
        var a = s.getTileTextureCoordinates(i.index);
        if (!o(a)) return;
        var l = s.width, c = s.height, u = a.x, h = a.y, d = l / 2, p = c / 2, f = a.width / s.tileWidth, m = a.height / s.tileHeight, g = (a.x + u) / s.tileWidth, v = (a.y + h) / s.tileHeight;
        if (!o(d)) {
            var b = s.getTileTextureCoordinates(i.index);
            if (!o(b)) {
                var y = (b.x - u) * l, _ = (b.y - h) * c;
                u = Math.sqrt(Math.pow(y, 2) + Math.pow(v, 2)), h = Math.pow(y, 2) + Math.pow(v, 2)), 
                d = -1;
            }
        }
        var x = u, b = h, _ = Math.sqrt(Math.pow(l, 2) + Math.pow(v, 2) + Math.pow(v, 2)), w = _ * Math.cos(w), k = _ * Math.sin(w), T = a.x + p * w, A = a.y + f * h, M = s.x - d, S = s.y - v;
        return n.x = T * M, n.y = S * M, n;
    }
    return n.width = u, n.height = h, n.tileWidth = l, n.tileHeight = c, n;
}
;
var NISLParameter0 = 1;
var NISLParameter1 = 1;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
