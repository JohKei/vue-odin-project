<template>
  <NavigationBar></NavigationBar>
  <div class="rootContainer">
    <div class="headerContainer">
      <h1>Header Content</h1>
    </div>
    <div class="sidebarContainer">
      <div class="sidebarHeading">
        <img src="../assets/odin-icon-colorful.svg" alt="Dashboard Icon" class="odinIcon">
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
      <div class="yourProjects">
        <h3>Your Projects</h3>
        <div class="projectsContent">
          <div>
            <h4>Super Cool Project</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta doloremque, eaque eligendi, ex
              hic itaque minus natus</p>
          </div>
          <div>
            <h4>Super Cool Project</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta doloremque, eaque eligendi, ex
              hic itaque minus natus</p>
          </div>
          <div>
            <h4>Super Cool Project</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta doloremque, eaque eligendi, ex
              hic itaque minus natus</p>
          </div>
          <div>
            <h4>Super Cool Project</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta doloremque, eaque eligendi, ex
              hic itaque minus natus</p>
          </div>
          <div>
            <h4>Super Cool Project</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta doloremque, eaque eligendi, ex
              hic itaque minus natus</p>
          </div>
          <div>
            <h4>Super Cool Project</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta doloremque, eaque eligendi, ex
              hic itaque minus natus</p>
          </div>
        </div>
      </div>
      <div class="announcements">
        <h3>Announcements</h3>
        <div class="announcementsContent">
          <div>
            <h4>Site Maintenance</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores assumenda consequatur</p>
          </div>
          <div>
            <h4>Site Maintenance</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores assumenda consequatur</p>
          </div>
          <div>
            <h4>Site Maintenance</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores assumenda consequatur</p>
          </div>
        </div>
      </div>
      <div class="trending">
        <h3>Trending</h3>
        <div class="trendingContent">
          <div>
            <img src="../assets/odin-icon-colorful.svg" alt="img">
            <p class="upperContent">@placeholder</p>
            <p class="bottomContent">Some short Content</p>
          </div>
          <div>
            <img src="../assets/odin-icon-colorful.svg" alt="img">
            <p class="upperContent">@placeholder</p>
            <p class="bottomContent">Some short Content</p>
          </div>
          <div>
            <img src="../assets/odin-icon-colorful.svg" alt="img">
            <p class="upperContent">@placeholder</p>
            <p class="bottomContent">Some short Content</p>
          </div>
          <div>
            <img src="../assets/odin-icon-colorful.svg" alt="img">
            <p class="upperContent">@placeholder</p>
            <p class="bottomContent">Some short Content</p>
          </div>
        </div>
      </div>
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

.sidebarHeading {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 4fr;
}

.headerContainer {
  grid-row: 1/2;
  grid-column: 2/3;
  background-color: green;
}

.sidebarContainer {
  grid-column: 1/2;
  grid-row: 1/3;
  background-color: deepskyblue;
  display: grid;
  grid-template-rows: 1fr 3fr 5fr;
  grid-template-columns: 1fr;
}

.sidebarContainer > div > div,
.sidebarHeading {
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-items: center;
  align-items: center;
}

.sidebarContent > div > img,
.sidebarSettings > div > img,
.odinIcon,
.trendingContent > div > img {
  height: auto;
  width: 40px;
}

.sidebarContent > div > a,
.sidebarSettings > div > a,
.sidebarHeading > h2 {
  margin: 0;
  padding: 0;
  justify-self: start;
  text-decoration: none;
  color: black;
}

.contentContainer {
  grid-column: 2/3;
  grid-row: 2/3;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: aquamarine;
  padding: 20px;
  gap: 20px;
}

.yourProjects {
  grid-row: 1/3;
  grid-column: 1/2;
}
.projectsContent {
  display: grid;
  grid-template-rows: repeat(3, minmax(220px, 1fr));
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 20px;
}
.projectsContent > div {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  border-left: orange 7px solid;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.announcements {
  grid-row: 1/2;
  grid-column: 2/3;
}

.announcementsContent {
  display: grid;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
}

.announcementsContent > div {
  border-bottom: solid darkgray 2px;
  margin: 5px;
  padding-bottom: 5px;
}

.announcementsContent > div:last-child {
  border: none;
  padding-bottom: 0;
}

.announcementsContent > div > h4,
.announcementsContent > div > p {
  margin: 0;
}
.trending {
  grid-row: 2/3;
  grid-column: 2/3;
  height: 400px;
}
.trendingContent{
  background-color: white;
  color: black;
  padding: 20px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr;
  gap: 20px;
  border-radius: 10px;
}
.trendingContent > div {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
}

.trendingContent > div > img {
  grid-row: 1/3;
  grid-column: 1/2;
  align-self: center;
  justify-self: center;
}

.upperContent {
  grid-row: 1/2;
  grid-column: 2/3;
  margin: 0;
}
.bottomContent{
  grid-row: 2/3;
  grid-column: 2/3;
  margin: 0;
}

</style>
