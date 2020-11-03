import "../sass/main.scss";
import Sudoku from "./Sudoku";
import { elements } from "./sudokuView";
import * as sudokuView from "./sudokuView";

/**
 * Sudoku Controller
 */

// renders the entire grid
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        sudokuView.renderInnerGrids(i, j);
    }
}

// populate nodeList with all grid cells
elements.nodeList = document.querySelectorAll(".sudoku-grid__grid-cell");

const sudoku = new Sudoku();
// testing purposes
window.sudoku = sudoku;

elements.container.addEventListener("input", ((e) => {
    let numbers = /^[1-9]+$/;
    let input = e.target.value;

    // input validation, don't change value unless it's a number between 1 - 9
    input = input.length > 1 && input.slice(-1) === "0" || !input.slice(-1).match(numbers) ? input.slice(-2, -1) : input.slice(-1);

    if (input > 0 && input <= 9) {
        e.target.value = input;
        currGrid = sudokuView.retrieveCurrentGrid();
    } else if (!input.match(numbers)) {
        e.target.value = "";
    } 

    let targetRow = parseInt(e.target.classList[0].slice(-1));
    let targetCol = parseInt(e.target.classList[1].slice(-1));

    // invalid input hinting
    if (sudoku.isValid(sudoku.board, targetRow, targetCol, input)) {
        console.log("VALID.");
        if (e.target.classList.contains("sudoku-grid__grid-cell--invalid")) {
            e.target.classList.remove("sudoku-grid__grid-cell--invalid");
        }
    } else {
        console.log("INVALID.");
        if (!e.target.classList.contains("sudoku-grid__grid-cell--invalid")) {
            e.target.classList.add("sudoku-grid__grid-cell--invalid");
        }
    }    
    sudoku.setBoard(currGrid);

}));

elements.container.addEventListener("keydown", ((e) => {
    // resets grid cell
    if (e.key === "Backspace" || e.key === "Delete") {
        e.target.value = "";
        currGrid = sudokuView.retrieveCurrentGrid();
        sudoku.setBoard(currGrid);
        if (e.target.classList.contains("sudoku-grid__grid-cell--invalid")) {
            e.target.classList.remove("sudoku-grid__grid-cell--invalid");
        }
    }
}));

elements.container.addEventListener("click", ((e) => {
    if (e.target.classList[0] === "option") {
        let difficulty = e.target.textContent;
        // console.log(difficulty);

        // reset the board and UI first
        // first part might not be needed.
        // sudokuView.clearCurrentGrid();
        // sudoku.resetBoard();
        
        // // generate the the puzzle based on difficulty and set the UI
        // sudoku.generatePuzzle(difficulty);
        // // sudoku.showBoard();
        
        // sudokuView.setCurrentGrid(sudoku.board);
        // sudokuView.retrieveCurrentGrid();

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

        // update the ui to match the solved state
        sudokuView.setCurrentGrid(sudoku.board);
    }
}))

elements.resetBtn.addEventListener("click", (() => {
    sudokuView.clearCurrentGrid();
    sudoku.resetBoard();
}))