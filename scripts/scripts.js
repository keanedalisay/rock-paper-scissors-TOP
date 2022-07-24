
const hostDisplay = document.querySelector('div.hostCard > .hostText');
hostDisplay.textContent = 'Welcome to Rock Paper Scissors!';
setTimeout(function() {hostDisplay.textContent = 'Whoever has 5 points wins the game!'}, 4000);
setTimeout(function() {hostDisplay.textContent = 'Are you ready?'}, 8000);
setTimeout(function() {hostDisplay.textContent = 'Let the game begin!'}, 11000);
setTimeout(function() {hostDisplay.textContent = '...'}, 15000);

const playerBoard = document.querySelector('div.playerScore');
const aiBoard = document.querySelector('div.aiScore')

let playerScore = document.querySelector('div.playerScore > .score > span');
let aiScore = document.querySelector('div.aiScore > .score > span');

const playerDisplay = document.querySelector('div.playerChoice');
const playerChoice = document.querySelector('div.playerChoice > object');

const aiDisplay = document.querySelector('div.aiChoice');
const aiChoice = document.querySelector('div.aiChoice > object');

setTimeout(function() {
    playerBoard.classList.remove('playerSide');
    playerDisplay.classList.remove('playerSide');
    aiBoard.classList.add('aiSide');
    aiDisplay.classList.add('aiSide');
}, 5000)

const rockButton = document.querySelector('div.buttonBoard > button.rock');
const paperButton = document.querySelector('div.buttonBoard > button.paper');
const scissorsButton = document.querySelector('div.buttonBoard > button.scissors');

setTimeout(function() {
    playerDisplay.classList.add('selecting');
    aiBoard.classList.remove('aiSide');
    aiDisplay.classList.remove('aiSide');

    rockButton.addEventListener('click', playRound);
    paperButton.addEventListener('click', playRound);
    scissorsButton.addEventListener('click', playRound);
}, 11000);

