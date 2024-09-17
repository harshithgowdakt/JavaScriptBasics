// Using var in a loop (unexpected behavior)
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i); // Prints 3 three times (because of function-scoping)
    }, 100);
}

// Using let in a loop (expected behavior)
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i); // Prints 0, 1, 2 as expected (block-scoping)
    }, 100);
}

function createFunctions() {
    let arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i); // The variable i is shared across all closures
        });
    }
    return arr;
}

const funcs = createFunctions();
funcs[0](); // 3
funcs[1](); // 3
funcs[2](); // 3


function createFunctions() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i); // The variable i is shared across all closures
        });
    }
    return arr;
}

const f = createFunctions();
f[0](); // 0
f[1](); // 1
f[2](); // 2