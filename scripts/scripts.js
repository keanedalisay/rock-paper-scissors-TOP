function computerPlay(){
    const objectInPlay = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomObject = Math.floor(Math.random() * 3);
    return objectInPlay[randomObject];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    const playerPlay = prompt('Welcome to Rock Paper Scissors! Which object would you like to start the round with?');
    playerSelection = playerPlay.toUpperCase();
    computerSelection = computerPlay();

    if (playerSelection === computerSelection){
        console.log(`${playerSelection} = ${computerSelection}`);
        console.log(`${playerScore} | ${computerScore}`);
        return console.log('What a tie! Fantastic!');
    } 
    else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        console.log(`${playerSelection} > ${computerSelection}`);
        playerScore++
        console.log(`${playerScore} | ${computerScore}`);
        return console.log('Player takes this round! Rock beats Scissors!');
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        console.log(`${playerSelection} < ${computerSelection}`);
        computerScore++
        console.log(`${playerScore} | ${computerScore}`);
        return console.log('Player is caught! Rock was catched by Paper!');
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        console.log(`${playerSelection} > ${computerSelection}`);
        playerScore++
        console.log(`${playerScore} | ${computerScore}`);
        return console.log('Player wins! Paper catches Rock!');
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
        console.log(`${playerSelection} < ${computerSelection}`);
        computerScore++
        console.log(`${playerScore} | ${computerScore}`);
        return console.log('Player takes a beating! Paper split in half by Scissors!');
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        console.log(`${playerSelection} < ${computerSelection}`);
        computerScore++
        console.log(`${playerScore} | ${computerScore}`);
        return console.log('Player loses! Scissors has no effect on Rock!');
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
        console.log(`${playerSelection} > ${computerSelection}`);
        playerScore++
        console.log(`${playerScore} | ${computerScore}`);
        return console.log('Player cuts through! Scissors split Paper into two!');
    }
    return console.log('Whoops, looks like we got an interuption... hang in there for a sec.');
}



