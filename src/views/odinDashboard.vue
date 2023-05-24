<template>
  <NavigationBar></NavigationBar>
  <div class="rootContainer">
    <div class="headerContainer">
      <div class="searchContainer">
        <button>
          <img src="../assets/magnify.svg" alt="search Button">
        </button>
        <input type="text">
      </div>
      <div class="userInfo">
        <button>
          <img src="../assets/bell-badge.svg" alt="Notification Button">
        </button>
        <button>
          <img src="../assets/account-circle.svg" alt="Profile Picture">
        </button>
        <button>
          The real Odin
        </button>
      </div>
      <div class="greeting">
        <img src="../assets/account-circle.svg" alt="Profile Picture">
        <p class="upperGreeting">Hi there,</p>
        <p class="bottomGreeting">The real Odin (@odin)</p>
      </div>
      <div class="interactions">
        <button>
          New
        </button>
        <button>
          Upload
        </button>
        <button>
          Share
        </button>
      </div>
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
}

.sidebarHeading {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 4fr;
}

.sidebarContainer {
  grid-column: 1/2;
  grid-row: 1/3;
  background-color: #FDFCDC;
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
.trendingContent > div > img,
.searchContainer > img,
img {
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
  background-color: #FED9B7;
  gap: 10px;
  padding: 10px;
}

.yourProjects {
  grid-row: 1/3;
  grid-column: 1/2;
}

.projectsContent {
  display: grid;
  grid-template-rows: repeat(3, minmax(200px, 1fr));
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 20px;
}

.projectsContent > div {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  border-left: #0081A7 7px solid;
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
  height: fit-content;
}

.trendingContent {
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
  width: 30px;
}

.upperContent {
  grid-row: 1/2;
  grid-column: 2/3;
  margin: 0;
  font-size: 0.9rem;
}

.bottomContent {
  grid-row: 2/3;
  grid-column: 2/3;
  margin: 0;
  font-size: 0.8rem;
}

.headerContainer {
  grid-row: 1/2;
  grid-column: 2/3;
  background-color: #00AFB9;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr 1fr;
}

.searchContainer {
  grid-row: 1/2;
  grid-column: 1/2;
  display: grid;
  grid-template-columns: 1fr 10fr;
  grid-template-rows: 1fr;
  align-items: center;
}

.searchContainer > button > img {
  grid-row: 1/2;
  grid-column: 1/2;
  height: auto;
  width: 35px;
  align-self: center;
  justify-self: end;
}

.searchContainer > button,
.userInfo > button {
  border: none;
  background-color: inherit;
  font-size: 1.5rem;
}

.searchContainer > input {
  grid-row: 1/2;
  grid-column: 2/3;
  border-radius: 10px;
  height: 40px;
}

.userInfo {
  grid-row: 1/2;
  grid-column: 2/3;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr) 4fr;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
}

.greeting {
  grid-row: 2/3;
  grid-column: 1/2;
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 5px;
}

.greeting > img {
  grid-column: 1/2;
  grid-row: 1/3;
  justify-self: end;
  align-self: center;
  width: 70px;
}

.upperGreeting {
  margin: 0;
  grid-row: 1/2;
  grid-column: 2/3;
  align-self: end;
}

.bottomGreeting {
  margin: 0;
  grid-row: 2/3;
  grid-column: 2/3;
  align-self: start;
  font-size: 1.5rem;

}

.interactions {
  grid-row: 2/3;
  grid-column: 2/3;
}

.interactions {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

.interactions > button {
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 25px;
  background-color: #0081A7;
  color: white;
  font-weight: 700;

}
</style>
<!--todo .contentContainer padding von 20px auf 0 gesetzt weil sonst overflow... kp warum -> muss recherchiert werden-->
<!--todo andernfalls margin von den .contentContainer > child anpassen und schaun ob das funktioniert-->
<!--todo es hat etwas mit den 100vh und 100vw im root container zutun. 100vw entfernt, 20px padding auf .contentContainer
    todo und es overflowed nurnoch vertical-->