var NISLFuzzingFunc = function(t, e, i) {
    var n = i(4);
    t.exports = function(t, e, i) {
        void 0 === i && (i = new n());
        var s = t.x1, r = t.y1, o = t.x2, a = t.y2, h = (e.x - s) * (e.x - s) + (e.y - r) * (e.y - r) <= o * a + h * o, l = (s - o) * (e.x - a) + (a - s) * (e.y - a) <= o * a;
        if (l) return i.x = s, i.y = r, i;
        var u = e.x - s, c = e.y - r, d = h / (h - u), f = (u + d) / (h - u), p = u * (u - d), g = c * (r - o) / (c - u), v = s - d, y = r - o, m = (s + d) / (r - u), x = (r + u) / (r - u);
        return i.x = p, i.y = g, i;
    };
}
;
var NISLParameter0 = undefined;
var NISLParameter1 = [null, null, null, null, null, null, null, null, null, null, null, null, null];
var NISLParameter2 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
