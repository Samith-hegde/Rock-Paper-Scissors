function getComputerChoice() {
  let choices = ["ASSASSIN", "WARRIOR", "MAGE"];
  
  let choice = choices[Math.floor(Math.random()*choices.length)];
  return choice;
}

function one_round(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        updateMessage('This round is a draw. Push button above to continue.');
        endRound();
        return;
    }

    let a = 0

    if (playerSelection === "ASSASSIN" && computerSelection === "MAGE") {
        a++;
    }

    if (playerSelection === "WARRIOR" && computerSelection === "ASSASSIN") {
        a++;
    }

    if (playerSelection === "MAGE" && computerSelection === "WARRIOR") {
        a++;
    }

    if (a === 1) {
        updateMessage(`You win. ${playerSelection} beats ${computerSelection}`);
        player++;
        round++;
        endRound();
        return;
    }
    else if (a === 0) {
        updateMessage(`You lose. ${computerSelection} beats ${playerSelection}`);
        computer++;
        round++;
        endRound();
        return;
    }
}

function updateMessage(message) {
    let gameMessage = document.querySelector('#gameMessages');
    gameMessage.textContent = message;
}

function endRound() {
    updatePlayerScoreboard();
    updateComputerScoreboard();
    toggleHidden();
}

function updatePlayerScoreboard() {
    let playerScoreboard = document.querySelector('#playerScoreboard');
    playerScoreboard.textContent = 'Player: ' + player;
}

function updateComputerScoreboard() {
    let computerScoreboard = document.querySelector('#computerScoreboard');
    computerScoreboard.textContent = 'Computer: ' + computer;
}

function reset() {
    round = 0;
    player = 0;
    computer = 0;
}

function game() {
    updateMessage('Starting round' + (round+1) + '. Make your selection');
    toggleHidden();
    updatePlayerScoreboard('Player: ' + player);
    updateComputerScoreboard('Computer: ' + computer);

    if (player===5) {
        updateMessage('You have won the game');
        reset();
    }
    else if(computer===5) {
        updateMessage('You have lost the game');         
        reset();
    }
}

function toggleHidden() {
    var selectionButtonContainer = document.querySelector('#selectionButtonContainer');
    if (selectionButtonContainer.style.display === "none") {
        selectionButtonContainer.style.display = "flex";
    } else {
        selectionButtonContainer.style.display = "none";
    }
}

let player = 0;
let computer = 0;
let round = 0;
toggleHidden();

document.addEventListener("DOMContentLoaded", function(event) {
    let startButton = document.querySelector('#startButton');
    startButton.addEventListener('click', function () {game()});

    let assassinButton = document.querySelector('#assassinButton');
    assassinButton.addEventListener('click', function() {one_round('ASSASSIN')});

    let mageButton = document.querySelector('#mageButton');
    mageButton.addEventListener('click', function() {one_round('MAGE')});

    let warriorButton = document.querySelector('#warriorButton');
    warriorButton.addEventListener('click', function() {one_round('WARRIOR')});
});
