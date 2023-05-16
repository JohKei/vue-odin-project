<template>
    <div class="actualBody">
        <h1>TOP Form Validation</h1>
        <p>Top assigment 1 <a href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation"
        >Client-side form validation</a>
        </p>
        <p>because i'm using Vue and not the plain HTML, js, css i need to get into
            <a href="https://vee-validate.logaretm.com/v4/guide/components/validation/">vee-validation library</a></p>
        <Form @submit="onsubmit">
            <label for="mail">
                I would like you to provide me with an email address:
            </label>
            <Field type="email" id="mail" name="mail" :rules="validateEmail"/>
            <ErrorMessage name="mail"/>
            <br>
            <button>Submit</button>
        </Form>
    </div>
</template>


<script lang="ts" setup>
import {Form, Field, ErrorMessage} from 'vee-validate';


const onsubmit = (values: object) => {
    console.log(values)
}
const validateEmail = (value: string) => {
    if (!value) {
        return 'This field is required';
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
    flex-direction: column;
    gap: 10px;
    margin: auto;
    align-items: center;
    width: fit-content;
}

form {
    font: 1em sans-serif;
    max-width: 320px;
}

p > label {
    display: block;
}

input[type="text"],
input[type="email"],
input[type="number"],
textarea,
fieldset {
    width: 100%;
    border: 1px solid #333;
    box-sizing: border-box;
}

input:invalid {
    box-shadow: 0 0 5px 1px red;
}

input:focus:invalid {
    box-shadow: none;
}
</style>