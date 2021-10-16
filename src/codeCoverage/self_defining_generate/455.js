var NISLFuzzingFunc = function(e, n) {
    var t = function(t, e) {
        if (t !== this.srcBlend || e !== this.dstBlend) {
            var n = this.context.gl;
            this.srcBlend = t, this.dstBlend = e, this.isDrawing && (this.flush(), n.blendFunc(this.srcBlend, this.dstBlend));
        }
    };
    var i = e.vertices;
    t.create("polygon", i, n);
}
;
var NISLParameter0 = false;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
