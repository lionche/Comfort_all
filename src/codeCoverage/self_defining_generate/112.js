var NISLFuzzingFunc = function(a, b) {
    var c = a.length, d = 0, e = a[c - 1][0], f = a[c - 1][1], g = a[c - 1][2], h = a[c - 1][3];
    a[c - 1][0] = e;
    a[c - 1][1] = f;
    a[c - 1][2] = g;
    a[c - 1][3] = h;
    return a;
}
;
var NISLParameter0 = [7, 0, -16772865, 7188601];
var NISLParameter1 = "wp_C}}\\IYbu(iQ9D9!f2-lz44U=4RX/";
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
