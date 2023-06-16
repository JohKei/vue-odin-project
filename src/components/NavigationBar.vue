<template>
  <div class="customMenu" :class="{customMenuBottomBorder: !navActive}">
    <img src="../assets/menu.svg" alt="Menu Icon" class="menuIcon" @click="navActive = !navActive">
    <div v-if="navActive" class="customNavbar">
      <router-link to="/">Home</router-link>
      <router-link to="#">About</router-link>
      <div class="odinProjectsDropdownContainer">
        <button class="odinDropdownBtn" @click="odinContentActive = !odinContentActive">
          Odin Projects
          <i v-if="odinContentActive" class="arrow down"></i>
          <i v-if="!odinContentActive" class="arrow right"></i>
        </button>
        <div v-if="odinContentActive" class="odinDropContent">
          <router-link to="/odinLandingPage">Odin Landing Page</router-link>
          <router-link to="/scrimbaScoreBoard">Scrimba Score board</router-link>
          <router-link to="/scrimbaUnitConversion">Scrimba Unit conversion</router-link>
          <router-link to="/scrimbaPasswordGenerator">Scrimba Password generator</router-link>
          <router-link to="/odinRPS">Odin Rock Paper Scissor</router-link>
          <h3 class="semHeading">Intermediate HTML and CSS</h3>
          <router-link to="/odinForm">Odin Form</router-link>
          <router-link to="/odinDashboard">Odin Dashboard</router-link>
          <h3 class="semHeading">Javascript</h3>
          <router-link to="/odinLibrary">Odin Library</router-link>
        </div>
      </div>
      <div class="personalPlayGroundDropContainer">
        <button class="personalDropBtn" @click="personalContentActive = !personalContentActive">
          Personal Playground
          <i v-if="personalContentActive" class="arrow down"></i>
          <i v-if="!personalContentActive" class="arrow right"></i>
        </button>
        <div v-if="personalContentActive" class="personalDropContent">
          <router-link to="/odinPractice">
            Odin Practice
          </router-link>
          <router-link to="/discordHelp">
            Discord Help
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const navActive = ref(false)
const odinContentActive = ref(true)
const personalContentActive = ref(true)

</script>

<style scoped lang="css">
.menuIcon {
  height: auto;
  width: 50px;
}

.customMenu {
  position: absolute;
  z-index: 10;
  background-color: rgba(255, 255, 255, 80%);
  border-radius: 10px 10px 0 0;
  --headerHeight: 50px;
  height: var(--headerHeight);
}

.customMenuBottomBorder {
  border-radius: 10px;
}

.customNavbar {
  display: flex;
  gap: 20px;
  background-color: rgba(255, 255, 255, 90%);
  flex-direction: column;
  width: 20vw;
  align-items: center;
  height: calc(100vh - var(--headerHeight));
  border-radius: 0 0 10px 10px;
}

.customNavbar a {
  text-decoration: none;
}

.odinProjectsDropdownContainer .odinDropdownBtn,
.personalPlayGroundDropContainer .personalDropBtn {
  border: none;
  background-color: inherit;
  margin: 0;
}

.odinDropContent,
.personalDropContent {
  display: none;
}


.odinDropContent,
.personalDropContent {
  display: flex;
  flex-direction: column;
  background-color: inherit;
  align-items: center;
}


.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.odinDropdownBtn,
.personalDropBtn,
a {
  color: black;
  font-size: 1.4rem;
}

.odinDropContent > a,
.personalDropContent > a {
  font-size: 1.2rem;
}
.semHeading{
  text-align: center;
  font-size: 1.3rem;
  margin: 0;
}
.odinProjectsDropdownContainer{
  display: flex;
  flex-direction: column;
}
</style>

