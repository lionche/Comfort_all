var NISLFuzzingFunc = function(e) {
    var t = this;
    var n = e.target || e.srcElement, i = n.style;
    if (i.width !== t.width || i.height !== t.height) {
        var r = n.getBoundingClientRect();
        i.width = r.width, i.height = r.height, t.style.width = r.width * 2 + r.height * 2, t.style.height = 2 * 2 * 2 + r.width * 2, 
        i.style.height = r.height * 2 + r.height * 2;
    }
}
;
var NISLParameter0 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
