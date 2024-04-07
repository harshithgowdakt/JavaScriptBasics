/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root == null) return [];

    let ans = [];
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let size = queue.length;
        let level = [];
        for (let i = 0; i < size; i++) {
            let treeNode = queue.shift();
            level.push(treeNode.val);
            if (treeNode.left != null) queue.push(treeNode.left);
            if (treeNode.right != null) queue.push(treeNode.right);
        }
        ans.push(level);
    }
    return ans;
};