function getComputerChoice() {
  let choices = ["ASSASSIN", "WARRIOR", "MAGE"];
  
  let choice = choices[Math.floor(Math.random()*choices.length)];
  return choice;
}

function one_round(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        updateMessage('Ours and the enemy\'s belligerents were equally matched, Your Highness!');
        endRound();
        return;
    }

    if (playerSelection === "ASSASSIN" && computerSelection === "MAGE") {
        updateMessage(`Splendid! Our assassin sneaked up on the enemy's unsuspecting mage and put him to rest.`);
        player++;
    }

    if (playerSelection === "WARRIOR" && computerSelection === "ASSASSIN") {
        updateMessage(`Ha! The enemy\'s lithe assassin was no match for our brute warrior.`);
        player++;
    }

    if (playerSelection === "MAGE" && computerSelection === "WARRIOR") {
        updateMessage(`Glad tidings, Your Highness! The enemy's untested warrior was light work for our experienced Mage.`);
        player++;
    }

    if (computerSelection === "ASSASSIN" && playerSelection === "MAGE") {
        updateMessage(`We inch closer to defeat! Our mage was cut down by the enemy's skilled assassin.`);
        computer++;
    }

    if (computerSelection == "WARRIOR" && playerSelection === "ASSASSIN") {
        updateMessage(`I bear ill news. Our assassin's family grieves while the enemy's warrior continues to give us trouble.`);
        computer++;
    }

    if (computerSelection === "MAGE" && playerSelection === "WARRIOR") {
        updateMessage(`Grave tidings, Your Highness! The enemy\'s mage used a powerful spell to eliminate our warrior.`);
        computer++;
    }

    round++;
    endRound();
    return;
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
    playerScoreboard.textContent = `Our kingdom\'s victories: ` + player;
}

function updateComputerScoreboard() {
    let computerScoreboard = document.querySelector('#computerScoreboard');
    computerScoreboard.textContent = `The invaders\' victories: ` + computer;
}

function reset() {
    round = 0;
    player = 0;
    computer = 0;
}

function game() {
    updateMessage('Starting day ' + (round+1) + '. Who will you be choosing? ');
    toggleHidden();
    updatePlayerScoreboard(`Our kingdom\'s victories: ` + player);
    updateComputerScoreboard(`Our kingdom\'s victories: ` + computer);

    if (player===5) {
        updateMessage('Their elite squad is no more, Your Highness! Rejoice, we have successfully defended our kingdom!');
        reset();
    }
    else if(computer===5) {
        updateMessage('We have fallen, Your Highness! The enemy are at the gates. Our kingdom is no more!');         
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
