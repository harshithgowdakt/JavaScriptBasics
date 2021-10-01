function solve(k, ar, str) {
    let localRetries = k;
    let minTimeCounter = 0;
    for (let i = 0; i < ar.length; i++) {
        localRetries -= 1;
        if (str === ar[i]) {
            minTimeCounter += 1;
            break;
        } else if (localRetries === 0) {
            localRetries = k;
            minTimeCounter += 6;
        } else {
            minTimeCounter += 1;
        }
    }

    let maxTimeCounter = 0;
    localRetries = k;
    for (let i = 0; i < ar.length; i++) {
        localRetries -= 1;
        if (str === ar[i]) {
            maxTimeCounter += 1;
        } else if (str.length < ar[i].length) {
            break;
        } else if (localRetries <= 0) {
            localRetries = k;
            maxTimeCounter += 6;
        } else {
            maxTimeCounter += 1;
        }
    }
    return [minTimeCounter, maxTimeCounter];
}

solve(1, ["aa1", "bbb", "ccc", "ddd", "qqq"], "aa1")

console.log(solve(1, ["awd", "aa1", "bbb", "ccc", "ddd", "qqq", "qawdw"], "aa1"));