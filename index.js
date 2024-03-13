function logestSumSubArrayBruteForce(nums, target) {
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum == target) maxLen = Math.max(maxLen, j - i + 1);
    }
  }
  return maxLen;
}

console.log(logestSumSubArrayBruteForce([2, 3, 5, 1, 9], 10));
