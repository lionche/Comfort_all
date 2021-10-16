var NISLFuzzingFunc = function(a, b) {
    var c = a.getAttribute("data-mce-bogus");
    if (c) {
        var d = b || a.getAttribute("data-mce-bogus");
        c = c && a.getAttribute("data-mce-bogus") || "";
    }
    return d;
}
;
var NISLParameter0 = true;
var NISLParameter1 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
