<template>
  <navigation-bar></navigation-bar>
  <div class="practiceBody">
    <div>
      <h1>People</h1>
      <input type="text" v-model="people.input">
      <button @click="people.addPerson()">Add Person</button>
      <ul>
        <li v-for="person in people.people" :key="person">
          <div>
            <span>{{ person }}</span>
            <button @click="people.removePerson(person)">x</button>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>


<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import {reactive} from "vue";

// Modular JS below
const people = reactive({
  people: ['Will', 'Laura'],
  input: '',
  addPerson: function () {
    this.people.push(this.input)
    this.input = ''
  },
  removePerson: function (who:string){
    const indexToRemove = this.people.indexOf(who)
    this.people.splice(indexToRemove,1)
  }

})


</script>


<style scoped lang="css">
.practiceBody {
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: space-evenly;
  gap: 20px;
}

</style>