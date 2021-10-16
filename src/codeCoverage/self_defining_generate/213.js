var NISLFuzzingFunc = function(t, e) {
    var i = e.cleanData;
    return i.parent = t, i.transform = e.transform.slice(0, e.transform.length - 1), i;
}
;
var NISLParameter0 = -40767389;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
