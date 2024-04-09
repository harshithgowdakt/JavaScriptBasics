/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (root === null) return [];

    let st = [], res = [];
    st.push(root);
    while (st.length > 0) {
        let node = st.pop();
        res.push(node.val);
        if (node.right) st.push(node.right);
        if (node.left) st.push(node.left);
    }
    return res;
};