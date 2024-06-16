/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let subsets = [];

    nums.sort((a, b) => a - b);

    function backtrack(startIndex, currSubset) {
        if (startIndex > nums.length) return;

        subsets.push([...currSubset]);

        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] == nums[i - 1]) continue;
            currSubset.push(nums[i]);
            backtrack(i + 1, currSubset);
            currSubset.pop();
        }
    }

    backtrack(0, []);
    return subsets;
};