<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <div class="calculatorBody">
      <div class="textFieldOne"><!-- actually the secondary Text Field. -->
        <p class="rm" id="secondaryText-el">{{ secondText }}</p>
      </div>

      <div class="textFieldTwo"><!-- Main Text field which shows current input -->
        <p class="rm" id="mainText-el">{{ mainText }}</p>
      </div>

      <div class="firstButtonRow">
        <button class="button grey" @click="c">C</button>
        <button class="button grey" @click="opposite">+/-</button>
        <button class="button grey" @click="percent">%</button>
        <button class="button operand"
                @click="divideF"
                :class="{operandActive:divide}"
        >
          ÷
        </button>
      </div>

      <div class="secondButtonRow">
        <button class="button number" @click="mainText+='7'">7</button>
        <button class="button number" @click="mainText+='8'">8</button>
        <button class="button number" @click="mainText+='9'">9</button>
        <button class="button operand"
                @click="multiplyF"
                :class="{operandActive:multiply}"
        >
          x
        </button>
      </div>

      <div class="thirdButtonRow">
        <button class="button number" @click="mainText+='4'">4</button>
        <button class="button number" @click="mainText+='5'">5</button>
        <button class="button number" @click="mainText+='6'">6</button>
        <button class="button operand"
                @click="subtractF"
                :class="{operandActive:subtract}"
        >
          -
        </button>
      </div>

      <div class="fourthButtonRow">
        <button class="button number" @click="mainText+='1'">1</button>
        <button class="button number" @click="mainText+='2'">2</button>
        <button class="button number" @click="mainText+='3'">3</button>
        <button class="button operand"
                @click="addF"
                :class="{operandActive:add}"
        >
          +
        </button>
      </div>

      <div class="lastButtonRow">
        <button class="button number flexTwo" @click="mainText+='0'">0</button>
        <button class="button number" @click="mainText+='.'">.</button>
        <button class="button operand" @click="calculate">=</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import NavigationBar from "@/components/NavigationBar.vue";
import {ref} from "vue";

const mainText = ref('')
const secondText = ref('')
const add = ref(false)
const subtract = ref(false)
const divide = ref(false)
const multiply = ref(false)

const falseAll = () => {
  add.value = false
  subtract.value = false
  divide.value = false
  multiply.value = false
}
const c = () => {
  mainText.value = ''
  secondText.value = ''
  falseAll()
}
const addF = () => {
  secondText.value = mainText.value
  mainText.value = ''
  add.value = true
  subtract.value = false
  divide.value = false
  multiply.value = false
}
const subtractF = () => {
  secondText.value = mainText.value
  mainText.value = ''
  add.value = false
  subtract.value = true
  divide.value = false
  multiply.value = false
}
const divideF = () => {
  secondText.value = mainText.value
  mainText.value = ''
  add.value = false
  subtract.value = false
  divide.value = true
  multiply.value = false
}
const multiplyF = () => {
  secondText.value = mainText.value
  mainText.value = ''
  add.value = false
  subtract.value = false
  divide.value = false
  multiply.value = true
}
const calculate = () => {
  if (add.value) {
    mainText.value = (+secondText.value) + (+mainText.value)
    secondText.value = ''
    falseAll()
  } else if (subtract.value) {
    mainText.value = (+secondText.value) - (+mainText.value)
    secondText.value = ''
    falseAll()
  } else if (multiply.value) {
    mainText.value = (+secondText.value) * (+mainText.value)
    secondText.value = ''
    falseAll()
  } else if (divide.value) {
    mainText.value = (+secondText.value) / (+mainText.value)
    secondText.value = ''
    falseAll()
  }
}
const opposite = () => {
  mainText.value = +mainText.value * -1
}
const percent = () =>{
  mainText.value = +mainText.value /100
}
</script>

<style scoped lang="css">
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculatorBody {
  display: flex;
  max-width: 390px;
  max-height: 844px;
  height: 600px;
  width: max-content;
  height: max-content;
  flex-direction: column;
  gap: 5px;
  background-color: black;
  border-radius: 10px;
  padding: 10px;
}

.rm {
  margin: 0;
}

/* Text Fields */
.textFieldOne,
.textFieldTwo {
  color: white;
  text-align: right;
}

.textFieldOne {
  font-size: 25px;
  width: 335px;
  height: 30px;

}

.textFieldTwo {
  font-size: 40px;
  width: 335px;
  height: 47px;
}

/* Buttons */
.firstButtonRow,
.secondButtonRow,
.thirdButtonRow,
.fourthButtonRow,
.lastButtonRow {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.button {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 0;
  font-size: 28px;
  font-weight: 600;
}

.operand {
  background-color: orange;
  color: white;
}

.flexTwo {
  flex: 1;
}

.grey {
  background-color: grey;
  color: black;
}

.number {
  background-color: rgb(47, 46, 46);
  color: white;
}

/* button Hovers */
.number:hover {
  background-color: white;
  opacity: 55%;
  color: black;
}

.operand:hover {
  background-color: white;
  color: orange;
}

.grey:hover {
  background-color: white;
}

/* button active */
.operandActive {
  background-color: white;
  color: orange;
}

.numberActive {
  background-color: white;
  opacity: 55%;
  color: black;
}

.greyActive {
  background-color: white;
}
</style>