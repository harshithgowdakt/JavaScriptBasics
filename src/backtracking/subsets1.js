/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let subsets = [];

    function backtrack(start, currSet) {
        if (start > nums.length) return;
        subsets.push([...currSet]);

        for (let i = start; i < nums.length; i++) {
            currSet.push(nums[i]);
            backtrack(i + 1, currSet);
            currSet.pop();
        }
    }

    backtrack(0, []);
    return subsets;
};