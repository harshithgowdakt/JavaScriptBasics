const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);

const min = Math.min.apply(null, numbers);

console.log(min);

console.log(Math.min.call(null, ...numbers));
console.log(Math.max.call(null, ...numbers));