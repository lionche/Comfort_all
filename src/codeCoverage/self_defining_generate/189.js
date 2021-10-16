var NISLFuzzingFunc = function(n) {
    var i = Object.create(null);
    var r = n.constructor;
    var e = n.state;
    n.state = r(e, i);
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
