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

let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 3;
let maxSum = maxSumSubArray(arr, k);

if (maxSum == -1) {
  console.log("Invalid input");
} else {
  console.log("Maximum sum of subarray of size ", maxSum);
}

let sums = sumOfSubArrays(arr, k);
if (sums == -1) {
  console.log("Invalid input");
} else {
  console.log("sum of subarrays of size ", sums);
}

console.log(smallestSubarrayWithGivenSum(arr, 7));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbbbbbbbbbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
