/**
Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

var topKFrequent = function (nums, k) {
  let numToCountMap = new Map();

  for (let num of nums) {
    numToCountMap.set(num, (numToCountMap.get(num) ?? 0) + 1);
  }

  const entries = Array.from(numToCountMap.entries());
  entries.sort((a, b) => b[1] - a[1]);
  const mostFrequent = entries.slice(0, k);
  return mostFrequent.map((entry) => entry[0]);
};
