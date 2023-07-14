<template>
  <restaurant-nav :home="true"/>
  <div class="restaurantBody">
    <h2>Home</h2>
  </div>
</template>


<script setup lang="ts">
import RestaurantNav from "../components/restaurant Page/restaurantNav.vue";


</script>


<style scoped>
.restaurantBody {
  padding: 50px 50px;
  height: 100vh;
  width: 100vw;
}

</style>