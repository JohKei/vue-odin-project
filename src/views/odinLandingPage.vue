<template>
  <navigation-bar></navigation-bar>
  <!-- header -->
  <div class="header">
    <div class="logo">Header Logo</div>
    <ul class="links">
      <li class="linkone"><a href="#" class="link">header link one</a></li>
      <li class="linktwo"><a href="#" class="link">header link two</a></li>
      <li class="linkthree"><a href="#" class="link">header link three</a></li>
    </ul>
  </div>
  <!-- contentone -->
  <div class="levelone">
    <div class="heading">
      <h2 class="heromain">This website is awesome</h2>
      <p class="herosecond">This website has some subtext that goes here under the main title. it's a smaller font and
        the color is lower contrast</p>
      <button class="signup">Sign up</button>
    </div>
    <div class="image">
      <img class="img" alt="a picture of a Programmer" src="../assets/odinLandingPage/laptop.png">
    </div>
  </div>
  <!-- contenttwo -->
  <div class="leveltwo">
    <div class="headingtwo">
      <h2>Some random information.</h2>
    </div>
    <div class="imagecontainer">
      <div class="imageone">
        <img class="img" src="../assets/odinLandingPage/programmer.png" alt="">
        <p class="imgdescription">this is some subtext under an illustration or image</p>
      </div>
      <div class="imagetwo">
        <img class="img" src="../assets/odinLandingPage/mindstructure.png" alt="">
        <p class="imgdescription">this is some subtext under an illustration or image</p>
      </div>
      <div class="imagethree">
        <img class="img" src="../assets/odinLandingPage/skills.jpg" alt="">
        <p class="imgdescription">this is some subtext under an illustration or image</p>
      </div>
      <div class="imagefour">
        <img class="img" src="../assets/odinLandingPage/skills.jpg" alt="">
        <p class="imgdescription">this is some subtext under an illustration or image</p>
      </div>
    </div>
  </div>
  <!-- contentthree -->
  <div class="levelthree">
    <div class="quote">
      <p>This is an inspiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maybe people
        will actually read it. Who knows? All i know is that it looks nice.</p>
    </div>
    <div class="quoteauthor">
      <p>-Thor, God of Thunder</p>
    </div>
  </div>
  <!-- contentfour -->
  <div class="levelfour">
    <div class="fourcontainer">
      <div class="left-content">
        <h2>Call to action! It's time!</h2>
        <p>Sign up for our product by clicking that button right over there!</p>
      </div>
      <div class="signuptwo">
        <button class="buttontwo">Sign up</button>
      </div>
    </div>
  </div>
  <!-- footer -->
  <div class="footer">
    <p class="copyright">Copyright @ The Odin Project 2023</p>
  </div>
</template>

<script setup lang="js">

import NavigationBar from "@/components/NavigationBar.vue";
</script>

<style scoped lang="css">
/* Generals */
li {
  list-style: none;
}

a {
  text-decoration: none;
}

.img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

button {
  background-color: #3882f6;
  border-radius: 6px;
  width: 100px;
  height: 25px;
  color: white;
  border: none;
}

body {
  display: flex;
  flex-direction: column;
  margin: 0;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f2937;
  padding: 10px 50px;
}

.links {
  display: flex;
  gap: 15px;
  flex-grow: 0;
}

.link {
  color: #e5e7eb;
  font-size: 18px;
}

.logo {
  font-size: 24px;
  color: #f0faf8;
  font-weight: 600;
}

/* content */
.levelone {
  display: flex;
  padding: 50px;
  background-color: #1f2937;
  align-items: flex-start;
  gap: 20px;
}

.heading {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.image {
  flex: 1;
}

.heromain {
  font-size: 48px;
  color: #f9faf8;
  margin: 0;
}

.herosecond {
  font-size: 18px;
  color: #e5f7eb;
  margin: 0;
}

/* contenttwo */
.leveltwo {
  margin: 20px 0;
}

.headingtwo {
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  color: #1f2937;
}

.imagecontainer {
  display: flex;
  padding: 0 100px;
  gap: 15px;
}

.imageone,
.imagetwo,
.imagethree,
.imagefour {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  flex: 1;
}

.imgdescription {
  align-self: center;
  text-align: center;
  font-size: 18px;
}

/* contentthree */
.levelthree {
  padding: 60px 100px;
  display: flex;
  flex-direction: column;
  background-color: #e5e7eb;
  gap: 5px;
}

.quote p,
.quoteauthor p {
  margin: 0;
  padding: 0;
}

.quote {
  font-size: 36px;
  font-style: italic;
  color: #1f2937;
}

.quoteauthor {
  align-self: flex-end;
  font-weight: 900;
  font-size: 18px;
}

/* contentfour */
.levelfour {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
}

.fourcontainer {
  display: flex;
  flex: 1;
  align-items: center;
  background-color: #3882f6;
  padding: 35px 50px;
  border-radius: 12px;
}

.left-content {
  flex: 2;
  display: flex;
  flex-direction: column;
  color: #e5e7eb;

}

.signuptwo {
  flex: 1;
  display: flex;
  justify-content: center;
}

.buttontwo {
  border: solid 1px white;
}

.left-content h2 {
  margin: 0;
  font-size: 24px;

}

.left-content p {
  margin: 0;
  font-size: 18px;
}

/* footer */
.footer {
  background-color: #1f2937;
  color: #f9faf8;
  display: flex;
  justify-content: center;
  font-size: 18px;
}
</style>