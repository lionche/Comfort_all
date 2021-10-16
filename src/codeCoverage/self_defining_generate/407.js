var NISLFuzzingFunc = function(e) {
    var i = new e("l");
    var o = 0;
    var t = e.target.result;
    if (t.isFulfilled()) throw new TypeError("cannot get fulfillment status of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
    return t.isRejected() ? void 0 : t.isFulfilled() ? (o.resolve(t.value), e.reject(t.error)) : Promise.reject(t.error);
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
