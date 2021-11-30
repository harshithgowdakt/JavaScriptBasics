/**
 * var is function scope and let is block scope
 * hoisting = var show undefined and let through reference error
 * can't redclare let variables, but var variables can be redeclared
 * var variables are attached to global abject
 */


console.log("x", x);
let x = 10;

var funcs = [];
// let's create 3 functions
for (var i = 0; i < 3; i++) {
    // and store them in funcs
    funcs[i] = function () {
        // each should log its value.
        console.log("My value: " + i);
    }
}

for (var j = 0; j < 3; j++) {
    // and now let's run each one to see
    funcs[j]();
}
// My Value : 3 for all the functions

// let example

var funcs = [];
// let's create 3 functions
for (let i = 0; i < 3; i++) {
    // and store them in funcs
    funcs[i] = function () {
        // each should log its value.
        console.log("My value: " + i);
    }
}

for (var j = 0; j < 3; j++) {
    // and now let's run each one to see
    funcs[j]();
}

let ex = [1, 2, 3]
for (let index = 0; index < 3; index++) {
    setTimeout(function () {
        console.log("inside set timeout", index, ex[index]);
    }, 1000);
}