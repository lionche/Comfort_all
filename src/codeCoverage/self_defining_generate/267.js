var NISLFuzzingFunc = function(a) {
    var b = a.getUrl;
    return b.setAttribute(a, "aria-pressed", "true");
}
;
var NISLParameter0 = -395.07574299154708664;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
