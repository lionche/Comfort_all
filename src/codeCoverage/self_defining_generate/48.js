var NISLFuzzingFunc = function(a) {
    var c = a("./utils").addDataAttr;
    var b = a.toHSL();
    return b.a = this.a, b.a.toString() + "=" + this.b + ";" + c(b.a);
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
