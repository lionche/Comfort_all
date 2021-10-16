var NISLFuzzingFunc = function(e, t) {
    var n, r, i, o, a, s, u, c = "", l = e.selfReference && e.selfReference;
    if (l) for (a = e.instances.length - 1; a >= 0; a--) for (n = e.instances[a].parents, 
    r = 0; r < n.length; r++) for (i = n[r].parents, o = 0; o < i.length; o++) o == i[o].name && (c += " " + i[o].value);
    return c.substr(0, c.length - 1);
}
;
var NISLParameter0 = false;
var NISLParameter1 = null;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
