function(n) {
    var tab, len, sum, i, j;
    len = 10;
    tab = new Int32Array(len);
    for(i = 0; i < len; i++)
        tab[i] = i;
    sum = 0;
    for(j = 0; j < n; j++) {
        sum += tab[0];
        sum += tab[1];
        sum += tab[2];
        sum += tab[3];
        sum += tab[4];
        sum += tab[5];
        sum += tab[6];
        sum += tab[7];
        sum += tab[8];
        sum += tab[9];
    }
    global_res = sum;
    return len * n;
}