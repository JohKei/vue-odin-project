<template>
  <div class="actualBody">
    <div class="leftSide">
      <div class="logoContainer">
        <img src="../assets/odin.png" alt="TOP Logo" class="odinLogo">
        <p class="slogan">The Odin Project</p>
      </div>
    </div>
    <div class="rightSide">
      <h1 class="heading">Sign up for The Odin Project <em>today!</em></h1>
      <p>
        This is not a real online service! You know you need something like this in your life to
        help you realize your deepest dreams. Sign up <em>now</em> to get started.
      </p>
      <p>
        You know you want to.
      </p>
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
            />
            <span v-if="errorMessage">{{errorMessage}}</span>
            <label for="confirmPassword">
              confirm Password
            </label>
          </div>
        </Form>
      </div>
      <button type="submit" form="odinForm">Submit</button>
      <p>Already have an account? <a href="#">Log in</a></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Form, Field, ErrorMessage} from 'vee-validate'
import {ref} from "vue";


function onSubmit(values: object) {
  alert(JSON.stringify(values, null, 2));
}

const veeValidate = (value: string) => {
  if (!value) {
    return 'This field is required'
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return 'This field must be a valid email';
  }
  return true
}
const errorMessage = ref('')
const passwordOne = ref('')
const passwordTwo = ref('')
const checkPassword = () => {
  if (passwordOne.value != passwordTwo.value){
    errorMessage.value = 'Passwords do not Match!'
  }else if (passwordOne.value === passwordTwo.value){
    errorMessage.value = 'okay'
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
  display: flex;
  align-items: center;
}

.rightSide {
  flex: 2 1 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
}


.logoContainer {
  height: 200px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: rgba(0, 0, 0, 50%);
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
}

.form {
//margin: 5rem 0; display: flex; align-items: center; flex-wrap: wrap; gap: 10px; display: flex; justify-content: center;
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
  color: red;
  display: block;
  text-align: center;
}
</style>
<!--todo fill-in progress bar-->
<!--todo if inputs valid green border around input fields but only after input-->
<!--todo if Passwords or other Values not valid/equal -> red border-->
<!--todo Floating labels for the inputs + Styling -->