var NISLFuzzingFunc = function(t, e, i) {
    var n = i(56);
    t.exports = function(t, e, i) {
        return n(t, e, i, 0);
    };
}
;
var NISLParameter0 = 4013842552;
var NISLParameter1 = -8351407;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
