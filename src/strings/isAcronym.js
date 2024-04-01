//https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/
/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  if (words.length != s.length) return false;
  let acronym = "";
  for (let word of words) {
    acronym += word.charAt(0);
  }

  return acronym === s;
};
