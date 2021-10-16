var NISLFuzzingFunc = function() {
    var a = this.getDom("body");
    a.style.display = "none";
    return this;
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
