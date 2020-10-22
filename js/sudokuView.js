/**
 * Sudoku View
 */

/**
 * Renders the inner grids of the Sudoku grid
 * to the webpage.
 */

export const elements = {
    sudokuGrid: document.querySelector(".sudoku__grid"),
    solverBtn: document.querySelector(".solver"),
    nodeList: document.querySelectorAll(".inner__grid--cell"),
}
 
export const renderInnerGrids = () => {
  const markup = `
    <input value=""class="inner__grid--cell"></input>
    <input value=""class="inner__grid--cell"></input>
    <input value=""class="inner__grid--cell"></input>
    <input value=""class="inner__grid--cell"></input>
    <input value=""class="inner__grid--cell"></input>
    <input value=""class="inner__grid--cell"></input>
    <input value=""class="inner__grid--cell"></input>
    <input value=""class="inner__grid--cell"></input>
    <input value=""class="inner__grid--cell"></input>
    `;

  elements.sudokuGrid.insertAdjacentHTML("beforeend", markup);
};

export const retrieveCurrentGridInfo = () => {
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
            elements.nodeList[count].value = puzzle[i][j];
            count++;
        }
    }
}