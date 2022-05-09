"use strict";

// setting up Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// setting up initial player's current game score and high score
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

// setting up "Check!" button action when clicking
document.querySelector(".check").addEventListener("click", () => {
  // capture guess input
  const guess = Number(document.querySelector(".guess").value);

  // if there is no number in input
  if (!guess) {
    displayMessage("⛔️ No number!");

    // if player wins - display win message, change styles and display correct secret number
  } else if (guess === secretNumber) {
    displayMessage("🥳 Hurra! Correct number!");
    document.querySelector("body").style.backgroundColor = "#0DB55E";
    document.querySelector(".number").style.width = "100%";
    document.querySelector(".number").textContent = secretNumber;

    // if score points of current winner game are higher than highScore of previous winner game - update highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // if input number is wrong (different than secretNumber) and player's score points are above 0 - display tip message, decrease and display current score points
  } else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector(".number").textContent = "?";
      displayMessage(
        guess > secretNumber
          ? "📈 Too high!"
          : guess < secretNumber
          ? "📉 Too low!"
          : ""
      );
      score--;
      document.querySelector(".score").textContent = score;
    }
  }

  // if score points reach 0 - display loose game message
  if (score === 0) {
    displayMessage("💥 You lose the game!");
  }
});

// setting again (reset) button action when clicking
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  document.querySelector(".score").textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
