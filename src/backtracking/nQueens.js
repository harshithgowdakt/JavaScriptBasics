// https://leetcode.com/problems/n-queens/description/


/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let ans = [],
        cols = new Set(),
        positiveDiag = new Set(),
        negetiveDiag = new Set(),
        board = Array(n).fill().map(() => Array(n).fill("."));

    function backtrack(row) {
        if (row == n) {
            let copy = board.map((row) => row.join(''));
            ans.push(copy);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (!cols.has(col) &&
                !positiveDiag.has(row + col) &&
                !negetiveDiag.has(row - col)) {

                cols.add(col);
                positiveDiag.add(row + col);
                negetiveDiag.add(row - col);
                board[row][col] = "Q";

                backtrack(row + 1);

                cols.delete(col);
                positiveDiag.delete(row + col);
                negetiveDiag.delete(row - col);
                board[row][col] = ".";
            }
        }
    }

    backtrack(0);
    return ans;
};