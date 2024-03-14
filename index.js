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
