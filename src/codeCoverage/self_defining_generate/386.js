var NISLFuzzingFunc = function(t) {
    var e = this.val, n = t.val;
    return e[0] = n[0] * e[0] + n[1] * e[3] + n[2] * e[6] + n[3] * e[7], e[1] = n[0] * e[1] + n[1] * e[4] + n[2] * e[7] + n[3] * e[8] + n[4] * e[9], 
    e[2] = n[0] * e[2] + n[1] * e[5] + n[2] * e[8] + n[4] * e[9], e[3] = n[0] * e[3] + n[1] * e[6] + n[2] * e[10] + n[4] * e[11], 
    e[4] = n[0] * e[4] + n[1] * e[5] + n[2] * e[9] + n[3] * e[12], e[5] = n[0] * e[6] + n[1] * e[10] + n[2] * e[13], 
    e[6] = n[0] * e[7] + n[1] * e[11] + n[2] * e[14], e[7] = n[0] * e[8] + n[1] * e[12] + n[2] * e[15], 
    e[8] = n[0] * e[9] + n[1] * e[13] + n[2] * e[14], e[9] = n[0] * e[10] + n[1] * e[14] + n[2] * e[15], 
    this;
}
;
var NISLParameter0 = null;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
