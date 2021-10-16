var NISLFuzzingFunc = function(a, b) {
    var c = b.getElementsByTagName(a[1]);
    if (0 === c.length) return [ a[1], [ c[0], c[1] ] ];
    var d = [];
    for (var e = 0; e < c.length; e++) {
        var f = c[e];
        if (f.getAttribute("id")) return f;
    }
    var g = a[2], h = a[3], i = a[4], j = a[5], k = a[6], l = a[7], m = a[8], n = a[9], o = a[10], p = a[11], q = a[12], r = a[13], s = a[14], t = a[15], u = b[0], v = b[1], w = b[2], x = b[3], y = b[4], z = b[5], A = b[6], B = b[7], C = b[8], D = b[9], E = b[10], F = b[11], G = b[12], H = b[13], I = b[14], J = b[15];
    return d[0] = u * i - v * h, d[1] = u * j - v * l, d[2] = d[3] = d[7] = d[11] = d[15], 
    d;
}
;
var NISLParameter0 = [true, [[undefined, undefined], -48, "R", [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], -1.8170294827491588, -4269334, null, 16671, [undefined, [9120079, 467898, -1]], 4649.6967411554853633], undefined];
var NISLParameter1 = [[502007.1274077692953106, 6789489281.905587583110338, -40.4466891223641737, -20179.06509182306239303, 6683305.8059460319027761, 50238996.6686543769155188, -3.43264865315498, -585306967.9300981743873032, 4315796.2745598321984336, -571.07098304538055733, 6.15900592794669066], null, "9Ge`Xk!GonZ7I3->mYN2k6H^uzwSI\"caxa<5%!-e_aA;4w7\\K*AlV-n1/gCcpd", "\"o/(!v}.Ol/Zq%5<ytMQx*7|5\"+j^h*HgO@iJC8h5^A>$sTVw&JCt<{wA|;@Ee26S:wW\\i0~L|zZ\"NMe7`,N3B2i[Q[[y?ts9Ex[sggqSaz`IlrH}%x=OA$%J#KAj", [[true, true, true, true, false, false], [true, false, true], false, false, ["LG?iV+,2#Mx'f/IA~V]F&Y5zrI-jcVU>[wuW[Z1wT=y>60|YS2zNj@ o1BYOcNJy@%*o\\ B)!<$hS|i{QS*_bR0P!69U5nv`n]}`P<G#JScziCmT;o", "@}mvCN+I{u <ge]F+^", "%`1t}hdwqs$T(O?%)}gqz_WfY1?=ZS+d^I<'LDqRg+@aHdQafX;TT5zAT{.#`O+}*x((I{THC7FF&aw,_f*N] l?rr{yZ$M&Jyq6t{;$<ORM-Sr[Rv%6", "*s+a?%ZGO<qayU(J $8tAxcPc|9^BB!c8Py/kP$B@]{bT@$,pKDvivM2Y~ZefUJ)hVMMY9\\]=X@bhy2u5h]np@mE{;b /f7;kBkdK9", "02wK~Db+%GTX69&!$UJ,m'\\YR\"r]C&b'WX>>6 |L6Wx/3\"ew%Qq\\dS*M6bsIgVo$Iv&^TnkHBsCdl{lEo7f;Mk%L))Dd_Ur1\\)sD0", "sc{7d:N[\"hS/?Bm97Hyry>JzvJ|~AHK)@k#0", "%yiFRc3zD'+I&Z\"X[jd0>r5I;K=:9`c'a]Tk~xt=\\~!^I_t", "z)n*CQ@)fB<:{KrdL)n`Y?4i.tyj}5d}9!}0<:{T}F:|ZA`{iBh.pq&3kGW-UYMU\"x{`Ck*)ag0*Ya=8<?wNz{l\\k", "gSk@b#-SO0=<q&6+1.bjSIF<ATg$\\aRp\"9y~L*B6wi4hbANS0\"i8P!*x4?{[ jq+D'r1l%gnPAyZ6 }F<ULm6Rru[nqn$Q}VC(g0I9ha0*TLYMaI y-", "SSPS[7&<n3\\gv-[+r4T`)8w*!S~jPrl^G1\"I>He-c(e\"knTz##f$L[G]dVS/*FK#L1o/mP|GP)\\@CFs<R=r\".'/PZ=tYoz:"], -36720.8267027745679475, -682476269.41181529832131214, 9958, true]];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
