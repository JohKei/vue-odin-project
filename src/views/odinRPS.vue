<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <div class="introPopup">
    </div>
    <div class="gameEndPopup" ref="gameOverDiv">
      <h1>{{ gameOverHel }}</h1>
      <p>{{ lastGameEl }}</p>
      <button @click="restartGame">restart game</button>
    </div>
    <div class="actualBody" ref="mainBodyEl">
      <div class="header">
        <h1 class="readability">Play Rock, Paper, Scissor vs. Villains!</h1>
      </div>
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
      <div class="descriptionContainer">
        <p id="roundStatus-el" class="description readability">{{ roundStatusEl }}</p>
      </div>
      <div class="buttonContainer">
        <div class="selectionContainer">
          <img src="../assets/odinRPS/rock.png" class="rockBtn" alt="rock" ref="rockBtn" @click="rockF">
          <img src="../assets/odinRPS/paper.png" class="paperBtn" alt="paper" ref="paperBtn" @click="paperF">
          <img src="../assets/odinRPS/scissor.png" class="scissorBtn" alt="scissor" ref="scissorBtn" @click="scissorF">
        </div>
      </div>
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
    roundStatusEl.value = `It's a Draw! You choose ${user} and the computer choose ${computer}!`
    draw.value = true
  } else if (user === "rock" && computer === "paper") {
    roundStatusEl.value = `You Lost! you chose ${user} and the computer chose ${computer}`
    computerScore.value += 1
    checkWinner()

    computerPaper.value = true
  } else if (user === "rock" && computer === "scissor") {
    roundStatusEl.value = `You Won! you chose ${user} and the computer chose ${computer}`
    userScore.value += 1
    checkWinner()

    userRock.value = true
  } else if (user === "paper" && computer === "rock") {
    roundStatusEl.value = `You Won! you chose ${user} and the computer chose ${computer}`
    userScore.value += 1
    checkWinner()

    userPaper.value = true
  } else if (user === "paper" && computer === "scissor") {
    roundStatusEl.value = `You Lost! you chose ${user} and the computer chose ${computer}`
    computerScore.value += 1
    checkWinner()

    computerScissor.value = true
  } else if (user === "scissor" && computer === "rock") {
    roundStatusEl.value = `You Lost! you chose ${user} and the computer chose ${computer}`
    computerScore.value += 1
    checkWinner()

    computerRock.value = true
  } else if (user === "scissor" && computer === "paper") {
    roundStatusEl.value = `You Won! you chose ${user} and the computer chose ${computer}`
    userScore.value += 1
    checkWinner()

    userScissor.value = true
  }
}

function checkWinner() {
  if (userScore.value === 5) {
    gameOverHel.value = `You Won!`
    let message = (`You reached ${userScore.value} Points while the Villain reached ${computerScore.value} Points!`)
    lastGame(message)
    gameOver()
  } else if (computerScore.value === 5) {
    gameOverHel.value = `Game Over!`
    let message = (`You Lost! you reached ${userScore.value} Points while the Villain reached ${computerScore.value} Points!`)
    lastGame(message)
    gameOver()
  }
}

const gameOverDiv = ref()
const gameOverHel = ref('')
const lastGameEl = ref()

function lastGame(x) {
  lastGameEl.value = x
}

const mainBodyEl = ref()

function gameOver() {
  gameOverDiv.value.style.visibility = "visible"
  mainBodyEl.value.style.visibility = "hidden"
}

const gifContainer = ref()
const roundStatusEl = ref('choose your Weapon')
const rockBtn = ref()
const paperBtn = ref()
const scissorBtn = ref()
const rockF = () => {
  // callBackGif()
  playRound(selections[0])
  btnAnimation(rockBtn)
}
const paperF = () => {
  // callBackGif()
  playRound(selections[1])
  btnAnimation(paperBtn)
}
const scissorF = () => {
  // callBackGif()
  playRound(selections[2])
  btnAnimation(scissorBtn)
}

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

function btnAnimation(x) {
  x.value.classList.add("buttonActive")
  setTimeout(() => {
    x.value.classList.remove("buttonActive")
  }, 150);
}
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

.header {
  width: 100%;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
}

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

.description {
  font-size: 25px;
  color: black;
}

.descriptionContainer {
  display: flex;
}

.repoLink {
  color: black;
  text-decoration: none;
}

.introPopup {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: brown;
  position: 0;
  visibility: hidden;
}

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