/**
    Given an array of integers nums and an integer k,
    return the total number of subarrays whose sum equals to k.

    A subarray is a contiguous non-empty sequence of elements within an array.

    Example 1:

    Input: nums = [1,1,1], k = 2
    Output: 2
    Example 2:

    Input: nums = [1,2,1,2,3], k = 3
    Output: 4
*/

const subarraySum = function (nums, k) {
  let subarrayCount = 0;
  let prefixSumMap = new Map();
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === k) subarrayCount++;
    let rem = sum - k;
    if (prefixSumMap.has(rem)) subarrayCount += prefixSumMap.get(rem);
    prefixSumMap.set(sum, (prefixSumMap.get(sum) || 0) + 1);
  }
  return subarrayCount;
};

console.log(subarraySum([1, 2, -1, 2, 3], 3));
