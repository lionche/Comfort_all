var NISLFuzzingFunc = function(t) {
    var e = t.touches[0];
    t.changedTouches = [ e.clientX, e.clientY ];
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
