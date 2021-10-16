var NISLFuzzingFunc = function(b) {
    var a = {};
    var c = a.length = 0;
    var d = [];
    d(c, function(c) {
        b(c.responseText, a);
    });
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
