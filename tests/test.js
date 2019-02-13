function sayName(name) {
    let message = "My name is" + name
    return message
}

let arr = [5, -3,6, -5,0,-7,8,9];
let result = arr.reduce(function (sum, elem) {
    return sum + elem;
});

let assert = require('chai').assert;

describe("sayName", function () {
    it('should new name ', function () {
        assert.typeOf(sayName("Ivan"), 'string')
    });
});

describe("arr", function () {
    it('should get sum numbers of array ', function () {
        assert.equal(result, 13)
    });
});