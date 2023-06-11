<template>
  <!--Todo: inputGroup add-on next to each button with the computed amount of books with this category-->
  <!--Todo: @click show filtered Books-->
  <div class="topicSelection">
    <button class="buttonContentColor">
      all
    </button>
    <button class="buttonContentColor">
      <svg-icon type="mdi" :path="icons.unicornSvg"/>
      Fantasy
    </button>
    <button class="buttonContentColor">
      <svg-icon type="mdi" :path="icons.dramaMask"/>
      Drama
    </button>
    <button class="buttonContentColor">
      <svg-icon type="mdi" :path="icons.handCuffs"/>
      Detective
    </button>
    <button class="buttonContentColor">
      <svg-icon type="mdi" :path="icons.education"/>
      Education
    </button>
    <button class="buttonContentColor">
      <svg-icon type="mdi" :path="icons.psychology"/>
      Psychology
    </button>
    <button class="buttonContentColor">
      <svg-icon type="mdi" :path="icons.business"/>
      Business
    </button>
    <button class="buttonContentColor">
      <svg-icon type="mdi" :path="icons.astrology"/>
      Astrology
    </button>
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
  align-items: center;
  height: 100%;
  width: 100%;
}

.buttonContentColor:active,
.buttonContentColor:hover {
  background-color: #9b7960;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
}

.buttonContentColor {
  background-color: inherit;
  border: none;
  padding: 0 10px;
  width: max-content;
}
</style>