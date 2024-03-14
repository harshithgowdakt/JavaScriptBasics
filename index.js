function logestSumSubArrayTwoPointers(nums, target) {
  let maxLen = 0;
  let L = 0,
    R = 0;
  let sum = 0;

  while (R < nums.length) {
    sum += nums[R];
    while (sum > target && L <= R) {
      sum -= nums[L];
      L++;
    }
    if (sum == target) {
      maxLen = Math.max(maxLen, R - L + 1);
    }
    R++;
  }
  return maxLen;
}

console.log(
  logestSumSubArrayTwoPointers([5, 2, 3, 1, 1, 1, 1, 1, 5, 1, 9], 10)
);
