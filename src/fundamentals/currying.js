/*
    currying is the technique of converting a function that takes multiple arguments
    into a sequence of functions that each takes a single argument.
 */

function adder(x) {
    return function (y) {
        return x + y;
    }
}

let add5 = adder(5);
console.log(add5(1));
console.log(add5(2));
console.log(add5(3));
console.log(add5(4));
console.log(add5(5));

let add7 = adder(7);
console.log(add7(1));
console.log(add7(2));
console.log(add7(3));
console.log(add7(4));
console.log(add7(5));

function multiplier(x) {
    return function (y) {
        return x * y;
    }
}

let multiply3 = multiplier(3);
console.log(multiply3(1));
console.log(multiply3(2));
console.log(multiply3(3));
console.log(multiply3(4));
console.log(multiply3(5));

let multiply4 = multiplier(4);
console.log(multiply4(1));
console.log(multiply4(2));
console.log(multiply4(3));
console.log(multiply4(4));
console.log(multiply4(5));


//exmaple

let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.map(a => a + 2));

function add(a) {
    return function (b) {
        return a + b;
    }
}

console.log(arr.map(add(2)));

