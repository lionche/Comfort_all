var NISLFuzzingFunc = function(e) {
    var t = e.get("declarations").value;
    e.get("right").set("expression", t(e.get("left")).value));
}
;
var NISLParameter0 = -1.3914894600137343;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
