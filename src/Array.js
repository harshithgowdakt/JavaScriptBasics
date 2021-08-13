
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