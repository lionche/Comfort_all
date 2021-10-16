var NISLFuzzingFunc = function(t) {
    var e = t.width, i = t.height, n = t.getBoundingClientRect(), r = n.left - e, s = n.top - i;
    return t.style.width = r + "px", t.style.height = s + "px", t.width = r, t.height = s, 
    t;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
