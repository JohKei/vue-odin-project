<template>
  <restaurant-nav :contact="true"/>
  <div class="contactBody">
    <h2>Contact</h2>
  </div>
</template>


<script setup lang="ts">
import RestaurantNav from "@/components/restaurant Page/restaurantNav.vue";


</script>


<style scoped lang="css">
.contactBody {
  padding: 50px 50px;
  height: 100vh;
  width: 100vw;
  background-color: red;
}
</style>