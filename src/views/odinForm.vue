<template>
  <navigation-bar></navigation-bar>
  <div class="actualBody">
    <div class="leftSide">
      <div class="logoContainer">
        <img src="../assets/odin.png" alt="TOP Logo" class="odinLogo">
        <p class="slogan">The Odin Project</p>
      </div>
      <p class="photoBy">Photo created by <a href="https://www.midjourney.com/home/" target="_blank">midjourney</a></p>
    </div>
    <div class="rightSide">
      <div class="contentContainer">
        <h1 class="heading">Sign up for The Odin Project <em>today!</em></h1>
        <p>
          Learn with The Odin Project to master web development and build impressive projects like a Sign up form. With
          its comprehensive curriculum, hands-on projects, supportive community, and job-ready skills, The Odin Project
          offers a structured and accessible learning experience that empowers you to succeed in the world of web
          development.
        </p>
        <p>
          You know you want to.
        </p>
      </div>
      <div class="formContainer">
        <Form @submit="onSubmit" class="form" id="odinForm">
          <div class="inputContainer form-floating">
            <Field type="text" name="firstName" id="firstName" class="form-control" placeholder="John"/>
            <label for="firstName">
              First Name
            </label>
          </div>
          <div class="inputContainer form-floating">
            <Field type="text" name="lastName" id="lastName" class="form-control" placeholder="Wick"/>
            <label for="lastName">
              Last Name
            </label>
          </div>
          <div class="inputContainer form-floating">
            <Field type="email" name="mail" class="form-control" id="mail"
                   :rules="veeValidate" placeholder="Email"
                   ref="email"
                   @input="checkEmail"
                   :class="{'is-valid':isValidEmail, 'is-invalid':isInvalidEmail}"
            />
            <ErrorMessage name="mail"/>
            <label for="mail">
              Email
            </label>
          </div>
          <div class="inputContainer form-floating">
            <Field type="text" name="phoneNumber" class="form-control" placeholder="Phone Number" id="phoneNumber"/>
            <label for="phoneNumber">
              Phone Number
            </label>
          </div>
          <div class="inputContainer form-floating">
            <Field type="password" name="password" class="form-control" placeholder="Password"
                   id="password"
                   v-model="passwordOne"
                   @input="checkPassword"
                   :class="{'is-valid':isValidPassword, 'is-invalid':isInvalidPassword}"
            />
            <label for="password">
              Password
            </label>
          </div>
          <div class="inputContainer form-floating">
            <Field type="password" name="confirmPassword" id="confirmPassword" class="form-control"
                   placeholder="confirm Password"
                   v-model="passwordTwo"
                   @input="checkPassword"
                   :class="{'is-valid':isValidPassword, 'is-invalid':isInvalidPassword}"
            />
            <span v-if="errorMessage">{{ errorMessage }}</span>
            <label for="confirmPassword">
              confirm Password
            </label>
          </div>
        </Form>
      </div>
      <div class="contentContainer">
        <button type="submit" form="odinForm" class="submitButton">Submit</button>
      </div>
      <p>Already have an account? <a href="#">Log in</a></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Form, Field, ErrorMessage} from 'vee-validate'
import {ref} from "vue";
import NavigationBar from "@/components/NavigationBar.vue";

function onSubmit(values: object) {
  if (checkPassword()) {
    alert(JSON.stringify(values, null, 2));
  }
}

const isValidPassword = ref(false)
const isInvalidPassword = ref(false)
const isValidEmail = ref(false)
const isInvalidEmail = ref(false)



const veeValidate = (value: string) => {
  if (!value) {
    return 'This field is required'
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    isInvalidEmail.value = true
    return 'This field must be a valid email';
  }
  isInvalidEmail.value = false
  isValidEmail.value = true
  return true
}
const errorMessage = ref('')
const passwordOne = ref('')
const passwordTwo = ref('')
const checkPassword = () => {
  if (passwordOne.value != passwordTwo.value) {
    errorMessage.value = 'Passwords do not Match!'
    isInvalidPassword.value = true
    return false
  } else if (passwordOne.value === passwordTwo.value) {
    errorMessage.value = ''
    isInvalidPassword.value = false
    isValidPassword.value = true
    return true
  }
}

const checkEmail = (value: string) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return 'This field must be a valid email';
  }
}


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
  display: grid;
}

.rightSide {
  flex: 2 1 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #dbd8e3;
}


.logoContainer {
  height: 200px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: rgba(0, 0, 0, 50%);
  align-self: center;
}

.photoBy {
  justify-self: center;
  color: white;
  align-self: end;
  background-color: rgba(0, 0, 0, 50%);
  width: 100%;
  text-align: center;
  margin: 0;
}

.slogan {
  font-family: Norse-Bold, serif;
  color: white;
  display: inline-block;
  margin: 0;
  font-size: 2rem;
}

.odinLogo {
  height: 10rem;
  width: auto;
}

.heading {
  font-size: 1.5em;
  font-family: Norse-Bold, serif;
}

.formContainer {
  margin: 3rem 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  background-color: #5c5470;
  padding: 1rem 0;
}

.form {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

input {
  margin-top: 5px;
}

label {
  display: block;
}

.inputContainer {
  height: 90px;
}

.inputContainer > span {
  color: white;
  display: block;
  text-align: center;
}

.contentContainer {
  padding: 3rem;
}

.submitButton {
  width: 200px;
  border-radius: 5px;
  background-color: #5c5470;
  color: white;
}

</style>
<!--todo set rem or em Font size for Content-->
<!--todo fill-in progress bar-->
<!--todo page jumping when on Mobile mode-->
<!--todo Mobile Mode animation to scroll down-->
