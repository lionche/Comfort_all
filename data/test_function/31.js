function(str, n) {
    str += "";
    while (str.length < n)
        str = " " + str;
    return str;
}