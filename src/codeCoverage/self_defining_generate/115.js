var NISLFuzzingFunc = function(e, t) {
    var i = e.dataType;
    var n = t.getNodes([ 2 ]);
    if (n.length > 0) {
        var r = n[0];
        i(r.data) && i(r.data) < i(e.data) && (n = n.concat(r.getNodes()));
    }
    return n;
}
;
var NISLParameter0 = [undefined];
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
