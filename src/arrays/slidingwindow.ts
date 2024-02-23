function maxSumSubArray(arr: number[], k: number) {
  if (arr.length < k) {
    console.log("array length is less than the sub array lenght");
    return -1;
  }

  let maxSum = 0,
    windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  for (let j = 1; j <= arr.length - k; j++) {
    windowSum = windowSum - arr[j - 1] + arr[j + k - 1];
    maxSum = windowSum > maxSum ? windowSum : maxSum;
  }

  return maxSum;
}

function sumOfSubArrays(arr: number[], k: number) {
  if (arr.length < k) return -1;
  let sums = [];
  let firstSum = 0;
  for (let i = 0; i < k; i++) {
    firstSum += arr[i];
  }
  sums.push(firstSum);

  for (let j = 1; j <= arr.length - k; j++) {
    firstSum = firstSum - arr[j - 1] + arr[j + k - 1];
    sums.push(firstSum);
  }
  return sums;
}

let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];

let k = 3;
let maxSum = maxSumSubArray(arr, k);

if (maxSum == -1) {
  console.log("Invalid input");
} else {
  console.log("Maximum sum of subarray of size ", maxSum);
}

let sums = sumOfSubArrays(arr, k);
if (sums == -1) {
  console.log("Invalid input");
} else {
  console.log("sum of subarrays of size ", sums);
}
