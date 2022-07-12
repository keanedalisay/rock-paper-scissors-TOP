// Create a function to act as the Computer/AI Player
function computerPlay(){
    /* It should return || select

        Rock
        Paper
        Scissors

    randomly */
    const objectInPlay = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomObject = Math.floor(Math.random() * 3);
    return objectInPlay[randomObject];
}
// Create a function to simulate a round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){
/* It should take in two parameters

    The players selection
    The computers selection (which is the first function above)

*/
    const playerPlay = prompt('Welcome to Rock Paper Scissors! Which object would you like to start the round with?');
    playerSelection = playerPlay.toUpperCase();
    computerSelection = computerPlay();

    if (playerSelection === computerSelection){
        console.log(`${playerSelection} = ${computerSelection}`);
        return console.log('What a tie! Fantastic!');
    } 
    else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        console.log(`${playerSelection} > ${computerSelection}`);
        return console.log('Player takes this round! Rock beats Scissors!');
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        console.log(`${playerSelection} < ${computerSelection}`);
        return console.log('Player is caught! Rock was catched by Paper!');
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        console.log(`${playerSelection} > ${computerSelection}`);
        return console.log('Player wins! Paper catches Rock!');
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
        console.log(`${playerSelection} < ${computerSelection}`);
        return console.log('Player takes a beating! Paper split in half by Scissors!');
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        console.log(`${playerSelection} < ${computerSelection}`);
        return console.log('Player loses! Scissors has no effect on Rock!');
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
        console.log(`${playerSelection} > ${computerSelection}`);
        return console.log('Player cuts through! Scissors split Paper into two!');
    }
    return console.log('Whoops, looks like we got an interuption... hang in there for a sec.');
    /* It should return a string that

        says either You Win
        or You Lose

    */
}

playRound();
// Create a function to start the game

    // Create a loop to count the number of rounds
    // It should return the round function above


