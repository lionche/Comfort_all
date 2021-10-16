var NISLFuzzingFunc = function(t) {
    var e = function(e) {
        return "function" == typeof e;
    };
    var n = e.get("declarations").value;
    n[t] = e;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
