const resetButton = document.querySelector(".reset>button");
const griditems = document.querySelectorAll(".griditem");
const player1turn = document.querySelector(".turn1");
const player2turn = document.querySelector(".turn2");
const player1 = "X";
const player2 = "O";

let currentPlayer = player1;

griditems.forEach((item) => {
  console.log(item);
  item.addEventListener("click", (e) => {
    if (
      currentPlayer === player1 &&
      item.querySelector(".o").hasAttribute("hidden") &&
      item.querySelector(".x").hasAttribute("hidden")
    ) {
      console.log(item.querySelector(".o").attributes.hidden);
      item.querySelector(".x").removeAttribute("hidden");
      player2turn.removeAttribute("hidden", "");
      player1turn.setAttribute("hidden", "hidden");
      currentPlayer = player2;
      console.log(currentPlayer);
      return;
    }
    if (
      currentPlayer === player2 &&
      item.querySelector(".x").hasAttribute("hidden")
    ) {
      item.querySelector(".o").removeAttribute("hidden");
      player1turn.removeAttribute("hidden", "");
      player2turn.setAttribute("hidden", "hidden");
      currentPlayer = player1;
      console.log(item.querySelector(".x").attributes.hidden != undefined);
      return;
    } else {
      return;
    }
  });
});

resetButton.addEventListener("click", () => {
  griditems.forEach((element) => {
    element.querySelector(".x").setAttribute("hidden", "");
    element.querySelector(".o").setAttribute("hidden", "");
  });
  player1turn.removeAttribute("hidden", "");
  player2turn.setAttribute("hidden", "hidden");
  currentPlayer = player1;
});
