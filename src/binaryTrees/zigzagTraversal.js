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
var zigzagLevelOrder = function (root) {
    if (root == null) return [];

    let ans = [];
    let queue = [];
    queue.push(root);
    let levelCount = 0;
    while (queue.length > 0) {
        let size = queue.length;
        let level = [];
        for (let i = 0; i < size; i++) {
            let treeNode = queue.shift();
            level.push(treeNode.val);
            if (treeNode.left != null) queue.push(treeNode.left);
            if (treeNode.right != null) queue.push(treeNode.right);
        }
        if (levelCount % 2 != 0) level.reverse();
        ans.push(level);
        levelCount++;
    }
    return ans;
};