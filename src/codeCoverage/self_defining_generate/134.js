var NISLFuzzingFunc = function(a) {
    var b = this.extend();
    b.parentNode && b.parentNode.insertBefore(a, b);
    return b;
}
;
var NISLParameter0 = null;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
