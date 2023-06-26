<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <h1>Tic Tac Toe, aller</h1>
    <h2 v-if="whoisTurn">It's your turn
      <span
          v-if="whoisTurn === playerInfo.playerOneSelection"
      >
        {{ playerInfo.playerOneName }} : {{ playerInfo.playerOneSelection }}
      </span>
      <span
          v-if="whoisTurn === playerInfo.playerTwoSelection"
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
      <li v-for="item in gameBoard" :key="item" class="cell"
          @click="click(gameBoard.indexOf(item))"
      >
        {{ item }}
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
import {computed, ComputedRef, onMounted, reactive, Ref, ref} from "vue";
import {Board, Cell, formObject, GameInfo} from "@/global/ticTacToeTypes";
import StartModal from "@/components/odinTicTacToe/startModal.vue";
import EndModal from "@/components/odinTicTacToe/endModal.vue";

onMounted(async () => {
  // gameHandler.startModal = true
  // gameHandler.endModal = true
})

const click = (index:number) => {
  gameBoard.value[index] = whoisTurn.value
  toggleWhoisTurn()

  if (checkWinner(gameBoard.value, playerInfo.playerOneSelection)){
    playerInfo.winner = playerInfo.playerOneSelection
    toggleEndModal()
  }else if(checkWinner(gameBoard.value, playerInfo.playerTwoSelection)){
    playerInfo.winner = playerInfo.playerTwoSelection
    toggleEndModal()
  }

  checkDraw()
}

const modalStart = ref(false)
const modalEnd = ref(false)

const toggleStartModal = () => {
  modalStart.value = !modalStart.value
}
const resetModal = ref(false)

const toggleEndModal = () => {
  modalEnd.value = !modalEnd.value
  modalStart.value = true
  resetModal.value = true
  resetBoard()
}

const restartAndReset = () => {
  modalEnd.value = !modalEnd.value
  modalStart.value = true
  resetModal.value = true
  resetBoard()
}

const restart = () => {
  modalEnd.value = !modalEnd.value
  modalStart.value = false
}

const gameBoard: Ref<number[] | string[]> = ref([0, 1, 2, 3, 4, 5, 6, 7, 8])
const resetBoard = () =>{
  gameBoard.value = [0,1,2,3,4,5,6,7,8]
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

const checkWinner = function (board: unknown[], player: string): boolean {
  const winner = ref(false)
  possibleEnds.forEach((item) => {
    if (board[item[0]] === player && board[item[1]] === player && board[item[2]] === player) {
      return winner.value = true
    }
  })
  return winner.value
}

const emptyIndex = (board:Ref<string[]|number[]>)=>{
  return board.filter(s => s != 'X' && s != 'O')
}
const checkDraw = () => {
  if (emptyIndex(gameBoard.value).length === 0){
    playerInfo.winner = 'Draw'
    toggleEndModal()
  }
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
const getForm = (arg: formObject) => {
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
