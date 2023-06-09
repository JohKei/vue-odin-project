<template>
  <Teleport to="#bookModal">
    <div class="modal-bg" >
      <div class="content" >
        <div v-if="book.cover" class="coverImage"
             :style="{'background-image': `url(${props.bookFromParent.cover})`}">

        </div>
        <div class="noCoverImage" v-else :style="{'background-image': `url(${noCover})`}">
          <div class="noCover" v-if="!props.bookFromParent.cover">
            No Cover yet!
          </div>
        </div>
        <div class="bookForm">
          <div class="form-floating">
            <input type="text" class="form-control" id="author" placeholder="" v-model="book.author">
            <label for="author">Author</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" id="title" placeholder="" v-model="book.title">
            <label for="title">Book Title</label>
          </div>
          <div class="form-floating">
            <input type="number" class="form-control numberInput" id="pages" placeholder=""
                   v-model="book.pages">
            <label for="pages">Amount of Pages</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" id="cover" placeholder="" v-model="book.cover">
            <label for="cover">Book Cover-link</label>
          </div>
          <select class="form-select" aria-label="Default select example" v-model="book.topic">
            <option selected>Choose the Book topic</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Drama">Drama</option>
            <option value="Detective">Detective</option>
            <option value="Education">Education</option>
            <option value="Psychology">Psychology</option>
            <option value="Business">Business</option>
            <option value="Astrology">Astrology</option>
          </select>
          <div class="form-check form-switch form-check-reverse">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse"
                   v-model="book.readStatus">
            <label class="form-check-label" for="flexSwitchCheckReverse">Did you read the book?</label>
          </div>
          <div class="modalFooter">
            <button class="btn btn-danger" @click="closeModal">cancel</button>
            <button class="btn btn-success" @click="sendBook" >save</button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>


<script setup lang="ts">
import {reactive} from "vue";
import {bookInterface} from "@/global/global";
const noCover = 'https://cdn.discordapp.com/attachments/1059907690383544413/1114975398338510909/Johann_beautiful_photorealistic_Book_library_c89e8773-b6c4-4ab0-9c4d-3bd97667f97a.png'


// eslint-disable-next-line no-undef
const props = defineProps<{
  bookFromParent: bookInterface,
}>()

// eslint-disable-next-line no-undef
const emits = defineEmits<{
  (e: 'closeModal', ModalStatus: boolean): void
  (e: 'editBook', book:bookInterface):void
  (e: 'addBook', book:bookInterface):void
}>()


const closeModal = () => {
  emits('closeModal', false)
}
const sendEditBook = () => {
  emits('editBook', book)
  emits('closeModal', false)
}
const sendAddBook = () => {
  emits('addBook', book)
  emits('closeModal', false)
}
const sendBook = () => {
  if(book.id === undefined){
    console.log(book.id)
    sendAddBook()
  }else sendEditBook()
}



const book = reactive(props.bookFromParent)



</script>


<style scoped lang="css">
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  position: relative;
  display: flex;
  gap: 20px;
  padding: 30px;
  margin: 20px;
  background: white;
  width: 80vw;
  height: 50vh;
  border-radius: 20px;
}

.noCoverImage {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  aspect-ratio: 5.25/8.25;
}

.coverImage {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  aspect-ratio: 5.25/8.25;
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
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.numberInput {
  -webkit-appearance: none;
  -moz-appearance: textfield;
}
.modalFooter{
  align-self: flex-end;
  display: flex;
  gap: 20px;
}
.btn{
  width: 150px;
  border-radius: 20px;
}
</style>