<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <!-- introPopup -->
    <div class="introPopup">

    </div>
    <!-- gameEndPopup -->
    <div class="gameEndPopup" ref="gameOverDiv">
      <h1>{{ gameOverHel }}</h1>
      <p>{{ lastGameEl }}</p>
      <button @click="restartGame">restart game</button>
    </div>

    <div class="actualBody" ref="mainBodyEl">

      <!-- header -->
      <div class="header">
        <h1 class="readability">Play Rock, Paper, Scissor vs. Villains!</h1>
      </div>

      <!-- scoreBoard -->
      <div class="scoreBoard">
        <div class="userContainer">
          <h2 class="rM readability">ヒーロー</h2>
          <h2 class="readability rM">(hero)</h2>
          <h2 class="score rM readability">Player Score {{ userScore }}</h2>
        </div>

        <div class="gifContainer" id="gifContainer" ref="gifContainer">
          <img v-if="draw" src="../assets/odinRPS/draw.gif" alt="img" class="gif">
          <img v-if="computerPaper" src="../assets/odinRPS/computerPaper.gif" alt="img" class="gif">
          <img v-if="computerRock" src="../assets/odinRPS/computerRock.gif" alt="img" class="gif">
          <img v-if="computerScissor" src="../assets/odinRPS/computerScissor.gif" alt="img" class="gif">
          <img v-if="userPaper" src="../assets/odinRPS/userPaper.gif" alt="img" class="gif">
          <img v-if="userRock" src="../assets/odinRPS/userRock.gif" alt="img" class="gif">
          <img v-if="userScissor" src="../assets/odinRPS/userScissor.gif" alt="img" class="gif">
        </div>

        <div class="villainContainer">
          <h2 class="rM readability">悪党</h2>
          <h2 class="readability rM">(villain)</h2>
          <h2 class="score rM readability">Computer Score {{ computerScore }}</h2>
        </div>
      </div>

      <!-- description what happened this round -->
      <div class="descriptionContainer">
        <p id="roundStatus-el" class="description readability">{{ roundStatusEl }}</p>

      </div>

      <!-- buttons -->
      <div class="buttonContainer">
        <div class="selectionContainer">
          <!-- button active class for press animation -->
          <img src="../assets/odinRPS/rock.png" class="rockBtn" alt="rock" ref="rockBtn" @click="rockF">
          <img src="../assets/odinRPS/paper.png" class="paperBtn" alt="paper" ref="paperBtn" @click="paperF">
          <img src="../assets/odinRPS/scissor.png" class="scissorBtn" alt="scissor" ref="scissorBtn" @click="scissorF">
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

import {ref} from "vue";
import NavigationBar from "@/components/NavigationBar.vue";

const selections = ["rock", "paper", "scissor"]
const userScore = ref(0)
const computerScore = ref(0)
let computerSelection = ""
const draw = ref(false)
const computerPaper = ref(false)
const computerRock = ref(false)
const computerScissor = ref(false)
const userPaper = ref(false)
const userRock = ref(false)
const userScissor = ref(false)

function getComputerChoice() {
  return computerSelection = selections[Math.floor(Math.random() * 3)]
}

//playRound function which takes playerSelection as parameter
//this function should return:
//a winner with a string like "You Lose! Rock beats Scissor"
//or "It's a Draw!"

const playRound = async (user) => {
  let computer = getComputerChoice(computerSelection)
  draw.value = false
  computerPaper.value = false
  computerRock.value = false
  computerScissor.value = false
  userPaper.value = false
  userRock.value = false
  userScissor.value = false
  if (user === computer) {
    // createAppendGif("../assets/odinRPS/draw.gif")
    roundStatusEl.value = `It's a Draw! You choose ${user} and the computer choose ${computer}!`
    draw.value= true
  } else if (user === "rock" && computer === "paper") {
    roundStatusEl.value = `You Lost! you chose ${user} and the computer chose ${computer}`
    computerScore.value += 1
    // updateScoreEl()
    checkWinner()
    // if (computerScore.value < 5) {
    //   await showGif("paper", "computer")
    // }
    computerPaper.value= true
  } else if (user === "rock" && computer === "scissor") {
    roundStatusEl.value = `You Won! you chose ${user} and the computer chose ${computer}`
    userScore.value += 1
    // updateScoreEl()
    checkWinner()
    // if (userScore.value < 5) {
    //   showGif("rock", "user")
    // }
    userRock.value = true
  } else if (user === "paper" && computer === "rock") {
    roundStatusEl.value = `You Won! you chose ${user} and the computer chose ${computer}`
    userScore.value += 1
    // updateScoreEl()
    checkWinner()
    // if (userScore.value < 5) {
    //   showGif("paper", "user")
    // }
    userPaper.value= true
  } else if (user === "paper" && computer === "scissor") {
    roundStatusEl.value = `You Lost! you chose ${user} and the computer chose ${computer}`
    computerScore.value += 1
    // updateScoreEl()
    checkWinner()
    // if (computerScore.value < 5) {
    //   showGif("scissor", "computer")
    // }
    computerScissor.value = true
  } else if (user === "scissor" && computer === "rock") {
    roundStatusEl.value = `You Lost! you chose ${user} and the computer chose ${computer}`
    computerScore.value += 1
    // updateScoreEl()
    checkWinner()
    // if (computerScore.value < 5) {
    //   showGif("rock", "computer")
    // }
    computerRock.value = true
  } else if (user === "scissor" && computer === "paper") {
    roundStatusEl.value = `You Won! you chose ${user} and the computer chose ${computer}`
    userScore.value += 1
    // updateScoreEl()
    checkWinner()
    // if (userScore.value < 5) {
    //   showGif("scissor", "user")
    // }
    userScissor.value = true
  }
}

