var NISLFuzzingFunc = function(e) {
    var t = this.data.inlineBlockList;
    if (t) {
        var i = this.data.inlineBlockList.findNearest("html");
        if (i) {
            var n = i.indexOf(e);
            -1 === n && (n = i.length);
        }
    } else {
        var n = this.data.inlineBlockList;
        if (n) {
            var r = this.data.inlineBlockList;
            if (r) {
                var a = r.indexOf(e);
                -1 === a && (a = r.length);
            }
        }
    }
    return this.data.blockList;
}
;
var NISLParameter0 = [[95085600, [undefined, undefined, undefined, undefined, undefined, undefined], undefined, 77097513, 47.18856977864959945, [-55043.7526429556093159, [null, -66110787, false, undefined, -1821.8540744469588106, [["cj7xu]J><12f>{?DU<FH|iLJY", -51866, false, [true, true, -86442.4523783682436694, "f*hrtM*m`CEO9sN:+!N'y;<9\"@@ZIm$@>G8", false, undefined], "&|<S!xD2o(fU/}(trzP`!kd~5i2M'De\\CG8N0~Lr%2fs20", null, undefined, "dm~fj?n-:[g6+~U&r:WT/%ISJ\" \\ob_<hC'{=G|~m2lhC60kJ+Jg^R*p0B`r{DC+]L7Wk:\\q|8+%, %e]n6UPf.IQnz7N:; V5Y&u}8@NrZ=pC^F#BQ", [-43723165.16920226303966568, "M4bj4349N'tG_:\\"], [null, null, undefined, null, null]]], true, "J].ASd*iS(w`9ZjL[xMLg_\\vm|_fwA(({o782aDZrqA1ozk~w1lX?[#T;(i  0U<qcCR!TU|kJ{vyDFr5", ["jCFZB,=Q4\\a~O!iP<5KT(}1GVg/`HFd?mUmT3hk[rQ=21>LIX73H:"], "Z}:X^+0*hYR0-T{qI3CHB<u*Ca})x!zKG}5*~)NZbSb\"0n#SW+X(dczO\"rqf5fNo%-UZ"], null, 100, true, false, null, undefined], [null, -4132.2224856237338213, null, "M i)ixLc_RT9V.g$MklZ:{=[D]ASU{V##5GS)lU]:r0663\"V>:t?-_GRs%zk&@@:[8c94vCJ|}A`fKOi+!`33}qrksH\"UeT<FC,g@kHY`", "4[nk4Z:22?PB(kN**1XiNRp-3USL.a=EP[>(;b([?qmD^2hKB$ESh8a6E{"], undefined], null];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
