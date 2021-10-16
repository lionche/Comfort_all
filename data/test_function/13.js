function(n) {
    function f(a)
    {
        return 1;
    }

    var j, sum;
    sum = 0;
    for(j = 0; j < n; j++) {
        sum += f(j);
        sum += f(j);
        sum += f(j);
        sum += f(j);
    }
    global_res = sum;
    return n * 4;
}