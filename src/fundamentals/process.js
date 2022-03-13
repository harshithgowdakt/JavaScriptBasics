console.log('process uptime', process.uptime());
console.log(`This process is pid ${process.pid}`);
//process.send
//process.exit
//process.chdir
//process.cwd

process.on('uncaughtException', (err) => {
    console.log("Some issue", err);
});

throw new Error("Something went worng!!!!!");

