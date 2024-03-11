function removeDuplicates(nums) {
  //pointers
  let L = 0,
    R = 1;

  while (R < nums.length) {
    if (nums[L] != nums[R]) {
      L++;
      nums[L] = nums[R];
    }
    R++;
  }
  return L + 1;
}
