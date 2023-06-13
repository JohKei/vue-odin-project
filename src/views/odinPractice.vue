<template>
  <navigation-bar></navigation-bar>
  <div class="practiceBody">
    <button class="btn btn-warning" @click="isTransitionActive = !isTransitionActive">Toggle transition</button>
    <Transition name="fade">
      <div v-if="isTransitionActive">
        <h2>Hello</h2>
      </div>
    </Transition>
  </div>
</template>


<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import {ref} from "vue";


const isTransitionActive = ref(false)

</script>


<style scoped lang="css">
.practiceBody{
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>