var NISLFuzzingFunc = function(e, t, r) {
    var i = e.style;
    var h = a[l++];
    var o = e.document;
    var l;
    var s = "function" == typeof require && require;
    var n = r.call(e.constructor);
    var a = n[t], u = n[r], c = n[o], p = n[i];
    return s(e, t, r, a, u, c, p) && (s = e[t], l(e, t, r, a, u, c, p)) ? (c = n[r], 
    s(e, t, r, a, u, c, p)) : !1;
}
;
var NISLParameter0 = [0, -64, -1, 37441, -176912, -1, -83751];
var NISLParameter1 = [null, null, null, null, null, null, null, null];
var NISLParameter2 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
