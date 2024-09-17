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