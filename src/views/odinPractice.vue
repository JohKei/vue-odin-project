<template>
  <navigation-bar></navigation-bar>
  <div class="practiceBody">
    <div>
      <h1>People</h1>
      <input type="text" v-model="people.input.value">
      <button @click="people.addPerson">Add Person</button>
      <ul>
        <li v-for="person in people.array" :key="person">
          <div>
            <span>{{ person }}</span>
            <button @click="people.removePerson(person)">x</button>
          </div>
        </li>
      </ul>
    </div>
    <button @click="people.logOut()">Log</button>
    <h2>Stats: {{ stats.setPeople.value }}</h2>

  </div>
</template>


<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import {computed, reactive, ref} from "vue";

// Revealing Modular pattern
const people = (function () {
  const input = ref('')
  const _state = reactive({
    people: ['Will', 'Smith'],
  })

  const peopleArr = computed(() => _state.people)
  const addPerson = () => {
    _state.people.push(input.value)
    input.value = ''
  }
  const removePerson = (who: string) => {
    const personIndex = _state.people.indexOf(who)
    if (personIndex !== -1) {
      _state.people.splice(personIndex, 1)
    }
  }

  const log = () => {
    console.log(peopleArr.value)
  }

  return {
    array: peopleArr.value,
    logOut: log,
    addPerson,
    removePerson,
    input
  }
})()

const stats = (function () {
  const setPeople = computed(() => people.array.length)

  return {setPeople}
})()

const human = {
  species: 'Human',
  create: function (values:any){
    const instance = Object.create(this)
    Object.keys(values).forEach(function (key){
      instance[key] = values[key]
    })
    return instance
  },
}

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
