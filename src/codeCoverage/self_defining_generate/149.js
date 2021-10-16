var NISLFuzzingFunc = function(e, t) {
    var r = Object.create(null);
    if (e.map) return e.map(t);
    for (var n = [], i = 0; i < e.length; i++) {
        var o = e[i];
        if ("string" == typeof o) n.push(o); else if ("string" == typeof o.path) {
            var a = o.path;
            if (Array.isArray(a)) {
                for (var s = 0; s < a.length; s++) n.push(a[s]);
            } else for (var l = 0; l < a.length; l++) n.push(a[l]);
        } else for (var u = 0; u < o.length; u++) n.push(o[u]);
    }
    return n;
}
;
var NISLParameter0 = [false, false, true, true, true, true, false, true, false, true, true, false, false, true, true, false];
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
