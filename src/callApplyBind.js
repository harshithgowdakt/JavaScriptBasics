const numbers = [5, 6, 2, 3, 7];

console.log("max-apply", Math.max.apply(null, numbers));
console.log("min-apply", Math.min.apply(null, numbers));

console.log("min-call", Math.min.call(null, ...numbers));
console.log("max-call", Math.max.call(null, ...numbers));

let bindMax = Math.max.bind(null, ...numbers);
console.log("max-bind", bindMax());
