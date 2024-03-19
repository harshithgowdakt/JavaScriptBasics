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
