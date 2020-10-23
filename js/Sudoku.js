/**
 * Sudoku Model 
 */

export default class Sudoku {
    /**
     * Class for the Sudoku game/board.
     */
    constructor() {
        this.board = [];
        for (let i = 0; i < 9; i++) {
            this.board.push([]);
            for (let j = 0; j < 9; j++) {
                this.board[i][j] = 0;
            }
        }
    }

    /**
     * Resets the board to a blank state.
     * */
    resetBoard() {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                this.board[i][j] = 0;
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
     * @return true when row, col and square checks are
     *         valid, false otherwise.
     * */
    isValid(board, row, col, num) {
        // check row
        for (let i = 0; i < board.length; i++) {
            if (board[row][i] === num) {
                return false;
            }
        }

        // check col
        for (let i = 0; i < board.length; i++) {
            if (board[i][col] === num) {
                return false;
            }
        }

        // row/col bounds for square
        const start = Math.floor(row / 3) * 3;
        const end = Math.floor(col / 3) * 3;

        // check square
        for (let i = start; i < start + 3; i++) {
            for (let j = end; j < end + 3; j++) {
                if (board[i][j] === num) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Determines if the sudoku puzzle has been solved.
     * @return true if all spots filled, false otherwise.
     */
    isSolved() {
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i].includes(0)) {
                return false;
            }
        }
        return true;
    }
    /**
     * @return an array containing the row/col index of
     * an empty spot if found, otherwise return an empty
     * array.
     */
    findEmptySpot() {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                if (this.board[i][j] === 0) {
                    return [i, j];
                }
            }
        }
        return [];
    }

    /**
     * Solves the sudoku puzzle, if possible.
     * @return the sudoku board once the puzzle is solved,
     *         true if puzzle is already solved, false if the
     *         puzzle cannot be solved.
     */
    solvePuzzle(board) {
        let emptyLocation = this.findEmptySpot();

        if (emptyLocation.length === 0) {
            console.log("Puzzle is in a solved state.");
            return true;
        }

        let row = emptyLocation[0];
        let col = emptyLocation[1];

        // check which value works in the empty place
        for (let val = 1; val < 10; val++) {
            if (this.isValid(board, row, col, val)) {
                board[row][col] = val;

                if (this.solvePuzzle(board)) {
                    return this.board;
                }

                // backtrack
                board[row][col] = 0;
            }
        }

        return false;
    }

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

    /**
     * @return true if sudoku board does not fail (entire board valid),
     *         otherwise return false.
     */
    sudokuSafe() {
        let [rowSet, colSet, squareSet] = [[], [], []]
        let curr, square;

        for (let i = 0; i < 9; i++) {
            rowSet.push(new Set());
            colSet.push(new Set());
            squareSet.push(new Set());
        }

        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                curr = this.board[i][j];
                if (curr !== 0) {
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
}