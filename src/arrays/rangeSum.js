/**
 Given an integer array nums, handle multiple queries of the following type:

    Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
    Implement the NumArray class:

    NumArray(int[] nums) Initializes the object with the integer array nums.
    int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
    

    Example 1:

    Input
    ["NumArray", "sumRange", "sumRange", "sumRange"]
    [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
    Output
    [null, 1, -1, -3]

    Explanation
    NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
    numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
    numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
    numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
*/

class NumArray {
  constructor(nums) {
    this.prefixSums = new Array(nums.length).fill(0);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      this.prefixSums[i] = sum;
    }
  }

  sumRange(i, j) {
    if (i == 0) return this.prefixSums[j];
    else return this.prefixSums[j] - this.prefixSums[i - 1];
  }
}

// Example usage
const nums = [-2, 0, 3, -5, 2, -1];
const numArray = new NumArray(nums);
console.log(numArray.sumRange(0, 2)); // Output: 1
console.log(numArray.sumRange(2, 5)); // Output: -1
console.log(numArray.sumRange(0, 5)); // Output: -3
