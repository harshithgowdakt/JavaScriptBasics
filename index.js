function validParentheses(s) {
  // create a map of open parentheses to closed parentheses
  let parenthesesMap = new Map();
  parenthesesMap.set("}", "{");
  parenthesesMap.set(")", "(");
  parenthesesMap.set("]", "[");

  //create stack for pushing all the closed parentheses
  let st = [];

  for (let i = 0; i < s.length; i++) {
    // it is closed paratheneses if it exists in map
    if (parenthesesMap.has(s[i])) {
      // check the stack if last one is proper closed parentheses
      if (st.pop() != parenthesesMap.get(s[i])) return false;
    } else {
      st.push(s[i]);
    }
  }
  return st.length === 0;
}
console.log(validParentheses("()[]{}}"));
