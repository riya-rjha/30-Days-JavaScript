let arr = Array(9).fill(null);
let currentEl = "X";
const finalText = document.getElementById("final-text");
let gameOver = false;

const handleWin = () => {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    // console.log("Winner is " + currentEl);
    document.write(`Winner is ${currentEl}`);
    return;
  }
};

const handleClick = (el) => {
  let id = Number(el.id);
  // console.log(id);
  if (arr[id] !== null) return; // a block can only have one element
  arr[id] = currentEl;
  el.innerHTML = currentEl;
  handleWin();
  currentEl = currentEl === "X" ? (currentEl = "O") : "X";
};
