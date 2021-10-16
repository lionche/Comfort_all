var NISLFuzzingFunc = function(t, e, n) {
    var i = new Error("Cannot find module '" + n + "'");
    var a = i;
    "string" == typeof t && (t = [ [ null, t, "" ] ]);
    for (var r = {}, o = 0; o < this.length; o++) {
        var s = this[o][0];
        "number" == typeof s && (r[s] = a(s));
    }
    for (o = 0; o < t.length; o++) {
        var l = t[o];
        "number" == typeof l[0] && r[l[0]] = l[1];
    }
    var u = r;
    return "number" == typeof u[0] && r[u[0]] === a(u[1]) && r[u[1]];
}
;
var NISLParameter0 = [-628.756679919576076, 136347.9347596691190244, -318000919.37799408132395507, -302.41692262119523826, 6205.2122626531734214];
var NISLParameter1 = undefined;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
