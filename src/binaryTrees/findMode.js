/**https://leetcode.com/problems/find-mode-in-binary-search-tree/
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
var findMode = function (root) {
    let freqMap = new Map();
    let maxFreq = 0;
    let res = [];
    function traverse(root) {
        if (root == null) return;

        let currFreq = (freqMap.get(root.val) ?? 0) + 1;
        freqMap.set(root.val, currFreq);
        maxFreq = Math.max(maxFreq, currFreq);
        traverse(root.left);
        traverse(root.right);
    }

    traverse(root);
    for (let [num, freq] of freqMap) {
        if (freq == maxFreq) res.push(num);
    }

    return res;
};
