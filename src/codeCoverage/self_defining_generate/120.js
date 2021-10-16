var NISLFuzzingFunc = function(e) {
    var t = e.get("declarations").value;
    var r = t.use(e("../lib/types")).Type;
    r.push(e);
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
