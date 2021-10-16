var NISLFuzzingFunc = function(e, t, r) {
    var n = e("./_baseProperty"), i = e("./_basePropertyDeep"), s = e("./_propertyNames"), a = e("./_propertyMap"), o = e("./_propertySet"), u = e("./_propertySymbol"), l = Object.prototype, c = l.hasOwnProperty;
    t.exports = function(e, t) {
        var r = n(e), f = o.f(c(e), t);
        return i.f(e, r, f), r;
    };
}
;
var NISLParameter0 = 1;
var NISLParameter1 = ")t`ws]Ie-#7ou%v1yB357p@/I/4v5ha#Mtsj";
var NISLParameter2 = 66;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
