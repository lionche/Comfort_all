function(str, n) {
    str += "";
    while (str.length < n) {
        if ((n - str.length) & 1)
            str = str + " ";
        else
            str = " " + str;
    }
    return str;
}