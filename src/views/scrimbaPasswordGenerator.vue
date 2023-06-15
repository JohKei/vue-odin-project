<template>
  <div class="body">
    <div class="actualBody">
      <div class="description">
        <h1 class="rmMargin title">Generate a <span class="customTitle">random Password</span></h1>
        <p class="rmMargin text">Never use an insecure password again!</p>
      </div>
      <div class="userSettings">
        <div class="characterContainer">
          <p class="rmMargin color">type in Password Character length (min:8, max:20)</p>
          <div class="inputContainer">
            <input type="number" name="quantity" class="numberInput" id="number-input" min="8" max="20"
                   onkeyup="if(value<8) value=8;if(value>20) value=20;" v-model="characterCount">
          </div>
        </div>
        <div class="toggleContainer">
          <div class="toggleInfo">
            <p class="color">Include Numbers</p>
            <p class="color">Include Symbols</p>
          </div>
          <div class="toggleButtons inputContainer">
            <!-- Rounded switch -->
            <label class="switch">
              <input type="checkbox" value="numbers" v-model="addNumbers" id="add-numbers">
              <span class="slider round"></span>
            </label>
            <label class="switch">
              <input type="checkbox" value="symbols" v-model="addSymbols" id="add-symbols">
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      </div>
      <button class="button" @click="generatePassword()">Generate Password</button>
      <div class="outputContainer">
        <p id="passwordOne" class="passwordOne">
          {{ passwordOne }}
        </p>
        <p id="passwordTwo" class="passwordTwo">
          {{ passwordTwo }}
        </p>
      </div>
      <div class="copyContainer">
        <button class="button" @click="copyFirst()">copy</button>
        <button class="button" @click="copySecond()">copy</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">

import {ref} from "vue";

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
]
const numbers = ["0", "1", "2", "3", "4",
  "5", "6", "7", "8", "9",]

const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+",
  "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]
let addNumbers = ref()
let addSymbols = ref()
let passwordOne = ref('')
let passwordTwo = ref('')
let characterCount = ref(15)

function generatePassword() {
  let firstPw = ""
  let secondPw = ""
  let merged = characters

  if (addNumbers.value) {
    merged = characters.concat(numbers)
  }
  if (addSymbols.value) {
    merged = merged.concat(symbols)
  }
  // let character = merged[Math.floor(Math.random() * merged.length)]
  for (let i = 0; i < characterCount.value; i++) {
    firstPw += merged[Math.floor(Math.random() * merged.length)]
  }
  for (let i = 0; i < characterCount.value; i++) {
    secondPw += merged[Math.floor(Math.random() * merged.length)]
  }
  passwordOne.value = firstPw
  passwordTwo.value = secondPw
}

function copyFirst() {
  const input = passwordOne.value;
  navigator.clipboard.writeText(input);
}

function copySecond() {
  const input = passwordTwo.value;
  navigator.clipboard.writeText(input);
}
</script>


<style scoped lang="css">
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.rmMargin {
  padding: 0;
  margin: 0;
  flex: 1;
}

.actualBody {
  width: 550px;
  height: 550px;
  background-color: #1F2937;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  box-sizing: border-box;
}

.description {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 40px;
  font-weight: 800;
  color: white;

}

.customTitle {
  color: #4ADF86;
}

.text {
  font-size: 20px;
  color: white;
}

.button {
  width: 190px;
  height: 40px;
  background-color: #10B981;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Permanent Marker', cursive;
  align-self: center;
}

.outputContainer {
  display: flex;
  justify-content: space-around;
  border-top: solid 1px #2F3E53;
}

.passwordOne,
.passwordTwo {
  width: 210px;
  height: 40px;
  background-color: #273549;
  border-radius: 6px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.userSettings {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.characterContainer {
  display: flex;
  gap: 10px;
  align-items: center;
}

.inputContainer {
  flex: 1;
  text-align: center;
  align-items: center;
}

.numberInput {
  width: 60px;
  height: auto;
  background-color: #273549;
  border-radius: 6px;
  text-align: center;
}

.toggleContainer {
  display: flex;
  justify-content: space-around;
}

.toggleInfo {
  flex: 1;
}

.toggleButtons {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

/* everything below is copy/paste */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #273549;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #10B981;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.copyContainer {
  display: flex;
  justify-content: space-around;
}

.color {
  color: moccasin;
}
</style>