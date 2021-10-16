var NISLFuzzingFunc = function(e) {
    var t = this;
    e.on("click", function(e) {
        var i = t.findBy(function(t) {
            return t.containsElement && t.containsElement(e.target);
        });
        e.off("click", t.onContainsClick);
    });
}
;
var NISLParameter0 = [null, [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], -5612163701.7692839886129216, true, [true, true, false, false, true, false, true, false, false, false, false], -8323854118.7971355938193572, 52.6756284664994597];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
