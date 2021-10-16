var NISLFuzzingFunc = function(e, t, r) {
    var n = e("./_baseFor"), i = e("./_getPrototypeOf");
    t.exports = function(e, t) {
        var r = n(e), a = i(r, t);
        return a !== undefined ? r[t] : n(e);
    };
}
;
var NISLParameter0 = 1;
var NISLParameter1 = -70;
var NISLParameter2 = [9697538.34989155278430806, -976166.6144730480508716, 461210609.9677700584525823, 68945027.3057999841229647, -242277512.1302510121635484];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
