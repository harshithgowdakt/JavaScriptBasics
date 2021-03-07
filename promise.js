
function squareRoot(value) {
    return new Promise((resolve, reject) => {
        if (value > 0) {
            resolve(Math.sqrt(value));
        } else {
            reject("Can't find square root for negetive number");
        }
    });
}

squareRoot(10)
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    })