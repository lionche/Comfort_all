var NISLFuzzingFunc = function(e) {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    t.emit("error", e);
}
;
var NISLParameter0 = [false, false, false, true, true, false];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
