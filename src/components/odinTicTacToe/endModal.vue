<template>
  <Transition name="fade">
    <div v-if="showModal" class="modalBg">
      <div class="content">
        <div class="gradContainer">
          <h2 v-if="gameInfo.playerOneSelection == gameInfo.winner"
          >
            Congratulations {{ gameInfo.playerOneName }}! You won against
            <span v-if="gameInfo.useAi">the {{ gameInfo.aiMode }} Ai!</span>
            <span v-if="gameInfo.playerTwoName">{{ gameInfo.playerTwoName }}!</span>
          </h2>
          <h2 v-if="gameInfo.playerOneSelection != gameInfo.winner && gameInfo.winner != 'Draw'">
            Damn! you lost against
            <span v-if="gameInfo.useAi">the {{ gameInfo.aiMode }} Ai!</span>
            <span v-if="!gameInfo.useAi">{{ gameInfo.playerTwoName }}!</span>
          </h2>
          <h2 v-if="gameInfo.winner == 'Draw'">
            It's a Draw!
          </h2>
        </div>
        <div class="buttonContainer">
          <button class="btn btn-success"
                  @click="emits('closeModal')">
            restart Game with same selection
          </button>
          <button class="btn btn-warning"
                  @click="emits('closeModal&reset')"
          >
            restart Game with new selection
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>


<script setup lang="ts">
import {GameInfo} from "@/global/ticTacToeTypes";
import {toRef} from "vue";

// eslint-disable-next-line no-undef
const props = defineProps<{
  showModal: boolean
  gameInfo: GameInfo
}>()
// eslint-disable-next-line no-undef
const emits = defineEmits<{
  (e: 'closeModal'): void
  (e: 'closeModal&reset'): void
//
}>()

const gameInfo = toRef(props, 'gameInfo')
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
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;
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
.gradContainer{
  text-align: center;
}
.buttonContainer {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
