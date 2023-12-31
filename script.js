// assign variables

const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


// boolean to check for form validity
let isValid = false;
let passwordsMatch = false;



function validateForm() {

    //  using the constraint API
    isValid = form.checkValidity(); 

    // style the main message at the bottom for an error
    if(!isValid) {
        message.textContent = 'Please complete all fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    // password match checker
    if(password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Passwords not matching!'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }

    // if form is valid and passwords match

    if(isValid && passwordsMatch) {
        message.textContent = 'Registered succesfully!'
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';

    }

}

// function to store the form data submitted by the form
function storeFormData() {
    const user = {
        name: form.name.value,
        telephone: form.telephone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // you'd now send to a server etc
    console.log(user);
}



// Function to process form data
function processFormData(e) {
    e.preventDefault();
    // checking validity of form data
    validateForm();

    // submit form data if valid
    if(isValid && passwordsMatch) {
        storeFormData();
    }
}


// enable to form submit using the submit button
form.addEventListener('submit',processFormData);

