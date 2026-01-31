let rows = 6;
let cols = 20;

let cellSize = 40; // 40px

const grid = document.querySelector("#grid");
const patternButton = document.querySelector("#pattern");

const gridState = Array(rows * cols).fill(false);

let index = 0;
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = index;
    index++;
    grid.appendChild(cell);
  }
}

// add grid template rows and cols dynamically based on rows and cols variable
grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const index = Number(cell.dataset.index);
    gridState[index] = !gridState[index];
    cell.classList.toggle("active");
  });
});

patternButton.addEventListener("click", () => {
  createPattern(6, cells);
});

function createPattern(number, cells) {
  // reset all buttons

  document.querySelectorAll(".cell").forEach((cell) => {
    cell.classList.remove("active");
  });
  let randomCells = new Set();
  for (let i = 0; i < number; i++) {
    let randomIndex = Math.floor(Math.random() * gridState.length);
    while (randomCells.has(randomIndex)) {
      randomIndex = Math.floor(Math.random() * gridState.length);
    }
    randomCells.add(randomIndex);
  }
  console.log(randomCells);

  for (i = 0; i < gridState.length; i++) {
    if (randomCells.has(i)) {
      cells[i].classList.add("active");
    }
  }
}
