<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <div class="actualBody">
      <div class="header">
        <div class="filterContainer">
          <!--Todo: such-filter reactive funktionsfähig machen-->
          <div class="form-floating">
            <input type="text" class="form-control filterInput" placeholder="input" id="bookFilter">
            <label for="bookFilter">Search name of the book or author...</label>
          </div>
        </div>

        <div class="userContainer">
          <!--Todo: Button stylen-->
          <button type="button" data-bs-toggle="modal" data-bs-target="#bookModal">
            Add Book
          </button>
          <book-modal class="modal fade modal-xl"
                      id="bookModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
          >

          </book-modal>
        </div>
        <div class="topicSelection">
          <!--Todo: filter buttons funktionsfähig machen-->
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
        <!--Todo: addBook button-->
        <ul>
          <li v-for="book in books" :key="book.id">
            <!--Todo: Das muss garkeine BS Card sein... Ich denke einfach ein Div mit dem Bild als Bg müsste ausreichen
                      Dieses div muss dann aber auch passend gestyled werden für onclick etc und ein Modal öffnen-->
            <img v-if="book.cover" :src="book.cover" class="bookCover" alt="Book Cover">
          </li>
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

class Book {
  id: string
  author: string
  pages: number
  readStatus: boolean
  title: string
  topic: string
  cover: string | null

  constructor(author: string,
              pages: number,
              readStatus: boolean,
              title: string,
              topic: string,
              cover: string
  ) {
    this.id = uuidv4()
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.title = title
    this.topic = topic
    this.cover = cover
  }
}

const books = reactive([
  {
    id: uuidv4(),
    author: "50 Cent",
    pages: 300,
    readStatus: false,
    title: "Hustle Harder, Hustle Smarter",
    topic: "Business",
    cover: "https://cdn.shopify.com/s/files/1/0285/2821/4050/products/9780062953803_8d16bd12-f578-47cb-acea-91eb0cefec7e.jpg?v=1685604249&width=350"
  }
])
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
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.contentContainer > ul > li {
  list-style-type: none;
  margin: 20px;
}

.bookCover {
  border-radius: 20px;
  width: 170px;
}
</style>
