function(n, r) {
    var i, j;
    r = "";
    for(j = 0; j < n; j++) {
        for(i = 0; i < 100; i++)
            r = "x" + r;
        global_res = r;
    }
    return n * 100;
}