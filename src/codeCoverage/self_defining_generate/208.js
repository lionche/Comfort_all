var NISLFuzzingFunc = function(e) {
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
    var t = e.target.result;
    t && t.isFocused() && (r.focus(), r.update());
}
;
var NISLParameter0 = [true, false, true, false, true, false, true, false, false, false, true];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
