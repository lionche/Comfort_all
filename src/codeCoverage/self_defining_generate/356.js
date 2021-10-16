var NISLFuzzingFunc = function(e, t, n) {
    var r = e[0] * t[0] + e[4] * t[1] + e[8] * t[2], i = e[1] * t[0] + e[5] * t[1] + e[9] * t[2], a = e[2] * t[0] + e[6] * t[1] + e[10] * t[2], o = e[0] * t[1] + e[4] * t[2] + e[8] * t[3], u = e[1] * t[1] + e[5] * t[2] + e[9] * t[3], s = e[2] * t[1] + e[6] * t[2] + e[10] * t[3], c = e[0] * t[2] + e[4] * t[3] + e[8] * t[4], l = e[1] * t[2] + e[5] * t[3] + e[9] * t[4], f = e[2] * t[2] + e[6] * t[3] + e[10] * t[4], h = e[0] * t[4] + e[4] * t[5] + e[9] * t[6] + e[12] * t[7], d = e[1] * t[4] + e[5] * t[5] + e[9] * t[7], p = e[2] * t[4] + e[6] * t[5] + e[10] * t[6] + e[13] * t[7], m = e[1] * t[6] + e[5] * t[7] + e[9] * t[6] + e[12] * t[7], y = e[2] * t[6] + e[5] * t[7] + e[9] * t[7] + e[13] * t[7];
    return n[0] = r, n[1] = i, n[2] = a, n[3] = o, n[4] = u, n[5] = s, n[6] = c, n[7] = l, 
    n[8] = f, n[9] = h, n[10] = p, n[11] = d, n[12] = m, n[13] = y, n[14] = Math.abs(r - u), 
    n[15] = 1, n;
}
;
var NISLParameter0 = ["\"9\"JQ\\}BunE{Bz(z8@o4u3d&10nR$[ZaR}a:Wxk0ZVo\\[\\\\mJ@L=)tDgF\"(RJi06l{WnTH50_6R{qvCY8S8Nfm~;'MD1p%_GnX,NBD/lfw{.}r.%-cOJ7DrO?>`r", "inT<'1El|%]_Lzb:979QWNUNV\\j1*ak'D1[WW-1$C8H#tVI{^!sl'<CJb:y5TkLej?r:`b-o#)|#N>If,eAx4gM", false];
var NISLParameter1 = [false, true, false, true, true, true, false, true];
var NISLParameter2 = [true];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
