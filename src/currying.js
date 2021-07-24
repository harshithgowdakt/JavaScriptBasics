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