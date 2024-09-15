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