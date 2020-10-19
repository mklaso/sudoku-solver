// model for the sudoku puzzle

/**
 * Determine if a sudoku board is valid.
 * @param board - the sudoku board being checked 
 * @return true when valid, false otherwise
 * */ 
const isValidSudoku = (board) => {
  let [rowSet, colSet, squareSet] = [[], [], []];
  let curr, square;

  for (let i = 0; i < 9; i++) {
    rowSet.push(new Set());
    colSet.push(new Set());
    squareSet.push(new Set());
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      curr = board[i][j];
      // when the cell is not empty
      if (curr !== ".") {
        square = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (
          rowSet[i].has(curr) ||
          colSet[j].has(curr) ||
          squareSet[square].has(curr)
        ) {
          return false;
        }
        rowSet[i].add(curr);
        colSet[j].add(curr);
        squareSet[square].add(curr);
      }
    }
  }

  return true;
};
