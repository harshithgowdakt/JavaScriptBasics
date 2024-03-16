const leaders = function (nums) {
  let max = Number.MIN_VALUE;
  let ans = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > max) ans.push(nums[i]);
    max = Math.max(max, nums[i]);
  }
  return ans.sort((a, b) => a - b);
};

console.log(leaders([10, 22, 12, 3, 0, 6]));
