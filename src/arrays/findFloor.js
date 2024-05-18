function findFloor(arr, n, x) {
    let start = 0;
    let end = arr.length - 1;

    let floorIndex = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] <= x) {
            floorIndex = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return floorIndex;
}