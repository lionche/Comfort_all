var NISLFuzzingFunc = function(e) {
    var t = {};
    var n = this;
    return e.forEach(function(e) {
        var r = n.parse(e, !0);
        t.push(r);
    }), t;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
