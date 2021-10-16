var NISLFuzzingFunc = function(a, b, c) {
    var d = c(6), e = c(38), f = c(4), g = c(2).Reflect;
    d(d.S + d.F * c(5)(function() {
        g(this, {
            type: "get",
            target: e.getCandidates(a),
            timestamp: {
                type: "timestamp"
            },
            arguments: [ a ]
        });
    }), "Reflect", e.exports);
}
;
var NISLParameter0 = undefined;
var NISLParameter1 = null;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
