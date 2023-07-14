// assign variables

const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


// boolean to check for form validity
let isValid = false;


function validateForm() {

    //  using the constraint API
    isValid = form.checkValidity(); 

    // style the main message at the bottom for an error
    message.textContent = 'Please complete all fields';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';


}


// Function to process form data
function processFormData(e) {
    e.preventDefault();

    // checking validity of form data
    validateForm();

}


// enable to form submit using the submit button
form.addEventListener('submit',processFormData);

