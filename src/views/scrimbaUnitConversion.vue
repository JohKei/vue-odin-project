<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <div class="actualBody">
      <div class="inputSection">
        <h1 class="rmPadding">Metric/Imperial Unit Conversion</h1>
        <input type="number" v-model="inputEl" class="input" id="input-el"
               onkeyup="if(value<1) value=1;">
        <div>
          <button class="button" @click="convert()">Convert</button>
          <button class="button" id="clear" @click="clear">Clear</button>
        </div>
      </div>
      <div class="outputSection">
        <div class="length subcontainer">
          <h2 class="">Length (Meter/Feet)</h2>
          <p id="length-el" ref="lengthEl" class="paragraph"></p>
        </div>
        <div class="volume subcontainer">
          <h2 class="">Volume (Liters/Gallons)</h2>
          <p id="volume-el" ref="volumeEl" class="paragraph"></p>
        </div>
        <div class="mass subcontainer">
          <h2 class="">Mass (Kilograms/Pounds</h2>
          <p id="mass-el" ref="massEl" class="paragraph"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import NavigationBar from "@/components/NavigationBar.vue";
import {ref} from "vue";

//1 liter = 0.264172 gallons                    ////1 gallon is equal to 3.785411784 liters.
//1 meter = 3.28084 feet                        ////1 foot = 0.3048 meters
//1 kilogram is equal to 2.20462262 pounds.     ////1 pound = 0.453592 kilograms

const lengthMeterFeet = 3.28084
const lengthFeetMeter = 0.3048
const volumeLitersGallons = 0.264172
const volumeGallonsLiters = 3.785411784
const massKilogramsPounds = 2.20462262
const massPoundsKilograms = 0.453592

const inputEl = ref()
const lengthEl = ref()
const volumeEl = ref()
const massEl = ref()

function convert() {
  let baseTextLength = `${inputEl.value} meters = ${(inputEl.value * lengthMeterFeet).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value * lengthFeetMeter).toFixed(3)} meters`
  let baseTextVolume = `${inputEl.value} liters = ${(inputEl.value * volumeLitersGallons).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value * volumeGallonsLiters).toFixed(3)} liters`
  let baseTextMass = `${inputEl.value} kilos = ${(inputEl.value * massKilogramsPounds).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value * massPoundsKilograms).toFixed(3)} kilos`
  lengthEl.value.textContent = baseTextLength
  volumeEl.value.textContent = baseTextVolume
  massEl.value.textContent = baseTextMass

}

function clear() {
  inputEl.value = ""
  lengthEl.value.textContent = ""
  volumeEl.value.textContent = ""
  massEl.value.textContent = ""
}
</script>


<style scoped lang="css">
.body {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.rmPadding {
  padding: 0;
  margin: 0;
}

.actualBody {
  width: 550px;
  height: 730px;
  background-color: #1F2937;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.inputSection {
  display: flex;
  flex-direction: column;
  background-color: #6943FF;
  padding: 0 50px;
  gap: 10px;
  height: 285px;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;

}

.outputSection {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 24px;
  margin: 25px;
  flex: 1;
}

.subcontainer {
  background-color: #273549;
  width: 500px;
  height: 110px;
  text-align: center;
}

.inputSection h1 {
  font-size: 28px;
  color: white;
}

.outputSection h2 {
  color: #CCC1FF;
  font-size: 20px;
  font-weight: 600;

}

.inputSection .input {
  width: 100%;
  height: 50px;
  border: 2px solid #B295FF;
  background-color: #6943FF;
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: textfield;
}

.inputSection .button {
  width: 120px;
  height: 40px;
  border-radius: 5px;
}

/* remove arrows from number input */
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.paragraph {
  font-size: 14px;
  color: white;
  font-weight: 400;
}
</style>