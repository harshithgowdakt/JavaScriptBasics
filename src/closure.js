/*
    A closure is the combination of a function bundled together (enclosed)
    with references to its surrounding state (the lexical environment).
 */


function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

let count = counter();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());


function publicFunction() {
    function privateFunction() {
        console.log('I was called in privated function');
    }
    return function () {
        privateFunction();
    }
}

let privateFunction = publicFunction();
privateFunction();

//real time exmaple

function testPromise(x) {
    return new Promise((resolve) => {
        let s = x + 10;
        resolve(10);
    });
}

let sum = testPromise(1);