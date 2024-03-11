/**
    3,2,1,7,6,5,4
    nums = [1,2,3,4,5,6,7], d = 3
    [4,5,6,7,1,2,3]
*/

function rotateArray(nums, d) {
  const reverse = function (arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  };

  // Ensure d is within the bounds of the array length
  d = d % nums.length;

  // Reverse the first d elements
  reverse(nums, 0, d - 1);

  // Reverse the remaining nums.length - d elements
  reverse(nums, d, nums.length - 1);

  // Reverse the entire array
  reverse(nums, 0, nums.length - 1);

  return nums;
}
