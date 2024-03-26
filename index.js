function majorityBruteForce(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[i] == nums[j]) count++;

      // Corrected condition to check if count is greater than or equal to n/2
      if (count >= nums.length / 2) return nums[i];
    }
  }
  // Return null if no majority element is found
  return null;
}
