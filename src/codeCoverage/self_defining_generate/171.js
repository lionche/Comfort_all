var NISLFuzzingFunc = function(t, e, i) {
    var n = i(5), s = i(508), r = i(509), o = i(209);
    t.exports = function(t, e, i, a, h) {
        var l = r(t, e, i, a, s);
        if (0 !== l) {
            var u = n.create({
                label: "Stack"
            });
            o(u, l);
        }
    };
}
;
var NISLParameter0 = undefined;
var NISLParameter1 = 1;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
