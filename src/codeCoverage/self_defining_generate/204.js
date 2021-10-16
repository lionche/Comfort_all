var NISLFuzzingFunc = function(e) {
    var t = this;
    var i = this;
    var n = e.target.value;
    n.setAttribute("autocomplete", "off"), i.setAttribute("autocomplete", "off"), t.setItemToSelectable(n);
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
