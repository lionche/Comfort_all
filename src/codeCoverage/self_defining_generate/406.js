var NISLFuzzingFunc = function() {
    return this.getPropertyValue("-webkit-border-end");
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