function ai(e){
    
    if (aiSelection === 'rock'){
        aiDisplay.classList.add('rockBlue');
        aiDisplay.classList.remove('paperRed');
        aiDisplay.classList.remove('scissorsYellow');

        aiChoice.setAttribute('data', 'img/rock.svg');
        aiChoice.setAttribute('aria-label', 'rock');
        aiChoice.textContent = 'Rock';

        aiDisplay.classList.remove('selecting')
    } else if (aiSelection === 'paper'){
        aiDisplay.classList.add('paperRed');
        aiDisplay.classList.remove('rockBlue');
        aiDisplay.classList.remove('scissorsYellow');

        aiChoice.setAttribute('data', 'img/paper.svg');
        aiChoice.setAttribute('aria-label', 'paper');
        aiChoice.textContent = 'Paper';
    } else if (aiSelection === 'scissors'){
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

let aiSelection;

function playRound(e){
    function aiPlay(){
        const objectInPlay = ['rock', 'paper', 'scissors'];
        const randomObject = Math.floor(Math.random() * 3);
        return objectInPlay[randomObject];
    }
    aiSelection = aiPlay();

    const playerSelection = this.getAttribute('class');

    if (playerSelection === 'rock'){
        playerDisplay.classList.add('rockBlue');
        playerDisplay.classList.remove('paperRed');
        playerDisplay.classList.remove('scissorsYellow');

        playerChoice.setAttribute('data', 'img/rock.svg');
        playerChoice.setAttribute('aria-label', 'rock');
        playerChoice.textContent = 'Rock';

        playerDisplay.classList.remove('selecting');
        aiDisplay.classList.add('selecting');

        rockButton.removeEventListener('click', playRound);
        paperButton.removeEventListener('click', playRound);
        scissorsButton.removeEventListener('click', playRound);
        setTimeout(function() {ai()}, 3000);

        if (playerSelection === aiSelection){
            setTimeout(function() {
                hostDisplay.textContent = 'Rock against rock, its a tie!';
            }, 3000);
            setTimeout(function (){
                playerDisplay.classList.remove('rockBlue');
                aiDisplay.classList.remove('rockBlue');
                playerDisplay.classList.add('selecting');
                aiDisplay.classList.remove('selecting');
                hostDisplay.textContent = '...'
                rockButton.addEventListener('click', playRound);
                paperButton.addEventListener('click', playRound);
                scissorsButton.addEventListener('click', playRound);
            }, 8000)

        } else if (playerSelection && aiSelection === 'paper'){
            setTimeout(function() {
                hostDisplay.textContent = 'AI takes the lead! Rock is consumed by paper.';
                ++aiScore.textContent;
                aiBoard.classList.add('aiSide');
                setTimeout(() => aiBoard.classList.remove('aiSide'), 1000);
            }, 3000);
            setTimeout(function (){
                playerDisplay.classList.remove('rockBlue');
                aiDisplay.classList.remove('paperRed');
                playerDisplay.classList.add('selecting');
                aiDisplay.classList.remove('selecting');
                hostDisplay.textContent = '...'
                rockButton.addEventListener('click', playRound);
                paperButton.addEventListener('click', playRound);
                scissorsButton.addEventListener('click', playRound);
            }, 8000)

        } else if (playerSelection && aiSelection === 'scissors'){
            setTimeout(function() {
                hostDisplay.textContent = 'You won a point! Rock snaps scissors!';
                ++playerScore.textContent;
                playerBoard.classList.add('playerSide');
                setTimeout(() => playerBoard.classList.remove('playerSide'), 1000);
            }, 3000)
            setTimeout(function (){
                playerDisplay.classList.remove('rockBlue');
                aiDisplay.classList.remove('scissorsYellow');
                playerDisplay.classList.add('selecting');
                aiDisplay.classList.remove('selecting');
                hostDisplay.textContent = '...'
                rockButton.addEventListener('click', playRound);
                paperButton.addEventListener('click', playRound);
                scissorsButton.addEventListener('click', playRound);
            }, 8000)

        } else {
            return hostDisplay.textContent = 'Initiating nuclear la... a.. u.. error!';
        }
    } else if (playerSelection === 'paper'){
        playerDisplay.classList.add('paperRed');
        playerDisplay.classList.remove('rockBlue');
        playerDisplay.classList.remove('scissorsYellow');

        playerChoice.setAttribute('data', 'img/paper.svg');
        playerChoice.setAttribute('aria-label', 'paper');
        playerChoice.textContent = 'Paper';

        playerDisplay.classList.remove('selecting')
        aiDisplay.classList.add('selecting')

        rockButton.removeEventListener('click', playRound);
        paperButton.removeEventListener('click', playRound);
        scissorsButton.removeEventListener('click', playRound);
        setTimeout(function() {ai()}, 3000)

        if (playerSelection === aiSelection){
            setTimeout(function() {
                hostDisplay.textContent = 'Its a tie! Tied together I mean...';
            }, 3000);
            setTimeout(function (){
                playerDisplay.classList.remove('paperRed');
                aiDisplay.classList.remove('paperRed');
                playerDisplay.classList.add('selecting');
                aiDisplay.classList.remove('selecting');
                hostDisplay.textContent = '...'
                rockButton.addEventListener('click', playRound);
                paperButton.addEventListener('click', playRound);
                scissorsButton.addEventListener('click', playRound);
            }, 8000)

        } else if (playerSelection && aiSelection === 'scissors'){
            setTimeout(function() {
                hostDisplay.textContent = 'AI cuts through paper, point for it!';
                ++aiScore.textContent;
                aiBoard.classList.add('aiSide');
                setTimeout(() => aiBoard.classList.remove('aiSide'), 1000);
            }, 3000);
            setTimeout(function (){
                playerDisplay.classList.remove('paperRed');
                aiDisplay.classList.remove('scissorsYellow');
                playerDisplay.classList.add('selecting');
                aiDisplay.classList.remove('selecting');
                hostDisplay.textContent = '...'
                rockButton.addEventListener('click', playRound);
                paperButton.addEventListener('click', playRound);
                scissorsButton.addEventListener('click', playRound);
            }, 8000)

        } else if (playerSelection && aiSelection === 'rock'){
            setTimeout(function() {
                hostDisplay.textContent = 'A point for you catching that rock!';
                ++playerScore.textContent;
                playerBoard.classList.add('playerSide');
                setTimeout(() => playerBoard.classList.remove('playerSide'), 1000);
            }, 3000)
            setTimeout(function (){
                playerDisplay.classList.remove('paperRed');
                aiDisplay.classList.remove('rockBlue');
                playerDisplay.classList.add('selecting');
                aiDisplay.classList.remove('selecting');
                hostDisplay.textContent = '...'
                rockButton.addEventListener('click', playRound);
                paperButton.addEventListener('click', playRound);
                scissorsButton.addEventListener('click', playRound);
            }, 8000)

        } else {
            return hostDisplay.textContent = 'Initiating nuclear la... a.. u.. error!';
        }

    } else if (playerSelection === 'scissors'){
        playerDisplay.classList.add('scissorsYellow');
        playerDisplay.classList.remove('rockBlue');
        playerDisplay.classList.remove('paperRed');
        
        playerChoice.setAttribute('data', 'img/scissor.svg');
        playerChoice.setAttribute('aria-label', 'scissors');
        playerChoice.textContent = 'Scissors';

        playerDisplay.classList.remove('selecting')
        aiDisplay.classList.add('selecting')

        rockButton.removeEventListener('click', playRound);
        paperButton.removeEventListener('click', playRound);
        scissorsButton.removeEventListener('click', playRound);
        setTimeout(function() {ai()}, 3000)

        if (playerSelection === aiSelection){
            setTimeout(function() {
                hostDisplay.textContent = 'Scissors can\'t cut each other... a tie!';
            }, 3000);
            setTimeout(function (){
                playerDisplay.classList.remove('scissorsYellow');
                aiDisplay.classList.remove('scissorsYellow');
                playerDisplay.classList.add('selecting');
                aiDisplay.classList.remove('selecting');
                hostDisplay.textContent = '...'
                rockButton.addEventListener('click', playRound);
                paperButton.addEventListener('click', playRound);
                scissorsButton.addEventListener('click', playRound);
            }, 8000)

        } else if (playerSelection && aiSelection === 'rock'){
            setTimeout(function() {
                hostDisplay.textContent = 'Scissors has no effect on rock... AI leads!';
                ++aiScore.textContent;
                aiBoard.classList.add('aiSide');
                setTimeout(() => aiBoard.classList.remove('aiSide'), 1000);
            }, 3000);
            setTimeout(function (){
                playerDisplay.classList.remove('scissorsYellow');
                aiDisplay.classList.remove('rockBlue');
                playerDisplay.classList.add('selecting');
                aiDisplay.classList.remove('selecting');
                hostDisplay.textContent = '...'
                rockButton.addEventListener('click', playRound);
                paperButton.addEventListener('click', playRound);
                scissorsButton.addEventListener('click', playRound);
            }, 8000)

        } else if (playerSelection && aiSelection === 'paper'){
            setTimeout(function() {
                hostDisplay.textContent = 'Your scissors slices through! A point!';
                ++playerScore.textContent;
                playerBoard.classList.add('playerSide');
                setTimeout(() => playerBoard.classList.remove('playerSide'), 1000);
            }, 3000)
            setTimeout(function (){
                playerDisplay.classList.remove('scissorsYellow');
                aiDisplay.classList.remove('paperRed');
                playerDisplay.classList.add('selecting');
                aiDisplay.classList.remove('selecting');
                hostDisplay.textContent = '...'
                rockButton.addEventListener('click', playRound);
                paperButton.addEventListener('click', playRound);
                scissorsButton.addEventListener('click', playRound);
            }, 8000)

        } else {
            return hostDisplay.textContent = 'Initiating nuclear la... a.. u.. error!';
        }
    } else {
        return hostDisplay.textContent = 'Whoops, looks like you can\'t display your choice...';
    }

}