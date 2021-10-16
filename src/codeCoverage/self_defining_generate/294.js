var NISLFuzzingFunc = function(t, e, i, n, s, r) {
    var o = this.matrix, a = o[0], h = o[1], l = o[2], u = o[3], c = o[4], d = o[5], f = o[6], p = o[7], g = o[8], v = o[9], m = o[10], y = o[11], x = o[12], T = o[13], w = o[14], E = o[15], _ = a * i - h * n, b = a * s - l * n, A = a * r - u * n, M = h * s - c * n, S = h * r - d * n, C = l * r - u * i, O = l * s - c * i, P = u * s - d * i, x = c * r - d * s, L = a * b - h * E, D = a * A - l * E, F = a * M - h * O, B = l * A - u * E, k = c * b - d * E, z = c * A - h * O, q = h * M - l * O, G = c * O - u * O, V = u * N - d * O, W = d * M - l * O, H = l * N - a * O, X = a * z - f * E, k = f * A - p * E, Y = p * z - d * E, k = u * A - d * z, V = u * z - a * z, W = o[0], X = o[1], K = o[2], Z = o[3], V = o[4], Y, G, W, H, X, k;
    for (l = 0; l < 4; ++l) {
        o = x * l + u * l + d * l + h * l + f * l + p * l + g * l + v * l + y * l;
        o[l] = w * r + P * a + D * h + L * a + F * h + B * a + B * i;
        o[l + 1] = w * s + P * u + D * f + L * f + F * u + B * u + F * i;
        o[l + 2] = w * l + U * a + D * f + L * f + F * u + B * u + B * i;
        o[l + 3] = w * l + U * s + D * f + L * f + F * u + B * u;
        o[l + 4] = V * r + z * a + Y * h + K * a + z * h + K * i;
        o[l + 5] = V * s + Y * u + z * f + K * f + V * i;
        o[l + 6] = W * r + P * u + D * f + L * f + F * u + B * u + F * i;
        o[l + 7] = W * s + U * h + D * f + L * f + F * r;
        o[l + 8] = W * l + U * s + D * f + L * f + F * r;
        return this;
    };
}
;
var NISLParameter0 = null;
var NISLParameter1 = [-54462, -60822749, 1, 7855399629, -1];
var NISLParameter2 = 507;
var NISLParameter3 = 1;
var NISLParameter4 = ["O-q5eN^7Po>4^$!M7;7j'TeYdzz5Gz<w-[C/>6:`V\"y(5\\(g.]+<LI$H^/9)'i;SO(@k5"];
var NISLParameter5 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2, NISLParameter3, NISLParameter4, NISLParameter5);
print(NISLCallingResult);
