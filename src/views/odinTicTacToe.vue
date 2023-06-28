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
      <li v-for="item in gameBoard.board" :key="item" class="cell"
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
import {computed, ComputedRef, customRef, reactive, ref} from "vue";
import {Board, Cell, formObject, GameInfo} from "@/global/ticTacToeTypes";
import StartModal from "@/components/odinTicTacToe/startModal.vue";
import EndModal from "@/components/odinTicTacToe/endModal.vue";

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

const calculateGame = () => {
  const computedState = gameBoard.logBoard()
  const gameState = transferBoard(computedState)
  // console.log(gameState)
  // const testBoard = ['O', undefined, 'X', 'X', undefined, 'X', undefined, 'O', 'O']
  if (isTerminalState(gameState)) {
    getValue(gameState, true)
  } else if(whoisTurn.value == playerInfo.playerTwoSelection){
    const bestMove = miniMax(gameState)
    gameBoard.board[bestMove].addToken(playerInfo.playerTwoSelection)
  }
}

const transferBoard = (board: ComputedRef[]): (string | undefined)[] => {
  const newBoard: string[] | undefined[] = []
  board.forEach((item) => newBoard.push(item))
  return newBoard
//
}


const isTerminalState = (board: (string | undefined)[],): boolean => {
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

const getValue = (board: (string | undefined)[], isTerminal: boolean): object | void => {
  const playerOne = playerInfo.playerOneSelection
  const playerTwo = playerInfo.playerTwoSelection
  const object = {score: 0}
  possibleEnds.forEach((item) => {
    if (board[item[0]] === playerOne && board[item[1]] === playerOne && board[item[2]] === playerOne) {
      object.score = -10
      if (isTerminal) {
        playerInfo.winner = '-10'
        openEndModal()
      }
    } else if (board[item[0]] === playerTwo && board[item[1]] === playerTwo && board[item[2]] === playerTwo) {
      object.score = 10
      if (isTerminal) {
        playerInfo.winner = '10'
        openEndModal()
      }
    } else if (checkDraw(board)) {
      object.score = 0
      if (isTerminal) {
        playerInfo.winner = '0'
        openEndModal()
      }
    }
  })
  return object
}

const miniMax = (board: (string | undefined)[]) => {
// Todo: built the minimax() -> user wants to minimize -> AI wants to Maximize

  if (isTerminalState(board)) {
    return getValue(board, false).score
  }
  const availSpots = actions(board)
  const currentPlayer = ref('')

  if (playerTurn(board) == 'MIN') {
    currentPlayer.value = playerInfo.playerOneSelection
  } else if (playerTurn(board) == 'MAX') {
    currentPlayer.value = playerInfo.playerTwoSelection
  }
  const moves = []

  if (playerTurn(board) == 'MIN') {
    let bestScore = 100;
    let bestMove;
    for (let i = 0; i < availSpots.length; i++) {
      let score = Math.min(miniMax(result(board, availSpots[i], playerInfo.playerOneSelection)))
      if (score < bestScore){
        moves.push({score: score, move: availSpots[i]})
      }
    }
    moves.forEach((item) =>{
      if (item.score < bestScore){
        bestScore = item.score
        bestMove = item.move
      }
    })
    return bestMove
  } else if (playerTurn(board) == 'MAX') {
    let bestScore = -100;
    let bestMove;
    for (let i = 0; i < availSpots.length; i++) {
      let score = Math.max(miniMax(result(board, availSpots[i], playerInfo.playerTwoSelection)))
      if (score > bestScore){
        moves.push({score: score, move: availSpots[i]})
      }
    }
    moves.forEach((item) =>{
      if (item.score > bestScore){
        bestScore = item.score
        bestMove = item.move
      }
    })
    return bestMove
  }
}
const playerTurn = (board: (string | undefined)[]): string => {
  const whoisTurn = ref()
  if (actions(board).length % 2 == 0) {
    // AI = MAX
    whoisTurn.value = 'MIN'
    // console.log(actions(board), whoisTurn.value)
    return whoisTurn.value
  } else if (actions(board).length % 2 != 0) {

    // console.log(actions(board), whoisTurn.value)
    // User = MIN
    return whoisTurn.value = 'MAX'
  }
  return whoisTurn.value
}

const result = (board: (string | undefined)[], action: number, player: string) => {
  const newBoard = []
  board.forEach((item) => {
    newBoard.push(item)
  })
  newBoard[action] = player
  return newBoard
}

const actions = (board: (string | undefined)[]): number[] => {
  const emptySlots: number[] = []
  for (let i = 0; i < board.length; i++) {
    if (board[i] != 'X' && board[i] != 'O') {
      emptySlots.push(i)
    }
  }
  return emptySlots
}

const modalStart = ref(false)
const modalEnd = ref(false)

const toggleStartModal = () => {
  modalStart.value = !modalStart.value
}
const resetModal = ref(false)

const openEndModal = () => {
  modalEnd.value = true
  gameBoard.createBoard()
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

const checkDraw = (board: (string | undefined)[]): boolean => {
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
  gameBoard.createBoard()
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
