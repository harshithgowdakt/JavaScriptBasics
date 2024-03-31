//https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  var isPalidrome = (s) => {
    let l = 0,
      r = s.length - 1;
    while (l <= r) {
      if (s[l++] != s[r--]) return false;
    }
    return true;
  };

  for (let word of words) {
    if (isPalidrome(word)) return word;
  }
  return "";
};
