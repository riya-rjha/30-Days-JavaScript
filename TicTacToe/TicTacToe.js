let board = Array(9).fill(null);
let currentPlayer = "X";
const finalText = document.getElementById("final-text");
let gameOver = false;

/**
 * Check win conditions for the current board and update UI if there is a winner.
 */
const handleWin = () => {
  const b = board;
  if (
    (b[0] !== null && b[0] == b[1] && b[1] == b[2]) ||
    (b[3] !== null && b[3] == b[4] && b[4] == b[5]) ||
    (b[6] !== null && b[6] == b[7] && b[7] == b[8]) ||
    (b[0] !== null && b[0] == b[3] && b[3] == b[6]) ||
    (b[1] !== null && b[1] == b[4] && b[4] == b[7]) ||
    (b[2] !== null && b[2] == b[5] && b[5] == b[8]) ||
    (b[0] !== null && b[0] == b[4] && b[4] == b[8]) ||
    (b[2] !== null && b[2] == b[4] && b[4] == b[6])
  ) {
    finalText.textContent = `Winner is ${currentPlayer}`;
    gameOver = true;
  }
};

/**
 * Handle a cell click.
 * @param {HTMLElement} el
 */
const handleClick = (el) => {
  if (gameOver) return;
  const id = Number(el.id);
  if (board[id] !== null) return; // a block can only have one element
  board[id] = currentPlayer;
  el.innerHTML = currentPlayer;
  handleWin();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
};
