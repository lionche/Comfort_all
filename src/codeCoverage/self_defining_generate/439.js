var NISLFuzzingFunc = function(e, t) {
    var n = e.getCursorPosition();
    var r = e("./wrap");
    return r.row == t.row && n.row == t.row && r.column == t.column ? !0 : !1;
}
;
var NISLParameter0 = 1;
var NISLParameter1 = [-3, -416216, 662796499, -6414];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
