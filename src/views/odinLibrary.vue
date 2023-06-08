<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <div class="actualBody">
      <div class="header">
        <div class="filterContainer">
          <!--Todo: make search filter reactive & functional-->
          <div class="form-floating">
            <input type="text" class="form-control filterInput" placeholder="input" id="bookFilter">
            <label for="bookFilter">Search name of the book or author...</label>
          </div>
        </div>

        <div class="userContainer">
          <!--Todo: Button styling-->
          <button type="button" data-bs-toggle="modal" data-bs-target="#bookModal">
            Add Book
          </button>
          <book-modal class="modal fade modal-xl"
                      id="bookModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                      @addBook="dataRecieve"
                      :new-book="true"
          >

          </book-modal>
        </div>
        <!--Todo: move filter buttons to the sidebar & display amount of books in each topic-->
        <div class="topicSelection">
          <!--Todo: make filter buttons functional-->
          <button class="buttonContentColor">
            all
          </button>
          <button class="buttonContentColor">
            <svg-icon type="mdi" :path="icons.unicornSvg"/>
            Fantasy
          </button>
          <button class="buttonContentColor">
            <svg-icon type="mdi" :path="icons.dramaMask"/>
            Drama
          </button>
          <button class="buttonContentColor">
            <svg-icon type="mdi" :path="icons.handCuffs"/>
            Detective
          </button>
          <button class="buttonContentColor">
            <svg-icon type="mdi" :path="icons.education"/>
            Education
          </button>
          <button class="buttonContentColor">
            <svg-icon type="mdi" :path="icons.psychology"/>
            Psychology
          </button>
          <button class="buttonContentColor">
            <svg-icon type="mdi" :path="icons.business"/>
            Business
          </button>
          <button class="buttonContentColor">
            <svg-icon type="mdi" :path="icons.astrology"/>
            Astrology
          </button>
        </div>
      </div>
      <div class="sideBar">

      </div>
      <div class="contentContainer">
        <ul>
          <li v-for="book in books"
              :key="book.id"
          >
            <img v-if="book.cover"
                 :src="book.cover"
                 class="bookCover"
                 alt="Book Cover"
                 data-bs-toggle="modal"
                 data-bs-target="#bookModalEdit"
                 @click="selectedBook = book"
            >
            <img v-else
                 :src="noCover"
                 class="bookCover"
                 alt="Book Cover"
                 data-bs-toggle="modal"
                 data-bs-target="#bookModalEdit"
                 @click="selectedBook = book"
            >

          </li>
          <book-modal class="modal fade modal-xl"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                      :current-book="selectedBook"
                      id="bookModalEdit"
                      @addBook="dataRecieve"
          >

          </book-modal>

        </ul>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiUnicorn, mdiDramaMasks, mdiHandcuffs,
  mdiSchool, mdiBrain, mdiBriefcaseVariant,
  mdiZodiacLibra,
} from '@mdi/js';
import NavigationBar from "@/components/NavigationBar.vue";
import {reactive, ref} from "vue";
import {v4 as uuidv4} from 'uuid';
import BookModal from "@/components/bookModal.vue";
import {Book} from "@/global/global";
import {array} from "yup";

// Todo Books i want to include:
// Hustle harder, hustle smarter
// Elon Musk biography
// 48 Laws of Power
// Building Browser Extensions by Matt Frisbie
// Warren Buffet Der Jahrhundert Kapitalist von Gisela Baur


const icons = {
  unicornSvg: mdiUnicorn,
  dramaMask: mdiDramaMasks,
  handCuffs: mdiHandcuffs,
  education: mdiSchool,
  psychology: mdiBrain,
  business: mdiBriefcaseVariant,
  astrology: mdiZodiacLibra
}
const noCover = 'https://cdn.discordapp.com/attachments/1059907690383544413/1114975398338510909/Johann_beautiful_photorealistic_Book_library_c89e8773-b6c4-4ab0-9c4d-3bd97667f97a.png'

const books = ref <Book[]>([
  {
    id: uuidv4(),
    author: "50 Cent",
    pages: 300,
    readStatus: false,
    title: "Hustle Harder, Hustle Smarter",
    topic: "Business",
    cover: "https://cdn.shopify.com/s/files/1/0285/2821/4050/products/9780062953803_8d16bd12-f578-47cb-acea-91eb0cefec7e.jpg?v=1685604249&width=350"
  },
  {
    id: uuidv4(),
    author: "Ashlee Vance",
    pages: 416,
    readStatus: false,
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    topic: "Business",
    cover: "https://m.media-amazon.com/images/P/006230125X.01._SCLZZZZZZZ_SX500_.jpg"
  },
])
// Todo: emit für neues buch wäre soweit funktionsfähig (in den kinderschuhen)
// Todo: dataRecieve umschreiben auf: getBookData -> if emit.value is already in books[] -> overwrite
// Todo: else push/unshift + give id
const doesBookExists = (toCheck:string) => {
  return books.value.some(item => item.id === toCheck)
}
const dataRecieve = (a: Book) => {
  if (doesBookExists(a.id)) {
    return
  } else books.value.push(a)
}

const selectedBook = ref({})
</script>

<style scoped lang="css">
.body {
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  background-color: #cbb19b;
}

.actualBody {
  display: grid;
  grid-template-rows: 1fr 7fr;
  grid-template-columns: 1fr 4fr;
  height: 100%;
  width: 100%;
  border-radius: 40px;
  background-color: #bd977c;
  gap: 1rem;
  padding: 2rem;
}

.header {
  grid-row: 1/2;
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.filterContainer {
  grid-row: 1/2;
  grid-column: 1/2;
  display: grid;
  align-self: center;
}

.filterInput {
  border-radius: 20px;
}

.form-floating {
  width: 70%;
  margin-left: auto;
}

.userContainer {
  grid-column: 2/3;
  grid-row: 1/2;
  display: grid;
  align-items: center;
  justify-items: center;
}

.topicSelection {
  grid-row: 2/3;
  grid-column: 1/3;
  display: flex;
  justify-content: space-evenly;
}

.sideBar {
  grid-row: 1/3;
  grid-column: 1/2;
}

.contentContainer {
  background-color: #dfe0e0;
  grid-row: 2/3;
  grid-column: 2/3;
  border-radius: 40px;
  overflow: scroll;
}


.buttonContentColor:active,
.buttonContentColor:hover {
  background-color: #9b7960;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
}

.buttonContentColor {
  background-color: inherit;
  border: none;
  padding: 0 10px;
}

.contentContainer > ul {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.contentContainer > ul > li {
  list-style-type: none;
  margin: 20px;
}

.bookCover {
  border-radius: 20px;
  width: 170px;
  aspect-ratio: 5.25/8.25;
}

.bookCover:hover {
  border: red 3px solid;
}
</style>
