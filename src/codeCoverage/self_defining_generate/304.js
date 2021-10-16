var NISLFuzzingFunc = function(e) {
    var t = e.menu ? e.menu.element : e.element;
    t.is(":visible"), t.addClass("ui-selectmenu-hidden");
}
;
var NISLParameter0 = [true, true, false, true, true];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
