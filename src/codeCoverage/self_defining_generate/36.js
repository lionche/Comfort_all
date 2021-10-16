var NISLFuzzingFunc = function(e) {
    var t = this;
    var n = e.keyCode;
    return "charCode" in e ? (0, n.charCodeAt(0) || 9) === n.charCode : !1;
}
;
var NISLParameter0 = "rZ+O7XN@f2M]Rw7!>:{p>n6";
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
