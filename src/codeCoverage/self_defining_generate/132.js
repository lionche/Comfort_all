var NISLFuzzingFunc = function(e, t) {
    var o = {};
    var n = /%[0-9a-z]{2}/gi;
    var r = this._modelInstanceCollection.getColorizedPercent(e), i = n(this._colorificationPrimitive.primitiveColor, r), a = n(this._colorificationPrimitive.groundColor, i), s = n(this._colorificationPrimitive.borderColor, i), l = n(this._colorificationPrimitive.borderWidth, s), u = n(this._colorificationPrimitive.backgroundColor, a);
    return o(this._colorificationPrimitive) ? this._colorificationPrimitive.colorWC : n(this._colorificationPrimitive) ? this._colorificationPrimitive.colorWC : o(this._colorificationPrimitive) ? this._colorificationPrimitive._colorWC : o(this._colorificationPrimitive) ? this._colorificationPrimitive._colorWC : this._colorMatrix ? this._colorMatrix._normalize ? this._colorMatrix._normalize(e, t) : this._colorMatrix._copy() : o(this._colorificationPrimitive) ? this._colorificationPrimitive._colorMatrix : this._colorMatrix;
}
;
var NISLParameter0 = 1;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
