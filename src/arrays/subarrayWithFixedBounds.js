//https://leetcode.com/problems/count-subarrays-with-fixed-bounds/description/
/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  let res = 0;
  let badIdx = -1,
    leftIdx = -1,
    rightIdx = -1;

  for (let i = 0; i < nums.length; ++i) {
    if (!(nums[i] >= minK && nums[i] <= maxK)) badIdx = i;
    if (nums[i] === minK) leftIdx = i;
    if (nums[i] === maxK) rightIdx = i;
    res += Math.max(0, Math.min(leftIdx, rightIdx) - badIdx);
  }

  return res;
};

var countSubarraysBruteForce = (nums, minK, maxK) => {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let subarray = nums.slice(i, j + 1);
      if (Math.max(...subarray) === maxK && Math.min(...subarray) === minK) {
        res += 1;
      }
    }
  }
  return res;
};
