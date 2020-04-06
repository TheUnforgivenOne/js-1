function largest() {
    var max = arguments[0];
    for (element of arguments)
        max = element > max ? element : max;
    return max
}

function smallest(){
    var min = arguments[0];
    for (element of arguments)
        min = element < min ? element : min;
    return min
}

console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));