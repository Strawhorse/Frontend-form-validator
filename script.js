// assign variables

const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');



// Function to process form data
function processFormData(e) {
    e.preventDefault();
}


// enable to form submit using the submit button
form.addEventListener('submit', processFormData);

