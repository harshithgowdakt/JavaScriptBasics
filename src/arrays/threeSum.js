/**
  Three Sum Problem:

  Problem Statement: Given an array nums of n integers,
  find all unique triplets in the array which gives the sum of zero. 
  The solution set must not contain duplicate triplets.
  Example: Input: nums = [-1, 0, 1, 2, -1, -4], Output: [[-1, -1, 2], [-1, 0, 1]].

  [-4,-1,-1,0,1,2]

  Approach:

  1. Sort the array. This helps in avoiding duplicate triplets and makes it easier to move pointers based on their sum comparison with 0.

  2. Iterate through the array, taking one number at a time. Let's call this number a. For each a, we need to find two other numbers b and c such that a + b + c = 0.

  3 .For each a, set two pointers: one (left) at the element immediately after a, and another (right) at the last element of the array. If a is at index i, then left = i + 1 and right = nums.length - 1.

  4. While left < right, calculate the sum s = a + nums[left] + nums[right]. Based on the sum s:

  If s < 0, increment left to move towards higher values.
  If s > 0, decrement right to move towards lower values.
  If s == 0, you've found a triplet. Add it to the solution set. Then, increment left and decrement right, 
  but also skip any duplicate values for left and right to avoid duplicate triplets.
  Avoid considering duplicate values of a by skipping duplicates in the main loop.

  Return the solution set containing all unique triplets that sum up to zero.

*/

const threeSum = function (nums) {
  let res = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i == 0 || (i > 0 && nums[i] != nums[i - 1])) {
      let start = i + 1,
        end = nums.length - 1;
      while (start < end) {
        let sum = nums[i] + nums[start] + nums[end];
        if (sum < 0) {
          start++;
        } else if (sum > 0) {
          end--;
        } else {
          res.push([nums[i], nums[start], nums[end]]);
          while (start < end && nums[start] === nums[start + 1]) start++;
          while (start < end && nums[end] == nums[end - 1]) end--;
          start++;
          end--;
        }
      }
    }
  }
  return res;
};
