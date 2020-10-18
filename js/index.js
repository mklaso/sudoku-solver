// main file - handles everything using mvc

let sudokuGrid = document.querySelector(".sudoku-grid");

console.log(sudokuGrid);

const renderInnerGrids = () => {
  const markup = `
    <div class="inner-grid-cell">
        <div class="cell cell-1"></div>
        <div class="cell cell-2">2</div>
        <div class="cell cell-3">3</div>
        <div class="cell cell-4">4</div>
        <div class="cell cell-5">5</div>
        <div class="cell cell-6">6</div>
        <div class="cell cell-7">7</div>
        <div class="cell cell-8">8</div>
        <div class="cell cell-9">9</div>
    </div>
    `;

  sudokuGrid.insertAdjacentHTML("beforeend", markup);
};

// renders the entire grid
for (i = 0; i < 9; i++) {
  renderInnerGrids();
}
