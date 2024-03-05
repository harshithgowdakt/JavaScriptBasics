const moveZeroes = function (nums) {
  if (nums.length <= 1) return nums;
  let l = 0,
    r = 1;
  while (r < nums.length) {
    if (nums[l] != 0) {
      l++;
      r++;
    } else if (nums[r] == 0) {
      r++;
    } else {
      let temp = nums[r];
      nums[r] = nums[l];
      nums[l] = temp;
      l++;
      r++;
    }
  }
  return nums;
};

console.log(moveZeroes([1, 12]));
