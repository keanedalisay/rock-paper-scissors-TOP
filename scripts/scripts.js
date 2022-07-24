function computerPlay(){
    const objectInPlay = ['rock', 'paper', 'scissors'];
    const randomObject = Math.floor(Math.random() * 3);
    return objectInPlay[randomObject];
}

const hostDisplay = document.querySelector('div.hostCard > .hostText');
hostDisplay.textContent = 'Welcome to Rock Paper Scissors!';
setTimeout(function() {hostDisplay.textContent = 'Whoever wins 5 points wins the game!'}, 4000);
setTimeout(function() {hostDisplay.textContent = 'Are you ready?'}, 8000);
setTimeout(function() {hostDisplay.textContent = 'Let the game begin!'}, 11000);

const playerDisplay = document.querySelector('div.playerChoice');
const playerChoice = document.querySelector('div.playerChoice > object');

const aiDisplay = document.querySelector('div.aiChoice');
const aiChoice = document.querySelector('div.aiChoice > object');

const buttons = document.querySelectorAll('div.buttonBoard > button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
})

function playRound (e){
    const playerPlay = this.getAttribute('class');
    if (playerPlay === 'rock'){
        playerDisplay.classList.add('rockBlue');
        playerDisplay.classList.remove('paperRed');
        playerDisplay.classList.remove('scissorsYellow');
        playerChoice.setAttribute('data', 'img/rock.svg');
        playerChoice.setAttribute('aria-label', 'rock');
        playerChoice.textContent = 'Rock';
    } else if (playerPlay === 'paper'){
        playerDisplay.classList.add('paperRed');
        playerDisplay.classList.remove('rockBlue');
        playerDisplay.classList.remove('scissorsYellow');
        playerChoice.setAttribute('data', 'img/paper.svg');
        playerChoice.setAttribute('aria-label', 'paper');
        playerChoice.textContent = 'Paper';
    } else if (playerPlay === 'scissors'){
        playerDisplay.classList.add('scissorsYellow');
        playerDisplay.classList.remove('rockBlue');
        playerDisplay.classList.remove('paperRed');
        playerChoice.setAttribute('data', 'img/scissor.svg');
        playerChoice.setAttribute('aria-label', 'scissors');
        playerChoice.textContent = 'Scissors';
    } return
}