const path = require('path');

console.log(path.normalize(`${__dirname}/..`))
console.log(path.parse(__filename));
console.log(path.join(__dirname, 'child_process'));