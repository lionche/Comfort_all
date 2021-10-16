function() {
    var i, n, s, a;
    s = "";
    for (i = 0, n = arguments.length; i < n; i++) {
        if (i > 0)
            s += " ";
        a = arguments[i];
        if (typeof a == "number") {
            total[i] += a;
            a = toPrec(a, precs[i]);
            s += pad_left(a, widths[i]);
        } else {
            s += pad_left(a, widths[i]);
        }
    }
    console.log(s);
}