/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let openStack = [], starStack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") openStack.push(i);
        else if (s[i] === "*") starStack.push(i);
        else {
            if (openStack.length <= 0 && starStack.length <= 0) return false;
            else if (openStack.length <= 0) starStack.pop();
            else openStack.pop();
        }
    }

    while (openStack.length > 0) {
        if (starStack.length <= 0) return false;
        else if (openStack[openStack.length - 1] > starStack[starStack.length - 1]) return false;
        else {
            openStack.pop();
            starStack.pop();
        }
    }

    return true;
};