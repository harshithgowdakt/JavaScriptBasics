function isLeafNode(node) {
    return !node.left && !node.right;
}

let left = [];
function leftBoundary(root) {
    if (!root || isLeafNode(root)) return;
    left.push(root.val);

    if (root.left) leftBoundary(root.left);
    else if (root.right) leftBoundary(root.right);
}

let right = [];
function rightBoundary(root) {
    if (!root || isLeafNode(root)) return;
    right.push(root.val);

    if (root.right) rightBoundary(root.right);
    else if (root.left) rightBoundary(root.left);
}

let leaf = [];
function bottomNodes(root) {
    if (!root) return;
    if (isLeafNode(root)) {
        leaf.push(root.val);
        return;
    }

    bottomNodes(root.left);
    bottomNodes(root.right);
}

function printBoundary(root) {
    if (!root) return [];

    left = [];
    right = [];
    leaf = [];

    if (!isLeafNode(root)) {
        left.push(root.val);
    }
    leftBoundary(root.left);
    bottomNodes(root.left);
    bottomNodes(root.right);
    rightBoundary(root.right);

    let ans = left.concat(leaf).concat(right.reverse());
    return ans;
}

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let root = new Node(20, new Node(8, new Node(4), new Node(12, new Node(10), new Node(14))), new Node(22, null, new Node(25)));
console.log(printBoundary(root));
