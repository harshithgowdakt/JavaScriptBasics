function kthElement(A, B, n, m, k) {
    if (A.length > B.length) {
        [A, B] = [B, A];
    }

    let start = Math.max(0, k - m), end = Math.min(k, n);

    while (start <= end) {
        let mid1 = Math.floor((start + end) / 2);
        let mid2 = k - mid1 - 1;

        let aLeft = mid1 >= 0 ? A[mid1] : -Infinity;
        let bLeft = mid2 >= 0 ? B[mid2] : -Infinity;

        let aRight = mid1 + 1 < n ? A[mid1 + 1] : Infinity;
        let bRight = mid2 + 1 < m ? B[mid2 + 1] : Infinity;

        if (aLeft <= bRight && bLeft <= aRight) {
            return Math.max(aLeft, bLeft);
        } else if (aLeft > bRight) {
            end = mid1 - 1;
        } else {
            start = mid1 + 1;
        }
    }

    return -1;
}