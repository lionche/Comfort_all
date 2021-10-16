var NISLFuzzingFunc = function(e) {
    var t = e.get("declarations").value;
    var r = t.use(e("../lib/types")).Type;
    return r[e] || (r[e] = new t(e)), r[e];
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
