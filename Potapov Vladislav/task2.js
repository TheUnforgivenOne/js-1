function hashToArray(hash) {
    var arr = [];
    for (key in hash)
        arr.push([key, hash[key]]);
    return arr
}

var hash = {
    name: 'Jeremy',
    age: 24,
    role: 'Software Engineer'
};

console.log(hashToArray(hash));