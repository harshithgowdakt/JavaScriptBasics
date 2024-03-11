function findMissingNumber(arr, N) {
  // Calculate the sum of the first N natural numbers
  const totalSum = (N * (N + 1)) / 2;

  // Calculate the sum of the elements in the array
  const arrSum = arr.reduce((acc, curr) => acc + curr, 0);

  // The difference is the missing number
  return totalSum - arrSum;
}
