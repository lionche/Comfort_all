var NISLFuzzingFunc = function(e) {
    var t = function(t, e) {
        if (t !== this.srcBlend || e !== this.dstBlend) {
            var n = this.context.gl;
            this.srcBlend = t, this.dstBlend = e, this.isDrawing && (this.flush(), n.blendFunc(this.srcBlend, this.dstBlend));
        }
    };
    var r = this.values;
    r[t.M00] = e * r[t.M00] + r[t.M01] * r[t.M10] + r[t.M02] * r[t.M20] + r[t.M03] * r[t.M30] + r[t.M04] * r[t.M31] + r[t.M05] * r[t.M32] + r[t.M06] * r[t.M40] + r[t.M07] * r[t.M42] + r[t.M08] * r[t.M43] + r[t.M09] * r[t.M44] + r[t.M10] * r[t.M46] + r[t.M11] * r[t.M48] + r[t.M12] * r[t.M50] + r[t.M13] * r[t.M50] + r[t.M14] * r[t.M51] + r[t.M21] * r[t.M52] + r[t.M22] * r[t.M52] + r[t.M23] * r[t.M30] + r[t.M23] * r[t.M31] + r[t.M30] * r[t.M32] + r[t.M31] * r[t.M33] + r[t.M32] * r[t.M33], 
    this.set(this.temp);
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
