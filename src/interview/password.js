function getMinAndMaxTime(k, ar, str) {
    let retries = k;
    let minTime = 0;
    let maxTime = 0;
    let found = false;
    for (let i = 0; i < ar.length; i++) {
        retries -= 1;
        if (!found)
            minTime += 1;

        maxTime += 1;
        if (str === ar[i])
            found = true;

        if (str.length < ar[i].length)
            break;

        if (retries <= 0) {
            retries = k;
            if (!found) {
                minTime += 5;
            }
            maxTime += 5;
        }
    }
    return [minTime, maxTime];
}

console.log(getMinAndMaxTime(2, ["awd", "aa1", "bbb", "ccc", "ddd", "qqq", "qawdw"], "aa1"));