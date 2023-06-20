<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <h1>Tic Tac Toe!</h1>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
// Todo: as little global scoped code as possible -> use modules & factory()
// Todo: gameBoard[] inside a gameBoard{} <- but why?
// Todo: players inside of an {}
// Todo: {} to control the gameFlow

interface Cell {
  addToken: (player: string) => void
  getValue: () => string
}
type Board<T extends Cell> = Array<T>


// cell() seems to be a factory function
const cell = ():Cell => {
  let value = ''

  const addToken = (player:string) => {
    value = player
  }

  const getValue = () => value

  return {addToken, getValue}
}

// gameBoard() seems to be a factory function
const gameBoard = () => {
  const rows = 3
  const columns = 3
  const board:Board<Cell> = []

  for (let i = 1; i <= rows * columns; i++) {
    board.push(cell())
  }
  const getBoard = () => board

  return {getBoard}
}
const board:Board<Cell> = gameBoard().getBoard()
console.log(board)
</script>

<style scoped lang="css">
.body {
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>