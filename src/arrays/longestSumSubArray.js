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

console.log(logestSumSubArrayBruteForce([2, 3, 5, 1, 9]));
