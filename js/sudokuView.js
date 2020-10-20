/**
 * Sudoku View
 */

/**
 * Renders the inner grids of the Sudoku grid
 * to the webpage.
 */
export const renderInnerGrids = (grid) => {
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

  grid.insertAdjacentHTML("beforeend", markup);
};