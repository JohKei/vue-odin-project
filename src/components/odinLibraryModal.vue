<template>
  <transition name="fade">
    <div class="modal-bg" v-if="showModal">
      <div class="content">
        <div v-if="book.cover" class="coverImage"
             :style="{'background-image': `url(${props.bookFromParent.cover})`}">
        </div>
        <div class="noCoverImage" v-else :style="{'background-image': `url(${noCover})`}">
          <div class="noCover" v-if="!props.bookFromParent.cover">
            No Cover yet!
          </div>
        </div>
        <div class="rightSide">
          <button class="btn iconButton" @click="closeModal">
            <svg-icon :path="icons.close" type="mdi"></svg-icon>
          </button>
          <Form @submit="submit" class="bookForm" id="bookForm">
            <div class="inputContainer">
              <div class="form-floating">
                <Field name="author"
                       type="text"
                       class="form-control"
                       id="author"
                       placeholder=""
                       v-model="book.author"
                       :rules="validateAuthor"
                />
                <label for="author">Author*</label>
              </div>
              <ErrorMessage class="errorMessage" name="author"/>
            </div>
            <div class="inputContainer">
              <div class="form-floating">
                <Field name="title"
                       type="text"
                       class="form-control"
                       id="title"
                       placeholder=""
                       v-model="book.title"
                       :rules="validateTitle"
                />
                <label for="title">Book Title*</label>
              </div>
              <ErrorMessage name="title" class="errorMessage"></ErrorMessage>
            </div>
            <div class="inputContainer">
              <div class="form-floating">
                <Field name="pages"
                       type="number"
                       class="form-control numberInput"
                       id="pages"
                       placeholder=""
                       v-model.number="book.pages"
                       :rules="validatePages"
                />
                <label for="pages">Amount of Pages*</label>
              </div>
              <ErrorMessage name="pages" class="errorMessage"></ErrorMessage>
            </div>
            <div class="inputContainer">
              <div class="form-floating">
                <Field name="cover"
                       type="text"
                       class="form-control"
                       id="cover"
                       placeholder=""
                       v-model="book.cover"
                       :rules="validateCover"
                />
                <label for="cover">Book Cover-link</label>
              </div>
              <ErrorMessage name="cover" class="errorMessage"></ErrorMessage>
            </div>
            <div class="inputContainerTopic">
              <Field as="select"
                     name="topic"
                     class="form-select"
                     aria-label="Default select example"
                     v-model="book.topic"
                     :rules="validateTopic"
              >
                <option value="">Choose the Book topic*</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Drama">Drama</option>
                <option value="Detective">Detective</option>
                <option value="Education">Education</option>
                <option value="Psychology">Psychology</option>
                <option value="Business">Business</option>
                <option value="Astrology">Astrology</option>
              </Field>
              <ErrorMessage name="topic" class="errorMessage"></ErrorMessage>
            </div>
            <div class="form-check form-switch form-check-reverse">
              <Field name="readStatus"
                     class="form-check-input"
                     type="checkbox"
                     id="flexSwitchCheckReverse"
                     v-model="book.readStatus"
              />
              <label class="form-check-label" for="flexSwitchCheckReverse">Did you read the book?</label>
            </div>
          </Form>
          <div class="modalFooter">
            <button class="btn btn-danger" @click="deleteBook">
              <svg-icon :path="icons.delete" type="mdi"></svg-icon>
              delete
            </button>
            <button class="btn btn-success" type="submit" form="bookForm">
              <svg-icon :path="icons.save" type="mdi"></svg-icon>
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import {ref, toRef, watch} from "vue";
import {bookInterface} from "@/global/odinLibraryTypes";
import SvgIcon from '@jamescoyle/vue-icon';
import {Field, Form, ErrorMessage, configure} from 'vee-validate';
import * as yup from 'yup'
import {
  mdiClose,
  mdiTrashCanOutline,
  mdiCheckUnderline
} from '@mdi/js';