function checkWinner() {
  if (userScore.value === 5) {
    gameOverHel.value = `You Won!`
    let message = (`You reached ${userScore.value} Points while the Villain reached ${computerScore.value} Points!`)
    lastGame(message)
    gameOver()
    // callBackGif()
  } else if (computerScore.value === 5) {
    gameOverHel.value = `Game Over!`
    let message = (`You Lost! you reached ${userScore.value} Points while the Villain reached ${computerScore.value} Points!`)
    lastGame(message)
    gameOver()
    // callBackGif()
  }
}


//Intro Popup Section

//Outro Popup Section
// const gameOverDiv = document.querySelector("#gameOver")
const gameOverDiv = ref()
// const gameOverHEl = document.querySelector("#gameOver-el")
const gameOverHel = ref('')
// const lastGameEl = document.querySelector("#lastGame-el")
const lastGameEl = ref()
// const restartBtn = document.querySelector("#restart-btn")

//gameOver Popup function
function lastGame(x) {
  lastGameEl.value = x
}


const mainBodyEl = ref()

function gameOver() {
  gameOverDiv.value.style.visibility = "visible"
  mainBodyEl.value.style.visibility = "hidden"
}

//Header Section

//ScoreBoard Section
// const playerScoreEl = document.querySelector("#playerScore-el")
// const computerScoreEl = document.querySelector("#computerScore-el")

const gifContainer = ref()
// const gifImg = ref()
// const imgSource = ref('')

//gifContainer Section
// function createAppendGif(x) {
  // // const gifImg = document.createElement("img");
  // gifImg.value.classList.add("gif")
  // gifImg.value.setAttribute("id", "gif")
  // gifImg.value.src = `${x}  ${Date.now()}`;
  // // gifContainer.value.appendChild(gifImg.value)
  // gifImg.value.src = x
  // console.log(gifImg.value)
// }


// function callBackGif() {
//   const gifContainer = document.querySelector("#gifContainer");
//   gifContainer.innerHTML = "";
// }


//function show rock gif if rock wins the round
// const showGif = (whatGif, whatWinner) => {
//   if (whatGif === "rock" && whatWinner === "computer") {
//     // createAppendGif("../assets/odinRPS/computerRock.gif")
//     computerRock.value = true
//   } else if (whatGif === "scissor" && whatWinner === "computer") {
//     // createAppendGif("../assets/odinRPS/computerScissor.gif")
//     computerScissor.value = true
//   } else if (whatGif === "paper" && whatWinner === "computer") {
//     // createAppendGif("../assets/odinRPS/computerPaper.gif")
//     computerPaper.value = true
//   } else if (whatGif === "rock" && whatWinner === "user") {
//     // createAppendGif("../assets/odinRPS/userRock.gif")
//     userRock.value = true
//   } else if (whatGif === "scissor" && whatWinner === "user") {
//     // createAppendGif("../assets/odinRPS/userScissor.gif")
//
//   } else if (whatGif === "paper" && whatWinner === "user") {
//     // createAppendGif("../assets/odinRPS/userPaper.gif")
//     userPaper.value = true
//   }
// }


//description Section
// const roundStatusEl.value = document.querySelector("#roundStatus-el")
const roundStatusEl = ref('choose your Weapon')
//Button Section
// const rockBtn = document.querySelector("#rock-btn")
const rockBtn = ref()
// const paperBtn = document.querySelector("#paper-btn")
const paperBtn = ref()
// const scissorBtn = document.querySelector("#scissor-btn")
const scissorBtn = ref()

//when pressed rock,paper,scissor run playRound(selection)

// rockBtn.addEventListener("click", function () {
const rockF = () => {
  // callBackGif()
  playRound(selections[0])
  btnAnimation(rockBtn)
}

// paperBtn.addEventListener("click", function () {
const paperF = () => {
  // callBackGif()
  playRound(selections[1])
  btnAnimation(paperBtn)
}
// scissorBtn.addEventListener("click", function () {
const scissorF = () => {
  // callBackGif()
  playRound(selections[2])
  btnAnimation(scissorBtn)
}
// restartBtn.addEventListener("click", function () {
//   restartGame()
// })

//restartGame
function restartGame() {
  draw.value = false
  computerPaper.value = false
  computerRock.value = false
  computerScissor.value = false
  userPaper.value = false
  userRock.value = false
  userScissor.value = false
  userScore.value = 0
  computerScore.value = 0
  // updateScoreEl()
  gameOverDiv.value.style.visibility = "hidden"
  mainBodyEl.value.style.visibility = "visible"
  roundStatusEl.value = "Choose your Weapon"
}

/* button click animation */
function btnAnimation(x) {
  x.value.classList.add("buttonActive")
  setTimeout(() => {
    x.value.classList.remove("buttonActive")
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