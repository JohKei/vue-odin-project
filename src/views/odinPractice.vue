<template>
  <navigation-bar></navigation-bar>
  <div class="practiceBody">
    <div>
      <button class="btn btn-warning" @click="isTransitionActive = !isTransitionActive">Toggle transition</button>
      <Transition name="fade">
        <div v-if="isTransitionActive">
          <h2>Hello</h2>
        </div>
      </Transition>
    </div>
    <div>
      <input v-model="value" type="text" />
      <span>{{ errorMessage }}</span>
    </div>


  </div>
</template>


<script setup lang="js">
import NavigationBar from "@/components/NavigationBar.vue";
import {ref} from "vue";
import { useField } from 'vee-validate';


const isTransitionActive = ref(false)

// eslint-disable-next-line no-undef
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }

  return 'This is required';
}

// make sure to wrap the name in a function to maintain its reactivity
// this way vee-validate can react to the field name changing
const { errorMessage, value } = useField(() => props.name, isRequired);

</script>


<style scoped lang="css">
.practiceBody{
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: space-evenly;
  gap: 20px;
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
input,
span {
  display: block;
  font-size: 16px;
}
</style>