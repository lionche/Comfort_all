function(filename, obj) {
    var f;
    if (typeof std === "undefined")
        return;
    f = std.open(filename, "w");
    f.puts(JSON.stringify(obj, null, 2));
    f.puts("\n");
    f.close();
}