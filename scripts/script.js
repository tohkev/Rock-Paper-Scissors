// has computer randomly select rock, paper, or scissors
function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

// creates a function which plays a round (choices being case insensitive, add logic to compare choices and choose winner)
function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase();
  let computerChoice = computerSelection.toLowerCase();
  if (playerChoice === computerChoice) {
    return `It's a draw! You both chose ${playerChoice}!`;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return `You lose! You chose: ${playerChoice}, computer chose: ${computerChoice}.`;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return `You win! You chose: ${playerChoice}, computer chose: ${computerChoice}.`;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return `You win! You chose: ${playerChoice}, computer chose: ${computerChoice}.`;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    return `You lose! You chose: ${playerChoice}, computer chose: ${computerChoice}.`;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return `You lose! You chose: ${playerChoice}, computer chose: ${computerChoice}.`;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return `You win! You chose: ${playerChoice}, computer chose: ${computerChoice}.`;
  } else {
    return "An error has occurred.";
  }
}

// creates a function that verifies a choice is rock, paper, or scissors
function verifyChoice(choice) {
  choice = choice.toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return true;
  } else {
    return false;
  }
}

// creates a function that asks get a player's choice
function playerPlay() {
  let playerSelection = prompt("Enter rock, paper, or scissors");
  if (!verifyChoice(playerSelection)) {
    while (!verifyChoice(playerSelection)) {
      playerSelection = prompt("Error: Enter rock, paper, or scissors");
    }
  }
  return playerSelection;
}

// creates a function which plays 5 games, and logs the games to the console
function game() {
  let numGames = 5;

  for (let i = 1; i <= numGames; i++) {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
