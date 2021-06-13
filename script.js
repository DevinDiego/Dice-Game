const btnDirections = document.querySelector(".directions");
const playAgain = document.querySelector(".play-again");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");
const randDice = document.querySelector(".dice-img");
const player1Active = document.querySelector(".player-0");
const player2Active = document.querySelector(".player-1");
const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let isPlaying = true;

btnDirections.addEventListener("click", function () {
  alert(
    "Player 1 starts. Roll the dice until you reach 30 points. Players can hold their current value and let the next player roll. Players turn ends if a 1 is rolled or a player reaches 30 points."
  );
});

const switchPlayer = function () {
  document.querySelector(
    `.current-score-player${activePlayer}`
  ).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1Active.classList.toggle("player-active");
  player2Active.classList.toggle("player-active");
};

btnRoll.addEventListener("click", function () {
  if (isPlaying) {
    const randNum = Math.trunc(Math.random() * 6) + 1;
    randDice.src = `Images/dice${randNum}.png`;
    currentScore += randNum;
    if (randNum != 1) {
      document.querySelector(
        `.current-score-player${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (isPlaying) {
    scores[activePlayer] += currentScore;
    document.querySelector(`.total-score-player${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 30) {
      isPlaying = false;
      document.querySelector("section").style.backgroundColor = "#00ff0080";
      document.querySelector(`.player-${activePlayer}`).textContent = `Player ${
        activePlayer + 1
      } wins 👍`;
    } else {
      switchPlayer();
    }
  }
});

playAgain.addEventListener("click", function () {
  location.reload();
});
