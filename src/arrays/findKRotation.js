/**
    Given an ascending sorted rotated array arr of distinct integers of size n. 
    The array is right-rotated k times. Find the value of k.

    Example 1:

    Input:
    n = 5
    arr[] = {5, 1, 2, 3, 4}
    Output: 1
*/

function findKRotation(arr, n) {
    let index = -1, minNumber = Number.MAX_SAFE_INTEGER;
    let startIndex = 0, endIndex = arr.length - 1;

    while (startIndex <= endIndex) {
        let mid = Math.floor((startIndex + endIndex) / 2);

        if (arr[startIndex] <= arr[mid]) {
            if (arr[startIndex] < minNumber) {
                minNumber = arr[startIndex];
                index = startIndex;
            }
            low = mid + 1;
        } else {
            end = mid;
        }
    }
    return index;
}