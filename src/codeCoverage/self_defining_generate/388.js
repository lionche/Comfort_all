var NISLFuzzingFunc = function(e) {
    var i = new e.constructor(e.options, e.input, t);
    var t = e.x, r = e.y;
    return i.crossProduct(t, r);
}
;
var NISLParameter0 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
