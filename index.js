class Solution {
    kthElement(A, B, n, m, k) {
        if (A.length > B.length) {
            [A, B] = [B, A];
        }

        let start = Math.max(k - B.length, 0), end = Math.min(k, n1);

        while (start <= end) {
            let mid1 = Math.floor((start + end) / 2);
            let mid2 = k - mid1 - 2;

            let aLeft = mid1 >= 0 ? A[mid1] : -Infinity;
            let bLeft = mid2 >= 0 ? B[mid2] : -Infinity;

            let aRight = mid1 + 1 <= A.length - 1 ? A[mid1 + 1] : Infinity;
            let bRight = mid2 + 1 <= B.length - 1 ? B[mid1 + 1] : Infinity;

            if (aLeft <= bRight && bLeft <= aRight) {
                return Math.max(aLeft, bLeft);
            } else if (aLeft > bRight) {
                end = mid1 - 1;
            } else {
                start = mid1 + 1;
            }
        }
    }
}