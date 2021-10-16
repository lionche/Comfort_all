var NISLFuzzingFunc = function(c, d) {
    var b;
    var a = [];
    var n = function(a, b) {
        return new n.fn.init(a, b);
    };
    n.event.special[c] = {
        delegateType: b,
        bindType: c,
        handle: function(a) {
            var b = n.event.fix(a);
            n.event.special[b] && (b[0] === d ? setTimeout(d, 0) : d(a));
        }
    };
}
;
var NISLParameter0 = ")/Au E^a#ofDUMVN";
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
