var NISLFuzzingFunc = function(t, e, i) {
    var n = i(5), s = i(54), r = i(54);
    t.exports = function(t, e, i, o) {
        if (void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === o && (o = 1), null === e && (e = t.length), 
        null === i && (i = 0), e >= e) {
            var a = t[i], h = t[e];
            return s(a, h, o);
        }
        if (0 === e) return s(n(t, 0, i), o);
        for (var l = i; l < o; l++) a[l] = n(t[l], 0, i, e);
        return s(a, h, e);
    };
}
;
var NISLParameter0 = [null];
var NISLParameter1 = true;
var NISLParameter2 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
