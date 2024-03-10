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

/**
 Given a string s and an integer k, find the length of the longest substring of s that contains 
 at most k distinct characters.

  Example
  Input: s = "eceba", k = 2
  Output: 3
  Explanation: The longest substring that contains at most 2 distinct characters is "ece",
  which has a length of 3. Another valid substring is "eba".
 */

function lengthOfLongestSubstringKDistinct(str: string, k: number) {
  let charToCountMap = {};
  let start = 0;
  let maxLen = 0;
  for (let end = 0; end < str.length; end++) {
    if (charToCountMap[str[end]] == undefined) {
      charToCountMap[str[end]] = 0;
    }
    charToCountMap[str[end]] += 1;

    while (Object.keys(charToCountMap).length > k) {
      charToCountMap[str[start]] -= 1;
      if (charToCountMap[str[start]] == 0) delete charToCountMap[str[start]];
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}

/**
 * Given a string s and an integer k, you can choose any character of the string and change it to any 
 * other uppercase English character at most k times. Find the length of the longest substring containing 
 * the same letter you can get after performing the above operations.
  Input: s = "AABABBA", k = 1
  Output: 4
  Explanation: By changing one 'A' to 'B', the substring "BBBB" can be formed, which is the longest substring 
  containing the same letter after at most one character change. The length of this substring is 4.
 */

function characterReplacement(str: string, k: number) {
  let charToCountMap = new Map();
  let maxLen = 0;
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    charToCountMap.set(str[end], (charToCountMap.get(str[end]) || 0) + 1);

    let maxFreq = Math.max(...Array.from(charToCountMap.values()));
    let sumOfAllChar = Array.from(charToCountMap.values()).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    let numOfCharReplacement = sumOfAllChar - maxFreq;

    if (numOfCharReplacement > k) {
      charToCountMap.set(str[start], charToCountMap.get(str[start]) - 1);
      if (charToCountMap.get(str[start]) === 0) {
        charToCountMap.delete(str[start]);
      }
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}

function characterReplacementOptimised(str, k) {
  let charToCountMap = new Map();
  let maxLen = 0;
  let start = 0;
  let maxFreq = 0; // Tracks the frequency of the most common character in the current window

  for (let end = 0; end < str.length; end++) {
    const endChar = str[end];
    charToCountMap.set(endChar, (charToCountMap.get(endChar) || 0) + 1);

    // Correctly update maxFreq using the frequency of the current character
    maxFreq = Math.max(maxFreq, charToCountMap.get(endChar));

    // If the window size minus maxFreq is greater than k, shrink the window
    if (end - start + 1 - maxFreq > k) {
      const startChar = str[start];
      charToCountMap.set(startChar, charToCountMap.get(startChar) - 1);
      if (charToCountMap.get(startChar) === 0) {
        charToCountMap.delete(startChar);
      }
      start++;
    }

    // Update maxLen to the size of the current window if it's larger than any previous window
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}

/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
*/

var checkInclusion = function (s1, s2) {
  let s1Count = new Array(26).fill(0);
  let s2Count = new Array(26).fill(0);

  let ACharCode = "a".charCodeAt(0);

  function arraysEqaul(a, b) {
    for (let i = 0; i < 26; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - ACharCode]++;
    s2Count[s2.charCodeAt(i) - ACharCode]++;
  }

  if (arraysEqaul(s1Count, s2Count)) return true;

  for (let i = s1.length; i < s2.length; i++) {
    s2Count[s2.charCodeAt(i - s1.length) - ACharCode]--;
    s2Count[s2.charCodeAt(i) - ACharCode]++;
    if (arraysEqaul(s1Count, s2Count)) return true;
  }

  return false;
};

/**
  Given two strings s and t of lengths m and n respectively, return the minimum window substring
 of s such that every character in t (including duplicates) is included in the window. 
 If there is no such substring, return the empty string "".

  The testcases will be generated such that the answer is unique.
  Example 1:

  Input: s = "ADOBECODEBANC", t = "ABC"
  Output: "BANC"
  Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
  Example 2:

  Input: s = "a", t = "a"
  Output: "a"
  Explanation: The entire string s is the minimum window.
  Example 3:

  Input: s = "a", t = "aa"
  Output: ""
  Explanation: Both 'a's from t must be included in the window.
  Since the largest window of s only has one 'a', return empty string.
*/

const minWin = function (s: string, t: string) {
  let charToCountMap = new Map();
  let minLen = Number.MAX_VALUE;
  let start = 0;
  let counter = 0;
  let minString = "";

  for (let i = 0; i < t.length; i++) {
    charToCountMap[t[i]] = (charToCountMap[t[i]] || 0) + 1;
  }

  for (let end = 0; end < s.length; end++) {
    charToCountMap[s[end]] = (charToCountMap[s[end]] || 0) - 1;
    if (charToCountMap[s[end]] >= 0) counter++;

    while (counter === t.length) {
      let currentWindow = end - start + 1;
      if (currentWindow < minLen) {
        minLen = currentWindow;
        minString = s.substring(start, end + 1);
      }
      charToCountMap[s[start]]++;
      if (charToCountMap[s[start]] > 0) counter--;
      start++;
    }
  }
  return minString;
};

const minWinPermutation = function (s: string, t: string) {
  let targetCharToCountMap = {};
  let stringCharToCountMap = {};

  let start = 0;
  let minLen = Number.MAX_VALUE;
  let minString = "";

  const isMapGreathanOrEqual = function (a, b) {
    let keys = Object.keys(targetCharToCountMap);
    for (let i = 0; i < keys.length; i++) {
      if (b[keys[i]] === undefined) return false;
      else if (b[keys[i]] < a[keys[i]]) return false;
    }
    return true;
  };

  for (let i = 0; i < t.length; i++) {
    targetCharToCountMap[t[i]] = (targetCharToCountMap[t[i]] || 0) + 1;
    stringCharToCountMap[s[i]] = (stringCharToCountMap[s[i]] || 0) + 1;
  }

  if (isMapGreathanOrEqual(targetCharToCountMap, stringCharToCountMap))
    return s.substring(start, t.length);

  for (let end = t.length; end < s.length; end++) {
    stringCharToCountMap[s[end]] = (stringCharToCountMap[s[end]] || 0) + 1;
    while (isMapGreathanOrEqual(targetCharToCountMap, stringCharToCountMap)) {
      if (end - start + 1 < minLen) {
        minLen = end - start + 1;
        minString = s.substring(start, end + 1);
      }
      stringCharToCountMap[s[start]]--;
      start++;
    }
  }
  return minString;
};

/**
Given a string s, return the number of palindromic substrings in it.
A string is a palindrome when it reads the same backward as forward.
A substring is a contiguous sequence of characters within the string.

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa". 
*/

var countSubstrings = function (s) {
  let res = 0;

  const countPali = function (s, l, r) {
    let res = 0;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
      res++;
    }
    return res;
  };

  for (let i = 0; i < s.length; i++) {
    res += countPali(s, i, i);
    res += countPali(s, i, i + 1);
  }
  return res;
};

/**
  You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints
  of the ith line are (i, 0) and (i, height[i]).
  Find two lines that together with the x-axis form a container, such that the container contains the most water.
  Return the maximum amount of water a container can store.
  Notice that you may not slant the container.

  Input: height = [1,8,6,2,5,4,8,3,7]
  Output: 49
  Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
  In this case, the max area of water (blue section) the container can contain is 49.
 */

var maxArea = function (height) {
  let start = 0,
    end = height.length - 1,
    res = 0;

  while (start < end) {
    let area = (end - start) * Math.min(height[start], height[end]);
    res = Math.max(area, res);
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return res;
};

/**
 Given an integer array nums, move all 0's to the end of it while maintaining the 
 relative order of the non-zero elements.
 Note that you must do this in-place without making a copy of the array.
  Example 1:

  Input: nums = [0,1,0,3,12]
  Output: [1,3,12,0,0]
  Example 2:

  Input: nums = [0]
  Output: [0]
 */
const moveZeroes = function (nums) {
  if (nums.length <= 1) return nums;
  let l = 0,
    r = 1;
  while (r < nums.length) {
    if (nums[l] != 0) {
      l++;
      r++;
    } else if (nums[r] == 0) {
      r++;
    } else {
      let temp = nums[r];
      nums[r] = nums[l];
      nums[l] = temp;
      l++;
      r++;
    }
  }
  return nums;
};

/**
  Remove Duplicates from Sorted Array
  Given an integer array nums sorted in non-decreasing order,
  remove the duplicates in-place such that each unique element appears only once.
  The relative order of the elements should be kept the same. Then return the number 
  of unique elements in nums.

  Consider the number of unique elements of nums to be k, to get accepted, 
  you need to do the following things:

  Change the array nums such that the first k elements of nums contain the unique elements
  in the order they were present in nums initially. The remaining elements of nums are not 
  important as well as the size of nums.

  Example 1:

  Input: nums = [1,1,2]
  Output: 2, nums = [1,2,_]
  Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
  It does not matter what you leave beyond the returned k (hence they are underscores).
  Example 2:

  Input: nums = [0,1,2,3,4,2,2,3,3,4]
  Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
  Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
  It does not matter what you leave beyond the returned k (hence they are underscores).
 */

var removeDuplicates = function (nums) {
  //base case
  if (nums.length < 2) return nums.length;

  //pointers
  let l = 0,
    r = 1;

  // remove duplicates
  while (r < nums.length) {
    if (nums[l] != nums[r]) {
      l++;
      nums[l] = nums[r];
    }
    r++;
  }
  //return length
  return l + 1;
};

/*
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, 
then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

const removeDuplicates2 = function () {};

/**
Given an integer array nums sorted in non-decreasing order,
return an array of the squares of each number sorted in non-decreasing 
order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 */

var sortedSquares = function (nums) {
  // base case
  let res = [];
  let L = 0,
    R = nums.length - 1;
  while (L < R) {
    let leftSquare = nums[L] * nums[L];
    let rightSquare = nums[R] * nums[R];
    if (leftSquare < rightSquare) {
      res.push(leftSquare);
      L++;
    } else {
      res.push(rightSquare);
      R--;
    }
  }
};
