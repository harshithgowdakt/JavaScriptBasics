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

function smallestSubarrayWithGivenSum(arr: number[], s: number): number {
  let minLength = Number.MAX_VALUE;
  let windowSum = 0;
  let windowStart = 0;
  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];
    while (windowSum >= s) {
      minLength = Math.min(minLength, i - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return minLength === Number.MAX_VALUE ? 0 : minLength;
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

console.log(smallestSubarrayWithGivenSum(arr, 7));
