var NISLFuzzingFunc = function(e) {
    var t = {};
    var i = e.target.result;
    i && i.removeEventListener(e, t);
}
;
var NISLParameter0 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
