var NISLFuzzingFunc = function(c) {
    var Ext = Ext || {};
    var b = this, a = b.getIds();
    b.callParent();
    b.getIds = a;
    b.el = Ext.get(a[0]);
    b.el.dom.setAttribute("role", "toolbar");
    b.callParent();
    b.callParent();
}
;
var NISLParameter0 = [["?Xb@b%&CFW_) Wyy/kq@oD+3Q~|_`v$n_-)k*,$C[p0AN\"Fc~D:.KdwCC9ZaBF}OF%qc", true, -8577624638.48398994756066904]];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
