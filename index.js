var countSubarraysSlidingWindow = (nums, minK, maxK) => {
  let res = 0;

  let L = 0,
    R = 0;

  const hasValidBound = (arr, i, j, min, max) => {
    let tempArr = arr.slice(i, j + 1);
    if (!(Math.min(...tempArr) === min && Math.max(...tempArr) === max))
      return false;
    return true;
  };

  while (R < nums.length) {
    if (hasValidBound(nums, L, R, minK, maxK)) {
      res++;
    }
    if (nums[R] < minK || nums[R] > maxK) L = R + 1;
    R++;
  }
  return res;
};
console.log(countSubarraysSlidingWindow([1, 3, 5, 2, 0, 7], 1, 5));
