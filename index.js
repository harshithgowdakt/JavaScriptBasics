const minWinPermutation = function (s, t) {
  let targetCharToCountMap = {};
  let stringCharToCountMap = {};

  let start = 0;
  let minLen = Number.MAX_VALUE;
  let minString = "";

  const isMapGreathanOrEqual = function (a, b) {
    let keys = Object.keys(targetCharToCountMap);
    for (let i = 0; i < keys.length; i++) {
      if (b[keys[i]] === undefined) return false;
      else if (b[keys[i]] < a[keys[i]]) return false;
    }
    return true;
  };

  for (let i = 0; i < t.length; i++) {
    targetCharToCountMap[t[i]] = (targetCharToCountMap[t[i]] || 0) + 1;
    stringCharToCountMap[s[i]] = (stringCharToCountMap[s[i]] || 0) + 1;
  }

  if (isMapGreathanOrEqual(targetCharToCountMap, stringCharToCountMap))
    return s.substring(start, t.length);

  for (let end = t.length; end < s.length; end++) {
    stringCharToCountMap[s[end]] = (stringCharToCountMap[s[end]] || 0) + 1;
    while (isMapGreathanOrEqual(targetCharToCountMap, stringCharToCountMap)) {
      if (end - start + 1 < minLen) {
        minLen = end - start + 1;
        minString = s.substring(start, end + 1);
      }
      stringCharToCountMap[s[start]]--;
      start++;
    }
  }
  return minString;
};

console.log(minWinPermutation("ADOBECODEBANC", "ABC"));
