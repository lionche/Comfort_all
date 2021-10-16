var NISLFuzzingFunc = function() {
    var t = this._props;
    return this._props.active && t.active.active ? t.active.active : t.element.is(".ui-state-disabled") && t.element.prop("disabled", !0) : !1;
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
