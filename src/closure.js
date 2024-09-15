function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

let counter1 = counter();
console.log(counter1());
console.log(counter1());

let counter2 = counter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());



function createMultiplayers(multiplyer) {
    return function (number) {
        return multiplyer * number;
    }
}


let double = createMultiplayers(2);
console.log(double(2));
console.log(double(3));
console.log(double(4));
console.log(double(5));


let triple = createMultiplayers(3);
console.log(triple(2));
console.log(triple(3));
console.log(triple(4));
console.log(triple(5));
console.log(triple(6));

