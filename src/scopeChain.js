let globalVar = "global";

function outerFunction() {
    let outerVar = "outer";

    function innerFunction() {
        let innerVar = "inner";
        console.log(innerVar); // Local scope (found in innerFunction)
        console.log(outerVar); // Outer scope (found in outerFunction)
        console.log(globalVar); // Global scope (found globally)
    }

    innerFunction();
}

outerFunction();