// Get DOM elements
const menuToggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Event Listeners
// 1. Listen for click on toggle button
menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

// 2. Listen for click on open button
open.addEventListener('click', () => modal.classList.add('show-modal') );

// 3. Listen for click on close button
close.addEventListener('click', () => modal.classList.remove('show-modal') );

// 4. Listen for click outside of modal
window.addEventListener('click', e => 
    e.target === modal ? modal.classList.remove('show-modal') : false
)

// Verification

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const ConfirmPassword = document.getElementById('ConfirmPassword');

// All Functions
// Function to show error
function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Function to show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Function to check if email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( re.test(input.value.trim()) ) {
        showSuccess(input);
    } else {
        showError(input, `Please provide a valid email`)
    }
}

// Function to check if required fields have data
function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        if ( input.value === '' ) {
            console.log(input.id);
            showError(input,`${getFieldId(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Function to check length of input field
function checkLength(input, min, max) {
    if ( input.value.length < min ) {
        showError(input,`${getFieldId(input)} needs to be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input,`${getFieldId(input)} needs to be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Function to check if password and confirm password match
function checkPasswordsMatch(input1, input2) {
    if ( input1.value !== input2.value ) {
        showError(input2,"Passwords don't match")
    }
}

// Function to get the id of the input field with proper case
function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// This is an event listener for the form on submit
form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([username,email,password,ConfirmPassword]);
    checkLength(username,3,10);
    checkLength(password,6,30);
    checkEmail(email);
    checkPasswordsMatch(password,ConfirmPassword);

})
