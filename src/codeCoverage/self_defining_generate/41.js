var NISLFuzzingFunc = function(e, t, r) {
    var n = e("./_export"), i = e("./_core"), s = e("./_fails");
    t.exports = function(e, t) {
        for (var r, a = i(e), o = s(a), u = n(a), l = u.length, c = 0; l > c; ) if (o[r = u[c++]] === t) return r;
    };
}
;
var NISLParameter0 = 1;
var NISLParameter1 = undefined;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
