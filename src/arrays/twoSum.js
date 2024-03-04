const twoSumBrutForce = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
};

// optipmal
const twoSum = function (nums, target) {
  let numToIndex = {};
  for (let i = 0; i < nums.length; i++) {
    let otherNum = target - nums[i];
    if (numToIndex[otherNum] != undefined) {
      return [numToIndex[otherNum], i];
    }
    numToIndex[nums[i]] = i;
  }
};


// two sum sorted array.
const twoSumPointers = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum === target) {
      return [start + 1, end + 1];
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
  return [-1, -1];
};