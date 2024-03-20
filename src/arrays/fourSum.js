/**
    Given an array of N integers, your task is to find unique quads that add up to give a target value. 
    In short, you need to return an array of all the unique quadruplets [arr[a], arr[b], arr[c], arr[d]] such that their sum is equal to a given target.

    Example 1:
    Input Format: arr[] = [1,0,-1,0,-2,2], target = 0
    Result: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
    Explanation: We have to find unique quadruplets from the array such that the sum of those elements is equal to the target sum given that is 0. The result obtained is such that the sum of the quadruplets yields 0.

    Example 2:
    Input Format: arr[] = [4,3,3,4,4,2,1,2,1,1], target = 9
    Result: [[1,1,3,4],[1,2,2,4],[1,2,3,3]]
    Explanation: The sum of all the quadruplets is equal to the target i.e. 9.
*/

const fourSum = function (nums) {
  let ans = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let start = j + 1,
        end = nums.length - 1;

      while (start < end) {
        let sum = nums[i] + nums[j] + nums[start] + nums[end];
        if (sum < 0) {
          start++;
        } else if (sum > 0) {
          end--;
        } else {
          ans.push([nums[i], nums[j], nums[start], nums[end]]);
          while (start < end && nums[start] == nums[start + 1]) start++;
          while (start < end && nums[end] == nums[end - 1]) end--;
          start++;
          end--;
        }
      }
    }
  }
  return ans;
};
