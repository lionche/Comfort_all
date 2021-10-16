var NISLFuzzingFunc = function(e, t) {
    var n = this.length;
    e = ~~e, t = void 0 === t ? n : ~~t, 0 > e ? (e += n, 0 > e && (e = 0)) : e > n && (e = n), 
    0 > t ? (t += n, 0 > t && (t = 0)) : t > n && (t = n), e > t && (t = e);
    var r = this.clone();
    return r.expand(e, t, r.offset), r;
}
;
var NISLParameter0 = false;
var NISLParameter1 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
