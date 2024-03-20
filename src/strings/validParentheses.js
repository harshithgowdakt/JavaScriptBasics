/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Approach
1. create map of closed parentheses to open parentheses
2. loop through the string
3. it it is a open parentheses, put that into stack
4. if it is a closed parentheses, pop the element from stack and check if it is valid open parentheses
5. if it is not valid return false
6. in the end check if stack size is empty.
*/

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
