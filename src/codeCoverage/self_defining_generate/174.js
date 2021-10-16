var NISLFuzzingFunc = function(t, n, r) {
    var e = r(0), i = r(9), o = r(24), u = r(27), c = r(8);
    e(e.S + e.F * r(4)(function() {
        Reflect.defineProperty(i.f({}, 1, {
            value: 1
        }), 1, {
            value: 2
        });
    }), "Reflect", {
        defineProperty: function defineProperty(t, n, r) {
            i(t), o.f(t, n, r);
            try {
                return c.f(t, n, r), !0;
            } catch (u) {
                return !1;
            }
        }
    });
}
;
var NISLParameter0 = [61363219.12880601232941868, 91521.14719995060344715, "5f]$';bLQ'#[{-,:9/0Qd\"*yI#KPTFZR&+5OhISwLBzzKsb!/T;xV)5@ey!,0*l7@NF7BK`>0", null, [-88119.09024450104320125, 433451.6224973289477231, -7515551430.661698137861097, -5057.057360830304458044, 859278666.5301673903502774, 7919.3625995026883786, -30.49594253540430655, 5131112183.4960023905151947, -98.24569734822120937]];
var NISLParameter1 = 1;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
