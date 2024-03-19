/**
Given an array containing both positive and negative integers, 
we have to find the length of the longest subarray with the sum of all elements equal to zero.

Example 1:
Input Format: N = 6, array[] = {9, -3, 3, -1, 6, -5}
Result: 5
Explanation: The following subarrays sum to zero:
{-3, 3} , {-1, 6, -5}, {-3, 3, -1, 6, -5}
Since we require the length of the longest subarray, our answer is 5!

Example 2:
Input Format: N = 8, array[] = {6, -2, 2, -8, 1, 7, 4, -10}
Result: 8
Subarrays with sum 0 : {-2, 2}, {-8, 1, 7}, {-2, 2, -8, 1, 7}, {6, -2, 2, -8, 1, 7, 4, -10}
Length of longest subarray = 8

Example 3:
Input Format: N = 3, array[] = {1, 0, -5}
Result: 1
Subarray : {0}
Length of longest subarray = 1

Example 4:
Input Format: N = 5, array[] = {1, 3, -5, 6, -2}
Result: 0
Subarray: There is no subarray that sums to zero


Approach
1. use prefix sum approach
2. calculate the sum and check if it equal to 0. if it is update the maxLen
3. else check if reminder existis in prefixsum map, if it is update the maxLen
4. if does't exist update the prefixSumMap
*/

const logestSumSubArrayWithZeroSumBruteForce = function (nums) {
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === 0) maxLen = Math.max(maxLen, j - i);
    }
  }
  return maxLen;
};

console.log(logestSumSubArrayWithZeroSumBruteForce([9, -3, 3, -1, 6, -5]));

const logestSumSubArrayWithZeroSum = function (nums) {
  let prefixSumToIndexMap = new Map();
  let maxLen = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum == 0) maxLen = i + 1;

    let rem = sum - 0;
    if (prefixSumToIndexMap.has(rem))
      maxLen = Math.max(maxLen, i - prefixSumToIndexMap.get(rem));
    else prefixSumToIndexMap.set(sum, i);
  }
  return maxLen;
};

console.log(logestSumSubArrayWithZeroSum([9, -3, 3, -1, 6, -5]));
