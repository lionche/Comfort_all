var NISLFuzzingFunc = function(t) {
    var e = {};
    var i = e.get("declarations").value;
    return i.fromJSON(t);
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
