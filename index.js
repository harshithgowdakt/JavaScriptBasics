var setZeroesOptimal = function (matrix) {
  if (matrix.length < 1) return;
  let rows = matrix.length;
  let columns = matrix[0].length;

  let rowZero = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] == 0) {
        matrix[0][j] = 0;
      }
         if (j > 0) matrix[i][0] = 0;
         else rowZero = true;
    }


  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      if (matrix[0][j] == 0 || matrix[i][0] == 0) matrix[i][j] = 0;
    }
  }

  for (let i = 0; i < rows; i++) {
    if (matrix[0][0] == 0) matrix[i][0] = 0;
  }

  if ((rowZero = true)) {
    for (let i = 0; i < columns; i++) {
      matrix[0][i] = 0;
    }
  }
};

let matrix = [
  [1, 2, 3, 4],
  [5, 0, 7, 8],
  [0, 10, 11, 12],
  [13, 14, 15, 0],
];

setZeroesOptimal(matrix);
console.log(matrix);
