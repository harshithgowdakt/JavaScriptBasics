function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const increment = counter();
console.log(increment()); // 1 
console.log(increment()); // 2