var NISLFuzzingFunc = function(e) {
    var t = this;
    return "string" == typeof e && e.length > 0 ? t.send("/" + e), this._promise.cancel().fail(!0), 
    Promise.resolve(e);
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
