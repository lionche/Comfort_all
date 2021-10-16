var NISLFuzzingFunc = function(e) {
    var t = this;
    var i = t.getItemByNode(e.target);
    i.setActivedItem && i.commit("clearActivedItem");
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
