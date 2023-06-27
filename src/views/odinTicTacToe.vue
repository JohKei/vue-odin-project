<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <h1>Tic Tac Toe, aller</h1>
    <h2 v-if="whoisTurn">{{ renderWhoisTurnMessage }}</h2>
    <Teleport to="#modal">
      <start-modal
          :show-modal="modalStart"
          @close-modal="modalStart = false"
          @send-form="getForm"
          :reset-modal="resetModal"
          @un-reset-form="resetModal = false"
      >
      </start-modal>
    </Teleport>
    <Teleport to="body">
      <end-modal
          :show-modal="modalEnd"
          @close-modal="restart"
          :game-info="playerInfo"
          @close-modal&reset="restartAndReset"
      >

      </end-modal>
    </Teleport>
    <ul class="board">
      <li v-for="item in board.board" :key="item" class="cell"
          @click="item.addToken(whoisTurn)"
      >
        {{ item.getValue }}
      </li>
    </ul>
    <button @click="toggleStartModal"
            class="btn btn-info"
            v-if="!playerInfo.playerOneName"
    >
      Start game!
    </button>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import {computed, ComputedRef, reactive, ref} from "vue";
import {Board, Cell, formObject, GameInfo} from "@/global/ticTacToeTypes";
import StartModal from "@/components/odinTicTacToe/startModal.vue";
import EndModal from "@/components/odinTicTacToe/endModal.vue";
import {max} from "@popperjs/core/lib/utils/math";
// Todo: built the minimax() -> user wants to maximize -> AI wants to minimize

const cell = (): Cell => {
  const _tokenValue = ref()
  const addToken = (player: string) => {
    if (_tokenValue.value) {
      return
    } else {
      _tokenValue.value = player
      toggleWhoisTurn()
      calculateGame()
    }
  }
  const getValue = computed(() => _tokenValue.value)
  return {
    addToken,
    getValue
  }
}
const board = reactive({
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

const calculateGame = () => {
  const gameState = board.logBoard()
  miniMax(gameState)
}

const isTerminalState = (board: unknown[],): boolean => {
  const winner = ref(false)
  possibleEnds.forEach((item) => {
    if (board[item[0]] === 'X' && board[item[1]] === 'X' && board[item[2]] === 'X' ||
        board[item[0]] === 'O' && board[item[1]] === 'O' && board[item[2]] === 'O' ||
        actions(board).length === 0) {
      return winner.value = true
    }
  })
  return winner.value
}

const getValue = (board: unknown[]) => {
  const playerOne = playerInfo.playerOneSelection
  const playerTwo = playerInfo.playerTwoSelection
  possibleEnds.forEach((item) => {
    if (board[item[0]] === playerOne && board[item[1]] === playerOne && board[item[2]] === playerOne) {
      playerInfo.winner = '1'
      openEndModal()
    } else if (board[item[0]] === playerTwo && board[item[1]] === playerTwo && board[item[2]] === playerTwo) {
      playerInfo.winner = '-1'
      openEndModal()
    } else if (checkDraw(board)) {
      playerInfo.winner = '0'
      openEndModal()
    }
  })
}

const miniMax = (board: unknown[]) => {
  // Todo: either check terminalState earlier or give another argument to getValue so it does not finish the game
  if (isTerminalState(board)) {
    getValue(board)
  }
  if (player(board) == 'MAX') {
    const value = ref(-10000)
    const Actions = actions(board)
    Actions.forEach((a) => {
      // value.value = max(value.value, miniMax(result(board,a)))
    })
    return value.value

  } else if (player(board) == 'MIN') {
    const value = ref(10000)
    const Actions = actions(board)
    Actions.forEach((a) => {
      // value.value = max(value.value, miniMax(result(board,a)))
    })
    return value.value
  }

}
const player = (board: unknown[]): string => {
  const whoisTurn = ref()
  if (actions(board).length % 2 == 0) {
    return whoisTurn.value = 'MIN'
  } else if (actions(board).length % 2 != 0) {
    return whoisTurn.value = 'MAX'
  }
  return whoisTurn.value
}

const result = (board: unknown[], action: unknown[]) => {
// Todo: takes gameState & action -> returns what new GameState would be
}

const actions = (board: string[] | number[]): number[] => {
  const emptySlots: number[] = []
  for (let i = 0; i < board.length; i++) {
    if (board[i] != 'X' && board[i] != 'O') {
      emptySlots.push(i)
    }
  }
  return emptySlots
  // return board.filter(s => s != 'X' && s != 'O')
}

const modalStart = ref(false)
const modalEnd = ref(false)

const toggleStartModal = () => {
  modalStart.value = !modalStart.value
}
const resetModal = ref(false)

const openEndModal = () => {
  modalEnd.value = true
  board.createBoard()
  whoisTurn.value = playerInfo.playerOneSelection
}

const restartAndReset = () => {
  modalEnd.value = !modalEnd.value
  modalStart.value = true
  resetModal.value = true
}

const restart = () => {
  modalEnd.value = !modalEnd.value
  modalStart.value = false
}

const possibleEnds = [
  [0, 1, 2],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
]

const checkDraw = (board: unknown[]): boolean => {
  const draw = ref()
  if (actions(board).length === 0) {
    return draw.value = true
  }
  return draw.value
//
}

const whoisTurn = ref('')

const toggleWhoisTurn = () => {
  if (whoisTurn.value === 'X') {
    return whoisTurn.value = 'O'
  } else {
    return whoisTurn.value = 'X'
  }
}

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

const renderWhoisTurnMessage = computed(() => {
  const message = ref()
  if (playerInfo.playerOneSelection == whoisTurn.value) {
    return message.value = `It's your turn ${playerInfo.playerOneName}! ${playerInfo.playerOneSelection}`
  } else if (playerInfo.playerTwoSelection == whoisTurn.value) {
    return message.value = `IT's your turn ${playerInfo.playerTwoName}! ${playerInfo.playerTwoSelection}`
  }

  return message.value
})

const getForm = (arg: formObject) => {
  board.createBoard()
  whoisTurn.value = arg.playerOneSelection

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
