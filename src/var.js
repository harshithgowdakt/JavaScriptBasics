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