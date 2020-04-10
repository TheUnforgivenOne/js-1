function stringExpansion(str) {
    return str.replace(/([\d])([\D])/gi, function (res, p1) {
        return res.replace(/[\d]/g,'').repeat(p1);
    }).replace(/[\d]/g,'');
}

console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));