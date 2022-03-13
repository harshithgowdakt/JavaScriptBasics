// let fs = require('fs');

// // method 1
// var myCar1 = new Object();
// myCar.make = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 1969;

// console.log(myCar1);

// //method 2
// var myCar2 = {
//     make: 'Ford',
//     model: 'Mustang',
//     year: 1969
// };

// console.log(myCar2);

// //method 3 
// var myCar3 = {};
// myCar['make'] = 'Ford';
// myCar['model'] = 'Mustang';
// myCar['year'] = 1969;
// console.log(myCar3);

// //special key names
// var obj = {};
// obj['hello world'] = 'hello, world';
// obj['hello-world'] = 'hello, world';
// obj.hello_world = 'hello, world';
// obj['2'] = 'hello, world';
// console.log(obj);

// //enumarating over objects

// //method 1
// for (const key in obj) {
//     console.log(obj[key]);
// }

// // method 2
// for (const value of obj) {
//     console.log(value);
// }

// //method 3
// for (const [key, value] of Object.entries(obj)) {
//     console.log(`${key} : ${value}`)
// }


// let x = {
//     a: 10,
//     b: 10
// }

// let y = {
//     a: 10,
//     b: 10
// }

// console.log(x == y);


let source = { a: 10, b: 20 };
let target = {};
target = Object.create();
console.log(target === source);