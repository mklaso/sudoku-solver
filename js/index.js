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

    // console.log(e.target.value);


    if (input > 0 && input <= 9) {
        e.target.value = input;
        currGrid = sudokuView.retrieveCurrentGrid();
        // this part interferes with isValid checks, should set after checking.
        // sudoku.setBoard(currGrid);
    } else if (!input.match(numbers)) {
        e.target.value = "";
    }

    console.log(e.target.classList[0], e.target.classList[1]);
    let targetRow = parseInt(e.target.classList[0].slice(-1));
    let targetCol = parseInt(e.target.classList[1].slice(-1));



    // ====================================
    let count = 0;
    for (let i = 0; i < sudoku.board.length; i++) {
        for (let j = 0; j < sudoku.board[0].length; j++) {
            // console.log(i === targetRow && j === targetCol);

            // console.log(targetRow, targetCol)
            // console.log(typeof targetRow, typeof targetCol);
            // console.log(sudoku.isValid(sudoku.board, targetRow, targetCol, input));
            if (i === targetRow && j === targetCol && sudoku.isValid(sudoku.board, targetRow, targetCol, input)) {
                console.log("INVALID.");
                // console.log(targetRow, targetCol);
                // console.log(sudoku.isValid(sudoku.board, targetRow, targetCol, input));
                elements.nodeList[count].style.backgroundColor = "red";
                
                // console.log(sudoku.isValid(sudoku.board, targetRow, targetCol, input));
                // if (sudoku.isValid(sudoku.board, targetRow, targetCol, parseInt(e.target.value))) {
                //     console.log("not a valid number.");
                //     elements.nodeList[count].style.backgroundColor = "red";
                // } else {
                //     console.log("valid number.");
                // }
            } 
            // sudoku.setBoard(currGrid);
            // if (i === targetRow && j === targetCol) {
            //     console.log("YES");
            //     console.log(sudoku.isValid(sudoku.board, targetRow, targetCol, input));
            // }

            // elements.nodeList[count].style.backgroundColor = "yellow";
            
            count++;
        }
    }

}));

elements.container.addEventListener("keydown", ((e) => {
    // resets grid cell
    if (e.key === "Backspace" || e.key === "Delete") {
        e.target.value = "";
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
        // testing
        // sudoku.showBoard();

        // update the ui to match the solved state
        sudokuView.setCurrentGrid(sudoku.board);
    }
}))

elements.resetBtn.addEventListener("click", (() => {
    sudokuView.clearCurrentGrid();
    sudoku.resetBoard();
    // testing
    // sudoku.showBoard();
}))