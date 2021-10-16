function(n) {
    var i, j, r;
    r = 0;
    for(j = 0; j < n; j++) {
        for(i = 0; i < 1000; i++)
            r = Math.min(i, 500);
        global_res = r;
    }
    return n * 1000;
}