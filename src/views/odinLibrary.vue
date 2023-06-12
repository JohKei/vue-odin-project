<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <div class="actualBody">
      <div class="header">
        <div class="filterContainer">
          <!--Todo: make search filter reactive & functional-->
          <div class="form-floating">
            <input type="text" class="form-control filterInput" placeholder="input" id="bookFilter" v-model="searchBar">
            <label for="bookFilter">Search Name of the Book, Author or Category...</label>
          </div>
        </div>
      </div>
      <div class="sideBar">
        <odin-library-side-bar
            @filterButton="filterButton"
            :side-bar-book-data="books"
        >

        </odin-library-side-bar>
      </div>
      <div class="contentContainer">
        <ul>
          <li>
            <div class="addBook" @click="newBookF()">
              <svg-icon type="mdi" :path="icons.plus" class="icon" size="100"></svg-icon>
            </div>
          </li>
          <li v-for="book in filteredBooks"
              :key="book.id"
              @click="existingBook(book)"
          >
            <img v-if="book.cover" :src="book.cover" class="bookCover" alt="Book Cover" @click="openModal">
            <!--Todo: add "no Cover yet!" banner to the book if !cover-->
            <img v-else :src="noCover" class="bookCover" alt="Book Cover" @click="openModal">
            <odin-library-modal
                v-if="isModalOpen"
                :book-from-parent="selectedBook"
                :modal-status="isModalOpen"
                @close-modal="closeModal"
                @edit-book="editBook"
                @addBook="addBook"
            >
            </odin-library-modal>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import {computed, ref} from "vue";
import {v4 as uuidv4} from 'uuid';
import {bookInterface, Book} from "@/global/global";
import OdinLibrarySideBar from "@/components/odinLibrarySideBar.vue";
import OdinLibraryModal from "@/components/odinLibraryModal.vue";
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiPlus} from '@mdi/js'

const noCover = 'https://media.discordapp.net/attachments/1059907690383544413/1116801106081747074/Johann_a_beautiful_empty_book_photorealistic_879e4af4-201a-42d4-bf9c-71f3194c7923.png?width=629&height=629'

const icons = {
  plus: mdiPlus
}

const isModalOpen = ref(false)
const openModal = () => {
  isModalOpen.value = true
}
const closeModal = () => {
  isModalOpen.value = false
}

const newBook = new Book("", null, false, "", "", "")
const newBookF = () => {
  selectedBook.value = JSON.parse(JSON.stringify(newBook))
  openModal()
}
const existingBook = (ar: bookInterface) => {
  return selectedBook.value = JSON.parse(JSON.stringify(ar))
}

const addBook = (bookFromChild: bookInterface) => {
  bookFromChild.id = uuidv4()
  books.value.push(bookFromChild)
}
const editBook = (bookFromChild: bookInterface) => {
  const bookIndex = books.value.findIndex((book) => book.id === bookFromChild.id);
  books.value.splice(bookIndex, 1, bookFromChild);
}

const selectedBook = ref({})

const searchBar = ref("")

const filteredBooks = computed((argument: string) => {
  if (!argument) {
    return books.value.filter(item =>
        item.title.toLowerCase().includes(searchBar.value.toLowerCase()) ||
        item.author.toLowerCase().includes(searchBar.value.toLowerCase()) ||
        item.topic.toLowerCase().includes(searchBar.value.toLowerCase()))
  } else if (argument) {
    return books.value.filter(item => item.topic.toLowerCase().includes(argument.toLowerCase()))
  } else return alert("Filter did not Apply!, something went wrong!")

})
const filterButton = (arg:string) =>{
  return searchBar.value = arg
}

