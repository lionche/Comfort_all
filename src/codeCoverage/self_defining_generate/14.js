var NISLFuzzingFunc = function(e, t, n) {
    var r = t.x, i = t.y, a = t.z, o = e.x, u = e.y, s = e.z, c = e.w, l = o * o + u * u - a * a + s * s, f = o * a + u * o - a * u, h = o * s + u * l + a * l, d = o * l + u * s - a * s, p = o * u + u * l - a * u, m = o * l - u * o + a * u, y = u * s - a * h + s * d, E = o * d - u * p + a * m;
    return n.x = l, n.y = f, n.z = h, n.w = d, n;
}
;
var NISLParameter0 = undefined;
var NISLParameter1 = [null, [5], undefined, "Q+F, :HT5L@^87D oJXE*t?ubZJaBYv~oE~+sgp&+^:e.'vO'''JsEfD|S,nZVu4CEZ*0u E,-C0w5o M5>t,6.!r", "oodPIuU?+v@Ve2Zxb{#6N7n wuEUi+TEn$J{g8ZT2", [64, -3641462, -801165366, -76574, 0, 3, -65, -7125288270, -61, -62789, -645885, 67039], -700052.025111580352614182, "Of9v#vg:~4\"a'Te$}dZJ}HWqm@iT}+W?XeR.b.VM4&{T1)yDjtyX4;4x5wYx`?,b7gH&vqno|BH~]V4K6kFt?a"];
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
