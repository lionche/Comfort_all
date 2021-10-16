var NISLFuzzingFunc = function(e, t) {
    var n = t.n(e), r = t.i(e), i = t.v(e), s = t.w(e), o = t.f(e), u = t.t(e);
    return n % 10 == 1 && n % 100 >= 2 && n % 100 <= 4 && (o = o.concat(n, [ o ]), i = i.concat(n, [ o ]), 
    s = s.concat(n, [ o ]), {
        v: n,
        n: o,
        k: r,
        i: i,
        v: n,
        k: r,
        f: i
    };
}
;
var NISLParameter0 = -3266856003;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
