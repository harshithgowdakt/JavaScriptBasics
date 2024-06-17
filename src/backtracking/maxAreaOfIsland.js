// https://leetcode.com/problems/max-area-of-island/description/


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let area = 0;
    let rows = grid.length,
        cols = grid[0].length;

    function dfs(row, col) {
        if (row < 0 || row >= rows) return 0;
        if (col < 0 || col >= cols) return 0;
        if (grid[row][col] == 0) return 0;

        grid[row][col] = 0;

        let up = dfs(row + 1, col),
            down = dfs(row - 1, col),
            left = dfs(row, col - 1),
            right = dfs(row, col + 1);

        return (up + down + left + right + 1);
    }


    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1) {
                area = Math.max(area, dfs(i, j));
            }
        }
    }

    return area;
};