// https://leetcode.com/problems/combination-sum/description/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let combinations = [];

    function backtrack(start, currCombination, currSum) {
        if (currSum === target) {
            combinations.push([...currCombination]);
            return
        }

        if (currSum > target) return;

        for (let i = start; i < candidates.length; i++) {
            currCombination.push(candidates[i]);
            backtrack(i, currCombination, currSum + candidates[i]);
            currCombination.pop();
        }
    }

    backtrack(0, [], 0);

    return combinations;
};