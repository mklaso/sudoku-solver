/**
 * Sudoku View
 */

/**
 * Renders the inner grids of the Sudoku grid
 * to the webpage.
 */

export const elements = {
    container: document.querySelector(".container"),
    sudokuGrid: document.querySelector(".sudoku-grid"),
    solverBtn: document.querySelector(".options__button--solver"),
    resetBtn: document.querySelector(".options__button--reset"),
    nodeList: document.querySelectorAll(".sudoku-grid__grid-cell"),
    timer: document.querySelector(".timer"),
}

export const renderInnerGrids = (row, col) => {
    const markup = `
    <input value="" class="row${row} col${col} sudoku-grid__grid-cell"></input>
    `;

  elements.sudokuGrid.insertAdjacentHTML("beforeend", markup);
};

export const retrieveCurrentGrid = () => {
    let currentGrid = []
    let inner = []
    let count = 0

    for (let i = 0; i < elements.nodeList.length; i++) {
        count++;
        let currVal = elements.nodeList[i].value;
        
        if (currVal === "") {
            currVal = 0;
        } else {
            currVal = parseInt(currVal);
        }

        if (count < 9) {
            inner.push(currVal);

        } else { 
        inner.push(currVal)
        currentGrid.push(inner);
        inner = [];
        count = 0;
        }
    }

    return currentGrid;
}

export const setCurrentGrid = (puzzle) => {
    let count = 0;
    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle[0].length; j++) {
            if (puzzle[i][j] === 0) {
                elements.nodeList[count].value = "";
            } else {
                elements.nodeList[count].value = puzzle[i][j];
            }
            count++;
        }
    }
}

export const clearCurrentGrid = () => {
    for (let i = 0; i < elements.nodeList.length; i++) {
        elements.nodeList[i].value = "";
        if (elements.nodeList[i].classList.contains("sudoku-grid__grid-cell--invalid")) {
            elements.nodeList[i].classList.remove("sudoku-grid__grid-cell--invalid");
        }
    }
}

export const startTimer = () => {
    // initialize time to 0
    elements.timer.textContent = "00:00";
    let timePassed = 0;

    let timer = setInterval(() => {
        // calculate the hour, min, and sec - each second
        let hour = String(Math.floor(timePassed / 3600));
        let min = String(Math.floor(timePassed / 60)).padStart(2, 0);
        let sec = String(timePassed % 60).padStart(2, 0);
        
        // display our time to UI
        if (parseInt(hour) === 0) {
            elements.timer.textContent = `${min}:${sec}`;
        } else { 
            min = String(Math.floor((timePassed % 3600) / 60)).padStart(2, 0);
            elements.timer.textContent = `${hour}:${min}:${sec}`;
        }
        timePassed++;
    }, 1000)

    return timer;
}