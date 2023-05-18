<template>
    <div class="actualBody">
        <div class="leftSide">
            <div class="logoContainer">
                <img src="../assets/odin.png" alt="TOP Logo" class="odinLogo">
                <p class="slogan">The Odin Project</p>
            </div>
        </div>
        <div class="rightSide">

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

.leftSide {
    background-image: url("https://cdn.discordapp.com/attachments/1059907690383544413/1108823030534262784/Johann_photorealistic_software_developer_desksetup_347120a9-8941-4734-b08d-dabe3ab463cb.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    flex: 1 1 450px;
    height: 100vh;
    display: flex;
    align-items: center;
}

.rightSide {
    flex: 1 1 300px;
}


.logoContainer{
    height: 200px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    background-color: rgba(0, 0, 0,50%);
}

.slogan {
    font-family: Norse-Bold, serif;
    color: white;
    display: inline-block;
    margin: 0;
    font-size: 30px;
}
.odinLogo{
    height: 150px;
    width: auto;
}
</style>