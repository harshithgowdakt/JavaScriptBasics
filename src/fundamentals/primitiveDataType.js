/**
    In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object
    and has no methods.
    There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

    All primitives are IMMUTABLE
 **/

// Using a string method doesn't mutate the string
let str = "hello";
str.toUpperCase();
console.log(str);
str = str.toUpperCase();
console.log(str);

let arr = [];
console.log(arr);
arr.push("plugh");
console.log(arr);


// exmaples

let num = 1;
let bool = true;
let nul = null;
let und = undefined;