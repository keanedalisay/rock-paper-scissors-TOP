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

const playerBoard = document.querySelector('div.playerScore');
const aiBoard = document.querySelector('div.aiScore')
let playerScore = document.querySelector('div.playerScore > .score > span');
let aiScore = document.querySelector('div.aiScore > .score > span');

const playerDisplay = document.querySelector('div.playerChoice');
const playerChoice = document.querySelector('div.playerChoice > object');

const aiDisplay = document.querySelector('div.aiChoice');
const aiChoice = document.querySelector('div.aiChoice > object');

const buttons = document.querySelectorAll('div.buttonBoard > button');
buttons.forEach((button) => {
    setTimeout(function() {button.addEventListener('click', playRound)}, 000);
}) 