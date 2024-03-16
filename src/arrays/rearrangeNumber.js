/**
You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

You should return the array of nums such that the the array follows the given conditions:

Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

Example 1:

Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]
Explanation:
The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  
Example 2:

Input: nums = [-1,1]
Output: [1,-1]
Explanation:
1 is the only positive integer and -1 the only negative integer in nums.
So nums is rearranged to [1,-1].
*/

const rearrangeArray = function (nums) {
  let positives = nums.filter((num) => num > 0);
  let negetives = nums.filter((num) => num < 0);
  for (let i = 0; i < nums.length / 2; i++) {
    nums[2 * i] = positives[i];
    nums[2 * i + 1] = negetives[i];
  }
  return nums;
};

const rearrangeTwoPointers = function (nums) {
  let positive = 0,
    negative = 1,
    ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      ans[positive] = nums[i];
      positive += 2;
    } else {
      ans[negative] = nums[i];
      negative += 2;
    }
  }
  return ans;
};

/**

There’s an array ‘A’ of size ‘N’ with positive and negative elements (not necessarily equal). 

Example 1:

Input:
arr[] = {1,2,-4,-5,3,4}, N = 6
Output:
1 -4 2 -5 3 4

Explanation: 

Positive elements = 1,2
Negative elements = -4,-5
To maintain relative ordering, 1 must occur before 2, and -4 must occur before -5.
Leftover positive elements are 3 and 4 which are then placed at the end of the array.
*/

[1, 2, 3, 4][(-4, -5)];
[1, -4, 2, -5, 3, 4];

const rearrangeNotEqual = function (nums) {
  let ans = [],
    positives = [],
    negetives = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) negetives.push(nums[i]);
    else positives.push(nums[i]);
  }

  if (negetives.length < positives.length) {
    for (let i = 0; i < negetives.length; i++) {
      ans[2 * i] = positives[i];
      ans[2 * i + 1] = negetives[i];
    }
    let index = negetives.length * 2;
    for (let i = negetives.length; i < positives.length; i++) {
      ans[index] = positives[i];
      index++;
    }
  } else {
    for (let i = 0; i < positives.length; i++) {
      ans[2 * i] = positives[i];
      ans[2 * i + 1] = negetives[i];
    }

    let index = positives.length * 2;
    for (let i = positives.length; i < negetives.length; i++) {
      ans[index] = negetives[i];
      index++;
    }
  }

  return ans;
};

function rearrangeOptimozed(nums) {
  let i = 0,
    j = 0,
    k = 0,
    positives = [],
    negetives = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) negetives.push(nums[i]);
    else positives.push(nums[i]);
  }

  while (i < positives.length && j < negetives.length) {
    nums[k++] = positives[i++];
    nums[k++] = negetives[j++];
  }

  while (i < positives.length) {
    nums[k++] = positives[i++];
  }

  while (j < negetives.length) {
    nums[k++] = negetives[j++];
  }

  return nums;
}
