<template>
  <transition name="fade">
    <div class="modalBackground" v-if="showModal">
      <Form @submit="submit"
            :validation-schema="schema"
            v-slot="{errors}"
            class="startGameModal"
      >

        <div class="form-floating mb-1 errorParent">
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
          <span class="error" v-if="errors.userNameOne">{{ errors.userNameOne }}</span>

        </div>
        <div class="formCheckContainer">
          <p>choose:</p>
          <div class="form-check">
            <Field name="playerOneSelection"
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
            <Field name="playerOneSelection"
                   type="radio"
                   class="form-check-input"
                   placeholder="O"
                   value="O"
                   v-model="modalHandler.formObject.playerOneSelection"
            />
            <label for="playerOneSelection"
                   class="form-check-label"
            >
              O
            </label>
          </div>
          <span class="error">{{ errors.playerOneSelection }}</span>

        </div>
        <div class="inputContainer errorParent">
          <Field name="enemy"
                 as="select"
                 class="form-select centerInputs"
                 v-model="modalHandler.formObject.enemy"
          >
            <option value="">Choose your opponent</option>
            <option value="Human">other Player</option>
            <option value="AI">unbeatable Ai</option>
          </Field>
          <span class="error">{{ errors.enemy }}</span>

        </div>
        <div class="form-floating mb-1 errorParent">
          <Field type="text"
                 name="playerTwoName"
                 placeholder="playerTwoName"
                 class="form-control"
                 :disabled="!modalHandler.formObject.playAgainstPlayer"
                 v-model="modalHandler.formObject.playerTwoName"
          />
          <label for="playerTwoName">
            Player 2
          </label>
          <span class="error">{{ errors.playerTwoName }}</span>

        </div>
        <button class="startButton btn btn-success" type="submit">Start Game</button>
      </Form>
    </div>
  </transition>
</template>


<script setup lang="ts">
import {reactive, toRef, watch} from "vue";
import {Form, Field, configure} from 'vee-validate';
import {formObject} from "@/global/ticTacToeTypes";
import * as yup from 'yup';
// eslint-disable-next-line no-undef
const props = defineProps<{
  showModal: boolean
  resetModal: boolean
}>()

// eslint-disable-next-line no-undef
const emits = defineEmits<{
  (e: 'closeModal'): void
  (e: 'sendForm', obj: formObject): void
  (e: 'unResetForm'): void
}>()

const modalHandler = reactive({

  formObject: {
    playerOneName: '',
    playerOneSelection: 'X',
    enemy: '',
    playerTwoName: '',
    playAgainstPlayer: false,
    useAi: false
  },

  resetFormObj: function () {
    this.formObject.playerOneName = ''
    this.formObject.playerOneSelection = 'X'
    this.formObject.enemy = ''
    this.formObject.playAgainstPlayer = false
    this.formObject.useAi = false
  },

  closeModal: function () {
    emits('closeModal')
    emits('unResetForm')
  },
})

watch(modalHandler.formObject, () => {
  if (modalHandler.formObject.enemy === 'Human') {
    modalHandler.formObject.playAgainstPlayer = true
    modalHandler.formObject.useAi = false
  } else if (modalHandler.formObject.enemy === "AI") {
    modalHandler.formObject.useAi = true
    modalHandler.formObject.playAgainstPlayer = false
    modalHandler.formObject.playerTwoName = ''
  } else if (modalHandler.formObject.enemy === '') {
    modalHandler.formObject.playerTwoName = ''
    modalHandler.formObject.playAgainstPlayer = false
    modalHandler.formObject.useAi = false
  }
})

const resetModal = toRef(props, 'resetModal')
watch(resetModal, () => {
  if (resetModal.value) {
    modalHandler.resetFormObj()
  }
})

const schema = yup.object({
  userNameOne: yup.string().required('Type in your Name').min(3),
  playerOneSelection: yup.string().required().min(1),
  enemy: yup.string().required('Choose your opponent!').min(2),
  playerTwoName: yup.string()
      .when('enemy', {
        is: 'Human',
        then: (schema) => schema.required("Type in your opponent's Name!").min(3)
      }),
})
configure({
  validateOnInput: true
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

.errorParent {
  position: relative;
}

.error {
  position: absolute;
  float: right;
  width: max-content;
  top: 25%;
  left: 105%;
  padding: 0 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 70%);
  color: white;
}
</style>