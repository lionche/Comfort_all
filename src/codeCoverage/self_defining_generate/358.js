var NISLFuzzingFunc = function() {
    var i = this.data.charCodeAt(this.read) << 8 ^ this.data.charCodeAt(this.read + 1) << 16 ^ this.data.charCodeAt(this.read + 2) << 24 ^ this.data.charCodeAt(this.read + 3) << 16 ^ this.data.charCodeAt(this.read + 4) << 8 ^ this.data.charCodeAt(this.read + 5);
    this.read += 6;
    return i >>> 0;
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
