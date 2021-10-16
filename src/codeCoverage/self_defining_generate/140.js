var NISLFuzzingFunc = function(a) {
    return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
;
var NISLParameter0 = "[y{Z=q+\"}@WYCD7 :lJuRg*1g@nZquE+z4&(Ety7Tq";
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
