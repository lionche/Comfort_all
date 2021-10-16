var NISLFuzzingFunc = function(a, b) {
    var c = b.getElementsByTagName(a[1]);
    if (0 === c.length) throw new Error("JSXGraph: Can't create layer with parent types '" + typeof b[0] + "' and '" + typeof a[1] + "'." + y);
    return c;
}
;
var NISLParameter0 = [false, true, false, true];
var NISLParameter1 = [-5.5897639551370129, 92225.4528308205133361, -2018047272.03651145297047953, 5999895286.6232982396943569, 6792.019702070337665467, 96.4500083215829568, 22.9216004381785171, -5818412150.7514236271678442, 362.9062839025029844, 0.5630675851383945, 3876.9468033665142865, 9039483203.3795854531446228, 821423.4818959247029919, 6982424.06567173913303004, 83.10020208711899525, -232.6130659807839189];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
