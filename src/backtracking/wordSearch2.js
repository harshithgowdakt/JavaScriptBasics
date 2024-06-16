// https://leetcode.com/problems/word-search-ii/

var TrieNode = function () {
    this.children = {};
    this.isWord = false;
}

var addWord = function (root, word) {
    let curr = root;
    for (let char of word) {
        if (!curr.children[char]) {
            curr.children[char] = new TrieNode();
        }
        curr = curr.children[char];
    }
    curr.isWord = true;
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    let root = new TrieNode();
    let rows = board.length, columns = board[0].length;
    let visited = Array(rows).fill(0).map(() => Array(columns).fill(false));
    let res = new Set();  // Use a Set to avoid duplicate words

    // Add words to the Trie
    for (let word of words) {
        addWord(root, word);
    }

    function dfs(row, column, node, word) {
        if (row < 0 || column < 0) return;
        if (row >= rows || column >= columns) return;
        if (visited[row][column]) return;
        if (!node.children[board[row][column]]) return;

        visited[row][column] = true;
        node = node.children[board[row][column]];
        word += board[row][column];

        if (node.isWord) res.add(word);  // Use add to avoid duplicates

        dfs(row - 1, column, node, word);
        dfs(row + 1, column, node, word);
        dfs(row, column - 1, node, word);
        dfs(row, column + 1, node, word);

        visited[row][column] = false;
    }

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            dfs(row, column, root, "");
        }
    }

    return Array.from(res);  // Convert Set to Array before returning
};
