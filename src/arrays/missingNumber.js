function findMissingNumber(arr, N) {
  // Calculate the sum of the first N natural numbers
  const totalSum = (N * (N + 1)) / 2;

  // Calculate the sum of the elements in the array
  const arrSum = arr.reduce((acc, curr) => acc + curr, 0);

  // The difference is the missing number
  return totalSum - arrSum;
}

var missingNumber = function (nums) {
  let xorFull = 0;
  for (let i = 0; i <= nums.length; i++) {
    xorFull ^= i;
  }

  let xorArr = 0;
  for (let i = 0; i < nums.length; i++) {
    xorArr ^= nums[i];
  }
  return xorArr ^ xorFull;
};

// Example usage
const arr = [1, 2, 4, 6, 3]; // N is 6, array size is N-1 = 5
const N = 6;
console.log(findMissingNumber(arr, N)); // Output: 5
