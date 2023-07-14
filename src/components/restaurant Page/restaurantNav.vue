<template>
  <navigation-bar/>
  <div class="navBody">
    <h1>Restaurant</h1>
    <div class="navButtonGroup">
      <button class="button">
        <router-link to="/restaurantPage">
          Home
        </router-link>
      </button>
      <button class="button">
        <router-link to="/restaurantPage/Menu">
          Menu
        </router-link>
      </button>
      <button class="button">
        <router-link to="/restaurantPage/Contact">
          Contact
        </router-link>
      </button>
    </div>
    <button class="button cartButton">
      <svg-icon type="mdi" :path="mdiCartHeart" size="35"/>
    </button>
  </div>
</template>


<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiCartHeart} from '@mdi/js';
import NavigationBar from "@/components/NavigationBar.vue";

// eslint-disable-next-line no-undef
const props = defineProps<{
  // activeView: Array<boolean>
}>()

// eslint-disable-next-line no-undef
const emits = defineEmits<{
  // (e: 'changeView', arg: number): void
}>()

</script>


<style scoped>
.navBody {
  padding: 0 50px;
  position: absolute;
  display: grid;
  align-content: center;
  width: 100vw;
  z-index: 8;
  grid-template-columns: 1fr 1fr 1fr;
}

.navButtonGroup {
  display: flex;
  gap: 10px;
}

.button {
  background-color: inherit;
  border: none;
  font-size: 1.3rem;
}

.buttonActive {
  background-color: green;
}

.navButtonGroup {
  justify-self: center;
}

.cartButton {
  justify-self: end;
}
</style>