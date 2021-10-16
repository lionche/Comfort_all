var NISLFuzzingFunc = function(e, t) {
    var r = e.generatedLine - t.generatedOffset.generatedLine;
    return r ? r : e.generatedColumn - t.generatedOffset.generatedColumn;
}
;
var NISLParameter0 = undefined;
var NISLParameter1 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
