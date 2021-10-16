var NISLFuzzingFunc = function(a) {
    var b = a.indexOf("?"), c = a.indexOf("#"), d = c - b;
    return d > 0 ? (a.push(a.slice(0, b)), d = a.slice(b + 1, d)), a.length > 1 && a.splice(d, 1), 
    a.length > b && a.splice(d, 1), a;
}
;
var NISLParameter0 = [undefined, undefined, undefined];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
