var rotate = function (nums, k) {
  k = k % nums.length;

  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  reverse(nums, nums.length - k, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, 0, nums.length - 1);
  return nums
};

console.log(rotate([-1, -100, 3, 99], 2));
