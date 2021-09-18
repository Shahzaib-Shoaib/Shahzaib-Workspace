// Get DOM Elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
//new
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const openCard = document.getElementById('open-card');



populateUI();

let ticketPrice = +movieSelect.value;

function updateSelectedCount() {
    // Get all seats that are selected
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // Get the index of selected seats from all seats
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    // Getting the count of total selected seats
    const selectedSeatsCount = selectedSeats.length;
    // Updating the UI to show number of selected seats
    count.innerText = selectedSeatsCount;
    // Updating the UI to show total price of tickets
    total.innerText = selectedSeatsCount * ticketPrice;
    // Saving to Local Storage
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
}

// Save the movie data to local storage
function setMovieData(movieIndex, moviePrice) {
    // Saving selected movie index to local storage
    localStorage.setItem('selectedMovieIndex', movieIndex);
    // Saving selected movie ticket price to local storage
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Get data from localstorage and populate UI
function populateUI() {
    // Get selected seats from local storage and convert from string to array
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    // check if selected seats is not null and not empty, and if true, then loop through all seats and mark matching seats with class selected
    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    };
    // Get the selected movie index from local storage
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    // Using the value from local storage, select the movie on page load
    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// Event Listeneres
// 1. Event listener for container to check for click on seats
container.addEventListener('click', e => {
    // Check if target of click is a seat that's not occupied
    if(e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        // Add or Remove class selected from seat
        e.target.classList.toggle('selected');
        // Refreshing counts
        updateSelectedCount();
    }
})

// 2. Event listener for movie select
movieSelect.addEventListener('change', e => {
    // Setting movie price and converting to number
    ticketPrice = +e.target.value;
    // Calling function to set data in local storage
    setMovieData(e.target.selectedIndex, e.target.value);
    // Updating counts
    updateSelectedCount();
})

// Initial count and total price
updateSelectedCount();

//new
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


//new card
// 2. Listen for click on open button
openCard.addEventListener('click', () => card.classList.add('show-card') );

// 3. Listen for click on close button
close-card.addEventListener('click', () => card.classList.remove('show-card') );

// 4. Listen for click outside of modal
window.addEventListener('click', e => 
    e.target === modal ? modal.classList.remove('show-card') : false
)