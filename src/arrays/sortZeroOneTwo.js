/**
Given an array nums with n objects colored red, white, or blue, 
sort them in-place so that objects of the same color are adjacent,
with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
*/

// O(NlogN)
function sortBruteForce(nums) {
  nums.sort((a, b) => a - b);
}

// O(2N)
function sortBetter(nums) {
  let zerosCount = 0,
    onesCount = 0,
    twosCount = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] == 0) zerosCount++;
    else if (nums[i] === 1) onesCount++;
    else twosCount++;
    i++; // Increment i to move to the next element
  }

  i = 0; // Reset i to 0 for the second loop
  while (zerosCount != 0) {
    nums[i] = 0;
    zerosCount--;
    i++;
  }

  while (onesCount != 0) {
    nums[i] = 1;
    onesCount--;
    i++;
  }

  while (twosCount != 0) {
    nums[i] = 2;
    twosCount--;
    i++;
  }
}

// dutch national flag algorithm
// O(N)
function sortOptimal(nums) {
  if (nums.length < 2) return;
  let start = 0,
    end = nums.length - 1,
    i = 0;

  while (i < nums.length && start <= end) {
    if (nums[i] == 0) {
      nums[i] = nums[start];
      nums[start] = 0;
      i++;
      start;
    } else if (nums[i] === 1) {
      i++;
    } else {
      nums[i] = nums[end];
      nums[end] = 2;
      end--;
    }
  }
}
