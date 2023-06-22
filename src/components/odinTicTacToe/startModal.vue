<template>
  <transition name="fade">
    <div class="modalBackground" v-if="showModal">
      <Form @submit="submit"
            class="startGameModal"
      >
        <div class="form-floating mb-1">
          <Field name="userNameOne"
                 type="text"
                 class="form-control"
                 placeholder="name"
                 v-model="modalHandler.formObject.playerOneName"
          />
          <label for="userNameOne"
          >
            Your Name
          </label>
        </div>
        <div class="formCheckContainer">
          <p>choose:</p>
          <div class="form-check">
            <Field name="selection"
                   type="radio"
                   class="form-check-input"
                   placeholder="X"
                   v-model="modalHandler.formObject.playerOneSelection"
                   value="X"
            />
            <label for="selection"
                   class="form-check-label"
            >
              X
            </label>
          </div>
          <p>or</p>
          <div class="form-check">
            <Field name="selection"
                   type="radio"
                   class="form-check-input"
                   placeholder="O"
                   value="O"
                   v-model="modalHandler.formObject.playerOneSelection"
            />
            <label for="selection"
                   class="form-check-label"
            >
              O
            </label>
          </div>
        </div>
        <div class="inputContainer">
          <Field name="Enemy"
                 as="select"
                 class="form-select centerInputs"
                 v-model="modalHandler.formObject.enemy"
          >
            <option value="">Choose your Enemy</option>
            <option value="Human">other Player</option>
            <option value="AI">Ai</option>
          </Field>
        </div>
        <div class="form-floating mb-1">
          <Field type="text"
                 name="playerTwoName"
                 placeholder="playerTwoName"
                 class="form-control"
                 :disabled="modalHandler.formObject.disablePlayerTwo"
                 v-model="modalHandler.formObject.playerTwoName"
          />
          <label for="playerTwoName">
            Player 2
          </label>
        </div>
        <div class="inputContainer">
          <Field
              name="aiMode"
              as="select"
              class="form-select centerInputs"
              :disabled="modalHandler.formObject.disableAi"
              v-model="modalHandler.formObject.aiMode"
          >
            <option value="">Choose Ai mode</option>
            <option value="easy">easy</option>
            <option value="hard">unbeatable</option>
          </Field>
        </div>
        <button class="startButton btn btn-success" type="submit">Start Game</button>
      </Form>
    </div>
  </transition>
</template>


<script setup lang="ts">
import {reactive, ref, toRef, watch} from "vue";
import {Form, Field} from 'vee-validate';
import {formObject} from "@/global/tictactoeTypes";
// Todo: find when i can resetForm()
// eslint-disable-next-line no-undef
const props = defineProps<{
  showModal: boolean
}>()

// eslint-disable-next-line no-undef
const emits = defineEmits<{
  (e: 'closeModal'): void
  (e: 'sendForm', obj: formObject): void
}>()

const modalHandler = reactive({

  showModalProp: toRef(props, 'showModal'),
  showModal: ref(false),
  watchProp: function () {
    watch(this.showModalProp, () => {
      this.showModal.value = this.showModalProp.value
    })
  },

  formObject: {
    playerOneName: '',
    playerOneSelection: 'X',
    enemy: '',
    playerTwoName: '',
    disablePlayerTwo: true,
    aiMode: '',
    disableAi: true
  },

  resetFormObj: function () {
    this.formObject.playerOneName = ''
    this.formObject.playerOneSelection = 'X'
    this.formObject.enemy = ''
  },

  closeModal: function () {
    emits('closeModal')
  },
})

watch(modalHandler.formObject, () => {
  if (modalHandler.formObject.enemy === 'Human') {
    modalHandler.formObject.disablePlayerTwo = false
    modalHandler.formObject.disableAi = true
    modalHandler.formObject.aiMode = ''
  } else if (modalHandler.formObject.enemy === "AI") {
    modalHandler.formObject.disableAi = false
    modalHandler.formObject.disablePlayerTwo = true
    modalHandler.formObject.playerTwoName = ''
  } else if (modalHandler.formObject.enemy === '') {
    modalHandler.formObject.playerTwoName = ''
    modalHandler.formObject.aiMode = ''
    modalHandler.formObject.disablePlayerTwo = true
    modalHandler.formObject.disableAi = true
  }
})

const submit = () => {
  emits('sendForm', modalHandler.formObject)
  modalHandler.closeModal()
}

</script>


<style scoped lang="css">
.modalBackground {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 30%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.startGameModal {
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  z-index: 10;
  top: 0;
  left: 0;
}

.inputContainer {
  width: 100%;
}

.startButton {
  align-self: center;
  width: 100%;
}

.fade-enter-active {
  transition: all 0.25s ease;
}

.fade-leave-active {
  transition: all 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

.centerInputs {
  text-align: center;
}

.formCheckContainer {
  display: flex;
  gap: 30px;
  width: 100%;
  justify-content: center;
}

.formCheckContainer > p {
  margin: 0;
}

</style>