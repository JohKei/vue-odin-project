<template>
  <div class="customMenu">
    <img src="../assets/menu.svg" alt="Menu Icon" class="menuIcon" @click="navActive = !navActive">
    <div v-if="navActive" class="customNavbar">
      <router-link to="/">Home</router-link>
      <router-link to="#">About</router-link>
      <div class="odinProjectsDropdownContainer">
        <button class="odinDropdownBtn" @click="odinContentActive = !odinContentActive">
          Odin Projects
          <i class="arrow down"></i>
        </button>
        <div v-if="odinContentActive" class="odinDropContent">
          <router-link to="/odinForm">Odin Form</router-link>
          <router-link to="/odinDashboard">Odin Dashboard</router-link>
        </div>
      </div>
      <div class="personalPlayGroundDropContainer">
        <button class="personalDropBtn" @click="personalContentActive = !personalContentActive">
          Personal Playground
          <i class="arrow down"></i>
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
<!--todo just make the OdinProjects & Personal playground dropdowns always active. Just style it little bit smaller-->
</template>

<script setup lang="ts">
import {ref} from "vue";

const navActive = ref(false)
const odinContentActive = ref(false)
const personalContentActive = ref(false)


</script>

<style scoped lang="css">
.menuIcon {
  height: auto;
  width: 50px;
}

.customMenu {
  position: absolute;
  background-color: rgba(255, 255, 255, 30%);
  border-radius: 10px;
  --headerHeight: 50px;
  height: var(--headerHeight);
}

.customNavbar {
  display: flex;
  gap: 10px;
  background-color: rgba(0, 0, 0, 50%);
  flex-direction: column;
  width: 30vh;
  align-items: center;
  height: calc(100vh - var(--headerHeight));
}

.customNavbar a {
  color: white;
  text-decoration: none;
}

.odinProjectsDropdownContainer .odinDropdownBtn,
.personalPlayGroundDropContainer .personalDropBtn {
  border: none;
  background-color: inherit;
  margin: 0;
  color: white;
}

.odinDropContent,
.personalDropContent {
  display: none;
}


.odinDropContent {
  display: flex;
  flex-direction: column;
  background-color: inherit;
  align-items: center;
}

.personalDropContent {
  display: flex;
  flex-direction: column;
  background-color: inherit;
  align-items: center;
}

.odinDropContent a,
.personalDropContent a {
  color: white;
}

.arrow {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>

