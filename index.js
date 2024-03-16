var nextPermutation = function (nums) {
  let index = -1;

  // Helper function to reverse a subarray
  const reverse = function (arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }

  if (index == -1) {
    reverse(nums, 0, nums.length - 1);
    return;
  }

  for (let i = nums.length - 1; i > index; i--) {
    if (nums[i] > nums[index]) {
      let temp = nums[i];
      nums[i] = nums[index];
      nums[index] = temp;
      break;
    }
  }

  reverse(nums, index + 1, nums.length - 1);
};

let nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums);
