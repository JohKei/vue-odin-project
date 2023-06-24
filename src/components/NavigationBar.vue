<template>
  <div class="navMenu" :class="{customMenuBottomBorder: !navActive}">
    <svg-icon type="mdi" :path="icons.menu" class="toggleNavbar" @click="navActive = !navActive"/>
    <div v-if="navActive" class="navBar">
      <router-link to="/" class="routerLinks">Home</router-link>
      <router-link to="#" class="routerLinks">About</router-link>
      <div class="projectContainer">
        <button class="toggleButton" @click="odinContentActive = !odinContentActive">
          Projects
          <i v-if="odinContentActive" class="arrow down"></i>
          <i v-if="!odinContentActive" class="arrow right"></i>
        </button>
        <div v-if="odinContentActive" class="projectContainer">
          <button class="toggleButton" @click="foundations = !foundations">
            Foundations
            <i v-if="foundations" class="arrow down"></i>
            <i v-if="!foundations" class="arrow right"></i>
          </button>
          <div class="projectContainer" v-if="foundations">
            <h3 class="courseTopics">Odin HTML & CSS basics</h3>
            <router-link to="/odinLandingPage" class="routerLinks">Odin Landing Page</router-link>
            <h3 class="courseTopics">Scrimba: first touch Javascript</h3>
            <router-link to="/scrimbaScoreBoard" class="routerLinks">Scrimba Score board</router-link>
            <router-link to="/scrimbaPasswordGenerator" class="routerLinks">Scrimba Password generator</router-link>
            <router-link to="/scrimbaUnitConversion" class="routerLinks">Scrimba Unit conversion</router-link>
            <h3 class="courseTopics">Odin Javascript Basics</h3>
            <router-link to="/odinRPS" class="routerLinks">Odin Rock Paper Scissor</router-link>
            <router-link to="/odinEtchaSketch" class="routerLinks">Odin Etch a Sketch</router-link>
            <router-link to="/odinCalculator" class="routerLinks">Odin Calculator</router-link>
          </div>
          <button class="toggleButton" @click="jsPath = !jsPath">
            Odin JS Path
            <i v-if="jsPath" class="arrow down"></i>
            <i v-if="!jsPath" class="arrow right"></i>
          </button>
          <div class="projectContainer" v-if="jsPath">
            <h3 class="courseTopics">Intermediate HTML and CSS</h3>
            <router-link to="/odinForm" class="routerLinks">Odin Form</router-link>
            <router-link to="/odinDashboard" class="routerLinks">Odin Dashboard</router-link>
            <h3 class="courseTopics">Javascript</h3>
            <router-link to="/odinLibrary" class="routerLinks">Odin Library</router-link>
            <router-link to="/odinTicTacToe" class="routerLinks">Odin Tic Tac Toe</router-link>
          </div>
        </div>
      </div>
      <div class="personalPlayGroundDropContainer">
        <button class="toggleButton" @click="personalContentActive = !personalContentActive">
          Personal Playground
          <i v-if="personalContentActive" class="arrow down"></i>
          <i v-if="!personalContentActive" class="arrow right"></i>
        </button>
        <div v-if="personalContentActive" class="projectContainer">
          <router-link to="/odinPractice" class="routerLinks">
            Odin Practice
          </router-link>
          <router-link to="/discordHelp" class="routerLinks">
            Discord Help
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiMenu} from '@mdi/js';

const navActive = ref(false)
const odinContentActive = ref(true)
const personalContentActive = ref(true)
const foundations = ref(false)
const jsPath = ref(true)
const icons = {
  menu: mdiMenu
}
</script>

<style scoped lang="css">
.toggleNavbar {
  height: auto;
  width: 50px;
}

.navMenu {
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

.navBar {
  display: flex;
  gap: 20px;
  background-color: inherit;
  flex-direction: column;
  width: 20vw;
  align-items: center;
  height: calc(100vh - var(--headerHeight));
  border-radius: 0 0 10px 10px;
}

.toggleButton {
  border: none;
  margin: 0;
  text-align: center;
  color: black;
  background-color: inherit;
  font-size: 1.4rem;
  font-weight: 700;
}

.projectContainer {
  display: flex;
  flex-direction: column;
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

.routerLinks {
  font-size: 1rem;
  color: green;
  text-decoration: none;
}

.routerLinks {
  color: black;
}

.routerLinks:hover {
  color: rgb(33, 230, 193);
}

.courseTopics {
  font-size: 1.2rem;
  margin: 0;
  text-align: center;
}

</style>

