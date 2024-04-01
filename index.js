function maxSum(nums) {
  let maxSum = 0,
    currSum = 0;

  for (let num of nums) {
    currSum = Math.max(currSum + num, num);
    maxSum = Math.max(currSum, maxSum);
  }
}
