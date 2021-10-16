var NISLFuzzingFunc = function(e) {
    return e.replace(/\{([^\}]+)\}/g, function(e, t) {
        return t ? e : "([^/]+)";
    });
}
;
var NISLParameter0 = "vVkvOf5D#_Q/KDgWM/IucSX9GC;>KoRl";
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
