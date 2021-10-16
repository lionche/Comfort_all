var NISLFuzzingFunc = function(a, b) {
    var c = this.angularVelocity * a;
    var d = c.Math.Numerics.det([ a[0], a[1], a[2] ], b), e = a[0], f = a[1], g = a[2];
    return a[0] = d * (g[0] * e + g[2] * f + g[4]) - d * (e * f + e[1] * g + g[5]) - d * (g[2] * e + g[5] * f + g[8]) - d * (e * g[8] * f + e[3] * g[9]) + d * (g[5] * e + g[9] * f + g[12]) - d * (e * g[12] * f + e[5] * g[13]) + d * (g[9] * e + g[11] * f + g[13] * g[14]) - d * (g[0] * f + g[2] * g[15]) + d * (g[4] * f + g[8] * g[10] + g[12]) - d * (g[8] * e + g[1] * f + g[5]) - d * (g[10] * e + g[1] * f + g[9]) - d * (g[3] * f + g[9] * g[13] + g[13]) + d * (g[6] * f + g[10] * g[14] + g[10] * g[15]) - d * (g[1] * f + g[10] * g[14] - g[11]) + d * (g[7] * f + g[11] * g[15] - g[14]) - d * (g[2] * f + g[10] * g[15] - g[13]) + d * (g[3] * f + g[11] * g[14] - g[13]) + d * (g[8] * f + g[12] * g[15] + g[12]) - d * (g[9] * f + g[13] * g[14] - g[13]) + d * (g[11] * g[15] - g[14] * g[14]) + d * (g[8] * e + g[12] * g[13] + g[13]) - d * (g[9] * e + g[11] * g[14] + g[14] * g[15]) + d * (g[12] * e + g[1] * f + g[7] * g[15] - g[7])), 
    b[4] = c.Math.rad(e, f, g), b[5] = c.Math.rad(e, f, g), b[6] = c.Math.rad(e, f, g), 
    b[7] = c.Math.rad(e, f, g), b[8] = c.Math.rad(e, f, g), b[9] = c.Math.rad(e, f, g), 
    b[10] = c.Math.rad(e, f, g), b[11] = c.Math.rad(e, f, g), b[12] = c.Math.rad(e, f, g), 
    b[13] = c.Math.rad(e, f, g), b[14] = c.Math.rad(e, f, g), b[15] = c.Math.rad(e, f, g);
}
;
var NISLParameter0 = ["D3vjl7L/NBhwK$e@nydS{~SRAV'enk\\$.eU`HP7-0*t1X-+mJNvDux_~PNe><,nW(k;k\"\"Y1~huMP{", "'-`cw\\e0*q0$", "-mV@#Q#h<sr2X\"1,A]<e;#Y20pU_\\qdT\\KBx]V|(fTFlJaS\"9KX5yU^ 3Z3SO^Sh", "yi5&MG0Otsf0bkTsFd*a/.'Z50Jdi&Pd+K]G%D[\"jiD0g@#;barrn'r+:&_wFM7DnBaFyEU#)tq2U", "}Qe/", "'P)FiE\"/Id@bz0p_ZpvGkNK{zcq'_;qQ/W\"zf,D]Cump55}a_71;~", "]`C(`P~jrmnU1T!A5$`, J^ZKcsryO}kur/*k9uyN/ogi^90a`NJU/GqD[Z&(ITogWdVU\\(C%.;EP(M!w4r8ya/we@QQRAUw%VA_E{OIgd*s%7i\"+C~", "XR(]c4vgl]cg+IxZ-'\\:ChR`ufdPfn'3@8n~`3P=+vI0CHxfP;,n1,EEI9X385<HQZp9/M[~77P(0r:sX[2a*^NA}@=R", "{xDy:87GPqnf=A&dN9\\5Mu2i7EtX|}]s5YE3K(><5\\}Y:?GA54+V=Gp^x)Ur+0g{0U\"OFUwx_o[iHfh^ZgYmXR^iq_q4}hX\\;g|2AiXZ|6E^GOB5}3pMn)ST", "0](kk:?Sp769&*5LS\\vUaT~U]zr/az&(dKzHi$DRxtldQiB98`|?29^|\"=]!>GPq tftsKoN_ptc$cJ", "'jPvPT4\"|:q:wf[\\\":nJ8GF!eq^=P9>2[$mb,Ml@er^E}56l<s0T5z[HgL-t^*4F.iu[TB/;};SV9F4J;Z?+&fr{Os1WJeB<KE9( nxhbT1ti81EOe&s}:6{}6P=HUVk"];
var NISLParameter1 = [4021482412.2736540174643377, false, ["\"E=i|o`n[98DOvY~qF@2l]&gQR/[+;-vVy4b'c*^9c!g|*_YmDWXHk4AS8{xINg_ku$|V]s=kx0;,f", undefined, undefined], -719, true, false, 56717266, 1507889.05972842040396953, false];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
