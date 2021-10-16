var NISLFuzzingFunc = function(e) {
    var n = Object.create || function(e) {
        var t = function() {};
        return t.prototype = e, new t();
    };
    var i = Function.prototype.bind || function(e) {
        var t = this;
        return function() {
            return t.apply(e, arguments);
        };
    };
    var t = i(e), r = t[0], a = t[1];
    return n.isArray(r) ? r.forEach(function(e) {
        return t[0] = e, a;
    }) : r;
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
