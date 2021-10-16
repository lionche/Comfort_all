function(n) {
    var tab, i, j, len;
    len = 1000;
    for(j = 0; j < n; j++) {
        tab = [];
        for(i = 0; i < len; i++)
            tab[i] = i;
    }
    return len * n;
}