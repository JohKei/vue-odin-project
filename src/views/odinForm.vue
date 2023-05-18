<template>
    <div class="actualBody">
        <div class="leftSide">
        </div>
        <div class="rightSide">
            <p class="test">I want to display that p element with the odin font</p>

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="css">
.actualBody {
    display: flex;
    flex-wrap: wrap;
}
.leftSide{
    background-image: url("https://media.discordapp.net/attachments/1059907690383544413/1107726257518543039/Johann_view_from_Top_beautiful_Festival_in_the_Jungle_fotoreali_ece6d134-41ca-459d-980d-8321e040df23.png?width=629&height=629");
    background-repeat: no-repeat;
    background-size: cover;
    flex: 1;
    height: 100vh;
}
.rightSide{
flex: 2;
}
.test{
    font-family: Norse-Bold,serif;
}
</style>