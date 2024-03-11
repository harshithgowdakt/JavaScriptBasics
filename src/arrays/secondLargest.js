function secondLargest(nums) {
  if (nums.length < 0) return -1;
  let secondLargestNum = Number.MIN_VALUE;
  let largest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargestNum = largest;
      largest = nums[i];
    }
  }
  return secondLargestNum;
}
