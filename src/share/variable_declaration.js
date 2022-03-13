// var declaration
console.log(varExample); // no error
var varExample = 10;
console.log(varExample);

var varExample = 20; // no error
console.log(varExample);

let letExample = 10;
console.log(letExample);

// let letExample = 20; // SyntaxError: Identifier 'letExample' has already been declared 

const constExample = 10;
console.log(constExample);
constExample = 20; // TypeError: Assignment to constant variable.


function x() {
    var y = 20;

    if (true) {
        var y = 10;
        console.log(y);
    }

    console.log(y);
}
x();

