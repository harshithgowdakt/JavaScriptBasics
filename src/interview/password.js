function getMinAndMaxTime(maxRetries, passwords, correctPassword) {
    let retries = maxRetries;
    let minTime = 0;
    let maxTime = 0;
    let found = false;
    for (let i = 0; i < passwords.length; i++) {
        retries -= 1;
        if (!found)
            minTime += 1;

        maxTime += 1;
        if (correctPassword === passwords[i])
            found = true;

        if (correctPassword.length < passwords[i].length)
            break;

        if (retries <= 0) {
            retries = maxRetries;
            if (!found) {
                minTime += 5;
            }
            maxTime += 5;
        }
    }
    return [minTime, maxTime];
}

console.log(getMinAndMaxTime(2, ["awd", "aa1", "bbb", "ccc", "ddd", "qqq", "qawdw"], "aa1"));