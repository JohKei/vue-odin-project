<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <div class="actualBody">
      <div class="header">
        <div class="filterContainer">
          <div class="form-floating">
            <input type="text" class="form-control filterInput" placeholder="input" id="bookFilter">
            <label for="bookFilter">Search name of the book or author...</label>
          </div>
        </div>

        <div class="userContainer">

        </div>
        <div class="topicSelection">
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
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.title = title
    this.topic = topic
    this.cover = cover
  }
}


import NavigationBar from "@/components/NavigationBar.vue";
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

</style>
