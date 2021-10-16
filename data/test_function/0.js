function(filename) {
    var f, str, res;
    if (typeof std === "undefined")
        return null;
    f = std.open(filename, "r");
    if (!f)
        return null;
    str = f.readAsString();
    res = JSON.parse(str);
    f.close();
    return res;
}