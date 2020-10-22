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
elements.nodeList = document.querySelectorAll(".inner__grid--cell");

// ====================IDEA=======================/
// 1. parse the UI's grid and store in a grid var.
// 2. if solve is pressed on UI, set the current sudoku object's state/grid to the parsed one.
// 3. solve the parsed grid
// 4. relay the solved grid back to the UI and update each cell accordingly.

elements.nodeList[0].value = 9;
let currGrid = sudokuView.retrieveCurrentGridInfo();
console.log(currGrid);


const sudoku = new Sudoku();
// testing purposes
window.sudoku = sudoku;

elements.solverBtn.addEventListener("click", (() => {
    // 1. call the solve method on sudoku object

    // 2. update the ui to match the solved state
}))

// testing purposes
sudoku.showBoard();
sudoku.setBoard(currGrid);
sudoku.showBoard();
sudoku.solvePuzzle(sudoku.board);
sudoku.showBoard();