/**
 * https://leetcode.com/problems/balanced-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {

    function balanced(root) {
        if (!root) return [true, 0];

        let left = balanced(root.left);
        if (!left[0]) return [false, -1];
        let right = balanced(root.right);
        if (!right[0]) return [false, -1];

        if (Math.abs(left[1] - right[1]) > 1) return [false, -1];

        return [true, Math.max(left[1], right[1]) + 1]
    }

    return balanced(root)[0]

};