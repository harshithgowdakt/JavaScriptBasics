// 2 1 5 4 3

const nextPermutation = function (nums) {
  let index = -1;

  const reverse = function (arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start++] = arr[end];
      arr[end--] = temp;
    }
  };

  for (i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[i - 1]) {
      index = i - 1;
      break;
    }
  }

  if (index == -1) {
    reverse(nums, 0, nums.length - 1);
    return;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[index]) {
      let temp = nums[i];
      nums[i] = nums[index];
      nums[index] = temp;
      break;
    }
  }
  reverse(nums, index + 1, nums.length - 1);
};
