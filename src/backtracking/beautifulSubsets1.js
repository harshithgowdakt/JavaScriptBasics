// https://leetcode.com/problems/the-number-of-beautiful-subsets/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {

    function backtrack(i, map) {
        if (i == nums.length) {
            return 1;
        }

        let res = 0;
        if (!map.has(nums[i] - k) && !map.has(nums[i] + k)) {
            let currentCount = map.get(nums[i]) ?? 0;
            map.set(nums[i], currentCount + 1);
            res += backtrack(i + 1, map);
            if (currentCount === 0) {
                map.delete(nums[i]);
            } else {
                map.set(nums[i], currentCount);
            }
        }
        res += backtrack(i + 1, map);
        return res;
    }

    return backtrack(0, new Map()) - 1;
};