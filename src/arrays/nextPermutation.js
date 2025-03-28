/**
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, 
if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation 
of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged
as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
*/

var nextPermutation = function (nums) {
  let index = -1;

  const reverse = function (arr, start, end) {
    while (start < end) {
      let tem = arr[start];
      arr[start] = arr[end];
      arr[end] = tem;
      start++;
      end--;
    }
  };

  // find the first decreasing number
  // 2 1 5 4 3 = in this case first decreasing number is 1 from right
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[i - 1]) {
      index = i - 1;
      break;
    }
  }

  // if we didn't find the decreasing, it is the highest number
  // 5 4 3 2 1 - we can't have next permutation
  if (index == -1) {
    reverse(nums, 0, nums.length - 1);
    return;
  }

  // next find the next geater number
  // 2 1 5 4 3 - in this case 3 and swap them
  // 2 3 5 4 1 - result
  for (let i = nums.length - 1; i > index; i--) {
    if (nums[i] > nums[index]) {
      let temp = nums[i];
      nums[i] = nums[index];
      nums[index] = temp;
      break;
    }
  }

  // then reverse array from index+1;
  reverse(nums, index + 1, nums.length - 1);
};

let nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums);
