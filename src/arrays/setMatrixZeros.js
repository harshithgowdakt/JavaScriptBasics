//https://leetcode.com/problems/set-matrix-zeroes/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroesBruteForce = function (matrix) {
  if (matrix.length < 1) return;

  let columnLength = matrix.length;
  let rowLength = matrix[0].length;

  const setColumn = (column) => {
    for (let i = 0; i < columnLength; i++) {
      if (matrix[i][column] != 0) matrix[i][column] = -1;
    }
  };

  const setRow = (row) => {
    for (let i = 0; i < rowLength; i++) {
      if (matrix[row][i] != 0) matrix[row][i] = -1;
    }
  };

  for (let i = 0; i < columnLength; i++) {
    for (let j = 0; j < rowLength; j++) {
      if (matrix[i][j] == 0) {
        setColumn(j);
        setRow(i);
      }
    }
  }

  for (let i = 0; i < columnLength; i++) {
    for (let j = 0; j < rowLength; j++) {
      if (matrix[i][j] == -1) {
        matrix[i][j] = 0;
      }
    }
  }
};
