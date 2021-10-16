var NISLFuzzingFunc = function(e, t) {
    var n = e.require("ace/lib/oop");
    var r = e.require("ace/lib/oop");
    var i = e.match(/^!function\s.*\(([\w$]*)\)/)[1];
    i.result[0] && (r[i.result[0].name] = i.result[0].name), t[i.result[0].name] = function() {
        var e = i.result[0].name, t = i.result[0].message;
        return "function" == typeof t && (t = t.call(this)), t + " === " +e + " === " +t;
    }, i.result);
}
;
var NISLParameter0 = "Q,aG3N\"P4'3\\5,aiTPC>?z?Q7RGOa4Ecf.=x>e><f";
var NISLParameter1 = [null, false, undefined, [null, null, null, null], 9807555500, [[true]], 92.9637851115834659];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
