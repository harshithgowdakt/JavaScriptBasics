function findElementsAppearingMoreThanNOver3(nums) {
  const n = nums.length;
  let candidate = null;
  let count = 0;

  // Step 1: Use Boyer-Moore Voting Algorithm to find a candidate for the majority element
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Step 2: Count the occurrences of each element
  const countMap = new Map();
  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  // Step 3: Identify elements that appear more than n/3 times
  const result = [];
  for (let [key, value] of countMap) {
    if (value > n / 3) {
      result.push(key);
    }
  }

  return result;
}
