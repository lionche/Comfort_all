function(n) {
    var tab, i, j, len;
    len = 1000;
    tab = [];
    for(i = 0; i < len; i++) {
        if (i != 3)
            tab[i] = i;
    }
    for(j = 0; j < n; j++) {
        for(i = len - 1; i >= 0; i--)
            tab.length = i;
    }
    return len * n;
}