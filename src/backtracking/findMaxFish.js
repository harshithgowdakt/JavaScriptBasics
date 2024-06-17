// https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
    let fish = 0;
    let rows = grid.length,
        cols = grid[0].length;

    function dfs(row, col) {
        if (row < 0 || row >= rows) return 0;
        if (col < 0 || col >= cols) return 0;
        if (grid[row][col] == 0) return 0;

        let currCellFish = grid[row][col];
        grid[row][col] = 0;

        let up = dfs(row + 1, col),
            down = dfs(row - 1, col),
            left = dfs(row, col - 1),
            right = dfs(row, col + 1);

        return (up + down + left + right + currCellFish);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] != 0) {
                fish = Math.max(fish, dfs(i, j));
            }
        }
    }

    return fish;
};