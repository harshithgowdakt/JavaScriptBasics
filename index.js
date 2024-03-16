const pivotArray = function (nums, pivot) {
  let ans = [];
  let leftArr = [],
    midArr = [],
    rightArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) leftArr.push(nums[i]);
    else if (nums[i] > pivot) rightArr.push(nums[i]);
    else midArr.push(nums[i]);
  }

  leftArr.forEach((num) => ans.push(num));
  midArr.forEach((num) => ans.push(num));
  rightArr.forEach((num) => ans.push(num));
  return ans;
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
