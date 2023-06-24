<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <h1>Tic Tac Toe, aller</h1>
    <h2 v-if="gameHandler.whoisTurn">It's your turn
      <span
          v-if="gameHandler.whoisTurn === playerInfo.playerOneSelection"
      >
        {{ playerInfo.playerOneName }} : {{ playerInfo.playerOneSelection }}
      </span>
      <span
          v-if="gameHandler.whoisTurn === playerInfo.playerTwoSelection"
      >
        {{ playerInfo.playerTwoName }} {{ playerInfo.aiMode }}
        <span
            v-if="playerInfo.useAi"
        >AI
        </span>
        : {{ playerInfo.playerTwoSelection }}
      </span>
    </h2>
    <Teleport to="#modal">
      <start-modal
          :show-modal="gameHandler.startModal"
          @close-modal="gameHandler.startModal = false"
          @send-form="getForm"
          :reset-modal="resetModal"
          @un-reset-form="resetModal = false"
      >
      </start-modal>
    </Teleport>
    <Teleport to="body">
      <end-modal
          :show-modal="gameHandler.endModal"
          @close-modal="gameHandler.restart()"
          :game-info="playerInfo"
          @close-modal&reset="gameHandler.restartAndReset()"
      >

      </end-modal>
    </Teleport>
    <ul class="board">
      <li v-for="item in gameBoard.board" :key="item" class="cell" @click="item.addToken(gameHandler.whoisTurn)">
        {{ item.getValue }}
      </li>
    </ul>
    <button @click="gameHandler.toggleStartModal()"
            class="btn btn-info"
            v-if="!playerInfo.playerOneName"
    >
      Start game!
    </button>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import {computed, ComputedRef, onMounted, reactive, ref} from "vue";
import {Board, Cell, formObject, GameInfo} from "@/global/ticTacToeTypes";
import StartModal from "@/components/odinTicTacToe/startModal.vue";
import EndModal from "@/components/odinTicTacToe/endModal.vue";


onMounted(async () => {
  // gameHandler.startModal = true
  // gameHandler.endModal = true
})

const cell = (): Cell => {
  const _tokenValue = ref()
  const addToken = (player: string) => {
    if (_tokenValue.value) {
      return
    } else {
      _tokenValue.value = player
      gameHandler.toggleWhoisTurn()
      calculateGame()
    }

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
    const logBoard: ComputedRef[] = []
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

  toggleStartModal: function () {
    this.startModal = !this.startModal
  },
  toggleEndModal: function () {
    this.endModal = !this.endModal
    this.startModal = true
    resetModal.value = true
  },
  restartAndReset: function () {
    this.endModal = !this.endModal
    this.startModal = true
    resetModal.value = true
  },
  restart: function () {
    this.endModal = !this.endModal
    this.startModal = false
    gameBoard.createBoard()
  },
  toggleWhoisTurn: function () {
    if (this.whoisTurn === 'X') {
      this.whoisTurn = 'O'
    } else if (this.whoisTurn === 'O') {
      this.whoisTurn = 'X'
    }
  },


})

const playerInfo: GameInfo = reactive({
  playerOneName: '',
  playerOneSelection: '',
  playerTwoName: '',
  playerTwoSelection: '',
  useAi: false,
  aiMode: '',
  winner: '',
  gameStatus: '',
})
const resetModal = ref(false)
const getForm = (arg: formObject) => {
  gameBoard.createBoard()
  gameHandler.whoisTurn = arg.playerOneSelection

  playerInfo.playerOneName = arg.playerOneName
  playerInfo.playerOneSelection = arg.playerOneSelection
  playerInfo.playerTwoName = arg.playerTwoName
  if (arg.playerOneSelection === 'X') {
    playerInfo.playerTwoSelection = 'O'
  } else {
    playerInfo.playerTwoSelection = 'X'
  }
  playerInfo.useAi = arg.disableAi
  playerInfo.aiMode = arg.aiMode
}

const calculateGame = function () {
  const board = gameBoard.logBoard()
  checkWinner(board)
  checkDraw(board)
}

const checkWinner = function (board: unknown[]): boolean | void {
  gameHandler.possibleEnds.forEach((item) => {
    if (board[item[0]] === 'X' && board[item[1]] === 'X' && board[item[2]] === 'X') {
      // alert('X')
      playerInfo.winner = 'X'
      gameHandler.toggleEndModal()
      gameHandler.whoisTurn = playerInfo.playerOneSelection
      return true
    } else if (board[item[0]] === 'O' && board[item[1]] === 'O' && board[item[2]] === 'O') {
      // alert('O')
      playerInfo.winner = 'O'
      gameHandler.toggleEndModal()
      gameHandler.whoisTurn = playerInfo.playerOneSelection
      return true
    }
  })
}

const checkDraw=  (board: any[]) => {
  if (board.every((item: string) => {
    return item === 'X' || item === 'O'
  }) && checkWinner(board)) {
    // alert('Draw')
    playerInfo.winner = 'Draw'
    gameHandler.toggleEndModal()
    gameHandler.whoisTurn = playerInfo.playerOneSelection
    return true
    //
  }
}

const getBestMove = (board: [], maximizing: boolean, callback = () => {
//
}, depth: number) => {
//
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
