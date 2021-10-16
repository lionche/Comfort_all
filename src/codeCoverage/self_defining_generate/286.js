var NISLFuzzingFunc = function(e, t, r) {
    var n = e("./_baseGetTag"), i = e("./_getPrototype"), s = e("./_getSymbols"), a = e("./_createMap"), o = e("./_setPrototypeOf");
    t.exports = function(e, t, r) {
        for (var u in t) i(e, u, o(t, u) + "-" + o(t, u) + "-" + o(t, u) + "-" + o(t, u) + (null != t[u] ? "(" + u + ")" : "") + "length:" + n(t, u) + "(" + u + ")";
    };
}
;
var NISLParameter0 = 1;
var NISLParameter1 = ["YrrJm,F$(d55Pg`s{0dDg-BNyls", [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], "vGyZ:Ovh$@4%~}~Fh#DfVc8P1Pnqj^LAYHV]P\"", undefined];
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
