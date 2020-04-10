function transform(array) {
    return array.map(function (element) {
        return function () {
            return element
        }
    });
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);

console.log(newArray[3]());
console.log(newArray[4]());