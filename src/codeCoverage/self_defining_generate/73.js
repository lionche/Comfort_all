var NISLFuzzingFunc = function(a, b) {
    var c = this.angularVelocity * a;
    var d = a.worldTransform;
    d[0] = (d[0] * (a.__webglInit || this.webglInit) - d[1] * a.__webglInit || this.webglInit) * b;
    a.dirty && c.WebGLRenderer.updateDerivedShaderProgram(a, d), b.push(a);
}
;
var NISLParameter0 = -602;
var NISLParameter1 = ["{^_~=<T8<vC<eL^qi,7nj>7R04x`^ceK'/E$d}VO@KAaI9KUQIJRN&@LX{$9Fa$hgPW;E549%ba[{,l2]%", -384118388.8332396782376695, false, [-1.3687040718442137, 9926928637.6618813831332274, 68761.2978161025497892, -19055.6881715279241362, 3912728.2057278217570977, 31397863.8272438392773208, 24.6863794032207966], true, true, undefined, 849389473.004986126582624095];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
