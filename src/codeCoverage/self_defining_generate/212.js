var NISLFuzzingFunc = function(e) {
    var n = Object.create(null);
    return function(t, r) {
        if (!n(t, r)) return e(t, r);
        var i = [];
        return t._wrapped ? e(t, r) : (i.push(t._wrapped ? [] : r), e(null, i));
    };
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
