function toCamelCase(str) {
    str = str.replace(/-[a-zA-Z]/g, function(match) { return match.toUpperCase() }).replace(/-/g, '');
    str = str.replace(/_[a-zA-Z]/g, function(match) { return match.toUpperCase() }).replace(/_/g, '');
    return str
}

console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_Stealth_Warrior'));