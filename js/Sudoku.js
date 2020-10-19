// Model

/**
 * Class for the Sudoku game/board.
 */
class Sudoku {
  constructor() {
    this.board = [];
    for (let i = 0; i < 9; i++) {
      this.board.push([]);
      for (let j = 0; j < 9; j++) {
        this.board[i][j] = " ";
      }
    }
  }

  /**
   * Resets the board to a blank state.
   * */
  resetBoard() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[0].length; j++) {
        this.board[i][j] = " ";
      }
    }
  }

  /**
   * Sets the sudoku board equal to the input board.
   * */
  setBoard(otherBoard) {
    for (let i = 0; i < otherBoard.length; i++) {
      for (let j = 0; j < otherBoard[0].length; j++) {
        this.board[i][j] = otherBoard[i][j];
      }
    }
  }

  /**
   * Determine if the sudoku board is valid.
   * @return true when valid, false otherwise
   * */
  isValid() {
    let [rowSet, colSet, squareSet] = [[], [], []];
    let curr, square;

    for (let i = 0; i < 9; i++) {
      rowSet.push(new Set());
      colSet.push(new Set());
      squareSet.push(new Set());
    }

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[0].length; j++) {
        curr = this.board[i][j];
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
  }

  /**
   * Determines if the sudoku puzzle has been solved.
   * @return true if all spots filled, false otherwise
   */
  isSolved() {
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i].includes(" ")) {
        return false;
      }
    }
    return true;
  }

  /**
   * Solves the sudoku puzzle, if possible.
   */
  solvePuzzle() {}

  /**
   * Text version of the sudoku board - for testing purposes.
   */
  showBoard() {
    for (let i = 0; i < 9; i++) {
      console.log("------------------");
      console.log(this.board[i].join("|"));
    }
    console.log("------------------");
  }
}
