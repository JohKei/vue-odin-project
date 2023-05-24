<template>
  <NavigationBar></NavigationBar>
  <div class="rootContainer">
    <div class="headerContainer">
      <h1>Header Content</h1>
    </div>
    <div class="sidebarContainer">
      <h1>short</h1>
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

.headerContainer {
  grid-row: 1/2;
  grid-column: 2/3;
  border: solid black 1px;
}
.sidebarContainer{
  grid-column: 1/2;
  grid-row: 1/3;
  border: solid black 1px;
}
.contentContainer{
  grid-column: 2/3;
  grid-row: 2/3;
  border: solid black 1px;
}
</style>