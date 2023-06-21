<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <h1>Tic Tac Toe</h1>
    <ul class="board">
      <li v-for="item in gameBoard.board" :key="item" class="cell" @click="item.addToken('x')">
        {{ item.getValue }}
      </li>
    </ul>
    <button @click="gameBoard.logBoard()">Log</button>
    <button @click="gameBoard.resetBoard()">resetBoard</button>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import {computed, ComputedRef, onMounted, reactive, Ref, ref} from "vue";
import {Board, Cell} from "@/global/global";

onMounted(() => {
  gameBoard.createBoard()
})

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
    if (this.board.length) {
      this.resetBoard()
    } else {
      for (let i = 1; i <= 9; i++) {
        this.board.push(cell())
      }
    }

  },

  resetBoard: function () {
    this.board.splice(0)
    this.createBoard()
  },

  logBoard: function () {
    const loggedBoard:any = []
    this.board.forEach((item: Cell) => {
      loggedBoard.push(item.getValue)
    })
    console.table(loggedBoard)
  }
})
const player = reactive({
  playerOne: '',
  playerOneSelect: '',
  playerTwoName: '',
  playerTwoSelect: computed(() => {
    if (player.playerOne === 'x') {
      return 'y'
    } else {
      return 'x'
    }
  })

})
const gameHandler = reactive({
  possibleEnds: {},
  whoisTurn: ''
})
// Todo: Flex reverse so bottom-left = arr[0] and top-right = arr[8]
</script>

<style scoped lang="css">
.body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.board {
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.cell {
  width: 150px;
  height: 100px;
  flex-grow: 1;
  list-style-type: none;
  border: solid black;
  display: grid;
  align-items: center;
  justify-content: center;
}

</style>
