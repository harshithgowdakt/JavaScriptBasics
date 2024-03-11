function maxNum(nums) {
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
  }
  return max;
}
