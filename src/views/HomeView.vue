<template>
  <navigation-bar></navigation-bar>
  <div class="heading">
    <h1>The Odin Project Grid practice</h1>
  </div>
  <div class="container">
    <div class="room" id="living-room">Living Room</div>
    <div class="room" id="kitchen">Kitchen</div>
    <div class="room" id="bedroom">Bedroom</div>
    <div class="room" id="bathroom">Bathroom</div>
    <div class="room" id="closet">Closet</div>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";


</script>

<style scoped lang="css">
.heading {
  margin-top: 20px;
  text-align: center;
}

.container {
  justify-content: center;
  //gap: 20px;
  margin-top: 50px;
  display: inline-grid;
  grid-template: 40px 40px 40px 40px 40px / 40px 40px 40px 40px 40px;
  background-color: lightblue;

}


.room{
border: 1px solid;
  font-size: 50%;
  text-align: center;
}
#living-room{
  grid-column-start: 1;
  grid-column-end: end;
  grid-row-start: 1;
  grid-row-end: 3;
}

#kitchen{
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 6;
}
#bathroom{
  grid-row: 3/6;
  grid-column: 3/4;
}
#bedroom{
  grid-row: 3/5;
  grid-column: 1/3;
}
#closet{
  grid-row: 5/6;
  grid-column: 1/3;
}
</style>