var NISLFuzzingFunc = function(t) {
    var e = {};
    var i = e.get("declarations").value;
    var n = t.node.init;
    return n(t) || (t = i), e.render(t);
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
