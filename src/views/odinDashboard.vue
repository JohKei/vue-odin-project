<template>
  <NavigationBar></NavigationBar>
  <div class="rootContainer">
    <div class="headerContainer">
      <h1>Header Content</h1>
    </div>
    <div class="sidebarContainer">
      <div class="sidebarHeading">
        <img src="../assets/odin.png" alt="Dashboard Icon" class="odinIcon">
        <h2>Dashboard</h2>
      </div>
      <div class="sidebarContent">
        <div>
          <img src="../assets/home-circle-outline.svg" alt="Home Icon">
          <router-link to="/odinDashboard">Home</router-link>
        </div>
        <div>
          <img src="../assets/card-account-details-outline.svg" alt="Profile Icon">
          <router-link to="#">Profile</router-link>
        </div>
        <div>
          <img src="../assets/message.svg" alt="Messages Icon">
          <router-link to="#">Messages</router-link>
        </div>
        <div>
          <img src="../assets/clock-time-three-outline.svg" alt="History Icon">
          <router-link to="#">History</router-link>
        </div>
        <div>
          <img src="../assets/file-multiple.svg" alt="Tasks Icon">
          <router-link to="#">Tasks</router-link>
        </div>
        <div>
          <img src="../assets/account-group.svg" alt="Communities Icon">
          <router-link to="#">Communities</router-link>
        </div>
      </div>
      <div class="sidebarSettings">
        <div>
          <img src="../assets/cog.svg" alt="Settings Icon">
          <router-link to="#">Settings</router-link>
        </div>
        <div>
          <img src="../assets/chat-question.svg" alt="Support Icon">
          <router-link to="#">Content</router-link>
        </div>
        <div>
          <img src="../assets/shield-account.svg" alt="Privacy Icon">
          <router-link to="#">Privacy</router-link>
        </div>
      </div>
    </div>
    <div class="contentContainer">
      <h1>short</h1>
    </div>
  </div>
</template>


<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";


</script>

<style scoped lang="css">
.rootContainer {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 5fr;
  height: 100vh;
  width: 100vw;
  padding-top: 20px;
}
.sidebarHeading{
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 4fr;
}
.headerContainer {
  grid-row: 1/2;
  grid-column: 2/3;
  border: solid black 1px;
}

.sidebarContainer {
  grid-column: 1/2;
  grid-row: 1/3;
  border: solid black 1px;
  background-color: deepskyblue;
  display: grid;
  grid-template-rows: 1fr 3fr 5fr;
  grid-template-columns: 1fr;
}

.sidebarContainer > div > div,
.sidebarHeading{
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-items: center;
  align-items: center;
}
.sidebarContent > div > img,
.sidebarSettings > div >img,
.odinIcon{
  height: auto;
  width: 40px;
}
.sidebarContent > div > a,
.sidebarSettings > div > a,
.sidebarHeading > h2{
  margin: 0;
  padding: 0;
  justify-self: start;
  text-decoration: none;
  color: black;
}
.contentContainer {
  grid-column: 2/3;
  grid-row: 2/3;
  border: solid black 1px;
}
</style>