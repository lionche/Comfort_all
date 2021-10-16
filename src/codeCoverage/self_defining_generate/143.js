var NISLFuzzingFunc = function() {
    var a = this.getDom("body");
    a.style.display = "none";
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
