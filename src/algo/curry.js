// let sum = add(1)(2)(3)();
// sum 6

function add(x) {
    return function (y) {
        if(typeof y != 'number') return x;
        return add(x + y);
    }
}
console.log(add(1)(2)());