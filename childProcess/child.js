
process.on('message', (message) => {
    console.log('PID of child process ->', process.pid);
    console.log('Got message from main process ->', message);
    process.send('Hi Main process recevied message, closing the child process');
    process.exit(1);
});
