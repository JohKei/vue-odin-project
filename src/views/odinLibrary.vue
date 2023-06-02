<template>
  <navigation-bar></navigation-bar>
  <div class="body">
    <div class="header">

    </div>
    <div class="sideBar">

    </div>
    <div class="contentContainer">

    </div>
  </div>
</template>


<script setup lang="ts">

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
.BackgroundColor {
  background-color: #DAAA63;
}

.contentBackgroundColor {
  background-color: #fff4e6;
}

.contentColor {
  background-color: #4b3832;
}

.buttonContentColor {
  background-color: #FCA72C;
}
</style>
