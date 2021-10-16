var NISLFuzzingFunc = function(name) {
    var self = this;
    var nameParts = name.split("-");
    var parts = nameParts.map(function(part) {
        return part.replace(/^-.*?-([\da-z])|^-.*?-([d_]+)\.)?-.*$/, "$1");
    });
    var parts = parts.filter(function(part) {
        return part.indexOf(".") === 0;
    });
    return nameParts.length - parts.length;
}
;
var NISLParameter0 = "y~'okCf0(Fru)&X[IOK5l%P,et_f3DK\\`sV]=k(qhiBB,_k46aZ-@F82$>(nobkhjF$g_<D9Y~lj)P|0NEiMR-0bhR})=2\"wO=LPvQ_`T8U| qf]{Cw0y!4";
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
