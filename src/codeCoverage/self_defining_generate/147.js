var NISLFuzzingFunc = function() {
    return this.isInGroup && this.group.isInGroup();
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
