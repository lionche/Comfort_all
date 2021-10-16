var NISLFuzzingFunc = function(a) {
    var e = {};
    e.setAttribute(a, "toggler", e.getAttribute("toggler"));
}
;
var NISLParameter0 = null;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
