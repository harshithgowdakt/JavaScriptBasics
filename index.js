var lengthOfLastWord = function (s) {
  let lastword = s.split(" ").filter((a) => !!a).pop().length;
  return lastword.pop().length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
