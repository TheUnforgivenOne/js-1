Function.prototype.myBind = function (prop) {
    var parent = this;
    return function () {
        return parent.apply(prop, arguments);
    }
};

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1)); // 10