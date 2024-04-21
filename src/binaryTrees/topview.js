

function topView(root) {
    if (root == null) return [];

    let queue = [[root, 0]];
    let vertical = new Map();

    while (queue.length > 0) {
        let [node, ver] = queue.shift();

        if (!vertical.has(ver)) vertical.set(ver, node.val);

        if (node.left) queue.push([node.left, ver - 1]);
        if (node.right) queue.push([node.right, ver + 1]);
    }

    let sortedVerticals = Array.from(vertical.keys()).sort((a, b) => a - b);
    let ans = [];
    for (let ver of sortedVerticals) {
        ans.push(vertical.get(ver));
    }
    return ans;
}