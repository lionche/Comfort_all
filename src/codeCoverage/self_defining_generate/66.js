var NISLFuzzingFunc = function() {
    return this.getPropertyValue("-webkit-font-feature-settings");
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
