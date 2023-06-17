<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <!-- header section -->
    <div class="headerContainer">
      <h1 class="pageTitle readability">Etch a Sketch</h1>
    </div>
    <!-- draw section -->
    <div class="drawContainer" id="drawContainer">
      <div v-for="pxRow in scaleInput" class="pxRow" :key="pxRow"
      >
        <div v-for="px in scaleInput" class="px" :key="px" :id="uuidv4()"
             @mouseover="hover"
             :class="{color:resetColor}"
        >
        </div>
      </div>
    </div>
    <!-- button input section -->
    <div class="buttonContainer">
      <button class="button" @click="colorMode = true; blackMode = false" :class="{btnActive:colorMode}">color Mode</button>
      <button class="button" @click="blackMode = true; colorMode = false" :class="{btnActive:blackMode}">black Mode</button>
      <button class="button" id="clearBtn" @click="clear">clear</button>
      <div class="inputContainer">
        <p id="scaleValue" class="readability scaleInputValue rm">{{ scaleInput }}</p>
        <input type="range" min="16" max="100" v-model.number="scaleInput">
      </div>
    </div>
  </div>
</template>


<script setup lang="js">
import {v4 as uuidv4} from 'uuid';
import {ref} from "vue";
import NavigationBar from "@/components/NavigationBar.vue";

const scaleInput = ref(16)
const colorMode = ref(true)
const blackMode = ref(false)
const resetColor = ref(false)
const pxArray = []
const hover = (divObject) => {
  if (colorMode.value) {
    divObject.explicitOriginalTarget.style.backgroundColor = `rgb(${createRandomRgbValue()})`
    pxArray.push(divObject.explicitOriginalTarget)
  } else {
    divObject.explicitOriginalTarget.style.backgroundColor = `rgb(0, 0, 0)`
    pxArray.push(divObject.explicitOriginalTarget)
  }
}
const clear = () =>{
  pxArray.forEach((item) =>{
    item.style.backgroundColor = 'beige'
  })
  pxArray.splice(0)
}

function createRandomRgbValue() {
  function createRandomNumber() {
    return Math.floor(Math.random() * 255)
  }

  return `${createRandomNumber()},${createRandomNumber()},${createRandomNumber()}`
}
</script>


<style scoped lang="css">
.body {
  background-color: black;
  height: 100vh;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}

.rm {
  margin: 0;
}

rp {
  padding: 0;
}

.readability {
  text-decoration: none;
  background-color: aquamarine;
  border-radius: 5px;
}

/* header Section */
.headerContainer {
  margin: 0 auto;
}

.pageTitle {
  text-align: center;
  width: fit-content;
}

/* drawContainer */
.drawContainer {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
  width: 600px;
  height: 600px;
  max-width: 600px;
  max-height: 600px;
  box-sizing: content-box;
  border: black solid 5px;
}

.pxRow {
  display: flex;
  flex: 1;
  background-color: red;
}

.px {
  background-color: beige;
  /* border: 1px solid black; */
  flex: 1;
}
.color{
  background-color: beige;
}

/* button input section */
.buttonContainer {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  align-items: center;
}

.button {
  background-color: aquamarine;
  border-radius: 5px;
  width: 110px;
  height: 35px;
  font-size: large;
}

.scaleInputValue {
  width: 110px;
  text-align: center;
}

.inputContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.btnActive {
  scale: 1.1;
  background-color: rgb(57, 203, 247);
  box-shadow: 0 2px #666;

}

#clearBtn:active {
  background-color: rgb(57, 203, 247);
  box-shadow: 0 2px #666;
  scale: 1.1;
}
</style>