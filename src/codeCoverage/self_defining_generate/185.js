var NISLFuzzingFunc = function(e) {
    var t = this;
    var n = e.target || e.srcElement;
    return n && n.value === t.value;
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
