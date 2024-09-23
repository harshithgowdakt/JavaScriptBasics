Promise.resolve("Success")
    .then(() => {
        throw new Error("Something went wrong");
    });
// No .catch() present

console.log("This still runs, but the error goes unhandled.");

