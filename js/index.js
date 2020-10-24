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

elements.container.addEventListener("input", ((e) => {
    let numbers = /^[0-9]+$/;
    let input = e.target.value;

    // input validation, don't change value unless it's a number between 1 - 9
    input = input.length > 1 && input.slice(-1) === "0" || !input.slice(-1).match(numbers) ? input.slice(-2, -1) : input.slice(-1);

    if (input > 0 && input <= 9) {
        e.target.value = input;
        currGrid = sudokuView.retrieveCurrentGrid();
        sudoku.setBoard(currGrid);
    } else if (!input.match(numbers)) {
        e.target.value = "";
    }
}));

elements.container.addEventListener("keydown", ((e) => {
    // resets grid cell
    if (e.key === "Backspace") {
        e.target.value = "";
    }
}));

elements.container.addEventListener("click", ((e) => {
    if (e.target.classList[0] === "option") {
        let difficulty = e.target.textContent;
        console.log(difficulty);

        // set the difficulty, call the sudoku method and generate
        // a new randomized puzzle corresponding to difficulty chosen

        // sudoku.generatePuzzle(difficulty);

        // update UI to match generated puzzle.
        // sudokView.setCurrentGrid(sudoku.board);
    }
}));

let currGrid;
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