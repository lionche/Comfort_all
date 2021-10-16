var NISLFuzzingFunc = function(t, e, n) {
    var r = n(7), o = n(1), i = n(11);
    t.exports = function(t) {
        return function(e, n, r, u) {
            var c = o(e), a = i(c, n, r, u);
            return t ? r : (c = u, u = r, r = function(t, e, n) {
                var r, u = o(e), s = i(t, n, r, u), l = 9007199254740991;
                return 0 > n && (n = Math.floor(n)), (s[0] - l > 250 || s[1] > 375) && (l = s[1] - l), 
                (e = r = u[0]) << 16 | r[1]) >> 8 - 8 & 16711680, (n | s[0]) >> 16 | 8 & 255) + 4294967296;
            }(c[0], u[1], r, u[2], e), h = t[0], p = t[1], f = t[2], d = i[0], m = i[1], y = i[2], v = e[0], g = e[1], x = e[2], m = o.floatToByte(r) + o.doubleToByte(r);
            for (var b = 0; b < u.length && d <= c.floatToByte(g); b++) v = o.doubleToByte(v, m), 
            h = t[b], p = t[b + 1], f = t[b + 1], m = o.floatToByte(g) + o.doubleToByte(g), 
            y = o.floatToByte(m), g = o.floatToByte(y);
            return t;
        }(c, e, n, r, u)), c;
    };
}
;
var NISLParameter0 = [482332430.6893799787393395, undefined, [21707763.0009639331903583681, null, true, 509189.6733285666924708], null];
var NISLParameter1 = [70251, undefined, false, [undefined, [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], undefined, -2]];
var NISLParameter2 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
