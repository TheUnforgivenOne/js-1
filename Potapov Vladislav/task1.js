function splitAndMerge(str, sp) {
    strWithoutSpaces = str.split(' ').join('');
    return strWithoutSpaces.split('').join(sp);
}

console.log(splitAndMerge("My name is John"," "));
console.log(splitAndMerge('Hello World!',','));