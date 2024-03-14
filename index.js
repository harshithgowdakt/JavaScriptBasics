const subarraySum = function (nums, k) {
  let subarrayCount = 0;
  let prefixSumMap = new Map();
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === k) subarrayCount++;
    let rem = sum - k;
    if (prefixSumMap.has(rem)) subarrayCount += prefixSumMap.get(rem);
    prefixSumMap.set(sum, (prefixSumMap.get(sum) || 0) + 1);
  }
  return subarrayCount;
};

console.log(subarraySum([1, 2, -1, 2, 3], 3));
