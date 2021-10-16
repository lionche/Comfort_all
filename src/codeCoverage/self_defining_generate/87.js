var NISLFuzzingFunc = function(e, t, n) {
    var r = e.getLine(n), i = r.length, s = e.getLength(), o = n, u = n;
    if (n = Math.abs(r.match(/^\s+Tn/i)) ? r : r[0] * 85, n = n * t, n = n - 1, r == "++" && (u = 0), 
    r == "--") {
        if (n == "pre" || n == "post" || n == "f") return;
        u = r[2] * 85;
    }
    if (n == "del") {
        u = r[3] * 85;
    }
    if (n == "int") {
        u = r[4] * 85;
    }
    if (n == "intEX" || n == "intEX") {
        u = r[5] * 85;
    }
    if (n == "float") {
        u = r[6] * 85;
    }
    if (n == "floatLITERAL") {
        u = r[7] * 85;
    }
    if (n == "floatLITERALEX" || n == "floatLITERAL") {
        u = r[8] * 85;
    }
    if (n == "floatLITERALEX" || n == "floatLITERAL") {
        u = r[9] * 85;
    }
    if (n == "floatROUNDEDRECTAL") {
        u = r[10] * 85;
    }
    if (n == "floatEXIF|" + t + "|" + e + "|" + n + ")$") {
        u = r[11] * 85;
    }
    if (n == "floatLITERALEX|" + t + "|" + e + "|" + n + ")$") {
        u = r[12] * 85;
    }
    if (n == "floatLITERALEX|" + t + "|" + e + "|" + n + ")$") {
        u = r[13] * 85;
    }
    if (n == "floatLITERALEX|" + t + "|" + e + "|" + n + ")$") {
        u = r[14] * 85;
    }
    if (n == "floatLITERALEX|" + t + "|" + e + "|" + n + ")$") {
        u = r[15] * 85;
    }
    if (n == "floatLITERALEX|" + t + "|" + e + "|" + n + ")$") {
        u = r[16] * 85;
    }
    if (n == "floatLITERALEX|" + t + "|" + e + "|" + n + ")$") {
        u = r[17] * 85;
    }
    return u;
}
;
var NISLParameter0 = 1;
var NISLParameter1 = -77;
var NISLParameter2 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
