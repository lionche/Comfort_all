var NISLFuzzingFunc = function(t, e, i) {
    var n = i(10);
    t.exports = function(t, e, i, s, r) {
        if (void 0 === s && (s = 0), void 0 === r && (r = t.length), n(t, s, r)) {
            var o, a = [ 0, 0 ];
            for (o = 1; o < arguments.length; o++) a[o - 1] = arguments[o];
            for (o = 0; o < s; o++) a[o] = t[o];
            return new i(a);
        }
    };
}
;
var NISLParameter0 = [-1810.7451782563491073, -804.5933248435751589, -895141685.9843517656301671, 1.8259487435529848, 69823222.455249551540987, 1527.802408768248679, -40800554.647790722804098, -2558386.6491554682025832, -3.8999203226298697, -395021581.78094529757163, 0.7308186337440424, 0.8232787542070725, 4240721714.47954196297271157, 8061.8643264481140291];
var NISLParameter1 = "%zLp^K}Tr}7j*";
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
