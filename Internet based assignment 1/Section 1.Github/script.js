document.addEventListener('DOMContentLoaded', function() {
    //Function to get the current time and return a greeting
    function getGreetingMessage() {
        const date= new Date();
        const hours= date.getHours();

        let greeting='';

        if (hours <12) {
            greeting = 'Good morning';
        }   else if (hours <18) {
            greeting = 'Good afternoon';
        } else {
            greeting ='Good evening';
        }
    
    return greeting;
}

//Function to update greeting message on the page
function updateGreetingMessage() {
    const greetingMessage = document.getElementById('greeting-message');
    const message =getGreetingMessage();
    greetingMessage.textContent = `${message}, welcome to our website!`;
}

//Call updateGreetingMessage functiom when Dom content is loaded
updateGreetingMessage();
});

function validateForm() {
    //Retrieve form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    //Reset previous error messages
    document.getElementById('nameError').textContent ='';
    document.getElementById('emailError').textContent ='';
    document.getElementById('messageError').textContent ='';

    let isValid =true;

    //Valiadate name field
    if (name === '') {
        document.getElementById('nameError').textContent ='Name is required';
        isValid = false;
    }

    //Validate email field
    if (email === '') {
        document.getElementById('emailError').textContent ='Email is required';
        isValid =false;
    }

    //validate message field
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid =false;
    }
    return isValid;
}

//Function to validate email format
function isValidEmail(email) {
    const re =/\S+@\S+\.\S+/;
    return re.test(email);
}