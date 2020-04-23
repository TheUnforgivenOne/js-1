function sum() {
    var arr = [].slice.call(arguments);
    var f = function(arr){
        return arr.length > 1
            ? arr[0] + f(arr.slice(1))
            : arr[0]
    };
    return f(arr)
}

console.log(sum(1,3,5,7));