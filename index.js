//Input: nums = [-1,0,1,2,-1,-4]
[-4, -1, -1, 0, 1, 2];
function threeSum(nums) {
  let ans = [];

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let start = i + 1,
      end = nums.length - 1;
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];
      if (sum < 0) {
        start++;
      } else if (sum > 0) {
        end--;
      } else {
        ans.push([nums[i], nums[start], nums[end]]);
        while (start < end && nums[start] === nums[start + 1]) start++;
        while (start < end && nums[end] == nums[end - 1]) end--;
        start++;
        end--;
      }
    }
  }

  return ans;
}
