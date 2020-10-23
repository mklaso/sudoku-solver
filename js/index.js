import "../sass/main.scss";
import Sudoku from "./Sudoku";
import { elements } from "./sudokuView";
import * as sudokuView from "./sudokuView";

/**
 * Sudoku Controller
 */

// renders the entire grid
for (let i = 0; i < 9; i++) {
  sudokuView.renderInnerGrids();
}

// populate nodeList with all grid cells
elements.nodeList = document.querySelectorAll(".sudoku-grid__grid-cell");

const sudoku = new Sudoku();
// testing purposes
window.sudoku = sudoku;
let currGrid;

let container = document.querySelector(".container");

container.addEventListener("input", (() => {
    currGrid = sudokuView.retrieveCurrentGrid();
    sudoku.setBoard(currGrid);
    sudoku.showBoard();
}));

elements.solverBtn.addEventListener("click", (() => {
    if (!sudoku.isSolved() && sudoku.sudokuSafe()) {
        // retrieve current grid state from UI and set sudoku state to this
        currGrid = sudokuView.retrieveCurrentGrid();
        sudoku.setBoard(currGrid);

        // call the solve method on sudoku object
        sudoku.solvePuzzle(sudoku.board);
        // testing
        sudoku.showBoard();

        // update the ui to match the solved state
        sudokuView.setCurrentGrid(sudoku.board);
    }
}))

elements.resetBtn.addEventListener("click", (() => {
    sudokuView.clearCurrentGrid();
    sudoku.resetBoard();
    // testing
    sudoku.showBoard();
}))