<template>
  <navigation-bar></navigation-bar>

</template>


<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import {number, string} from "yup";
import * as diagnostics_channel from "diagnostics_channel";


class Book {
  title: string;
  author: string;
  pages: number;
  read: boolean;

  info() {
    return (`${this.title} by ${this.author}, ${this.pages} pages, readed it? ${this.read}`)
  }

  constructor(title: string, author: string, pages: number, read: boolean) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read
  }
}

const gta = new Book("Grand Thef Auto 6", "Rockstar Games", 6, true)

// console.log(gta.info())


class Hero {
  name: string
  level: number
  greet() {
    return `${this.name} is greeting you!`
  }
  constructor(name: string, level: number) {
    this.name = name
    this.level = level
  }
}


// console.log(player1)

// console.log(Object.getPrototypeOf(player1))

// Hero.prototype.greet = function () {
//   return `${this.name} says hello.`
// }
// console.log(player1.greet())

class Warrior extends Hero{
  weapon: string
  constructor(name:string, level: number, weapon:string) {
    super(name, level);
    this.weapon = weapon
  }
}
class Healer extends Hero{
  spell: string
  constructor (name:string, level: number, spell:string) {
    super(name, level);
    this.spell = spell
  }
  castSpell(){
    return `${this.name} casts ${this.spell} on you!`
  }
}


Warrior.prototype.attack = function (){
  return `${this.name} attacks with his ${this.weapon}`
}

Healer.prototype.heal = function (){
  return `${this.name} casts ${this.spell}`
}

const hero1 = new Warrior('Odin', 35, 'axe')
const hero2 = new Healer('Athena', 45, 'cure')



</script>
<style scoped lang="css">
</style>