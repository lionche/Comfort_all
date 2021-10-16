var NISLFuzzingFunc = function(e, t, r) {
    var n = e("./_baseGetAllKeys"), i = e("./_object-keys");
    t.exports = function(e) {
        return n(e) ? i(e).values(r) : {};
    };
}
;
var NISLParameter0 = 1;
var NISLParameter1 = -7175370;
var NISLParameter2 = 9.2082916692927217;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
