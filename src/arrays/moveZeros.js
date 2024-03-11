/**
Given an integer array nums, move all 0's to the end of it while maintaining 
the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 */

function moveZeros(nums) {
  //base case
  if (nums.length < 2) return nums;
  //pointers
  let L = 0,
    R = 1;
  while (L < R) {
    if (nums[L] != 0) {
      L++;
      R++;
    } else if (nums[R] == 0) {
      R++;
    } else {
      nums[L] = nums[R];
      nums[R] = 0;
      L++;
      R++;
    }
  }
  return nums;
}
