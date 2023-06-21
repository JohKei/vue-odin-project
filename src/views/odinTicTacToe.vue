<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <h1>Tic Tac Toe!</h1>
    <ol>
      <li v-for="cell in board" :key="cell">
        <button @click="cell.addToken('x')">Value: {{ cell.getValue.value }}</button>
      </li>
    </ol>
    <button @click="GameBoard().logPrivate()">Log private Board</button>
    <button @click="logActualBoard(board)">Log used board</button>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import {computed, reactive, ref} from "vue";
import {Board, Cell} from '@/global/global'
// Todo: as little global scoped code as possible -> use modules & factory()
// Todo: GameBoard[] inside a GameBoard{} <- but why?
// Todo: players inside of an {}
// Todo: {} to control the gameFlow

const Player = (name: string, weapon: string) => {

  const hello = () => {
    console.log(name + ' is greeting you!')
  }
  return {name, weapon, hello}
}

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

const GameBoard = () => {
  const _cols = 3
  const _rows = 3
  const _board: Board<Cell> = []

  for (let i = 1; i <= _rows * _cols; i++) {
    _board.push(cell())
  }
  const board = () => _board


  const logPrivate = () => {
    const loggedBoard: any = []
    _board.forEach((item) => {
      loggedBoard.push(item.getValue.value)
    })
    console.table(loggedBoard)
  }


  return {logPrivate, board}
}

const logActualBoard = (arg: Board<Cell>) => {
  const loggedBoard: any = []
  arg.forEach((item) => {
    loggedBoard.push(item.getValue.value)
  })
  console.table(loggedBoard)
}

// const board:Board<Cell> = GameBoard().board()
const board = GameBoard().board()
</script>

<style scoped lang="css">
.body {
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>