// https://leetcode.com/problems/combination-sum-ii/description/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let result = [];

    candidates.sort((a, b) => a - b);
    function dfs(index, currCombination, currSum) {
        if (currSum === target) {
            result.push([...currCombination]);
            return;
        }

        if (index >= candidates.length || currSum > target) return;

        for (let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] === candidates[i - 1]) continue;

            currCombination.push(candidates[i]);
            dfs(i + 1, currCombination, currSum + candidates[i]);
            currCombination.pop();
        }
    }
    dfs(0, [], 0);
    return result;
};