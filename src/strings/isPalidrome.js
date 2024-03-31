// https://leetcode.com/problems/palindrome-number/description/

var isPalindrome = function (x) {
  let str = x.toString();
  let L = 0,
    R = str.length - 1;
  while (L <= R) {
    if (str[L++] != str[R--]) return false;
  }
  return true;
};

console.log(isPalindrome(121));
