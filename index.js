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
