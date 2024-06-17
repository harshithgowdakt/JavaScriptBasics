// https://leetcode.com/problems/partition-to-k-equal-sum-subsets/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    let totalSum = nums.reduce((sum, num) => sum + num, 0);

    if (totalSum % k !== 0) return false;

    nums.sort((a, b) => a - b);
    let target = totalSum / k;
    if (nums[nums.length - 1] > target) return false;

    let used = Array(nums.length).fill(false);

    function backtrack(startIndex, currSum, remainingSubset) {
        if (remainingSubset === 0) return true;

        if (currSum === target) return backtrack(0, 0, remainingSubset - 1);

        for (let i = startIndex; i < nums.length; i++) {
            if (!used[i] && currSum + nums[i] <= target) {
                used[i] = true;
                if (backtrack(i + 1, currSum + nums[i], remainingSubset)) return true;
                used[i] = false;
            }
        }
        return false;
    }
    return backtrack(0, 0, k);
};