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
