//https://leetcode.com/problems/subarrays-with-k-different-integers/

/**
 * @param {number[]} nums - The input array of numbers.
 * @param {number} k - The number of distinct elements required in a subarray.
 * @return {number} - The total number of contiguous subarrays with exactly k distinct elements.
 */
var subarraysWithKDistinct = function (nums, k) {
  // Initialize a Map to keep track of the count of each number in the current window
  let count = new Map();
  // Initialize pointers for the left and right ends of the sliding window
  let leftFar = 0,
    leftNear = 0,
    // Initialize the result counter
    res = 0;

  // Iterate over the array
  for (let i = 0; i < nums.length; i++) {
    // Increment the count of the current number in the map
    count.set(nums[i], (count.get(nums[i]) ?? 0) + 1);
    // If the size of the map exceeds k, it means we have more than k distinct elements
    // So, we need to shrink the window from the left
    while (count.size > k) {
      // Decrement the count of the number at the left end of the window
      count.set(nums[leftNear], count.get(nums[leftNear]) - 1);
      // If the count of the number at the left end becomes 0, remove it from the map
      if (count.get(nums[leftNear]) == 0) count.delete(nums[leftNear]);
      // Move the left end of the window one step to the right
      leftNear++;
      // Update the leftFar pointer to keep track of the farthest left position that has been considered
      leftFar = leftNear;
    }

    // If the count of the number at the left end of the window is more than 1, it means we have more than k distinct elements
    // So, we need to shrink the window from the left until we have exactly k distinct elements
    while (count.get(nums[leftNear]) > 1) {
      // Decrement the count of the number at the left end of the window
      count.set(nums[leftNear], count.get(nums[leftNear]) - 1);
      // Move the left end of the window one step to the right
      leftNear++;
    }

    // If the size of the map is exactly k, it means we have found a subarray with exactly k distinct elements
    // Add the length of the current subarray to the result counter
    if (count.size == k) {
      res += leftNear - leftFar + 1;
    }
  }

  // Return the total number of subarrays with exactly k distinct elements
  return res;
};
