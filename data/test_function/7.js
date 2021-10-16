function(n) {
    var s, i, j, len = 100;
    s = new Set();
    for(j = 0; j < n; j++) {
        for(i = 0; i < len; i++) {
            s.add(String(i), i);
        }
        for(i = 0; i < len; i++) {
            if (!s.has(String(i)))
                throw Error("bug in Set");
        }
    }
    return n * len;
}