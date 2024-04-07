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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    if (root == null) return false;

    let queue = [];
    queue.push([root, null]);

    while (queue.length > 0) {
        let size = queue.length, xParent = null, yParent = null;

        for (let i = 0; i < size; i++) {
            let [current, parent] = queue.shift();

            if (current.val == x) xParent = parent;
            if (current.val == y) yParent = parent;

            if (current.left) queue.push([current.left, current.val]);
            if (current.right) queue.push([current.right, current.val]);
        }

        if (xParent && yParent)
            return xParent !== yParent; // If both x and y have been found in the same level
    }
    return false;
};