const icons = {
  close: mdiClose,
  delete: mdiTrashCanOutline,
  save: mdiCheckUnderline
}
const noCover = 'https://media.discordapp.net/attachments/1059907690383544413/1116801106081747074/Johann_a_beautiful_empty_book_photorealistic_879e4af4-201a-42d4-bf9c-71f3194c7923.png?width=629&height=629'

// eslint-disable-next-line no-undef
const props = defineProps<{
  bookFromParent: bookInterface,
  show: boolean
}>()

// eslint-disable-next-line no-undef
const emits = defineEmits<{
  (e: 'closeModal', ModalStatus: boolean): void
  (e: 'editBook', book: bookInterface): void
  (e: 'addBook', book: bookInterface): void
  (e: 'deleteBook', book: bookInterface): void
}>()

const closeModal = () => {
  showModal.value = false
  emits('closeModal', false)
}
const sendEditBook = () => {
  emits('editBook', book.value)
  closeModal()
}
const deleteBook = () => {
  emits('deleteBook', book.value)
  closeModal()
}
const sendAddBook = () => {
  emits('addBook', book.value)
  closeModal()
}
const sendBook = () => {
  if (book.value.id === undefined) {
    sendAddBook()
  } else sendEditBook()
}

const book = toRef(props, 'bookFromParent')

const showModal = ref(false)

const showModalProp = toRef(props, 'show')

watch(showModalProp, () => {
  showModal.value = showModalProp.value
})

const validateTitle = yup
    .string().required('This Field is required!')
    .min(3)
const validateAuthor = yup
    .string()
    .required('This Field is required!')
    .min(3)
const validatePages = yup
    .number()
    .positive('this field must have a positive number')
    .required('This Field is required!')
    .typeError('Pages must be a Number')
const validateCover = yup
    .string()
    .matches(/^(https?:\/\/.*\.(?:png|jpg))?$/, 'leave this Field empty or pass in a valid image-link');
const validateTopic = yup
    .string()
    .required('This Field is required!')
    .matches(/(Fantasy|Drama|Detective|Education|Psychology|Business|Astrology)/)

configure({
  validateOnInput: true
})

const submit = () => {
  sendBook()
}

</script>


<style scoped lang="css">
.modal-bg {
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

.content {
  position: relative;
  display: flex;
  gap: 20px;
  padding: 20px;
  margin: 20px;
  background: white;
  width: 80vw;
  max-width: 1100px;
  min-width: fit-content;
  min-height: fit-content;
  border-radius: 20px;
}

.noCoverImage {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  aspect-ratio: 5.25/8.25;
  flex: 1;
  min-width: 360px;
}

.coverImage {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  aspect-ratio: 5.25/8.25;
  flex: 1;
  min-width: 360px;
}

.noCover {
  top: 5em;
  left: -3em;
  color: #fff;
  display: block;
  position: absolute;
  text-align: center;
  text-decoration: none;
  letter-spacing: .06em;
  background-color: #A00;
  padding: 0.5em 5em 0.4em 5em;
  text-shadow: 0 0 0.75em #444;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
  font: bold 16px/1.2em Arial, Sans-Serif;
  -webkit-text-shadow: 0 0 0.75em #444;
  -webkit-box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
  -webkit-transform: rotate(-45deg) scale(0.75, 1);
  z-index: 10;
}

.noCover:before {
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  margin: -0.5em -3.8em;
  transform: scale(0.7);
  -webkit-transform: scale(0.7);
  border: 2px rgba(255, 255, 255, 0.7) dashed;
}

.bookForm {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.numberInput {
  -webkit-appearance: none;
  -moz-appearance: textfield;
}

.modalFooter {
  align-self: flex-end;
  display: flex;
  gap: 20px;
}

.btn {
  width: 150px;
  border-radius: 20px;
}

.iconButton {
  width: fit-content;
  height: fit-content;
  align-self: flex-end;
  padding: 0;
}

.form-check-input {
  font-size: 1.5rem;
}

.form-check {
  margin-right: 1.3rem;
}

.form-check-label {
  padding-top: 5px;
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

.rightSide {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
}

.errorMessage {
  color: red;
}

.inputContainer {
  height: 85px;
}

.inputContainerTopic {
  height: 60px;
}
</style>