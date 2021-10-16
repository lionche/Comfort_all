var NISLFuzzingFunc = function() {
    return this.getPropertyValue("-webkit-flex-pack");
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
