function lfloorSqrt(x) {
    let low = 1, high = x;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let val = mid * mid;
        if (val <= x) low = mid + 1;
        else high = mid - 1;
    }
    return high;
}