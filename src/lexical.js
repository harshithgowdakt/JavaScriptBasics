let globalVar = 'I am global';

function outer() {
    let outerVar = 'I am outer';

    function inner() {
        console.log(outerVar); // Will log the value from its lexical scope, not where it's called
    }

    return inner;
}

const innerFunction = outer(); // Capture the inner function with outerVar in its lexical scope

let outerVar = 'I am from a different scope'; // This variable is declared in the global scope

innerFunction(); // Output: 'I am outer'