<template>
  <restaurant-nav
  :active-view="activeView"
  @change-view="toggleView"
  />
  <div class="restaurantBody">

  </div>
</template>


<script setup lang="ts">
import RestaurantNav from "../components/restaurant Page/restaurantNav.vue";
import {ref} from "vue";

// HomeView == 0, menuView == 1, contactView == 2
const activeView = ref([
  true, false, false
])
const toggleView = (arg: number) => {
//   0 == HomeView
//   1 == menuView
//   2 == contactView
  for (let i = 0; i < activeView.value.length; i++){
    activeView.value[i] = false
  }
  activeView.value[arg] = true
  console.log(activeView.value)
}


</script>


<style scoped>
.restaurantBody {
  padding: 50px 50px;
}
</style>