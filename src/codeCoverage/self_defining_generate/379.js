var NISLFuzzingFunc = function(e, t, n) {
    var r = n(84)("wks");
    if (!r(e)) return e;
    var i = Object.create(null);
    return i.constructor = e, e.prototype = void 0, i;
}
;
var NISLParameter0 = 1;
var NISLParameter1 = [false, true, true, false, true, false, false, true, false, false, true, true, false, false];
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
