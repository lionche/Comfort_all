function(n) {
    var r, i, j, sum;
    r = [];
    for(i = 0; i < 100; i++)
        r[i] = i;
    for(j = 0; j < n; j++) {
        sum = 0;
        for(i = 0; i < 100; i++) {
            sum += r[i];
        }
        global_res = sum;
    }
    return n * 100;
}