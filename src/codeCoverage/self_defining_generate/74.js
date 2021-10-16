var NISLFuzzingFunc = function(e) {
    var t = e.get("declarations").value;
    var r = t.use(e("../lib/types")).Type;
    var n = r.def;
    var i = n[e];
    return i ? (Array.isArray(i) || (i = [ i ]), i.push({
        name: e,
        fn: t,
        opt: i
    }), !0) : !1;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
