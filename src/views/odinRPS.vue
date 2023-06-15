<template>
  <div class="body">
    <!-- introPopup -->
    <div class="introPopup">

    </div>
    <!-- gameEndPopup -->
    <div id="gameOver" class="gameEndPopup">
      <h1 id="gameOverH-el">Game Over!</h1>
      <p id="lastGame-el">Game history: No history yet</p>
      <button id="restart-btn">restart game</button>
    </div>

    <div class="actualBody" id="mainBodyEl">

      <!-- header -->
      <div class="header">
        <h1 class="readability">Play Rock, Paper, Scissor vs. Villains!</h1>
      </div>

      <!-- scoreBoard -->
      <div class="scoreBoard">
        <div class="userContainer">
          <h2 class="rM readability">ヒーロー</h2>
          <h2 class="readability rM">(hero)</h2>
          <h2 id="playerScore-el" class="score rM readability">Player Score 0</h2>
        </div>

        <div class="gifContainer" id="gifContainer">


        </div>

        <div class="villainContainer">
          <h2 class="rM readability">悪党</h2>
          <h2 class="readability rM">(villain)</h2>
          <h2 id="computerScore-el" class="score rM readability">Computer Score</h2>
        </div>
      </div>

      <!-- description what happened this round -->
      <div class="descriptionContainer">
        <p id="roundStatus-el" class="description readability">choose your Weapon</p>

      </div>

      <!-- buttons -->
      <div class="buttonContainer">
        <div class="selectionContainer">
          <!-- button active class for press animation -->
          <img src="../assets/odinRPS/rock.png" id="rock-btn" class="rockBtn" alt="rock">
          <img src="../assets/odinRPS/paper.png" id="paper-btn" class="paperBtn" alt="paper">
          <img src="../assets/odinRPS/scissor.png" id="scissor-btn" class="scissorBtn" alt="scissor">
        </div>
      </div>

      <!-- footer -->
      <div class="footer">
        <p class="readability">
          <a href="https://github.com/JohKei/odinRockPaperScissor" target="_blank"
             class="repoLink">visit my repo!
          </a>
        </p>
      </div>
    </div>
  </div>

</template>

<script setup lang="js">

//Logic Section

const selections = ["rock", "paper", "scissor"]
let userScore = 0
let computerScore = 0
let computerSelection = ""

function getComputerChoice() {
  return computerSelection = selections[Math.floor(Math.random() * 3)]
}

//playRound function which takes playerSelection as parameter
//this function should return:
//a winner with a string like "You Lose! Rock beats Scissor"
//or "It's a Draw!"
function playRound(user) {
  let computer = getComputerChoice(computerSelection)

  if (user === computer) {
    createAppendGif("./images/draw.gif")
    roundStatusEl.textContent = `It's a Draw! You choose ${user} and the computer choose ${computer}!`
  } else if (user === "rock" && computer === "paper") {
    roundStatusEl.textContent = `You Lost! you chose ${user} and the computer chose ${computer}`
    computerScore += 1
    updateScoreEl()
    checkWinner()
    if (computerScore < 5) {
      showGif("paper", "computer")
    }
  } else if (user === "rock" && computer === "scissor") {
    roundStatusEl.textContent = `You Won! you chose ${user} and the computer chose ${computer}`
    userScore += 1
    updateScoreEl()
    checkWinner()
    if (userScore < 5) {
      showGif("rock", "user")
    }
  } else if (user === "paper" && computer === "rock") {
    roundStatusEl.textContent = `You Won! you chose ${user} and the computer chose ${computer}`
    userScore += 1
    updateScoreEl()
    checkWinner()
    if (userScore < 5) {
      showGif("paper", "user")
    }
  } else if (user === "paper" && computer === "scissor") {
    roundStatusEl.textContent = `You Lost! you chose ${user} and the computer chose ${computer}`
    computerScore += 1
    updateScoreEl()
    checkWinner()
    if (computerScore < 5) {
      showGif("scissor", "computer")
    }
  } else if (user === "scissor" && computer === "rock") {
    roundStatusEl.textContent = `You Lost! you chose ${user} and the computer chose ${computer}`
    computerScore += 1
    updateScoreEl()
    checkWinner()
    if (computerScore < 5) {
      showGif("rock", "computer")
    }
  } else if (user === "scissor" && computer === "paper") {
    roundStatusEl.textContent = `You Won! you chose ${user} and the computer chose ${computer}`
    userScore += 1
    updateScoreEl()
    checkWinner()
    if (userScore < 5) {
      showGif("scissor", "user")
    }
  }
}

function checkWinner() {
  if (userScore === 5) {
    gameOverHEl.textContent = `You Won!`
    let message = (`You reached ${userScore} Points while the Villain reached ${computerScore} Points!`)
    lastGame(message)
    gameOver()
    callBackGif()
  } else if (computerScore === 5) {
    gameOverHEl.textContent = `Game Over!`
    let message = (`You Lost! you reached ${userScore} Points while the Villain reached ${computerScore} Points!`)
    lastGame(message)
    gameOver()
    callBackGif()
  }
}


//Intro Popup Section

