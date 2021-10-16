var NISLFuzzingFunc = function(e, t) {
    var i = Function.prototype.bind || function(e) {
        var t = this;
        return function() {
            return t.apply(e, arguments);
        };
    };
    var r = e.xbnd[t];
    return [ r, r ];
}
;
var NISLParameter0 = -13065135;
var NISLParameter1 = undefined;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
