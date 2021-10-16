var NISLFuzzingFunc = function(e) {
    var t = this;
    var i = t.data(this, "ui-sortable");
    i && !i.options.disabled && (i.refreshPositions(), t(e));
}
;
var NISLParameter0 = 50;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
