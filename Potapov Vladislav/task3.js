function toCamelCase(str) {
    return str.replace(/[-_](.?)/g, function(match, p1) { return p1.toUpperCase() });
}

console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_Stealth_Warrior'));