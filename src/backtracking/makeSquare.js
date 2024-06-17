// https://leetcode.com/problems/matchsticks-to-square/

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
    let totalPerimeter = matchsticks.reduce((sum, matchstick) => sum + matchstick, 0);

    if (totalPerimeter % 4 !== 0) return false;

    let sideSize = totalPerimeter / 4;
    let used = Array(matchsticks.length).fill(false);

    function backtrack(startIndex, currSum, remainingSides) {
        if (remainingSides === 0) return true;

        if (currSum === sideSize) return backtrack(0, 0, remainingSides - 1);

        for (let i = startIndex; i < matchsticks.length; i++) {
            if (!used[i] && currSum + matchsticks[i] <= sideSize) {
                used[i] = true;
                if (backtrack(i + 1, currSum + matchsticks[i], remainingSides)) return true;
                used[i] = false;
            }
        }

        return false;
    }
    return backtrack(0, 0, 4);
};