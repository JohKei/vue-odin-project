<template>
  <NavigationBar></NavigationBar>
  <div class="rootContainer">
    <div class="headerContainer">
      <h1>Header Content</h1>
    </div>
    <div class="sidebarContainer">
      <div class="sidebarHeading">
        <img src="#" alt="Dashboard Icon">
        <h2>Dashboard</h2>
      </div>
      <div class="sidebarContent">
        <div>
          <p>Image</p>
          <p>Content</p>
        </div>
        <div>
          <p>Image</p>
          <p>Content</p>
        </div>
        <div>
          <p>Image</p>
          <p>Content</p>
        </div>
        <div>
          <p>Image</p>
          <p>Content</p>
        </div>
        <div>
          <p>Image</p>
          <p>Content</p>
        </div>
        <div>
          <p>Image</p>
          <p>Content</p>
        </div>
      </div>
      <div class="sidebarSettings">
        <div>
          <p>Image</p>
          <p>Content</p>
        </div>
        <div>
          <p>Image</p>
          <p>Content</p>
        </div>
        <div>
          <p>Image</p>
          <p>Content</p>
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
  justify-items: center;
  padding-top: 10px;
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

.sidebarContainer > div > div {
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-items: center;
}

.contentContainer {
  grid-column: 2/3;
  grid-row: 2/3;
  border: solid black 1px;
}
</style>