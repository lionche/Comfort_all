var NISLFuzzingFunc = function(e) {
    var i = Function.prototype.bind || function(e) {
        var t = this;
        return function() {
            return t.apply(e, arguments);
        };
    };
    var t = {
        version: "3.5.17"
    };
    var n = t.apply(this, arguments);
    return i.apply(this, n), e.apply(this, arguments);
}
;
var NISLParameter0 = null;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
