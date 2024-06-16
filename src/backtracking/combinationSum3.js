//https://leetcode.com/problems/combination-sum-iii/description/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let combinations = [];

    function backtrack(startIndex, currSum, currCombination) {
        if (currSum == n && currCombination.length == k) {
            combinations.push([...currCombination]);
            return;
        }

        if (startIndex > 9 || currSum > n) return;

        for (let i = startIndex; i <= 9; i++) {
            currCombination.push(i);
            backtrack(i + 1, currSum + i, currCombination);
            currCombination.pop();
        }
    }

    backtrack(1, 0, []);
    return combinations;
};