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
 * @return {number}
 */
var minDiffInBST = function (root) {
  let pre, res = Number.MAX_SAFE_INTEGER;

  function inorder(root) {
    if (root == null) return;
    inorder(root.left);
    if (pre != null) {
      res = Math.min(root.val - pre.val, res);
    }
    pre = root;
    inorder(root.right);
  }
  inorder(root)
  return res
};