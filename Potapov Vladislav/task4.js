function reverceWords(str) {
    return str.split(' ').map(function(word) {
        return word.split('').reverse().join('');
    }).join(' ');
}

console.log(reverceWords(' A fun little challenge! '));