/**https://leetcode.com/problems/average-of-levels-in-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    if (root == null) return [];
    let averages = [];
    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let size = queue.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            sum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        averages.push(sum / size);
    }

    return averages;
};