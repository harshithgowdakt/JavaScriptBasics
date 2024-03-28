var maxSubarrayLength = function (nums, k) {
  let L = 0,
    R = 0;
  let frequencyMap = new Map();

  let maxLen = 0;

  while (R < nums.length) {
    frequencyMap.set(nums[R], (frequencyMap.get(nums[R]) ?? 0) + 1);

    while (Math.max(...Array.from(frequencyMap.values())) > k) {
      frequencyMap.set(nums[L], (frequencyMap.get(nums[L]) ?? 0) - 1);
      if (frequencyMap.get(nums[L]) === 0) frequencyMap.delete(nums[L]);
      L++;
    }

    maxLen = Math.max(maxLen, R - L + 1);
    R++;
  }
  return maxLen;
};

console.log(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1));
