/**
    Problem Statement: Given an array and a sum k, 
    we need to print the length of the longest subarray that sums to k.

    Example 1:
    Input Format: N = 3, k = 5, array[] = {2,3,5}
    Result: 2
    Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

    Example 2:
    Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
    Result: 3
    Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.
*/

function logestSumSubArrayBruteForce(nums, target) {
  let maxLen = Number.MIN_VALUE;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum == target) maxLen = Math.max(maxLen, j - i + 1);
    }
  }
  return maxLen;
}

console.log(logestSumSubArrayBruteForce([5, 2, 3, 1, 1, 1, 1, 1, 5, 1, 9], 10));

function logestSumSubArrayPrefixSum(nums, target) {
  let prefixSumMap = new Map();
  let maxLen = 0,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === target) maxLen = Math.max(maxLen, i + 1);

    let rem = sum - target;
    if (prefixSumMap.has(rem))
      maxLen = Math.max(maxLen, i - prefixSumMap.get(rem));

    if (!prefixSumMap.has(sum)) prefixSumMap.set(sum, i);
  }
  return maxLen;
}

console.log(logestSumSubArrayPrefixSum([5, 2, 3, 1, 1, 1, 1, 1, 5, 1, 9], 10));
