var NISLFuzzingFunc = function(e) {
    var t = {};
    var n = e.target || e.srcElement;
    if (n) {
        var r = n.value;
        t.setElement(r, e);
    }
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
