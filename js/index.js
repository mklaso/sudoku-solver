// main file - handles everything using mvc

let sudokuGrid = document.querySelector(".sudoku__grid");

const renderInnerGrids = () => {
  const markup = `
    <div class="inner__grid">
        <div class="inner__grid--cell"></div>
        <div class="inner__grid--cell">2</div>
        <div class="inner__grid--cell">3</div>
        <div class="inner__grid--cell">4</div>
        <div class="inner__grid--cell"></div>
        <div class="inner__grid--cell">6</div>
        <div class="inner__grid--cell">7</div>
        <div class="inner__grid--cell">8</div>
        <div class="inner__grid--cell"></div>
    </div>
    `;

  sudokuGrid.insertAdjacentHTML("beforeend", markup);
};

// renders the entire grid
for (i = 0; i < 9; i++) {
  renderInnerGrids();
}
