var NISLFuzzingFunc = function(t) {
    var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0;
    return e.emit("data", t), t;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
