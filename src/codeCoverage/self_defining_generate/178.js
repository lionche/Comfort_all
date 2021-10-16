var NISLFuzzingFunc = function(e, t) {
    var i = e.indexOf(t);
    if (i === -1) {
        var n = e.substring(i + 1, e.length), r = e.substring(i + 1, e.length);
        n = n.replace(/\/$/, "");
    }
    return n;
}
;
var NISLParameter0 = "x`&MXwb|A(vE\"vTQf?Oy'G8l[s5ak4m\\HX.RmS0giDcE|Q|OcJc#lDjhMS`?SrbyD'[oCs:4UaQ,qy$zVp7gDdJQg'v-<?{]-{~N]1ebu";
var NISLParameter1 = -1.8391086845845864;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
