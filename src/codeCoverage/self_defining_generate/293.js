var NISLFuzzingFunc = function() {
    return this.getPropertyValue("-webkit-animation-fill-mode");
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
