<template>
  <navigation-bar></navigation-bar>
</template>


<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";


class Book {
  title: string;
  author: string;
  pages: number;
  read: boolean;
  info(){
    return (`${this.title} by ${this.author}, ${this.pages} pages, readed it? ${this.read}`)
  }
  constructor(title:string, author:string, pages:number, read:boolean) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read

  }
}
const gta = new Book("Grand Thef Auto 6", "Rockstar Games", 6, true)
// console.log(gta.info())


console.log(Object.getPrototypeOf(gta) === Book.prototype)



</script>
<style scoped lang="css">
</style>