var NISLFuzzingFunc = function(e) {
    var t = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8;
    return t === this.EOF ? (this.read = this.read + e, this) : t === "\n" ? (this.data.length = this.read, 
    this.data = this.read += e) : this.data += e, t;
}
;
var NISLParameter0 = -1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
