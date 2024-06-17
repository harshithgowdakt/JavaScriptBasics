// https://leetcode.com/problems/number-of-islands/description/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let islandsCount = 0;

    let rows = grid.length;
    let columns = grid[0].length;


    function backtrack(row, column) {
        if (row < 0 || row >= rows) return;
        if (column < 0 || column >= columns) return;
        if (grid[row][column] == "0") return;

        grid[row][column] = "0";
        backtrack(row - 1, column);
        backtrack(row + 1, column);
        backtrack(row, column - 1);
        backtrack(row, column + 1);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] == "1") {
                islandsCount++;
                backtrack(i, j);
            }
        }
    }

    return islandsCount;
};