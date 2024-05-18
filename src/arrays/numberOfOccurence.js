/**
    Given a sorted array Arr of size N and a number X, you need to find the number of occurrences of X in Arr.

    Example 1:

    Input:
    N = 7, X = 2
    Arr[] = {1, 1, 2, 2, 2, 2, 3}
    Output: 4
    Explanation: 2 occurs 4 times in the
    given array.
 */

function count(arr, n, x) {

    function binarySearch(nums, x, bound = "lower") {
        let startIndex = 0, endIndex = arr.length - 1;
        let index = -1;
        while (startIndex <= endIndex) {
            let mid = Math.floor((startIndex + endIndex) / 2);

            if (nums[mid] == x) {
                index = mid;
                if (bound == "lower") endIndex = mid - 1;
                else startIndex = mid + 1;
            } else if (x < nums[mid]) {
                endIndex = mid - 1;
            } else {
                startIndex = mid + 1;
            }
        }
        return index;
    }

    let lowerBound = binarySearch(arr, x, "lower");
    let uppperBound = binarySearch(arr, x, "upper");

    if (lowerBound === -1) return 0;
    return uppperBound - lowerBound + 1
}
