function binarySearch(arr, left, right, search) {
    let midPoint = left + Math.floor(right / 2);

    if (search === arr[midPoint]) {
        return midPoint;
    } else if (search > arr[midPoint]) {
        return binarySearch(arr, midPoint + 1, right, search);
    } else {
        return binarySearch(arr, left, midPoint - 1, search);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(arr, 0, arr.length - 1, 10));

