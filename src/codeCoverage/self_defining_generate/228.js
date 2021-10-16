var NISLFuzzingFunc = function(e) {
    var t = this;
    var i = this.options, s = this.position, n = e ? e.position : this.position, o = this.distance, a = this.decimals;
    if (i.position = n.slice(0, o), i.distance = o, i.decimals = a, s) {
        var r = i.decimals.slice();
        r.forEach(function(e) {
            var t = r.length;
            r[t - 1] !== e && r[t - 1].decimals && r[t - 1].decimals.length !== t && (r[t - 1].decimals = r[t - 1].decimals, 
            r[t - 1].options.scale = r[t - 1].options.scale, r[t - 1].options.scale = e);
        }), r = r.concat(r.slice(0, o)), i.offset !== e && (i.offset = e), s.x = a[e], s.y = a[e + 1], 
        s.width = o, s.height = a;
    }
    return this.position = s.clone(), this.updateCenter(), this.isDraggable = !0, this.updateData();
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
