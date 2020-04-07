function hashToArray(hash) {
    return Object.entries(hash)
}

var hash = {
    name: 'Jeremy',
    age: 24,
    role: 'Software Engineer'
};

console.log(hashToArray(hash));