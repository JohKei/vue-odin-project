<template>
  <div class="body">
    <div class="actualBody">
      <div class="player">
        <div class="home"><h2>Home</h2></div>
        <div class="guest"><h2>Guest</h2></div>
      </div>
      <div class="points">
        <div class="homePoints">
          <h3 id="home-points">0</h3>
        </div>
        <div class="guestPoints">
          <h3 id="guest-points">0</h3>
        </div>
      </div>
      <div class="buttonContainer">
        <div class="homeButtons">
          <button class="button" @click="add1home">+1</button>
          <button class="button" @click="add2home">+2</button>
          <button class="button" @click="add3home()">+3</button>
        </div>
        <div class="guestButtons">
          <button class="button" @click="add1guest()">+1</button>
          <button class="button" @click="add2guest()">+2</button>
          <button class="button" @click="add3guest()">+3</button>
        </div>
      </div>
      <div class="reset">
        <button class="button" @click="clearGame()">Clear Game</button>
      </div>
      <div class="history">
        <div class="previousGames"><p>Last Game:</p></div>
        <div class="previousScores"><p id="previous-scores"></p></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="js">
let homeScore = 0
let guestScore = 0

function add1home() {
  homeScore += 1
  document.getElementById("home-points").textContent = homeScore
}

function add2home() {
  homeScore += 2
  document.getElementById("home-points").textContent = homeScore
}

function add3home() {
  homeScore += 3
  document.getElementById("home-points").textContent = homeScore
}

function add1guest() {
  guestScore += 1
  document.getElementById("guest-points").textContent = guestScore
}

function add2guest() {
  guestScore += 2
  document.getElementById("guest-points").textContent = guestScore
}

function add3guest() {
  guestScore += 3
  document.getElementById("guest-points").textContent = guestScore
}

function clearGame() {
  let finalScore = homeScore + ":" + guestScore
  document.getElementById("previous-scores").textContent = finalScore
  homeScore = 0
  guestScore = 0
  document.getElementById("home-points").textContent = homeScore
  document.getElementById("guest-points").textContent = guestScore
}
</script>


<style scoped lang="css">

.body{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.actualBody {
  display: flex;
  flex-direction: column;
  width: 575px;
  height: 500px;

  background: #1B244A;
  gap: 20px;
  justify-content: space-evenly;
  /* background-image: url(./images/basketball.JPG); */
}

.player {
  display: flex;
  justify-content: space-evenly;
}

.home,
.guest {
  flex: 1;
  text-align: center;
}

.home h2,
.guest h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #EEEEEE;
  margin: 0;
  padding: 0;
}

.points {
  display: flex;
  justify-content: space-around;
}

.guestPoints,
.homePoints {
  width: 155px;
  height: 120px;
  background: #080001;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.homePoints h3,
.guestPoints h3 {
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  color: #F94F6D;
  margin: 0;
  padding: 0;
  flex: 1;
}

.buttonContainer {
  display: flex;
  justify-content: space-around;
}

.homeButtons,
.guestButtons {
  width: 155px;
  text-align: center;
}

.homeButtons button,
.guestButtons button {
  width: 45px;
  height: 45px;
  border: 2px solid #9AABD8;
  border-radius: 5px;
  color: #9AABD8;
  background: #1B244A;
  font-size: 20px;
}

.button:hover {
  background-color: #F94F6D;
  color: black;
}

.homePoints h3,
.guestPoints h3,
.homeButtons button,
.guestButtons button {
  font-family: 'Cursed Timer ULiL', sans-serif;
}

.reset {
  align-self: center;
}

.reset button {
  border: 2px solid #9AABD8;
  border-radius: 5px;
  color: #9AABD8;
  background: #1B244A;
  font-size: 20px;
}

.history {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  text-align: center;
}

.history .previousGames p {
  margin: 0;
  padding: 0;
  font-size: 20px;
  border: 2px solid #9AABD8;
  border-radius: 5px;
  color: #9AABD8;
  background: #1B244A;
  min-width: 150px;
  min-height: 26px;
}

.history .previousScores p {
  font-family: 'Cursed Timer ULiL', sans-serif;
  margin: 0;
  padding: 0;
  font-size: 20px;
  border: 2px solid #9AABD8;
  border-radius: 5px;
  color: #F94F6D;
  background: #1B244A;
  min-width: 150px;
  min-height: 26px;
  max-width: 575px;
  height: 35px;
}
</style>