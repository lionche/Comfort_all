var NISLFuzzingFunc = function(t, e) {
    var i = this.getPath();
    if (i) {
        var r = i.getValue(t);
        i.setValue(e, r);
    }
}
;
var NISLParameter0 = true;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
