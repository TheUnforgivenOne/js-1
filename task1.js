function splitAndMerge(str, sp) {
    strWithoutSpaces = str.split(' ').join('');
    str = strWithoutSpaces.split('').join(sp);
    return str
}

console.log(splitAndMerge("My name is John"," "));
console.log(splitAndMerge('Hello World!',','));
