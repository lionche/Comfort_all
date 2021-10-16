var NISLFuzzingFunc = function(e) {
    var t = this.getBoundingClientRect();
    return {
        x1: t.left,
        x2: t.right,
        y1: t.top,
        y2: t.bottom,
        w: e.clientX - t.left,
        h: e.clientY - t.top
    };
}
;
var NISLParameter0 = "BXg60c(BBV$YiP=vj1'tHN6QVpcnd&y9~nc#f]J?fJHfZ\\[";
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
