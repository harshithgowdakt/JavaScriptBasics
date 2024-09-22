
// first
const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        console.log("timerStart");
        resolve("success");
        console.log("timerEnd");
    }, 0);
    console.log(2);
});

promise.then((res) => {
    console.log(res);
});
console.log(4);



// second
console.log('start');
const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
})
promise1.then(res => {
    console.log(res)
})
console.log('end');


let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data received"), 1000);
});

promise2
    .then((data) => {
        console.log(data); // "Data received"
        return "Processed data";
    })
    .then((processedData) => {
        console.log(processedData); // "Processed data"
    })
    .catch((error) => {
        console.error("Error:", error);
    });