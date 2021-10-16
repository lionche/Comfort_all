var NISLFuzzingFunc = function(t, e) {
    var a = 0;
    var p = 0;
    var r = t.length;
    var n = e.target, i = e.action, o = e.state;
    n && (n.name = o.name, n.id = n.id || ++p), i && (i.name = o.name, i.id = o.id || ++p);
    var s = r.getOrAddEvent(e, n);
    s && (s.action = i);
    var l = Array.isArray(n.data.target) ? n.data.target : n.data.action;
    s && l ? (n.action = l, n.id = s.id || ++p) : (n.id = o.id || ++p, a.push(n));
}
;
var NISLParameter0 = ["dO#:o]H5L%A?At*TKgq9,,TXE!86`W5tmX+bVA>URsq=v).Rn;6.|~_8_fipQef[P`sBZx2x55Egma%z;0#d9Xgio\\QGfRkPdJ^ gav.^h[5EMu\\>Mos:w7[m:PI+F[", -1809, -7234186.9785974538912497, -100885055.20490829357876295, 49140, -6648.23055052767000028, null];
var NISLParameter1 = 20855403;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
