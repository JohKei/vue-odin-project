<template>
<!--Todo: highlighting Buttons if active filter-->
  <div class="topicSelection">
    <div class="input-group mb-3">
      <button class="buttonContentColor"
              @click="emits('filterButton', '')"
      >
        all
      </button>
      <span class="input-group-text">{{bookCount("").length}}</span>
    </div>
    <div class="input-group mb-3">
      <button class="buttonContentColor"
              @click="emits('filterButton', 'Fantasy')"
      >
        <svg-icon type="mdi" :path="icons.unicornSvg"/>
        Fantasy
      </button>
      <span class="input-group-text">{{bookCount("Fantasy").length}}</span>
    </div>
    <div class="input-group mb-3">
      <button class="buttonContentColor"
              @click="emits('filterButton', 'Drama')"
      >
        <svg-icon type="mdi" :path="icons.dramaMask"/>
        Drama
      </button>
      <span class="input-group-text">{{bookCount("Drama").length}}</span>
    </div>
    <div class="input-group mb-3">
      <button class="buttonContentColor"
              @click="emits('filterButton', 'Detective')"
      >
        <svg-icon type="mdi" :path="icons.handCuffs"/>
        Detective
      </button>
      <span class="input-group-text">{{bookCount("Detective").length}}</span>
    </div>
    <div class="input-group mb-3">
      <button class="buttonContentColor"
              @click="emits('filterButton', 'Education')"
      >
        <svg-icon type="mdi" :path="icons.education"/>
        Education
      </button>
      <span class="input-group-text">{{bookCount("Education").length}}</span>
    </div>
    <div class="input-group mb-3">
      <button class="buttonContentColor"
              @click="emits('filterButton', 'Psychology')"
      >
        <svg-icon type="mdi" :path="icons.psychology"/>
        Psychology
      </button>
      <span class="input-group-text">{{bookCount("Psychology").length}}</span>
    </div>
    <div class="input-group mb-3">
      <button class="buttonContentColor"
              @click="$emit('filterButton', 'business')">
        <svg-icon type="mdi" :path="icons.business"/>
        Business
      </button>
      <span class="input-group-text">{{bookCount("Business").length}}</span>
    </div>
    <div class="input-group mb-3">
      <button class="buttonContentColor"
              @click="emits('filterButton', 'Astrology')"
      >
        <svg-icon type="mdi" :path="icons.astrology"/>
        Astrology
      </button>
      <span class="input-group-text">{{bookCount("Astrology").length}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiBrain,
  mdiBriefcaseVariant,
  mdiDramaMasks,
  mdiHandcuffs,
  mdiSchool,
  mdiUnicorn,
  mdiZodiacLibra
} from "@mdi/js";
import {bookInterface} from "@/global/global";

const icons = {
  unicornSvg: mdiUnicorn,
  dramaMask: mdiDramaMasks,
  handCuffs: mdiHandcuffs,
  education: mdiSchool,
  psychology: mdiBrain,
  business: mdiBriefcaseVariant,
  astrology: mdiZodiacLibra
}
// eslint-disable-next-line no-undef
const emits = defineEmits<{
  (e: 'filterButton', filter: string):void
}>()
// eslint-disable-next-line no-undef
const props = defineProps<{
  'sideBarBookData': [bookInterface]
}>()

const bookCount = (arg:string,) =>{
  return props.sideBarBookData.filter(item => item.topic.toLowerCase().includes(arg.toLowerCase()))
}
</script>

<style scoped lang="css">
.topicSelection {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
}

.buttonContentColor:active,
.buttonContentColor:hover {
  background-color: #cbb19b;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
}

.buttonContentColor {
  background-color: #bd977c;
  padding: 0 10px;
  flex-grow: 1;
  border: #cbb19b 1px solid;
  border-radius: 10px;
}

.input-group {
  justify-content: flex-end;
}

.input-group-text {
  background-color: #cbb19b;
  border-radius: 10px;
  padding: 3px 5px;
  border: #cbb19b 2px solid;
}
</style>
