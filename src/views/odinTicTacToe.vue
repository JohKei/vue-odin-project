<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <h1>Tic Tac Toe!</h1>
    <ol>
      <li v-for="cell in board" :key="cell">
        <button v-if="cell.getValue" @click="cell.addToken('x')">Value: {{ cell.getValue }}</button>
      </li>
    </ol>
    <button @click="logBoard">Log Board</button>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import {Cell, Board} from "@/global/global";
import {computed, reactive, ref} from "vue";
// Todo: as little global scoped code as possible -> use modules & factory()
// Todo: gameBoard[] inside a gameBoard{} <- but why?
// Todo: players inside of an {}
// Todo: {} to control the gameFlow


// cell() seems to be a factory function
const cell = (): Cell => {
  let _value = ref()

  const addToken = (player: string) => {
    _value.value = player
  }

  const getValue = computed(() => _value.value)

  return {
    addToken,
    getValue
  }
}

// gameBoard() seems to be a factory function
const gameBoard = () => {
  const _rows = 3
  const _columns = 3
  const _board: Board<Cell> = []

  for (let i = 1; i <= _rows * _columns; i++) {
    _board.push(cell())
  }
  const getBoard = () => _board

  return {getBoard}
}
const board: Board<Cell> = gameBoard().getBoard()
const logBoard = () => {
  const newBoard: string[] = []
  board.forEach((item) => {
    newBoard.push(item.getValue.value)
  })
  console.table(newBoard)
}

</script>

<style scoped lang="css">
.body {
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>