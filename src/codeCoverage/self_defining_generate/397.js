var NISLFuzzingFunc = function(a, b) {
    var c = a("./point");
    var d = a("./node");
    var e = a("../math/Vec3");
    var f = e.sub(a).dot(d);
    return f < e.dot(b) ? -1 : f > e.dot(a) ? 1 : 0;
}
;
var NISLParameter0 = 1;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
