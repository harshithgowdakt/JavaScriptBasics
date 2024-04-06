/**
 * https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let stack = [];
    let indexToRemove = new Set();

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(")
            stack.push(i);
        else if (s[i] === ")" && stack.length === 0)
            indexToRemove.add(i);
        else if (s[i] === ")" && stack.length !== 0)
            stack.pop();
    }

    while (stack.length > 0) {
        indexToRemove.add(stack.pop());
    }

    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (!indexToRemove.has(i)) ans += s[i];
    }
    return ans;
};