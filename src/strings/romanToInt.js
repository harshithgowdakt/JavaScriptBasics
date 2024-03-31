//https://leetcode.com/problems/roman-to-integer/description/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let intMap = new Map();

  intMap.set("I", 1);
  intMap.set("V", 5);
  intMap.set("X", 10);
  intMap.set("L", 50);
  intMap.set("C", 100);
  intMap.set("D", 500);
  intMap.set("M", 1000);

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && intMap.get(s[i]) < intMap.get(s[i + 1])) {
      sum -= intMap.get(s[i]);
    } else {
      sum += intMap.get(s[i]);
    }
  }
  return sum;
};
