/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  let count = new Map();
  let leftFar = 0,
    leftNear = 0,
    res = 0;

  for (let i = 0; i < nums.length; i++) {
    count.set(nums[i], (count.get(nums[i]) ?? 0) + 1);
    while (count.size() > k) {
      count.set(nums[leftNear], count.get(nums[leftNear]) - 1);

      if (count.get(nums[leftNear]) == 0) count.delete(nums[leftNear]);
      leftNear++;
      leftFar = leftNear;
    }

    while (count.get(nums[leftNear]) > 1) {
      count.set(nums[leftNear], count.get(nums[leftNear]) - 1);
      leftNear++;
    }

    if (count.size() == k) {
      res += leftNear - leftFar + 1;
    }
  }

  return res;
};
