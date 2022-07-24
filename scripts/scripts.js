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

setTimeout(function() {playerBoard.classList.remove('playerSide')}, 5000)
setTimeout(function() {playerDisplay.classList.remove('playerSide')}, 5000)

setTimeout(function() {aiBoard.classList.add('aiSide')}, 5000);
setTimeout(function() {aiDisplay.classList.add('aiSide')}, 5000);
setTimeout(function() {aiBoard.classList.remove('aiSide')}, 11000);
setTimeout(function() {aiDisplay.classList.remove('aiSide')}, 11000);

const rockButton = document.querySelector('div.buttonBoard > button.rock');
const paperButton = document.querySelector('div.buttonBoard > button.paper');
const scissorsButton = document.querySelector('div.buttonBoard > button.scissors');

setTimeout(function() {rockButton.addEventListener('click', playRound)}, 11000);
setTimeout(function() {paperButton.addEventListener('click', playRound)}, 11000);
setTimeout(function() {scissorsButton.addEventListener('click', playRound)}, 11000);
setTimeout(function() {playerDisplay.classList.add('selecting')}, 11000);

function ai(e){
    const aiPlay = computerPlay();
    
    if (aiPlay === 'rock'){
        aiDisplay.classList.add('rockBlue');
        aiDisplay.classList.remove('paperRed');
        aiDisplay.classList.remove('scissorsYellow');

        aiChoice.setAttribute('data', 'img/rock.svg');
        aiChoice.setAttribute('aria-label', 'rock');
        aiChoice.textContent = 'Rock';

        aiDisplay.classList.remove('selecting')
    } else if (aiPlay === 'paper'){
        aiDisplay.classList.add('paperRed');
        aiDisplay.classList.remove('rockBlue');
        aiDisplay.classList.remove('scissorsYellow');

        aiChoice.setAttribute('data', 'img/paper.svg');
        aiChoice.setAttribute('aria-label', 'paper');
        aiChoice.textContent = 'Paper';
    } else if (aiPlay === 'scissors'){
        aiDisplay.classList.add('scissorsYellow');
        aiDisplay.classList.remove('rockBlue');
        aiDisplay.classList.remove('paperRed');

        aiChoice.setAttribute('data', 'img/scissor.svg');
        aiChoice.setAttribute('aria-label', 'scissors');
        aiChoice.textContent = 'Scissors';
    } else {
        return hostDisplay.textContent = 'Skynet takeo.. o.. error!';
    }
}
