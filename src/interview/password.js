function getMinandMaxTime(numberOfRetries, passwords, correctPassword) {
    let retries = numberOfRetries;
    let minTime = 0;
    let maxTime = 0;
    let found = false;
    for (let i = 0; i < passwords.length; i++) {
        if (!found) {
            minTime += 1;
        }
        maxTime += 1;
        if (correctPassword === passwords[i]) {
            found = true;
        } else if (retries === 0) {
            retries = numberOfRetries;
            if (!found) {
                minTime += 5;
            }
            maxTime += 5;
        } else if (correctPassword.length < passwords[i].length) {
            break;
        }
        retries -= 1;
    }
    return [minTime, maxTime];
}

console.log(getMinandMaxTime(1, ["aa1", "bbb", "ccc", "ddd", "qqq", "qawdw"], "aa1"));