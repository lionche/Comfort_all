var NISLFuzzingFunc = function(t, e) {
    var r = function(t, e, i, n, r, a) {
        a || (a = {}), this.tuneNumber = r, this.abcelem = t, this.duration = e, this.durationClass = a.durationClassOveride ? a.durationClassOveride : this.duration, 
        this.minspacing = i || 0, this.x = 0, this.children = [], this.heads = [], this.extra = [], 
        this.extraw = 0, this.w = 0, this.right = [], this.invisible = !1, this.bottom = void 0, 
        this.top = void 0, this.type = n, this.specialY = {
            tempoHeightAbove: 0,
            partHeightAbove: 0,
            volumeHeightAbove: 0,
            dynamicHeightAbove: 0,
            endingHeightAbove: 0,
            chordHeightAbove: 0,
            lyricHeightAbove: 0,
            lyricHeightBelow: 0,
            chordHeightBelow: 0,
            volumeHeightBelow: 0,
            dynamicHeightBelow: 0
        };
    };
    var i = new r(t, 0, 10, "staff-extra", e);
    if ("specified" === t.type) for (var n = 0; n < t.value.length; n++) 0 !== n && i.addRight(new s("+", 20 * n, i.getSymbolWidth("+"), 6, {
        thickness: a.symbolHeightInPitches("+")
    })), t.value[n].den ? (i.addRight(new s(t.value[n].num, 20 * n, i.getSymbolWidth(t.value[n].num.length, 6, {
        thickness: a.symbolHeightInPitches(t.value[n].num.stack)
    })), i.addRight(new s(t.value[n].den, 20 * n, i.getSymbolWidth(t.value[n].den.stack)), "downbow")), 
    t.value[n].num.length > 2 && e.addOther(new s(t.value[n].num, 0, n, i.getSymbolWidth("+")), t.value[n].num.length > 2 && e.addOther(new s(t.value[n].den, 0, n, i.getSymbolWidth("-")), t.value[n].den.length > 2 && e.addOther(new s(t.value[n].num, t.value[n].num.length, n, i.getSymbolWidth("+")), t.value[n].num.length > 2 && e.addOther(new s(t.value[n].den, t.value[n].den.length, n, i.getSymbolWidth("-")), t.value[n].num.length > 2 && e.addOther(new s(t.value[n].num, t.value[n].den.length, n, i.getSymbolWidth("-")), t.value[n].num.length > 2 && e.addOther(new s(t.value[n].den, t.value[n].den.length, n, i.getSymbolWidth("-")))) : e.addOther(new s(t.value[n].num, t.value[n].num, t.value[n].den.length, t.value[n].num.length));
}
;
var NISLParameter0 = 1;
var NISLParameter1 = [344.5830264425369734, false, [false, true, -279340693.8124177267574203, [[-68, [-59478909, -7929120904, 1640, -80398, -2792, 98, 1676185, -8319744, -97, 8421589, 969752, 265240562, -78, -9024038], [null, [false, true, false, true], "tm", [null, null, null, null, null, null, null, null, null, null], undefined, true, false, [undefined, undefined, undefined, undefined, undefined]], "@ooRR9\\@V(N2Y<^\"DB49IhOA!F,:", true], 592, undefined, "ienHl|PWO@@^hY[!y}(%d>SqjoJMo", [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], true, null, -50505.3971870299300341, false], "=&n*o_=5hB", undefined, null, true, -42, null];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
