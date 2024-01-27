const resetButton = document.querySelector(".reset>button");
const griditems = document.querySelectorAll(".griditem");
const player1turn = document.querySelector(".turn1");
const player2turn = document.querySelector(".turn2");
const player1 = "X";
const player2 = "O";

const text1 = player1turn.textContent;
const text2 = player2turn.textContent;

const x = document.createElement("div");
x.classList.add("x");
x.textContent = "X";
const x_o = document.createElement("div");
const o = document.createElement("div");
o.classList.add("o");
o.textContent = "O";

let currentPlayer = player1;
let draw = false;

let win = false;
// let winner = "";

griditems.forEach((item) => {
  item.querySelector(".state").appendChild(x_o.cloneNode(true));
  //   console.log(item);
  item.addEventListener("click", (e) => {
    if (
      currentPlayer === player1 &&
      item.querySelector(".state>div").textContent.includes("X") === false &&
      item.querySelector(".state>div").textContent.includes("O") === false &&
      !win
    ) {
      //   item.querySelector(".state").appendChild(x.cloneNode(true));
      item.querySelector(".state>div").textContent = "X";
      player2turn.removeAttribute("hidden", "");
      player1turn.setAttribute("hidden", "hidden");
      winnerCheck();
      currentPlayer = player2;

      return;
    }
    if (
      currentPlayer === player2 &&
      item.querySelector(".state>div").textContent.includes("X") === false &&
      item.querySelector(".state>div").textContent.includes("O") === false &&
      !win
    ) {
      item.querySelector(".state>div").textContent = "O";
      player1turn.removeAttribute("hidden", "");
      player2turn.setAttribute("hidden", "hidden");
      winnerCheck();
      currentPlayer = player1;

      return;
    }
  });
});

resetButton.addEventListener("click", () => {
  griditems.forEach((element) => {
    element.querySelector(".state>div").textContent = "";
  });
  player1turn.removeAttribute("hidden", "");
  player2turn.setAttribute("hidden", "hidden");
  currentPlayer = player1;
  win = false;
  draw = false;
  player1turn.textContent = text1;
  player2turn.textContent = text2;
});

const winningCombinations = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 4, 8], // left diagonal
  [2, 4, 6], // right diagonal
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
];

function winnerCheck() {
  for (let i = 0; i < winningCombinations.length; i++) {
    combiniation = winningCombinations[i];
    let a = griditems[combiniation[0]].querySelector(".state>div").textContent;
    let b = griditems[combiniation[1]].querySelector(".state>div").textContent;
    let c = griditems[combiniation[2]].querySelector(".state>div").textContent;

    if (a == b && b == c && c == a && a != "" && c != "" && !win) {
      console.log(a);
      console.log(b);
      console.log(c);
      console.log("winning comb");
      console.log(currentPlayer + " Wins");
      win = true;
      console.log(win);
    }

    // check for draw
  }
  if (win && currentPlayer == player1) {
    document.querySelector(".turn1").textContent = "X's Wins";
    player1turn.removeAttribute("hidden", "");
    player2turn.setAttribute("hidden", "hidden");
  }
  if (win && currentPlayer == player2) {
    document.querySelector(".turn2").textContent = "O's Wins";
    player2turn.removeAttribute("hidden", "");
    player1turn.setAttribute("hidden", "hidden");
  }
  if (
    griditems[0].querySelector(".state>div").textContent != "" &&
    griditems[1].querySelector(".state>div").textContent != "" &&
    griditems[2].querySelector(".state>div").textContent != "" &&
    griditems[3].querySelector(".state>div").textContent != "" &&
    griditems[4].querySelector(".state>div").textContent != "" &&
    griditems[5].querySelector(".state>div").textContent != "" &&
    griditems[6].querySelector(".state>div").textContent != "" &&
    griditems[7].querySelector(".state>div").textContent != "" &&
    griditems[8].querySelector(".state>div").textContent != "" &&
    !win
  ) {
    console.log("draw");
    draw = true;
    document.querySelector(".turn1").textContent = "Draw";
    document.querySelector(".turn2").textContent = "Draw";
    player1turn.removeAttribute("hidden", "");
    player2turn.removeAttribute("hidden", "");
  }
}
