// https://leetcode.com/problems/combination-sum-iv/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    let memo = new Map();

    function backtrack(currSum) {
        if (currSum === target) {
            return 1;
        }
        if (currSum > target) {
            return 0;
        }
        if (memo.has(currSum)) {
            return memo.get(currSum);
        }

        let count = 0;
        for (let num of nums) {
            count += backtrack(currSum + num);
        }

        memo.set(currSum, count);
        return count;
    }

    return backtrack(0);
};