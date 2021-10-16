var NISLFuzzingFunc = function(t, e) {
    var r = this.getBoundingClientRect();
    return e || (e = {
        x: r.left,
        y: r.top
    }), e.x + e.width;
}
;
var NISLParameter0 = 1;
var NISLParameter1 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
