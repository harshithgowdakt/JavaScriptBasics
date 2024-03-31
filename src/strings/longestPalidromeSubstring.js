//https://leetcode.com/problems/longest-palindromic-substring/description/

var longestPalidromeSubstring = function (s) {
  let longestPalidrome = "";

  for (let i = 0; i < s.length; i++) {
    //odd number palidrome
    let start = i,
      end = i;
    while (start >= 0 && end < s.length && s[start] == s[end]) {
      let pal = s.slice(start, end + 1);
      if (pal.length > longestPalidrome.length) longestPalidrome = pal;
      start--;
      end++;
    }

    //even number plaidrome
    start = i;
    end = i + 1;
    while (start >= 0 && end < s.length && s[start] == s[end]) {
      pal = s.slice(start, end + 1);
      if (pal.length > longestPalidrome.length) longestPalidrome = pal;
      start--;
      end++;
    }
  }
  return longestPalidrome;
};

console.log(longestPalidromeSubstring("babad"));
