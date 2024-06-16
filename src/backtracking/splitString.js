// https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/


/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function (s) {
    function backtrack(index, prevValue, count) {
        if (index === s.length) {
            return count >= 2; // Ensure at least two splits are made
        }

        for (let i = index; i < s.length; i++) {
            let currentValue = parseInt(s.slice(index, i + 1));
            if (prevValue === null || currentValue + 1 === prevValue) {
                if (backtrack(i + 1, currentValue, count + 1)) {
                    return true;
                }
            }
        }
        return false;
    }

    return backtrack(0, null, 0);
};