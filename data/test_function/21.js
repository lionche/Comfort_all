function(n, prec) {
    var i, s;
    for (i = 0; i < prec; i++)
        n *= 10;
    s = "" + Math.round(n);
    for (i = s.length - prec; i <= 0; i++)
        s = "0" + s;
    if (prec > 0)
        s = s.substring(0, i) + "." + s.substring(i);
    return s;
}