<template>
  <!--Todo: inputGroup add-on next to each button with the computed amount of books with this category-->
  <!--Todo: @click show filtered Books-->
  <div class="topicSelection">
    <div class="input-group mb-3">
      <button class="buttonContentColor">
        all
      </button>
      <span class="input-group-text">0</span>
    </div>
    <div class="input-group mb-3">
      <button class="buttonContentColor">
        <svg-icon type="mdi" :path="icons.unicornSvg"/>
        Fantasy
      </button>
      <span class="input-group-text">0</span>
    </div>
    <div class="input-group mb-3">
      <button class="buttonContentColor">
        <svg-icon type="mdi" :path="icons.dramaMask"/>
        Drama
      </button>
      <span class="input-group-text">0</span>
    </div>
    <div class="input-group mb-3">
      <button class="buttonContentColor">
        <svg-icon type="mdi" :path="icons.handCuffs"/>
        Detective
      </button>
      <span class="input-group-text">0</span>
    </div>
    <div class="input-group mb-3">
      <button class="buttonContentColor">
        <svg-icon type="mdi" :path="icons.education"/>
        Education
      </button>
      <span class="input-group-text">0</span>
    </div>
    <div class="input-group mb-3">
      <button class="buttonContentColor">
        <svg-icon type="mdi" :path="icons.psychology"/>
        Psychology
      </button>
      <span class="input-group-text">0</span>
    </div>
    <div class="input-group mb-3">
      <button class="buttonContentColor">
        <svg-icon type="mdi" :path="icons.business"/>
        Business
      </button>
      <span class="input-group-text">0</span>
    </div>
    <div class="input-group mb-3">
      <button class="buttonContentColor">
        <svg-icon type="mdi" :path="icons.astrology"/>
        Astrology
      </button>
      <span class="input-group-text">0</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiBrain,
  mdiBriefcaseVariant,
  mdiDramaMasks,
  mdiHandcuffs,
  mdiSchool,
  mdiUnicorn,
  mdiZodiacLibra
} from "@mdi/js";

const icons = {
  unicornSvg: mdiUnicorn,
  dramaMask: mdiDramaMasks,
  handCuffs: mdiHandcuffs,
  education: mdiSchool,
  psychology: mdiBrain,
  business: mdiBriefcaseVariant,
  astrology: mdiZodiacLibra
}

</script>

<style scoped lang="css">
.topicSelection {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
}

.buttonContentColor:active,
.buttonContentColor:hover {
  background-color: #cbb19b;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
}

.buttonContentColor {
  background-color: #bd977c;
  padding: 0 10px;
  flex-grow: 1;
  border: #cbb19b 1px solid;
  border-radius: 10px;
}
.input-group{
  justify-content: flex-end;
}
.input-group-text{
  background-color: #cbb19b;
  border-radius: 10px;
  padding: 3px 5px;
  border: #cbb19b 2px solid;
}
</style>
