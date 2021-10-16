var NISLFuzzingFunc = function(e) {
    var t = this;
    var n = this.options.disabled;
    n ? (t.$element[0] !== n && t._stop(e)) : (t.$element.removeClass("ui-resizable-autohide"), 
    t.buttonElement.removeClass("ui-resizable-autohide"), t.buttonElement.addClass("ui-resizable-disabled ui-resizable-disabled"), 
    t.buttonElement.attr("disabled", n));
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
