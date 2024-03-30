//https://leetcode.com/problems/spiral-matrix-ii/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let columnStart = 0,
    columnEnd = n - 1;
  let rowStart = 0,
    rowEnd = n - 1;
  let matrix = new Array(n).fill(null).map(() => new Array(n).fill(0));

  let count = 1;
  while (columnStart <= columnEnd && rowStart <= rowEnd) {
    for (let i = columnStart; i <= columnEnd; i++) {
      matrix[rowStart][i] = count;
      count++;
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      matrix[i][columnEnd] = count;
      count++;
    }
    columnEnd--;

    if (columnStart <= columnEnd) {
      for (let i = columnEnd; i >= columnStart; i--) {
        matrix[rowEnd][i] = count;
        count++;
      }
      rowEnd--;
    }

    if (rowStart <= rowEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        matrix[i][columnStart] = count;
        count++;
      }
      columnStart++;
    }
  }
  return matrix;
};
