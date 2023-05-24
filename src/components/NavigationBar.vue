<template>
  <div class="customMenu">
    <img src="../assets/menu.svg" alt="Menu Icon" class="menuIcon" @click="toggleNav">
    <div :class="{customNavbar: navActive, customNavbarNotActive: navNotActive}">
      <router-link to="/">Home</router-link>
      <router-link to="#">About</router-link>
      <div class="odinProjectsDropdownContainer">
        <div class="odinDropdownBtn">
          Odin Projects
          <i class="arrow down"></i>
        </div>
        <div class="odinDropContent">
          <router-link to="/odinForm">Odin Form</router-link>
          <router-link to="/odinDashboard">Odin Dashboard</router-link>
        </div>
      </div>
      <div class="personalPlayGroundDropContainer">
        <div class="personalDropBtn">
          Personal Playground
          <i class="arrow down"></i>
        </div>
        <div class="personalDropContent">
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

<!--todo Dropdown The Odin Project projects & personal playground-->
<script setup lang="ts">
import {ref} from "vue";

const navActive = ref(false)
const navNotActive = ref(true)
const toggleNav = () => {
  navActive.value = !navActive.value
  navNotActive.value = !navNotActive.value
}
</script>


<style scoped lang="css">
.menuIcon{
  height: auto;
  width: 50px;
}
.customMenu{
  position: absolute;
  background-color: rgba(255,255,255, 30%);
  border-radius: 10px;
  --headerHeight: 50px;
  height: var(--headerHeight);
}
.customNavbarNotActive {
  display: none;
  gap: 10px;
  background-color: rgba(0,0,0, 50%);
}
.customNavbar{
  display: flex;
  gap: 10px;
  background-color: rgba(0,0,0, 50%);
  flex-direction: column;
  width: 30vh;
  align-items: center;
  height: calc(100vh - var(--headerHeight));
}

.customNavbar a{
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


.odinProjectsDropdownContainer:hover .odinDropContent {
  display: flex;
  flex-direction: column;
  background-color: inherit;
  align-items: center;
}

.personalPlayGroundDropContainer:hover .personalDropContent {
  display: flex;
  flex-direction: column;
  background-color: inherit;
  align-items: center;
}
.odinProjectsDropdownContainer:hover .odinDropContent a,
.personalPlayGroundDropContainer:hover .personalDropContent a{
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

