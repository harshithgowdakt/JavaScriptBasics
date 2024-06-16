//https://leetcode.com/problems/permutations-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let permutations = [];
    nums.sort((a, b) => a - b);

    function backtrack(currPerms, used = {}) {
        if (currPerms.length === nums.length) {
            permutations.push([...currPerms]);
        }

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
            if (!used[i]) {
                used[i] = true;
                currPerms.push(nums[i]);
                backtrack(currPerms, used);
                used[i] = false;
                currPerms.pop();
            }
        }
    }

    backtrack([], {});
    return permutations;
};