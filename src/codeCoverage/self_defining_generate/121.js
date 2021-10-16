var NISLFuzzingFunc = function(e) {
    var t = {};
    return t.deprecated("Numerics.random()", "Numerics.random()"), e * Math.floor(Math.random() * t);
}
;
var NISLParameter0 = 165141889.6473383260778631;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