const books = ref<bookInterface[]>([
  {
    id: uuidv4(),
    author: "50 Cent - Curtis Jackson",
    pages: 300,
    readStatus: true,
    title: "Hustle Harder, Hustle Smarter",
    topic: "Business",
    cover: "https://cdn.shopify.com/s/files/1/0285/2821/4050/products/9780062953803_8d16bd12-f578-47cb-acea-91eb0cefec7e.jpg?v=1685604249&width=350"
  },
  {
    id: uuidv4(),
    author: "Ashlee Vance",
    pages: 416,
    readStatus: true,
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    topic: "Business",
    cover: "https://m.media-amazon.com/images/P/006230125X.01._SCLZZZZZZZ_SX500_.jpg"
  },
  {
    id: uuidv4(),
    author: "Robert Greene",
    pages: 480,
    readStatus: false,
    title: "The 48 Laws of Power",
    topic: "Psychology",
    cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/GreeneRobert-48LawsOfPower.jpg"
  },
  {
    id: uuidv4(),
    author: "Matt Frisbie",
    pages: 570,
    readStatus: false,
    title: "Building Browser Extensions: Create Modern Extensions for Chrome, Safari, Firefox, and Edge",
    topic: "Education",
    cover: "https://d1b14unh5d6w7g.cloudfront.net/148428724X.01.S001.LXXXXXXX.jpg?Expires=1686418633&Signature=WUABejcqqYL5v39SEFAcRqoM4pj6ZfKsDclRDnq760JPL5n6Yl8bepCT4LrTHrtVV9wq2b8oUjIJNRBvubYxbhV2XKi59ly3M9mnV03M14V9SVU5owwFtzlSBk4S5Fxodyx-V8YP9AC9CWSDDJK6nRXK-ouIdDwVVa63wA5InI0_&Key-Pair-Id=APKAIUO27P366FGALUMQ"
  },
  {
    id: uuidv4(),
    author: "Gisela Baur",
    pages: 309,
    readStatus: true,
    title: "Warren Buffet - Der Jahrhundertkapitalist: Vom Zeitungsjungen zum Milliardär - sein Weg zum Erfolg",
    topic: "Business",
    cover: "https://m.media-amazon.com/images/I/517v3xHyK3L.jpg"
  },
  {
    id: uuidv4(),
    author: "Robert T. Klyosaki",
    pages: 336,
    readStatus: false,
    title: "Rich Dad Poor Dad: What the Rich teach their Kids about Money that the Poor and Middle Class do not!",
    topic: "Education",
    cover: "https://m.media-amazon.com/images/P/3754107437.01._SCLZZZZZZZ_SX500_.jpg"
  },
  {
    id: uuidv4(),
    author: "Napoleon Hill",
    pages: 202,
    readStatus: false,
    title: "think and grow Rich",
    topic: "Education",
    cover: "https://m.media-amazon.com/images/P/1604591870.01._SCLZZZZZZZ_SX500_.jpg"
  },
  {
    id: uuidv4(),
    author: "Salfedean Ammous",
    pages: 286,
    readStatus: false,
    title: "The Bitcoin Standart: The decentralized Alternative to Central Banking",
    topic: "Education",
    cover: "https://m.media-amazon.com/images/P/1119473861.01._SCLZZZZZZZ_SX500_.jpg"
  }
])
</script>

<style scoped lang="css">
/* style inspired by https://dribbble.com/shots/19289689-Library-app */
.body {
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  background-color: #cbb19b;
}

.actualBody {
  display: grid;
  grid-template-rows: 1fr 7fr;
  grid-template-columns: 1fr 7fr;
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
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.filterContainer {
  grid-row: 1/2;
  grid-column: 1/2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.filterInput {
  border-radius: 20px;
}

.form-floating {
  width: 60%;
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

.contentContainer > ul {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.contentContainer > ul > li {
  list-style-type: none;
  margin: 20px;
}

.addBook {
  border-radius: 20px;
  width: 170px;
  aspect-ratio: 5.25/8.25;
  background-color: #cbb19b;
  display: flex;
  align-items: center;
  justify-content: center;
  border: #bd977c 2px solid;
}

.bookCover {
  border-radius: 20px;
  width: 170px;
  aspect-ratio: 5.25/8.25;
  border: #bd977c 2px solid;
}

.bookCover:hover,
.addBook:hover {
  border: #bd977c 8px solid;
}
</style>
