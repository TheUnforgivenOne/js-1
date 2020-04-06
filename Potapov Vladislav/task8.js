function sum(...args) {
    return arguments.length > 1 ? args[0] + sum(...args.slice(1)) : args[0]
}

console.log(sum(1,3,5,7));