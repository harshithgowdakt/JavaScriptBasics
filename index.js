var removeElement = function (nums, val) {
  let L = 0,
    R = 0;
  while (R < nums.length) {
    if (nums[L] != val) {
      L++;
      R++;
    } else if (nums[R] == val) {
      R++;
    } else {
      let temp = nums[R];
      nums[R] = nums[L];
      nums[L] = temp;
      R++;
      L++;
    }
  }
  return L;
};
