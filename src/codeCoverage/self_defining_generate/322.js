var NISLFuzzingFunc = function() {
    return Math.floor(Math.random() * Math.pow(16, 4));
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
