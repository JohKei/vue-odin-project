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
                    <label for="firstName">
                        First Name: *
                        <Field type="text" name="firstName" id="firstName"/>
                    </label>
                    <label for="lastName">
                        Last Name: *
                        <Field type="text" name="lastName" id="lastName"/>
                    </label>
                    <label for="mail">
                        Email: *
                        <Field type="email" name="mail" id="mail" :rules="veeValidate"/>
                    </label>
                    <label for="phoneNumber">
                        Phone Number:
                        <Field type="text" name="phoneNumber" id="phoneNumber" />
                    </label>
                    <label for="password">
                        Password
                        <Field type="password" name="password" id="password"/>
                    </label>
                    <label for="confirmPassword">
                        confirm Password
                        <Field type="password" name="confirmPassword" id="confirmPassword"/>
                    </label>
                </Form>
            </div>
            <button type="submit" form="odinForm">Create Account</button>
            <p>Already have an account? <a href="#">Log in</a></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import {Form, Field} from 'vee-validate'

const onSubmit = (values: object) => {
    console.log(values)
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
.formContainer{
    margin: 3rem 0;
}
.form {
    //margin: 5rem 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}
</style>
<!--todo fill-in progress bar-->
<!--todo if inputs valid green border around input fields-->
<!--todo if Passwords not equal -> red border-->