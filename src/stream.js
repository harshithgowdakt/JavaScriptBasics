let fs = require('fs');

let stream = fs.createReadStream("test.json", { highWaterMark: 1024 * 1024 * 10 });
let count = 0;

stream.on('data', (chunk) => {
    fs.writeFileSync(`res-${count}.json`, chunk, { encoding: "utf8" });
    count++;
});

stream.on("end", () => {
    console.log("stream ended");
});

stream.on('close', () => {
    console.log("closed");
})

// let data = fs.readFileSync('res.json');

// console.log(JSON.parse(data).length);