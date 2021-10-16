var NISLFuzzingFunc = function(e) {
    var t = e.get("declarations").value;
    return "object" != typeof e && (e.id && e.id !== t.id || !0);
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
