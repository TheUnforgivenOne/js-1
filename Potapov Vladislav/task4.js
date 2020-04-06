function reverceWords(str) {
    str = str.split(' ');
    for (key in str)
       str[key] = str[key].split('').reverse().join('');
    return str.join(' ')
}

console.log(reverceWords(' A fun little challenge! '));