
//isArray
let arr = [1, 2, 3];
console.log(Array.isArray(arr));

//Objec.entries and sort
let obj = { a: 1, b: 2, c: 3, d: 5, f: 4, g: 40, L: 6 };
let sortedObject = {};

for (let [key, value] of Object.entries(obj).sort((a, b) => b[1] - a[1])) {
    sortedObject[key] = value;
}
console.log(sortedObject);

let empty = [1, 2, 3];
let length = empty.length

for (let index = 0; index < empty.length; index++) {
    console.log(index);
    console.log("popped ele", empty.pop());
}

empty.length = 0;
console.log("emptied array", empty);



const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
let removed = months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months, removed);



const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 5));
console.log(animals.slice(-2));
console.log(animals.slice(-2), animals);