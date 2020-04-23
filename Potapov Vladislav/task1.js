function splitAndMerge(str, sp) {
    var words = str.split(' ');
    return words.map(function(word){
        return word.split('').join(sp);
    }).join(' ');
}


console.log(splitAndMerge("My name is John"," "));
console.log(splitAndMerge('Hello World!',','));