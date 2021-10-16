var NISLFuzzingFunc = function(t, e) {
    var i = this.getPointer(t, !0), r = this._currentTransform, n = r.target, s = n.get("lockScalingX"), o = n.get("lockScalingY"), a = n.get("lockScalingFlip");
    if (s && o) return !1;
    var h = n.translateToOriginPoint(n.getCenterPoint(), r.originX, r.originY), c = n.getCenterPoint();
    return this._setLocalMouse(c, r), h = n.getMouseLocation(c, h), this._setObjectScale(h, e), 
    h = this.getLocalMouse(c, h), this._setObjectColor(h, e), this._setObjectStrokeColor(h, e, s, o, !0), 
    this._setObjectFillColor(h, e, o, s, o, !0), this._setObjectStrokeColor(h, e, o, s, o, !0), 
    this._setObjectFillColor(h, e, o, s, o, !0), this._setObjectStrokeColor(h, e, o, s, o, !0), 
    this._setObjectScale(h, e, o, s, o, !0), this.projOrtho(0, 0, e, o, s, s, !0);
}
;
var NISLParameter0 = 1;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
