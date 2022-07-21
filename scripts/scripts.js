const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound)
})

function computerPlay(){
    const objectInPlay = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomObject = Math.floor(Math.random() * 3);
    return objectInPlay[randomObject];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    playerSelection = playerPlay.toUpperCase();
    computerSelection = computerPlay();

}



