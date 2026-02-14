const canvas = document.getElementById("gridCanvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "#220000";
canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight / 2;

canvas.style.padding = "20px";

const LETTERS = {
  A: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  B: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
  ],
};

const CELL_SIZE = 20;
const GAP = 4;
let offsetX = 0;

function drawLetter(letter, offset) {
  const matrix = LETTERS[letter];
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * (CELL_SIZE + GAP) + offset;
      const y = row * (CELL_SIZE + GAP);

      if (matrix[row][col] === 1) {
        ctx.fillStyle = "red";
      } else {
        ctx.fillStyle = "#220000";
      }

      ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
    }
  }
  return offset + cols * (CELL_SIZE + GAP) + 20;
}

offsetX = drawLetter("A", offsetX);
offsetX = drawLetter("B", offsetX);
