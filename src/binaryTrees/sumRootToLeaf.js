/**https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
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
var sumRootToLeaf = function (root) {
    let paths = [];

    function dfs(root, path) {
        if (root == null) return;

        if (root.left == null && root.right == null) {
            path.push(root.val);
            paths.push([...path]);
            path.pop();
            return;
        }

        path.push(root.val);
        dfs(root.left, path);
        dfs(root.right, path);
        path.pop();
    }

    dfs(root, []);
    let sum = 0;

    for (let path of paths) {
        let num = parseInt(path.join(""), 2);
        sum += num;
    }
    return sum;
};