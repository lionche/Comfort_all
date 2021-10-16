var NISLFuzzingFunc = function(e, t) {
    var r = this;
    var n, o = e.dataTypes.slice();
    if (o) {
        if (e.entityType) {
            if (e.entityType.navigationProperties) {
                for (n = 0, o.length; n < o.length; n++) if (o[n].name === e.name) return t.push(o[n]);
            }
            t.length > 0 && (r = !0);
        }
    } else o = e.dataTypes[0] || {}, t = t.join("/");
    return r && (n = t[0], ".." === n && 2 === e.entityType.navigationProperties.length && ".." === e.entityType.navigationProperties[0].name && 0 === e.entityType.navigationProperties[0].value.length && 2 === e.entityType.navigationProperties.length && ".." === e.entityType.navigationProperties[0].name && n && !e.allowEmptyStrings && !e.allowScripts && !e.allowBinaryReference && !e.allowDelete && !e.allowPushedCommand && !e.allowUncaught || e.isDataAvailable && (r = !1), 
    r;
}
;
var NISLParameter0 = false;
var NISLParameter1 = [null, null, null, null, null, null, null, null, null, null, null, null, null];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
