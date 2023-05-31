function getComputerChoice() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  
  let choice = choices[Math.floor(Math.random()*choices.length)];
  return choice;
}

function one_round(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return ["This round is a draw. Play again", 'draw'];
    }

    let a = 0

    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        a++;
    }

    if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        a++;
    }

    if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        a++;
    }

    if (a === 1) {
        return [`You win. ${playerSelection} beats ${computerSelection}`, 'win']
    }
    else if (a === 0) {
        return [`You lose. ${computerSelection} beats ${playerSelection}`, 'lose']
    }
}

function game() {
    let player = 0;
    let computer = 0;

    while (player<5 && computer<5) {
        let playerSelection = prompt("Type your choice: Rock, Paper, or Scissors: ");
        playerSelection = playerSelection.toUpperCase();
        let computerSelection = getComputerChoice();

        alert(`You chose ${playerSelection}. The computer chose ${computerSelection}`)
        let [result_string, result_word] = one_round(playerSelection, computerSelection);
        alert(result_string);
        if (result_word==='win') {
            player++;
        }  
        else if (result_word==='lose') {
            computer++;
        }
        alert(`Score: Player = ${player}; Computer = ${computer}`)
    }

    if (player===5) {
        alert('You have won the game')
    }
    else if(computer===5) {
        alert('You have lost the game')
    }
}

game();
