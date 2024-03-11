function isArraySorted(nums) {
  // Check if input is an array and non-empty
  if (!Array.isArray(nums) || nums.length === 0) return true; // Consider empty arrays as sorted

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) return false; // Array is not sorted
  }

  return true; // Array is sorted
}
