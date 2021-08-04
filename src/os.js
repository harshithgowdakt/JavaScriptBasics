const os = require('os');

console.log('cpu count:', os.cpus().length);
console.log('arch:', os.arch());
console.log('home-dir:', os.homedir());
console.log('hostname:', os.hostname());
console.log('uptime', os.uptime() / 60 / 60, 'hrs');
console.log('use info:', os.userInfo());
console.log('total mem:', os.totalmem() / 1024 / 1024 / 1024, "GB");
console.log('get priority:', os.getPriority());
console.log('load average:', os.loadavg());