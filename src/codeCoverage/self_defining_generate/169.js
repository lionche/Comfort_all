var NISLFuzzingFunc = function(e) {
    var t = this;
    var i = e.target.result;
    if (i) {
        var n = i.value.toString();
        i.setValue(n, t);
    } else i.setValue(e.target.value);
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
