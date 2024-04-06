/**https://leetcode.com/problems/sum-of-left-leaves/description/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let sum = 0;

    function sumofLeft(root) {
        if (root == null) return;

        if (root.left && !root.left.left && !root.left.right) {
            sum += root.left.val;
        }

        sumofLeft(root.left);
        sumofLeft(root.right);
    }

    sumofLeft(root);
    return sum;
};