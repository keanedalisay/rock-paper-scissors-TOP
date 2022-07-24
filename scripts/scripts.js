const buttons = document.querySelectorAll('div.buttonBoard > button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
})

function computerPlay(){
    const objectInPlay = ['rock', 'paper', 'scissors'];
    const randomObject = Math.floor(Math.random() * 3);
    return objectInPlay[randomObject];
}


