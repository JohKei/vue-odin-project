<template>
  <navigation-bar/>
  <div class="navBody">
    <h1>Restaurant</h1>
    <div class="navButtonGroup">
      <button class="button">Home</button>
      <button class="button">Menu</button>
      <button class="button">Contact</button>
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

</script>


<style scoped>
.navBody {
  padding: 0 50px;
  position: absolute;
  display: flex;
  align-content: center;
  justify-content: space-between;
  width: 100vw;
}

.navButtonGroup{
  display: flex;
  gap: 10px;
}

.button{
  background-color: inherit;
  border: none;
  font-size: 1.3rem;
}
</style>