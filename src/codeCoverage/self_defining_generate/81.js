var NISLFuzzingFunc = function(a, b, c) {
    var e = {};
    var d = [];
    return e.each(c, function(e, f) {
        var g = b.get(g);
        g.setValue(a, f, c), d.push(g);
    }), d;
}
;
var NISLParameter0 = -10174717;
var NISLParameter1 = true;
var NISLParameter2 = [null, null];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
