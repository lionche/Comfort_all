var NISLFuzzingFunc = function() {
    return this.getPropertyValue("-webkit-font-smoothing");
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
