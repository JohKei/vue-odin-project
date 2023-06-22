<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <h1>Tic Tac Toe</h1>
    <Teleport to="#modal">
      <start-modal
          :show-modal="gameHandler.startModal"
          @close-modal="gameHandler.startModal = false"
          @send-form="gameHandler.getForm"
      >
      </start-modal>
    </Teleport>
    <ul class="board">
      <li v-for="item in gameBoard.board" :key="item" class="cell" @click="item.addToken('x')">
        {{ item.getValue }}
      </li>
    </ul>
    <button @click="gameHandler.toggleModal()">Log</button>
    <button @click="gameBoard.resetBoard()">resetBoard</button>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import {computed, onMounted, reactive, ref} from "vue";
import {Board, Cell ,formObject} from "@/global/ticTacToeTypes";
import StartModal from "@/components/odinTicTacToe/startModal.vue";

// Todo: @start playerOne selects either X or Y + update's whoisTurn(default ' ') = selection
// Todo: @click on Cell -> addToken(whoisTurn) -> checkWinner(PossibleSolutions[solution[]]) -> update whoisTurn = (!current)

onMounted(async () => {
  gameHandler.startModal = true
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
    // Todo: typing logBoard
    const logBoard: any = []
    this.board.forEach((item: Cell) => {
      logBoard.push(item.getValue)
    })
    console.table(logBoard)
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
  startModal: false,
  endModal: false,
  possibleEnds: {},
  whoisTurn: '',

  toggleModal: function () {
    this.startModal = !this.startModal
  },

  getForm :async function (form:formObject){
    if (form.playerOneName!=''){
      await console.log(form)
    }

  }
})
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
