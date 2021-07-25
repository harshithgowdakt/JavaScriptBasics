function test(x, y) {
    return x + y;
}

let sum = test(2, 5);

console.log(test.arguments, test.caller, test.length, test.name, test.prototype, test.toString())