var NISLFuzzingFunc = function(t, e) {
    var r = this.getPath();
    return r.get(e) || r.get(t);
}
;
var NISLParameter0 = 1;
var NISLParameter1 = -8382287;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
