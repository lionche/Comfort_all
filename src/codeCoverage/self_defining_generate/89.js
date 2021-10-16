var NISLFuzzingFunc = function(e) {
    var i = e("./parser_core");
    var t = e.getAttributeNode("contains");
    return t && t.specified ? i(e) : e.value;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
