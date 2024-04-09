/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (root === null) return [];

    let st = [], res = [];
    while (true) {
        if (root != null) {
            st.push(root);
            root = root.left
        } else {
            if (st.length <= 0) break;
            let node = st.pop();
            res.push(node.val);
            if (node.right) root = node.right;
        }
    }
    return res;
};