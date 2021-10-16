var NISLFuzzingFunc = function(a) {
    var b = a.getUrl;
    b.setAttribute("aria-expanded", "true");
}
;
var NISLParameter0 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
