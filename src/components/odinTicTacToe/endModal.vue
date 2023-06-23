<template>
  <Transition name="fade">
    <div v-if="showModal" class="modalBg">
      <div class="content">
        <h2>{{ props.gameInfo }}</h2>
        <button class="btn btn-success"
                @click="emits('closeModal')"
        >
          restart Game
        </button>
      </div>
    </div>
  </Transition>


</template>


<script setup lang="ts">


// eslint-disable-next-line no-undef
const props = defineProps<{
  showModal: boolean
  gameInfo : object
}>()
// eslint-disable-next-line no-undef
const emits = defineEmits<{
  (e: 'closeModal'):void
//
}>()


</script>


<style scoped lang="css">
.modalBg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 80%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  background-color: white;
  width: 50%;
  height: 50%;
  border-radius: 20px;
}

.fade-enter-active {
  transition: all 0.25s ease;
}

.fade-leave-active {
  transition: all 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
