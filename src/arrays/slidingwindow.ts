function maxSumSubArray(arr: number[], k: number) {
  if (arr.length < k) {
    console.log("array length is less than the sub array lenght");
    return -1;
  }

  let maxSum = 0,
    windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  for (let j = 1; j <= arr.length - k; j++) {
    windowSum = windowSum - arr[j - 1] + arr[j + k - 1];
    maxSum = windowSum > maxSum ? windowSum : maxSum;
  }

  return maxSum;
}

function sumOfSubArrays(arr: number[], k: number) {
  if (arr.length < k) return -1;
  let sums = [];
  let firstSum = 0;
  for (let i = 0; i < k; i++) {
    firstSum += arr[i];
  }
  sums.push(firstSum);

  for (let j = 1; j <= arr.length - k; j++) {
    firstSum = firstSum - arr[j - 1] + arr[j + k - 1];
    sums.push(firstSum);
  }
  return sums;
}

// Given an array of positive integers and a target sum s,
// find the length of the smallest contiguous subarray whose sum is greater than or equal to s.
// If no such subarray exists, return 0.
function smallestSubarrayWithGivenSum(arr: number[], s: number): number {
  let minLength = Number.MAX_VALUE;
  let windowSum = 0;
  let windowStart = 0;
  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];
    while (windowSum >= s) {
      minLength = Math.min(minLength, i - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return minLength === Number.MAX_VALUE ? 0 : minLength;
}

/**
 * The problem of finding the length of the longest substring without repeating 
 * characters in a given string is a classic example of a sliding window technique application.
 * The goal is to identify the longest contiguous segment of the string that contains unique characters, 
 * meaning no character appears more than once within that segment.

  Understanding the Problem
  Given a string s, you need to find the maximum length of a substring that does not contain any repeating characters. For example:

  If s = "abcabcbb", the answer is 3, because the longest substring without repeating characters is "abc", which occurs twice.
  If s = "bbbbb", the answer is 1, since the longest substring without repeating characters is any single character.
  If s = "pwwkew", the answer is 3, because the longest substring without repeating characters is "wke".
 */

function lengthOfLongestSubstring(s: string) {
  let len = 0;
  let start = 0;
  let charMap = {};
  for (let end = 0; end < s.length; end++) {
    if (!!charMap[s.charAt(end)]) {
      start = Math.max(charMap[s.charAt(end)] + 1, start);
    }
    charMap[s.charAt(end)] = end;
    len = Math.max(end - start + 1, len);
  }
  return len;
}

/**
 * The problem statement for "Buy and Sell Stock to Maximize Profit" typically goes like this:

  Problem Statement
  You are given an array prices where prices[i] is the price of a given stock on the i-th day.

  You want to maximize your profit by choosing a single day to buy one stock and choosing a different 
  day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. 
  If you cannot achieve any profit, return 0.

  Constraints
  You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
  The number of days (the length of the array prices) is at least 1.
  Example 1
  Input: prices = [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
  Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */

function maxProfit(prices: number[]) {
  let start = Number.MAX_VALUE;
  let profit = 0;

  for (let end = 0; end < prices.length; end++) {
    if (prices[end] < start) {
      start = prices[end];
    } else {
      profit = Math.max(prices[end] - start, profit);
    }
  }
  return profit;
}

/**
 * Longest Substring with At Most K Distinct Characters
 * 
 * Example 1:
  Input: s = "eceba", k = 2
  Output: 3
  Explanation: The substring "ece" contains 2 distinct characters ('e' and 'c') and is the longest such substring.
 */
function lengthOfLongestSubstringKDistinct(arr: number[], k: number) {
  let start = 0;
  let maxLength = 0;
  let charsMap = {};

  for (let end = 0; end < arr.length; end++) {
    if (!charsMap[arr[end]]) {
      charsMap[arr[end]] = end;
      maxLength = Math.max(maxLength, end - start + 1);
    }
  }
}

/**
 * Given an integer array nums, find the subarray
 with the largest sum, and return its sum.

  Example 1:

  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6
  Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 */

const maxSubArray = function (nums) {
  if (nums.length == 0) return 0;
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i <= nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

/**
 Given a string s, find the length of the longest substring that contains at most two distinct characters.
  Input: s = "eceba"

  Output: 3
  Explanation: The longest substring with at most two distinct characters is "ece", which has a length of 3.
  Input: s = "ccaabbb"

  Output: 5
  Explanation: The longest substring with at most two distinct characters is "aabbb", which has a length of 5.
 */

function lengthOfLongestSubstringTwoDistinct(str: string) {
  let charToCountMap = {};
  let start = 0;
  let maxLen = 0;
  for (let end = 0; end < str.length; end++) {
    if (charToCountMap[str[end]] == undefined) charToCountMap[str[end]] = 1;
    else charToCountMap[str[end]] += 1;
    while (Object.keys(charToCountMap).length > 2) {
      charToCountMap[str[start]] -= 1;
      if (charToCountMap[str[start]] == 0) delete charToCountMap[str[start]];
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}

/**
 * Problem Statement
  Given a string s, find the length of the longest substring without repeating characters.

  Examples
  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.

  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.

  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer could be "wke" or "kew", both with the length of 3.
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

function lengthOfLongestSubstr(str: string) {
  let charToIndexMap = {};
  let maxLen = 0;
  let start = 0;
  for (let end = 0; end < str.length; end++) {
    if (charToIndexMap[str[end]] == undefined) {
      charToIndexMap[str[end]] = end;
    } else {
      start = Math.max(start, charToIndexMap[str[end]] + 1);
      charToIndexMap[str[end]] = end;
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}
