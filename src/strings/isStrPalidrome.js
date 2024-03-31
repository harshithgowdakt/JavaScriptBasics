//https://leetcode.com/problems/valid-palindrome/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "");
  let l = 0,
    r = s.length - 1;
  while (l <= r) {
    if (s[l] != s[r]) return false;
    l++;
    r--;
  }
  return true;
};
