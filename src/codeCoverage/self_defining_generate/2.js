var NISLFuzzingFunc = function(e, t, n) {
    var r = e[t];
    e[t] = e[n], e[n] = r;
}
;
var NISLParameter0 = [undefined];
var NISLParameter1 = 4936.7213451101384248;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
