var NISLFuzzingFunc = function(e) {
    var t = {};
    var i = t.getBoundingClientRect();
    return {
        x1: i.left,
        y1: i.top,
        x2: i.width,
        y2: i.height
    };
}
;
var NISLParameter0 = [false, false];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
