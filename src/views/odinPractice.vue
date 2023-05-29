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

  constructor(name: string, level: number) {
    this.name = name
    this.level = level
  }
}


// console.log(player1)

// console.log(Object.getPrototypeOf(player1))

Hero.prototype.greet = function () {
  return `${this.name} says hello.`
}
// console.log(player1.greet())

class Warrior {
  name: string
  level: number
  weapon: string

  constructor(name: string, level: number, weapon: string) {
    this.name = name
    this.level = level
    this.weapon = weapon
  }
}

class Healer {
  name: string
  level: number
  spell: string

  constructor(name: string, level: number, spell: string) {
    this.name = name
    this.level = level
    this.spell = spell
  }
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype)
Object.setPrototypeOf(Healer.prototype, Hero.prototype)

Warrior.prototype.attack = function (){
  return `${this.name} attacks with the ${this.weapon}`
}

Healer.prototype.heal = function (){
  return `${this.name} casts ${this.spell}`
}

const hero1 = new Warrior('Bjorn', 50, 'Axe')
const hero2 = new Healer('Kanin', 22, 'cure')
console.log(hero1.attack(), hero2)

</script>
<style scoped lang="css">
</style>