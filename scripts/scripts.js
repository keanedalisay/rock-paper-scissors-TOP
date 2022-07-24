const buttons = document.querySelectorAll('div.buttonBoard > button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
})



function computerPlay(){
    const objectInPlay = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomObject = Math.floor(Math.random() * 3);
    return objectInPlay[randomObject];
}




