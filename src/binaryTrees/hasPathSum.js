/**https://leetcode.com/problems/path-sum/description/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {


    function pathSum(root, currSum, targetSum) {
        if (root === null)
            return false;

        if (root.left == null && root.right == null && currSum + root.val == targetSum)
            return true;

        currSum += root.val;
        return pathSum(root.left, currSum, targetSum) || pathSum(root.right, currSum, targetSum);
    }

    return pathSum(root, 0, targetSum);
};