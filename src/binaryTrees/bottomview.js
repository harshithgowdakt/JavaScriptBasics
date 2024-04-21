function bottomView(root) {
    if (root == null) return [];

    let queue = [[root, 0]];
    let order = new Map();
    while (queue.length > 0) {
        let [node, ver] = queue.shift();
        order.set(ver, node.val);

        if (node.left) queue.push([node.left, ver - 1]);
        if (node.right) queue.push([node.right, ver + 1]);
    }

    let sortedVerticals = Array.from(order.keys()).sort((a, b) => a - b);
    let ans = [];

    for (let ver of sortedVerticals) {
        ans.push(order.get(ver));
    }
    return ans;
}