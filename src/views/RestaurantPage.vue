<template>
  <restaurant-nav
      :active-view="activeView"
      @change-view="toggleView"
  />
  <div class="restaurantBody">
    <Transition>
      <restaurant-home v-if="activeView[0]" class="home"/>
    </Transition>
    <Transition>
      <restaurant-menu v-if="activeView[1]" class="menu"/>
    </Transition>
    <Transition>
      <restaurant-contact v-if="activeView[2]" class="contact"/>
    </Transition>
  </div>
</template>


<script setup lang="ts">
import RestaurantNav from "../components/restaurant Page/restaurantNav.vue";
import {ref} from "vue";
import RestaurantHome from "@/components/restaurant Page/restaurantHome.vue";
import RestaurantMenu from "@/components/restaurant Page/restaurantMenu.vue";
import RestaurantContact from "@/components/restaurant Page/restaurantContact.vue";

// HomeView == 0, menuView == 1, contactView == 2
const activeView = ref([
  true, false, false
])
const toggleView = (arg: number) => {
//   0 == HomeView
//   1 == menuView
//   2 == contactView
  for (let i = 0; i < activeView.value.length; i++) {
    activeView.value[i] = false
  }
  activeView.value[arg] = true
  console.log(activeView.value)
}


</script>


<style scoped>
.restaurantBody {
  padding: 50px 50px;
  height: 100vh;
  width: 100vw;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.home, .menu, .contact {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>