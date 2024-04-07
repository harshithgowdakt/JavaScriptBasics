//https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/

var findTarget = function (root, k) {
    let arr = [];

    function dfs(root) {
        if (root == null) return null;
        dfs(root.left);
        arr.push(root.val);
        dfs(root.right);
    }

    dfs(root);
    let L = 0, R = arr.length - 1;
    while (L < R) {
        let sum = arr[L] + arr[R];
        if (sum == k) return true;
        else if (sum > k) R--;
        else L++;
    }
    return false;
};