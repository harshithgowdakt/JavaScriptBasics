const path = require('path');

let rootDir = path.normalize(`${__dirname}/..`);
console.log(rootDir);

console.log(path.parse(__filename));
console.log(path.join(__dirname, 'child_process'));