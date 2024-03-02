var checkInclusion = function (s1, s2) {
  let s1Count = new Array(26).fill(0);
  let s2Count = new Array(26).fill(0);

  let ACharCode = "a".charCodeAt(0);

  function arraysEqaul(a, b) {
    for (let i = 0; i < 26; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - ACharCode]++;
    s2Count[s2.charCodeAt(i) - ACharCode]++;
  }

  if (arraysEqaul(s1Count, s2Count)) return true;

  for (let i = s1.length; i < s2.length; i++) {
    s2Count[s2.charCodeAt(i - s1.length) - ACharCode]--;
    s2Count[s2.charCodeAt(i) - ACharCode]++;
    if (arraysEqaul(s1Count, s2Count)) return true;
  }

  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
