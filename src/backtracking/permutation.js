/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let permutations = [];

    function backtrack(currPerms) {
        if (currPerms.length === nums.length) {
            permutations.push([...currPerms]);
        }

        for (let i = 0; i < nums.length; i++) {
            if (!currPerms.includes(nums[i])) {
                currPerms.push(nums[i]);
                backtrack(currPerms);
                currPerms.pop();
            }
        }
    }
    backtrack([]);
    return permutations;
};