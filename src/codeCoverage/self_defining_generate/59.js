var NISLFuzzingFunc = function(t, e) {
    var s = Object.create(null);
    var n = {
        clone: function(t) {
            var e = {};
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            return e;
        },
        cloneArray: function(t) {
            for (var e = [], i = 0; i < t.length; i++) e.push(s.clone(t[i]));
            return e;
        },
        cloneHashOfHash: function(t) {
            var e = {};
            for (var i in t) t.hasOwnProperty(i) && (e[i] = s.clone(t[i]));
            return e;
        },
        cloneHashOfArrayOfHash: function(t) {
            var e = {};
            for (var i in t) t.hasOwnProperty(i) && (e[i] = s.cloneArray(t[i]));
            return e;
        },
        gsub: function(t, e, i) {
            return t.split(e).join(i);
        },
        strip: function(t) {
            return t.replace(/^\s+/, "").replace(/\s+$/, "");
        },
        startsWith: function(t, e) {
            return 0 === t.indexOf(e);
        },
        endsWith: function(t, e) {
            var i = t.length - e.length;
            return i >= 0 && t.lastIndexOf(e) === i;
        },
        each: function(t, e, i) {
            for (var s = 0, r = t.length; s < r; s++) e.apply(i, [ t[s], s ]);
        },
        last: function(t) {
            return 0 === t.length ? null : t[t.length - 1];
        },
        compact: function(t) {
            for (var e = [], i = 0; i < t.length; i++) t[i] && e.push(t[i]);
            return e;
        },
        detect: function(t, e) {
            for (var i = 0; i < t.length; i++) if (e(t[i])) return !0;
            return !1;
        }
    };
    var e = {};
    e.lines[e.lineNum] = {
        staff: []
    }, r(t, 0, n);
}
;
var NISLParameter0 = "fv_sU72*b-eV'Mcs}$Ws'P}4,/@I)u~3ftl*WFSPaF_vn>cZ!^6;[XZet^J.n=B5M7 Uwx*HO[i.ax=UM?z/JTgi-;R\\5Mkd;*Wj,Q[a^f#\"K46F1>e2k4z";
var NISLParameter1 = [-6852080, "&cE[QHFp16Uz0*Y,a]Ecc<er2<d,C!d:5V0{^?+QVecePMEgRp^rp0qk\\A*gS,v6N\\[0Z,s9ER*@eow", [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], undefined, "N,L?\".$M&TpK-M\"c:Y^2<?*3a_9y!:9H1RNc5F4^+c0>is/P%N_m4lR'k+ qXd4@mJ\\<Bec3/cwC/", undefined, "jJ\"xp<:iz4hEjhZ(6pb3f\\Es\"pA2o3w/%&v3cZe!#@28", false, [[44860.2754537892547946, undefined, "Y[:HMp]ydN{IY<p\"sQdP=,$o<Z<%$U~`OcBEG{9wQXsB6\\I0,\"X,s%!Vxtwa93f[-2$D.", true, undefined, ["y')mfijszpu/k9_Hr{+~3Rw/\"Gm't:YQ# ':lw@>DFG&X+Ko;:8)i)Cyn1S_+OM&_itj5)v9g", "wv\\\\brXrq; KsZm2yiYZQCh4:M^5_,*,&=~,${Cii}>]HITG.($:rFQkZ^),lAvncF!EV`),0~tb$Rq*#Mp?h[8T)=h6<bRR!vh-KU-S=u;[ak", "XFp_lpWKDU(_tsK%'(C557]bg)rijoh/VE``o\">])VUz~8J{7nQm#5ADSWmo0k[u_bK l?zL"], true, [undefined, 5191.028897040540013852, null]], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], "S[Z=iy[:tV1Ll?", [[null], "k^*>if`i8!=zaI)W\"DR\"y{b9]yPBxbvDN=Fj%kUqU9>R}u;1.wVJ}Hp,5U+M\\2whsvNK1_WVJ@EOC2&}h}'<IrEKPgV;_ZsG8_M~^brt!I|lTNkPp;c;BB0/~o:t{G+", null, false, [[[-6848, 10, -180540, -18, -4200328, 3950, 917], 38.884054018411202, [10.9686504989182684, 3365.37862012739548434, 2935.32953002829614664, -300589924.31177338454087966, 7767776867.07939590560203047, 2594273653.8945591374881259, 8.6721968204296338, -281424.6104952932836425, 3.3949908980531255], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], 66, undefined, [">\\9#aZ.@OcCf9)oM?l'ma?<(}iG 7~1zrQYTBJb", "?ODs39,zfO^t,D75Atvsd&TsEvJ;>L?(N5r$=x`JF;4 ):D-hcHZY?]5[m$2urylmt20<B`q/Lwh]ebG+=", "(I2=-", "'JFvyEg94@VzZs_=6#(>\\5yFpi_T;Df0TYq9|ImCr(51qC4O/xZW8-%-eth@KyEe%D#Fgkt:sGd2l]<ESk`rs:AwNc`yF3JC-h\"4Qub#UOO|nl(upz!Y\\9kP=\\", "sPj\\.(l.d?13\\oxF/h4lbb7tCVY>{j&Yn:$~-", "%e~2SFL,VAN[9Zp`aV&v$8([u(z)KSfRyz_~v</Nz(Yp_id0o>F-JqgC,/dzfDEd9V_oI{9'f2sYPR\"N@Q", "/~7{)F.:X=t+f*^ds)wCf0$_,N", "GoxC?R|q's6 '[EHAZC#vaOEM!W`-p23EENN;Hcqy%tW {0(X;0v;", "N(O#e&R|!=B1uD4eG\"=K&$=_WCb!6yR{/K@6Je] 3IT4gJj2w2ifRU#>f9geu{<=O^vVPpeA$c{2i", "Ma-\"9_%7oPFup*9UfT]v ,R<.Z:e!eBn#S=B8GUC8~g zL{qs7)X+O7nR2$U}^wChhCY,Wb]+V(u_#|zO&J=UC'YVrEOy=b;"], "#G|DJ:*HL^UeW-Jh`K~1'>9DDWj3BG0S*nW@:5=?{UcLh}V<w0oSNa^3\\*>c5mwhD.TWI=I+~@:)#%:FCKqtR2Q1@SO<A", "Fbpb}&$QC}dL3 oJk#3o7'Jq$UcZm2F?"], undefined, true, "~n[<GR80tH r@)ek+%41,4Op{&,y#?AyD(UCqy9JiAVo_l6uD<nva%3@MDI8)5}1P*#&Ef4>yh'=\\fW 3Y>$`8b>H[2j", true, "KD", true, null, false], 612714.23352005629375072], -2930.2800960350308406, 73841028, [-1, 7127, -27, -39613175, 6083, 645, 997626, 1, 94209], -1], undefined];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
