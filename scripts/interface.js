

document.addEventListener("DOMContentLoaded", () => {
  // let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handClick);
  });
});

function handClick(element) {
  let square = element.target;
  let position = square.id;

  if (handleMove(position)) {
    // setTimeout(() => {
    //      alert("Game Over - Jogador " + playerTime + " venceu")},10)
    //   alert(vencedor());
    // }, 10);
    vencedor();
    restart();
  }
  updateSquares();
  console.log(element.target);
}

function updateSquares() {
  
  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbols != "") {
      square.innerHTML = `<div class ='${symbol}'</div>`;
    }
  });
}

function vencedor() {
  if (playerTime == 0) {
    setTimeout(() => {
      alert("Jogador 1 venceu");
      console.log("vencedor é o jogador 1");
    }, 10);
  } else {
    setTimeout(() => {
      alert("Jogador 2 venceu");
      console.log("vencedor é o jogador 2");
    }, 10);
  }
}
function restart() {
  let gameBoard = document.getElementById("gameOver");
  gameBoard.style.display = "flex";
  gameBoard.addEventListener("click", clearCards);
}

function clearCards() {
  reset1()
  squares.forEach((square)=>{
    square.innerHTML = ''
  })
  updateSquares();
 
}


