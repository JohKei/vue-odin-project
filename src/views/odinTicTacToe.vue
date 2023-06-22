<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <h1>Tic Tac Toe, aller</h1>
    <Teleport to="#modal">
      <start-modal
          :show-modal="gameHandler.startModal"
          @close-modal="gameHandler.startModal = false"
          @send-form="getForm"
      >
      </start-modal>
    </Teleport>
    <ul class="board">
      <li v-for="item in gameBoard.board" :key="item" class="cell" @click="item.addToken(gameHandler.whoisTurn)">
        {{ item.getValue }}
      </li>
    </ul>
    <button @click="gameBoard.logBoard()">Log</button>
    <button @click="gameBoard.createBoard()">resetBoard</button>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import {computed, onMounted, reactive, ref} from "vue";
import {Board, Cell, formObject} from "@/global/ticTacToeTypes";
import StartModal from "@/components/odinTicTacToe/startModal.vue";

// Todo: @start playerOne selects either X or Y + update's whoisTurn(default ' ') = selection
// Todo: @click on Cell -> addToken(whoisTurn) -> calculateGame(PossibleSolutions[solution[]]) -> update whoisTurn = (!current)

onMounted(async () => {
  gameHandler.startModal = true
})

const cell = (): Cell => {
  const _tokenValue = ref()
  const addToken = (player: string) => {
    _tokenValue.value = player
    gameHandler.toggleWhoisTurn()
    gameHandler.calculateGame()
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
      this.board.splice(0)
    }
    for (let i = 1; i <= 9; i++) {
      this.board.push(cell())
    }

  },

  logBoard: function () {
    // Todo: typing logBoard
    const logBoard: any = []
    this.board.forEach((item: Cell) => {
      logBoard.push(item.getValue)
    })
    return logBoard
  }
})

const gameHandler = reactive({
  startModal: false,
  endModal: false,
  possibleEnds: [
    [0, 1, 2],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ],
  whoisTurn: '',

  toggleModal: function () {
    this.startModal = !this.startModal
  },

  toggleWhoisTurn: function () {
    if (this.whoisTurn === 'X') {
      this.whoisTurn = 'O'
    } else if (this.whoisTurn === 'O') {
      this.whoisTurn = 'X'
    }
  },
  board: [],
  boardObj: {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: ''
  },
  calculateGame: function () {
    this.board = gameBoard.logBoard()
    // Todo: typing!
    for (let i = 0; i < this.board.length; i++) {
      this.boardObj[i] = this.board[i]
    }
    this.checkWinner()
    this.checkDraw()
  },

  checkWinner: function ():any {
    this.possibleEnds.forEach((item) => {
      if (this.boardObj[item[0]] === 'X' && this.boardObj[item[1]] === 'X' && this.boardObj[item[2]] === 'X') {
        alert('X')
        return true
      } else if (this.boardObj[item[0]] === 'O' && this.boardObj[item[1]] === 'O' && this.boardObj[item[2]] === 'O') {
        alert('O')
        return true
      }else{
        return
      }

    })
  },
  checkDraw: function () {
    if (this.board.every((item: string) => {return item === 'X' || item === 'O'}) && !this.checkWinner()  ) {
      alert('Draw')
      return true
      //
    }
  }
})
const getForm = (form: formObject) => {
  gameBoard.createBoard()
  gameHandler.whoisTurn = form.playerOneSelection
}
</script>

<style scoped lang="css">
.body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
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
