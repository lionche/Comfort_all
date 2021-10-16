var NISLFuzzingFunc = function(e) {
    var t = function() {
        return this;
    }();
    e ? t.on("raphael.DOMException.getStackAtEnd", t.EXCEPT_ERROR) : t.on("raphael.DOMException.getStackAtStart", t.EXCEPT_ERROR);
}
;
var NISLParameter0 = 612;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
