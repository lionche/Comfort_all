var NISLFuzzingFunc = function(e) {
    var u = "function" == typeof require && require;
    var t = e.get("declarations").value;
    return !(!e.get("body").isScope() && !e.get("body").isContext());
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
