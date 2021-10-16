var NISLFuzzingFunc = function() {
    var t = this.getBoundingClientRect();
    return {
        width: t.width,
        height: t.height
    };
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
