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
            <Field type="email" id="mail" name="mail" :rules="validateEmail" />
            <button type="submit">Submit</button>
            <br>
            <ErrorMessage name="mail" aria-live="polite"/>
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
    background-image: url("https://cdn.discordapp.com/attachments/1059907690383544413/1107726257518543039/Johann_view_from_Top_beautiful_Festival_in_the_Jungle_fotoreali_ece6d134-41ca-459d-980d-8321e040df23.png");
}

body {
    font: 1em sans-serif;
    width: 200px;
    padding: 0;
    margin: 0 auto;
}

p * {
    display: block;
}

input[type="email"] {
    appearance: none;

    width: 100%;
    border: 1px solid #333;
    margin: 0;

    font-family: inherit;
    font-size: 90%;

    box-sizing: border-box;
}

/* This is our style for the invalid fields */
input:invalid {
    border-color: #900;
    background-color: #fdd;
}

input:focus:invalid {
    outline: none;
}

/* This is the style of our error messages */
.error {
    width: 100%;
    padding: 0;

    font-size: 80%;
    color: white;
    background-color: #900;
    border-radius: 0 0 5px 5px;

    box-sizing: border-box;
}

.error.active {
    padding: 0.3em;
}
</style>