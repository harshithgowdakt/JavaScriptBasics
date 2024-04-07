class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function arrayToBinaryTree(arr) {
    if (arr.length === 0) return null;

    // Create a queue to perform level-order traversal
    const queue = [];
    const root = new TreeNode(arr[0]);
    queue.push(root);

    for (let i = 1; i < arr.length; i += 2) {
        // Take the front node from the queue
        const current = queue.shift();

        // Create left child if the value is not null
        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }

        // Create right child if the value is not null
        if (i + 1 < arr.length && arr[i + 1] !== null) {
            current.right = new TreeNode(arr[i + 1]);
            queue.push(current.right);
        }
    }

    return root;
}

// Example usage:
const arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
const root = arrayToBinaryTree(arr);
console.log(root);