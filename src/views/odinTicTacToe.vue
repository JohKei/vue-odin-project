<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <h1>Tic Tac Toe!</h1>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import {Cell, Board} from "@/global/global";
// Todo: as little global scoped code as possible -> use modules & factory()
// Todo: gameBoard[] inside a gameBoard{} <- but why?
// Todo: players inside of an {}
// Todo: {} to control the gameFlow



// cell() seems to be a factory function
const cell = ():Cell => {
  let _value = ''

  const addToken = (player:string) => {
    _value = player
  }

  const getValue = () => _value

  return {addToken, getValue}
}

// gameBoard() seems to be a factory function
const gameBoard = () => {
  const _rows = 3
  const _columns = 3
  const _board:Board<Cell> = []

  for (let i = 1; i <= _rows * _columns; i++) {
    _board.push(cell())
  }
  const getBoard = () => _board

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