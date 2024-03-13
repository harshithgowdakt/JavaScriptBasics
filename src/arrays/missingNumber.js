function findMissingNumber(arr, N) {
  // Calculate the sum of the first N natural numbers
  const totalSum = (N * (N + 1)) / 2;

  // Calculate the sum of the elements in the array
  const arrSum = arr.reduce((acc, curr) => acc + curr, 0);

  // The difference is the missing number
  return totalSum - arrSum;
}

function findMissingNumber(arr, N) {
  let xor_full = 1; // Start XORing from 1 to N
  for (let i = 2; i <= N; i++) {
    xor_full = xor_full ^ i;
  }

  let xor_arr = arr[0]; // Start XORing all elements in the array
  for (let i = 1; i < N - 1; i++) {
    xor_arr = xor_arr ^ arr[i];
  }

  // XORing xor_full and xor_arr gives the missing number
  return xor_full ^ xor_arr;
}

// Example usage
const arr = [1, 2, 4, 6, 3]; // N is 6, array size is N-1 = 5
const N = 6;
console.log(findMissingNumber(arr, N)); // Output: 5
