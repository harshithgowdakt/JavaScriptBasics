//https://leetcode.com/problems/set-matrix-zeroes/description/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  if (matrix.length < 1) return;

  let rows = matrix.length;
  let columns = matrix[0].length;

  let columnMat = new Array(matrix[0].length).fill(0);
  let rowMat = new Array(matrix.length).fill(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] == 0) {
        rowMat[i] = 1;
        columnMat[j] = 1;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (columnMat[j] == 1 || rowMat[i] === 1) matrix[i][j] = 0;
    }
  }
};

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 0, 8],
  [9, 10, 11, 12],
];

setZeroes(matrix);
console.log(matrix);
