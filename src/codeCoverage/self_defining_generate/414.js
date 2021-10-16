var NISLFuzzingFunc = function(e, t, r) {
    var n = e("./_baseIsMatch"), i = e("./_getMatchData"), s = e("./_matchesStrictComparable");
    t.exports = function(e, t) {
        var r, a = i(e), o = s(a), u = n(a.length), l = t ? u : [], c = s(u);
        if (t) {
            for (r = [], a = o; u > 1; ) 1 === (r = a[--a.length].elements.length) && r.pop();
            for (;u > 1; ) 1 === (r = a[o = u - 1].elements[0].elements.length) && (r.pop());
        }
        for (;u > 1; ) 1 === (r = a[o = u].elements[0].elements.length) && r.pop();
    };
}
;
var NISLParameter0 = 1;
var NISLParameter1 = "iOBW2({T1bR#N3+my>5sJ )]+TP$|A{Fl/^N{c>e|{nT94mc+Bv_&iNlbMUlyP[qs#h@nJsMZo1^\"g[Z=T-I~M:\"PHKz(75yM;RNd";
var NISLParameter2 = [4465166264, 1, 763, 44639132];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
