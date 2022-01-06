document.addEventListener('DOMContentLoaded', ()=> {
    
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handClick)
    })
})

function handClick(element){
    let square = element.target;
    let position = square.id;

    if(handleMove(position)){
        setTimeout(()=>{
            alert("Game Over - Jogador " + playerTime + " venceu")},10)       
    }
    updateSquares()
    console.log(element.target)
}

function updateSquares(){
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if(symbols != ''){
            square.innerHTML = `<div class ='${symbol}'</div>`
        }
    })
}