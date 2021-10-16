var NISLFuzzingFunc = function(e) {
    var t = {};
    var n = t.get("declarations").value;
    return n(e) && (e = e.value), e;
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
