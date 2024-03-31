//https://leetcode.com/problems/valid-palindrome-ii/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let l = 0,
    r = s.length - 1;

  const isPalidrome = (str, start, end) => {
    while (start <= end) {
      if (str[start] != str[end]) return false;
      start++;
      end--;
    }
    return true;
  };

  while (l <= r) {
    if (s[l] != s[r]) {
      return isPalidrome(s, l, r - 1) || isPalidrome(s, l + 1, r);
    }
    l++;
    r--;
  }
  return true;
};
