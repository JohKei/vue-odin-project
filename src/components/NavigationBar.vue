<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/odinForm">Odin Form</router-link>
    </li>
    <li>
      <router-link to="/odinDashboard">Odin Dashboard</router-link>
    </li>
    <li>
      <router-link to="/discordHelp">Discord Help</router-link>
    </li>
    <li>
      <router-link to="/odinPractice">Odin Practice</router-link>
    </li>
  </ul>
</template>

<!--todo Dropdown The Odin Project projects & personal playground-->
<script setup lang="ts">

</script>


<style scoped lang="css">
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
}

li {
  display: inline;
  margin: 10px;
}


</style>

