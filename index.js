function moveZeros(nums) {
  let L = 0,
    R = 1;
  while (R < nums.length - 1) {
    if (nums[L] != 0) {
      L++;
      R++;
    } else if (nums[R] == 0) {
      R++;
    } else {
      nums[L] = nums[R];
      nums[R] = 0;
      L++;
      R++;
    }
    if (L >= R) {
      R = L + 1;
    }
  }
}
