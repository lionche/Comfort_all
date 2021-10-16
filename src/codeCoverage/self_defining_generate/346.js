var NISLFuzzingFunc = function() {
    var t = this;
    var e = this;
    e.createContext(t);
    var n = e.selection.getRange();
    e.editor.fire("beforeSelectionChange", {
        target: n
    }), e.editor.fire("afterSelectionChange", {
        target: n
    });
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
