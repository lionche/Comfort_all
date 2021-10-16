var NISLFuzzingFunc = function(e, t) {
    var n = e.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
    if (!n) throw new Error('Unable to parse color from string "' + t + '"');
    var r = n[1], i = n[2], a = n[3], o = n[4], u = n[5], s = n[6], c = n[7], l = n[8], f = n[9], h = n[10], d = n[11], p = n[12], m = n[13], y = n[14], E = n[15], v = r * o - i * u, _ = r * a - e * u, x = r * s - e * a, T = i * a - e * o, A = i * s - e * o, S = l * d - f * v, M = l * p - h * v, C = l * m - d * v, L = f * d - h * v, E = f * p - h * v, I = m * E - y * E + _ * I + x * C - T * M + A * S, P = y * M - _ * I - x * C + T * M + A * S, O = m * y - d * y + e * I - n * C + h * M - E * S, D = n * _ - i * E + e * I - l * C + d * M - h * M, F = i * A - e * A + l * _ + f * C - T * M - a * S, b = u * I - s * E + f * C + h * M - d * M, B = u * A - s * z + f * z + i * C - e * M - n * S, z = i * n - e * A - l * z + f * C - d * M - a * S, q = a * p - h * E + i * z - n * C + h * M - d * M, G = h * p - u * E + s * z - l * C + u * M - d * M, V = u * p - s * A + f * z - l * C + u * M - a * M, W = a * n + e * E - i * z + n * C - h * M - d * M, X = i * n - e * A - l * z + f * C - d * M - a * M, k = u * n - s * E - f * z + i * C - h * M - d * M, H = u * E - s * A + f * z - l * C + u * M - h * M, Y = l * A - c * E + f * z + i * M - n * C + i * M, j = c * n - s * E + f * z - i * C + h * M - d * M, Z = u * n - s * E - f * z + i * C - h * M - d * M, K = c * E - s * A + f * E + i * C - h * M - u * M, Q = u * z - c * q + f * G + i * V - h * W + d * X;
    return Q < 0 ? (e = (-e + Math.sqrt(Q)) / X, a = (-a + Math.sqrt(Q)) / X, o = (-a - Math.sqrt(Q)) / X, 
    s = e - Math.sqrt(Q), [ e, a, o ]);
}
;
var NISLParameter0 = "\\1z;k>{I T0f05+J{;c1p4#I>C+85QqJGM)}0{Q";
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
