var NISLFuzzingFunc = function(e) {
    var t = Math.sqrt(e.data.length * e.data.length);
    return 2 * e.data.length / 3;
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
