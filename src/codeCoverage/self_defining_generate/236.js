var NISLFuzzingFunc = function(t, e, i, n, o, s) {
    var r = Object.create(null);
    var a = n;
    if (e) return this.on(t, e, i, n, o, s);
    if (null != a) for (var h = Object.keys(n), l = 0; l < h.length; l++) {
        var u = h[l];
        null != u && null != n[u] && r.isObject(n[u]) && n[u].index === a[u].index && (a[u] = n[u]);
    }
    return this;
}
;
var NISLParameter0 = 1;
var NISLParameter1 = 1;
var NISLParameter2 = undefined;
var NISLParameter3 = [80.8925680590969902];
var NISLParameter4 = [-8210.9042455862775176, undefined, undefined, true];
var NISLParameter5 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2, NISLParameter3, NISLParameter4, NISLParameter5);
print(NISLCallingResult);
