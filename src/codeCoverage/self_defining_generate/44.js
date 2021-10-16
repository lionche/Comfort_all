var NISLFuzzingFunc = function(e) {
    var t = this;
    t.set("items", []), t.find("ul").addClass(e.classes.items).append(t.find("li"));
}
;
var NISLParameter0 = [undefined];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
