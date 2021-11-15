let playerLives = 5;
let cpuLives = 5;
let playerChoice;
let round = 1;
let monsters = document.querySelectorAll(".choice");
let playAgain = document.querySelector(".redo");
let playAgainBtn = document.querySelector(".playAgain");
let roundDisplay = document.querySelector("#round");
let yourHealthDisplay = document.querySelector(".your-health");
let cpuHealthDisplay = document.querySelector(".cpu-health");
let logDisplay = document.querySelector(".log");

// has the computer randomly select rock, paper, or scissors
function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

// this compares two choices and returns the results of 1 game [result, summary]
function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection;
  let computerChoice = computerSelection;
  if (playerChoice === computerChoice) {
    return ["tie", `It's a draw! You both chose ${playerChoice}!`];
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return [
      false,
      `You lose! You chose: ${playerChoice}, computer chose: ${computerChoice}.`,
    ];
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return [
      true,
      `You win! You chose: ${playerChoice}, computer chose: ${computerChoice}.`,
    ];
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return [
      true,
      `You win! You chose: ${playerChoice}, computer chose: ${computerChoice}.`,
    ];
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    return [
      false,
      `You lose! You chose: ${playerChoice}, computer chose: ${computerChoice}.`,
    ];
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return [
      false,
      `You lose! You chose: ${playerChoice}, computer chose: ${computerChoice}.`,
    ];
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return [
      true,
      `You win! You chose: ${playerChoice}, computer chose: ${computerChoice}.`,
    ];
  } else {
    return "An error has occurred.";
  }
}

//  this plays the game, keeps track of the internal score/log keeping and processes the results of the game
function game() {
  let playerSelection = playerChoice;
  let computerSelection = computerPlay();
  let round = playRound(playerSelection, computerSelection);
  if (round[0] === "tie") {
  } else if (round[0]) {
    cpuLives--;
  } else if (!round[0]) {
    playerLives--;
  }
  logDisplay.textContent = round[1];
}

//this keeps track of the current round and displays it under the round section
function nextRound() {
  round++;
  roundDisplay.textContent = round;
}

// this updates the heart count to match the score count
function updateHeart() {
  yourHealthDisplay.textContent = "";
  cpuHealthDisplay.textContent = "";
  for (let i = 0; i < playerLives; i++) {
    let fullHeart = document.createElement("img");
    fullHeart.setAttribute("src", "/images/full-heart.png");
    yourHealthDisplay.appendChild(fullHeart);
  }
  for (let j = 0; j < 5 - playerLives; j++) {
    let emptyHeart = document.createElement("img");
    emptyHeart.setAttribute("src", "/images/empty-heart.png");
    yourHealthDisplay.appendChild(emptyHeart);
  }
  for (let k = 0; k < cpuLives; k++) {
    let fullHeart = document.createElement("img");
    fullHeart.setAttribute("src", "/images/full-heart.png");
    cpuHealthDisplay.appendChild(fullHeart);
  }
  for (let l = 0; l < 5 - cpuLives; l++) {
    let emptyHeart = document.createElement("img");
    emptyHeart.setAttribute("src", "/images/empty-heart.png");
    cpuHealthDisplay.appendChild(emptyHeart);
  }
}

// if either score hits 0, the game will end
function endGame() {
  if (playerLives === 0 || cpuLives === 0) {
    if (playerLives > cpuLives) {
      alert("You have won!");
    } else {
      alert("You have lost.");
    }
    monsters.forEach((monster) => {
      monster.classList.add("disabled");
    });
    playAgain.classList.remove("hide");
    playAgainBtn.addEventListener("click", () => {
      window.location.reload();
    });
  } else {
    nextRound();
  }
}

//starts the game when the user clicks on a monster choice
function playGame() {
  monsters.forEach((monster) => {
    monster.addEventListener("click", (e) => {
      playerChoice = e.target.getAttribute("id");
      game();
      updateHeart();
      endGame();
      e.stopPropagation();
    });
  });
}

playGame();
