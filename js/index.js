import "../sass/main.scss";
import Sudoku from "./Sudoku";
import * as sudokuView from "./sudokuView";

/**
 * Sudoku Controller
 */

const sudoku = new Sudoku();
let sudokuGrid = document.querySelector(".sudoku__grid");

// testing purposes
window.sudoku = sudoku;

// renders the entire grid
for (let i = 0; i < 9; i++) {
  sudokuView.renderInnerGrids(sudokuGrid);
}
