var rotate = function (matrix) {
  // Check if the matrix is empty
  if (matrix.length < 1) return matrix;

  // Get the number of rows and columns in the matrix
  let rows = matrix.length,
    columns = matrix[0].length;

  // Transpose the matrix
  for (let i = 0; i < rows; i++) {
    for (let j = i + 1; j < columns; j++) {
      // Swap matrix[i][j] with matrix[j][i]
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Reverse each row of the transposed matrix
  for (let i = 0; i < rows; i++) {
    let L = 0, R = columns - 1;
    while (L < R) {
      // Swap matrix[i][L] with matrix[i][R]
      let temp = matrix[i][L];
      matrix[i][L] = matrix[i][R];
      matrix[i][R] = temp;
      L++;
      R--;
    }
  }
};

// Test the rotate function with an example matrix
console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));