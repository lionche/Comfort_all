var NISLFuzzingFunc = function(t, e) {
    var n = Object.create(null);
    var i = n.GetUniqueElement(e, "cx");
    return n.getSize(i, t), i;
}
;
var NISLParameter0 = 1;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