//Outro Popup Section
const gameOverDiv = document.querySelector("#gameOver")
const gameOverHEl = document.querySelector("#gameOverH-el")
const lastGameEl = document.querySelector("#lastGame-el")

const restartBtn = document.querySelector("#restart-btn")

//gameOver Popup function
function lastGame(x) {
  lastGameEl.textContent = x
}

function gameOver() {
  gameOverDiv.style.visibility = "visible"
  mainBodyEl.style.visibility = "hidden"
}

//Header Section

//ScoreBoard Section
const playerScoreEl = document.querySelector("#playerScore-el")
const computerScoreEl = document.querySelector("#computerScore-el")
playerScoreEl.textContent = userScore
computerScoreEl.textContent = computerScore

//update scoreBoard after each round function

function updateScoreEl() {
  playerScoreEl.textContent = userScore
  computerScoreEl.textContent = computerScore
}

//gifContainer Section
function createAppendGif(x) {
  const gifContainer = document.querySelector("#gifContainer")
  const gifImg = document.createElement("img");
  gifImg.classList.add("gif")
  gifImg.setAttribute("id", "gif")
  gifImg.src = x + "?t=" + Date.now();
  gifContainer.appendChild(gifImg)
}


function callBackGif() {
  const gifContainer = document.querySelector("#gifContainer");
  gifContainer.innerHTML = "";
}


//function show rock gif if rock wins the round
function showGif(whatGif, whatWinner) {
  if (whatGif === "rock" && whatWinner === "computer") {
    createAppendGif("../assets/odinRPS/computerRock.gif")

  } else if (whatGif === "scissor" && whatWinner === "computer") {
    createAppendGif("../assets/odinRPS/computerScissor.gif")

  } else if (whatGif === "paper" && whatWinner === "computer") {
    createAppendGif("../assets/odinRPS/computerPaper.gif")

  } else if (whatGif === "rock" && whatWinner === "user") {
    createAppendGif("../assets/odinRPS/userRock.gif")

  } else if (whatGif === "scissor" && whatWinner === "user") {
    createAppendGif("../assets/odinRPS/userScissor.gif")

  } else if (whatGif === "paper" && whatWinner === "user") {
    createAppendGif("../assets/odinRPS/userPaper.gif")

  }
}


//description Section
const roundStatusEl = document.querySelector("#roundStatus-el")

//Button Section
const rockBtn = document.querySelector("#rock-btn")
const paperBtn = document.querySelector("#paper-btn")
const scissorBtn = document.querySelector("#scissor-btn")

//when pressed rock,paper,scissor run playRound(selection)
rockBtn.addEventListener("click", function () {
  callBackGif()
  playRound(selections[0])
  btnAnimation(rockBtn)
})
paperBtn.addEventListener("click", function () {
  callBackGif()
  playRound(selections[1])
  btnAnimation(paperBtn)
})
scissorBtn.addEventListener("click", function () {
  callBackGif()
  playRound(selections[2])
  btnAnimation(scissorBtn)
})
restartBtn.addEventListener("click", function () {
  restartGame()
})

//restartGame
function restartGame() {
  userScore = 0
  computerScore = 0
  updateScoreEl()
  gameOverDiv.style.visibility = "hidden"
  mainBodyEl.style.visibility = "visible"
  roundStatusEl.textContent = "Choose your Weapon"
}

/* button click animation */
function btnAnimation(x) {
  x.classList.add("buttonActive")
  setTimeout(() => {
    x.classList.remove("buttonActive")
  }, 150);
}

//footer Section

</script>

<style scoped lang="css">
.body {

}

.rM {
  margin: 0;
}

.actualBody {
  width: 1024px;
  height: 1024px;
  background-image: url(../assets/odinRPS/newBackGround2.jpg);
  margin: auto;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  visibility: visible;
}

.readability {
  background-color: white;
  color: black;
  border-radius: 10px;
  width: fit-content;
}

/* header */
.header {
  width: 100%;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
}

/* Score Board */
.scoreBoard {
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  font-size: 20px;
}

.userContainer,
.villainContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  justify-content: center;
}

.gifContainer {
  width: 300px;
  height: 170px;
}

.gif {
  width: 300px;
  height: auto;
  border-radius: 10px;
}

/* Button Container */
.buttonContainer {
  width: 100%;
}

.selectionContainer {
  display: flex;
  justify-content: space-evenly;
}

.rockBtn,
.paperBtn,
.scissorBtn {
  height: 200px;
  width: auto;
  border-radius: 10px;
}

.buttonActive {
  transform: scale(1.1);
  border-color: #d9c516;
  box-shadow: 0 0 3rem #d9c516;
}

.restartBtn {
  height: 50px;
  width: 200px;
}

/* Description */
.description {
  font-size: 25px;
  color: black;
}

.descriptionContainer {
  display: flex;
}

/* footer */
.repoLink {
  color: black;
  text-decoration: none;
}

/* intro Popup */
.introPopup {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: brown;
  position: 0;
  visibility: hidden;
}

/* Game Over PopUp */
.gameEndPopup {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  position: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.gameEndPopup h1 {
  font-size: 80px;
}

.gameEndPopup p {
  font-size: 40px;
}

.gameEndPopup button {
  width: 200px;
  height: 40px;
  border-radius: 10px;

}
</style>