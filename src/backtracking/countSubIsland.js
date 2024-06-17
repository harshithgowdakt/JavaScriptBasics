// https://leetcode.com/problems/count-sub-islands/description/

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
    let rows = grid2.length;
    let cols = grid2[0].length;

    function backtrack(row, col) {
        if (row < 0 || col < 0 || row >= rows || col >= cols) return true;
        if (grid2[row][col] !== 1) return true;

        grid2[row][col] = 0;

        let isSubIsland = true;
        if (grid1[row][col] === 0) isSubIsland = false;

        let up = backtrack(row - 1, col);
        let down = backtrack(row + 1, col);
        let left = backtrack(row, col - 1);
        let right = backtrack(row, col + 1);

        return isSubIsland && up && down && left && right;
    }

    let res = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid2[i][j] === 1) {
                if (backtrack(i, j)) {
                    res++;
                }
            }
        }
    }
    return res;
};