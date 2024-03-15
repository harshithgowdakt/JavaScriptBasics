/**
    Given an integer array arr, find the contiguous subarray (containing at least one number) which
    has the largest sum and returns its sum and prints the subarray.

    Example 1:
    Input: arr = [-2,1,-3,4,-1,2,1,-5,4] 
    Output: 6 

    Explanation: [4,-1,2,1] has the largest sum = 6.
*/

function maxSumBruteForce(nums) {
  let maxSum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
        maxSum = Math.max(maxSum, sum);
      }
    }
  }
  return maxSum;
}

function maxSumBetter(nums) {
  let maxSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}

function maxSumKadens(nums) {
  let maxSum = Number.MIN_VALUE,
    currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
