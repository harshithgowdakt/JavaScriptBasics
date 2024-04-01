//https://leetcode.com/problems/maximum-product-subarray/

var maxProductBruteForce = function (nums) {
  let maxPro = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    let pro = 1;
    for (let j = i; j < nums.length; j++) {
      pro *= nums[j];
      maxPro = Math.max(pro, maxPro);
    }
  }
  return maxPro;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxPro = 0;
  let preFixPro = 1;
  for (let num of nums) {
    preFixPro *= num;
    if (preFixPro == 0) preFixPro = 1;
    maxPro = Math.max(preFixPro, maxPro);
  }

  let postFix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    postFix *= nums[i];
    if (postFix == 0) postFix = 1;
    maxPro = Math.max(postFix, maxPro);
  }
  return maxPro;
};

//kadens
var maxProductKadens = function (nums) {
  let maxProduct = 0,
    currMin = 0,
    currMax = 0;

  for (let num of nums) {
    let tem = currMax;
    currMax = Math.max(num, currMin * num, currMax * num);
    currMin = Math.max(num, tem * num, currMin * num);

    maxProduct = Math.max(currMax, maxProduct);
  }

  return maxProduct;
};
