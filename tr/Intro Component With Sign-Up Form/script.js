const form = document.getElementById('form');
const username = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

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
        showError(input, `Looks like this is not an email`)
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
        showError(input,`${getFieldId(input)} cannot be empty`);
    } else if (input.value.length > max) {
        showError(input,`${getFieldId(input)} needs to be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}



// Function to get the id of the input field with proper case
function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// This is an event listener for the form on submit
form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([username,lastname,email,password]);
    checkLength(username,3,10);
    checkLength(lastname,3,10);
    checkLength(password,6,30);
    checkEmail(email);

})