<template>
  <restaurant-nav :menu="true"/>
  <div class="menuBody">
    <h2>Menu</h2>
  </div>
</template>


<script setup lang="ts">
import RestaurantNav from "@/components/restaurant Page/restaurantNav.vue";


</script>


<style scoped lang="css">
.menuBody {
  padding: 50px 50px;
  height: 100vh;
  width: 100vw;
  background-color: blue;
}
</style>
