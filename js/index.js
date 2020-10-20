import "../sass/main.scss";
import { Sudoku } from "./Sudoku";
import { sudokuController } from "./sudokuController";
import { sudokuView } from "./sudokuView";
// main file - handles everything using MVC



let sudokuGrid = document.querySelector(".sudoku__grid");

// move this to sudokuView after the webpack/babel config is set up.

/**
 * Renders the Sudoku board to the webpage.
 */
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
for (let i = 0; i < 9; i++) {
  renderInnerGrids();
}
