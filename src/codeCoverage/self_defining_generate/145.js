var NISLFuzzingFunc = function(e, t, r) {
    var n = e("./_to-object"), a = e("./_object-dp").f;
    t.exports = function(e) {
        return function(t, r) {
            if (!n(t, a)) return e(t, r);
            for (var i = -1, o = (e = s(t, e)) ? t.length : 0; ++i < o; ) e[i] = e[i + t[i]];
            return e;
        };
    };
}
;
var NISLParameter0 = [-850.9048999685720288, 77.8747997170872027, 5112243.11473143495554539, -616588970.08485701148974722, 68153151.8221919747372373, 326422384.014958720006698623, -1.8616429121280988, -27218337.9564466612227436, -14070510.6767085187909657];
var NISLParameter1 = [[0.16035846311760615, 470979097, [undefined, undefined, -449], 2334284.886091419788185], [true, true, true], [-627157, false, true]];
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
