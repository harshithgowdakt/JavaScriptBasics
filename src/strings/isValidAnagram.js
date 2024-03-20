/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  let ACharCode = "a".charCodeAt(0);
  let sArray = new Array(26).fill(0);
  let tArray = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    sArray[s.charCodeAt(i) - ACharCode]++;
    tArray[t.charCodeAt(i) - ACharCode]++;
  }
  for (let i = 0; i < 26; i++) {
    if (sArray[i] != tArray[i]) return false;
  }
  return true;
};

var isAnagramMap = function (s, t) {
  if (s.length != t.length) return false;
  let charMap = new Map();
  for (let i = 0; i < s.length; i++) {
    charMap.set(s[i], (charMap.get(s[i]) || 0) + 1);
    charMap.set(t[i], (charMap.get(t[i]) || 0) - 1);
  }

  for (let val of charMap.values()) if (val != 0) return false;
  return true;
};
