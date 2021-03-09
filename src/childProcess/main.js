const child_process = require('child_process');

let child = child_process.fork(`${__dirname}/child.js`);

child.send('Hello world');
child.on('message', (message) => {
    console.log('Got the message from the child ->', message);
});

child.on('exit', (code)=>{
    console.log('Child proces exited', code);
});