function ßNthRoot(n, m) {
    let low = 1, high = m;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let power = Math.pow(mid, n);
        if (power == m) return mid;
        else if (power > m) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}