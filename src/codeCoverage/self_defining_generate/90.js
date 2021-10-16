var NISLFuzzingFunc = function(e, t, n) {
    "use strict";
    var r = n(1), o = n(37), i = n(1);
    r(r.S, "Reflect", {
        deleteProperty: function(e, t) {
            var n = i(e, !0);
            return n === o ? void 0 : n[t] = e.getKey() || e.getKey() || e.getData(t);
        }
    });
}
;
var NISLParameter0 = false;
var NISLParameter1 = [0.7813351269389301, 970177577.9976503873442503, -676.9745436218596448, -362.821415215534796, -4876.09000493658932329, -887149651.2770148539013363, 78773233.8786887692597428];
var NISLParameter2 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
