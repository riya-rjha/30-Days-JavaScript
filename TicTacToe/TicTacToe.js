let arr = Array(9).fill(null);
let currentEl = "X";
const finalText = document.getElementById("final-text");

const handleWin = () => {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[3] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    // console.log("Winner is " + currentEl);
    finalText.innerHTML = `Winner is ${currentEl}!`;
    finalText.style.color = "green";
  }
};

const handleClick = (el) => {
  let id = el.id;
  //console.log(id);
  el.innerHTML = currentEl;
  arr[id] = currentEl;
  if (arr[id] !== null) return;
  handleWin();
  currentEl = currentEl === "X" ? (currentEl = "O") : "X";
};
