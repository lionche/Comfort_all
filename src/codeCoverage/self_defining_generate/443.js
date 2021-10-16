var NISLFuzzingFunc = function(e, t, r, n, a, s) {
    var i = r.or;
    var o = s.databases[i.databaseid].tables[i.tableid].data;
    return n && (o = n), o;
}
;
var NISLParameter0 = undefined;
var NISLParameter1 = true;
var NISLParameter2 = 63;
var NISLParameter3 = false;
var NISLParameter4 = undefined;
var NISLParameter5 = [-21691, -483, -752, 355, -94358, -91353355, 5835489, 5, 81945, 89747725, 6720426799, -26455, -66319, -10, 323652];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2, NISLParameter3, NISLParameter4, NISLParameter5);
print(NISLCallingResult);
