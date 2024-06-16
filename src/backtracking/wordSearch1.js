// https://leetcode.com/problems/word-search/description/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let rows = board.length;
    let columns = board[0].length;

    let visited = Array(rows).fill(0).map(() => Array(columns).fill(false));

    function dfs(charIndex, row, column) {
        if (row < 0 || column < 0) return false;
        if (row >= rows || column >= columns) return false;
        if (visited[row][column]) return false;
        if (board[row][column] != word.charAt(charIndex)) return false;

        if (charIndex == word.length - 1) return true;


        visited[row][column] = true;

        let isExists = dfs(charIndex + 1, row, column + 1) ||
            dfs(charIndex + 1, row, column - 1) ||
            dfs(charIndex + 1, row + 1, column) ||
            dfs(charIndex + 1, row - 1, column)

        visited[row][column] = false;
        return isExists;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (board[i][j] === word.charAt(0) && dfs(0, i, j)) return true;
        }
    }

    return false;
};