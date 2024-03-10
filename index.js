var sortedSquares = function (nums) {
  let res =[];
  let L = 0,
    R = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    let leftSquare = nums[L] * nums[L];
    let rightSquare = nums[R] * nums[R];
    if (leftSquare > rightSquare) {
      res[i] = leftSquare;
      L++;
    } else {
      res[i] = rightSquare;
      R--;
    }
  }
  return res;
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));
