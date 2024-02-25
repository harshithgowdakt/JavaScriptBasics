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

twoSum([2, 7, 11, 15], 9);
