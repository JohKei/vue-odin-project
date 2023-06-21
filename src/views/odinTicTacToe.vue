<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <h1>Tic Tac Toe</h1>
    <button @click="gameBoard.createBoard()">create board</button>
    <button @click="gameBoard.resetBoard()">resetBoard</button>
    <ul>
      <li v-for="item in gameBoard.board" :key="item">
        <button @click="item.addToken('x')">Value: {{ item.getValue }}</button>
      </li>
    </ul>
    <button @click="console.log(gameBoard.board)">Log</button>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import {computed, reactive, ref} from "vue";
import {Board, Cell} from "@/global/global";


const cell = (): Cell => {
  const _tokenValue = ref()
  const addToken = (player: string) => {
    _tokenValue.value = player
  }
  const getValue = computed(() => _tokenValue.value)
  return {
    addToken,
    getValue
  }
}


const gameBoard = reactive({
  board: [] as Board<Cell>,

  createBoard: function () {
    if(this.board.length){
      this.resetBoard()
    }else{
      for (let i = 1; i <= 9; i++) {
        this.board.push(cell())
      }
    }

  },

  resetBoard: function () {
    this.board.splice(0)
    this.createBoard()
  }
})

</script>

<style scoped lang="css">
.body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


</style>