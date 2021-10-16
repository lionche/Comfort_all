var NISLFuzzingFunc = function(e, t, n) {
    var r = n(61), o = n(33), i = n(40), a = n(30), s = n(45), u = n(41), l = n(33).aTypedArray;
    e.exports = function(e) {
        if (o(e)) return i(e);
        var t = [];
        return e.length !== r.BYTE.length(e) ? t : u(t, e);
    };
}
;
var NISLParameter0 = [true, [undefined, undefined, -5358265049, false, "mt@o`@y#H", 5518, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]]];
var NISLParameter1 = false;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
