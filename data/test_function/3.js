function(n) {
    var s, r, j;
    r = 0;
    s = "12345";
    r = 0;
    for(j = 0; j < n; j++) {
        r += (s | 0);
    }
    global_res = r;
    return n;
}