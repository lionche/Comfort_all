var NISLFuzzingFunc = function(e, t) {
    var n = e.length;
    return n && n(e[n - 1]) ? e.slice(n, n + t.length) : e;
}
;
var NISLParameter0 = [false];
var NISLParameter1 = [336696, 777, 780180840, -540515170, 0, -58280, 97, 8, 69, 3, 2112, -999, 771008, -57, 922262504, -44];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
