<template>
  <div>
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add another Book!</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body content">
          <div v-if="book.cover" class="coverImage" :style="{'background-image': `url(${book.cover})`}">

          </div>
          <div class="noCoverImage" v-else>
            <div class="noCover" v-if="!book.cover">
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
              <input type="number" class="form-control numberInput" id="pages" placeholder="" v-model="book.pages">
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
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse" v-model="book.readStatus">
              <label class="form-check-label" for="flexSwitchCheckReverse">Did you read the book?</label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary"
                  data-bs-dismiss=""
                  @click="mountBook"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary"
                  @click="$emit('bookData', book,)"
                  data-bs-dismiss="modal"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
//Todo: Vee-validate: required & Number inputs, prevent from submitting emit if required missing
import {onMounted, reactive, ref} from "vue";
import {Book} from '@/global/global'
import {v4 as uuidv4} from 'uuid';

// eslint-disable-next-line no-undef
const emits = defineEmits<{
  (e: 'bookData', book: Book): void
}>()

// eslint-disable-next-line no-undef
const props = defineProps<{
  currentBook: Book,
}
>()

// Todo: write function, if prop -> assign bookData from parent to book
const book: Book = reactive({
  readStatus: false,
  pages: null,
  title: "",
  id: "",
  author: "",
  topic: "",
  cover: ""
})
const logBook = () => {
  console.log(props.currentBook)
}

const mountBook = (() => {
  if (props.currentBook) {
    book.readStatus = props.currentBook.readStatus
    book.topic = props.currentBook.topic
    book.cover = props.currentBook.cover
    book.title = props.currentBook.title
    book.id = props.currentBook.id
    book.author = props.currentBook.author
    book.pages = props.currentBook.pages
  }
})
</script>


<style scoped lang="css">
.content {
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 20px;
}

.noCoverImage {
  flex-grow: 1;
  background-image: url("https://cdn.discordapp.com/attachments/1059907690383544413/1114975398338510909/Johann_beautiful_photorealistic_Book_library_c89e8773-b6c4-4ab0-9c4d-3bd97667f97a.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  aspect-ratio: 5.25/8.25;
}

.coverImage {
  flex-grow: 1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  aspect-ratio: 5.25/8.25;
}

.noCover {
  top: 2em;
  left: -5em;
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
  margin: -0.3em -5em;
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
</style>