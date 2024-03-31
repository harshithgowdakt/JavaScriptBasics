var lengthOfLongestPalidrome = function (s) {
  let longestPalidrome = "";

  for (let i = 0; i < s.length; i++) {
    //odd number palidrome
    let start = i,
      end = i;
    while (start >= 0 && end < s.length && s[start] == s[end]) {
      start--;
      end++;
    }

    let pal = s.slice(start, end + 1);
    if (pal.length > longestPalidrome.length) longestPalidrome = pal;

    //even number plaidrome
    start = i;
    end = i + 1;
    while (start >= 0 && end < s.length && s[start] == s[end]) {
      start--;
      end++;
    }
    pal = s.slice(start, end + 1);
    if (pal.length > longestPalidrome.length) longestPalidrome = pal;
  }
  return longestPalidrome;
};
